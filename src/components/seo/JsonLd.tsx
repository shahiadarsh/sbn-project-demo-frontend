import React from 'react';

const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SBN Healthcare Solution",
        "url": "https://www.sbnhealthcaresolution.com",
        "logo": "https://www.sbnhealthcaresolution.com/Logo.webp",
        "description": "Next-generation RCM infrastructure engineered to accelerate cash flow and eliminate administrative friction for modern medical practices.",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-805-426-4609",
            "contactType": "customer service",
            "email": "info@sbnhealthcaresolution.com",
            "areaServed": "US",
            "availableLanguage": "en"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1309 Coffeen Avenue Ste 1200",
            "addressLocality": "Sheridan",
            "addressRegion": "WY",
            "postalCode": "82801",
            "addressCountry": "US"
        },
        "sameAs": [
            "https://www.facebook.com/BillingGiant/",
            "https://twitter.com/sbnhealthcare",
            "https://in.linkedin.com/company/sbn-healthcare-solution-llc"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default JsonLd;
