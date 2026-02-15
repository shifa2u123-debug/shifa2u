"use client";

import { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import { CopyPlus, UserPlus, Trash2 } from "lucide-react";

type Referral = {
    id: number;
    name: string;
    email: string;
    phone: string;
};

export default function ReferralForm() {
    // Referrer Info
    const [referrer, setReferrer] = useState({
        name: "",
        email: "",
    });

    // Referrals List (Start with 1 empty referral)
    const [referrals, setReferrals] = useState<Referral[]>([
        { id: Date.now(), name: "", email: "", phone: "" }
    ]);

    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Add a new referral field (max 3)
    const addReferral = () => {
        if (referrals.length < 3) {
            setReferrals([...referrals, { id: Date.now(), name: "", email: "", phone: "" }]);
        } else {
            toast.error("You can add a maximum of 3 referrals.");
        }
    };

    // Remove a referral field
    const removeReferral = (id: number) => {
        if (referrals.length > 1) {
            setReferrals(referrals.filter((ref) => ref.id !== id));
        }
    };

    // Update referral field data
    const updateReferral = (id: number, field: keyof Referral, value: string) => {
        setReferrals(referrals.map((ref) => (ref.id === id ? { ...ref, [field]: value } : ref)));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            toast.error("Please complete the CAPTCHA.");
            return;
        }

        setIsSubmitting(true);
        const submitToast = toast.loading("Submitting your referrals...");

        // Format fields for email api
        const formattedFields: Record<string, string> = {
            "Referrer Name": referrer.name,
            "Referrer Email": referrer.email,
        };

        referrals.forEach((ref, index) => {
            formattedFields[`Referral ${index + 1} - Name`] = ref.name;
            formattedFields[`Referral ${index + 1} - Email`] = ref.email;
            formattedFields[`Referral ${index + 1} - Phone`] = ref.phone;
        });

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Referral Form",
                    pageSource: "/send-referrals",
                    fields: formattedFields,
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Referrals submitted successfully!", { id: submitToast });
                // Reset form
                setReferrer({ name: "", email: "" });
                setReferrals([{ id: Date.now(), name: "", email: "", phone: "" }]);
                setCaptchaToken(null);
                if (recaptchaRef.current) recaptchaRef.current.reset();
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
        <section className="section bg-white pt-2">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="card p-6 md:p-10 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-neutral-100">
                        <form onSubmit={handleSubmit} className="space-y-8">

                            {/* Referrer Information */}
                            <div className="bg-primary-50/50 p-4 rounded-2xl border border-primary-100">
                                <h3 className="text-xl font-serif text-primary-800 mb-4 flex items-center gap-2">
                                    <UserPlus className="w-5 h-5" />
                                    Your Information
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="form-label">YOUR NAME *</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-input"
                                            placeholder="Your full name"
                                            value={referrer.name}
                                            onChange={(e) => setReferrer({ ...referrer, name: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">YOUR EMAIL *</label>
                                        <input
                                            type="email"
                                            required
                                            className="form-input"
                                            placeholder="your.email@example.com"
                                            value={referrer.email}
                                            onChange={(e) => setReferrer({ ...referrer, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <hr className="border-neutral-200" />

                            {/* Referrals Section */}
                            <div>
                                <h3 className="text-xl font-serif text-neutral-800 mb-4 flex items-center justify-between">
                                    <span>Who are you referring?</span>
                                    <span className="text-sm font-sans font-normal text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                                        {referrals.length} / 3 Max
                                    </span>
                                </h3>

                                <div className="space-y-6">
                                    {referrals.map((referral, index) => (
                                        <div key={referral.id} className="relative bg-white p-6 rounded-2xl border border-neutral-200 shadow-sm transition-all hover:shadow-md">
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-neutral-900 font-semibold flex items-center gap-2">
                                                    <span className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                                                        {index + 1}
                                                    </span>
                                                    Referral Details
                                                </h4>
                                                {referrals.length > 1 && (
                                                    <button
                                                        type="button"
                                                        onClick={() => removeReferral(referral.id)}
                                                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-1 rounded-full transition-colors"
                                                        title="Remove this referral"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                )}
                                            </div>

                                            <div className="grid md:grid-cols-3 gap-4">
                                                <div>
                                                    <label className="form-label">NAME *</label>
                                                    <input
                                                        type="text"
                                                        required
                                                        className="form-input"
                                                        placeholder="Full Name"
                                                        value={referral.name}
                                                        onChange={(e) => updateReferral(referral.id, "name", e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="form-label">EMAIL *</label>
                                                    <input
                                                        type="email"
                                                        required
                                                        className="form-input"
                                                        placeholder="email@example.com"
                                                        value={referral.email}
                                                        onChange={(e) => updateReferral(referral.id, "email", e.target.value)}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="form-label">PHONE *</label>
                                                    <input
                                                        type="tel"
                                                        required
                                                        className="form-input"
                                                        placeholder="(555) 555-5555"
                                                        value={referral.phone}
                                                        onChange={(e) => updateReferral(referral.id, "phone", e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {referrals.length < 3 && (
                                    <button
                                        type="button"
                                        onClick={addReferral}
                                        className="mt-6 flex items-center gap-2 text-primary-600 font-medium hover:text-primary-800 transition-colors group"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                                            <CopyPlus className="w-4 h-4" />
                                        </div>
                                        Add Another Referral
                                    </button>
                                )}
                            </div>

                            {/* ReCAPTCHA & Submit */}
                            <div className="space-y-4">
                                <div className="flex justify-start">
                                    {/* 
                                        NOTE: Replace `sitekey` with your actual Google ReCAPTCHA v2 Checkbox site key.
                                        If you don't have one, this widget will show an error but the logic is prepared.
                                        Testing key for localhost often works: 6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
                                    */}
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                        onChange={setCaptchaToken}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn btn-primary w-full disabled:opacity-70 disabled:cursor-not-allowed py-4 text-lg"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <span className="spinner"></span>
                                            Sending Referrals...
                                        </span>
                                    ) : (
                                        "Submit Referrals"
                                    )}
                                </button>
                            </div>

                            <p className="text-xs text-neutral-500 text-center mt-4">
                                By submitting, you agree to our <Link href="/privacy" className="underline">Privacy Policy</Link>.
                                Your information and your referrals&apos; information is kept secure and confidential.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
