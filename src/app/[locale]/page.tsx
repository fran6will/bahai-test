'use client';

import Section from '@/components/Section';
import Hero from '@/components/Hero';
import QuoteSection from '@/components/QuoteSection';
import ActivityBox from '@/components/ActivityBox';
import ScrollNavigator from '@/components/ScrollNavigator';

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <ScrollNavigator />
      <QuoteSection />

      {/* Section communauté avec background A5BEC3 */}
      <section id="communaute" className="py-16 md:py-32" style={{ backgroundColor: '#A5BEC3' }}>
        <div className="container mx-auto px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Une communauté ouverte au cœur de Montréal
          </h2>
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-4xl mx-auto">
            Aux côtés de nos ami·e·s et voisin·e·s, les bahá'í·e·s de Montréal s'efforcent de bâtir des communautés dynamiques. Nous cherchons à renforcer notre capacité à servir autrui et à créer des amitiés profondes, basées sur l'entraide et la collaboration.
          </p>
        </div>
      </section>

      {/* Section transition avec image full width et pleine hauteur */}
      <section className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/images/transition/community-wide.jpg')" }}>
        <div className="absolute inset-0"></div>
      </section>

      

      <Section id="activites" backgroundColor="#F5F0E1">
        <h1 className="text-4xl font-bold mb-8 text-center">Activités</h1>
        <p className="text-lg mb-12 text-center max-w-4xl mx-auto">
          Ayant à coeur l'établissement de l'unité entre tous les êtres vivants, la communauté bahá'íe participe activement à diverses initiatives.
        </p>

        <div className="space-y-12">
          <ActivityBox
            title="Espaces communautaires pour se recueillir"
            description="Dans différents foyers de Montréal, les bahá'í·e·s se réunissent avec ami·e·s et familles pour se recueillir, prier et méditer ensemble. Ces rencontres prennent différentes formes selon les participant·e·s et s'adaptent à la réalité de chaque groupe."
            imageSrc="/images/activities/commmunity_spaces.webp"
            imageAlt="Espaces communautaires"
            delay={0}
            reverse={false}
          />

          <ActivityBox
            title="Cercles de partages et de réflexions"
            description="Aux côtés de personnes de toutes croyances, les bahá’í·e·s se réunissent pour explorer ensemble les enseignements spirituels contenus dans les Écrits sacrés. Ils et elles réfléchissent collectivement à leurs significations profondes, aux diverses nuances qu’ils révèlent et à la manière dont ces enseignements peuvent éclairer leur quotidien. Ces espaces, façonnés créativement selon différentes initiatives, intègrent souvent arts et perspectives scientifiques, permettant une approche plus holistique, qui nourrit à la fois l’intellect, le cœur et l’esprit. Cette démarche vise un double objectif moral : favoriser la transformation intérieure de chacun et contribuer à l’amélioration de la société."
            imageSrc="/images/activities/study_circles.webp"
            imageAlt="Cercles de partages"
            delay={0.2}
            reverse={true}
          />

          <ActivityBox
            title="Enfants et pré-adolescent·e·s"
            description="La communauté bahá’íe accorde une grande importance à l’épanouissement spirituel, moral et intellectuel des enfants et des pré-jeunes, leur permettant de développer les capacités nécessaires pour contribuer à leur communauté et grandir en tant qu’individus."
            imageSrc="/images/activities/kids.webp"
            imageAlt="Enfants et pré-adolescents"
            delay={0.4}
            reverse={false}
          />

          <ActivityBox
            title="Action sociale"
            description="L’engagement des bahá’í·e·s dans l’action sociale se manifeste de plus en plus à travers des partenariats avec des organismes communautaires, des activités de soutien scolaire et divers projets de service au sein des quartiers de Montréal."
            imageSrc="/images/activities/social.webp"
            imageAlt="Action sociale"
            delay={0.6}
            reverse={true}
          />
        </div>
      </Section>

      {/* Section transition avec image full width et pleine hauteur */}
      <section id="croyances" className="w-full h-screen bg-cover bg-center relative scroll-mt-0"
        style={{ backgroundImage: "url('/images/beliefs/croyances.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        {/* Rectangle titre Croyances */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-12 py-6 shadow-lg"
          style={{ backgroundColor: '#F5F0E1', zIndex: 10 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Croyances</h2>
        </div>
      </section>

      <Section backgroundColor="#E0DACC">
        <div className="pt-20">
          <div className="p-8 md:p-12 max-w-4xl mx-auto" style={{ backgroundColor: '#FCFBF8' }}>
            <p className="text-lg mb-6">
              Pour les bahá'í·e·s, Dieu est la source créatrice de toute existence. Cette Réalité divine, imperceptible et invisible, dépasse notre intelligence et notre compréhension : Elle contient tout et donc, ne peut être contenue. Cette vision admet que nos conceptions du divin sont forcément limitées par notre expérience terrestre. Les qualités que nous attribuons à Dieu servent à Lui dénier toutes imperfections humaines, mais elles ne reflètent pas la nature véritable de cette Réalité universelle, impossible à saisir.
            </p>

            <p className="text-lg mb-12">
              Cette conception transcendante du divin explique pourquoi les différentes traditions ont développé des appellations et des compréhensions variées de cette même réalité divine : Dieu, Allah, Yahvé, le Tao, le Manitou, le Père céleste, etc. Dans cette perspective, les différentes religions ne sont pas des constructions contradictoires, mais plutôt des réponses adaptées aux besoins spécifiques des sociétés qui les ont reçues. Abraham, Krishna, Zoroastre, Moïse, Bouddha, Jésus, Mahomet, et plus récemment Bahá'u'lláh, le fondateur de la foi baha'ie, sont considérés, pour ne nommer que ceux-là, comme des messagers d'une même Source divine, chacun apportant les enseignements spirituels adaptés à son époque et à son contexte. Chacune de ces révélations enrichit la précédente et délivre un message identique dans son essence. Ainsi, les baha'i·e·s croient qu'il n'existe au fond qu'une seule foi et que les révélations religieuses successives posent l'une après l'autre les fondements spirituels pour le progrès constant de la civilisation.
            </p>
          </div>
        </div>
      </Section>

      {/* Image et citation côte à côte - full width */}
      <section className="w-full flex flex-col md:flex-row gap-0">
        {/* Image à gauche - 50% */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/beliefs/unity_diversity.webp"
            alt="Unity in diversity"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Citation à droite - 50% */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex items-center" style={{ backgroundColor: '#EDF1F4' }}>
          <div>
            <p className="text-lg italic mb-6">
              Il n&apos;est point douteux, en effet, que tous les peuples de la terre, à quelque race ou religion qu&apos;ils appartiennent, tirent leur inspiration spirituelle d&apos;une même source céleste et qu&apos;ils sont les sujets d&apos;un seul Dieu. La diversité des règles et ordonnances religieuses qui les régissent tient à la diversité même des besoins et exigences propres aux âges où elles leur furent révélées.
            </p>
            <p className="text-sm text-gray-600">
              -Extrait d&apos;une tablette révélée par Baha&apos;u&apos;lláh après 1873
            </p>
          </div>
        </div>
      </section>

      {/* Unité dans la diversité */}
      <section className="w-full py-12 md:py-20 px-6 md:px-16 lg:px-32 relative md:pb-32" style={{ backgroundColor: '#FCFBF8' }}>
        <div className="max-w-4xl md:max-w-2xl lg:max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Unité dans la diversité</h2>
          <p className="text-lg mb-6">
            Le but fondamental des enseignements bahá&apos;ís est de promouvoir l&apos;unité du genre humain et de favoriser un esprit d&apos;amour et de fraternité entre tous les peuples de la terre.
          </p>
          <p className="text-lg mb-6">
            Cette unité ne cherche pas à uniformiser, mais plutôt à célébrer la diversité humaine. Elle invite chaque culture, chaque tradition et chaque individu à apporter sa couleur unique à la grande mosaïque de l&apos;humanité.
          </p>
        </div>

        {/* Quote block - mobile: inline, desktop: floating */}
        <div className="mt-8 p-6 shadow-lg md:hidden" style={{ backgroundColor: '#7DA09E' }}>
          <p className="text-white text-base italic leading-relaxed mb-3">
            Si la religion devient une cause d&apos;inimitié, de haine et de division, mieux vaudrait qu&apos;elle n&apos;existât pas. Abandonner une telle religion serait un véritable acte religieux... Toute religion qui n&apos;est pas une cause d&apos;amour et d&apos;unité n&apos;est pas une religion.
          </p>
          <p className="text-white text-sm text-right">
            -&apos;Abdu&apos;l-Bahá
          </p>
        </div>

        {/* Quote block positioned on the right, overlapping sections - desktop only */}
        <div className="hidden md:block absolute right-8 lg:right-16 bottom-0 translate-y-1/2 w-80 lg:w-96 p-8 shadow-xl" style={{ backgroundColor: '#7DA09E', zIndex: 10 }}>
          <p className="text-white text-lg italic leading-relaxed mb-4">
            Si la religion devient une cause d&apos;inimitié, de haine et de division, mieux vaudrait qu&apos;elle n&apos;existât pas. Abandonner une telle religion serait un véritable acte religieux... Toute religion qui n&apos;est pas une cause d&apos;amour et d&apos;unité n&apos;est pas une religion.
          </p>
          <p className="text-white text-sm text-right">
            -&apos;Abdu&apos;l-Bahá
          </p>
        </div>
      </section>

      {/* Autres principes essentiels */}
      <section className="w-full py-12 md:py-20 md:pt-32 px-6 md:px-16 lg:px-32 relative" style={{ backgroundColor: '#F2EADF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center md:pr-96 lg:pr-[26rem]">
            D&apos;autres principes essentiels de la foi bahá&apos;íe
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Principe 1 */}
            <div
              className="p-8"
              style={{
                backgroundColor: '#FEF9EE',
                boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                borderRadius: '8px'
              }}
            >
              <h3 className="text-xl font-bold mb-4">Recherche indépendante de la vérité</h3>
              <p className="text-gray-700 leading-relaxed">
                La recherche personnelle et indépendante de la vérité remplace l&apos;acceptation aveugle de dogmes. Chaque individu est encouragé à chercher, questionner et découvrir par lui-même. Toute forme de prosélytisme est interdit.
              </p>
            </div>

            {/* Principe 2 */}
            <div
              className="p-8"
              style={{
                backgroundColor: '#FEF9EE',
                boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                borderRadius: '8px'
              }}
            >
              <h3 className="text-xl font-bold mb-4">Harmonie entre science et religion</h3>
              <p className="text-gray-700 leading-relaxed">
                L&apos;harmonie entre science et religion reconnaît que ces deux systèmes de connaissance, loin de s&apos;opposer, se complètent.
              </p>
            </div>

            {/* Principe 3 */}
            <div
              className="p-8"
              style={{
                backgroundColor: '#FEF9EE',
                boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                borderRadius: '8px'
              }}
            >
              <h3 className="text-xl font-bold mb-4">Égalité des genres</h3>
              <p className="text-gray-700 leading-relaxed">
                L&apos;égalité des genres n&apos;est pas vue comme une concession moderne, mais comme un principe spirituel fondamental, essentiel au progrès de l&apos;humanité.
              </p>
            </div>

            {/* Principe 4 */}
            <div
              className="p-8"
              style={{
                backgroundColor: '#FEF9EE',
                boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                borderRadius: '8px'
              }}
            >
              <h3 className="text-xl font-bold mb-4">Éducation universelle</h3>
              <p className="text-gray-700 leading-relaxed">
                L&apos;éducation universelle pour tous·tes, sans distinction, devient un devoir moral et social.
              </p>
            </div>
          </div>

          {/* Principe 5 - Full width */}
          <div
            className="p-8"
            style={{
              backgroundColor: '#FEF9EE',
              boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
              borderRadius: '8px'
            }}
          >
            <h3 className="text-xl font-bold mb-4">Justice économique</h3>
            <p className="text-gray-700 leading-relaxed">
              La justice économique vise l&apos;abolition des extrêmes de richesse et de pauvreté, non par nivellement, mais par l&apos;établissement de systèmes plus équitables. Le progrès spirituel et moral de la société dans son ensemble est également indispensable, puisque la transformation matérielle et l&apos;élévation de la conscience humaine sont indissociables pour atteindre une véritable justice sociale.
            </p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg">
              Pour en savoir plus sur la foi baha&apos;íe : <a href="https://www.bahai.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.bahai.org</a>
            </p>
          </div>
        </div>
      </section>

      {/* Section transition avec image et citation Shoghi Effendi */}
      <section id="sanctuaire" className="w-full h-screen bg-cover bg-center relative scroll-mt-0"
        style={{ backgroundImage: "url('/images/beliefs/Effendi_Quote.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Citation sur la droite (desktop) ou en bas (mobile) */}
        <div className="absolute bottom-0 md:bottom-auto md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full md:w-1/2 p-6 md:p-12"
          style={{ backgroundColor: 'rgba(168, 185, 189, 0.6)' }}>
          <div className="max-w-2xl md:ml-auto">
            <p className="text-lg md:text-xl italic mb-6 text-black leading-relaxed">
              Nous ne pouvons pas séparer le cœur humain de l&apos;environnement qui lui est extérieur et dire qu&apos;une fois que l&apos;un ou l&apos;autre aura changé, chaque chose sera améliorée. L&apos;homme fait partie du monde. Sa vie intérieure façonne l&apos;environnement et est elle-même profondément influencée par lui. L&apos;un agit sur l&apos;autre et chaque changement durable dans la vie de l&apos;homme est le résultat de cette interaction.
            </p>
            <p className="text-sm md:text-base text-black">
              -Shoghi Effendi
            </p>
          </div>
        </div>

        {/* Rectangle titre Sanctuaire */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 px-12 py-6 shadow-lg"
          style={{ backgroundColor: '#F5F0E1', zIndex: 10 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Sanctuaire</h2>
        </div>
      </section>

      <Section backgroundColor="#B18888" minHeight={false}>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Text on the left */}
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-bold mb-6">Sanctuaire bahá&apos;í de Montréal</h1>
            <p className="text-lg mb-4 leading-relaxed">
              &apos;Abdu&apos;l-Bahá, le fils du fondateur de la foi bahá&apos;íe (Baha&apos;u&apos;lláh), a séjourné chez May et William Sutherland Maxwell pendant sa visite de dix jours à Montréal en 1912. Cette maison est aujourd&apos;hui le seul sanctuaire bahá&apos;í au Canada, en raison de son association avec la visite de &apos;Abdu&apos;l-Bahá.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              &apos;Abdu&apos;l-Bahá appelait cette habitation sa maison. Pendant son séjour à Montréal, &apos;Abdu&apos;l-Bahá a passé quatre jours dans la résidence Maxwell et a donné trois conférences publiques. Sa visite a été largement couverte par les journaux anglais et français, qui ont publié des dizaines d&apos;articles sur les thèmes de la paix, de l&apos;unicité de la religion, des préjugés et de l&apos;inégalité économique.
            </p>
            <p className="text-lg leading-relaxed">
              Quand il a quitté Montréal, &apos;Abdu&apos;l-Bahá a dit : « J&apos;ai semé la graine, maintenant arrosez-la. Vous devez éduquer les âmes dans la morale divine, les rendre spirituelles, et les conduire à l&apos;unité de l&apos;humanité et à la paix universelle. »
            </p>
          </div>

          {/* Portrait on the right */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/sanctuary/AbdulBaha.webp"
              alt="Portrait de 'Abdu'l-Bahá"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Sanctuaire section 2 - Image left, text right */}
      <section className="w-full py-12 md:py-20 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#F5F0E1' }}>
        <div className="flex flex-col md:flex-row gap-8 items-center max-w-6xl mx-auto">
          {/* Image on the left */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/sanctuary/sanctuary.webp"
              alt="Porte du sanctuaire bahá'í de Montréal"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Visiter le sanctuaire</h2>
            <p className="text-lg leading-relaxed">
              Le sanctuaire bahá&apos;í de Montréal est ouvert aux visiteurs qui souhaitent découvrir ce lieu historique et spirituel. Des visites guidées sont disponibles sur rendez-vous.
            </p>
          </div>
        </div>
      </section>

      {/* Réserver une visite */}
      <section className="w-full py-12 md:py-20 px-6 md:px-16 lg:px-32" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Réserver une visite au Sanctuaire bahá&apos;í de Montréal
          </h2>
          <div className="w-full" style={{ minHeight: '600px' }}>
            <iframe
              src="https://calendly.com/sanctuaire-montreal-shrine/rdv-appointment"
              width="100%"
              height="700"
              style={{ border: 0 }}
              title="Réserver une visite"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Nouvelles section */}
      <Section id="nouvelles" backgroundColor="#F5F0E1">
        <div>
          <h2 className="text-4xl font-bold mb-12 text-center">Nouvelles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <article
              className="bg-white overflow-hidden"
              style={{
                boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                borderRadius: '8px'
              }}
            >
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  MONTRÉAL, CANADA • 24 juin 2024
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Hommage à la liberté : Un concert présenté à Montréal en l&apos;honneur de la lutte mondiale pour l&apos;égalité des genres
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Un événement culturel exceptionnel a réuni la communauté montréalaise pour célébrer l&apos;égalité des genres à travers la musique et les arts. Cette soirée mémorable a mis en lumière l&apos;importance de l&apos;unité et du respect mutuel dans la construction d&apos;une société plus juste.
                </p>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Lire d&apos;avantage →
                </a>
              </div>
            </article>

            {/* Article 2 */}
            <article
              className="bg-white overflow-hidden"
              style={{
                boxShadow: '0 1px 1px rgba(0,0,0,.03), 0 8px 24px rgba(0,0,0,.06)',
                borderRadius: '8px'
              }}
            >
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  MONTRÉAL, CANADA • 15 mai 2024
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Journée de service communautaire : Des jeunes bahá&apos;ís mobilisés pour embellir les parcs de Montréal
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Plus de 50 jeunes se sont rassemblés pour une journée dédiée au service de la communauté. À travers des activités de nettoyage, de plantation d&apos;arbres et de sensibilisation environnementale, ils ont démontré leur engagement envers le bien-être de leur ville.
                </p>
                <a href="#" className="text-blue-600 hover:underline font-medium">
                  Lire d&apos;avantage →
                </a>
              </div>
            </article>
          </div>
        </div>
      </Section>

      <Section id="faq" backgroundColor="#A5BEC3">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12" style={{ backgroundColor: '#F5F0E1', borderRadius: '24px' }}>
            <h2 className="text-4xl font-bold mb-8 text-center">Questions fréquemment posées</h2>

            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Quelle est la composition démographique de la communauté bahá&apos;íe de Montréal?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  La communauté est aussi diversifiée que la population de Montréal elle-même, tant en ce qui concerne les âges que les origines ethniques. Vous trouverez des bahá&apos;í·e·s dont les racines culturelles proviennent de plusieurs régions dans le monde. Étant donné que la religion est née en Perse, on compte un nombre particulièrement élevé de bahá&apos;í·e·s d&apos;origine iranienne, surtout en raison de la persécution continue des bahá&apos;í·e·s par le gouvernement iranien, qui a poussé de nombreux croyants à se réinstaller à travers le monde, y compris ici à Montréal.
                </div>
              </details>

              {/* FAQ Item 2 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Combien y a-t-il de baha&apos;íe à Montréal, au Canada et à travers le monde?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  Il y a environ 1 000 bahá&apos;ís à Montréal, 35 000 au Canada et plus de 6 millions à travers le monde.
                </div>
              </details>

              {/* FAQ Item 3 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Qui dirige la communauté bahá&apos;íe de Montréal?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  La communauté bahá&apos;íe de Montréal est administrée par une institution élue démocratiquement appelée l&apos;Assemblée spirituelle locale. Il n&apos;y a pas de clergé dans la foi bahá&apos;íe.
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
                  Non, il n&apos;y a pas de temple bahá&apos;í à Montréal. Les activités de la communauté se déroulent dans les foyers des membres et dans des espaces communautaires.
                </div>
              </details>

              {/* FAQ Item 5 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Comment devenir baha&apos;i?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  Devenir bahá&apos;í est une démarche personnelle qui découle d&apos;une recherche indépendante de la vérité. Il suffit de reconnaître Bahá&apos;u&apos;lláh comme le Messager de Dieu pour cette époque et d&apos;accepter ses enseignements.
                </div>
              </details>

              {/* FAQ Item 6 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Comment participer aux activités à Montréal?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  Toutes les activités bahá&apos;íes sont ouvertes à tous. Vous pouvez nous contacter pour connaître les prochaines activités dans votre quartier.
                </div>
              </details>

              {/* FAQ Item 7 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Quel est le lien entre Montréal et l&apos;histoire de la foi bahá&apos;íe?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  Montréal a l&apos;honneur d&apos;accueillir le seul sanctuaire bahá&apos;í au Canada, où &apos;Abdu&apos;l-Bahá a séjourné en 1912.
                </div>
              </details>

              {/* FAQ Item 8 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Quelles langues sont employées dans les activités bahá&apos;íes de Montréal?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  Les activités se déroulent principalement en français et en anglais, reflétant le caractère bilingue de Montréal.
                </div>
              </details>

              {/* FAQ Item 9 */}
              <details className="group border-b border-gray-300 pb-4">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-medium">
                    Vous avez d&apos;autres questions?
                  </span>
                  <span className="text-2xl ml-4 flex-shrink-0">
                    <span className="group-open:hidden">⊕</span>
                    <span className="hidden group-open:inline">⊖</span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  N&apos;hésitez pas à nous contacter pour toute question supplémentaire. Nous serons ravis d&apos;échanger avec vous.
                </div>
              </details>
            </div>
          </div>
        </div>
      </Section>

      <Section id="ressources" backgroundColor="#F5F0E1">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold inline-block px-8 py-4" style={{ backgroundColor: '#FFFFFF' }}>
              Ressources
            </h2>
          </div>

          <div className="space-y-12">
            {/* En savoir plus sur la foi bahá'íe */}
            <div>
              <h3 className="text-2xl font-bold mb-6">En savoir plus sur la foi bahá&apos;íe</h3>
              <ul className="space-y-4 text-lg">
                <li className="leading-relaxed">
                  Site officiel de la communauté bahá&apos;íe mondiale, avec des informations sur les origines, les enseignements et les activités contemporaines :{' '}
                  <a href="https://www.bahai.org/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.bahai.org/fr
                  </a>
                </li>
                <li className="leading-relaxed">
                  Site national des bahá&apos;ís du Canada :{' '}
                  <a href="https://www.bahai.ca/fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.bahai.ca/fr
                  </a>
                </li>
              </ul>
            </div>

            {/* En savoir plus sur Baha'u'lláh */}
            <div>
              <h3 className="text-2xl font-bold mb-6">En savoir plus sur Baha&apos;u&apos;lláh, le fondateur de la foi bahá&apos;íe</h3>
              <ul className="space-y-4 text-lg">
                <li className="leading-relaxed">
                  Présentation illustrée de la vie de Bahá&apos;u&apos;lláh, incluant des photos des lieux d&apos;exil, manuscrits et objets personnels :{' '}
                  <a href="https://bahai.org/fr/bahaullah/life-bahaullah" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    bahai.org/fr/bahaullah/life-bahaullah
                  </a>
                </li>
              </ul>
            </div>

            {/* Ressources littéraires */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Ressources littéraires</h3>
              <ul className="space-y-4 text-lg">
                <li className="leading-relaxed">
                  Source en ligne autorisée des écrits de Bahá&apos;u&apos;lláh, du Báb, de &apos;Abdu&apos;l-Bahá, de Shoghi Effendi et de la Maison universelle de justice :{' '}
                  <a href="https://www.bahai.org/library" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.bahai.org/library
                  </a>
                </li>
                <li className="leading-relaxed">
                  Recueil de prières et d&apos;écrits bahá&apos;ís en français pour nourrir la vie spirituelle de l&apos;individu et de la communauté :{' '}
                  <a href="https://www.relierlescoeurs.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.relierlescoeurs.org
                  </a>
                </li>
                <li className="leading-relaxed">
                  Une bibliothèque croissante de livres bahá&apos;ís et de documents d&apos;étude à télécharger gratuitement, disponibles en plusieurs langues :{' '}
                  <a href="https://www.bahaiebooks.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    www.bahaiebooks.org
                  </a>
                </li>
              </ul>
            </div>

            {/* Nouvelles et médias bahá'ís */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Nouvelles et médias bahá&apos;ís</h3>
              <ul className="space-y-4 text-lg">
                <li className="leading-relaxed">
                  Nouvelles et déclarations publiques de la communauté bahá&apos;íe canadienne :{' '}
                  <a href="https://news.bahai.ca" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    news.bahai.ca
                  </a>
                </li>
                <li className="leading-relaxed">
                  Nouvelles et mises à jour sur les activités bahá&apos;íes à l&apos;échelle mondiale :{' '}
                  <a href="https://news.bahai.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    news.bahai.org
                  </a>
                </li>
                <li className="leading-relaxed">
                  Balados BWNS - Histoires, entrevues et réflexions sur les efforts de construction communautaire dans le monde :{' '}
                  <a href="https://news.bahai.org/podcasts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    news.bahai.org/podcasts
                  </a>
                </li>
                <li className="leading-relaxed">
                  Communauté bahá&apos;íe internationale : Participe activement aux forums mondiaux (ONU, société civile) sur des thèmes comme la paix, les droits humains et le développement durable :{' '}
                  <a href="https://bic.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    bic.org
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="w-full">
        <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto">
          {/* Left side - Image with logo */}
          <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[450px]" style={{ backgroundColor: '#A5BEC3' }}>
            <div className="absolute inset-0 bg-cover bg-center opacity-50"
              style={{ backgroundImage: "url('/images/footer/footer.webp')" }}>
            </div>
            <div className="relative z-10 p-6 md:p-12 flex items-start">
              <div className="flex items-start gap-4">
                <img src="/Star.svg" alt="Étoile bahá'íe" className="w-16 h-16" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Communauté Bahá&apos;íe</h3>
                  <p className="text-xl text-gray-800">de Montréal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact information */}
          <div className="w-full md:w-1/2 p-6 md:p-12" style={{ backgroundColor: '#F1E7DC' }}>
            <div className="space-y-8">
              {/* Centre bahá'í de Montréal */}
              <div>
                <h4 className="font-bold text-lg mb-2">Centre bahá&apos;í de Montréal</h4>
                <p className="text-gray-700">177 avenue des Pins Est</p>
                <p className="text-gray-700">Montréal, Québec, H2W 1N9, Canada</p>
                <a href="mailto:secretariat@bahaimontreal.org" className="text-blue-600 hover:underline">
                  secretariat@bahaimontreal.org
                </a>
              </div>

              {/* Librairie */}
              <div>
                <h4 className="font-bold text-lg mb-2">Librairie</h4>
                <p className="text-gray-700">3735 Chemin de la Reine Roy</p>
                <p className="text-gray-700">Montréal, Québec, H2W 1N9, Canada</p>
                <a href="mailto:centre@bahaimontreal.org" className="text-blue-600 hover:underline">
                  centre@bahaimontreal.org
                </a>
                <p className="text-gray-700 mt-1">(514) 849-9753</p>
                <p className="text-gray-700 text-sm mt-2">
                  Librairie ouverte les mercredis et jeudis, de 19h à 19h30 et les samedis de 13h à 15h.
                </p>
              </div>

              {/* Sanctuaire bahá'í de Montréal */}
              <div>
                <h4 className="font-bold text-lg mb-2">Sanctuaire bahá&apos;í de Montréal</h4>
                <p className="text-gray-700">1548, av des Pins O.</p>
                <p className="text-gray-700">Montréal, QC H3G 1B9</p>
                <a href="mailto:info@bahaimontreal.org" className="text-blue-600 hover:underline">
                  info@bahaimontreal.org
                </a>
                <p className="text-gray-700 mt-1">(514) 948-2124</p>
                <p className="text-gray-700 text-sm mt-2">
                  Les heures de visite sont actuellement les mercredis de 19h à 21h et les samedis de 13h à 15h.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="w-full py-4 px-6 md:px-12 text-center text-sm text-gray-600" style={{ backgroundColor: '#E8DDD0' }}>
          © {new Date().getFullYear()} Communauté Bahá&apos;íe de Montréal. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}