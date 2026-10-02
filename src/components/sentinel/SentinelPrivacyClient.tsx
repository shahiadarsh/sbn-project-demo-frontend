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
                <div className="w-full px-6 lg:px-12 2xl:px-20 max-w-4xl relative z-10">
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200/60 relative overflow-hidden">
                        <div className="relative z-10 prose prose-lg prose-slate max-w-none">
                            <p className="text-slate-600 leading-relaxed font-medium">
                                This notice describes the data flow and handling for the SBN Sentinel application.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Data Categories, Sources, and Purposes</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Sentinel retrieves practice-authorized data solely for operational reporting. It does not modify source records in your EHR systems. Data accessed includes operational metrics, billing statuses, and relevant performance indicators.
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                                <li><strong>Data Categories:</strong> Operational metrics, financial indicators, and billing statuses.</li>
                                <li><strong>Sources:</strong> Your authorized EHR and practice management systems.</li>
                                <li><strong>Purposes:</strong> To generate operational intelligence reports, track performance, and identify revenue cycle bottlenecks.</li>
                            </ul>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Recipients and Vendors</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Information accessed by Sentinel is used exclusively by authorized practice administrators and SBN personnel directly supporting your account. We do not sell or share this operational data with third-party marketers or unauthorized external vendors.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Local Processing and Storage</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Data is processed to generate operational intelligence reports. Storage of live data, logs, cache, and backups is protected by standard encryption controls and restricted to authorized personnel. Sentinel does not permanently store patient medical records.
                            </p>
                            
                            <h3 className="text-xl font-bold text-slate-900 mt-10">Retention, Deletion, and Backups</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                Access to the application is restricted to authorized practice administrators and operations managers. Data is retained only as long as necessary to provide the operational intelligence services.
                            </p>
                            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                                <li><strong>Retention:</strong> Operational data is retained while your account is active and for the duration required by applicable contractual agreements.</li>
                                <li><strong>Deletion:</strong> Upon termination of service or upon explicit request, data is securely purged from our active systems.</li>
                                <li><strong>Backup Treatment:</strong> Backups are maintained securely for disaster recovery purposes and are overwritten or destroyed according to our standard backup lifecycle policies.</li>
                            </ul>

                            <h3 className="text-xl font-bold text-slate-900 mt-10">Authorization Withdrawal and Privacy Contact</h3>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                You have the right to withdraw authorization for data access at any time by contacting our support team or updating your API integration settings.
                            </p>
                            <p className="text-slate-600 leading-relaxed font-bold">
                                Privacy Contact: <a href="mailto:privacy@sbnhealthcaresolution.com" className="text-[#0033e7] hover:underline transition-colors">privacy@sbnhealthcaresolution.com</a>
                            </p>
                            
                            <p className="text-slate-500 text-sm italic mt-12 border-t border-slate-100 pt-6">
                                Last Updated: October 2026 (Pending Management Approval)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SentinelPrivacyClient;
