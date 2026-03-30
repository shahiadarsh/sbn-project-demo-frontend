'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExclamationTriangle } from 'react-icons/fa';

interface PainPoint {
    title: string;
    description: string;
}

interface ProblemSnapshotProps {
    points: PainPoint[];
    title?: string;
    description?: string;
}

const ProblemSnapshot: React.FC<ProblemSnapshotProps> = ({ points, title, description }) => {
    return (
        <div className="py-24 bg-transparent border-b border-white/50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3">
                        <span className="text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-4 flex items-center gap-2">
                            <FaExclamationTriangle /> Critical Challenges
                        </span>
                        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.2]">
                            {title || "The Reality of Modern Revenue Cycles"}
                        </h2>
                        <p className="text-[17px] text-slate-600 font-medium leading-[1.7]">
                            {description || "Manual workflows and fragmented data often lead to significant revenue leakage. We identify and neutralize these vulnerabilities."}
                        </p>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {points.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-white/50 shadow-sm group hover:shadow-[0_15px_30px_rgba(0,51,231,0.06)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-[17px] font-extrabold text-slate-900 mb-3 uppercase tracking-[1px]">
                                    {point.title}
                                </h3>
                                <p className="text-slate-600 font-medium text-[15px] leading-relaxed">
                                    {point.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemSnapshot;
