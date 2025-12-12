
import Footer from '@/components/Footer';
import { getNews } from '@/lib/contentful';

export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ locale: string }>;
};

export default async function NewsPage({ params }: Props) {
    const { locale } = await params;
    const newsItems = await getNews(locale);

    console.log(`[NewsPage] Loaded ${newsItems.length} items for locale ${locale}`);

    return (
        <main className="w-full pt-20">
            {/* Header Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/news_header.webp')", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">Nouvelles</h1>
                </div>
            </section>

            <section className="w-full py-12 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F5F0E1' }}>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {newsItems.length > 0 ? (
                            newsItems.map((item) => (
                                <article
                                    key={item.id}
                                    className="bg-white overflow-hidden flex flex-col h-full"
                                    style={{
                                        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    {item.imageUrl && (
                                        <div className="h-64 w-full relative overflow-hidden">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.imageAlt}
                                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="text-sm text-gray-500 mb-2 font-serif uppercase tracking-wider">
                                            {new Date(item.date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-serif">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4 font-serif flex-grow">
                                            {item.description.length > 150
                                                ? item.description.substring(0, 150) + '...'
                                                : item.description}
                                        </p>
                                        <a
                                            href={`/${locale}/news/${item.id}`}
                                            className="text-[#865B5B] hover:text-[#507371] font-bold mt-auto transition-colors inline-flex items-center gap-2"
                                        >
                                            Lire d&apos;avantage →
                                        </a>
                                    </div>
                                </article>
                            ))
                        ) : (
                            // Fallback content
                            <>
                                <article
                                    className="bg-white overflow-hidden"
                                    style={{
                                        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">
                                            MONTRÉAL, CANADA • 24 juin 2024
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-serif">
                                            Hommage à la liberté : Un concert présenté à Montréal en l&apos;honneur de la lutte mondiale pour l&apos;égalité des genres
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4 font-serif">
                                            Un événement culturel exceptionnel a réuni la communauté montréalaise pour célébrer l&apos;égalité des genres à travers la musique et les arts. Cette soirée mémorable a mis en lumière l&apos;importance de l&apos;unité et du respect mutuel dans la construction d&apos;une société plus juste.
                                        </p>
                                        <a href="#" className="text-[#865B5B] hover:underline font-medium">
                                            Lire d&apos;avantage →
                                        </a>
                                    </div>
                                </article>

                                <article
                                    className="bg-white overflow-hidden"
                                    style={{
                                        boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <div className="p-6">
                                        <div className="text-sm text-gray-500 mb-2">
                                            MONTRÉAL, CANADA • 15 mai 2024
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4 font-serif">
                                            Journée de service communautaire : Des jeunes bahá&apos;ís mobilisés pour embellir les parcs de Montréal
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed mb-4 font-serif">
                                            Plus de 50 jeunes se sont rassemblés pour une journée dédiée au service de la communauté. À travers des activités de nettoyage, de plantation d&apos;arbres et de sensibilisation environnementale, ils ont démontré leur engagement envers le bien-être de leur ville.
                                        </p>
                                        <a href="#" className="text-[#865B5B] hover:underline font-medium">
                                            Lire d&apos;avantage →
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
