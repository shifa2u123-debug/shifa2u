"use client";

import { useState } from "react";
import { CirclePlus, ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";


export default function FreeAssessmentForm() {
    const [formData, setFormData] = useState({
        patientName: "",
        dateOfBirth: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        contactPreference: "",
        email: "",
        fax: "",
        phone: "",
        bestTime: "",
        insuranceFile: null as File | null,
        preferredDate: "",
        preferredTime: "",
        comment: ""
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
            // Convert file to base64 if present
            let fileData = null;
            if (formData.insuranceFile) {
                fileData = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve({
                        name: formData.insuranceFile?.name,
                        type: formData.insuranceFile?.type,
                        content: (reader.result as string).split(',')[1] // Remove data URL prefix
                    });
                    reader.onerror = reject;
                    reader.readAsDataURL(formData.insuranceFile!);
                });
            }

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Free In-Home Assessment Request",
                    pageSource: "/free-assessment",
                    fields: {
                        "Patient Name": formData.patientName,
                        "Date of Birth": formData.dateOfBirth,
                        Address: formData.address,
                        City: formData.city,
                        State: formData.state,
                        "ZIP Code": formData.zip,
                        "Contact Preference": formData.contactPreference,
                        Email: formData.email,
                        Fax: formData.fax,
                        Phone: formData.phone,
                        "Best Time to Call": formData.bestTime,
                        "Preferred Date": formData.preferredDate,
                        "Preferred Time": formData.preferredTime,
                        Comment: formData.comment,
                    },
                    attachments: fileData ? [fileData] : []
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Request submitted successfully!", { id: submitToast });
                setFormData({
                    patientName: "",
                    dateOfBirth: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    contactPreference: "",
                    email: "",
                    fax: "",
                    phone: "",
                    bestTime: "",
                    insuranceFile: null,
                    preferredDate: "",
                    preferredTime: "",
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
                        <div className="card p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Patient Information */}
                                <div>
                                    <h3 className="text-lg font-semibold text-neutral-700 mb-4 pb-2 border-b border-neutral-200">
                                        Patient Information
                                    </h3>
                                    <h4 className="text-red-500 pb-4 text-sm">* Required Information</h4>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="form-label">NAME *</label>
                                            <input type="text" required className="form-input" placeholder="Enter name here"
                                                value={formData.patientName}
                                                onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">ADDRESS *</label>
                                            <input type="text" required className="form-input" placeholder="Enter address here"
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">DATE OF BIRTH *</label>
                                            <input type="date" required className="form-input"
                                                value={formData.dateOfBirth}
                                                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">CITY *</label>
                                            <input type="text" required className="form-input"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="form-label">STATE *</label>
                                            <div className="relative">
                                                <select className="form-input appearance-none bg-white cursor-pointer w-full" required
                                                    value={formData.state}
                                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                                >
                                                    <option value="" disabled>- Select a state -</option>
                                                    {/* Shortened list for brevity, can add full list if needed */}
                                                    <option value="AL">Alabama</option>
                                                    <option value="AK">Alaska</option>
                                                    <option value="AZ">Arizona</option>
                                                    <option value="AR">Arkansas</option>
                                                    <option value="CA">California</option>
                                                    <option value="CO">Colorado</option>
                                                    <option value="CT">Connecticut</option>
                                                    <option value="DE">Delaware</option>
                                                    <option value="DC">District of Columbia</option>
                                                    <option value="FL">Florida</option>
                                                    <option value="GA">Georgia</option>
                                                    <option value="HI">Hawaii</option>
                                                    <option value="ID">Idaho</option>
                                                    <option value="IL">Illinois</option>
                                                    <option value="IN">Indiana</option>
                                                    <option value="IA">Iowa</option>
                                                    <option value="KS">Kansas</option>
                                                    <option value="KY">Kentucky</option>
                                                    <option value="LA">Louisiana</option>
                                                    <option value="ME">Maine</option>
                                                    <option value="MD">Maryland</option>
                                                    <option value="MA">Massachusetts</option>
                                                    <option value="MI">Michigan</option>
                                                    <option value="MN">Minnesota</option>
                                                    <option value="MS">Mississippi</option>
                                                    <option value="MO">Missouri</option>
                                                    <option value="MT">Montana</option>
                                                    <option value="NE">Nebraska</option>
                                                    <option value="NV">Nevada</option>
                                                    <option value="NH">New Hampshire</option>
                                                    <option value="NJ">New Jersey</option>
                                                    <option value="NM">New Mexico</option>
                                                    <option value="NY">New York</option>
                                                    <option value="NC">North Carolina</option>
                                                    <option value="ND">North Dakota</option>
                                                    <option value="OH">Ohio</option>
                                                    <option value="OK">Oklahoma</option>
                                                    <option value="OR">Oregon</option>
                                                    <option value="PA">Pennsylvania</option>
                                                    <option value="RI">Rhode Island</option>
                                                    <option value="SC">South Carolina</option>
                                                    <option value="SD">South Dakota</option>
                                                    <option value="TN">Tennessee</option>
                                                    <option value="TX">Texas</option>
                                                    <option value="UT">Utah</option>
                                                    <option value="VT">Vermont</option>
                                                    <option value="VA">Virginia</option>
                                                    <option value="WA">Washington</option>
                                                    <option value="WV">West Virginia</option>
                                                    <option value="WI">Wisconsin</option>
                                                    <option value="WY">Wyoming</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                                    <ChevronDown className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="form-label">ZIP CODE *</label>
                                            <input type="text" required className="form-input"
                                                value={formData.zip}
                                                onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Preference */}
                                <div>
                                    <h3 className="text-md font-semibold text-neutral-700 mb-4">How Would You Like to Be Contacted? *</h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["Phone", "Fax", "Email"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2 transition-all ${formData.contactPreference === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300"
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

                                {/* Contact Details */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="form-label">EMAIL ADDRESS *</label>
                                        <input type="email" required className="form-input" placeholder="example@domain.com"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">FAX NUMBER</label>
                                        <input type="tel" className="form-input" placeholder="(555) 555-5555"
                                            value={formData.fax}
                                            onChange={(e) => setFormData({ ...formData, fax: e.target.value })}
                                        />
                                    </div>
                                    <div className="md:col-span-2 grid md:grid-cols-2 gap-4">
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
                                        <div>
                                            <label className="form-label">BEST TIME TO CALL *</label>
                                            <div className="relative">
                                                <select className="form-input appearance-none bg-white cursor-pointer w-full" required
                                                    value={formData.bestTime}
                                                    onChange={(e) => setFormData({ ...formData, bestTime: e.target.value })}
                                                >
                                                    <option value="" disabled>- Please select -</option>
                                                    <option value="Morning">Morning</option>
                                                    <option value="Afternoon">Afternoon</option>
                                                    <option value="Evening">Evening</option>
                                                    <option value="Anytime">Anytime</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-700">
                                                    <ChevronDown className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Preferences & Insurance */}
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="form-label">PREFERRED DATE</label>
                                        <input type="date" className="form-input"
                                            value={formData.preferredDate}
                                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">PREFERRED TIME</label>
                                        <input type="time" className="form-input"
                                            value={formData.preferredTime}
                                            onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">
                                        ATTACH INSURANCE INFORMATION
                                        <span className="block text-xs font-normal text-neutral-500 mt-1">
                                            (accepted file formats: .doc, .docx, .pdf | max. 10mb) *
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept=".doc,.docx,.pdf"
                                            className="hidden"
                                            id="insuranceFile"
                                            onChange={(e) => setFormData({ ...formData, insuranceFile: e.target.files ? e.target.files[0] : null })}
                                        />
                                        <label htmlFor="insuranceFile" className="form-input cursor-pointer flex items-center justify-between hover:bg-neutral-50">
                                            <span className={formData.insuranceFile ? "text-neutral-800" : "text-neutral-400"}>
                                                {formData.insuranceFile ? formData.insuranceFile.name : "Choose a file"}
                                            </span>

                                            <CirclePlus />

                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">COMMENT</label>
                                    <textarea className="form-input form-textarea h-32" placeholder="Enter additional details here..."
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
