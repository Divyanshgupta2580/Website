"use client";

import React, { useState, useEffect, useRef, useId } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, AlertTriangle, Loader2, Layers, Building2, Home } from "lucide-react";
import Button from "@/components/ui/Button";

type DivisionType = "materials" | "construction" | "real-estate";

// 1. Materials Supply Options
const materialCategories = [
  "Cement",
  "Bricks & Blocks",
  "Sand & Aggregates",
  "Shuttering Plywood",
  "Hardware",
  "Cover Blocks",
  "Tarpaulins & Site Essentials",
  "Other",
];

const materialBudgetRanges = [
  "Under ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹10,00,000",
  "Above ₹10,00,000",
];

// 2. Construction Options (Realistic low-rise scope)
const constructionProjectTypes = [
  "Residential Building",
  "Independent House",
  "Apartment / Small Residential Building",
  "Shop / Commercial Space",
  "Office",
  "Renovation / Extension",
  "Other",
];

const constructionFloorOptions = [
  "Ground Floor",
  "Ground + 1",
  "Ground + 2",
  "Ground + 3",
  "Ground + 4",
  "Ground + 5",
  "Other",
];

const constructionStages = [
  "Planning / Concept Stage",
  "Architectural Drawings Ready",
  "Land Acquired / Site Ready",
  "Renovation / Extension Ready",
  "Ready to Start Immediately",
  "Other",
];

const constructionBudgetRanges = [
  "Under ₹ 25 Lakhs",
  "₹ 25 Lakhs – ₹ 50 Lakhs",
  "₹ 50 Lakhs – ₹ 1 Crore",
  "₹ 1 Crore – ₹ 3 Crores",
  "Above ₹ 3 Crores",
];

// 3. Real Estate Options (Realistic sales & assistance)
const realEstateEnquiryTypes = [
  "Looking to Buy",
  "Looking to Sell",
  "Property Enquiry",
  "Property Marketing",
  "Buyer-Seller Assistance",
  "Other",
];

const realEstatePropertyTypes = [
  "Residential Property",
  "Apartment",
  "Independent House",
  "Plot / Land",
  "Commercial Property",
  "Shop / Office",
  "Other",
];

const realEstateBudgetRanges = [
  "Under ₹ 50 Lakhs",
  "₹ 50 Lakhs – ₹ 1 Crore",
  "₹ 1 Crore – ₹ 2.5 Crores",
  "₹ 2.5 Crores – ₹ 5 Crores",
  "Above ₹ 5 Crores",
];

