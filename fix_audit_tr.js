const fs = require('fs');

let trPath = 'src/data/translations.json';
let trContent = fs.readFileSync(trPath, 'utf8');

let translations = JSON.parse(trContent);

Object.keys(translations).forEach(lang => {
    let t = translations[lang];

    // 1. Privacy page fixes
    if (t.privacy_page) {
        if (lang === 'en') {
            t.privacy_page.p5 = "<strong>Analytics and Cookies:</strong> We use standard analytics tools (like Google Analytics) and cookies to understand website traffic, measure campaign performance, and improve our user experience. These tools collect data such as your IP address, browser type, pages visited, and time spent on the site.";
            t.privacy_page.p11 = "";
            t.privacy_page.p13 = "The information is used to enhance the visitor experience when using the website to display personalized content.";
            t.privacy_page.p15 = "E-mail may be sent to inform you of news of our services.";
            t.privacy_page.p24 = "Users may request deletion of their Personal Data by sending a request to info@sbnhealthcaresolution.com from their registered email ID.";
            t.privacy_page.p17 = "For the purposes of this privacy statement, 'Personal Information' shall mean and include any data which relates to an individual, that can be used to identify such individual, which is in possession of SBN Healthcare Solution. We collect, process, and use the Personal Information that is provided via our website, including information you provide when you contact us, for example, name, email address, and telephone number.";
            t.privacy_page.p19 = "We use your Personal Information for the following purposes:<br />a) to respond to your questions or requests; and<br />b) to process job applications.";
        }
    }

    // 2. RCM Calculator fixes
    if (t.rcm_calculator) {
        if (lang === 'en') {
            t.rcm_calculator.desc = "This RCM calculator helps you quickly understand where your money might be leaking and provides an illustrative estimate of what you could potentially recover with better systems.";
            t.rcm_calculator.calc_profile_desc = "Adjust the sliders to reflect your current practice metrics for an illustrative estimate of ROI potential.";
            t.rcm_calculator.calc_report = "Estimated Impact Summary";
            t.rcm_calculator.calc_financial = "Estimated Recovery Potential";
            t.rcm_calculator.calc_baseline = "Estimated Yearly Revenue Leakage";
            t.rcm_calculator.calc_sbn = "Assumed SBN Recovery Target (65%)";
            t.rcm_calculator.calc_audit = "Request Detailed Report";
        }
    }

    // 3. Security page wording (remove job/salary)
    if (t.security_page && t.security_page.securityData) {
        if (lang === 'en') {
            t.security_page.securityData.forEach(item => {
                if (item.footer && item.footer.includes("security compliance jobs")) {
                    item.footer = "Essential for robust security operations.";
                }
                if (item.footer && item.footer.includes("Security Compliance Officer salary")) {
                    item.footer = "This level of proactive management prevents critical failures.";
                }
                if (item.footer && item.footer.includes("security compliance certification setups")) {
                    item.footer = "This level of tracking is expected in advanced security setups.";
                }
            });
        }
    }
});

fs.writeFileSync(trPath, JSON.stringify(translations, null, 4));
console.log('Updated translations.json');
