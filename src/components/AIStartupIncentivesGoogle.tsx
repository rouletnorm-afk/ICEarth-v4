import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Globe,
  Award,
  Users,
  Cpu,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  X,
  FileText,
  Clock,
  Layers,
  ArrowRight,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Radio,
  Sliders,
  Scale,
  Atom,
  Lock,
  ChevronRight,
  Building2,
  TrendingUp,
  DollarSign,
  Send,
  Plus,
  RefreshCw,
  FolderGit2,
  Calendar,
  Gift,
  HelpCircle,
  Briefcase
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
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import aiStartupPlateImg from '../assets/images/ai_startup_incentives_google_1791319115754.jpg';

interface AIStartupIncentivesGoogleProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

interface IncentiveTrackerItem {
  id: string;
  provider: 'Google for Startups' | 'Anthropic Claude Startups' | 'OpenAI Startup Fund' | 'Indigenous Tech Grants';
  programName: string;
  creditValue: string;
  numericCreditVal: number;
  status: 'Ready to Submit' | 'Drafting' | 'Under Review' | 'Active' | 'Approved' | 'Planned';
  deadline: string;
  keyBenefits: string[];
  notes: string;
  applicationUrl: string;
}

export const AIStartupIncentivesGoogle: React.FC<AIStartupIncentivesGoogleProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'programs_overview' | 'google_startup_deepdive' | 'incentive_tracker' | 'direct_outreach' | 'comparison_matrix'>('programs_overview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedOutreach, setCopiedOutreach] = useState(false);

  // Incentive Ledger State
  const [incentiveLedger, setIncentiveLedger] = useState<IncentiveTrackerItem[]>([
    {
      id: 'INC-GOOGLE-CLOUD-AI-01',
      provider: 'Google for Startups',
      programName: 'Google Cloud for Startups: AI-First Tier',
      creditValue: 'Up to $350,000',
      numericCreditVal: 350000,
      status: 'Ready to Submit',
      deadline: 'Rolling 2026-2027',
      keyBenefits: ['Up to $350k Cloud & Vertex AI credits over 2 yrs', 'Google DeepMind mentor access', 'TPU v5e/v6 & NVIDIA GPU access', '1 year free Google Workspace Team'],
      notes: 'Directly applicable as ICEarth builds on Google Gemini, Vertex AI multimodal embeddings, and Google Cloud container infrastructure for environmental exposenomics.',
      applicationUrl: 'https://cloud.google.com/startup'
    },
    {
      id: 'INC-GOOGLE-ACCELERATOR-02',
      provider: 'Google for Startups',
      programName: 'Google for Startups Accelerator: Climate & AI',
      creditValue: '$100,000+ Non-Dilutive Mentorship',
      numericCreditVal: 100000,
      status: 'Planned',
      deadline: 'Q1 Cohort Cycle',
      keyBenefits: ['10-week equity-free intensive', 'Technical 1-on-1s with Google AI engineers', 'Design sprints for soil & water exposenomics', 'Investor showcase'],
      notes: 'Focus on environmental AI solutions, pediatric lead tracking, and Indigenous sovereign microgrid monitoring.',
      applicationUrl: 'https://startup.google.com/accelerator/'
    },
    {
      id: 'INC-ANTHROPIC-CLAUDE-03',
      provider: 'Anthropic Claude Startups',
      programName: 'Claude Startup Stack & Frontier Credits',
      creditValue: 'Up to $46,000',
      numericCreditVal: 46000,
      status: 'Drafting',
      deadline: 'Expanded Oct 6, 2026',
      keyBenefits: ['$45,000 Claude Startup Stack discounts', '$1,000 one-time API grant', '5 free Claude Team seats for 1 yr', 'Applied AI team office hours'],
      notes: 'Anthropic announced expansion on Oct 6, 2026 to counter Google and OpenAI. Useful as secondary evaluation sandbox.',
      applicationUrl: 'https://www.anthropic.com/startups'
    },
    {
      id: 'INC-INDIGENOUS-COMPUTE-04',
      provider: 'Indigenous Tech Grants',
      programName: 'Tribal Clean Energy & Sovereign Compute Grants',
      creditValue: '$250,000 Federal/Tribal Match',
      numericCreditVal: 250000,
      status: 'Drafting',
      deadline: '2026 Cycle',
      keyBenefits: ['DOE Indian Energy match funds', 'BIA sovereign data center subsidies', 'Rural microgrid deployment incentives', 'Zero-water compute mandates'],
      notes: 'Supports New Mexico tribal deployments in Taos Pueblo, Laguna Pueblo, and Jicarilla Apache lands under Roulet’s Law.',
      applicationUrl: 'https://www.energy.gov/indianenergy/office-indian-energy-policy-and-programs'
    }
  ]);

  const [newIncentive, setNewIncentive] = useState<Partial<IncentiveTrackerItem>>({
    provider: 'Google for Startups',
    programName: '',
    creditValue: '$50,000',
    numericCreditVal: 50000,
    status: 'Drafting',
    deadline: '2026-12-31',
    keyBenefits: ['Cloud Credits', 'Technical Support'],
    notes: '',
    applicationUrl: 'https://cloud.google.com/startup'
  });
  const [showAddModal, setShowAddModal] = useState(false);

  const vaultHash = '0xAI_STARTUP_INCENTIVES_GOOGLE_PROGRAMS_PLATE_70_VAULT_2026';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  const copyOutreachPitch = () => {
    const pitchText = `SUBJECT: Google for Startups Cloud AI Application — ICEarth (Indigenous Communities Earth / Environmental Exposenomics Platform Built with Gemini)

To the Google for Startups & DeepMind Partnerships Team,

I am writing on behalf of ICEarth (Indigenous Communities Earth), an advanced public-interest environmental exposenomics and sovereign technology platform built natively with Google technologies, designed by Gemini, and powered by Google Cloud.

ABOUT ICEARTH:
ICEarth (https://icearth.org / Swiss School of Exposenomics) is an AI-driven forensic intelligence platform dedicated to cataloging, modeling, and remediating chronic neurotoxic exposures—including lead (Pb), cadmium, arsenic, and PFAS—across frontline communities and sovereign tribal nations. 

WHY WE ARE AN IDEAL GOOGLE FOR STARTUPS AI-FIRST PARTNER:
1. Native Gemini Multimodal Architecture: ICEarth utilizes Gemini's native multimodality to process physical spectra (XRF soil readings, water heavy metal spectrometry, satellite thermal imaging) alongside historical municipal lead pipe registers dating back over a century.
2. 2,000,000-Token Forensic Context Window: We leverage Gemini's 2M token context capacity to ingest entire municipal water utility ledgers, EPA Toxic Release Inventories, and public health statutes simultaneously for automated legal tort and regulatory compliance.
3. Aligned with DeepMind Scientific Heritage: Following DeepMind COO Lila Ibrahim's mandate that the next generation must take an active role in technological transformation, ICEarth equips Indigenous youth and community researchers with Gemini cognitive tools to audit their local environments under Roulet's Law.
4. Clean Compute & Data Sovereignty: We develop closed-loop, 0-gal/day waterless edge compute architectures suitable for deployment on tribal reservations (New Mexico Pueblos, Navajo Nation, Cherokee Nation).

GOOGLE FOR STARTUPS INCENTIVES REQUEST:
We are requesting entry into the Google Cloud for Startups: AI-First Program (up to $350,000 in Google Cloud and Vertex AI credits over 2 years), as well as direct mentorship with Google DeepMind engineers to optimize our real-time toxic plume modeling and sovereign zero-knowledge cryptographic verification pipeline.

Primary Contact:
Norman Roulet
Founder & Chief Infomediary, ICEarth
Swiss School of Exposenomics
Email: rouletnorm@gmail.com
Platform URL: https://icearth.org / Dev URL: https://ais-dev-nnzrzhfvvedjfcsbci6446-116268305333.us-west2.run.app

We look forward to partnering with Google for Startups to scale this essential public-interest technology.`;

    navigator.clipboard.writeText(pitchText);
    setCopiedOutreach(true);
    setTimeout(() => setCopiedOutreach(false), 2500);
  };

  // Recharts Data: Comparative Program Benefits Matrix
  const programBenefitsData = [
    { name: 'Google Cloud AI', creditsK: 350, modelContextTokensK: 2000, mentorHours: 50, freeSeatsMonths: 12, sovereignFlexibility: 90 },
    { name: 'Anthropic Claude', creditsK: 46, modelContextTokensK: 200, mentorHours: 15, freeSeatsMonths: 12, sovereignFlexibility: 65 },
    { name: 'OpenAI Fund', creditsK: 100, modelContextTokensK: 128, mentorHours: 20, freeSeatsMonths: 6, sovereignFlexibility: 50 },
    { name: 'Tribal Clean Energy', creditsK: 250, modelContextTokensK: 500, mentorHours: 40, freeSeatsMonths: 24, sovereignFlexibility: 100 }
  ];

  // Radar Comparison: Architectural Value Dimension
  const radarComparisonData = [
    { attribute: 'Financial Credit Value', GoogleForStartups: 98, AnthropicClaude: 45, OpenAIStartups: 65 },
    { attribute: 'Context Window Size (2M)', GoogleForStartups: 100, AnthropicClaude: 65, OpenAIStartups: 55 },
    { attribute: 'Multimodal Forensic Depth', GoogleForStartups: 96, AnthropicClaude: 60, OpenAIStartups: 70 },
    { attribute: 'Scientific Heritage (AlphaFold)', GoogleForStartups: 100, AnthropicClaude: 50, OpenAIStartups: 40 },
    { attribute: 'Indigenous & Tribal Fit', GoogleForStartups: 92, AnthropicClaude: 55, OpenAIStartups: 45 },
    { attribute: 'Hardware Diversity (TPUs/GPUs)', GoogleForStartups: 95, AnthropicClaude: 40, OpenAIStartups: 60 }
  ];

  // Runway Projection: 24-Month Compute Spend vs. Startup Credit Coverage
  const runwayProjectionData = [
    { month: 'M1', selfFundedRunway: 15, creditCoveredRunway: 100, cumulativeCreditsUsed: 5 },
    { month: 'M4', selfFundedRunway: 12, creditCoveredRunway: 100, cumulativeCreditsUsed: 25 },
    { month: 'M8', selfFundedRunway: 9, creditCoveredRunway: 100, cumulativeCreditsUsed: 65 },
    { month: 'M12', selfFundedRunway: 6, creditCoveredRunway: 100, cumulativeCreditsUsed: 120 },
    { month: 'M16', selfFundedRunway: 4, creditCoveredRunway: 95, cumulativeCreditsUsed: 190 },
    { month: 'M20', selfFundedRunway: 2, creditCoveredRunway: 90, cumulativeCreditsUsed: 260 },
    { month: 'M24', selfFundedRunway: 1, creditCoveredRunway: 85, cumulativeCreditsUsed: 320 }
  ];

  const totalTrackedCredits = incentiveLedger.reduce((sum, item) => sum + item.numericCreditVal, 0);

  const toggleStatus = (id: string) => {
    setIncentiveLedger(prev => prev.map(item => {
      if (item.id === id) {
        const statuses: IncentiveTrackerItem['status'][] = ['Drafting', 'Ready to Submit', 'Under Review', 'Approved', 'Active', 'Planned'];
        const currentIdx = statuses.indexOf(item.status);
        const nextStatus = statuses[(currentIdx + 1) % statuses.length];
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  const handleAddIncentive = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIncentive.programName) return;
    const item: IncentiveTrackerItem = {
      id: `INC-CUSTOM-${Date.now().toString().slice(-4)}`,
      provider: newIncentive.provider as any || 'Google for Startups',
      programName: newIncentive.programName || 'New Incentive Program',
      creditValue: newIncentive.creditValue || '$50,000',
      numericCreditVal: Number(newIncentive.numericCreditVal) || 50000,
      status: (newIncentive.status as any) || 'Drafting',
      deadline: newIncentive.deadline || '2026-12-31',
      keyBenefits: newIncentive.keyBenefits || ['Cloud Credits', 'Mentorship'],
      notes: newIncentive.notes || 'Added to development planning tracker.',
      applicationUrl: newIncentive.applicationUrl || 'https://cloud.google.com/startup'
    };
    setIncentiveLedger(prev => [item, ...prev]);
    setShowAddModal(false);
    setNewIncentive({
      provider: 'Google for Startups',
      programName: '',
      creditValue: '$50,000',
      numericCreditVal: 50000,
      status: 'Drafting',
      deadline: '2026-12-31',
      keyBenefits: ['Cloud Credits', 'Technical Support'],
      notes: '',
      applicationUrl: 'https://cloud.google.com/startup'
    });
  };

  return (
    <div className={`min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans ${
      siteTheme === 'dark' ? 'bg-neutral-950 text-neutral-100' : 'bg-stone-50 text-stone-900'
    }`}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HEADER HERO BANNER */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-stone-950 border border-indigo-800/40 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 font-mono text-xs font-bold tracking-wide">
                <Sparkles size={14} className="text-indigo-400 animate-pulse" />
                <span>PLATE #70 • AI STARTUP PROGRAMS & DEVELOPER INCENTIVES</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.cnbc.com/2026/10/06/anthropic-claude-startups-program.html"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/40 text-amber-300 font-mono text-xs font-bold transition-all"
                >
                  <FileText size={12} />
                  <span>CNBC Startup Dispatch (Oct 6, 2026)</span>
                  <ExternalLink size={11} />
                </a>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 font-mono text-xs transition-all cursor-pointer"
                >
                  <Maximize2 size={12} />
                  <span>View Plate #70</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl font-black font-serif tracking-tight text-white leading-tight">
                AI Startup Programs & Sovereign Developer Incentives
              </h1>
              <p className="text-base sm:text-lg text-indigo-200/90 max-w-4xl font-sans leading-relaxed">
                As Anthropic expands its Claude Startups program to compete with Google and OpenAI, ICEarth establishes our roadmap to leverage the <span className="text-white font-bold underline decoration-indigo-400">Google Cloud for Startups: AI-First Program</span> (up to $350,000 in compute credits and DeepMind engineering mentorship). Built on Gemini to remediate heavy metal neurotoxicity and empower Indigenous data sovereignty, ICEarth is actively tracking and integrating these incentives into our sovereign development plan under Roulet’s Law.
              </p>
            </div>

            {/* METRICS ROW */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-indigo-800/40">
              <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-700/30">
                <span className="text-[10px] font-mono uppercase text-indigo-400 block font-bold">Google Cloud AI Credits</span>
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">Up to $350K</span>
                <span className="text-[10px] text-indigo-300/80 block mt-1">2-Yr Vertex AI & TPU/GPU compute</span>
              </div>
              <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-700/30">
                <span className="text-[10px] font-mono uppercase text-amber-400 block font-bold">Anthropic Claude Stack</span>
                <span className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">$46,000</span>
                <span className="text-[10px] text-amber-200/80 block mt-1">$45k Stack + $1k API + 5 Team seats</span>
              </div>
              <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-700/30">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block font-bold">Tracked Pipeline Total</span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-300 font-mono">${(totalTrackedCredits / 1000).toFixed(0)}K</span>
                <span className="text-[10px] text-emerald-200/80 block mt-1">4 Active & planned programs</span>
              </div>
              <div className="bg-indigo-950/60 p-4 rounded-2xl border border-indigo-700/30">
                <span className="text-[10px] font-mono uppercase text-cyan-400 block font-bold">Gemini Context Window</span>
                <span className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">2,000,000</span>
                <span className="text-[10px] text-cyan-200/80 block mt-1">Tokens for century-scale ledgers</span>
              </div>
            </div>
          </div>
        </div>

        {/* SUBTAB NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
          <button
            onClick={() => setActiveSubTab('programs_overview')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'programs_overview'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Layers size={15} />
            <span>1. Programs Overview & Anthropic News</span>
          </button>
          <button
            onClick={() => setActiveSubTab('google_startup_deepdive')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'google_startup_deepdive'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Sparkles size={15} />
            <span>2. Google for Startups Deep Dive</span>
          </button>
          <button
            onClick={() => setActiveSubTab('incentive_tracker')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'incentive_tracker'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Briefcase size={15} />
            <span>3. Development Planning & Incentive Ledger</span>
          </button>
          <button
            onClick={() => setActiveSubTab('direct_outreach')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'direct_outreach'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Send size={15} />
            <span>4. Direct Outreach Pitch Generator</span>
          </button>
          <button
            onClick={() => setActiveSubTab('comparison_matrix')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeSubTab === 'comparison_matrix'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Scale size={15} />
            <span>5. Ecosystem Comparison & Visual Analytics</span>
          </button>
        </div>

        {/* TAB 1: PROGRAMS OVERVIEW & ANTHROPIC EXPANSION */}
        {activeSubTab === 'programs_overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Anthropic Expansion */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-400 font-mono text-xs font-bold border border-amber-500/20">
                    CNBC REPORT • OCT 6, 2026
                  </span>
                  <Flame size={18} className="text-amber-500" />
                </div>
                <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-white">
                  Anthropic Expands Claude Startups Program
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Anthropic announced on Tuesday an aggressive expansion of its Claude Startups program to lock in early-stage developers as it gears up for an anticipated IPO. As Beth Robertson (Head of Startups at Anthropic) stated to CNBC:
                </p>
                <blockquote className="p-3 bg-amber-50 dark:bg-neutral-800/70 rounded-xl border-l-4 border-amber-500 text-xs italic text-stone-700 dark:text-stone-200">
                  “Startups are often the first to push Claude to its limits... Claude Startups gives founders credits, tools and direct time with our team, so more companies can build this way from the start.”
                </blockquote>
                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-neutral-800 text-xs font-mono">
                  <div className="flex justify-between text-stone-500">
                    <span>Claude Startup Stack:</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">$45,000</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>One-Time API Grant:</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">$1,000</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Team Premium Seats:</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">5 Seats (1 Year Free)</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Google for Startups Counterweight */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-indigo-200 dark:border-indigo-900/60 shadow-sm space-y-4 ring-2 ring-indigo-500/20">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold border border-indigo-500/20">
                    PRIMARY MATCH FOR ICEARTH
                  </span>
                  <Sparkles size={18} className="text-indigo-500" />
                </div>
                <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-white">
                  Google Cloud for Startups: AI-First Program
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  CNBC explicitly notes Anthropic has spent the past year attempting to fend off Google’s premier program. Google Cloud for Startups offers unmatched computational horsepower for startups building natively on Gemini:
                </p>
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl border-l-4 border-indigo-500 text-xs text-stone-700 dark:text-stone-200 space-y-1">
                  <div className="font-bold text-indigo-900 dark:text-indigo-300">Tier Benefits:</div>
                  <p>• Up to $350,000 in Cloud & Vertex AI credits for AI-first startups across 2 years.</p>
                  <p>• Dedicated technical access to DeepMind researchers and Google AI Startup Architects.</p>
                  <p>• Access to Cloud TPUs (v5e/v6) & NVIDIA H100/A100 clusters.</p>
                </div>
                <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-neutral-800 text-xs font-mono">
                  <div className="flex justify-between text-stone-500">
                    <span>Maximum Credits:</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">$350,000</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Foundational Model:</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">Gemini 1.5 Pro (2M Tokens)</span>
                  </div>
                  <div className="flex justify-between text-stone-500">
                    <span>Scientific Heritage:</span>
                    <span className="font-bold text-stone-800 dark:text-stone-200">DeepMind / AlphaFold</span>
                  </div>
                </div>
              </div>

              {/* Card 3: The ICEarth Strategic Fit */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                    WHY ICEARTH QUALIFIES
                  </span>
                  <ShieldCheck size={18} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-white">
                  Why ICEarth Is the Ideal AI Startup Partner
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  ICEarth is not a consumer toy or speculative synthetic assistant—we are a public-interest startup architected from the first line of code using Google technologies and Gemini:
                </p>
                <div className="space-y-2 text-xs font-mono text-stone-600 dark:text-stone-300">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900 dark:text-white">Built by Gemini:</strong> Designing and deploying complete sovereign modules using Gemini models.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900 dark:text-white">Physical Exposenomics:</strong> Correlating soil XRF spectra, water quality assays, and blood lead levels.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-stone-900 dark:text-white">Indigenous Sovereignty:</strong> Waterless edge compute for New Mexico Pueblos and Sovereign Nations under Roulet’s Law.</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-stone-100 dark:border-neutral-800">
                  <button
                    onClick={() => setActiveSubTab('direct_outreach')}
                    className="w-full py-2 px-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl font-bold font-mono text-xs flex items-center justify-center gap-1.5 hover:bg-stone-800 transition-colors cursor-pointer"
                  >
                    <span>Generate Direct Outreach Pitch</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

            </div>

            {/* STRATEGIC CONTEXT BANNER */}
            <div className="p-6 rounded-3xl bg-indigo-950/40 border border-indigo-800/40 text-indigo-100 space-y-3">
              <div className="flex items-center gap-2 font-mono text-sm font-bold text-indigo-300">
                <Globe size={18} className="text-indigo-400" />
                <span>The Sovereign Tech Ecosystem: Why Startups Must Refuse Monopoly Lock-In</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                As CNBC highlights, big AI labs are pouring hundreds of millions into startup credits to lock emerging companies into their closed ecosystems. While OpenAI forces proprietary closed APIs and Anthropic pushes its Claude Startup Stack, Google Cloud for Startups provides open container deployments, Kubernetes orchestration, Vertex AI multi-model endpoints, and seamless integration with zero-knowledge cryptographic enclaves. Under Roulet’s Law, ICEarth accepts non-dilutive compute grants while preserving 100% data sovereignty and open-source auditability for our communities.
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: GOOGLE FOR STARTUPS DEEP DIVE */}
        {activeSubTab === 'google_startup_deepdive' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-6">
              <div className="border-b border-stone-200 dark:border-neutral-800 pb-4">
                <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold border border-indigo-500/20">
                  APPLICATION BLUEPRINT
                </span>
                <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900 dark:text-white mt-2">
                  Google for Startups Cloud Program: How to Apply & Secure $350,000 in Compute
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans mt-1">
                  Step-by-step roadmap for ICEarth and our partner Indigenous communities to enroll in Google’s premier developer program.
                </p>
              </div>

              {/* 4 Steps to Apply */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200 dark:border-neutral-700 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">1</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Verify Eligibility</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    • Founded within past 5 years.<br />
                    • Not yet received $100k+ in Google Cloud credits.<br />
                    • Building a proprietary software or AI platform.<br />
                    • Affiliated with an incubator or verified domain.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200 dark:border-neutral-700 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">2</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Select AI-First Track</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    • Apply for the <strong>AI-First tier</strong> (up to $350k).<br />
                    • Detail Gemini API integration.<br />
                    • Specify Vertex AI pipeline for soil/water XRF data.<br />
                    • Highlight 2M token context window use-case.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200 dark:border-neutral-700 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">3</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Submit Documentation</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    • Provide active website (icearth.org).<br />
                    • Link GitHub / Cloud Run deployment.<br />
                    • Include corporate email: <code>rouletnorm@gmail.com</code>.<br />
                    • Include letter of intent from tribal/community partners.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200 dark:border-neutral-700 space-y-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center">4</div>
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white">Onboard & Activate</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    • Year 1: Up to $100k-$250k credits issued.<br />
                    • Year 2: 20% discount up to $100k additional.<br />
                    • Access Google DeepMind office hours.<br />
                    • Activate Google Workspace Team free for 1 year.
                  </p>
                </div>
              </div>

              {/* Direct Link Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-indigo-900/60 to-purple-950/60 border border-indigo-700/40">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-indigo-300 font-bold uppercase">Official Application Portal:</span>
                  <div className="text-sm sm:text-base font-bold text-white font-mono">https://cloud.google.com/startup</div>
                  <p className="text-xs text-indigo-200 font-sans">Applications are processed on a rolling basis with decisions typically issued in 3–5 business days.</p>
                </div>
                <a
                  href="https://cloud.google.com/startup"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white font-mono font-bold text-xs rounded-xl shadow-lg border border-indigo-300 transition-all flex items-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Open Google Cloud Application</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: INCENTIVE TRACKER & DEVELOPMENT LEDGER */}
        {activeSubTab === 'incentive_tracker' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-neutral-800 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-bold border border-emerald-500/20">
                    DEVELOPMENT PLANNING LEDGER
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900 dark:text-white mt-1">
                    AI Startup Incentive Tracker & Compute Runway
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans">
                    Track application status, deadlines, credit valuations, and redemption milestones as ICEarth proceeds.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowAddModal(true)}
                    className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs rounded-xl shadow flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Plus size={14} />
                    <span>Add Incentive Program</span>
                  </button>
                </div>
              </div>

              {/* INCENTIVE CARDS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {incentiveLedger.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-stone-50 dark:bg-neutral-800/60 border border-stone-200 dark:border-neutral-700 space-y-3 relative group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono uppercase text-indigo-600 dark:text-indigo-400 font-bold block">
                          {item.provider}
                        </span>
                        <h4 className="font-bold text-base text-stone-900 dark:text-white">{item.programName}</h4>
                      </div>
                      <button
                        onClick={() => toggleStatus(item.id)}
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wide cursor-pointer border transition-all ${
                          item.status === 'Approved' || item.status === 'Active'
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
                            : item.status === 'Ready to Submit'
                            ? 'bg-indigo-500/20 text-indigo-400 border-indigo-500/40'
                            : item.status === 'Under Review'
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                            : 'bg-stone-500/20 text-stone-400 border-stone-500/40'
                        }`}
                        title="Click to cycle status"
                      >
                        ● {item.status}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono py-1 px-2.5 rounded-lg bg-stone-200/50 dark:bg-neutral-900/50">
                      <span className="text-stone-500">Valuation:</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{item.creditValue}</span>
                      <span className="text-stone-400">|</span>
                      <span className="text-stone-500">Deadline:</span>
                      <span className="font-bold text-stone-700 dark:text-stone-300">{item.deadline}</span>
                    </div>

                    <div className="space-y-1 text-xs text-stone-600 dark:text-stone-300">
                      <div className="font-mono text-[11px] font-bold text-stone-500 uppercase">Key Benefits:</div>
                      <ul className="list-disc list-inside space-y-0.5 text-[11px] font-sans">
                        {item.keyBenefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-[11px] font-sans italic text-stone-500 dark:text-stone-400 border-t border-stone-200/60 dark:border-neutral-700 pt-2">
                      Notes: {item.notes}
                    </p>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-[10px] font-mono text-stone-400">{item.id}</span>
                      <a
                        href={item.applicationUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        <span>Apply Portal</span>
                        <ExternalLink size={11} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* RUNWAY ACCELERATION CHART */}
              <div className="pt-6 border-t border-stone-200 dark:border-neutral-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold font-serif text-lg text-stone-900 dark:text-white">
                    24-Month Compute Runway Projection: Self-Funded vs. Startup Credit Acceleration
                  </h4>
                  <span className="text-xs font-mono text-indigo-500">Projection Model v2.4</span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={runwayProjectionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="creditColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="selfColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" stroke="#888" />
                      <YAxis stroke="#888" unit="%" />
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <Tooltip />
                      <Legend />
                      <Area type="monotone" dataKey="creditCoveredRunway" name="Runway with $350k Google Credits (%)" stroke="#6366f1" fillOpacity={1} fill="url(#creditColor)" />
                      <Area type="monotone" dataKey="selfFundedRunway" name="Unsubsidized Baseline Runway (%)" stroke="#f59e0b" fillOpacity={1} fill="url(#selfColor)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 4: DIRECT OUTREACH PITCH GENERATOR */}
        {activeSubTab === 'direct_outreach' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 p-6 sm:p-8 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-neutral-800 pb-4">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 font-mono text-xs font-bold border border-indigo-500/20">
                    DIRECT ENGAGEMENT PIPELINE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black font-serif text-stone-900 dark:text-white mt-1">
                    Direct Outreach: ICEarth to Google for Startups Team
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans">
                    Pre-drafted, tailored executive pitch presenting ICEarth as a lighthouse AI-first case study for Gemini and Google Cloud.
                  </p>
                </div>

                <button
                  onClick={copyOutreachPitch}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white font-mono font-bold text-xs rounded-xl shadow flex items-center gap-2 cursor-pointer transition-all"
                >
                  {copiedOutreach ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
                  <span>{copiedOutreach ? 'Pitch Copied to Clipboard!' : 'Copy Full Outreach Pitch'}</span>
                </button>
              </div>

              {/* PITCH BOX */}
              <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-neutral-800 font-mono text-xs leading-relaxed space-y-4">
                <div className="text-indigo-600 dark:text-indigo-400 font-bold pb-2 border-b border-stone-200 dark:border-neutral-800">
                  SUBJECT: Google for Startups Cloud AI Application — ICEarth (Indigenous Communities Earth / Environmental Exposenomics Platform Built with Gemini)
                </div>

                <div className="space-y-3 text-stone-800 dark:text-stone-300 font-sans text-xs sm:text-sm">
                  <p><strong>To:</strong> Google for Startups Cloud AI Selection Committee & Google DeepMind Partnerships</p>
                  
                  <p>
                    I am writing on behalf of <strong>ICEarth (Indigenous Communities Earth)</strong>, an advanced public-interest environmental exposenomics and sovereign technology platform built natively with Google technologies, designed by Gemini, and deployed on Google Cloud.
                  </p>

                  <h5 className="font-bold text-stone-900 dark:text-white pt-2 font-mono">1. WHY ICEARTH QUALIFIES AS A LIGHTHOUSE AI-FIRST STARTUP:</h5>
                  <ul className="list-disc list-inside space-y-1.5 pl-2">
                    <li><strong>Built by Gemini:</strong> From architecture to real-time analysis, ICEarth showcases what autonomous, high-integrity development looks like using Google’s premier frontier models.</li>
                    <li><strong>Physical Exposenomics Forensics:</strong> We leverage Gemini’s native multimodality to correlate soil XRF spectrometry, water heavy metal assays (Pb, Cd, As), and satellite thermal scans with local epidemiology.</li>
                    <li><strong>2,000,000-Token Forensic Context:</strong> We ingest and query entire centuries of municipal water utility ledger books and EPA TRI records simultaneously.</li>
                    <li><strong>Indigenous Sovereignty & Roulet’s Law:</strong> We develop zero-water, clean-compute microgrids that empower tribal nations (New Mexico Pueblos, Navajo Nation, Cherokee Nation) to govern their own data.</li>
                  </ul>

                  <h5 className="font-bold text-stone-900 dark:text-white pt-2 font-mono">2. ALIGNMENT WITH GOOGLE DEEPMIND AI READINESS:</h5>
                  <p>
                    DeepMind COO Lila Ibrahim recently emphasized that society’s next generation must actively participate in how AI transforms their lives. ICEarth puts this philosophy into direct practice—equipping youth in frontline communities with Google cognitive tools to audit environmental harms and demand regulatory justice.
                  </p>

                  <h5 className="font-bold text-stone-900 dark:text-white pt-2 font-mono">3. INCENTIVES & PARTNERSHIP REQUEST:</h5>
                  <p>
                    We formally request admission into the <strong>Google Cloud for Startups: AI-First Program</strong> for up to $350,000 in Google Cloud and Vertex AI credits across 2 years, accompanied by technical mentorship from DeepMind researchers.
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-[11px] text-stone-500 font-mono">
                  <span>Signatory: Norman Roulet • Founder & Chief Infomediary, ICEarth</span>
                  <span>Contact: rouletnorm@gmail.com</span>
                </div>
              </div>

              {/* ACTION CALLOUT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:cloud-startups-support@google.com?subject=Google%20for%20Startups%20Cloud%20AI%20Application%20%E2%80%94%20ICEarth&body=Please%20see%20the%20attached%20application%20for%20ICEarth%20(Indigenous%20Communities%20Earth)."
                  className="p-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-mono font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <Send size={15} />
                  <span>Send Direct Email to Google Startups Team</span>
                </a>
                <button
                  onClick={() => {
                    if (onNavigateTab) onNavigateTab('deepmind_readiness');
                  }}
                  className="p-4 rounded-2xl bg-stone-200 dark:bg-neutral-800 hover:bg-stone-300 dark:hover:bg-neutral-700 text-stone-900 dark:text-white font-mono font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles size={15} className="text-cyan-400" />
                  <span>Review DeepMind Readiness Doctrine (Plate #68)</span>
                </button>
              </div>

            </div>
          </div>
        )}

        {/* TAB 5: ECOSYSTEM COMPARISON & VISUAL ANALYTICS */}
        {activeSubTab === 'comparison_matrix' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Radar: Architectural Dimensions */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-indigo-500 font-bold uppercase">Multi-Axis Comparison</span>
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-white">
                    Architectural Capability: Google vs. Anthropic vs. OpenAI
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">
                    Evaluating AI startup programs across credit volume, multimodal depth, and sovereign self-determination.
                  </p>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarComparisonData}>
                      <PolarGrid stroke="#888" opacity={0.3} />
                      <PolarAngleAxis dataKey="attribute" tick={{ fill: '#888', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Google for Startups" dataKey="GoogleForStartups" stroke="#6366f1" fill="#6366f1" fillOpacity={0.6} />
                      <Radar name="Anthropic Claude" dataKey="AnthropicClaude" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                      <Radar name="OpenAI Startups" dataKey="OpenAIStartups" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bar Chart: Dollar Value & Context Length */}
              <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-4">
                <div className="space-y-1">
                  <span className="font-mono text-xs text-emerald-500 font-bold uppercase">Quantitative Grants</span>
                  <h3 className="text-xl font-bold font-serif text-stone-900 dark:text-white">
                    Total Cloud Credits ($K) Across AI Startup Programs
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">
                    Comparing dollar-equivalent grants provided to qualifying early-stage AI founders.
                  </p>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={programBenefitsData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                      <YAxis unit="k" />
                      <Tooltip />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar dataKey="creditsK" name="Credits Val ($K)" fill="#6366f1" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

            </div>

            {/* SUMMARY TABLE */}
            <div className="bg-white dark:bg-neutral-900 p-6 rounded-3xl border border-stone-200 dark:border-neutral-800 shadow-sm space-y-4">
              <h4 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
                Comprehensive AI Startup Incentives Comparison Matrix
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-stone-200 dark:border-neutral-800 text-stone-400">
                      <th className="py-2.5 px-3">Program</th>
                      <th className="py-2.5 px-3">Max Credits</th>
                      <th className="py-2.5 px-3">Duration</th>
                      <th className="py-2.5 px-3">AI Model Access</th>
                      <th className="py-2.5 px-3">Engineering Mentorship</th>
                      <th className="py-2.5 px-3">Community / Sovereign Fit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100 dark:divide-neutral-800 text-stone-700 dark:text-stone-300">
                    <tr className="bg-indigo-50/50 dark:bg-indigo-950/20 font-bold">
                      <td className="py-3 px-3 text-indigo-600 dark:text-indigo-400">Google Cloud AI-First</td>
                      <td className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-black">Up to $350,000</td>
                      <td className="py-3 px-3">2 Years (Yr 1 credit + Yr 2 discount)</td>
                      <td className="py-3 px-3">Gemini 1.5 Pro / Flash (2M Context)</td>
                      <td className="py-3 px-3">Google DeepMind + Cloud AI Architects</td>
                      <td className="py-3 px-3 text-emerald-500">★★★★★ (Primary Anchor)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-amber-600 dark:text-amber-400">Anthropic Claude Startups</td>
                      <td className="py-3 px-3">$46,000</td>
                      <td className="py-3 px-3">1 Year (5 Team seats)</td>
                      <td className="py-3 px-3">Claude 3.5 Sonnet (200k Context)</td>
                      <td className="py-3 px-3">Applied AI Office Hours</td>
                      <td className="py-3 px-3 text-amber-500">★★★☆☆ (Secondary Evaluation)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-red-600 dark:text-red-400">OpenAI Startup Fund</td>
                      <td className="py-3 px-3">Varies ($25k-$100k)</td>
                      <td className="py-3 px-3">1 Year</td>
                      <td className="py-3 px-3">GPT-4o (128k Context)</td>
                      <td className="py-3 px-3">OpenAI Technical Staff</td>
                      <td className="py-3 px-3 text-red-500">★★☆☆☆ (Monopoly Risk)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-3 text-cyan-600 dark:text-cyan-400">Tribal / DOE Energy Grants</td>
                      <td className="py-3 px-3">$250,000+</td>
                      <td className="py-3 px-3">Multi-Year Federal/Tribal Match</td>
                      <td className="py-3 px-3">On-Prem Edge Sovereign Gemini</td>
                      <td className="py-3 px-3">Tribal Council / Energy Engineers</td>
                      <td className="py-3 px-3 text-emerald-500">★★★★★ (Sovereign Infrastructure)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* LIGHTBOX MODAL FOR PLATE #70 */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-400 font-mono text-xs font-bold border border-indigo-500/30">
                    PLATE #70
                  </span>
                  <h3 className="text-lg font-bold text-white font-serif">
                    AI Startup Programs, Developer Incentives & Google for Startups Roadmap
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="max-h-[65vh] overflow-hidden rounded-2xl bg-black flex items-center justify-center">
                <img
                  src={aiStartupPlateImg}
                  alt="Plate #70 AI Startup Programs & Sovereign Developer Incentives"
                  className="max-h-[65vh] w-auto object-contain rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-stone-400">
                <div className="flex items-center gap-2">
                  <span>Cryptographic Vault Hash:</span>
                  <span className="text-indigo-400 font-bold">{vaultHash}</span>
                  <button
                    onClick={copyVaultHash}
                    className="p-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 cursor-pointer"
                    title="Copy Vault Hash"
                  >
                    {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-stone-500">Classification:</span>
                  <span className="text-amber-400">Sovereign Developer Incentives IP (Roulet’s Law)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADD INCENTIVE MODAL */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="relative max-w-lg w-full bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-neutral-800 pb-3">
                <h3 className="text-lg font-bold font-serif text-stone-900 dark:text-white">
                  Add Incentive / Grant to Ledger
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="p-1.5 rounded-lg bg-stone-100 dark:bg-neutral-800 text-stone-500 cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <form onSubmit={handleAddIncentive} className="space-y-3 font-mono text-xs">
                <div>
                  <label className="block text-stone-600 dark:text-stone-400 mb-1">Provider:</label>
                  <select
                    value={newIncentive.provider}
                    onChange={(e) => setNewIncentive({ ...newIncentive, provider: e.target.value as any })}
                    className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-stone-900 dark:text-white"
                  >
                    <option value="Google for Startups">Google for Startups</option>
                    <option value="Anthropic Claude Startups">Anthropic Claude Startups</option>
                    <option value="OpenAI Startup Fund">OpenAI Startup Fund</option>
                    <option value="Indigenous Tech Grants">Indigenous Tech Grants</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-600 dark:text-stone-400 mb-1">Program Name:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Google for Startups Accelerator"
                    value={newIncentive.programName}
                    onChange={(e) => setNewIncentive({ ...newIncentive, programName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-stone-900 dark:text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-stone-600 dark:text-stone-400 mb-1">Credit Valuation:</label>
                    <input
                      type="text"
                      placeholder="$100,000"
                      value={newIncentive.creditValue}
                      onChange={(e) => setNewIncentive({ ...newIncentive, creditValue: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-stone-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-600 dark:text-stone-400 mb-1">Deadline:</label>
                    <input
                      type="text"
                      placeholder="Q4 2026"
                      value={newIncentive.deadline}
                      onChange={(e) => setNewIncentive({ ...newIncentive, deadline: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-stone-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-600 dark:text-stone-400 mb-1">Notes / Strategic Intent:</label>
                  <textarea
                    rows={2}
                    placeholder="Why this aligns with ICEarth development..."
                    value={newIncentive.notes}
                    onChange={(e) => setNewIncentive({ ...newIncentive, notes: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-stone-100 dark:bg-neutral-800 border border-stone-200 dark:border-neutral-700 text-stone-900 dark:text-white"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl bg-stone-200 dark:bg-neutral-800 text-stone-700 dark:text-stone-300 font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold"
                  >
                    Save to Ledger
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
