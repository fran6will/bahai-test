'use client';

import { useState } from 'react';
import Section from '@/components/Section';
import { Link } from '@/navigation';
import Footer from '@/components/Footer';

export default function FAQPage() {
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

    return (
        <main className="w-full pt-20">
            {/* Header Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/ensavoir/ensavoir_header.webp')" }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">En savoir plus</h1>
                </div>
            </section>

            <section className="w-full py-12 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-4xl mx-auto">
                    <div className="p-8 md:p-12 bg-white" style={{ borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h2 className="text-4xl font-bold mb-8 text-center">Questions fréquemment posées</h2>

                        <div className="space-y-4">
                            {/* FAQ Item 1 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Quelle est la composition démographique de la communauté bahá’íe de Montréal?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    La communauté est aussi diversifiée que la population de Montréal elle-même, tant en ce qui concerne les âges que les origines ethniques. Vous trouverez des bahá’í·e·s dont les racines culturelles proviennent de plusieurs régions dans le monde. Étant donné que la religion est née en Perse, on compte un nombre particulièrement élevé de bahá’í·e·s d’origine iranienne, surtout en raison de la persécution continue des bahá’í·e·s par le gouvernement iranien, qui a poussé de nombreux croyants à se réinstaller à travers le monde, y compris ici à Montréal.
                                </div>
                            </details>

                            {/* FAQ Item 2 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Combien y a-t-il de baha’íe à Montréal, au Canada et à travers le monde?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    <p className="mb-2">La foi bahá’íe compte plus de cinq millions de membres à travers le globe. Elle est établie dans plus de 100 000 localités, dans pratiquement tous les pays et territoires du monde. Au Canada, on compte plus de 30 000 membres d’origines diverses répartis dans plus de 1 200 localités. À Montréal plus précisément, on compte environ 500 bahá’ís.</p>
                                    <p>Pour en savoir plus : <a href="https://www.bahai.org/fr/national-communities/" target="_blank" rel="noopener noreferrer" className="text-[#865B5B] hover:underline">https://www.bahai.org/fr/national-communities/</a></p>
                                </div>
                            </details>

                            {/* FAQ Item 3 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Qui dirige la communauté bahá’íe de Montréal?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    La foi bahá’íe n’a pas de clergé. Cela signifie qu’aucune classe sacerdotale ne s’interpose entre l’individu et sa recherche spirituelle. Les décisions communautaires se prennent collectivement, par consultation. La foi dispose cependant d’un système administratif aux niveaux international, national et local. Comme dans presque toutes les autres villes du monde, Montréal possède son propre conseil administratif local. Appelée Assemblée spirituelle locale, cette institution est composée de neuf membres élu·e·s chaque année de manière non partisane par l’ensemble des bahá’í·e·s de la ville.
                                </div>
                            </details>

                            {/* FAQ Item 4 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Existe-t-il une église à Montréal?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    Il n’existe pas d’église dans la foi bahá’íe. Les activités sont principalement organisées à l’échelle des quartiers et se déroulent dans des lieux informels, tels que des maisons, des parcs ou des centres communautaires. Il n’est pas rare d’assister à une rencontre chez quelqu’un, de participer à un groupe de jeunes dans un centre communautaire, ou d’avoir une conversation profonde dans un café. Bien qu’il n’y ait pas d’église, la foi bahá’íe possède des temples (appelés “maisons d’adoration”) ouverts à tous·tes pour la prière et la méditation. La maison d’adoration la plus proche de Montréal se trouve à Wilmette, en Illinois, près de Chicago.
                                </div>
                            </details>

                            {/* FAQ Item 5 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Comment devenir baha’í ?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    Être bahá’í·e signifie simplement reconnaître Bahá’u’lláh comme le Messager de Dieu pour notre époque et suivre ses lois et ses enseignements. Il n’y a aucun processus ou rituel formel pour devenir bahá’í·e. Si vous reconnaissez Bahá’u’lláh et que vous tentez de suivre Ses enseignements, alors vous êtes bahá’í·e. Toutefois, les gens informent généralement le conseil administratif local (appelé l’Assemblée spirituelle locale) de leur foi, afin de pouvoir participer pleinement aux activités et prendre part au développement administratif de la communauté.
                                </div>
                            </details>

                            {/* FAQ Item 6 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Comment participer aux activités à Montréal ?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    Des activités ont lieu un peu partout dans la ville. Si vous connaissez un·e bahá’í·e dans votre quartier, vous pouvez lui demander des informations. Sinon, vous pouvez contacter l’Assemblée spirituelle locale, qui pourra vous mettre en relation avec un bahá’í près de chez vous.
                                </div>
                            </details>

                            {/* FAQ Item 7 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Quel est le lien entre Montréal et l’histoire de la foi bahá’íe ?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    Montréal occupe une place unique dans l’histoire bahá’íe. C’est la seule ville au Canada visitée par ‘Abdu’l-Bahá, le fils de Bahá’u’lláh, lors de son voyage en Amérique du Nord en 1912. Sa visite et son séjour au Sanctuaire bahá’í de Montréal en font un lieu sacré et historiquement important pour les bahá’í·e·s du monde entier.
                                </div>
                            </details>

                            {/* FAQ Item 8 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Quelles langues sont employées dans les activités bahá’íes de Montréal ?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    Les activités bahá’íes à Montréal se déroulent principalement en français et en anglais. Plusieurs rencontres sont bilingues, et la communauté s’efforce d’être inclusive linguistiquement, en reflétant la diversité de la ville.
                                </div>
                            </details>

                            {/* FAQ Item 9 */}
                            <details className="group border-b border-gray-300 pb-4">
                                <summary className="flex justify-between items-center cursor-pointer list-none">
                                    <span className="text-lg font-medium">
                                        Vous avez d&apos;autres questions ?
                                    </span>
                                    <span className="text-2xl ml-4 flex-shrink-0">
                                        <span className="group-open:hidden">⊕</span>
                                        <span className="hidden group-open:inline">⊖</span>
                                    </span>
                                </summary>
                                <div className="mt-4 text-gray-700 leading-relaxed">
                                    N’hésitez pas à consulter les ressources ci-haut ou à nous contacter <Link href="/contact" className="text-[#865B5B] hover:underline">ici</Link>.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section moved from Contact Page */}
            <Section id="contact" backgroundColor="#F2EADF">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">Contactez-nous</h2>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Contact Form Section */}
                        <div className="w-full lg:w-3/5">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg">
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">Envoyez-nous un message</h3>
                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                                placeholder="Votre prénom"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleChange}
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
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                            placeholder="votre@courriel.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                                        <select
                                            id="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50"
                                        >
                                            <option value="">Sélectionnez un sujet</option>
                                            <option value="Information générale">Information générale</option>
                                            <option value="Activités">Activités</option>
                                            <option value="Visite du sanctuaire">Visite du sanctuaire</option>
                                            <option value="Librairie">Librairie</option>
                                            <option value="Autre">Autre</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#865B5B] focus:border-transparent outline-none transition-all bg-gray-50 resize-none"
                                            placeholder="Comment pouvons-nous vous aider ?"
                                        ></textarea>
                                    </div>

                                    {status === 'success' && (
                                        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                                            Votre message a été envoyé avec succès ! Nous vous répondrons sous peu.
                                        </div>
                                    )}

                                    {status === 'error' && (
                                        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
                                            Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement par courriel.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full py-4 px-8 text-lg font-bold text-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ backgroundColor: '#865B5B' }}
                                    >
                                        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
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
            <Footer />
        </main>
    );
}
