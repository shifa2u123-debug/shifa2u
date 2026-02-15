"use client";

import { useState, useRef } from "react";
import { CirclePlus, ChevronDown } from "lucide-react";
import { toast } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

export default function CareerRequestForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        phone: "",
        previousExperience: "",
        license: "",
        above18: "",
        driverLicense: "",
        ownCar: "",
        shiftPreference: "",

        resumeFile: null as File | null,

        hearAboutUs: ""
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
            // Convert file to base64 if present
            let fileData = null;
            if (formData.resumeFile) {
                fileData = await new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve({
                        name: formData.resumeFile?.name,
                        type: formData.resumeFile?.type,
                        content: (reader.result as string).split(',')[1] // Remove data URL prefix
                    });
                    reader.onerror = reject;
                    reader.readAsDataURL(formData.resumeFile!);
                });
            }

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Career Request",
                    pageSource: "/careers",
                    fields: {
                        "Name": formData.name,
                        Email: formData.email,
                        Address: formData.address,
                        City: formData.city,
                        State: formData.state,
                        "ZIP Code": formData.zip,
                        Phone: formData.phone,
                        "License": formData.license,
                        "Above 18": formData.above18,
                        "Driver License": formData.driverLicense,
                        "Own Car": formData.ownCar,
                        "Shift Preference": formData.shiftPreference,
                        "Previous Experience": formData.previousExperience,

                        "How you heard about us?": formData.hearAboutUs
                    },
                    attachments: fileData ? [fileData] : []
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Request submitted successfully!", { id: submitToast });
                setFormData({
                    name: "",
                    email: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    phone: "",
                    previousExperience: "",
                    license: "",
                    above18: "",
                    driverLicense: "",
                    ownCar: "",
                    shiftPreference: "",
                    resumeFile: null,
                    hearAboutUs: ""
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
        <>


            <section className="section bg-white pt-2">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="card p-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Patient Information */}
                                <div>
                                    {/* <h3 className="text-lg font-semibold text-neutral-700 mb-4 pb-2 border-b border-neutral-200">
                                        Patient Information
                                    </h3> */}
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
                                            <label className="form-label">ADDRESS *</label>
                                            <input type="text" required className="form-input" placeholder="Enter address here"
                                                value={formData.address}
                                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
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
                                                    <option value="" disabled>- Select a state - </option>
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

                                {/* Radio Preference */}
                                <div>
                                    <h3 className="text-md font-semibold text-neutral-700 mb-4">WHAT LICENSE DO YOU CURRENTLY HOLD? </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["HHA", "LPN", "RN", "Other"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2 transition-all ${formData.license === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300"
                                                }`}>
                                                <input type="radio" name="license" value={method}
                                                    checked={formData.license === method}
                                                    onChange={(e) => setFormData({ ...formData, license: e.target.value })}
                                                    className="accent-primary-600 h-4 w-4"
                                                />
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-neutral-700 mb-4">ARE YOU ABOVE 18? </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["Yes", "No"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2 transition-all ${formData.above18 === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300"
                                                }`}>
                                                <input type="radio" name="above18" value={method}
                                                    checked={formData.above18 === method}
                                                    onChange={(e) => setFormData({ ...formData, above18: e.target.value })}
                                                    className="accent-primary-600 h-4 w-4"
                                                />
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-neutral-700 mb-4">DO YOU HAVE A DRIVER'S LICENSE? </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["Yes", "No"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2 transition-all ${formData.driverLicense === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300"
                                                }`}>
                                                <input type="radio" name="driverLicense" value={method}
                                                    checked={formData.driverLicense === method}
                                                    onChange={(e) => setFormData({ ...formData, driverLicense: e.target.value })}
                                                    className="accent-primary-600 h-4 w-4"
                                                />
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-neutral-700 mb-4">DO YOU OWN A CAR? </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["Yes", "No"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2 transition-all ${formData.ownCar === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300"
                                                }`}>
                                                <input type="radio" name="ownCar" value={method}
                                                    checked={formData.ownCar === method}
                                                    onChange={(e) => setFormData({ ...formData, ownCar: e.target.value })}
                                                    className="accent-primary-600 h-4 w-4"
                                                />
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-md font-semibold text-neutral-700 mb-4">WHAT SHIFTS WOULD YOU PREFER?? </h3>
                                    <div className="flex flex-wrap gap-4">
                                        {["Days", "PM", "Nights", "Live-in"].map((method) => (
                                            <label key={method} className={`flex items-center gap-2 cursor-pointer rounded-lg border px-4 py-2 transition-all ${formData.shiftPreference === method
                                                ? "border-primary-600 bg-primary-50 text-primary-700 font-medium"
                                                : "border-neutral-200 bg-white text-neutral-600 hover:border-primary-300"
                                                }`}>
                                                <input type="radio" name="shiftPreference" value={method}
                                                    checked={formData.shiftPreference === method}
                                                    onChange={(e) => setFormData({ ...formData, shiftPreference: e.target.value })}
                                                    className="accent-primary-600 h-4 w-4"
                                                />
                                                {method}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="form-label">PREVIOUS EXPERIENCE</label>
                                    <textarea className="form-input form-textarea h-32" placeholder="Enter additional details here..."
                                        value={formData.previousExperience}
                                        onChange={(e) => setFormData({ ...formData, previousExperience: e.target.value })}
                                    />
                                </div>



                                <div>
                                    <label className="form-label">
                                        ATTACH RESUME *
                                        <span className="block text-xs font-normal text-neutral-500 mt-1">
                                            (accepted file formats: .doc, .docx, .pdf | max. 10mb) *
                                        </span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="file"
                                            accept=".doc,.docx,.pdf"
                                            className="hidden"
                                            required
                                            id="resumeFile"
                                            onChange={(e) => setFormData({ ...formData, resumeFile: e.target.files ? e.target.files[0] : null })}
                                        />
                                        <label htmlFor="resumeFile" className="form-input cursor-pointer flex items-center justify-between hover:bg-neutral-50">
                                            <span className={formData.resumeFile ? "text-neutral-800" : "text-neutral-400"}>
                                                {formData.resumeFile ? formData.resumeFile.name : "Choose a file"}
                                            </span>

                                            <CirclePlus />

                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label className="form-label">HOW DID YOU HEAR ABOUT US?</label>
                                    <input type="text" className="form-input" placeholder="Enter details here"
                                        value={formData.hearAboutUs}
                                        onChange={(e) => setFormData({ ...formData, hearAboutUs: e.target.value })}
                                    />
                                </div>



                                {/* reCAPTCHA Checkbox */}
                                <div className="py-2">
                                    <ReCAPTCHA
                                        ref={recaptchaRef}
                                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                        onChange={setCaptchaToken}
                                    />
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
