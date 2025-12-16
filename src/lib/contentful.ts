import { createClient } from 'contentful';

export interface NewsItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
    date: string;
}

const space = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN || '';

const client = (space && accessToken)
    ? createClient({ space, accessToken })
    : null;

if (!client) {
    console.warn('[Contentful] Client not initialized. Missing SPACE_ID or ACCESS_TOKEN.');
}

export async function getNews(locale: string = 'fr'): Promise<NewsItem[]> {
    // Map 'en' to 'en-US' as configured in Contentful
    const targetLocale = locale === 'en' ? 'en-US' : locale;
    const fallbackLocale = 'en-US';

    try {
        if (!client) return [];

        // Use withAllLocales to fetch all languages (Omni-fetch) as suggested by SDK error
        // Casting to any to avoid TS issues if types aren't updated for withAllLocales
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const response = await (client as any).withAllLocales.getEntries({
            content_type: 'activity',
            order: ['-fields.date'],
            include: 10,
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return response.items.map((item: any) => {
            // Helper to extract value: Try Target Locale -> Try Fallback -> Try First Available
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const getField = (field: any) => {
                if (!field) return undefined;
                return field[targetLocale] || field[fallbackLocale] || Object.values(field)[0];
            };

            const title = getField(item.fields.title);
            const description = getField(item.fields.description);
            // Date might be YYYY-MM-DD or ISO, usually string
            const date = getField(item.fields.date);

            // Image Handling with locale=*
            // item.fields.image is an object with locales as keys: { 'fr': Asset, 'en-US': Asset }
            const imageAsset = getField(item.fields.image);

            let imageUrl = '';
            let imageAlt = '';

            if (imageAsset && imageAsset.fields) {
                // Asset fields (file, title) are also localized objects
                const file = getField(imageAsset.fields.file);
                const assetTitle = getField(imageAsset.fields.title);

                if (file && file.url) {
                    imageUrl = `https:${file.url}`;
                }
                imageAlt = assetTitle || title || '';
            }

            // Check fallback if URL is still empty
            if (!imageUrl) {
                imageUrl = '/images/activities/community_spaces.webp';
            }

            return {
                id: item.sys.id,
                title: title || 'Untitled',
                description: description || '',
                imageUrl,
                imageAlt,
                date: date || new Date().toISOString(),
            };
        });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error('[Contentful] Error fetching news:', error);
        return [];
    }
}

export async function getNewsItem(id: string, locale: string = 'fr'): Promise<NewsItem | null> {
    // Map 'en' to 'en-US' as configured in Contentful
    const targetLocale = locale === 'en' ? 'en-US' : locale;
    const fallbackLocale = 'en-US';

    try {
        if (!client) return null;

        // Fetch specific entry by ID
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const item: any = await (client as any).withAllLocales.getEntry(id, {
            include: 10,
        });

        if (!item) return null;

        // Helper to extract value (Same robust logic as above)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const getField = (field: any) => {
            if (!field) return undefined;
            return field[targetLocale] || field[fallbackLocale] || Object.values(field)[0];
        };

        const title = getField(item.fields.title);
        const description = getField(item.fields.description);
        const date = getField(item.fields.date);

        const imageAsset = getField(item.fields.image);

        let imageUrl = '';
        let imageAlt = '';

        if (imageAsset && imageAsset.fields) {
            const file = getField(imageAsset.fields.file);
            const assetTitle = getField(imageAsset.fields.title);

            if (file && file.url) {
                imageUrl = `https:${file.url}`;
            }
            imageAlt = assetTitle || title || '';
        }

        // Fallback
        if (!imageUrl) {
            imageUrl = '/images/activities/community_spaces.webp';
        }

        return {
            id: item.sys.id,
            title: title || 'Untitled',
            description: description || '',
            imageUrl,
            imageAlt,
            date: date || new Date().toISOString(),
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.error(`[Contentful] Error fetching news item ${id}:`, error);
        return null;
    }
}
