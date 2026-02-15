"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

export default function CuppingForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        dateOfBirth: "",
        address: "",
        contactPreference: "",
        email: "",
        phone: "",
        fax: "",
        bestTime: "",
        preferredDate: "",
        preferredTime: "",
        anyMedications: "",
        anyAllergies: "",
        anyMedicalConditions: "",
        emergencyContactName: "",
        emergencyContactRelationship: "",
        emergencyContactPhone: "",
        doneCuppingPreviously: "",
        reasonsForCupping: "",
        goalsForCupping: "",
        dateOfLastCupping: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!captchaToken) {
            toast.error("Please complete the ReCAPTCHA.");
            return;
        }

        setIsSubmitting(true);
        const submitToast = toast.loading("Submitting your request...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Cupping Therapy Intake Form",
                    pageSource: "/services/cupping-therapy/cupping-form",
                    fields: {
                        "Client Name": formData.fullName,
                        "Date of Birth": formData.dateOfBirth,
                        "Address": formData.address,
                        "Contact Preference": formData.contactPreference,
                        "Email": formData.email,
                        "Phone": formData.phone,
                        "Fax": formData.fax,
                        "Best Time to Call": formData.bestTime,
                        "Preferred Date": formData.preferredDate,
                        "Preferred Time": formData.preferredTime,
                        "Taking Medications": formData.anyMedications,
                        "Allergies": formData.anyAllergies,
                        "Medical Conditions": formData.anyMedicalConditions,
                        "Emergency Contact Name": formData.emergencyContactName,
                        "Emergency Contact Relationship": formData.emergencyContactRelationship,
                        "Emergency Contact Phone": formData.emergencyContactPhone,
                        "Tried Cupping Previously": formData.doneCuppingPreviously,
                        "Reasons for Cupping": formData.reasonsForCupping,
                        "Goals for Cupping": formData.goalsForCupping,
                        "Last Cupping Date": formData.dateOfLastCupping,
                    }
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Request submitted successfully!", { id: submitToast });
                setFormData({
                    fullName: "",
                    dateOfBirth: "",
                    address: "",
                    contactPreference: "",
                    email: "",
                    phone: "",
                    fax: "",
                    bestTime: "",
                    preferredDate: "",
                    preferredTime: "",
                    anyMedications: "",
                    anyAllergies: "",
                    anyMedicalConditions: "",
                    emergencyContactName: "",
                    emergencyContactRelationship: "",
                    emergencyContactPhone: "",
                    doneCuppingPreviously: "",
                    reasonsForCupping: "",
                    goalsForCupping: "",
                    dateOfLastCupping: "",
                });
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
        <section className="section bg-white py-12">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto">
                    <div className="card bg-white p-6 md:p-10 shadow-lg rounded-2xl border border-neutral-100">
                        <form onSubmit={handleSubmit} className="space-y-10">

                            {/* Client Details Section */}
                            <div className="space-y-6">
                                <div className="border-b border-neutral-200 pb-2 mb-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg font-semibold text-neutral-800">CLIENT DETAILS</h3>
                                        <span className="text-sm text-red-500 font-medium">* Required</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="form-label block text-sm text-neutral-700 mb-2">FULL NAME *</label>
                                        <input type="text" required className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="Enter full name"
                                            value={formData.fullName}
                                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">DATE OF BIRTH *</label>
                                        <input type="date" required className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors"
                                            value={formData.dateOfBirth}
                                            onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">ADDRESS *</label>
                                        <input type="text" required className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="Enter full address"
                                            value={formData.address}
                                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Contact Preference Sub-section */}
                                <div className="pt-4">
                                    <label className="form-label block text-sm font-semibold text-neutral-700 mb-3">How Would You Like to Be Contacted? *</label>
                                    <div className="flex flex-wrap gap-3">
                                        {["Phone", "Fax", "Email"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-5 py-2.5 transition-all text-sm font-medium ${formData.contactPreference === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 shadow-sm"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:bg-neutral-50"
                                                }`}>
                                                <input type="radio" name="contactPreference" value={method} required
                                                    checked={formData.contactPreference === method}
                                                    onChange={(e) => setFormData({ ...formData, contactPreference: e.target.value })}
                                                    className="accent-primary-600 h-4 w-4"
                                                />
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">EMAIL ADDRESS *</label>
                                        <input type="email" required className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="example@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">FAX NUMBER</label>
                                        <input type="tel" className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="(555) 555-5555"
                                            value={formData.fax}
                                            onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">PHONE NUMBER *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <span className="text-xl">🇺🇸</span>
                                            </div>
                                            <input type="tel" required className="form-input w-full pl-12 rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="+1 (555) 555-5555"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">BEST TIME TO CALL</label>
                                        <div className="relative">
                                            <select className="form-input w-full appearance-none bg-white rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 cursor-pointer transition-colors"
                                                value={formData.bestTime}
                                                onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                                            >
                                                <option value="" disabled>- Please select -</option>
                                                <option value="Morning">Morning</option>
                                                <option value="Afternoon">Afternoon</option>
                                                <option value="Evening">Evening</option>
                                                <option value="Anytime">Anytime</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                                <ChevronDown className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">PREFERRED DATE</label>
                                        <input type="date" className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors"
                                            value={formData.preferredDate}
                                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">PREFERRED TIME</label>
                                        <input type="time" className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors"
                                            value={formData.preferredTime}
                                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Medical History Section */}
                            <div className="space-y-6 pt-4 border-t border-neutral-100">
                                <div className="border-b border-neutral-200 pb-2 mb-6">
                                    <h3 className="text-lg font-semibold text-neutral-800">MEDICAL HISTORY</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-3">ARE YOU TAKING ANY MEDICATION? *</label>
                                        <div className="flex flex-wrap gap-3">
                                            {["Yes", "No"].map((method) => (
                                                <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-5 py-2.5 transition-all text-sm font-medium ${formData.anyMedications === method
                                                    ? "border-primary-600 bg-primary-50 text-primary-700 shadow-sm"
                                                    : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:bg-neutral-50"
                                                    }`}>
                                                    <input type="radio" name="anyMedications" value={method} required
                                                        checked={formData.anyMedications === method}
                                                        onChange={(e) => setFormData({ ...formData, anyMedications: e.target.value })}
                                                        className="accent-primary-600 h-4 w-4"
                                                    />
                                                    {method}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-3">DO YOU HAVE ANY ALLERGIES? *</label>
                                        <div className="flex flex-wrap gap-3">
                                            {["Yes", "No"].map((method) => (
                                                <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-5 py-2.5 transition-all text-sm font-medium ${formData.anyAllergies === method
                                                    ? "border-primary-600 bg-primary-50 text-primary-700 shadow-sm"
                                                    : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:bg-neutral-50"
                                                    }`}>
                                                    <input type="radio" name="anyAllergies" value={method} required
                                                        checked={formData.anyAllergies === method}
                                                        onChange={(e) => setFormData({ ...formData, anyAllergies: e.target.value })}
                                                        className="accent-primary-600 h-4 w-4"
                                                    />
                                                    {method}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="md:col-span-2">
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-3">DO YOU HAVE ANY MEDICAL CONDITIONS? *</label>
                                        <div className="flex flex-wrap gap-3">
                                            {["Yes", "No"].map((method) => (
                                                <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-5 py-2.5 transition-all text-sm font-medium ${formData.anyMedicalConditions === method
                                                    ? "border-primary-600 bg-primary-50 text-primary-700 shadow-sm"
                                                    : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:bg-neutral-50"
                                                    }`}>
                                                    <input type="radio" name="anyMedicalConditions" value={method} required
                                                        checked={formData.anyMedicalConditions === method}
                                                        onChange={(e) => setFormData({ ...formData, anyMedicalConditions: e.target.value })}
                                                        className="accent-primary-600 h-4 w-4"
                                                    />
                                                    {method}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Emergency Contact Section */}
                            <div className="space-y-6 pt-4 border-t border-neutral-100">
                                <div className="border-b border-neutral-200 pb-2 mb-6">
                                    <h3 className="text-lg font-semibold text-neutral-800">EMERGENCY CONTACT DETAILS</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">FULL NAME *</label>
                                        <input type="text" required className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="Contact person's name"
                                            value={formData.emergencyContactName}
                                            onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">RELATIONSHIP *</label>
                                        <input type="text" required className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="e.g. Spouse, Sibling"
                                            value={formData.emergencyContactRelationship}
                                            onChange={(e) => setFormData({ ...formData, emergencyContactRelationship: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">CONTACT PHONE *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <span className="text-xl">🇺🇸</span>
                                            </div>
                                            <input type="tel" required className="form-input w-full pl-12 rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors" placeholder="+1 (555) 555-5555"
                                                value={formData.emergencyContactPhone}
                                                onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Consultation Section */}
                            <div className="space-y-6 pt-4 border-t border-neutral-100">
                                <div className="border-b border-neutral-200 pb-2 mb-6">
                                    <h3 className="text-lg font-semibold text-neutral-800">CONSULTATION</h3>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                                        <div>
                                            <label className="form-label block text-sm font-semibold text-neutral-700 mb-3">HAVE YOU TRIED CUPPING THERAPY PREVIOUSLY? *</label>
                                            <div className="flex flex-wrap gap-3">
                                                {["Yes", "No"].map((method) => (
                                                    <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-5 py-2.5 transition-all text-sm font-medium ${formData.doneCuppingPreviously === method
                                                        ? "border-primary-600 bg-primary-50 text-primary-700 shadow-sm"
                                                        : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300 hover:bg-neutral-50"
                                                        }`}>
                                                        <input type="radio" name="doneCuppingPreviously" value={method}
                                                            checked={formData.doneCuppingPreviously === method}
                                                            onChange={(e) => setFormData({ ...formData, doneCuppingPreviously: e.target.value })}
                                                            className="accent-primary-600 h-4 w-4"
                                                        />
                                                        {method}
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">DATE OF LAST CUPPING THERAPY</label>
                                            <input type="date" className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors"
                                                value={formData.dateOfLastCupping}
                                                onChange={(e) => setFormData({ ...formData, dateOfLastCupping: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">WHAT ARE YOUR REASONS FOR HAVING CUPPING THERAPY?</label>
                                        <textarea className="form-input form-textarea w-full h-32 rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors p-3" placeholder="Please describe your symptoms or reasons..."
                                            value={formData.reasonsForCupping}
                                            onChange={(e) => setFormData({ ...formData, reasonsForCupping: e.target.value })}
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label block text-sm font-semibold text-neutral-700 mb-2">WHAT ARE YOUR GOALS AND EXPECTATIONS?</label>
                                        <textarea className="form-input form-textarea w-full h-32 rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors p-3" placeholder="What outcomes are you hoping for?"
                                            value={formData.goalsForCupping}
                                            onChange={(e) => setFormData({ ...formData, goalsForCupping: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/* reCAPTCHA Checkbox */}
                            <div className="pt-4">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                    onChange={setCaptchaToken}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn btn-primary py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all mt-4"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <span className="spinner"></span>
                                        Submitting...
                                    </span>
                                ) : (
                                    "SUBMIT APPLICATION"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
