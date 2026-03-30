import { getDynamicMetadata } from '@/utils/seo';
import type { Metadata } from 'next';
import WhitePaperClient from '@/components/white-paper/WhitePaperClient';

export async function generateMetadata(): Promise<Metadata> {
    const dynamic = await getDynamicMetadata('white-paper');
    return {
        title: dynamic?.title || 'White Paper - SBN Healthcare Solution',
        description: 'Read our latest insights and white papers on healthcare billing and RCM.',
    };
}

const WhitePaper = () => {
    return <WhitePaperClient />;
};

export default WhitePaper;