const realEstatePurposes = [
  "Personal Use",
  "Investment",
  "Sale",
  "Purchase",
  "Rental / Lease",
  "Other",
];

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const paramDiv = searchParams.get("division");
  const initialDivision: DivisionType =
    paramDiv === "construction"
      ? "construction"
      : paramDiv === "real-estate"
      ? "real-estate"
      : "materials";

  const [division, setDivision] = useState<DivisionType>(initialDivision);

  // Common Client Contact Information (shared & retained across division switches)
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
  });

  // Division-Specific Form States
  const [materialsState, setMaterialsState] = useState({
    category: materialCategories[0],
    location: "",
    budgetRange: "",
    notes: "",
  });

  const [constructionState, setConstructionState] = useState({
    projectType: constructionProjectTypes[0],
    location: "",
    floors: "",
    approximateArea: "",
    stage: "",
    budgetRange: "",
    notes: "",
  });

  const [realEstateState, setRealEstateState] = useState({
    enquiryType: realEstateEnquiryTypes[0],
    propertyType: realEstatePropertyTypes[0],
    location: "",
    budgetRange: "",
    purpose: "",
    notes: "",
  });

  // Anti-spam honeypot (must remain empty)
  const [botField, setBotField] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const tabRefs = useRef<Record<DivisionType, HTMLButtonElement | null>>({
    materials: null,
    construction: null,
    "real-estate": null,
  });

  const baseId = useId();

  // Prefill from URL query params (e.g. from /materials/[category])
  useEffect(() => {
    const productParam = searchParams.get("product");
    const categoryParam = searchParams.get("category");

    if (productParam) {
      setMaterialsState((prev) => ({
        ...prev,
        notes: prev.notes ? prev.notes : `Inquiry for product: ${productParam}`,
      }));
    } else if (categoryParam) {
      const matched = materialCategories.find(
        (c) => c.toLowerCase().includes(categoryParam.toLowerCase()) || categoryParam.toLowerCase().includes(c.toLowerCase())
      );
      if (matched) {
        setMaterialsState((prev) => ({
          ...prev,
          category: matched,
        }));
      } else {
        setMaterialsState((prev) => ({
          ...prev,
          notes: prev.notes ? prev.notes : `Inquiry for material category: ${categoryParam}`,
        }));
      }
    }
  }, [searchParams]);

  // Division switch handler (clears errors and keeps contact info)
  const handleDivisionChange = (newDivision: DivisionType) => {
    setDivision(newDivision);
    setErrors({});
    setSubmitStatus("idle");
  };

  // Keyboard navigation for division tabs
  const handleTabKeyDown = (e: React.KeyboardEvent, currentDivision: DivisionType) => {
    const order: DivisionType[] = ["materials", "construction", "real-estate"];
    const currentIndex = order.indexOf(currentDivision);

    let targetDivision: DivisionType | null = null;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      targetDivision = order[(currentIndex + 1) % order.length];
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      targetDivision = order[(currentIndex - 1 + order.length) % order.length];
    } else if (e.key === "Home") {
      e.preventDefault();
      targetDivision = order[0];
    } else if (e.key === "End") {
      e.preventDefault();
      targetDivision = order[order.length - 1];
    }

    if (targetDivision) {
      handleDivisionChange(targetDivision);
      tabRefs.current[targetDivision]?.focus();
    }
  };

  // Dynamic validation: strictly validates only active division fields
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Common Contact Fields
    if (!contactInfo.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (contactInfo.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!contactInfo.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (contactInfo.phone.trim().length < 8) {
      newErrors.phone = "Enter a valid phone number (min. 8 digits)";
    }

    if (!contactInfo.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    // Active Division Fields
    if (division === "materials") {
      if (!materialsState.location.trim()) {
        newErrors.location = "Delivery location / city is required";
      }
      if (!materialsState.category.trim()) {
        newErrors.category = "Please select a material category";
      }
    } else if (division === "construction") {
      if (!constructionState.location.trim()) {
        newErrors.location = "Project location / city is required";
      }
      if (!constructionState.projectType.trim()) {
        newErrors.projectType = "Please select a project type";
      }
    } else if (division === "real-estate") {
      if (!realEstateState.location.trim()) {
        newErrors.location = "Preferred location / area is required";
      }
      if (!realEstateState.enquiryType.trim()) {
        newErrors.enquiryType = "Please select an enquiry type";
      }
      if (!realEstateState.propertyType.trim()) {
        newErrors.propertyType = "Please select a property type";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    let payload: Record<string, unknown>;

    if (division === "materials") {
      payload = {
        name: contactInfo.name.trim(),
        phone: contactInfo.phone.trim(),
        email: contactInfo.email.trim(),
        company: contactInfo.company.trim(),
        enquiryType: "materials",
        projectType: materialsState.category,
        location: materialsState.location.trim(),
        budgetRange: materialsState.budgetRange.trim(),
        message: materialsState.notes.trim(),
        bot_field: botField,
      };
    } else if (division === "construction") {
      payload = {
        name: contactInfo.name.trim(),
        phone: contactInfo.phone.trim(),
        email: contactInfo.email.trim(),
        company: contactInfo.company.trim(),
        enquiryType: "construction",
        projectType: constructionState.projectType,
        location: constructionState.location.trim(),
        floors: constructionState.floors,
        approximateArea: constructionState.approximateArea.trim(),
        stage: constructionState.stage,
        budgetRange: constructionState.budgetRange,
        message: constructionState.notes.trim(),
        bot_field: botField,
      };
    } else {
      payload = {
        name: contactInfo.name.trim(),
        phone: contactInfo.phone.trim(),
        email: contactInfo.email.trim(),
        company: contactInfo.company.trim(),
        enquiryType: "real-estate",
        projectType: realEstateState.propertyType,
        realEstateEnquiryType: realEstateState.enquiryType,
        location: realEstateState.location.trim(),
        budgetRange: realEstateState.budgetRange,
        purpose: realEstateState.purpose,
        message: realEstateState.notes.trim(),
        bot_field: botField,
      };
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFeedbackMessage(result.message);
        setReferenceId(result.referenceId || "");

        // Reset inputs while preserving active division
        setContactInfo({ name: "", phone: "", email: "", company: "" });
        setMaterialsState({
          category: materialCategories[0],
          location: "",
          budgetRange: "",
          notes: "",
        });
        setConstructionState({
          projectType: constructionProjectTypes[0],
          location: "",
          floors: "",
          approximateArea: "",
          stage: "",
          budgetRange: "",
          notes: "",
        });
        setRealEstateState({
          enquiryType: realEstateEnquiryTypes[0],
          propertyType: realEstatePropertyTypes[0],
          location: "",
          budgetRange: "",
          purpose: "",
          notes: "",
        });
        setBotField("");
        setErrors({});
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(result.error || "Quotation request could not be processed. Please check inputs.");
      }
    } catch {
      setSubmitStatus("error");
      setFeedbackMessage("Network failure. Please try again or contact our direct helpline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 lg:p-10">
      {/* STEP 1: SELECT DIVISION */}
      <div className="mb-8 pb-6 border-b border-[#2A3035]">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-[1px] bg-[#B89A63]" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63]">
            Step 1: Select Division
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Enquiry Division"
          className="grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {/* Button 1: Materials Supply */}
          <button
            ref={(el) => {
              tabRefs.current.materials = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-materials`}
            aria-selected={division === "materials"}
            aria-controls={`${baseId}-panel-materials`}
            tabIndex={division === "materials" ? 0 : -1}
            onClick={() => handleDivisionChange("materials")}
            onKeyDown={(e) => handleTabKeyDown(e, "materials")}
            className={`p-3.5 text-left border transition-all focus:outline-none focus:ring-1 focus:ring-[#B89A63] ${
              division === "materials"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC] shadow-sm"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC] hover:border-[#3D4750]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Layers className={`w-3.5 h-3.5 ${division === "materials" ? "text-[#B89A63]" : "text-[#667582]"}`} />
              <span className="text-xs font-semibold block uppercase tracking-wider">
                1. Materials Supply
              </span>
            </div>
            <span className="text-[11px] text-[#A7ADB3] block pl-5.5">
              Cement, Bricks, Aggregates &amp; Supplies
            </span>
          </button>

          {/* Button 2: Construction */}
          <button
            ref={(el) => {
              tabRefs.current.construction = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-construction`}
            aria-selected={division === "construction"}
            aria-controls={`${baseId}-panel-construction`}
            tabIndex={division === "construction" ? 0 : -1}
            onClick={() => handleDivisionChange("construction")}
            onKeyDown={(e) => handleTabKeyDown(e, "construction")}
            className={`p-3.5 text-left border transition-all focus:outline-none focus:ring-1 focus:ring-[#B89A63] ${
              division === "construction"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC] shadow-sm"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC] hover:border-[#3D4750]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Building2 className={`w-3.5 h-3.5 ${division === "construction" ? "text-[#B89A63]" : "text-[#667582]"}`} />
              <span className="text-xs font-semibold block uppercase tracking-wider">
                2. Construction
              </span>
            </div>
            <span className="text-[11px] text-[#A7ADB3] block pl-5.5">
              Residential &amp; Low-Rise (Up to 4–5 Floors)
            </span>
          </button>

          {/* Button 3: Real Estate */}
          <button
            ref={(el) => {
              tabRefs.current["real-estate"] = el;
            }}
            type="button"
            role="tab"
            id={`${baseId}-tab-real-estate`}
            aria-selected={division === "real-estate"}
            aria-controls={`${baseId}-panel-real-estate`}
            tabIndex={division === "real-estate" ? 0 : -1}
            onClick={() => handleDivisionChange("real-estate")}
            onKeyDown={(e) => handleTabKeyDown(e, "real-estate")}
            className={`p-3.5 text-left border transition-all focus:outline-none focus:ring-1 focus:ring-[#B89A63] ${
              division === "real-estate"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC] shadow-sm"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC] hover:border-[#3D4750]"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Home className={`w-3.5 h-3.5 ${division === "real-estate" ? "text-[#B89A63]" : "text-[#667582]"}`} />
              <span className="text-xs font-semibold block uppercase tracking-wider">
                3. Real Estate
              </span>
            </div>
            <span className="text-[11px] text-[#A7ADB3] block pl-5.5">
              Property Sales &amp; Assistance
            </span>
          </button>
        </div>
      </div>

      {/* Submission Success Message */}
      {submitStatus === "success" && (
        <div className="mb-8 p-5 bg-[#B89A63]/10 border border-[#B89A63] text-[#F3F1EC]">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#B89A63] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold mb-1">
                Quotation Request Received
              </h4>
              <p className="text-xs text-[#A7ADB3] leading-relaxed">
                {feedbackMessage}
              </p>
              {referenceId && (
                <div className="mt-3">
                  <span className="px-2.5 py-1 text-[11px] font-mono bg-[#0B0D0F] text-[#B89A63] border border-[#2A3035]">
                    ESTIMATION TRACKING CODE: {referenceId}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Submission Error Message */}
      {submitStatus === "error" && (
        <div className="mb-8 p-4 bg-red-950/40 border border-red-800 text-red-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs">{feedbackMessage}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Anti-spam Honeypot Field */}
        <input
          type="text"
          name="bot_field"
          value={botField}
          onChange={(e) => setBotField(e.target.value)}
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* CLIENT CONTACT INFORMATION (Common to all divisions, preserved across switches) */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
            Client Contact Information
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="q-contact-name" className="text-xs text-[#A7ADB3] block mb-1">
                Full Name <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-contact-name"
                type="text"
                required
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "q-name-err" : undefined}
                maxLength={100}
                value={contactInfo.name}
                onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                placeholder="e.g. Vikramaditya Singh"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.name ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.name && (
                <p id="q-name-err" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-contact-phone" className="text-xs text-[#A7ADB3] block mb-1">
                Phone Number <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-contact-phone"
                type="tel"
                required
                aria-required="true"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "q-phone-err" : undefined}
                maxLength={20}
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.phone ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.phone && (
                <p id="q-phone-err" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-contact-email" className="text-xs text-[#A7ADB3] block mb-1">
                Email Address <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-contact-email"
                type="email"
                required
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "q-email-err" : undefined}
                maxLength={120}
                value={contactInfo.email}
                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                placeholder="name@example.com"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.email ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.email && (
                <p id="q-email-err" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-contact-company" className="text-xs text-[#A7ADB3] block mb-1">
                Company / Organization
              </label>
              <input
                id="q-contact-company"
                type="text"
                maxLength={120}
                value={contactInfo.company}
                onChange={(e) => setContactInfo({ ...contactInfo, company: e.target.value })}
                placeholder="e.g. Acme Builders / Private Owner"
                className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
              />
            </div>
          </div>
        </div>

        {/* DIVISION 1: MATERIALS SUPPLY PANEL */}
        {division === "materials" && (
          <div
            role="tabpanel"
            id={`${baseId}-panel-materials`}
            aria-labelledby={`${baseId}-tab-materials`}
            className="space-y-6 pt-2"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                Material Supply Details
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Material Category */}
                <div>
                  <label htmlFor="q-mat-category" className="text-xs text-[#A7ADB3] block mb-1">
                    Material Category <span className="text-[#B89A63]">*</span>
                  </label>
                  <select
                    id="q-mat-category"
                    required
                    aria-required="true"
                    value={materialsState.category}
                    onChange={(e) => setMaterialsState({ ...materialsState, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    {materialCategories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.category}
                    </p>
                  )}
                </div>

                {/* Project Location / City */}
                <div>
                  <label htmlFor="q-mat-location" className="text-xs text-[#A7ADB3] block mb-1">
                    Project Location / City <span className="text-[#B89A63]">*</span>
                  </label>
                  <input
                    id="q-mat-location"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.location ? "true" : "false"}
                    aria-describedby={errors.location ? "q-mat-loc-err" : undefined}
                    maxLength={100}
                    value={materialsState.location}
                    onChange={(e) => setMaterialsState({ ...materialsState, location: e.target.value })}
                    placeholder="e.g. Gurugram, Sector 48"
                    className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                      errors.location ? "border-red-500" : "border-[#2A3035]"
                    }`}
                  />
                  {errors.location && (
                    <p id="q-mat-loc-err" role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Target Budget Range */}
                <div>
                  <label htmlFor="q-mat-budget" className="text-xs text-[#A7ADB3] block mb-1">
                    Target Budget Range
                  </label>
                  <select
                    id="q-mat-budget"
                    value={materialsState.budgetRange}
                    onChange={(e) => setMaterialsState({ ...materialsState, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    <option value="">Select Range</option>
                    {materialBudgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Requirements / Notes */}
            <div>
              <label htmlFor="q-mat-notes" className="text-xs text-[#A7ADB3] block mb-1">
                Additional Requirements / Notes
              </label>
              <textarea
                id="q-mat-notes"
                rows={4}
                maxLength={3000}
                value={materialsState.notes}
                onChange={(e) => setMaterialsState({ ...materialsState, notes: e.target.value })}
                placeholder="Please specify the materials required, grades, quantities if known, preferred brands, delivery requirements, or any other details..."
                className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
              />
            </div>
          </div>
        )}

        {/* DIVISION 2: CONSTRUCTION PANEL */}
        {division === "construction" && (
          <div
            role="tabpanel"
            id={`${baseId}-panel-construction`}
            aria-labelledby={`${baseId}-tab-construction`}
            className="space-y-6 pt-2"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                Construction Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Project Type * */}
                <div>
                  <label htmlFor="q-con-type" className="text-xs text-[#A7ADB3] block mb-1">
                    Project Type <span className="text-[#B89A63]">*</span>
                  </label>
                  <select
                    id="q-con-type"
                    required
                    aria-required="true"
                    value={constructionState.projectType}
                    onChange={(e) => setConstructionState({ ...constructionState, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    {constructionProjectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.projectType}
                    </p>
                  )}
                </div>

                {/* 2. Project Location / City * */}
                <div>
                  <label htmlFor="q-con-location" className="text-xs text-[#A7ADB3] block mb-1">
                    Project Location / City <span className="text-[#B89A63]">*</span>
                  </label>
                  <input
                    id="q-con-location"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.location ? "true" : "false"}
                    aria-describedby={errors.location ? "q-con-loc-err" : undefined}
                    maxLength={100}
                    value={constructionState.location}
                    onChange={(e) => setConstructionState({ ...constructionState, location: e.target.value })}
                    placeholder="e.g. Gurugram, Sector 48"
                    className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                      errors.location ? "border-red-500" : "border-[#2A3035]"
                    }`}
                  />
                  {errors.location && (
                    <p id="q-con-loc-err" role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* 3. Number of Floors */}
                <div>
                  <label htmlFor="q-con-floors" className="text-xs text-[#A7ADB3] block mb-1">
                    Number of Floors
                  </label>
                  <select
                    id="q-con-floors"
                    value={constructionState.floors}
                    onChange={(e) => setConstructionState({ ...constructionState, floors: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    <option value="">Select Floors</option>
                    {constructionFloorOptions.map((f) => (
                      <option key={f} value={f} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {f}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 4. Approximate Built-up Area */}
                <div>
                  <label htmlFor="q-con-area" className="text-xs text-[#A7ADB3] block mb-1">
                    Approximate Built-up Area
                  </label>
                  <input
                    id="q-con-area"
                    type="text"
                    maxLength={50}
                    value={constructionState.approximateArea}
                    onChange={(e) => setConstructionState({ ...constructionState, approximateArea: e.target.value })}
                    placeholder="e.g. 2,400 sq. ft."
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
                  />
                </div>

                {/* 5. Current Project Stage */}
                <div>
                  <label htmlFor="q-con-stage" className="text-xs text-[#A7ADB3] block mb-1">
                    Current Project Stage
                  </label>
                  <select
                    id="q-con-stage"
                    value={constructionState.stage}
                    onChange={(e) => setConstructionState({ ...constructionState, stage: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    <option value="">Select Project Stage</option>
                    {constructionStages.map((s) => (
                      <option key={s} value={s} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Expected Construction Budget */}
                <div>
                  <label htmlFor="q-con-budget" className="text-xs text-[#A7ADB3] block mb-1">
                    Expected Construction Budget
                  </label>
                  <select
                    id="q-con-budget"
                    value={constructionState.budgetRange}
                    onChange={(e) => setConstructionState({ ...constructionState, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    <option value="">Select Budget Range</option>
                    {constructionBudgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Requirements / Notes */}
            <div>
              <label htmlFor="q-con-notes" className="text-xs text-[#A7ADB3] block mb-1">
                Additional Requirements / Notes
              </label>
              <textarea
                id="q-con-notes"
                rows={4}
                maxLength={3000}
                value={constructionState.notes}
                onChange={(e) => setConstructionState({ ...constructionState, notes: e.target.value })}
                placeholder="Describe your construction requirements, site condition, drawings availability, structural or finishing requirements, renovation details, or any other relevant information..."
                className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
              />
            </div>
          </div>
        )}

        {/* DIVISION 3: REAL ESTATE PANEL */}
        {division === "real-estate" && (
          <div
            role="tabpanel"
            id={`${baseId}-panel-real-estate`}
            aria-labelledby={`${baseId}-tab-real-estate`}
            className="space-y-6 pt-2"
          >
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
                Real Estate Enquiry Details
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* 1. Enquiry Type * */}
                <div>
                  <label htmlFor="q-re-enquiry-type" className="text-xs text-[#A7ADB3] block mb-1">
                    Enquiry Type <span className="text-[#B89A63]">*</span>
                  </label>
                  <select
                    id="q-re-enquiry-type"
                    required
                    aria-required="true"
                    value={realEstateState.enquiryType}
                    onChange={(e) => setRealEstateState({ ...realEstateState, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    {realEstateEnquiryTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.enquiryType && (
                    <p role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.enquiryType}
                    </p>
                  )}
                </div>

                {/* 2. Property Type * */}
                <div>
                  <label htmlFor="q-re-property-type" className="text-xs text-[#A7ADB3] block mb-1">
                    Property Type <span className="text-[#B89A63]">*</span>
                  </label>
                  <select
                    id="q-re-property-type"
                    required
                    aria-required="true"
                    value={realEstateState.propertyType}
                    onChange={(e) => setRealEstateState({ ...realEstateState, propertyType: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    {realEstatePropertyTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.propertyType && (
                    <p role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.propertyType}
                    </p>
                  )}
                </div>

                {/* 3. Preferred Location / Area * */}
                <div>
                  <label htmlFor="q-re-location" className="text-xs text-[#A7ADB3] block mb-1">
                    Preferred Location / Area <span className="text-[#B89A63]">*</span>
                  </label>
                  <input
                    id="q-re-location"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={errors.location ? "true" : "false"}
                    aria-describedby={errors.location ? "q-re-loc-err" : undefined}
                    maxLength={100}
                    value={realEstateState.location}
                    onChange={(e) => setRealEstateState({ ...realEstateState, location: e.target.value })}
                    placeholder="e.g. Gurugram, Sector 57 / Golf Course Ext"
                    className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                      errors.location ? "border-red-500" : "border-[#2A3035]"
                    }`}
                  />
                  {errors.location && (
                    <p id="q-re-loc-err" role="alert" className="text-[10px] text-red-400 mt-1">
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* 4. Approximate Budget Range */}
                <div>
                  <label htmlFor="q-re-budget" className="text-xs text-[#A7ADB3] block mb-1">
                    Approximate Budget Range
                  </label>
                  <select
                    id="q-re-budget"
                    value={realEstateState.budgetRange}
                    onChange={(e) => setRealEstateState({ ...realEstateState, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    <option value="">Select Budget Range</option>
                    {realEstateBudgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 5. Purpose of Enquiry */}
                <div>
                  <label htmlFor="q-re-purpose" className="text-xs text-[#A7ADB3] block mb-1">
                    Purpose of Enquiry
                  </label>
                  <select
                    id="q-re-purpose"
                    value={realEstateState.purpose}
                    onChange={(e) => setRealEstateState({ ...realEstateState, purpose: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
                  >
                    <option value="">Select Purpose</option>
                    {realEstatePurposes.map((p) => (
                      <option key={p} value={p} className="bg-[#0B0D0F] text-[#F3F1EC]">
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Requirements / Notes */}
            <div>
              <label htmlFor="q-re-notes" className="text-xs text-[#A7ADB3] block mb-1">
                Additional Requirements / Notes
              </label>
              <textarea
                id="q-re-notes"
                rows={4}
                maxLength={3000}
                value={realEstateState.notes}
                onChange={(e) => setRealEstateState({ ...realEstateState, notes: e.target.value })}
                placeholder="Describe preferred location, property requirements, approximate size, budget expectations, buying/selling details, or any other relevant information..."
                className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
              />
            </div>
          </div>
        )}

        {/* Form Footer */}
        <div className="pt-4 border-t border-[#2A3035] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#667582] text-center sm:text-left">
            Submitted specifications are reviewed strictly under client confidentiality.
          </p>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[220px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <span>REQUEST PROJECT ESTIMATE</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}


