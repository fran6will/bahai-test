'use client';

import { useTranslations } from 'next-intl';
import { MapPin, Mail, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { Link } from '../navigation';
import Image from 'next/image';

export default function Footer() {
    const t = useTranslations('HomePageContent');

    return (
        <footer className="w-full relative">
            {/* Main Footer Content - Sage Teal close to #7DA09E but darker for contrast */}
            <div className="w-full pt-20 pb-16 bg-[#507371] text-[#F5F0E1]">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">

                        {/* Col 1: Links */}
                        <div className="flex flex-col space-y-8">
                            <h3 className="text-2xl font-serif font-medium tracking-wide border-b border-[#F5F0E1]/20 pb-4">
                                {t('footerLearnMoreTitle')}
                            </h3>
                            <ul className="space-y-5">
                                {[
                                    { link: "https://www.bahai.org/fr", label: t('footerWorldCommunity') },
                                    { link: "https://www.bahai.ca/fr", label: t('footerCanadaBahais') },
                                    { link: "https://www.bahai.org/library", label: t('footerBahaiWritings') },
                                    { link: "https://www.relierlescoeurs.org", label: t('footerPrayersAndWritings') },
                                    { link: "https://news.bahai.org", label: t('footerWorldActivitiesNews') }
                                ].map((item, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between text-white/90 hover:text-white transition-colors gap-2 text-sm md:text-base font-light tracking-wide"
                                        >
                                            <span className="border-b border-transparent group-hover:border-white/40 pb-0.5 transition-all">
                                                {item.label}
                                            </span>
                                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 2: Library & Center */}
                        <div className="flex flex-col space-y-8">
                            <h3 className="text-2xl font-serif font-medium tracking-wide border-b border-[#F5F0E1]/20 pb-4">
                                {t('footerLibraryCenterTitle')}
                            </h3>
                            <div className="flex-grow space-y-6 text-white/90 font-light">
                                <div className="flex gap-4">
                                    <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#B18888]" />
                                    <div className="text-sm md:text-base">
                                        <p>{t('footerLibraryAddress1')}</p>
                                        <p>{t('footerLibraryAddress2')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Clock className="w-5 h-5 mt-1 shrink-0 text-[#B18888]" />
                                    <div className="space-y-1 text-sm md:text-base">
                                        <p className="flex justify-between w-full max-w-[200px]">
                                            <span className="font-medium">{t('footerLibraryHoursWednesday')}</span>
                                            <span>{t('footerLibraryHoursTimeWed')}</span>
                                        </p>
                                        <p className="flex justify-between w-full max-w-[200px]">
                                            <span className="font-medium">{t('footerLibraryHoursThursday')}</span>
                                            <span>{t('footerLibraryHoursTimeThu')}</span>
                                        </p>
                                        <p className="flex justify-between w-full max-w-[200px]">
                                            <span className="font-medium">{t('footerLibraryHoursSaturday')}</span>
                                            <span>{t('footerLibraryHoursTimeSat')}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Mail className="w-5 h-5 shrink-0 text-[#B18888]" />
                                    <a href="mailto:secretariat@bahaimontreal.org" className="hover:text-white transition-colors text-sm md:text-base">
                                        secretariat@bahaimontreal.org
                                    </a>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Phone className="w-5 h-5 shrink-0 text-[#B18888]" />
                                    <span className="text-sm md:text-base">{t('footerLibraryPhone')}</span>
                                </div>
                            </div>

                            <Link href="/faq#contact" className="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-lg transition-all duration-300 text-sm tracking-widest uppercase font-medium">
                                Nous contacter
                            </Link>
                        </div>

                        {/* Col 3: Sanctuary */}
                        <div className="flex flex-col space-y-8">
                            <h3 className="text-2xl font-serif font-medium tracking-wide border-b border-[#F5F0E1]/20 pb-4">
                                {t('footerSanctuaryTitle')}
                            </h3>
                            <div className="flex-grow space-y-6 text-white/90 font-light">
                                <div className="flex gap-4">
                                    <MapPin className="w-5 h-5 mt-1 shrink-0 text-[#B18888]" />
                                    <div className="text-sm md:text-base">
                                        <p>{t('footerSanctuaryAddress1')}</p>
                                        <p>{t('footerSanctuaryAddress2')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <Clock className="w-5 h-5 mt-1 shrink-0 text-[#B18888]" />
                                    <div className="space-y-1 text-sm md:text-base">
                                        <p className="flex justify-between w-full max-w-[200px]">
                                            <span className="font-medium">{t('footerSanctuaryHoursWednesday')}</span>
                                            <span>{t('footerSanctuaryHoursTimeWed')}</span>
                                        </p>
                                        <p className="flex justify-between w-full max-w-[200px]">
                                            <span className="font-medium">{t('footerSanctuaryHoursSaturday')}</span>
                                            <span>{t('footerSanctuaryHoursTimeSat')}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Mail className="w-5 h-5 shrink-0 text-[#B18888]" />
                                    <a href="mailto:info@bahaimontreal.org" className="hover:text-white transition-colors text-sm md:text-base">
                                        {t('footerSanctuaryEmail')}
                                    </a>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Phone className="w-5 h-5 shrink-0 text-[#B18888]" />
                                    <span className="text-sm md:text-base">{t('footerSanctuaryPhone')}</span>
                                </div>
                            </div>

                            <Link href="/sanctuary" className="inline-flex items-center justify-center px-6 py-3 bg-[#B18888] hover:bg-[#9A7272] text-white rounded-lg transition-all duration-300 text-sm tracking-widest uppercase font-bold shadow-lg shadow-[#B18888]/20 hover:shadow-[#B18888]/40 hover:-translate-y-0.5">
                                {t('footerSanctuaryVisitButton')}
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="w-full py-8 bg-[#405C5A] border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Brand */}
                    <div className="flex items-center gap-4 opacity-80 hover:opacity-100 transition-opacity">
                        <Image src="/Star.svg" alt="Bahá'í Star" width={40} height={40} className="w-10 h-10 brightness-0 invert" />
                        <div className="flex flex-col text-[#F5F0E1]">
                            <span className="font-serif font-bold text-lg leading-none tracking-tight">
                                {t('footerCommunityName')}
                            </span>
                            <span className="font-sans text-xs uppercase tracking-[0.2em] opacity-70 mt-1">
                                {t('footerCommunityLocation')}
                            </span>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs text-white/40 font-light tracking-wide">
                        {t('footerCopyright', { year: new Date().getFullYear() })}
                    </div>
                </div>
            </div>
        </footer>
    );
}
