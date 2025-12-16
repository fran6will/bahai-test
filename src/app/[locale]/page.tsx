'use client';

import { Quote } from 'lucide-react';

import Section from '@/components/Section';
import Hero from '@/components/Hero';
import QuoteSection from '@/components/QuoteSection';
import ActivityBox from '@/components/ActivityBox';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('HomePageContent');


  return (
    <main className="w-full">
      <Hero />
      <QuoteSection />

      {/* Section communauté avec background A5BEC3 */}
      <section id="communaute" className="pt-16 pb-16 md:pt-32 md:pb-24" style={{ backgroundColor: '#A5BEC3' }}>
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white font-serif">
            {t('communitySectionTitle')}
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto font-serif">
            {t('communitySectionDescription')}
          </p>
        </div>
      </section>

      {/* Section transition avec image full width et pleine hauteur */}
      <section className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/transition/community-wide.jpg')" }}>
        <div className="absolute inset-0"></div>
      </section>



      <Section id="activites" backgroundColor="#F5F0E1">
        <h1 className="text-4xl font-bold mb-8 text-center font-serif">{t('activitiesSectionTitle')}</h1>
        <p className="text-lg mb-12 text-center max-w-4xl mx-auto font-serif">
          {t('activitiesSectionDescription')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActivityBox
            title={t('activityBox1Title')}
            description={t('activityBox1Description')}
            imageSrc="/images/activities/community_spaces.webp"
            imageAlt="Espaces communautaires"
            delay={0}
          />

          <ActivityBox
            title={t('activityBox2Title')}
            description={t('activityBox2Description')}
            imageSrc="/images/activities/study_circles.webp"
            imageAlt="Cercles de partages"
            delay={0.1}
          />

          <ActivityBox
            title={t('activityBox3Title')}
            description={t('activityBox3Description')}
            imageSrc="/images/activities/kids.webp"
            imageAlt="Enfants et pré-adolescents"
            delay={0.2}
          />

          <ActivityBox
            title={t('activityBox4Title')}
            description={t('activityBox4Description')}
            imageSrc="/images/activities/IMG_1776.jpeg"
            imageAlt="Action sociale"
            delay={0.3}
          />
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/champs-action"
            className="inline-block font-bold py-4 px-8 text-lg md:text-xl transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer rounded-lg"
            style={{
              backgroundColor: '#865B5B',
              color: '#FBFAF6'
            }}
          >
            {t('activitiesButton')}
          </Link>
        </div>
      </Section>

      {/* Decorative transition */}
      <div className="w-full py-8 flex justify-center" style={{ backgroundColor: '#F5F0E1' }}>
        <div className="w-24 h-px bg-[#865B5B]/30" />
      </div>

      {/* Unité dans la diversité */}
      <section id="vision" className="w-full py-12 md:py-20 px-6 md:px-16 lg:px-32 relative md:pb-32" style={{ backgroundColor: '#E0DACC' }}>
        <div className="max-w-4xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif">{t('unityDiversityTitle')}</h2>
          <p className="text-lg mb-6 font-serif">
            {t('unityDiversityDescription1')}
          </p>
          <p className="text-lg mb-6 font-serif">
            {t('unityDiversityDescription2')}
          </p>
          <div className="mt-8">
            <Link
              href="/vision"
              className="inline-block font-bold py-3 px-6 text-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-lg"
              style={{
                backgroundColor: '#865B5B',
                color: '#FBFAF6'
              }}
            >
              {t('unityDiversityButton')}
            </Link>
          </div>
        </div>

        {/* Quote block - mobile: inline, desktop: floating */}
        <div className="mt-8 p-6 shadow-lg md:hidden" style={{ backgroundColor: '#7DA09E' }}>
          <p className="text-white text-base italic leading-relaxed mb-3">
            {t('unityDiversityQuote')}
          </p>
          <p className="text-white text-sm text-right">
            {t('unityDiversityQuoteAuthor')}
          </p>
        </div>

        {/* Quote block positioned on the right, overlapping sections - desktop only */}
        <div className="hidden md:block absolute right-8 lg:right-16 bottom-0 translate-y-1/2 w-80 lg:w-96 p-12 pt-16 pl-12 shadow-xl" style={{ backgroundColor: '#7DA09E', zIndex: 10 }}>
          {/* Decorative square with quote icon */}
          <div
            className="absolute -top-10 -left-10 w-20 h-20 flex items-center justify-center shadow-md bg-[#F5F0E1]"
            style={{ borderRadius: '4px' }}
          >
            <Quote size={40} className="text-[#7DA09E] fill-[#7DA09E] opacity-50" />
          </div>

          <p className="text-white text-lg italic leading-relaxed mb-4 relative z-10">
            {t('unityDiversityQuote')}
          </p>
          <p className="text-white text-sm text-right">
            {t('unityDiversityQuoteAuthor')}
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="w-full relative">
        <div className="relative w-full aspect-video"> {/* Using aspect-video for fixed aspect ratio */}
          <Image
            src="/images/unity.webp"
            alt="Communauté bahá'íe de Montréal"
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-black/20"></div> {/* Overlay for dark effect */}
        </div>
      </section>

      {/* Sanctuary Preview Banner */}
      <section id="sanctuaire" className="w-full py-16 px-6 md:px-12 relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/beliefs/Vision_head.webp')" }}>
        <div className="absolute inset-0 bg-[#F9F7F1]/90"></div>
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image landscape */}
          <div className="w-full md:w-1/2 relative h-64 md:h-80">
            <Image
              src="/images/sanctuary/sanctuary.webp"
              alt="Sanctuaire bahá'í de Montréal"
              className="rounded-lg shadow-md object-cover"
              fill
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 font-serif">{t('sanctuaryTitle')}</h2>
            <p className="text-lg mb-8 leading-relaxed font-serif">
              {t('sanctuaryDescription')}
            </p>
            <Link
              href="/sanctuary"
              className="inline-block font-bold py-3 px-8 text-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer rounded-lg"
              style={{
                backgroundColor: '#865B5B',
                color: '#FBFAF6'
              }}
            >
              {t('sanctuaryButton')}
            </Link>
          </div>
        </div>
      </section>



      {/* Footer */}
      <Footer />
    </main>
  );
}