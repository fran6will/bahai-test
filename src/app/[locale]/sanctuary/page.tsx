'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SanctuaryPage() {
    return (
        <main className="w-full pt-20 bg-[#F9F7F2] text-[#333]">
            {/* Hero Section */}
            {/* Header Section */}
            <section className="relative w-full py-24 md:py-32 px-6 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/images/sanctuary/header_sanct.webp')", backgroundAttachment: 'fixed' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#F5F0E1] font-serif">Sanctuaire bahá&apos;í de Montréal</h1>
                </div>
            </section>

            <div className="w-full py-8 px-6 md:px-12 pb-12" style={{ backgroundColor: '#F9F7F2' }}>
                <div className="max-w-7xl mx-auto">


                    {/* Section 1: History & Portrait */}
                    <div className="mt-12 grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#9C4436] font-serif">Une demeure historique</h2>
                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-sans">
                                <p>
                                    <strong className="text-[#9C4436]">‘Abdu’l-Bahá</strong>, le fils du fondateur de la foi bahá’íe (Bahá’u’lláh), a séjourné chez May et William Sutherland Maxwell pendant sa visite de dix jours à Montréal en 1912.
                                </p>
                                <p>
                                    Il appelait cette habitation sa maison. Pendant son séjour, il a donné trois conférences publiques et a rencontré de nombreuses personnes, partageant ses enseignements sur la paix, l&apos;unité de la religion et l&apos;égalité. Sa visite a été un moment marquant, largement couvert par la presse de l&apos;époque.
                                </p>
                            </div>
                        </div>

                        <div className="relative order-1 md:order-2 flex justify-center">
                            <div className="relative w-72 md:w-80 aspect-[3/4]">
                                <div className="absolute inset-0 border-2 border-[#9C4436]/20 rounded-full transform translate-x-4 translate-y-4"></div>
                                <Image
                                    src="/images/sanctuary/AbdulBaha.webp"
                                    alt="Portrait de 'Abdu'l-Bahá"
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
                                « J&apos;ai semé la graine, maintenant arrosez-la. Vous devez éduquer les âmes dans la morale divine, les rendre spirituelles, et les conduire à l&apos;unité de l&apos;humanité et à la paix universelle. »
                            </p>
                            <footer className="mt-8 text-[#9C4436] font-bold tracking-widest uppercase text-sm">
                                — ‘Abdu’l-Bahá, Montréal 1912
                            </footer>
                        </blockquote>
                    </div>

                    {/* Section 3: Visit Info with overlapping style */}
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-7 relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                            <Image
                                src="/images/sanctuary/sanctuary.webp"
                                alt="Sanctuaire intérieur"
                                fill
                                className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-[#9C4436]/10 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>

                        <div className="md:col-span-5 bg-white p-8 md:p-12 rounded-xl shadow-xl md:-ml-20 relative z-10 border-l-4 border-[#9C4436]">
                            <h2 className="text-3xl font-bold text-[#9C4436] mb-6 font-serif">Planifier votre visite</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Le sanctuaire est un havre de paix ouvert à tous. Que ce soit pour la prière, la méditation ou simplement pour découvrir l&apos;histoire de ce lieu unique.
                            </p>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#9C4436] rounded-full"></span>
                                    Visites guidées sur rendez-vous
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#9C4436] rounded-full"></span>
                                    Moments de recueillement
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="w-2 h-2 bg-[#9C4436] rounded-full"></span>
                                    Découverte historique
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 4: Booking Calendar */}
                    <div id="reserver" className="mt-32 pt-16 border-t border-[#9C4436]/20 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#333] font-serif">Réserver une visite</h2>
                        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">Choisissez le moment qui vous convient pour découvrir le sanctuaire.</p>

                        <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto ring-1 ring-black/5">
                            <iframe
                                src="https://calendly.com/sanctuaire-montreal-shrine/rdv-appointment"
                                width="100%"
                                height="700"
                                style={{ border: 0 }}
                                title="Réserver une visite"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}