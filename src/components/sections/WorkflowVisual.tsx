'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

interface Step {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface WorkflowVisualProps {
    steps: Step[];
    title?: string;
    subtitle?: string;
}

const WorkflowVisual: React.FC<WorkflowVisualProps> = ({ steps, title, subtitle }) => {
    return (
        <div className="py-24 bg-transparent">
            <div className="container mx-auto px-4 max-w-7xl">
                {(title || subtitle) && (
                    <div className="text-center mb-20">
                        {subtitle && <span className="text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-4 block">{subtitle}</span>}
                        {title && <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{title}</h2>}
                    </div>
                )}

                <div className="relative">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[50px] left-0 w-full h-0.5 bg-slate-200/60 -translate-y-1/2 z-0"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-[100px] h-[100px] bg-white/90 backdrop-blur-md border border-white rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.05)] flex items-center justify-center mb-8 group-hover:bg-[#0033e7] group-hover:text-white group-hover:shadow-[0_15px_30px_rgba(0,51,231,0.2)] transition-all duration-500 relative flex-shrink-0">
                                    <div className="text-3xl text-[#0033e7] group-hover:text-white transition-colors">
                                        {step.icon || <span className="font-extrabold">{index + 1}</span>}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-300">
                                            <FaArrowRight className="rotate-90" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-[17px] font-extrabold text-slate-900 mb-4 uppercase tracking-[1px] group-hover:text-[#0033e7] transition-colors leading-[1.3]">
                                    {step.title}
                                </h3>
                                <p className="text-slate-600 font-medium leading-[1.7] text-[15px]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowVisual;
