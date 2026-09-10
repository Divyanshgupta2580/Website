"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { HardHat, Building2, Boxes, Send, CheckCircle, AlertTriangle, Loader2 } from "lucide-react";
import Button from "@/components/ui/Button";

type EnquiryType = "construction" | "real-estate" | "materials" | "general";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const initialDivision = (searchParams.get("division") as EnquiryType) || "materials";
  const initialSubject = searchParams.get("subject") || "";

  const [enquiryType, setEnquiryType] = useState<EnquiryType>(initialDivision);
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
    if (!formData.name.trim()) errs.name = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (formData.phone.trim().length < 8) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required";
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          enquiryType,
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
          subject: "",
          message: "",
          bot_field: "",
        });
      } else {
        setSubmitStatus("error");
        setFeedbackMessage(result.error || "Submission failed. Please verify details.");
      }
    } catch (err) {
      setSubmitStatus("error");
      setFeedbackMessage("Network connection error. Please try again or call our direct helpline.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#15191D] border border-[#2A3035] p-6 sm:p-8 lg:p-10">
      {/* 3 Dedicated Enquiry Paths Tab Bar */}
      <div className="mb-8">
        <label className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#A7ADB3] block mb-3">
          Select Enquiry Channel
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setEnquiryType("materials")}
            className={`flex items-center gap-2.5 p-3 text-left border transition-all ${
              enquiryType === "materials"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC]"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC] hover:border-[#667582]"
            }`}
          >
            <Boxes className={`w-4 h-4 flex-shrink-0 ${enquiryType === "materials" ? "text-[#B89A63]" : "text-[#667582]"}`} />
            <div>
              <span className="text-xs font-semibold block">1. Building Materials</span>
              <span className="text-[10px] text-[#A7ADB3] block">Cement, Steel, Supplies</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setEnquiryType("construction")}
            className={`flex items-center gap-2.5 p-3 text-left border transition-all ${
              enquiryType === "construction"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC]"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC] hover:border-[#667582]"
            }`}
          >
            <HardHat className={`w-4 h-4 flex-shrink-0 ${enquiryType === "construction" ? "text-[#B89A63]" : "text-[#667582]"}`} />
            <div>
              <span className="text-xs font-semibold block">2. Construction</span>
              <span className="text-[10px] text-[#A7ADB3] block">Low-Rise Building Work</span>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setEnquiryType("real-estate")}
            className={`flex items-center gap-2.5 p-3 text-left border transition-all ${
              enquiryType === "real-estate"
                ? "bg-[#0B0D0F] border-[#B89A63] text-[#F3F1EC]"
                : "bg-[#1D2227] border-[#2A3035] text-[#A7ADB3] hover:text-[#F3F1EC] hover:border-[#667582]"
            }`}
          >
            <Building2 className={`w-4 h-4 flex-shrink-0 ${enquiryType === "real-estate" ? "text-[#B89A63]" : "text-[#667582]"}`} />
            <div>
              <span className="text-xs font-semibold block">3. Real Estate</span>
              <span className="text-[10px] text-[#A7ADB3] block">Sales & Assistance</span>
            </div>
          </button>
        </div>
      </div>

      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-[#B89A63]/10 border border-[#B89A63] text-[#F3F1EC] flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-[#B89A63] flex-shrink-0 mt-0.5" />
          <div>
            <span className="text-sm font-semibold block mb-1">
              Enquiry Dispatched Successfully
            </span>
            <p className="text-xs text-[#A7ADB3] leading-relaxed">
              {feedbackMessage}
            </p>
            {referenceId && (
              <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono bg-[#0B0D0F] text-[#B89A63] border border-[#2A3035]">
                REF: {referenceId}
              </span>
            )}
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-950/40 border border-red-800 text-red-200 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs">
            <span className="font-semibold block mb-0.5">Submission Notice</span>
            {feedbackMessage}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="text-xs uppercase tracking-wider text-[#A7ADB3] block mb-1.5 font-medium">
              Full Name <span className="text-[#B89A63]">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              required
              aria-required="true"
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              maxLength={100}
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
                if (errors.name) setErrors({ ...errors, name: "" });
              }}
              placeholder="e.g. Rajesh Sharma"
              className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                errors.name ? "border-red-500" : "border-[#2A3035]"
              }`}
            />
            {errors.name && (
              <p id="contact-name-error" role="alert" className="text-[11px] text-red-400 mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-phone" className="text-xs uppercase tracking-wider text-[#A7ADB3] block mb-1.5 font-medium">
              Phone Number <span className="text-[#B89A63]">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              required
              aria-required="true"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby={errors.phone ? "contact-phone-error" : undefined}
              maxLength={20}
              value={formData.phone}
              onChange={(e) => {
                setFormData({ ...formData, phone: e.target.value });
                if (errors.phone) setErrors({ ...errors, phone: "" });
              }}
              placeholder="+91 98765 43210"
              className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                errors.phone ? "border-red-500" : "border-[#2A3035]"
              }`}
            />
            {errors.phone && (
              <p id="contact-phone-error" role="alert" className="text-[11px] text-red-400 mt-1">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-email" className="text-xs uppercase tracking-wider text-[#A7ADB3] block mb-1.5 font-medium">
              Email Address <span className="text-[#B89A63]">*</span>
            </label>
            <input
              id="contact-email"
              type="email"
              required
              aria-required="true"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              maxLength={120}
              value={formData.email}
              onChange={(e) => {
                setFormData({ ...formData, email: e.target.value });
                if (errors.email) setErrors({ ...errors, email: "" });
              }}
              placeholder="name@company.com"
              className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
                errors.email ? "border-red-500" : "border-[#2A3035]"
              }`}
            />
            {errors.email && (
              <p id="contact-email-error" role="alert" className="text-[11px] text-red-400 mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="contact-company" className="text-xs uppercase tracking-wider text-[#A7ADB3] block mb-1.5 font-medium">
              Company / Firm Name <span className="text-[10px] text-[#667582]">(Optional)</span>
            </label>
            <input
              id="contact-company"
              type="text"
              maxLength={120}
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder="e.g. Apex Infrastructure Pvt Ltd"
              className="w-full px-3.5 py-2.5 bg-[#0B0D0F] border border-[#2A3035] text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="text-xs uppercase tracking-wider text-[#A7ADB3] block mb-1.5 font-medium">
            Subject / Requirement Overview <span className="text-[#B89A63]">*</span>
          </label>
          <input
            id="contact-subject"
            type="text"
            required
            aria-required="true"
            aria-invalid={errors.subject ? "true" : "false"}
            aria-describedby={errors.subject ? "contact-subject-error" : undefined}
            maxLength={150}
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: "" });
            }}
            placeholder={
              enquiryType === "construction"
                ? "e.g. Commercial Office Building Civil Construction in Gurugram"
                : enquiryType === "real-estate"
                ? "e.g. Inquiring about 3 BHK availability at GG Aurum"
                : "e.g. Bulk Requirement for Fe 500D TMT Steel (120 MT)"
            }
            className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
              errors.subject ? "border-red-500" : "border-[#2A3035]"
            }`}
          />
          {errors.subject && (
            <p id="contact-subject-error" role="alert" className="text-[11px] text-red-400 mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-xs uppercase tracking-wider text-[#A7ADB3] block mb-1.5 font-medium">
            Project Specifications & Details <span className="text-[#B89A63]">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            required
            aria-required="true"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "contact-message-error" : undefined}
            maxLength={2000}
            value={formData.message}
            onChange={(e) => {
              setFormData({ ...formData, message: e.target.value });
              if (errors.message) setErrors({ ...errors, message: "" });
            }}
            placeholder="Please specify location, site area, estimated timeline, required quantities, or drawings status..."
            className={`w-full px-3.5 py-2.5 bg-[#0B0D0F] border text-sm text-[#F3F1EC] placeholder-[#667582] focus:outline-none focus:border-[#B89A63] ${
              errors.message ? "border-red-500" : "border-[#2A3035]"
            }`}
          />
          {errors.message && (
            <p id="contact-message-error" role="alert" className="text-[11px] text-red-400 mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <div className="pt-3 flex items-center justify-between">
          <p className="text-[11px] text-[#667582] leading-tight">
            Protected by server validation & anti-spam. No marketing spam.
          </p>
          <Button
            type="submit"
            variant="primary"
            size="md"
            disabled={isSubmitting}
            className="min-w-[150px]"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-3.5 h-3.5 ml-2" />
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
