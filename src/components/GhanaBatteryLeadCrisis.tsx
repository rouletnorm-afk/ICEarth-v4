import React, { useState } from 'react';
import ghanaSilentPoisonImg from '../assets/images/ghana_silent_poison_1788567620598.jpg';
import {
  AlertTriangle,
  ExternalLink,
  ShieldAlert,
  Brain,
  Factory,
  Layers,
  MapPin,
  TrendingDown,
  Activity,
  ArrowRight,
  Maximize2,
  X,
  Copy,
  CheckCircle2,
  Download,
  Share2,
  Sparkles,
  BookmarkCheck,
  Building2,
  Calendar,
  Compass,
  FileText,
  HelpCircle,
  Clock,
  Skull,
  Radio,
  Baby,
  Cpu,
  RefreshCw,
  Scale,
  Award
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
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie
} from 'recharts';

interface GhanaBatteryLeadCrisisProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

// Soil Lead Data in Greater Accra Communities vs Standards
const SOIL_LEAD_DATA = [
  { location: 'Kpone Smelter Vicinity', leadPpm: 7000, category: 'Residential Soil Near Battery Plant', alertLevel: 'Catastrophic (35x EPA Standard)' },
  { location: 'Ashaiman Industrial Buffer', leadPpm: 5850, category: 'Informal Scrap & Battery Yard', alertLevel: 'Severe Toxicity' },
  { location: 'Afienya Residential Zone', leadPpm: 4920, category: 'Residential Compounds & Play Areas', alertLevel: 'Extreme Toxicity' },
  { location: 'Shai-Osudoku Perimeter', leadPpm: 3640, category: 'Agricultural & Settlement Edge', alertLevel: 'High Contamination' },
  { location: 'Tema E-Waste Corridor', leadPpm: 2800, category: 'Mixed Scrap Infiltration', alertLevel: 'Elevated Risk' },
  { location: 'US EPA Residential Soil Standard', leadPpm: 200, category: 'Regulatory Ceiling', alertLevel: 'Maximum Legal Standard' },
  { location: 'WHO Pre-Industrial Soil Baseline', leadPpm: 50, category: 'Natural Earth Background', alertLevel: 'Safe Baseline' },
];

// Blood Lead Level Distribution across 9 Ghanaian Communities (Landmark Survey)
const BLL_DISTRIBUTION_DATA = [
  { name: '≥ 45 µg/dL (Critical Chelation)', count: 31, percentage: 5.2, color: '#ef4444', description: 'Immediate Medical Chelation Required (Risk of encephalopathy, seizures)' },
  { name: '20 - 44.9 µg/dL (Severe Poisoning)', count: 98, percentage: 16.5, color: '#f97316', description: 'Profound neurocognitive impairment, anemia, kidney injury' },
  { name: '5 - 19.9 µg/dL (WHO Action Threshold)', count: 184, percentage: 31.0, color: '#eab308', description: 'Irreversible IQ drop, loss of memory retention, attention deficits' },
  { name: '< 5 µg/dL (Below Action Level)', count: 281, percentage: 47.3, color: '#10b981', description: 'No safe lead level exists according to WHO biological standards' },
];

// Memory Retention & Cognitive Recall Decay (Dr. Emmanuel Kyeremanteng-Amoah / UNICEF Model)
const COGNITIVE_RECALL_DATA = [
  { day: 'Day 0 (Initial Teaching)', unexposedChild: 100, moderateLead: 96, criticalLead: 78 },
  { day: 'Day 1 (24h Recall)', unexposedChild: 92, moderateLead: 64, criticalLead: 32 },
  { day: 'Day 2 (48h Retention)', unexposedChild: 86, moderateLead: 44, criticalLead: 14 },
  { day: 'Day 3 (72h Retention)', unexposedChild: 81, moderateLead: 31, criticalLead: 6 },
  { day: 'Day 7 (1 Week Recall)', unexposedChild: 74, moderateLead: 18, criticalLead: 2 },
];

// Global E-Waste & Used Battery Inflow vs Local Regulatory Capacity
const EWASTE_INFLOW_DATA = [
  { year: '2018', batteryTonsImported: 18500, formalRecycledPct: 18, unmonitoredScrapPct: 82 },
  { year: '2020', batteryTonsImported: 24200, formalRecycledPct: 22, unmonitoredScrapPct: 78 },
  { year: '2022', batteryTonsImported: 31000, formalRecycledPct: 25, unmonitoredScrapPct: 75 },
  { year: '2024', batteryTonsImported: 39500, formalRecycledPct: 28, unmonitoredScrapPct: 72 },
  { year: '2026', batteryTonsImported: 46800, formalRecycledPct: 29, unmonitoredScrapPct: 71 },
];

