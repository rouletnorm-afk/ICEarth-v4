import React, { useState, useMemo } from 'react';
import {
  Droplets,
  AlertTriangle,
  Building,
  Shield,
  MapPin,
  TrendingDown,
  DollarSign,
  Calendar,
  Layers,
  Baby,
  ArrowRight,
  ExternalLink,
  Search,
  CheckCircle2,
  FileText,
  PieChart as PieIcon,
  BarChart3,
  Sliders,
  Sparkles,
  Share2,
  Download,
  Flame,
  Scale,
  Activity,
  Maximize2,
  Info,
  Clock,
  Compass,
  Zap,
  HelpCircle
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell
} from 'recharts';
import twinCitiesImg from '../assets/images/twin_cities_lead_service_lines_v2_1787000288036.jpg';

interface TwinCitiesProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const TwinCitiesLeadExposomics: React.FC<TwinCitiesProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'engineering_cutaway' | 'comparison' | 'funding_simulator' | 'green_zones' | 'toxicology' | 'action_guide'
  >('overview');

  const [activeHotspot, setActiveHotspot] = useState<string>('curb_stop');
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Funding Simulator Interactive State
  const [stateBondingAllocation, setStateBondingAllocation] = useState<number>(15); // $15M default in 2026 bill
  const [federalGrantRenewal, setFederalGrantRenewal] = useState<'expires_2027' | 'extended_2032' | 'doubled'>(
    'expires_2027'
  );
  const [replacementPacePerYear, setReplacementPacePerYear] = useState<number>(3200); // Lines per year combined

  const isLight = siteTheme === 'light';

  const PROVENANCE_HASH = '0xTWIN_CITIES_LEAD_EXPOSOMICS_MINNPOST_2026_08_17';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2200);
  };

  // Comparative Municipal Data & Multi-Tier Gap Benchmarking
  const municipalGapRecords = [
    {
      city: 'Minneapolis',
      state: 'MN',
      totalPipes: 37000,
      replacedToDate: 2400,
      remainingToReplace: 34600,
      avgUnitCost: 7000,
      totalAnticipatedCost: 259000000, // $259M
      utilityFunding: 0, // 100% Private - $0 Utility Ratepayer funds legal
      localFunding: 14000000, // City ARPA & General Fund
      regionalFunding: 5000000, // Hennepin Co. / Met Council
      stateFunding: 15000000, // State bonding allocation to date ($15M vs $180M needed)
      federalFunding: 35000000, // Federal IIJA grants (expiring end of 2027)
      totalSecured: 69000000, // $69M total secured
      netShortfall: 190000000, // $190M shortfall
      pctShortfall: 73.4,
      annualPace: 1000,
      statutoryDeadline: '2033 (10-Yr MN Law)',
      projectedCompletionYear: 2061,
      yearsDelay: 28,
      ownershipModel: '100% Private (Main to House)',
      legalFundingConstraint: 'City Charter & State Law prohibit water rate revenue for private improvements.',
      color: '#0284c7'
    },
    {
      city: 'St. Paul',
      state: 'MN',
      totalPipes: 21500,
      replacedToDate: 4500,
      remainingToReplace: 17000,
      avgUnitCost: 7200,
      totalAnticipatedCost: 154800000, // $154.8M
      utilityFunding: 45000000, // SPRWS ratepayer revenue covers public half
      localFunding: 12000000, // St. Paul CIP & ARPA
      regionalFunding: 6000000, // Ramsey County
      stateFunding: 14000000, // State Bonding
      federalFunding: 28000000, // Federal IIJA
      totalSecured: 105000000,
      netShortfall: 49800000, // $49.8M shortfall
      pctShortfall: 32.2,
      annualPace: 1500,
      statutoryDeadline: '2033 (Extending 2038)',
      projectedCompletionYear: 2037,
      yearsDelay: 4,
      ownershipModel: '50% Public (Street) / 50% Private (Yard)',
      legalFundingConstraint: 'Public utility rates fund street-to-curb; private side relies on state/federal grants.',
      color: '#0d9488'
    },
    {
      city: 'Cleveland',
      state: 'OH',
      totalPipes: 27100,
      replacedToDate: 5100,
      remainingToReplace: 22000,
      avgUnitCost: 7500,
      totalAnticipatedCost: 203250000,
      utilityFunding: 35000000, // Cleveland Water Capital
      localFunding: 15000000,
      regionalFunding: 8000000,
      stateFunding: 20000000, // H2Ohio
      federalFunding: 45000000, // IIJA
      totalSecured: 123000000,
      netShortfall: 80250000,
      pctShortfall: 39.5,
      annualPace: 1800,
      statutoryDeadline: '2035 (EPA LCRI)',
      projectedCompletionYear: 2038,
      yearsDelay: 3,
      ownershipModel: 'Split Utility / Private',
      legalFundingConstraint: 'City Council authorized rate revenue subsidy for equity zones.',
      color: '#d97706'
    },
    {
      city: 'Chicago',
      state: 'IL',
      totalPipes: 407800,
      replacedToDate: 7800,
      remainingToReplace: 400000,
      avgUnitCost: 11000,
      totalAnticipatedCost: 4485800000, // $4.49 Billion
      utilityFunding: 120000000,
      localFunding: 80000000,
      regionalFunding: 25000000,
      stateFunding: 110000000, // IEPA SRF
      federalFunding: 350000000, // IIJA
      totalSecured: 685000000,
      netShortfall: 3800800000, // $3.8B gap
      pctShortfall: 84.7,
      annualPace: 3500,
      statutoryDeadline: '2035 (EPA LCRI)',
      projectedCompletionYear: 2139,
      yearsDelay: 104,
      ownershipModel: '100% Private (Mandated Pb in code to 1986)',
      legalFundingConstraint: 'Vast volume requires multi-decade state & federal capital bonding.',
      color: '#7c3aed'
    },
    {
      city: 'Milwaukee',
      state: 'WI',
      totalPipes: 71200,
      replacedToDate: 6200,
      remainingToReplace: 65000,
      avgUnitCost: 8000,
      totalAnticipatedCost: 569600000,
      utilityFunding: 90000000, // Milwaukee Water Works
      localFunding: 30000000,
      regionalFunding: 15000000,
      stateFunding: 45000000, // WI DNR Safe Drinking Water
      federalFunding: 85000000, // IIJA
      totalSecured: 265000000,
      netShortfall: 304600000,
      pctShortfall: 53.5,
      annualPace: 3200,
      statutoryDeadline: '2042 (20-Yr City Plan)',
      projectedCompletionYear: 2046,
      yearsDelay: 4,
      ownershipModel: 'Private with Utility Cost-Share',
      legalFundingConstraint: 'Mandatory homeowner cost share capped at $1,592; utility subsidizes balance.',
      color: '#ea580c'
    },
    {
      city: 'Flint',
      state: 'MI',
      totalPipes: 29000,
      replacedToDate: 10200,
      remainingToReplace: 300,
      avgUnitCost: 9500,
      totalAnticipatedCost: 99750000,
      utilityFunding: 5000000,
      localFunding: 10000000,
      regionalFunding: 2000000,
      stateFunding: 35000000, // State Settlement
      federalFunding: 47000000, // WIIN Act
      totalSecured: 99000000,
      netShortfall: 750000,
      pctShortfall: 0.8,
      annualPace: 2500,
      statutoryDeadline: '2024 (Court Consent Decree)',
      projectedCompletionYear: 2026,
      yearsDelay: 2,
      ownershipModel: 'Emergency Consent Decree',
      legalFundingConstraint: '100% funded through court-enforced state and federal settlement agreements.',
      color: '#dc2626'
    },
    {
      city: 'Toledo',
      state: 'OH',
      totalPipes: 18500,
      replacedToDate: 3800,
      remainingToReplace: 14700,
      avgUnitCost: 6800,
      totalAnticipatedCost: 125800000,
      utilityFunding: 20000000,
      localFunding: 8000000,
      regionalFunding: 3000000,
      stateFunding: 16000000, // H2Ohio
      federalFunding: 25000000, // IIJA
      totalSecured: 72000000,
      netShortfall: 53800000,
      pctShortfall: 42.8,
      annualPace: 1200,
      statutoryDeadline: '2035 (EPA LCRI)',
      projectedCompletionYear: 2038,
      yearsDelay: 3,
      ownershipModel: 'Split Utility / Private',
      legalFundingConstraint: 'Utility funds street-side; city grant assistance covers private side.',
      color: '#0891b2'
    },
    {
      city: 'Buffalo',
      state: 'NY',
      totalPipes: 43000,
      replacedToDate: 4200,
      remainingToReplace: 38800,
      avgUnitCost: 8500,
      totalAnticipatedCost: 365500000,
      utilityFunding: 40000000, // Buffalo Water Board
      localFunding: 18000000,
      regionalFunding: 6000000,
      stateFunding: 38000000, // NYS Clean Water Infrastructure
      federalFunding: 55000000, // IIJA
      totalSecured: 157000000,
      netShortfall: 208500000,
      pctShortfall: 57.0,
      annualPace: 1600,
      statutoryDeadline: '2035 (EPA LCRI)',
      projectedCompletionYear: 2050,
      yearsDelay: 15,
      ownershipModel: '100% Private (City Charter)',
      legalFundingConstraint: 'Private service lines require specialized state/federal grant pass-throughs.',
      color: '#4f46e5'
    }
  ];

  const [benchmarkSortField, setBenchmarkSortField] = useState<
    'remaining' | 'totalCost' | 'netShortfall' | 'pctShortfall' | 'projectedYear'
  >('remaining');
  const [selectedFundingTierFilter, setSelectedFundingTierFilter] = useState<
    'all' | 'utility' | 'local' | 'regional' | 'state' | 'federal'
  >('all');

  const sortedBenchmarkData = useMemo(() => {
    return [...municipalGapRecords].sort((a, b) => {
      if (benchmarkSortField === 'remaining') return b.remainingToReplace - a.remainingToReplace;
      if (benchmarkSortField === 'totalCost') return b.totalAnticipatedCost - a.totalAnticipatedCost;
      if (benchmarkSortField === 'netShortfall') return b.netShortfall - a.netShortfall;
      if (benchmarkSortField === 'pctShortfall') return b.pctShortfall - a.pctShortfall;
      if (benchmarkSortField === 'projectedYear') return b.projectedCompletionYear - a.projectedCompletionYear;
      return 0;
    });
  }, [benchmarkSortField]);

  // Comparative Municipal Data for Legacy Chart
  const municipalComparisons = municipalGapRecords.map(r => ({
    city: `${r.city}, ${r.state}`,
    leadLines: r.remainingToReplace,
    ownership: r.ownershipModel,
    ratepayerFundingUsable: r.utilityFunding > 0 ? 'Yes (Public Half/Share)' : 'No (Forbidden)',
    replacedSince2022: r.replacedToDate,
    targetGoal: r.statutoryDeadline,
    stateGrantNeed: `$${(r.netShortfall / 1000000).toFixed(0)}M`,
    color: r.color
  }));

  // Simulated Projections calculation based on sliders
  const simulationProjection = useMemo(() => {
    const totalMplsLines = 37000;
    const totalStPaulLines = 17000;
    const totalLines = totalMplsLines + totalStPaulLines; // 54,000

    let annualBudget = stateBondingAllocation * 1_000_000;
    if (federalGrantRenewal === 'expires_2027') {
      annualBudget += 10_000_000; // minimal base
    } else if (federalGrantRenewal === 'extended_2032') {
      annualBudget += 35_000_000;
    } else {
      annualBudget += 75_000_000;
    }

    const avgCostPerLine = 9000; // average excavation & copper install
    const fundedLinesPerYear = Math.max(800, Math.round(annualBudget / avgCostPerLine));
    const effectivePace = Math.min(6500, (fundedLinesPerYear + replacementPacePerYear) / 2);

    const yearsToZero = Math.ceil(totalLines / effectivePace);
    const projectedCompletionYear = 2026 + yearsToZero;

    const trajectoryData = [];
    let remaining = totalLines;
    for (let yr = 2026; yr <= Math.min(2055, projectedCompletionYear + 2); yr += 2) {
      trajectoryData.push({
        year: yr.toString(),
        linesRemaining: Math.max(0, Math.round(remaining)),
        mplsRemaining: Math.max(0, Math.round(remaining * (37000 / 54000))),
        stPaulRemaining: Math.max(0, Math.round(remaining * (17000 / 54000))),
        cumulativeChildrenProtected: Math.round((totalLines - remaining) * 0.45)
      });
      remaining -= effectivePace * 2;
    }

    return {
      effectivePace,
      yearsToZero,
      projectedCompletionYear,
      trajectoryData,
      isMissed2033Goal: projectedCompletionYear > 2033
    };
  }, [stateBondingAllocation, federalGrantRenewal, replacementPacePerYear]);

  // Neighborhood Vulnerability Data
  const neighborhoodData = [
    {
      name: 'Northside Mpls (Hawthorne)',
      pctPre1950Homes: 92,
      leadLineDensity: 88,
      childBllElevatedPct: 6.8,
      environmentalJusticeIndex: 96,
      currentStatus: 'Active Replacement (Phase 1)',
      zone: 'Northside Green Zone'
    },
    {
      name: 'Northside Mpls (McKinley)',
      pctPre1950Homes: 94,
      leadLineDensity: 89,
      childBllElevatedPct: 7.2,
      environmentalJusticeIndex: 98,
      currentStatus: 'Active Replacement (Phase 1)',
      zone: 'Northside Green Zone'
    },
    {
      name: 'Southside Mpls (East Phillips)',
      pctPre1950Homes: 87,
      leadLineDensity: 84,
      childBllElevatedPct: 5.9,
      environmentalJusticeIndex: 94,
      currentStatus: 'Scheduled 2027 (Phase 2)',
      zone: 'Southside Green Zone'
    },
    {
      name: 'Southside Mpls (Midtown Phillips)',
      pctPre1950Homes: 89,
      leadLineDensity: 86,
      childBllElevatedPct: 6.1,
      environmentalJusticeIndex: 95,
      currentStatus: 'Scheduled 2027 (Phase 2)',
      zone: 'Southside Green Zone'
    },
    {
      name: 'St. Paul (Frogtown / Thomas-Dale)',
      pctPre1950Homes: 91,
      leadLineDensity: 82,
      childBllElevatedPct: 5.4,
      environmentalJusticeIndex: 93,
      currentStatus: 'Active Replacement (4.5k done)',
      zone: 'St. Paul Priority Area'
    },
    {
      name: 'Licensed Daycares (Both Cities)',
      pctPre1950Homes: 78,
      leadLineDensity: 75,
      childBllElevatedPct: 4.8,
      environmentalJusticeIndex: 99,
      currentStatus: 'Priority Target: End of 2026',
      zone: 'Pediatric Fast-Track'
    }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors font-sans`}>
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER WITH SOURCE CITATION & METADATA */}
      {/* ========================================================================= */}
      <section className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} py-8 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-sky-100 text-sky-800 rounded font-mono font-bold uppercase tracking-wider text-[10px] border border-sky-200">
                MUNICIPAL LEAD EXPOSOMICS AUDIT
              </span>
              <span className="text-stone-400">/</span>
              <span className="text-stone-600 font-semibold">Minneapolis & St. Paul (Twin Cities, MN)</span>
              <span className="text-stone-400">/</span>
              <span className="text-amber-600 font-bold">2027 Funding Cliff</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyHash}
                className="px-3 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer border border-stone-300"
                title="Copy Cryptographic Provenance Hash"
              >
                {copiedHash ? (
                  <>
                    <CheckCircle2 size={12} className="text-emerald-600" />
                    <span className="text-emerald-600 font-bold">Hash Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 size={12} />
                    <span>Copy Vault Hash</span>
                  </>
                )}
              </button>

              <button
                onClick={() => setIsArtworkModalOpen(true)}
                className="px-3 py-1 bg-sky-900 hover:bg-sky-800 text-white rounded text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Maximize2 size={12} />
                <span>View Scientific Plate</span>
              </button>
            </div>
          </div>

          {/* Main Title Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold border border-amber-500/30">
                <AlertTriangle size={14} className="text-amber-600" />
                <span>Minnesota 2026 Bonding Deficit: $15M Allocated vs. $250M Needed (94% Shortfall)</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight text-stone-950 leading-tight">
                With Funding Set to Dry Up, Minneapolis & St. Paul Face Tough Choices on Lead Pipe Removal
              </h1>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-4xl font-serif italic">
                “There’s 1,000 miles of water mains, essentially 1,000 miles of streets in the city that you’re trying to coordinate these projects with... Without state and federal funding, we’re not going to be able to stay up to date.”
                <br />
                <span className="text-xs font-sans not-italic text-stone-500 font-semibold block mt-1">
                  — Annika Bankston, Director of Water Treatment & Distribution, Minneapolis Public Works
                </span>
              </p>

              {/* Source attribution & links */}
              <div className="flex flex-wrap items-center gap-4 text-xs pt-2 border-t border-stone-200">
                <span className="font-semibold text-stone-900">Source:</span>
                <span className="text-stone-700">Claire Carlson (Report for America corps member)</span>
                <span className="text-stone-400">•</span>
                <span className="text-stone-700">MinnPost / Mississippi River Basin Ag & Water Desk</span>
                <span className="text-stone-400">•</span>
                <a
                  href="https://www.minnpost.com/drinking-water/2026/08/with-funding-set-to-dry-up-minneapolis-faces-tough-choices-on-lead-pipe-removal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-700 hover:text-sky-900 font-bold underline flex items-center gap-1"
                >
                  Read MinnPost Original Article ↗
                </a>
              </div>
            </div>

            {/* Thumbnail Box */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setIsArtworkModalOpen(true)}
                className="group relative rounded-xl overflow-hidden border-2 border-stone-300 shadow-md cursor-pointer hover:border-sky-600 transition-all aspect-[16/10] bg-stone-950"
              >
                <img
                  src={twinCitiesImg}
                  alt="Twin Cities Lead Pipe Infrastructure Infographic"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-bold">
                    PLATE #21: TWIN CITIES INFRASTRUCTURE
                  </span>
                  <p className="text-xs font-bold line-clamp-1">125-Yr Corroded Lead Pipes vs. 1,000 Miles of Water Mains</p>
                  <span className="text-[9px] text-stone-300 flex items-center gap-1 mt-0.5">
                    <Maximize2 size={10} /> Click to Inspect High-Res Plate
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Key Statistics Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wide block">Minneapolis Lead Lines</span>
              <span className="text-xl font-bold font-mono text-sky-800">37,000</span>
              <span className="text-[9px] text-stone-500 block font-semibold">100% Privately Owned</span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wide block">St. Paul Lead Lines</span>
              <span className="text-xl font-bold font-mono text-teal-800">17,000</span>
              <span className="text-[9px] text-stone-500 block font-semibold">50/50 Public/Private Split</span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wide block">St. Paul Replaced</span>
              <span className="text-xl font-bold font-mono text-emerald-700">4,500</span>
              <span className="text-[9px] text-stone-500 block font-semibold">Since 2022 (Frogtown)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wide block">MN 2026 Bonding</span>
              <span className="text-xl font-bold font-mono text-red-700">$15 Million</span>
              <span className="text-[9px] text-red-600 block font-semibold font-mono">vs. $250M Requested</span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wide block">Funding Cliff</span>
              <span className="text-xl font-bold font-mono text-amber-700">End 2027</span>
              <span className="text-[9px] text-stone-500 block font-semibold">Federal & State Expiry</span>
            </div>

            <div className="p-3.5 rounded-xl bg-stone-100 border border-stone-200 text-center">
              <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wide block">MN State Goal</span>
              <span className="text-xl font-bold font-mono text-stone-800">2033</span>
              <span className="text-[9px] text-stone-500 block font-semibold">EPA Mandate: 2037</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. SUB-NAVIGATION TABS */}
      {/* ========================================================================= */}
      <div className={`sticky top-0 z-30 border-b ${isLight ? 'bg-stone-50/95 border-stone-200' : 'bg-stone-900/95 border-stone-800'} backdrop-blur-md px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-3 scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'overview'
                ? 'bg-sky-900 text-white shadow-xs font-bold'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Info size={14} />
            <span>1. Executive Summary & Policy Clash</span>
          </button>

          <button
            onClick={() => setActiveSubTab('engineering_cutaway')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'engineering_cutaway'
                ? 'bg-sky-900 text-white shadow-xs font-bold ring-1 ring-sky-500'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Layers size={14} />
            <span>2. Home Service Line Installation Cutaway</span>
          </button>

          <button
            onClick={() => setActiveSubTab('comparison')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'comparison'
                ? 'bg-sky-900 text-white shadow-xs font-bold'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <BarChart3 size={14} />
            <span>3. Twin Cities vs. US Metros</span>
          </button>

          <button
            onClick={() => setActiveSubTab('funding_simulator')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'funding_simulator'
                ? 'bg-sky-900 text-white shadow-xs font-bold'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Sliders size={14} />
            <span>4. 2027 Funding Cliff Simulator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('green_zones')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'green_zones'
                ? 'bg-sky-900 text-white shadow-xs font-bold'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <MapPin size={14} />
            <span>5. Green Zones & Priority Areas</span>
          </button>

          <button
            onClick={() => setActiveSubTab('toxicology')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'toxicology'
                ? 'bg-sky-900 text-white shadow-xs font-bold'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <Activity size={14} />
            <span>6. Exposomics & Toxicology</span>
          </button>

          <button
            onClick={() => setActiveSubTab('action_guide')}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeSubTab === 'action_guide'
                ? 'bg-sky-900 text-white shadow-xs font-bold'
                : 'hover:bg-stone-200 text-stone-700'
            }`}
          >
            <CheckCircle2 size={14} />
            <span>7. Action Guide & Testing</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SUB-TAB CONTENT PANELS */}
      {/* ========================================================================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* ========================================================================= */}
        {/* SUBTAB 1: EXECUTIVE SUMMARY & POLICY CLASH */}
        {/* ========================================================================= */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-fade-in">
            {/* Key Findings Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold">
                  <Building size={20} />
                </div>
                <h3 className="text-base font-bold text-stone-900">The 100% Private Ownership Barrier</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  In Minneapolis, all <strong>37,000 lead service lines</strong> are legally classified as private property. Under Minnesota municipal law, ratepayer utility fees cannot be expended on private infrastructure. Consequently, Minneapolis is 100% reliant on state bonding appropriations and federal grants.
                </p>
                <div className="p-3 bg-stone-50 rounded-lg text-[11px] font-mono text-stone-700 border border-stone-200">
                  Contrast: St. Paul owns 50% of the line (from street main to sidewalk curb-stop), allowing water department revenues to fund half the replacement.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Clock size={20} />
                </div>
                <h3 className="text-base font-bold text-stone-900">The 2027 Federal & State Funding Cliff</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Federal Bipartisan Infrastructure Law (IIJA) and Minnesota state grant allocations expire at the <strong>end of 2027</strong>. The 2026 Minnesota bonding bill allocated only <strong>$15 Million</strong> statewide—a staggering shortfall against the $250 Million sought by public health advocates.
                </p>
                <div className="p-3 bg-amber-50 rounded-lg text-[11px] font-mono text-amber-800 border border-amber-200">
                  Without renewed capital, the 2033 state eradication goal will slip past 2038–2045, extending pediatric lead exposure windows by over a decade.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Droplets size={20} />
                </div>
                <h3 className="text-base font-bold text-stone-900">1,000 Miles of Water Main Coordination</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Minneapolis Public Works synchronizes lead line excavations with cast-iron water main relining and street repaving to avoid tearing up asphalt multiple times. If a water main is not due for cleaning for 5 years, adjacent lead lines are deferred, creating structural delays.
                </p>
                <div className="p-3 bg-emerald-50 rounded-lg text-[11px] font-mono text-emerald-800 border border-emerald-200">
                  Priority green-zones (Hawthorne, McKinley, Phillips) and 100% of licensed daycares are fast-tracked for completion by end of 2026.
                </div>
              </div>
            </div>

            {/* In-depth Analytical Narrative */}
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-6">
              <h2 className="text-xl font-serif font-bold text-stone-950">
                The Anatomy of an Urban Heavy-Metal Vector: 125-Year-Old Corroded Pipes Beneath Minneapolis Streets
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-xs text-stone-700 leading-relaxed font-sans">
                <div className="space-y-4">
                  <p>
                    A cloud of dust drifts behind a compact track loader as it slowly rolls down the street carrying dirt and asphalt from a giant hole five feet wide. About eight feet below ground, a utility worker in a hard hat dislodges a <strong>125-year-old corroded lead pipe</strong> that connected a century-old Victorian home to the city’s municipal water main.
                  </p>
                  <p>
                    In North Minneapolis neighborhoods like Hawthorne and McKinley, homes built at the turn of the 20th century were plumbed almost exclusively with soft, malleable lead. The replacement crews pull out the toxic lead service line and slide in fresh copper tubing. The service is provided <strong>free of charge</strong> to homeowners, funded through state and federal grant appropriations.
                  </p>
                  <p>
                    However, across Minnesota, an estimated <strong>87,000 known lead lines</strong> remain buried—with tens of thousands more yet to be mapped. While the federal EPA Lead and Copper Rule Improvements (LCRI) mandate 100% replacement by 2037, Minnesota set a more aggressive statutory deadline of <strong>2033</strong>.
                  </p>
                </div>

                <div className="space-y-4">
                  <p>
                    The crux of the crisis lies in municipal financing jurisprudence: Minneapolis cannot legally leverage ratepayer utility bills to fund improvements on private real estate. If the legislature in St. Paul fails to replenish the state bonding fund, Minneapolis public works officials will be forced into agonizing triage—deciding which disenfranchised neighborhoods receive clean copper lines and which remain exposed.
                  </p>
                  <p>
                    Director Annika Bankston emphasizes that Minneapolis water treatment facilities continuously inject <strong>corrosion control inhibitors</strong> (orthophosphate) that form a protective mineral passivation scale inside pipes to prevent lead dissolution. Nonetheless, physical water main disturbances, road vibrations, seasonal ground freezing, and water stagnation can fracture this scale, releasing dangerous particulate spikes into drinking faucets.
                  </p>
                  <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
                    <span className="font-bold text-stone-900 text-xs block">Key Exposome Insight:</span>
                    <p className="text-[11px] text-stone-600">
                      While water lines represent a chronic low-level ingestion route, the Minnesota Department of Health estimates over <strong>1,000,000 Minnesota homes</strong> contain toxic lead-based paint and dust. Together with legacy leaded solder and automotive soil deposits, these vectors form a multi-generational neurotoxic exposome burden.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cross-Tab Navigation Pills */}
              <div className="pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-stone-500 font-bold uppercase">Explore Related Sovereign Case Studies:</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <button
                    onClick={() => onNavigateTab?.('flint')}
                    className="px-3 py-1.5 bg-red-100 hover:bg-red-200 text-red-800 rounded font-semibold transition-colors cursor-pointer"
                  >
                    ☣️ Flint Lead Audit ↗
                  </button>
                  <button
                    onClick={() => onNavigateTab?.('chicago')}
                    className="px-3 py-1.5 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded font-semibold transition-colors cursor-pointer"
                  >
                    🏛️ Chicago Lead Audit (400k Lines) ↗
                  </button>
                  <button
                    onClick={() => onNavigateTab?.('cleveland')}
                    className="px-3 py-1.5 bg-rose-100 hover:bg-rose-200 text-rose-800 rounded font-semibold transition-colors cursor-pointer"
                  >
                    🔴 Cleveland Lead Audit & Confession ↗
                  </button>
                  <button
                    onClick={() => onNavigateTab?.('global_lead_crime_proof')}
                    className="px-3 py-1.5 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded font-semibold transition-colors cursor-pointer"
                  >
                    🧠 Roulet’s Law Global Proof ↗
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBTAB 2: RESIDENTIAL SERVICE LINE INSTALLATION CUTAWAY & ARCHITECTURAL ANATOMY */}
        {/* ========================================================================= */}
        {activeSubTab === 'engineering_cutaway' && (
          <div className="space-y-8 animate-fade-in">
            {/* Header & Context */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-mono text-sky-800 uppercase font-bold tracking-widest bg-sky-100 px-2.5 py-1 rounded border border-sky-200">
                    CIVIL ENGINEERING & MUNICIPAL PLUMBING CUTAWAY
                  </span>
                  <h2 className="text-xl font-serif font-bold text-stone-950 mt-1">
                    Anatomy of a Typical Residential Lead Service Line Replacement
                  </h2>
                </div>
                <button
                  onClick={() => setIsArtworkModalOpen(true)}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <Maximize2 size={13} />
                  <span>Inspect High-Res Technical Plate #21</span>
                </button>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed max-w-4xl">
                The common urban lead service line runs underground from the municipal water main beneath the street, under the curb and sidewalk, across the private front lawn, and penetrates the foundation wall into the basement water meter. Below is the verified engineering diagram of trenchless extraction and copper line installation.
              </p>
            </div>

            {/* Interactive SVG Diagram */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 shadow-xl space-y-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <h3 className="text-sm font-bold text-sky-300 font-mono flex items-center gap-2">
                    <Layers size={16} />
                    CROSS-SECTION: STREET MAIN TO BASEMENT WATER METER (8 FT FROST DEPTH)
                  </h3>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    Click any numbered engineering component below to inspect technical specifications and municipal jurisdiction.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-sky-950 text-sky-300 border border-sky-800 rounded font-semibold">
                    ASTM B88 Type K Copper Tubing
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded font-semibold">
                    100% Trenchless Pull
                  </span>
                </div>
              </div>

              {/* SVG Graphic */}
              <div className="w-full overflow-x-auto py-2">
                <svg
                  viewBox="0 0 1000 420"
                  className="w-full min-w-[760px] h-auto font-sans select-none"
                >
                  {/* Sky & Surface Layers */}
                  <rect x="0" y="0" width="1000" height="120" fill="#0f172a" />
                  
                  {/* Street & Asphalt Layer */}
                  <rect x="0" y="120" width="300" height="20" fill="#334155" />
                  <line x1="0" y1="130" x2="300" y2="130" stroke="#facc15" strokeWidth="2" strokeDasharray="15 10" />
                  <text x="20" y="112" fill="#94a3b8" fontSize="10" fontWeight="bold" fontFamily="monospace">STREET (PUBLIC ROW)</text>

                  {/* Concrete Curb & Sidewalk */}
                  <rect x="300" y="112" width="16" height="28" fill="#64748b" />
                  <rect x="316" y="116" width="100" height="14" fill="#94a3b8" />
                  <text x="325" y="110" fill="#cbd5e1" fontSize="9" fontWeight="bold" fontFamily="monospace">SIDEWALK</text>

                  {/* Lawn & Grass Surface */}
                  <rect x="416" y="120" width="364" height="8" fill="#15803d" />
                  <text x="490" y="112" fill="#86efac" fontSize="10" fontWeight="bold" fontFamily="monospace">PRIVATE FRONT LAWN</text>

                  {/* House Structure */}
                  <polygon points="780,120 780,40 890,10 1000,40 1000,120" fill="#1e293b" stroke="#475569" strokeWidth="2" />
                  <rect x="830" y="55" width="40" height="35" fill="#38bdf8" opacity="0.3" stroke="#94a3b8" strokeWidth="1.5" />
                  <rect x="910" y="55" width="40" height="35" fill="#38bdf8" opacity="0.3" stroke="#94a3b8" strokeWidth="1.5" />
                  <text x="835" y="32" fill="#f8fafc" fontSize="11" fontWeight="bold" fontFamily="serif">RESIDENTIAL DWELLING</text>

                  {/* Sub-surface Soil & Frost Line */}
                  <rect x="0" y="140" width="780" height="280" fill="#1c1917" />
                  <line x1="0" y1="200" x2="780" y2="200" stroke="#78716c" strokeDasharray="4 4" strokeWidth="1" />
                  <text x="15" y="195" fill="#a8a29e" fontSize="9" fontFamily="monospace">MINNESOTA FROST LINE (6–8 FT)</text>

                  {/* Basement Foundation Wall & Floor */}
                  <rect x="780" y="120" width="20" height="300" fill="#57534e" stroke="#78716c" strokeWidth="2" />
                  <rect x="800" y="120" width="200" height="300" fill="#0c0a09" />
                  <rect x="800" y="380" width="200" height="40" fill="#44403c" />
                  <text x="840" y="160" fill="#f5f5f4" fontSize="12" fontWeight="bold" fontFamily="monospace">BASEMENT INTERIOR</text>

                  {/* Municipal Water Main in Street (8 ft deep) */}
                  <circle cx="120" cy="300" r="32" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="3" />
                  <circle cx="120" cy="300" r="22" fill="#0284c7" />
                  <text x="120" y="304" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">WATER MAIN</text>
                  <text x="120" y="350" fill="#93c5fd" fontSize="9" textAnchor="middle" fontFamily="monospace">8"–12" Cast Iron Main</text>

                  {/* Corporation Stop at Main */}
                  <rect x="145" y="293" width="14" height="14" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5" />

                  {/* Public Street Segment (Corroded Lead being extracted / Copper replacement) */}
                  {/* Lead pipe remnant (gray dotted) */}
                  <line x1="155" y1="300" x2="370" y2="300" stroke="#71717a" strokeWidth="8" strokeDasharray="6 3" opacity="0.4" />
                  {/* New Copper Pipe (bright copper) */}
                  <line x1="155" y1="300" x2="370" y2="300" stroke="#f97316" strokeWidth="5" />

                  {/* Curb Stop Valve Box & Shutoff Key at sidewalk */}
                  <rect x="364" y="128" width="12" height="180" fill="#475569" stroke="#94a3b8" strokeWidth="1" />
                  <circle cx="370" cy="300" r="8" fill="#f59e0b" stroke="#ffffff" strokeWidth="1.5" />
                  <text x="370" y="100" fill="#f59e0b" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">CURB STOP BOX</text>
                  <line x1="370" y1="105" x2="370" y2="128" stroke="#f59e0b" strokeWidth="1" />

                  {/* Boundary Line Indicator (Public / Private) */}
                  <line x1="370" y1="40" x2="370" y2="400" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="6 4" />
                  <rect x="310" y="45" width="120" height="20" fill="#7f1d1d" rx="4" />
                  <text x="370" y="58" fill="#fecaca" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">LEGAL JURISDICTION LINE</text>

                  {/* Private Yard Line (Under Lawn, 8 ft deep) */}
                  <line x1="370" y1="300" x2="780" y2="300" stroke="#f97316" strokeWidth="5" />
                  {/* Old corroded lead ghost */}
                  <line x1="370" y1="292" x2="780" y2="292" stroke="#94a3b8" strokeWidth="3" strokeDasharray="4 4" opacity="0.3" />

                  {/* Directional boring arrow */}
                  <line x1="420" y1="320" x2="720" y2="320" stroke="#38bdf8" strokeWidth="2" strokeDasharray="5 3" />
                  <polygon points="730,320 715,315 715,325" fill="#38bdf8" />
                  <text x="570" y="340" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">Trenchless Pneumatic Cable Pull / Boring Path</text>

                  {/* Foundation Wall Penetration */}
                  <rect x="775" y="290" width="30" height="20" fill="#0284c7" stroke="#38bdf8" strokeWidth="1" />
                  <text x="790" y="280" fill="#7dd3fc" fontSize="8" textAnchor="middle" fontFamily="monospace">Wall Sleeve</text>

                  {/* Basement Interior Plumbing */}
                  {/* Copper pipe into meter */}
                  <line x1="790" y1="300" x2="840" y2="300" stroke="#f97316" strokeWidth="5" />
                  <line x1="840" y1="300" x2="840" y2="260" stroke="#f97316" strokeWidth="5" />
                  
                  {/* Water Meter */}
                  <rect x="825" y="235" width="30" height="25" fill="#0d9488" stroke="#5eead4" strokeWidth="1.5" rx="3" />
                  <text x="840" y="251" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="monospace">METER</text>
                  
                  {/* Grounding Wire Clamp */}
                  <line x1="840" y1="280" x2="880" y2="280" stroke="#22c55e" strokeWidth="2" />
                  <line x1="880" y1="280" x2="880" y2="380" stroke="#22c55e" strokeWidth="2" />
                  <text x="890" y="330" fill="#86efac" fontSize="8" fontFamily="monospace">Grounding Wire</text>

                  {/* Main House Shutoff Valve */}
                  <circle cx="840" cy="215" r="7" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
                  
                  {/* House Distribution Copper Pipe */}
                  <line x1="840" y1="215" x2="840" y2="150" stroke="#f97316" strokeWidth="4" />
                  <line x1="840" y1="150" x2="960" y2="150" stroke="#f97316" strokeWidth="4" />
                  <text x="900" y="142" fill="#fed7aa" fontSize="9" fontWeight="bold" fontFamily="monospace">To Home Faucets</text>

                  {/* Interactive Hotspot Trigger Buttons / Overlays */}
                  {/* 1. Main */}
                  <g onClick={() => setActiveHotspot('main')} className="cursor-pointer">
                    <circle cx="120" cy="300" r="16" fill="#3b82f6" opacity="0.4" className="animate-pulse" />
                    <circle cx="120" cy="270" r="10" fill="#1d4ed8" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="120" y="274" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">1</text>
                  </g>

                  {/* 2. Curb Stop */}
                  <g onClick={() => setActiveHotspot('curb_stop')} className="cursor-pointer">
                    <circle cx="370" cy="300" r="16" fill="#f59e0b" opacity="0.4" className="animate-pulse" />
                    <circle cx="370" cy="270" r="10" fill="#d97706" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="370" y="274" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">2</text>
                  </g>

                  {/* 3. Yard / Trenchless */}
                  <g onClick={() => setActiveHotspot('yard_line')} className="cursor-pointer">
                    <circle cx="580" cy="300" r="16" fill="#f97316" opacity="0.4" className="animate-pulse" />
                    <circle cx="580" cy="270" r="10" fill="#c2410c" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="580" y="274" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">3</text>
                  </g>

                  {/* 4. Basement Water Meter */}
                  <g onClick={() => setActiveHotspot('basement_meter')} className="cursor-pointer">
                    <circle cx="840" cy="245" r="16" fill="#0d9488" opacity="0.4" className="animate-pulse" />
                    <circle cx="840" cy="210" r="10" fill="#0f766e" stroke="#ffffff" strokeWidth="1.5" />
                    <text x="840" y="214" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">4</text>
                  </g>
                </svg>
              </div>

              {/* Hotspot Quick Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <button
                  onClick={() => setActiveHotspot('main')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeHotspot === 'main'
                      ? 'bg-blue-900/60 border-blue-400 text-white shadow-md ring-1 ring-blue-400'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-400 block">Hotspot #1</span>
                  <span className="text-xs font-bold block mt-0.5">Municipal Water Main</span>
                  <span className="text-[10px] text-stone-400 block mt-1">Street Cast Iron & Orthophosphate</span>
                </button>

                <button
                  onClick={() => setActiveHotspot('curb_stop')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeHotspot === 'curb_stop'
                      ? 'bg-amber-900/60 border-amber-400 text-white shadow-md ring-1 ring-amber-400'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-400 block">Hotspot #2</span>
                  <span className="text-xs font-bold block mt-0.5">Curb Stop & Property Line</span>
                  <span className="text-[10px] text-stone-400 block mt-1">Legal Boundary (Mpls vs. St. Paul)</span>
                </button>

                <button
                  onClick={() => setActiveHotspot('yard_line')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeHotspot === 'yard_line'
                      ? 'bg-orange-900/60 border-orange-400 text-white shadow-md ring-1 ring-orange-400'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-orange-400 block">Hotspot #3</span>
                  <span className="text-xs font-bold block mt-0.5">Trenchless Yard Line Pull</span>
                  <span className="text-[10px] text-stone-400 block mt-1">8 ft Depth & ASTM B88 Copper</span>
                </button>

                <button
                  onClick={() => setActiveHotspot('basement_meter')}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    activeHotspot === 'basement_meter'
                      ? 'bg-teal-900/60 border-teal-400 text-white shadow-md ring-1 ring-teal-400'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase font-bold text-teal-400 block">Hotspot #4</span>
                  <span className="text-xs font-bold block mt-0.5">Basement Water Meter</span>
                  <span className="text-[10px] text-stone-400 block mt-1">Foundation Sleeve & Electrical Ground</span>
                </button>
              </div>

              {/* Detailed Hotspot Explanation Card */}
              <div className="p-5 rounded-xl bg-stone-900 border border-stone-800 text-xs space-y-3">
                {activeHotspot === 'main' && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-blue-400 flex items-center gap-2">
                      <Droplets size={16} />
                      1. Municipal Water Main & Corporation Stop (Street Right-of-Way)
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      Minneapolis operates over <strong>1,000 miles of cast iron water distribution mains</strong>. The municipal connection begins at the corporation stop—a brass valve tapped into the pressurized water main about 8 feet below the street surface. To avoid repeatedly excavating paved streets, Minneapolis Public Works coordinates lead service line replacements directly with scheduled water main cleaning, structural cement-mortar relining, and street repaving.
                    </p>
                    <div className="p-3 bg-stone-950 rounded-lg text-stone-400 font-mono text-[11px] border border-stone-800">
                      Engineering Parameter: Mains operate at 50–75 PSI with continuous orthophosphate corrosion inhibitor dosing to maintain passivating mineral scale inside legacy pipes.
                    </div>
                  </div>
                )}

                {activeHotspot === 'curb_stop' && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                      <Scale size={16} />
                      2. The Curb Stop Valve & The Municipal Ownership Divide
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      Located near the sidewalk or boulevard grass terrace, the curb stop valve allows utility workers to shut off water to an individual building using a specialized long-handled key. This valve marks the critical legal boundary:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div className="p-3 rounded-lg bg-sky-950/60 border border-sky-800 space-y-1">
                        <span className="font-bold text-sky-300 block text-[11px]">Minneapolis (100% Private):</span>
                        <p className="text-[11px] text-stone-300">
                          By city charter, the homeowner owns the entire pipe from the corporation stop in the street all the way into the house. Ratepayer water revenues cannot legally fund private improvements.
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-teal-950/60 border border-teal-800 space-y-1">
                        <span className="font-bold text-teal-300 block text-[11px]">St. Paul (50% Public / 50% Private):</span>
                        <p className="text-[11px] text-stone-300">
                          Saint Paul Regional Water Services (SPRWS) owns the street-to-curb portion, enabling public utility bonding and rate revenue to cover half of the replacement cost directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeHotspot === 'yard_line' && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-orange-400 flex items-center gap-2">
                      <Zap size={16} />
                      3. Trenchless Extraction & Seamless ASTM B88 Copper Tubing
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      Modern contractors employ horizontal directional drilling (HDD) or pneumatic cable pullers to replace pipes without destroying entire front lawns. A steel aircraft cable is fed through the old 125-year-old lead pipe, anchored to a mechanical splitting cone, and pulled by a hydraulic ram while simultaneously drawing a new seamless <strong>Type K copper tube</strong> into the exact underground void.
                    </p>
                    <div className="p-3 bg-stone-950 rounded-lg text-stone-400 font-mono text-[11px] border border-stone-800">
                      Cold-Climate Standard: In Minnesota, pipes must maintain an 8-foot burial depth to avoid winter permafrost freezing and hydraulic rupture.
                    </div>
                  </div>
                )}

                {activeHotspot === 'basement_meter' && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-teal-400 flex items-center gap-2">
                      <Building size={16} />
                      4. Basement Foundation Wall Penetration & Water Meter Configuration
                    </h4>
                    <p className="text-stone-300 leading-relaxed">
                      The copper pipe enters through the concrete foundation wall via a sealed waterproof sleeve. Immediately inside the basement, the line passes through a brass ball shutoff valve, the municipal water meter, and the electrical system grounding clamp. Crews verify that the electrical grounding jumper wire remains intact across the meter to prevent electrocution hazards before completing the final connection to internal home plumbing.
                    </p>
                    <div className="p-3 bg-stone-950 rounded-lg text-stone-400 font-mono text-[11px] border border-stone-800">
                      Post-Installation Protocol: Homeowners are instructed to perform a mandatory high-velocity 30-minute indoor cold-water flush to purge any dislodged particulates.
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Legal Ownership Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-sky-800 font-bold">
                  <Building size={18} />
                  <h3 className="text-sm uppercase tracking-wide font-mono">Minneapolis Legal Framework</h3>
                </div>
                <ul className="space-y-2 text-xs text-stone-700 list-disc list-inside">
                  <li><strong>Total Lead Lines:</strong> Approximately 37,000 active lines.</li>
                  <li><strong>Ownership:</strong> 100% private property from street main to basement meter.</li>
                  <li><strong>Financing Restriction:</strong> Municipal ratepayer water revenues cannot be spent on private property.</li>
                  <li><strong>Funding Vehicle:</strong> 100% reliant on Minnesota State Capital Bonding and Federal IIJA grants.</li>
                  <li><strong>Contractor Model:</strong> City-contracted neighborhood-by-neighborhood replacements at zero out-of-pocket cost to qualifying homeowners.</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
                <div className="flex items-center gap-2 text-teal-800 font-bold">
                  <Building size={18} />
                  <h3 className="text-sm uppercase tracking-wide font-mono">St. Paul Legal Framework</h3>
                </div>
                <ul className="space-y-2 text-xs text-stone-700 list-disc list-inside">
                  <li><strong>Total Lead Lines:</strong> Approximately 17,000 active lines remaining.</li>
                  <li><strong>Ownership:</strong> 50% public (street to curb stop) / 50% private (curb stop to meter).</li>
                  <li><strong>Financing Mechanism:</strong> Water utility rate base funds the public half; state/federal grants cover private side.</li>
                  <li><strong>Progress:</strong> Over 4,500 lead lines replaced since 2022, primarily in historic neighborhoods such as Frogtown.</li>
                  <li><strong>Utility Authority:</strong> Saint Paul Regional Water Services (SPRWS).</li>
                </ul>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* MINNEAPOLIS HIGH-LEVEL METRICS & FORENSIC GAP BALANCE SHEET */}
            {/* ========================================================================= */}
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-6 text-white">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <span className="text-[10px] font-mono text-sky-400 uppercase font-bold tracking-widest bg-sky-950 px-2.5 py-1 rounded border border-sky-800">
                    MUNICIPAL AUDIT & FORENSIC ACCOUNTING
                  </span>
                  <h3 className="text-xl font-serif font-bold text-white mt-1.5 flex items-center gap-2">
                    <Scale size={20} className="text-sky-400" />
                    Minneapolis High-Level Metrics: Inventory, Anticipated Costs & Multi-Tier Gaps
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-amber-400 block font-semibold">
                    Statutory Eradication Target: 2033 (Minn. Stat. § 144.3845)
                  </span>
                  <span className="text-[11px] font-mono text-red-400 block font-bold">
                    Projected at Current Pace: 2061 (28-Year Shortfall)
                  </span>
                </div>
              </div>

              {/* 4 High-Impact Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Lead Pipe Inventory</span>
                    <Layers size={14} className="text-sky-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-white">34,600</div>
                  <p className="text-[11px] text-stone-400">
                    <span className="text-stone-300 font-semibold">37,000</span> total lines &bull; <span className="text-emerald-400 font-bold">2,400 (6.5%)</span> replaced to date
                  </p>
                  <div className="text-[10px] text-amber-400/90 font-mono pt-1 border-t border-stone-800/80">
                    100% Private Ownership by Charter
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Total Anticipated Cost</span>
                    <DollarSign size={14} className="text-emerald-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-white">$259.0M</div>
                  <p className="text-[11px] text-stone-400">
                    Avg <span className="text-stone-200 font-semibold">$7,000 / line</span> &bull; <span className="text-emerald-400 font-bold">$69.0M</span> secured (26.6%)
                  </p>
                  <div className="text-[10px] text-sky-400/90 font-mono pt-1 border-t border-stone-800/80">
                    Includes Trenchless Pull & Meter Fitting
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-red-400 uppercase font-bold">Net Funding Shortfall</span>
                    <AlertTriangle size={14} className="text-red-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-red-400">$190.0M</div>
                  <p className="text-[11px] text-stone-400">
                    <span className="text-red-300 font-bold">73.4% Unfunded Gap</span> &bull; 2027 Federal Grant Sunset
                  </p>
                  <div className="text-[10px] text-red-400/90 font-mono pt-1 border-t border-stone-800/80">
                    $0 Utility Rate Revenue Permitted
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-stone-400 uppercase font-bold">Replacement Velocity</span>
                    <Clock size={14} className="text-amber-400" />
                  </div>
                  <div className="text-2xl font-mono font-bold text-amber-400">1,000 / yr</div>
                  <p className="text-[11px] text-stone-400">
                    Needed for 2033: <span className="text-emerald-400 font-bold">3,844 / yr</span> (3.8x speed)
                  </p>
                  <div className="text-[10px] text-stone-400 font-mono pt-1 border-t border-stone-800/80">
                    Projected Zero-Lead: <strong>Year 2061</strong>
                  </div>
                </div>
              </div>

              {/* Forensic Balance Sheet Table for Minneapolis */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase font-bold text-sky-300 tracking-wider">
                  Minneapolis Lead Service Line Replacement Financial Balance Sheet (Audit Baseline)
                </h4>
                <div className="overflow-x-auto rounded-xl border border-stone-800 bg-stone-950">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-stone-900/90 text-stone-400 font-mono uppercase text-[10px] border-b border-stone-800">
                      <tr>
                        <th className="p-3 font-bold">Metric / Financial Parameter</th>
                        <th className="p-3 font-bold">Audit Quantity / Capital Sum</th>
                        <th className="p-3 font-bold">% of Project</th>
                        <th className="p-3 font-bold">Funding Tier Status & Statutory Constraint</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-850 text-stone-300 font-sans">
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-white">Total Historic Lead Service Lines</td>
                        <td className="p-3 font-mono font-bold text-sky-300">37,000 lines</td>
                        <td className="p-3 font-mono">100.0%</td>
                        <td className="p-3 text-stone-400">Mandated lead pipe installation in city building code until 1932</td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-emerald-400">Replaced to Date (2022–2026)</td>
                        <td className="p-3 font-mono font-bold text-emerald-400">2,400 lines</td>
                        <td className="p-3 font-mono text-emerald-400">6.5%</td>
                        <td className="p-3 text-stone-400">Completed under pilot phases in Hawthorne, Near North, and Phillips</td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-amber-300">Remaining Lines to be Replaced</td>
                        <td className="p-3 font-mono font-bold text-amber-300">34,600 lines</td>
                        <td className="p-3 font-mono text-amber-300">93.5%</td>
                        <td className="p-3 text-stone-400">Active public health risk across 40+ residential neighborhoods</td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-white">Average Unit Replacement Cost</td>
                        <td className="p-3 font-mono font-bold text-white">$7,000 / line</td>
                        <td className="p-3 font-mono">&mdash;</td>
                        <td className="p-3 text-stone-400">Includes directional boring, Type K copper, foundation sleeve & water meter</td>
                      </tr>
                      <tr className="hover:bg-stone-900/50 bg-stone-900/40">
                        <td className="p-3 font-bold text-white">Total Gross Anticipated Cost</td>
                        <td className="p-3 font-mono font-bold text-white text-sm">$259,000,000</td>
                        <td className="p-3 font-mono font-bold">100.0%</td>
                        <td className="p-3 text-stone-300 font-medium">Estimated complete capital requirement for municipal zero-lead status</td>
                      </tr>

                      {/* 5 Funding Tiers */}
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-stone-400 pl-6 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          Tier 1: Utility Rate-Base Capital
                        </td>
                        <td className="p-3 font-mono font-bold text-red-400">$0</td>
                        <td className="p-3 font-mono text-red-400">0.0%</td>
                        <td className="p-3 text-red-400/90 font-medium">
                          <strong>PROHIBITED</strong> &bull; City Charter & MN Law bar spending ratepayer revenue on private pipes
                        </td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-stone-400 pl-6 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Tier 2: Municipal General Fund / ARPA
                        </td>
                        <td className="p-3 font-mono font-bold text-emerald-400">$14,000,000</td>
                        <td className="p-3 font-mono text-emerald-400">5.4%</td>
                        <td className="p-3 text-stone-400">City Council ARPA allocations & local health equity appropriations</td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-stone-400 pl-6 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                          Tier 3: Regional (Hennepin Co. / Met Council)
                        </td>
                        <td className="p-3 font-mono font-bold text-emerald-400">$5,000,000</td>
                        <td className="p-3 font-mono text-emerald-400">1.9%</td>
                        <td className="p-3 text-stone-400">Targeted environmental health grants for licensed daycare providers</td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-stone-400 pl-6 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          Tier 4: Minnesota State Capital Bonding
                        </td>
                        <td className="p-3 font-mono font-bold text-amber-400">$15,000,000</td>
                        <td className="p-3 font-mono text-amber-400">5.8%</td>
                        <td className="p-3 text-amber-300">
                          $15M allocated in 2024–2026 bonding (vs. $180M requested for Minneapolis)
                        </td>
                      </tr>
                      <tr className="hover:bg-stone-900/50">
                        <td className="p-3 font-semibold text-stone-400 pl-6 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          Tier 5: Federal IIJA / EPA DWSRF Grants
                        </td>
                        <td className="p-3 font-mono font-bold text-amber-400">$35,000,000</td>
                        <td className="p-3 font-mono text-amber-400">13.5%</td>
                        <td className="p-3 text-amber-300">
                          Bipartisan Infrastructure Law grant allocation &bull; <strong>Sunsets end of calendar 2027</strong>
                        </td>
                      </tr>

                      {/* Totals & Shortfall */}
                      <tr className="bg-emerald-950/40 font-semibold">
                        <td className="p-3 text-emerald-300">Total Secured Funding</td>
                        <td className="p-3 font-mono font-bold text-emerald-300">$69,000,000</td>
                        <td className="p-3 font-mono text-emerald-300">26.6%</td>
                        <td className="p-3 text-emerald-300">Total committed local, regional, state & federal capital</td>
                      </tr>
                      <tr className="bg-red-950/60 font-bold border-t-2 border-red-800">
                        <td className="p-3 text-red-300 flex items-center gap-2">
                          <AlertTriangle size={15} className="text-red-400" />
                          NET FINANCIAL SHORTFALL (UNFUNDED GAP)
                        </td>
                        <td className="p-3 font-mono text-red-300 text-sm">$190,000,000</td>
                        <td className="p-3 font-mono text-red-300 text-sm">73.4%</td>
                        <td className="p-3 text-red-200">
                          Required state & federal appropriations needed to achieve zero-lead status
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBTAB 3: TWIN CITIES VS US CITIES COMPARISON */}
        {/* ========================================================================= */}
        {activeSubTab === 'comparison' && (
          <div className="space-y-8 animate-fade-in">
            {/* Header */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono text-sky-800 uppercase font-bold tracking-widest bg-sky-100 px-2.5 py-1 rounded border border-sky-200">
                    NATIONAL COMPARATIVE BENCHMARKING
                  </span>
                  <h2 className="text-xl font-serif font-bold text-stone-950 mt-1">
                    Multi-Community Lead Service Line Inventory & Multi-Tier Gap Audit
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-stone-100 text-stone-700 rounded border border-stone-300 font-semibold">
                    8 Metros Standardized
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 bg-red-50 text-red-800 rounded border border-red-200 font-semibold">
                    $6.2B+ Aggregated Need
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-600 max-w-4xl leading-relaxed">
                Standardizing lead service line data across American communities reveals distinct <strong>Utility, Local, Regional, State, and Federal funding gaps</strong>. Minneapolis is constrained by a 100% private ownership structure that forbids water ratepayer revenue, whereas Saint Paul and Milwaukee utilize rate-base cost-sharing, and Chicago faces over 400,000 legacy pipes.
              </p>

              {/* Recharts Bar Chart */}
              <div className="h-80 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={municipalComparisons} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="city" tick={{ fontSize: 11, fill: '#4b5563' }} />
                    <YAxis tick={{ fontSize: 11, fill: '#4b5563' }} />
                    <Tooltip
                      formatter={(val: number) => [`${val.toLocaleString()} lines`, 'Remaining Inventory']}
                      contentStyle={{ backgroundColor: '#18181b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="leadLines" name="Total Remaining Lead Service Lines" radius={[6, 6, 0, 0]}>
                      {municipalComparisons.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Standardized Multi-Community Comparable Data Set Table */}
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div>
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <BarChart3 size={18} className="text-sky-700" />
                    Comparable Multi-Tier Funding Gap Data Sets (Utility, Local, Regional, State & Federal)
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Standardized data model tracking pipe inventories, replacement progress, 5 funding layers, net shortfalls, and statutory compliance timelines.
                  </p>
                </div>

                {/* Sort Field Controls */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-stone-500 font-medium">Sort By:</span>
                  <button
                    onClick={() => setBenchmarkSortField('remaining')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      benchmarkSortField === 'remaining'
                        ? 'bg-sky-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Remaining Pipes
                  </button>
                  <button
                    onClick={() => setBenchmarkSortField('totalCost')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      benchmarkSortField === 'totalCost'
                        ? 'bg-sky-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Total Cost
                  </button>
                  <button
                    onClick={() => setBenchmarkSortField('netShortfall')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      benchmarkSortField === 'netShortfall'
                        ? 'bg-red-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Net Shortfall ($)
                  </button>
                  <button
                    onClick={() => setBenchmarkSortField('pctShortfall')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      benchmarkSortField === 'pctShortfall'
                        ? 'bg-red-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Shortfall %
                  </button>
                  <button
                    onClick={() => setBenchmarkSortField('projectedYear')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                      benchmarkSortField === 'projectedYear'
                        ? 'bg-amber-900 text-white font-bold'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    Projected Year
                  </button>
                </div>
              </div>

              {/* Comprehensive Table */}
              <div className="overflow-x-auto rounded-xl border border-stone-200 bg-white">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 text-stone-700 font-mono uppercase text-[10px] border-b border-stone-200">
                    <tr>
                      <th className="p-3 font-bold sticky left-0 bg-stone-100 z-10">Community</th>
                      <th className="p-3 font-bold text-right">Total Historic</th>
                      <th className="p-3 font-bold text-right">Remaining to Replace</th>
                      <th className="p-3 font-bold text-right">Replaced to Date</th>
                      <th className="p-3 font-bold text-right">Avg Unit Cost</th>
                      <th className="p-3 font-bold text-right">Total Anticipated Cost</th>
                      <th className="p-3 font-bold text-right bg-blue-50/70 text-blue-900">Utility (Rate Base)</th>
                      <th className="p-3 font-bold text-right bg-emerald-50/70 text-emerald-900">Local / City</th>
                      <th className="p-3 font-bold text-right bg-teal-50/70 text-teal-900">Regional</th>
                      <th className="p-3 font-bold text-right bg-amber-50/70 text-amber-900">State Bonding</th>
                      <th className="p-3 font-bold text-right bg-sky-50/70 text-sky-900">Federal IIJA</th>
                      <th className="p-3 font-bold text-right">Total Secured</th>
                      <th className="p-3 font-bold text-right text-red-700">Net Shortfall</th>
                      <th className="p-3 font-bold text-center">Shortfall %</th>
                      <th className="p-3 font-bold text-right">Annual Velocity</th>
                      <th className="p-3 font-bold">Statutory Target</th>
                      <th className="p-3 font-bold">Projected Eradication</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 text-stone-700 font-sans">
                    {sortedBenchmarkData.map((record, idx) => (
                      <tr key={idx} className="hover:bg-stone-50 transition-colors">
                        <td className="p-3 font-bold text-stone-900 sticky left-0 bg-white group-hover:bg-stone-50 z-10 flex items-center gap-2 whitespace-nowrap">
                          <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: record.color }} />
                          <span>{record.city}, {record.state}</span>
                        </td>
                        <td className="p-3 font-mono text-right text-stone-500">{record.totalPipes.toLocaleString()}</td>
                        <td className="p-3 font-mono font-bold text-right text-stone-900">{record.remainingToReplace.toLocaleString()}</td>
                        <td className="p-3 font-mono text-right text-emerald-700">{record.replacedToDate.toLocaleString()}</td>
                        <td className="p-3 font-mono text-right text-stone-600">${record.avgUnitCost.toLocaleString()}</td>
                        <td className="p-3 font-mono font-bold text-right text-stone-950">${(record.totalAnticipatedCost / 1000000).toFixed(1)}M</td>
                        
                        {/* 5 Funding Tiers */}
                        <td className={`p-3 font-mono text-right ${record.utilityFunding === 0 ? 'text-stone-400 italic' : 'text-blue-800 font-semibold'}`}>
                          {record.utilityFunding === 0 ? '$0 (Barred)' : `$${(record.utilityFunding / 1000000).toFixed(1)}M`}
                        </td>
                        <td className="p-3 font-mono text-right text-emerald-800 font-semibold">
                          ${(record.localFunding / 1000000).toFixed(1)}M
                        </td>
                        <td className="p-3 font-mono text-right text-teal-800">
                          ${(record.regionalFunding / 1000000).toFixed(1)}M
                        </td>
                        <td className="p-3 font-mono text-right text-amber-800 font-semibold">
                          ${(record.stateFunding / 1000000).toFixed(1)}M
                        </td>
                        <td className="p-3 font-mono text-right text-sky-800 font-semibold">
                          ${(record.federalFunding / 1000000).toFixed(1)}M
                        </td>

                        {/* Secured & Shortfall */}
                        <td className="p-3 font-mono font-semibold text-right text-emerald-900">
                          ${(record.totalSecured / 1000000).toFixed(1)}M
                        </td>
                        <td className="p-3 font-mono font-bold text-right text-red-600">
                          ${(record.netShortfall / 1000000).toFixed(1)}M
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              record.pctShortfall > 70
                                ? 'bg-red-100 text-red-800'
                                : record.pctShortfall > 40
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {record.pctShortfall.toFixed(1)}%
                          </span>
                        </td>
                        <td className="p-3 font-mono text-right text-stone-700">{record.annualPace.toLocaleString()} / yr</td>
                        <td className="p-3 text-stone-600 text-[11px] whitespace-nowrap">{record.statutoryDeadline}</td>
                        <td className="p-3 font-bold text-stone-900 text-[11px] whitespace-nowrap">
                          <span className={record.yearsDelay > 10 ? 'text-red-700' : record.yearsDelay > 0 ? 'text-amber-700' : 'text-emerald-700'}>
                            {record.projectedCompletionYear} {record.yearsDelay > 0 ? `(+${record.yearsDelay}y delay)` : '(On Track)'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Benchmarking Key Insights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 space-y-1.5">
                  <span className="font-bold text-sky-900 font-mono uppercase text-[11px] block">
                    Utility Rate Base Gap
                  </span>
                  <p className="text-sky-800 leading-relaxed text-[11px]">
                    Cities with private-ownership charters (Minneapolis, Chicago, Buffalo) have a <strong>$0 utility contribution</strong>, creating extreme vulnerability to state legislative bonding and federal grant expirations.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-900 font-mono uppercase text-[11px] block">
                    2027 Federal Funding Cliff
                  </span>
                  <p className="text-amber-800 leading-relaxed text-[11px]">
                    Federal IIJA funds sunset at the close of 2027. Without reauthorization or increased state bonding allocations, annual replacement velocities in the Twin Cities will drop by over <strong>55%</strong>.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-900 font-mono uppercase text-[11px] block">
                    Model Comparison: St. Paul vs. Flint
                  </span>
                  <p className="text-emerald-800 leading-relaxed text-[11px]">
                    St. Paul's 50/50 public split enables steady SPRWS rate-base absorption, while Flint achieved zero lead via emergency court-enforced state/federal settlement funds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBTAB 3: 2027 FUNDING CLIFF SIMULATOR */}
        {/* ========================================================================= */}
        {activeSubTab === 'funding_simulator' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Interactive Control Panel */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-6">
                <div>
                  <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
                    <Sliders size={18} className="text-sky-700" />
                    Interactive Funding & Velocity Controls
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Simulate how state bonding bills and federal grant renewals dictate the year of zero lead service lines in the Twin Cities.
                  </p>
                </div>

                {/* Slider 1: State Bonding Bill Allocation */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <label className="text-stone-700">Minnesota State Bonding Allocation:</label>
                    <span className="font-mono text-sky-800 font-bold">${stateBondingAllocation}M</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="250"
                    step="5"
                    value={stateBondingAllocation}
                    onChange={(e) => setStateBondingAllocation(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-sky-700"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>$0M (Vetoed)</span>
                    <span className="text-amber-600 font-bold">$15M (2026 Actual)</span>
                    <span className="text-emerald-700 font-bold">$250M (Requested)</span>
                  </div>
                </div>

                {/* Dropdown: Federal Grant Status */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-stone-700 block">Federal IIJA Grant Status:</label>
                  <select
                    value={federalGrantRenewal}
                    onChange={(e) => setFederalGrantRenewal(e.target.value as any)}
                    className="w-full p-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs font-sans focus:outline-none focus:border-sky-700 cursor-pointer"
                  >
                    <option value="expires_2027">Expires End of 2027 (Status Quo Funding Cliff)</option>
                    <option value="extended_2032">Reauthorized Through 2032 ($35M/yr federal match)</option>
                    <option value="doubled">EPA Emergency Fast-Track ($75M/yr federal match)</option>
                  </select>
                </div>

                {/* Slider 3: Combined Replacement Pace */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold">
                    <label className="text-stone-700">Contractor Crew Installation Velocity:</label>
                    <span className="font-mono text-stone-900 font-bold">{replacementPacePerYear.toLocaleString()} lines/yr</span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="6000"
                    step="200"
                    value={replacementPacePerYear}
                    onChange={(e) => setReplacementPacePerYear(Number(e.target.value))}
                    className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-stone-800"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                    <span>1,000 / yr</span>
                    <span>3,200 / yr (Current)</span>
                    <span>6,000 / yr (Max Surge)</span>
                  </div>
                </div>

                {/* Simulation Summary Box */}
                <div className={`p-4 rounded-xl border ${
                  simulationProjection.isMissed2033Goal
                    ? 'bg-amber-50 border-amber-200 text-amber-900'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-900'
                } space-y-2`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider">Projected Zero-Lead Year:</span>
                    <span className="text-2xl font-bold font-mono">
                      {simulationProjection.projectedCompletionYear}
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    {simulationProjection.isMissed2033Goal ? (
                      <>
                        ⚠️ <strong>Misses Minnesota 2033 Goal by {simulationProjection.projectedCompletionYear - 2033} years.</strong> Funding shortfall forces Public Works to defer replacements across North and South Minneapolis.
                      </>
                    ) : (
                      <>
                        ✅ <strong>Achieves Minnesota 2033 Statutory Goal!</strong> Full state and federal appropriations allow simultaneous excavation with water main re-lining.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Projection Visualizer Chart */}
              <div className="lg:col-span-7 p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-stone-900">
                  Simulated Lead Service Line Depletion Trajectory (2026–2045+)
                </h3>
                <p className="text-xs text-stone-500">
                  Total remaining private & public lead lines in Minneapolis (37k) and St. Paul (17k) under current simulator parameters.
                </p>

                <div className="h-72 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={simulationProjection.trajectoryData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="mplsGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0284c7" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#0284c7" stopOpacity={0.1} />
                        </linearGradient>
                        <linearGradient id="stPaulGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0d9488" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#0d9488" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                      <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#4b5563' }} />
                      <YAxis tick={{ fontSize: 11, fill: '#4b5563' }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#18181b', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Area
                        type="monotone"
                        dataKey="mplsRemaining"
                        name="Minneapolis Remaining Lines"
                        stroke="#0284c7"
                        fillOpacity={1}
                        fill="url(#mplsGradient)"
                      />
                      <Area
                        type="monotone"
                        dataKey="stPaulRemaining"
                        name="St. Paul Remaining Lines"
                        stroke="#0d9488"
                        fillOpacity={1}
                        fill="url(#stPaulGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBTAB 4: GREEN ZONES & ENVIRONMENTAL JUSTICE */}
        {/* ========================================================================= */}
        {activeSubTab === 'green_zones' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h2 className="text-xl font-serif font-bold text-stone-950">
                    Environmental Justice Prioritization & The "Green Zone" Framework
                  </h2>
                  <p className="text-xs text-stone-600 max-w-3xl mt-1">
                    Minneapolis and St. Paul utilize targeted geographic vulnerability indices to direct initial free lead line replacements to neighborhoods bearing historic burdens of industrial pollution and redlining.
                  </p>
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full font-mono text-xs font-bold border border-emerald-300">
                  100% Daycares by End 2026
                </span>
              </div>

              {/* Cards for Green Zones */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                {neighborhoodData.map((n, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-4 hover:border-sky-600 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-[10px] font-mono text-sky-800 uppercase font-bold tracking-wide">
                          {n.zone}
                        </span>
                        <h4 className="text-sm font-bold text-stone-900 mt-0.5">{n.name}</h4>
                      </div>
                      <span className="px-2 py-0.5 bg-stone-200 text-stone-800 rounded text-[10px] font-mono font-bold">
                        EJ #{n.environmentalJusticeIndex}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between text-stone-600">
                        <span>Pre-1950 Housing Stock:</span>
                        <span className="font-mono font-bold text-stone-900">{n.pctPre1950Homes}%</span>
                      </div>
                      <div className="flex justify-between text-stone-600">
                        <span>Lead Service Line Density:</span>
                        <span className="font-mono font-bold text-stone-900">{n.leadLineDensity}%</span>
                      </div>
                      <div className="flex justify-between text-stone-600">
                        <span>Elevated Child BLL Rate:</span>
                        <span className="font-mono font-bold text-red-700">{n.childBllElevatedPct}%</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-stone-200 text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                      <span>{n.currentStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBTAB 5: EXPOSENOMICS & DISEASE PATHWAYS */}
        {/* ========================================================================= */}
        {activeSubTab === 'toxicology' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-6">
              <h2 className="text-xl font-serif font-bold text-stone-950">
                Toxicological Mechanisms: Chronic Water Lead Ingestion vs. Childhood Development
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-red-50/70 border border-red-200 space-y-3">
                  <h4 className="font-bold text-red-950 text-sm flex items-center gap-2">
                    <Activity size={16} className="text-red-700" />
                    Central Nervous System (CNS)
                  </h4>
                  <p className="text-xs text-red-900/90 leading-relaxed">
                    Lead ions (Pb²⁺) substitute for essential calcium (Ca²⁺) across the blood-brain barrier, triggering premature neuronal apoptosis, impairing synaptic pruning in the prefrontal cortex, and degrading executive function.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-3">
                  <h4 className="font-bold text-amber-950 text-sm flex items-center gap-2">
                    <Baby size={16} className="text-amber-700" />
                    Hearing & Auditory Processing
                  </h4>
                  <p className="text-xs text-amber-900/90 leading-relaxed">
                    Accumulation of lead in auditory nerve fibers and the cochlea causes sensorineural hearing loss, impaired phonological awareness, and permanent speech delay in infants drinking reconstituted powdered formula.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-sky-50/70 border border-sky-200 space-y-3">
                  <h4 className="font-bold text-sky-950 text-sm flex items-center gap-2">
                    <Droplets size={16} className="text-sky-700" />
                    Hematological & Renal Damage
                  </h4>
                  <p className="text-xs text-sky-900/90 leading-relaxed">
                    Lead inhibits delta-aminolevulinic acid dehydratase (ALAD) and ferrochelatase enzymes in heme biosynthesis, causing microcytic anemia, proximal renal tubule atrophy, and elevated adult cardiovascular hypertension.
                  </p>
                </div>
              </div>

              {/* Chemistry vs Infrastructure Note */}
              <div className="p-5 rounded-xl bg-stone-50 border border-stone-200 space-y-3">
                <h4 className="text-xs font-mono uppercase font-bold text-stone-900">
                  The Limitations of Chemical Passivation (Orthophosphate Chemistry)
                </h4>
                <p className="text-xs text-stone-700 leading-relaxed">
                  While water treatment facilities dose orthophosphate to form insoluble lead phosphate (hydroxypyromorphite) scales on the inner pipe lining, this passivation is inherently fragile. Mechanical disturbances from heavy construction, rapid flow reversals during fire hydrant flushes, and temperature fluctuations can dislodge macroscopic lead flakes, bypassing home aerators and causing acute exposure spikes that standard compliance grab-samples miss.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SUBTAB 6: FREE TEST KITS & RESIDENT ACTION GUIDE */}
        {/* ========================================================================= */}
        {activeSubTab === 'action_guide' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-6">
              <h2 className="text-xl font-serif font-bold text-stone-950">
                Twin Cities Resident Protection & Sovereign Action Guide
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1: Free Test Kits */}
                <div className="space-y-4 p-6 rounded-xl bg-sky-50 border border-sky-200">
                  <span className="text-[10px] font-mono font-bold uppercase text-sky-800 bg-sky-200 px-2 py-0.5 rounded">
                    STEP 1: ORDER FREE WATER TEST KIT
                  </span>
                  <h3 className="text-base font-bold text-sky-950">Minneapolis & St. Paul Free Lead Testing</h3>
                  <p className="text-xs text-sky-900 leading-relaxed">
                    Residents in both Minneapolis and St. Paul who have not yet had their service lines replaced can request free drinking water lead test kits directly from the municipal water utility.
                  </p>
                  <ul className="space-y-2 text-xs text-sky-900 list-disc list-inside">
                    <li>Minneapolis: Contact Minneapolis 311 or Public Works Water Treatment.</li>
                    <li>St. Paul: Request test bottle from Saint Paul Regional Water Services (SPRWS).</li>
                    <li>Test protocol: First-draw 1-liter bottle after 6 hours of stagnation.</li>
                  </ul>
                </div>

                {/* Step 2: Immediate Flush & Filtration */}
                <div className="space-y-4 p-6 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 bg-emerald-200 px-2 py-0.5 rounded">
                    STEP 2: CERTIFIED FILTRATION & FLUSHING
                  </span>
                  <h3 className="text-base font-bold text-emerald-950">NSF-53 & NSF-58 Filtration</h3>
                  <p className="text-xs text-emerald-900 leading-relaxed">
                    If your home is serviced by a lead pipe or contains pre-1986 lead solder:
                  </p>
                  <ul className="space-y-2 text-xs text-emerald-900 list-disc list-inside">
                    <li>Always use cold water for drinking, cooking, and baby formula.</li>
                    <li>Run tap for 3 to 5 minutes before using water if it sat overnight.</li>
                    <li>Deploy NSF/ANSI 53 certified point-of-use carbon block or NSF 58 Reverse Osmosis filtration.</li>
                  </ul>
                </div>
              </div>

              {/* Legislative Advocacy Call */}
              <div className="p-6 rounded-xl bg-stone-900 text-white space-y-3">
                <h4 className="text-sm font-bold text-amber-400">
                  Sovereign Legislative Call: Fund the Full $250M Minnesota Lead Eradication Bonding Package
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Water advocates emphasize that replacing 87,000 lead pipes across Minnesota cannot be resolved on a piecemeal $15M budget. Urge your Minnesota State Representative and Senator to support comprehensive infrastructure bonding to protect the neurological development of Minnesota’s children.
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* 4. HIGH-RESOLUTION ARTWORK MODAL */}
      {/* ========================================================================= */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
          <div className="relative max-w-6xl w-full bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-sky-900 text-sky-300 px-2 py-0.5 rounded font-bold uppercase">
                  PLATE #21
                </span>
                <h3 className="text-sm font-bold truncate">
                  Twin Cities Lead Service Line Crisis, 2027 Funding Cliff & Green Zone Infrastructure
                </h3>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={twinCitiesImg}
                alt="Twin Cities Lead Pipe Infrastructure Full Plate"
                className="max-h-[70vh] w-auto object-contain rounded-lg border border-stone-800"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-900/90 text-xs text-stone-400 flex flex-wrap items-center justify-between gap-4">
              <span className="font-mono text-[10px] truncate">
                Vault Hash: <span className="text-sky-400">{PROVENANCE_HASH}</span>
              </span>
              <a
                href={twinCitiesImg}
                download="twin_cities_lead_service_lines_infographic.jpg"
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white rounded text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download size={13} />
                <span>Download High-Res Infographic</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
