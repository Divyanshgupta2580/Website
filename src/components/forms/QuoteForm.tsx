"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle, AlertTriangle, Loader2, Calculator } from "lucide-react";
import Button from "@/components/ui/Button";

const projectTypesByDivision = {
  materials: [
    "Cement (OPC / PPC)",
    "TMT Steel / Reinforcement Rebars",
    "Bricks & AAC Blocks",
    "Sand & Coarse Aggregates",
    "Plumbing Materials & Fittings",
    "Electrical Conduit & Wiring Supplies",
    "Construction Chemicals & Waterproofing",
    "Complete Material Project Order",
  ],
  construction: [
    "Residential Building Construction (Up to 4–5 Floors)",
    "Small Apartment / Floor-wise Construction",
    "Commercial Building / Showroom (Low-Rise)",
    "Small Office / Shop Construction",
    "Renovation & Remodeling Work",
    "Building Maintenance & Expansion",
    "Construction Planning & Site Supervision",
  ],
  "real-estate": [
    "Property Buying Assistance",
    "Property Sales & Marketing Enquiry",
    "Plot / Land Opportunity",
    "Commercial Space / Shop Enquiry",
    "Buyer-Seller Coordination",
  ],
};

const requirementChecklistOptions = [
  "Architectural Drawings / Floor Plan Ready",
  "Structural Coordination Required",
  "Immediate Material Procurement",
  "Site Visit & Feasibility Review",
  "Phased Material Delivery Schedule",
  "Labor & Material Combined Quote",
];

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const paramDiv = searchParams.get("division");
  const initialDivision: "materials" | "construction" | "real-estate" =
    paramDiv === "construction"
      ? "construction"
      : paramDiv === "real-estate"
      ? "real-estate"
      : "materials";

  const [division, setDivision] = useState<"materials" | "construction" | "real-estate">(initialDivision);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectType: projectTypesByDivision[initialDivision][0],
    location: "",
    approximateArea: "",
    budgetRange: "",
    timeline: "",
    requirements: [] as string[],
    message: "",
    bot_field: "",
  });

  useEffect(() => {
    const productParam = searchParams.get("product");
    const categoryParam = searchParams.get("category");
    if (productParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiry for product: ${productParam}`,
      }));
    } else if (categoryParam) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `Inquiry for category: ${categoryParam}`,
      }));
    }
  }, [searchParams]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleDivisionChange = (newDiv: "materials" | "construction" | "real-estate") => {
    setDivision(newDiv);
    setFormData((prev) => ({
      ...prev,
      projectType: projectTypesByDivision[newDiv][0],
    }));
  };

  const handleRequirementToggle = (option: string) => {
    setFormData((prev) => {
      const exists = prev.requirements.includes(option);
      return {
        ...prev,
        requirements: exists
          ? prev.requirements.filter((item) => item !== option)
          : [...prev.requirements, option],
      };
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!formData.location.trim()) errs.location = "Location / city is required";
    if (!formData.approximateArea.trim()) {
      errs.approximateArea = "Approximate area (sq. ft.) or material quantities is required";
    }
    if (!formData.budgetRange.trim()) errs.budgetRange = "Please specify budget expectation";
    if (!formData.timeline.trim()) errs.timeline = "Please specify target timeline";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          enquiryType: division,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFeedbackMessage(result.message);
        setReferenceId(result.referenceId || "");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          projectType: projectTypesByDivision[division][0],
          location: "",
          approximateArea: "",
          budgetRange: "",
          timeline: "",
          requirements: [],
          message: "",
          bot_field: "",
        });
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(result.error || "Estimation request failed. Please check inputs.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setFeedbackMessage("Network failure. Please try again or call our direct helpline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 lg:p-10">
      {/* Step 1: Select Division */}
      <div className="mb-8 pb-6 border-b border-[#2A3035]">
        <div className="flex items-center gap-2 mb-3">
          <Calculator className="w-4 h-4 text-[#B89A63]" />
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#B89A63]">
            Step 1: Select Division
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            type="button"
            onClick={() => handleDivisionChange("materials")}
            className={`p-3.5 text-left border transition-all ${
              division === "materials"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC]"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC]"
            }`}
          >
            <span className="text-xs font-semibold block uppercase tracking-wider">
              1. Materials Supply
            </span>
            <span className="text-[11px] text-[#A7ADB3] block mt-0.5">
              Cement, TMT Steel, Supplies
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleDivisionChange("construction")}
            className={`p-3.5 text-left border transition-all ${
              division === "construction"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC]"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC]"
            }`}
          >
            <span className="text-xs font-semibold block uppercase tracking-wider">
              2. Construction
            </span>
            <span className="text-[11px] text-[#A7ADB3] block mt-0.5">
              Low-Rise Buildings (Up to 4–5 Floors)
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleDivisionChange("real-estate")}
            className={`p-3.5 text-left border transition-all ${
              division === "real-estate"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC]"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC]"
            }`}
          >
            <span className="text-xs font-semibold block uppercase tracking-wider">
              3. Real Estate
            </span>
            <span className="text-[11px] text-[#A7ADB3] block mt-0.5">
              Property Sales &amp; Assistance
            </span>
          </button>
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="mb-8 p-5 bg-[#B89A63]/10 border border-[#B89A63] text-[#F3F1EC]">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#B89A63] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold mb-1">
                Project Dossier Received
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
          value={formData.bot_field}
          onChange={(e) => setFormData({ ...formData, bot_field: e.target.value })}
          className="sr-only"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        {/* Section 2: Contact & Identification */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
            Client Contact Information
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="q-name" className="text-xs text-[#A7ADB3] block mb-1">
                Full Name <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-name"
                type="text"
                required
                aria-required="true"
                aria-invalid={errors.name ? "true" : "false"}
                aria-describedby={errors.name ? "q-name-error" : undefined}
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Vikramaditya Singh"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.name ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.name && (
                <p id="q-name-error" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-phone" className="text-xs text-[#A7ADB3] block mb-1">
                Phone Number <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-phone"
                type="tel"
                required
                aria-required="true"
                aria-invalid={errors.phone ? "true" : "false"}
                aria-describedby={errors.phone ? "q-phone-error" : undefined}
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.phone ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.phone && (
                <p id="q-phone-error" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-email" className="text-xs text-[#A7ADB3] block mb-1">
                Email Address <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-email"
                type="email"
                required
                aria-required="true"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "q-email-error" : undefined}
                maxLength={120}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@enterprise.com"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.email ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.email && (
                <p id="q-email-error" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-company" className="text-xs text-[#A7ADB3] block mb-1">
                Company / Organization
              </label>
              <input
                id="q-company"
                type="text"
                maxLength={120}
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Apex Corp"
                className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Project Parameters */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#667582] block mb-3">
            Project Scope & Parameters
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label htmlFor="q-projectType" className="text-xs text-[#A7ADB3] block mb-1">
                Project Category <span className="text-[#B89A63]">*</span>
              </label>
              <select
                id="q-projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63]"
              >
                {projectTypesByDivision[division].map((type) => (
                  <option key={type} value={type} className="bg-[#0B0D0F] text-[#F3F1EC]">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="q-location" className="text-xs text-[#A7ADB3] block mb-1">
                Project Location / City <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-location"
                type="text"
                required
                aria-required="true"
                aria-invalid={errors.location ? "true" : "false"}
                aria-describedby={errors.location ? "q-location-error" : undefined}
                maxLength={100}
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Gurugram, Sector 48"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.location ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.location && (
                <p id="q-location-error" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.location}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-area" className="text-xs text-[#A7ADB3] block mb-1">
                Approx. Area / Tonnage <span className="text-[#B89A63]">*</span>
              </label>
              <input
                id="q-area"
                type="text"
                required
                aria-required="true"
                aria-invalid={errors.approximateArea ? "true" : "false"}
                aria-describedby={errors.approximateArea ? "q-area-error" : undefined}
                maxLength={50}
                value={formData.approximateArea}
                onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                placeholder="e.g. 85,000 Sq. Ft. or 250 MT"
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                  errors.approximateArea ? "border-red-500" : "border-[#2A3035]"
                }`}
              />
              {errors.approximateArea && (
                <p id="q-area-error" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.approximateArea}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="q-budget" className="text-xs text-[#A7ADB3] block mb-1">
                Target Budget Range <span className="text-[#B89A63]">*</span>
              </label>
              <select
                id="q-budget"
                required
                aria-required="true"
                aria-invalid={errors.budgetRange ? "true" : "false"}
                aria-describedby={errors.budgetRange ? "q-budget-error" : undefined}
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63] ${
                  errors.budgetRange ? "border-red-500" : "border-[#2A3035]"
                }`}
              >
                <option value="">Select Range</option>
                <option value="Under ₹ 1 Crore">Under ₹ 1 Crore</option>
                <option value="₹ 1 Crore - ₹ 5 Crores">₹ 1 Crore - ₹ 5 Crores</option>
                <option value="₹ 5 Crores - ₹ 20 Crores">₹ 5 Crores - ₹ 20 Crores</option>
                <option value="₹ 20 Crores - ₹ 50 Crores">₹ 20 Crores - ₹ 50 Crores</option>
                <option value="Above ₹ 50 Crores">Above ₹ 50 Crores / Institutional</option>
              </select>
              {errors.budgetRange && (
                <p id="q-budget-error" role="alert" className="text-[10px] text-red-400 mt-1">
                  {errors.budgetRange}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Section 4: Target Timeline & Status Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="q-timeline" className="text-xs text-[#A7ADB3] block mb-1">
              Target Mobilization / Completion <span className="text-[#B89A63]">*</span>
            </label>
            <select
              id="q-timeline"
              required
              aria-required="true"
              aria-invalid={errors.timeline ? "true" : "false"}
              aria-describedby={errors.timeline ? "q-timeline-error" : undefined}
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] focus:outline-none focus:border-[#B89A63] ${
                errors.timeline ? "border-red-500" : "border-[#2A3035]"
              }`}
            >
              <option value="">Select Timeline</option>
              <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
              <option value="1 - 3 Months">1 - 3 Months</option>
              <option value="3 - 6 Months">3 - 6 Months</option>
              <option value="6 - 12 Months">6 - 12 Months</option>
              <option value="Planning Stage (> 1 Year)">Planning Stage (&gt; 1 Year)</option>
            </select>
            {errors.timeline && (
              <p id="q-timeline-error" role="alert" className="text-[10px] text-red-400 mt-1">
                {errors.timeline}
              </p>
            )}
          </div>

          <div className="lg:col-span-2">
            <span className="text-xs text-[#A7ADB3] block mb-2">
              Project Readiness Indicators (Select applicable)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {requirementChecklistOptions.map((opt) => {
                const isChecked = formData.requirements.includes(opt);
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => handleRequirementToggle(opt)}
                    className={`px-3 py-2 text-left text-xs border transition-all ${
                      isChecked
                        ? "bg-[#B89A63]/15 border-[#B89A63] text-[#F3F1EC]"
                        : "bg-[#0B0D0F] border-[#2A3035] text-[#A7ADB3] hover:border-[#667582]"
                    }`}
                  >
                    <span className="line-clamp-1">{opt}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Section 5: Detailed Requirements */}
        <div>
          <label htmlFor="q-message" className="text-xs text-[#A7ADB3] block mb-1">
            Detailed Technical Requirements / BOQ Upload Notes
          </label>
          <textarea
            id="q-message"
            rows={4}
            maxLength={3000}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Include any specific structural tolerances, grade requirements (e.g. M35 Concrete, Fe 500D steel), crane specifications, or drawings availability..."
            className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
          />
        </div>

        {/* Form Footer */}
        <div className="pt-4 border-t border-[#2A3035] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[#667582] text-center sm:text-left">
            Submitted specifications are reviewed strictly under corporate confidentiality agreements.
          </p>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto min-w-[200px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                <span>Processing Dossier...</span>
              </>
            ) : (
              <>
                <span>Request Project Estimate</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
