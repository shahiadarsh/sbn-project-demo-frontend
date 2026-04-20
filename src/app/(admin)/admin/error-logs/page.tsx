'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaExclamationTriangle, FaTrash, FaLink, FaGlobe, FaSearch, FaHistory, FaCheck, FaTimes, FaShieldAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function ErrorLogs() {
    const [logs, setLogs] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState({ type: '', message: '' });

    const fetchLogs = async () => {
        try {
            const token = localStorage.getItem('adminToken');
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/error-logs`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setLogs(res.data.data);
        } catch (err) {
            console.error('Error fetching logs:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    const showStatus = (type: string, message: string) => {
        setStatus({ type, message });
        setTimeout(() => setStatus({ type: '', message: '' }), 3000);
    };

    const clearLogs = async () => {
        if (!confirm('Are you absolutely sure you want to clear the entire security history?')) return;
        try {
            const token = localStorage.getItem('adminToken');
            const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/error-logs`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            
            if (res.data.success) {
                setLogs([]);
                showStatus('success', 'Security history purged successfully');
            } else {
                throw new Error('Failed to clear logs');
            }
        } catch (err) {
            showStatus('error', 'Critical Error: Could not clear security logs');
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-12 pb-24">
            {/* Notification Toast */}
            <AnimatePresence>
                {status.message && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className={`fixed bottom-10 right-10 z-[100] px-8 py-5 rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white backdrop-blur-xl ${status.type === 'success' ? 'bg-emerald-500/90' : 'bg-red-500/90'}`}
                    >
                        {status.type === 'success' ? <FaCheck /> : <FaTimes />}
                        {status.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 border-b border-slate-200/60 pb-12">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-red-50 border border-red-100 rounded-full">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                        <span className="text-[10px] font-black text-red-600 uppercase tracking-widest">Surveillance System Online</span>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">404 Monitoring</h1>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-[3px] leading-relaxed opacity-70">Detecting and identifying security vulnerabilities in real-time</p>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5">Database Integrity</p>
                        <p className="text-xs font-black text-slate-900 uppercase tracking-widest flex items-center gap-2 justify-end">
                            <FaShieldAlt className="text-emerald-500" /> Secure
                        </p>
                    </div>
                    <button 
                        onClick={clearLogs}
                        className="group relative overflow-hidden bg-white text-red-500 px-10 py-5 rounded-[1.8rem] font-black flex items-center gap-4 border border-red-100 shadow-[0_15px_30px_rgba(239,68,68,0.08)] hover:bg-red-500 hover:text-white transition-all duration-500 uppercase tracking-[2px] text-[11px]"
                    >
                        <FaTrash className="group-hover:rotate-12 transition-transform" />
                        <span>Purge History</span>
                    </button>
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-48 space-y-6">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[4px] animate-pulse">Scanning Security Logs...</p>
                </div>
            ) : (
                <div className="animate-fadeIn">
                    {logs.length > 0 ? (
                        <div className="bg-white rounded-[2.8rem] border border-slate-200/60 overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50/50 border-b border-slate-100">
                                            <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[3px] text-slate-400">Activity Timestamp</th>
                                            <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[3px] text-slate-400">Target Resource (Broken URL)</th>
                                            <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[3px] text-slate-400">Referer Source</th>
                                            <th className="px-10 py-8 text-[11px] font-black uppercase tracking-[3px] text-slate-400 text-right">Identifier Profile</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-50">
                                        {logs.map((log) => (
                                            <tr key={log._id} className="group hover:bg-slate-50/40 transition-all duration-500">
                                                <td className="px-10 py-8 whitespace-nowrap">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:text-red-500 transition-colors border border-slate-100">
                                                            <FaHistory size={14} />
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="text-[11px] font-black text-slate-900">{new Date(log.timestamp).toLocaleDateString()}</span>
                                                            <span className="text-[10px] font-bold text-slate-400 tabular-nums">{new Date(log.timestamp).toLocaleTimeString()}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    <div className="flex flex-col max-w-xl gap-2">
                                                        <a 
                                                            href={log.url} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="text-sm font-black text-slate-800 line-clamp-1 hover:text-[#0033e7] transition-all cursor-pointer decoration-slate-200 underline-offset-4 hover:underline"
                                                        >
                                                            {log.url}
                                                        </a>
                                                        <div className="flex items-center gap-3">
                                                            <span className="px-2.5 py-1 bg-red-50 text-red-500 text-[9px] font-black uppercase tracking-widest rounded-lg border border-red-100">
                                                                Status 404
                                                            </span>
                                                            <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Protocol: HTTPS</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-10 py-8">
                                                    {log.referer ? (
                                                        <a 
                                                            href={log.referer} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer" 
                                                            className="text-[11px] font-bold text-slate-500 truncate max-w-[200px] block italic hover:text-[#0033e7] transition-all"
                                                        >
                                                            {log.referer}
                                                        </a>
                                                    ) : (
                                                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-[2px]">Direct Access</span>
                                                    )}
                                                </td>
                                                <td className="px-10 py-8 text-right">
                                                    <div className="inline-flex flex-col items-end gap-1.5">
                                                        <span className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[2px] rounded-lg shadow-lg">{log.ip}</span>
                                                        <span className="text-[9px] text-slate-400 font-bold truncate max-w-[150px] opacity-60 uppercase tracking-tighter">{log.userAgent}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-48 bg-white rounded-[3.5rem] border-2 border-dashed border-slate-100 shadow-inner"
                        >
                            <div className="w-28 h-28 bg-emerald-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 border border-emerald-100 rotate-12">
                                <FaGlobe className="text-emerald-400 -rotate-12" size={48} />
                            </div>
                            <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">Network Clean</h3>
                            <p className="text-slate-400 font-bold uppercase text-[11px] tracking-[4px] mt-6 max-w-md mx-auto leading-relaxed">No broken links detected by the surveillance engine. All systems are operational.</p>
                        </motion.div>
                    )}
                </div>
            )}
        </div>
    );
}
