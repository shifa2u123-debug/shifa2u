"use client";

import { FileText, Download } from 'lucide-react';

const educationMaterials = [
    { name: "Acid Reflux Disease", file: "Acid_Reflux_Disease.pdf" },
    { name: "Chronic Pain Syndrome", file: "Chronic_Pain_Syndrome.pdf" },
    { name: "COPD", file: "COPD.pdf" },
    { name: "Diabetes", file: "Diabetes.pdf" },
    { name: "Hyperlipidemia", file: "Hyperlipidemia.pdf" },
    { name: "Hypertension", file: "Hypertension.pdf" },
    { name: "Osteoarthritis", file: "Osteoarthritis.pdf" },
    { name: "Osteoporosis", file: "Osteoporosis.pdf" },
    { name: "Parkinson's Disease", file: "Parkinson’s_Disease.pdf" },
    { name: "Radiculopathy", file: "Radiculopathy.pdf" },
    { name: "Spondylosis", file: "Spondylosis.pdf" },
    { name: "Urinary Incontinence", file: "Urinary_Incontinence.pdf" },
    { name: "Home Health Care 101: FAQs", file: "Home_Health_Care_101_FAQs.pdf" },
];

export default function BlogsClient() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationMaterials.map((material) => (
                <div
                    key={material.name}
                    className="card p-5 flex items-center justify-between gap-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-xl border border-neutral-100 bg-white"
                    onClick={() => window.open(`/blogsPdfs/${material.file}`, '_blank')}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                            <FileText className="w-5 h-6 text-red-600" />
                        </div>
                        <span className="text-sm font-medium text-neutral-700">
                            {material.name}
                        </span>
                    </div>
                    <a
                        href={`/blogsPdfs/${material.file}`}
                        download
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className="text-neutral-400 text-primary-600 hover:text-primary-600 transition-colors p-2 rounded-full hover:bg-neutral-50"
                        title="Download PDF"
                    >
                        <Download size={20} />
                    </a>
                </div>
            ))}
        </div>
    );
}
