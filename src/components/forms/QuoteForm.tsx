"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertTriangle, Loader2, HardHat } from "lucide-react";
import Button from "@/components/ui/Button";

const constructionProjectTypes = [
  "Residential Building (Builder Floor)",
  "Independent House / Villa",
  "Commercial Building",
  "Shop / Retail Commercial Space",
  "Office Building",
  "Building Renovation / Floor Addition",
  "Other Construction Scope",
];

const constructionFloorOptions = [
  "Ground Floor Only",
  "Ground + 1 Floor",
  "Ground + 2 Floors (G+2)",
  "Ground + 3 Floors (G+3)",
  "Ground + 4 Floors (G+4)",
  "Ground + 5 Floors (G+5)",
  "Renovation / Existing Structure",
];

const constructionStages = [
  "Planning / Concept Stage",
  "Architectural Drawings Ready",
  "Plot Acquired / Site Ready",
  "Sanction / Municipal Approval in Progress",
  "Ready to Start Immediately",
];

const constructionBudgetRanges = [
  "Under ₹25 Lakhs",
  "₹25 Lakhs – ₹50 Lakhs",
  "₹50 Lakhs – ₹1 Crore",
  "₹1 Crore – ₹3 Crores",
  "Above ₹3 Crores",
];

const constructionTimelines = [
  "Immediately (Within 1 Month)",
  "1 – 3 Months",
  "3 – 6 Months",
  "6 – 12 Months",
  "Flexible / Planning Stage",
];

