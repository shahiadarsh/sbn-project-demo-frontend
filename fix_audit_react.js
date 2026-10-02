const fs = require('fs');

// 1. Update SentinelPrivacyClient.tsx
let sentinelPath = 'src/components/sentinel/SentinelPrivacyClient.tsx';
let sentinelContent = fs.readFileSync(sentinelPath, 'utf8');

sentinelContent = sentinelContent.replace(
    /All data is protected by industry-standard encryption both in transit and at rest\./g,
    'Data access and transmission are managed through secure protocols.'
);
sentinelContent = sentinelContent.replace(
    /System backups expire and are securely destroyed on a 30-day rolling basis\./g,
    'System backups are managed according to retention schedules.'
);
sentinelContent = sentinelContent.replace(
    /Doing so immediately halts all automated data synchronization\./g,
    'Doing so initiates the process to halt data synchronization.'
);
sentinelContent = sentinelContent.replace(
    /\(Management Approved\)/g,
    ''
);
fs.writeFileSync(sentinelPath, sentinelContent);
console.log('Updated SentinelPrivacyClient.tsx');


// 2. Update PrivacyClient.tsx tags
let privacyPath = 'src/components/privacy/PrivacyClient.tsx';
let privacyContent = fs.readFileSync(privacyPath, 'utf8');

// replace <p className="mb-[20px]">{t('privacy_page.p4')}</p> with dangerouslySetInnerHTML
privacyContent = privacyContent.replace(
    /<p className="mb-\[20px\]">\{t\('privacy_page.p4'\)\}<\/p>/g,
    '<p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t(\'privacy_page.p4\') }}></p>'
);
privacyContent = privacyContent.replace(
    /<p className="mb-\[20px\]">\{t\('privacy_page.p5'\)\}<\/p>/g,
    '<p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t(\'privacy_page.p5\') }}></p>'
);
privacyContent = privacyContent.replace(
    /<p className="mb-\[20px\]">\{t\('privacy_page.p7'\)\}<\/p>/g,
    '<p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t(\'privacy_page.p7\') }}></p>'
);
privacyContent = privacyContent.replace(
    /<p className="mb-\[20px\]">\{t\('privacy_page.p9'\)\}<\/p>/g,
    '<p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t(\'privacy_page.p9\') }}></p>'
);
privacyContent = privacyContent.replace(
    /<p className="mb-\[20px\]">\{t\('privacy_page.p10'\)\}<\/p>/g,
    '<p className="mb-[20px]" dangerouslySetInnerHTML={{ __html: t(\'privacy_page.p10\') }}></p>'
);

fs.writeFileSync(privacyPath, privacyContent);
console.log('Updated PrivacyClient.tsx');

// 3. Update WhatWeDo.tsx
let wwdPath = 'src/components/home/WhatWeDo.tsx';
let wwdContent = fs.readFileSync(wwdPath, 'utf8');
wwdContent = wwdContent.replace(
    /href: '\/services\/eligibility-verification'/g,
    "href: '/services'"
);
wwdContent = wwdContent.replace(
    /href: '\/services\/benefits-check'/g,
    "href: '/services'"
);
fs.writeFileSync(wwdPath, wwdContent);
console.log('Updated WhatWeDo.tsx');

// 4. Update Header.tsx (Security dropdown)
let headerPath = 'src/components/layout/Header.tsx';
let headerContent = fs.readFileSync(headerPath, 'utf8');

// Change onClick to only preventDefault if there is a dropdown, and handle the menu toggle properly.
headerContent = headerContent.replace(
    /onClick=\{\(\) => setActiveDropdown\(activeDropdown === link\.name \? null : link\.name\)\}/g,
    "onClick={(e) => { e.preventDefault(); setActiveDropdown(activeDropdown === link.name ? null : link.name); }}"
);
headerContent = headerContent.replace(
    /onKeyDown=\{\(e\) => handleKeyDown\(e, link\.name\)\}/g,
    ""
);

fs.writeFileSync(headerPath, headerContent);
console.log('Updated Header.tsx');

// 5. Update RCMCalculatorPageClient.tsx
let rcmPath = 'src/components/tools/RCMCalculatorPageClient.tsx';
let rcmContent = fs.readFileSync(rcmPath, 'utf8');

rcmContent = rcmContent.replace(
    /const revenueInput = document\.getElementById\('revenue-input'\);/g,
    "const revenueInput = document.getElementById('report-name-input');"
);
fs.writeFileSync(rcmPath, rcmContent);
console.log('Updated RCMCalculatorPageClient.tsx');

