
import Footer from '@/components/Footer';
import Image from 'next/image';
import { getNews } from '@/lib/contentful';
import { getTranslations } from 'next-intl/server';

export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: Props) {
    const { locale } = await params;
    const newsItems = await getNews(locale);
    const t = await getTranslations('NewsPage');

    console.log(`[NewsPage] Loaded ${newsItems.length} items for locale ${locale}`);

    return (
        <main className="w-full pt-20">
            {/* Header Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/news_header.webp')", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">{t('title')}</h1>
                </div>
            </section>

            <section className="w-full py-12 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F5F0E1' }}>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {newsItems.length > 0 ? (
                            newsItems.map((item) => (
                                <a
                                    key={item.id}
                                    href={`/${locale}/news/${item.id}`}
                                    className="overflow-hidden flex flex-col h-full group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
                                    style={{
                                        backgroundColor: '#F9F7F2',
                                        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    {item.imageUrl && (
                                        <div className="h-64 w-full relative overflow-hidden">
                                            <Image
                                                src={item.imageUrl}
                                                alt={item.imageAlt}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2 font-serif uppercase tracking-wider">
                                            {new Date(item.date).toLocaleDateString(locale === 'fr' ? 'fr-CA' : 'en-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-serif">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4 font-serif flex-grow">
                                            {item.description.length > 150
                                                ? item.description.substring(0, 150) + '...'
                                                : item.description}
                                        </p>
                                        <span className="text-[#865B5B] group-hover:text-[#507371] font-bold mt-auto transition-colors inline-flex items-center gap-2">
                                            {t('readMore')} →
                                        </span>
                                    </div>
                                </a>
                            ))
                        ) : (
                            // Fallback content
                            <>
                                <article
                                    className="overflow-hidden"
                                    style={{
                                        backgroundColor: '#F9F7F2',
                                        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">
                                            {t('fallbackDate1')}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-serif">
                                            {t('fallbackTitle1')}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4 font-serif">
                                            {t('fallbackDescription1')}
                                        </p>
                                        <a href="#" className="text-[#865B5B] hover:underline font-medium">
                                            {t('readMore')} →
                                        </a>
                                    </div>
                                </article>

                                <article
                                    className="overflow-hidden"
                                    style={{
                                        backgroundColor: '#F9F7F2',
                                        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">
                                            {t('fallbackDate2')}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-serif">
                                            {t('fallbackTitle2')}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4 font-serif">
                                            {t('fallbackDescription2')}
                                        </p>
                                        <a href="#" className="text-[#865B5B] hover:underline font-medium">
                                            {t('readMore')} →
                                        </a>
                                    </div>
                                </article>
                            </>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
