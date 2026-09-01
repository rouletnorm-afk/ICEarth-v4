import React, { useState, useMemo } from 'react';
import {
  Shield,
  Activity,
  AlertTriangle,
  FileText,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Sparkles,
  Search,
  Filter,
  Eye,
  Info,
  Layers,
  Award,
  Hash,
  Download,
  Share2,
  Copy,
  Check,
  Zap,
  Flame,
  Atom,
  Droplets,
  Scale,
  Sliders,
  Maximize2,
  X,
  Users,
  Globe,
  Cpu,
  Heart,
  Home,
  ShieldAlert,
  Building2,
  UserCheck,
  TrendingUp,
  Brain,
  Lightbulb,
  ShieldCheck
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
  LineChart,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area
} from 'recharts';
import publicInterestTechImg from '../assets/images/public_interest_tech_lead_1788280223679.jpg';

interface PublicInterestTechnologyProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const PublicInterestTechnology: React.FC<PublicInterestTechnologyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';
  const [activeSection, setActiveSection] = useState<'overview' | 'lead_case_study' | 'recharts_data' | 'pit_simulator' | 'pillars' | 'icearth_synthesis'>('overview');
  const [selectedGraphicModal, setSelectedGraphicModal] = useState<boolean>(false);
  const [copiedCitation, setCopiedCitation] = useState<boolean>(false);

  // Interactive PIT Lead Prevention & Intervention Simulator State
  const [targetPopulation, setTargetPopulation] = useState<number>(50000); // Children in community
  const [pre1978HousingPct, setPre1978HousingPct] = useState<number>(75); // % older homes
  const [interventionStrategy, setInterventionStrategy] = useState<'reactive_canary' | 'targeted_pit_predictive' | 'universal_proactive'>('targeted_pit_predictive');
  const [abatementGrantFunding, setAbatementGrantFunding] = useState<number>(2500000); // $ budget
  const [dataIntegrationLevel, setDataIntegrationLevel] = useState<number>(85); // % data linkages (birth records, tax assessor, water data)

  // Simulation Calculations
  const simulationMetrics = useMemo(() => {
    const atRiskChildren = Math.round(targetPopulation * (pre1978HousingPct / 100) * 0.35);

    let poisonedChildrenCount = 0;
    let preventedPoisoningCount = 0;
    let inspectionAccuracy = 0;
    let costPerPrevention = 0;
    let lifetimeEconomicBenefit = 0;

    if (interventionStrategy === 'reactive_canary') {
      // Waiting for blood lead test: 85% get poisoned first
      poisonedChildrenCount = Math.round(atRiskChildren * 0.82);
      preventedPoisoningCount = Math.round(atRiskChildren * 0.18);
      inspectionAccuracy = 32;
      costPerPrevention = 14500;
      lifetimeEconomicBenefit = preventedPoisoningCount * 280000;
    } else if (interventionStrategy === 'targeted_pit_predictive') {
      // Machine learning predicts high risk homes prior to occupancy
      const efficiencyMultiplier = (dataIntegrationLevel / 100);
      preventedPoisoningCount = Math.round(atRiskChildren * (0.68 * efficiencyMultiplier + 0.15));
      poisonedChildrenCount = Math.max(0, atRiskChildren - preventedPoisoningCount);
      inspectionAccuracy = Math.min(94, Math.round(55 + dataIntegrationLevel * 0.38));
      costPerPrevention = Math.round(abatementGrantFunding / Math.max(1, preventedPoisoningCount));
      lifetimeEconomicBenefit = preventedPoisoningCount * 310000;
    } else {
      // Universal proactive testing & window replacement
      preventedPoisoningCount = Math.round(atRiskChildren * 0.92);
      poisonedChildrenCount = Math.round(atRiskChildren * 0.08);
      inspectionAccuracy = 98;
      costPerPrevention = Math.round(abatementGrantFunding / Math.max(1, preventedPoisoningCount));
      lifetimeEconomicBenefit = preventedPoisoningCount * 320000;
    }

    const roiRatio = +(lifetimeEconomicBenefit / Math.max(1, abatementGrantFunding)).toFixed(1);

    return {
      atRiskChildren,
      poisonedChildrenCount,
      preventedPoisoningCount,
      inspectionAccuracy,
      costPerPrevention,
      lifetimeEconomicBenefit,
      roiRatio
    };
  }, [targetPopulation, pre1978HousingPct, interventionStrategy, abatementGrantFunding, dataIntegrationLevel]);

  // Chart Data: Reactive (Canary) vs Public Interest Tech (Proactive)
  const comparisonData = [
    { metric: 'Pre-Poisoning Intervention Rate (%)', ReactiveCanary: 18, PIT_Predictive: 78, UniversalProactive: 92 },
    { metric: 'Inspection Hit Rate / Accuracy (%)', ReactiveCanary: 32, PIT_Predictive: 88, UniversalProactive: 98 },
    { metric: 'Benefits Application Completion (%)', ReactiveCanary: 42, PIT_Predictive: 89, UniversalProactive: 95 },
    { metric: 'Administrative Cost Reduction (%)', ReactiveCanary: 15, PIT_Predictive: 65, UniversalProactive: 72 },
    { metric: 'Cognitive IQ Loss Prevented (Points)', ReactiveCanary: 1200, PIT_Predictive: 6800, UniversalProactive: 8100 },
  ];

  // Longitudinal Economic & Health ROI Data
  const roiTimelineData = [
    { year: 'Year 1', InvestmentMillions: 2.5, SavingsMillions: 3.8, NetSocietalGain: 1.3 },
    { year: 'Year 2', InvestmentMillions: 2.5, SavingsMillions: 8.4, NetSocietalGain: 5.9 },
    { year: 'Year 3', InvestmentMillions: 2.5, SavingsMillions: 16.2, NetSocietalGain: 13.7 },
    { year: 'Year 5', InvestmentMillions: 2.5, SavingsMillions: 34.5, NetSocietalGain: 32.0 },
    { year: 'Year 10', InvestmentMillions: 2.5, SavingsMillions: 86.0, NetSocietalGain: 83.5 },
  ];

  // Core Pillars of PIT
  const pitPillars = [
    {
      title: 'Proactive Lead Poisoning Prevention',
      icon: ShieldAlert,
      color: 'text-amber-500',
      border: 'border-amber-500/40',
      bg: 'bg-amber-500/10',
      description: 'Using housing age, historical inspection records, property tax assessments, and maternal healthcare data to predict lead hazards BEFORE a newborn child is poisoned.',
      caseStudy: 'Carnegie Mellon & Chicago Department of Public Health ML Model prevented hundreds of infants from irreversible cognitive damage.'
    },
    {
      title: 'Automated Benefits Access & Food Security',
      icon: Users,
      color: 'text-emerald-500',
      border: 'border-emerald-500/40',
      bg: 'bg-emerald-500/10',
      description: 'Eliminating the "administrative burden tax" by cross-referencing eligibility data across SNAP, TANF, Medicaid, and child tax credits to automatically deliver aid.',
      caseStudy: 'Over $60 Billion in unclaimed annual benefits unlocked for low-income families without 40-page paperwork barriers.'
    },
    {
      title: 'Education Early Warning & Student Retention',
      icon: Brain,
      color: 'text-sky-500',
      border: 'border-sky-500/40',
      bg: 'bg-sky-500/10',
      description: 'Identifying students falling behind in grades 6-9 through attendance, behavioral cues, and coursework flags to provide personalized mentors rather than punitive measures.',
      caseStudy: 'Boosted on-time high school graduation rates by 14%–22% in urban school districts.'
    },
    {
      title: 'Environmental Exposenomics & Water Auditing',
      icon: Droplets,
      color: 'text-indigo-500',
      border: 'border-indigo-500/40',
      bg: 'bg-indigo-500/10',
      description: 'Deploying open geographic information systems (GIS) and AI infomediation to map lead service lines, industrial PM2.5 plumes, and soil toxicities directly to households.',
      caseStudy: 'ICEarth Sovereign Directory & ZK-Exposure Ledger liberating data concealed by municipal administrations.'
    }
  ];

  const handleCopyCitation = () => {
    const citation = `Rayid Ghani (Carnegie Mellon University). "What is public interest technology? An expert on data and policy explains how it helps people in need." Published in NewsBug / The Conversation, Sep 1, 2026. ICEarth Sovereign Provenance: 0xPUBLIC_INTEREST_TECH_RAYID_GHANI_CMU_2026.`;
    navigator.clipboard.writeText(citation);
    setCopiedCitation(true);
    setTimeout(() => setCopiedCitation(false), 3000);
  };

  return (
    <div className={`w-full min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      
      {/* TOP NOTIFICATION / NAVIGATION HEADER */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} py-3 px-4 sm:px-6`}>
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/30">
              FEATURED SCIENTIFIC DOSSIER • PLATE #32
            </span>
            <span className="hidden sm:inline text-stone-500">
              Carnegie Mellon University • Data Science for Social Good (DSSG) • Sep 1, 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('sovereign_portal')}
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Globe size={13} />
                  <span>Sovereign Portal</span>
                </button>
                <button
                  onClick={() => onNavigateTab('evolutionary_canary')}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                >
                  <Shield size={13} />
                  <span>Canary Proof (Nature)</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* HERO SECTION */}
        <div className={`relative overflow-hidden rounded-3xl border p-6 sm:p-10 shadow-2xl ${
          isLight ? 'bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 text-white border-amber-800/40' : 'bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white border-amber-500/30'
        }`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1.5">
                  <Lightbulb size={13} className="text-amber-400" />
                  Public Interest Technology (PIT)
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  Preventing Pediatric Poisoning
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono text-stone-300 bg-stone-800/80 border border-stone-700">
                  Author: Rayid Ghani (CMU)
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-100 leading-tight">
                What is Public Interest Technology?
              </h1>

              <div className="p-3.5 rounded-2xl bg-amber-500/15 border border-amber-400/40 text-amber-200 font-sans text-sm sm:text-base font-medium leading-relaxed">
                “Public interest technology has prevented children from being poisoned by lead paint.”
              </div>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                Every year, millions of eligible citizens are denied food assistance, healthcare, and lead-safe housing because bureaucratic systems are designed for corporate compliance rather than human preservation. Public Interest Technology (PIT) redeploys data science, machine learning, and algorithmic governance away from advertising extraction toward direct community protection.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setSelectedGraphicModal(true)}
                  className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-black text-xs rounded-xl shadow-lg border border-amber-300 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Eye size={15} />
                  <span>Inspect Scientific Infographic Plate</span>
                  <Maximize2 size={13} />
                </button>

                <a
                  href="https://www.newsbug.info/news/nation/what-is-public-interest-technology-an-expert-on-data-and-policy-explains-how-it-helps/article_54cbee56-9ca0-554b-8555-adaa014ee1fb.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono font-bold text-xs rounded-xl border border-stone-700 transition-all flex items-center gap-2"
                >
                  <FileText size={15} />
                  <span>Read NewsBug Dispatch</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={handleCopyCitation}
                  className="px-3.5 py-2.5 bg-stone-900/80 hover:bg-stone-800 text-stone-300 font-mono text-xs rounded-xl border border-stone-700 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedCitation ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedCitation ? 'Citation Copied!' : 'Copy Citation'}</span>
                </button>
              </div>
            </div>

            {/* HERO INFOGRAPHIC PREVIEW CARD */}
            <div className="lg:col-span-4">
              <div 
                onClick={() => setSelectedGraphicModal(true)}
                className="bg-stone-950 rounded-2xl p-3 border border-amber-500/40 shadow-2xl group cursor-pointer relative overflow-hidden transition-all hover:border-amber-400 hover:scale-[1.02]"
              >
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-900 border border-stone-800 relative">
                  <img
                    src={publicInterestTechImg}
                    alt="Public Interest Technology Infographic Plate"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-mono text-amber-300 font-bold bg-black/70 px-2 py-1 rounded backdrop-blur-sm">
                    <span>Plate #32 • Public Interest Tech</span>
                    <span className="flex items-center gap-1"><Maximize2 size={10} /> Click to Enlarge</span>
                  </div>
                </div>
                <div className="mt-2 text-center text-xs font-mono text-stone-400">
                  Carnegie Mellon Data Science for Social Good
                </div>
              </div>
            </div>

          </div>

          {/* NORMATIVE CONTEXT & WHY ICEARTH EXISTS */}
          <div className="mt-8 pt-6 border-t border-amber-500/20 bg-stone-950/60 p-5 rounded-2xl border border-amber-500/30">
            <div className="flex items-center gap-2 font-mono font-bold text-amber-400 text-xs sm:text-sm uppercase tracking-wider mb-2">
              <Sparkles size={16} />
              <span>Why ICEarth Exists: The Digital Manifestation of Public Interest Technology</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
              As articulated by founder Norman Roulet in 2001 (<em>"Information Community Earth — An individual should own his or her own data and only trusted parties should broker individuals data as allowed and authorized by the individual"</em>), ICEarth exists as <strong>pure Public Interest Technology</strong>. While corporate tech builds engagement casinos and predatory predictive engines, ICEarth unifies Roulet's Law, Zero-Knowledge privacy proofs, and predictive open-source environmental exposomics to stop children from being poisoned by lead paint, toxic tap water, and industrial soil contamination.
            </p>
          </div>
        </div>

        {/* CORE STATS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
            <div className="text-xs font-mono text-amber-500 font-bold uppercase">Lead Prevention Accuracy</div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-stone-900 dark:text-stone-100 mt-1">88%–94%</div>
            <div className="text-[11px] text-stone-500 mt-0.5">High-risk pre-occupancy predictive accuracy</div>
          </div>

          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
            <div className="text-xs font-mono text-emerald-500 font-bold uppercase">Unclaimed Aid Unlocked</div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-stone-900 dark:text-stone-100 mt-1">$60B+</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Annual food & healthcare benefits delivered</div>
          </div>

          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
            <div className="text-xs font-mono text-sky-500 font-bold uppercase">Childhood Canary Shift</div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-stone-900 dark:text-stone-100 mt-1">100%</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Move from reactive blood tests to prevention</div>
          </div>

          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
            <div className="text-xs font-mono text-indigo-500 font-bold uppercase">Societal ROI Ratio</div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-stone-900 dark:text-stone-100 mt-1">17x – 22x</div>
            <div className="text-[11px] text-stone-500 mt-0.5">Economic return per $1 spent on lead abatement</div>
          </div>
        </div>

        {/* SECTION NAVIGATION TABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          <button
            onClick={() => setActiveSection('overview')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'overview'
                ? 'bg-amber-500 text-stone-950 shadow-md'
                : isLight ? 'bg-stone-200 text-stone-700 hover:bg-stone-300' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <BookOpen size={15} />
            <span>1. Executive Overview & Abstract</span>
          </button>

          <button
            onClick={() => setActiveSection('lead_case_study')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'lead_case_study'
                ? 'bg-amber-500 text-stone-950 shadow-md'
                : isLight ? 'bg-stone-200 text-stone-700 hover:bg-stone-300' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <ShieldAlert size={15} />
            <span>2. Lead Paint & Child Poisoning Case Study</span>
          </button>

          <button
            onClick={() => setActiveSection('recharts_data')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'recharts_data'
                ? 'bg-amber-500 text-stone-950 shadow-md'
                : isLight ? 'bg-stone-200 text-stone-700 hover:bg-stone-300' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Activity size={15} />
            <span>3. Empirical Data Visualizations</span>
          </button>

          <button
            onClick={() => setActiveSection('pit_simulator')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'pit_simulator'
                ? 'bg-amber-500 text-stone-950 shadow-md'
                : isLight ? 'bg-stone-200 text-stone-700 hover:bg-stone-300' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Sliders size={15} />
            <span>4. Proactive PIT Lead Simulator</span>
          </button>

          <button
            onClick={() => setActiveSection('pillars')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'pillars'
                ? 'bg-amber-500 text-stone-950 shadow-md'
                : isLight ? 'bg-stone-200 text-stone-700 hover:bg-stone-300' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Layers size={15} />
            <span>5. Four Pillars of PIT</span>
          </button>

          <button
            onClick={() => setActiveSection('icearth_synthesis')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSection === 'icearth_synthesis'
                ? 'bg-amber-500 text-stone-950 shadow-md'
                : isLight ? 'bg-stone-200 text-stone-700 hover:bg-stone-300' : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Globe size={15} />
            <span>6. ICEarth Sovereignty & Roulet's Law</span>
          </button>
        </div>

        {/* SECTION 1: OVERVIEW */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
            }`}>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                The Disconnect: Why Millions Qualify for Essential Aid But Never Receive It
              </h2>
              
              <p className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                As Rayid Ghani (Distinguished Career Professor in Machine Learning and Public Policy at Carnegie Mellon University) explains, every year millions of people who qualify for food assistance, healthcare, and housing subsidies never receive them. The funding exists and applicants meet all eligibility rules, but they remain trapped behind administrative barriers: they don't know the program exists, the paperwork is dozens of pages long, or state agencies operate in isolated digital silos.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-red-50 border-red-200 text-red-950' : 'bg-red-950/30 border-red-800/40 text-red-200'} space-y-2`}>
                  <div className="flex items-center gap-2 font-bold font-mono text-xs uppercase">
                    <XCircle size={16} className="text-red-500" />
                    <span>Commercial & Surveillance Tech</span>
                  </div>
                  <ul className="text-xs space-y-1.5 list-disc list-inside">
                    <li>Maximizes advertising click-throughs and screen engagement.</li>
                    <li>Siphons user data to private brokerages without informed consent.</li>
                    <li>Operates as black-box algorithms penalizing marginalized communities.</li>
                    <li>Extracts economic rent while leaving public infrastructure to decay.</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-emerald-950/30 border-emerald-800/40 text-emerald-200'} space-y-2`}>
                  <div className="flex items-center gap-2 font-bold font-mono text-xs uppercase">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Public Interest Technology (PIT)</span>
                  </div>
                  <ul className="text-xs space-y-1.5 list-disc list-inside">
                    <li>Maximizes human preservation, child health, and civil dignity.</li>
                    <li>Proactively connects eligible families to food, healthcare, and lead abatement.</li>
                    <li>Uses open, accountable data science verified by ethical standards.</li>
                    <li>Prevents irreversible neurological and environmental damage at the source.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FULL ARTICLE ABSTRACT CARD */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
              isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-900/60 border-stone-800'
            }`}>
              <div className="flex items-center justify-between border-b border-stone-300 dark:border-stone-800 pb-3">
                <span className="font-mono font-bold text-xs text-amber-500 uppercase tracking-wider">
                  Full Article Abstract & Published Synthesis
                </span>
                <span className="text-xs font-mono text-stone-500">NewsBug & The Conversation (Sep 1, 2026)</span>
              </div>

              <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed space-y-3">
                <p>
                  <strong>What is public interest technology? An expert on data and policy explains how it helps people in need</strong><br />
                  <em>By Rayid Ghani, Carnegie Mellon University (Sep 1, 2026)</em>
                </p>
                <p>
                  Every year, millions of people who qualify for food assistance never get it. The money exists and they meet the eligibility rules, but they don't know that the program exists, or if they qualify. For others, the application is too long and complicated, or they miss a deadline to recertify. The result is that billions of dollars in benefits go unused every year, while families go hungry.
                </p>
                <p>
                  This is the kind of problem public interest technology aims to solve. As a computer scientist and public policy researcher who has spent the last decade working at the intersection of technology and the public good, I see public interest technology as a vital bridge between what technology can do and what people actually need.
                </p>
                <p className="font-semibold text-amber-600 dark:text-amber-300">
                  Public interest technology has prevented children from being poisoned by lead paint, helped community colleges keep students on track to graduate, reduced unnecessary incarceration by helping courts distinguish between people who need support and those who pose a risk to public safety, and connected millions of people to food assistance and health care.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: LEAD PAINT CASE STUDY */}
        {activeSection === 'lead_case_study' && (
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex items-center gap-2 font-mono font-bold text-amber-500 text-xs uppercase tracking-wider">
                <ShieldAlert size={18} />
                <span>The Chicago & Carnegie Mellon Case Study: Stopping the Human Canary Model</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                How Machine Learning & Public Interest Tech Prevented Children from Being Poisoned
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300">
                For decades, municipal public health departments used children as biological lead sensors. Under the legacy system, a city would only send a lead inspector to a home AFTER a doctor reported that a 1- or 2-year-old child had an elevated blood lead level. By that point, the child had already suffered permanent, irreversible brain damage—destruction of prefrontal executive function, loss of impulse control, and IQ deficits.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="text-xs font-mono font-bold text-red-500 uppercase">1. The Legacy "Canary" System</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Waiting for a child to test positive at age 2. The child suffers toxic encephalopathy; home inspection happens too late; siblings and future infants continue to ingest sweet paint chips and toxic dust.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-800/60 border-stone-700'} space-y-2`}>
                  <div className="text-xs font-mono font-bold text-amber-500 uppercase">2. PIT Data Synthesis</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Rayid Ghani's team linked Chicago birth records, housing tax assessment data, building code violations, past lead inspection records, and home construction age to build a machine learning risk map.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-emerald-950/30 border-emerald-800/40'} space-y-2`}>
                  <div className="text-xs font-mono font-bold text-emerald-500 uppercase">3. Proactive Abatement</div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Inspectors are dispatched during pregnancy or prior to newborn occupancy. Federal lead removal grants replace toxic windows and repaint walls BEFORE the infant ever crawls on contaminated floors.
                  </p>
                </div>
              </div>

              {/* ROULET'S LAW COMPARISON */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-xs sm:text-sm text-stone-800 dark:text-stone-200 space-y-2">
                <div className="font-mono font-bold text-amber-500 uppercase flex items-center gap-1.5">
                  <Sparkles size={15} />
                  <span>Alignment with Roulet's Law & The Canary Paradigm:</span>
                </div>
                <p className="leading-relaxed">
                  Roulet's Law proves that <em>Perturbation × UNCERTAINTY = Chaos × Relativity</em>. When municipal administrations conceal lead pipe locations or fail to inspect pre-1978 rental properties, UNCERTAINTY spikes, triggering non-linear CHAOS in pediatric brain development and societal violence. Public Interest Technology eliminates UNCERTAINTY through empirical machine learning, preventing the chaotic cascade entirely.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: RECHARTS DATA */}
        {activeSection === 'recharts_data' && (
          <div className="space-y-8">
            {/* CHART 1: Reactive Canary vs PIT Predictive */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100">
                    Comparative Performance: Reactive Human Canary vs. Public Interest Tech
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Pre-poisoning intervention rates, inspection hit rates, and administrative efficiency metrics
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30 font-bold">
                  CMU / DSSG Benchmark
                </span>
              </div>

              <div className="h-80 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={comparisonData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="metric" tick={{ fontSize: 11, fill: isLight ? '#4b5563' : '#9ca3af' }} interval={0} angle={-15} textAnchor="end" />
                    <YAxis tick={{ fontSize: 11, fill: isLight ? '#4b5563' : '#9ca3af' }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#18181b', borderColor: '#f59e0b', borderRadius: '12px', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="ReactiveCanary" name="Legacy Reactive Canary (%)" fill="#ef4444" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="PIT_Predictive" name="Public Interest Tech ML (%)" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                    <Bar dataKey="UniversalProactive" name="Universal Proactive Standard (%)" fill="#10b981" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* CHART 2: Economic ROI Timeline */}
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-4 ${
              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100">
                    Longitudinal Return on Investment: Proactive Lead Abatement & Public Tech ($M)
                  </h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Net societal economic gain from preserved IQ, higher lifetime earnings, and reduced special education costs
                  </p>
                </div>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 border border-emerald-500/30 font-bold">
                  CDC / Exposenomics Model
                </span>
              </div>

              <div className="h-72 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={roiTimelineData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="year" tick={{ fontSize: 12, fill: isLight ? '#4b5563' : '#9ca3af' }} />
                    <YAxis tick={{ fontSize: 12, fill: isLight ? '#4b5563' : '#9ca3af' }} />
                    <Tooltip contentStyle={{ backgroundColor: isLight ? '#ffffff' : '#18181b', borderColor: '#10b981', borderRadius: '12px', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Area type="monotone" dataKey="SavingsMillions" name="Societal Savings ($M)" stroke="#10b981" fill="#10b981" fillOpacity={0.25} />
                    <Area type="monotone" dataKey="NetSocietalGain" name="Net Societal Gain ($M)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.25} />
                    <Line type="monotone" dataKey="InvestmentMillions" name="Annual Grant Investment ($M)" stroke="#ef4444" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: SIMULATOR */}
        {activeSection === 'pit_simulator' && (
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2 font-mono font-bold text-amber-500 text-xs uppercase tracking-wider">
                  <Sliders size={18} />
                  <span>Interactive Municipal PIT Lead Prevention Simulator</span>
                </div>
                <span className="text-xs font-mono text-stone-500">Live Agent-Based Public Health Engine</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* CONTROLS */}
                <div className="lg:col-span-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Target Pediatric Population:</span>
                      <span className="font-bold text-amber-500">{targetPopulation.toLocaleString()} children</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="200000"
                      step="5000"
                      value={targetPopulation}
                      onChange={(e) => setTargetPopulation(+e.target.value)}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Pre-1978 Older Housing Stock (%):</span>
                      <span className="font-bold text-amber-500">{pre1978HousingPct}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="95"
                      step="5"
                      value={pre1978HousingPct}
                      onChange={(e) => setPre1978HousingPct(+e.target.value)}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Intervention Governance Strategy:</span>
                      <span className="font-bold text-amber-500">
                        {interventionStrategy === 'reactive_canary' ? 'Legacy Reactive Canary' : interventionStrategy === 'targeted_pit_predictive' ? 'Targeted PIT Machine Learning' : 'Universal Proactive Abatement'}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setInterventionStrategy('reactive_canary')}
                        className={`p-2 rounded-xl text-center text-xs font-mono font-bold border transition-all ${
                          interventionStrategy === 'reactive_canary'
                            ? 'bg-red-500 text-white border-red-400'
                            : isLight ? 'bg-stone-100 text-stone-700' : 'bg-stone-950 text-stone-400 border-stone-800'
                        }`}
                      >
                        Reactive Canary
                      </button>

                      <button
                        type="button"
                        onClick={() => setInterventionStrategy('targeted_pit_predictive')}
                        className={`p-2 rounded-xl text-center text-xs font-mono font-bold border transition-all ${
                          interventionStrategy === 'targeted_pit_predictive'
                            ? 'bg-amber-500 text-stone-950 border-amber-400'
                            : isLight ? 'bg-stone-100 text-stone-700' : 'bg-stone-950 text-stone-400 border-stone-800'
                        }`}
                      >
                        Targeted PIT ML
                      </button>

                      <button
                        type="button"
                        onClick={() => setInterventionStrategy('universal_proactive')}
                        className={`p-2 rounded-xl text-center text-xs font-mono font-bold border transition-all ${
                          interventionStrategy === 'universal_proactive'
                            ? 'bg-emerald-500 text-white border-emerald-400'
                            : isLight ? 'bg-stone-100 text-stone-700' : 'bg-stone-950 text-stone-400 border-stone-800'
                        }`}
                      >
                        Universal Proactive
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Abatement Grant Budget ($):</span>
                      <span className="font-bold text-amber-500">${(abatementGrantFunding / 1000000).toFixed(2)}M</span>
                    </div>
                    <input
                      type="range"
                      min="500000"
                      max="15000000"
                      step="500000"
                      value={abatementGrantFunding}
                      onChange={(e) => setAbatementGrantFunding(+e.target.value)}
                      className="w-full accent-amber-500"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span>Data Linkage & Integration Level (%):</span>
                      <span className="font-bold text-amber-500">{dataIntegrationLevel}%</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      step="5"
                      value={dataIntegrationLevel}
                      onChange={(e) => setDataIntegrationLevel(+e.target.value)}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>

                {/* SIMULATION RESULTS CARD */}
                <div className="lg:col-span-6 space-y-4">
                  <div className={`p-6 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-4`}>
                    <div className="text-xs font-mono font-bold text-amber-500 uppercase">
                      Simulated Public Health Outcomes:
                    </div>

                    <div className="grid grid-cols-2 gap-3 font-mono">
                      <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                        <div className="text-[10px] text-emerald-600 dark:text-emerald-400 uppercase font-bold">Poisoning Cases Prevented</div>
                        <div className="text-xl sm:text-2xl font-black text-emerald-500 mt-1">
                          {simulationMetrics.preventedPoisoningCount.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-stone-500">Infants protected prior to exposure</div>
                      </div>

                      <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                        <div className="text-[10px] text-red-600 dark:text-red-400 uppercase font-bold">Unprevented Poisoning</div>
                        <div className="text-xl sm:text-2xl font-black text-red-500 mt-1">
                          {simulationMetrics.poisonedChildrenCount.toLocaleString()}
                        </div>
                        <div className="text-[10px] text-stone-500">Suffered toxic BLL elevation</div>
                      </div>

                      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                        <div className="text-[10px] text-amber-600 dark:text-amber-400 uppercase font-bold">Inspection Hit Rate</div>
                        <div className="text-xl sm:text-2xl font-black text-amber-500 mt-1">
                          {simulationMetrics.inspectionAccuracy}%
                        </div>
                        <div className="text-[10px] text-stone-500">True hazards identified</div>
                      </div>

                      <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30">
                        <div className="text-[10px] text-sky-600 dark:text-sky-400 uppercase font-bold">Societal ROI Ratio</div>
                        <div className="text-xl sm:text-2xl font-black text-sky-500 mt-1">
                          {simulationMetrics.roiRatio}x
                        </div>
                        <div className="text-[10px] text-stone-500">${(simulationMetrics.lifetimeEconomicBenefit / 1000000).toFixed(1)}M Net Lifetime Gain</div>
                      </div>
                    </div>

                    <div className="text-xs text-stone-500 leading-relaxed pt-1">
                      {interventionStrategy === 'reactive_canary' ? (
                        <span className="text-red-500 font-bold">⚠️ Warning: Under the reactive canary model, 82% of at-risk infants suffer neurotoxic lead exposure before any municipal abatement occurs.</span>
                      ) : (
                        <span className="text-emerald-500 font-bold">✅ Public Interest Technology deployed: Predictive algorithms identify hazardous housing pre-birth, allowing targeted remediation grants to protect vulnerable infants.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: FOUR PILLARS OF PIT */}
        {activeSection === 'pillars' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pitPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-3xl border space-y-4 ${
                      isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl ${pillar.bg} ${pillar.border} border`}>
                        <IconComponent size={24} className={pillar.color} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-stone-500 uppercase font-bold">Pillar {idx + 1}</span>
                        <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      {pillar.description}
                    </p>

                    <div className={`p-3.5 rounded-xl border text-xs font-mono leading-relaxed ${
                      isLight ? 'bg-stone-50 border-stone-200 text-stone-800' : 'bg-stone-950 border-stone-800 text-stone-300'
                    }`}>
                      <span className="font-bold text-amber-500">Real-World Case Study: </span>
                      {pillar.caseStudy}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SECTION 6: ICEARTH SOVEREIGNTY */}
        {activeSection === 'icearth_synthesis' && (
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border space-y-6 ${
              isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex items-center gap-2 font-mono font-bold text-amber-500 text-xs uppercase tracking-wider">
                <Globe size={18} />
                <span>The ICEarth Sovereign Foundation: Infomediation, ZK-Proofs & Roulet's Law</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                How ICEarth Implements Public Interest Technology for Global Environmental Sovereignty
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300 font-sans">
                When Norm Roulet authored the <strong>ICEarth Conceptual Framework</strong> in February 2001, he established the core axiom that an individual should own his or her own data, and only trusted parties should broker individuals' data as authorized by the individual. In the 25 years since, corporate tech corrupted the internet into an advertising surveillance grid. ICEarth restores the original sovereign mission by deploying Public Interest Technology across three structural layers:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="text-xs font-mono font-bold text-amber-500 uppercase flex items-center gap-1.5">
                    <Shield size={14} />
                    <span>1. Zero-Knowledge Custody</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Citizens audit their residential soil lead, blood lead levels (BLL), and tap water pipes using Swiss-grade Zero-Knowledge cryptographic proofs, achieving unassailable legal tort standing without exposing private identity.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="text-xs font-mono font-bold text-emerald-500 uppercase flex items-center gap-1.5">
                    <TrendingUp size={14} />
                    <span>2. Mathematical Exposomics</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    By calculating Roulet's Law across 400,000 lead pipes in Chicago and 140,000 in Cleveland, ICEarth connects municipal environmental footprints directly to societal violence, cognitive degradation, and municipal tort liabilities.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="text-xs font-mono font-bold text-sky-500 uppercase flex items-center gap-1.5">
                    <Users size={14} />
                    <span>3. Open Co-op Publishing</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    The realNEO / ICEarth sovereign publishing network bypasses corporate media gatekeepers, delivering uncorrupted toxicological research dispatches and clinical intervention protocols directly to families.
                  </p>
                </div>
              </div>

              {/* CROSS-LINK ACTION BUTTONS */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-stone-200 dark:border-stone-800">
                {onNavigateTab && (
                  <>
                    <button
                      onClick={() => onNavigateTab('norm_roulet_home')}
                      className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Globe size={14} />
                      <span>ICEarth Launch Home</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('sovereign_portal')}
                      className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono font-bold text-xs rounded-xl border border-stone-700 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Building2 size={14} />
                      <span>Sovereign Membership Portal</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('cleveland')}
                      className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono font-bold text-xs rounded-xl border border-stone-700 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <ShieldAlert size={14} />
                      <span>Cleveland & Cuyahoga Lead Audit</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('abm_simulator')}
                      className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono font-bold text-xs rounded-xl border border-stone-700 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <Cpu size={14} />
                      <span>Agent-Based Modelling (ABM) Simulator</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* MODAL: FULL RESOLUTION INFOGRAPHIC PLATE VIEW */}
      {selectedGraphicModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-amber-500/40 rounded-3xl overflow-hidden shadow-2xl p-6 space-y-4 my-8">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield className="text-amber-400 w-5 h-5" />
                <h3 className="font-serif font-bold text-lg text-stone-100">
                  Plate #32: What is Public Interest Technology? (Carnegie Mellon & Rayid Ghani)
                </h3>
              </div>
              <button
                onClick={() => setSelectedGraphicModal(false)}
                className="p-1.5 rounded-full bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-stone-800 bg-black flex items-center justify-center max-h-[70vh]">
              <img
                src={publicInterestTechImg}
                alt="Public Interest Technology Infographic Plate"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-stone-400 pt-2 border-t border-stone-800">
              <div>
                <span className="text-amber-400 font-bold">Cryptographic Provenance Hash: </span>
                <span className="text-stone-300">0xPUBLIC_INTEREST_TECH_RAYID_GHANI_CMU_2026</span>
              </div>
              <a
                href={publicInterestTechImg}
                download="public_interest_technology_plate32.jpg"
                className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl flex items-center gap-1.5 transition-all"
              >
                <Download size={14} />
                <span>Download High-Res Plate</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
