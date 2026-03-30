'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Metric {
    value: string;
    label: string;
    description?: string;
}

interface KPIMetricsProps {
    metrics: Metric[];
    title?: string;
    subtitle?: string;
}

const KPIMetrics: React.FC<KPIMetricsProps> = ({ metrics, title, subtitle }) => {
    return (
        <div className="py-20 bg-transparent">
            <div className="container mx-auto px-4 max-w-7xl">
                {(title || subtitle) && (
                    <div className="text-center mb-16">
                        {subtitle && <span className="text-[#0033e7] font-bold uppercase text-[11px] tracking-[4px] mb-4 block">{subtitle}</span>}
                        {title && <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">{title}</h2>}
                    </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-10 rounded-2xl bg-white/80 backdrop-blur-md border border-white shadow-sm hover:shadow-[0_20px_40px_rgba(0,51,231,0.08)] hover:-translate-y-2 transition-all duration-500 group"
                        >
                            <div className="text-4xl lg:text-5xl font-black text-[#0033e7] mb-4 tracking-tighter group-hover:scale-110 transition-transform origin-left">
                                {metric.value}
                            </div>
                            <div className="text-[17px] font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                                {metric.label}
                            </div>
                            {metric.description && (
                                <p className="text-slate-600 text-[15px] font-medium leading-[1.7]">
                                    {metric.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KPIMetrics;
