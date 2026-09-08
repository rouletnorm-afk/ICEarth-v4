import React, { useState } from 'react';
import bangladeshLeadCrisisImg from '../assets/images/bangladesh_lead_crisis_1788864698233.jpg';
import bangladeshGraphicImg from '../assets/images/bangladesh_lead_free_2035_action_plan_1787002995679.jpg';
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
  Award,
  Globe,
  Truck,
  HeartPulse,
  Flame,
  Check
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
  Pie,
  Legend
} from 'recharts';

interface BangladeshLeadCrisisIgnoredProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'dark' | 'light';
}

// BLL Distribution & Cohort Comparisons (BBS / UNICEF MICS 2025 Survey & Dhaka Density)
const BLL_REGIONAL_DATA = [
  { region: 'Dhaka Metropolitan (Urban Industrial)', elevatedPct: 65.0, testedCohort: 'Children 12-59 mos', severity: 'Extreme Concentration', color: '#ef4444' },
  { region: 'Mirzapur (Pre-Remediation Baseline)', elevatedPct: 58.4, testedCohort: 'Community Perimeter', severity: 'Severe Industrial Residue', color: '#f97316' },
  { region: 'National Average (All Bangladesh)', elevatedPct: 38.34, testedCohort: 'Children 12-59 mos (BBS/MICS)', severity: 'Epidemic Nationwide Threshold', color: '#eab308' },
  { region: 'Mirzapur (Post-Remediation Soil Study)', elevatedPct: 24.1, testedCohort: 'Community Following Cleanup', severity: 'Remediated Agricultural Buffer', color: '#10b981' },
  { region: 'Pregnant Women (Nationwide MICS)', elevatedPct: 7.54, testedCohort: 'Pregnant Cohort (Fetal Risk)', severity: 'Transplacental Vulnerability', color: '#8b5cf6' },
  { region: 'WHO Biological Intervention Baseline', elevatedPct: 0.0, testedCohort: 'Safe Exposure Ceiling', severity: 'Zero Safe Threshold Exists', color: '#06b6d4' },
];

// Exposure Source Allocation Landscape (icddr,b & BBS 2025-2026 Forensics)
const EXPOSURE_LANDSCAPE_DATA = [
  { name: 'Informal ULAB Battery Recycling', pct: 42, color: '#ef4444', description: 'Over 1,100 informal smelting yards, driven by 65% electric 3-wheeler demand' },
  { name: 'Turmeric & Spice Adulteration', pct: 24, color: '#f97316', description: 'Lead chromate applied to brighten turmeric appearance in consumer markets' },
  { name: 'Industrial Emissions & Soil Dust', pct: 18, color: '#eab308', description: 'Dense textile, metals, and informal foundries in Dhaka and peri-urban hubs' },
  { name: 'Consumer Products, Toys & Cookware', pct: 16, color: '#3b82f6', description: '96 of 367 tested products positive; recycled aluminum cookware, paints, makeup' },
];

// Mirzapur Soil Lead Remediation Study (BMC Public Health 2026 Peer-Reviewed Intervention)
const MIRZAPUR_REMEDIATION_DATA = [
  { metric: 'Topsoil Lead Near Battery Yard (ppm)', preCleanup: 4200, postCleanup: 280, regulatoryGuideline: 200 },
  { metric: 'Household Dust Lead Levels (mg/m²)', preCleanup: 1850, postCleanup: 140, regulatoryGuideline: 50 },
  { metric: 'Childhood BLL in Proximity (µg/dL)', preCleanup: 22.4, postCleanup: 8.9, regulatoryGuideline: 5.0 },
  { metric: 'Livestock Mortality Rate Index', preCleanup: 78, postCleanup: 16, regulatoryGuideline: 5 },
];

// Electric Three-Wheeler Fleet Growth vs Informal Battery Smelting Volume
const THREE_WHEELER_BATTERY_DATA = [
  { year: '2016', fleetThousands: 650, informalSmelters: 520, leadRecoveredTons: 38000 },
  { year: '2018', fleetThousands: 1100, informalSmelters: 780, leadRecoveredTons: 59000 },
  { year: '2020', fleetThousands: 1650, informalSmelters: 940, leadRecoveredTons: 82000 },
  { year: '2022', fleetThousands: 2300, informalSmelters: 1100, leadRecoveredTons: 112000 },
  { year: '2024', fleetThousands: 2950, informalSmelters: 1240, leadRecoveredTons: 148000 },
  { year: '2026', fleetThousands: 3600, informalSmelters: 1380, leadRecoveredTons: 186000 },
];

