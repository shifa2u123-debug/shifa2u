"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function TestimonialsForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        comment: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isRobot, setIsRobot] = useState(true); // Default to true (robot) until checked

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isRobot) {
            toast.error("Please confirm you are not a robot.");
            return;
        }

        setIsSubmitting(true);
        const submitToast = toast.loading("Submitting your request...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Testimonial",
                    pageSource: "/resources/testimonials",
                    fields: {
                        "Name": formData.name,
                        Email: formData.email,
                        Comment: formData.comment,
                    },
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Request submitted successfully!", { id: submitToast });
                setFormData({
                    name: "",
                    email: "",
                    comment: "",
                });
                setIsRobot(true); // Reset captcha
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
                                    <h4 className="pb-2 text-sm">* Your email address will not be published.</h4>
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
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">COMMENT *</label>
                                    <textarea className="form-input form-textarea h-32" placeholder="Enter your comment here..."
                                        value={formData.comment}
                                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                    />
                                </div>



                                {/* reCAPTCHA Checkbox */}
                                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 w-fit">
                                    <label className="flex items-center gap-3 cursor-pointer select-none">
                                        <div className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-colors ${!isRobot ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400 hover:border-gray-500'}`}>
                                            {!isRobot && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            <input type="checkbox" className="hidden"
                                                checked={!isRobot}
                                                onChange={() => setIsRobot(!isRobot)}
                                            />
                                        </div>
                                        <span className="text-sm text-gray-600 font-medium">I'm not a robot</span>
                                        <div className="ml-2 flex flex-col items-center">
                                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="w-8 h-8 opacity-70" />
                                            <span className="text-[10px] text-gray-500">reCAPTCHA</span>
                                        </div>
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
                                        "SUBMIT"
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
