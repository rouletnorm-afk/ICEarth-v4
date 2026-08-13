import React, { useState, useEffect } from 'react';
import natureSoilCanaryImg from '../assets/images/nature_soil_canary_1786614634627.jpg';
import mittalCanaryLogoImg from '../assets/images/mittal_canary_logo_1786591941409.jpg';
import picaGeophagyImg from '../assets/images/pica_geophagy_lead_1786618000000_1786618338553.jpg';
import { speakExposenomicsText, stopExposenomicsSpeech, phoneticallyFixLeadForTTS } from '../lib/speechUtils';
import {
  BookOpen,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  X,
  Share2,
  Download,
  GraduationCap,
  Baby,
  Dna,
  Award,
  ArrowRight,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';

interface ExposenomicsStorybookProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

export const ExposenomicsStorybook: React.FC<ExposenomicsStorybookProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [readingLevel, setReadingLevel] = useState<'kids' | 'advanced'>('kids');
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [usePhoneticFix, setUsePhoneticFix] = useState<boolean>(true);
  const [selectedImageModal, setSelectedImageModal] = useState<boolean>(false);
  const [showSpeechInspector, setShowSpeechInspector] = useState<boolean>(false);

  // Storybook Pages Data
  const pages = [
    {
      id: 'page-1',
      plateNumber: 'Plate #01',
      title: 'The Canary in the Coal Mine: Earth\'s Million-Year Soil Secret',
      subtitle: 'How Hominin Fire, Cave Dust, and Soil Taught Us About Heavy Metals',
      image: natureSoilCanaryImg,
      kidsStory: `A very long time ago—over one million years!—our ancient ancestors learned how to use fire inside caves. When they burned rocks and wood, tiny bits of lead dust floated in the cave smoke. Today, scientists studied children in East Trenton and found that 80% of dirt inside paint-free homes comes directly from outside soil! The soil outside carries the memory of human history, reminding us that clean soil keeps our growing brains healthy and happy.`,
      advancedStory: `H. sapiens evolutionary exposenomics proves that hominins have interacted with airborne lead since the Paleolithic discovery of fire inside cave hearths. The Stratton et al. (Nature 2026) East Trenton study demonstrates that exterior topsoil is tracked indoors, creating 80% of floor dust lead hazards in paint-free homes. Understanding soil as an active geological bank allows humanity to remediate soil ecosystems before heavy metals enter developing nervous systems.`,
      moral: 'Clean soil grows strong bodies and bright minds!',
      hash: '0xEVOLUTIONARY_CANARY_NATURE_2026_STORYBOOK'
    },
    {
      id: 'page-2',
      plateNumber: 'Plate #02',
      title: 'The Industrial Giant: Smoke Plumes Over Cleveland',
      subtitle: 'How Factories Shaped Our Cities & What We Learned About Air & Soil',
      image: mittalCanaryLogoImg,
      kidsStory: `In big bustling cities like Cleveland, Ohio, huge steel mills produced metal for bridges, trains, and tall skyscrapers. Big smokestacks blew gray smoke into the sky. That smoke settled softly onto the ground and lawns. By watching where the dust landed, scientists created "Roulet's Law" to help cities clean up heavy metal soil so children can play safely in green parks!`,
      advancedStory: `The Cleveland Mittal Steel baseline photograph illustrates 20th-century urban heavy metal deposition across the Cuyahoga River Valley. Industrial emissions deposited lead, zinc, and particulate matter into urban topsoils, forming the environmental baseline that modern public health interventions must identify and decontaminate under Roulet's Law.`,
      moral: 'Careful city planning protects every neighborhood!',
      hash: '0xCLEVELAND_INDUSTRIAL_CANARY_STORYBOOK'
    },
    {
      id: 'page-3',
      plateNumber: 'Plate #03',
      title: 'The Mystery of Pica: Why Mothers Crave Clay & Children Need Clean Soil',
      subtitle: 'Understanding Anemia, Sweet Paint Chips, and Protecting Our Little Ones',
      image: picaGeophagyImg,
      kidsStory: `When mothers are expecting a new baby, their bodies need extra iron and minerals! Sometimes, when iron is low, their body tricks them into wanting to eat clay or dirt. This special feeling is called Pica. But because some soil and old paint chips have toxic lead that tastes sweet, we must make sure all mothers get healthy iron-rich foods and that toddlers never touch old peeling paint!`,
      advancedStory: `Pica disorder and gestational geophagy affect up to 46% of pregnant women in specific cohort studies, driven by iron deficiency anemia. When anemic mothers or toddlers ingest soil or sweet-tasting lead paint chips (up to 100,000 ppm Pb), intestinal DMT-1 transporters absorb lead at maximum efficiency. Remediating soil and replacing lead paint prevents developmental harm for 800 million children worldwide.`,
      moral: 'Nutritious food and lead-free homes keep mothers and babies safe!',
      hash: '0xPICA_GEOPHAGY_STORYBOOK'
    }
  ];

  const page = pages[currentPage];

  // Web Speech Synthesis Narration with /lɛd/ Phonetic Engine
  useEffect(() => {
    stopExposenomicsSpeech();
    if (isPlayingAudio) {
      const textToRead = readingLevel === 'kids' ? page.kidsStory : page.advancedStory;
      speakExposenomicsText(textToRead, {
        rate: 0.90,
        pitch: 1.0,
        usePhoneticFix,
        onEnd: () => setIsPlayingAudio(false),
        onError: () => setIsPlayingAudio(false)
      });
    }
  }, [isPlayingAudio, currentPage, readingLevel, usePhoneticFix]);

  const toggleAudio = () => {
    if (isPlayingAudio) {
      stopExposenomicsSpeech();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
      setIsPlayingAudio(false);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      setIsPlayingAudio(false);
    }
  };

  return (
    <div className={`space-y-8 animate-in fade-in duration-300 ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
      {/* STORYBOOK HEADER CONTROL BAR */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-900 via-stone-900 to-stone-950 border-2 border-amber-500/40 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-extrabold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 w-fit">
            <BookOpen size={14} className="text-amber-400" />
            <span>ICEarth Sovereign Graphical Storybook • Educational Edition</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
            The Story of Earth's Soil & Human Brains
          </h1>
          <p className="text-xs text-stone-300 font-sans">
            A standalone graphical storybook designed for early learners, schools, and families worldwide.
          </p>
        </div>

        {/* CONTROLS: READING LEVEL & AUDIO NARRATOR */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <div className="bg-stone-900 p-1 rounded-xl border border-stone-800 flex items-center gap-1">
            <button
              onClick={() => {
                setReadingLevel('kids');
                setIsPlayingAudio(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                readingLevel === 'kids'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <Baby size={14} />
              <span>Early Learner</span>
            </button>

            <button
              onClick={() => {
                setReadingLevel('advanced');
                setIsPlayingAudio(false);
              }}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                readingLevel === 'advanced'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <GraduationCap size={14} />
              <span>Advanced Research</span>
            </button>
          </div>

          <button
            onClick={() => setUsePhoneticFix(!usePhoneticFix)}
            title="Toggle Exposenomics /lɛd/ Phonetic Pronunciation Fix for AI Voice"
            className={`px-3 py-2.5 rounded-xl font-mono text-[11px] font-bold transition-all flex items-center gap-1.5 border cursor-pointer ${
              usePhoneticFix
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50 shadow-md'
                : 'bg-stone-900 text-stone-400 border-stone-800'
            }`}
          >
            <CheckCircle2 size={14} className={usePhoneticFix ? 'text-emerald-400' : 'text-stone-500'} />
            <span>{usePhoneticFix ? 'AI Pronunciation: /lɛd/ Active' : 'Phonetic Fix Off'}</span>
          </button>

          <button
            onClick={toggleAudio}
            className={`px-4 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg border ${
              isPlayingAudio
                ? 'bg-red-500 text-white border-red-400 animate-pulse'
                : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-300'
            }`}
          >
            {isPlayingAudio ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{isPlayingAudio ? 'Stop Narration' : '🔊 Listen to Narrator'}</span>
          </button>
        </div>
      </div>

      {/* STORYBOOK PAGE DISPLAY STAGE */}
      <div className="bg-stone-900 rounded-3xl border-2 border-stone-800 p-6 sm:p-10 shadow-2xl space-y-8">
        {/* PAGE TOP NAVIGATION BAR */}
        <div className="flex items-center justify-between border-b border-stone-800 pb-4 font-mono text-xs">
          <span className="text-amber-400 font-bold uppercase tracking-wider bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/20">
            {page.plateNumber} • Page {currentPage + 1} of {pages.length}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1 border transition-all ${
                currentPage === 0
                  ? 'opacity-30 cursor-not-allowed bg-stone-950 border-stone-800 text-stone-500'
                  : 'bg-stone-800 hover:bg-stone-700 text-white border-stone-700 cursor-pointer'
              }`}
            >
              <ChevronLeft size={16} />
              <span>Previous Page</span>
            </button>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`px-4 py-1.5 rounded-xl font-bold flex items-center gap-1 border transition-all ${
                currentPage === pages.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-stone-950 border-stone-800 text-stone-500'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-300 cursor-pointer'
              }`}
            >
              <span>Next Page</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* STORYBOOK MAIN SPREAD: IMAGE + STORY TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: ARTWORK DISPLAY */}
          <div className="lg:col-span-6 space-y-3">
            <div 
              onClick={() => setSelectedImageModal(true)}
              className="relative aspect-video rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-stone-950 shadow-2xl group cursor-pointer"
            >
              <img
                src={page.image}
                alt={page.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-amber-500 text-stone-950 font-mono font-black text-xs rounded-xl shadow-xl flex items-center gap-2">
                  <Maximize2 size={15} />
                  <span>Expand Storybook Artwork</span>
                </span>
              </div>
            </div>
            <div className="text-[11px] font-mono text-stone-400 flex items-center justify-between">
              <span>Sovereign Hash: {page.hash}</span>
              <span className="text-amber-400">Click image to enlarge</span>
            </div>
          </div>

          {/* RIGHT: STORY NARRATIVE */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-white leading-tight">
                {page.title}
              </h2>
              <p className="text-xs sm:text-sm text-amber-300 font-mono font-bold">
                {page.subtitle}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 text-stone-200 text-sm sm:text-base leading-relaxed font-sans space-y-4 shadow-inner">
              <p>
                {readingLevel === 'kids' ? page.kidsStory : page.advancedStory}
              </p>

              <div className="pt-3 border-t border-stone-800/80 flex items-center gap-2 text-xs font-mono text-amber-400">
                <Sparkles size={14} />
                <span><strong>Story Lesson:</strong> {page.moral}</span>
              </div>
            </div>

            {/* ACTION BUTTONS & PHONETIC AI VOICE DIAGNOSTIC */}
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <button
                onClick={() => setShowSpeechInspector(!showSpeechInspector)}
                className="px-4 py-2.5 bg-emerald-900/40 hover:bg-emerald-900/60 text-emerald-300 font-bold rounded-xl border border-emerald-500/40 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Volume2 size={14} className="text-emerald-400" />
                <span>{showSpeechInspector ? 'Hide AI Voice Phonetic Inspector' : '🎙️ AI Voice Pronunciation Inspector'}</span>
              </button>

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('evolutionary_canary')}
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-xl border border-stone-700 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Dna size={14} />
                  <span>View Canary Proof Data</span>
                </button>
              )}

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('pica_exposenomics')}
                  className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-bold rounded-xl border border-amber-500/30 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Launch Pica Engine</span>
                  <ArrowRight size={14} />
                </button>
              )}
            </div>

            {/* PHONETIC AI SPEECH INSPECTOR PANEL */}
            {showSpeechInspector && (
              <div className="p-5 bg-stone-950 rounded-2xl border-2 border-emerald-500/30 space-y-3 font-mono text-xs shadow-2xl animate-fade-in">
                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold">
                    <CheckCircle2 size={16} />
                    <span>AI Voice Heteronym Fix Engine: /lɛd/ & Roulet ("Roo-lay") Active</span>
                  </div>
                  <span className="text-[10px] text-stone-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                    Browser TTS Preprocessor
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-red-400 font-bold">Standard Text (Raw Output):</span>
                    <p className="text-stone-300 italic font-sans text-xs line-clamp-3">
                      "{readingLevel === 'kids' ? page.kidsStory : page.advancedStory}"
                    </p>
                    <span className="text-[10px] text-stone-500 block pt-1">
                      ⚠️ Standard TTS mispronounces "lead" as verb /liːd/ ("leed") and "Roulet" with audible 't'.
                    </span>
                  </div>

                  <div className="p-3 bg-emerald-950/60 rounded-xl border border-emerald-500/30 space-y-1">
                    <span className="text-emerald-400 font-bold">Phonetically Fixed Stream Sent to AI Voice:</span>
                    <p className="text-emerald-200 italic font-sans text-xs line-clamp-3">
                      "{phoneticallyFixLeadForTTS(readingLevel === 'kids' ? page.kidsStory : page.advancedStory)}"
                    </p>
                    <span className="text-[10px] text-emerald-400/80 block pt-1">
                      ✅ Forces element /lɛd/ ("led") and French surname "Roulet" → /ruːˈleɪ/ ("Roo-lay").
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-800 text-[11px]">
                  <span className="text-stone-400">
                    Test A/B Pronunciation Live:
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        stopExposenomicsSpeech();
                        speakExposenomicsText(readingLevel === 'kids' ? page.kidsStory : page.advancedStory, {
                          usePhoneticFix: false,
                          rate: 0.90
                        });
                      }}
                      className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded border border-stone-700 font-bold cursor-pointer"
                    >
                      🔊 Unfixed ("leed")
                    </button>
                    <button
                      onClick={() => {
                        stopExposenomicsSpeech();
                        speakExposenomicsText(readingLevel === 'kids' ? page.kidsStory : page.advancedStory, {
                          usePhoneticFix: true,
                          rate: 0.90
                        });
                      }}
                      className="px-2.5 py-1 bg-emerald-500 hover:bg-emerald-400 text-stone-950 rounded font-bold cursor-pointer"
                    >
                      🔊 Phonetic Fix ("led")
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM STORYBOOK PROGRESS THUMBNAILS */}
        <div className="pt-6 border-t border-stone-800 grid grid-cols-3 gap-4">
          {pages.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => {
                setCurrentPage(idx);
                setIsPlayingAudio(false);
              }}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                currentPage === idx
                  ? 'bg-stone-950 border-amber-500 ring-2 ring-amber-500/50 shadow-lg'
                  : 'bg-stone-950/50 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className={currentPage === idx ? 'text-amber-400 font-bold' : 'text-stone-400'}>
                  {p.plateNumber}
                </span>
                <span className="text-stone-500">Page {idx + 1}</span>
              </div>
              <h3 className="text-xs font-serif font-bold text-white line-clamp-1">
                {p.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* IMAGE EXPAND MODAL */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-stone-900 border-2 border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 sm:p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-serif">
                  {page.plateNumber}: {page.title}
                </h3>
                <p className="text-[10px] font-mono text-amber-400">
                  Sovereign Storybook Artwork • {page.hash}
                </p>
              </div>

              <button
                onClick={() => setSelectedImageModal(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-stone-950">
              <img
                src={page.image}
                alt={page.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-2xl border border-stone-800 shadow-2xl"
              />
            </div>

            <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400">ICEarth Educational Storybook Edition</span>
              <button
                onClick={() => setSelectedImageModal(false)}
                className="px-4 py-2 bg-stone-800 text-stone-200 font-bold rounded-xl hover:bg-stone-700 transition-colors cursor-pointer"
              >
                Close Artwork
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
