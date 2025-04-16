import { Link } from "react-router"

import woodyAssetUrl from "../assets/woody.png"
import brothersAssetUrl from "../assets/brothers.jpg"
import heroAssetUrl from "../assets/wensel-hero.jpg"
import ethosAssetUrl from "../assets/ethos.png"
import legacyAssetUrl from "../assets/legacy.png"

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 max-w-4xl py-8 sm:py-12">
        {/* Hero Section */}
        <section className="mb-8 sm:mb-12">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden mb-6 sm:mb-8">
            {/* Placeholder for hero image of Gene and Barry */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <img src={heroAssetUrl} alt="Gene and Barry Wensel Hero Image" className="w-full h-full object-cover" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">About Gene & Barry Wensel</h1>
          <p className="text-base sm:text-lg text-gray-700">
            Gene and Barry Wensel are twin brothers and legendary traditional bowhunters who have spent over six decades pursuing big game with recurves and longbows. Born in 1944, they began hunting whitetails as kids and never stopped—choosing to stick with traditional gear even as modern compounds became the norm.
          </p>
        </section>

        {/* Early Years Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Early Years & Background</h2>
          <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-4">
                The Wensel twins grew up steeped in hunting tradition. Their father was an avid hunter who encouraged them from an early age, giving them bows and arrows in childhood. They "simply never put their toys away," developing a lifelong passion for deer hunting.
              </p>
              <p className="text-base sm:text-lg text-gray-700">
                Starting with simple longbows and recurves, both brothers were bowhunting "since we were youngsters," and they never felt the need to switch to modern compound bows when those became popular in the 1970s.
              </p>
            </div>
            <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg order-first sm:order-none">
              {/* Placeholder for early years photo */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <img src={brothersAssetUrl} alt="Gene and Barry Wensel in their early years" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Major Bowhunting Achievements</h2>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Record-Book Success</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Countless record-book whitetails, including numerous Pope & Young qualifiers
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Several Boone & Crockett-class bucks taken with traditional gear
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Barry's four Boone & Crockett whitetail bucks, each taken at under 15 yards
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <div className="flex-1">
                      <Link 
                          className="inline text-blue-600 hover:underline hover:text-blue-800"
                          to="https://www.northamericanwhitetail.com/editorial/trophybucks_woody_091605/264213" 
                          target="_blank" 
                          rel="noopener noreferrer"
                      >Gene's legendary "Woody" buck</Link>, one of the largest whitetails ever taken with a recurve
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg order-first sm:order-none">
                {/* Placeholder for trophy photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img src={woodyAssetUrl} alt="Gene's legendary 'Woody' buck" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hunting Philosophy Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Hunting Philosophy</h2>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
            <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg order-first sm:order-none">
                {/* Placeholder for hunting philosophy photo */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <img src={ethosAssetUrl} alt="Hunting Philosophy Photo" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <p className="text-base sm:text-lg text-gray-700 mb-4">
                  The Wensels have a distinctive hunting philosophy rooted in traditional archery, woodsmanship, and ethical fair chase. They famously never adopted compound bows, choosing instead to place "self-imposed limitations" on themselves to make the hunt more challenging and rewarding.
                </p>
                <p className="text-base sm:text-lg text-gray-700">
                  Their approach emphasizes understanding deer behavior, reading sign, and getting close to their quarry. They believe in old-fashioned woodsmanship over high-tech gadgetry, relying on intimate knowledge of the land and the animal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Media & Contributions Section */}
<section className="mb-8 sm:mb-12">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Media & Contributions</h2>
  <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
    <div className="grid gap-8">
      {/* Books & Publications */}
      <div className="border-b border-gray-200 pb-6 sm:pb-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Books & Publications</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Gene's Books</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Whitetails, Etc.</strong> (2024) – Latest and most comprehensive work</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Buckskin and Bone</strong> (2009) – Advanced whitetail strategy</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Come November</strong> (~2007) – 50 years of whitetail knowledge</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>One Man’s Whitetail</strong> (1988) – Personal hunting stories & lessons</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Treestand Strategies</strong> (2000, with Barry) – Tactics & stand placement</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Hunting Rutting Whitetails</strong> (1981) – Groundbreaking early book</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">Barry's Books</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>The Old Man and the Tree</strong> (2023) – A lifetime of whitetail wisdom</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Once Upon a Tine</strong> (~2010s) – Hunting stories & adventures</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>The Crooked Hat Chronicles</strong> – Humorous and heartfelt campfire tales</li>
              <li className="flex items-start"><span className="text-blue-600 mr-2">•</span><strong>Treestand Strategies</strong> (2000, with Gene) – Bowhunting setups</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Videos & Media */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Videos & Media</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 h-full">
            <h4 className="font-semibold text-gray-800 mb-2">Videos & Films</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span><em>Bowhunting October Whitetails</em> (1984) – Groundbreaking VHS release</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span><em>High Noon Bucks</em> – Classic rut-hunting footage series</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span><em>Out and About</em> – Traditional bowhunting adventures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span><em>Primal Dreams</em> – Award-winning traditional hunting documentary</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span><em>Essential Encounters</em> – Companion film to Primal Dreams</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 h-full">
            <h4 className="font-semibold text-gray-800 mb-2">Media Appearances</h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Longtime Mossy Oak Pro Staff members</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Featured in <em>Bowhunter Magazine</em> and <em>North American Whitetail</em></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Regular contributors to <em>Traditional Bowhunter</em> magazine</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Guests on <em>Mossy Oak GameKeepers Podcast</em> (Ep. 284)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                <span>Presenters at ETAR, PBS, Compton Traditional Bowhunters, and state expos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Legacy Section */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6">Legacy & Impact</h2>
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-8">
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              The Wensel brothers' influence on modern bowhunting is profound. They were among the early pioneers in conducting seminars and deer hunting courses, developing innovative strategies for stand placement, calling, scouting, and scent control that others would later adopt.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              Their emphasis on ethics and enjoyment of the hunt has helped keep hunting grounded in an era of score obsession. They continue to share their knowledge through books, seminars, and personal mentorship, ensuring that the tradition of ethical, traditional bowhunting continues for future generations.
            </p>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mt-4 sm:mt-6">
              {/* Placeholder for legacy photo */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <img src={legacyAssetUrl} alt="Legacy Photo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Link 
            to="/" 
            className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg"
          >
            Return to Home
          </Link>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
