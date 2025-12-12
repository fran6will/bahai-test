'use client';

import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Activity {
    title: string;
    description: string;
    image: string;
}

// Separate component for individual interaction state
function ActivityCard({ activity, index }: { activity: Activity, index: number }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`flex flex-col cursor-pointer group ${index % 2 === 0 ? 'md:translate-y-8' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="relative h-64 md:h-80 overflow-hidden rounded-2xl shadow-lg mb-6">
                <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isOpen ? 'opacity-40' : 'group-hover:opacity-30'}`}></div>

                {/* Overlay Icon/Hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-white/90 text-[#865B5B] px-4 py-2 rounded-full font-bold shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                        {isOpen ? 'Fermer' : 'Lire plus'}
                    </span>
                </div>
            </div>

            <div className="bg-[#FCFBF8] p-6 rounded-2xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-lg">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-bold text-[#865B5B] group-hover:text-[#6D4848] transition-colors">{activity.title}</h3>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-700 leading-relaxed text-lg font-serif border-t border-gray-200 pt-4">
                                {activity.description}
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!isOpen && (
                    <p className="text-gray-400 text-sm italic mt-2 group-hover:text-[#865B5B] transition-colors">
                        Cliquez pour en savoir plus...
                    </p>
                )}
            </div>
        </motion.div>
    );
}

export default function ChampsActionPage() {
    const activities = [
        {
            title: "Espaces communautaires pour se recueillir",
            description: "Dans différents foyers de Montréal, les bahá’í·e·s se réunissent avec ami·e·s et familles pour se recueillir, prier et méditer ensemble. Ces rencontres prennent différentes formes selon les participant·e·s et s’adaptent à la réalité de chaque groupe.",
            image: "/images/activities/commmunity_spaces.webp"
        },
        {
            title: "Cercles de partages et de réflexions",
            description: "Aux côtés de personnes de toutes croyances, les bahá’í·e·s se réunissent pour explorer ensemble les enseignements spirituels contenus dans les Écrits sacrés. Ils et elles réfléchissent collectivement à leurs significations profondes, aux diverses nuances qu’ils révèlent et à la manière dont ces enseignements peuvent éclairer leur quotidien. Ces espaces, façonnés créativement selon différentes initiatives, intègrent souvent arts et perspectives scientifiques, permettant une approche plus holistique, qui nourrit à la fois l’intellect, le cœur et l’esprit. Cette démarche vise un double objectif moral : favoriser la transformation intérieure de chacun et contribuer à l’amélioration de la société.",
            image: "/images/activities/circle_02.webp"
        },
        {
            title: "Enfants et pré-jeunes",
            description: "La communauté bahá’íe accorde une grande importance à l’épanouissement spirituel, moral et intellectuel des enfants et des pré-jeunes, leur permettant de développer les capacités nécessaires pour contribuer à leur communauté et grandir en tant qu’individus.",
            image: "/images/beliefs/prejeune.webp"
        },
        {
            title: "Action sociale",
            description: "L’engagement des bahá’í·e·s dans l’action sociale se manifeste de plus en plus à travers des partenariats avec des organismes communautaires, des activités de soutien scolaire et divers projets de service au sein des quartiers de Montréal.",
            image: "/images/beliefs/action_sociale.webp"
        }
    ];

    return (
        <main className="w-full pt-20">
            {/* Hero / Quote Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/beliefs/champaction_header.webp')", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">Champs d&apos;action</h1>
                </div>
            </section>

            {/* New Quote Section */}
            <section className="w-full py-12 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F2EADF' }}>
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
                            {/* Decorative square */}
                            <div
                                className="absolute -top-6 -right-6 w-16 h-16 z-30"
                                style={{ backgroundColor: '#7DA09E' }}
                            />
                            <div
                                className="relative p-8 md:p-12 shadow-2xl rounded-lg"
                                style={{ backgroundColor: '#F5F0E1' }}
                            >
                                <p className="font-serif text-lg md:text-xl leading-relaxed italic text-gray-800 mb-6 relative z-10">
                                    &quot;Nous ne pouvons pas séparer le cœur humain de l’environnement qui lui est extérieur et dire qu’une fois que l’un ou l’autre aura changé, chaque chose sera améliorée. L’homme fait partie du monde. Sa vie intérieure façonne l’environnement et est elle-même profondément influencée par lui. L’un agit sur l’autre et chaque changement durable dans la vie de l’homme est le résultat de cette interaction.&quot;
                                </p>
                                <p className="text-gray-600 text-sm font-serif relative z-10">— Shoghi Effendi</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Text */}
            {/* Intro Text - Zig-Zag Layout (Text Left, Image Right) */}
            <section className="w-full py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Side */}
                    <div className="space-y-6 order-2 lg:order-1">
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-serif">
                            Ayant à coeur l’établissement de l’unité entre tous les êtres vivants, la communauté bahá’íe participe activement à diverses initiatives, dont la participation aux discours sociaux sur l’égalité des genres, les dialogues interreligieux, le processus de réconciliation avec les peuples autochtones, la protection de l’environnement, ainsi que le soutien aux familles grâce à des programmes éducatifs destinés aux enfants, aux adolescent·e·s et aux adultes.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-serif">
                            Aux côtés de leurs am·i·es, voisin·e·s et collaborateur·rice·s, les bahá’í·e·s de Montréal s’efforcent de bâtir des communautés dynamiques en renforçant leur capacité à servir autrui et en créant de amitiés profondes et véritables avec tous·tes celles et ceux qui les entourent, basées sur l’entraide et la collaboration.
                        </p>
                    </div>

                    {/* Image Side */}
                    <div className="relative rounded-lg overflow-hidden shadow-2xl order-1 lg:order-2">
                        <Image
                            src="/images/action/action.webp"
                            alt="Action sociale et communautaire"
                            width={800}
                            height={600}
                            className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </section>

            {/* Activities Grid - Interactive Layout */}
            <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#F2EADF' }}>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        {activities.map((activity, index) => (
                            <ActivityCard key={index} activity={activity} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 text-center" style={{ backgroundColor: '#A5BEC3' }}>
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Vous souhaitez participer à l’une de ces activités?
                    </h2>
                    <Link
                        href="/contact"
                        className="inline-block font-bold py-4 px-10 text-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 rounded-full"
                        style={{
                            backgroundColor: '#865B5B',
                            color: '#FBFAF6'
                        }}
                    >
                        Contactez-nous!
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
