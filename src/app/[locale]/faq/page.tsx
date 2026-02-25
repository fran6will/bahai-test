'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { Link } from '@/navigation';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function FAQPage() {
    const t = useTranslations('FAQPage');

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const faqItems = [
        { question: t('faq1Question'), answer: t('faq1Answer') },
        { question: t('faq2Question'), answer: t('faq2Answer'), link: { text: t('faq2Link'), url: 'https://www.bahai.org/fr/national-communities/' } },
        { question: t('faq3Question'), answer: t('faq3Answer') },
        { question: t('faq4Question'), answer: t('faq4Answer') },
        { question: t('faq5Question'), answer: t('faq5Answer') },
        { question: t('faq6Question'), answer: t('faq6Answer') },
        { question: t('faq7Question'), answer: t('faq7Answer') },
        { question: t('faq8Question'), answer: t('faq8Answer') },
    ];

    return (
        <main className="w-full pt-20">
            {/* Header Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/ensavoir/ensavoir_header.webp')" }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">{t('title')}</h1>
                </div>
            </section>

            <section className="w-full py-12 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 bg-white" style={{ borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h2 className="text-4xl font-bold mb-8 text-center">{t('faqTitle')}</h2>

                        <div className="space-y-4">
                            {faqItems.map((item, index) => (
                                <details key={index} className="group border-b border-gray-300 pb-4">
                                    <summary className="flex justify-between items-center cursor-pointer list-none">
                                        <span className="text-lg font-medium">
                                            {item.question}
                                        </span>
                                        <span className="text-2xl ml-4 flex-shrink-0">
                                            <span className="group-open:hidden">⊕</span>
                                            <span className="hidden group-open:inline">⊖</span>
                                        </span>
                                    </summary>
                                    <div className="mt-4 text-gray-700 leading-relaxed">
                                        <p>{item.answer}</p>
                                        {item.link && (
                                            <p className="mt-2">{item.link.text} <a href={item.link.url} target="_blank" rel="noopener noreferrer" className="text-[#865B5B] hover:underline">{item.link.url}</a></p>
                                        )}
                                    </div>
                                </details>
                            ))}

                            {/* FAQ Item 9 - Special with contact link */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        {t('faq9Question')}
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    {t.rich('faq9Answer', {
                                        contactLink: (chunks) => <Link href="/contact" className="text-[#865B5B] hover:underline">{t('faq9LinkText')}</Link>
                                    })}
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <Section id="contact" backgroundColor="#F2EADF">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">{t('contactTitle')}</h2>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form Section */}
                        <div className="w-full lg:w-3/5">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">{t('contactFormTitle')}</h3>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">{t('labelFirstName')}</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                                placeholder={t('placeholderFirstName')}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">{t('labelLastName')}</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
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
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder={t('placeholderEmail')}
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">{t('labelSubject')}</label>
                                        <select
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                        >
                                            <option value="">{t('subjectDefault')}</option>
                                            <option value="Information générale">{t('subjectGeneral')}</option>
                                            <option value="Activités">{t('subjectActivities')}</option>
                                            <option value="Visite du sanctuaire">{t('subjectSanctuary')}</option>
                                            <option value="Librairie">{t('subjectBookstore')}</option>
                                            <option value="Autre">{t('subjectOther')}</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">{t('labelMessage')}</label>
                                        <textarea
                                            id="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                                            placeholder={t('placeholderMessage')}
                                        ></textarea>
                                    </div>

                                    {status === 'success' && (
                                        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                                            {t('successMessage')}
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                                            {t('errorMessage')}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full py-4 px-8 text-lg font-bold text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: '#865B5B' }}
                                    >
                                        {status === 'loading' ? t('submittingButton') : t('submitButton')}
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
            <Footer />
        </main>
    );
}
