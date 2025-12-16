import Section from '@/components/Section';
import Footer from '@/components/Footer';
import { getNewsItem } from '@/lib/contentful';
import { notFound } from 'next/navigation';
import { Link } from '@/navigation';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

type Props = {
    params: Promise<{ locale: string; id: string }>;
};

export default async function NewsDetailPage({ params }: Props) {
    const { locale, id } = await params;
    const newsItem = await getNewsItem(id, locale);

    if (!newsItem) {
        notFound();
    }

    return (
        <main className="w-full pt-20">
            <Section id="news-detail" backgroundColor="#F5F0E1">
                <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
                    {/* Hero Image */}
                    {newsItem.imageUrl && (
                        <div className="w-full h-80 md:h-[500px] relative overflow-hidden">
                            <Image
                                src={newsItem.imageUrl}
                                alt={newsItem.imageAlt}
                                className="object-cover"
                                fill
                            />
                        </div>
                    )}

                    <div className="p-8 md:p-12">
                        {/* Meta Data */}
                        <div className="text-gray-500 mb-6 font-serif uppercase tracking-wider text-sm flex items-center gap-4">
                            <Link href="/news" className="flex items-center hover:text-[#865B5B] transition-colors">
                                ← Retour aux nouvelles
                            </Link>
                            <span>•</span>
                            <span>
                                {new Date(newsItem.date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-bold mb-8 font-serif leading-tight">
                            {newsItem.title}
                        </h1>

                        {/* Content */}
                        <div className="prose prose-lg max-w-none font-serif text-gray-700 leading-relaxed whitespace-pre-wrap">
                            {newsItem.description}
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </main>
    );
}
