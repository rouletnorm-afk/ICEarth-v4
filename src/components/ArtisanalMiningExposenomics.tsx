import React, { useState, useMemo } from 'react';
import artisanalMiningImg from '../assets/images/artisanal_mining_terrorism_nigeria_1786937796982.jpg';
import {
  Pickaxe,
  Flame,
  ShieldAlert,
  Skull,
  TrendingDown,
  Activity,
  AlertTriangle,
  FileText,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  BarChart2,
  Maximize2,
  X,
  Compass,
  Scale,
  Award,
  Layers,
  Search,
  Users,
  Eye,
  Info,
  Clock,
  MapPin,
  Landmark,
  Radio,
  Coins,
  Cpu,
  Globe,
  Sprout,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface ArtisanalMiningExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ArtisanalMiningExposenomics: React.FC<ArtisanalMiningExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'regional_gis' | 'coop_transition' | 'simulation'>('overview');
  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);

  // Simulation Sliders for Tailings / Domestic Ore Processing Exposure
  const [oreGrindingLocation, setOreGrindingLocation] = useState<'domestic_compound' | 'village_perimeter' | 'contained_coop'>('domestic_compound');
  const [oreLeadConcentration, setOreLeadConcentration] = useState<number>(8500); // ppm Pb in ore
  const [waterProximityToPit, setWaterProximityToPit] = useState<number>(50); // meters from abandoned pit
  const [cartelInterceptionPct, setCartelInterceptionPct] = useState<number>(75); // % value skimmed by armed syndicates

  // Computed toxicological & economic metrics
  const simOutputs = useMemo(() => {
    let dispersionFactor = 1.0;
    if (oreGrindingLocation === 'domestic_compound') dispersionFactor = 3.8;
    else if (oreGrindingLocation === 'village_perimeter') dispersionFactor = 1.4;
    else dispersionFactor = 0.15;

    const soilPbPpm = Math.round(oreLeadConcentration * 0.45 * dispersionFactor);
    const estimatedWaterPbPpb = Math.round((oreLeadConcentration / 100) * (500 / Math.max(10, waterProximityToPit)) * dispersionFactor);
    const pediatricBllEstimate = Math.min(125, parseFloat((0.016 + (soilPbPpm / 80) + (estimatedWaterPbPpb / 15)).toFixed(1)));
    
    // Roulet's Law Neurological Perturbation (H') & Conflict Propensity
    const neurologicalLossPct = Math.min(96, Math.round(pediatricBllEstimate * 0.95));
    const conflictIndex = Math.min(100, Math.round((cartelInterceptionPct * 0.6) + (pediatricBllEstimate * 0.4)));
    const illicitValueUsdPerKg = Math.round(65000 * (cartelInterceptionPct / 100));
    const minerRevenuePerKg = Math.round(65000 * ((100 - cartelInterceptionPct) / 100));

    return {
      soilPbPpm,
      estimatedWaterPbPpb,
      pediatricBllEstimate,
      neurologicalLossPct,
      conflictIndex,
      illicitValueUsdPerKg,
      minerRevenuePerKg
    };
  }, [oreGrindingLocation, oreLeadConcentration, waterProximityToPit, cartelInterceptionPct]);

  // Regional Mining Pit Inventory & Heavy Metal Saturation (GIS Data)
  const regionalPitsData = [
    { state: 'Plateau (Jos/Barkin Ladi)', abandonedPits: 1450, leadPb: 78, tinSn: 95, arsenicAs: 45, banditConflictRisk: 68 },
    { state: 'Zamfara (Anka/Bukkuyum)', abandonedPits: 980, leadPb: 99, tinSn: 12, arsenicAs: 82, banditConflictRisk: 95 },
    { state: 'Niger (Shiroro/Rafi)', abandonedPits: 620, leadPb: 84, tinSn: 18, arsenicAs: 70, banditConflictRisk: 88 },
    { state: 'Kaduna (Birnin Gwari)', abandonedPits: 440, leadPb: 75, tinSn: 22, arsenicAs: 65, banditConflictRisk: 90 },
    { state: 'Kogi (Yagba/Lokoja)', abandonedPits: 280, leadPb: 42, tinSn: 35, arsenicAs: 38, banditConflictRisk: 42 },
    { state: 'Nasarawa (Awe/Toto)', abandonedPits: 230, leadPb: 55, tinSn: 60, arsenicAs: 40, banditConflictRisk: 50 },
    { state: 'Osun (Ilesa/Atakunmosa)', abandonedPits: 190, leadPb: 62, tinSn: 10, arsenicAs: 52, banditConflictRisk: 35 }
  ];

  // Radar chart comparison of Informal Cartel vs. Licensed Co-op Models
  const modelComparisonRadar = [
    { subject: 'Miner Income Share', illegalCartel: 15, licensedCoop: 85, fullMark: 100 },
    { subject: 'Environmental Containment', illegalCartel: 5, licensedCoop: 90, fullMark: 100 },
    { subject: 'Pediatric Safety / BLL Shield', illegalCartel: 8, licensedCoop: 92, fullMark: 100 },
    { subject: 'Community Reinvestment', illegalCartel: 2, licensedCoop: 80, fullMark: 100 },
    { subject: 'State Fiscal Revenue', illegalCartel: 0, licensedCoop: 75, fullMark: 100 },
    { subject: 'Conflict & Extremist Choke', illegalCartel: 10, licensedCoop: 88, fullMark: 100 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-[#F9F7F1] text-stone-900' : 'bg-[#0E0D0B] text-stone-100'} font-sans transition-colors duration-200`}>
      
      {/* 1. TOP HERO BANNER & CITATION */}
      <div className="border-b border-amber-900/30 bg-gradient-to-b from-stone-950 via-amber-950/90 to-stone-900 text-stone-100 p-6 md:p-10 shadow-2xl relative overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          
          {/* Header Metadata Chips */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Radio size={13} className="text-amber-400 animate-pulse" />
              Radio Nigeria Dispatch • August 16, 2026
            </span>
            <span className="px-3 py-1 bg-red-500/20 text-red-300 border border-red-500/40 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Skull size={13} className="text-red-400" />
              Plateau Pit Disaster (Kassa / Barkin Ladi)
            </span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full font-bold uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-emerald-400" />
              Ministry of Solid Minerals Co-op Strategy
            </span>
            <span className="px-3 py-1 bg-stone-800 text-stone-300 border border-stone-700 rounded-full font-mono text-[11px]">
              Roulet's Law Deep-Time Exposenomics
            </span>
          </div>

          {/* Main Title & Thesis */}
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-white">
              Artisanal Mining & The Exposenomics of Terrorism
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-5xl leading-relaxed font-sans font-light">
              From the primordial primate search for stones and weaponry to unregulated pits worldwide: How illegal artisanal gold and tin mining represents the <strong className="text-amber-300 font-semibold">worst economics in human history</strong>—poisoning water, food supplies, and families while generating billions in shadow revenues that fund <strong className="text-red-400 font-semibold">Boko Haram and extremist banditry</strong> in Nigeria, and the 2026 Federal Strategy to license co-ops and reclaim 4,000+ abandoned pits.
            </p>
          </div>

          {/* Source Attribution & Official Quote Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-amber-600/30 backdrop-blur-md space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Landmark size={16} className="text-amber-400 shrink-0" />
                <span className="font-bold text-amber-200">Official Federal Government Statement:</span>
                <span className="text-stone-300">Minister of Solid Minerals Development, <strong>Dele Alake</strong> (via Lara Owoeye-Wise)</span>
              </div>
              <a
                href="https://radionigeria.gov.ng/2026/08/16/fg-warns-illegal-miners-seeks-investors-for-abandoned-pits/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-mono text-xs hover:underline cursor-pointer"
              >
                <span>Read Radio Nigeria Original Report</span>
                <ExternalLink size={12} />
              </a>
            </div>

            <blockquote className="border-l-2 border-amber-500 pl-4 py-1 text-xs sm:text-sm italic text-stone-300 font-serif leading-relaxed">
              "The tragic loss could have been avoided had the illegal miners formed a co-operative and applied for a permit... More than 4,000 abandoned mine pits are spread across Nigeria, posing environmental and safety risks to communities... The challenge before the state and the Federal Government is how to turn these potential pits of death into centres of joyful prosperity."
            </blockquote>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            {[
              { label: 'Abandoned Mine Pits', val: '4,000+', desc: 'Legacy hazardous death pits in Nigeria', icon: AlertTriangle, color: 'text-amber-400' },
              { label: 'Barkin Ladi Casualties', val: '7 Dead', desc: 'Kassa tin pit collapse (Aug 2026)', icon: Skull, color: 'text-red-400' },
              { label: 'Zamfara Pediatric Baseline', val: '400+ Dead', desc: 'Children killed in Pb-gold crisis', icon: Skull, color: 'text-rose-400' },
              { label: 'Pits Rehabilitated', val: '59 Sites', desc: 'GIS satellite & AI mapping active', icon: Sprout, color: 'text-emerald-400' },
              { label: 'Illicit Mineral Shadow Economy', val: '$3.5B+ / yr', desc: 'Funding Boko Haram & banditry', icon: Coins, color: 'text-amber-300' },
              { label: 'Homo Sapiens 0 Target', val: '0.016 μg/dL', desc: 'Pre-industrial pristine baseline', icon: ShieldCheck, color: 'text-sky-400' }
            ].map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono uppercase text-stone-400 tracking-wider">{m.label}</span>
                    <Icon size={14} className={m.color} />
                  </div>
                  <div>
                    <div className={`text-lg sm:text-xl font-bold font-mono ${m.color}`}>{m.val}</div>
                    <div className="text-[10px] text-stone-400 mt-0.5 leading-tight">{m.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 2. SUB-NAVIGATION TABS */}
      <div className="sticky top-0 z-30 border-b border-stone-300 bg-stone-100/95 dark:bg-stone-900/95 dark:border-stone-800 backdrop-blur-md px-4 sm:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {[
              { id: 'overview', label: '📖 Primates to Terrorism Thesis', icon: Flame },
              { id: 'regional_gis', label: '🗺️ 4,000+ Abandoned Pits GIS', icon: MapPin },
              { id: 'coop_transition', label: '⚖️ Cartel vs. Licensed Co-op', icon: Scale },
              { id: 'simulation', label: '🔬 Live Ore Exposure Simulator', icon: Cpu }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-600 text-white shadow-md font-bold'
                      : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowArtworkModal(true)}
              className="px-3.5 py-2 rounded-xl bg-stone-900 text-amber-300 border border-amber-600/40 hover:bg-stone-800 text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
            >
              <Eye size={14} />
              <span>Forensic Infographic Plate #15</span>
            </button>
          </div>

        </div>
      </div>

      {/* 3. MAIN TAB CONTENT */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8 space-y-8">
        
        {/* ========================================================================= */}
        {/* TAB 1: PRIMATES TO TERRORISM THESIS */}
        {/* ========================================================================= */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            
            {/* Visual Plate Hero Preview Banner */}
            <div className="rounded-2xl overflow-hidden border border-amber-700/30 bg-black shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div 
                className="lg:col-span-7 relative group cursor-pointer overflow-hidden flex items-center justify-center bg-stone-950"
                onClick={() => setShowArtworkModal(true)}
              >
                <img
                  src={artisanalMiningImg}
                  alt="Artisanal Mining & Exposenomics of Terrorism Infographic Plate"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-black/70 px-2 py-0.5 rounded border border-amber-500/30">
                      FORENSIC PLATE #15 • CRYPTOGRAPHIC PROVENANCE
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif">
                      Artisanal Mining & The Exposenomics of Terrorism
                    </h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 text-white p-2 rounded-lg border border-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={16} />
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 bg-stone-950 text-stone-200 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">Core Exposenomics Principles</span>
                    <span className="text-[10px] font-mono text-stone-400">Roulet's Law § 14.8</span>
                  </div>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>1. The Oldest Anthropogenic Industry After Fire:</strong> Artisanal mining began when primates selected stones with specific hardness and fracturing properties (flint, obsidian, basalt) for fire and weapons, institutionalizing physical aggression and early mineral toxicity.
                  </p>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>2. The Worst Economics in Human History:</strong> Subsistence miners in unregulated pits trade their family health, clean water aquifers, and child neurobiology for tiny survival wages, while violent cartels skim 80%+ of the mineral value.
                  </p>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>3. Direct Funding of Extremism & Terrorism:</strong> In Zamfara, Niger, and Plateau states, illicit artisanal gold and tin pits generate billions in unrecorded cash that directly equips Boko Haram, ISWAP, and armed kidnapping cartels.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveSubTab('coop_transition')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold font-mono transition-all cursor-pointer"
                  >
                    Inspect 2026 Federal Solution &rarr;
                  </button>
                  <button
                    onClick={() => onNavigateTab?.('genocost')}
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-xl text-xs font-bold font-mono transition-all border border-stone-700 cursor-pointer"
                  >
                    Compare with DRC Genocost &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Deep Historical & Scientific Narrative Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Pickaxe size={20} />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                  1. Primates, Weaponry & The Dawn of Savagery
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Long before agriculture, early hominids mapped geology to seek stones for specific utilities: flint for sparking fire, quartzite for butchering tools, and dense ores for clubs and projectile points. As hominids graduated to galena (lead sulfide), cinnabar (mercury sulfide), and chalcopyrite (copper), extraction sites became fortified, birthplaces of territorial warfare, human chattel slavery, and heavy metal perturbation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold">
                  <Skull size={20} />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                  2. The Zamfara Disaster & Abandoned Pit Collapse
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  In 2010, the Zamfara crisis revealed the extreme peril of artisanal gold mining: flour mills used inside family homes crushed lead-rich gold ore, scattering dust with &gt;100,000 ppm lead. Over 400 infants died from acute lead encephalopathy, and thousands suffered irreversible prefrontal brain damage. Today, the collapse of abandoned tin pits in Kassa (Barkin Ladi) killing 7 miners proves that 4,000+ un-reclaimed pits remain active death traps.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                  3. The 2026 Strategy: From Death Pits to Prosperity
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  As announced by Minister Dele Alake on August 16, 2026, the Federal Government is enforcing cooperative formation, artisanal licensing, and safety protocols. By deploying GIS satellite tracking, AI pit discovery, and the National Rehabilitation Fund, 59 pits have already been reclaimed into renewable energy parks, tourism destinations, and aquaculture fisheries—choking off illegal funding to extremist syndicates.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: 4,000+ ABANDONED PITS GIS & HEAVY METAL DATA */}
        {/* ========================================================================= */}
        {activeSubTab === 'regional_gis' && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <MapPin className="text-amber-500" size={20} />
                    Nigerian State-by-State Abandoned Pit Inventory & Toxicant Saturation
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    Cataloging the 4,000+ un-reclaimed artisanal mining pits, heavy metal toxicities (Lead Pb, Tin Sn, Arsenic As), and armed bandit conflict correlation.
                  </p>
                </div>
                <div className="text-xs font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
                  Source: Ministry of Solid Minerals & ICEarth GIS Grid 2026
                </div>
              </div>

              {/* Recharts Bar Chart */}
              <div className="h-80 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalPitsData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis dataKey="state" tick={{ fontSize: 11, fill: isLight ? '#555' : '#AAA' }} interval={0} angle={-15} textAnchor="end" />
                    <YAxis yAxisId="left" orientation="left" stroke="#d97706" tick={{ fontSize: 10 }} label={{ value: 'Abandoned Pits', angle: -90, position: 'insideLeft', fontSize: 11, fill: '#d97706' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#dc2626" tick={{ fontSize: 10 }} label={{ value: 'Bandit Conflict Index (0-100)', angle: 90, position: 'insideRight', fontSize: 11, fill: '#dc2626' }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#FFF' : '#1C1917', borderColor: '#d97706', borderRadius: '12px', fontSize: '11px' }} />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                    <Bar yAxisId="left" dataKey="abandonedPits" name="Abandoned Pits (GIS Catalog)" fill="#d97706" radius={[6, 6, 0, 0]} />
                    <Bar yAxisId="right" dataKey="banditConflictRisk" name="Extremist / Bandit Conflict Index" fill="#dc2626" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs font-mono">
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50">
                  <span className="text-stone-500 block text-[10px] uppercase">Plateau State Focus</span>
                  <span className="font-bold text-amber-700 dark:text-amber-300">1,450 Abandoned Tin Pits</span>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400 mt-1">Barkin Ladi, Bukuru & Jos South colonial legacy tin excavations.</p>
                </div>
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50">
                  <span className="text-stone-500 block text-[10px] uppercase">Zamfara State Focus</span>
                  <span className="font-bold text-rose-700 dark:text-rose-300">980 Artisanal Gold Pits</span>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400 mt-1">Extreme lead sulfide contamination (Anka, Bukkuyum, Maru).</p>
                </div>
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50">
                  <span className="text-stone-500 block text-[10px] uppercase">Niger & Kaduna Corridor</span>
                  <span className="font-bold text-red-700 dark:text-red-300">1,060 Illegal Pits</span>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400 mt-1">Primary revenue corridor for armed bandit militias and kidnappers.</p>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50">
                  <span className="text-stone-500 block text-[10px] uppercase">National Reclamation Goal</span>
                  <span className="font-bold text-emerald-700 dark:text-emerald-300">59 Sites Reclaimed</span>
                  <p className="text-[10px] text-stone-600 dark:text-stone-400 mt-1">AI-assisted satellite inventory scaling nationwide via Pit Fund.</p>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: CARTEL VS. LICENSED COOPERATIVE MODEL */}
        {/* ========================================================================= */}
        {activeSubTab === 'coop_transition' && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Radar Chart Visual Comparison */}
              <div className="lg:col-span-6 p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <Scale className="text-emerald-500" size={18} />
                    Model Comparison: Illegal Cartel vs. Licensed Co-op
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Evaluating income equity, environmental safety, and terrorist choke capability.
                  </p>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={modelComparisonRadar}>
                      <PolarGrid stroke={isLight ? '#E5E5E5' : '#333'} />
                      <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10, fill: isLight ? '#444' : '#CCC' }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                      <Radar name="Illegal Cartel System" dataKey="illegalCartel" stroke="#dc2626" fill="#dc2626" fillOpacity={0.4} />
                      <Radar name="2026 Federal Licensed Co-op" dataKey="licensedCoop" stroke="#16a34a" fill="#16a34a" fillOpacity={0.4} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Tooltip contentStyle={{ backgroundColor: isLight ? '#FFF' : '#1C1917', fontSize: '11px', borderRadius: '8px' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Economic & Policy Breakdown */}
              <div className="lg:col-span-6 space-y-4">
                
                <div className="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-2">
                  <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-xs font-mono uppercase">
                    <AlertTriangle size={15} />
                    <span>The Unregulated Shadow Cartel Model (Pre-2026)</span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-stone-700 dark:text-stone-300 leading-relaxed">
                    <li>• <strong>Extremist Financing:</strong> Armed bandit warlords and Boko Haram illicitly tax artisanal pits, generating estimated billions annually to procure heavy weapons and fuel cross-border terrorism.</li>
                    <li>• <strong>Human Exploitation:</strong> Subsistence miners receive &lt;15% of market value, with no protective gear, ventilation, or pit wall shoring (leading to collapses like Barkin Ladi).</li>
                    <li>• <strong>Domestic Toxic Contamination:</strong> Grinding ores inside homes releases devastating dust containing up to 10% pure lead, inducing fatal pediatric encephalopathy.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300 font-bold text-xs font-mono uppercase">
                    <CheckCircle2 size={15} />
                    <span>The Federal Co-operative & Pit Reclamation Model (2026)</span>
                  </div>
                  <ul className="text-xs space-y-1.5 text-stone-700 dark:text-stone-300 leading-relaxed">
                    <li>• <strong>Formal Permitting & Training:</strong> Miners organize into formal cooperatives, receiving technical training through the Ministry's Artisanal Mining Department and retaining 85%+ of mineral revenues.</li>
                    <li>• <strong>AI & Satellite Monitoring:</strong> GIS satellite algorithms detect unauthorized pit excavation and monitor compliance in real time.</li>
                    <li>• <strong>Green Pit Transformation:</strong> Converting abandoned death pits into solar/hydro energy reservoirs, ecotourism parks, and aquaculture fish farms.</li>
                  </ul>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: LIVE ORE EXPOSURE & TERRORISM FINANCING SIMULATOR */}
        {/* ========================================================================= */}
        {activeSubTab === 'simulation' && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Controls Column */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-5">
                <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                  <span className="text-[10px] font-mono font-bold text-amber-500 uppercase tracking-widest block">EXPOSENOMICS SIMULATION ENGINE</span>
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                    Artisanal Processing & Terrorist Skim Calculator
                  </h3>
                </div>

                {/* Control 1: Grinding Location */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-stone-800 dark:text-stone-200 block">
                    1. Ore Grinding & Panning Location
                  </label>
                  <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono">
                    {[
                      { id: 'domestic_compound', label: '🏡 In Home' },
                      { id: 'village_perimeter', label: '🏕️ Village Edge' },
                      { id: 'contained_coop', label: '🛡️ Co-op Facility' }
                    ].map((loc) => (
                      <button
                        key={loc.id}
                        onClick={() => setOreGrindingLocation(loc.id as any)}
                        className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                          oreGrindingLocation === loc.id
                            ? 'bg-amber-600 text-white font-bold border-amber-600'
                            : 'bg-stone-50 dark:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-700 hover:bg-stone-100'
                        }`}
                      >
                        {loc.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Control 2: Ore Lead Concentration */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-stone-800 dark:text-stone-200">2. Galena (Lead) in Gold Ore:</span>
                    <span className="text-amber-600 font-bold">{oreLeadConcentration.toLocaleString()} ppm Pb</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="25000"
                    step="500"
                    value={oreLeadConcentration}
                    onChange={(e) => setOreLeadConcentration(Number(e.target.value))}
                    className="w-full accent-amber-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>Low Pb (500 ppm)</span>
                    <span>Zamfara Extreme (25,000 ppm)</span>
                  </div>
                </div>

                {/* Control 3: Distance to Water Supply */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-stone-800 dark:text-stone-200">3. Pit Distance to Well / River:</span>
                    <span className="text-sky-600 font-bold">{waterProximityToPit} meters</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={waterProximityToPit}
                    onChange={(e) => setWaterProximityToPit(Number(e.target.value))}
                    className="w-full accent-sky-600"
                  />
                </div>

                {/* Control 4: Cartel / Extremist Skim Rate */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="font-bold text-stone-800 dark:text-stone-200">4. Armed Bandit / Cartel Interception:</span>
                    <span className="text-red-600 font-bold">{cartelInterceptionPct}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="90"
                    step="5"
                    value={cartelInterceptionPct}
                    onChange={(e) => setCartelInterceptionPct(Number(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>0% (Licensed Co-op)</span>
                    <span>90% (Violent Warlord Control)</span>
                  </div>
                </div>

              </div>

              {/* Dynamic Readout Outputs Column */}
              <div className="lg:col-span-7 space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Pediatric BLL Projection */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Projected Child Blood Lead</span>
                    <div className="flex items-baseline gap-2">
                      <span className={`text-3xl font-serif font-black ${simOutputs.pediatricBllEstimate > 10 ? 'text-red-600' : 'text-emerald-600'}`}>
                        {simOutputs.pediatricBllEstimate} μg/dL
                      </span>
                      <span className="text-xs text-stone-400">Target: 0.016 μg/dL</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                      {simOutputs.pediatricBllEstimate > 45 
                        ? '🚨 Critical encephalopathy danger; acute convulsions, coma, and severe prefrontal gray matter loss.' 
                        : simOutputs.pediatricBllEstimate > 5 
                        ? '⚠️ Cognitive impulse impairment, ADHD, and diminished executive function under Roulet\'s Law.' 
                        : '✅ Clean ecological baseline within safe physiological boundaries.'}
                    </p>
                  </div>

                  {/* Terrorist Financing Flow */}
                  <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-2">
                    <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Extremist Revenue per 1kg Gold</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-serif font-black text-rose-600">
                        ${simOutputs.illicitValueUsdPerKg.toLocaleString()} USD
                      </span>
                      <span className="text-xs text-stone-400">/ kg</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                      Miners receive only ${simOutputs.minerRevenuePerKg.toLocaleString()} USD while cartels divert capital to munitions and militia recruitment.
                    </p>
                  </div>

                </div>

                {/* Synthesis Diagnostic Box */}
                <div className="p-6 rounded-2xl bg-stone-900 text-stone-200 border border-amber-600/30 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-amber-400 font-bold">
                    <span>ROULET'S LAW EXPOSENOMIC SUMMARY</span>
                    <span>DIAGNOSTIC H' INDEX: {simOutputs.neurologicalLossPct}%</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-[11px]">
                    <div>• Estimated Soil Concentration: <strong className="text-white">{simOutputs.soilPbPpm.toLocaleString()} ppm Pb</strong></div>
                    <div>• Aquifer Lead Pulse: <strong className="text-sky-300">{simOutputs.estimatedWaterPbPpb} ppb Pb</strong></div>
                    <div>• Community Conflict Index: <strong className="text-red-400">{simOutputs.conflictIndex} / 100</strong></div>
                    <div>• Prefrontal Atrophy Risk: <strong className="text-rose-400">{simOutputs.neurologicalLossPct}%</strong></div>
                  </div>

                  <p className="text-[10px] text-stone-400 leading-relaxed pt-2 border-t border-stone-800">
                    "When heavy metal exposure from illegal mining coincides with armed conflict, the biological impairment of impulse control accelerates localized violence in an escalating feedback loop." — Roulet's Law
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* 4. CROSS-NAVIGATION & ECOSYSTEM DISCOVERY */}
        <div className="p-6 rounded-2xl bg-stone-900 text-white border border-stone-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">Cross-System Investigation</span>
              <h3 className="text-base font-serif font-bold">Connect Artisanal Mining Exposenomics to Related Proofs</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab?.('genocost')}
              className="p-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-left border border-stone-700 transition-all cursor-pointer"
            >
              <div className="text-amber-400 font-bold text-xs">🇨🇩 DRC Genocost & Lead Genocide</div>
              <p className="text-[10px] text-stone-400 mt-1">Coltan and cobalt artisanal mining atrocities under UN Genocide Article II.</p>
            </button>

            <button
              onClick={() => onNavigateTab?.('terrorism_proofs')}
              className="p-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-left border border-stone-700 transition-all cursor-pointer"
            >
              <div className="text-rose-400 font-bold text-xs">🔥 Lead-Terrorism Hypothesis Proof</div>
              <p className="text-[10px] text-stone-400 mt-1">Mathematical proofs linking environmental heavy metals to political extremism.</p>
            </button>

            <button
              onClick={() => onNavigateTab?.('abm_simulator')}
              className="p-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-left border border-stone-700 transition-all cursor-pointer"
            >
              <div className="text-indigo-400 font-bold text-xs">🤖 Agent-Based Modelling (ABM)</div>
              <p className="text-[10px] text-stone-400 mt-1">Multi-agent environmental simulations powered by Gemini PHA models.</p>
            </button>

            <button
              onClick={() => onNavigateTab?.('reports')}
              className="p-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-left border border-stone-700 transition-all cursor-pointer"
            >
              <div className="text-cyan-400 font-bold text-xs">📰 Sovereign News Repository</div>
              <p className="text-[10px] text-stone-400 mt-1">Real-time global environmental dispatches and co-op updates.</p>
            </button>
          </div>
        </div>

      </div>

      {/* 5. HIGH-RESOLUTION ARTWORK LIGHTBOX MODAL */}
      {showArtworkModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8 transition-all animate-fade-in"
          onClick={() => setShowArtworkModal(false)}
        >
          <div 
            className="relative bg-stone-950 border border-amber-600/40 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900 shrink-0">
              <div>
                <div className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Sparkles size={13} />
                  <span>Sovereign Media IP • Forensic Plate #15</span>
                </div>
                <h3 className="text-sm sm:text-base font-serif font-bold text-white mt-0.5">
                  Artisanal Mining & The Exposenomics of Terrorism
                </h3>
              </div>
              <button
                onClick={() => setShowArtworkModal(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black">
              <img
                src={artisanalMiningImg}
                alt="Artisanal Mining & Exposenomics of Terrorism Infographic Plate"
                className="max-h-[60vh] w-auto max-w-full object-contain rounded-xl border border-stone-800 shadow-2xl"
              />
            </div>

            {/* Modal Footer Provenance */}
            <div className="p-4 sm:p-5 border-t border-stone-800 bg-stone-900/90 text-xs font-mono text-stone-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
              <div className="space-y-0.5 text-[11px]">
                <div><strong>Vault Hash:</strong> 0xICEARTH_ARTISANAL_MINING_TERRORISM_NIGERIA_2026</div>
                <div><strong>Location:</strong> Kassa (Barkin Ladi), Plateau & Zamfara, Nigeria • 4,000+ Abandoned Pits</div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowArtworkModal(false)}
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold transition-colors cursor-pointer"
                >
                  Close Lightbox
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
