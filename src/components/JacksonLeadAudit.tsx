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
  Users,
  Gavel,
  BookOpen,
  HelpCircle,
  Landmark,
  Layers,
  ArrowRight,
  RefreshCw,
  Copy,
  Check,
  Crosshair,
  BadgeAlert
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
import jacksonWaterAuditImg from '../assets/images/jackson_water_audit_1788985202588.jpg';

interface JacksonProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const JacksonLeadAudit: React.FC<JacksonProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'legal_analysis' | 'circuit_split' | 'citizen_recourse' | 'corruption_history' | 'water_metrics' | 'interactive_remedy'
  >('overview');

  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Interactive Recourse Simulator State
  const [claimType, setClaimType] = useState<'tort_negligence' | 'mtca_state' | 'contractor_suit' | 'sdwa_citizen' | 'scotus_cert'>('scotus_cert');
  const [damagesClaimMillions, setDamagesClaimMillions] = useState<number>(25);
  const [affectedChildrenCount, setAffectedChildrenCount] = useState<number>(120);

  const isLight = siteTheme === 'light';
  const PROVENANCE_HASH = '0xJACKSON_WATER_LEAD_AUDIT_FIFTH_CIRCUIT_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Water Quality & Lead Concentration Timeline (2010 - 2026)
  const leadTimelineData = [
    { year: '2010', maxLeadPpb: 12, avgLeadPpb: 4.2, epaActionLevel: 15, whoSafeLevel: 0, note: 'MSDH Initial Warning' },
    { year: '2012', maxLeadPpb: 22, avgLeadPpb: 7.8, epaActionLevel: 15, whoSafeLevel: 0, note: 'Siemens $90M Contract Signed' },
    { year: '2015', maxLeadPpb: 48, avgLeadPpb: 14.5, epaActionLevel: 15, whoSafeLevel: 0, note: 'Corrosion Control Failure' },
    { year: '2016', maxLeadPpb: 86, avgLeadPpb: 21.2, epaActionLevel: 15, whoSafeLevel: 0, note: 'City-wide Lead Advisory' },
    { year: '2018', maxLeadPpb: 64, avgLeadPpb: 18.0, epaActionLevel: 15, whoSafeLevel: 0, note: 'Meter Billing Meltdown' },
    { year: '2020', maxLeadPpb: 92, avgLeadPpb: 24.6, epaActionLevel: 15, whoSafeLevel: 0, note: 'EPA Emergency Order' },
    { year: '2021', maxLeadPpb: 110, avgLeadPpb: 28.4, epaActionLevel: 15, whoSafeLevel: 0, note: 'Winter Storm Freeze & Ruptures' },
    { year: '2022', maxLeadPpb: 145, avgLeadPpb: 36.1, epaActionLevel: 15, whoSafeLevel: 0, note: 'Total System Failure / 2-Mo Boil Notice' },
    { year: '2024', maxLeadPpb: 38, avgLeadPpb: 11.2, epaActionLevel: 15, whoSafeLevel: 0, note: 'Federal Receiver (JXN Water)' },
    { year: '2026', maxLeadPpb: 24, avgLeadPpb: 8.5, epaActionLevel: 15, whoSafeLevel: 0, note: '5th Circuit En Banc Ruling' }
  ];

  // Circuit Split Comparison: 5th Circuit (Jackson) vs 6th Circuit (Flint)
  const circuitSplitComparison = [
    {
      dimension: 'Constitutional Claim',
      flintSixthCircuit: '14th Amendment Substantive Due Process / Bodily Integrity upheld (Guertin v. Michigan, 2019)',
      jacksonFifthCircuit: '14th Amendment Substantive Due Process claims dismissed 10-5 en banc (Sterling v. Jackson, 2026)',
      implication: 'Direct Circuit Split between 5th and 6th Circuits ripe for Supreme Court resolution'
    },
    {
      dimension: 'Right to Clean Water',
      flintSixthCircuit: 'Government cannot knowingly introduce toxic lead water that physically poisons residents',
      jacksonFifthCircuit: 'Declared: "It is undisputed that the Constitution does not guarantee clean water"',
      implication: 'Narrowed constitutional protection against passive or municipal regulatory incompetence'
    },
    {
      dimension: 'Bodily Integrity Scope',
      flintSixthCircuit: 'Broadened bodily integrity to protect against involuntary ingestion of heavy neurotoxins',
      jacksonFifthCircuit: 'Restricted bodily integrity to physical detention/restraint, medical forced surgery, or police brutality',
      implication: 'Bars § 1983 claims for environmental contamination unless direct forced physical invasion'
    },
    {
      dimension: 'Safe Drinking Water Act (SDWA)',
      flintSixthCircuit: 'SDWA does not preclude § 1983 constitutional claims when official conduct shocks the conscience',
      jacksonFifthCircuit: 'SDWA statutory protections do not create a fundamental constitutional right; preemption arguments reinforced',
      implication: 'Channels citizens strictly toward statutory citizen suits or state tort law'
    },
    {
      dimension: 'Qualified Immunity',
      flintSixthCircuit: 'Denied qualified immunity to key state officials who concealed water test results',
      jacksonFifthCircuit: 'Affirmed dismissal before reached; officials shielded from constitutional damage liability',
      implication: 'Shields municipal executives from monetary damages for systemic utility neglect'
    }
  ];

  // Corruption & Infrastructure Meltdown Ledger
  const corruptionAuditLedger = [
    {
      event: 'Siemens Automated Meter Fiasco',
      year: '2012–2020',
      financialImpact: '$90M contract; $100M+ lost revenue',
      consequence: 'Faulty electronic water meters failed to record flow. Over 50% of water went unbilled for years. Jackson utility lost operating capital, starving water treatment plants of basic coagulants and corrosion control chemicals.',
      verdict: 'Settled in 2020 for $89.8M; funds swallowed by emergency triage, legal fees, and patchwork repairs.'
    },
    {
      event: 'Decades of White Flight & Tax Base Evisceration',
      year: '1970–2020',
      financialImpact: '>80% commercial tax base erosion',
      consequence: 'Jackson shifted from majority white to >82% Black. Suburban surrounding counties (Rankin, Madison) drained wealth while refusing regional infrastructure cost-sharing. City inherited massive, decaying 1920s grid with no funding.',
      verdict: 'Structural environmental racism: low-income Black residents left paying highest water rates for unusable brown water.'
    },
    {
      event: 'State Legislative Disinvestment & Hostility',
      year: '2015–2023',
      financialImpact: '$1B+ deferred capital maintenance',
      consequence: 'Mississippi Legislature repeatedly blocked Jackson from local option sales tax bonds and state revolving water funds. In 2023, state lawmakers enacted HB 1020 and SB 2343 attempting to seize city utilities and court systems without local consent.',
      verdict: 'Judicial intervention and federal civil rights challenges blocked state takeover attempts.'
    },
    {
      event: 'O.B. Curtis & J.H. Fewell Chemical Failures',
      year: '2016–2022',
      financialImpact: '160,000 residents without potable water',
      consequence: 'Severe understaffing, broken membrane filters, and fluctuating raw water pH from the Pearl River led to cessation of ortho-phosphate corrosion inhibitor dosing. Protective mineral crust dissolved, leaching massive lead from pipes.',
      verdict: 'Triggered 2022 DOJ/EPA Stipulated Order and appointment of third-party manager Ted Henifin (JXN Water).'
    }
  ];

  // Citizen Recourse Options Breakdown
  const citizenRecourseMatrix = [
    {
      route: 'State-Law Tort Claims (Negligence / Nuisance)',
      court: 'Mississippi State Circuit Courts',
      standing: 'Individual property owners, poisoned tenants, injured children',
      hurdles: 'Mississippi Tort Claims Act (MTCA) discretionary function immunity; $500,000 damages cap per occurrence.',
      viability: 'Moderate to High',
      status: 'Explicitly preserved by 5th Circuit en banc opinion as the proper judicial forum.'
    },
    {
      route: 'Safe Drinking Water Act (SDWA) Citizen Suits (42 U.S.C. § 300j-8)',
      court: 'U.S. District Court for the Southern District of Mississippi',
      standing: 'Any person affected by utility non-compliance',
      hurdles: '60-day notice requirement; cannot recover individual money damages, limited to injunctive relief and attorney fees.',
      viability: 'High for injunctive compliance',
      status: 'Currently monitored alongside DOJ/EPA consent decree and interim federal manager JXN Water.'
    },
    {
      route: 'Engineering Contractor & Supplier Liability',
      court: 'Federal & State Courts',
      standing: 'Ratepayers and poisoned residents vs. private consulting engineers',
      hurdles: 'Contract privity, proving proximate cause vs. municipal operation errors.',
      viability: 'High (Precedent from Flint engineering settlements exceeding $600M)',
      status: 'Active litigation against private consultants who advised on treatment plant operations.'
    },
    {
      route: 'Petition for Writ of Certiorari (U.S. Supreme Court)',
      court: 'Supreme Court of the United States',
      standing: 'Priscilla Sterling and class plaintiffs',
      hurdles: 'Discretionary cert review; conservative SCOTUS reluctance to expand substantive due process.',
      viability: 'Uncertain but prime vehicle for resolving direct 5th vs 6th Circuit split.',
      status: 'Plaintiffs preparing cert petition highlighting direct conflict with Flint (Guertin).'
    },
    {
      route: 'Federal Oversight & JXN Water Capital Restitution',
      court: 'Federal Receivership (Judge Henry Wingate)',
      standing: 'All Jackson & Byram water utility customers',
      hurdles: 'Federal funding execution pace; overcoming decades of deferred maintenance across 1,000+ miles of pipe.',
      viability: 'Active & Funded ($600M+ federal appropriation)',
      status: 'Replacing thousands of lead service lines and rebuilding O.B. Curtis treatment plant.'
    }
  ];

  // Recourse Simulator Calculation
  const simulationResults = useMemo(() => {
    let projectedSuccessRate = 0;
    let avgRecoveryPerChild = 0;
    let keyBarrier = '';
    let legalStrategy = '';

    if (claimType === 'scotus_cert') {
      projectedSuccessRate = 22; // Supreme Court grants cert in <2% of cases, but circuit split increases odds
      avgRecoveryPerChild = 0; // Cert itself does not award damages; remands for trial
      keyBarrier = 'Supreme Court conservative supermajority reluctance to recognize unenumerated substantive due process rights.';
      legalStrategy = 'Highlight catastrophic circuit split with 6th Circuit Flint precedent (Guertin v. Michigan) and urge national uniform standard on state-created environmental neurotoxicity.';
    } else if (claimType === 'mtca_state') {
      projectedSuccessRate = 48;
      avgRecoveryPerChild = Math.min(500000 / affectedChildrenCount, 15000); // MTCA $500k cap
      keyBarrier = 'Mississippi Tort Claims Act § 11-46-9(1)(d) discretionary function immunity and rigid $500,000 total cap per occurrence.';
      legalStrategy = 'Argue non-discretionary ministerial duties were violated (e.g. specific statutory EPA corrosion control dosing rules are not policy choices).';
    } else if (claimType === 'contractor_suit') {
      projectedSuccessRate = 72;
      avgRecoveryPerChild = Math.round((damagesClaimMillions * 1000000 * 0.45) / affectedChildrenCount);
      keyBarrier = 'Private engineering firms invoking shared municipal sovereign defense and complex apportionment of fault with city.';
      legalStrategy = 'Leverage Flint Veolia/LAN engineering multi-hundred million dollar settlements; establish professional malpractice in water chemistry advice.';
    } else if (claimType === 'sdwa_citizen') {
      projectedSuccessRate = 88;
      avgRecoveryPerChild = 0; // Injunctive only
      keyBarrier = 'No personal injury monetary damages available under SDWA § 300j-8; purely forward-looking injunctive relief.';
      legalStrategy = 'Force court-mandated accelerated lead service line replacement timelines, universal residential filter distribution, and real-time lead testing.';
    } else {
      // tort_negligence
      projectedSuccessRate = 58;
      avgRecoveryPerChild = Math.round((damagesClaimMillions * 1000000 * 0.35) / affectedChildrenCount);
      keyBarrier = 'Proving specific causation for cognitive deficits vs. confounding socioeconomic factors; municipal insolvency.';
      legalStrategy = 'Utilize biomarker testing (bone lead XRF / blood records) and Roulet\'s Law exposenomics economic damage calculations.';
    }

    return {
      projectedSuccessRate,
      avgRecoveryPerChild,
      keyBarrier,
      legalStrategy
    };
  }, [claimType, damagesClaimMillions, affectedChildrenCount]);

  return (
    <div className={`w-full min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} font-sans pb-24`}>
      {/* Top Breadcrumb & Metadata Banner */}
      <div className={`w-full border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/80 border-stone-800'} sticky top-0 z-30 backdrop-blur-md px-4 sm:px-8 py-3.5`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs font-mono">
            <span className="px-2 py-0.5 bg-red-600 text-white rounded font-bold uppercase tracking-wider">Plate #43</span>
            <span className="text-stone-400">/</span>
            <span className="font-semibold text-red-700 dark:text-red-400">Jackson, Mississippi Water Audit</span>
            <span className="text-stone-400">/</span>
            <span className="text-stone-500 hidden sm:inline">5th Circuit En Banc Ruling (10-5)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyHash}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border transition-all cursor-pointer ${
                copiedHash
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              {copiedHash ? <Check size={12} /> : <Copy size={12} />}
              <span>{copiedHash ? 'Hash Copied' : 'Vault Hash'}</span>
            </button>

            <button
              onClick={() => setIsArtworkModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1 rounded text-xs font-mono bg-gradient-to-r from-red-600 to-amber-600 text-white hover:from-red-500 hover:to-amber-500 font-bold shadow-xs cursor-pointer"
            >
              <Maximize2 size={12} />
              <span>Inspect Plate #43</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* Hero Section */}
        <div className={`relative overflow-hidden rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800 shadow-xl'}`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 relative z-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 bg-red-100 dark:bg-red-950/80 text-red-700 dark:text-red-300 rounded-md font-bold border border-red-300 dark:border-red-800">
                  LEGAL FORENSICS & CONSTITUTIONAL AUDIT
                </span>
                <span className="px-2.5 py-1 bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 rounded-md font-bold border border-amber-300 dark:border-amber-800">
                  U.S. 5TH CIRCUIT EN BANC (10-5)
                </span>
                <span className="text-stone-500 dark:text-stone-400">Sterling v. City of Jackson, No. 24-60126</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Jackson Water Ruling: <span className="text-red-600 dark:text-red-400">Is Clean Water a Constitutional Right?</span>
              </h1>

              <p className="text-sm sm:text-base leading-relaxed text-stone-600 dark:text-stone-300">
                In a monumental 10-5 en banc decision, the full U.S. Fifth Circuit Court of Appeals held that
                <span className="font-semibold text-stone-900 dark:text-stone-100"> "the Constitution does not guarantee clean water,"</span> dismissing 
                residents' Section 1983 substantive due process and bodily integrity claims against the City of Jackson over toxic lead poisoning. 
                Creating a sharp circuit split with the Sixth Circuit's landmark Flint precedent (<span className="italic">Guertin v. Michigan</span>), 
                the ruling establishes strict constitutional boundaries, redirects victims toward state tort and contractor liability, and lays bare five 
                decades of systemic corruption, the $90M Siemens billing disaster, and racialized infrastructure starvation in Mississippi's capital.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                <span>Investigative Lead: Norm Roulet (ICEarth)</span>
                <span>•</span>
                <span>Case Decided: September 2026</span>
                <span>•</span>
                <a
                  href="https://www.yahoo.com/news/us/articles/jackson-water-ruling-raises-surprising-165812234.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 font-bold"
                >
                  <span>Mainstream Dossier (Yahoo/MS Today)</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Hero Infographic Thumbnail */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div
                onClick={() => setIsArtworkModalOpen(true)}
                className="group relative rounded-xl overflow-hidden border-2 border-red-500/50 shadow-2xl cursor-pointer hover:scale-[1.02] transition-transform duration-300 max-w-sm w-full aspect-video bg-stone-950"
              >
                <img
                  src={jacksonWaterAuditImg}
                  alt="Jackson MS Lead Water Ruling Plate #43"
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                  <div className="flex items-center justify-between w-full text-white text-xs font-mono">
                    <span className="font-bold flex items-center gap-1.5">
                      <Sparkles size={13} className="text-amber-400" />
                      Plate #43 Artwork
                    </span>
                    <span className="text-[10px] px-2 py-0.5 bg-black/60 rounded border border-white/20">Click to Expand</span>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-[11px] font-mono text-stone-500 text-center">
                Cryptographic Archive Hash: <span className="text-stone-600 dark:text-stone-400">0xJACKSON_WATER...</span>
              </p>
            </div>
          </div>

          {/* Core Metrics Ribbon */}
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t divide-x divide-y lg:divide-y-0 ${isLight ? 'bg-stone-50/80 border-stone-200 divide-stone-200' : 'bg-stone-900/50 border-stone-800 divide-stone-800'}`}>
            <div className="p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <Gavel size={14} className="text-red-500" />
                <span>En Banc Vote</span>
              </div>
              <div className="text-xl font-black text-red-600 dark:text-red-400">10 — 5</div>
              <div className="text-[11px] text-stone-500 font-mono">Dismissal Affirmed</div>
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <Scale size={14} className="text-amber-500" />
                <span>Constitutional Right</span>
              </div>
              <div className="text-xl font-black text-amber-600 dark:text-amber-400">NONE</div>
              <div className="text-[11px] text-stone-500 font-mono">"No Right to Clean Water"</div>
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <Users size={14} className="text-blue-500" />
                <span>Affected Residents</span>
              </div>
              <div className="text-xl font-black">160,000+</div>
              <div className="text-[11px] text-stone-500 font-mono">82% Black Population</div>
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <DollarSign size={14} className="text-rose-500" />
                <span>Siemens Fiasco</span>
              </div>
              <div className="text-xl font-black text-rose-600">$90 Million</div>
              <div className="text-[11px] text-stone-500 font-mono">50% Water Unbilled</div>
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <AlertTriangle size={14} className="text-amber-500" />
                <span>Boil-Water Crises</span>
              </div>
              <div className="text-xl font-black">2+ Months</div>
              <div className="text-[11px] text-stone-500 font-mono">Summer 2022 Meltdown</div>
            </div>

            <div className="p-4 space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-stone-500">
                <Landmark size={14} className="text-emerald-500" />
                <span>Circuit Split</span>
              </div>
              <div className="text-xl font-black text-emerald-600 dark:text-emerald-400">5th vs 6th</div>
              <div className="text-[11px] text-stone-500 font-mono">Prime SCOTUS Cert</div>
            </div>
          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          {[
            { id: 'overview', label: 'Executive Overview', icon: BookOpen },
            { id: 'legal_analysis', label: 'Legal Responsibility & Boundaries', icon: Scale },
            { id: 'circuit_split', label: 'Flint vs. Jackson Circuit Split', icon: Gavel },
            { id: 'citizen_recourse', label: 'Citizen Recourse & Remedies', icon: ShieldCheck },
            { id: 'corruption_history', label: 'History of Corruption & Disinvestment', icon: Landmark },
            { id: 'water_metrics', label: 'Lead Levels & Water Timeline', icon: Activity },
            { id: 'interactive_remedy', label: 'Litigation Remedy Simulator', icon: Sliders }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md font-bold'
                    : isLight
                    ? 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* SUBTAB 1: EXECUTIVE OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950 flex items-center justify-center text-red-600">
                  <Gavel size={20} />
                </div>
                <h3 className="text-lg font-bold">The Constitutional Ruling</h3>
                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                  Judge Kurt Engelhardt writing for the 10-judge majority affirmed that Section 1983 cannot be used to enforce a right to non-toxic municipal tap water. 
                  The court held that substantive due process bodily integrity does not reach passive ingestion of municipal water supplies, rejecting analogy to bodily invasion cases.
                </p>
                <div className="pt-2 text-xs font-mono text-red-600 dark:text-red-400 font-semibold">
                  Key quote: "It is undisputed that the Constitution does not guarantee clean water."
                </div>
              </div>

              <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950 flex items-center justify-center text-amber-600">
                  <BadgeAlert size={20} />
                </div>
                <h3 className="text-lg font-bold">The Five-Judge Dissent</h3>
                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                  Judge Catharina Haynes, joined by four judges, penned a blistering dissent arguing that Jackson’s facts "mirror in various ways" the Flint water catastrophe. 
                  The dissent emphasized that city officials knew lead was leaching at alarming rates since 2010–2013 yet misled residents and failed to take basic corrosion control actions.
                </p>
                <div className="pt-2 text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                  Conflict: Creates direct split with Sixth Circuit's Guertin precedent.
                </div>
              </div>

              <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950 flex items-center justify-center text-blue-600">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-lg font-bold">Preserved Recourse</h3>
                <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                  Importantly, the Fifth Circuit did not grant public water utilities impunity. The court explicitly noted that residents remain free to pursue state-law tort claims 
                  (negligence, nuisance), contractor malpractice lawsuits against private engineering firms, and Safe Drinking Water Act statutory enforcement.
                </p>
                <div className="pt-2 text-xs font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  Federal Oversight: System remains under JXN Water & EPA management.
                </div>
              </div>
            </div>

            {/* Analytical Comparison Chart */}
            <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-base font-bold">Jackson Lead Concentrations vs. Federal Action Levels (2010–2026)</h3>
                  <p className="text-xs text-stone-500">Historical sampling showing repeated breaches of the 15 ppb EPA action level</p>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="flex items-center gap-1 text-red-500">
                    <span className="w-3 h-3 bg-red-600 rounded-xs inline-block" /> Max Lead (ppb)
                  </span>
                  <span className="flex items-center gap-1 text-amber-500">
                    <span className="w-3 h-3 bg-amber-500 rounded-xs inline-block" /> Avg Lead (ppb)
                  </span>
                  <span className="flex items-center gap-1 text-stone-400">
                    <span className="w-3 h-0.5 bg-stone-400 inline-block" /> EPA Action Threshold (15 ppb)
                  </span>
                </div>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={leadTimelineData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#27272a'} />
                    <XAxis dataKey="year" stroke={isLight ? '#71717a' : '#a1a1aa'} textAnchor="middle" tick={{ fontSize: 11 }} />
                    <YAxis stroke={isLight ? '#71717a' : '#a1a1aa'} tick={{ fontSize: 11 }} domain={[0, 160]} unit=" ppb" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isLight ? '#ffffff' : '#18181b',
                        borderColor: isLight ? '#e5e7eb' : '#27272a',
                        borderRadius: '0.75rem',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="maxLeadPpb" name="Peak Tap Lead (ppb)" fill="#dc2626" radius={[4, 4, 0, 0]} />
                    <Line type="monotone" dataKey="avgLeadPpb" name="Average Tap Lead (ppb)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} />
                    <Line type="step" dataKey="epaActionLevel" name="EPA Action Level (15 ppb)" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950/40 rounded-xl text-xs text-red-800 dark:text-red-300 font-mono">
                ⚠️ Roulet's Law Note: According to the American Academy of Pediatrics (AAP) and WHO, there is NO safe blood lead level in children. Even at 5 ppb, irreversible IQ attrition, executive dysfunction, and neurobehavioral changes occur.
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: LEGAL ANALYSIS & BOUNDARIES */}
        {activeSubTab === 'legal_analysis' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2">
                <Scale className="text-red-500" size={20} />
                <h3 className="text-lg font-bold">Legal Responsibility & Boundaries Established in Sterling v. City of Jackson</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                The en banc Fifth Circuit decision establishes rigid doctrinal limits on civil rights litigation against municipal water providers. 
                Understanding what this case decided—and what it did not—is critical for citizens, environmental attorneys, and municipal watchdogs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className={`p-5 rounded-xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <h4 className="text-sm font-bold text-red-600 dark:text-red-400 flex items-center gap-2">
                    <AlertTriangle size={16} />
                    1. Constitutional Boundaries Erected by the Fifth Circuit
                  </h4>
                  <ul className="text-xs space-y-2 text-stone-600 dark:text-stone-300 list-disc pl-4 leading-relaxed">
                    <li>
                      <strong>Rejection of Substantive Due Process for Tap Water:</strong> The court held that the 14th Amendment Due Process Clause does not encompass a right to clean drinking water or accurate municipal health disclosures.
                    </li>
                    <li>
                      <strong>Narrowing of "Bodily Integrity":</strong> Bodily integrity was confined strictly to direct state-imposed physical force (e.g. non-consensual medical experimentation, stomach pumping in <span className="italic">Rochin v. California</span>, or physical custody abuse).
                    </li>
                    <li>
                      <strong>Statutory vs. Constitutional Rights:</strong> Safe Drinking Water Act (SDWA) standards are statutory rules enforced through EPA administrative apparatus, not self-executing constitutional guarantees enforceable via 42 U.S.C. § 1983.
                    </li>
                    <li>
                      <strong>Immunizing Municipal Mismanagement:</strong> Severe incompetence, systemic deferred maintenance, and repeated administrative failure—even when resulting in severe pediatric lead poisoning—do not rise to a constitutional tort.
                    </li>
                  </ul>
                </div>

                <div className={`p-5 rounded-xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <h4 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 size={16} />
                    2. Unaffected Protections & Preserved Legal Avenues
                  </h4>
                  <ul className="text-xs space-y-2 text-stone-600 dark:text-stone-300 list-disc pl-4 leading-relaxed">
                    <li>
                      <strong>Safe Drinking Water Act Remains Fully Active:</strong> The ruling does NOT permit water utilities to violate SDWA maximum contaminant level goals or lead action thresholds.
                    </li>
                    <li>
                      <strong>State Law Tort Claims Preserved:</strong> The court emphasized that plaintiffs retain the right to sue the city and operators under state tort theories such as negligence, gross negligence, and nuisance.
                    </li>
                    <li>
                      <strong>Contractor & Engineering Liability Untouched:</strong> Private engineering companies (e.g. chemical consultants, meter contractors like Siemens) enjoy no sovereign immunity and can be sued for malpractice.
                    </li>
                    <li>
                      <strong>Federal Receivership Maintained:</strong> The ongoing federal oversight agreement under JXN Water and the DOJ/EPA 2022 stipulated order continues independent of this constitutional dismissal.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-stone-100 dark:bg-stone-800/60 rounded-xl space-y-2 text-xs">
                <span className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <Info size={14} className="text-blue-500" />
                  Legal Analysis Summary by Norm Roulet:
                </span>
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed">
                  "The Fifth Circuit’s decision in <span className="italic">Sterling</span> creates a dangerous paradox: if a police officer unlawfully strikes a citizen, the Constitution provides immediate redress under Section 1983; but if a municipal apparatus delivers chronic, irreversible neurotoxic heavy metals through residential kitchen pipes into the bloodstream of infants for over a decade, the Constitution is silent. This judicial abdication elevates mechanical property distinctions over biological reality, leaving working-class citizens dependent on capped state tort claims while their children suffer permanent epigenetic and neurocognitive damage."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: CIRCUIT SPLIT (FLINT VS JACKSON) */}
        {activeSubTab === 'circuit_split' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2">
                <Gavel className="text-amber-500" size={20} />
                <h3 className="text-lg font-bold">The Historic Circuit Split: Fifth Circuit (Jackson) vs. Sixth Circuit (Flint)</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                The Fifth Circuit majority directly acknowledged the Sixth Circuit’s landmark ruling in <span className="italic">Guertin v. Michigan Department of Environmental Quality</span> (912 F.3d 907), 
                where Flint residents were permitted to pursue constitutional substantive due process claims. However, the Fifth Circuit explicitly stated it was 
                <span className="font-semibold text-stone-900 dark:text-stone-100"> "neither bound nor persuaded"</span> by the Sixth Circuit’s doctrine.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className={`border-b ${isLight ? 'bg-stone-100 border-stone-300 text-stone-700' : 'bg-stone-950 border-stone-800 text-stone-300'}`}>
                      <th className="p-3 font-mono">Legal Dimension</th>
                      <th className="p-3 font-mono text-emerald-600 dark:text-emerald-400">Sixth Circuit (Flint, MI)</th>
                      <th className="p-3 font-mono text-red-600 dark:text-red-400">Fifth Circuit (Jackson, MS)</th>
                      <th className="p-3 font-mono">Strategic Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    {circuitSplitComparison.map((row, idx) => (
                      <tr key={idx} className={isLight ? 'hover:bg-stone-50' : 'hover:bg-stone-800/40'}>
                        <td className="p-3 font-bold text-stone-800 dark:text-stone-200">{row.dimension}</td>
                        <td className="p-3 text-stone-600 dark:text-stone-300 bg-emerald-500/5">{row.flintSixthCircuit}</td>
                        <td className="p-3 text-stone-600 dark:text-stone-300 bg-red-500/5">{row.jacksonFifthCircuit}</td>
                        <td className="p-3 text-stone-500 font-mono text-[11px]">{row.implication}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 space-y-2">
                <h4 className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
                  <Landmark size={15} />
                  Supreme Court Certiorari Outlook
                </h4>
                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  Under Supreme Court Rule 10(a), a direct conflict between federal courts of appeals on an important matter of federal constitutional law is the single most compelling ground for granting a Petition for Writ of Certiorari. 
                  Because the Fifth Circuit majority explicitly addressed and rejected the Sixth Circuit's <span className="italic">Guertin</span> doctrine, the legal question—<span className="italic">Does the state-sponsored introduction of neurotoxic drinking water into homes violate Fourteenth Amendment bodily integrity?</span>—is primed for definitive Supreme Court resolution.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: CITIZEN RECOURSE & REMEDIES */}
        {activeSubTab === 'citizen_recourse' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-emerald-500" size={20} />
                <h3 className="text-lg font-bold">Citizen Recourse: What Legal Rights Remain for Jackson Residents?</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                While the dismissal of federal constitutional claims under Section 1983 closes the door to federal civil rights damages against the city, 
                Jackson residents retain several powerful, multi-track avenues for legal accountability, monetary compensation, and injunctive repair:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {citizenRecourseMatrix.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-xl border space-y-2 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-xs font-bold text-stone-900 dark:text-stone-100">{item.route}</h4>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                        item.viability.includes('High') ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                      }`}>
                        {item.viability}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono text-stone-500">
                      <strong>Forum:</strong> {item.court}
                    </div>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      <strong>Standing:</strong> {item.standing}
                    </p>

                    <div className="text-xs text-stone-500 bg-stone-100 dark:bg-stone-900 p-2.5 rounded-lg space-y-1">
                      <div><strong className="text-red-500">Legal Hurdles:</strong> {item.hurdles}</div>
                      <div><strong className="text-blue-500">Current Status:</strong> {item.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: CORRUPTION & INFRASTRUCTURE DISINVESTMENT */}
        {activeSubTab === 'corruption_history' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2">
                <Landmark className="text-red-500" size={20} />
                <h3 className="text-lg font-bold">Systemic Corruption, Disinvestment & Racialized Municipal Starvation</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                The Jackson water disaster cannot be understood as a mere meteorological fluke or winter freeze accident. 
                It is the direct outcome of five decades of racialized capital flight, political retribution by the state legislature, 
                and catastrophic privatization contracts that drained the utility of operating funds.
              </p>

              <div className="space-y-4">
                {corruptionAuditLedger.map((item, idx) => (
                  <div key={idx} className={`p-5 rounded-xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-red-600 dark:text-red-400">{item.event}</h4>
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className="px-2 py-0.5 bg-stone-200 dark:bg-stone-800 rounded">{item.year}</span>
                        <span className="px-2 py-0.5 bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 rounded font-bold">{item.financialImpact}</span>
                      </div>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {item.consequence}
                    </p>
                    <div className="text-xs font-mono text-stone-500 pt-1 border-t border-stone-200 dark:border-stone-800">
                      <strong>Audit Finding:</strong> {item.verdict}
                    </div>
                  </div>
                ))}
              </div>

              {/* The Siemens Scandal Spotlight */}
              <div className="p-5 rounded-xl bg-gradient-to-br from-red-950/20 to-amber-950/20 border border-red-500/30 space-y-3">
                <h4 className="text-sm font-bold text-red-500 flex items-center gap-2">
                  <AlertTriangle size={16} />
                  Spotlight: The $90 Million Siemens Automated Meter Catastrophe
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  In 2012, Jackson signed a $90 million contract with Siemens Industry Inc.—the largest municipal contract in Jackson history—promising automated smart water meters 
                  and a high-tech billing system that would boost city revenue. Instead, thousands of meters were improperly installed or failed to communicate with billing software. 
                  Tens of thousands of residents received no bills for years, while others received wildly inaccurate bills for $15,000. 
                  Revenue plummeted by over $100 million. With no cash flow, the water department could not afford routine replacement of lime feed pumps, coagulants, or ortho-phosphate corrosion inhibitors at the O.B. Curtis treatment plant. 
                  When the water chemistry turned acidic, lead leached freely from the city's aging pipes into school drinking fountains and homes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: LEAD LEVELS & WATER METRICS */}
        {activeSubTab === 'water_metrics' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2">
                <Activity className="text-red-500" size={20} />
                <h3 className="text-lg font-bold">Water Chemistry & The Physics of Lead Leaching in Jackson</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Why does lead spike in Jackson tap water? Unlike Flint, where switching to the corrosive Flint River initiated the crisis, Jackson’s source water 
                comes from the Pearl River and Barnett Reservoir. The chemical failure occurred inside the O.B. Curtis water treatment plant:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="text-xs font-mono font-bold text-red-600 dark:text-red-400">1. Coagulation & pH Collapse</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Heavy rain events in the Pearl River basin flood the treatment intake with high-turbidity organic matter. Treatment operators over-dosed ferric sulfate without balancing soda ash or lime, dropping water pH into aggressive acidic ranges (pH &lt; 6.5).
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">2. Ortho-Phosphate Passivation Failure</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Due to financial insolvency from the Siemens billing crash, the city repeatedly ran out of ortho-phosphate corrosion inhibitors. Without continuous phosphate dosing, the protective mineral coating (plumbonacrite) lining the inside of lead service lines stripped away.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400">3. Pressure Surges & Particulate Spikes</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Repeated winter freeze pipe ruptures and boil-water depressurization cycles caused violent hydrodynamic shockwaves. Rusted iron and lead flakes sheered off distribution mains directly into residential fixtures.
                  </p>
                </div>
              </div>

              {/* Lead vs Turbidity Graph */}
              <div className="pt-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 font-mono mb-2">Historical Water Grid Stress & Lead Spike Index</h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={leadTimelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#27272a'} />
                      <XAxis dataKey="year" stroke={isLight ? '#71717a' : '#a1a1aa'} tick={{ fontSize: 11 }} />
                      <YAxis stroke={isLight ? '#71717a' : '#a1a1aa'} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#ffffff' : '#18181b',
                          borderColor: isLight ? '#e5e7eb' : '#27272a',
                          borderRadius: '0.75rem',
                          fontSize: '12px'
                        }}
                      />
                      <Area type="monotone" dataKey="maxLeadPpb" stroke="#dc2626" fill="#ef4444" fillOpacity={0.25} name="Max Recorded Lead (ppb)" />
                      <Area type="monotone" dataKey="avgLeadPpb" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} name="Average Tap Lead (ppb)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 7: INTERACTIVE REMEDY SIMULATOR */}
        {activeSubTab === 'interactive_remedy' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border space-y-6 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
              <div className="flex items-center gap-2">
                <Sliders className="text-red-500" size={20} />
                <h3 className="text-lg font-bold">Jackson Lead Litigation & Recourse Decision Engine</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Test how different litigation routes, statutory caps, and court filings affect legal feasibility, recovery timelines, 
                and pediatric neuro-remediation capital for Jackson children.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4 rounded-xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                <div className="space-y-2">
                  <label className="text-xs font-bold font-mono">Select Litigation Strategy</label>
                  <select
                    value={claimType}
                    onChange={(e) => setClaimType(e.target.value as any)}
                    className={`w-full p-2.5 rounded-lg text-xs font-mono border ${isLight ? 'bg-white border-stone-300 text-stone-800' : 'bg-stone-900 border-stone-700 text-stone-200'}`}
                  >
                    <option value="scotus_cert">1. U.S. Supreme Court Certiorari (Circuit Split)</option>
                    <option value="contractor_suit">2. Private Engineering Malpractice Suit</option>
                    <option value="mtca_state">3. Mississippi Tort Claims Act (State Court)</option>
                    <option value="tort_negligence">4. Common Law Negligence & Nuisance</option>
                    <option value="sdwa_citizen">5. SDWA Federal Citizen Suit (Injunctive)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-mono">Estimated Class Claim: ${damagesClaimMillions}M</label>
                  <input
                    type="range"
                    min="5"
                    max="150"
                    step="5"
                    value={damagesClaimMillions}
                    onChange={(e) => setDamagesClaimMillions(Number(e.target.value))}
                    className="w-full accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>$5M</span>
                    <span>$75M</span>
                    <span>$150M</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold font-mono">Diagnosed Children Sample: {affectedChildrenCount}</label>
                  <input
                    type="range"
                    min="20"
                    max="500"
                    step="10"
                    value={affectedChildrenCount}
                    onChange={(e) => setAffectedChildrenCount(Number(e.target.value))}
                    className="w-full accent-amber-600"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>20</span>
                    <span>250</span>
                    <span>500</span>
                  </div>
                </div>
              </div>

              {/* Simulation Result Card */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-4 rounded-xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <span className="text-[11px] font-mono text-stone-500">Judicial Feasibility Index</span>
                  <div className="text-2xl font-black text-red-600 dark:text-red-400">
                    {simulationResults.projectedSuccessRate}%
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">Statistical viability in current forum</span>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <span className="text-[11px] font-mono text-stone-500">Projected Recovery / Child</span>
                  <div className="text-2xl font-black text-amber-600 dark:text-amber-400">
                    {simulationResults.avgRecoveryPerChild > 0 ? `$${simulationResults.avgRecoveryPerChild.toLocaleString()}` : 'Injunctive Relief Only'}
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">Estimated net after statutory caps</span>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'}`}>
                  <span className="text-[11px] font-mono text-stone-500">Recommended Next Move</span>
                  <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                    {claimType === 'scotus_cert' ? 'File Cert Petition (Flint Split)' : claimType === 'contractor_suit' ? 'Retain Metallurgical Experts' : 'Issue Notice of Claim'}
                  </div>
                  <span className="text-[10px] text-stone-500 font-mono">Actionable tactical step</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/50 space-y-2 text-xs">
                <div><strong className="text-red-600 dark:text-red-400 font-mono">Primary Legal Hurdle:</strong> {simulationResults.keyBarrier}</div>
                <div><strong className="text-emerald-600 dark:text-emerald-400 font-mono">Litigation Playbook:</strong> {simulationResults.legalStrategy}</div>
              </div>
            </div>
          </div>
        )}

        {/* Cross-Navigation Footer */}
        <div className={`p-6 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'}`}>
          <div className="space-y-1">
            <h4 className="text-sm font-bold">Connect with Related Exposenomics & Lead Audits</h4>
            <p className="text-xs text-stone-500">Explore comparative legal, municipal, and epigenetic lead investigations on ICEarth</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('flint')}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-red-600 text-white hover:bg-red-500 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>☣️ Flint Lead Audit (6th Cir. Precedent)</span>
                  <ArrowRight size={13} />
                </button>

                <button
                  onClick={() => onNavigateTab('roanoke_lead_audit')}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-amber-600 text-white hover:bg-amber-500 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>🏛️ Roanoke Lead Audit (Plate #42)</span>
                  <ArrowRight size={13} />
                </button>

                <button
                  onClick={() => onNavigateTab('twin_cities_lead')}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-blue-600 text-white hover:bg-blue-500 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>💧 Twin Cities Lead Service Lines</span>
                  <ArrowRight size={13} />
                </button>

                <button
                  onClick={() => onNavigateTab('sovereign_portal')}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-stone-800 text-stone-200 hover:bg-stone-700 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>🏠 Sovereign Portal</span>
                  <ArrowRight size={13} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Cryptographic Artwork Modal (Plate #43) */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-white font-mono text-sm font-bold">
                <Gavel className="text-amber-400" size={18} />
                <span>Plate #43 Cryptographic Provenance: Jackson Water Audit</span>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="text-stone-400 hover:text-white px-2 py-1 rounded text-xs font-mono border border-stone-800 hover:border-stone-700 cursor-pointer"
              >
                Close ✕
              </button>
            </div>

            <div className="rounded-xl overflow-hidden border border-stone-800 aspect-video bg-black flex items-center justify-center">
              <img
                src={jacksonWaterAuditImg}
                alt="Jackson Lead Audit Plate #43 Full"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-stone-300">
              <div className="space-y-1">
                <span className="text-stone-500">Asset Identifier:</span>
                <div className="text-amber-400 font-bold">PHOTO-000AY / IP-000AY</div>
                <span className="text-stone-500">Location:</span>
                <div>Jackson, Mississippi (O.B. Curtis / Pearl River Basin)</div>
              </div>

              <div className="space-y-1">
                <span className="text-stone-500">Cryptographic Vault Hash:</span>
                <div className="text-red-400 font-bold break-all">{PROVENANCE_HASH}</div>
                <span className="text-stone-500">Legal Citation:</span>
                <div>Sterling v. City of Jackson, No. 24-60126 (5th Cir. 2026 en banc)</div>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center border-t border-stone-800 text-[11px] font-mono text-stone-500">
              <span>Cryptographic Registry: Norm Roulet Sovereign Vault (User #1)</span>
              <button
                onClick={handleCopyHash}
                className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded cursor-pointer transition-all"
              >
                {copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
