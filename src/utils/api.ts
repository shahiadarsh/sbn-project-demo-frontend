export const getApiUrl = (): string => {
    let url = process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_BACKEND_URL;
    if (!url) {
        if (typeof window !== 'undefined') {
            // In browser, if env var is missing on Vercel, fallback to production backend
            return 'https://sbnhealthcare-lfgn.vercel.app/api';
        }
        return 'http://localhost:5000/api';
    }
    url = url.replace(/\/+$/, '');
    if (!url.endsWith('/api')) {
        url = `${url}/api`;
    }
    return url;
};

export const API_URL = getApiUrl();
