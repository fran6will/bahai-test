'use client';

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Compass, Atom, Scale, Sprout, HeartHandshake, Quote } from 'lucide-react';
import Image from 'next/image';

export default function VisionPage() {
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
                <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif relative z-10">Vision</h1>
            </section>

            <section className="w-full py-20 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-7xl mx-auto">

                    {/* Block 1: Dieu transcendant (Text Left, Image Right) */}
                    {/* Block 1: Dieu transcendant (Centered Text) */}
                    <div className="w-full max-w-4xl mx-auto text-center mb-24">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-[#333]">Une conception transcendante de Dieu</h2>
                        <p className="text-lg leading-relaxed font-serif text-gray-800 text-left md:text-justify">
                            Pour les bahá&apos;í·e·s, Dieu est la source créatrice de toute existence. Cette Réalité divine, imperceptible et invisible, dépasse notre intelligence et notre compréhension : Elle contient tout et donc, ne peut être contenue. Cette vision admet que nos conceptions du divin sont forcément limitées par notre expérience terrestre. Les qualités que nous attribuons à Dieu servent à Lui dénier toutes imperfections humaines, mais elles ne reflètent pas la nature véritable de cette Réalité universelle, impossible à saisir.
                        </p>
                    </div>

                    <div className="w-full max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif text-[#333]">Une révélation progressive</h2>
                        <p className="text-lg leading-relaxed font-serif text-gray-800 mb-8 text-left md:text-justify">
                            Cette conception transcendante du divin explique pourquoi les différentes traditions ont développé des appellations et des compréhensions variées de cette même réalité divine : Dieu, Allah, Yahvé, le Tao, le Manitou, le Père céleste, etc. Dans cette perspective, les différentes religions ne sont pas des constructions contradictoires, mais plutôt des réponses adaptées aux besoins spécifiques des sociétés qui les ont reçues.
                        </p>

                        {/* Visual Timeline / List */}
                        <div className="mb-8">
                            <p className="text-sm font-bold text-[#865B5B] uppercase tracking-wide mb-4 font-serif">Quelques messagers divins à travers l&apos;histoire</p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {["Abraham", "Krishna", "Zoroastre", "Moïse", "Bouddha", "Jésus", "Mahomet", "Le Báb", "Bahá'u'lláh"].map((name, i) => (
                                    <span key={i} className="inline-block px-4 py-2 bg-[#F9F7F2] text-[#333] rounded-full border border-[#D0C0A8] font-serif shadow-sm text-sm md:text-base">
                                        {name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed font-serif text-gray-800 text-left md:text-justify">
                            Chacune de ces révélations enrichit la précédente et délivre un message identique dans son essence. Ainsi, les baha&apos;i·e·s croient qu&apos;il n&apos;existe au fond qu&apos;une seule foi et que les révélations religieuses successives posent l&apos;une après l&apos;autre les fondements spirituels pour le progrès constant de la civilisation.
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
                                alt="Unité dans la diversité"
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
                                    Les différences au sein de la famille humaine devraient être la cause de l&apos;amour et de l&apos;harmonie, de même qu&apos;en musique l&apos;accord parfait résulte de la résonance simultanée d&apos;un grand nombre de notes différentes.
                                </p>
                                <p className="text-gray-600 text-sm font-serif relative z-10">— Abdu&apos;l-Bahá, fils de Baha’u’llah</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-12 md:py-20 px-6 md:px-16 lg:px-32 relative" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-serif">
                        D&apos;autres principes essentiels de la foi bahá&apos;íe
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {[
                            {
                                icon: Compass,
                                title: "Recherche indépendante de la vérité",
                                text: "La recherche personnelle et indépendante de la vérité remplace l'acceptation aveugle de dogmes. Chaque individu est encouragé à chercher, questionner et découvrir par lui-même. Toute forme de prosélytisme est interdit."
                            },
                            {
                                icon: Atom,
                                title: "Harmonie entre science et religion",
                                text: "L'harmonie entre science et religion reconnaît que ces deux systèmes de connaissance, loin de s'opposer, se complètent."
                            },
                            {
                                icon: Scale,
                                title: "Égalité des genres",
                                text: "L'égalité des genres n'est pas vue comme une concession moderne, mais comme un principe spirituel fondamental, essentiel au progrès de l'humanité."
                            },
                            {
                                icon: Sprout,
                                title: "Éducation universelle",
                                text: "L'éducation universelle pour tous·tes, sans distinction, devient un devoir moral et social."
                            },
                            {
                                icon: HeartHandshake,
                                title: "Justice économique",
                                text: "La justice économique vise l'abolition des extrêmes de richesse et de pauvreté, non par nivellement, mais par l'établissement de systèmes plus équitables. Le progrès spirituel et moral de la société dans son ensemble est également indispensable, puisque la transformation matérière et l'élévation de la conscience humaine sont indissociables pour atteindre une véritable justice sociale.",
                                fullWidth: true
                            }
                        ].map((principle, index) => (
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
                            Pour en savoir plus sur la foi baha&apos;íe : <a href="https://www.bahai.org" target="_blank" rel="noopener noreferrer" className="text-[#865B5B] hover:underline">www.bahai.org</a>
                        </p>
                    </div>
                </div>
            </section>


            <Footer />
        </main>
    );
}
