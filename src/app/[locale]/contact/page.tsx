'use client';

import Section from '@/components/Section';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
    const t = useTranslations('ContactPage');

    return (
        <main className="w-full pt-20">
            <Section id="contact" backgroundColor="#F5F0E1">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">{t('title')}</h1>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form Section */}
                        <div className="w-full lg:w-3/5">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">{t('formTitle')}</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">{t('labelFirstName')}</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                                placeholder={t('placeholderFirstName')}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">{t('labelLastName')}</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                                placeholder={t('placeholderLastName')}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('labelEmail')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder={t('placeholderEmail')}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('labelSubject')}</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                        >
                                            <option value="">{t('subjectDefault')}</option>
                                            <option value="general">{t('subjectGeneral')}</option>
                                            <option value="activities">{t('subjectActivities')}</option>
                                            <option value="visit">{t('subjectSanctuary')}</option>
                                            <option value="bookstore">{t('subjectBookstore')}</option>
                                            <option value="other">{t('subjectOther')}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('labelMessage')}</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                                            placeholder={t('placeholderMessage')}
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 px-8 text-lg font-bold text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        style={{ backgroundColor: '#865B5B' }}
                                    >
                                        {t('submitButton')}
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            {/* Centre Bahá'í */}
                            <div className="bg-[#FCFBF8] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4" style={{ borderColor: '#A5BEC3' }}>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{t('contactCenterTitle')}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>{t('contactCenterAddress1')}</p>
                                    <p>{t('contactCenterAddress2')}</p>
                                    <a href={`mailto:${t('contactCenterEmail')}`} className="inline-block text-[#865B5B] hover:underline font-medium mt-2">
                                        {t('contactCenterEmail')}
                                    </a>
                                </div>
                            </div>

                            {/* Librairie */}
                            <div className="bg-[#FCFBF8] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4" style={{ borderColor: '#A5BEC3' }}>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{t('contactBookstoreTitle')}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>{t('contactBookstoreAddress1')}</p>
                                    <p>{t('contactBookstoreAddress2')}</p>
                                    <p className="font-medium">{t('contactBookstorePhone')}</p>
                                    <a href={`mailto:${t('contactBookstoreEmail')}`} className="inline-block text-[#865B5B] hover:underline font-medium">
                                        {t('contactBookstoreEmail')}
                                    </a>
                                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                                        <p className="font-semibold mb-1">{t('contactBookstoreHoursTitle')}</p>
                                        <p>{t('contactBookstoreHours1')}</p>
                                        <p>{t('contactBookstoreHours2')}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sanctuaire */}
                            <div className="bg-[#FCFBF8] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4" style={{ borderColor: '#A5BEC3' }}>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{t('contactSanctuaryTitle')}</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>{t('contactSanctuaryAddress1')}</p>
                                    <p>{t('contactSanctuaryAddress2')}</p>
                                    <p className="font-medium">{t('contactSanctuaryPhone')}</p>
                                    <a href={`mailto:${t('contactSanctuaryEmail')}`} className="inline-block text-[#865B5B] hover:underline font-medium">
                                        {t('contactSanctuaryEmail')}
                                    </a>
                                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                                        <p className="font-semibold mb-1">{t('contactSanctuaryHoursTitle')}</p>
                                        <p>{t('contactSanctuaryHours1')}</p>
                                        <p>{t('contactSanctuaryHours2')}</p>
                                        <p>{t('contactSanctuaryHours3')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </main>
    );
}