export const BangladeshLeadCrisisIgnored: React.FC<BangladeshLeadCrisisIgnoredProps> = ({
  onNavigateTab,
  siteTheme = 'dark',
}) => {
  const isLight = siteTheme === 'light';
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'dhaka_mics' | 'battery_economy' | 'spices_products' | 'diagnostics_policy' | 'plate_view'>('overview');
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  const vaultHash = '0xBANGLADESH_LEAD_CRISIS_IGNORED_TOO_LONG_2026';
  const sourceArticleUrl = 'https://www.thedailystar.net/slow-reads/unheard-voices/news/lead-poisoning-bangladesh-crisis-ignored-too-long-4264201';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* HERO BANNER & INVESTIGATION METADATA */}
      <div className="relative overflow-hidden border-b border-red-900/40 bg-gradient-to-br from-stone-900 via-red-950/50 to-stone-950 px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
        <div className="absolute inset-0 bg-radial-gradient from-red-900/10 via-transparent to-transparent opacity-60 pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto space-y-6">
          {/* TOP TAGS BAR */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-red-600/90 text-white text-xs font-mono font-black uppercase rounded tracking-wider shadow-sm flex items-center gap-1.5">
              <Skull size={13} className="animate-pulse" />
              <span>EXPOSENOMICS INVESTIGATION</span>
            </span>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono rounded font-bold">
              PLATE #40 CRYPTOGRAPHIC VAULT
            </span>
            <span className="px-3 py-1 bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-mono rounded">
              BBS / UNICEF MICS 2025 AUDIT
            </span>
            <span className="px-3 py-1 bg-stone-800 text-stone-300 text-xs font-mono rounded">
              BMC PUBLIC HEALTH MIRZAPUR STUDY (2026)
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <div className="space-y-3 max-w-5xl">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Lead Poisoning in Bangladesh: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-500">A Crisis Ignored for Too Long</span>
            </h1>
            <p className="text-sm sm:text-lg text-stone-300 leading-relaxed font-sans">
              38.34% of young children across Bangladesh suffer from elevated blood lead levels (≥ 5 µg/dL), soaring to <strong className="text-red-400 font-black">65% in Dhaka</strong>. 
              Over 1,100 informal battery recycling smelters supply electric three-wheelers while lead chromate-adulterated turmeric, toxic cookware, and residential soils 
              irrevocably destroy children’s cognitive development—in a country lacking even a single national reference testing laboratory.
            </p>
          </div>

          {/* CITATION & JOURNALIST METADATA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs font-mono border-t border-stone-800 text-stone-400">
            <div>
              <span className="text-stone-500 block">INVESTIGATIVE JOURNALIST:</span>
              <span className="font-bold text-stone-200">Tagabun Taharim Titun (Daily Star)</span>
            </div>
            <div>
              <span className="text-stone-500 block">HEALTH SPECIALIST (UNICEF):</span>
              <span className="font-bold text-stone-200">Dr. Priscilla Wobil (UNICEF BD)</span>
            </div>
            <div>
              <span className="text-stone-500 block">EPIDEMIOLOGY & ICDDR,B:</span>
              <span className="font-bold text-stone-200">Dr. Mahbubur Rahman (IEDCR / icddr,b)</span>
            </div>
            <div>
              <span className="text-stone-500 block">ORIGIN DISPATCH & DATE:</span>
              <span className="font-bold text-amber-300">The Daily Star • September 4, 2026</span>
            </div>
          </div>

          {/* QUICK LINKS & VAULT BAR */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3">
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={sourceArticleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
              >
                <ExternalLink size={14} />
                <span>Read Original Daily Star Dispatch</span>
              </a>
              <button
                onClick={handleCopyHash}
                className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-stone-200 border border-stone-700 font-mono text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash (Plate #40)'}</span>
              </button>
            </div>

            {/* CROSS NAVIGATION PILLS */}
            <div className="flex flex-wrap items-center gap-2">
              {onNavigateTab && (
                <>
                  <button
                    onClick={() => onNavigateTab('bangladesh_lead_free')}
                    className="px-3.5 py-1.5 bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-600/50 font-mono text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Globe size={13} />
                    <span>Launch Bangladesh Lead-Free 2035 Plan</span>
                    <ArrowRight size={12} />
                  </button>
                  <button
                    onClick={() => onNavigateTab('ghana_lead_poisoning')}
                    className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-amber-300 border border-amber-600/40 font-mono text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Compare: Ghana Battery Crisis</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* CORE METRICS SUMMARY TILES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {/* Tile 1: National Childhood BLL */}
          <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-red-500/30 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span>National Children</span>
              <Baby size={14} className="text-red-500" />
            </div>
            <div className="text-2xl font-black text-red-600 dark:text-red-400 font-mono">38.34%</div>
            <div className="text-[10px] text-stone-600 dark:text-stone-400">BLL ≥ 5 µg/dL (12-59 mos)</div>
          </div>

          {/* Tile 2: Dhaka Concentration */}
          <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-red-600/50 shadow-sm space-y-1 bg-gradient-to-br from-red-500/5 to-transparent">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span>Dhaka Epicenter</span>
              <Building2 size={14} className="text-red-500" />
            </div>
            <div className="text-2xl font-black text-red-600 dark:text-red-400 font-mono">65.0%</div>
            <div className="text-[10px] text-stone-600 dark:text-stone-400">Extreme urban density & emissions</div>
          </div>

          {/* Tile 3: Pregnant Women */}
          <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-purple-500/30 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span>Pregnant Cohort</span>
              <HeartPulse size={14} className="text-purple-500" />
            </div>
            <div className="text-2xl font-black text-purple-600 dark:text-purple-400 font-mono">7.54%</div>
            <div className="text-[10px] text-stone-600 dark:text-stone-400">Transplacental fetal neuro-damage</div>
          </div>

          {/* Tile 4: Battery 3-Wheeler Demand */}
          <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-amber-500/30 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span>3-Wheeler Fleet</span>
              <Truck size={14} className="text-amber-500" />
            </div>
            <div className="text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">60-65%</div>
            <div className="text-[10px] text-stone-600 dark:text-stone-400">Of national lead battery demand</div>
          </div>

          {/* Tile 5: Informal Smelters */}
          <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-stone-300 dark:border-stone-800 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span>Informal Smelters</span>
              <Factory size={14} className="text-stone-400" />
            </div>
            <div className="text-2xl font-black text-stone-900 dark:text-stone-100 font-mono">&gt; 1,100</div>
            <div className="text-[10px] text-stone-600 dark:text-stone-400">Backyard ULAB recycling sites</div>
          </div>

          {/* Tile 6: National Reference Lab Gap */}
          <div className="bg-white dark:bg-stone-900 p-4 rounded-xl border border-red-500/40 shadow-sm space-y-1 bg-red-950/10">
            <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 font-mono">
              <span>National Lab Gap</span>
              <AlertTriangle size={14} className="text-red-500" />
            </div>
            <div className="text-2xl font-black text-red-600 dark:text-red-400 font-mono">0 Labs</div>
            <div className="text-[10px] text-stone-600 dark:text-stone-400">No public BLL reference facility</div>
          </div>
        </div>
      </div>

      {/* SUB-NAVIGATION TABS */}
      <div className="border-y border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 backdrop-blur sticky top-0 z-20 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex overflow-x-auto gap-2 py-3 font-mono text-xs no-scrollbar">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'overview'
                ? 'bg-red-600 text-white shadow'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Activity size={14} />
            <span>01 Executive Brief</span>
          </button>

          <button
            onClick={() => setActiveSubTab('dhaka_mics')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'dhaka_mics'
                ? 'bg-red-600 text-white shadow'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Building2 size={14} />
            <span>02 Dhaka 65% & MICS 2025 Data</span>
          </button>

          <button
            onClick={() => setActiveSubTab('battery_economy')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'battery_economy'
                ? 'bg-red-600 text-white shadow'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Truck size={14} />
            <span>03 3-Wheeler Fleet & 1,100 Smelters</span>
          </button>

          <button
            onClick={() => setActiveSubTab('spices_products')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'spices_products'
                ? 'bg-red-600 text-white shadow'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Flame size={14} />
            <span>04 Turmeric Chromate & Cookware</span>
          </button>

          <button
            onClick={() => setActiveSubTab('diagnostics_policy')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'diagnostics_policy'
                ? 'bg-red-600 text-white shadow'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <Scale size={14} />
            <span>05 Testing Blind Spot & Policy Solutions</span>
          </button>

          <button
            onClick={() => setActiveSubTab('plate_view')}
            className={`px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border ${
              activeSubTab === 'plate_view'
                ? 'bg-amber-500 text-stone-950 border-amber-300 shadow font-black'
                : 'bg-amber-500/10 text-amber-500 dark:text-amber-400 border-amber-500/40 hover:bg-amber-500/20'
            }`}
          >
            <Sparkles size={14} />
            <span>06 Plate #40 Artwork & Provenance</span>
          </button>
        </div>
      </div>

      {/* CONTENT SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 space-y-10">
        
        {/* SUBTAB 1: OVERVIEW & INVESTIGATION DISPATCH */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Full Investigation Narrative */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-red-600 dark:text-red-400 font-bold uppercase">
                    <FileText size={14} />
                    <span>The Unseen Catastrophe • Daily Star UNHEARD VOICES (Sept 4, 2026)</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white">
                    The Invisible Poison Woven into Everyday Economic Survival
                  </h2>
                  <div className="space-y-4 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                    <p>
                      There may be no black smoke rising from a furnace, no warning sign beside a road, and no visible mark on the toy a child carries home. 
                      In some parts of Bangladesh, however, the soil beneath homes and farmland carries the residue of years of toxic lead exposure. 
                      Near abandoned lead-acid battery recycling sites, lead remains in the environment long after furnaces have gone quiet, 
                      seeping into dust, agricultural soil, drinking water, livestock feed, and ultimately human bone marrow.
                    </p>
                    <p>
                      A 2026 study published in <em>BMC Public Health</em>, titled <strong>“Community responses to soil remediation for lead exposure reduction in Mirzapur, Bangladesh”</strong>, 
                      examined communities living near two abandoned battery recycling facilities following a soil remediation intervention. While residents celebrated improvements in crop yields, 
                      livestock health, and children’s energy, the study revealed deep anxieties regarding how toxic soil was handled and whether industrial pollution would return. For many families, 
                      immediate economic survival and livelihoods completely overshadow invisible toxicological hazards.
                    </p>
                    <blockquote className="p-4 bg-stone-50 dark:bg-stone-950 border-l-4 border-red-500 rounded-r-xl text-stone-800 dark:text-stone-200 italic">
                      “This is what makes our lead problem so difficult to confront. The contamination can be invisible, while the activities responsible for it are woven into everyday economic life. 
                      Batteries keep rickshaws and three-wheelers moving and provide backup power. Paint covers walls. Spices sit in kitchens. Toys are handled by children. The risk is not confined to a factory.”
                    </blockquote>
                    <p>
                      The <strong>Bangladesh Multiple Indicator Cluster Survey (MICS) 2025</strong>, conducted by the Bangladesh Bureau of Statistics (BBS) with UNICEF technical support, 
                      confirmed that <strong className="text-red-600 dark:text-red-400">38.34 percent of children aged 12 to 59 months</strong> and <strong className="text-purple-600 dark:text-purple-400">7.54 percent of pregnant women</strong> have 
                      elevated blood lead levels exceeding 5 µg/dL. In Dhaka, the proportion reaches a staggering <strong className="text-red-600 dark:text-red-400">65 percent</strong>.
                    </p>
                  </div>
                </div>

                {/* Cognitive and Fetal Breakdown Card */}
                <div className="bg-stone-100 dark:bg-stone-900/90 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-4">
                  <h3 className="text-base font-bold text-stone-950 dark:text-white flex items-center gap-2 font-mono">
                    <Brain size={16} className="text-red-500" />
                    <span>Irreversible Neurocognitive & Fetal Toxicity (Roulet’s Law)</span>
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Lead poisoning does not look like traditional poisoning. A child rarely appears visibly sick. Instead, lead disrupts neural synapses during rapid early-childhood brain development, 
                    crippling attention span, behavior regulation, spatial reasoning, and memory retention. In pregnant mothers, lead stored in bones for decades is mobilized into the bloodstream, crossing the placenta 
                    to damage the fetal nervous system and kidneys, intensified by prevalent iron and calcium deficiency anemia.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800">
                      <span className="text-red-500 font-bold block mb-1">Dr. Priscilla Wobil (UNICEF):</span>
                      <span className="text-stone-700 dark:text-stone-300 text-[11px]">
                        “The most critical period is from pregnancy through infancy and early childhood, when the brain is developing rapidly. The survey does not tell us exactly where the lead is coming from. The next step is to better identify exposure pathways.”
                      </span>
                    </div>
                    <div className="p-3 bg-white dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800">
                      <span className="text-amber-500 font-bold block mb-1">Dr. Mahbubur Rahman (icddr,b / IEDCR):</span>
                      <span className="text-stone-700 dark:text-stone-300 text-[11px]">
                        “In some industrial areas, elevated lead levels have been detected even 1.5 to 2 kilometers away from a source. In one investigation, 96 of 367 consumer product samples tested positive for lead.”
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Infographic & Exposure Breakdown */}
              <div className="space-y-6">
                {/* Artwork Thumbnail Card */}
                <div 
                  onClick={() => setIsArtworkModalOpen(true)}
                  className="group relative rounded-2xl overflow-hidden border-2 border-red-500/40 bg-stone-900 cursor-pointer shadow-xl"
                >
                  <img
                    src={bangladeshLeadCrisisImg}
                    alt="Lead Poisoning in Bangladesh: A Crisis Ignored for Too Long"
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-stone-900/90 backdrop-blur rounded-xl border border-red-500/30 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-red-400 font-bold">Plate #40 Archival Asset</span>
                      <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1">
                        <Maximize2 size={11} /> Click to View
                      </span>
                    </div>
                    <div className="text-xs font-bold truncate mt-0.5">Dhaka Three-Wheelers & Mirzapur Lead Soil Forensics</div>
                  </div>
                </div>

                {/* Exposure Allocation Pie Chart */}
                <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold font-mono text-stone-950 dark:text-white flex items-center gap-1.5">
                      <Layers size={14} className="text-amber-500" />
                      <span>Primary Exposure Pathways</span>
                    </h3>
                    <span className="text-[10px] font-mono text-stone-500">icddr,b / BBS 2026</span>
                  </div>

                  <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={EXPOSURE_LANDSCAPE_DATA}
                          dataKey="pct"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={65}
                          innerRadius={35}
                          paddingAngle={3}
                        >
                          {EXPOSURE_LANDSCAPE_DATA.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '11px' }}
                          formatter={(value: any) => [`${value}% Contribution`, 'Exposure Share']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="space-y-2 text-xs font-mono">
                    {EXPOSURE_LANDSCAPE_DATA.map((item, idx) => (
                      <div key={idx} className="flex items-start justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-1.5">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                          <span className="text-stone-700 dark:text-stone-300 font-semibold">{item.name}</span>
                        </div>
                        <span className="font-bold text-stone-900 dark:text-white shrink-0">{item.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Norm Roulet Commentary Tile */}
                <div className="bg-red-950/20 border border-red-500/30 p-5 rounded-2xl space-y-2">
                  <div className="text-[10px] font-mono uppercase font-black text-red-500 tracking-wider">
                    EXPOSENOMICS CURATORIAL ANALYSIS
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100 font-mono">
                    Norm Roulet on the Bangladesh Diagnostic Void
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
                    The catastrophe in Bangladesh represents the classic failure mode of unpriced toxic externalities under Roulet’s Law. 
                    Electric three-wheelers are celebrated as green mobility, yet their power source relies on 1,100 unregulated backyard smelters that permanently poison the children of Dhaka and Mirzapur. 
                    Without a national reference testing laboratory, millions of children suffer irreversible neuro-developmental decline in utter clinical silence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: DHAKA 65% & BBS/MICS 2025 DATA */}
        {activeSubTab === 'dhaka_mics' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white">
                    Dhaka Concentration: 65% Childhood Lead Poisoning
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    Source: Bangladesh Multiple Indicator Cluster Survey (MICS) 2025 • BBS & UNICEF
                  </p>
                </div>
                <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/40 text-xs font-mono rounded-lg self-start sm:self-center font-bold">
                  Action Threshold: ≥ 5 µg/dL
                </span>
              </div>

              {/* Bar Chart: Regional Comparisons */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold font-mono text-stone-700 dark:text-stone-300 uppercase">
                  Elevated Blood Lead Prevalence (≥ 5 µg/dL) Across Populations
                </h3>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={BLL_REGIONAL_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis 
                        dataKey="region" 
                        stroke="#9ca3af" 
                        fontSize={11} 
                        angle={-15} 
                        textAnchor="end"
                        interval={0}
                      />
                      <YAxis stroke="#9ca3af" fontSize={11} domain={[0, 70]} tickFormatter={(val) => `${val}%`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '11px' }}
                        formatter={(val: any, name: any, item: any) => [`${val}% Elevated BLL`, item.payload.testedCohort]}
                      />
                      <Bar dataKey="elevatedPct" radius={[6, 6, 0, 0]}>
                        {BLL_REGIONAL_DATA.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detailed Breakdown Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-red-500 uppercase">Dhaka Megacity Dynamics</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    With over 23 million residents, Dhaka concentrates intense vehicle congestion, battery rebuilding workshops, informal metal fabrication, 
                    lead-pigmented wall paints, and contaminated road dust into cramped residential lanes. Children crawling on floors ingest toxic dust via hand-to-mouth behavior.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-purple-500 uppercase">Pregnant Women & Transplacental Transfer</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    MICS recorded 7.54% of pregnant women with BLL ≥ 5 µg/dL. Because lead mimics calcium, maternal skeleton reabsorption during pregnancy releases 
                    stored lead directly to the fetus, causing premature birth, low birth weight, and congenital neurological deficits before delivery.
                  </p>
                </div>

                <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-500 uppercase">Nutritional Anemia Multiplier</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Iron deficiency anemia is rampant among Bangladeshi infants. In iron-deficient states, intestinal divalent metal transporters (DMT1) 
                    dramatically upregulate lead absorption by up to 500%, turning ambient environmental dust into lethal systemic biological doses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: THE 3-WHEELER BATTERY ECONOMY & 1,100 SMELTERS */}
        {activeSubTab === 'battery_economy' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white flex items-center gap-2">
                    <Truck className="text-amber-500" />
                    <span>The Electric Three-Wheeler Paradox & 1,100 Informal Smelters</span>
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    How Green Urban Mobility Built an Unregulated Backyard Toxic Smelting Empire
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/40 text-xs font-mono rounded-lg self-start sm:self-center font-bold">
                  World Bank: &gt;1,100 Sites
                </span>
              </div>

              {/* Line Chart: Fleet Growth vs Smelters */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold font-mono text-stone-700 dark:text-stone-300 uppercase">
                  3-Wheeler Fleet Size (Thousands) vs. Informal Recycling Smelters (2016-2026)
                </h3>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={THREE_WHEELER_BATTERY_DATA} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                      <XAxis dataKey="year" stroke="#9ca3af" fontSize={11} />
                      <YAxis yAxisId="left" stroke="#f59e0b" fontSize={11} tickFormatter={(val) => `${val}k`} />
                      <YAxis yAxisId="right" orientation="right" stroke="#ef4444" fontSize={11} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'monospace' }} />
                      <Line yAxisId="left" type="monotone" dataKey="fleetThousands" name="3-Wheelers in Circulation (k)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                      <Line yAxisId="right" type="monotone" dataKey="informalSmelters" name="Informal ULAB Smelting Sites" stroke="#ef4444" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Economic Drivers Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed text-stone-700 dark:text-stone-300 font-sans">
                <div className="p-5 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
                  <h4 className="font-bold text-stone-950 dark:text-white font-mono text-sm flex items-center gap-1.5">
                    <Factory size={15} className="text-red-500" />
                    <span>Why Shutting Down Informal Smelters Fails</span>
                  </h4>
                  <p>
                    As noted by climate and industry leaders at the Ministry of Environment, Forest and Climate Change seminar: 
                    used lead-acid batteries possess substantial intrinsic economic scrap value. In Bangladesh, battery packs wear out every 10 to 14 months due to deep discharges and non-standard chargers.
                  </p>
                  <p>
                    Simply conducting police raids to shutter informal workshops does not halt battery disposal. It merely forces the illegal smelting into more remote agricultural lands, 
                    jungles, or impoverished peri-urban backyards overnight. Formal recyclers cannot compete because informal operators pay zero costs for environmental baghouse filters, acid neutralization, or worker protection.
                  </p>
                </div>

                <div className="p-5 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
                  <h4 className="font-bold text-stone-950 dark:text-white font-mono text-sm flex items-center gap-1.5">
                    <RefreshCw size={15} className="text-emerald-500" />
                    <span>Required Circular Economy Architecture</span>
                  </h4>
                  <p>
                    To fix this cycle, the seminar recommendations urge:
                  </p>
                  <ul className="list-disc pl-4 space-y-1.5 font-mono text-[11px] text-stone-600 dark:text-stone-400">
                    <li><strong>National Deposit-Refund Scheme (DRS):</strong> Consumers and drivers pay an upfront deposit refunded only upon returning spent batteries to authorized formal collection centers.</li>
                    <li><strong>Fixed Smelting Tariffs:</strong> Equalize recycling margins so formal compliant facilities outbid backyard operators.</li>
                    <li><strong>Battery Traceability Barcodes:</strong> End-to-end QR/RFID serial tracking from factory gate to scrap gate.</li>
                    <li><strong>Smart Charging Standards:</strong> Prolong battery lifespans from 12 months to 36 months, slashing national scrap volume by 60%.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: TURMERIC CHROMATE, COOKWARE & MIRZAPUR REMEDIATION */}
        {activeSubTab === 'spices_products' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white">
                  Turmeric Lead Chromate, Cookware & Mirzapur Soil Remediation
                </h2>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  When Toxicity Lurks in Ordinary Kitchens, Toys, and Agricultural Soil
                </p>
              </div>

              {/* Two Column Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Turmeric & Products */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold font-mono text-amber-500 uppercase flex items-center gap-1.5">
                    <Flame size={15} />
                    <span>Turmeric Adulteration with Lead Chromate (PbCrO₄)</span>
                  </h3>
                  <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl space-y-2 text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    <p>
                      In Bangladesh, merchants previously polished dull, low-grade turmeric roots with bright yellow lead chromate powder (PbCrO₄) to increase weight and impart an alluring golden hue in bazaars. 
                      Because turmeric is an indispensable daily seasoning in virtually every meal, entire families consumed toxic heavy metals with every serving.
                    </p>
                    <p>
                      While successful enforcement campaigns by icddr,b and Stanford University significantly reduced turmeric contamination in central markets, 
                      investigations by Dr. Mahbubur Rahman revealed that <strong>96 of 367 consumer product samples</strong> still tested positive for lead—including locally cast aluminum cookware made from aircraft scrap, 
                      imported eye cosmetics (kohl/kajal), industrial paints, and plastic toys.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <span className="text-xs font-mono font-bold text-red-500 uppercase">Dr. Priscilla Wobil on Household Traps:</span>
                    <p className="text-xs italic text-stone-600 dark:text-stone-400">
                      “Everyday products such as contaminated spices, cosmetics, or cookware can be particularly difficult to detect because they may look completely safe. 
                      Families cannot simply be told to protect themselves when the poison looks harmless.”
                    </p>
                  </div>
                </div>

                {/* Right: Mirzapur Soil Remediation Study Data */}
                <div className="space-y-4">
                  <h3 className="text-sm font-bold font-mono text-emerald-500 uppercase flex items-center gap-1.5">
                    <CheckCircle2 size={15} />
                    <span>Mirzapur Soil Remediation Findings (BMC Public Health 2026)</span>
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    A breakthrough 2026 study evaluated the impact of excavating and replacing contaminated topsoil around two abandoned battery smelters in Mirzapur:
                  </p>

                  <div className="space-y-3 font-mono text-xs">
                    {MIRZAPUR_REMEDIATION_DATA.map((row, idx) => (
                      <div key={idx} className="p-3 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-1">
                        <div className="font-bold text-stone-800 dark:text-stone-200 text-[11px]">{row.metric}</div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-red-500 font-bold">Pre: {row.preCleanup}</span>
                          <ArrowRight size={12} className="text-stone-400" />
                          <span className="text-emerald-500 font-bold">Post: {row.postCleanup}</span>
                          <span className="text-stone-500">(Guideline: {row.regulatoryGuideline})</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 font-mono">
                    ✓ Proves that physical soil remediation yields dramatic reductions in childhood blood lead and livestock mortality, 
                    confirming that removing toxic soils is technically feasible and essential.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: TESTING BLIND SPOT & POLICY SOLUTIONS */}
        {activeSubTab === 'diagnostics_policy' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-stone-950 dark:text-white">
                  The National Diagnostic Blind Spot & The 5-Pillar Reform Agenda
                </h2>
                <p className="text-xs text-stone-500 font-mono mt-0.5">
                  Why Finding an Exposed Child Is Only the Beginning of a Systematic Solution
                </p>
              </div>

              {/* Diagnostic Gap Warning */}
              <div className="p-5 bg-red-950/20 border-2 border-red-500/40 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-red-500 font-mono font-bold text-sm">
                  <AlertTriangle size={18} />
                  <span>The Health Ministry Has Zero National Reference Laboratories for Blood Lead</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                  While research institutions like icddr,b possess inductively coupled plasma mass spectrometers (ICP-MS), 
                  the Ministry of Health and Family Welfare maintains no public reference lab or routine testing capabilities across district hospitals. 
                  Tens of millions of children have never had their blood tested. When pediatricians encounter hyperactivity, memory failure, anemia, or seizures, 
                  lead toxicity is almost never investigated because diagnostic test kits and point-of-care LeadCare analyzers do not exist in the public health system.
                </p>
              </div>

              {/* 5-Pillar Action Architecture */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold font-mono text-stone-950 dark:text-white uppercase">
                  Strategic Roadmap for Elimination by 2035
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                  {/* Pillar 1 */}
                  <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-red-500 font-bold">
                      <span className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center text-[10px]">1</span>
                      <span>National Reference Laboratory</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans">
                      Establish an accredited national toxicology reference laboratory under IEDCR and procure point-of-care capillary blood analyzers for all 64 district hospitals.
                    </p>
                  </div>

                  {/* Pillar 2 */}
                  <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-amber-500 font-bold">
                      <span className="w-5 h-5 rounded-full bg-amber-500/20 flex items-center justify-center text-[10px]">2</span>
                      <span>ULAB Deposit-Refund System</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans">
                      Implement a statutory deposit on all three-wheeler lead-acid batteries to redirect 100% of spent cores to licensed, baghouse-filtered formal smelters.
                    </p>
                  </div>

                  {/* Pillar 3 */}
                  <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-500 font-bold">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px]">3</span>
                      <span>Mirzapur-Style Soil Remediation</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans">
                      Deploy environmental cleanup squads to excavate and encapsulate topsoil around all 1,100 abandoned and active informal smelting yards across the nation.
                    </p>
                  </div>

                  {/* Pillar 4 */}
                  <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-blue-500 font-bold">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-[10px]">4</span>
                      <span>Marketplace Traceability Audits</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans">
                      Enforce strict XRF (X-ray fluorescence) screening on spices, aluminum cookware, paints, and toys with mandatory criminal prosecution for toxic adulteration.
                    </p>
                  </div>

                  {/* Pillar 5 */}
                  <div className="p-4 bg-stone-50 dark:bg-stone-950 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-purple-500 font-bold">
                      <span className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-[10px]">5</span>
                      <span>Pediatric Chelation & Nutrition</span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-400 font-sans">
                      Equip public hospitals with Calcium Disodium EDTA and oral Succimer (DMSA), alongside iron and calcium supplementation programs to block intestinal lead uptake.
                    </p>
                  </div>

                  {/* Launch Bangladesh 2035 Button */}
                  <div className="p-4 bg-gradient-to-br from-emerald-950/40 to-stone-900 rounded-xl border border-emerald-500/40 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                        <Globe size={14} />
                        <span>Connected Initiative</span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-sans mt-1">
                        Explore the complete cabinet-level national strategic plan on ICEarth:
                      </p>
                    </div>
                    {onNavigateTab && (
                      <button
                        onClick={() => onNavigateTab('bangladesh_lead_free')}
                        className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <span>Open Bangladesh Lead-Free 2035</span>
                        <ArrowRight size={12} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: PLATE #40 ARTWORK & PROVENANCE VAULT */}
        {activeSubTab === 'plate_view' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 border-2 border-red-500/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 bg-red-600 text-white text-[10px] font-mono font-black uppercase rounded tracking-wider shadow">
                      FEATURED ARTIFACT
                    </span>
                    <span className="px-2.5 py-0.5 bg-stone-900 text-amber-300 border border-amber-500/40 text-[10px] font-mono uppercase rounded font-bold">
                      PLATE #40 OF 40
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-stone-950 dark:text-white">
                    Lead Poisoning in Bangladesh: A Crisis Ignored for Too Long
                  </h2>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    Location: Dhaka & Mirzapur, Bangladesh • Sovereign Archive Hash: {vaultHash}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyHash}
                    className="px-3 py-1.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-mono rounded-lg transition-all flex items-center gap-1 border border-stone-300 dark:border-stone-700 cursor-pointer"
                  >
                    {copiedHash ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                    <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                  </button>
                  <button
                    onClick={() => setIsArtworkModalOpen(true)}
                    className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-black text-xs font-mono rounded-xl transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                  >
                    <Maximize2 size={14} />
                    <span>Fullscreen Lightbox</span>
                  </button>
                </div>
              </div>

              {/* IMAGE SHOWCASE CONTAINER */}
              <div
                onClick={() => setIsArtworkModalOpen(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-red-500/40 bg-stone-950 cursor-pointer group shadow-2xl"
              >
                <img
                  src={bangladeshLeadCrisisImg}
                  alt="Lead Poisoning in Bangladesh: A Crisis Ignored for Too Long"
                  className="w-full h-auto max-h-[650px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-stone-900/90 backdrop-blur-md rounded-xl border border-red-500/30 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-red-400 block font-bold">
                      Exposenomics Documentary Plate • Plate #40
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-amber-100">
                      Dhaka Urban Three-Wheeler Fleet, Mirzapur Soil Remediation & The Invisible Poison
                    </h3>
                    <p className="text-xs text-stone-300">
                      Depicting electric three-wheeler transport dynamics, informal battery recycling yards, and the urgent demand for public reference diagnostics.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 self-start sm:self-center">
                    <span className="px-3 py-1.5 bg-red-600 text-white font-black text-xs font-mono rounded-lg shadow">
                      Click to Enlarge 🔍
                    </span>
                  </div>
                </div>
              </div>

              {/* ARCHIVAL METADATA CARD */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
                <div>
                  <span className="text-stone-500 uppercase block">Curator / Researcher:</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">Norm Roulet (ICEarth Lead Exposenomics Architect)</span>
                </div>
                <div>
                  <span className="text-stone-500 uppercase block">Primary Investigations:</span>
                  <span className="font-bold text-stone-900 dark:text-stone-100">The Daily Star • UNICEF BD • icddr,b • BBS</span>
                </div>
                <div>
                  <span className="text-stone-500 uppercase block">Sovereign Archive Status:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">Cryptographically Sealed • Plate #40 Vault</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FULLSCREEN ARTWORK MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="relative max-w-6xl w-full bg-stone-950 border border-red-500/50 rounded-2xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-600 text-[10px] font-mono font-bold uppercase rounded">
                  Plate #40
                </span>
                <h3 className="text-sm font-bold truncate">
                  Lead Poisoning in Bangladesh: A Crisis Ignored for Too Long
                </h3>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="p-1.5 hover:bg-stone-800 rounded-lg text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-2 sm:p-4 bg-black flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={bangladeshLeadCrisisImg}
                alt="Lead Poisoning in Bangladesh: A Crisis Ignored for Too Long"
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-900 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-stone-400">
              <div>
                <span className="text-red-400 font-bold block">Sovereign Vault Hash:</span>
                <span className="text-stone-300 select-all">{vaultHash}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
                <button
                  onClick={() => setIsArtworkModalOpen(false)}
                  className="px-4 py-1.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
