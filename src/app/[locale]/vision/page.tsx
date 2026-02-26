'use client';

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Compass, Atom, Scale, Sprout, HeartHandshake, Quote } from 'lucide-react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

export default function VisionPage() {
    const t = useTranslations('VisionPage');
    const locale = useLocale();
    const bahaiOrgUrl = locale === 'fr' ? 'https://www.bahai.org/fr' : 'https://www.bahai.org';

    const principles = [
        {
            icon: Compass,
            title: t('principle1Title'),
            text: t('principle1Text')
        },
        {
            icon: Atom,
            title: t('principle2Title'),
            text: t('principle2Text')
        },
        {
            icon: Scale,
            title: t('principle3Title'),
            text: t('principle3Text')
        },
        {
            icon: Sprout,
            title: t('principle4Title'),
            text: t('principle4Text')
        },
        {
            icon: HeartHandshake,
            title: t('principle5Title'),
            text: t('principle5Text'),
            fullWidth: true
        }
    ];

    return (
        <main className="w-full pt-20">
            {/* Banner header with image */}
            <section
                className="w-full py-24 md:py-32 flex items-center justify-center bg-cover relative"
                style={{
                    backgroundImage: "url('/images/beliefs/unity_diversity.webp')",
                    backgroundPosition: "50% 85%"
                }}
            >
                <div className="absolute inset-0 bg-black/10" />
                <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif relative z-10">{t('title')}</h1>
            </section>

            <section className="w-full py-20 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-7xl mx-auto">

                    {/* Block 1: Dieu transcendant (Centered Text) */}
                    <div className="w-full max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-[#333]">{t('transcendentGodTitle')}</h2>
                        <p className="text-lg leading-relaxed font-serif text-gray-800 text-left md:text-justify">
                            {t('transcendentGodText')}
                        </p>
                    </div>

                    <div className="w-full max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-[#333]">{t('progressiveRevelationTitle')}</h2>
                        <p className="text-lg leading-relaxed font-serif text-gray-800 mb-8 text-left md:text-justify">
                            {t('progressiveRevelationText1')}
                        </p>

                        {/* Visual Timeline / List */}
                        <div className="mb-8">
                            <p className="text-sm font-bold text-[#865B5B] uppercase tracking-wide mb-4 font-serif">{t('divineMessengersLabel')}</p>
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        t('messenger1'), t('messenger2'), t('messenger3'),
                                        t('messenger4'), t('messenger5')
                                    ].map((name, i) => (
                                        <span key={i} className="inline-block px-4 py-2 bg-[#F9F7F2] text-[#333] rounded-full border border-[#D0C0A8] font-serif shadow-sm text-sm md:text-base">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {[
                                        t('messenger6'), t('messenger7'),
                                        t('messenger8'), t('messenger9')
                                    ].map((name, i) => (
                                        <span key={i + 5} className="inline-block px-4 py-2 bg-[#F9F7F2] text-[#333] rounded-full border border-[#D0C0A8] font-serif shadow-sm text-sm md:text-base">
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed font-serif text-gray-800 text-left md:text-justify">
                            {t('progressiveRevelationText2')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Quote section with unity image */}
            <section className="w-full py-12 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-center relative gap-8 lg:gap-0">
                        {/* Image - Left Side - Larger */}
                        <div className="w-full lg:w-3/5 relative z-10">
                            <Image
                                src="/images/footer/footer.webp"
                                alt={t('quoteImageAlt')}
                                width={800}
                                height={600}
                                className="w-full h-auto shadow-xl rounded-lg"
                            />
                        </div>

                        {/* Text block - Right Side - Overlapping */}
                        <div className="w-full lg:w-2/5 relative z-20 lg:-ml-24 mt-8 lg:mt-0">
                            {/* Decorative square with quote icon */}
                            <div
                                className="absolute -top-10 -left-10 w-20 h-20 flex items-center justify-center shadow-md z-10"
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

            <section className="w-full py-12 md:py-20 px-6 md:px-16 lg:px-32 relative" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif">
                        {t('principlesTitle')}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={index}
                                className={`p-8 relative group overflow-hidden ${principle.fullWidth ? 'md:col-span-2' : ''}`}
                                style={{
                                    backgroundColor: '#FEF9EE',
                                    boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                                    borderRadius: '8px'
                                }}
                                whileHover={{ scale: 1.02, y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <div className="flex items-center mb-4 gap-4">
                                    <div className="text-[#9F6B6D]">
                                        <principle.icon size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-xl font-bold font-serif">{principle.title}</h3>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-serif relative z-10">
                                    {principle.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-lg font-serif">
                            {t('learnMoreText')} <a href={bahaiOrgUrl} target="_blank" rel="noopener noreferrer" className="text-[#865B5B] hover:underline">{t('learnMoreLink')}</a>
                        </p>
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
