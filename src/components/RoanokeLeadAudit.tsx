import React, { useState, useMemo } from 'react';
import {
  Building2,
  AlertTriangle,
  DollarSign,
  TrendingDown,
  TrendingUp,
  MapPin,
  FileText,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Search,
  Sparkles,
  Share2,
  Download,
  Flame,
  Scale,
  Activity,
  Maximize2,
  Info,
  Clock,
  Zap,
  Sliders,
  ShieldAlert,
  GraduationCap,
  Droplets,
  HeartPulse,
  Award,
  ChevronRight,
  ShieldCheck,
  Stethoscope,
  Users
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import roanokeLeadAuditImg from '../assets/images/roanoke_lead_audit_1788983122792.jpg';

interface RoanokeProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const RoanokeLeadAudit: React.FC<RoanokeProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'housing_math' | 'surveillance_gap' | 'economics_roi' | 'interactive_calculator' | 'remediation_protocol' | 'rambler_dispatch'
  >('overview');

  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Interactive Calculator State
  const [grantFundingMillions, setGrantFundingMillions] = useState<number>(6.25);
  const [costPerHome, setCostPerHome] = useState<number>(35000);
  const [annualInflationRate, setAnnualInflationRate] = useState<number>(3);

  const isLight = siteTheme === 'light';

  const PROVENANCE_HASH = '0xROANOKE_LEAD_AUDIT_RAMBLER_HUD_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Housing Data for Roanoke
  const housingData = [
    { category: 'Built Before 1978', units: 27913, percentage: 80, fill: '#ef4444' },
    { category: 'Built Before 1940', units: 11383, percentage: 33, fill: '#dc2626' },
    { category: 'Low-to-Mod Income LBP Units', units: 13042, percentage: 37, fill: '#ea580c' },
    { category: 'Urgent High-Risk (Peeling + Kids)', units: 2921, percentage: 8.4, fill: '#b91c1c' },
    { category: 'New 2026 HUD Grant Capacity', units: 150, percentage: 0.43, fill: '#10b981' },
    { category: 'Total Remediated in 20 Years', units: 559, percentage: 1.6, fill: '#3b82f6' }
  ];

  // Surveillance gap data: State vs Local Pediatricians
  const testingGapData = [
    { source: 'Census / State VDH System', identifiedKids: 8, estimatedPoisoned: 74, color: '#f59e0b' },
    { source: 'Local Pediatricians Practice', identifiedKids: 74, estimatedPoisoned: 74, color: '#ef4444' }
  ];

  // ZIP Code distribution
  const zipCodeRiskData = [
    { zip: '24011', area: 'Downtown / Near NW', riskIndex: 94, oldStockPct: 88, povertyPct: 32 },
    { zip: '24013', area: 'Southeast / Belmont', riskIndex: 91, oldStockPct: 84, povertyPct: 29 },
    { zip: '24014', area: 'Southwest / Garden City', riskIndex: 78, oldStockPct: 76, povertyPct: 21 },
    { zip: '24015', area: 'Raleigh Court / Grandin', riskIndex: 82, oldStockPct: 81, povertyPct: 18 },
    { zip: '24016', area: 'Old Southwest / Hurt Park', riskIndex: 96, oldStockPct: 92, povertyPct: 34 }
  ];

  // Dynamic calculation for the timeline deficit
  const calcResults = useMemo(() => {
    const totalHomesCanRemediate = Math.floor((grantFundingMillions * 1000000) / costPerHome);
    const yearsForHighRiskAlone = ((2921 / totalHomesCanRemediate) * 3).toFixed(1);
    const yearsForTotalLeadStock = ((27913 / totalHomesCanRemediate) * 3).toFixed(1);
    const localEconomicReturnLow = (grantFundingMillions * 3.2).toFixed(1);
    const localEconomicReturnHigh = (grantFundingMillions * 6.4).toFixed(1);
    const roiMultiplier = ((Number(localEconomicReturnHigh) / grantFundingMillions)).toFixed(1);

    return {
      totalHomesCanRemediate,
      yearsForHighRiskAlone,
      yearsForTotalLeadStock,
      localEconomicReturnLow,
      localEconomicReturnHigh,
      roiMultiplier
    };
  }, [grantFundingMillions, costPerHome]);

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 md:p-8 transition-colors duration-200`}>
      {/* TOP NOTIFICATION / PROVENANCE RIBBON */}
      <div className="max-w-7xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 p-3.5 rounded-xl border bg-gradient-to-r from-red-950/20 via-stone-900/10 to-amber-950/20 border-red-500/30 text-xs shadow-xs">
        <div className="flex items-center gap-2.5">
          <span className="px-2 py-0.5 rounded-full font-black text-[10px] uppercase tracking-wider bg-red-600 text-white shadow-xs">
            PLATE #42
          </span>
          <span className="font-semibold text-stone-700 dark:text-stone-300">
            Roanoke Lead Audit: Independent Journalism Demonstrates Roulet's Law in Action
          </span>
        </div>
        <div className="flex items-center gap-3">
          <code className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
            {PROVENANCE_HASH}
          </code>
          <button
            onClick={handleCopyHash}
            className="flex items-center gap-1 text-[11px] font-bold text-red-600 dark:text-red-400 hover:underline cursor-pointer"
          >
            {copiedHash ? '✓ Copied' : 'Copy Vault Hash'}
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className={`relative overflow-hidden rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 md:p-8 items-center">
            
            {/* TEXT CONTENT */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider bg-red-100 dark:bg-red-950/80 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-800">
                  The Roanoke Rambler Investigation
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                  September 9, 2026
                </span>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300">
                  7 Min Read • Municipal Lead Audit
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight">
                Roanoke Just Got $6.25 Million to Rip the Lead Out of Its Oldest Houses.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-amber-600 to-rose-600">
                  Here’s What That Actually Means.
                </span>
              </h1>

              <p className="text-sm md:text-base font-medium text-stone-600 dark:text-stone-300 italic border-l-4 border-red-500 pl-3">
                “The city already knows where the poison lives. The question was always whether it had the money to go get it.”
              </p>

              <p className="text-xs md:text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                An exceptional investigation by <strong className="text-stone-900 dark:text-white">The Roanoke Rambler</strong> provides a pristine empirical proof of <strong>Roulet's Law</strong>: linking the biology of pediatric neurotoxicity, the cold arithmetic of public housing neglect, and the staggering 3x–6x economic return on remediation. While Roanoke celebrated tripling its HUD grant, an unvarnished audit exposes that 150 homes remediated leaves 27,913 pre-1978 poisoned units—and a terrifying 9x surveillance testing undercount gap.
              </p>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsArtworkModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-stone-900 dark:bg-white text-white dark:text-stone-900 font-bold text-xs flex items-center gap-2 hover:opacity-90 shadow-md transition-all cursor-pointer"
                >
                  <Maximize2 size={14} />
                  <span>Inspect Plate #42 Artwork</span>
                </button>
                <button
                  onClick={() => setActiveSubTab('interactive_calculator')}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs flex items-center gap-2 hover:opacity-95 shadow-md transition-all cursor-pointer"
                >
                  <Sliders size={14} />
                  <span>Run Roanoke Remediation Calculator</span>
                </button>
                <a
                  href="https://www.roanokerambler.com/roanoke-just-got-6-25-million-to-rip-the-lead-out-of-its-oldest-houses-heres-what-that-actually-means/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <ExternalLink size={13} />
                  <span>Roanoke Rambler Article</span>
                </a>
              </div>
            </div>

            {/* ARTWORK PREVIEW CARD */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setIsArtworkModalOpen(true)}
                className="group relative rounded-xl overflow-hidden border-2 border-amber-500/40 shadow-xl cursor-pointer bg-stone-950 aspect-video lg:aspect-[4/3]"
              >
                <img
                  src={roanokeLeadAuditImg}
                  alt="Roanoke Lead Audit Infographic Plate #42"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center justify-between text-[11px] font-bold text-amber-300">
                    <span>PLATE #42 • SOVEREIGN PROVENANCE</span>
                    <span className="flex items-center gap-1">
                      <Maximize2 size={12} /> Click to Expand
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-stone-200 mt-1 line-clamp-2">
                    Roanoke Housing Stock Cutaway, HUD $6.25M Grant Allocation & Pediatric Exposure Disparity
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CORE METRIC AUDIT BAR */}
      <div className="max-w-7xl mx-auto mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
            <span>HUD Grant Award</span>
            <DollarSign size={14} className="text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">$6.25M</div>
          <p className="text-[10px] text-stone-500 mt-0.5">Triples prior $2.1M grant (3-yr cycle)</p>
        </div>

        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
            <span>Target Remediation</span>
            <Building2 size={14} className="text-blue-500" />
          </div>
          <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">150 Units</div>
          <p className="text-[10px] text-stone-500 mt-0.5">559 units fixed in past 20 years</p>
        </div>

        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
            <span>Pre-1978 Inventory</span>
            <AlertTriangle size={14} className="text-amber-500" />
          </div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">27,913</div>
          <p className="text-[10px] text-stone-500 mt-0.5">80% owner-occupied, 76% rentals</p>
        </div>

        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
            <span>Urgent High-Risk</span>
            <Flame size={14} className="text-red-500" />
          </div>
          <div className="text-2xl font-black text-red-600 dark:text-red-400 mt-1">2,921</div>
          <p className="text-[10px] text-stone-500 mt-0.5">Peeling LBP with kids under age 6</p>
        </div>

        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
            <span>Surveillance Gap</span>
            <Activity size={14} className="text-purple-500" />
          </div>
          <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">8 vs 74</div>
          <p className="text-[10px] text-stone-500 mt-0.5">900% undercount by State vs Doctors</p>
        </div>

        <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200 shadow-xs' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex items-center justify-between text-stone-500 text-[11px] font-bold uppercase tracking-wider">
            <span>Roulet ROI Return</span>
            <TrendingUp size={14} className="text-emerald-500" />
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">3x – 6x</div>
          <p className="text-[10px] text-stone-500 mt-0.5">$20M–$40M local lifetime earnings</p>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-stone-200/80 dark:bg-stone-800/80 border border-stone-300 dark:border-stone-700">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'overview'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            📋 Investigation & Roulet's Law Overview
          </button>
          <button
            onClick={() => setActiveSubTab('housing_math')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'housing_math'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            🏘️ The 27,913-Home Housing Math
          </button>
          <button
            onClick={() => setActiveSubTab('surveillance_gap')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'surveillance_gap'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            🩸 The 8 vs. 74 Testing Disparity
          </button>
          <button
            onClick={() => setActiveSubTab('economics_roi')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'economics_roi'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            💰 The Economics of Poisoning (3x-6x ROI)
          </button>
          <button
            onClick={() => setActiveSubTab('interactive_calculator')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'interactive_calculator'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            🧮 Municipal Remediation Simulator
          </button>
          <button
            onClick={() => setActiveSubTab('remediation_protocol')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'remediation_protocol'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            🛡️ Safe Abatement vs. DIY Danger
          </button>
          <button
            onClick={() => setActiveSubTab('rambler_dispatch')}
            className={`px-3.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer ${
              activeSubTab === 'rambler_dispatch'
                ? 'bg-red-600 text-white shadow-md'
                : 'text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            📰 Full Roanoke Rambler Text
          </button>
        </div>
      </div>

      {/* TAB CONTENT AREA */}
      <div className="max-w-7xl mx-auto">
        
        {/* SUBTAB 1: OVERVIEW & ROULET'S LAW SYNTHESIS */}
        {activeSubTab === 'overview' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <h2 className="text-xl font-black mb-3 flex items-center gap-2">
                <ShieldAlert className="text-red-600" />
                <span>Why The Roanoke Rambler Investigation Proves Roulet’s Law</span>
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-4">
                Norm Roulet’s foundational thesis—formalized in <strong>Roulet's Law</strong>—postulates three interconnected truths that standard public policy persistently suppresses:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-xl border border-red-500/30 bg-red-50/50 dark:bg-red-950/20">
                  <div className="text-xs font-black text-red-600 uppercase tracking-wider mb-1">Principle I: The Biological Reality</div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2">No Safe Blood Lead Level</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Lead is an evolutionary toxin with a human natural baseline of &lt;0.016 µg/dL. Even at 1–3 µg/dL, permanent cellular apoptosis, IQ suppression, and executive functioning deficits occur.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
                  <div className="text-xs font-black text-amber-600 uppercase tracking-wider mb-1">Principle II: The Economic Inversion</div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2">Poisoning Costs Exceed Remediation</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Every dollar withheld from primary housing remediation produces $3 to $6 in direct societal losses: lost lifetime earnings, special education costs, incarceration, and chronic cardiovascular disease.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-50/50 dark:bg-purple-950/20">
                  <div className="text-xs font-black text-purple-600 uppercase tracking-wider mb-1">Principle III: Institutional Failure</div>
                  <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2">The Surveillance Blind Spot</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    State registries under-test by a factor of 9x (8 official cases vs 74 pediatric cases in Roanoke), declaring areas 'safe' simply because children were never screened.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                <h4 className="text-xs font-bold text-stone-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Clock size={14} className="text-amber-500" />
                  <span>Roanoke’s 32-Year Timeline of Documented Neglect</span>
                </h4>
                <div className="space-y-3 text-xs text-stone-600 dark:text-stone-300">
                  <div className="flex gap-3 items-start">
                    <span className="font-mono font-bold text-stone-900 dark:text-white shrink-0">1978:</span>
                    <span>Federal consumer ban on lead-based residential paint takes effect after 50+ years of corporate cover-up. Over 27,900 Roanoke homes already coated in toxic lead carbonate.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono font-bold text-stone-900 dark:text-white shrink-0">1994:</span>
                    <span>Roanoke Parks & Recreation fences off 27 playground swings and play equipment after tests revealed more than one-third exceeded federal 0.5% lead limits. The city acknowledged its children were playing on poison.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono font-bold text-stone-900 dark:text-white shrink-0">2004–2024:</span>
                    <span>Lead Safe Roanoke remediates 559 homes across 20 years (averaging only 28 homes per year). Thousands of low-income infants continue to crawl on contaminated dust floors.</span>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="font-mono font-bold text-red-600 shrink-0">Sept 8, 2026:</span>
                    <span>HUD awards $6.25M to remediate 150 homes over 3 years. The Roanoke Rambler publishes the math: at this pace, Roanoke needs nearly 60 years just to reach the 2,921 high-risk homes with toddlers.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CROSS-LINK TO OTHER MUNICIPAL AUDITS */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900/60 border-stone-800'}`}>
              <h3 className="text-sm font-bold text-stone-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <MapPin className="text-red-500" size={16} />
                <span>Explore Other Municipal Lead Audits in ICEarth Sovereign Directory</span>
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4">
                Roanoke joins Cleveland, Toledo, Flint, Buffalo, and the Twin Cities as living models of municipal exposenomics data:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                {[
                  { id: 'cleveland', label: 'Cleveland Audit', badge: 'Plain Dealer' },
                  { id: 'toledo', label: 'Toledo Audit', badge: 'CDC Confession' },
                  { id: 'flint', label: 'Flint Audit', badge: 'Scatterplots' },
                  { id: 'twin_cities_lead', label: 'Twin Cities Audit', badge: '2027 Cliff' },
                  { id: 'buffalo', label: 'Buffalo Audit', badge: 'Zip Codes' },
                  { id: 'milwaukee', label: 'Milwaukee Audit', badge: 'Lateral Lines' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onNavigateTab && onNavigateTab(item.id)}
                    className="p-2.5 rounded-lg border border-stone-300 dark:border-stone-700 hover:border-red-500 bg-white dark:bg-stone-800 text-left transition-all group cursor-pointer shadow-2xs"
                  >
                    <div className="text-[11px] font-bold text-stone-900 dark:text-white group-hover:text-red-600 flex items-center justify-between">
                      <span>{item.label}</span>
                      <ChevronRight size={12} className="text-stone-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="text-[9px] font-medium text-stone-500 uppercase mt-0.5">{item.badge}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: HOUSING MATH */}
        {activeSubTab === 'housing_math' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-black flex items-center gap-2">
                    <Building2 className="text-red-600" />
                    <span>The Unsparing Housing Inventory Arithmetic</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    HUD Filings vs. Actual Municipal Remediation Throughput (Roanoke, Virginia)
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-xs font-mono font-bold text-red-600 uppercase">Backlog Ratio</div>
                  <div className="text-2xl font-black">186 : 1</div>
                  <div className="text-[10px] text-stone-500">27,913 lead units vs 150 grant remediations</div>
                </div>
              </div>

              {/* RECHARTS BAR CHART */}
              <div className="h-80 w-full mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={housingData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                    <XAxis
                      dataKey="category"
                      angle={-20}
                      textAnchor="end"
                      interval={0}
                      tick={{ fontSize: 11, fill: isLight ? '#444' : '#bbb' }}
                    />
                    <YAxis tick={{ fontSize: 11, fill: isLight ? '#444' : '#bbb' }} />
                    <Tooltip
                      formatter={(value: any) => [`${Number(value).toLocaleString()} Units`, 'Housing Count']}
                      contentStyle={{
                        backgroundColor: isLight ? '#fff' : '#1c1917',
                        borderColor: isLight ? '#e7e5e4' : '#44403c',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="units" radius={[6, 6, 0, 0]}>
                      {housingData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* DETAILED STATS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                  <div className="text-xs font-bold text-stone-500 uppercase">Oldest Stock (&lt;1940)</div>
                  <div className="text-2xl font-black text-red-600 mt-1">11,383 Units</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    Homes built prior to 1940 carried the highest concentrations of lead carbonate (up to 50% lead by dry weight in primer and gloss trim).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                  <div className="text-xs font-bold text-stone-500 uppercase">Low/Moderate Income LBP</div>
                  <div className="text-2xl font-black text-amber-600 mt-1">13,042 Units</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    Roughly 80% of all lead-based paint units in Roanoke are inhabited by families earning below 80% of the Area Median Income (AMI).
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                  <div className="text-xs font-bold text-stone-500 uppercase">High-Risk LBP + Toddlers</div>
                  <div className="text-2xl font-black text-rose-600 mt-1">2,921 Units</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    Classified as containing active chipping, peeling, or chalking lead paint in residences with children aged 5 or younger.
                  </p>
                </div>
              </div>
            </div>

            {/* HIGH-RISK ZIP CODE AUDIT TABLE */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <h3 className="text-base font-black mb-3 flex items-center gap-2">
                <MapPin className="text-red-600" />
                <span>Virginia Department of Health High-Risk Roanoke ZIP Codes</span>
              </h3>
              <p className="text-xs text-stone-600 dark:text-stone-400 mb-4">
                The city’s older Conservation Areas and Rehabilitation Districts on the near-northwest, southeast, and southwest sides represent the epicenters of toxicity:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 dark:bg-stone-800 border-b border-stone-200 dark:border-stone-700">
                    <tr>
                      <th className="p-3 font-black">ZIP Code</th>
                      <th className="p-3 font-black">Neighborhood Designation</th>
                      <th className="p-3 font-black">Pre-1978 Housing Stock</th>
                      <th className="p-3 font-black">Poverty Rate</th>
                      <th className="p-3 font-black">Risk Vulnerability Index</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    {zipCodeRiskData.map((row) => (
                      <tr key={row.zip} className="hover:bg-stone-50 dark:hover:bg-stone-800/50">
                        <td className="p-3 font-mono font-bold text-red-600">{row.zip}</td>
                        <td className="p-3 font-semibold">{row.area}</td>
                        <td className="p-3">{row.oldStockPct}%</td>
                        <td className="p-3">{row.povertyPct}%</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 rounded font-black bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-800">
                            {row.riskIndex} / 100
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: SURVEILLANCE TESTING GAP */}
        {activeSubTab === 'surveillance_gap' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-black flex items-center gap-2">
                    <Stethoscope className="text-purple-600" />
                    <span>The 8 vs. 74 Disparity: How State Surveillance Erases Poisoned Kids</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Comparing Virginia Department of Health Official Records with Clinical Pediatricians
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 font-mono font-black text-xs border border-purple-300 dark:border-purple-800">
                  925% Survelliance Undercount
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
                <div className="space-y-4 text-xs md:text-sm text-stone-600 dark:text-stone-300">
                  <p>
                    The City of Roanoke’s own official filing recorded two strikingly conflicting figures for children under 6 with blood lead levels above the CDC reference value:
                  </p>
                  <ul className="space-y-2">
                    <li className="p-3 rounded-lg border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20 flex items-center justify-between">
                      <span className="font-bold">U.S. Census / VDH State System:</span>
                      <span className="text-lg font-black text-amber-600">8 children (1%)</span>
                    </li>
                    <li className="p-3 rounded-lg border border-red-500/30 bg-red-50/50 dark:bg-red-950/20 flex items-center justify-between">
                      <span className="font-bold">Local Pediatric Practice Clinical Records:</span>
                      <span className="text-lg font-black text-red-600">74 children (1%)</span>
                    </li>
                  </ul>
                  <p className="text-xs text-stone-500 italic">
                    “The gap between those two numbers—8 vs. 74—is the story. State surveillance systems are notoriously under-testing. Local pediatricians catching nine times more cases than the state count suggests the true number of exposed Roanoke kids is meaningfully higher than the official tally.” — The Roanoke Rambler
                  </p>
                </div>

                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={testingGapData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="source" tick={{ fontSize: 10, fill: isLight ? '#444' : '#bbb' }} />
                      <YAxis tick={{ fontSize: 11, fill: isLight ? '#444' : '#bbb' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#e7e5e4' : '#44403c',
                          borderRadius: '8px',
                          fontSize: '12px'
                        }}
                      />
                      <Bar dataKey="identifiedKids" name="Documented Poisoned Children" radius={[6, 6, 0, 0]}>
                        <Cell fill="#f59e0b" />
                        <Cell fill="#ef4444" />
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CDC 3.5 UG/DL CLINICAL REALITY */}
              <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-300 dark:border-red-900">
                <h4 className="text-xs font-black text-red-700 dark:text-red-300 uppercase tracking-wider mb-2">
                  Clinical Reality of CDC 3.5 µg/dL Reference Value
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-red-200 dark:border-red-800">
                    <span className="font-bold text-red-600 block">500,000 Kids</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400">Currently exceed CDC 3.5 µg/dL nationally</span>
                  </div>
                  <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-red-200 dark:border-red-800">
                    <span className="font-bold text-red-600 block">Zero Safe Threshold</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400">Measurable IQ deficit documented below 2 µg/dL</span>
                  </div>
                  <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-red-200 dark:border-red-800">
                    <span className="font-bold text-red-600 block">Asymptomatic Damage</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400">Over 90% of poisoned toddlers exhibit zero physical signs</span>
                  </div>
                  <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-red-200 dark:border-red-800">
                    <span className="font-bold text-red-600 block">Placental Transfer</span>
                    <span className="text-[11px] text-stone-600 dark:text-stone-400">Lead crosses placental barrier causing fetal harm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: ECONOMICS OF POISONING (ROULET'S LAW ROI) */}
        {activeSubTab === 'economics_roi' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-black flex items-center gap-2">
                    <DollarSign className="text-emerald-600" />
                    <span>The Triple Economic Return: Why Inaction is Fiscal Suicide</span>
                  </h2>
                  <p className="text-xs text-stone-500 mt-1">
                    Analyzing Direct Construction Spend, Asset Value Uplift, and Lifetime Earnings Preservation
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono font-black text-xs border border-emerald-300 dark:border-emerald-800">
                  CDC Health Impact Project: $84B National Cohort
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                  <div className="text-xs font-black text-stone-500 uppercase mb-2">Layer 1: Construction Economy</div>
                  <div className="text-3xl font-black text-stone-900 dark:text-white">$6.25M</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                    Direct local cash injection across 3 years. Funds EPA Lead-Safe certified abatement contractors, local carpenters, window and door installers, and diagnostic inspectors.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40">
                  <div className="text-xs font-black text-stone-500 uppercase mb-2">Layer 2: Housing Asset Uplift</div>
                  <div className="text-3xl font-black text-blue-600">$1.5M – $3.0M</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                    A HUD clearance certificate adds $10,000–$20,000 in equity and rentability per home, revitalizing suppressed values in Belmont, Melrose, and Hurt Park.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-emerald-500/40 bg-emerald-50/50 dark:bg-emerald-950/20">
                  <div className="text-xs font-black text-emerald-600 uppercase mb-2">Layer 3: Lifetime Human Capital</div>
                  <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">$20M – $40M</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-2">
                    Preserving childhood IQ generates a 3x to 6x return over 60 years: higher high-school graduation, increased lifetime wages, and reduced juvenile justice and special ed costs.
                  </p>
                </div>
              </div>

              {/* ROULET'S LAW ECONOMIC BREAKDOWN */}
              <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/50">
                <h4 className="text-sm font-black text-stone-900 dark:text-white mb-2">
                  The Settled Science of Lead Remediation Economics
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  As The Roanoke Rambler notes, this calculation is not speculative theory—it is established macro-epidemiology. When a working-class child in the West End absorbs lead dust from a window friction well, their cognitive ceiling is suppressed by 3 to 7 IQ points. Over their working life, that single deficit cascades into hundreds of thousands in lost wages, increased medical burdens for hypertension, and municipal social service expenditures. The $25,000 cost of a whole-home window and trim abatement is recovered more than four times over by the local economy.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: INTERACTIVE CALCULATOR */}
        {activeSubTab === 'interactive_calculator' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <h2 className="text-xl font-black mb-2 flex items-center gap-2">
                <Sliders className="text-red-600" />
                <span>Roanoke Municipal Remediation Deficit Simulator</span>
              </h2>
              <p className="text-xs text-stone-500 mb-6">
                Adjust federal grant allocations and per-home remediation costs to project how many decades or centuries Roanoke needs to eliminate lead poison.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* CONTROLS */}
                <div className="lg:col-span-6 space-y-5 p-5 rounded-xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
                  <div>
                    <div className="flex justify-between items-center mb-1 text-xs">
                      <span className="font-bold">HUD Grant Allocation (3-Year Cycle):</span>
                      <span className="font-mono font-black text-red-600">${grantFundingMillions.toFixed(2)} Million</span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={25}
                      step={0.25}
                      value={grantFundingMillions}
                      onChange={(e) => setGrantFundingMillions(parseFloat(e.target.value))}
                      className="w-full h-2 bg-stone-300 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                      <span>$2.1M (Past Grant)</span>
                      <span>$6.25M (Current)</span>
                      <span>$25M (Full Federal Need)</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1 text-xs">
                      <span className="font-bold">Average Professional Abatement Cost Per Unit:</span>
                      <span className="font-mono font-black text-amber-600">${costPerHome.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min={15000}
                      max={55000}
                      step={1000}
                      value={costPerHome}
                      onChange={(e) => setCostPerHome(parseInt(e.target.value))}
                      className="w-full h-2 bg-stone-300 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 mt-1">
                      <span>$15k (Encapsulation Only)</span>
                      <span>$35k (Windows + Doors)</span>
                      <span>$55k (Extensive Abatement)</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-xs space-y-1.5">
                    <div className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
                      <Info size={14} className="text-blue-500" />
                      <span>HUD Eligibility Parameters (Lead Safe Roanoke)</span>
                    </div>
                    <p className="text-[11px] text-stone-500">
                      Pre-1978 build, outside floodplains, child ≤5 living or regularly visiting, income within HUD limits. Applications on rolling basis at Room 357, Noel C. Taylor Municipal Building.
                    </p>
                  </div>
                </div>

                {/* SIMULATION OUTPUT DISPLAY */}
                <div className="lg:col-span-6 flex flex-col justify-between p-5 rounded-xl border border-red-500/40 bg-gradient-to-br from-red-950/10 via-stone-900/10 to-amber-950/10">
                  <div className="space-y-4">
                    <div className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      Simulated Multi-Year Remediation Capacity
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                        <span className="text-[10px] font-bold text-stone-500 uppercase block">Units Remediated / 3 Yrs</span>
                        <span className="text-2xl font-black text-blue-600">{calcResults.totalHomesCanRemediate} Homes</span>
                      </div>

                      <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                        <span className="text-[10px] font-bold text-stone-500 uppercase block">Time For 2,921 Urgent Units</span>
                        <span className="text-2xl font-black text-red-600">{calcResults.yearsForHighRiskAlone} Years</span>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                      <span className="text-[10px] font-bold text-stone-500 uppercase block">Time To Eliminate All 27,913 Pre-1978 Lead Units</span>
                      <div className="text-3xl font-black text-stone-900 dark:text-white mt-1">
                        {calcResults.yearsForTotalLeadStock} <span className="text-base font-normal text-stone-500">Years</span>
                      </div>
                      <p className="text-[10px] text-stone-500 mt-1">
                        At this pace, complete remediation stretches into the {2026 + Math.round(Number(calcResults.yearsForTotalLeadStock))}s—spanning multiple human generations.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-800">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-emerald-800 dark:text-emerald-300">Net Local Economic Return:</span>
                        <span className="font-mono font-black text-emerald-600 text-sm">${calcResults.localEconomicReturnLow}M – ${calcResults.localEconomicReturnHigh}M</span>
                      </div>
                      <p className="text-[10px] text-emerald-700 dark:text-emerald-400 mt-1">
                        Projected 3.2x to 6.4x return on the ${grantFundingMillions}M federal investment across the child cohorts' lifetimes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: SAFE ABATEMENT VS DIY DANGER */}
        {activeSubTab === 'remediation_protocol' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <h2 className="text-xl font-black mb-2 flex items-center gap-2">
                <ShieldCheck className="text-emerald-600" />
                <span>How Lead Paint Gets Properly Removed (And Why DIY Is Catastrophic)</span>
              </h2>
              <p className="text-xs text-stone-500 mb-6">
                Federal EPA Renovation, Repair, and Painting (RRP) Rule vs. Hazardous Homemade Demolition
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="p-5 rounded-xl border border-red-500/40 bg-red-50/40 dark:bg-red-950/20 space-y-3">
                  <h3 className="text-sm font-black text-red-700 dark:text-red-300 uppercase tracking-wider flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <span>The Lethal DIY Trap</span>
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    “This is not a DIY job. Not even a little bit. Improper removal is often more dangerous than leaving the paint alone, because sanding, dry-scraping, or heat-stripping creates concentrated invisible lead dust that settles into every fiber of carpet and every microscopic gap in the floorboards.”
                  </p>
                  <div className="p-3 rounded bg-white dark:bg-stone-900 border border-red-200 dark:border-red-800 text-xs">
                    <span className="font-bold text-red-600 block">Strict Prohibitions:</span>
                    <ul className="list-disc list-inside space-y-1 text-stone-600 dark:text-stone-400 mt-1 text-[11px]">
                      <li>Never dry sweep or vacuum with standard household vacuum (blows lead dust into air)</li>
                      <li>Never power-wash exterior lead siding</li>
                      <li>Never scrape or sand without HEPA-shrouded containment</li>
                      <li>Never hire unlicensed friends or contractors without EPA RRP certification</li>
                    </ul>
                  </div>
                </div>

                <div className="p-5 rounded-xl border border-emerald-500/40 bg-emerald-50/40 dark:bg-emerald-950/20 space-y-3">
                  <h3 className="text-sm font-black text-emerald-700 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    <span>The Three Professional Standards</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-800">
                      <span className="font-bold text-emerald-600">1. Enclosure:</span>
                      <p className="text-stone-600 dark:text-stone-400 text-[11px]">Sealing lead surfaces mechanically under new drywall, siding, or durable vinyl casing.</p>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-800">
                      <span className="font-bold text-emerald-600">2. Encapsulation:</span>
                      <p className="text-stone-600 dark:text-stone-400 text-[11px]">Applying thick, elastomeric polymer bonding sealants formulated specifically to resist impact.</p>
                    </div>
                    <div className="p-2.5 rounded bg-white dark:bg-stone-900 border border-emerald-200 dark:border-emerald-800">
                      <span className="font-bold text-emerald-600">3. Full Abatement:</span>
                      <p className="text-stone-600 dark:text-stone-400 text-[11px]">Complete structural removal of toxic components (sash windows, jambs, door frames) replaced with modern lead-free argon units ($600–$1,200/window).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* PARENT PROTOCOL CHECKLIST */}
              <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-800/40">
                <h4 className="text-sm font-black text-stone-900 dark:text-white mb-3">
                  What Parents in Pre-1978 Roanoke Homes Must Do Tonight
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <span className="font-bold text-red-600 block mb-1">1. Get Kid Tested</span>
                    <p className="text-stone-500 text-[11px]">Capillary or venous blood test via pediatrician, WIC, or Medicaid. Zero cost.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <span className="font-bold text-amber-600 block mb-1">2. Wet Mop Windows</span>
                    <p className="text-stone-500 text-[11px]">Use damp paper towels on sills and floors. Never dry sweep.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <span className="font-bold text-blue-600 block mb-1">3. Flush Cold Tap</span>
                    <p className="text-stone-500 text-[11px]">Run cold water 30-60 seconds to clear particulate from pre-1986 soldered copper pipes.</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800">
                    <span className="font-bold text-emerald-600 block mb-1">4. High Iron Diet</span>
                    <p className="text-stone-500 text-[11px]">Iron, calcium, and vitamin C competitively inhibit gut absorption of ingested lead.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 7: FULL DISPATCH ARTICLE */}
        {activeSubTab === 'rambler_dispatch' && (
          <div className="space-y-6">
            <div className={`p-6 md:p-8 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4 mb-6">
                <div className="text-xs font-mono text-red-600 font-bold uppercase tracking-wider">Independent Journalism Archival Record</div>
                <h2 className="text-2xl font-black mt-1">Roanoke Just Got $6.25 Million to Rip the Lead Out of Its Oldest Houses. Here’s What That Actually Means.</h2>
                <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 mt-2">
                  <span>By Roanoke Rambler Staff</span>
                  <span>Published: September 9, 2026 • 8:49 AM EST</span>
                  <span>Roanoke, Virginia</span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-xs md:text-sm text-stone-700 dark:text-stone-300 space-y-4 leading-relaxed font-serif">
                <p className="font-bold text-base not-italic font-sans">
                  The city already knows where the poison lives. The question was always whether it had the money to go remove it.
                </p>

                <p>
                  Roanoke has one of the oldest housing stocks in Virginia. Roughly 80 percent of owner-occupied homes and 76 percent of rentals in the city were built before 1980, according to the city’s own filings. And 1980 is the government’s polite proxy for “before 1978”—the year the U.S. finally banned lead-based paint in residential construction after decades of knowing exactly what it does to a child’s brain.
                </p>

                <p>
                  Which means the walls of tens of thousands of Roanoke homes are, right now, still coated in a substance the federal government classified as unsafe at any level 47 years ago.
                </p>

                <p>
                  This week, the city got a check to do something about a sliver of it.
                </p>

                <h3 className="font-sans font-bold text-base text-stone-900 dark:text-white pt-2">The Grant</h3>
                <p>
                  On September 8, the City of Roanoke announced a $6.25 million grant from the U.S. Department of Housing and Urban Development’s Office of Lead Hazard Control and Healthy Homes. The money runs for three years and is earmarked for the city’s Lead Safe Roanoke program, which will use it to remediate as many as 150 homes.
                </p>

                <p>
                  This is Roanoke’s seventh HUD lead grant. The Lead Safe program has been quietly grinding away for more than 20 years and has already made 559 homes in the city lead-safe. For context, the last major HUD award to the program was $2.1 million over three years and covered 85 units. This one triples the money and nearly doubles the unit count.
                </p>

                <h3 className="font-sans font-bold text-base text-stone-900 dark:text-white pt-2">How Many Roanoke Homes Actually Have Lead Paint?</h3>
                <p>
                  Here’s the math nobody wants to sit with. According to Roanoke’s own filings with HUD:
                </p>
                <ul className="list-disc list-inside space-y-1 font-sans text-xs">
                  <li><strong>27,913</strong> housing units in the target area were built before 1978</li>
                  <li><strong>11,383</strong> were built before 1940</li>
                  <li><strong>13,042</strong> units are currently occupied by low-to-moderate income residents and contain lead-based paint</li>
                  <li><strong>2,921</strong> of those are classified as “high-risk LBP units” meaning peeling, chipping, or deteriorated paint in homes with young kids</li>
                </ul>

                <p>
                  The highest-risk zone maps to five ZIP codes the Virginia Department of Health has flagged as high-lead-risk areas: <strong>24011, 24013, 24014, 24015, and 24016</strong>, the city’s older Conservation Areas and Rehabilitation Districts on the near-northwest, southeast, and southwest sides.
                </p>

                <p>
                  At the pace the last grant moved, 85 homes in three years, Roanoke would need 34 more grants and roughly a century to reach every one of the 2,921 high-risk homes alone. This new $6.25M award will knock out 150 of them. Meaningful progress. Not a finish line.
                </p>

                <h3 className="font-sans font-bold text-base text-stone-900 dark:text-white pt-2">Cases in Roanoke: The 8 vs 74 Disparity</h3>
                <p>
                  The city’s own data reports two figures for children under 6 with elevated blood lead:
                </p>
                <ul className="list-disc list-inside space-y-1 font-sans text-xs">
                  <li><strong>8 kids (1%)</strong> by U.S. Census / Virginia Department of Health data</li>
                  <li><strong>74 kids (1%)</strong> by local pediatricians’ data</li>
                </ul>

                <p>
                  The gap between those two numbers—8 vs. 74—is the story. State surveillance systems are notoriously under-testing. Local pediatricians catching nine times more cases than the state count suggests the true number of exposed Roanoke kids is meaningfully higher than the official tally.
                </p>

                <p>
                  And Roanoke’s history with lead is not new. In March 1994, it was reported that the city’s Department of Parks and Recreation had to fence off 27 pieces of playground equipment after testing found more than a third of 70 pieces exceeded the federal 0.5 percent lead threshold. Thirty-two years ago, the city discovered that the swings its kids were playing on were coated in poison. The lead in Roanoke’s paint has been a known problem for a very long time.
                </p>

                <h3 className="font-sans font-bold text-base text-stone-900 dark:text-white pt-2">The Economic Return</h3>
                <p>
                  Applied at Roanoke’s scale, if this grant successfully protects even a few dozen children who would otherwise have suffered measurable IQ loss and developmental damage, the long-term local economic return could easily exceed <strong>$20 million to $40 million</strong>—a 3-to-6x return on the $6.25M federal investment, showing up over the next 60 years as better graduation rates, higher wages, and lower social services costs across the West End, Melrose, Belmont, and Hurt Park. That is not speculation. It is the entire economic case for lead remediation as public policy.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MASTER ARTWORK VIEW MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-950 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-black uppercase">
                  PLATE #42
                </span>
                <span className="text-xs font-bold">Roanoke Municipal Lead Audit & Roulet’s Law Architectural Cutaway</span>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="text-stone-400 hover:text-white text-xs font-bold px-2 py-1 rounded bg-stone-800"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-4 bg-black flex items-center justify-center max-h-[75vh] overflow-hidden">
              <img
                src={roanokeLeadAuditImg}
                alt="Roanoke Lead Audit Master Plate #42"
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>

            <div className="p-4 bg-stone-950 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
              <div>
                <span className="font-semibold text-stone-200">Cryptographic Vault Hash:</span>{' '}
                <code className="font-mono text-amber-400 text-[11px]">{PROVENANCE_HASH}</code>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1 rounded bg-stone-800 hover:bg-stone-700 text-white text-[11px] font-bold transition-colors cursor-pointer"
                >
                  {copiedHash ? '✓ Hash Copied' : 'Copy Hash'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
