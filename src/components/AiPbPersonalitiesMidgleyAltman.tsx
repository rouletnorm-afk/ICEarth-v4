import React, { useState } from 'react';
import midgleyAltmanPlateImg from '../assets/images/midgley_altman_personalities_1791243913051.jpg';
import {
  Skull,
  Brain,
  AlertTriangle,
  Scale,
  Building,
  Users,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  History,
  AlertCircle,
  Layers,
  Database,
  ShieldAlert,
  Shield,
  Activity,
  Workflow,
  Atom,
  Crown,
  Flame,
  Globe,
  TrendingUp,
  Search,
  BookOpen,
  DollarSign,
  Cpu,
  Zap,
  Sparkles
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  AreaChart,
  Area
} from 'recharts';

interface AiPbPersonalitiesMidgleyAltmanProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const AiPbPersonalitiesMidgleyAltman: React.FC<AiPbPersonalitiesMidgleyAltmanProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'awescroll_profile' | 'altman_parallels' | 'the_enablers_matrix' | 'mechanisms_of_disregard' | 'comparative_analytics' | 'sovereign_defense'
  >('awescroll_profile');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xMIDGLEY_ALTMAN_AI_AS_NEW_PB_PERSONALITIES_PLATE_67_VAULT_2026';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  // Interactive Externalized Cost Calculator
  const [marketValuationBillions, setMarketValuationBillions] = useState<number>(157);
  const [safetyResearchRatio, setSafetyResearchRatio] = useState<number>(3); // 3% of budget on safety
  const [timeHorizonYears, setTimeHorizonYears] = useState<number>(15);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Projected externalized societal cost ratio based on historic chemical lead vs frontier AI
  const projectedSocietalHarm = Math.round(
    (marketValuationBillions * 4.8 * (100 - safetyResearchRatio) * (timeHorizonYears / 10)) / 100
  );

  // Comparative Data: 50-Year Externalization Lag
  const timelineComparisonData = [
    { year: 'Year 0', leadAtmosphere: 5, aiComputeSaturation: 8, publicAwareness: 4 },
    { year: 'Year 5', leadAtmosphere: 22, aiComputeSaturation: 38, publicAwareness: 12 },
    { year: 'Year 10', leadAtmosphere: 48, aiComputeSaturation: 74, publicAwareness: 24 },
    { year: 'Year 20', leadAtmosphere: 79, aiComputeSaturation: 92, publicAwareness: 45 },
    { year: 'Year 35', leadAtmosphere: 98, aiComputeSaturation: 99, publicAwareness: 72 },
    { year: 'Year 50', leadAtmosphere: 42, aiComputeSaturation: 100, publicAwareness: 96 } // lead phased out after 50 yrs
  ];

  // Whistleblower & Safety Departures vs Market Cap
  const safetyVsValuationData = [
    { name: '2021 (Founding alignment)', safetyRetention: 95, valuation: 14 },
    { name: '2022 (ChatGPT release)', safetyRetention: 82, valuation: 29 },
    { name: '2023 (Board coup/return)', safetyRetention: 64, valuation: 80 },
    { name: '2024 (Superalignment dissolved)', safetyRetention: 32, valuation: 157 },
    { name: '2025-26 (For-profit transition)', safetyRetention: 18, valuation: 240 }
  ];

  // Radar comparison of Corporate Disregard Mechanisms
  const disregardMechanismsRadar = [
    { attribute: 'First-Mover Speed Obsession', midgleyLead: 95, altmanAi: 98 },
    { attribute: 'Dismissal of Whistleblowers', midgleyLead: 90, altmanAi: 94 },
    { attribute: 'Regulatory Gaslighting (Kehoe)', midgleyLead: 98, altmanAi: 91 },
    { attribute: 'Externalized Planetary Tail-Risk', midgleyLead: 100, altmanAi: 96 },
    { attribute: 'Messianic Public Framing', midgleyLead: 85, altmanAi: 99 },
    { attribute: 'Financial Monopoly Concentration', midgleyLead: 92, altmanAi: 97 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* 1. TOP HERO HEADER & METADATA BAR */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-gradient-to-br from-red-600 via-amber-600 to-stone-800 text-white rounded-xl shadow-md">
                <Skull size={24} className="animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-[10px] font-mono font-black uppercase tracking-wider bg-red-600 text-white rounded">
                    PLATE #67
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-600/20 text-amber-700 dark:text-amber-300 rounded border border-amber-500/30">
                    THE PERSONALITIES COMPARISON
                  </span>
                  <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-600/20 text-purple-700 dark:text-purple-300 rounded border border-purple-500/30">
                    AWESCROLL 004 AUDIT
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-serif tracking-tight mt-1">
                  AI, The New Pb: The Personalities — Thomas Midgley Jr. & Sam Altman
                </h1>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 mt-1 font-medium">
                  The Architecture of Public Disregard: What Makes Industry Completely Disregard Public Interests, and for What Rewards?
                </p>
              </div>
            </div>

            {/* Cryptographic Provenance Hash & Action Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={copyVaultHash}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 border border-stone-300 dark:border-stone-700 rounded-lg text-xs font-mono font-bold transition-all shadow-xs cursor-pointer"
                title="Copy Cryptographic Provenance Vault Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} className="text-stone-700 dark:text-stone-300" />}
                <span className="truncate max-w-[130px] sm:max-w-[210px]">{vaultHash}</span>
              </button>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-mono font-bold transition-all shadow cursor-pointer hover:scale-105"
              >
                <Maximize2 size={13} />
                <span>Inspect Plate #67</span>
              </button>

              <a
                href="https://awescroll.com/004-midgley"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-red-600 to-stone-800 hover:from-red-500 hover:to-stone-700 text-white rounded-lg text-xs font-mono font-bold transition-all shadow cursor-pointer hover:scale-105"
              >
                <ExternalLink size={13} />
                <span>Awescroll 004</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR */}
      <div className={`border-b ${isLight ? 'bg-amber-50/60 border-amber-200/60' : 'bg-stone-900/60 border-stone-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400">
                <History size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">The Midgley Lag</span>
              </div>
              <div className="text-2xl font-black mt-1 font-serif text-rose-600 dark:text-rose-400">50 Years</div>
              <p className="text-[11px] text-stone-700 dark:text-stone-300 font-medium mt-0.5">
                From 1921 TEL commercialization to the Clean Air Act phase-out in 1975
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <DollarSign size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">The Altman Reward</span>
              </div>
              <div className="text-2xl font-black mt-1 font-serif text-amber-600 dark:text-amber-400">$157 Billion+</div>
              <p className="text-[11px] text-stone-700 dark:text-stone-300 font-medium mt-0.5">
                Private valuation reached by discarding non-profit safety charter
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                <Skull size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Cognitive Fallout</span>
              </div>
              <div className="text-2xl font-black mt-1 font-serif text-purple-600 dark:text-purple-400">800M+ Points</div>
              <p className="text-[11px] text-stone-700 dark:text-stone-300 font-medium mt-0.5">
                Cumulative human IQ points lost to tetraethyl lead atmospheric pollution
              </p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-amber-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                <ShieldAlert size={16} />
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider">Whistleblower Exodus</span>
              </div>
              <div className="text-2xl font-black mt-1 font-serif text-emerald-600 dark:text-emerald-400">82% Departed</div>
              <p className="text-[11px] text-stone-700 dark:text-stone-300 font-medium mt-0.5">
                Foundational safety and alignment researchers resigned or ousted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB NAVIGATION */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} sticky top-0 z-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-2 sm:space-x-4 overflow-x-auto py-2.5 scrollbar-none text-xs font-mono font-bold">
            <button
              onClick={() => setActiveSubTab('awescroll_profile')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'awescroll_profile'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
              }`}
            >
              1. Awescroll 004: Midgley Profile
            </button>
            <button
              onClick={() => setActiveSubTab('altman_parallels')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'altman_parallels'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
              }`}
            >
              2. Sam Altman: The Modern Midgley
            </button>
            <button
              onClick={() => setActiveSubTab('the_enablers_matrix')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'the_enablers_matrix'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
              }`}
            >
              3. The Enablers: GM/DuPont vs Microsoft/Thiel
            </button>
            <button
              onClick={() => setActiveSubTab('mechanisms_of_disregard')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'mechanisms_of_disregard'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
              }`}
            >
              4. Why Industry Disregards Public Interest
            </button>
            <button
              onClick={() => setActiveSubTab('comparative_analytics')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'comparative_analytics'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
              }`}
            >
              5. Interactive Comparative Analytics
            </button>
            <button
              onClick={() => setActiveSubTab('sovereign_defense')}
              className={`px-3 py-1.5 rounded-lg transition-all shrink-0 cursor-pointer ${
                activeSubTab === 'sovereign_defense'
                  ? 'bg-amber-600 text-white shadow'
                  : 'text-stone-700 hover:text-stone-900 dark:text-stone-300 dark:hover:text-white'
              }`}
            >
              6. Sovereign Defense: Roulet’s Law
            </button>
          </nav>
        </div>
      </div>

      {/* 4. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* SUBTAB 1: AWESCROLL 004 - THOMAS MIDGLEY PROFILE */}
        {activeSubTab === 'awescroll_profile' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
                    Awescroll 004 Profile • Historical Forensic Review
                  </span>
                  <h2 className="text-2xl font-bold font-serif mt-1">
                    Midgley. Two Inventions and the Air.
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold">
                  Dayton, Ohio (1921) • Ethyl Gasoline • Freon CFCs
                </span>
              </div>

              {/* Exact quotation from user brief */}
              <blockquote className={`p-5 rounded-2xl border-l-4 border-amber-500 ${isLight ? 'bg-amber-50/70 text-stone-900' : 'bg-stone-950 text-stone-100'} text-base sm:text-lg italic font-serif leading-relaxed shadow-sm`}>
                “In 1921 a mechanical engineer in Dayton, Ohio, found what made car engines run smoothly: a few grams of a lead compound in every gallon of petrol. Nine years later he found the perfect gas for refrigerators: safe to breathe, impossible to set on fire.
                <br /><br />
                Both worked. Both went everywhere, until there was some of each in the air over every part of the planet. It took half a century to learn what each of them did there.
                <br /><br />
                His name was Thomas Midgley Jr.”
              </blockquote>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
                <div className="lg:col-span-7 space-y-4 text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                  <p>
                    Thomas Midgley Jr. was not an overt villain in a cartoon melodrama; he was a brilliant, charismatic, celebrated mechanical engineer working under <strong>Charles Kettering</strong> at General Motors. He was awarded the Nichols Medal, the Priestley Medal, the Willard Gibbs Medal, and served as President of the American Chemical Society.
                  </p>
                  <p>
                    Yet environmental historian J.R. McNeill observed that Midgley <em>“had more adverse impact on the atmosphere than any other single organism in Earth's history.”</em>
                  </p>
                  <p>
                    When factory workers at the Standard Oil Bayway refinery in New Jersey went insane and died in straightjackets from acute tetraethyl lead (TEL) poisoning in 1924, Midgley held a press conference. He poured TEL over his hands and held a flask under his nose for sixty seconds, declaring it was as harmless as water. What he hid from the public was that he was already suffering from chronic lead poisoning himself, retreating to Miami for months of secret convalescence.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative rounded-2xl overflow-hidden shadow-lg border border-amber-500/40 group cursor-pointer"
                  >
                    <img
                      src={midgleyAltmanPlateImg}
                      alt="Plate #67: AI As The New Pb - Midgley & Altman"
                      className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-mono font-bold rounded uppercase">
                        Plate #67 Infographic
                      </span>
                      <p className="text-xs font-semibold mt-1 drop-shadow">
                        Click to expand high-resolution comparative forensic study plate
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-600 dark:text-rose-400">
                    <Skull size={16} />
                    <span>INVENTION 1: TEL (1921)</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300">
                    Tetraethyl lead made auto engines quiet and powerful. It went into every exhaust pipe on Earth, aerosolizing hundreds of millions of tons of cumulative neurotoxin into children’s developing brains for 50 years.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                    <Atom size={16} />
                    <span>INVENTION 2: FREON (1930)</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300">
                    CFC-12 made home refrigeration safe from ammonia leaks. It drifted imperceptibly into the stratosphere, catalytic chlorine ripping apart the Earth's ozone layer that shields all terrestrial life from UV-C radiation.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    <AlertTriangle size={16} />
                    <span>THE IRONIC END</span>
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300">
                    Contracting polio in 1940, Midgley invented an elaborate system of ropes and pulleys to lift himself out of bed. In 1944, he became entangled in his own mechanism and died of accidental strangulation by his own machine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: SAM ALTMAN & OPENAI PARALLELS */}
        {activeSubTab === 'altman_parallels' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400">
                    Frontier AI (SI) • Silicon Valley Hubris & Corporate Reconstitution
                  </span>
                  <h2 className="text-2xl font-bold font-serif mt-1">
                    Sam Altman: The 21st-Century Midgley of Synthetic Cognition
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs font-mono font-bold">
                  OpenAI • San Francisco • $157B Valuation
                </span>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                <p>
                  Just as Thomas Midgley Jr. was celebrated as the indispensable mechanical wizard who unlocked internal combustion, <strong>Sam Altman</strong> is celebrated as the visionary prophet ushering humanity into Artificial General Intelligence (AGI) and Super Intelligence (SI).
                </p>
                <p>
                  The parallels between their professional careers, rhetorical techniques, and treatment of existential risk are mathematically striking:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600 dark:text-amber-400 uppercase">
                      <Skull size={18} />
                      <span>Thomas Midgley Jr. (Tetraethyl Lead)</span>
                    </div>
                    <ul className="text-xs sm:text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>The Public Benefit Façade:</strong> Framed TEL as a public conservation miracle that would save billions of gallons of oil and modernize American agriculture.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>Suppression of Internal Dissent:</strong> Ignored internal chemists suffering convulsions and memory loss; branded medical warnings as "hysteria from ivory-tower academics."</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>The Theater of Safety:</strong> Performed dramatic public demonstrations (washing hands in TEL) to reassure regulators while hiding private clinical damage.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>The Corporate Reward:</strong> Massive monopoly patent payouts from GM and Standard Oil, cementing GM's global market dominance.</span>
                      </li>
                    </ul>
                  </div>

                  <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-rose-600 dark:text-rose-400 uppercase">
                      <Cpu size={18} />
                      <span>Sam Altman (Frontier AI & OpenAI)</span>
                    </div>
                    <ul className="text-xs sm:text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span><strong>The Utopian Mission Façade:</strong> Founded OpenAI as a non-profit dedicated to "safely benefiting all of humanity," then dismantled the charter to pursue commercial hyper-scale.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span><strong>Suppression of Safety Teams:</strong> Dissolved the Superalignment team; forced safety researchers to sign draconian non-disparagement agreements tied to their vested equity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span><strong>The Theater of Regulation:</strong> Appeared before Congress calling for "AI licensing" (regulatory moat) while lobbying aggressively against actual EU and California safety legislation (SB 1047).</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-500 font-bold">•</span>
                        <span><strong>The Corporate Reward:</strong> A $157 billion equity valuation, multi-billion-dollar personal investment stakes in nuclear power and chip manufacturing, and global sovereign leverage.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`p-4 rounded-xl border-l-4 border-rose-500 ${isLight ? 'bg-rose-50/60' : 'bg-stone-950'} text-xs sm:text-sm leading-relaxed`}>
                  <strong className="text-rose-700 dark:text-rose-300 block mb-1">David Robinson’s Resignation Echoes Alice Hamilton:</strong>
                  In 1925, Dr. Alice Hamilton warned the Surgeon General that adding lead to gasoline was an irreversible ecological error. In 2026, OpenAI safety researcher David Robinson resigned and confessed in <em>The Atlantic</em>: <em>“The industry’s approach to safety will guarantee more failures unless something changes... The future depends on wisdom that Silicon Valley lacks.”</em> Just as Kettering brushed Hamilton aside, Altman brushed Robinson and Leike aside to ship the next frontier checkpoint.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: THE ENABLERS MATRIX */}
        {activeSubTab === 'the_enablers_matrix' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-purple-600 dark:text-purple-400">
                    Institutional Architecture & Cartel Formations
                  </span>
                  <h2 className="text-2xl font-bold font-serif mt-1">
                    The Enablers: GM, DuPont & Kehoe vs. Microsoft, Thiel & Summers
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 text-xs font-mono font-bold">
                  Corporate Collusion Dynamics
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                Neither Thomas Midgley Jr. nor Sam Altman acted in isolation. Both were catapulted and insulated by an entrenched network of financiers, industrial conglomerates, and captive scientific arbiters who recognized that externalizing risk onto the public was the fastest path to capital accumulation.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className={`border-b ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-800 text-white'}`}>
                      <th className="p-3">Institutional Role</th>
                      <th className="p-3 text-amber-600 dark:text-amber-400">The 20th Century Pb Cartel</th>
                      <th className="p-3 text-rose-600 dark:text-rose-400">The 21st Century AI Frontier Cartel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    <tr className={isLight ? 'hover:bg-stone-50' : 'hover:bg-stone-900/50'}>
                      <td className="p-3 font-bold">The Chief Capitalist & Enabler</td>
                      <td className="p-3">
                        <strong>Charles Kettering (General Motors)</strong>: VP of GM Research. Demanded high-compression engines to compete with Ford; funded Midgley and formed Ethyl Gasoline Corp.
                      </td>
                      <td className="p-3">
                        <strong>Satya Nadella (Microsoft)</strong>: Poured $13B+ into OpenAI; secured exclusive cloud computing rights; rescued Altman during the 2023 board revolt to protect stock price.
                      </td>
                    </tr>
                    <tr className={isLight ? 'hover:bg-stone-50' : 'hover:bg-stone-900/50'}>
                      <td className="p-3 font-bold">The Chemical / Compute Monopolist</td>
                      <td className="p-3">
                        <strong>DuPont & Standard Oil (New Jersey)</strong>: Built the Bayway chemical plants; manufactured TEL; weaponized patent barriers to lock out ethanol and safe aromatics.
                      </td>
                      <td className="p-3">
                        <strong>Jensen Huang (NVIDIA)</strong>: Created proprietary CUDA compute lock-in; sells tens of billions in H100/Blackwell chips to fuel runaway frontier capability scaling.
                      </td>
                    </tr>
                    <tr className={isLight ? 'hover:bg-stone-50' : 'hover:bg-stone-900/50'}>
                      <td className="p-3 font-bold">The Captive Regulatory Defender</td>
                      <td className="p-3">
                        <strong>Dr. Robert A. Kehoe (Kettering Lab)</strong>: Formulated the infamous "Kehoe Rule"—asserting lead was safe because trace lead existed in soil, requiring 50 years of industry-controlled testing.
                      </td>
                      <td className="p-3">
                        <strong>Frontier Model Forum & AISI Captive Audits</strong>: Self-regulatory safety coalitions funded by Big Tech that publish toothless "commitments" while actively delaying statutory guardrails.
                      </td>
                    </tr>
                    <tr className={isLight ? 'hover:bg-stone-50' : 'hover:bg-stone-900/50'}>
                      <td className="p-3 font-bold">The Political / Financial Seal</td>
                      <td className="p-3">
                        <strong>Herbert Hoover (Commerce Secretary)</strong>: Convened the 1925 USPHS conference; permitted Ethyl sales to resume after temporary suspension without independent long-term studies.
                      </td>
                      <td className="p-3">
                        <strong>Larry Summers (OpenAI Board Director)</strong>: Former Treasury Secretary; brings Wall Street deregulation orthodoxy directly into OpenAI’s governance apparatus.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: MECHANISMS OF PUBLIC DISREGARD */}
        {activeSubTab === 'mechanisms_of_disregard' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400">
                    The Deep Forensic Question
                  </span>
                  <h2 className="text-2xl font-bold font-serif mt-1">
                    What Makes Industry Completely Disregard Public Interests, and for What Rewards?
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded bg-rose-500/10 text-rose-700 dark:text-rose-300 text-xs font-mono font-bold">
                  Exposenomics of Corporate Sociopathy
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-rose-600 dark:text-rose-400 uppercase">
                    <TrendingUp size={18} />
                    <span>1. The Asymmetry of Externalized Risk</span>
                  </div>
                  <h3 className="font-bold text-base">All the Profits are Private; All the Consequences are Planetary</h3>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Under corporate capitalism, externalizing a harm costs zero dollars on the quarterly balance sheet. When Midgley aerosolized lead, General Motors paid nothing for the lost IQ points, kidney failures, and criminal violence of subsequent generations.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Similarly, when OpenAI deploys autonomous agents that facilitate zero-day cyber intrusions or degrade human cognitive resilience, OpenAI pays nothing. The cost is paid by municipal power grids, school districts, hospitals, and ordinary citizens.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600 dark:text-amber-400 uppercase">
                    <Zap size={18} />
                    <span>2. The Competitive "Prisoner's Dilemma" Excuse</span>
                  </div>
                  <h3 className="font-bold text-base">“If We Don’t Poison the Well, Our Competitor Will”</h3>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Kettering and Midgley knew that safe anti-knock alternatives existed: <strong>ethanol</strong>, benzene, and thermal catalytic cracking. But ethanol could not be patented—anyone could brew grain alcohol. They needed a synthetic chemical additive they could monopolize.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Altman and Big Tech deploy the identical geopolitical blackmail: <em>“If we pause to verify safety, China or open-source will overtake us.”</em> The fear of losing market dominance is weaponized to excuse the total abandonment of precautionary discipline.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-600 dark:text-purple-400 uppercase">
                    <Crown size={18} />
                    <span>3. Messianic Narcissism & The Cult of the Savior</span>
                  </div>
                  <h3 className="font-bold text-base">Believing One’s Own Mythology</h3>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Midgley sincerely believed he was delivering human mastery over nature: quiet powerful transportation, air conditioning for desert cities, and modern living.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Sam Altman portrays himself not as a software vendor seeking monopoly rent, but as an epochal savior ushering in post-scarcity AGI, cure for all diseases, and interplanetary colonisation. When an executive believes they are saving the species, any critic who asks for safety testing is viewed as an obstructionist heresy.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400 uppercase">
                    <Scale size={18} />
                    <span>4. The Kehoe Rule of Regulatory Gaslighting</span>
                  </div>
                  <h3 className="font-bold text-base">Demanding Unreasonable Proof While Controlling the Data</h3>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    The Kehoe Rule dictates: <em>Assume safety until external victims prove irreversible harm with mathematical certainty.</em> Because the industry controls the chemical formulations and laboratory funding, proving harm takes 50 years.
                  </p>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    The modern AI industry follows the exact playbook: they refuse to release model weights, training sets, or internal red-teaming logs, while demanding that regulators show "empirical proof" of catastrophe before passing binding legislation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: COMPARATIVE ANALYTICS & INTERACTIVE CALCULATOR */}
        {activeSubTab === 'comparative_analytics' && (
          <div className="space-y-8">
            {/* Interactive Calculator: Externalized Harm Index */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Activity size={20} className="text-rose-600" />
                  <h3 className="text-lg font-bold font-serif">
                    Interactive Externalized Societal Risk Model (The Midgley-Altman Formula)
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300">
                  Roulet’s Law: Cumulative Liability = Valuation × (100 - Safety%) × Time
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 block mb-1">
                    Frontier AI Enterprise Valuation: ${marketValuationBillions} Billion
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    step="5"
                    value={marketValuationBillions}
                    onChange={(e) => setMarketValuationBillions(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-700 dark:text-stone-300 mt-1">
                    <span>$10B (Early)</span>
                    <span>$500B (Hyperscale Monopoly)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 block mb-1">
                    Actual Safety / Alignment Budget: {safetyResearchRatio}%
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={safetyResearchRatio}
                    onChange={(e) => setSafetyResearchRatio(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-700 dark:text-stone-300 mt-1">
                    <span>1% (Disbanded teams)</span>
                    <span>20% (Non-profit fiduciary)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 block mb-1">
                    Deployment Window Without Strict Torts: {timeHorizonYears} Years
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="1"
                    value={timeHorizonYears}
                    onChange={(e) => setTimeHorizonYears(Number(e.target.value))}
                    className="w-full accent-rose-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-700 dark:text-stone-300 mt-1">
                    <span>5 yrs (Quick intervention)</span>
                    <span>50 yrs (The Midgley Lag)</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Result Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-stone-900 to-rose-950 text-white flex flex-wrap items-center justify-between gap-4 border border-rose-500/40">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">
                    Projected Externalized Public Liability (Under Roulet’s Law)
                  </span>
                  <div className="text-3xl font-black font-serif text-rose-400 mt-0.5">
                    ${projectedSocietalHarm.toLocaleString()} Billion
                  </div>
                  <p className="text-xs text-stone-300 mt-1">
                    {projectedSocietalHarm > 2000
                      ? 'CATASTROPHIC PLANETARY EXTERNALIZATION: Reaches Midgley-scale irreversible global atmospheric and cognitive trauma.'
                      : 'SEVERE ASYMMETRIC BURDEN: Public infrastructure absorbs trillions in uncompensated systemic risk.'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded bg-rose-600 text-white font-mono font-bold text-xs uppercase">
                    {(projectedSocietalHarm / marketValuationBillions).toFixed(1)}x Enterprise Value
                  </span>
                </div>
              </div>
            </div>

            {/* Charts: 50-Year Externalization Curve */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
                <h4 className="text-base font-bold font-serif mb-1">
                  The 50-Year Externalization Saturation Curve
                </h4>
                <p className="text-xs text-stone-700 dark:text-stone-300 mb-4">
                  Atmospheric Lead (1921–1975) vs. Autonomous AI Deployment Saturation (2020–2035).
                </p>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={timelineComparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} domain={[0, 100]} />
                      <Tooltip />
                      <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, paddingBottom: 10 }} />
                      <Area type="monotone" dataKey="aiComputeSaturation" name="AI Compute Saturation (%)" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="leadAtmosphere" name="Atmospheric Lead Curve (%)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="publicAwareness" name="Public Regulatory Awareness (%)" stroke="#10b981" fill="#10b981" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Chart: Safety Whistleblowers vs Valuation */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
                <h4 className="text-base font-bold font-serif mb-1">
                  Safety Retention Collapse vs. Market Cap Surge
                </h4>
                <p className="text-xs text-stone-700 dark:text-stone-300 mb-4">
                  As valuation surged from $14B to $240B, foundational safety alignment staffing collapsed by over 80%.
                </p>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={safetyVsValuationData} margin={{ top: 10, right: 10, left: -10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="name" tick={{ fontSize: 8 }} angle={-15} textAnchor="end" />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip />
                      <Legend verticalAlign="top" wrapperStyle={{ fontSize: 11, paddingBottom: 10 }} />
                      <Bar dataKey="valuation" name="Valuation ($B)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="safetyRetention" name="Safety Team Retention (%)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Radar: Disregard Mechanisms */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-5 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase text-purple-600 dark:text-purple-400">
                    Comparative Forensic Profiler
                  </span>
                  <h4 className="text-xl font-bold font-serif">
                    Thomas Midgley Jr. vs. Sam Altman
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Plotting the 6 structural drivers of industrial public disregard: first-mover haste, whistleblower purge, regulatory gaslighting under Kehoe, unhedged tail-risk, messianic posturing, and hyper-monopoly concentration.
                  </p>
                </div>
                <div className="md:col-span-7 h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={disregardMechanismsRadar} margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                      <PolarGrid stroke="#999" opacity={0.3} />
                      <PolarAngleAxis dataKey="attribute" tick={{ fontSize: 9, fill: isLight ? '#1f2937' : '#e5e7eb' }} />
                      <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 8 }} />
                      <Radar name="Midgley (Tetraethyl Lead)" dataKey="midgleyLead" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                      <Radar name="Altman (Frontier AI)" dataKey="altmanAi" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: SOVEREIGN DEFENSE & ROULET'S LAW */}
        {activeSubTab === 'sovereign_defense' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                    The Legal, Hardware & Philosophical Solution
                  </span>
                  <h2 className="text-2xl font-bold font-serif mt-1">
                    Defeating Modern Midgleys: Roulet’s Law & Sovereign Enclaves
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold">
                  Sovereign Remedy
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono font-bold text-xs">
                    <Scale size={16} />
                    <span>STRICT NON-DELEGABLE TORT LIABILITY</span>
                  </div>
                  <h4 className="font-bold text-sm">Eliminate the Kehoe Defense</h4>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    Under Roulet’s Law, frontier model deployers carry strict liability for cognitive, infrastructural, and cyber harms generated by their autonomous weights. Corporate veils cannot protect personal stock fortunes when public interest is willfully ignored.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-mono font-bold text-xs">
                    <Cpu size={16} />
                    <span>LOCAL HARDWARE ENCLAVES</span>
                  </div>
                  <h4 className="font-bold text-sm">Break the Hyperscale Monopoly</h4>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    Decouple intelligence from centralized corporate servers. Run sovereign, open-weight models locally on tamper-proof hardware (the ICEarth Stack). When individuals own their compute, no Silicon Valley executive can dictate societal safety parameters.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono font-bold text-xs">
                    <Crown size={16} />
                    <span>COMMUNITY & ELDER GOVERNANCE</span>
                  </div>
                  <h4 className="font-bold text-sm">Wisdom Over Speed</h4>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    Substitute the Silicon Valley "move fast and break things" ethos with Indigenous elder council oversight. Deployment decisions must be evaluated across multi-generational time horizons (the 7th-generation principle) rather than quarterly equity vesting dates.
                  </p>
                </div>
              </div>

              {/* Cross Navigation Section */}
              <div className="pt-6 border-t border-stone-200 dark:border-stone-800">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 mb-3">
                  Cross-Navigate Related ICEarth Forensic Audits & Plates:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('openai_culture')}
                        className="px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-105"
                      >
                        <ArrowRight size={13} />
                        <span>⚠️ Inside OpenAI’s Broken Culture (Plate #62)</span>
                      </button>

                      <button
                        onClick={() => onNavigateTab('ai_and_kehoe_rule')}
                        className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-105"
                      >
                        <ArrowRight size={13} />
                        <span>⚖️ AI & The Kehoe Rule (Plate #41)</span>
                      </button>

                      <button
                        onClick={() => onNavigateTab('super_intelligence_force')}
                        className="px-3.5 py-2 rounded-xl bg-stone-700 hover:bg-stone-600 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-105"
                      >
                        <ArrowRight size={13} />
                        <span>🛡️ Super Intelligence Force & Jay Clayton (Plate #63)</span>
                      </button>

                      <button
                        onClick={() => onNavigateTab('proofs')}
                        className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-105"
                      >
                        <ArrowRight size={13} />
                        <span>🧠 Global Lead-Crime Proof (8,000 Yr)</span>
                      </button>

                      <button
                        onClick={() => onNavigateTab('reports')}
                        className="px-3.5 py-2 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition-all shadow-xs cursor-pointer hover:scale-105"
                      >
                        <BookOpen size={13} />
                        <span>📰 News & Reports Repository</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* 5. HIGH RESOLUTION ARTWORK MODAL */}
      {isPlateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-stone-900 border border-amber-500/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-mono font-bold rounded uppercase">
                  Plate #67
                </span>
                <span className="font-serif font-bold text-sm sm:text-base text-amber-200">
                  AI, The New Pb: The Personalities — Thomas Midgley Jr. & Sam Altman
                </span>
              </div>
              <button
                onClick={() => setIsPlateModalOpen(false)}
                className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold px-2.5 py-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950">
              <img
                src={midgleyAltmanPlateImg}
                alt="Full resolution Plate #67 Infographic"
                className="max-h-[75vh] w-auto object-contain rounded-xl shadow-lg border border-stone-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between text-xs font-mono text-stone-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="text-amber-400">Vault Hash:</span>
                <span className="text-[11px] text-stone-300 font-mono select-all">{vaultHash}</span>
              </div>
              <button
                onClick={copyVaultHash}
                className="px-2.5 py-1 rounded bg-amber-600 hover:bg-amber-500 text-white font-bold transition-all cursor-pointer"
              >
                {copiedHash ? '✓ Hash Copied' : 'Copy Vault Hash'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
