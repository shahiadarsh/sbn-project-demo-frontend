'use client';

import React from 'react';
import PageHeader from '@/components/layout/PageHeader';

const SentinelPrivacyClient = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <PageHeader 
                title="Sentinel Data Use and Privacy Notice" 
                subtitle="Information about how SBN Sentinel handles your data."
            />
            
            <section className="py-20 relative">
                <div className="w-full px-6 lg:px-12 rxl:px-20 max-w-4xl relative z-10">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden">
                        <div className="relative z-10 prose prose-lg prose-slate max-w-none">
                            <p className="text-slate-600 leading-relaxed font-medium">
                                This notice describes the data flow and handling for the SBN Sentinel application.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Information Retrieved</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Sentinel retrieves practice-authorized data solely for operational reporting. We retrieve limited patient demographic, encounter, and coverage records. We do not access clinical notes or unapproved resources.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Information Retained & Security</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Data is processed to generate operational intelligence and revenue integrity audits. Derived insights and minimal patient-linked identifiers are retained securely. Data access and transmission are managed through secure protocols. Access is strictly governed by role-based permissions restricted to authorized practice administrators and supporting SBN staff.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Hosting and Service Providers</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our system is hosted on secure, isolated servers located within the United States. We do not use unauthorized third-party data-sharing services. Support access is restricted exclusively to authorized SBN infrastructure administrators.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Other Uses</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Data is used exclusively for the direct benefit of the authorizing practice. We do not sell information, share it for advertising, or use it for unauthorized secondary AI/model training purposes.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Retention, Deletion, and Disconnection</h3>
                            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                                <li><strong>Retention:</strong> Operational data is retained only as long as necessary to provide the operational intelligence services and fulfill contractual compliance.</li>
                                <li><strong>Deletion:</strong> System backups are managed according to retention schedules.</li>
                                <li><strong>Disconnection:</strong> You have the right to withdraw authorization at any time. Doing so initiates the process to halt data synchronization. Previously retained information can be securely purged upon request or archived strictly for legal compliance.</li>
                            </ul>

                            <p className="text-slate-600 leading-relaxed font-bold mt-10">
                                Privacy Contact: <a href="mailto:privacy@sbnhealthcaresolution.com" className="text-[#0033e7] hover:underline transition-colors">privacy@sbnhealthcaresolution.com</a>
                            </p>
                            
                            <p className="text-slate-500 text-sm italic mt-12 border-t border-slate-100 pt-6">
                                Last Updated: October 2026 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SentinelPrivacyClient;
