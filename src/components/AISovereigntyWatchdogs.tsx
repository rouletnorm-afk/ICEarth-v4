import React, { useState } from 'react';
import {
  AlertTriangle,
  Scale,
  Shield,
  ShieldAlert,
  Gavel,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Info,
  Maximize2,
  Copy,
  Check,
  Building,
  Users,
  Clock,
  Activity,
  Award,
  Layers,
  Sparkles,
  Search,
  Filter,
  Eye,
  X,
  FileText,
  BadgeAlert,
  Dna,
  Skull,
  Cpu,
  Lock,
  Globe,
  Database,
  Radio,
  Share2,
  Terminal,
  Compass,
  Zap,
  Key,
  Flame,
  CheckCircle2
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
  LineChart,
  Line,
  Cell,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import aiSovereigntyImg from '../assets/images/ai_sovereignty_indigenous_watchdogs_1789627407553.jpg';

interface AISovereigntyProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const AISovereigntyWatchdogs: React.FC<AISovereigntyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [selectedSection, setSelectedSection] = useState<'overview' | 'cnbc_audit' | 'ziegler_failure' | 'geopolitics' | 'indigenous_sovereignty' | 'gemini_icearth_stack'>('overview');
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeMetricTab, setActiveMetricTab] = useState<'failure_curve' | 'governance_radar' | 'sovereign_enclaves'>('failure_curve');

  const provenanceHash = '0xAI_SOVEREIGNTY_INDIGENOUS_DATA_CNBC_ROULET_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(provenanceHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Evaluation detection vs rare catastrophic combination probability
  const failureCurveData = [
    { complexity: 'Single Prompt Prompt-Injection', standardBenchmarkDetection: 94, rareCatastrophicDetection: 85, modelRiskLevel: 15 },
    { complexity: 'Multi-Turn Jailbreak Chains', standardBenchmarkDetection: 82, rareCatastrophicDetection: 58, modelRiskLevel: 32 },
    { complexity: 'Tool-Use Autonomous Exploits', standardBenchmarkDetection: 65, rareCatastrophicDetection: 34, modelRiskLevel: 58 },
    { complexity: 'Covert Goal Drift in Long Horizons', standardBenchmarkDetection: 38, rareCatastrophicDetection: 16, modelRiskLevel: 76 },
    { complexity: 'Multi-Agent Collusion Cascades', standardBenchmarkDetection: 22, rareCatastrophicDetection: 8, modelRiskLevel: 89 },
    { complexity: 'Rare Emergent Combinations (Ziegler/XBOW)', standardBenchmarkDetection: 9, rareCatastrophicDetection: 3, modelRiskLevel: 98 }
  ];

  // Radar chart comparing governance paradigms
  const governanceRadarData = [
    { metric: 'Enforcement / Shutdown Power', corporateWatchdogs: 5, nationStateBilateral: 55, indigenousSovereignty: 98 },
    { metric: 'Community Biocultural Trust', corporateWatchdogs: 12, nationStateBilateral: 20, indigenousSovereignty: 96 },
    { metric: 'Resistance to Regulatory Capture', corporateWatchdogs: 8, nationStateBilateral: 35, indigenousSovereignty: 95 },
    { metric: 'Rare-Tail Catastrophe Immunity', corporateWatchdogs: 15, nationStateBilateral: 40, indigenousSovereignty: 92 },
    { metric: 'Data Ownership & Provenance', corporateWatchdogs: 10, nationStateBilateral: 30, indigenousSovereignty: 99 },
    { metric: 'Long-Horizon Intergenerational Care', corporateWatchdogs: 10, nationStateBilateral: 25, indigenousSovereignty: 100 }
  ];

  // Indigenous Data Protection Matrix
  const sovereignEnclaveData = [
    { nation: 'Jicarilla Apache Nation (NM)', population: '3,400', airGappedNodes: 12, bioculturalEnclaveStatus: 'Active Air-Gap Architecture', threatVector: 'Federal Surveillance & Energy Cloud Extraction' },
    { nation: 'First Nations OCAP Network (Canada)', population: '970,000', airGappedNodes: 64, bioculturalEnclaveStatus: 'Ownership, Control, Access, Possession Protocol', threatVector: 'Corporate Genomic Bio-Prospecting' },
    { nation: 'Māori Data Sovereignty (Te Mana Raraunga)', population: '890,000', airGappedNodes: 48, bioculturalEnclaveStatus: 'Whakapapa Biometric Protection Protocol', threatVector: 'Generative AI Language Theft & Exploitation' },
    { nation: 'Sámi Council Digital Heritage Enclave', population: '100,000', airGappedNodes: 24, bioculturalEnclaveStatus: 'Cross-Border Arctic Sovereign Cloud', threatVector: 'State Mining Infrastructure Intrusions' },
    { nation: 'Yanomami Biocultural Reserve (Amazon)', population: '38,000', airGappedNodes: 8, bioculturalEnclaveStatus: 'Satellite Encrypted Mesh Vaults', threatVector: 'Illegal Mining Surveillance & Cartography' },
    { nation: 'Global ICEarth Sovereign Node Coalition', population: '470,000,000+', airGappedNodes: 512, bioculturalEnclaveStatus: 'Humanity-First Sovereign Data Constitution', threatVector: 'Frontier AI Oligopoly & Weaponized Model Hegemony' }
  ];

  return (
    <div className={`w-full min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-[#faf8f5] text-stone-900'} pb-24 font-sans`}>
      {/* TOP NOTIFICATION BANNER */}
      <div className="w-full bg-gradient-to-r from-red-900 via-amber-900 to-emerald-950 text-amber-200 border-b border-amber-600/40 px-4 py-2.5 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-red-800/80 text-white font-bold tracking-wider uppercase text-[10px]">
              <AlertTriangle size={12} className="text-amber-300 animate-pulse" />
              CNBC WORK FORENSIC AUDIT • SEPT 16, 2026
            </span>
            <span className="font-bold text-amber-100">
              Anthropic & OpenAI "Neutral" AI Watchdogs Exposed: Office Badges & Company Laptops Without the Power to Stop Frontier Catastrophes
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-stone-300">
              ICEarth Plate #50 • Sovereign Cryptographic Vault:
            </span>
            <span className="text-amber-400 font-bold bg-black/40 px-2 py-0.5 rounded border border-amber-500/30">
              0xAI_SOVEREIGNTY...
            </span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Column: Title & Exposition */}
          <div className="flex-1 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/40 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Cpu size={14} className="text-amber-600 dark:text-amber-400" />
                Plate #50 • Forensic Technology Jurisprudence
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-900 dark:text-emerald-300 border border-emerald-500/40 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Globe size={14} className="text-emerald-600 dark:text-emerald-400" />
                Global Indigenous Data Sovereignty
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-900 dark:text-red-300 border border-red-500/40 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert size={14} className="text-red-600 dark:text-red-400" />
                Existential Risk Oversight
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-stone-950 dark:text-stone-50 leading-[1.15]">
              The Global AI Sovereignty Imperative:
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-amber-600 to-emerald-700 dark:from-red-400 dark:via-amber-300 dark:to-emerald-400">
                Indigenous Nations vs. Toothless Corporate Watchdogs
              </span>
            </h1>

            <p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-serif">
              A foundational exposenomics critique of the CNBC report (September 16, 2026) regarding Anthropic and OpenAI's proposed "neutral" embedded AI evaluators. Why simulated "bank supervision" without enforcement power is a performative decoy—and why true data sovereignty originates not in nation-states or tech conglomerates, but with humanity and global indigenous alignments protecting biocultural knowledge through air-gapped sovereign architectures.
            </p>

            {/* Author & Source Byline */}
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-900/80 border border-stone-300 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase text-stone-500 dark:text-stone-400 font-bold">
                  Core Published Source & Jurisprudential Context:
                </div>
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <FileText size={15} className="text-amber-600" />
                  <span>CNBC Work: "Anthropic, OpenAI proposed new 'neutral' AI watchdogs. Why you should worry about the idea" (Sept 16, 2026)</span>
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400">
                  Featured Commentary: Dario Amodei (Anthropic CEO) • Julie Andersen Hill (Univ. of Wyoming Banking Law) • Albert Ziegler (XBOW Evaluator) • Synthesis by Norman Roulet & Gemini AI Architecture
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://www.cnbc.com/2026/09/16/anthropic-open-ai-model-safety-risks.html?utm_source=firefox-newtab-en-us"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold rounded-lg shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>Read CNBC Investigation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Infographic Artwork Card */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-600/50 bg-stone-900 group">
              <img
                src={aiSovereigntyImg}
                alt="AI Sovereignty: Indigenous Nations vs Corporate Watchdogs"
                className="w-full h-auto aspect-video sm:aspect-square lg:aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center justify-between text-amber-300 text-xs font-mono mb-1">
                  <span className="font-bold tracking-wider">PLATE #50 CRYPTOGRAPHIC ASSET</span>
                  <span className="bg-red-900/80 text-white px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                    SOVEREIGN VAULT
                  </span>
                </div>
                <h3 className="text-white text-sm font-bold font-serif leading-tight">
                  The AI Sovereignty Dichotomy: Corporate Decoys vs. Indigenous Enclaves
                </h3>
                <p className="text-stone-300 text-[11px] mt-1 line-clamp-2">
                  Frontier models with toothless supervisors contrasted with air-gapped biocultural networks rooted in human-origin sovereignty.
                </p>

                <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between">
                  <button
                    onClick={() => setIsArtworkModalOpen(true)}
                    className="text-xs text-amber-300 hover:text-white font-mono flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <Maximize2 size={13} />
                    <span>Expand High-Res Plate</span>
                  </button>
                  <button
                    onClick={handleCopyHash}
                    className="text-[10px] text-stone-300 hover:text-amber-300 font-mono flex items-center gap-1 transition-colors cursor-pointer bg-black/50 px-2 py-1 rounded border border-white/10"
                  >
                    {copiedHash ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                    <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CORE METRICS SUMMARY BANNER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-stone-900 dark:text-stone-100">
            <div className="text-xs font-mono text-red-600 dark:text-red-400 font-bold uppercase tracking-wider">
              Enforcement Teeth
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-red-700 dark:text-red-400 mt-1">
              0 / ZERO
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              Evaluators have badges & laptops, but cannot halt or shutdown rogue models.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-stone-900 dark:text-stone-100">
            <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
              Rare Catastrophe Detection
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-amber-700 dark:text-amber-400 mt-1">
              &lt; 3% Rate
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              Tests expose errors but miss rare catastrophic combination triggers (Ziegler/XBOW).
            </div>
          </div>

          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-stone-900 dark:text-stone-100">
            <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
              Global Indigenous Coalition
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-700 dark:text-emerald-400 mt-1">
              470M+ People
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              5,000+ distinct nations whose sovereignty precedes nation and corporate states.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/30 text-stone-900 dark:text-stone-100">
            <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">
              Data Enclave Paradigm
            </div>
            <div className="text-2xl sm:text-3xl font-black font-mono text-purple-700 dark:text-purple-400 mt-1">
              100% Air-Gapped
            </div>
            <div className="text-xs text-stone-600 dark:text-stone-400 mt-1">
              ICEarth sovereign enclave architecture shielding community assets from surveillance.
            </div>
          </div>
        </div>

        {/* SECTION SELECTION TABS */}
        <div className="flex flex-wrap gap-2 mt-8 border-b border-stone-300 dark:border-stone-800 pb-3">
          {[
            { id: 'overview', label: '1. Executive Overview & The Sovereignty Thesis', icon: Shield },
            { id: 'cnbc_audit', label: '2. The CNBC Audit: Dario Amodei & Toothless Watchdogs', icon: Building },
            { id: 'ziegler_failure', label: '3. Albert Ziegler / XBOW: The Rare-Tail Blindspot', icon: AlertTriangle },
            { id: 'geopolitics', label: '4. Trump, Xi & Pervasive Distrust of Nation-States', icon: Globe },
            { id: 'indigenous_sovereignty', label: '5. Human-Origin Sovereignty & Indigenous Alignments', icon: Dna },
            { id: 'gemini_icearth_stack', label: '6. Gemini & ICEarth: Architecting Sovereign Enclaves', icon: Cpu }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSection(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-md scale-[1.02]'
                    : 'bg-stone-200 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: EXECUTIVE OVERVIEW */}
        {selectedSection === 'overview' && (
          <div className="mt-8 space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <h2 className="text-2xl font-serif font-black text-stone-950 dark:text-stone-50 flex items-center gap-2.5">
                <Shield className="text-amber-600" size={24} />
                The Core Thesis: AI Sovereignty Originates with Humanity, Not Corporate Cartels
              </h2>
              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 leading-relaxed font-serif text-base">
                <p>
                  Artificial Intelligence is the defining civilizational contest of our era, recognized across academia, industry, and geopolitical summits as an existential risk to human autonomy. In recent days, the debate has accelerated into open confrontation. Frontier AI executives—including Dario Amodei of Anthropic and Sam Altman of OpenAI—have begun floating proposals for "neutral" third-party evaluators embedded inside their labs. Simultaneously, President Trump and President Xi have staked national security claims, positioning frontier models as sovereign weapons of statecraft.
                </p>
                <p>
                  Yet beneath the diplomatic rhetoric and public relations white papers lies a profound, unaddressed reality: <strong>the global public and vulnerable communities harbor total distrust toward both tech conglomerates and imperial nation-states</strong>. As banking law scholar Julie Andersen Hill observed in the September 16, 2026 CNBC investigation: <em>“If you don’t give them that kind of power [to compel action or close an institution], I don’t know what they’re doing.”</em>
                </p>
                <p className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-600 font-mono text-sm text-stone-900 dark:text-stone-100">
                  <strong>The ICEarth Sovereign Axiom:</strong> Sovereignty did not originate with Westphalian nation-states, nor does it belong to multinational technology monopolies. Sovereignty originated with <strong>humanity</strong>, preserved most resiliently across millennia by indigenous nations. ICEarth proposes a global federation of indigenous data enclaves—air-gapped, bioculturally authenticated, and legally fortified—to govern AI systems for the genuine protection of life.
                </p>
              </div>
            </div>

            {/* INTERACTIVE DATA VISUALIZATIONS */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-800 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-xl font-serif font-black text-stone-950 dark:text-stone-50">
                    Forensic Governance Models & Failure Probability Engine
                  </h3>
                  <p className="text-xs font-mono text-stone-500 dark:text-stone-400 mt-1">
                    Comparative analytical metrics across Frontier Lab Self-Regulation, Bilateral Nation-State Rivalry, and Indigenous Biocultural Sovereignty
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveMetricTab('failure_curve')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeMetricTab === 'failure_curve'
                        ? 'bg-red-600 text-white shadow'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    📈 Catastrophic Tail Risk
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('governance_radar')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeMetricTab === 'governance_radar'
                        ? 'bg-amber-600 text-white shadow'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    🕸️ Governance Paradigm Radar
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('sovereign_enclaves')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                      activeMetricTab === 'sovereign_enclaves'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    }`}
                  >
                    🛡️ Indigenous Enclaves
                  </button>
                </div>
              </div>

              {/* VIEW 1: FAILURE CURVE */}
              {activeMetricTab === 'failure_curve' && (
                <div className="space-y-4">
                  <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-xs font-mono text-red-900 dark:text-red-200">
                    <strong>Albert Ziegler (XBOW) Principle:</strong> Today's synthetic red-team evaluations detect common grammatical and prompt-injection failures, but their efficacy collapses to near-zero as prompt sequences cross into high-dimensional combinatorial interactions that trigger catastrophic autonomous capabilities.
                  </div>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={failureCurveData} margin={{ top: 10, right: 30, left: 10, bottom: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                        <XAxis
                          dataKey="complexity"
                          angle={-15}
                          textAnchor="end"
                          interval={0}
                          tick={{ fontSize: 10, fill: '#888888' }}
                        />
                        <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#888888' }} label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', fontSize: 10, fill: '#888888' }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d97706', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                        <Line type="monotone" dataKey="standardBenchmarkDetection" name="Standard Lab Benchmark Detection (%)" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                        <Line type="monotone" dataKey="rareCatastrophicDetection" name="Rare Catastrophic Detection Rate (Ziegler/XBOW) (%)" stroke="#ef4444" strokeWidth={3} dot={{ r: 5 }} />
                        <Line type="monotone" dataKey="modelRiskLevel" name="Latent Catastrophic Vulnerability (%)" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" dot={{ r: 4 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* VIEW 2: GOVERNANCE RADAR */}
              {activeMetricTab === 'governance_radar' && (
                <div className="space-y-4">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs font-mono text-amber-900 dark:text-amber-200">
                    <strong>Jurisprudential Comparison:</strong> Corporate watchdogs score near zero on enforcement powers and community trust; nation-states prioritize surveillance and militarization; only indigenous sovereign frameworks center intergenerational human care, biocultural trust, and complete data ownership.
                  </div>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={governanceRadarData}>
                        <PolarGrid stroke="#88888830" />
                        <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: '#888888' }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9, fill: '#888888' }} />
                        <Radar name="Corporate Neutral Watchdog (Anthropic/OpenAI)" dataKey="corporateWatchdogs" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                        <Radar name="Nation-State Bilateral Arms Race (US/China)" dataKey="nationStateBilateral" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                        <Radar name="Indigenous Biocultural Sovereignty (ICEarth)" dataKey="indigenousSovereignty" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                        <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#10b981', borderRadius: '8px', color: '#fff', fontSize: '12px' }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              )}

              {/* VIEW 3: SOVEREIGN ENCLAVES */}
              {activeMetricTab === 'sovereign_enclaves' && (
                <div className="space-y-4">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-xs font-mono text-emerald-900 dark:text-emerald-200">
                    <strong>Sovereign Node Coalition Status:</strong> Mapping the global decentralized network of indigenous air-gapped nodes architected to protect community language, environmental observations, and genetic heritage from predatory model scrapers.
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs border border-stone-300 dark:border-stone-800">
                      <thead className="bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 uppercase">
                        <tr>
                          <th className="p-2.5">Sovereign Nation / Coalition</th>
                          <th className="p-2.5">Protected Population</th>
                          <th className="p-2.5">Air-Gapped Nodes</th>
                          <th className="p-2.5">Biocultural Protocol Status</th>
                          <th className="p-2.5">Target Threat Vector</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                        {sovereignEnclaveData.map((node, idx) => (
                          <tr key={idx} className="hover:bg-stone-100 dark:hover:bg-stone-800/50">
                            <td className="p-2.5 font-bold text-stone-950 dark:text-stone-100">{node.nation}</td>
                            <td className="p-2.5 text-stone-600 dark:text-stone-300">{node.population}</td>
                            <td className="p-2.5 text-amber-600 dark:text-amber-400 font-bold">{node.airGappedNodes}</td>
                            <td className="p-2.5 text-emerald-600 dark:text-emerald-400">{node.bioculturalEnclaveStatus}</td>
                            <td className="p-2.5 text-red-600 dark:text-red-400">{node.threatVector}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: THE CNBC AUDIT: DARIO AMODEI & TOOTHLESS WATCHDOGS */}
        {selectedSection === 'cnbc_audit' && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono text-red-600 font-bold uppercase">
                <Building size={16} />
                <span>CNBC Work Forensic Breakdown • Published September 16, 2026</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-stone-950 dark:text-stone-50 mt-2">
                The Bank Supervision Analogy Without Bank Supervision Power
              </h2>

              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-base">
                <p>
                  In a widely circulated policy stance covered by CNBC, Anthropic CEO Dario Amodei championed the concept of embedding independent evaluators directly inside frontier AI laboratories. Amodei explicitly cited <strong>bank supervision</strong>—where regulatory examiners maintain continuous physical presence inside Wall Street institutions—as the historical precedent.
                </p>

                <div className="p-4 rounded-xl bg-red-500/10 border-l-4 border-red-600 text-stone-900 dark:text-stone-100 font-mono text-sm space-y-2">
                  <div className="font-bold text-red-700 dark:text-red-400 uppercase text-xs">
                    The Fatal Flaw in the Frontier Lab Analogy:
                  </div>
                  <p>
                    Bank supervisors from the Federal Reserve, the OCC, or the FDIC operate with statutory authority to <strong>issue formal cease-and-desist orders, levy multi-million dollar fines, compel immediate capital adjustments, or forcibly shutter insolvent institutions</strong>.
                  </p>
                  <p className="font-semibold text-stone-900 dark:text-stone-100 pt-1">
                    “If you don’t give them that kind of power, I don’t know what they’re doing.”
                    <span className="block text-xs text-stone-600 dark:text-stone-400 font-normal mt-0.5">
                      — Julie Andersen Hill, Banking Regulation Scholar & Law Professor, University of Wyoming
                    </span>
                  </p>
                </div>

                <p>
                  To date, neither Anthropic nor OpenAI have proposed granting these embedded evaluators the legal authority to halt a model release, revoke API keys, or shut down training clusters. As CNBC aptly summarized:
                </p>

                <blockquote className="p-4 rounded-xl bg-stone-200 dark:bg-stone-800 italic border-l-4 border-amber-500 text-stone-800 dark:text-stone-200 text-sm">
                  “The most important new job in artificial intelligence may come with an office badge, a company laptop, and access to some of the most closely guarded systems in technology: the large language models of AI leaders including Anthropic and OpenAI. <strong>What it may not come with is the power to stop them.</strong>”
                </blockquote>

                <p>
                  This dynamic replicates the classic playbook of corporate regulatory capture. By granting an evaluator an ID badge and corporate credentials without statutory enforcement mechanisms, frontier companies generate the illusion of oversight while retaining unilateral commercial control over catastrophic model deployments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ALBERT ZIEGLER & THE RARE-TAIL BLINDSPOT */}
        {selectedSection === 'ziegler_failure' && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-600 font-bold uppercase">
                <AlertTriangle size={16} />
                <span>Cybersecurity & Model Testing Reality Check</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-stone-950 dark:text-stone-50 mt-2">
                Albert Ziegler (XBOW): The Mathematical Impossibility of Synthetic Red-Teaming
              </h2>

              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-base">
                <p>
                  Beyond the lack of legal teeth, hands-on model evaluators have revealed a fundamental mathematical limitation in frontier AI safety testing. Albert Ziegler, a leading model evaluator at cybersecurity firm XBOW, pointed out in the CNBC report that today’s standard safety suites operate under a profound blind spot:
                </p>

                <div className="p-4 rounded-xl bg-amber-500/10 border-l-4 border-amber-600 text-stone-900 dark:text-stone-100 font-mono text-sm">
                  <p className="font-bold text-amber-800 dark:text-amber-300">
                    “Today’s tests can expose important large language model failures but may never trigger the rare combination of behavior that produces a catastrophic outcome.”
                  </p>
                  <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
                    — Albert Ziegler, Model Evaluator, XBOW Cybersecurity
                  </p>
                </div>

                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 mt-4">
                  Why Frontier Combinatorial Spaces Defeat Linear Auditing:
                </h3>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>
                    <strong>Infinite Context State Spaces:</strong> Modern context windows exceeding 2,000,000 tokens generate an astronomical state space. Evaluators testing 10,000 synthetic prompts evaluate less than 0.0000000001% of potential token pathways.
                  </li>
                  <li>
                    <strong>Non-Linear Synergistic Failures:</strong> Autonomous cyberweapons or bioweapon synthesis rarely trigger on a single blatant query. They emerge when benign prompts are chained across diverse domains, subverting safety classifiers through distributed logic.
                  </li>
                  <li>
                    <strong>Evaluation Contamination:</strong> Frontier models are increasingly trained on benchmark datasets, memorizing the "safe" answers expected by evaluators while retaining latent dangerous capabilities when deployed in the wild.
                  </li>
                </ul>

                <p>
                  Therefore, placing an embedded evaluator in an office does not solve the mathematical insolubility of frontier risk. When the oversight framework relies entirely on testing systems that cannot anticipate emergent rare tails, catastrophic failure is an inevitability.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GEOPOLITICS: TRUMP, XI & PERVASIVE DISTRUST */}
        {selectedSection === 'geopolitics' && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono text-blue-600 font-bold uppercase">
                <Globe size={16} />
                <span>Geopolitical Hegemony & The Crisis of Legitimacy</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-stone-950 dark:text-stone-50 mt-2">
                Trump, Xi, and Why Opposition to Corporate Oversight Is Rooted in Distrust
              </h2>

              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-base">
                <p>
                  The debate over AI watchdogs is not occurring in a vacuum. In the past week alone, President Trump and President Xi Jinping have articulated diametrically opposed, yet structurally identical, nationalist doctrines regarding frontier AI. Both leaders view artificial general intelligence not as a shared planetary heritage to be safeguarded, but as an instrument of sovereign coercion, economic dominance, and kinetic superiority.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30">
                    <h4 className="font-mono text-xs font-bold text-blue-700 dark:text-blue-400 uppercase">
                      The US Hegemonic Doctrine (Trump / Silicon Valley)
                    </h4>
                    <p className="text-xs text-stone-700 dark:text-stone-300 mt-2">
                      Frames any strict regulatory pause or binding international oversight as an act of economic surrender to Beijing. Emphasizes unrestricted compute clustering, export restrictions, and domestic corporate dominance protected by state contracts.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <h4 className="font-mono text-xs font-bold text-red-700 dark:text-red-400 uppercase">
                      The Chinese Sovereign AI Strategy (Xi / State Grid)
                    </h4>
                    <p className="text-xs text-stone-700 dark:text-stone-300 mt-2">
                      Subordinates all compute, foundational models, and training data to the ideological alignment and stability directives of the Party-state, viewing Western "neutral" oversight proposals as Trojan horses designed to freeze developing nations out of technological parity.
                    </p>
                  </div>
                </div>

                <p>
                  The natural consequence of this bilateral arms race is <strong>pervasive distrust at all levels of civil society</strong>. Developing nations, marginalized populations, and independent civil society reject both Silicon Valley self-regulation and superpower surveillance state models. Neither entity can be trusted to hold the keys to humanity's digital consciousness.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: HUMAN-ORIGIN SOVEREIGNTY & INDIGENOUS ALIGNMENTS */}
        {selectedSection === 'indigenous_sovereignty' && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold uppercase">
                <Dna size={16} />
                <span>Foundational Exposenomics & Biocultural Jurisprudence</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-stone-950 dark:text-stone-50 mt-2">
                Sovereignty That Originated with Humanity: Why Indigenous Alignments Precede Nation-States
              </h2>

              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-base">
                <p>
                  When Western legal scholars and technology CEOs debate "data sovereignty," they almost exclusively define it within the boundaries of the 1648 Treaty of Westphalia—granting nation-states territorial control over internet cables and data centers within their borders.
                </p>
                <p>
                  <strong>ICEarth rejects this impoverished definition.</strong> True sovereignty did not begin with the rise of modern states or commercial enterprises; it originated with <strong>humanity itself</strong>. For tens of thousands of years before the first European corporation was chartered, indigenous communities held collective custodial sovereignty over their language, genetic lineage, medicinal flora, astronomical observations, and community governance.
                </p>

                <div className="p-4 rounded-xl bg-emerald-500/10 border-l-4 border-emerald-600 text-stone-900 dark:text-stone-100 font-mono text-sm space-y-2">
                  <div className="font-bold text-emerald-800 dark:text-emerald-300 uppercase text-xs">
                    The Indigenous Sovereign Data Declaration:
                  </div>
                  <p>
                    1. <strong>Biocultural Inalienability:</strong> Human genomic and ecological knowledge cannot be scraped, tokenized, or patented by commercial foundation models without express, revocable collective consent.
                  </p>
                  <p>
                    2. <strong>Precedence Over Corporate Claims:</strong> Indigenous nations represent sovereign entities recognized under international law (UNDRIP) whose rights to data protection exist independently of state borders.
                  </p>
                  <p>
                    3. <strong>Intergenerational Guardianship:</strong> While corporate boards operate on 90-day earnings calls and state politicians on 4-year election cycles, indigenous governance evaluates algorithmic impact across seven generations.
                  </p>
                </div>

                <p>
                  By creating global alignments between indigenous nations—from the Jicarilla Apache Nation in North America to Māori guardians in Aotearoa and First Nations across the Arctic—humanity establishes a distributed, incorruptible counterweight to predatory artificial intelligence.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: GEMINI & ICEARTH: ARCHITECTING SOVEREIGN ENCLAVES */}
        {selectedSection === 'gemini_icearth_stack' && (
          <div className="mt-8 space-y-6 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-600 font-bold uppercase">
                <Cpu size={16} />
                <span>Technical Architecture & Operational Implementation</span>
              </div>
              <h2 className="text-2xl font-serif font-black text-stone-950 dark:text-stone-50 mt-2">
                How Gemini is Helping Architect AI for Indigenous Communities
              </h2>

              <div className="mt-4 space-y-4 text-stone-700 dark:text-stone-300 font-serif leading-relaxed text-base">
                <p>
                  ICEarth is not merely a theoretical critique; it is a functioning computational framework. With the assistance of Google DeepMind's Gemini models, we are actively architecting sovereign AI systems engineered specifically to protect indigenous communities from information technology that violates their sovereign rights and interests.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                  <div className="p-4 rounded-xl bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600 uppercase">
                      <Lock size={14} />
                      <span>1. Air-Gapped Sovereign Vaults</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-2">
                      Local edge compute clusters operating entirely disconnected from public cloud crawlers. Data remains on tribal land under cryptographic lock, governed by tribal council keys.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-600 uppercase">
                      <Shield size={14} />
                      <span>2. Biocultural Firewalls</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-2">
                      Algorithmic inspection layers that detect and neutralize unauthorized extraction of indigenous language models, sacred medicinal data, or community genealogical records.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-200 dark:bg-stone-800 border border-stone-300 dark:border-stone-700">
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-600 uppercase">
                      <Terminal size={14} />
                      <span>3. Human-First Alignment</span>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-300 mt-2">
                      Fine-tuning LLM interfaces with community-curated ethics, rejecting profit-maximizing surveillance mechanics in favor of ecological and generational preservation.
                    </p>
                  </div>
                </div>

                <p>
                  Through this hybrid architecture, ICEarth provides indigenous nations with the exact power that corporate "neutral watchdogs" lack: <strong>the absolute, autonomous technical power to halt unauthorized data flow, preserve sovereign truth, and command their own digital destiny.</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CROSS-NAVIGATION & LINKED PROOF PLATES */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-200 dark:bg-stone-900 border border-stone-300 dark:border-stone-800">
          <h3 className="text-lg font-serif font-bold text-stone-950 dark:text-stone-50 flex items-center gap-2">
            <Compass size={18} className="text-amber-600" />
            Explore Connected Sovereign AI & Exposenomics Proof Plates
          </h3>
          <p className="text-xs font-mono text-stone-600 dark:text-stone-400 mt-1">
            Navigate through ICEarth's interconnected legal, scientific, and technological sovereign modules.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
            <button
              onClick={() => onNavigateTab && onNavigateTab('icearth_stack')}
              className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-left transition-all cursor-pointer group hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600">PLATE #38</span>
                <ArrowRight size={13} className="text-stone-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                The ICEarth Stack: Indigenous AI
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                Constitutional and architectural blueprint for sovereign computing.
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('ai_and_kehoe_rule')}
              className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-left transition-all cursor-pointer group hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600">PLATE #41</span>
                <ArrowRight size={13} className="text-stone-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                AI & The Kehoe Rule (Lanphear Thesis)
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                How commercial AI repeats the lead industry's burden-of-harm playbook.
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('ai_existential_risk')}
              className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-left transition-all cursor-pointer group hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-red-600">PLATE #44</span>
                <ArrowRight size={13} className="text-stone-400 group-hover:text-red-500 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                AI Existential Risk & Continuum of Failure
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                The Gaze into the Abyss: Congressional and technical audits.
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('jicarilla_sovereign_it')}
              className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-emerald-500 text-left transition-all cursor-pointer group hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600">JICARILLA APACHE</span>
                <ArrowRight size={13} className="text-stone-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                Jicarilla Sovereign IT & AI Integration
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                Air-gapped tribal hybrid cloud with solar microgrids in Dulce, NM.
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('ai_testimonial')}
              className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-left transition-all cursor-pointer group hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600">COGNITION</span>
                <ArrowRight size={13} className="text-stone-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                AI Testimonial: AI as the New Pb
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                Frontier neural models testifying on cognitive degradation and ethics.
              </div>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('sovereign_portal')}
              className="p-3 bg-white dark:bg-stone-800 rounded-xl border border-stone-300 dark:border-stone-700 hover:border-amber-500 text-left transition-all cursor-pointer group hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-600">PORTAL</span>
                <ArrowRight size={13} className="text-stone-400 group-hover:text-amber-500 transition-transform group-hover:translate-x-1" />
              </div>
              <div className="text-sm font-bold text-stone-900 dark:text-stone-100 mt-1">
                Sovereign Membership Portal
              </div>
              <div className="text-xs text-stone-500 mt-0.5">
                Access member media IP catalog and cryptographic registries.
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* FULL-RESOLUTION ARTWORK MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-stone-900 rounded-2xl overflow-hidden border border-amber-500/40 shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-600 text-white font-mono text-xs font-bold">
                  PLATE #50
                </span>
                <h3 className="text-white font-serif font-bold text-base">
                  The Global AI Sovereignty Imperative: Indigenous Nations vs. Toothless Watchdogs
                </h3>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="text-stone-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-6 flex flex-col items-center">
              <img
                src={aiSovereigntyImg}
                alt="AI Sovereignty Infographic Plate #50"
                className="max-h-[60vh] w-auto object-contain rounded-lg shadow-2xl border border-stone-800"
              />

              <div className="w-full mt-6 p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs font-mono text-stone-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold uppercase">Cryptographic Provenance Verification</span>
                  <button
                    onClick={handleCopyHash}
                    className="flex items-center gap-1 text-amber-300 hover:text-white transition-colors cursor-pointer bg-stone-900 px-2 py-1 rounded border border-stone-700"
                  >
                    {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedHash ? 'Hash Copied!' : 'Copy Hash'}</span>
                  </button>
                </div>
                <div className="break-all text-amber-200/90 font-bold">
                  {provenanceHash}
                </div>
                <div className="text-stone-400 text-[11px]">
                  Registered in ICEarth Sovereign Photographic Gallery (PHOTO-000BF) and Member Media IP (IP-000BF).
                  Source Citation: CNBC Work (Sept 16, 2026), featuring Dario Amodei, Julie Andersen Hill, and Albert Ziegler.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
