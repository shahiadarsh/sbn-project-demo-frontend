import React from 'react';
import type { Metadata } from 'next';
import { specialtiesList } from '@/data/services';
import { getDynamicMetadata } from '@/utils/seo';
import SpecialtyDetailClient from '@/components/specialties/SpecialtyDetailClient';

interface Props {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const dynamic = await getDynamicMetadata(`specialty-${slug}`);
    const specialty = specialtiesList.find((s) => s.slug === slug);
    if (!specialty) return { title: dynamic?.title || 'Specialty Not Found' };

    return {
        title: dynamic?.title || `${specialty.title} - SBN Healthcare Solution`,
        description: dynamic?.description || specialty.description,
    };
}

export async function generateStaticParams() {
    return specialtiesList.map((specialty) => ({
        slug: specialty.slug,
    }));
}

export default async function SpecialtyPage({ params }: Props) {
    const { slug } = await params;
    return <SpecialtyDetailClient slug={slug} />;
}
