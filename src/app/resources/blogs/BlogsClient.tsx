"use client";

import { FileText, Download } from 'lucide-react';

const educationMaterials = [
    { name: "Acid Reflux Disease", file: "https://drive.google.com/file/d/1J3uF1SE2yEAnNMiu6EFkTMN_ZklRWE0G/view?usp=drive_link" },
    { name: "Chronic Pain Syndrome", file: "https://drive.google.com/file/d/1VUiEXj3t7CepfaJ_KSo-8bjumrQdnFdB/view?usp=drive_link" },
    { name: "COPD", file: "https://drive.google.com/file/d/1MmtGwRHW06AOenWa5v8zR_ilGTCTvZh0/view?usp=drive_link" },
    { name: "Diabetes", file: "https://drive.google.com/file/d/16NAylilTgtIOFlGjD55DCLSv9GIs-KoX/view?usp=drive_link" },
    { name: "Hyperlipidemia", file: "https://drive.google.com/file/d/17CoXO403eBnVnc0_BF8dx3iydElcLFGe/view?usp=drive_link" },
    { name: "Hypertension", file: "https://drive.google.com/file/d/17CoXO403eBnVnc0_BF8dx3iydElcLFGe/view?usp=drive_link" },
    { name: "Osteoarthritis", file: "https://drive.google.com/file/d/1P8ZYZV_fUADmDILKlVikK09DS7DSiurF/view?usp=drive_link" },
    { name: "Osteoporosis", file: "https://drive.google.com/file/d/1EPqqY66qxmKN9jo0HCm7b9OxPhZ2YLDf/view?usp=sharing" },
    { name: "Parkinson's Disease", file: "https://drive.google.com/file/d/17CoXO403eBnVnc0_BF8dx3iydElcLFGe/view?usp=drive_link" },
    { name: "Radiculopathy", file: "https://drive.google.com/file/d/1nLBFq4bd4ZmbnCzpEJvR6tYqtDvzCpbR/view?usp=sharing" },
    { name: "Spondylosis", file: "https://drive.google.com/file/d/1nLBFq4bd4ZmbnCzpEJvR6tYqtDvzCpbR/view?usp=sharing" },
    { name: "Urinary Incontinence", file: "https://drive.google.com/file/d/17CoXO403eBnVnc0_BF8dx3iydElcLFGe/view?usp=drive_link" },
    { name: "Home Health Care 101: FAQs", file: "https://drive.google.com/file/d/17CoXO403eBnVnc0_BF8dx3iydElcLFGe/view?usp=drive_link" },
];

export default function BlogsClient() {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {educationMaterials.map((material) => (
                <div
                    key={material.name}
                    className="card p-5 flex items-center justify-between gap-4 cursor-pointer hover:shadow-lg transition-shadow duration-300 rounded-xl border border-neutral-100 bg-white"
                    onClick={() => window.open(`${material.file}`, '_blank')}
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
                        href={`${material.file}`}
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
