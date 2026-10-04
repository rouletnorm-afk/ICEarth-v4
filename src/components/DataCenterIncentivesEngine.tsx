import React, { useState } from 'react';
import incentivesPlateImg from '../assets/images/datacenter_incentives_plate56_1790673860022.jpg';
import {
  DollarSign,
  Zap,
  Volume2,
  Building,
  Home,
  Shield,
  Scale,
  Users,
  AlertTriangle,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Copy,
  Check,
  FileText,
  Sliders,
  Sparkles,
  ArrowRight,
  Layers,
  BarChart3,
  TrendingDown,
  TrendingUp,
  Ban,
  Droplets,
  Landmark,
  Radio,
  FileCheck,
  PieChart as PieIcon,
  Activity,
  HeartPulse,
  Info
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

interface DataCenterIncentivesEngineProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const DataCenterIncentivesEngine: React.FC<DataCenterIncentivesEngineProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeTabSection, setActiveTabSection] = useState<'overview' | 'calculator' | 'evolution' | 'case_audits' | 'indigenous_paradigm'>('overview');
  const [copiedHash, setCopiedHash] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Incentives Engine Interactive Calculator State
  const [numHouseholds, setNumHouseholds] = useState<number>(4500);
  const [cashCheckPerHousehold, setCashCheckPerHousehold] = useState<number>(10000);
  const [communityFundMillions, setCommunityFundMillions] = useState<number>(120);
  const [facilityAcres, setFacilityAcres] = useState<number>(1300);
  const [powerDemandMW, setPowerDemandMW] = useState<number>(350);
  const [avgHomeValue, setAvgHomeValue] = useState<number>(240000);
  const [propertyDropPercent, setPropertyDropPercent] = useState<number>(8); // 8% avg depreciation
  const [electricBillHikeAnnual, setElectricBillHikeAnnual] = useState<number>(420); // $35/mo hike
  const [timeHorizonYears, setTimeHorizonYears] = useState<number>(15);

  const vaultHash = '0xDATA_CENTER_INCENTIVES_EVOLUTION_SOVEREIGN_IT_PLATE_56_VAULT_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Preset Configurations
  const applyPreset = (preset: 'hazle' | 'maryland' | 'michigan' | 'jicarilla' | 'amazon') => {
    if (preset === 'hazle') {
      setNumHouseholds(4500);
      setCashCheckPerHousehold(10000);
      setCommunityFundMillions(120);
      setFacilityAcres(1300);
      setPowerDemandMW(350);
      setAvgHomeValue(220000);
      setPropertyDropPercent(9);
      setElectricBillHikeAnnual(480);
      setTimeHorizonYears(15);
    } else if (preset === 'maryland') {
      setNumHouseholds(8200);
      setCashCheckPerHousehold(5000);
      setCommunityFundMillions(250);
      setFacilityAcres(2100);
      setPowerDemandMW(600);
      setAvgHomeValue(380000);
      setPropertyDropPercent(7);
      setElectricBillHikeAnnual(620);
      setTimeHorizonYears(20);
    } else if (preset === 'michigan') {
      setNumHouseholds(3200);
      setCashCheckPerHousehold(0);
      setCommunityFundMillions(45);
      setFacilityAcres(850);
      setPowerDemandMW(250);
      setAvgHomeValue(260000);
      setPropertyDropPercent(12);
      setElectricBillHikeAnnual(390);
      setTimeHorizonYears(10);
    } else if (preset === 'amazon') {
      setNumHouseholds(14000);
      setCashCheckPerHousehold(0);
      setCommunityFundMillions(200); // 1/5th share of AWS $1B nationwide 5-year pool
      setFacilityAcres(2500);
      setPowerDemandMW(850);
      setAvgHomeValue(320000);
      setPropertyDropPercent(9);
      setElectricBillHikeAnnual(540);
      setTimeHorizonYears(15);
    } else if (preset === 'jicarilla') {
      setNumHouseholds(1200);
      setCashCheckPerHousehold(0);
      setCommunityFundMillions(0);
      setFacilityAcres(80);
      setPowerDemandMW(50);
      setAvgHomeValue(180000);
      setPropertyDropPercent(0);
      setElectricBillHikeAnnual(0);
      setTimeHorizonYears(15);
    }
  };

  // Calculations for Household Balance Sheet
  const totalDirectCashCommunity = (numHouseholds * cashCheckPerHousehold) / 1000000; // in Millions
  const singleHomeDirectCheck = cashCheckPerHousehold;
  const singleHomePropertyLoss = (avgHomeValue * (propertyDropPercent / 100));
  const singleHomeCumulativeElectricHike = electricBillHikeAnnual * timeHorizonYears;
  const singleHomeNetEconomicImpact = singleHomeDirectCheck - singleHomePropertyLoss - singleHomeCumulativeElectricHike;

  // Community-wide cumulative values
  const communityTotalPropertyLossM = (numHouseholds * singleHomePropertyLoss) / 1000000;
  const communityTotalElectricHikeM = (numHouseholds * singleHomeCumulativeElectricHike) / 1000000;
  const communityTotalBenefitsM = totalDirectCashCommunity + communityFundMillions;
  const communityTotalGrossLossesM = communityTotalPropertyLossM + communityTotalElectricHikeM;
  const communityNetBalanceM = communityTotalBenefitsM - communityTotalGrossLossesM;

  // Comparison Chart Data: Developer Cash Offer vs True Lifetime Externalities
  const economicComparisonData = [
    {
      category: 'Per Household ($)',
      DirectPayout: singleHomeDirectCheck,
      PropertyDevaluation: -singleHomePropertyLoss,
      ElectricRateHike: -singleHomeCumulativeElectricHike,
      NetBalance: singleHomeNetEconomicImpact
    }
  ];

  // Community Total Waterfall Chart Data
  const communityWaterfallData = [
    { name: 'Developer Cash Checks', amount: totalDirectCashCommunity, fill: '#10b981' },
    { name: 'Community Fund (15yr)', amount: communityFundMillions, fill: '#3b82f6' },
    { name: 'Property Devaluation', amount: -communityTotalPropertyLossM, fill: '#ef4444' },
    { name: 'Grid Rate Hikes', amount: -communityTotalElectricHikeM, fill: '#dc2626' },
    { name: 'Net Economic Value', amount: communityNetBalanceM, fill: communityNetBalanceM >= 0 ? '#10b981' : '#b91c1c' }
  ];

  // 4-Phase Evolution Data
  const evolutionPhases = [
    {
      phase: 'Phase 1 (2010–2018)',
      title: 'Corporate Tax Welfare & Megawatt Subsidies',
      whoPays: 'Taxpayers & Municipalities',
      whoReceives: 'Big Tech Hyperscalers (AWS, Google, Meta, Microsoft)',
      mechanism: '100% Sales & Property Tax Abatements, subsidized water rights, free transmission hookups.',
      impact: 'Trillions in capital tax breaks, zero local jobs created (5–15 technicians per facility), municipal infrastructure strain.',
      communityReaction: 'Passive acceptance; marketed as "high-tech innovation economic growth."'
    },
    {
      phase: 'Phase 2 (2019–2024)',
      title: 'Municipal "Community Benefits" Packages',
      whoPays: 'Data Center Developers',
      whoReceives: 'Township Councils & School Boards',
      mechanism: '$10M to $120M multi-year funds promised for local schools, fire trucks, and park renovations.',
      impact: 'Developers use municipal bribes to bypass local zoning, build sub-stations, and silence environmental reviews.',
      communityReaction: 'Growing unrest; citizens notice schools get one-time grants while water tables drop and utility bills surge.'
    },
    {
      phase: 'Phase 3 (2025–2026+)',
      title: 'Direct $10,000 Cash Checks to Individual Households',
      whoPays: 'NorthPoint Development & Hyperscale Operators',
      whoReceives: 'Individual Citizens (4,500 Homes in Hazle Twp, PA)',
      mechanism: 'Direct $10,000 checks mailed to homeowners conditioned upon zoning approval of 1,300-acre project.',
      impact: 'Blatant privatized electoral bribe; nominal cash quickly erased by $19,800 avg property loss and $6,000 utility hikes.',
      communityReaction: 'Fierce citizen pushback: perceived as an insult/bribe, noise fears ("like a vacuum in your living room"), zoning moratorium enacted.'
    },
    {
      phase: 'Phase 3B (October 2026)',
      title: 'Amazon\'s $1 Billion "PR Shield" & Geopolitical AI Race Coercion',
      whoPays: 'Amazon Web Services (AWS)',
      whoReceives: 'Data Center Towns Nationwide ($1 Billion over 5 Years)',
      mechanism: 'Pledges for education, job training, energy affordability, water and energy preservation, combined with warnings that local opposition undermines U.S. national security in the AI race.',
      impact: 'Using philanthropic pacification funds to quell community rebellion over water depletion, power grid strain, and 24/7 noise while steamrolling local planning commissions.',
      communityReaction: 'Increasing skepticism: citizens recognize $1B over 5 years across hundreds of towns is a drop in the bucket compared to multi-gigawatt grid strain and residential rate inflation.'
    },
    {
      phase: 'Phase 4 (ICEarth Model)',
      title: 'The Sovereign IT Stack & Perpetual Tribal Equity',
      whoPays: 'Self-Funded Sovereign Cooperatives & Indigenous Trusts',
      whoReceives: 'The Sovereign Community (100% Perpetual Ownership)',
      mechanism: 'Closed-loop 0-water dielectric compute, 100% off-grid islanded microgrids, surplus clean electricity fed to community homes for free.',
      impact: '0 dBA noise, 0 gallons of aquifer water depleted, zero grid rate increases, non-custodial cryptographic self-custody.',
      communityReaction: 'Full democratic sovereignty, Elder council veto, shared computational dividends.'
    }
  ];

  // Acoustic Decibel Chart Data
  const acousticProfileData = [
    { source: 'Rural Night Ambient', dba: 30, comfort: 'Pristine Silence / Restful Sleep' },
    { source: 'ICEarth Modular Cluster (Exterior)', dba: 32, comfort: 'Silent Closed-Loop Dielectric' },
    { source: 'Residential Suburban Day', dba: 45, comfort: 'Normal Ambient' },
    { source: 'EPA Annoyance Threshold', dba: 55, comfort: 'Sleep Disruption / Chronic Stress' },
    { source: 'Meta Michigan Lawsuit Level', dba: 68, comfort: 'Vacuum in Living Room (24/7 Drone)' },
    { source: '1,300-Acre Chillers & Fans', dba: 75, comfort: 'Severe Neuro-Acoustic Trauma' }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24 font-sans`}>
      {/* 1. TOP HERO BANNER & TOM'S HARDWARE SOURCE DISPATCH */}
      <div className="bg-gradient-to-r from-amber-950 via-stone-950 to-emerald-950 text-white border-b border-amber-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-amber-600/90 text-stone-950 font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-md flex items-center gap-1.5 border border-amber-400">
                <DollarSign size={14} className="animate-pulse" />
                PLATE #56 MASTERWORK
              </span>
              <span className="px-3 py-1 bg-white/10 text-stone-200 font-mono text-xs rounded-md border border-white/20 flex items-center gap-1.5">
                🏛️ The Evolution of Data Center Incentives
              </span>
              <span className="px-3 py-1 bg-red-600/80 text-white font-mono text-xs rounded-md border border-red-400/40 flex items-center gap-1.5">
                🚫 Hazle Twp PA $10k Bribe
              </span>
              <span className="px-3 py-1 bg-rose-600/90 text-white font-mono text-xs rounded-md border border-rose-400/60 flex items-center gap-1.5">
                📦 Amazon $1B Towns Pledge (CBS News)
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.cbsnews.com/news/amazon-1-billion-data-center-investment-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-mono font-black text-xs rounded-lg shadow transition-colors flex items-center gap-1.5 border border-rose-300 cursor-pointer"
              >
                <span>CBS News: Amazon $1B Pledge</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://www.tomshardware.com/tech-industry/data-centers/data-center-developer-offers-usd10-000-checks-to-4-500-households-if-the-1-300-acre-facility-is-approved-locals-push-back-over-noise-and-bribe-concerns"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-black text-xs rounded-lg shadow transition-colors flex items-center gap-1.5 border border-amber-300 cursor-pointer"
              >
                <span>Tom's Hardware (Mark Tyson)</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs rounded-lg border border-stone-600 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Maximize2 size={13} />
                <span>View Plate #56 Artwork</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs tracking-wider uppercase font-bold">
                <Landmark size={14} />
                <span>Exposenomics & Computational Economics Investigation</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                The Data Center Incentives Engine: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-stone-200 to-emerald-400">From Corporate Tax Welfare to $10,000 Citizen Checks</span>
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                Data center developer incentives have evolved from government tax abatements to municipal community funds, and now into <strong>direct $10,000 cash payouts to 4,500 individual households</strong> as NorthPoint Development attempts to buy approval for a 1,300-acre mega-facility in Hazle Township, Pennsylvania. Locals are pushing back against the <em>24/7 noise pollution, falling property values, grid rate spikes, and perceived 'bribes'</em>. ICEarth deploys the <strong>Data Center Incentives Engine</strong> to calculate the true lifetime economic loss of hyperscale extraction versus our community-owned Sovereign IT Stack for Indigenous and rural communities.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-stone-300">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <DollarSign size={13} className="text-amber-400" />
                  <span>Hazle Twp: $10,000 / Household ($45M)</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Volume2 size={13} className="text-red-400" />
                  <span>24/7 Low-Frequency Acoustic Trauma</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Building size={13} className="text-emerald-400" />
                  <span>1,300-Acre Footprint vs Modular Enclaves</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Shield size={13} className="text-sky-400" />
                  <span>Indigenous Sovereign IT Alternative</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative group cursor-pointer rounded-xl overflow-hidden border-2 border-amber-500/80 shadow-2xl bg-black max-w-xs transition-transform hover:scale-102"
              >
                <img
                  src={incentivesPlateImg}
                  alt="Data Center Incentives Evolution and Sovereign Alternative Plate #56"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                  <span className="text-[10px] font-mono text-amber-300 font-bold uppercase">Plate #56 Masterwork</span>
                  <span className="text-xs font-bold text-white leading-tight">Data Center Incentives Evolution & Sovereign Alternative</span>
                  <span className="text-[9px] font-mono text-stone-400 mt-1">Click to expand high-res infographic</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-[10px] font-mono text-stone-400">Vault Reference:</span>
                <code className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-amber-300 border border-white/10">
                  {vaultHash.slice(0, 18)}...
                </code>
                <button
                  onClick={handleCopyHash}
                  className="p-1 hover:bg-white/10 rounded text-stone-300 transition-colors"
                  title="Copy cryptographic vault hash"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR */}
      <div className={`border-b ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Direct Citizen Payout</span>
                <DollarSign size={16} className="text-amber-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-amber-500">$10,000 / Home</div>
              <p className="mt-1 text-xs text-stone-400">Offered by NorthPoint to 4,500 Hazle Twp households ($45M total)</p>
            </div>

            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Net Household Impact</span>
                <TrendingDown size={16} className="text-red-500" />
              </div>
              <div className={`mt-2 text-2xl font-black ${singleHomeNetEconomicImpact >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                {singleHomeNetEconomicImpact >= 0 ? `+$${singleHomeNetEconomicImpact.toLocaleString()}` : `-$${Math.abs(singleHomeNetEconomicImpact).toLocaleString()}`}
              </div>
              <p className="mt-1 text-xs text-stone-400">Net after property devaluation (-${singleHomePropertyLoss.toLocaleString()}) & grid rate hikes</p>
            </div>

            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Acoustic Pollution</span>
                <Volume2 size={16} className="text-red-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-red-500">65–75 dBA</div>
              <p className="mt-1 text-xs text-stone-400">24/7 continuous low-frequency drone ("vacuum in living room")</p>
            </div>

            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Sovereign Alternative</span>
                <Shield size={16} className="text-emerald-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-emerald-500">100% Equity</div>
              <p className="mt-1 text-xs text-stone-400">ICEarth closed-loop waterless microgrid with citizen ownership</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION NAVIGATION PILLS */}
      <div className={`border-b ${siteTheme === 'dark' ? 'bg-stone-900/80 border-stone-800' : 'bg-stone-100/90 border-stone-200'} sticky top-0 z-20 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveTabSection('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTabSection === 'overview'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Info size={14} />
              <span>1. Hazle Township Dispatch</span>
            </button>

            <button
              onClick={() => setActiveTabSection('calculator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTabSection === 'calculator'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Sliders size={14} />
              <span>2. The Incentives Engine (Calculator)</span>
            </button>

            <button
              onClick={() => setActiveTabSection('evolution')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTabSection === 'evolution'
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Layers size={14} />
              <span>3. 4-Phase Evolution Timeline</span>
            </button>

            <button
              onClick={() => setActiveTabSection('case_audits')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTabSection === 'case_audits'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Scale size={14} />
              <span>4. Multi-State Lawsuits (MI, WI, MD, GA)</span>
            </button>

            <button
              onClick={() => setActiveTabSection('indigenous_paradigm')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTabSection === 'indigenous_paradigm'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Shield size={14} />
              <span>5. Sovereign Indigenous IT Alternative</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. MAIN TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* SECTION 1: OVERVIEW & HAZLE TOWNSHIP DISPATCH */}
        {activeTabSection === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-amber-500 text-stone-950 font-mono text-[10px] font-black rounded uppercase">
                      TOM'S HARDWARE & WSJ EXPOSÉ
                    </span>
                    <span className="text-xs font-mono text-stone-500">By Mark Tyson • September 2026</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    "Data center developer offers $10,000 checks to 4,500 households if the 1,300-acre facility is approved"
                  </h2>
                </div>
                <a
                  href="https://www.tomshardware.com/tech-industry/data-centers/data-center-developer-offers-usd10-000-checks-to-4-500-households-if-the-1-300-acre-facility-is-approved-locals-push-back-over-noise-and-bribe-concerns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-mono font-black text-xs rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Open Tom's Hardware Article</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-8 space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                  <div className="p-4 bg-amber-50/70 dark:bg-stone-950/80 rounded-xl border border-amber-300/60 dark:border-amber-900/60 font-mono text-xs sm:text-sm text-stone-800 dark:text-stone-300">
                    <p className="font-bold text-amber-700 dark:text-amber-400 mb-1">THE WSJ & TOM'S HARDWARE DISPATCH:</p>
                    <p className="italic">
                      "NorthPoint Development wants to build a data center on 1,300 acres in the Pocono foothills, near Hazle Township, Pennsylvania. As well as seeking to charm the local government with various funding packages, it has proposed paying checks of $10,000 per household. Despite the Pennsylvania town’s median income of $60,000, the offer isn’t being warmly welcomed by locals, reports the Wall Street Journal... Those interviewed were widely against the data center development plans and cited several reasons for being averse to accepting the payout: noise pollution, water and energy cost worries, dislike and distrust of AI moguls, and the potential negative impact on property prices."
                    </p>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 dark:text-white pt-2">
                    Why Direct Citizen Cash Checks Signal the Crisis of Extractive Hyperscalers
                  </h3>
                  <p>
                    For decades, tech giants and real estate conglomerates secured land approvals by quietly lobbying county commissioners with <em>Phase 1 tax abatements</em>. Later, they dangled <em>Phase 2 community benefits packages</em> ($10M–$120M) to fund public schools or volunteer fire stations. But as rural and Indigenous communities witnessed the devastation—spiking residential electricity rates, dried-up residential water wells, and round-the-clock acoustic vibration—local resistance stiffened.
                  </p>
                  <p>
                    Now developers have entered <strong>Phase 3: Direct Citizen Payouts</strong>. By mailing offer letters directly to 4,500 households in Hazle Township promising $10,000 cash upon zoning approval, developers are attempting to purchase democratic consent.
                  </p>
                  <p>
                    Yet as Hazle Township citizens noted:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                    <li>
                      <strong>The Math of Devaluation:</strong> A single-family home valued at $220,000 that drops just 8% due to adjacent industrial noise loses <strong>$17,600 in equity</strong>—instantly erasing the $10,000 check.
                    </li>
                    <li>
                      <strong>Surging Utility Bills:</strong> In PJM grid territory, data center load spikes have caused residential transmission tariffs to rise by $35 to $50/month ($6,000+ over 15 years).
                    </li>
                    <li>
                      <strong>The Acoustic Panopticon:</strong> Like the Meta data center in Michigan where residents sued after describing noise that <em>"sounds like someone set up a vacuum cleaner in your living room 24/7"</em>, industrial fans cannot be turned off.
                    </li>
                    <li>
                      <strong>The Dignity Factor:</strong> Residents widely rejected the offer as an insulting, predatory "bribe" intended to divide neighbors against each other.
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-4 space-y-4">
                  <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-100 border-stone-300'} space-y-3`}>
                    <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block">Hazle Township Data Center Profile</span>
                    <div className="space-y-2 text-xs font-mono text-stone-700 dark:text-stone-300">
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="text-stone-400">Developer:</span>
                        <span className="font-bold text-white">NorthPoint Development</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="text-stone-400">Acreage:</span>
                        <span className="font-bold text-amber-400">1,300 Acres (Poconos)</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="text-stone-400">Households Targeted:</span>
                        <span className="font-bold text-white">4,500 Homes</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="text-stone-400">Direct Cash Offer:</span>
                        <span className="font-bold text-emerald-400">$10,000 / Household</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="text-stone-400">Total Direct Cash:</span>
                        <span className="font-bold text-emerald-400">$45 Million</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="text-stone-400">Community Fund:</span>
                        <span className="font-bold text-blue-400">$120M over 15 Years</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="text-stone-400">Township Status:</span>
                        <span className="font-bold text-red-400">Rejected & Moratorium</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setActiveTabSection('calculator')}
                      className="w-full mt-3 py-2 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-stone-950 font-mono font-black text-xs rounded-lg shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Sliders size={13} />
                      <span>Run Hazle Twp in Incentives Engine</span>
                    </button>
                  </div>

                  <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-100 border-stone-300'} space-y-2`}>
                    <h4 className="font-bold text-xs text-stone-900 dark:text-white uppercase font-mono flex items-center gap-1.5">
                      <Ban size={14} className="text-red-500" />
                      <span>Moratorium Cascade</span>
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                      Hazle Township's council already rejected the project on zoning grounds and enacted a temporary moratorium, joining the <strong>Cherokee Nation</strong> (Plate #54) and rural jurisdictions nationwide demanding constitutional protection against extractive hyperscalers.
                    </p>
                  </div>
                </div>
              </div>

              {/* OCTOBER 2, 2026 BREAKTHROUGH: AMAZON VOWS $1B FOR DATA CENTER TOWNS (CBS NEWS) */}
              <div className={`mt-8 p-6 sm:p-8 rounded-2xl border-2 ${
                siteTheme === 'dark' 
                  ? 'bg-gradient-to-br from-stone-900 via-rose-950/20 to-stone-950 border-rose-500/70 shadow-2xl' 
                  : 'bg-gradient-to-br from-rose-50/60 via-white to-amber-50/40 border-rose-400 shadow-xl'
              } space-y-6`}>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4 border-stone-200 dark:border-stone-800">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-rose-600 text-white font-mono text-[11px] font-black rounded uppercase tracking-wider">
                        CBS NEWS INVESTIGATION • OCTOBER 2, 2026
                      </span>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        By Megan Cerullo • 1:42 PM EDT
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white">
                      Amazon Vows $1 Billion for Data Center Towns, Warning U.S. "Can't Afford to Lose" AI Race
                    </h3>
                  </div>

                  <a
                    href="https://www.cbsnews.com/news/amazon-1-billion-data-center-investment-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white font-mono font-black text-xs rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
                  >
                    <span>View CBS News Dispatch</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

                {/* Verbatim News Excerpt & Matt Garman Quote */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 bg-stone-100 dark:bg-black/50 rounded-xl border border-stone-300 dark:border-stone-800 font-mono text-xs sm:text-sm text-stone-800 dark:text-stone-200 space-y-2">
                      <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                        CBS NEWS WIRE REPORT:
                      </div>
                      <p className="italic leading-relaxed">
                        "Amazon's cloud computing division on Friday announced a new effort to temper opposition to data centers in some U.S. communities, while saying the U.S. 'can't afford to lose' the race to dominate artificial intelligence globally."
                      </p>
                      <p className="italic leading-relaxed">
                        "The tech giant pledged to invest an additional $1 billion over five years in the communities where it builds data centers, the facilities that power AI, on top of existing commitments. Amazon said the money will go toward education, job training, energy affordability, and water and energy preservation, and also fund other local priorities."
                      </p>
                    </div>

                    {/* CEO Quote Box */}
                    <div className="p-4 bg-gradient-to-r from-rose-950/40 via-stone-900 to-amber-950/40 rounded-xl border-l-4 border-rose-500 text-stone-100 space-y-2 font-serif">
                      <p className="text-xs font-mono font-bold text-amber-400 not-italic uppercase tracking-wider">
                        AWS CEO Matt Garman Official Statement:
                      </p>
                      <blockquote className="text-sm italic leading-relaxed text-stone-200">
                        "There is urgency to this data center buildout because we aren't the only country that sees the benefits of AI for the economy and national security, and the countries that lead in AI will shape it and get the most from it in the short and long run... The choices we make today will determine that outcome, and a lapse in our nation's focus or resolve could put us behind, and potentially irreparably so."
                      </blockquote>
                    </div>
                  </div>

                  {/* Right: Forensic Deconstruction */}
                  <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                    <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-rose-900/40' : 'bg-white border-rose-200'} space-y-1.5`}>
                      <span className="font-bold text-rose-600 dark:text-rose-400 text-sm block">
                        1. The Geopolitical Guilt-Trip
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                        Hyperscalers are now using patriotic fearmongering (<em>"the U.S. can't afford to lose the AI race"</em>) to bully municipal planning boards and brand concerned local homeowners as national security obstacles.
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-amber-900/40' : 'bg-white border-amber-200'} space-y-1.5`}>
                      <span className="font-bold text-amber-600 dark:text-amber-400 text-sm block">
                        2. The $1B Pacification Arithmetic
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                        $1 Billion over 5 years across hundreds of host towns averages ~$2M–$4M per county per year. Compared to Amazon's $60B+ annual capex, this pacification budget represents less than 0.3% of their capital outlay.
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-blue-900/40' : 'bg-white border-blue-200'} space-y-1.5`}>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-sm block">
                        3. The "Energy & Water" Confession
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                        Amazon directing money specifically to <em>"energy affordability and water preservation"</em> is an open corporate admission that hyperscale facilities directly inflate power bills and drain aquifers in host towns.
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        applyPreset('amazon');
                        setActiveTabSection('calculator');
                      }}
                      className="w-full py-2.5 bg-gradient-to-r from-rose-600 via-amber-600 to-rose-700 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
                    >
                      <Sliders size={14} />
                      <span>Simulate Amazon $1B Pledge in Incentives Engine</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* WIRED DISPATCH: RURAL DATA CENTERS BIG FEDERAL TAX BREAK & INDIGENOUS SOVEREIGNTY */}
              <div className={`p-6 sm:p-8 rounded-2xl border-2 transition-all ${
                siteTheme === 'dark'
                  ? 'bg-gradient-to-br from-amber-950/40 via-stone-900 to-purple-950/40 border-amber-500/60 shadow-2xl'
                  : 'bg-gradient-to-br from-amber-50/80 via-white to-purple-50/80 border-amber-400 shadow-xl'
              } space-y-6 mt-6`}>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b pb-4 border-stone-200 dark:border-stone-800">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-amber-600 text-stone-950 font-mono font-black text-[10px] rounded uppercase tracking-wider">
                        WIRED INVESTIGATION • OCTOBER 2026
                      </span>
                      <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                        By Wired Tech Desk • One Big Beautiful Bill Act
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white">
                      Rural Data Centers Are in for a Big Federal Tax Break (Plate #64)
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="https://www.wired.com/story/rural-data-centers-are-in-for-a-big-federal-tax-break/?utm_source=firefox-newtab-en-us"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-mono font-black text-xs rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
                    >
                      <span>View Wired Feature</span>
                      <ExternalLink size={13} />
                    </a>

                    {onNavigateTab && (
                      <button
                        onClick={() => onNavigateTab('rural_datacenter_tax')}
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 via-amber-600 to-purple-700 hover:from-purple-500 hover:to-amber-500 text-white font-mono font-black text-xs rounded-xl shadow-lg border border-amber-300 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105"
                      >
                        <Landmark size={14} className="text-amber-200" />
                        <span>Launch Rural & Tribal Tax Engine (Plate #64)</span>
                        <ArrowRight size={13} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="p-4 bg-stone-100 dark:bg-black/50 rounded-xl border border-stone-300 dark:border-stone-800 font-mono text-xs sm:text-sm text-stone-800 dark:text-stone-200 space-y-2">
                      <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                        WIRED DISPATCH & STATUTORY MANDATE:
                      </div>
                      <p className="italic leading-relaxed">
                        “Under the One Big Beautiful Bill Act, data center projects in rural areas could be eligible for major tax benefits starting next year. Some hyperscalers do not seem eager to take the free cash.”
                      </p>
                      <p className="italic leading-relaxed">
                        “On January 1, a new tax windfall will kick in that could benefit scores of rural data center projects—all thanks to the One Big Beautiful Bill Act. Starting next year, projects sited in tracts of rural land across the country will be newly eligible for a set of specific corporate tax benefits under a program expanded by the bill.”
                      </p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-amber-950/40 via-stone-900 to-purple-950/40 rounded-xl border-l-4 border-amber-500 text-stone-100 space-y-2 font-serif">
                      <p className="text-xs font-mono font-bold text-amber-400 not-italic uppercase tracking-wider">
                        Ways & Means Chairman Jason Smith Statement:
                      </p>
                      <blockquote className="text-sm italic leading-relaxed text-stone-200">
                        “The new rules may significantly lower barriers for large-scale, capital-intensive projects in rural areas—most notably hyperscale data centers. The economic case for building data centers in designated rural opportunity zones becomes far more compelling with the new program.”
                      </blockquote>
                    </div>
                  </div>

                  <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                    <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-amber-900/40' : 'bg-white border-amber-200'} space-y-1.5`}>
                      <span className="font-bold text-amber-600 dark:text-amber-400 text-sm block">
                        1. Why Hyperscalers Hesitate
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                        Federal rural opportunity zones face 5 to 7-year transmission grid queues in PJM and MISO, strict Davis-Bacon prevailing wage rules, and federal audit strings that multi-trillion-dollar firms prefer to avoid in favor of opaque state-level tax giveaways.
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-purple-900/40' : 'bg-white border-purple-200'} space-y-1.5`}>
                      <span className="font-bold text-purple-600 dark:text-purple-400 text-sm block">
                        2. The Native American Nations Tax Dimension
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                        Under IRC §7871 and §168(j), tribal lands offer accelerated depreciation and sovereign tax exemption. However, without sovereign IT mandates, tech cartels extract water and shift transmission costs, triggering tribal moratoria like the <strong>Cherokee Nation Hyperscale Ban (Plate #54)</strong>.
                      </p>
                    </div>

                    <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-emerald-900/40' : 'bg-white border-emerald-200'} space-y-1.5`}>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm block">
                        3. The Sovereign IT Antidote
                      </span>
                      <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-[11px]">
                        ICEarth establishes that rural and indigenous communities must mandate 100% closed-loop zero-water dielectric compute, off-grid micro-hydro, elder council vetoes, and mandatory 20% Cognitive Dividends under Roulet’s Law.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: THE INCENTIVES ENGINE (INTERACTIVE CALCULATOR) */}
        {activeTabSection === 'calculator' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    Interactive Forensic Financial Tool
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    The Data Center Incentives Engine: True Economic Balance Sheet
                  </h2>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-stone-400 mr-1">Load Presets:</span>
                  <button
                    onClick={() => applyPreset('hazle')}
                    className="px-2.5 py-1 bg-amber-600/90 text-stone-950 hover:bg-amber-500 rounded text-xs font-mono font-bold cursor-pointer transition-colors"
                  >
                    Hazle Twp (PA)
                  </button>
                  <button
                    onClick={() => applyPreset('maryland')}
                    className="px-2.5 py-1 bg-blue-600/90 text-white hover:bg-blue-500 rounded text-xs font-mono font-bold cursor-pointer transition-colors"
                  >
                    Maryland Mega
                  </button>
                  <button
                    onClick={() => applyPreset('michigan')}
                    className="px-2.5 py-1 bg-red-600/90 text-white hover:bg-red-500 rounded text-xs font-mono font-bold cursor-pointer transition-colors"
                  >
                    Meta Michigan
                  </button>
                  <button
                    onClick={() => applyPreset('amazon')}
                    className="px-2.5 py-1 bg-rose-600/90 text-white hover:bg-rose-500 rounded text-xs font-mono font-bold cursor-pointer transition-colors"
                  >
                    📦 Amazon $1B (AWS)
                  </button>
                  <button
                    onClick={() => applyPreset('jicarilla')}
                    className="px-2.5 py-1 bg-emerald-600/90 text-white hover:bg-emerald-500 rounded text-xs font-mono font-bold cursor-pointer transition-colors"
                  >
                    Jicarilla Sovereign
                  </button>
                </div>
              </div>

              {/* SLIDERS & PARAMETER CONTROLS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-5 bg-stone-100 dark:bg-stone-950/80 rounded-xl border border-stone-300 dark:border-stone-800 text-xs font-mono">
                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Target Households:</span>
                    <strong className="text-stone-900 dark:text-white">{numHouseholds.toLocaleString()}</strong>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="15000"
                    step="250"
                    value={numHouseholds}
                    onChange={(e) => setNumHouseholds(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Cash Check / Home ($):</span>
                    <strong className="text-emerald-500">${cashCheckPerHousehold.toLocaleString()}</strong>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="25000"
                    step="500"
                    value={cashCheckPerHousehold}
                    onChange={(e) => setCashCheckPerHousehold(Number(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Community Fund ($M):</span>
                    <strong className="text-blue-500">${communityFundMillions}M</strong>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="300"
                    step="10"
                    value={communityFundMillions}
                    onChange={(e) => setCommunityFundMillions(Number(e.target.value))}
                    className="w-full accent-blue-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Avg Home Value ($):</span>
                    <strong className="text-stone-900 dark:text-white">${avgHomeValue.toLocaleString()}</strong>
                  </label>
                  <input
                    type="range"
                    min="100000"
                    max="600000"
                    step="10000"
                    value={avgHomeValue}
                    onChange={(e) => setAvgHomeValue(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Property Drop (%):</span>
                    <strong className="text-red-500">-{propertyDropPercent}%</strong>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="1"
                    value={propertyDropPercent}
                    onChange={(e) => setPropertyDropPercent(Number(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Annual Rate Hike ($):</span>
                    <strong className="text-red-500">+${electricBillHikeAnnual}/yr</strong>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="1200"
                    step="30"
                    value={electricBillHikeAnnual}
                    onChange={(e) => setElectricBillHikeAnnual(Number(e.target.value))}
                    className="w-full accent-red-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Horizon (Years):</span>
                    <strong className="text-stone-900 dark:text-white">{timeHorizonYears} Years</strong>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    step="5"
                    value={timeHorizonYears}
                    onChange={(e) => setTimeHorizonYears(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-stone-600 dark:text-stone-400 flex justify-between">
                    <span>Facility Footprint:</span>
                    <strong className="text-stone-900 dark:text-white">{facilityAcres} Acres ({powerDemandMW} MW)</strong>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="3000"
                    step="50"
                    value={facilityAcres}
                    onChange={(e) => setFacilityAcres(Number(e.target.value))}
                    className="w-full accent-amber-500"
                  />
                </div>
              </div>

              {/* DUAL COMPARISON VISUALIZATION */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <BarChart3 size={16} className="text-emerald-500" />
                    <span>Single Household Balance Sheet ($)</span>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Comparing the developer's one-time direct check against true property equity loss and lifetime grid utility increases.
                  </p>

                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={economicComparisonData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="category" tick={{ fontSize: 11, fontWeight: 'bold' }} />
                        <YAxis tick={{ fontSize: 10 }} unit="$" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1c1917',
                            border: '1px solid #44403c',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '11px'
                          }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Bar dataKey="DirectPayout" name="Direct Developer Check (+)" fill="#10b981" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="PropertyDevaluation" name="Property Equity Loss (-)" fill="#ef4444" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="ElectricRateHike" name="15-Yr Electric Rate Hike (-)" fill="#f59e0b" radius={[0, 0, 4, 4]} />
                        <Bar dataKey="NetBalance" name="True Net Household Impact" fill={singleHomeNetEconomicImpact >= 0 ? '#059669' : '#b91c1c'} radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <TrendingDown size={16} className="text-red-500" />
                    <span>Community-Wide Cumulative Waterfall ($M)</span>
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Total financial flow across all {numHouseholds.toLocaleString()} homes over {timeHorizonYears} years.
                  </p>

                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={communityWaterfallData} margin={{ top: 20, right: 20, left: 10, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis dataKey="name" tick={{ fontSize: 9 }} angle={-15} textAnchor="end" interval={0} />
                        <YAxis tick={{ fontSize: 10 }} unit="M" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1c1917',
                            border: '1px solid #44403c',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '11px'
                          }}
                        />
                        <Bar dataKey="amount" name="Millions ($M)" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                          {communityWaterfallData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* SUMMARY FORENSIC CALLOUT */}
              <div className={`p-5 rounded-xl border ${singleHomeNetEconomicImpact >= 0 ? 'bg-emerald-950/40 border-emerald-700' : 'bg-red-950/40 border-red-700'} text-white space-y-3`}>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300">
                    Incentives Engine Forensic Verdict
                  </span>
                  <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold ${singleHomeNetEconomicImpact >= 0 ? 'bg-emerald-600' : 'bg-red-600'}`}>
                    {singleHomeNetEconomicImpact >= 0 ? 'NOMINAL COMMUNITY GAIN' : 'SEVERE NET CITIZEN EXTRACTION'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono pt-1">
                  <div>
                    <span className="text-stone-400 block">Single Home Gross Benefit:</span>
                    <strong className="text-emerald-400 text-sm">+${singleHomeDirectCheck.toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Single Home Hidden Costs:</span>
                    <strong className="text-red-400 text-sm">-${(singleHomePropertyLoss + singleHomeCumulativeElectricHike).toLocaleString()}</strong>
                  </div>
                  <div>
                    <span className="text-stone-400 block">Single Home Net Balance:</span>
                    <strong className={`text-base ${singleHomeNetEconomicImpact >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {singleHomeNetEconomicImpact >= 0 ? `+$${singleHomeNetEconomicImpact.toLocaleString()}` : `-$${Math.abs(singleHomeNetEconomicImpact).toLocaleString()}`}
                    </strong>
                  </div>
                </div>

                <p className="text-xs text-stone-300 leading-relaxed pt-2 border-t border-white/10">
                  {singleHomeNetEconomicImpact < 0 ? (
                    <>
                      <strong>Why Locals Say No:</strong> In this modeled scenario, every household receiving a ${singleHomeDirectCheck.toLocaleString()} check actually <em>loses ${Math.abs(singleHomeNetEconomicImpact).toLocaleString()} in net lifetime wealth</em> when factoring in the -{propertyDropPercent}% property loss (-${singleHomePropertyLoss.toLocaleString()}) and ${singleHomeCumulativeElectricHike.toLocaleString()} in residential electric utility rate increases over {timeHorizonYears} years. This mathematically justifies Hazle Township residents calling the offer an insulting "bribe" that masks severe structural extraction.
                    </>
                  ) : (
                    <>
                      Under custom parameters, the direct check exceeds modeled property and electric losses, but fails to account for unquantified health externalities (chronic sleep disruption, 24/7 low-frequency fan drone, and municipal aquifer depletion).
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: 4-PHASE EVOLUTION TIMELINE */}
        {activeTabSection === 'evolution' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800">
                <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Structural Paradigm Shift (2010–2026+)
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                  How Data Center Incentives Evolved: From Tax Welfare to Citizen Buyouts
                </h2>
              </div>

              <div className="space-y-6">
                {evolutionPhases.map((phaseItem, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl border transition-all ${
                      index === 3
                        ? 'bg-gradient-to-r from-emerald-950/60 via-stone-950 to-emerald-950/60 border-emerald-500/80 shadow-xl'
                        : index === 2
                        ? 'bg-gradient-to-r from-amber-950/50 via-stone-950 to-amber-950/50 border-amber-500/80'
                        : siteTheme === 'dark'
                        ? 'bg-stone-950 border-stone-800'
                        : 'bg-stone-50 border-stone-200'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-wider">
                        {phaseItem.phase}
                      </span>
                      {index === 3 && (
                        <span className="px-2.5 py-0.5 bg-emerald-600 text-white font-mono text-[10px] font-black rounded uppercase">
                          THE SOVEREIGN FUTURE
                        </span>
                      )}
                      {index === 2 && (
                        <span className="px-2.5 py-0.5 bg-amber-600 text-stone-950 font-mono text-[10px] font-black rounded uppercase">
                          CURRENT CRISIS (HAZLE TWP)
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-3">
                      {phaseItem.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono mb-3">
                      <div className="p-3 bg-black/40 rounded-lg border border-white/10">
                        <span className="text-stone-400 block">Who Pays:</span>
                        <strong className="text-red-400">{phaseItem.whoPays}</strong>
                      </div>
                      <div className="p-3 bg-black/40 rounded-lg border border-white/10">
                        <span className="text-stone-400 block">Who Receives:</span>
                        <strong className="text-emerald-400">{phaseItem.whoReceives}</strong>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                      <p><strong>Mechanism:</strong> {phaseItem.mechanism}</p>
                      <p><strong>Real Impact:</strong> {phaseItem.impact}</p>
                      <p><strong>Community Response:</strong> {phaseItem.communityReaction}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: MULTI-STATE LAWSUITS (MI, WI, MD, GA) */}
        {activeTabSection === 'case_audits' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
                    Acoustic & Environmental Tort Litigation
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    The Noise & Resource Lawsuits: Michigan, Wisconsin, Maryland & Georgia
                  </h2>
                </div>
                <span className="px-3 py-1 bg-red-950 text-red-400 text-xs font-mono font-bold rounded-lg border border-red-800 flex items-center gap-1.5">
                  <Volume2 size={13} className="animate-pulse" />
                  <span>Acoustic Nuisance Tort Precedents</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Meta Michigan */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-red-900/60' : 'bg-red-50/50 border-red-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 uppercase">
                      MICHIGAN • Meta Data Center Lawsuit
                    </span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] rounded">24/7 Noise Nuisance</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">
                    "It sounds like someone set up a vacuum in your living room"
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    Michigan residents filed formal legal action against an operational AI data center facility emitting low-frequency cooling fan rumble 24 hours a day, 7 days a week. Homeowners reported severe sleep deprivation, psychological distress, and inability to use outdoor yards.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 border border-red-900/40">
                    <strong>Litigation Finding:</strong> Evaporative cooling fans create low-frequency infrasound (20–100 Hz) that penetrates double-pane residential windows effortlessly.
                  </div>
                </div>

                {/* Microsoft Wisconsin */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-red-900/60' : 'bg-red-50/50 border-red-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 uppercase">
                      WISCONSIN • Microsoft Class Action
                    </span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] rounded">Mount Pleasant</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">
                    Class Action Against "World's Most Powerful AI Data Center"
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    Wisconsin residents filed a class-action lawsuit against Microsoft’s multi-billion dollar AI data center campus in Mount Pleasant. The suit charges Microsoft with continuous industrial acoustic pollution, ground vibration from chiller pumps, and unmitigated property devaluation across surrounding neighborhoods.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 border border-red-900/40">
                    <strong>Tort Theory:</strong> Private nuisance and inverse condemnation; industrial sound emissions constitute a de facto taking of residential enjoyment.
                  </div>
                </div>

                {/* Maryland */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-amber-900/60' : 'bg-amber-50/50 border-amber-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-400 uppercase">
                      MARYLAND • Record Community Package
                    </span>
                    <span className="px-2 py-0.5 bg-amber-600 text-stone-950 font-mono text-[10px] rounded">Mega-Campus</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">
                    Biggest-Ever US Community Benefits Package Offered
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    In Maryland, developers offered the largest community benefits package in US history to quell intense resident protests regarding Potomac River water withdrawals and high-voltage transmission lines carving through preserved rural lands.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-amber-300 border border-amber-900/40">
                    <strong>Developer Strategy:</strong> Massive up-front municipal endowments to suppress grassroots environmental impact review.
                  </div>
                </div>

                {/* QTS Georgia */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-amber-900/60' : 'bg-amber-50/50 border-amber-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-amber-600 dark:text-amber-400 uppercase">
                      GEORGIA • QTS Mega-Development
                    </span>
                    <span className="px-2 py-0.5 bg-amber-600 text-stone-950 font-mono text-[10px] rounded">Grid Strain</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">
                    Georgia Power Grid Surcharge Backlash
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    In Georgia, utility regulators approved massive fossil fuel plant expansions to power QTS and other data centers, triggering statewide outrage as residential ratepayers were slapped with monthly fuel surcharges while tech firms received wholesale discounts.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-amber-300 border border-amber-900/40">
                    <strong>Economic Inequity:</strong> Working families subsidize the multi-gigawatt power demand of commercial AI training clusters.
                  </div>
                </div>

                {/* Amazon AWS Nationwide $1B Pacification Fund */}
                <div className={`p-5 rounded-xl border md:col-span-2 ${siteTheme === 'dark' ? 'bg-gradient-to-r from-stone-950 via-rose-950/30 to-stone-950 border-rose-800/70' : 'bg-gradient-to-r from-rose-50/70 via-white to-amber-50/60 border-rose-300'} space-y-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-black text-rose-600 dark:text-rose-400 uppercase">
                      NATIONWIDE • Amazon Web Services (AWS) $1 Billion Fund
                    </span>
                    <span className="px-2.5 py-0.5 bg-rose-600 text-white font-mono text-[10px] rounded font-bold">
                      CBS News Investigation • Oct 2026
                    </span>
                  </div>
                  <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-white">
                    Amazon Vows $1B for Data Center Towns, Warning U.S. "Can't Afford to Lose" AI Race
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    CBS News reports that Amazon's cloud computing division pledged an additional $1 billion over five years to communities where it operates AI data centers, earmarking money for education, job training, energy affordability, and water/energy preservation. Simultaneously, AWS CEO Matt Garman issued a stark geopolitical warning: <em>"The choices we make today will determine that outcome, and a lapse in our nation's focus or resolve could put us behind, and potentially irreparably so."</em>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-black/40 rounded-lg text-rose-300 border border-rose-900/40">
                      <strong>The Pacification Strategy:</strong> AWS is attempting to buy off grassroots zoning opposition and municipal moratoria by framing local environmental reviews as a national security risk.
                    </div>
                    <div className="p-3 bg-black/40 rounded-lg text-amber-300 border border-amber-900/40">
                      <strong>The Economic Reality:</strong> $1B spread across dozens of towns over 5 years is a negligible fraction of Amazon's $60B+ annual capex, failing to offset local aquifer depletion and skyrocketing residential electric bills.
                    </div>
                  </div>
                </div>
              </div>

              {/* ACOUSTIC DECIBEL COMPARISON CHART */}
              <div className="mt-6 pt-6 border-t border-stone-200 dark:border-stone-800">
                <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2 flex items-center gap-2">
                  <Volume2 size={16} className="text-red-500" />
                  <span>Acoustic Decibel Benchmark: Hyperscale Fans vs Ambient Sleep (dBA)</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                  Why $10,000 cannot compensate for 24/7 low-frequency fan noise that exceeds the EPA chronic sleep disruption threshold (55 dBA).
                </p>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={acousticProfileData} layout="vertical" margin={{ top: 10, right: 30, left: 160, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis type="number" domain={[0, 90]} tick={{ fontSize: 10 }} unit=" dBA" />
                      <YAxis dataKey="source" type="category" tick={{ fontSize: 11, fontWeight: 'bold' }} width={150} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1c1917',
                          border: '1px solid #44403c',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '11px'
                        }}
                      />
                      <Bar dataKey="dba" name="Decibel Level (dBA)" fill="#ef4444" radius={[0, 4, 4, 0]}>
                        {acousticProfileData.map((entry, index) => (
                          <Cell
                            key={`cell-acoustic-${index}`}
                            fill={entry.dba <= 35 ? '#10b981' : entry.dba <= 55 ? '#f59e0b' : '#dc2626'}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: SOVEREIGN INDIGENOUS IT ALTERNATIVE */}
        {activeTabSection === 'indigenous_paradigm' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                    The ICEarth Model
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    Designing the Sovereign IT Stack for Indigenous Communities: Zero Bribes, 100% Equity
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigateTab && onNavigateTab('cherokee_it_position')}
                    className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <span>Cherokee Ban (Plate #54)</span>
                    <ArrowRight size={11} />
                  </button>
                  <button
                    onClick={() => onNavigateTab && onNavigateTab('jicarilla_sovereign_it')}
                    className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-white font-mono text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <span>Jicarilla IT Stack</span>
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Why Sovereign Communities Reject Commercial Bribes:</strong> When commercial developers approached the <strong>Cherokee Nation</strong> (Plate #54) or rural townships like Hazle, PA, they assumed that money could buy forgiveness for ecological destruction. But sovereign nations and rural stewards recognize that <em>water, clean air, quiet night skies, and energy autonomy cannot be purchased back once surrendered</em>.
                </p>

                <p>
                  ICEarth engineers the definitive alternative: <strong>Phase 4 Sovereign IT</strong>, designed specifically for Indigenous tribes (such as the <em>Jicarilla Apache Nation</em>, <em>Cherokee Nation</em>, and <em>Pueblo communities</em>) and self-governing rural cooperatives.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 not-prose">
                  <div className="p-5 bg-stone-100 dark:bg-stone-950/80 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                      01
                    </div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-sm">100% Perpetual Community Equity</h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      The compute cluster is not owned by an outside corporation dangling temporary checks; it is owned 100% by the sovereign tribal nation or community trust. Computational revenues flow perpetually to healthcare, education, and elder care.
                    </p>
                  </div>

                  <div className="p-5 bg-stone-100 dark:bg-stone-950/80 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                      02
                    </div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-sm">0 Gal/Day Waterless Immersion</h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Using closed-loop dielectric liquid immersion cooling, ICEarth consumes <strong>0.0 gallons of water per day</strong>. Tribal alluvial aquifers and high-desert water tables remain 100% untouched.
                    </p>
                  </div>

                  <div className="p-5 bg-stone-100 dark:bg-stone-950/80 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                      03
                    </div>
                    <h4 className="font-bold text-stone-900 dark:text-white text-sm">Islanded Clean Microgrid Dividends</h4>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Compute is powered exclusively by off-grid solar, geothermal, or micro-hydro. Surplus generation is fed directly into local residential households for free, lowering electricity bills rather than driving 30% rate spikes.
                    </p>
                  </div>
                </div>

                <p>
                  <strong>The Sovereign Economic Formula:</strong> In the commercial hyperscale model, an outside developer extracts $100M+ in annual profit while leaving behind noise, dry wells, and a one-time $10,000 bribe. In the ICEarth Sovereign IT model, <strong>the community retains 100% of the computational asset, controls the decryption keys, safeguards the land, and earns an ongoing sovereign dividend</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* 5. CROSS-NAVIGATION BAR */}
        <div className={`p-6 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-sm space-y-4`}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-stone-500 uppercase">Related Sovereign IT & Exposenomic Engines</span>
              <h3 className="font-bold text-stone-900 dark:text-white text-base">Explore Interconnected Sovereign Architecture Tabs</h3>
            </div>
            <span className="text-xs font-mono text-stone-400">Direct Permalinks</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab && onNavigateTab('swiss_data_sovereignty')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-red-500">PLATE #55</span>
                <Shield size={14} className="text-red-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">Swiss Data Sovereignty</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">DW report, Proton encryption & freedom spectrum</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('cherokee_it_position')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-500">PLATE #54</span>
                <Ban size={14} className="text-red-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">Cherokee Nation Hyperscale Ban</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Chief Hoskin Jr. data center moratorium</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('icearth_stack')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-amber-500">PLATE #38</span>
                <Zap size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">The ICEarth Stack: Indigenous AI</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Foundational clean compute & sovereign microgrids</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('deb_haaland_home')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-amber-500">PLATE #52</span>
                <Landmark size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">Deb Haaland's 8 Laws</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">New Mexico IT sovereignty & moratorium</p>
            </button>
          </div>
        </div>
      </div>

      {/* 6. HIGH-RESOLUTION ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-amber-600 text-stone-950 font-mono text-[10px] font-black uppercase rounded">
                  PLATE #56 MASTERWORK
                </span>
                <span className="text-sm font-bold text-white">
                  The Evolution of Data Center Incentives & The Sovereign IT Alternative
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={incentivesPlateImg}
                alt="Data Center Incentives Evolution Plate #56"
                className="max-h-[75vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2">
                <span className="text-stone-400">Vault Reference:</span>
                <code className="text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                  {vaultHash}
                </code>
                <button
                  onClick={handleCopyHash}
                  className="p-1 hover:bg-stone-800 rounded text-stone-300"
                  title="Copy cryptographic vault hash"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.tomshardware.com/tech-industry/data-centers/data-center-developer-offers-usd10-000-checks-to-4-500-households-if-the-1-300-acre-facility-is-approved-locals-push-back-over-noise-and-bribe-concerns"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded flex items-center gap-1"
                >
                  <span>Tom's Hardware Report</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
