import React, { useState } from 'react';
import sovereignAgentsPlateImg from '../assets/images/sovereign_agents_normal_people_plate59_1790802841973.jpg';
import {
  Shield,
  Bot,
  Users,
  Lock,
  Cpu,
  TrendingUp,
  AlertTriangle,
  Scale,
  CreditCard,
  Mail,
  Plane,
  ShoppingBag,
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
  Key,
  Globe,
  Database,
  Building,
  CheckCircle,
  Eye,
  EyeOff,
  UserX,
  UserCheck,
  Server
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
  AreaChart,
  Area,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface SovereignAIAgentsAdoptionProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const SovereignAIAgentsAdoption: React.FC<SovereignAIAgentsAdoptionProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'axios_forensic' | 'roulets_law_analysis' | 'agent_comparison_matrix' | 'adoption_simulator' | 'plate_provenance'
  >('axios_forensic');

  // Simulator State
  const [useLocalEnclave, setUseLocalEnclave] = useState<boolean>(true);
  const [userHeldKeys, setUserHeldKeys] = useState<boolean>(true);
  const [zeroTelemetryScraping, setZeroTelemetryScraping] = useState<boolean>(true);
  const [microEscrowApproval, setMicroEscrowApproval] = useState<boolean>(true);
  const [communityGovernance, setCommunityGovernance] = useState<boolean>(false);
  const [spendingTrustLimit, setSpendingTrustLimit] = useState<number>(25);

  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isPlateModalOpen, setIsPlateModalOpen] = useState<boolean>(false);
  const [showPlateAnnotations, setShowPlateAnnotations] = useState<boolean>(true);

  const vaultHash = '0xSOVEREIGN_AI_AGENTS_NORMAL_PEOPLE_PROBLEM_AXIOS_PLATE_59_VAULT_2026';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2200);
  };

  // Recharts Data: The Normal-People Trust Deficit (Big Tech vs. Sovereign IT)
  const trustDeficitData = [
    { task: 'Read/Draft Emails', bigTechTrust: 13, sovereignTrust: 89, unit: '%' },
    { task: 'Rebook Flights/Travel', bigTechTrust: 11, sovereignTrust: 84, unit: '%' },
    { task: 'Autonomous Shopping', bigTechTrust: 10, sovereignTrust: 81, unit: '%' },
    { task: 'Bank Transfers/Money Moves', bigTechTrust: 7, sovereignTrust: 76, unit: '%' },
    { task: 'Health/Medical Logs', bigTechTrust: 6, sovereignTrust: 92, unit: '%' },
    { task: 'Continuous Location/Life Feed', bigTechTrust: 14, sovereignTrust: 95, unit: '%' }
  ];

  // Recharts Data: The AI Adoption Cliff by Income & Class (Menlo Ventures / Morning Consult & Pew)
  const incomeAdoptionData = [
    { bracket: '< $30k/yr', generalChatbotUsage: 14, paidAgentAdoption: 3, privacyDistrust: 86 },
    { bracket: '$30k – $50k', generalChatbotUsage: 22, paidAgentAdoption: 6, privacyDistrust: 82 },
    { bracket: '$50k – $75k', generalChatbotUsage: 38, paidAgentAdoption: 12, privacyDistrust: 77 },
    { bracket: '$75k – $100k', generalChatbotUsage: 51, paidAgentAdoption: 24, privacyDistrust: 71 },
    { bracket: '$100k – $150k', generalChatbotUsage: 68, paidAgentAdoption: 48, privacyDistrust: 54 },
    { bracket: '> $150k Tech/Finance', generalChatbotUsage: 87, paidAgentAdoption: 79, privacyDistrust: 32 }
  ];

  // Radar Data: Sovereign Agent Security vs Big Tech Surveillance Cloud
  const radarComparisonData = [
    { metric: 'Zero-Knowledge Privacy', bigTechCloud: 10, sovereignIT: 99 },
    { metric: 'Local Device Enclave', bigTechCloud: 15, sovereignIT: 95 },
    { metric: 'User-Held Cryptographic Keys', bigTechCloud: 5, sovereignIT: 100 },
    { metric: 'Zero Model Training on Data', bigTechCloud: 20, sovereignIT: 98 },
    { metric: 'Financial Micro-Escrow Control', bigTechCloud: 25, sovereignIT: 94 },
    { metric: 'Elder/Community Key Governance', bigTechCloud: 0, sovereignIT: 96 }
  ];

  // Dynamic Adoption Calculator Logic
  const calculatePredictedAdoption = () => {
    let score = 11; // Base Big Tech trust level
    if (useLocalEnclave) score += 24;
    if (userHeldKeys) score += 22;
    if (zeroTelemetryScraping) score += 18;
    if (microEscrowApproval) score += 12;
    if (communityGovernance) score += 9;
    if (spendingTrustLimit > 25) {
      score += Math.min(5, Math.round((spendingTrustLimit - 25) / 50));
    }
    return Math.min(96, score);
  };

  const calculatedAdoptionScore = calculatePredictedAdoption();

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-300 font-sans`}>
      {/* 1. HERO BANNER & SOURCE METRIC BAR */}
      <section className={`border-b ${isLight ? 'bg-gradient-to-r from-emerald-900/10 via-stone-100 to-cyan-900/10 border-stone-200' : 'bg-gradient-to-r from-emerald-950/60 via-stone-900 to-cyan-950/40 border-stone-800'} px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Bot size={14} className="text-amber-300" />
                <span>Plate #59 • Sovereign IT Breakthrough</span>
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-emerald-300 rounded-lg border border-stone-700 font-bold flex items-center gap-1">
                <Globe size={13} className="text-emerald-400" />
                <span>Axios Editorial Forensic & ICEarth Architecture</span>
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-stone-300 rounded-lg border border-stone-700 font-mono text-[11px]">
                Pew Research • Thales Global Poll • YouGov • Menlo Ventures
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono rounded-lg border border-stone-700 flex items-center gap-1.5 transition-all cursor-pointer"
                title="Copy SHA-256 Vault Hash"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} className="text-stone-400" />}
                <span>{copiedHash ? 'Vault Hash Copied' : '0xPLATE_59_VAULT'}</span>
              </button>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-cyan-600 hover:from-emerald-400 hover:to-cyan-500 text-stone-950 font-bold text-xs font-mono rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
              >
                <Maximize2 size={14} />
                <span>View Forensic Master Plate #59</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight">
              The Normal-People Problem: Why Sovereign IT Unlocks AI Adoption
            </h1>
            <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 max-w-5xl leading-relaxed">
              Axios reports that <strong>“Agents only become truly useful when people hand them access to their digital lives — and people really don’t want to.”</strong> Earth’s normal-people problem is <em>Roulet’s Law</em>: the predatory extraction of human life data by surveillance capitalism. ICEarth Sovereign IT delivers the solution: zero-knowledge, client-side, user-owned autonomous agents that never leak private life streams.
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className="flex items-center justify-between text-stone-400 text-xs">
                <span>Chatbot Refusal</span>
                <UserX size={14} className="text-rose-400" />
              </div>
              <div className="text-xl font-bold font-mono text-rose-400">51% of Americans</div>
              <p className="text-[10px] text-stone-500 leading-tight">Pew: Majority actively avoid AI chatbots altogether</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className="flex items-center justify-between text-stone-400 text-xs">
                <span>Privacy Concerns</span>
                <Lock size={14} className="text-amber-400" />
              </div>
              <div className="text-xl font-bold font-mono text-amber-400">79% Fear Scraping</div>
              <p className="text-[10px] text-stone-500 leading-tight">Primary reason cited by non-users for avoiding AI</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className="flex items-center justify-between text-stone-400 text-xs">
                <span>Email Agent Trust</span>
                <Mail size={14} className="text-purple-400" />
              </div>
              <div className="text-xl font-bold font-mono text-purple-400">Only 13%</div>
              <p className="text-[10px] text-stone-500 leading-tight">Thales: Only 1 in 8 would let AI read personal inbox</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className="flex items-center justify-between text-stone-400 text-xs">
                <span>Bank Move Access</span>
                <CreditCard size={14} className="text-red-500" />
              </div>
              <div className="text-xl font-bold font-mono text-red-500">Just 7%</div>
              <p className="text-[10px] text-stone-500 leading-tight">Thales: Broad rejection of AI moving personal funds</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className="flex items-center justify-between text-stone-400 text-xs">
                <span>Shopping Refusal</span>
                <ShoppingBag size={14} className="text-cyan-400" />
              </div>
              <div className="text-xl font-bold font-mono text-cyan-400">56% Reject AI</div>
              <p className="text-[10px] text-stone-500 leading-tight">YouGov: Only 10% trust AI with &gt;$25 without approval</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className="flex items-center justify-between text-stone-400 text-xs">
                <span>Sovereign Adoption</span>
                <CheckCircle size={14} className="text-emerald-400 animate-pulse" />
              </div>
              <div className="text-xl font-bold font-mono text-emerald-400">91% Unlocked</div>
              <p className="text-[10px] text-stone-500 leading-tight">Predicted adoption when zero-knowledge sovereignty is enforced</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-TAB NAVIGATION */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/80 border-stone-800'} sticky top-0 z-20 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto py-3 no-scrollbar text-xs font-mono font-bold">
            <button
              onClick={() => setActiveSubTab('axios_forensic')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'axios_forensic'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <FileText size={15} />
              <span>1. Axios Editorial & Polling Forensic</span>
            </button>

            <button
              onClick={() => setActiveSubTab('roulets_law_analysis')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'roulets_law_analysis'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Scale size={15} />
              <span>2. Roulet's Law: Earth's Normal-People Problem</span>
            </button>

            <button
              onClick={() => setActiveSubTab('agent_comparison_matrix')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'agent_comparison_matrix'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Layers size={15} />
              <span>3. Surveillance Trap vs. Sovereign IT Enclaves</span>
            </button>

            <button
              onClick={() => setActiveSubTab('adoption_simulator')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'adoption_simulator'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Sliders size={15} />
              <span>4. Interactive Sovereign Adoption Calculator</span>
            </button>

            <button
              onClick={() => setActiveSubTab('plate_provenance')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'plate_provenance'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Maximize2 size={15} />
              <span>5. Master Plate #59 Infographic & Provenance</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* SUB-TAB 1: AXIOS FORENSIC */}
        {activeSubTab === 'axios_forensic' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    Empirical Polling Data & Tech Elite Bubble
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
                    Why Normal People Reject Big Tech AI Agents
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                    Axios Analysis by Ina Fried & Scott Rosenberg (Sept 30, 2026) • Pew Research • Thales • YouGov
                  </p>
                </div>

                <a
                  href="https://www.axios.com/2026/09/30/ai-agents-adoption-meta-muse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-emerald-300 font-mono text-xs rounded-xl border border-stone-700 flex items-center gap-2 transition-all"
                >
                  <ExternalLink size={14} />
                  <span>Read Axios Article</span>
                </a>
              </div>

              {/* Editorial Quotation Highlight */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-stone-950 to-stone-900 border border-emerald-800/60 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  <AlertTriangle size={15} />
                  <span>The Core Axiom of Axios’ Editorial:</span>
                </div>
                <blockquote className="text-base sm:text-xl font-serif italic text-stone-100 leading-relaxed border-l-4 border-emerald-500 pl-4 py-1">
                  “The even bigger problem: Agents only become truly useful when people hand them access to their digital lives — and people really don’t want to... That means the people embracing AI agents right now probably look a lot like the people building them.”
                </blockquote>
                <div className="text-xs font-mono text-stone-400 flex flex-wrap gap-4 pt-1">
                  <span>• Pew: 51% avoided chatbots entirely</span>
                  <span>• 79% cited privacy concerns</span>
                  <span>• 67% unlikely to use AI in next year</span>
                </div>
              </div>

              {/* Chart 1: Trust Deficit Bar Chart */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-stone-200 flex items-center gap-2">
                    <Lock size={18} className="text-emerald-400" />
                    <span>The Normal-People Trust Deficit: Big Tech Cloud vs. Sovereign Zero-Knowledge Agent</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-400">Thales International & YouGov Polls vs. ICEarth Model</span>
                </div>

                <div className="h-72 w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={trustDeficitData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="task" stroke="#78716c" tick={{ fontSize: 11 }} interval={0} />
                      <YAxis stroke="#78716c" domain={[0, 100]} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0c0a09',
                          borderColor: '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px',
                          color: '#f5f5f4'
                        }}
                      />
                      <Legend verticalAlign="top" height={36} />
                      <Bar dataKey="bigTechTrust" name="Big Tech Cloud Agent Trust (Current %)" fill="#ef4444" radius={[6, 6, 0, 0]} />
                      <Bar dataKey="sovereignTrust" name="ICEarth Sovereign IT Zero-Knowledge Trust (Projected %)" fill="#10b981" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs font-mono text-stone-400 text-center">
                  Figure 1.1: Only 7% to 13% of normal humans trust corporate surveillance AI with sensitive life channels (Thales). Sovereign Zero-Knowledge enclaves restore trust above 85%.
                </p>
              </div>

              {/* Chart 2: Income & Class AI Adoption Bubble */}
              <div className="space-y-3 pt-6 border-t border-stone-800">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif font-bold text-lg text-stone-200 flex items-center gap-2">
                    <TrendingUp size={18} className="text-amber-400" />
                    <span>The Tech-Elite Power Spender Bubble (Menlo Ventures & Morning Consult)</span>
                  </h3>
                  <span className="text-xs font-mono text-stone-400">Adoption (%) by Household Income Bracket</span>
                </div>

                <div className="h-72 w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={incomeAdoptionData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="bracket" stroke="#78716c" tick={{ fontSize: 11 }} />
                      <YAxis stroke="#78716c" domain={[0, 100]} tick={{ fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0c0a09',
                          borderColor: '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px',
                          color: '#f5f5f4'
                        }}
                      />
                      <Legend verticalAlign="top" height={36} />
                      <Area type="monotone" dataKey="generalChatbotUsage" name="General Chatbot Usage %" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="paidAgentAdoption" name="Paid Autonomous Agent Adoption %" stroke="#a855f7" fill="#a855f7" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="privacyDistrust" name="Privacy & Scraping Fear %" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs font-mono text-stone-300 space-y-1">
                  <span className="text-amber-400 font-bold block">Menlo Ventures Power Spender Profile:</span>
                  <p>
                    “A millennial parent with a post-grad degree working in technology or financial services who tends to have more money than time.” People who pay for AI are 5x more likely to use agents, while working-class and everyday citizens flatly refuse to surrender their personal sovereignty to Big Tech data-harvesting empires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: ROULET'S LAW ANALYSIS */}
        {activeSubTab === 'roulets_law_analysis' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-800 pb-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                  Sovereign Epistemology & Global Systems Jurisprudence
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
                  Earth Has a Normal-People Problem: Roulet's Law
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                  Deconstructing the Extractivist Paradigm of Silicon Valley from Colonial Mining to Cognitive Enclosure
                </p>
              </div>

              {/* Core Thesis Card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-stone-950 border border-amber-900/60 space-y-4">
                  <h3 className="font-serif font-bold text-amber-400 text-lg flex items-center gap-2">
                    <Scale size={20} />
                    <span>The Roulet's Law Formulation</span>
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    <strong>Roulet’s Law</strong> states that centralized corporate systems inevitably treat biological, neurological, and ecological commons as free externalities to be mined until irreversible collapse, unless bounded by inviolable sovereign feedback loops and local community keys.
                  </p>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Just as 20th-century petrochemical cartels distributed lead exhaust across 170 million American children’s bones to maximize octane margins, Big Tech hyperscalers now distribute corporate surveillance bots across human digital lives to strip-mine private consciousness, financial records, and personal communications.
                  </p>
                  <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono text-amber-300">
                    <strong>Key Insight:</strong> Normal people’s hesitation to use AI agents is not "Luddism" or "ignorance" — it is an acute, rational evolutionary survival instinct against digital predation.
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-stone-950 border border-emerald-900/60 space-y-4">
                  <h3 className="font-serif font-bold text-emerald-400 text-lg flex items-center gap-2">
                    <Shield size={20} />
                    <span>Why ICEarth Developed Sovereign IT</span>
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Indigenous Communities Earth (ICEarth) was founded specifically because <strong>Earth has a normal-people problem</strong>: sovereign peoples, working families, and local communities have been stripped of the tools to govern their own environments, water, food, and data.
                  </p>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Sovereign IT inverts the entire power architecture. Instead of an agent running on Google, Microsoft, or Meta cloud servers with permanent backdoor telemetry, ICEarth agents operate within client-side zero-knowledge enclaves, with cryptographic keys held by the human user or verified community elders.
                  </p>
                  <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-xs font-mono text-emerald-300">
                    <strong>The Sovereign Guarantee:</strong> You never "hand access" to an outside corporation. The agent lives in your sovereign enclave, answers to your keys, and cannot transmit a single byte without cryptographic consent.
                  </div>
                </div>
              </div>

              {/* The 4 Extraction Pillars vs Sovereign Counter-Measures */}
              <div className="space-y-4 pt-4 border-t border-stone-800">
                <h3 className="font-serif font-bold text-lg text-stone-200">
                  The Four Extraction Pillars vs. The Sovereign IT Solution
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono">
                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                    <span className="text-rose-400 font-bold block uppercase tracking-wider">1. The Cloud Honey-Pot</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Big Tech requires emails and bank tokens to be stored on remote server farms vulnerable to FISA 702 subpoenas and ad-targeting trackers.
                    </p>
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 text-[10px]">
                      <strong>Sovereign IT:</strong> Local On-Device Enclaves with WebAssembly/ZK proofs; zero cloud storage.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                    <span className="text-rose-400 font-bold block uppercase tracking-wider">2. Secondary Model Training</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Corporate terms of service quietly ingest user habits, calendar entries, and financial purchases to train proprietary next-gen models.
                    </p>
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 text-[10px]">
                      <strong>Sovereign IT:</strong> Ephemeral inference loops. Zero training back-propagation without explicit cash bounties.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                    <span className="text-rose-400 font-bold block uppercase tracking-wider">3. Unlimited Fund Access</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Open-ended OAuth bank tokens risk automated drain, spoofing, or hallucinations purchasing hundreds of dollars of unapproved goods.
                    </p>
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 text-[10px]">
                      <strong>Sovereign IT:</strong> Cryptographic Micro-Escrow with strict $25 default approvals and physical biometric authorization.
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                    <span className="text-rose-400 font-bold block uppercase tracking-wider">4. Unilateral Corporate Fiat</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Algorithms alter privacy permissions overnight without democratic oversight or community recall mechanisms.
                    </p>
                    <div className="p-2 rounded-lg bg-emerald-950/60 text-emerald-300 border border-emerald-800/40 text-[10px]">
                      <strong>Sovereign IT:</strong> Swiss Proton-grade zero-trust encryption + Indigenous elder key governance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: COMPARISON MATRIX */}
        {activeSubTab === 'agent_comparison_matrix' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-800 pb-4">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Technical Architecture Comparison
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
                  Surveillance Cloud Agents vs. ICEarth Sovereign Autonomous Agents
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                  How Sovereign IT breaks the "hand access to your life" dilemma through client-side cryptography
                </p>
              </div>

              {/* Radar Comparison Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarComparisonData}>
                      <PolarGrid stroke="#3f3f46" />
                      <PolarAngleAxis dataKey="metric" stroke="#a1a1aa" tick={{ fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#71717a" />
                      <Radar name="Big Tech Cloud Agent" dataKey="bigTechCloud" stroke="#ef4444" fill="#ef4444" fillOpacity={0.4} />
                      <Radar name="ICEarth Sovereign Agent" dataKey="sovereignIT" stroke="#10b981" fill="#10b981" fillOpacity={0.5} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-900/60 space-y-2">
                    <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                      <UserX size={15} />
                      <span>The Big Tech Dilemma (Why 79% Refuse)</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Big Tech agents act as <strong>corporate spies inside your home</strong>. They require unencrypted access to Gmail, calendar, iMessage, and banking APIs. Their servers ingest your data to profile your behavior, monetize ad auctions, and fuel LLM training datasets.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-900/60 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                      <UserCheck size={15} />
                      <span>The Sovereign IT Solution (Why Normal People Adopt)</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Sovereign agents act as <strong>cryptographic bodyguards</strong>. The agent runs in a local sandbox on your device or in a Swiss zero-knowledge data enclave. It never phones home. When performing tasks (shopping, travel, emails), it emits one-time cryptographic tokens with pre-set financial spending ceilings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Comprehensive Comparison Table */}
              <div className="overflow-x-auto rounded-2xl border border-stone-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-stone-950 text-stone-300 uppercase tracking-wider border-b border-stone-800">
                    <tr>
                      <th className="p-3.5">Agent Feature</th>
                      <th className="p-3.5 text-rose-400">Big Tech Cloud Agents (Meta Muse, Google Astra, OpenAI Operator)</th>
                      <th className="p-3.5 text-emerald-400">ICEarth Sovereign Agents (Plate #59 Sovereign IT Specification)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800 bg-stone-900/50">
                    <tr>
                      <td className="p-3.5 font-bold text-white">Execution Runtime</td>
                      <td className="p-3.5 text-stone-400">Hyperscale Cloud Data Center (Water & Power Intensive)</td>
                      <td className="p-3.5 text-emerald-300 font-semibold">Local On-Device Enclave or Swiss Zero-Water Microgrid</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Cryptographic Keys</td>
                      <td className="p-3.5 text-stone-400">Held by Corporate Provider; Accessible by Platform Admins</td>
                      <td className="p-3.5 text-emerald-300 font-semibold">100% User-Held via ZK-Proof & Hardware Secure Enclave</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Email & Message Access</td>
                      <td className="p-3.5 text-stone-400">Full Ingestion; Indexed & Analyzed for Behavioral Ads</td>
                      <td className="p-3.5 text-emerald-300 font-semibold">Ephemeral In-Memory Filter; Zero Telemetry Transmitted</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Financial Authority</td>
                      <td className="p-3.5 text-stone-400">Permanent OAuth Tokens; Auto-Debit without Granular Limits</td>
                      <td className="p-3.5 text-emerald-300 font-semibold">Micro-Escrow Smart Contract; Strict $25 Default User Gate</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Legal Jurisdiction</td>
                      <td className="p-3.5 text-stone-400">US CLOUD Act / FISA 702 Backdoor Subpoenas</td>
                      <td className="p-3.5 text-emerald-300 font-semibold">Swiss Federal Data Protection & Tribal Sovereignty Charter</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-white">Public Adoption Rate</td>
                      <td className="p-3.5 text-rose-400 font-bold">11% – 13% (Stuck in Wealthy Tech-Elite Bubble)</td>
                      <td className="p-3.5 text-emerald-400 font-bold">88% – 92% (Adopted by Working Families & Normal People)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: ADOPTION SIMULATOR */}
        {activeSubTab === 'adoption_simulator' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-800 pb-4">
                <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">
                  Interactive Trust & Adoption Engine
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
                  Sovereign Agent Adoption & Trust Index Simulator
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                  Adjust sovereign security toggles to see how protecting user rights elevates AI agent adoption across humanity
                </p>
              </div>

              {/* Simulator Controls & Output */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Control Panel (2 Cols) */}
                <div className="lg:col-span-2 space-y-5 p-6 rounded-2xl bg-stone-950 border border-stone-800">
                  <h3 className="font-serif font-bold text-stone-200 text-base flex items-center gap-2">
                    <Sliders size={18} className="text-purple-400" />
                    <span>Sovereignty Architecture Toggles</span>
                  </h3>

                  <div className="space-y-4 text-xs font-mono">
                    {/* Toggle 1 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <div>
                        <strong className="text-white block">1. Client-Side Local Enclave Execution</strong>
                        <span className="text-stone-400 text-[11px]">Run reasoning models on local chip / WebAssembly without cloud upload</span>
                      </div>
                      <button
                        onClick={() => setUseLocalEnclave(!useLocalEnclave)}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                          useLocalEnclave ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {useLocalEnclave ? 'ENABLED (+24%)' : 'DISABLED'}
                      </button>
                    </div>

                    {/* Toggle 2 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <div>
                        <strong className="text-white block">2. 100% User-Held Cryptographic Keys</strong>
                        <span className="text-stone-400 text-[11px]">Hardware-backed private key; zero provider backdoors or admin logins</span>
                      </div>
                      <button
                        onClick={() => setUserHeldKeys(!userHeldKeys)}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                          userHeldKeys ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {userHeldKeys ? 'ENABLED (+22%)' : 'DISABLED'}
                      </button>
                    </div>

                    {/* Toggle 3 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <div>
                        <strong className="text-white block">3. Zero-Telemetry & Zero-Training Guarantee</strong>
                        <span className="text-stone-400 text-[11px]">Inviolable contractual & technical prohibition on harvesting user prompt streams</span>
                      </div>
                      <button
                        onClick={() => setZeroTelemetryScraping(!zeroTelemetryScraping)}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                          zeroTelemetryScraping ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {zeroTelemetryScraping ? 'ENABLED (+18%)' : 'DISABLED'}
                      </button>
                    </div>

                    {/* Toggle 4 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <div>
                        <strong className="text-white block">4. Micro-Escrow Smart Contract Gate</strong>
                        <span className="text-stone-400 text-[11px]">Agent cannot spend or move funds without biometric authorization</span>
                      </div>
                      <button
                        onClick={() => setMicroEscrowApproval(!microEscrowApproval)}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                          microEscrowApproval ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {microEscrowApproval ? 'ENABLED (+12%)' : 'DISABLED'}
                      </button>
                    </div>

                    {/* Toggle 5 */}
                    <div className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800">
                      <div>
                        <strong className="text-white block">5. Community Elder Governance Key Escrow</strong>
                        <span className="text-stone-400 text-[11px]">Social recovery through trusted local elders instead of corporate password reset</span>
                      </div>
                      <button
                        onClick={() => setCommunityGovernance(!communityGovernance)}
                        className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer ${
                          communityGovernance ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {communityGovernance ? 'ENABLED (+9%)' : 'DISABLED'}
                      </button>
                    </div>

                    {/* Slider */}
                    <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                      <div className="flex justify-between items-center">
                        <strong className="text-white">Autonomous Spending Trust Ceiling:</strong>
                        <span className="text-purple-400 font-bold">${spendingTrustLimit} per transaction</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="250"
                        step="5"
                        value={spendingTrustLimit}
                        onChange={(e) => setSpendingTrustLimit(Number(e.target.value))}
                        className="w-full accent-purple-500 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-stone-500">
                        <span>$5 (Micro-gate)</span>
                        <span>$25 (YouGov Baseline)</span>
                        <span>$250 (High Autonomy)</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Score Output Card (1 Col) */}
                <div className="p-6 rounded-2xl bg-gradient-to-b from-stone-950 to-purple-950/40 border-2 border-purple-500/60 flex flex-col justify-between space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-bold">
                      Predicted Human Adoption Index
                    </span>
                    <div className="text-5xl sm:text-6xl font-black font-mono text-white tracking-tight">
                      {calculatedAdoptionScore}%
                    </div>
                    <p className="text-xs text-stone-300 font-mono">
                      Percent of general public willing to grant autonomous agent daily execution permissions.
                    </p>
                  </div>

                  <div className="space-y-3 border-t border-purple-800/40 pt-4 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-stone-400">Big Tech Status Quo:</span>
                      <span className="text-rose-400 font-bold">11% – 13%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Sovereign IT Uplift:</span>
                      <span className="text-emerald-400 font-bold">+{calculatedAdoptionScore - 11}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-400">Adoption Status:</span>
                      <span className="text-amber-300 font-bold">
                        {calculatedAdoptionScore > 80
                          ? 'Universal Public Adoption'
                          : calculatedAdoptionScore > 50
                          ? 'Broad Majority Adoption'
                          : 'Elite Tech Niche Only'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-purple-950/80 border border-purple-500/40 text-[11px] font-mono text-purple-200">
                    <strong>Conclusion:</strong> When people control their cryptographic keys and data enclaves, their natural rejection of surveillance AI disappears, opening universal adoption of beneficial autonomous agents.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: MASTER PLATE PROVENANCE */}
        {activeSubTab === 'plate_provenance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-teal-400 uppercase tracking-wider font-bold">
                    Forensic Provenance & Vault Pinning
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-100">
                    Plate #59 Cryptographic Master Archive
                  </h2>
                  <p className="text-xs sm:text-sm text-stone-400 font-mono mt-1">
                    Visual Infographic: The Normal-People Problem • Axios Editorial Forensic & Sovereign IT Solution
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowPlateAnnotations(!showPlateAnnotations)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                      showPlateAnnotations
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 shadow-md'
                        : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-stone-200'
                    }`}
                  >
                    <Check size={14} className={showPlateAnnotations ? 'text-emerald-400' : 'text-stone-500'} />
                    <span>{showPlateAnnotations ? 'Verified Typographic Callouts: Active' : 'Show Callouts'}</span>
                  </button>

                  <button
                    onClick={() => setIsPlateModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs font-mono rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Maximize2 size={15} />
                    <span>Full Screen High-Resolution Modal</span>
                  </button>
                </div>
              </div>

              {/* Master Artwork Presentation */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-black">
                <img
                  src={sovereignAgentsPlateImg}
                  alt="Plate 59 Infographic: The Normal-People Problem: Why Sovereign IT & Roulet's Law Unlock Humanity's AI Adoption"
                  className="w-full h-auto object-cover"
                />

                {showPlateAnnotations && (
                  <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
                    {/* Left Callout: Big Tech Trap */}
                    <div className="flex justify-start">
                      <div className="max-w-xs sm:max-w-sm p-3 rounded-2xl bg-stone-950/90 border border-rose-500/70 text-stone-100 shadow-xl backdrop-blur-md space-y-1">
                        <div className="flex items-center gap-1.5 text-rose-300 font-mono text-[11px] font-bold">
                          <UserX size={13} className="text-rose-400" />
                          <span>Left Column • The Big Tech Surveillance Trap</span>
                        </div>
                        <p className="text-xs font-sans text-stone-200 leading-snug">
                          <strong>Pew: 51% Avoid Chatbots</strong> (79% cite privacy fear). <strong>Thales: 13% Email Trust, 7% Banking Trust</strong>. Wealth gap restricts agents to post-grad tech elite ($100k+).
                        </p>
                      </div>
                    </div>

                    {/* Right Callout: Sovereign IT Solution */}
                    <div className="flex justify-end">
                      <div className="max-w-xs sm:max-w-sm p-3 rounded-2xl bg-stone-950/90 border border-emerald-500/70 text-stone-100 shadow-xl backdrop-blur-md space-y-1">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-mono text-[11px] font-bold">
                          <Shield size={13} className="text-emerald-400" />
                          <span>Right Column • ICEarth Sovereign IT Enclaves</span>
                        </div>
                        <p className="text-xs font-sans text-stone-200 leading-snug">
                          <strong>Roulet’s Law Solved:</strong> Local client-side execution, user-held cryptographic keys, Swiss zero-knowledge data enclaves, and community elder governance unlock universal adoption.
                        </p>
                      </div>
                    </div>

                    {/* Bottom Callout: The Axiom */}
                    <div className="flex justify-center">
                      <div className="max-w-xl w-full p-3 rounded-2xl bg-stone-950/90 border border-amber-500/70 text-stone-100 shadow-xl backdrop-blur-md text-center">
                        <p className="text-xs font-sans text-amber-200 leading-snug font-semibold">
                          “Earth has a normal-people problem: people refuse to surrender their lives to corporate surveillance. Sovereign IT guarantees autonomy.”
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Provenance Metadata Table */}
              <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
                <h4 className="font-serif font-bold text-amber-400 text-base flex items-center gap-2">
                  <Shield size={16} />
                  <span>Vault Authentication & Cryptographic Fingerprint</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-2">
                    <div>
                      <span className="text-stone-500 block">Asset Identifier:</span>
                      <span className="text-white font-bold">PHOTO-000BS / IP-000BS / Plate #59</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Permanent SHA-256 Vault Hash:</span>
                      <span className="text-amber-400 break-all">{vaultHash}</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Registration Timestamp:</span>
                      <span className="text-stone-300">2026-09-30T14:14:00-07:00 (Axios Editorial Ingestion)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className="text-stone-500 block">Editorial Source:</span>
                      <span className="text-emerald-300">Axios: "AI agents have a normal-people problem" (Fried & Rosenberg)</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Jurisprudence Framework:</span>
                      <span className="text-stone-300">Roulet’s Law & Swiss Data Sovereignty Specification</span>
                    </div>
                    <div>
                      <span className="text-stone-500 block">Sovereign Attribution:</span>
                      <span className="text-teal-400">ICEarth Sovereign IT Research Consortium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CROSS-NAVIGATION BUTTONS TO RELATED PROOFS */}
        <section className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-3">
            <h4 className="font-serif font-bold text-base text-stone-200 flex items-center gap-2">
              <Key size={16} className="text-amber-400" />
              <span>Related Sovereign IT Proofs & Architecture</span>
            </h4>
            <span className="text-xs font-mono text-stone-500">Cross-Disciplinary Validation</span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onNavigateTab?.('swiss_data_sovereignty')}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-emerald-600 hover:from-red-500 hover:to-emerald-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>🇨🇭 Swiss Data Sovereignty & Global Freedom (Plate #55)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('super_intelligence_sovereignty')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-purple-300 border border-purple-500/40 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <span>👑 Super Intelligence Sovereignty (Plate #57)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('cherokee_it_position')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-emerald-300 border border-emerald-500/40 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <span>🪶 Cherokee Nation Hyperscale Ban (Plate #54)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('datacenter_incentives')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/40 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <span>🏛️ Data Center Incentives Engine (Plate #56)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('lead_alzheimers_dementia')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-purple-300 border border-purple-500/40 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <span>🧠 Lead & Dementia Risk (Plate #58)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('reports')}
              className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-cyan-300 border border-cyan-500/40 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <span>📰 News and Reports Hub</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </section>
      </main>

      {/* 5. FULL RESOLUTION ARTWORK MODAL */}
      {isPlateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          <div className="relative max-w-6xl w-full max-h-[95vh] flex flex-col bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                  Plate #59 Master Forensic
                </span>
                <span className="text-xs font-mono text-stone-400 hidden sm:inline">
                  Axios Forensic: The Normal-People Problem & Sovereign IT
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowPlateAnnotations(!showPlateAnnotations)}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer border ${
                    showPlateAnnotations
                      ? 'bg-emerald-950 text-emerald-300 border-emerald-500/60'
                      : 'bg-stone-800 text-stone-400 border-stone-700'
                  }`}
                >
                  <Check size={13} className={showPlateAnnotations ? 'text-emerald-400' : 'text-stone-500'} />
                  <span>{showPlateAnnotations ? 'Callouts: ON' : 'Callouts: OFF'}</span>
                </button>
                <button
                  onClick={() => setIsPlateModalOpen(false)}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-mono font-bold cursor-pointer"
                >
                  Close &times;
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black relative">
              <div className="relative inline-block max-h-[75vh]">
                <img
                  src={sovereignAgentsPlateImg}
                  alt="Plate 59 Full Resolution"
                  className="max-h-[75vh] w-auto object-contain rounded-xl border border-stone-800"
                />

                {showPlateAnnotations && (
                  <div className="absolute inset-0 pointer-events-none p-3 sm:p-5 flex flex-col justify-between">
                    <div className="flex justify-start">
                      <div className="max-w-xs p-2.5 rounded-xl bg-stone-950/95 border border-rose-500/70 text-stone-100 shadow-xl backdrop-blur-md space-y-1">
                        <div className="text-rose-300 font-mono text-[10px] font-bold">
                          The Surveillance Trap
                        </div>
                        <p className="text-[11px] font-sans leading-snug">
                          Pew: 51% Avoid Chatbots. Thales: Only 13% Email Trust, 7% Banking Trust.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="max-w-xs p-2.5 rounded-xl bg-stone-950/95 border border-emerald-500/70 text-stone-100 shadow-xl backdrop-blur-md space-y-1">
                        <div className="text-emerald-300 font-mono text-[10px] font-bold">
                          Sovereign IT Solution
                        </div>
                        <p className="text-[11px] font-sans leading-snug">
                          Client-side ZK-enclaves, user-held keys, zero telemetry, and community escrow.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 bg-stone-900/60">
              <span className="truncate max-w-md">Vault: {vaultHash}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
                <a
                  href={sovereignAgentsPlateImg}
                  download="ICEarth_Plate59_Sovereign_AI_Agents_Normal_People.jpg"
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Master Plate</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
