'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { specialtiesList } from '@/data/services';
import { notFound } from 'next/navigation';
import KPIMetrics from '@/components/sections/KPIMetrics';
import WorkflowVisual from '@/components/sections/WorkflowVisual';
import ProblemSnapshot from '@/components/sections/ProblemSnapshot';
import AIIndicator from '@/components/sections/AIIndicator';
import ComplianceShield from '@/components/sections/ComplianceShield';
import { FaArrowRight } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function SpecialtyDetailClient({ slug }: { slug: string }) {
    const specialty = specialtiesList.find((s) => s.slug === slug);
    if (!specialty) return notFound();

    return (
        <main 
            className="relative selection:bg-[#0033e7] selection:text-white pb-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: 'url("/background%20image.webp")' }}
        >
            {/* Global Light Glass Overlay over the image */}
            <div className="absolute inset-0 bg-white/20 z-0 pointer-events-none"></div>

            {/* Custom Premium Hero (Light Theme) */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 text-center px-4 relative overflow-hidden z-10">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] right-[15%] w-[600px] h-[600px] bg-[#0033e7]/10 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-[-20%] left-[5%] w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,51,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,51,231,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                </div>
                
                <div className="container mx-auto max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-[#0033e7] font-bold uppercase text-[11px] tracking-[3px] mb-8 px-5 py-2 rounded-full shadow-sm">
                            <span className="w-2 h-2 bg-[#0033e7] rounded-full animate-pulse shadow-[0_0_10px_rgba(0,51,231,0.5)]"></span>
                            Industry Expertise
                        </div>
                        <h1 className="text-4xl md:text-[3.5rem] lg:text-[4rem] font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
                            {specialty.bannerTitle}
                        </h1>
                        <p className="text-[17px] md:text-[19px] text-slate-600 font-medium leading-[1.7] max-w-2xl mx-auto">
                            {specialty.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="relative flex flex-col pt-10 border-t border-white/50 z-10">
                <div className="relative z-10 pb-24">
                    {/* Dynamic Sections */}
                    {specialty.sections.map((section: any, index: number) => {
                        const isCta = section.type === 'cta';

                        // Handle Specialized Section Types
                        if (section.type === 'problem-snapshot') {
                            return <ProblemSnapshot key={index} title={section.title} description={section.description} points={section.data || []} />;
                        }

                        if (section.type === 'workflow') {
                            return <WorkflowVisual key={index} title={section.title} subtitle={section.subtitle} steps={section.data || []} />;
                        }

                        if (section.type === 'kpi') {
                            return <KPIMetrics key={index} title={section.title} subtitle={section.subtitle} metrics={section.data || []} />;
                        }

                        if (section.type === 'ai-indicator') {
                            return <AIIndicator key={index} stage={section.stage || ''} description={section.description || ''} impact={section.data || ''} />;
                        }

                        if (section.type === 'compliance-shield') {
                            return <ComplianceShield key={index} />;
                        }

                        // CTA Section
                        if (isCta) {
                            return (
                                <section key={index} 
                                    className="text-white relative py-20 overflow-hidden my-16 rounded-3xl mx-4 lg:mx-auto max-w-7xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] group bg-cover bg-center"
                                    style={{ backgroundImage: 'url("/background%20image.webp")' }}
                                >
                                    {/* Sub-block Dark Overlay to keep text readable against the background image */}
                                    <div className="absolute inset-0 bg-[#0B1F33]/85 z-0"></div>
                                     <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0033e7]/30 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none z-0"></div>
                                    <div className="container mx-auto px-10 relative z-10 text-center">
                                        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white tracking-tight leading-[1.2]">
                                            {section.title}
                                        </h2>
                                        {section.content && (
                                            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium mb-12">
                                                {section.content}
                                            </p>
                                        )}
                                        <Link href="/contact-us" className="bg-[#0033e7] text-white px-12 py-5 rounded-2xl font-bold inline-flex items-center gap-4 transition-all duration-300 uppercase tracking-[2px] hover:bg-blue-800 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,51,231,0.3)] text-sm shadow-xl no-underline">
                                            Get Specialized Audit <FaArrowRight />
                                        </Link>
                                    </div>
                                </section>
                            );
                        }

                        // Regular Text/Image Section
                        return (
                            <section key={index} className="py-20 lg:py-28 relative">
                                <div className="container mx-auto px-4 max-w-7xl">
                                    <motion.div 
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        variants={fadeUp}
                                        className="flex flex-col md:flex-row items-center gap-16"
                                    >
                                        {/* Image Left */}
                                        {section.image && section.imagePosition === 'left' && (
                                            <div className="flex-1 w-full order-2 md:order-1">
                                                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,51,231,0.08)] border border-white group">
                                                    <img
                                                        src={section.image}
                                                        alt={section.title || specialty.title}
                                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* Content Block */}
                                        <div className={`flex-1 w-full ${section.image && section.imagePosition === 'left' ? 'order-1 md:order-2' : ''}`}>
                                            {section.title && (
                                                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 leading-[1.2] tracking-tight">
                                                    {section.title}
                                                </h2>
                                            )}

                                            {section.content && (
                                                <div className="space-y-6">
                                                    {Array.isArray(section.content) ? (
                                                        section.content.map((para: string, i: number) => <p key={i} className="text-slate-600 leading-[1.8] text-[17px] font-medium">{para}</p>)
                                                    ) : (
                                                        <p className="text-slate-600 leading-[1.8] text-[17px] font-medium">{section.content}</p>
                                                    )}
                                                </div>
                                            )}

                                            {section.list && (
                                                <ul className="mt-8 space-y-4">
                                                    {section.list.map((item: string, i: number) => (
                                                        <li key={i} className="flex items-start gap-4 text-slate-700 text-[17px] font-semibold tracking-tight">
                                                            <div className="w-6 h-6 rounded-full bg-[#0033e7]/10 text-[#0033e7] flex items-center justify-center flex-shrink-0 mt-1">
                                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                            </div>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        {/* Image Right */}
                                        {section.image && section.imagePosition === 'right' && (
                                            <div className="flex-1 w-full order-2">
                                                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,51,231,0.08)] border border-white group">
                                                    <img
                                                        src={section.image}
                                                        alt={section.title || specialty.title}
                                                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </div>
                            </section>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
