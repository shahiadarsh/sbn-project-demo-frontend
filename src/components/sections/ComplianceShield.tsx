'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserSecret, FaRegFileAlt } from 'react-icons/fa';
import Image from 'next/image';

const ComplianceShield = () => {
    const protocols = [
        { icon: FaLock, title: 'HIPAA Compliant', desc: 'Full adherence to healthcare security standards.' },
        { icon: FaShieldAlt, title: 'SOC 2 Ready', desc: 'Enterprise-grade data protection protocols.' },
        { icon: FaUserSecret, title: 'Data Encryption', desc: 'Secure AES-256 encryption for all patient data.' },
        { icon: FaRegFileAlt, title: 'Annual Audits', desc: 'Strict governance and regular security reviews.' }
    ];

    return (
        <section 
            className="py-20 relative overflow-hidden rounded-3xl mx-4 lg:mx-auto max-w-7xl my-16 shadow-[0_30px_60px_rgba(0,0,0,0.15)] group"
        >
            <Image
                src="/background image.webp"
                alt="Background"
                fill
                className="object-cover object-center pointer-events-none -z-20"
            />
            <div className="absolute inset-0 bg-[#0B1F33]/85 z-0 pointer-events-none"></div>
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0033e7]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="w-20 h-20 bg-[#0033e7]/20 text-[#60a5fa] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#0033e7]/30 shadow-[0_0_30px_rgba(0,51,231,0.2)]"
                        >
                            <FaShieldAlt size={40} />
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            Enterprise-Grade <span className="text-[#60a5fa]">Compliance</span>
                        </h2>
                        <p className="text-[17px] text-slate-400 font-medium leading-[1.7] max-w-2xl mx-auto">
                            Security isn't just a requirement; it's our foundation. We maintain the highest standards of data governance to protect your practice and your patients.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {protocols.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all group lg:flex items-center gap-6"
                            >
                                <div className="w-16 h-16 bg-black/30 rounded-xl flex items-center justify-center text-[#60a5fa] border border-white/5 shadow-inner mb-6 lg:mb-0 group-hover:bg-[#0033e7] group-hover:text-white group-hover:scale-110 transition-all flex-shrink-0">
                                    <item.icon size={24} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight">{item.title}</h3>
                                    <p className="text-slate-400 text-[15px] leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ComplianceShield;
