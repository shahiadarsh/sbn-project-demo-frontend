'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function AboutClient() {
    return (
        <main className="bg-white relative">
            {/* Banner Section */}
            <div
                className="relative bg-cover bg-center py-[100px] text-center text-white overflow-hidden"
                style={{ backgroundImage: "linear-gradient(rgba(11, 31, 51, 0.8), rgba(11, 31, 51, 0.9)), url('/img/bg1.jpg')" }}
            >
                <div className="container mx-auto px-4">
                    <motion.h1 
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1, ease: "easeOut" } }
                        } as any}
                        className="text-[42px] font-extrabold m-0 text-white drop-shadow-lg relative z-10 tracking-tighter"
                    >
                        About Us
                    </motion.h1>
                </div>
            </div>

            {/* Main Content Wrapper with Background Image */}
            <div 
                className="relative bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{ backgroundImage: 'url("/background%20image.webp")' }}
            >
                {/* Glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/85 to-blue-100/70 pointer-events-none"></div>

                {/* Introduction Section */}
                <section className="py-24 md:py-32 relative z-10">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            {/* Text Column */}
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="flex-1"
                            >

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 leading-[1.2] tracking-tight">
                                    About SBN Healthcare Solution
                                </h2>
                                <div className="space-y-6 text-[17px] text-gray-600 font-medium leading-[1.8]">
                                    <p>
                                        We have more than 11+ years of experience in Medical Billing Services. The major benefit of outsourcing billing with SBN Healthcare Solution is an improvement in your financial performance.
                                    </p>
                                    <p>
                                        With our experienced staff, you can meet and exceed your business goals while saving more time and money than you would be trying to take care of your patient and other admin work. We function as an extension of your practice, ensuring seamless operations.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Image Column */}
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95, x: 20 },
                                    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                } as any}
                                className="flex-1 w-full max-w-xl lg:max-w-none"
                            >
                                <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden group">
                                    <img
                                        src="/img/intro-img.jpg"
                                        alt="About SBN Healthcare"
                                        className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-[#0033e7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-24 md:py-32 relative z-10 border-t border-white/40">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                            {/* Text Column */}
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={fadeUp}
                                className="flex-1"
                            >

                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-[1.2] tracking-tight">
                                    Why Choose Us?
                                </h2>
                                <p className="text-gray-600 leading-[1.8] text-[17px] mb-8 font-medium">
                                    In the complex world of medical billing, precision and reliability are paramount. Here is how we deliver value to your practice:
                                </p>
                                <ul className="list-none p-0 space-y-4">
                                    {[
                                        { strong: "Revenue Improved", text: "We consistently help our clients increase their revenue by 20% or more through accurate coding and timely follow-ups." },
                                        { strong: "Costs Reduced", text: "Outsourcing significantly lowers your administrative overhead by up to 40%, eliminating the need for in-house billing staff." },
                                        { strong: "Patient Experience", text: "By handing over the billing burden to us, we allow you to focus entirely on patient care." }
                                    ].map((item, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            variants={{
                                                hidden: { opacity: 0, x: -20 },
                                                visible: { opacity: 1, x: 0, transition: { delay: idx * 0.15, duration: 0.5 } }
                                            } as any}
                                            className="bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm flex items-start gap-4 hover:shadow-[0_15px_30px_rgba(0,51,231,0.1)] hover:-translate-y-1 transition-all duration-300"
                                        >
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 text-[#0033e7] flex items-center justify-center font-black text-sm border border-blue-100">
                                                ✓
                                            </div>
                                            <div>
                                                <strong className="block text-gray-900 font-extrabold mb-1">{item.strong}</strong>
                                                <span className="text-gray-600 text-[15px] font-medium leading-relaxed">{item.text}</span>
                                            </div>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Image Column */}
                            <motion.div 
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95, x: -20 },
                                    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
                                } as any}
                                className="flex-1 w-full max-w-xl lg:max-w-none"
                            >
                                <div className="relative rounded-2xl shadow-xl border-4 border-white overflow-hidden group">
                                    <img
                                        src="/img/feature1.jpg"
                                        alt="Why Choose Us"
                                        className="w-full h-[400px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0033e7]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="py-24 relative z-10 border-t border-white/40 mb-16">
                    <div className="container mx-auto px-4">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={fadeUp}
                            className="bg-[#0033e7] rounded-[2rem] p-12 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden shadow-[0_30px_60px_rgba(0,51,231,0.2)]"
                        >
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] -mr-32 -mt-32 pointer-events-none"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-[60px] -ml-32 -mb-32 pointer-events-none"></div>

                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 relative z-10 tracking-tight">
                                Our Mission
                            </h2>
                            <p className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/90 leading-[1.6] relative z-10 tracking-tight">
                                "To provide comprehensive, efficient, and transparent billing solutions that empower healthcare providers to focus on what they do best: caring for patients."
                            </p>
                        </motion.div>
                    </div>
                </section>
            </div>
        </main>
    );
}
