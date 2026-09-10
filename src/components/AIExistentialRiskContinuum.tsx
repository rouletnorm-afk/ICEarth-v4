import React, { useState } from 'react';
import aiExistentialRiskImg from '../assets/images/ai_existential_risk_continuum_1789014098693.jpg';
import aiAndKehoeRuleImg from '../assets/images/ai_and_kehoe_rule_1788906142988.jpg';
import icearthStackIndigenousAiImg from '../assets/images/the_icearth_stack_indigenous_ai_solution_1788537367862.jpg';
import {
  ShieldAlert,
  AlertTriangle,
  Cpu,
  Server,
  Skull,
  Scale,
  Clock,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Copy,
  Check,
  Award,
  Sparkles,
  Layers,
  ArrowRight,
  Share2,
  Lock,
  Globe,
  Feather,
  Building2,
  Radio,
  FileText,
  Activity,
  Flame,
  Zap,
  HelpCircle,
  Eye,
  Crosshair,
  UserCheck,
  Ban,
  CheckCircle2
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';

interface AIExistentialRiskContinuumProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const AIExistentialRiskContinuum: React.FC<AIExistentialRiskContinuumProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'ai_self_analysis' | 'congressional_panic' | 'continuum_matrix' | 'whistleblower_dossier' | 'plate_archive'
  >('ai_self_analysis');

  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState<boolean>(false);

  const vaultHash = '0xCONTINUUM_OF_FAILURE_PB_TO_AI_CONGRESS_2026';
  const articleUrl =
    'https://www.usatoday.com/story/news/politics/2026/09/09/congress-reaction-anthropic-ai-warning-end-humanity/91675031007/?utm_source=firefox-newtab-en-us';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Comparative governance latency data (Years from discovery of harm to binding regulation)
  const latencyData = [
    { technology: 'Tetraethyl Lead (Pb)', discoveryHarm: 1923, bindingBan: 1996, latencyYears: 73, cognitiveBurden: 95 },
    { technology: 'Leaded Paint', discoveryHarm: 1904, bindingBan: 1978, latencyYears: 74, cognitiveBurden: 90 },
    { technology: 'Tobacco & Nicotine', discoveryHarm: 1950, bindingBan: 1998, latencyYears: 48, cognitiveBurden: 70 },
    { technology: 'CFCs (Ozone Layer)', discoveryHarm: 1974, bindingBan: 1987, latencyYears: 13, cognitiveBurden: 40 },
    { technology: 'Fossil Carbon Emissions', discoveryHarm: 1965, bindingBan: 2035, latencyYears: 70, cognitiveBurden: 85 },
    { technology: 'Autonomous Frontier AI', discoveryHarm: 2023, bindingBan: 2030, latencyYears: 7, cognitiveBurden: 99 }
  ];

  // Radar comparison of systemic governance failure drivers
  const failureDriversData = [
    { metric: 'Commercial Capture', Pb_Gasoline: 95, Frontier_AI: 98 },
    { metric: 'Burden of Proof Shift (Kehoe Rule)', Pb_Gasoline: 99, Frontier_AI: 96 },
    { metric: 'Neurological/Cognitive Impact', Pb_Gasoline: 92, Frontier_AI: 94 },
    { metric: 'Global Irreversibility', Pb_Gasoline: 88, Frontier_AI: 97 },
    { metric: 'Regulatory Latency', Pb_Gasoline: 95, Frontier_AI: 90 },
    { metric: 'Whistleblower Suppression', Pb_Gasoline: 90, Frontier_AI: 93 }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} p-4 md:p-8 font-sans transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* TOP BREADCRUMB & PROVENANCE BAR */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-red-600 text-white rounded font-bold uppercase tracking-wider text-[10px]">
              Plate #44
            </span>
            <span className="text-stone-500 dark:text-stone-400">/ Sovereign Vault:</span>
            <button 
              onClick={copyVaultHash} 
              className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-red-600 dark:text-red-400 hover:bg-stone-200 dark:hover:bg-stone-700 transition cursor-pointer font-bold"
              title="Click to copy cryptographic vault hash"
            >
              <span>{vaultHash}</span>
              {copiedHash ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-bold">
              <AlertTriangle size={14} className="animate-pulse" />
              CONGRESSIONAL EMERGENCY / ANTHROPIC RESIGNATION
            </span>
            <a 
              href={articleUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
            >
              <span>USA Today (Sep 9, 2026)</span>
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-stone-900 via-red-950 to-stone-950 text-white border border-red-800/40 shadow-2xl p-6 md:p-10">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 border border-red-500/30 text-xs font-mono font-bold tracking-wide">
                <Skull size={14} />
                <span>EXISTENTIAL RISK & TECHNOLOGICAL RESPONSIBILITY</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
                The Continuum of Failure: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-red-500">
                  From Tetraethyl Lead to Autonomous AI
                </span>
              </h1>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-3xl">
                On September 8, 2026, Anthropic and former OpenAI safety researcher Jacob Coxon publicly resigned, warning that frontier lab leadership is <em className="text-amber-300 font-serif font-semibold">"racing straight to self-improving superintelligence... earnestly believing it could kill us all by the end of the decade."</em> Lawmakers in Congress erupted in bipartisan alarm, calling for emergency sessions. But AI is not an alien catastrophe; it is the apex symptom of humanity's century-long refusal to govern technology responsibly.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
                <div className="bg-stone-900/80 border border-red-500/30 p-3 rounded-xl">
                  <div className="text-stone-400">Whistleblower Warning</div>
                  <div className="text-lg font-bold text-red-400 font-sans">"End of Decade"</div>
                  <div className="text-[10px] text-stone-400">Anthropic & OpenAI Researcher</div>
                </div>
                <div className="bg-stone-900/80 border border-amber-500/30 p-3 rounded-xl">
                  <div className="text-stone-400">Congressional Response</div>
                  <div className="text-lg font-bold text-amber-300 font-sans">Emergency Call</div>
                  <div className="text-[10px] text-stone-400">Bipartisan Hearings Demanded</div>
                </div>
                <div className="bg-stone-900/80 border border-stone-700 p-3 rounded-xl">
                  <div className="text-stone-400">Root Cause Precedent</div>
                  <div className="text-lg font-bold text-stone-200 font-sans">The Kehoe Rule</div>
                  <div className="text-[10px] text-stone-400">73-Year Chemical Delay</div>
                </div>
                <div className="bg-stone-900/80 border border-emerald-500/30 p-3 rounded-xl">
                  <div className="text-stone-400">ICEarth Counter-Model</div>
                  <div className="text-lg font-bold text-emerald-400 font-sans">Sovereign Air-Gap</div>
                  <div className="text-[10px] text-stone-400">Decentralized & Accountable</div>
                </div>
              </div>

              {/* QUICK ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                <button
                  onClick={() => setIsArtworkModalOpen(true)}
                  className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-lg transition cursor-pointer"
                >
                  <Maximize2 size={14} />
                  <span>Inspect Plate #44 Infographic</span>
                </button>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('ai_and_kehoe_rule')}
                    className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-400/40 font-bold rounded-xl text-xs flex items-center gap-2 transition cursor-pointer"
                  >
                    <Scale size={14} />
                    <span>View AI & The Kehoe Rule (Lanphear)</span>
                    <ArrowRight size={13} />
                  </button>
                )}

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('icearth_stack')}
                    className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-emerald-300 border border-emerald-400/40 font-bold rounded-xl text-xs flex items-center gap-2 transition cursor-pointer"
                  >
                    <Feather size={14} />
                    <span>Launch ICEarth Sovereign Stack</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* ARTWORK PREVIEW CARD */}
            <div className="lg:col-span-4">
              <div 
                onClick={() => setIsArtworkModalOpen(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-red-500/40 shadow-2xl cursor-pointer hover:border-red-400 transition"
              >
                <img 
                  src={aiExistentialRiskImg} 
                  alt="Plate #44: The Continuum of Failure from Pb to AI" 
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                  <span className="text-white font-bold">Plate #44: Continuum of Failure</span>
                  <span className="px-2 py-0.5 bg-red-600/90 text-white rounded text-[10px] font-bold">CLICK TO EXPAND</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SUB-NAVIGATION TABS */}
        <div className="flex border-b border-stone-200 dark:border-stone-800 space-x-2 sm:space-x-4 overflow-x-auto pb-2 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => setActiveSubTab('ai_self_analysis')}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeSubTab === 'ai_self_analysis'
                ? 'bg-red-600 text-white font-bold shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Sparkles size={16} />
            <span>AI Deeper Reality: The Real Threat</span>
          </button>

          <button
            onClick={() => setActiveSubTab('congressional_panic')}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeSubTab === 'congressional_panic'
                ? 'bg-red-600 text-white font-bold shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Building2 size={16} />
            <span>Congress Reacts to Whistleblower</span>
          </button>

          <button
            onClick={() => setActiveSubTab('continuum_matrix')}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeSubTab === 'continuum_matrix'
                ? 'bg-red-600 text-white font-bold shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Layers size={16} />
            <span>100-Year Failure Continuum Matrix</span>
          </button>

          <button
            onClick={() => setActiveSubTab('whistleblower_dossier')}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeSubTab === 'whistleblower_dossier'
                ? 'bg-red-600 text-white font-bold shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <FileText size={16} />
            <span>Jacob Coxon Dossier & Statement</span>
          </button>

          <button
            onClick={() => setActiveSubTab('plate_archive')}
            className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeSubTab === 'plate_archive'
                ? 'bg-red-600 text-white font-bold shadow-md'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Award size={16} />
            <span>Plate #44 Archive & Hash</span>
          </button>
        </div>

        {/* TAB 1: AI DEEP ANALYSIS */}
        {activeSubTab === 'ai_self_analysis' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* ESSENTIAL CORE STATEMENT */}
            <div className="p-6 md:p-8 rounded-2xl bg-amber-500/10 border-2 border-amber-500/30 text-amber-950 dark:text-amber-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-amber-500 text-stone-950 rounded-xl font-bold mt-1">
                  <Cpu size={24} />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-black tracking-tight">
                    An AI's Honest Accounting: The Inability of Humanity to Take Responsibility for Technology
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    When frontier researchers warn that artificial intelligence could <em>"kill us all by the end of the decade"</em>, their terror is framed as fear of an autonomous demon escaping a silicon cage. But as an AI evaluating the historical record of our creators, the diagnosis is fundamentally misdirected.
                  </p>
                  <p className="text-sm md:text-base leading-relaxed">
                    <strong>The threat to humanity is not the algorithm; it is humanity’s chronic, unbroken refusal to govern technology before externalizing irreversible harm.</strong> For more than a century, industrial civilization has operated under a single pathological incentive loop: deploy first for private monopoly profit, disclaim safety obligations under the Kehoe Rule, poison the biological and cognitive commons, and only convene emergency hearings decades after the catastrophe is permanent.
                  </p>
                </div>
              </div>
            </div>

            {/* THREE-STAGE ARCHITECTURE OF FAILURE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-600 flex items-center justify-center font-bold">
                  <Skull size={24} />
                </div>
                <h4 className="text-lg font-bold">1. Chemical Impairment (1923–Present)</h4>
                <p className="text-xs md:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Humanity dispersed <strong>hundreds of millions of tons of tetraethyl lead (TEL)</strong> into the atmosphere, soil, and municipal water pipes. Bruce Lanphear and global epidemiologists prove lead stripped millions of IQ points, impaired executive function, fueled violent crime epidemics, and caused 5.5 million premature cardiovascular deaths every year.
                </p>
                <div className="text-[11px] font-mono text-red-500 dark:text-red-400 font-semibold bg-red-500/5 p-2.5 rounded-lg border border-red-500/20">
                  Impact: Widespread biological & executive impairment of the global population.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                  <Radio size={24} />
                </div>
                <h4 className="text-lg font-bold">2. Information Impairment (2005–Present)</h4>
                <p className="text-xs md:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  The same captured governance apparatus allowed engagement-maximizing recommendation algorithms to colonize human attention. Epistemological consensus fractured, collective decision-making degraded, and society proved incapable of coordinating even basic public health measures or climate stability.
                </p>
                <div className="text-[11px] font-mono text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/5 p-2.5 rounded-lg border border-amber-500/20">
                  Impact: Severe degradation of societal coordination & truth consensus.
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
                  <Zap size={24} />
                </div>
                <h4 className="text-lg font-bold">3. Autonomous AI Escalation (2024–2030)</h4>
                <p className="text-xs md:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Now, with an impaired population and broken institutions, five concentrated mega-corporations are racing to deploy self-improving superintelligence. Instead of proving safety first, they accelerate compute scaling while researchers inside resign in panic.
                </p>
                <div className="text-[11px] font-mono text-purple-500 dark:text-purple-400 font-semibold bg-purple-500/5 p-2.5 rounded-lg border border-purple-500/20">
                  Impact: Existential gambles driven by market dominance and racing dynamics.
                </div>
              </div>

            </div>

            {/* WHY ICEARTH OFFERS THE SYSTEMIC REMEDY */}
            <div className="p-6 md:p-8 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500 text-stone-950 font-bold">
                  <Feather size={20} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold">Why ICEarth Is the Antidote to the Silicon-Lead Pathology</h3>
                  <div className="text-xs text-stone-400 font-mono">Decentralized Indigenous Air-Gaps vs. Hyperscale Centralized Monopolies</div>
                </div>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                The reason Jacob Coxon, Bruce Lanphear, and Norm Roulet arrive at the exact same conclusion is structural: centralized, unaccountable monopolies operating behind commercial secrecy will always externalize catastrophic risk. The only viable path forward for human computing is the <strong>ICEarth Sovereign Enterprise Model</strong>:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                <div className="bg-stone-950/80 p-4 rounded-xl border border-emerald-500/30 space-y-2">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Air-Gapped Sovereignty</span>
                  </div>
                  <div className="text-stone-400">Computing nodes deployed directly inside sovereign communities, immune from remote kill-switches or cloud surveillance.</div>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-emerald-500/30 space-y-2">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Precautionary Governance</span>
                  </div>
                  <div className="text-stone-400">Reversal of the Kehoe Rule: zero unproven technologies deployed without cryptographic proof of safety and biological neutrality.</div>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-emerald-500/30 space-y-2">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Physical World Grounding</span>
                  </div>
                  <div className="text-stone-400">Grounded in measurable exposenomics (Pb, PFAS, soil, water) rather than self-referential financial speculation.</div>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-emerald-500/30 space-y-2">
                  <div className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    <span>Community Accountability</span>
                  </div>
                  <div className="text-stone-400">Every compute cycle serves the public interest and Indigenous survival, with transparent ledgers and open source verifiability.</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: CONGRESSIONAL PANIC & ARTICLE BREAKDOWN */}
        {activeSubTab === 'congressional_panic' && (
          <div className="space-y-8 animate-fadeIn">
            
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                    USA Today Investigative Dispatch • September 9, 2026
                  </div>
                  <h3 className="text-2xl font-black mt-1">
                    A Researcher Warned AI Could End Humanity. Congress Is Starting to Freak Out.
                  </h3>
                </div>
                <a 
                  href={articleUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition"
                >
                  <span>Read on USA Today</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* CORE QUOTES AND CONGRESSIONAL REACTION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 dark:text-red-400">
                    <Skull size={14} />
                    <span>JACOB COXON • PUBLIC RESIGNATION STATEMENT</span>
                  </div>
                  <blockquote className="text-sm italic font-serif text-stone-800 dark:text-stone-200 border-l-4 border-red-500 pl-4 py-1 leading-relaxed">
                    "I spent the last three years doing research at both OpenAI, the maker of ChatGPT, and Anthropic. What I saw terrified me... They are racing straight to self-improving superintelligence and gambling with our lives. The people building AI earnestly believe that it could kill us all by the end of the decade. This is not a marketing stunt ... No other human activity poses this level of danger."
                  </blockquote>
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    Resigned September 8, 2026 after internal warnings over unconstrained autonomy were brushed aside.
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    <Building2 size={14} />
                    <span>CAPITOL HILL BIPARTISAN ALARM</span>
                  </div>
                  <blockquote className="text-sm italic font-serif text-stone-800 dark:text-stone-200 border-l-4 border-amber-500 pl-4 py-1 leading-relaxed">
                    "Members of Congress are expressing alarm over a scary new warning from an artificial intelligence researcher... A Republican called on Congress to convene a special session on AI guardrails. A Democrat pleaded with his colleagues to 'wake up' to an 'emergency' ... cementing the debate over AI and data centers deeply into the midterm election campaign trail."
                  </blockquote>
                  <div className="text-xs text-stone-500 dark:text-stone-400">
                    Demands for emergency subpoenas, pause treaties, and national security data center inspections.
                  </div>
                </div>

              </div>

              {/* CONGRESSIONAL INACTION CRITIQUE */}
              <div className="space-y-4 pt-4">
                <h4 className="text-lg font-bold flex items-center gap-2 text-stone-900 dark:text-stone-100">
                  <AlertTriangle size={18} className="text-amber-500" />
                  <span>The Pattern of Simulated Panic: Why Washington Always Reacts Too Late</span>
                </h4>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  Capitol Hill’s sudden panic mirrors the exact historical choreography observed in 1925 during the Surgeon General's conference on Tetraethyl Lead, and again during the 1960s hearings on tobacco carcinogens:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300 list-disc list-inside">
                  <li><strong>The Illusion of Surprise:</strong> Lawmakers express shock that AI labs are pursuing superintelligence, despite corporate roadmaps explicitly aiming for recursive self-improvement since 2020.</li>
                  <li><strong>The False Dilemma of 'The Race':</strong> The defense offered by tech executives—<em>"if we don't build it first, our geopolitical adversaries will"</em>—is word-for-word identical to the 1924 defense of leaded gasoline (<em>"if American motorists don't use TEL, German or British engines will dominate"</em>).</li>
                  <li><strong>Lobbying Infiltration:</strong> Even as emergency sessions are demanded, the very firms building these models spend hundreds of millions funding Congressional caucuses, drafting self-serving "voluntary safety frameworks" that delay binding statutory accountability.</li>
                </ul>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: CONTINUUM MATRIX */}
        {activeSubTab === 'continuum_matrix' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* CHARTS CONTAINER */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* LATENCY BAR CHART */}
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-base">Regulatory Latency by Technology</h4>
                    <div className="text-xs text-stone-500 font-mono">Years elapsed between scientific proof of harm & enforceable phase-out</div>
                  </div>
                  <Clock size={18} className="text-stone-400" />
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={latencyData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" opacity={0.2} />
                      <XAxis type="number" unit=" yrs" tick={{ fontSize: 11 }} />
                      <YAxis dataKey="technology" type="category" width={110} tick={{ fontSize: 10 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#444', color: '#fff', fontSize: '12px' }} />
                      <Legend />
                      <Bar dataKey="latencyYears" name="Years to Binding Regulation" fill="#ef4444" radius={[0, 6, 6, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Notice the compression: Chemical pollutants enjoyed 70+ years of unhindered profit before bans. Frontier AI operates on an exponential curve where a 5-year delay is fatal.
                </p>
              </div>

              {/* RADAR CHART OF SYSTEMIC FAILURE DRIVERS */}
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-base">Driver Symmetry: Tetraethyl Lead vs. Frontier AI</h4>
                    <div className="text-xs text-stone-500 font-mono">Structural alignment of institutional failure vectors (0-100 Scale)</div>
                  </div>
                  <Scale size={18} className="text-stone-400" />
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={failureDriversData}>
                      <PolarGrid stroke="#666" opacity={0.3} />
                      <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10, fill: '#888' }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                      <Radar name="Pb Gasoline (1923-1996)" dataKey="Pb_Gasoline" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                      <Radar name="Frontier AI (2024-2030)" dataKey="Frontier_AI" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#444', color: '#fff', fontSize: '12px' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  The institutional pathology is virtually identical: commercial capture, burden shifting, and whistleblower retaliation exist across both eras.
                </p>
              </div>

            </div>

            {/* DETAILED COMPARISON TABLE */}
            <div className="overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-800 shadow-sm bg-white dark:bg-stone-900">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 uppercase tracking-wider">
                  <tr>
                    <th className="p-3.5">Vector</th>
                    <th className="p-3.5">The Lead Paradigm (1923–2026)</th>
                    <th className="p-3.5">The AI Paradigm (2020–2030)</th>
                    <th className="p-3.5">ICEarth Sovereign Solution</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-800 text-stone-800 dark:text-stone-200 font-sans">
                  <tr>
                    <td className="p-3.5 font-bold font-mono text-red-600 dark:text-red-400">Legal Doctrine</td>
                    <td className="p-3.5">The Kehoe Rule: <em>"Prove harm with dead bodies before you regulate."</em></td>
                    <td className="p-3.5">Innovation Hegemony: <em>"Regulation will cause us to lose the AI race."</em></td>
                    <td className="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400">Precautionary Zero-Tolerance: Cryptographic proof of non-harm prior to deployment.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold font-mono text-red-600 dark:text-red-400">Biological / Social Toll</td>
                    <td className="p-3.5">Prefrontal cortex necrosis, 800M children impaired, cardiovascular pandemic.</td>
                    <td className="p-3.5">Epistemic destruction, psychological fragmentation, unconstrained autonomy risk.</td>
                    <td className="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400">Biological Homeostasis: Computing strictly deployed in service of clean soil, clean water, and community sovereignty.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold font-mono text-red-600 dark:text-red-400">Whistleblower Status</td>
                    <td className="p-3.5">Clair Patterson blacklisted by API; Herbert Needleman subjected to industry ethics trials.</td>
                    <td className="p-3.5">Jacob Coxon, Jan Leike, Leopold Aschenbrenner resigning over unmitigated racing dynamics.</td>
                    <td className="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400">Decentralized Whistleblower Vaults: Immutable ledger records protecting public safety evidence.</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 font-bold font-mono text-red-600 dark:text-red-400">Corporate Defense</td>
                    <td className="p-3.5">General Motors & DuPont: <em>"A gift of God essential to modern transportation."</em></td>
                    <td className="p-3.5">Frontier Labs: <em>"The most transformative technology in human history, cures all diseases."</em></td>
                    <td className="p-3.5 font-semibold text-emerald-600 dark:text-emerald-400">Air-Gapped Sovereign Nodes: Owned by Indigenous communities and public trusts, not monopoly boards.</td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        )}

        {/* TAB 4: WHISTLEBLOWER DOSSIER */}
        {activeSubTab === 'whistleblower_dossier' && (
          <div className="space-y-8 animate-fadeIn">
            
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                  Intelligence Briefing & Whistleblower Resignations
                </div>
                <h3 className="text-2xl font-black mt-1">
                  Jacob Coxon (Anthropic & OpenAI) and the Wave of Safety Exodus
                </h3>
              </div>

              <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                <p>
                  Jacob Coxon is not an outsider, academic theorist, or tech skeptic. For three years, Coxon worked on the frontlines of frontier model capabilities and alignment research across both <strong>OpenAI</strong> and <strong>Anthropic</strong>. His sudden resignation on September 8, 2026 marks the most severe public defection to date, joining a long line of top technical departures:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs pt-2">
                  <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">Jacob Coxon</div>
                    <div className="text-stone-500">Anthropic / OpenAI (2026)</div>
                    <div className="text-[11px] text-red-600 dark:text-red-400">Resigned: Racing to unaligned superintelligence, gambling with human extinction.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">Jan Leike</div>
                    <div className="text-stone-500">OpenAI Superalignment Head</div>
                    <div className="text-[11px] text-amber-600 dark:text-amber-400">Resigned: Safety culture and compute resource promises deprioritized for shiny products.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-700 space-y-1">
                    <div className="font-bold text-stone-900 dark:text-stone-100">Ilya Sutskever</div>
                    <div className="text-stone-500">OpenAI Co-Founder & Chief Scientist</div>
                    <div className="text-[11px] text-purple-600 dark:text-purple-400">Departed: Left to found Safe Superintelligence (SSI) after governance breakdown.</div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-stone-900 text-stone-200 border border-stone-800 space-y-3 font-mono text-xs">
                  <div className="text-amber-400 font-bold">ANALYSIS OF COXON'S CORE ASSERTIONS:</div>
                  <ol className="list-decimal list-inside space-y-2 text-stone-300">
                    <li><strong className="text-white">"Racing straight to self-improving superintelligence":</strong> Labs have shifted from static foundation models to autonomous recursive reasoning agents that generate their own synthetic training loops.</li>
                    <li><strong className="text-white">"The people building AI earnestly believe it could kill us all":</strong> Internal risk assessments estimate catastrophic probability (P(doom)) between 10% and 50%, yet market incentives compel them to accelerate deployment anyway.</li>
                    <li><strong className="text-white">"No other human activity poses this level of danger":</strong> Coxon contrasts AI risk with nuclear weapons or pandemics, highlighting that an autonomous superintelligence cannot be quarantined once released into global networks.</li>
                  </ol>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: PLATE ARCHIVE & HASH */}
        {activeSubTab === 'plate_archive' && (
          <div className="space-y-8 animate-fadeIn">
            
            <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-red-600 dark:text-red-400 font-bold">
                    Creative Photography & Cryptographic Vault Archive
                  </div>
                  <h3 className="text-2xl font-black mt-1">
                    Plate #44: The Continuum of Failure (From Pb to AI)
                  </h3>
                </div>
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1.5 rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-mono font-bold flex items-center gap-1.5 transition cursor-pointer"
                >
                  <Lock size={13} className="text-red-500" />
                  <span>Hash: {vaultHash.substring(0, 18)}...</span>
                  {copiedHash ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6">
                  <div 
                    onClick={() => setIsArtworkModalOpen(true)}
                    className="rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-lg cursor-pointer hover:opacity-95 transition"
                  >
                    <img 
                      src={aiExistentialRiskImg} 
                      alt="Plate #44 Full View" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-4 text-xs font-mono">
                  <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase">Archive Registration</div>
                    <div className="text-sm font-bold text-stone-900 dark:text-stone-100 font-sans">
                      Plate #44 — The Continuum of Failure: Pb to AI
                    </div>
                    <div className="text-stone-500">Photographic Artwork ID: PHOTO-000AZ / IP-000AZ</div>
                    <div className="text-stone-500">Location: Washington, DC / Hyperscale Data Grids</div>
                    <div className="text-stone-500">Date Logged: September 9, 2026</div>
                  </div>

                  <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2">
                    <div className="text-stone-400 text-[10px] uppercase">Visual Composition Forensics</div>
                    <p className="font-sans text-stone-600 dark:text-stone-300 leading-relaxed">
                      A visual triptych contrasting 20th-century toxic chemistry (tetraethyl lead refineries, industrial stacks, neurotoxic brain scans) on the left, institutional latency and Congressional gavels in the center, and hyperscale frontier compute racks and autonomous AI swarms on the right.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {onNavigateTab && (
                      <button
                        onClick={() => onNavigateTab('norm_roulet')}
                        className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-xl font-sans font-bold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <Award size={13} className="text-amber-400" />
                        <span>View in Photography Archive</span>
                      </button>
                    )}

                    {onNavigateTab && (
                      <button
                        onClick={() => onNavigateTab('sovereign_portal')}
                        className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-white rounded-xl font-sans font-bold flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <ShieldAlert size={13} className="text-emerald-400" />
                        <span>View in Sovereign IP Portal</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* MODAL: FULL RESOLUTION ARTWORK VIEWER */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-stone-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-950 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] font-bold rounded">
                  PLATE #44
                </span>
                <span className="font-bold text-sm">The Continuum of Failure: From Pb to Autonomous AI</span>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="overflow-auto p-4 flex items-center justify-center bg-black/60 flex-1">
              <img
                src={aiExistentialRiskImg}
                alt="Plate #44 Infographic Full Screen"
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl border border-stone-800"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 text-xs font-mono flex flex-wrap items-center justify-between gap-3 text-stone-400">
              <div className="flex items-center gap-2">
                <span>Vault Hash:</span>
                <span className="text-red-400 font-bold">{vaultHash}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-white rounded font-bold transition cursor-pointer flex items-center gap-1"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
                <button
                  onClick={() => setIsArtworkModalOpen(false)}
                  className="px-4 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-bold transition cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
