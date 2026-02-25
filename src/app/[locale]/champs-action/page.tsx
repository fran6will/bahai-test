'use client';

import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ActivityBox from '@/components/ActivityBox';
import Image from 'next/image';
import { Link } from '@/navigation';
import { Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ChampsActionPage() {
    const t = useTranslations('ChampsActionPage');

    const activities = [
        {
            title: t('activity1Title'),
            description: t('activity1Description'),
            image: "/images/activities/social_02.webp"
        },
        {
            title: t('activity2Title'),
            description: t('activity2Description'),
            image: "/images/activities/circle_02.webp"
        },
        {
            title: t('activity3Title'),
            description: t('activity3Description'),
            image: "/images/beliefs/prejeune.webp"
        },
        {
            title: t('activity4Title'),
            description: t('activity4Description'),
            image: "/images/beliefs/action_sociale.webp"
        }
    ];

    return (
        <main className="w-full pt-20">
            {/* Hero / Quote Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/beliefs/champaction_header.webp')", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">{t('title')}</h1>
                </div>
            </section>

            {/* New Quote Section */}
            <section className="w-full py-24 md:py-32 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center relative gap-8 lg:gap-0">
                        {/* Image - Left Side */}
                        <div className="w-full lg:w-3/5 relative z-10">
                            <Image
                                src="/images/beliefs/Effendi_Quote.webp"
                                alt="Shoghi Effendi Quote"
                                width={800}
                                height={600}
                                className="w-full h-auto shadow-xl rounded-lg"
                            />
                        </div>

                        {/* Text block - Right Side - Overlapping */}
                        <div className="w-full lg:w-2/5 relative z-20 lg:-ml-24 mt-8 lg:mt-0">
                            {/* Decorative square with quote icon */}
                            <div
                                className="absolute -top-10 -left-10 w-20 h-20 flex items-center justify-center shadow-md z-30"
                                style={{ backgroundColor: '#7DA09E', borderRadius: '4px' }}
                            >
                                <Quote size={40} className="text-[#F5F0E1] fill-[#F5F0E1] opacity-50" />
                            </div>
                            <div
                                className="relative p-8 md:p-12 shadow-2xl rounded-lg"
                                style={{ backgroundColor: '#F5F0E1' }}
                            >
                                <p className="font-serif text-lg md:text-xl leading-relaxed italic text-gray-800 mb-6 relative z-10">
                                    {t('quoteText')}
                                </p>
                                <p className="text-gray-600 text-sm font-serif relative z-10">{t('quoteAuthor')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            <section className="w-full py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Side */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-serif">
                            {t('introText1')}
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-serif">
                            {t('introText2')}
                        </p>
                    </div>

                    {/* Image Side */}
                    <div className="order-1 lg:order-2">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl mb-3">
                            <Image
                                src="/images/action/action.webp"
                                alt="Action sociale et communautaire"
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <p className="text-sm text-gray-600 italic text-center font-serif">
                            {t('imageCaption')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Activities Grid - Now using ActivityBox for consistency with homepage */}
            <Section id="activites-details" backgroundColor="#F5F0E1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {activities.map((activity, index) => (
                        <ActivityBox
                            key={index}
                            title={activity.title}
                            description={activity.description}
                            imageSrc={activity.image}
                            imageAlt={activity.title}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <section className="py-20 px-6 text-center" style={{ backgroundColor: '#A5BEC3' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        {t('ctaTitle')}
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block font-bold py-4 px-10 text-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-full"
                        style={{
                            backgroundColor: '#865B5B',
                            color: '#FBFAF6'
                        }}
                    >
                        {t('ctaButton')}
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
