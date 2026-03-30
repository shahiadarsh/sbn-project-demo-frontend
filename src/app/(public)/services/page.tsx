import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from '@/components/services/ServicesClient';

export const metadata: Metadata = {
    title: 'Solutions & Specialties - SBN Healthcare Solution',
    description: 'Explore our enterprise-grade RCM solutions and specialized healthcare billing services.',
};

export default function ServicesListing() {
    return <ServicesClient />;
}
