import type { Metadata } from 'next';
import { getDynamicMetadata } from '@/utils/seo';
import SecurityClient from '@/components/security/SecurityClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('security');
    return {
        title: dynamic?.title || 'Security & Compliance - SBN Healthcare Solution',
        description: dynamic?.description || 'Learn how we protect your data and stay compliant with healthcare regulations.',
    };
}

const Security = () => {
    return <SecurityClient />;
};

export default Security;