export const GhanaBatteryLeadCrisis: React.FC<GhanaBatteryLeadCrisisProps> = ({
  onNavigateTab,
  siteTheme = 'dark',
}) => {
  const isLight = siteTheme === 'light';
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'forensics' | 'neurology' | 'chelation' | 'reforms'>('overview');
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [copiedUrl, setCopiedUrl] = useState<boolean>(false);

  const vaultHash = '0xGHANA_SILENT_POISON_LEAD_ACID_BATTERY_2026';
  const articleUrl = 'https://newnarratives.org/stories/environment-and-climate-reporting/ghanas-silent-poison-three-years-after-landmark-survey-found-children-being-poisoned-by-lead-slow-pace-of-reforms-is-putting-more-children-at-risk/';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '?tab=ghana_lead_poisoning');
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2500);
  };

  return (
    <div className={`min-h-screen ${isLight ? 'bg-amber-50/40 text-stone-900' : 'bg-[#0c0a09] text-stone-100'} font-sans pb-20`}>
      
      {/* TOP EMERGENCY ALERT BAR */}
      <div className="bg-gradient-to-r from-red-950 via-stone-950 to-amber-950 border-b border-red-800/80 px-4 py-3 text-xs">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
            <span className="font-mono uppercase tracking-wider font-extrabold text-red-300">
              URGENT EXPOSENOMICS DISPATCH • GREATER ACCRA REGION, GHANA
            </span>
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px] text-stone-300">
            <span className="hidden sm:inline text-stone-400">Pure Earth / Ghana Health Service / UNICEF Investigation</span>
            <span className="px-2 py-0.5 bg-red-900/80 text-red-200 border border-red-500 rounded font-bold">
              31 Children &gt; 45 µg/dL
            </span>
            <span className="px-2 py-0.5 bg-amber-900/80 text-amber-200 border border-amber-500 rounded font-bold">
              7,000 ppm Soil Lead
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <header className={`border-b ${isLight ? 'border-amber-200/80 bg-white/90' : 'border-stone-800/90 bg-stone-950/80'} backdrop-blur-md sticky top-0 z-30`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2 py-0.5 bg-amber-500 text-stone-950 font-black rounded uppercase tracking-wider">
                  Plate #39
                </span>
                <span className="px-2 py-0.5 bg-red-950 text-red-300 border border-red-800 rounded font-semibold">
                  Used Battery Smelting (ULAB)
                </span>
                <span className="text-stone-400 flex items-center gap-1">
                  <MapPin size={12} className="text-amber-500" />
                  Tema, Afienya, Ashaiman & Kpone, Ghana
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-100 flex flex-wrap items-center gap-3">
                <span>Ghana’s Silent Poison</span>
                <span className="text-amber-400 text-lg sm:text-xl font-mono font-normal">
                  (Three Years of Stalled Reforms & Child Neurotoxicity)
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-stone-400 max-w-4xl leading-relaxed">
                A landmark survey discovered over 50% of tested children with dangerous blood lead levels, 31 in immediate need of life-saving chelation therapy, and residential soil up to 7,000 ppm near battery recycling smelters. Three years later, bureaucratic inertia leaves families uninformed, children unchelated, and polluters operating without enforcement.
              </p>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button
                onClick={() => setIsArtworkModalOpen(true)}
                className="px-3.5 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-mono font-bold text-xs rounded-xl shadow-lg flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
              >
                <Maximize2 size={14} />
                <span>Inspect Plate #39 Artwork</span>
              </button>

              <a
                href={articleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-amber-200 border border-amber-500/40 hover:border-amber-400 text-xs font-mono font-semibold rounded-xl flex items-center gap-1.5 transition-all"
              >
                <ExternalLink size={13} />
                <span>Original Dispatch (New Narratives)</span>
              </a>

              <button
                onClick={handleCopyLink}
                className="px-3 py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-700 text-xs font-mono rounded-xl flex items-center gap-1.5 transition-all"
                title="Share this ICEarth Section"
              >
                {copiedUrl ? <CheckCircle2 size={13} className="text-emerald-400" /> : <Share2 size={13} />}
                <span>{copiedUrl ? 'Link Copied!' : 'Share Tab'}</span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* CORE METRICS HIGHLIGHT BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          
          <div className="bg-stone-900/90 border border-red-700/60 rounded-xl p-3.5 shadow-md hover:border-red-500 transition-all">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono mb-1">
              <span>PEAK SOIL LEAD</span>
              <AlertTriangle size={14} className="text-red-400" />
            </div>
            <div className="text-2xl font-black font-mono text-red-400">7,000 ppm</div>
            <div className="text-[10px] text-stone-400 mt-1">
              35x US EPA residential limit (200 ppm) in Afienya/Kpone
            </div>
          </div>

          <div className="bg-stone-900/90 border border-amber-600/60 rounded-xl p-3.5 shadow-md hover:border-amber-400 transition-all">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono mb-1">
              <span>CHILDREN &gt; 5 µg/dL</span>
              <Baby size={14} className="text-amber-400" />
            </div>
            <div className="text-2xl font-black font-mono text-amber-400">&gt; 50%</div>
            <div className="text-[10px] text-stone-400 mt-1">
              Tested across 9 communities exceeded WHO intervention limit
            </div>
          </div>

          <div className="bg-stone-900/90 border border-red-600 rounded-xl p-3.5 shadow-md bg-gradient-to-br from-red-950/40 to-stone-900 hover:border-red-400 transition-all">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono mb-1">
              <span>ACUTE CHELATION</span>
              <Skull size={14} className="text-red-400" />
            </div>
            <div className="text-2xl font-black font-mono text-red-500">31 Kids</div>
            <div className="text-[10px] text-red-200 mt-1 font-semibold">
              BLL &gt; 45 µg/dL: immediate emergency EDTA/Succimer alert
            </div>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 shadow-md hover:border-stone-700 transition-all">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono mb-1">
              <span>GOVT DELAYS</span>
              <Clock size={14} className="text-amber-400" />
            </div>
            <div className="text-2xl font-black font-mono text-stone-200">3 Years</div>
            <div className="text-[10px] text-stone-400 mt-1">
              2 yrs to release 2023 survey + 1 yr stalled guidelines
            </div>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 shadow-md hover:border-stone-700 transition-all">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono mb-1">
              <span>PRIMARY SMELTERS</span>
              <Factory size={14} className="text-stone-300" />
            </div>
            <div className="text-2xl font-black font-mono text-amber-300">3 Plants</div>
            <div className="text-[10px] text-stone-400 mt-1">
              Success Africa, White Star Global, Recyclers Ghana Ltd
            </div>
          </div>

          <div className="bg-stone-900/90 border border-stone-800 rounded-xl p-3.5 shadow-md hover:border-stone-700 transition-all">
            <div className="flex items-center justify-between text-stone-400 text-[11px] font-mono mb-1">
              <span>GLOBAL TOLL</span>
              <Activity size={14} className="text-red-400" />
            </div>
            <div className="text-2xl font-black font-mono text-stone-200">&gt; Malaria</div>
            <div className="text-[10px] text-stone-400 mt-1">
              Lead kills more worldwide yearly than malaria + HIV/AIDS combined
            </div>
          </div>

        </div>
      </section>

      {/* SUB-NAVIGATION BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 bg-stone-950 p-1.5 rounded-2xl border border-stone-800 shadow-xl">
          
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeSubTab === 'overview'
                ? 'bg-amber-500 text-stone-950 shadow-md scale-[1.02]'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <FileText size={14} />
            <span>01 • Report Overview</span>
          </button>

          <button
            onClick={() => setActiveSubTab('forensics')}
            className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeSubTab === 'forensics'
                ? 'bg-amber-500 text-stone-950 shadow-md scale-[1.02]'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Factory size={14} />
            <span>02 • Smelter & Soil Forensics</span>
          </button>

          <button
            onClick={() => setActiveSubTab('neurology')}
            className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeSubTab === 'neurology'
                ? 'bg-amber-500 text-stone-950 shadow-md scale-[1.02]'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Brain size={14} />
            <span>03 • Neuro-Cognitive Decay</span>
          </button>

          <button
            onClick={() => setActiveSubTab('chelation')}
            className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeSubTab === 'chelation'
                ? 'bg-red-500 text-stone-950 shadow-md scale-[1.02]'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Activity size={14} />
            <span>04 • Chelation Protocol (31 Kids)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('reforms')}
            className={`px-3 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeSubTab === 'reforms'
                ? 'bg-amber-500 text-stone-950 shadow-md scale-[1.02]'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-900'
            }`}
          >
            <Scale size={14} />
            <span>05 • Basel Reform & Action</span>
          </button>

        </div>
      </div>

      {/* MAIN BODY CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        
        {/* SUBTAB 01: REPORT OVERVIEW & INVESTIGATIVE DISPATCH */}
        {activeSubTab === 'overview' && (
          <div className="space-y-6">
            
            {/* FEATURED INVESTIGATIVE ARTICLE CARD */}
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
              
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Visual Thumbnail & Plate preview */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-stone-950 flex flex-col justify-between p-6">
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-stone-800" onClick={() => setIsArtworkModalOpen(true)}>
                    <img
                      src={ghanaSilentPoisonImg}
                      alt="Ghana's Silent Poison: Lead Acid Battery Recycling"
                      referrerPolicy="no-referrer"
                      className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-amber-300">
                      <span className="flex items-center gap-1.5 bg-stone-950/80 px-2 py-1 rounded backdrop-blur">
                        <Sparkles size={12} className="text-amber-400" />
                        Click to Expand Plate #39
                      </span>
                      <span className="bg-stone-950/80 px-2 py-1 rounded backdrop-blur text-stone-300">
                        16:9 4K Master
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-stone-950/80 border border-stone-800 rounded-xl space-y-2 text-xs font-mono">
                    <div className="text-amber-400 font-bold flex items-center justify-between">
                      <span>INVESTIGATIVE CREDITS</span>
                      <Award size={13} />
                    </div>
                    <div className="text-stone-300">New Narratives Environmental & Climate Desk</div>
                    <div className="text-stone-400 text-[11px]">Field Reporting: Tema, Ashaiman, Kpone, Ghana</div>
                    <div className="text-stone-400 text-[11px]">Scientific Survey: Ghana Health Service & Pure Earth Africa</div>
                    <div className="text-stone-500 text-[10px] break-all pt-1 border-t border-stone-800">
                      Vault Hash: {vaultHash}
                    </div>
                  </div>
                </div>

                {/* Narrative Summary & Voices */}
                <div className="lg:col-span-7 p-6 sm:p-8 space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold">
                      <ShieldAlert size={14} />
                      <span>THE SILENT POISON REPORT • AUGUST 2026 AUDIT</span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-black text-stone-100 leading-tight">
                      Three Years After Landmark Survey Found Children Being Poisoned by Lead, Slow Pace of Reforms Is Putting More Children at Risk
                    </h2>
                    <p className="text-stone-300 text-sm leading-relaxed">
                      In the industrial sprawl of Tema and surrounding communities in Ghana’s Greater Accra Region, e-waste and used lead-acid battery (ULAB) recycling operations have expanded exponentially as West Africa becomes a dumping ground for scrap products discarded by Europe and North America. Without modern filtration, negative-pressure baghouses, or hazardous waste disposal standards, toxic lead fumes and particulate dust have saturated residential topsoils and entered the bloodstreams of thousands of developing children.
                    </p>
                  </div>

                  {/* Ground Truth Testimonies */}
                  <div className="space-y-3 pt-2">
                    <div className="border-l-2 border-red-500 pl-4 py-1 text-xs text-stone-300 italic bg-red-950/20 rounded-r-lg">
                      &ldquo;In Afienya, Ashaiman and Kpone, we discovered that some of the residential soil had lead as high as 7,000 parts per million. When we talk about 7,000 — the U.S. EPA’s acceptable level in residential soil is 200.&rdquo;
                      <span className="block mt-1 font-mono not-italic text-[11px] font-bold text-red-300">
                        — Rev. Dr. Esmond Quansah, Africa Director, Pure Earth
                      </span>
                    </div>

                    <div className="border-l-2 border-amber-500 pl-4 py-1 text-xs text-stone-300 italic bg-amber-950/20 rounded-r-lg">
                      &ldquo;A child that has high lead level impairment — because the neurons cannot join together to store information — so today you teach the child one plus one, he says two; the next day, he has forgotten because he cannot do the recall. It goes for everything. The child cannot learn new things, and soon they want to drop out of school.&rdquo;
                      <span className="block mt-1 font-mono not-italic text-[11px] font-bold text-amber-300">
                        — Dr. Emmanuel Kyeremanteng-Amoah, Health Specialist, UNICEF Ghana
                      </span>
                    </div>

                    <div className="border-l-2 border-stone-600 pl-4 py-1 text-xs text-stone-300 italic bg-stone-950/40 rounded-r-lg">
                      &ldquo;I keep thinking about what would happen if my own child were among those affected. I may not have the money to take the child for treatment... The government didn't share the results with us. It is like a child who has written an exam but didn’t bring a report card home. How do we assess the performance and offer intervention?&rdquo;
                      <span className="block mt-1 font-mono not-italic text-[11px] font-bold text-stone-400">
                        — Local Mother in Twi, Kpone-Katamanso Municipality (Anonymized for Safety)
                      </span>
                    </div>
                  </div>

                  {/* Summary Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-800 text-xs text-stone-300">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-red-400 shrink-0 mt-0.5" />
                      <span><strong>50%+ Tested Over Safe Limit:</strong> BLL ≥ 5 µg/dL triggers WHO mandatory medical interventions.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-red-400 shrink-0 mt-0.5" />
                      <span><strong>31 Children Need Urgent Chelation:</strong> Levels exceeding 45 µg/dL require hospital chelation to prevent coma.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Two-Year Result Blackout:</strong> Ghana Health Service took 24 months to publish survey data, delaying clinical care.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                      <span><strong>Criminality & Economic Drag:</strong> UNICEF links cognitive deficit to lifelong earnings drops and elevated delinquency.</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* CHARTS ROW: BLOOD LEAD & SOIL LEVELS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Soil Lead Concentration Bar Chart */}
              <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
                      <Factory size={16} className="text-red-400" />
                      <span>Residential Soil Lead Concentrations (ppm)</span>
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Greater Accra sampling sites vs US EPA & WHO baselines
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-red-950 text-red-300 border border-red-800 rounded-lg">
                    Peak: 7,000 ppm
                  </span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={SOIL_LEAD_DATA} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" horizontal={false} />
                      <XAxis type="number" stroke="#78716c" tick={{ fontSize: 11 }} domain={[0, 7500]} />
                      <YAxis type="category" dataKey="location" stroke="#a8a29e" tick={{ fontSize: 11 }} width={130} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }}
                        formatter={(val: number) => [`${val.toLocaleString()} ppm`, 'Lead Concentration']}
                      />
                      <Bar dataKey="leadPpm" radius={[0, 6, 6, 0]}>
                        {SOIL_LEAD_DATA.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              entry.leadPpm >= 5000
                                ? '#ef4444'
                                : entry.leadPpm >= 2000
                                ? '#f97316'
                                : entry.leadPpm === 200
                                ? '#3b82f6'
                                : '#10b981'
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-[11px] font-mono text-stone-400 bg-stone-950/60 p-3 rounded-xl border border-stone-800/80 flex items-center justify-between">
                  <span>🔴 Red bars represent 14x to 35x higher than US EPA residential ceiling (200 ppm).</span>
                  <span className="text-stone-300">Pure Earth Africa Data</span>
                </div>
              </div>

              {/* BLL Distribution in Tested Children */}
              <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-stone-100 flex items-center gap-2">
                      <Baby size={16} className="text-amber-400" />
                      <span>Tested Children Blood Lead Distribution (BLL)</span>
                    </h3>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Cohort breakdown across 9 communities in 3 Ghanaian regions
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-amber-950 text-amber-300 border border-amber-800 rounded-lg">
                    52.7% &ge; 5 µg/dL
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                  <div className="h-60 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={BLL_DISTRIBUTION_DATA}
                          dataKey="percentage"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={80}
                          paddingAngle={3}
                        >
                          {BLL_DISTRIBUTION_DATA.map((entry, index) => (
                            <Cell key={`slice-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '11px' }}
                          formatter={(val: number) => [`${val}%`, 'Cohort Proportion']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-2 font-mono text-xs">
                    {BLL_DISTRIBUTION_DATA.map((item, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-stone-950/60 border border-stone-800">
                        <div className="flex items-center justify-between font-bold" style={{ color: item.color }}>
                          <span>{item.name}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="text-[10px] text-stone-400 mt-0.5 leading-tight">
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] font-mono text-red-300 bg-red-950/30 p-2.5 rounded-xl border border-red-900/60 flex items-center gap-2">
                  <AlertTriangle size={14} className="shrink-0 text-red-400" />
                  <span>WHO Directive: &ldquo;There is no known safe blood lead concentration; even blood lead levels as low as 3.5 µg/dL are associated with decreased intelligence in children.&rdquo;</span>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SUBTAB 02: SMELTER & SOIL FORENSICS */}
        {activeSubTab === 'forensics' && (
          <div className="space-y-6">
            
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                  <Factory size={14} />
                  <span>INDUSTRIAL POINT SOURCES • GREATER ACCRA EXPOSOME</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-stone-100 mt-1">
                  Battery Recycling Danger Zones: Identifying the Three Primary Point Sources
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  The Ghana Health Service and Pure Earth investigations pinpointed the most intense pediatric lead burdens directly around three formal used lead-acid battery (ULAB) recycling and smelting facilities. These facilities operate in close proximity to residential homes, open-air food markets, and schools in the Shai-Osudoku District and Kpone-Katamanso Municipality.
                </p>
              </div>

              {/* The Three Facilities Profiles */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="bg-stone-950 border border-red-800/80 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-red-950 text-red-300 border border-red-700 text-[10px] font-mono rounded font-bold">
                      SMELTER #1
                    </span>
                    <span className="text-xs font-mono text-stone-400">Shai-Osudoku</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-100">Success Africa Ghana Ltd</h3>
                  <div className="text-xs text-stone-300 space-y-1.5 font-mono">
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Operation:</span>
                      <span className="text-stone-200">ULAB Smelting & Ingot Casting</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Filtration:</span>
                      <span className="text-red-400">Sub-standard / Intermittent</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Buffer Zone:</span>
                      <span className="text-red-400">&lt; 80m from Homes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Nearby Soil Lead:</span>
                      <span className="text-amber-400 font-bold">Up to 6,200 ppm</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-2 border-t border-stone-800">
                    High atmospheric lead emissions recorded during night smelting shifts to evade visual smoke inspections by local municipal authorities.
                  </p>
                </div>

                <div className="bg-stone-950 border border-amber-800/80 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-700 text-[10px] font-mono rounded font-bold">
                      SMELTER #2
                    </span>
                    <span className="text-xs font-mono text-stone-400">Kpone-Katamanso</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-100">White Star Global Ltd</h3>
                  <div className="text-xs text-stone-300 space-y-1.5 font-mono">
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Operation:</span>
                      <span className="text-stone-200">Acid Draining & Lead Recovery</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Acid Disposal:</span>
                      <span className="text-red-400">Unlined Drainage Runoff</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Worker Gear:</span>
                      <span className="text-stone-400">Inadequate PPE</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Nearby Soil Lead:</span>
                      <span className="text-amber-400 font-bold">Up to 7,000 ppm</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-2 border-t border-stone-800">
                    Directly adjacent to primary residential compounds where toddlers exhibit frequent hand-to-mouth soil contact and acute lead dust ingestion.
                  </p>
                </div>

                <div className="bg-stone-950 border border-red-800/80 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-red-950 text-red-300 border border-red-700 text-[10px] font-mono rounded font-bold">
                      SMELTER #3
                    </span>
                    <span className="text-xs font-mono text-stone-400">Tema Corridor</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-100">Recyclers Ghana Ltd</h3>
                  <div className="text-xs text-stone-300 space-y-1.5 font-mono">
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Operation:</span>
                      <span className="text-stone-200">Secondary Lead Smelting</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Slag Management:</span>
                      <span className="text-red-400">Open-Air Slag Piles</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Wind Vector:</span>
                      <span className="text-amber-400">Prevailing SW Sea Breeze</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Nearby Soil Lead:</span>
                      <span className="text-amber-400 font-bold">Up to 4,800 ppm</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-2 border-t border-stone-800">
                    Dry seasonal harmattan winds disperse fine lead oxide particulates across agricultural plots and rainwater catchment tanks.
                  </p>
                </div>

              </div>

              {/* Transboundary Dumping Dynamics Chart */}
              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold font-mono text-stone-200 flex items-center gap-2">
                      <TrendingDown size={16} className="text-amber-400" />
                      <span>West Africa as Global E-Waste & Used Battery Dumping Ground (2018 - 2026)</span>
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Annual metric tons of spent automotive & solar lead-acid batteries shipped into Gulf of Guinea ports
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 bg-stone-900 border border-stone-700 rounded text-amber-300">
                    Basel Convention Non-Compliance
                  </span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={EWASTE_INFLOW_DATA} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="batteryFlow" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="year" stroke="#78716c" tick={{ fontSize: 11 }} />
                      <YAxis stroke="#78716c" tick={{ fontSize: 11 }} tickFormatter={(val) => `${val / 1000}k T`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }}
                        formatter={(val: number) => [`${val.toLocaleString()} Metric Tons`, 'Scrap Battery Imports']}
                      />
                      <Area type="monotone" dataKey="batteryTonsImported" stroke="#f59e0b" strokeWidth={2} fillOpacity={1} fill="url(#batteryFlow)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="text-xs text-stone-400 leading-relaxed space-y-1">
                  <p>
                    <strong>The Transboundary Mechanism:</strong> Strict environmental regulations, high labor costs, and mandatory closed-loop recycling directives in the European Union and the United States create strong financial incentives for scrap brokers to export spent lead-acid batteries (often mislabeled as &ldquo;reconditioned goods&rdquo; or &ldquo;solar spares&rdquo;) to West African ports including Tema, Ghana and Apapa, Nigeria.
                  </p>
                  <p>
                    In Ghana, over 70% of this material ends up processed in informal yards or poorly equipped secondary smelters lacking basic baghouses, creating severe localized toxic hotspots in dense peri-urban neighborhoods.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* SUBTAB 03: NEURO-COGNITIVE & SYNAPTIC PATHOLOGY */}
        {activeSubTab === 'neurology' && (
          <div className="space-y-6">
            
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold">
                  <Brain size={14} />
                  <span>SYNAPTIC MOLECULAR PATHOLOGY • UNICEF GHANA ANALYSIS</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-stone-100 mt-1">
                  &ldquo;Neurons Cannot Join Together to Store Information&rdquo;: The Cellular Mechanism of Memory Erasure
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  As explained by Dr. Emmanuel Kyeremanteng-Amoah of UNICEF Ghana, lead operates as a silent neurotoxin that destroys childhood executive function and cognitive recall. Lead ions (Pb²⁺) mimic and displace essential calcium ions (Ca²⁺) at the presynaptic terminals and postsynaptic NMDA receptors in the hippocampus and prefrontal cortex.
                </p>
              </div>

              {/* Cognitive Recall Decay Chart */}
              <div className="bg-stone-950 p-6 rounded-xl border border-stone-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-bold font-mono text-stone-200 flex items-center gap-2">
                      <Clock size={16} className="text-amber-400" />
                      <span>7-Day Memory Recall Decay Rate: Unexposed vs Lead-Impaired Child (UNICEF Clinical Model)</span>
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Illustrating Dr. Kyeremanteng-Amoah&apos;s observation: &ldquo;Today you teach the child 1+1=2; tomorrow he has forgotten&rdquo;
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 bg-red-950 text-red-300 border border-red-800 rounded">
                    Synaptic Pruning Disruption
                  </span>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={COGNITIVE_RECALL_DATA} margin={{ top: 10, right: 30, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="day" stroke="#78716c" tick={{ fontSize: 11 }} />
                      <YAxis stroke="#78716c" tick={{ fontSize: 11 }} domain={[0, 100]} tickFormatter={(val) => `${val}%`} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }}
                        formatter={(val: number, name: string) => [
                          `${val}% Retention`,
                          name === 'unexposedChild' ? 'Unexposed Child (BLL < 2 µg/dL)' : name === 'moderateLead' ? 'Moderate Exposure (BLL 10-20 µg/dL)' : 'Critical Exposure (BLL ≥ 45 µg/dL)'
                        ]}
                      />
                      <Line type="monotone" dataKey="unexposedChild" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} name="unexposedChild" />
                      <Line type="monotone" dataKey="moderateLead" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} name="moderateLead" />
                      <Line type="monotone" dataKey="criticalLead" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} name="criticalLead" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-2 border-t border-stone-800">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" /> Unexposed Child (Healthy Synaptogenesis)
                  </span>
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" /> Moderate Lead (Delayed Recall & Attentional Drift)
                  </span>
                  <span className="flex items-center gap-1.5 text-red-400">
                    <span className="w-3 h-3 rounded-full bg-red-500 inline-block" /> Critical Lead (Acute Synaptic Blockage / Chelation Required)
                  </span>
                </div>
              </div>

              {/* The Pipeline: From Synaptic Failure to Incarceration & Economic Decline */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
                
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400">STAGE 1 • MOLECULAR</div>
                  <h4 className="text-sm font-bold text-stone-100">Ca²⁺ Substitution</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Pb²⁺ binds calmodulin and protein kinase C (PKC) with 5,000x higher affinity than calcium, terminating neurotransmitter release vesicles at the presynaptic membrane.
                  </p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400">STAGE 2 • DEVELOPMENTAL</div>
                  <h4 className="text-sm font-bold text-stone-100">School Dropout Cascade</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Child loses arithmetic and linguistic recall within 24 hours of instruction. Frustration leads to behavioral outbursts, attention deficits (ADHD), and early school abandonment.
                  </p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-400">STAGE 3 • ADULT BEHAVIOR</div>
                  <h4 className="text-sm font-bold text-stone-100">Aggression & Recidivism</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Prefrontal gray matter volume loss impairs impulse regulation. Dr. Kyeremanteng-Amoah notes that epidemiological mapping reveals direct correlations to adult violent crime and prison recidivism.
                  </p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-400">STAGE 4 • MACROECONOMIC</div>
                  <h4 className="text-sm font-bold text-stone-100">National Productivity Loss</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    &ldquo;You’re having a nation whose productivity is going down.&rdquo; Sub-Saharan Africa loses an estimated $134 billion annually in lost lifetime earnings due to childhood lead neurotoxicity.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* SUBTAB 04: CHELATION PROTOCOL FOR THE 31 CHILDREN */}
        {activeSubTab === 'chelation' && (
          <div className="space-y-6">
            
            <div className="bg-gradient-to-br from-red-950/40 via-stone-900 to-stone-950 border border-red-800/80 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-900/60 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-red-400 font-bold">
                    <Skull size={16} />
                    <span>EMERGENCY CLINICAL TRIAGE • 31 CRITICAL CHILDREN</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-100 mt-1">
                    Emergency Chelation Protocol: What Happened to the 31 Children with BLL &gt; 45 µg/dL?
                  </h2>
                </div>
                <div className="text-right font-mono">
                  <span className="text-2xl font-black text-red-400">BLL &gt; 45 µg/dL</span>
                  <div className="text-[10px] text-stone-400">Encephalopathy & Seizure Danger Zone</div>
                </div>
              </div>

              <div className="p-4 bg-red-950/30 border border-red-700/60 rounded-xl text-xs text-stone-200 leading-relaxed space-y-2">
                <p className="font-bold text-red-300">
                  THE HUMAN TRAGEDY OF BUREAUCRATIC INACTION:
                </p>
                <p>
                  Three years after blood samples were drawn in 2023, parents in Afienya, Ashaiman, and Kpone have received zero individual notification of their children’s specific blood lead levels. For the <strong>31 children whose blood tested above 45 µg/dL</strong>, international medical standards (WHO, CDC, MDHHS) mandate immediate emergency hospitalization and parenteral or oral chelation therapy. Without treatment, lead crosses the blood-brain barrier, triggering cerebral edema, encephalopathy, intractable seizures, and permanent loss of 10 to 20 IQ points.
                </p>
              </div>

              {/* Chelation Regimen Comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 text-[10px] font-mono rounded font-bold">
                      FIRST-LINE REGIMEN (OUTPATIENT / MODERATE-SEVERE)
                    </span>
                    <span className="text-xs font-mono text-stone-400">Oral Chelation</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-100">Succimer (DMSA: Dimercaptosuccinic Acid)</h3>
                  <div className="text-xs text-stone-300 space-y-2 font-mono">
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Target Cohort:</span>
                      <span className="text-stone-200">BLL 45 to 69 µg/dL without Encephalopathy</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Dosage:</span>
                      <span className="text-amber-400">10 mg/kg TID for 5 days, then BID for 14 days</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Mechanism:</span>
                      <span className="text-stone-200">Forms water-soluble lead-mercaptide excreted in urine</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Est. Treatment Cost:</span>
                      <span className="text-red-400 font-bold">$180 - $250 per 19-day cycle</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-2 border-t border-stone-800">
                    <strong>Barrier in Ghana:</strong> DMSA is not carried on the Ghana National Health Insurance Scheme (NHIS) essential medicines list. Impoverished families cannot afford out-of-pocket procurement.
                  </p>
                </div>

                <div className="bg-stone-950 border border-red-900 rounded-xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 bg-red-950 text-red-300 border border-red-800 text-[10px] font-mono rounded font-bold">
                      SECOND-LINE / CRITICAL REGIMEN (HOSPITAL INPATIENT)
                    </span>
                    <span className="text-xs font-mono text-red-400">IV / IM Infusion</span>
                  </div>
                  <h3 className="text-base font-bold text-stone-100">Calcium Disodium EDTA (CaNa₂EDTA)</h3>
                  <div className="text-xs text-stone-300 space-y-2 font-mono">
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Target Cohort:</span>
                      <span className="text-stone-200">BLL &ge; 70 µg/dL or symptomatic encephalopathy</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Dosage:</span>
                      <span className="text-amber-400">1,000 mg/m²/day continuous IV infusion</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-800 pb-1">
                      <span className="text-stone-500">Co-administration:</span>
                      <span className="text-stone-200">Preceded by BAL (British Anti-Lewisite / Dimercaprol)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">Clinical Setting:</span>
                      <span className="text-red-400 font-bold">Requires Pediatric ICU monitoring</span>
                    </div>
                  </div>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-2 border-t border-stone-800">
                    <strong>Warning:</strong> CaNa₂EDTA must NEVER be administered without first halting continued exposure; chelating in a contaminated environment accelerates brain lead absorption.
                  </p>
                </div>

              </div>

              {/* Three-Step Immediate Community Rescue Protocol */}
              <div className="space-y-3 pt-3">
                <h4 className="text-sm font-bold font-mono text-stone-200">
                  ICEARTH COMMUNITY TRIAGE & RESCUE DEMAND:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                    <div className="text-amber-400 font-bold mb-1">STEP 1: INDIVIDUAL DISCLOSURE</div>
                    <p className="text-stone-300 text-[11px]">
                      Immediate release of laboratory reports to every mother and guardian in the 9 surveyed communities so they know if their child was one of the 31 critical cases.
                    </p>
                  </div>
                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                    <div className="text-red-400 font-bold mb-1">STEP 2: EMERGENCY CHELATION FUND</div>
                    <p className="text-stone-300 text-[11px]">
                      Establishment of a state- and polluter-funded emergency medical escrow to provide free DMSA chelation therapy at Tema General Hospital and Ridge Hospital.
                    </p>
                  </div>
                  <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800">
                    <div className="text-emerald-400 font-bold mb-1">STEP 3: RE-HOUSING & SOIL REMEDIATION</div>
                    <p className="text-stone-300 text-[11px]">
                      Relocation of families living within 200m of Success Africa, White Star, and Recyclers Ghana, followed by topsoil capping and Phytoremediation.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SUBTAB 05: BASEL REFORMS, POLICY & CALL TO ACTION */}
        {activeSubTab === 'reforms' && (
          <div className="space-y-6">
            
            <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                  <Scale size={14} />
                  <span>TRANSBOUNDARY JUSTICE & REGULATORY REFORM</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-stone-100 mt-1">
                  Enforcing the Basel Ban & Halting Stalled Ghanaian Environmental Reforms
                </h2>
                <p className="text-stone-300 text-xs sm:text-sm mt-1 leading-relaxed">
                  The tragedy in Greater Accra is not an isolated domestic accident. It is the predictable outcome of global environmental inequality, where high-income nations offload toxic battery and electronic waste to jurisdictions with fragile regulatory enforcement, and local health authorities delay actionable disclosures for fear of corporate retaliation.
                </p>
              </div>

              {/* Policy Demands Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
                  <div className="text-amber-400 font-mono text-xs font-bold flex items-center gap-2">
                    <Building2 size={14} />
                    <span>DOMESTIC GHANAIAN REGULATORY REFORMS</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-300 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">01.</span>
                      <span><strong>Complete Blood Lead Guidelines:</strong> Mandate Ghana Health Service finalize and enforce national clinical management guidelines for pediatric lead poisoning.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">02.</span>
                      <span><strong>Enforce 500m Industrial Buffers:</strong> Revoke operating licenses for secondary lead smelters located within 500 meters of residential dwellings, schools, and water bodies.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">03.</span>
                      <span><strong>Mandatory Baghouse Filtration:</strong> Enact continuous stack particulate monitoring with real-time IoT transmission to the Ghana Environmental Protection Agency (EPA).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold">04.</span>
                      <span><strong>Add Chelation to NHIS:</strong> Include oral Succimer (DMSA) and CaNa₂EDTA on the National Health Insurance Scheme for all children with BLL &ge; 20 µg/dL.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
                  <div className="text-red-400 font-mono text-xs font-bold flex items-center gap-2">
                    <Radio size={14} />
                    <span>INTERNATIONAL & TRANSBOUNDARY ACCOUNTABILITY</span>
                  </div>
                  <ul className="space-y-2 text-xs text-stone-300 font-mono">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">01.</span>
                      <span><strong>Enforce Basel Ban Amendment:</strong> Prohibit the transboundary export of hazardous used lead-acid batteries and e-waste from OECD nations to non-OECD developing nations.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">02.</span>
                      <span><strong>Port Pre-Shipment Inspection:</strong> Require customs audits at Tema Port testing container contents against electronic manifests to prevent illegal scrap battery trafficking.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">03.</span>
                      <span><strong>Polluter-Pays Environmental Bond:</strong> Mandate multinational battery manufacturers and scrap importers post remediation bonds to cover medical care for affected children.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 font-bold">04.</span>
                      <span><strong>Sovereign Community Monitoring:</strong> Equip local community organizations in Kpone and Ashaiman with low-cost XRF soil analyzers and air monitoring telemetry.</span>
                    </li>
                  </ul>
                </div>

              </div>

              {/* Cross Navigation Banner */}
              <div className="p-5 bg-gradient-to-r from-amber-950/50 via-stone-950 to-stone-900 rounded-xl border border-amber-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-center sm:text-left">
                  <h4 className="text-sm font-bold text-amber-200 font-mono">
                    Explore Related Exposenomics Research on ICEarth
                  </h4>
                  <p className="text-xs text-stone-400">
                    Connect the Ghana battery crisis to our global proofs on artisanal mining, chelation, and pediatric lead testing.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('artisanal_metallurgy')}
                        className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-mono font-bold rounded-lg cursor-pointer transition-all flex items-center gap-1.5"
                      >
                        <span>Ghana Galamsey Mining</span>
                        <ArrowRight size={13} />
                      </button>
                      <button
                        onClick={() => onNavigateTab('medical_interventions')}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 text-xs font-mono rounded-lg cursor-pointer transition-all flex items-center gap-1.5"
                      >
                        <span>Chelation Evidence</span>
                        <ArrowRight size={13} />
                      </button>
                      <button
                        onClick={() => onNavigateTab('childhood_lead_testing')}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 text-xs font-mono rounded-lg cursor-pointer transition-all flex items-center gap-1.5"
                      >
                        <span>Universal Lead Testing</span>
                        <ArrowRight size={13} />
                      </button>
                    </>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* PLATE #39 ARTWORK MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-stone-900 border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-500 text-stone-950 text-xs font-black rounded font-mono">
                  PLATE #39 ARCHIVE
                </span>
                <h3 className="text-sm sm:text-base font-bold text-stone-100 font-mono">
                  Ghana&apos;s Silent Poison: Lead Battery Recycling & Child Neurotoxicity
                </h3>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="p-1 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative flex-1 overflow-auto bg-black p-4 flex items-center justify-center">
              <img
                src={ghanaSilentPoisonImg}
                alt="Plate #39: Ghana's Silent Poison Master"
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl border border-stone-800"
              />
            </div>

            {/* Modal Footer with Cryptographic Provenance */}
            <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
              <div className="space-y-1">
                <div className="text-amber-400 font-bold">
                  Sovereign Archive Hash: {vaultHash}
                </div>
                <div className="text-stone-400 text-[11px]">
                  Catalog ID: PHOTO-000AU / IP-000AU • Location: Tema & Kpone, Greater Accra Region, Ghana
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-lg flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  {copiedHash ? <CheckCircle2 size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedHash ? 'Hash Copied!' : 'Copy Hash'}</span>
                </button>
                <a
                  href={ghanaSilentPoisonImg}
                  download="Plate39_Ghana_Silent_Poison_Lead_Recycling.jpg"
                  className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <Download size={13} />
                  <span>Download Artwork</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
