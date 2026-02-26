'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function SanctuaryPage() {
    const t = useTranslations('SanctuaryPage');

    return (
        <main className="w-full pt-20 bg-[#F9F7F2] text-[#333]">
            {/* Header Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/sanctuary/header_sanct.webp')", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">{t('title')}</h1>
                </div>
            </section>

            <div className="w-full py-8 px-6 md:px-12 pb-12" style={{ backgroundColor: '#F9F7F2' }}>
                <div className="max-w-7xl mx-auto">


                    {/* Section 1: History & Portrait */}
                    <div className="mt-12 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#9C4436] font-serif">{t('historicHomeTitle')}</h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-sans">
                                <p>
                                    <strong className="text-[#9C4436]">&apos;Abdu&apos;l-Bahá</strong>, {t('historicHomeText1')}
                                </p>
                                <p>
                                    {t('historicHomeText2')}
                                </p>
                            </div>
                        </div>

                        <div className="relative order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 md:w-80 aspect-[3/4]">
                                <div className="absolute inset-0 border-2 border-[#9C4436]/20 rounded-full transform translate-x-4 translate-y-4"></div>
                                <Image
                                    src="/images/sanctuary/AbdulBaha.webp"
                                    alt={t('portraitAlt')}
                                    fill
                                    className="object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Quote */}
                    <div className="mt-32 mb-32 relative py-16 px-6 md:px-20 bg-[#9C4436]/5 rounded-3xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#9C4436] rounded-tl-3xl opacity-20"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#9C4436] rounded-br-3xl opacity-20"></div>

                        <blockquote className="text-center relative z-10">
                            <p className="text-2xl md:text-3xl text-[#5A4A42] font-serif italic leading-relaxed">
                                &laquo; {t('quoteText')} &raquo;
                            </p>
                            <footer className="mt-8 text-[#9C4436] font-bold tracking-widest uppercase text-sm">
                                {t('quoteAuthor')}
                            </footer>
                        </blockquote>
                    </div>

                    {/* Section 3: Visit Info with overlapping style */}
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/sanctuary/sanctuary.webp"
                                alt={t('sanctuaryInteriorAlt')}
                                fill
                                className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-[#9C4436]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        <div className="md:col-span-5 bg-white p-8 md:p-12 rounded-xl shadow-xl md:-ml-20 relative z-10 border-l-4 border-[#9C4436]">
                            <h2 className="text-3xl font-bold text-[#9C4436] mb-6 font-serif">{t('planVisitTitle')}</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {t('planVisitDescription')}
                            </p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#9C4436] rounded-full"></span>
                                    {t('visitOption1')}
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#9C4436] rounded-full"></span>
                                    {t('visitOption2')}
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#9C4436] rounded-full"></span>
                                    {t('visitOption3')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 4: Booking Calendar */}
                    <div id="reserver" className="mt-32 pt-16 border-t border-[#9C4436]/20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#333] font-serif">{t('bookVisitTitle')}</h2>
                        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">{t('bookVisitDescription')}</p>

                        <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto ring-1 ring-black/5">
                            <iframe
                                src="https://calendly.com/sanctuaire-montreal-shrine/rdv-appointment"
                                width="100%"
                                height="700"
                                style={{ border: 0 }}
                                title={t('bookVisitIframeTitle')}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
