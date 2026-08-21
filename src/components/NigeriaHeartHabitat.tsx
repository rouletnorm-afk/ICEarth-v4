import React, { useState, useMemo } from 'react';
import {
  Heart,
  Activity,
  Shield,
  AlertTriangle,
  FileText,
  ExternalLink,
  BookOpen,
  MapPin,
  Sparkles,
  Users,
  Search,
  Filter,
  Layers,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Globe,
  Droplets,
  Flame,
  Award,
  Zap,
  CheckCircle2,
  Calendar,
  Share2,
  Copy,
  Check,
  Building2,
  Stethoscope,
  Microscope,
  DollarSign,
  Maximize2,
  X,
  Volume2,
  Sliders,
  Scale
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface NigeriaHeartHabitatProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const NigeriaHeartHabitat: React.FC<NigeriaHeartHabitatProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState<'transcript' | 'epidemiology' | 'clinical_studies' | 'pathophysiology' | 'heart_city' | 'risk_calculator'>('transcript');

  // Search & Filter state for full transcript
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [copiedQuote, setCopiedQuote] = useState<string | null>(null);
  const [copiedHash, setCopiedHash] = useState(false);

  // Risk Calculator Interactive State
  const [calcAge, setCalcAge] = useState<number>(48);
  const [calcGender, setCalcGender] = useState<'male' | 'female'>('male');
  const [calcBp, setCalcBp] = useState<number>(140);
  const [calcSmoker, setCalcSmoker] = useState<boolean>(false);
  const [calcDiabetes, setCalcDiabetes] = useState<boolean>(false);
  const [calcGeneratorExposure, setCalcGeneratorExposure] = useState<number>(4); // hours/day
  const [calcBiomassFuel, setCalcBiomassFuel] = useState<boolean>(true);
  const [calcSachetWaterDaily, setCalcSachetWaterDaily] = useState<number>(4); // sachets/day
  const [calcHeavyMetalRisk, setCalcHeavyMetalRisk] = useState<boolean>(true); // proximity to e-waste/mining/battery

  // Cryptographic Provenance Hash
  const PROVENANCE_HASH = '0xNIGERIA_HEART_HABITAT_TOXIC_SHADOWS_ANAKWUE_UNN249_2026';
  const PROF_PHOTO_URL = 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Professor-Raphael-Anakwue.jpeg';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedQuote(id);
    setTimeout(() => setCopiedQuote(null), 2500);
  };

  // Epidemiological Chart Data: Global CVD Deaths Trend
  const globalCvdData = [
    { year: '1990', deathsMillions: 12.1, ssaDeaths: 0.82 },
    { year: '2000', deathsMillions: 14.2, ssaDeaths: 0.98 },
    { year: '2010', deathsMillions: 16.1, ssaDeaths: 1.15 },
    { year: '2019', deathsMillions: 18.6, ssaDeaths: 1.34 },
    { year: '2021', deathsMillions: 20.5, ssaDeaths: 1.48 },
    { year: '2030 (Est)', deathsMillions: 22.2, ssaDeaths: 1.72 },
    { year: '2050 (Est)', deathsMillions: 32.3, ssaDeaths: 2.45 },
  ];

  // Global Risk Factor DALYs Contribution (Brauer et al., 2024)
  const dalyRiskFactors = [
    { factor: 'Particulate Matter Air Pollution', dalysPct: 8.0, color: '#ef4444' },
    { factor: 'High Systolic Blood Pressure', dalysPct: 7.8, color: '#f97316' },
    { factor: 'Tobacco Smoking', dalysPct: 5.6, color: '#eab308' },
    { factor: 'Low Birthweight / Short Gestation', dalysPct: 5.6, color: '#3b82f6' },
    { factor: 'High Fasting Plasma Glucose', dalysPct: 5.4, color: '#8b5cf6' },
  ];

  // Heavy Metal Burden in University Students (Anakwue & Nwoke, 2024)
  const studentHeavyMetals = [
    { metal: 'Chromium (Cr)', prevalence: 95, safeRef: '< 0.5 µg/L' },
    { metal: 'Cadmium (Cd)', prevalence: 73, safeRef: '< 1.0 µg/L' },
    { metal: 'Lead (Pb)', prevalence: 33, safeRef: '< 10 µg/dL' },
    { metal: 'Mercury (Hg)', prevalence: 25, safeRef: '< 5 µg/L' },
    { metal: 'Dyslipidemia Cohort', prevalence: 37, safeRef: 'Optimal Lipid Profile' },
  ];

  // Rice Heavy Metal Contamination (Anakwue et al., 2020)
  const riceMetalData = [
    { dish: 'Jollof Rice', arsenicMgKg: 520, copperMgKg: 8400, mercuryMgKg: 12, cadmiumMgKg: 23 },
    { dish: 'White Rice + Tomato Stew', arsenicMgKg: 550, copperMgKg: 16767, mercuryMgKg: 18, cadmiumMgKg: 14 },
    { dish: 'White Rice + Ofeakwu', arsenicMgKg: 503, copperMgKg: 11200, mercuryMgKg: 33, cadmiumMgKg: 16 },
    { dish: 'Fried Rice', arsenicMgKg: 535, copperMgKg: 9100, mercuryMgKg: 15, cadmiumMgKg: 19 },
    { dish: 'Ofada Rice Local', arsenicMgKg: 510, copperMgKg: 7800, mercuryMgKg: 22, cadmiumMgKg: 15 },
  ];

  // Generator Exhaust Inhalation in Canines: Troponin I & CRP Elevation (Eze et al., 2021)
  const dogGeneratorData = [
    { group: 'Group A (Control)', troponinI: 0.02, crp: 1.1, oxidativeMda: 1.4, gshLevel: 8.5 },
    { group: 'Group B (1h PGEF)', troponinI: 0.18, crp: 3.4, oxidativeMda: 2.8, gshLevel: 6.2 },
    { group: 'Group C (2h PGEF)', troponinI: 0.42, crp: 6.8, oxidativeMda: 4.5, gshLevel: 4.1 },
    { group: 'Group D (3h PGEF)', troponinI: 0.89, crp: 11.2, oxidativeMda: 7.3, gshLevel: 2.3 },
  ];

  // 12 Mechanisms Radar Profile
  const mechanismsRadar = [
    { mechanism: 'Oxidative Stress & ROS', score: 95 },
    { mechanism: 'Endothelial Dysfunction', score: 92 },
    { mechanism: 'Systemic Inflammation (TNF/IL-6)', score: 90 },
    { mechanism: 'Mitochondrial Energy Failure', score: 88 },
    { mechanism: 'Autonomic Dysregulation', score: 85 },
    { mechanism: 'Plaque Instability & Thrombosis', score: 87 },
    { mechanism: 'Calcium Ion Channel Disruption', score: 84 },
    { mechanism: 'Epigenomic DNA Alterations', score: 82 },
  ];

  // Interactive Risk Score Calculation: Traditional vs Exposome-Adjusted
  const { traditionalScore, exposomeScore, riskDelta } = useMemo(() => {
    let base = 5;
    if (calcAge > 40) base += (calcAge - 40) * 0.4;
    if (calcGender === 'male') base += 3;
    if (calcBp > 130) base += (calcBp - 130) * 0.15;
    if (calcSmoker) base += 8;
    if (calcDiabetes) base += 7;

    const trad = Math.min(Math.round(base), 60);

    // Exposome risk additions
    let expoAdd = 0;
    expoAdd += calcGeneratorExposure * 2.8; // Generator CO & PM2.5
    if (calcBiomassFuel) expoAdd += 8.5; // Cooking smoke PM2.5
    expoAdd += calcSachetWaterDaily * 1.5; // Microplastic load & phthalates
    if (calcHeavyMetalRisk) expoAdd += 10.2; // Lead/Cadmium bioaccumulation

    const totalExpo = Math.min(Math.round(trad + expoAdd), 95);
    return {
      traditionalScore: trad,
      exposomeScore: totalExpo,
      riskDelta: Math.round(totalExpo - trad)
    };
  }, [calcAge, calcGender, calcBp, calcSmoker, calcDiabetes, calcGeneratorExposure, calcBiomassFuel, calcSachetWaterDaily, calcHeavyMetalRisk]);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'
    }`}>
      {/* =========================================================================
          HERO BANNER & HEADER
          ========================================================================= */}
      <section className={`border-b transition-colors relative overflow-hidden ${
        isLight ? 'bg-white border-stone-200' : 'bg-stone-900/80 border-stone-800'
      }`}>
        {/* Background gradient decorative element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-stone-200 dark:border-stone-800">
            
            {/* Left: Speaker Identity & Title */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Professor Portrait */}
              <div className="relative group shrink-0">
                <div className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-600/40 bg-stone-900 relative">
                  <img
                    src={PROF_PHOTO_URL}
                    alt="Professor Raphael Anakwue"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback if image proxy restricts
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-2">
                    <span className="text-[9px] font-mono text-emerald-300 font-bold uppercase tracking-wider">
                      UNN 249th Lecture
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-stone-900">
                  <Heart size={14} className="animate-pulse" />
                </div>
              </div>

              {/* Header Text */}
              <div className="space-y-2 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-emerald-600/15 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold rounded-lg border border-emerald-500/30 flex items-center gap-1.5">
                    <Heart size={12} className="text-emerald-500" />
                    University of Nigeria, Nsukka • 249th Inaugural Lecture
                  </span>
                  <span className="px-2 py-0.5 bg-amber-500/15 text-amber-700 dark:text-amber-300 font-mono text-[10px] font-bold rounded-md border border-amber-500/30">
                    Delivered: August 20, 2026
                  </span>
                  <span className="px-2 py-0.5 bg-rose-500/15 text-rose-700 dark:text-rose-300 font-mono text-[10px] font-bold rounded-md border border-rose-500/30">
                    Cardiology & Toxicology
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-stone-900 dark:text-stone-50 leading-tight">
                  Beyond Traditional Cardiovascular Risk Factors: Toxic Shadows And The Heart-Habitat Interface
                </h1>

                <p className="text-sm font-sans text-stone-600 dark:text-stone-300 leading-relaxed">
                  <strong>By Professor Raphael Anakwue</strong>, MBBS, MSc, FMCP, FWACP, FACC, FNCS — Professor of Cardiology & Cardiovascular Pharmacology, Faculty of Medical Sciences, College of Medicine, University of Nigeria, Ituku-Ozalla Campus, Enugu.
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-stone-500 dark:text-stone-400 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} className="text-emerald-500" /> Enugu & Nsukka, Nigeria
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Building2 size={12} className="text-stone-500" /> UNN Heart-Habitat Project
                  </span>
                  <span>•</span>
                  <a
                    href="https://www.thisdaylive.com/2026/08/20/beyond-traditional-cardiovascular-risk-factors-toxic-shadows-and-the-heart-habitat-interface/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-bold"
                  >
                    <span>View on ThisDay Live</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Actions & Provenance */}
            <div className="flex flex-row lg:flex-col items-center lg:items-end gap-3 shrink-0 w-full lg:w-auto justify-between lg:justify-start">
              <button
                onClick={handleCopyHash}
                className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 border border-stone-300 dark:border-stone-700 transition-all flex items-center gap-2 cursor-pointer shadow-xs"
                title="Copy Provenance Hash"
              >
                {copiedHash ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copiedHash ? 'HASH COPIED' : 'ZK-PROVENANCE HASH'}</span>
              </button>

              <div className="text-right hidden sm:block">
                <span className="text-[10px] font-mono text-stone-400 block">Sovereign Directory Tab</span>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">NIGERIA_HEART_HABITAT</span>
              </div>
            </div>

          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-6">
            <div className="p-3 bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase text-stone-500 dark:text-stone-400 block">Global Air Pollution Deaths</span>
              <span className="text-base font-bold font-mono text-rose-600 dark:text-rose-400">8.1 Million/yr</span>
              <span className="text-[10px] text-stone-500 block">#2 global mortality factor</span>
            </div>

            <div className="p-3 bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase text-stone-500 dark:text-stone-400 block">SSA CVD Mortality Surge</span>
              <span className="text-base font-bold font-mono text-amber-600 dark:text-amber-400">+50% in 3 Decades</span>
              <span className="text-[10px] text-stone-500 block">Despite low Framingham risk</span>
            </div>

            <div className="p-3 bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase text-stone-500 dark:text-stone-400 block">Nigeria Generators</span>
              <span className="text-base font-bold font-mono text-stone-900 dark:text-stone-100">&gt; 22 Million</span>
              <span className="text-[10px] text-stone-500 block">"I pass my neighbour" fumes</span>
            </div>

            <div className="p-3 bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase text-stone-500 dark:text-stone-400 block">Sachet Water Consumption</span>
              <span className="text-base font-bold font-mono text-cyan-600 dark:text-cyan-400">&gt; 60 Million/day</span>
              <span className="text-[10px] text-stone-500 block">FTIR microplastic cardiotoxicity</span>
            </div>

            <div className="p-3 bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase text-stone-500 dark:text-stone-400 block">Zamfara Lead Outbreak</span>
              <span className="text-base font-bold font-mono text-purple-600 dark:text-purple-400">Mean 119 µg/dL</span>
              <span className="text-[10px] text-stone-500 block">&gt; 735 children deceased</span>
            </div>

            <div className="p-3 bg-stone-100/80 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-xl space-y-1">
              <span className="text-[9px] font-mono uppercase text-stone-500 dark:text-stone-400 block">Clean Air Act ROI</span>
              <span className="text-base font-bold font-mono text-emerald-600 dark:text-emerald-400">30 : 1 Return</span>
              <span className="text-[10px] text-stone-500 block">Massive economic prevention</span>
            </div>
          </div>

          {/* Subtabs Switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pt-6 border-t border-stone-200 dark:border-stone-800 scrollbar-none">
            <button
              onClick={() => setActiveSubTab('transcript')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'transcript'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              <BookOpen size={14} />
              <span>Full Inaugural Lecture Transcript</span>
            </button>

            <button
              onClick={() => setActiveSubTab('epidemiology')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'epidemiology'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              <TrendingUp size={14} />
              <span>Epidemiological Paradox & Data Visuals</span>
            </button>

            <button
              onClick={() => setActiveSubTab('clinical_studies')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'clinical_studies'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              <Stethoscope size={14} />
              <span>Clinical Cases & Animal Studies</span>
            </button>

            <button
              onClick={() => setActiveSubTab('pathophysiology')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'pathophysiology'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              <Microscope size={14} />
              <span>The 12 Cardiotoxic Mechanisms</span>
            </button>

            <button
              onClick={() => setActiveSubTab('heart_city')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'heart_city'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              <Building2 size={14} />
              <span>Heart-Healthy City Framework & Economics</span>
            </button>

            <button
              onClick={() => setActiveSubTab('risk_calculator')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'risk_calculator'
                  ? 'bg-amber-600 text-white border-amber-600 shadow-md'
                  : 'bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 border-stone-300 dark:border-stone-700'
              }`}
            >
              <Sliders size={14} />
              <span>Exposome vs Framingham Simulator</span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MAIN CONTENT AREA
          ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">

        {/* SUBTAB 1: COMPLETE INAUGURAL LECTURE TRANSCRIPT */}
        {activeSubTab === 'transcript' && (
          <div className="space-y-6 animate-fade-in font-sans">
            
            {/* Search & Filter Toolbar */}
            <div className={`p-4 rounded-2xl border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="relative flex-1">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search verbatim transcript (e.g., 'generator', 'lead', 'Patterson', 'Framingham', 'sachet', 'Zamfara')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 border ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-700 text-stone-100'
                  }`}
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter size={14} className="text-stone-400" />
                <select
                  value={selectedSection}
                  onChange={(e) => setSelectedSection(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono border focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-800' : 'bg-stone-950 border-stone-700 text-stone-200'
                  }`}
                >
                  <option value="all">All Lecture Sections</option>
                  <option value="intro">Introduction & Mentors</option>
                  <option value="framingham">From Framingham to PREVENT</option>
                  <option value="shadows">The Concept of Toxic Shadow</option>
                  <option value="air">Global Toll of Air Pollution</option>
                  <option value="journey">My Journey into Toxicants</option>
                  <option value="nigeria_sources">Notable Sources of Toxicants in Nigeria</option>
                  <option value="mechanisms">Pathophysiological Mechanisms</option>
                  <option value="epidemiology_cases">Epidemiological Footprints & Animal Models</option>
                  <option value="economics">Public Health & Economic Cost</option>
                  <option value="heart_city">Vision for a Heart-Healthy City</option>
                  <option value="poem">Final Reflection & Concluding Poem</option>
                </select>
              </div>
            </div>

            {/* Complete Lecture Document Container */}
            <div className={`p-6 sm:p-10 rounded-2xl border space-y-8 leading-relaxed shadow-sm ${
              isLight ? 'bg-white border-stone-200 text-stone-800' : 'bg-stone-900/90 border-stone-800 text-stone-200'
            }`}>
              
              {/* Official Academic Title Block */}
              <div className="text-center pb-8 border-b border-stone-200 dark:border-stone-800 space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-bold block">
                  UNIVERSITY OF NIGERIA, NSUKKA • 249TH INAUGURAL LECTURE
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-stone-900 dark:text-stone-50">
                  Beyond Traditional Cardiovascular Risk Factors: Toxic Shadows And The Heart-Habitat Interface
                </h2>
                <div className="text-sm font-mono text-stone-500 dark:text-stone-400">
                  <span>Delivered on August 20, 2026</span> • <span>Princess Alexandra Auditorium, UNN</span>
                </div>
                <div className="pt-2">
                  <span className="px-4 py-1.5 bg-stone-100 dark:bg-stone-800 rounded-full font-mono text-xs text-stone-700 dark:text-stone-300 border border-stone-300 dark:border-stone-700">
                    By <strong>Professor Raphael Anakwue</strong>, Professor of Cardiology & Cardiovascular Pharmacology
                  </span>
                </div>
              </div>

              {/* SECTION: INTRODUCTION */}
              {(selectedSection === 'all' || selectedSection === 'intro') && (
                <section className="space-y-4">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                      <span>1. INTRODUCTION & FORMATIVE JOURNEY</span>
                    </h3>
                    <button
                      onClick={() => handleCopyText("INTRODUCTION: It is with profound gratitude, humility, and a deep sense of responsibility that I stand before you today...", "intro")}
                      className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 text-xs font-mono flex items-center gap-1 cursor-pointer"
                    >
                      {copiedQuote === 'intro' ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                      <span>Copy</span>
                    </button>
                  </div>

                  <p className="text-sm leading-relaxed">
                    It is with profound gratitude, humility, and a deep sense of responsibility that I stand before you today, on this historic occasion, to deliver the 249th inaugural lecture at the University of Nigeria, Nsukka. As a Professor of Cardiology and Cardiovascular Pharmacology, I am deeply honoured to deliver this lecture, titled <strong>“Beyond Traditional Cardiovascular Risk Factors: Toxic Shadows and the Heart-Habitat Interface.”</strong>
                  </p>

                  <p className="text-sm leading-relaxed">
                    Your presence here reflects the value you place on scholarship and the regard you hold for me. For this, I am sincerely grateful.
                  </p>

                  <p className="text-sm leading-relaxed">
                    I wish to begin by expressing my sincere gratitude to the Vice-Chancellor, <strong>Professor Simon Uchenna Ortuanya, SJD, FCIArb, FCIA</strong>, for the privilege of delivering this inaugural lecture. Since his appointment as the 16th Vice-Chancellor of the University of Nigeria, Nsukka, he has worked tirelessly to restore and uphold the dignity of our great university, and I wish to express my appreciation for this. I also extend my appreciation to the Chairman of the Senate Ceremonials Committee, Professor Ozioma Onuzulike.
                  </p>

                  <p className="text-sm leading-relaxed">
                    An inaugural lecture is a ceremonial academic event marking a scholar’s promotion to professorship. It celebrates achievement while offering a public window into the lecturer’s research journey. Beyond personal accomplishment, it showcases how university research challenges norms, drives societal transformation, and shapes policy and innovation. Ultimately, it aims to inspire dialogue and set the course for future inquiry.
                  </p>

                  <p className="text-sm leading-relaxed">
                    My lecture today seeks to reshape how we assess cardiovascular disease risk. This perspective stems from a lifelong habit of questioning tradition, being broad-minded, and seeking knowledge from diverse, sometimes divergent, paths. Let me say a few words about my early life.
                  </p>

                  <p className="text-sm leading-relaxed">
                    I was born into an ordinary family. My parents lived a simple life. My late father, <strong>Engr. Michael Anakwue</strong>, managed agricultural farm equipment on a mechanised farm in the Ministry of Agriculture and Natural Resources in Ezillo, now Ebonyi State, and my late mother taught in a primary school. The Ezillo centre, one of the legacies of the former Premier of Eastern Nigeria, Dr Michael Okpara, practised mechanised farming, including ranching. If this form of cattle rearing had been replicated across Nigeria, there would not have been any herder-farmer conflict that has killed thousands and left so many homeless.
                  </p>

                  <p className="text-sm leading-relaxed">
                    I was a rascal as a child, and I remember that many hours after school had dismissed, I would arrive home late because of my penchant for exploring all the mango and cashew trees in the neighbourhood. This earned me some beatings at home, and I am glad my mother did not have a heart attack from my rascally behaviour.
                  </p>

                  <p className="text-sm leading-relaxed">
                    From my earliest days in primary school, when I resolved to become a medical doctor, to my formative years at St. Patrick’s College, Asaba, I pursued science with passion while nurturing a parallel love of literature. The African Writers Series — Achebe’s <em>Things Fall Apart</em> and <em>Arrow of God</em>, Soyinka’s <em>The Lion and the Jewel</em>, Ekwensi’s <em>Burning Grass</em>, Armah’s <em>The Beautiful Ones Are Not Yet Born</em>, Ngũgĩ wa Thiong’o’s <em>Weep Not Child</em> and <em>Petals of Blood</em> — all left indelible marks on my imagination and worldview.
                  </p>

                  <p className="text-sm leading-relaxed">
                    That literary grounding continues to shape me. Even today, I remain an avid reader, exploring politics, philosophy, business, spirituality, and the transcendentalist poets — Ralph Waldo Emerson, Walt Whitman, and William Wordsworth — whose voices remind us that science and art, reason and imagination, must coexist if we are to see the world as a whole.
                  </p>

                  <p className="text-sm leading-relaxed">
                    At St. Patrick’s College, I graduated with distinction, earning prizes for best in academics, most efficient class prefect, neatest student, best-behaved student, and all-round student—though not in sports. I made efforts in sports but did not feature prominently! My secret was simple: I made friends with those who excelled in each subject, learning from them until I mastered everything myself.
                  </p>

                  <p className="text-sm leading-relaxed">
                    My focus on medicine never wavered. I entered the University of Nigeria Medical School and graduated in 1986. The valedictory lecture delivered by the late <strong>Professor Chukwuedu Nwokolo</strong> for my class became a treasured guide; I read it repeatedly throughout my early career. Determined to learn from greatness, I sought his mentorship, visiting his private clinic and later his home. As the Igbo saying goes, <em>“nwata kwocha aka, osolu ogalanya lie ife”</em>—a child who washes his hands may dine with elders!
                  </p>

                  <p className="text-sm leading-relaxed">
                    Professor Nwokolo advised us then to spend a year or two in general practice before specialising, to steady our hand in managing a diverse range of cases. During that period, I began postgraduate studies in Pharmacology and Therapeutics, where I encountered another towering figure—the late <strong>Professor Gilbert Onuaguluchi</strong>, my supervisor. To be mentored by two colossi, one in Medicine and the other in Pharmacology, was a rare privilege. Professor Onuaguluchi, the first Dean of our Faculty of Medicine and the pioneer Vice-Chancellor of the University of Jos, taught pharmacology with such clarity and breadth that he transformed cardiovascular pharmacology into a lens for understanding human vulnerability and resilience.
                  </p>

                  <p className="text-sm leading-relaxed">
                    It was therefore only natural that my path led to cardiology. My Part 2 fellowship research focused on evaluating cardiovascular function in patients with thyrotoxicosis, supervised by Prof V. Ikeh, Prof B. Onwubere, and the late Prof. B. Anisiuba. I undertook advanced training at <strong>Wockhardt Heart Hospital in India</strong> and at <strong>The Miller Family Heart, Vascular and Thoracic Institute at Cleveland Clinic in Ohio, USA</strong>. I am now a Fellow of the West African College of Physicians, the Nigerian Cardiac Society, and the American College of Cardiology, among others.
                  </p>
                </section>
              )}

              {/* SECTION: EVOLUTION OF RISK */}
              {(selectedSection === 'all' || selectedSection === 'framingham') && (
                <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      2. THE EVOLUTION OF RISK: FROM FRAMINGHAM TO PREVENT
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed">
                    Cardiovascular diseases (CVDs) are the leading cause of mortality, accounting for about a third of all global deaths despite strides in medical advances. The estimated number of deaths due to CVDs globally increased from around <strong>12.1 million in 1990 to 18.6 million in 2019 and 20.5 million by 2021</strong>, with an estimated death rate of 22.2 million in 2030 and 32.3 million in 2050 (World Heart Report, 2023; Lindstrom et al., 2022).
                  </p>

                  <p className="text-sm leading-relaxed">
                    For decades, our understanding of cardiovascular disease did not include toxicants; it centred on traditional cardiovascular risk factors—hypertension, dyslipidaemia, diabetes, smoking, physical inactivity, obesity, age and gender. The earliest risk calculator was the <strong>Framingham risk calculator (1998)</strong>. The <strong>Predicting Risk of Cardiovascular Disease Events (PREVENT) tool (2023)</strong> is the latest, based on a cohort of over 6 million adults.
                  </p>

                  {/* Table 1 Callout */}
                  <div className="p-4 bg-stone-100 dark:bg-stone-800/80 rounded-xl border border-stone-300 dark:border-stone-700 space-y-2">
                    <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 block">
                      TABLE 1: COMPARISON OF FRAMINGHAM (1998) AND PREVENT (2023) RISK CALCULATORS
                    </span>
                    <div className="overflow-x-auto">
                      <table className="w-full text-xs font-mono text-left">
                        <thead>
                          <tr className="border-b border-stone-300 dark:border-stone-700 text-stone-500">
                            <th className="py-1.5">Risk Factor</th>
                            <th className="py-1.5">Framingham Scores (1998)</th>
                            <th className="py-1.5">PREVENT Scores (2023)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-200 dark:divide-stone-700/60">
                          <tr><td className="py-1.5">Age, Sex</td><td>Age</td><td>Yes</td></tr>
                          <tr><td className="py-1.5">Blood Pressure</td><td>Yes</td><td>Yes</td></tr>
                          <tr><td className="py-1.5">Cholesterol / Non-HDL</td><td>Total Cholesterol, HDL</td><td>Yes</td></tr>
                          <tr><td className="py-1.5">Diabetes Status / A1C</td><td>Diabetes</td><td>Yes</td></tr>
                          <tr><td className="py-1.5">Kidney Function (eGFR / ACR)</td><td className="text-rose-500 font-bold">No</td><td>Yes</td></tr>
                          <tr><td className="py-1.5">Smoking Status</td><td>Yes</td><td>Yes</td></tr>
                          <tr><td className="py-1.5">Socioeconomic Factors</td><td className="text-rose-500 font-bold">No</td><td>Yes</td></tr>
                          <tr className="bg-amber-500/10 font-bold text-amber-800 dark:text-amber-300">
                            <td className="py-2">Toxicants & Associated Biomarkers</td>
                            <td className="text-rose-600">NO (Omitted)</td>
                            <td className="text-rose-600">NO (Omitted)</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 italic pt-1">
                      *Critical Analysis: Both global calculators completely omit the exposome—the measure of lifetime toxicant exposures—leaving patients in high-pollution environments systematically under-risked.
                    </p>
                  </div>
                </section>
              )}

              {/* SECTION: CONCEPT OF TOXIC SHADOWS */}
              {(selectedSection === 'all' || selectedSection === 'shadows') && (
                <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      3. THE CONCEPT OF TOXIC SHADOWS
                    </h3>
                  </div>

                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 rounded-xl space-y-2">
                    <strong className="text-sm font-serif font-bold text-emerald-900 dark:text-emerald-300 block">
                      The Metaphor of the "Toxic Shadow"
                    </strong>
                    <p className="text-xs text-emerald-800 dark:text-emerald-200 leading-relaxed">
                      "I use the term <strong>'Toxic Shadows'</strong> as a metaphor for the hidden yet enduring influence of environmental toxicants on cardiovascular health. Like shadows, these exposures may not always be seen, measured, or appreciated, yet their effects can be profound. Toxicants operate silently, beyond standard clinical screening. Long after exposure ends, chemicals leave lasting biological imprints, subtly disrupting cardiovascular regulation."
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed">
                    <strong>The Three Dimensions of Toxic Shadows:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-stone-700 dark:text-stone-300 pl-2">
                    <li>
                      <strong>1. Silent & Embedded:</strong> Unlike traditional acute toxins, environmental toxicants accumulate quietly over lifetimes in air, water, food, and soil without triggering classical alarm symptoms.
                    </li>
                    <li>
                      <strong>2. Displacement Across Space & Class:</strong> Modern consumption in wealthy regions leaves toxic legacies in poorer communities (e.g., electronic-waste dumping and battery recycling in West Africa). The benefits are enjoyed elsewhere; the cardiovascular disease settles locally.
                    </li>
                    <li>
                      <strong>3. Intergenerational Epigenetic Transmission:</strong> Exposures during pregnancy leave lasting epigenetic alterations that disrupt cardiovascular and metabolic regulation in children and grandchildren.
                    </li>
                  </ul>
                </section>
              )}

              {/* SECTION: AIR POLLUTION & GLOBAL TOLL */}
              {(selectedSection === 'all' || selectedSection === 'air') && (
                <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      4. THE GLOBAL TOLL OF AIR POLLUTION & THE PARACELSUS CAVEAT
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed">
                    According to the Global Burden of Disease Study, air pollution was the <strong>second-highest contributor to global CVD mortality in 2021</strong>, causing 8.1 million deaths. 99% of the global population breathes air exceeding WHO guideline limits. Exposure to ambient air pollution reduces life expectancy in Nigeria and West Africa by <strong>3 to 4 years</strong>, with over 50% of excess deaths linked directly to cardiovascular disease.
                  </p>

                  <div className="p-4 bg-stone-100 dark:bg-stone-800/80 rounded-xl border border-stone-300 dark:border-stone-700 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-rose-600 dark:text-rose-400">
                      Rethinking Paracelsus: Why "The Dose Alone Makes the Poison" Is No Longer Sufficient
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      For 500 years, toxicology relied on Paracelsus’s maxim (<em>dosis sola facit venenum</em>). But modern science reveals three realities Paracelsus could not observe in 1567:
                    </p>
                    <ol className="list-decimal list-inside space-y-1 text-xs text-stone-700 dark:text-stone-300 pl-2">
                      <li><strong>Bioaccumulation & Biomagnification:</strong> Metals like lead and cadmium build up in bone and vascular tissue over decades, reaching toxic thresholds from minuscule daily exposures.</li>
                      <li><strong>Endocrine Disruption:</strong> EDCs (BPA, phthalates) act at parts-per-billion concentrations, mimicking hormone cascades where low doses can cause more receptor disruption than high doses.</li>
                      <li><strong>The Exposome "Cocktail Effect":</strong> Simultaneous exposure to PM2.5, heavy metals, microplastics, and agrochemicals creates synergistically amplified cardiovascular damage.</li>
                    </ol>
                  </div>
                </section>
              )}

              {/* SECTION: SOURCES IN NIGERIA */}
              {(selectedSection === 'all' || selectedSection === 'nigeria_sources') && (
                <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      5. NOTABLE SOURCES OF TOXICANTS IN NIGERIA
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1.5">
                        <Flame size={14} /> 22 Million+ Generators ("I Pass My Neighbour")
                      </span>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        With over 85 million Nigerians lacking reliable grid electricity, small petrol/diesel generators run inches outside bedroom windows. In Lagos alone, generators outnumber residential rooms, flooding habitats with carbon monoxide, nitrogen dioxide, PM2.5, and volatile organic compounds.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                      <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                        <Droplets size={14} /> 60 Million Daily "Pure Water" Sachets
                      </span>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        Rapid urban water deficit created the 50-cl polyethylene sachet industry. FTIR spectroscopy proves sachets leach nanoplastics and plasticizers when stored in sunlight, causing direct myocardial inflammation and antioxidant enzyme depletion upon ingestion.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                      <span className="text-xs font-mono font-bold text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                        <Shield size={14} /> Artisanal Mining & Zamfara Outbreak
                      </span>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        Processing lead-rich gold ore released pulverized dust, causing the world's largest known lead poisoning disaster (mean BLL 119 µg/dL, 735+ child fatalities). Chronic survivors face lifelong elevated risks of hypertension, stroke, and accelerated atherosclerosis.
                      </p>
                    </div>

                    <div className="p-4 bg-stone-50 dark:bg-stone-800/50 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                      <span className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                        <Activity size={14} /> Niger Delta Gas Flaring & 240,000 Spilled Barrels
                      </span>
                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                        Oil extraction, gas flaring, and artisanal bunkering drive CVD prevalence up to 51.8% in polluted Niger Delta communities. Children in the region suffer the highest congenital heart disease (CHD) rate in Africa (14.4 per 1,000 live births).
                      </p>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION: CLINICAL EPIDEMIOLOGY & ANIMAL MODELS */}
              {(selectedSection === 'all' || selectedSection === 'epidemiology_cases') && (
                <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      6. CLINICAL CASES & EXPERIMENTAL TRANSLATIONAL STUDIES
                    </h3>
                  </div>

                  {/* 3 Clinical Cases */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase text-stone-500">Three Landmark Clinical Cases Under Prof. Anakwue's Care:</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                      <div className="p-4 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                        <span className="font-mono font-bold text-rose-600 dark:text-rose-400 block">CASE 1: Lead & Hypertensive Heart</span>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                          <strong>45-year-old auto mechanic (Enugu)</strong> with chest pain, dyspnoea, BP 180/110 mmHg, and severe LVH. 20-year history of informal lead-acid battery recycling. <strong>Blood lead level was 60 µg/dL</strong> (normal &lt;10). Developed heart failure within 2 years due to unchelated lead burden.
                        </p>
                      </div>

                      <div className="p-4 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                        <span className="font-mono font-bold text-amber-600 dark:text-amber-400 block">CASE 2: Biomass Cooking Smoke & Stroke</span>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                          <strong>60-year-old female</strong> presenting with acute ischaemic stroke and hypertension. 30-year history of cooking with firewood and biomass fuel in an unventilated indoor kitchen. Transition to LPG gas cooking and ventilation yielded progressive functional recovery.
                        </p>
                      </div>

                      <div className="p-4 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-2">
                        <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400 block">CASE 3: Bakery Cardiotoxic Fumes</span>
                        <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                          <strong>62-year-old male with ischaemic heart disease</strong> residing adjacent to an industrial bakery in Achara Layout, Enugu. Experienced cardiac decompensation at home but total symptom resolution whenever travelling to Lagos. Relocating away from bakery emissions restored stable health.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Experimental Studies Summary */}
                  <div className="p-4 bg-stone-100 dark:bg-stone-800/60 rounded-xl border border-stone-300 dark:border-stone-700 space-y-2 text-xs">
                    <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 block">
                      TRANSLATIONAL EXPERIMENTAL DISCOVERIES FROM THE UNN HEART-HABITAT LAB:
                    </span>
                    <ul className="list-disc list-inside space-y-1.5 text-stone-600 dark:text-stone-300">
                      <li>
                        <strong>Canine Generator Exhaust Model (Eze et al., 2021; Eke et al., 2025):</strong> Dogs placed 12m from petrol generators showed dramatic time-dependent rises in Troponin I (0.89 ng/mL at 3h) and CRP, accompanied by severe myofibre fragmentation and coagulative necrosis.
                      </li>
                      <li>
                        <strong>University Student Heavy Metal Survey (Anakwue & Nwoke, 2024):</strong> 95% of healthy students had elevated chromium, 73% cadmium, 33% lead, 25% mercury; cadmium was a statistically significant driver of dyslipidemia (OR 1.074).
                      </li>
                      <li>
                        <strong>Marketplace Rice Metal Analysis (Anakwue et al., 2020):</strong> Copper reached 16,767 mg/kg in white rice with tomato stew; mercury reached 33 mg/kg in ofeakwu; jollof rice had highest cadmium (23 mg/kg).
                      </li>
                      <li>
                        <strong>Wistar Rat Sachet Water Microplastics (Anakwue, 2026):</strong> 30-day exposure to sachet water showed FTIR polymer signatures (PET, PVC, nylon), myocardial inflammatory cell infiltration, and significant glutathione peroxidase depletion.
                      </li>
                      <li>
                        <strong>Pesticide-Exposed Rice Farmers (Chukwu & Anakwue, 2026):</strong> Exposed farmers demonstrated 88% hypertension, 85% heart disease, 71% stroke, and elevated IL-6 and troponin I compared to unexposed controls.
                      </li>
                    </ul>
                  </div>
                </section>
              )}

              {/* SECTION: HEART-HEALTHY CITY & ECONOMIC COST */}
              {(selectedSection === 'all' || selectedSection === 'heart_city' || selectedSection === 'economics') && (
                <section className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      7. ECONOMIC IMPACT & THE "HEART-HEALTHY CITY" VISION
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed">
                    The World Bank estimated air pollution cost the global economy <strong>$8.1 trillion in 2019</strong> (6.1% of global GDP). In Africa, particulate pollution caused $215 billion in premature mortality losses. In Lagos State alone, ambient air pollution caused <strong>$2.1 billion in annual losses</strong> (2.1% of state GDP); in the Niger Delta, annual pollution-related disease costs exceed <strong>$3.8 billion</strong>.
                  </p>

                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-xl space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase text-emerald-800 dark:text-emerald-300">
                      The Six Core Pillars of a "Heart-Healthy City" Policy:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <strong>1. Environmental Quality:</strong> Clean water, zero open dumping, continuous 24h air monitoring.
                      </div>
                      <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <strong>2. Active Urban Design:</strong> Pedestrian greenways, urban tree canopy buffers capturing PM2.5.
                      </div>
                      <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <strong>3. Clean Cooking Access:</strong> Subsidized LPG/electric transition, banning indoor wood fires.
                      </div>
                      <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <strong>4. Industrial Buffering:</strong> Strict zoning separating factories, battery recyclers, and bakeries from homes.
                      </div>
                      <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <strong>5. Health Systems & Training:</strong> Creating the new specialty of <em>Environmental Cardiology</em>.
                      </div>
                      <div className="p-2.5 bg-white dark:bg-stone-900 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <strong>6. Community Empowerment:</strong> Youth eco-clubs, air quality citizen science, social equity.
                      </div>
                    </div>
                  </div>
                </section>
              )}

              {/* SECTION: FINAL REFLECTION & CONCLUDING POEM */}
              {(selectedSection === 'all' || selectedSection === 'poem') && (
                <section className="space-y-4 pt-6 border-t-2 border-emerald-600/40">
                  <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-stone-800">
                    <h3 className="text-lg font-serif font-bold text-emerald-700 dark:text-emerald-400">
                      8. FINAL REFLECTION & CONCLUDING POEM
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed italic text-stone-700 dark:text-stone-300">
                    "Vice-Chancellor, Colleagues and distinguished guests, let me conclude by putting together what I have been saying for the past one hour. Imagine a middle-aged trader living in Enugu. She has never smoked. She is not diabetic. She exercises regularly by walking to and from her shop. Her blood pressure is reasonably controlled. Yet, over time, she develops heart disease. Every evening, when public power fails, she starts a petrol generator positioned just outside her window. She cooks with firewood in a poorly ventilated kitchen. Her drinking water comes from sun-exposed plastic sachets. Her rice comes laden with storage pesticide. In traffic, she inhales vehicle emissions. None of these exposures appears in her medical record. None are entered into cardiovascular risk calculators. Yet they accompany her every day of her life. This is the perfect storm."
                  </p>

                  {/* Concluding Poem Card */}
                  <div className="p-6 bg-gradient-to-br from-stone-900 via-emerald-950 to-stone-900 text-stone-100 rounded-2xl border border-emerald-500/40 shadow-xl space-y-4 text-center my-6">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                      POETIC MANIFESTO FOR THE HEART-HABITAT INTERFACE
                    </span>
                    <div className="font-serif italic text-sm sm:text-base leading-loose max-w-2xl mx-auto text-emerald-100 space-y-3">
                      <p>
                        A silent enemy on a shadowed flight,<br />
                        It drifts on the wind, unseen.<br />
                        The heart once steady, beating free,<br />
                        Now falters beneath polluted decree.
                      </p>
                      <p>
                        O chemicals, O toxic streams,<br />
                        You poison our pulse, disturb our rhythm.<br />
                        Yet we shall rise with steadfast spirit,<br />
                        To cleanse the earth, calm the waves.<br />
                        With purpose firm, with voices strong,<br />
                        To reclaim our Home where hearts belong.
                      </p>
                    </div>
                    <div className="pt-2 text-[10px] font-mono text-emerald-400">
                      — Delivered at the 249th Inaugural Lecture of the University of Nigeria, Nsukka (August 20, 2026)
                    </div>
                  </div>
                </section>
              )}

            </div>
          </div>
        )}

        {/* SUBTAB 2: EPIDEMIOLOGICAL PARADOX & DATA VISUALS */}
        {activeSubTab === 'epidemiology' && (
          <div className="space-y-8 animate-fade-in font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Chart 1: Global CVD Mortality Trajectory */}
              <div className={`p-6 rounded-2xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
              } space-y-4`}>
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-500 font-bold tracking-wider block">
                    GLOBAL BURDEN TRAJECTORY (1990 - 2050)
                  </span>
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                    Global CVD Mortality vs Sub-Saharan Africa Surge
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    CVD deaths rising from 12.1M (1990) to projected 32.3M (2050), with Africa experiencing a 50% surge despite low traditional INTERHEART risk profiles.
                  </p>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={globalCvdData}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} unit="M" />
                      <Tooltip formatter={(value: any) => [`${value} Million Deaths`, '']} />
                      <Legend />
                      <Area type="monotone" dataKey="deathsMillions" name="Global CVD Deaths (Millions)" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="ssaDeaths" name="Sub-Saharan Africa Deaths (Millions)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Chart 2: Leading Contributors to Global DALYs */}
              <div className={`p-6 rounded-2xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
              } space-y-4`}>
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold tracking-wider block">
                    GLOBAL BURDEN OF DISEASE (BRAUER ET AL., 2024)
                  </span>
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                    Air Pollution #1 Contributor to Global Disease Burden (DALYs)
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    Particulate matter air pollution accounts for 8.0% of total global DALYs, surpassing high systolic blood pressure (7.8%) and smoking (5.6%).
                  </p>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dalyRiskFactors} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis type="number" unit="%" tick={{ fontSize: 11 }} />
                      <YAxis dataKey="factor" type="category" tick={{ fontSize: 9 }} width={140} />
                      <Tooltip formatter={(value: any) => [`${value}% of Global DALYs`, 'Risk Contribution']} />
                      <Bar dataKey="dalysPct" name="% of Total Global DALYs" radius={[0, 8, 8, 0]}>
                        {dalyRiskFactors.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Student Heavy Metals Survey (Anakwue & Nwoke, 2024) */}
            <div className={`p-6 rounded-2xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            } space-y-4`}>
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-500 font-bold tracking-wider block">
                  TRANSLATIONAL UNIVERSITY COHORT (ANAKWUE & NWOKE, 2024)
                </span>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                  Prevalence of Heavy Metal Burden in Asymptomatic University Students
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Testing apparently healthy students in Enugu revealed high rates of toxic metal accumulation, with cadmium identified as a significant predictor of dyslipidemia.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {studentHeavyMetals.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border bg-stone-50 dark:bg-stone-800/50 border-stone-200 dark:border-stone-700 space-y-1">
                    <span className="text-[10px] font-mono text-stone-500 dark:text-stone-400">{item.metal}</span>
                    <div className="text-xl font-bold font-mono text-amber-600 dark:text-amber-400">{item.prevalence}%</div>
                    <span className="text-[9px] font-mono text-stone-400 block">Exceeds Normal Ref</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* SUBTAB 3: CLINICAL CASES & TRANSLATIONAL ANIMAL STUDIES */}
        {activeSubTab === 'clinical_studies' && (
          <div className="space-y-8 animate-fade-in font-sans">
            
            {/* Dog Generator Model Card */}
            <div className={`p-6 rounded-2xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            } space-y-4`}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-500 font-bold tracking-wider block">
                    EXPERIMENTAL CANINE GENERATOR INHALATION MODEL (EZE ET AL., 2021; EKE ET AL., 2025)
                  </span>
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                    Graded Generator Exhaust Exposure (12m Distance): Troponin I & Inflammation
                  </h3>
                </div>
                <span className="px-3 py-1 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono font-bold rounded-lg border border-rose-500/20">
                  Direct Myocardial Necrosis
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={dogGeneratorData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="group" tick={{ fontSize: 11 }} />
                    <YAxis yAxisId="left" tick={{ fontSize: 11 }} label={{ value: 'Troponin I (ng/mL)', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                    <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 11 }} label={{ value: 'C-Reactive Protein (mg/L)', angle: 90, position: 'insideRight', fontSize: 10 }} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="troponinI" name="Serum Troponin I (ng/mL)" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} />
                    <Line yAxisId="right" type="monotone" dataKey="crp" name="C-Reactive Protein (mg/L)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                    <Line yAxisId="right" type="monotone" dataKey="oxidativeMda" name="Oxidative Stress (MDA)" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="p-3.5 bg-stone-100 dark:bg-stone-800/80 rounded-xl text-xs text-stone-600 dark:text-stone-300">
                <strong>Histopathological Finding:</strong> Coagulative necrosis, interstitial mononuclear inflammatory infiltration, and severe fragmentation of cardiac myofibres observed in groups exposed to 2h and 3h exhaust at 12m distance.
              </div>
            </div>

            {/* Rice Heavy Metal Contamination Chart */}
            <div className={`p-6 rounded-2xl border ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            } space-y-4`}>
              <div>
                <span className="text-[10px] font-mono uppercase text-cyan-500 font-bold tracking-wider block">
                  FOOD CHAIN EXPOSOME: MARKETPLACE RICE DISHES (ANAKWUE ET AL., 2020)
                </span>
                <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                  Toxic Heavy Metal Concentrations Across 5 Prepared Rice Dishes (mg/kg)
                </h3>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={riceMetalData}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="dish" tick={{ fontSize: 10 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="arsenicMgKg" name="Arsenic (mg/kg)" fill="#8b5cf6" />
                    <Bar dataKey="cadmiumMgKg" name="Cadmium (mg/kg)" fill="#f59e0b" />
                    <Bar dataKey="mercuryMgKg" name="Mercury (mg/kg)" fill="#06b6d4" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        )}

        {/* SUBTAB 4: THE 12 CARDIOTOXIC MECHANISMS */}
        {activeSubTab === 'pathophysiology' && (
          <div className="space-y-8 animate-fade-in font-sans">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className={`p-6 rounded-2xl border ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
              } space-y-4`}>
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold tracking-wider block">
                    SYSTEMIC CARDIOVASCULAR PATHOLOGY
                  </span>
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                    The 12 Key Mechanisms of Toxicant-Induced Cardiotoxicity
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                    Environmental toxicants trigger multi-target biological disruption, directly co-creating atherosclerosis, arrhythmias, and heart failure.
                  </p>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={mechanismsRadar}>
                      <PolarGrid opacity={0.3} />
                      <PolarAngleAxis dataKey="mechanism" tick={{ fontSize: 9 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 8 }} />
                      <Radar name="Biological Intensity" dataKey="score" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Classification Matrix */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase text-stone-500">Key Pathophysiological Pathways (Lind et al., 2021):</h4>
                
                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl space-y-1">
                    <strong className="text-emerald-600 dark:text-emerald-400 font-mono">1. Endothelial Nitric Oxide Depletion:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                      Lead and PM2.5 cause systemic reactive oxygen species (ROS) uncoupling of eNOS, eliminating nitric oxide availability and triggering unyielding vasoconstriction and hypertension.
                    </p>
                  </div>

                  <div className="p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl space-y-1">
                    <strong className="text-rose-600 dark:text-rose-400 font-mono">2. Pro-Thrombotic Plaque Destabilization:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                      Upregulation of IL-6, TNF-alpha, and CRP drives foam cell formation and macrophage lipid accumulation, transforming stable fibrous plaques into rupture-prone lesions.
                    </p>
                  </div>

                  <div className="p-3 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl space-y-1">
                    <strong className="text-amber-600 dark:text-amber-400 font-mono">3. Calcium Handling & Ion Channel Arrhythmias:</strong>
                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                      Heavy metals substitute for calcium ions in sarcoplasmic reticulum channels and cardiomyocyte troponin complexes, inducing fatal ventricular arrhythmias and contractile failure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* SUBTAB 5: HEART-HEALTHY CITY & ECONOMIC POLICY */}
        {activeSubTab === 'heart_city' && (
          <div className="space-y-8 animate-fade-in font-sans">
            
            {/* Economic Costs of Inaction */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 bg-rose-500/10 border border-rose-500/30 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono uppercase text-rose-700 dark:text-rose-300 font-bold">Global GDP Loss (World Bank)</span>
                <div className="text-2xl font-bold font-mono text-rose-600 dark:text-rose-400">$8.1 Trillion</div>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Annual global economic loss from air pollution-related disease and premature mortality (6.1% of global GDP).
                </p>
              </div>

              <div className="p-5 bg-amber-500/10 border border-amber-500/30 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber-300 font-bold">Lagos State Annual Burden</span>
                <div className="text-2xl font-bold font-mono text-amber-600 dark:text-amber-400">$2.1 Billion / yr</div>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Direct healthcare cost and lost productivity due to ambient particulate pollution (2.1% of Lagos State GDP).
                </p>
              </div>

              <div className="p-5 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2">
                <span className="text-[10px] font-mono uppercase text-emerald-700 dark:text-emerald-300 font-bold">Niger Delta Health Costs</span>
                <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400">$3.8 Billion / yr</div>
                <p className="text-xs text-stone-600 dark:text-stone-300">
                  Cost-of-illness (COI) economic burden resulting from oil spillage, gas flaring, and heavy metal soot in the Delta region.
                </p>
              </div>
            </div>

            {/* Legislative & Policy Action Framework */}
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="space-y-1">
                <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
                  POLICY BLUEPRINT FOR SUB-SAHARAN AFRICA
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100">
                  Transforming Toxic Landscapes into Heart-Healthy Cities
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                <div className="space-y-3">
                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 text-sm block">1. Gas Flaring Fines & Grid Renewable Transition</strong>
                    <p>Raising gas flaring fines above the obsolete $2/kscf rate to eliminate routine flaring, while integrating rooftop solar and micro-grids to phase out 22M+ petrol generators.</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 text-sm block">2. Stainless Steel Food Grinding Standards (FIIRO Model)</strong>
                    <p>Enforcing national NAFDAC/NESREA bans on lead/corrosive grinding plates in tomato/pepper food mills, replacing them with food-grade stainless steel.</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 text-sm block">3. Postgraduate Curriculum in Environmental Cardiology</strong>
                    <p>Institutionalizing Africa's first Department of Medical Toxicology and Environmental Cardiology at UNN to train clinicians in exposome screening and chelation therapeutics.</p>
                  </div>

                  <div className="p-3.5 bg-stone-50 dark:bg-stone-800/40 rounded-xl border border-stone-200 dark:border-stone-700 space-y-1">
                    <strong className="text-stone-900 dark:text-stone-100 text-sm block">4. Extended Producer Responsibility on Sachet Plastics</strong>
                    <p>Mandating EPR frameworks and rapid public tap water infrastructure to eradicate the 60 million daily plastic sachet cycle contaminating drinking supplies with microplastics.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* SUBTAB 6: EXPOSOME VS FRAMINGHAM RISK SIMULATOR */}
        {activeSubTab === 'risk_calculator' && (
          <div className="space-y-8 animate-fade-in font-sans">
            
            <div className={`p-6 sm:p-8 rounded-2xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div>
                <span className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 font-bold">
                  INTERACTIVE CLINICAL PARADIGM DEMONSTRATOR
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Traditional Risk Calculator vs The Environmental Exposome
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Adjust patient variables below to observe how traditional calculators (Framingham / PREVENT) systematically misclassify individuals living in toxic habitats as "low risk," withholding essential preventive interventions.
                </p>
              </div>

              {/* Controls Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-200 dark:border-stone-800">
                
                {/* Left: Traditional Factors */}
                <div className="space-y-4 p-4 rounded-xl bg-stone-50 dark:bg-stone-800/30 border border-stone-200 dark:border-stone-700">
                  <span className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300 uppercase block">
                    1. Traditional Risk Factors (Framingham / PREVENT)
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Patient Age: {calcAge} yrs</label>
                      <input
                        type="range"
                        min="25"
                        max="75"
                        value={calcAge}
                        onChange={(e) => setCalcAge(Number(e.target.value))}
                        className="w-36 accent-emerald-600"
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Systolic Blood Pressure: {calcBp} mmHg</label>
                      <input
                        type="range"
                        min="100"
                        max="190"
                        value={calcBp}
                        onChange={(e) => setCalcBp(Number(e.target.value))}
                        className="w-36 accent-emerald-600"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="font-semibold">Tobacco Smoker</label>
                      <input
                        type="checkbox"
                        checked={calcSmoker}
                        onChange={(e) => setCalcSmoker(e.target.checked)}
                        className="w-4 h-4 accent-emerald-600 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="font-semibold">Diagnosed Type 2 Diabetes</label>
                      <input
                        type="checkbox"
                        checked={calcDiabetes}
                        onChange={(e) => setCalcDiabetes(e.target.checked)}
                        className="w-4 h-4 accent-emerald-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Environmental Exposome Toxicants */}
                <div className="space-y-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <span className="text-xs font-mono font-bold text-amber-800 dark:text-amber-300 uppercase block">
                    2. Toxic Habitat & Exposome Variables (Anakwue Model)
                  </span>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Daily Generator Fume Exposure: {calcGeneratorExposure} hrs</label>
                      <input
                        type="range"
                        min="0"
                        max="12"
                        value={calcGeneratorExposure}
                        onChange={(e) => setCalcGeneratorExposure(Number(e.target.value))}
                        className="w-36 accent-amber-600"
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="font-semibold">Daily Sachet Water Ingestion: {calcSachetWaterDaily} sachets</label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={calcSachetWaterDaily}
                        onChange={(e) => setCalcSachetWaterDaily(Number(e.target.value))}
                        className="w-36 accent-amber-600"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <label className="font-semibold">Biomass / Firewood Indoor Cooking</label>
                      <input
                        type="checkbox"
                        checked={calcBiomassFuel}
                        onChange={(e) => setCalcBiomassFuel(e.target.checked)}
                        className="w-4 h-4 accent-amber-600 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <label className="font-semibold">Lead/Cadmium E-Waste / Battery Recycler Proximity</label>
                      <input
                        type="checkbox"
                        checked={calcHeavyMetalRisk}
                        onChange={(e) => setCalcHeavyMetalRisk(e.target.checked)}
                        className="w-4 h-4 accent-amber-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

              </div>

              {/* Comparison Output */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="p-4 bg-stone-100 dark:bg-stone-800/80 rounded-xl border border-stone-300 dark:border-stone-700 text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase text-stone-500 block">Framingham / PREVENT Score</span>
                  <div className="text-3xl font-bold font-mono text-stone-800 dark:text-stone-200">{traditionalScore}%</div>
                  <span className="text-[10px] font-mono text-stone-500">Traditional Risk Bracket</span>
                </div>

                <div className="p-4 bg-amber-500/20 border border-amber-500/40 rounded-xl text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-700 dark:text-amber-300 font-bold block">True Exposome Biological Risk</span>
                  <div className="text-3xl font-bold font-mono text-amber-600 dark:text-amber-400">{exposomeScore}%</div>
                  <span className="text-[10px] font-mono text-amber-700 dark:text-amber-300 font-bold">Includes Toxic Shadow Burden</span>
                </div>

                <div className="p-4 bg-rose-500/20 border border-rose-500/40 rounded-xl text-center space-y-1">
                  <span className="text-[10px] font-mono uppercase text-rose-700 dark:text-rose-300 font-bold block">Diagnostic Blind Spot</span>
                  <div className="text-3xl font-bold font-mono text-rose-600 dark:text-rose-400">+{riskDelta}%</div>
                  <span className="text-[10px] font-mono text-rose-700 dark:text-rose-300">Unmeasured Biological Hazard</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* =========================================================================
          CROSS-NAVIGATION FOOTER
          ========================================================================= */}
      <footer className={`border-t py-8 mt-12 transition-colors ${
        isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500 dark:text-stone-400">
          <div>
            <span>ICEarth Sovereign Exposenomics Repository • Document Ref: UNN-249-ANAKWUE-2026</span>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigateTab && onNavigateTab('cleveland')}
              className="text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              ← Cleveland Lead Audit
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateTab && onNavigateTab('artisanal_mining')}
              className="text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              Artisanal Mining Proofs →
            </button>
            <span>•</span>
            <button
              onClick={() => onNavigateTab && onNavigateTab('reports')}
              className="text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              Global Newsfeed →
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
