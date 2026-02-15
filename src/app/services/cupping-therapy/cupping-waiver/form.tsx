"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function CuppingWaiverForm() {
    const [formData, setFormData] = useState({
        participantNameTop: "",
        participantNameBody: "",
        witnessNameBody: "",
        participantNameSig: "",
        witnessNameSig: "",
        participantDate: new Date().toISOString().split('T')[0],
        witnessDate: new Date().toISOString().split('T')[0],
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaToken, setCaptchaToken] = useState<string | null>(null);
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // 1. Check for empty fields
        if (!formData.participantNameTop.trim() || !formData.participantNameBody.trim() || 
            !formData.witnessNameBody.trim() || !formData.participantNameSig.trim() || 
            !formData.witnessNameSig.trim()) {
            toast.error("Please fill in all name fields.");
            return;
        }

        // 2. Validation: Participant Name Match (Top vs Body vs Signature)
        const pTop = formData.participantNameTop.trim().toLowerCase();
        const pBody = formData.participantNameBody.trim().toLowerCase();
        const pSig = formData.participantNameSig.trim().toLowerCase();

        if (pTop !== pSig || pBody !== pSig) {
            toast.error("Participant name in signature must match the names in the agreement body and header.");
            return;
        }

        // 3. Validation: Witness Name Match
        if (formData.witnessNameBody.trim().toLowerCase() !== formData.witnessNameSig.trim().toLowerCase()) {
            toast.error("Witness name in signature does not match the name in the agreement body.");
            return;
        }

        if (!captchaToken) {
            toast.error("Please complete the ReCAPTCHA.");
            return;
        }

        setIsSubmitting(true);
        const submitToast = toast.loading("Submitting waiver...");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formName: "Cupping Therapy Waiver",
                    pageSource: "/services/cupping-therapy/cupping-waiver",
                    fields: {
                        "Participant Name (Top)": formData.participantNameTop,
                        "Participant Name (Body)": formData.participantNameBody,
                        "Participant Name (Signature)": formData.participantNameSig,
                        "Participant Signature Date": formData.participantDate,
                        "Witness Name (Body)": formData.witnessNameBody,
                        "Witness Name (Signature)": formData.witnessNameSig,
                        "Witness Signature Date": formData.witnessDate,
                        "Agreement": "User has read and agreed to all terms in the waiver.",
                    }
                }),
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Waiver submitted successfully!", { id: submitToast });
                setFormData({
                    participantNameTop: "",
                    participantNameBody: "",
                    witnessNameBody: "",
                    participantNameSig: "",
                    witnessNameSig: "",
                    participantDate: new Date().toISOString().split('T')[0],
                    witnessDate: new Date().toISOString().split('T')[0],
                });
                setCaptchaToken(null);
                if (recaptchaRef.current) recaptchaRef.current.reset();
            } else {
                toast.error(data.message || "Failed to submit waiver.", { id: submitToast });
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
                        <div className="mb-8 text-center border-b border-neutral-200 pb-6">
                            <h2 className="text-2xl font-bold text-neutral-800 mb-2">LIABILITY, WAIVER OF CLAIMS, ASSUMPTION OF RISKS AND INDEMNITY AGREEMENT</h2>
                            <p className="text-neutral-500 font-medium tracking-wide uppercase">- WAIVER AND CONSENT FORM FOR THE HIJAMA THERAPY -</p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className="space-y-8 text-neutral-700 leading-relaxed text-sm md:text-base">

                            <div className="bg-primary-50/50 p-6 rounded-xl border border-primary-100 mb-8">
                                <p className="mb-4">
                                    I, <input 
                                        type="text" 
                                        placeholder="Enter Name Here" 
                                        className="inline-block border-b-2 border-primary-300 bg-transparent px-2 py-1 focus:outline-none focus:border-primary-600 font-semibold text-primary-900 w-full sm:w-64 text-center max-w-full"
                                        value={formData.participantNameTop}
                                        onChange={(e) => setFormData({...formData, participantNameTop: e.target.value})}
                                        required
                                    />, in consideration of the Hijama procedure (Cupping) which I will undergo at Al-Shifa Home Healthcare office, hereby WARRANT AND AGREE:
                                </p>
                            </div>

                            <ol className="list-decimal pl-5 space-y-4 marker:font-bold marker:text-primary-700">
                                <li>I understand that all treatments at this facility are therapeutic in nature. I have been informed by therapist and/or staff that there is no scientific evidence supporting the benefit of Hijama, and have been advised to pursue conventional medical procedures to treat my symptoms.</li>
                                <li>I have undergone an assessment with a therapist and/or their staff to determine my general medical condition and fitness for Hijama.</li>
                                <li>I am familiar with and accept that there are risks to my health and wellbeing associated with undergoing Hijama, and in particular the risk of infection associated with wet cupping.</li>
                                <li>It has been explained to me that there are contraindications for Cupping Therapy. I have fully disclosed all health factors to my therapist, including those not mentioned on my Health History Intake Form, to avoid any complications. I have provided therapist and/or their staff with all of my relevant medical history information and have satisfied myself and believe that I am in sufficiently good health to undergo Hijama.</li>
                                <li>I understand that all applicable after-care recommendations must be followed.</li>
                                <li>I agree to communicate to the therapist any physical discomfort or draping issues during the session. I will immediately inform the therapist and/or their staff if at any time I feel that I have experienced any deterioration in my physical wellbeing during the Hijama procedure.</li>
                                <li>Information has been provided to me about Cupping Therapy. If I choose to experience these therapies during treatments, I understand the potential effects and after-care recommendations.</li>
                                <li>It has been explained to me that there is the possibility of discolorations that can occur from the release and clearing of stagnation and toxins from my body.</li>
                                <li>I also understand that this reaction is not bruising, but due to cellular debris, pathogenic factors and toxins being drawn to the surface to be cleared away by my circulatory systems.</li>
                                <li>I further understand that the discolorations will dissipate from a few hours to as long as 2 weeks in some cases and in relation to my after-care activities.</li>
                                <li>I understand that the first time I experience Cupping, my body’s immune system can temporarily react to this release as it might with the flu — producing flu-like effects like nausea, headache, aches, that will subside in time with rest and water. Water helps to dilute the intensity of the release.</li>
                                <li>I understand that Cupping Therapy modalities should not be combined with aggressive exfoliation, 4 hrs after shaving, after sunburn or when I'm hungry or thirsty.</li>
                                <li>I understand that I should avoid exposure to cold, wet, and/or windy weather conditions, hot showers, baths, saunas, hot tubs and aggressive exercise for 4 - 6 hours. I understand that exposure to such extremes can produce undesirable effects and I should avoid such situations.</li>
                                <li>I understand that I should avoid caffeine, alcohol, sugary foods and drinks, dairy and processed ‘meats and | should consume an abundance of clean water.</li>
                            </ol>

                            <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4 text-sm font-medium">
                                <p className="font-bold text-neutral-900">I UNDERSTAND AND AGREE, ON BEHALF OF MYSELF, MY HEIRS, ASSIGNS, PERSONAL REPRESENTATIVES AND NEXT OF KIN THAT MY EXECUTION OF THIS DOCUMENT CONSTITUTES:</p>
                                <ol className="list-decimal pl-5 space-y-2">
                                    <li>AN UNQUALIFIED ASSUMPTION BY ME OF ALL RISKS associated with my Hijama procedure even if arising from the negligence or gross negligence of the Releasees, as that term is defined below;</li>
                                    <li>A FULL AND FINAL RELEASE AND WAIVER OF LIABILITY AND ALL CLAIMS that I have, or may in the future have, against therapist, their executors, administrators, heirs, successors, assigns, any related professional corporations, employees, agents, and representatives (collectively referred to as the “Releasees”) from any and all liability for any loss, damage, injury or expense that I may suffer as a result of my Hijama procedure, due to any cause whatsoever, including negligence, gross negligence, breach of contract, or breach of any statutory or other duty of care.</li>
                                    <li>AN AGREEMENT NOT TO SUE THE RELEASEES for any loss, injury, costs or damages of any form or type, howsoever caused or arising, and whether directly or indirectly from my participation in Hijama.</li>
                                    <li>AN AGREEMENT TO INDEMNIFY, and to SAVE and HOLD HARMLESS the Releasees, and each of them, from any litigation expense, legal fees, liability, damage, award or cost, of any form or type whatsoever, they may incur due to any claim made against them or any one of them by me or on my behalf, or that of my estate, whether the claim is based on the negligence or the gross negligence of the Releasees or otherwise as stated above; and</li>
                                    <li>AN AGREEMENT that this document be governed by the laws of the Province of Ontario.</li>
                                </ol>
                            </div>

                            <div className="mb-4">
                                <p className="font-semibold text-neutral-800">
                                    I, <input 
                                        type="text" 
                                        placeholder="Enter Participant Name" 
                                        className="inline-block border-b-2 border-neutral-400 bg-transparent px-2 py-1 focus:outline-none focus:border-primary-600 font-bold text-neutral-900 w-full sm:w-48 text-center max-w-full"
                                        value={formData.participantNameBody}
                                        onChange={(e) => setFormData({...formData, participantNameBody: e.target.value})}
                                        required
                                    />, AGREE TO ALLOW THE CUPPING PRACTITIONER TO PERFORM CUPPING. I ALSO AGREE THAT I HAVE READ, UNDERSTAND AND WILL FOLLOW ALL OF THE INFORMATION STATED ABOVE AND WILL NOT HOLD THE PRACTITIONER RESPONSIBLE AND I AM AWARE THAT BY SIGNING THIS AGREEMENT I AM WAIVING CERTAIN SUBSTANTIAL LEGAL RIGHTS WHICH I AND MY HEIRS, NEXT OF KIN, EXECUTORS, ADMINISTRATORS AND ASSIGNS MAY HAVE AGAINST THE RELEASEES.
                                </p>
                                <p className="font-semibold text-neutral-800 mt-2">
                                    Witnessed by: <input 
                                        type="text" 
                                        placeholder="Enter Witness Name" 
                                        className="inline-block border-b-2 border-neutral-400 bg-transparent px-2 py-1 focus:outline-none focus:border-primary-600 font-bold text-neutral-900 w-full sm:w-48 text-center max-w-full"
                                        value={formData.witnessNameBody}
                                        onChange={(e) => setFormData({...formData, witnessNameBody: e.target.value})}
                                        required
                                    />
                                </p>
                            </div>

                            <p className="font-bold text-neutral-900 border-l-4 border-primary-500 pl-4 py-2 bg-primary-50/30">
                                I SIGN THIS DOCUMENT VOLUNTARILY AND WITHOUT INDUCEMENT.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-neutral-200">
                                {/* Participant Signature */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-700 mb-2">NAME OF PARTICIPANT *</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors bg-neutral-50"
                                            placeholder="Enter full name"
                                            value={formData.participantNameSig}
                                            onChange={(e) => setFormData({ ...formData, participantNameSig: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-700 mb-2">DATE</label>
                                        <input
                                            type="date"
                                            readOnly
                                            className="form-input w-full rounded-lg border-neutral-300 bg-neutral-100 text-neutral-500 cursor-not-allowed"
                                            value={formData.participantDate}
                                        />
                                    </div>
                                </div>

                                {/* Witness Signature */}
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-700 mb-2">NAME OF WITNESS *</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-input w-full rounded-lg border-neutral-300 focus:border-primary-500 focus:ring-primary-500 transition-colors"
                                            placeholder="Enter witness name"
                                            value={formData.witnessNameSig}
                                            onChange={(e) => setFormData({ ...formData, witnessNameSig: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-neutral-700 mb-2">DATE</label>
                                        <input
                                            type="date"
                                            readOnly
                                            className="form-input w-full rounded-lg border-neutral-300 bg-neutral-100 text-neutral-500 cursor-not-allowed"
                                            value={formData.witnessDate}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* reCAPTCHA */}
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
                                className="w-full btn btn-primary py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed transition-all transform hover:-translate-y-1"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting Waiver...
                                    </span>
                                ) : (
                                    "SUBMIT WAIVER & CONSENT"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}