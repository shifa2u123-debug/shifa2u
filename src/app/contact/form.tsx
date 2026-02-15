"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";

export default function ContactUsForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
        comment: "",
        smsConsent: true,
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);
        const submitToast = toast.loading("Submitting your request...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Contact Us",
                    pageSource: "/contact",
                    fields: {
                        "Name": formData.name,
                        Email: formData.email,
                        Phone: formData.phone,
                        Comment: formData.comment,
                        "SMS Consent": formData.smsConsent ? "Yes" : "No",
                    },
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Request submitted successfully!", { id: submitToast });
                setFormData({
                    name: "",
                    address: "",
                    email: "",
                    phone: "",
                    comment: "",
                    smsConsent: true,
                });
            } else {
                toast.error(data.message || "Failed to submit request.", { id: submitToast });
            }
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("An error occurred. Please try again.", { id: submitToast });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <section className="section bg-white pt-2">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="card p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Patient Information */}
                                <div>
                                    <h4 className="text-red-500 pb-4 text-sm">* Required Information</h4>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="form-label">NAME *</label>
                                            <input type="text" required className="form-input" placeholder="Enter name here"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">EMAIL ADDRESS *</label>
                                            <input type="email" required className="form-input" placeholder="example@domain.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            />
                                        </div>
                                           <div>
                                            <label className="form-label">PHONE NUMBER *</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                    <span className="text-xl">🇺🇸</span>
                                                </div>
                                                <input type="tel" required className="form-input pl-12" placeholder="+1 (555) 555-5555"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">COMMENT *</label>
                                    <textarea className="form-input form-textarea h-32" placeholder="Enter your question or comment here..."
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    />
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="smsConsent"
                                        className="mt-1"
                                        checked={formData.smsConsent}
                                        onChange={(e) =>
                                            setFormData({ ...formData, smsConsent: e.target.checked })
                                        }
                                    />
                                    <label htmlFor="smsConsent" className="text-sm text-neutral-600">
                                        I agree to receive SMS messages from <strong style={{ color: "var(--primary-600)" }}>Al-Shifa Home Health Care Agency </strong>
                                        for appointments, service updates, care coordination, billing, and
                                        occasional informational or promotional messages. Frequency varies
                                        (4–6/month). Msg & data rates may apply. Reply STOP to opt out or
                                        HELP for support. See our{" "}
                                        <Link href="/privacy" className="text-primary-600 underline hover:underline">
                                            Privacy Policy
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/terms" className="text-primary-600 underline hover:underline">
                                            Terms & Conditions
                                        </Link>
                                        .
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="spinner"></span>
                                            Submitting...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
