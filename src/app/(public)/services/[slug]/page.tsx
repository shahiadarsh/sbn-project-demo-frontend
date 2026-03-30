import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesList } from '@/data/services';
import { getDynamicMetadata } from '@/utils/seo';
import ServiceDetailClient from '@/components/services/ServiceDetailClient';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const dynamic = await getDynamicMetadata(slug);
    const service = servicesList.find((s) => s.slug === slug);
    if (!service) return { title: dynamic?.title || 'Service Not Found' };

    return {
        title: dynamic?.title || `${service.title} - SBN Healthcare Solution`,
        description: dynamic?.description || service.description,
    };
}

export async function generateStaticParams() {
    return servicesList.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = servicesList.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailClient slug={slug} />;
}
