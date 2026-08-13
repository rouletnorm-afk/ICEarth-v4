import React, { useState, useEffect } from 'react';
import natureSoilCanaryImg from '../assets/images/nature_soil_canary_1786614634627.jpg';
import mittalCanaryLogoImg from '../assets/images/mittal_canary_logo_1786591941409.jpg';
import picaGeophagyImg from '../assets/images/pica_geophagy_lead_1786618000000_1786618338553.jpg';
import { speakExposenomicsText, stopExposenomicsSpeech } from '../lib/speechUtils';
import {
  Film,
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  SkipForward,
  SkipBack,
  Sparkles,
  Maximize2,
  X,
  Dna,
  BookOpen,
  ArrowRight,
  Tv,
  Sliders,
  CheckCircle2
} from 'lucide-react';

interface AnimatedDocumentaryStageProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

export const AnimatedDocumentaryStage: React.FC<AnimatedDocumentaryStageProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';
  const [activeSceneIndex, setActiveSceneIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
  const [progressPercent, setProgressPercent] = useState<number>(0);
  const [selectedImageModal, setSelectedImageModal] = useState<boolean>(false);

  // Documentary Scenes Data
  const scenes = [
    {
      id: 'scene-1',
      sceneNumber: 'Scene 01',
      era: '1,000,000 BCE — Paleolithic Discovery of Fire',
      title: 'Hominin Cave Hearths & The First Airborne Lead Aerosols',
      subtitle: 'How early humans ignited the exposome inside limestone caves',
      image: natureSoilCanaryImg,
      narration: `One million years ago, in the dim depths of limestone caves, early hominins mastered fire. As wood and heavy mineral ores burned inside enclosed cave hearths, tiny sub-micron lead aerosols mixed with soot particles. For the first time in natural history, hominins inhaled particulate heavy metals, embedding lead into bone structures and establishing the original human exposome.`,
      directorNotes: 'Visual Note: Dark cave fire lighting transitioning into spectral lead oxide chemical formulas. Establishes Paleolithic baseline under Roulet\'s Law.',
      durationSec: 15,
      hash: '0xSCENE_01_PALEOLITHIC_HEARTH'
    },
    {
      id: 'scene-2',
      sceneNumber: 'Scene 02',
      era: '20th Century Industrial Era — Cleveland, OH',
      title: 'Industrial Smokestacks & Cuyahoga Valley Heavy Metal Plumes',
      subtitle: 'The urban industrial footprint overlaying geological topsoil',
      image: mittalCanaryLogoImg,
      narration: `Fast forward to 20th-century Cleveland, Ohio. Giant steel blast furnaces and Mittal Steel smokestacks billow continuous plumes across the Cuyahoga River Valley. Millions of tons of lead, zinc, and heavy metal dust settle onto urban lawns, parklands, and schoolyards. This industrial deposition created a permanent heavy metal soil bank that persists in city topsoil to this day.`,
      directorNotes: 'Visual Note: Archival photography overlaying particle dispersion dynamics across urban residential grids.',
      durationSec: 15,
      hash: '0xSCENE_02_CLEVELAND_STEEL'
    },
    {
      id: 'scene-3',
      sceneNumber: 'Scene 03',
      era: 'July 2026 — Nature Peer-Reviewed Study',
      title: 'Soil-to-Dust Tracking: 80% of Indoor Dust Starts Outdoors',
      subtitle: 'Stratton et al. prove exterior topsoil is tracked into paint-free homes',
      image: natureSoilCanaryImg,
      narration: `In July 2026, a groundbreaking study published in Nature examined East Trenton homes with zero lead paint. Scientists proved that 80 percent of indoor floor dust hazards originate from exterior topsoil tracked inside on footwear and pets. Soil is not static dirt—it is a continuous transport vector carrying heavy metals directly to toddlers crawling on living room rugs.`,
      directorNotes: 'Visual Note: High-resolution dual-chart animation showing soil lead isotopic fingerprints matching indoor floor dust.',
      durationSec: 15,
      hash: '0xSCENE_03_NATURE_SOIL_DUST'
    },
    {
      id: 'scene-4',
      sceneNumber: 'Scene 04',
      era: 'August 2026 — Global Pica & Geophagy Research',
      title: 'Maternal Geophagy, Sweet Lead Paint & 800 Million Children',
      subtitle: 'How gestational anemia and instinctual soil eating drive global lead toxicity',
      image: picaGeophagyImg,
      narration: `Today, up to 46 percent of pregnant women suffer from Pica disorder, craving soil and clay due to gestational iron deficiency. At the same time, toddlers with Pica ingest sweet-tasting lead paint chips containing up to 100,000 parts per million lead. Driven by intestinal DMT-1 transporters absorbing lead at maximum speed, Pica remains a central force in the lead poisoning of 1 in 3 children worldwide.`,
      directorNotes: 'Visual Note: Global epidemiological map glowing in Sub-Saharan Africa, South Asia, and North America alongside sweet lead paint chip molecular diagrams.',
      durationSec: 15,
      hash: '0xSCENE_04_PICA_GEOPHAGY'
    }
  ];

  const currentScene = scenes[activeSceneIndex];

  // Controlled auto-play & speech synchronization with /lɛd/ & "Roo-lay" Phonetic Engine
  useEffect(() => {
    let progressTimer: any = null;
    let sceneTransitionTimeout: any = null;

    stopExposenomicsSpeech();

    if (!isPlaying) {
      return () => {
        if (progressTimer) clearInterval(progressTimer);
        if (sceneTransitionTimeout) clearTimeout(sceneTransitionTimeout);
        stopExposenomicsSpeech();
      };
    }

    // Function to handle advancing to the next scene after narration finishes
    const handleSceneCompletion = () => {
      setProgressPercent(100);
      // Brief 1.5 second pause after narration ends before switching scenes
      sceneTransitionTimeout = setTimeout(() => {
        if (activeSceneIndex < scenes.length - 1) {
          setActiveSceneIndex(prev => prev + 1);
          setProgressPercent(0);
        } else {
          setIsPlaying(false);
          setProgressPercent(100);
        }
      }, 1500);
    };

    const wordCount = currentScene.narration.trim().split(/\s+/).length;
    // Estimated speech duration in seconds (average ~2.2 words per sec at rate 0.93)
    const estimatedSpeechSec = Math.max(12, Math.ceil(wordCount / 2.2) + 2);

    if (isAudioEnabled) {
      // 1. Audio Voiceover Mode: Speech completion strictly controls scene advance
      let isSpeechFinished = false;

      speakExposenomicsText(currentScene.narration, {
        rate: 0.93,
        pitch: 0.95,
        usePhoneticFix: true,
        onEnd: () => {
          isSpeechFinished = true;
          handleSceneCompletion();
        },
        onError: () => {
          // Fallback if SpeechSynthesis API fails or is blocked
          if (!isSpeechFinished) {
            handleSceneCompletion();
          }
        }
      });

      // Smooth progress bar increment capped at 95% while speech is active
      const stepMs = 250;
      const totalSteps = (estimatedSpeechSec * 1000) / stepMs;
      const stepIncrement = 95 / totalSteps;

      progressTimer = setInterval(() => {
        setProgressPercent(prev => {
          if (isSpeechFinished) return 100;
          return Math.min(95, prev + stepIncrement);
        });
      }, stepMs);

    } else {
      // 2. Muted Mode: Time-based progression derived from estimated reading duration
      const totalDurationSec = estimatedSpeechSec + 4; // Add reading buffer
      const stepMs = 200;
      const stepIncrement = 100 / ((totalDurationSec * 1000) / stepMs);

      progressTimer = setInterval(() => {
        setProgressPercent(prev => {
          if (prev >= 100) {
            clearInterval(progressTimer);
            handleSceneCompletion();
            return 100;
          }
          return Math.min(100, prev + stepIncrement);
        });
      }, stepMs);
    }

    return () => {
      if (progressTimer) clearInterval(progressTimer);
      if (sceneTransitionTimeout) clearTimeout(sceneTransitionTimeout);
      stopExposenomicsSpeech();
    };
  }, [isPlaying, activeSceneIndex, isAudioEnabled, scenes.length, currentScene.narration]);

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      stopExposenomicsSpeech();
    } else {
      if (progressPercent >= 100 && activeSceneIndex === scenes.length - 1) {
        setActiveSceneIndex(0);
        setProgressPercent(0);
      }
      setIsPlaying(true);
    }
  };

  const nextScene = () => {
    if (activeSceneIndex < scenes.length - 1) {
      setActiveSceneIndex(prev => prev + 1);
      setProgressPercent(0);
    }
  };

  const prevScene = () => {
    if (activeSceneIndex > 0) {
      setActiveSceneIndex(prev => prev - 1);
      setProgressPercent(0);
    }
  };

  return (
    <div className={`space-y-8 animate-in fade-in duration-300 ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
      {/* DOCUMENTARY THEATER HEADER */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-stone-950 via-amber-950 to-stone-950 border-2 border-amber-500/40 shadow-2xl flex flex-wrap items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-extrabold uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 w-fit">
            <Film size={14} className="text-amber-400" />
            <span>ICEarth Animated Documentary Stage • Hominin Exposome Evolutionary Series</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
            The Hominin Exposome: 1,000,000 Years of Soil & Lead
          </h1>
          <p className="text-xs text-stone-300 font-sans">
            An interactive animated documentary stage tracing hominin lead exposure from Paleolithic cave fires to modern topsoil and Pica disorder.
          </p>
        </div>

        {/* CONTROLS */}
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
          <button
            onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            className={`px-3 py-2 rounded-xl font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
              isAudioEnabled
                ? 'bg-stone-800 text-amber-400 border-stone-700'
                : 'bg-stone-950 text-stone-500 border-stone-800'
            }`}
          >
            {isAudioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            <span>{isAudioEnabled ? 'Voiceover Active' : 'Voiceover Muted'}</span>
          </button>

          <button
            onClick={togglePlay}
            className={`px-5 py-2.5 rounded-xl font-bold transition-all flex items-center gap-2 cursor-pointer shadow-xl border ${
              isPlaying
                ? 'bg-amber-500 text-stone-950 border-amber-300 animate-pulse'
                : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-300'
            }`}
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            <span>{isPlaying ? 'Pause Stage' : '▶ Play Animated Documentary'}</span>
          </button>
        </div>
      </div>

      {/* CINEMATIC DISPLAY SCREEN */}
      <div className="bg-stone-950 rounded-3xl border-2 border-amber-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        {/* CINEMATIC FRAME WITH OVERLAYS */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-stone-800 bg-black shadow-2xl group">
          <img
            src={currentScene.image}
            alt={currentScene.title}
            referrerPolicy="no-referrer"
            className={`w-full h-full object-cover transition-all duration-1000 ${
              isPlaying ? 'scale-105 filter brightness-105' : 'scale-100'
            }`}
          />

          {/* TOP CINEMATIC HUD BAR */}
          <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-stone-950/90 to-transparent flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-black text-[10px] uppercase rounded-lg">
                {currentScene.sceneNumber}
              </span>
              <span className="text-amber-300 font-bold hidden sm:inline">
                {currentScene.era}
              </span>
            </div>

            <button
              onClick={() => setSelectedImageModal(true)}
              className="px-3 py-1 bg-stone-900/80 hover:bg-stone-900 text-stone-200 rounded-lg border border-stone-700 flex items-center gap-1 cursor-pointer text-[11px]"
            >
              <Maximize2 size={13} />
              <span>Expand Scene</span>
            </button>
          </div>

          {/* BOTTOM NARRATION CAPTION OVERLAY */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-stone-950 via-stone-950/90 to-transparent space-y-2">
            <h2 className="text-lg sm:text-2xl font-serif font-extrabold text-white">
              {currentScene.title}
            </h2>
            <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-sans max-w-4xl bg-stone-950/60 p-3 rounded-xl border border-stone-800/80 backdrop-blur-sm">
              "{currentScene.narration}"
            </p>
          </div>
        </div>

        {/* TIMELINE PROGRESS SCRUBBER */}
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between text-stone-400">
            <span>Documentary Timeline Scrubber</span>
            <span className="text-amber-400 font-bold">{Math.round(progressPercent)}% Scene Progress</span>
          </div>
          <div className="w-full h-2 bg-stone-900 rounded-full overflow-hidden border border-stone-800">
            <div
              className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* SCENE NAVIGATOR BUTTONS */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-900 font-mono text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={prevScene}
              disabled={activeSceneIndex === 0}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1 border transition-all ${
                activeSceneIndex === 0
                  ? 'opacity-30 cursor-not-allowed bg-stone-950 border-stone-800 text-stone-500'
                  : 'bg-stone-900 hover:bg-stone-800 text-stone-200 border-stone-700 cursor-pointer'
              }`}
            >
              <SkipBack size={15} />
              <span>Prev Scene</span>
            </button>

            <button
              onClick={nextScene}
              disabled={activeSceneIndex === scenes.length - 1}
              className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-1 border transition-all ${
                activeSceneIndex === scenes.length - 1
                  ? 'opacity-30 cursor-not-allowed bg-stone-950 border-stone-800 text-stone-500'
                  : 'bg-amber-500 hover:bg-amber-400 text-stone-950 border-amber-300 cursor-pointer'
              }`}
            >
              <span>Next Scene</span>
              <SkipForward size={15} />
            </button>
          </div>

          <div className="text-stone-400 text-xs">
            Sovereign Hash: <span className="text-amber-400 font-bold">{currentScene.hash}</span>
          </div>
        </div>

        {/* DIRECTOR'S NOTES & PHONETIC AI SPEECH ENGINE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-stone-900 rounded-2xl border border-stone-800 space-y-2 font-mono text-xs">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <Film size={16} />
              <span>Director's Notes & Evolutionary Framework (Norm Roulet & Gemini AI)</span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed font-sans">
              {currentScene.directorNotes}
            </p>
          </div>

          <div className="p-5 bg-stone-900 rounded-2xl border border-emerald-500/30 space-y-2 font-mono text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                <CheckCircle2 size={16} />
                <span>AI Voice Heteronym & Name Engine Active</span>
              </div>
              <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/30">
                /lɛd/ & "Roo-lay"
              </span>
            </div>
            <p className="text-stone-300 text-xs leading-relaxed font-sans">
              The narrator voice stream normalizes heavy metal element <em>"lead"</em> into phonetic <em>"led"</em> (/lɛd/) and French surname <em>"Roulet"</em> into phonetic <em>"Roolay"</em> (/ruːˈleɪ/, silent 't').
            </p>
          </div>
        </div>

        {/* SCENE SELECTOR GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-stone-800">
          {scenes.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => {
                setActiveSceneIndex(idx);
                setProgressPercent(0);
              }}
              className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer space-y-2 ${
                activeSceneIndex === idx
                  ? 'bg-stone-900 border-amber-500 ring-2 ring-amber-500/50 shadow-lg'
                  : 'bg-stone-900/50 border-stone-800 hover:border-stone-700'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className={activeSceneIndex === idx ? 'text-amber-400 font-bold' : 'text-stone-400'}>
                  {s.sceneNumber}
                </span>
                <span className="text-stone-500">{s.era.split('—')[0]}</span>
              </div>
              <h3 className="text-xs font-serif font-bold text-white line-clamp-2">
                {s.title}
              </h3>
            </button>
          ))}
        </div>
      </div>

      {/* FULL EXPAND SCENE MODAL */}
      {selectedImageModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-stone-900 border-2 border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 sm:p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white font-serif">
                  {currentScene.sceneNumber}: {currentScene.title}
                </h3>
                <p className="text-[10px] font-mono text-amber-400">
                  {currentScene.hash}
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
                src={currentScene.image}
                alt={currentScene.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-2xl border border-stone-800 shadow-2xl"
              />
            </div>

            <div className="p-4 bg-stone-950 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
              <span className="text-stone-400">ICEarth Animated Documentary Stage</span>
              <button
                onClick={() => setSelectedImageModal(false)}
                className="px-4 py-2 bg-stone-800 text-stone-200 font-bold rounded-xl hover:bg-stone-700 transition-colors cursor-pointer"
              >
                Close Stage
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
