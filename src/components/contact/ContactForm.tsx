'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contacts`, {
                ...formData,
                subject: 'General Inquiry' // Default subject for contact form
            });
            setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-2xl shadow-[0_20px_60px_rgba(0,51,231,0.06)] border border-white"
        >
            <div className="mb-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3 tracking-tight">Request an Audit</h3>
                <p className="text-slate-500 font-medium text-[15px]">Fill out the form below and an RCM specialist will reach out within 24 hours.</p>
            </div>

            {status.message && (
                <div className={`mb-8 p-6 rounded-xl text-sm font-bold border ${status.type === 'success' ? 'bg-green-50 text-green-600 border-green-100' :
                    status.type === 'error' ? 'bg-red-50 text-red-600 border-red-100' :
                        'bg-blue-50 text-[#0033e7] border-blue-100'
                    }`}>
                    <div className="flex items-center gap-3">
                        {status.type === 'loading' && <span className="w-4 h-4 border-2 border-[#0033e7] border-t-transparent rounded-full animate-spin"></span>}
                        {status.message}
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] font-medium text-slate-700"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="(555) 000-0000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] font-medium text-slate-700"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="block text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] font-medium text-slate-700"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="block text-[11px] font-black uppercase text-slate-500 tracking-widest ml-1">Message / Requirements</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="How can we help your practice?"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl transition-all focus:outline-none focus:border-[#0033e7] focus:bg-white focus:shadow-[0_0_0_4px_rgba(0,51,231,0.1)] font-medium text-slate-700 resize-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="w-full flex items-center justify-center gap-2 bg-[#0033e7] text-white font-black py-5 rounded-xl uppercase tracking-[3px] text-xs transition-all hover:bg-blue-800 hover:shadow-[0_15px_30px_rgba(0,51,231,0.25)] hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 group"
                >
                    {status.type === 'loading' ? 'Sending Request...' : 'Submit Inquiry'}
                    {!status.type && (
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    )}
                </button>
            </form>
        </motion.div>
    );
}
