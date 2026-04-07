import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from '@/components/services/ServicesClient';

export const metadata: Metadata = {
    title: 'More Solutions for Easy Revenue Cycle Management',
    description: 'Discover more solutions for full RCM support. Reduce errors, improve cash flow, and manage your billing process in a simple and smooth way.',
};

export default function ServicesListing() {
    return <ServicesClient />;
}
