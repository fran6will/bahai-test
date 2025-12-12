'use client';

import Section from '@/components/Section';

export default function ContactPage() {
    return (
        <main className="w-full pt-20">
            <Section id="contact" backgroundColor="#F5F0E1">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Contactez-nous</h1>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form Section */}
                        <div className="w-full lg:w-3/5">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                                placeholder="Votre prénom"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                                placeholder="Votre nom"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Courriel</label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder="votre@courriel.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="general">Information générale</option>
                                            <option value="activities">Activités</option>
                                            <option value="visit">Visite du sanctuaire</option>
                                            <option value="bookstore">Librairie</option>
                                            <option value="other">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                                            placeholder="Comment pouvons-nous vous aider ?"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full py-4 px-8 text-lg font-bold text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                        style={{ backgroundColor: '#865B5B' }}
                                    >
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="w-full lg:w-2/5 space-y-8">
                            {/* Centre Bahá'í */}
                            <div className="bg-[#FCFBF8] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4" style={{ borderColor: '#A5BEC3' }}>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Centre bahá’í de Montréal</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>177 avenue des Pins Est</p>
                                    <p>Montréal, Québec, H2W 1N9, Canada</p>
                                    <a href="mailto:secretariat@bahaimontreal.org" className="inline-block text-[#865B5B] hover:underline font-medium mt-2">
                                        secretariat@bahaimontreal.org
                                    </a>
                                </div>
                            </div>

                            {/* Librairie */}
                            <div className="bg-[#FCFBF8] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4" style={{ borderColor: '#A5BEC3' }}>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Librairie</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>177 avenue des Pins Est</p>
                                    <p>Montréal, Québec, H2W 1N9, Canada</p>
                                    <p className="font-medium">(514) 849-0753</p>
                                    <a href="mailto:centre@bahaimontreal.org" className="inline-block text-[#865B5B] hover:underline font-medium">
                                        centre@bahaimontreal.org
                                    </a>
                                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                                        <p className="font-semibold mb-1">Heures d&apos;ouverture :</p>
                                        <p>Mercredi et Jeudi : 15h à 19h</p>
                                        <p>Samedi : 11h à 15h</p>
                                    </div>
                                </div>
                            </div>

                            {/* Sanctuaire */}
                            <div className="bg-[#FCFBF8] p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4" style={{ borderColor: '#A5BEC3' }}>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">Sanctuaire bahá’í de Montréal</h3>
                                <div className="space-y-2 text-gray-700">
                                    <p>1548, av des Pins O.</p>
                                    <p>Montréal, QC H2W 1N9</p>
                                    <p className="font-medium">(514) 568-2104</p>
                                    <a href="mailto:info@bahaimontreal.org" className="inline-block text-[#865B5B] hover:underline font-medium">
                                        info@bahaimontreal.org
                                    </a>
                                    <div className="mt-4 pt-4 border-t border-gray-200 text-sm">
                                        <p className="font-semibold mb-1">Heures de visite :</p>
                                        <p>Mercredi : 19h à 21h</p>
                                        <p>Samedi : 13h à 16h</p>
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
