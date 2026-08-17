import React, { useState, useMemo } from 'react';
import rouletsLawMiningImg from '../assets/images/roulets_law_mining_1786944208391.jpg';
import rouletsLawSahelImg from '../assets/images/roulets_law_four_variables_sahel_lithium_1786946853842.jpg';
import osunGoldDynastyImg from '../assets/images/osun_gold_dynasty_inequity_sahel_1786948468266.jpg';
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
  CheckCircle2,
  BookOpen,
  DollarSign,
  Droplets,
  Atom,
  AlertOctagon,
  ArrowRight,
  Download,
  Share2,
  BatteryCharging,
  Car,
  HeartCrack,
  Network,
  Crown,
  Building2,
  Briefcase,
  TrendingUp,
  Percent
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
  const [activeSubTab, setActiveSubTab] = useState<
    'deep_history' | 'sahel_lithium' | 'dynastic_relativity' | 'illicit_flows' | 'toxic_pathways' | 'forensic_audit' | 'regional_gis' | 'coop_transition' | 'simulation'
  >('deep_history');
  
  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);
  const [modalArtworkView, setModalArtworkView] = useState<'sahel_four_variables' | 'deep_time_plate' | 'osun_dynasty_plate'>('sahel_four_variables');
  const [modalTab, setModalTab] = useState<'provenance' | 'history' | 'sahel_lithium' | 'dynastic_relativity' | 'flows' | 'toxicology' | 'forensics'>('provenance');

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

  // Sahel Lithium & Armed Group Exploitation Matrix (The Conversation 2026 Study)
  const sahelCountriesData = [
    { country: 'Burkina Faso', lithiumRisk: 95, informalPct: 90, insurgentInfluence: 92, govOversight: 18, keyThreats: 'Jihadist networks tax informal extraction directly to fund military assaults & weapons' },
    { country: 'Mali', lithiumRisk: 92, informalPct: 80, insurgentInfluence: 90, govOversight: 25, keyThreats: 'Armed groups embedded in gold trade adapted extortion models to lithium concessions' },
    { country: 'Nigeria', lithiumRisk: 88, informalPct: 85, insurgentInfluence: 78, govOversight: 30, keyThreats: 'Boko Haram & ISWAP transit corridor taxation; criminal gang protection rackets' },
    { country: 'Niger', lithiumRisk: 82, informalPct: 75, insurgentInfluence: 70, govOversight: 32, keyThreats: 'Post-2023 coup border breakdown; gold/arms trafficking corridors repurposed for lithium' },
    { country: 'Chad', lithiumRisk: 76, informalPct: 70, insurgentInfluence: 65, govOversight: 28, keyThreats: 'Systemic corruption & trans-Saharan smuggling networks moving unrefined rock' }
  ];

  const sahelGrowthProjection = [
    { year: '2022', tonnesMined: 15000, insurgentSkimUsdM: 18 },
    { year: '2024', tonnesMined: 32000, insurgentSkimUsdM: 45 },
    { year: '2026', tonnesMined: 40000, insurgentSkimUsdM: 65 },
    { year: '2028 (Est.)', tonnesMined: 220000, insurgentSkimUsdM: 320 },
    { year: '2030 (Proj.)', tonnesMined: 500000, insurgentSkimUsdM: 750 }
  ];

  // Osun State Dynastic Private Equity & Gold Relativity (Business Insider Africa August 17, 2026)
  const osunGoldProductionShare = [
    { name: 'Osun State (Ilesha Schist Belt)', sharePct: 42.56, keyMine: 'Segilola Gold Mine (91,910 oz/yr)', primaryHolder: 'Private Equity & State Shareholding' },
    { name: 'Niger State', sharePct: 27.80, keyMine: 'Shiroro & Gurara Gold Pits', primaryHolder: 'Artisanal & Informal Diggers' },
    { name: 'Kebbi / Zamfara', sharePct: 18.20, keyMine: 'Anka & Maru Gold Fields', primaryHolder: 'High-Lead Galena Domestic Panning' },
    { name: 'Kaduna / Others', sharePct: 11.44, keyMine: 'Birnin Gwari Gold Belts', primaryHolder: 'Conflict & Bandit Infiltrated Pits' }
  ];

  const wealthInequityMetrics = [
    { metric: 'Pacific Energy Infrastructure Portfolio', dynasticValue: '$3.4 Billion ($1.4B Omotosho/Olorunsogo + $2B Ajebamidele)', groundLevelArtisanal: '$0.85 – $2.10 daily subsistence wage per informal miner' },
    { metric: 'Power Generation Assets Controlled', dynasticValue: '1,920 Megawatts (335MW + 335MW + 1,250MW)', groundLevelArtisanal: '0 MW (Rural mining camps rely on firewood & toxic kerosene smoke)' },
    { metric: 'Annual Segilola Commercial Gold Yield', dynasticValue: '91,910 Ounces (~$230M USD annual gross output)', groundLevelArtisanal: '<0.05 oz/year retained by artisanal miners after cartel deductions' },
    { metric: 'Political Executive & Judicial Authority', dynasticValue: 'Direct State Governorship (Osun State Re-Election 50.8% Vote)', groundLevelArtisanal: 'Zero legal representation, criminalized informal status & eviction risk' },
    { metric: 'Higher Education & Private Assets', dynasticValue: 'Adeleke University & Springtime Development Foundation', groundLevelArtisanal: '74% pediatric school dropout rate in toxic gold panning districts' }
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
              Federal Ministry of Solid Minerals 2026 Strategy
            </span>
            <span className="px-3 py-1 bg-stone-800 text-stone-300 border border-stone-700 rounded-full font-mono text-[11px]">
              Roulet's Law Deep-Time Exposenomics
            </span>
          </div>

          {/* Main Title & Thesis */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              <Sparkles size={14} />
              <span>Sovereign Media IP • Forensic Plate #15</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-white">
              Artisanal Mining & The Exposenomics of Terrorism
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 max-w-5xl leading-relaxed font-sans font-light">
              From primordial primate stone selection and the dawn of anthropogenic weaponry to unregulated excavations worldwide: How illegal artisanal gold and tin mining represents the <strong className="text-amber-300 font-semibold">worst economics in human history</strong>—poisoning drinking water, food supplies, and families while generating billions in shadow revenues that fund <strong className="text-red-400 font-semibold">Boko Haram, ISWAP, and regional banditry</strong> in Nigeria, alongside the 2026 Federal Strategy to license cooperatives and reclaim 4,000+ abandoned death pits.
            </p>
          </div>

          {/* Source Attribution & Official Quote Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-amber-600/30 backdrop-blur-md space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Landmark size={16} className="text-amber-400 shrink-0" />
                <span className="font-bold text-amber-200">Official Federal Government Statement:</span>
                <span className="text-stone-300">Minister of Solid Minerals Development, <strong>Dele Alake</strong> (via Lara Owoeye-Wise, Special Assistant on Media)</span>
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
              { label: 'Abandoned Mine Pits', val: '4,000+', desc: 'Legacy hazardous death pits across Nigeria', icon: AlertTriangle, color: 'text-amber-400' },
              { label: 'Barkin Ladi Casualties', val: '7 Dead', desc: 'Kassa tin pit collapse (August 2026)', icon: Skull, color: 'text-red-400' },
              { label: 'Zamfara Pediatric Toll', val: '400+ Dead', desc: 'Children killed by lead-gold ore dust', icon: Skull, color: 'text-rose-400' },
              { label: 'Pits Rehabilitated', val: '59 Sites', desc: 'GIS satellite & AI mapping active', icon: Sprout, color: 'text-emerald-400' },
              { label: 'Illicit Mineral Shadow Trade', val: '$3.5B+ / yr', desc: 'Funding Boko Haram & banditry', icon: Coins, color: 'text-amber-300' },
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
              { id: 'deep_history', label: '🏛️ Deep History & Metallurgy', icon: Pickaxe },
              { id: 'sahel_lithium', label: '⚡ Sahel Lithium & Roulet\'s Law', icon: BatteryCharging },
              { id: 'dynastic_relativity', label: '👑 Dynastic State Capture & Wealth Relativity', icon: Crown },
              { id: 'illicit_flows', label: '💸 Illicit Financial Flows', icon: DollarSign },
              { id: 'toxic_pathways', label: '☠️ Toxic Exposure Pathways', icon: Skull },
              { id: 'forensic_audit', label: '🔍 Forensic Investigation', icon: Search },
              { id: 'regional_gis', label: '🗺️ 4,000+ Pits GIS Map', icon: MapPin },
              { id: 'coop_transition', label: '⚖️ Cartel vs. Licensed Co-op', icon: Scale },
              { id: 'simulation', label: '🧪 Live Ore Exposure Simulator', icon: Cpu }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
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
        {/* TAB 1: DEEP HISTORY & PRIMATE WEAPONRY GENESIS */}
        {/* ========================================================================= */}
        {activeSubTab === 'deep_history' && (
          <div className="space-y-8 animate-fade-in">

            {/* ROULET'S LAW FORENSIC FORMULA HERO CARD */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/80 border-2 border-amber-500/40 text-stone-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/30 pb-4">
                  <div className="flex items-center gap-2">
                    <Atom size={20} className="text-amber-400 animate-spin" style={{ animationDuration: '12s' }} />
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                      Fundamental Exposenomics Equation • Roulet's Law
                    </span>
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 bg-amber-900/40 border border-amber-500/40 text-amber-200 rounded-full">
                    Anthropogenic Extraction Entropy
                  </span>
                </div>

                {/* The Core Mathematical Formulation */}
                <div className="p-6 rounded-2xl bg-black/80 border border-amber-600/50 text-center space-y-3 shadow-inner">
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                    The Universal Law of Extraction & Societal Collapse
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-black text-amber-300 tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-2">
                    <span className="text-amber-300 bg-amber-950/60 px-3 py-1 rounded-xl border border-amber-500/40">Perturbation</span>
                    <span className="text-stone-400">×</span>
                    <span className="text-orange-300 bg-orange-950/60 px-3 py-1 rounded-xl border border-orange-500/40">Uncertainty</span>
                    <span className="text-amber-400 font-sans text-2xl sm:text-3xl">=</span>
                    <span className="text-red-400 bg-red-950/60 px-3 py-1 rounded-xl border border-red-500/40">Chaos</span>
                    <span className="text-stone-400">×</span>
                    <span className="text-rose-400 bg-rose-950/60 px-3 py-1 rounded-xl border border-rose-500/40">Relativity</span>
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-stone-300">
                    <strong className="text-white">P</strong> (Deep-Time Environmental Shock) × <strong className="text-white">U</strong> (Government Regulatory Void) = <strong className="text-white">C</strong> (Mass Poisoning & Terrorism) × <strong className="text-white">R</strong> (Global Conflict & Inequity)
                  </div>
                </div>

                {/* 4 Interactive Variable Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  
                  {/* P: Perturbation */}
                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/40 space-y-2">
                    <div className="flex items-center justify-between text-amber-400">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">P • Perturbation</span>
                      <Pickaxe size={16} />
                    </div>
                    <div className="text-xs font-bold text-amber-200 font-serif">
                      Since Stone Age to Zamfara
                    </div>
                    <p className="text-[11px] text-stone-300 leading-relaxed">
                      Deep-time human extraction shock: Lower Paleolithic flint/obsidian knapping for projectile weapons, Chalcolithic (Copper Age) lead/copper roasting, and modern uncontrolled gold/tin pit excavations.
                    </p>
                  </div>

                  {/* U: Uncertainty */}
                  <div className="p-4 rounded-2xl bg-orange-950/30 border border-orange-600/40 space-y-2">
                    <div className="flex items-center justify-between text-orange-400">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">U • Uncertainty</span>
                      <Landmark size={16} />
                    </div>
                    <div className="text-xs font-bold text-orange-200 font-serif">
                      Government & Policy Void
                    </div>
                    <p className="text-[11px] text-stone-300 leading-relaxed">
                      4,000+ unmonitored abandoned death pits, absent safety regulation, corruption, lack of legal cooperative formalization, and failure to safeguard vulnerable artisanal mining communities.
                    </p>
                  </div>

                  {/* C: Chaos */}
                  <div className="p-4 rounded-2xl bg-red-950/30 border border-red-600/40 space-y-2">
                    <div className="flex items-center justify-between text-red-400">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">C • Chaos</span>
                      <Skull size={16} />
                    </div>
                    <div className="text-xs font-bold text-red-200 font-serif">
                      Mass Poisoning & Terrorism
                    </div>
                    <p className="text-[11px] text-stone-300 leading-relaxed">
                      Acute pediatric lead encephalopathy (400+ infant deaths in Zamfara), catastrophic pit collapses (Barkin Ladi), armed banditry, and shadow mineral laundering funding Boko Haram and ISWAP.
                    </p>
                  </div>

                  {/* R: Relativity */}
                  <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-600/40 space-y-2">
                    <div className="flex items-center justify-between text-rose-400">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider">R • Relativity</span>
                      <Globe size={16} />
                    </div>
                    <div className="text-xs font-bold text-rose-200 font-serif">
                      Global Conflict & Inequity
                    </div>
                    <p className="text-[11px] text-stone-300 leading-relaxed">
                      Interconnected international commodities markets where wealthy consumer nations benefit from clean tech and jewelry while upstream origin nations suffer ecocide, poverty, and armed instability.
                    </p>
                  </div>

                </div>

              </div>
            </div>
            
            {/* Visual Plate Hero Preview Banner */}
            <div className="rounded-2xl overflow-hidden border border-amber-700/30 bg-black shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div 
                className="lg:col-span-7 relative group cursor-pointer overflow-hidden flex items-center justify-center bg-stone-950"
                onClick={() => setShowArtworkModal(true)}
              >
                <img
                  src={rouletsLawMiningImg}
                  alt="Artisanal Mining & Exposenomics of Terrorism Infographic Plate"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-black/70 px-2 py-0.5 rounded border border-amber-500/30">
                      FORENSIC PLATE #15 • CRYPTOGRAPHIC PROVENANCE
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif">
                      Roulet's Law: Deep-Time Artisanal Mining & The Exposenomics of Terrorism
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
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">Deep History & Anthropogenic Genesis</span>
                    <span className="text-[10px] font-mono text-stone-400">Roulet's Law Formulation</span>
                  </div>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>1. The Oldest Anthropogenic Industry After Fire:</strong> Artisanal mining began during the Lower Paleolithic when early hominids selected stones with specific conchoidal fracturing properties (flint, obsidian, quartzite, basalt) to ignite fire, scrape hides, and fashion projectile spearheads. This extraction of geological materials initiated physical territorial aggression and early mineral toxicity.
                  </p>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>2. The Chalcolithic & Toxic Metallurgy:</strong> As hominids graduated from stone knapping to smelting copper and roasting heavy sulfide ores during the Copper Age—galena (lead sulfide), cinnabar (mercury sulfide), and chalcopyrite—smelting pits became centers of acute neurotoxin volatilization, territorial fortification, chattel slavery, and warfare over mineral outcrops.
                  </p>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>3. The Modern Savagery Loop:</strong> In contemporary West Africa (Zamfara and Barkin Ladi), unregulated artisanal scavenging replicates this deep-time brutality: subsistence diggers risk life and limb for starvation earnings while armed insurgencies monopolize the mineral trade to purchase military weaponry.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800 flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveSubTab('illicit_flows')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Inspect Illicit Financial Flows</span>
                    <ArrowRight size={13} />
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

            {/* Deep History Evolutionary Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <Pickaxe size={20} />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                  1. Primates, Lithic Knapping & Weapons
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Long before the advent of agriculture, early hominids mapped geographic formations to seek stones with precise mechanical properties: flint for sparking fire, quartzite for butchering tools, and dense chert for clubs and projectile points. Mineral selection was humanity's very first industrial specialization—and the foundational spark of lethal intra-species combat.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold">
                  <Flame size={20} />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                  2. Metallurgical Warfare & Smelting Fallout
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  The Bronze and Iron Ages accelerated mineral exploitation into systemic warfare. Extraction of copper, tin, lead, and iron required deep underground excavations, timber deforestation for charcoal, and toxic smelting furnaces. Armies that controlled ore deposits conquered neighboring tribes, establishing an unbroken link between mineral monopolization and militarized conquest.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                  3. The 2026 Cooperative Reclamation Horizon
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Breaking this deep-time cycle requires replacing unregulated shadow extraction with sovereign, registered cooperatives. As formulated in the Federal Ministry of Solid Minerals 2026 blueprint, formalization provides miners with safe technical equipment, fair pricing, and environmental controls, ending millennia of exploitation and violent conflict.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB: SAHEL LITHIUM & ROULET'S LAW FOUR VARIABLES */}
        {/* ========================================================================= */}
        {activeSubTab === 'sahel_lithium' && (
          <div className="space-y-8 animate-fade-in">

            {/* Top Study Citation Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-950 via-stone-900 to-sky-950/70 border-2 border-sky-500/40 text-stone-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sky-500/30 pb-4">
                  <div className="flex items-center gap-2">
                    <BatteryCharging size={22} className="text-sky-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest">
                      Geopolitical Exposenomics Study • The Conversation (August 16, 2026)
                    </span>
                  </div>
                  <a
                    href="https://theconversation.com/lithium-in-the-sahel-how-armed-groups-are-exploiting-the-global-scramble-for-the-critical-mineral-287526"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3 py-1 bg-sky-900/40 hover:bg-sky-800/60 border border-sky-500/40 text-sky-200 rounded-full flex items-center gap-1.5 transition-all"
                  >
                    <span>Read Study on The Conversation</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-white leading-snug">
                    Lithium in the Sahel: How Armed Groups Are Exploiting the Global Scramble for the Critical Mineral
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans max-w-4xl">
                    Every electric vehicle, smartphone, and laptop battery begins with lithium—the critical mineral at the centre of the global transition to clean energy. Over <strong>40,000 tonnes</strong> are mined from African rock annually for international consumers, surging toward an estimated <strong>500,000 tonnes by 2030</strong>. Across the Sahel (Nigeria, Mali, Burkina Faso, Niger, and Chad), armed insurgent groups, Boko Haram, and ISWAP are hijacking this critical mineral boom through shadow taxation, protection rackets, and cross-border weapons trades enabled by weak state oversight.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Plate Hero: Four Variables of Roulet's Law */}
            <div className="rounded-2xl overflow-hidden border border-sky-700/30 bg-black shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div 
                className="lg:col-span-7 relative group cursor-pointer overflow-hidden min-h-[300px] sm:min-h-[380px]"
                onClick={() => {
                  setModalArtworkView('sahel_four_variables');
                  setShowArtworkModal(true);
                }}
              >
                <img
                  src={rouletsLawSahelImg}
                  alt="Roulet's Law Four Variables & Sahel Lithium Visual"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest bg-black/70 px-2 py-0.5 rounded border border-sky-500/30">
                      ROULET'S LAW • 4-VARIABLE UNIFIED EXPOSENOMICS EQUATION
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                      Perturbation × Uncertainty = Chaos × Relativity
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
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase">Beyond Physical Toxicity</span>
                    <span className="text-[10px] font-mono text-stone-400">Total Systemic Harm</span>
                  </div>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>The Extended Exposenomics Harm:</strong> Beyond the cellular perturbation of toxic heavy metals, Roulet's Law encompasses the holistic trauma inflicted upon humanity: systemic economic exploitation, chronic developmental disease, deep geopolitical inequity, and violent societal collapse.
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1.5 text-xs">
                    <div className="font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                      <Scale size={14} />
                      <span>The Clean Tech Paradox:</span>
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      Zero-emission electric vehicles and smartphones consumed in the Global North indirectly finance the weapons arsenals of Africa's deadliest terror syndicates when critical mineral supply chains lack sovereign cooperative protections.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800 flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setModalArtworkView('sahel_four_variables');
                      setShowArtworkModal(true);
                    }}
                    className="px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Inspect 4-Variable High-Res Plate</span>
                    <Eye size={13} />
                  </button>
                  <button
                    onClick={() => setActiveSubTab('illicit_flows')}
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-xl text-xs font-bold font-mono transition-all border border-stone-700 cursor-pointer"
                  >
                    Terrorist Flow Analysis &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Deep Breakdown of the Four Roulet's Law Variables */}
            <div className="space-y-4">
              <div className="border-b border-stone-300 dark:border-stone-800 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold block">
                  MATHEMATICAL & GEOPOLITICAL DECOMPOSITION
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white">
                  The Four Variables of Roulet's Law Applied to Sahel Critical Minerals
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* P: Perturbation */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border-2 border-amber-500/40 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                    <Pickaxe size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold">Variable 1</span>
                    <h4 className="text-base font-serif font-bold text-stone-900 dark:text-white">P • Perturbation</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Deep-Time Extraction Shocks</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Physical, cellular, and environmental trauma: from Lower Paleolithic flint knapping and Chalcolithic lead/copper smelting to domestic galena pulverization in Zamfara and open-trench artisanal lithium extraction.
                  </p>
                </div>

                {/* U: Uncertainty */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border-2 border-orange-500/40 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center font-bold">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold">Variable 2</span>
                    <h4 className="text-base font-serif font-bold text-stone-900 dark:text-white">U • Uncertainty</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Weak Governance & Policy Voids</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Institutional breakdown, 4,000+ unmonitored abandoned death pits, absent formal cooperative registration, porous borders post-coup (Niger), and lack of state security in remote extraction territories.
                  </p>
                </div>

                {/* C: Chaos */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border-2 border-red-500/40 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
                    <Skull size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-red-600 dark:text-red-400 font-bold">Variable 3</span>
                    <h4 className="text-base font-serif font-bold text-stone-900 dark:text-white">C • Chaos</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Mass Poisoning, Terror & Disease</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Pediatric encephalopathy (&gt;400 child deaths in Zamfara), catastrophic pit collapses (Barkin Ladi), chronic neurotoxic impairment, and shadow mineral taxation generating liquid cash for Boko Haram and ISWAP.
                  </p>
                </div>

                {/* R: Relativity */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border-2 border-sky-500/40 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                    <Globe size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold">Variable 4</span>
                    <h4 className="text-base font-serif font-bold text-stone-900 dark:text-white">R • Relativity</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Global Inequity & Social Collapse</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Extreme global disparity: wealthy consumer nations driving renewable transition and battery demand while upstream origin communities in the Sahel bear the severe burden of environmental ecocide and civil conflict.
                  </p>
                </div>

              </div>
            </div>

            {/* Sahel Countries Comparative Table & Vulnerability Risk */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-sky-500 uppercase tracking-widest font-bold block">
                    COUNTRY-BY-COUNTRY VULNERABILITY AUDIT (THE CONVERSATION 2026)
                  </span>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white">
                    Sahelian Lithium Exploitation & Terror Infiltration Risk
                  </h3>
                </div>
                <div className="text-xs font-mono text-stone-500">
                  Mali • Niger • Burkina Faso • Chad • Nigeria
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Country</th>
                      <th className="p-3">Lithium Threat Index</th>
                      <th className="p-3">Informal Mining Share</th>
                      <th className="p-3">Insurgent Control Risk</th>
                      <th className="p-3">Gov Oversight</th>
                      <th className="p-3">Primary Exploitation Vector</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800 text-stone-600 dark:text-stone-300">
                    {sahelCountriesData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50">
                        <td className="p-3 font-bold font-serif text-stone-900 dark:text-white">
                          {row.country}
                        </td>
                        <td className="p-3 font-mono">
                          <span className="px-2 py-0.5 rounded bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 font-bold">
                            {row.lithiumRisk}/100
                          </span>
                        </td>
                        <td className="p-3 font-mono">{row.informalPct}%</td>
                        <td className="p-3 font-mono text-red-500 font-semibold">{row.insurgentInfluence}/100</td>
                        <td className="p-3 font-mono text-stone-400">{row.govOversight}%</td>
                        <td className="p-3 font-sans text-stone-500 dark:text-stone-400 max-w-xs">{row.keyThreats}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Chart: Africa Lithium Extraction & Insurgent Skim Projections */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300">
                    African Rock Lithium Production (Tonnes) vs. Estimated Insurgent Shadow Revenue ($M USD)
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">2022–2030 Growth Surge</span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sahelGrowthProjection} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.2} />
                      <XAxis dataKey="year" stroke="#888" fontSize={11} />
                      <YAxis stroke="#888" fontSize={11} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1c1917',
                          borderColor: '#78350f',
                          borderRadius: '12px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="tonnesMined" name="Lithium Mined from Rock (Tonnes)" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="insurgentSkimUsdM" name="Insurgent & Bandit Skim ($M USD)" fill="#f43f5e" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* Three-Pillar Sovereign Governance Solution */}
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 text-stone-100 border border-amber-600/30 space-y-6">
              <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                    POLICY RECOMMENDATIONS
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    The 3 Pillars to Prevent Lithium Becoming the Next Blood Mineral
                  </h3>
                </div>
                <ShieldCheck size={24} className="text-emerald-400 shrink-0" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-emerald-400">1. Formalize Artisanal Mining</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Bring small-scale miners into registered cooperatives with legal protections, transparent pricing, fair contracts, and restored state authority over extraction perimeters.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-sky-400">2. Cross-Border Mineral Tracking</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Sahelian regional intelligence sharing to track mineral transport routes across porous corridors and interdict shadow mineral-for-weapons swaps.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400">3. Domestic Value-Add Processing</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Mandate domestic refining and battery component manufacturing within origin nations rather than exporting raw rock, retaining wealth and building robust institutional governance.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB: DYNASTIC STATE CAPTURE & WEALTH RELATIVITY */}
        {/* ========================================================================= */}
        {activeSubTab === 'dynastic_relativity' && (
          <div className="space-y-8 animate-fade-in">

            {/* Top Study Citation Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-stone-950 via-amber-950/80 to-stone-900 border-2 border-amber-500/40 text-stone-100 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/30 pb-4">
                  <div className="flex items-center gap-2">
                    <Crown size={22} className="text-amber-400 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                      Resource & Governance Relativity • Business Insider Africa (August 17, 2026)
                    </span>
                  </div>
                  <a
                    href="https://africa.businessinsider.com/local/lifestyle/nigerian-tycoon-deji-adelekes-brother-also-davidos-uncle-wins-second-term-as-governor/hgcnf25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono px-3 py-1 bg-amber-900/40 hover:bg-amber-800/60 border border-amber-500/40 text-amber-200 rounded-full flex items-center gap-1.5 transition-all"
                  >
                    <span>Read Investigation on Business Insider Africa</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-white leading-snug">
                    Private Equity, Dynastic State Capture & The Extreme Relativity of African Resource Wealth
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans max-w-4xl">
                    In Osun State—home to Nigeria's largest recorded gold production (42.56% of national output) and the multi-million-dollar Segilola commercial gold mine—the victory of incumbent Governor Ademola Adeleke reinforces the Adeleke family's multifaceted empire spanning private equity (Pacific Holdings / Pacific Energy's $3.4B+ power portfolio), higher education (Adeleke University), and global entertainment (Davido). While billionaire family conglomerates control executive government power at the source of mineral concessions, millions of surrounding citizens and subsistence artisanal miners live in extreme multi-dimensional poverty.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Plate Hero: Dynastic State Capture & Extreme Wealth Relativity */}
            <div className="rounded-2xl overflow-hidden border border-amber-700/30 bg-black shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div 
                className="lg:col-span-7 relative group cursor-pointer overflow-hidden min-h-[300px] sm:min-h-[400px]"
                onClick={() => {
                  setModalArtworkView('osun_dynasty_plate');
                  setShowArtworkModal(true);
                }}
              >
                <img
                  src={osunGoldDynastyImg}
                  alt="Osun Gold Dynasty & Resource Inequity Plate"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest bg-black/70 px-2 py-0.5 rounded border border-amber-500/30">
                      ROULET'S LAW • VARIABLE R (RELATIVITY OF RESOURCE CONTROL)
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                      The Asymmetry of Source Extraction: Dynastic Conglomerates vs. Ground-Level Poverty
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
                    <span className="text-xs font-mono font-bold text-amber-400 uppercase">Resource Inequity Index</span>
                    <span className="text-[10px] font-mono text-stone-400">Osun State / Segilola Belt</span>
                  </div>

                  <p className="text-xs leading-relaxed text-stone-300 font-sans">
                    <strong>Roulet's Law Relativity Thesis:</strong> The deepest structural trap of exposenomics is not simply chemical toxicity, but the extreme moral and economic relativity of wealth distribution. Private equity conglomerates wield direct political sovereignty and grid-level infrastructure, while the origin extraction workforce is left with environmental degradation, chronic lead exposure, and acute survival poverty.
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-900/90 border border-stone-800 space-y-1.5 text-xs">
                    <div className="font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                      <Building2 size={14} />
                      <span>The Tripartite Power Matrix:</span>
                    </div>
                    <p className="text-stone-300 text-[11px] leading-relaxed">
                      <strong>1. Capital:</strong> Billionaire Deji Adeleke's Pacific Holdings & 1,920MW Pacific Energy.<br />
                      <strong>2. Governance:</strong> Governor Ademola Adeleke's executive control over gold concessions & Segilola shares.<br />
                      <strong>3. Cultural Influence:</strong> Davido's global celebrity apparatus swaying electoral mobilization.
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800 flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      setModalArtworkView('osun_dynasty_plate');
                      setShowArtworkModal(true);
                    }}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold font-mono transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <span>Inspect Dynasty Relativity Plate</span>
                    <Eye size={13} />
                  </button>
                  <button
                    onClick={() => setActiveSubTab('sahel_lithium')}
                    className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-sky-300 rounded-xl text-xs font-bold font-mono transition-all border border-stone-700 cursor-pointer"
                  >
                    Sahel Lithium 4 Variables &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* Core Inequity Metrics & Structural Disparity Cards */}
            <div className="space-y-4">
              <div className="border-b border-stone-300 dark:border-stone-800 pb-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-bold block">
                  RESOURCE ASYMMETRY BREAKDOWN
                </span>
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white">
                  Osun State Gold Belt: Dynastic Private Equity vs. Ground-Level Realities
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Metric 1: Gold Concentration */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                    <Coins size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-600 dark:text-amber-400 font-bold">National Gold Epicentre</span>
                    <h4 className="text-2xl font-serif font-black text-stone-900 dark:text-white">42.56%</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Nigeria's Recorded Gold Yield</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Osun accounts for Nigeria's largest share of recorded gold production, anchored by the Ilesha Schist Belt and the commercial Segilola Mine (91,910 oz in 2025).
                  </p>
                </div>

                {/* Metric 2: Private Energy Valuations */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center font-bold">
                    <Zap size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-sky-600 dark:text-sky-400 font-bold">Private Energy Assets</span>
                    <h4 className="text-2xl font-serif font-black text-stone-900 dark:text-white">$3.4B+</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Pacific Energy Infrastructure</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Omotosho (335MW), Olorunsogo (335MW) valued at $1.4B, plus the $2B 1,250MW Ajebamidele mega-power station in Ondo State.
                  </p>
                </div>

                {/* Metric 3: State GDP vs Dynastic Wealth */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold">
                    <Landmark size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">State Economy Scale</span>
                    <h4 className="text-2xl font-serif font-black text-stone-900 dark:text-white">$5.7B</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Osun State GDP (₦2.3T)</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Despite massive mineral reserves, Osun ranks among Nigeria's smaller state economies, with a single private family conglomerate rivaling the entire public budget.
                  </p>
                </div>

                {/* Metric 4: Subsistence Miner Share */}
                <div className="p-5 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center font-bold">
                    <HeartCrack size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-red-600 dark:text-red-400 font-bold">Ground-Level Wage</span>
                    <h4 className="text-2xl font-serif font-black text-stone-900 dark:text-white">&lt;$2.00</h4>
                  </div>
                  <div className="text-xs font-mono text-stone-500 dark:text-stone-400">Daily Artisanal Income</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Subsistence artisanal miners digging without protective gear earn less than $2/day, bearing heavy metal toxicity while wealth is siphoned upwards.
                  </p>
                </div>

              </div>
            </div>

            {/* Deep Comparative Matrix: Dynastic Asset Control vs Artisanal Reality */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold block">
                    THE STRUCTURAL EXPOSENOMICS ASYMMETRY
                  </span>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-white">
                    Dynastic Conglomerate Control vs. Ground-Level Extraction Realities
                  </h3>
                </div>
                <div className="text-xs font-mono text-stone-500">
                  Pacific Holdings • Segilola Belt • Osun State Governance
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 font-mono uppercase text-[10px]">
                    <tr>
                      <th className="p-3">Sovereign Domain</th>
                      <th className="p-3">Dynastic Private Equity Concentration</th>
                      <th className="p-3">Ground-Level Subsistence Artisanal Reality</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800 text-stone-600 dark:text-stone-300">
                    {wealthInequityMetrics.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/50">
                        <td className="p-3 font-bold font-serif text-stone-900 dark:text-white">
                          {row.metric}
                        </td>
                        <td className="p-3 font-mono text-amber-600 dark:text-amber-400 font-semibold">
                          {row.dynasticValue}
                        </td>
                        <td className="p-3 font-sans text-stone-600 dark:text-stone-300">
                          {row.groundLevelArtisanal}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Chart: Nigeria Gold Production Distribution by State */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300">
                    Nigerian Recorded Gold Production by State (%) & Key Concessions
                  </span>
                  <span className="text-[10px] font-mono text-stone-400">National Mining Registry</span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={osunGoldProductionShare} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.2} />
                      <XAxis dataKey="name" stroke="#888" fontSize={11} />
                      <YAxis stroke="#888" fontSize={11} unit="%" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1c1917',
                          borderColor: '#d97706',
                          borderRadius: '12px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                      />
                      <Legend />
                      <Bar dataKey="sharePct" name="Share of National Gold Production (%)" fill="#d97706" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* Exposenomics Deep Policy Critique */}
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 text-stone-100 border border-amber-600/30 space-y-6">
              <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-bold block">
                    THE RELATIVITY PRINCIPLE IN AFRICAN EXPOSENOMICS
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white">
                    Why Source Wealth Fails to Alleviate Earth's Worst Multi-Dimensional Poverty
                  </h3>
                </div>
                <Scale size={24} className="text-amber-400 shrink-0" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400">1. State-Conglomerate Fusion</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    When private equity conglomerates and political families merge with state executive authority, mineral licensing approvals are expedited for elite interests while community royalty frameworks and healthcare oversight are neglected.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-sky-400">2. Enclave Resource Economies</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Industrial concessions like Segilola operate as high-security capital enclaves exporting unrefined bullion abroad, generating minimal domestic multiplier effects for the surrounding agrarian communities.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-400">3. Externalized Toxic Burdens</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Informal artisanal diggers who cannot access formal concessions work abandoned tailings and high-lead galena veins, absorbing the heavy metal body burdens, organ damage, and pediatric neurotoxicity of the resource extraction curse.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: ILLICIT FINANCIAL FLOWS */}
        {/* ========================================================================= */}
        {activeSubTab === 'illicit_flows' && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest font-bold block">FINANCIAL EXPOSENOMICS & ASYMMETRIC WARFARE</span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <DollarSign className="text-amber-500" size={22} />
                    Illicit Financial Flows: Shadow Mining to Terrorist Weapon Pipelines
                  </h3>
                </div>
                <div className="text-xs font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
                  Est. Annual Shadow Value: $3.5B+ USD
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed max-w-4xl">
                Unregulated artisanal gold, tin, and coltan extraction operates outside formal banking systems through informal value transfer networks (Hawala), physical couriers, and cross-border smuggling corridors. This shadow cash liquidity directly finances insurgent factions, armed bandits, and extremist terror networks across West Africa.
              </p>

              {/* Step-by-Step Flow Pipeline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs font-mono">
                    01
                  </div>
                  <h4 className="text-xs font-bold text-amber-900 dark:text-amber-200 font-mono uppercase">Subsistence Scavenging</h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Impoverished miners manually dig artisanal pits, receiving less than 10%–15% of spot market value in cash or food rations from local buyers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-500 text-white flex items-center justify-center font-bold text-xs font-mono">
                    02
                  </div>
                  <h4 className="text-xs font-bold text-red-900 dark:text-red-200 font-mono uppercase">Bandit Warlord Taxation</h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Armed bandit syndicates and militia cartels levy extortion taxes on mining pits, demanding access fees and confiscating high-grade ore at gunpoint.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold text-xs font-mono">
                    03
                  </div>
                  <h4 className="text-xs font-bold text-rose-900 dark:text-rose-200 font-mono uppercase">Laundering & Arms Trade</h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Illicit gold and cassiterite are smuggled through regional porous borders (Niger, Chad, Cameroon, Benin) and swapped for military rifles, RPGs, and ammunition.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-stone-900 text-white flex items-center justify-center font-bold text-xs font-mono">
                    04
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 font-mono uppercase">International Smelters</h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Unrefined gold is consolidated into international refineries, mixed with certified supplies, and laundered into global consumer electronics and jewelry markets.
                  </p>
                </div>

              </div>

              {/* Economic Disparity Box */}
              <div className="p-5 rounded-2xl bg-stone-900 text-stone-200 border border-amber-600/30 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-amber-400 font-bold">
                  <span>EXPOSENOMICS VALUE DISPARITY ANALYSIS (1 KG GOLD EQUIVALENT)</span>
                  <span>SPOT PRICE: ~$65,000 USD / KG</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px]">
                  <div>
                    <span className="text-stone-400 block">Subsistence Miner Share:</span>
                    <strong className="text-rose-400 text-sm">$6,500 – $9,750 (10%–15%)</strong>
                    <p className="text-[10px] text-stone-500 mt-0.5">Absorbs 100% of toxic lead/mercury burden & physical mortality risk.</p>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Armed Cartel / Terrorist Skim:</span>
                    <strong className="text-red-400 text-sm">$32,500 – $48,750 (50%–75%)</strong>
                    <p className="text-[10px] text-stone-500 mt-0.5">Purchases Kalashnikov rifles, rocket-propelled grenades, and night-vision optics.</p>
                  </div>
                  <div>
                    <span className="text-stone-400 block">International Smuggling Middlemen:</span>
                    <strong className="text-amber-300 text-sm">$9,750 – $19,500 (15%–30%)</strong>
                    <p className="text-[10px] text-stone-500 mt-0.5">Launders mineral provenance across international commodities hubs.</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: TOXIC EXPOSURE PATHWAYS */}
        {/* ========================================================================= */}
        {activeSubTab === 'toxic_pathways' && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-rose-500 uppercase tracking-widest font-bold block">CLINICAL TOXICOLOGY & BIO-PERSISTENCE</span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <Skull className="text-rose-500" size={22} />
                    Toxic Exposure Pathways: Heavy Metal Ingestion & Neurological Atrophy
                  </h3>
                </div>
                <div className="text-xs font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
                  Critical Toxicants: Galena (PbS), Mercury (Hg), Arsenic (As), Tin (Sn)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Pathway 1: Domestic Ore Crushing */}
                <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center font-bold text-xs font-mono">
                    01
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-serif">
                    Domestic Flour Mill Ore Pulverization
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    In the Zamfara crisis, gold-bearing quartz contained up to 10%–20% galena (lead sulfide). When artisanal miners brought rocks into residential family compounds and pulverized them in commercial flour mills, fine breathable dust contaminated sleeping mats, cooking pots, and soil with &gt;100,000 ppm lead.
                  </p>
                </div>

                {/* Pathway 2: Pediatric Hand-to-Mouth Ingestion */}
                <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs font-mono">
                    02
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-serif">
                    Pediatric Hand-to-Mouth Ingestion
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Infants and toddlers crawling on lead-dusted dirt floors absorb up to 50% of ingested lead (compared to 10% in adults) due to active calcium transport mechanisms. Blood lead levels (BLL) rapidly exceeded 100 μg/dL, causing acute cerebral edema, status epilepticus convulsions, and fatal encephalopathy in over 400 infants.
                  </p>
                </div>

                {/* Pathway 3: Mercury Amalgamation & Water Pollution */}
                <div className="p-5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs font-mono">
                    03
                  </div>
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-serif">
                    Mercury Vapor & Acid Mine Drainage
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Liquid elemental mercury (Hg) is mixed with crushed ore to create gold amalgams, then burned with blowtorches without retorts, releasing neurotoxic methylmercury vapors directly into maternal and infant respiratory systems. Unremediated pit tailings generate acid mine drainage, leaching lead and arsenic into local drinking wells.
                  </p>
                </div>

              </div>

              {/* Roulet's Law Neurological Perturbation Note */}
              <div className="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-300 font-bold text-xs font-mono uppercase">
                  <AlertOctagon size={16} />
                  <span>Roulet's Law: The Biological Acceleration of Impulsive Violence</span>
                </div>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  Lead (Pb²⁺) mimics calcium (Ca²⁺) across the blood-brain barrier, selectively degrading the prefrontal cortex and anterior cingulate cortex. Children who survive sublethal lead poisoning suffer permanent loss of executive impulse control, elevated aggression, and diminished cognitive inhibition. When whole cohorts of youth in artisanal mining zones grow up with severe lead encephalopathy, the neurochemical threshold for recruitment into violent banditry and insurgent militias drops drastically.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: FORENSIC INVESTIGATION & RADIO NIGERIA AUDIT */}
        {/* ========================================================================= */}
        {activeSubTab === 'forensic_audit' && (
          <div className="space-y-8 animate-fade-in">
            
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest font-bold block">OFFICIAL FORENSIC DISPATCH</span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <Search className="text-emerald-500" size={22} />
                    Forensic Investigation: Radio Nigeria Audit & Federal Reclamation Strategy
                  </h3>
                </div>
                <div className="text-xs font-mono text-stone-500 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg">
                  Published: August 16, 2026
                </div>
              </div>

              {/* Investigation Brief Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 dark:text-white font-bold text-sm font-serif">
                    <Skull className="text-red-500" size={16} />
                    <span>The Kassa (Barkin Ladi) Mine Pit Collapse Audit</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    On August 16, 2026, seven artisanal miners were killed instantly when an unsupported abandoned tin mine pit collapsed in Kassa, Barkin Ladi Local Government Area of Plateau State. Forensic analysis revealed zero geotechnical shoring, zero atmospheric gas monitoring, and extensive undercut waterlogging from seasonal rains. Minister Dele Alake confirmed the disaster was 100% preventable.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 dark:text-white font-bold text-sm font-serif">
                    <MapPin className="text-amber-500" size={16} />
                    <span>The 4,000+ Abandoned Pit Forensic Catalog</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Nigeria possesses over 4,000 un-reclaimed legacy pits spanning colonial tin excavations on the Jos Plateau to recent gold pits in Zamfara, Niger, and Kaduna. These excavations act as physical death traps for livestock and humans, breeding grounds for malaria vectors, and unsupervised access portals for illegal armed mining syndicates.
                  </p>
                </div>

              </div>

              {/* 2026 Federal 3-Pillar Solution */}
              <div className="p-6 rounded-2xl bg-stone-900 text-stone-200 border border-emerald-500/30 space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck size={16} />
                  <span>The 2026 Federal Government 3-Pillar Solution Architecture</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                    <strong className="text-emerald-300 block font-mono">Pillar 1: Mandatory Cooperatives</strong>
                    <p className="text-stone-400 text-[11px] leading-tight">
                      Miners must organize into registered cooperatives to access legal mineral titles, protective equipment, and direct market off-takers.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                    <strong className="text-amber-300 block font-mono">Pillar 2: AI & Satellite Surveillance</strong>
                    <p className="text-stone-400 text-[11px] leading-tight">
                      Deploying GIS Earth observation and machine learning models to detect illegal ground disturbances and real-time excavation clusters.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                    <strong className="text-sky-300 block font-mono">Pillar 3: National Mine Pit Reclamation</strong>
                    <p className="text-stone-400 text-[11px] leading-tight">
                      Funding the engineering conversion of dangerous pits into solar energy fields, municipal water reservoirs, and commercial aquaculture fisheries.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: 4,000+ ABANDONED PITS GIS & HEAVY METAL DATA */}
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
        {/* TAB 6: CARTEL VS. LICENSED COOPERATIVE MODEL */}
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
        {/* TAB 7: LIVE ORE EXPOSURE & TERRORISM FINANCING SIMULATOR */}
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
            className="relative bg-stone-950 border border-amber-600/40 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
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

            {/* Modal Sub-Tabs */}
            <div className="px-4 py-2 border-b border-stone-800 bg-stone-950 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { id: 'provenance', label: '🖼️ Image & Provenance' },
                  { id: 'sahel_lithium', label: '⚡ Sahel Lithium & 4 Variables' },
                  { id: 'dynastic_relativity', label: '👑 Dynastic State Capture' },
                  { id: 'history', label: '🏛️ Deep History' },
                  { id: 'flows', label: '💸 Illicit Financial Flows' },
                  { id: 'toxicology', label: '☠️ Toxic Pathways' },
                  { id: 'forensics', label: '🔍 Forensic Audit' }
                ].map((mTab) => (
                  <button
                    key={mTab.id}
                    onClick={() => setModalTab(mTab.id as any)}
                    className={`px-3 py-1 rounded-lg transition-colors cursor-pointer ${
                      modalTab === mTab.id
                        ? 'bg-amber-600 text-white font-bold'
                        : 'bg-stone-900 text-stone-400 hover:text-white hover:bg-stone-800'
                    }`}
                  >
                    {mTab.label}
                  </button>
                ))}
              </div>

              {/* Artwork Plate Toggle */}
              <div className="flex items-center gap-1 bg-stone-900 p-1 rounded-lg border border-stone-800">
                <button
                  onClick={() => setModalArtworkView('osun_dynasty_plate')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    modalArtworkView === 'osun_dynasty_plate'
                      ? 'bg-amber-600 text-white font-bold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Dynasty Relativity
                </button>
                <button
                  onClick={() => setModalArtworkView('sahel_four_variables')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    modalArtworkView === 'sahel_four_variables'
                      ? 'bg-sky-600 text-white font-bold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  4 Variables Plate
                </button>
                <button
                  onClick={() => setModalArtworkView('deep_time_plate')}
                  className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer ${
                    modalArtworkView === 'deep_time_plate'
                      ? 'bg-amber-600 text-white font-bold'
                      : 'text-stone-400 hover:text-white'
                  }`}
                >
                  Deep History Plate
                </button>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="flex-1 overflow-auto p-4 sm:p-6 bg-black text-stone-200">
              {modalTab === 'provenance' && (
                <div className="flex flex-col items-center justify-center space-y-4">
                  <img
                    src={
                      modalArtworkView === 'osun_dynasty_plate'
                        ? osunGoldDynastyImg
                        : modalArtworkView === 'sahel_four_variables'
                        ? rouletsLawSahelImg
                        : rouletsLawMiningImg
                    }
                    alt="Roulet's Law Artisanal Mining & Exposenomics Artwork"
                    className="max-h-[50vh] w-auto max-w-full object-contain rounded-xl border border-stone-800 shadow-2xl"
                  />
                  <div className="text-center max-w-2xl space-y-1">
                    <p className="text-xs text-amber-300 font-serif font-bold">
                      Roulet's Law: Perturbation × Uncertainty = Chaos × Relativity
                    </p>
                    <p className="text-xs text-stone-300 font-serif">
                      {modalArtworkView === 'osun_dynasty_plate'
                        ? "Dynastic state capture & resource relativity plate: contrasting multi-billion-dollar private equity power conglomerates (Pacific Energy) and political executive control with subsistence artisanal gold panning in the Ilesha Schist Belt and Segilola basin."
                        : modalArtworkView === 'sahel_four_variables'
                        ? "Comprehensive 4-variable exposenomics plate: Perturbation (deep-time lithic knapping & modern lithium extraction), Uncertainty (governance voids & 4,000+ pits), Chaos (toxic encephalopathy, disease & Boko Haram cash pipelines), and Relativity (Global North clean EV demand vs. Sahelian conflict)."
                        : "High-resolution visual forensic plate illustrating the cross-generational continuum from Stone Age flint knapping and Chalcolithic lead smelting to modern unregulated artisanal mining in Zamfara, pediatric encephalopathy, and global conflict financing."}
                    </p>
                    <p className="text-[10px] text-stone-500 font-mono">
                      Cryptographic Vault Verification: {modalArtworkView === 'osun_dynasty_plate' ? '0xICEARTH_OSUN_GOLD_DYNASTY_INEQUITY_2026' : '0xICEARTH_ROULETS_LAW_SAHEL_LITHIUM_TERRORISM_2026'}
                    </p>
                  </div>
                </div>
              )}

              {modalTab === 'dynastic_relativity' && (
                <div className="space-y-4 max-w-3xl mx-auto text-xs leading-relaxed font-sans">
                  <h4 className="text-sm font-serif font-bold text-amber-400">Dynastic State Capture & The Relativity of African Poverty</h4>
                  <p>
                    Published in <em>Business Insider Africa</em> (August 17, 2026), investigation into the Osun State gubernatorial race demonstrates the consolidation of private equity conglomerates directly ruling government at the source of mineral concessions.
                  </p>
                  <p>
                    The Adeleke family's business empire—spanning Pacific Holdings, Pacific Energy ($3.4B+ in 1,920MW power generation), higher education (Adeleke University), and global entertainment (Davido)—exercises direct executive oversight over the Ilesha Schist Belt and the Segilola commercial gold mine (91,910 oz/yr, representing 42.56% of national gold output).
                  </p>
                  <p>
                    While state leadership courts international mining capital at the Mining Indaba in Cape Town, the surrounding rural population remains trapped in severe multi-dimensional poverty, and informal artisanal miners absorb the acute toxic risks of unmonitored extraction without public safety nets.
                  </p>
                </div>
              )}

              {modalTab === 'sahel_lithium' && (
                <div className="space-y-4 max-w-3xl mx-auto text-xs leading-relaxed font-sans">
                  <h4 className="text-sm font-serif font-bold text-sky-400">Sahel Lithium Scramble & Geopolitical Entanglement</h4>
                  <p>
                    Published in <em>The Conversation</em> (August 16, 2026), research across Nigeria, Mali, Burkina Faso, Niger, and Chad demonstrates that the global green transition (scaling African lithium extraction from 40,000 to 500,000 tonnes by 2030) is being rapidly captured by armed insurgencies including Boko Haram and ISWAP.
                  </p>
                  <p>
                    Where governance and regulatory oversight are weak, insurgent groups tax miners, control transit routes, and provide shadow "security," converting green energy demand into military weapons pipelines while local populations suffer environmental degradation, acute heavy metal toxicity, and chronic poverty.
                  </p>
                </div>
              )}

              {modalTab === 'history' && (
                <div className="space-y-4 max-w-3xl mx-auto text-xs leading-relaxed font-sans">
                  <h4 className="text-sm font-serif font-bold text-amber-400">Deep History & Evolutionary Metallurgy</h4>
                  <p>
                    Artisanal mining represents humanity's oldest industrial activity after fire. Originating in the Lower Paleolithic when primates selected stones with specialized conchoidal fracturing properties (flint, obsidian, quartzite) for defense and tool-making, mineral extraction initiated the arms race of territorial warfare.
                  </p>
                  <p>
                    With the Bronze and Iron Ages, early civilizations transitioned from stone knapping to smelting galena (lead sulfide) and chalcopyrite (copper), creating the first large-scale occupational heavy metal poisonings and institutionalizing slave labor in subterranean mines.
                  </p>
                </div>
              )}

              {modalTab === 'flows' && (
                <div className="space-y-4 max-w-3xl mx-auto text-xs leading-relaxed font-sans">
                  <h4 className="text-sm font-serif font-bold text-amber-400">Illicit Financial Flows & Terrorist Laundering</h4>
                  <p>
                    Unregulated artisanal gold and tin mining represents the worst economics in human history: subsistence diggers receive pennies on the dollar while violent syndicates (Boko Haram, ISWAP, regional bandit cartels) skim 70%–85% of the mineral value.
                  </p>
                  <p>
                    Over $3.5 billion in shadow minerals is laundered annually through regional porous borders and international smelting centers, directly procuring military rifles, rockets, and heavy munitions.
                  </p>
                </div>
              )}

              {modalTab === 'toxicology' && (
                <div className="space-y-4 max-w-3xl mx-auto text-xs leading-relaxed font-sans">
                  <h4 className="text-sm font-serif font-bold text-amber-400">Toxic Exposure Pathways & Clinical Neuropathy</h4>
                  <p>
                    Grinding lead-rich gold ore (galena) in household flour mills causes extreme aerosolization, saturating residential compounds with &gt;100,000 ppm lead dust.
                  </p>
                  <p>
                    Infants crawling on dirt floors ingest toxic dust, suffering blood lead levels exceeding 100 μg/dL, acute encephalopathy, intractable seizures, and severe prefrontal cortex atrophy (Roulet's Law).
                  </p>
                </div>
              )}

              {modalTab === 'forensics' && (
                <div className="space-y-4 max-w-3xl mx-auto text-xs leading-relaxed font-sans">
                  <h4 className="text-sm font-serif font-bold text-amber-400">Forensic Investigation & 2026 Strategy</h4>
                  <p>
                    Following the Kassa (Barkin Ladi) tin mine pit collapse on August 16, 2026, which claimed seven lives, Minister Dele Alake confirmed that 4,000+ abandoned pits across Nigeria pose catastrophic safety and toxicological hazards.
                  </p>
                  <p>
                    The Federal Government's 2026 strategy enforces cooperative registration, AI satellite tracking, and conversion of hazardous pits into renewable energy parks and aquaculture fish farms.
                  </p>
                </div>
              )}
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
