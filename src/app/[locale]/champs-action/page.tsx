'use client';

import Footer from '@/components/Footer';
import Section from '@/components/Section';
import ActivityBox from '@/components/ActivityBox';
import Image from 'next/image';
import { Link } from '@/navigation';
import { Quote } from 'lucide-react';

export default function ChampsActionPage() {
    const activities = [
        {
            title: "Espaces communautaires pour se recueillir",
            description: "Dans différents foyers de Montréal, les bahá’í·e·s se réunissent avec ami·e·s et familles pour se recueillir, prier et méditer ensemble. Ces rencontres prennent différentes formes selon les participant·e·s et s’adaptent à la réalité de chaque groupe.",
            image: "/images/activities/social_02.webp"
        },
        {
            title: "Cercles de partages et de réflexions",
            description: "Aux côtés de personnes de toutes croyances, les bahá’í·e·s se réunissent pour explorer les Écrits sacrés et leur application au quotidien. La forme de ces rencontres varient selon l’unicité de chaque groupe, mais intègrent souvent arts et sciences pour nourrir l’esprit de façon holistique. Cette démarche vise un double objectif : favoriser la transformation personnelle et contribuer à l’amélioration de la société.",
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
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">Champs d&apos;action</h1>
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
                                    &quot;Nous ne pouvons pas séparer le cœur humain de l’environnement qui lui est extérieur et dire qu’une fois que l’un ou l’autre aura changé, chaque chose sera améliorée. L’homme fait partie du monde. Sa vie intérieure façonne l’environnement et est elle-même profondément influencée par lui. L’un agit sur l’autre et chaque changement durable dans la vie de l’homme est le résultat de cette interaction.&quot;
                                </p>
                                <p className="text-gray-600 text-sm font-serif relative z-10">— Shoghi Effendi</p>
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
                            Ayant à coeur l’établissement de l’unité entre tous les êtres vivants, la communauté bahá’íe participe activement à diverses initiatives, dont la participation aux discours sociaux sur l’égalité des genres, les dialogues interreligieux, le processus de réconciliation avec les peuples autochtones, la protection de l’environnement, ainsi que le soutien aux familles grâce à des programmes éducatifs destinés aux enfants, aux adolescent·e·s et aux adultes.
                        </p>
                        <p className="text-lg md:text-xl leading-relaxed text-gray-800 font-serif">
                            Aux côtés de leurs am·i·es, voisin·e·s et collaborateur·rice·s, les bahá’í·e·s de Montréal s’efforcent de bâtir des communautés dynamiques en renforçant leur capacité à servir autrui et en créant des amitiés profondes et véritables avec tous·tes celles et ceux qui les ont entourent, basées sur l’entraide et la collaboration.
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
                            Les délégués de la communauté baha’ie pour la 69e commission sur le statut de la femme à l’ONU
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
