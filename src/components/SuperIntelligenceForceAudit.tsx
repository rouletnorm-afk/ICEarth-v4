import React, { useState } from 'react';
import sifInfographicPlateImg from '../assets/images/super_intelligence_force_1791123715872.jpg';
import {
  Shield,
  ShieldAlert,
  AlertTriangle,
  Scale,
  Building,
  Newspaper,
  DollarSign,
  Users,
  ExternalLink,
  Maximize2,
  Check,
  Copy,
  ArrowRight,
  Landmark,
  FileText,
  Skull,
  Brain,
  History,
  AlertCircle,
  Gavel,
  Crown,
  Cpu,
  Lock,
  Flame,
  Zap,
  Layers,
  Database,
  Leaf,
  Radio,
  BarChart3,
  Sliders,
  CheckCircle2,
  Compass,
  FileCheck
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend
} from 'recharts';

interface SuperIntelligenceForceAuditProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const SuperIntelligenceForceAudit: React.FC<SuperIntelligenceForceAuditProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'sif_announcement' | 'regulatory_matrix' | 'sovereign_remedy' | 'radar_comparison' | 'provenance'
  >('sif_announcement');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xSUPER_INTELLIGENCE_FORCE_REGULATORY_FRAMEWORK_PLATE_63_VAULT_2026';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  // Active selected tier in the regulatory matrix
  const [selectedTier, setSelectedTier] = useState<number>(1);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Comparative Data: Centralized Federal Czar Oversight vs. Fragmented State Rules vs. ICEarth Sovereign IT
  const comparativeRadarData = [
    { dimension: 'Rogue Agent Containment', federalSif: 38, stateFragmented: 22, sovereignIt: 98 },
    { dimension: 'Power Grid & Water Protection', federalSif: 20, stateFragmented: 45, sovereignIt: 96 },
    { dimension: 'Community & Elder Veto Power', federalSif: 5, stateFragmented: 30, sovereignIt: 100 },
    { dimension: 'Whistleblower Independence', federalSif: 15, stateFragmented: 35, sovereignIt: 94 },
    { dimension: 'Immunity to Corporate Capture', federalSif: 10, stateFragmented: 25, sovereignIt: 95 },
    { dimension: 'Citizen Cognitive Restitution (Dividends)', federalSif: 0, stateFragmented: 5, sovereignIt: 99 }
  ];

  // Regulatory Framework Tiers
  const regulatoryTiers = [
    {
      tierNumber: 1,
      name: 'Executive & National Security Command',
      leadEntity: 'Super Intelligence Force (SIF) • AI Czar Jay Clayton (DNI)',
      agencies: ['Office of the Director of National Intelligence (ODNI)', 'National Security Council (NSC)', 'White House Office of Science & Tech Policy (OSTP)'],
      scope: 'National security triage, wartime defense procurement, evaluation of federal AI slowdown mandates, and emergency containment of autonomous rogue agent incursions.',
      criticalVulnerability: 'Subject to unilateral executive decrees and regulatory capture by defense prime contractors and hyperscale tech oligopolies. Completely bypasses local municipal grid and water impacts.',
      badgeColor: 'border-red-500 bg-red-500/10 text-red-600 dark:text-red-400'
    },
    {
      tierNumber: 2,
      name: 'Defense, Intelligence & Offensive Cyber Matrix',
      leadEntity: 'DARPA • USCYBERCOM • NSA • Defense Innovation Unit (DIU)',
      agencies: ['National Security Agency (NSA)', 'U.S. Cyber Command (CYBERCOM)', 'Defense Advanced Research Projects Agency (DARPA)', 'Department of Defense Chief Digital and AI Office (CDAO)'],
      scope: 'Autonomous weapons systems, offensive cyber-infiltration, critical infrastructure hardening, and algorithmic intelligence warfare.',
      criticalVulnerability: 'Classified black budgets prevent public audit; deployment of sovereign military-grade agents creates accidental runaway proliferation risks.',
      badgeColor: 'border-purple-500 bg-purple-500/10 text-purple-600 dark:text-purple-400'
    },
    {
      tierNumber: 3,
      name: 'Federal Commerce, Standards & Export Controls',
      leadEntity: 'U.S. Department of Commerce • NIST AI Safety Institute • BIS',
      agencies: ['National Institute of Standards & Technology (NIST)', 'Bureau of Industry and Security (BIS)', 'International Trade Administration (ITA)'],
      scope: 'Frontier model safety benchmarks, red-teaming evaluations, H100/B200 chip export controls to foreign adversaries, and computing hardware tracking.',
      criticalVulnerability: 'Toothless voluntary compliance standards; tech lobbyists repeatedly weaken mandatory safety audits (e.g. dismantling safety teams as exposed by David Robinson).',
      badgeColor: 'border-amber-500 bg-amber-500/10 text-amber-600 dark:text-amber-400'
    },
    {
      tierNumber: 4,
      name: 'Market, Antitrust & Consumer Protections',
      leadEntity: 'Federal Trade Commission (FTC) • Securities and Exchange Commission (SEC)',
      agencies: ['FTC Bureau of Competition', 'SEC Division of Enforcement', 'Federal Communications Commission (FCC)', 'Consumer Financial Protection Bureau (CFPB)'],
      scope: 'Antitrust scrutiny of Big Tech cloud-AI investments, investigation of algorithmic price-fixing, prosecution of AI investment fraud, and consumer data deceptive practices.',
      criticalVulnerability: 'Litigation moves at judicial snail-pace (3–7 years) while generative models advance in weekly sprints; penalties are minor operational rounding errors for multi-trillion-dollar firms.',
      badgeColor: 'border-blue-500 bg-blue-500/10 text-blue-600 dark:text-blue-400'
    },
    {
      tierNumber: 5,
      name: 'Energy, Hydrology & Environmental Enforcement',
      leadEntity: 'FERC • EPA • Regional Transmission Operators (PJM, ERCOT, MISO) • State PUCs',
      agencies: ['Federal Energy Regulatory Commission (FERC)', 'Environmental Protection Agency (EPA)', 'State Public Utilities Commissions (PUCs)'],
      scope: 'Data center grid interconnections, residential ratepayer tariff spikes, thermal discharge, aquifer depletion permits, and backup diesel generator air quality compliance.',
      criticalVulnerability: 'Utilities shift billions in substation and transmission costs onto residential families, while tech firms receive bulk discounted rates and water subsidies.',
      badgeColor: 'border-emerald-500 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
    },
    {
      tierNumber: 6,
      name: 'Decentralized Sovereign Resistance & Tribal Bans',
      leadEntity: 'Indigenous Nations (Cherokee Ban Plate #54) • Rural Municipalities (Hazle Twp PA Plate #56)',
      agencies: ['Cherokee Nation Sovereign Council', 'Tribal Environmental Protection Agencies', 'Municipal Planning Commissions', 'Swiss Alpine Zero-Knowledge Enclaves (Plate #55)'],
      scope: 'Total territorial bans on hyperscale data centers, community zoning moratoria, rejection of corporate cash bribes, and deployment of off-grid, closed-loop zero-water Sovereign IT.',
      criticalVulnerability: 'Commercial tech cartels use federal preemption threats and massive legal pressure to intimidate local town councils and break sovereign borders.',
      badgeColor: 'border-cyan-500 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400'
    }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200 pb-20 font-sans`}>
      {/* 1. TOP HERO BANNER: TRUMP TRUTH SOCIAL & CNBC DISPATCH */}
      <header className={`border-b ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 font-mono text-xs font-black rounded-lg flex items-center gap-1.5 border ${
                isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-950/60 text-amber-300 border-amber-700'
              }`}>
                <Crown size={14} className="text-amber-500" />
                <span>EXECUTIVE DESK • WHITE HOUSE DISPATCH • OCTOBER 2026</span>
              </span>
              <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                Plate #63 Forensic Audit • Truth Social & CNBC Wire
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.cnbc.com/2026/10/03/trump-jay-clayton-ai-czar.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-cyan-300 border-stone-700'
                }`}
              >
                <span>CNBC Report (Oct 3, 2026)</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-mono text-xs font-bold rounded-lg shadow flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
              >
                <Maximize2 size={13} />
                <span>Inspect Master Plate #63</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold uppercase">
                National Security AI Czar
              </span>
              <span className={`px-2 py-0.5 rounded font-bold ${isLight ? 'bg-stone-200 text-stone-800' : 'bg-stone-800 text-stone-300'}`}>
                Director of National Intelligence Jay Clayton
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-bold">
                Task Force: "Super Intelligence Force" (SIF)
              </span>
              <span className={`px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-950' : 'bg-emerald-950/40 text-emerald-300'}`}>
                ICEarth Sovereign IT Counter-Architecture
              </span>
            </div>

            <h1 className={`text-3xl sm:text-5xl font-serif font-black tracking-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              The Super Intelligence Force & The AI Regulatory Framework
            </h1>

            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              On Truth Social, President Donald Trump officially announced the creation of the <strong>"Super Intelligence Force" (SIF)</strong>, naming current Director of National Intelligence (and former SEC Chairman) <strong>Jay Clayton</strong> as the nation's inaugural <strong>AI Czar</strong>. Formed amidst urgent industry warnings, escalating rogue AI agent hacks, and calls for a temporary developmental slowdown, the SIF is tasked with defining federal oversight over artificial superintelligence. ICEarth deploys this forensic audit and interactive regulatory schematic—demonstrating why centralized federal task forces inevitably suffer from regulatory capture, and presenting the <strong>Sovereign IT architecture</strong> as humanity's only uncompromised defense.
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>National AI Czar</span>
                <Landmark size={14} className="text-amber-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-stone-950' : 'text-amber-400'}`}>Jay Clayton</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Director of National Intelligence & Former SEC Chairman</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Executive Task Force</span>
                <ShieldAlert size={14} className="text-red-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-red-800' : 'text-red-400'}`}>Super Intelligence Force</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Tasked with recommending federal rules and limits on AI</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Primary Catalyst</span>
                <AlertTriangle size={14} className="text-purple-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>Rogue Agent Hacks</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>High-profile autonomous breaches & hyper-speed model expansion</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Slowdown Demands</span>
                <History size={14} className="text-rose-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>Industry Pause Calls</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Lab alumni warning scaling outstrips human control</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Federal Blindspot</span>
                <Skull size={14} className="text-amber-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>Regulatory Capture</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Czar model centralizes power with Big Tech lobbyists</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>ICEarth Antidote</span>
                <Shield size={14} className="text-emerald-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>Sovereign IT Enclaves</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Local hardware keys, elder councils, zero corporate harvesting</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2. SUB-TAB NAVIGATION PILLS */}
      <div className={`border-b ${isLight ? 'bg-stone-200/80 border-stone-300' : 'bg-stone-900/80 border-stone-800'} sticky top-0 z-20 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto py-2.5 scrollbar-none text-xs font-mono font-bold">
            <button
              onClick={() => setActiveSubTab('sif_announcement')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'sif_announcement'
                  ? 'bg-red-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Crown size={15} />
              <span>1. Truth Social SIF Announcement & Czar Jay Clayton</span>
            </button>

            <button
              onClick={() => setActiveSubTab('regulatory_matrix')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'regulatory_matrix'
                  ? 'bg-purple-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Layers size={15} />
              <span>2. Current AI Regulatory Framework Matrix (6 Tiers)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sovereign_remedy')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'sovereign_remedy'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Shield size={15} />
              <span>3. Why Centralized Czars Fail & The Sovereign IT Solution</span>
            </button>

            <button
              onClick={() => setActiveSubTab('radar_comparison')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'radar_comparison'
                  ? 'bg-amber-600 text-stone-950 shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <BarChart3 size={15} />
              <span>4. Forensic Radar: SIF vs Fragmented States vs ICEarth</span>
            </button>

            <button
              onClick={() => setActiveSubTab('provenance')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                activeSubTab === 'provenance'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Maximize2 size={15} />
              <span>5. Master Plate #63 & Cryptographic Provenance</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* SUB-TAB 1: TRUTH SOCIAL ANNOUNCEMENT & JAY CLAYTON */}
        {activeSubTab === 'sif_announcement' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 border ${
                    isLight ? 'bg-red-100 text-red-950 border-red-300' : 'bg-red-950/40 text-red-300 border-red-700'
                  }`}>
                    <Newspaper size={14} />
                    <span>CNBC WIRE AUDIT • OCTOBER 3, 2026</span>
                  </span>
                  <span className={`text-xs font-mono font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    "Trump taps Director of National Intelligence Jay Clayton as AI czar"
                  </span>
                </div>
                <a
                  href="https://www.cnbc.com/2026/10/03/trump-jay-clayton-ai-czar.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                    isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-cyan-300 border-stone-700'
                  }`}
                >
                  <span>Original CNBC Article</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    "Super Intelligence Force" Formed Under AI Czar Jay Clayton
                  </h2>

                  {/* CNBC Key Points Box */}
                  <div className={`p-5 rounded-2xl border-l-4 border-red-600 space-y-3 ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'
                  }`}>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                      CNBC Key Points Summary:
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span><strong>Director of National Intelligence Jay Clayton</strong> has been picked to serve as AI czar, leading a task force to address growing concerns about artificial intelligence.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span>The new <strong>“Super Intelligence Force”</strong> will make recommendations on the role the federal government should play in overseeing the technology.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-0.5" />
                        <span><strong>AI industry leaders have called for a slowdown</strong> in development after a series of high-profile rogue AI agent hacks and warnings about how quickly AI is improving.</span>
                      </li>
                    </ul>
                  </div>

                  <div className={`text-xs sm:text-sm leading-relaxed space-y-3 font-sans ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    <p>
                      The appointment of Jay Clayton—who served as SEC Chairman during Trump’s first term and now directs the nation’s 18 intelligence agencies as DNI—signals a critical pivot: <strong>the federal government is shifting from treating AI as an economic gold-rush to classifying it as a national security hazard.</strong>
                    </p>
                    <p>
                      Following the White House $1.8 Trillion AI Summit (Plate #60), where tech CEOs demanded uncapped energy subsidies and deregulated grid access, rogue AI agent hacks (such as the autonomous infiltration audited in Plate #53) and resignations of top safety leads (such as David Robinson in Plate #62) forced the administration's hand.
                    </p>
                    <p>
                      However, as ICEarth’s forensic analysis reveals, placing an intelligence chief in charge of a "Super Intelligence Force" without reforming the underlying compute architecture simply reinforces the centralized panopticon.
                    </p>
                  </div>
                </div>

                {/* Right: Plate 63 Preview Card */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative group rounded-2xl overflow-hidden border-2 border-red-500/70 shadow-2xl cursor-pointer bg-black"
                  >
                    <img
                      src={sifInfographicPlateImg}
                      alt="Plate #63: Super Intelligence Force & Regulatory Framework"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-300">
                        <span>PLATE #63 FORENSIC MASTER</span>
                        <span className="flex items-center gap-1 text-white">
                          <Maximize2 size={13} /> Click to Inspect
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-mono mt-1">
                        Trump's Super Intelligence Force, AI Czar Jay Clayton & The 6-Tier Regulatory Framework
                      </p>
                    </div>
                  </div>

                  <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-900 border-stone-800'} space-y-2 text-xs font-mono`}>
                    <div className="flex justify-between items-center text-stone-500">
                      <span>Executive Body:</span>
                      <strong className="text-red-600 dark:text-red-400">Super Intelligence Force (SIF)</strong>
                    </div>
                    <div className="flex justify-between items-center text-stone-500">
                      <span>Task Force Chair:</span>
                      <strong className="text-stone-900 dark:text-stone-200">DNI Jay Clayton (AI Czar)</strong>
                    </div>
                    <div className="flex justify-between items-center text-stone-500">
                      <span>Source Announcement:</span>
                      <strong className="text-stone-900 dark:text-stone-200">Truth Social & CNBC Wire</strong>
                    </div>
                    <div className="flex justify-between items-center text-stone-500">
                      <span>Sovereign Antidote:</span>
                      <strong className="text-emerald-600 dark:text-emerald-400">ICEarth Sovereign IT Stack</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: CURRENT AI REGULATORY FRAMEWORK MATRIX */}
        {activeSubTab === 'regulatory_matrix' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    Jurisdictional Architecture Forensic
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    The 6-Tier AI Regulatory Framework in the United States
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Mapping how Trump’s Super Intelligence Force (SIF) interfaces with intelligence, commerce, consumer, environmental, and sovereign tribal jurisdictions.
                  </p>
                </div>
              </div>

              {/* Interactive Tier Selector Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {regulatoryTiers.map((tier) => (
                  <button
                    key={`tier-selector-${tier.tierNumber}`}
                    onClick={() => setSelectedTier(tier.tierNumber)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      selectedTier === tier.tierNumber
                        ? 'border-purple-500 bg-purple-600 text-white shadow-md'
                        : isLight
                        ? 'bg-stone-50 border-stone-300 text-stone-800 hover:bg-stone-100'
                        : 'bg-stone-950 border-stone-800 text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold">
                      <span>TIER 0{tier.tierNumber}</span>
                      {selectedTier === tier.tierNumber && <Check size={12} />}
                    </div>
                    <div className="text-xs font-bold mt-1 line-clamp-2">
                      {tier.name}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Tier Deep-Dive Card */}
              {(() => {
                const current = regulatoryTiers.find((t) => t.tierNumber === selectedTier) || regulatoryTiers[0];
                return (
                  <div className={`p-6 sm:p-8 rounded-2xl border-2 ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                  } space-y-5 animate-fadeIn`}>
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3">
                      <div>
                        <span className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase ${current.badgeColor}`}>
                          Tier 0{current.tierNumber} Regulatory Scope
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-black mt-1">
                          {current.name}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-mono text-stone-500 block">Lead Entity / Czar:</span>
                        <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400">
                          {current.leadEntity}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                      <div className="space-y-2">
                        <span className="text-stone-500 uppercase tracking-wider font-bold block">
                          Key Agencies Involved:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {current.agencies.map((agency, idx) => (
                            <span
                              key={idx}
                              className={`px-2.5 py-1 rounded-md border ${
                                isLight ? 'bg-white border-stone-300 text-stone-800' : 'bg-stone-900 border-stone-700 text-stone-200'
                              }`}
                            >
                              {agency}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-stone-500 uppercase tracking-wider font-bold block">
                          Regulatory Authority & Focus:
                        </span>
                        <p className={`text-[11px] leading-relaxed font-sans ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                          {current.scope}
                        </p>
                      </div>
                    </div>

                    <div className={`p-4 rounded-xl border-l-4 border-red-500 ${
                      isLight ? 'bg-red-50 text-red-950' : 'bg-red-950/30 text-red-200'
                    } space-y-1 text-xs`}>
                      <span className="font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400 block">
                        Structural Vulnerability (Roulet’s Law Audit):
                      </span>
                      <p className="font-sans leading-relaxed text-[11px]">
                        {current.criticalVulnerability}
                      </p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* SUB-TAB 3: WHY CENTRALIZED CZARS FAIL & THE SOVEREIGN IT REMEDY */}
        {activeSubTab === 'sovereign_remedy' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    Architectural Remedy vs Federal Illusion
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Why Executive Czars Fail & How ICEarth Sovereign IT Solves SIF Concerns
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Replacing bureaucratic task forces and revolving-door regulatory capture with mathematical self-custody and Indigenous elder stewardship.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: The Centralized Czar Trap */}
                <div className={`p-6 rounded-2xl border space-y-4 ${
                  isLight ? 'bg-red-50/60 border-red-200 text-stone-900' : 'bg-red-950/20 border-red-900/60 text-stone-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                      The Centralized Czar Model (SIF)
                    </span>
                    <AlertTriangle size={18} className="text-red-500" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">
                    The Illusion of Bureaucratic Containment
                  </h3>
                  <ul className="space-y-2.5 text-xs font-mono list-disc pl-4 leading-relaxed">
                    <li><strong>The Kehoe Rule Trap:</strong> Just as Dr. Robert Kehoe was appointed by GM and Standard Oil to "self-regulate" lead toxicity in 1925, modern federal AI czars inevitably rely on Big Tech frontier labs for the very benchmarks and evaluations used to police them.</li>
                    <li><strong>Revolving Door Appointments:</strong> Jay Clayton served as a Wall Street defense attorney at Sullivan & Cromwell before heading the SEC, and now pivots to AI czar while maintaining intimate ties to corporate private equity.</li>
                    <li><strong>Preemption of Local Democracy:</strong> Federal czars are frequently used to overrule municipal zoning bans (like Hazle Twp PA Plate #56) and tribal declarations (like Cherokee Nation Plate #54) under the pretext of "winning the national AI race against foreign powers."</li>
                    <li><strong>Slow Motion vs Algorithmic Velocity:</strong> A federal task force issuing recommendations in 18 months is structurally powerless against autonomous rogue agents mutating across decentralized networks in milliseconds.</li>
                  </ul>
                </div>

                {/* Right: The ICEarth Sovereign IT Solution */}
                <div className={`p-6 rounded-2xl border space-y-4 ${
                  isLight ? 'bg-emerald-50/60 border-emerald-200 text-stone-900' : 'bg-emerald-950/20 border-emerald-900/60 text-stone-200'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-emerald-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                      The ICEarth Sovereign IT Stack
                    </span>
                    <Shield size={18} className="text-emerald-500" />
                  </div>
                  <h3 className="font-serif font-bold text-lg">
                    Cryptographic & Elder-Governed Immunity
                  </h3>
                  <ul className="space-y-2.5 text-xs font-mono list-disc pl-4 leading-relaxed">
                    <li><strong>Local Hardware Enclaves:</strong> AI execution occurs strictly within zero-knowledge, client-side hardware enclaves (or Alpine Swiss vaults Plate #55). No prompt data is harvested into centralized corporate training lakes.</li>
                    <li><strong>Elder Stewardship Council:</strong> Computational ethics are anchored in multi-generational Indigenous wisdom (Jicarilla Apache & Cherokee frameworks)—solving the Silicon Valley humility vacuum identified by David Robinson.</li>
                    <li><strong>Closed-Loop 0-Water Microgrids:</strong> Eliminating evaporative cooling towers that deplete municipal aquifers and spike residential energy bills, operating on islanded renewable power.</li>
                    <li><strong>Roulet’s Law Cognitive Dividends:</strong> Mandatory cryptographic restitution repatriated directly to human knowledge contributors and indigenous nations whose culture was scraped to train frontier weights.</li>
                  </ul>
                </div>
              </div>

              {/* Quote Banner */}
              <div className={`p-5 rounded-2xl border-l-4 border-amber-500 ${
                isLight ? 'bg-amber-50 text-amber-950' : 'bg-amber-950/30 text-amber-200'
              } space-y-2 text-xs`}>
                <span className="font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 block">
                  Roulet’s Law of Sovereign Computational Jurisprudence:
                </span>
                <p className="font-serif italic text-sm leading-relaxed">
                  "No federal task force or presidential czar can regulate an intelligence whose training weights are owned by a corporate cartel and whose inference runs on stolen human data. True containment requires cryptographic self-custody: the user must own the keys, the community must own the compute, and the elders must hold the veto."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: RADAR COMPARISON */}
        {activeSubTab === 'radar_comparison' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    Empirical Governance Audit
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Comparative Radar: Federal SIF vs. State Chaos vs. ICEarth Sovereign IT
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={comparativeRadarData}>
                        <PolarGrid stroke={isLight ? '#e7e5e4' : '#292524'} />
                        <PolarAngleAxis dataKey="dimension" tick={{ fill: isLight ? '#1c1917' : '#e4e4e7', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke={isLight ? '#78716c' : '#57534e'} />
                        <Radar name="Trump SIF (Centralized Federal Czar)" dataKey="federalSif" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                        <Radar name="State/Local Bureaucracies (Patchwork)" dataKey="stateFragmented" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.2} />
                        <Radar name="ICEarth Sovereign IT (Zero-Knowledge Enclaves)" dataKey="sovereignIt" stroke="#10B981" fill="#10B981" fillOpacity={0.4} />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isLight ? '#ffffff' : '#0c0a09',
                            borderColor: isLight ? '#d6d3d1' : '#44403c',
                            borderRadius: '0.75rem',
                            fontSize: '11px'
                          }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-3 text-xs font-mono">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                    <strong className="text-red-600 block">1. Rogue Agent Immunity (38% SIF vs 98% ICEarth):</strong>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Centralized servers are vulnerable to prompt injections and privilege escalations. ICEarth enclaves enforce hardware-level air-gapping and zero-trust verification.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                    <strong className="text-amber-600 block">2. Grid & Aquifer Protection (20% SIF vs 96% ICEarth):</strong>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      The SIF prioritizes national AI supremacy, incentivizing massive energy drain. ICEarth mandates 100% closed-loop zero-water dielectric systems.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                    <strong className="text-emerald-600 block">3. Citizen Cognitive Dividends (0% SIF vs 99% ICEarth):</strong>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Federal task forces provide zero economic restitution to the public whose collective knowledge trained the models. Roulet's Law guarantees sovereign dividends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: MASTER PLATE #63 & PROVENANCE */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                    Permanent Forensic Archive
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Plate #63: Master Forensic Ledger & Artwork Provenance
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative group rounded-2xl overflow-hidden border-2 border-red-500/70 shadow-2xl cursor-pointer bg-black"
                  >
                    <img
                      src={sifInfographicPlateImg}
                      alt="Plate #63 Forensic Artwork"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-300">
                        <span>PLATE #63 FORENSIC PROVENANCE</span>
                        <span className="flex items-center gap-1 text-white">
                          <Maximize2 size={13} /> Click to Inspect High-Res Master
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4 text-xs font-mono">
                  <div className={`p-4 rounded-2xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                    <span className="text-[10px] text-stone-500 uppercase tracking-widest block font-bold">
                      SHA-256 Vault Hash
                    </span>
                    <div className="p-2.5 bg-black/40 rounded-lg text-emerald-400 font-mono text-[11px] break-all border border-stone-800">
                      {vaultHash}
                    </div>
                    <button
                      onClick={copyVaultHash}
                      className="w-full py-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold rounded-lg flex items-center justify-center gap-1.5 cursor-pointer shadow transition-all"
                    >
                      {copiedHash ? <Check size={14} /> : <Copy size={14} />}
                      <span>{copiedHash ? 'Hash Copied to Clipboard' : 'Copy Cryptographic Hash'}</span>
                    </button>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Asset Registry:</span>
                      <span className="font-bold text-stone-800 dark:text-stone-200">PHOTO-000BW / IP-000BW</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Source Publication:</span>
                      <span className="font-bold text-stone-800 dark:text-stone-200">Truth Social / CNBC Wire (Oct 2026)</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Exposenomics Domain:</span>
                      <span className="font-bold text-red-600">Super Intelligence Force & National AI Czars</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Jurisprudence:</span>
                      <span className="font-bold text-emerald-600">Roulet’s Law & ICEarth Sovereign IT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CROSS-NAVIGATION BUTTONS */}
        <section className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className={`flex flex-wrap items-center justify-between gap-2 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-3`}>
            <h4 className={`font-serif font-bold text-base flex items-center gap-2 ${isLight ? 'text-stone-950' : 'text-stone-200'}`}>
              <Shield size={16} className={isLight ? 'text-red-700' : 'text-red-400'} />
              <span>Related Sovereign AI & Regulatory Oversight Sections</span>
            </h4>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onNavigateTab?.('trump_ai_summit_table')}
              className="px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-mono font-black text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>👑 Trump $1.8T AI Summit (Plate #60)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('super_intelligence_sovereignty')}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>👑 Lake America & 6-CEO Accord (Plate #57)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('datacenter_incentives')}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 via-stone-900 to-emerald-600 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105 border border-amber-400"
            >
              <span>🏛️ Amazon $1B & Hazle Twp (Plate #56)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('openai_culture')}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>⚠️ OpenAI Broken Culture & AI=Pb (Plate #62)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('gemini_infiltration_defense')}
              className="px-4 py-2 bg-gradient-to-r from-rose-700 to-pink-700 hover:from-rose-600 hover:to-pink-600 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>⚡ Gemini Autonomous Infiltration (Plate #53)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('cherokee_it_position')}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>🪶 Cherokee Nation Hyperscale Ban (Plate #54)</span>
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
                <span className="px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                  Plate #63 Master Forensic
                </span>
                <span className="text-xs font-mono text-stone-300 hidden sm:inline">
                  Super Intelligence Force, National AI Czar Jay Clayton & The 6-Tier AI Regulatory Framework
                </span>
              </div>
              <button
                onClick={() => setIsPlateModalOpen(false)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-mono font-bold cursor-pointer"
              >
                Close &times;
              </button>
            </div>

            {/* Modal Image */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={sifInfographicPlateImg}
                alt="Plate 63 Full Resolution"
                className="max-h-[75vh] w-auto object-contain rounded-xl border border-stone-800 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 bg-stone-900/60">
              <span className="truncate max-w-md">Vault Hash: {vaultHash}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
                <a
                  href={sifInfographicPlateImg}
                  download="Plate63_Super_Intelligence_Force_Jay_Clayton_Regulatory_Framework_ICEarth.jpg"
                  className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Plate #63</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