const constructionScopeOptions = [
  "Foundation Footings & Plinth Beam",
  "RCC Column-Beam Framing & Slabs",
  "Red Brick / AAC Block Wall Masonry",
  "Concealed Electrical & Plumbing Conduits",
  "Internal & External Cement Plastering",
  "Terrace Waterproofing",
  "Complete Turnkey Civil Execution",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    location: "",
    projectType: constructionProjectTypes[0],
    floors: constructionFloorOptions[3], // G+3
    approximateArea: "",
    stage: constructionStages[1], // Drawings ready
    budgetRange: constructionBudgetRanges[2], // 50L - 1Cr
    timeline: constructionTimelines[1],
    requirements: [] as string[],
    message: "",
    bot_field: "", // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleRequirementToggle = (req: string) => {
    setFormData((prev) => {
      const exists = prev.requirements.includes(req);
      if (exists) {
        return { ...prev, requirements: prev.requirements.filter((r) => r !== req) };
      } else {
        return { ...prev, requirements: [...prev.requirements, req] };
      }
    });
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = "Full name must be at least 2 characters.";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required.";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.location.trim() || formData.location.trim().length < 2) {
      errs.location = "Plot location / neighborhood is required.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          location: formData.location.trim(),
          projectType: formData.projectType,
          floors: formData.floors,
          approximateArea: formData.approximateArea.trim(),
          stage: formData.stage,
          budgetRange: formData.budgetRange,
          timeline: formData.timeline,
          requirements: formData.requirements,
          message: formData.message.trim(),
          bot_field: formData.bot_field,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFeedbackMessage(
          result.message ||
            "Thank you. Your construction quote request has been received. Our team will review your specifications."
        );
        setReferenceId(result.referenceId || "");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          location: "",
          projectType: constructionProjectTypes[0],
          floors: constructionFloorOptions[3],
          approximateArea: "",
          stage: constructionStages[1],
          budgetRange: constructionBudgetRanges[2],
          timeline: constructionTimelines[1],
          requirements: [],
          message: "",
          bot_field: "",
        });
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(
          result.error || "Unable to submit quote request. Please call +91 98110 34825."
        );
      }
    } catch {
      setSubmitStatus("error");
      setFeedbackMessage("A network or server error occurred. Please call +91 98110 34825 directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#D5D4D0] p-6 sm:p-10 lg:p-12 rounded-xl shadow-xs relative overflow-hidden">
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#D96B27]" />

      {/* Form Header */}
      <div className="mb-10 pb-6 border-b border-[#D5D4D0]">
        <div className="flex items-center gap-2 mb-2">
          <HardHat className="w-4 h-4 text-[#D96B27]" />
          <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-[#D96B27]">
            BUILDING CONSTRUCTION ESTIMATION
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18324A] tracking-tight">
          Request a Construction Quote
        </h2>
        <p className="text-xs sm:text-sm text-[#66717A] mt-2 leading-relaxed">
          Provide your plot location, building scale, and intended scope. We review every enquiry personally and prepare realistic, itemized civil construction estimates.
        </p>
      </div>

      {/* Success Notification */}
      {submitStatus === "success" && (
        <div className="mb-8 p-6 bg-[#F4F2EE] border-2 border-[#D96B27] rounded-2xl text-left">
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-[#D96B27] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-base font-bold text-[#18324A] mb-1">
                Construction Quote Request Received
              </h3>
              <p className="text-xs sm:text-sm text-[#20272D] leading-relaxed mb-4">
                {feedbackMessage}
              </p>
              {referenceId && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#D5D4D0] rounded-md text-xs font-bold text-[#18324A]">
                  <span>Reference ID:</span>
                  <span className="text-[#D96B27]">{referenceId}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {submitStatus === "error" && (
        <div className="mb-8 p-5 bg-red-50 border border-red-300 rounded-xl text-left flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-red-800 leading-relaxed font-medium">
            {feedbackMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-8">
        {/* Honeypot Field (Invisible to human users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="quote_bot_field">Leave this field blank</label>
          <input
            type="text"
            id="quote_bot_field"
            name="bot_field"
            tabIndex={-1}
            autoComplete="off"
            value={formData.bot_field}
            onChange={(e) => setFormData({ ...formData, bot_field: e.target.value })}
          />
        </div>

        {/* SECTION 1: Client & Contact Information */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] font-extrabold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
            1. Client &amp; Contact Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Full Name <span className="text-[#D96B27]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Sharma"
                className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none transition-colors ${
                  errors.name ? "border-red-500 focus:border-red-500" : "border-[#D5D4D0] focus:border-[#D96B27]"
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Phone Number <span className="text-[#D96B27]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98110 00000"
                className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none transition-colors ${
                  errors.phone ? "border-red-500 focus:border-red-500" : "border-[#D5D4D0] focus:border-[#D96B27]"
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Email Address <span className="text-[#D96B27]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. client@example.com"
                className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none transition-colors ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-[#D5D4D0] focus:border-[#D96B27]"
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="location" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Plot Location / Area <span className="text-[#D96B27]">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Rohini Sector 8, Pitampura, Delhi"
                className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none transition-colors ${
                  errors.location ? "border-red-500 focus:border-red-500" : "border-[#D5D4D0] focus:border-[#D96B27]"
                }`}
              />
              {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-xs font-bold text-[#66717A] mb-1.5 uppercase tracking-wider">
                Company / Individual Owner (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Individual Homebuilder / Local Enterprise"
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none focus:border-[#D96B27] transition-colors"
              />
            </div>
          </div>
        </div>

        {/* SECTION 2: Construction Specifications */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] font-extrabold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
            2. Project Specifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="projectType" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Project Type <span className="text-[#D96B27]">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] focus:outline-none focus:border-[#D96B27] transition-colors"
              >
                {constructionProjectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="floors" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Proposed Scale / Number of Floors
              </label>
              <select
                id="floors"
                name="floors"
                value={formData.floors}
                onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] focus:outline-none focus:border-[#D96B27] transition-colors"
              >
                {constructionFloorOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="approximateArea" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Approximate Built-Up Area (Sq. Ft.)
              </label>
              <input
                type="text"
                id="approximateArea"
                name="approximateArea"
                value={formData.approximateArea}
                onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                placeholder="e.g. 4,500 Sq. Ft. or 200 Sq. Yards Plot"
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none focus:border-[#D96B27] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="stage" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Current Planning Stage
              </label>
              <select
                id="stage"
                name="stage"
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] focus:outline-none focus:border-[#D96B27] transition-colors"
              >
                {constructionStages.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budgetRange" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Expected Budget Range
              </label>
              <select
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] focus:outline-none focus:border-[#D96B27] transition-colors"
              >
                {constructionBudgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
                Target Start Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] focus:outline-none focus:border-[#D96B27] transition-colors"
              >
                {constructionTimelines.map((tl) => (
                  <option key={tl} value={tl}>
                    {tl}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* SECTION 3: Scope Checklist */}
        <div>
          <h3 className="text-xs uppercase tracking-[0.18em] font-extrabold text-[#18324A] mb-4 pb-2 border-b border-[#D5D4D0]">
            3. Scope Components Required (Select all that apply)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {constructionScopeOptions.map((scope) => {
              const isChecked = formData.requirements.includes(scope);
              return (
                <label
                  key={scope}
                  className={`flex items-start gap-3 p-3 border rounded-xl cursor-pointer transition-colors ${
                    isChecked
                      ? "bg-[#F3D8C7]/30 border-[#D96B27] text-[#18324A] font-bold"
                      : "bg-white border-[#D5D4D0] text-[#20272D] hover:border-[#18324A]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mt-0.5 accent-[#D96B27]"
                    checked={isChecked}
                    onChange={() => handleRequirementToggle(scope)}
                  />
                  <span className="text-xs leading-snug">{scope}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* SECTION 4: Additional Notes / Message */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
            Additional Notes / Project Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe specific plot considerations, drawing readiness, or details you would like us to know..."
            className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none focus:border-[#D96B27] transition-colors"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-5 border-t border-[#D5D4D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Processing Request...</span>
              </>
            ) : (
              <>
                <span>Submit Quotation Request</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-[#66717A] text-center sm:text-right font-medium">
            Enquiries are forwarded directly to gunjan29gupta@gmail.com
          </p>
        </div>
      </form>
    </div>
  );
}
