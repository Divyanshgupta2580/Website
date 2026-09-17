"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HardHat, Building2, Hammer, HelpCircle, Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

type EnquiryType = "residential" | "commercial" | "renovation" | "general";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get("type") as EnquiryType) || "residential";
  const initialSubject = searchParams.get("subject") || "";

  const [enquiryType, setEnquiryType] = useState<EnquiryType>(initialType);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: initialSubject,
    message: "",
    bot_field: "", // Honeypot
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  useEffect(() => {
    if (initialSubject && !formData.subject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject, formData.subject]);

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
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = "Subject is required (minimum 3 characters).";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          enquiryType,
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          bot_field: formData.bot_field,
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus("success");
        setFeedbackMessage(result.message || "Thank you. Your construction enquiry has been transmitted.");
        setReferenceId(result.referenceId || "");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          subject: "",
          message: "",
          bot_field: "",
        });
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(
          result.error || "Unable to send enquiry. Please contact us directly at +91 98110 34825."
        );
      }
    } catch {
      setSubmitStatus("error");
      setFeedbackMessage(
        "A network or server error occurred. Please call +91 98110 34825 directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#D5D4D0] p-6 sm:p-10 rounded-xl shadow-xs" id="enquiry-form">
      {/* Category Selector */}
      <div className="mb-8">
        <label className="block text-xs uppercase tracking-wider font-extrabold text-[#18324A] mb-3">
          Select Project Category
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          <button
            type="button"
            onClick={() => setEnquiryType("residential")}
            className={`flex items-center gap-2.5 p-3 text-left border rounded-xl transition-all ${
              enquiryType === "residential"
                ? "bg-[#F3D8C7]/40 border-2 border-[#D96B27] text-[#18324A]"
                : "bg-white border-[#D5D4D0] text-[#66717A] hover:border-[#18324A] hover:text-[#18324A]"
            }`}
          >
            <HardHat className={`w-4 h-4 flex-shrink-0 ${enquiryType === "residential" ? "text-[#D96B27]" : "text-[#66717A]"}`} />
            <div>
              <span className="text-xs font-bold block">Residential</span>
              <span className="text-[10px] text-[#66717A] block">Homes &amp; Floors</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setEnquiryType("commercial")}
            className={`flex items-center gap-2.5 p-3 text-left border rounded-xl transition-all ${
              enquiryType === "commercial"
                ? "bg-[#F3D8C7]/40 border-2 border-[#D96B27] text-[#18324A]"
                : "bg-white border-[#D5D4D0] text-[#66717A] hover:border-[#18324A] hover:text-[#18324A]"
            }`}
          >
            <Building2 className={`w-4 h-4 flex-shrink-0 ${enquiryType === "commercial" ? "text-[#D96B27]" : "text-[#66717A]"}`} />
            <div>
              <span className="text-xs font-bold block">Commercial</span>
              <span className="text-[10px] text-[#66717A] block">Shops &amp; Offices</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setEnquiryType("renovation")}
            className={`flex items-center gap-2.5 p-3 text-left border rounded-xl transition-all ${
              enquiryType === "renovation"
                ? "bg-[#F3D8C7]/40 border-2 border-[#D96B27] text-[#18324A]"
                : "bg-white border-[#D5D4D0] text-[#66717A] hover:border-[#18324A] hover:text-[#18324A]"
            }`}
          >
            <Hammer className={`w-4 h-4 flex-shrink-0 ${enquiryType === "renovation" ? "text-[#D96B27]" : "text-[#66717A]"}`} />
            <div>
              <span className="text-xs font-bold block">Renovation</span>
              <span className="text-[10px] text-[#66717A] block">Additions &amp; Repairs</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setEnquiryType("general")}
            className={`flex items-center gap-2.5 p-3 text-left border rounded-xl transition-all ${
              enquiryType === "general"
                ? "bg-[#F3D8C7]/40 border-2 border-[#D96B27] text-[#18324A]"
                : "bg-white border-[#D5D4D0] text-[#66717A] hover:border-[#18324A] hover:text-[#18324A]"
            }`}
          >
            <HelpCircle className={`w-4 h-4 flex-shrink-0 ${enquiryType === "general" ? "text-[#D96B27]" : "text-[#66717A]"}`} />
            <div>
              <span className="text-xs font-bold block">General</span>
              <span className="text-[10px] text-[#66717A] block">Consultation</span>
            </div>
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {submitStatus === "success" && (
        <div className="mb-6 p-5 bg-[#F4F2EE] border-2 border-[#D96B27] rounded-2xl text-left">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#D96B27] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#18324A]">
                Enquiry Transmitted Successfully
              </h3>
              <p className="text-xs text-[#20272D] mt-1 leading-relaxed">
                {feedbackMessage}
              </p>
              {referenceId && (
                <div className="mt-3 inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#D5D4D0] rounded-md text-[11px] font-bold text-[#18324A]">
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
        <div className="mb-6 p-4 bg-red-50 border border-red-300 rounded-xl text-left flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-red-800 font-medium">{feedbackMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        {/* Honeypot Field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact_bot_field">Leave this field blank</label>
          <input
            type="text"
            id="contact_bot_field"
            name="bot_field"
            tabIndex={-1}
            autoComplete="off"
            value={formData.bot_field}
            onChange={(e) => setFormData({ ...formData, bot_field: e.target.value })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div>
            <label htmlFor="c_name" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
              Full Name <span className="text-[#D96B27]">*</span>
            </label>
            <input
              type="text"
              id="c_name"
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

          {/* Phone Number */}
          <div>
            <label htmlFor="c_phone" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
              Phone Number <span className="text-[#D96B27]">*</span>
            </label>
            <input
              type="tel"
              id="c_phone"
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

          {/* Email Address */}
          <div>
            <label htmlFor="c_email" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
              Email Address <span className="text-[#D96B27]">*</span>
            </label>
            <input
              type="email"
              id="c_email"
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

          {/* Company / Individual */}
          <div>
            <label htmlFor="c_company" className="block text-xs font-bold text-[#66717A] mb-1.5 uppercase tracking-wider">
              Company / Individual (Optional)
            </label>
            <input
              type="text"
              id="c_company"
              name="company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Individual Homeowner"
              className="w-full px-4 py-3 bg-white border border-[#D5D4D0] rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none focus:border-[#D96B27] transition-colors"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="c_subject" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
            Subject <span className="text-[#D96B27]">*</span>
          </label>
          <input
            type="text"
            id="c_subject"
            name="subject"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Construction Enquiry for 4-Storey Builder Floor in Rohini"
            className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none transition-colors ${
              errors.subject ? "border-red-500 focus:border-red-500" : "border-[#D5D4D0] focus:border-[#D96B27]"
            }`}
          />
          {errors.subject && <p className="text-[11px] text-red-600 mt-1">{errors.subject}</p>}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="c_message" className="block text-xs font-bold text-[#18324A] mb-1.5 uppercase tracking-wider">
            Message <span className="text-[#D96B27]">*</span>
          </label>
          <textarea
            id="c_message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Describe your construction requirement, plot dimensions, expected scope, or timeline..."
            className={`w-full px-4 py-3 bg-white border rounded-xl text-xs text-[#20272D] placeholder-[#66717A] focus:outline-none transition-colors ${
              errors.message ? "border-red-500 focus:border-red-500" : "border-[#D5D4D0] focus:border-[#D96B27]"
            }`}
          />
          {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
        </div>

        {/* Submit Action */}
        <div className="pt-3 border-t border-[#D5D4D0] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            className="w-full sm:w-auto"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Send Construction Enquiry</span>
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-xs text-[#66717A] text-center sm:text-right font-medium">
            Enquiries are forwarded securely to gunjan29gupta@gmail.com
          </p>
        </div>
      </form>
    </div>
  );
}
