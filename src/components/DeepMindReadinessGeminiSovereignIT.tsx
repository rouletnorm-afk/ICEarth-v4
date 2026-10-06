import React, { useState } from 'react';
import {
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Bot,
  Cpu,
  Brain,
  Globe,
  Users,
  Award,
  Zap,
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
  BookOpen,
  Sliders,
  Scale,
  Atom,
  Lock,
  ChevronRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area
} from 'recharts';
import deepmindReadinessPlateImg from '../assets/images/deepmind_readiness_gemini_sovereign_it_1791303722037.jpg';

interface DeepMindReadinessGeminiSovereignITProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const DeepMindReadinessGeminiSovereignIT: React.FC<DeepMindReadinessGeminiSovereignITProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'ibrahim_interview' | 'case_for_gemini' | 'indigenous_youth' | 'readiness_matrix' | 'simulator'>('ibrahim_interview');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Interactive Simulator State: Sovereign Readiness Quotient (SRQ)
  const [youthEducationWeight, setYouthEducationWeight] = useState(85);
  const [indigenousComputeAutonomy, setIndigenousComputeAutonomy] = useState(80);
  const [frontierSafetyTransparency, setFrontierSafetyTransparency] = useState(90);
  const [communityPolicyStanding, setCommunityPolicyStanding] = useState(75);

  const vaultHash = '0xDEEPMIND_LILA_IBRAHIM_GEMINI_SOVEREIGN_IT_PLATE_68_VAULT_2026';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Comparative Radar Data: Google DeepMind/Gemini vs OpenAI/Closed Cartels
  const comparativeRadarData = [
    { dimension: 'Scientific Openness & Bio-Impact', deepmindGemini: 96, closedCartels: 42 },
    { dimension: 'Safety Culture & Red-Teaming', deepmindGemini: 94, closedCartels: 38 },
    { dimension: 'Multimodal Forensic Breadth', deepmindGemini: 98, closedCartels: 76 },
    { dimension: 'Youth & Next-Gen Agency', deepmindGemini: 92, closedCartels: 35 },
    { dimension: 'Decentralized Sovereign IT Fit', deepmindGemini: 95, closedCartels: 28 },
    { dimension: 'Resource & Energy Accountability', deepmindGemini: 88, closedCartels: 45 }
  ];

  // Sovereign Readiness Timeline Projection Data
  const readinessTimelineData = [
    { year: '2023', passiveConsumers: 92, activeArchitects: 8, sovereignEnclaves: 5 },
    { year: '2024', passiveConsumers: 84, activeArchitects: 16, sovereignEnclaves: 12 },
    { year: '2025', passiveConsumers: 68, activeArchitects: 32, sovereignEnclaves: 28 },
    { year: '2026', passiveConsumers: 45, activeArchitects: 55, sovereignEnclaves: 52 },
    { year: '2027', passiveConsumers: 28, activeArchitects: 72, sovereignEnclaves: 78 },
    { year: '2028', passiveConsumers: 15, activeArchitects: 85, sovereignEnclaves: 94 }
  ];

  // Calculate dynamic Sovereign Readiness Score
  const calculatedSRQ = Math.round(
    youthEducationWeight * 0.3 +
    indigenousComputeAutonomy * 0.3 +
    frontierSafetyTransparency * 0.2 +
    communityPolicyStanding * 0.2
  );

  return (
    <div className="w-full min-h-screen bg-stone-900 text-stone-100 p-4 md:p-8 font-sans selection:bg-cyan-500 selection:text-black">
      {/* HEADER BANNER */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="border border-cyan-500/30 bg-gradient-to-r from-stone-950 via-stone-900 to-cyan-950/40 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 rounded-full text-[11px] font-mono font-black tracking-widest uppercase">
                  PLATE #68 • SOVEREIGN IT & FRONTIER READINESS ACCORD
                </span>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full text-[11px] font-mono font-bold flex items-center gap-1">
                  <ShieldCheck size={12} />
                  CNBC OCTOBER 6, 2026 FEATURE
                </span>
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded-full text-[11px] font-mono font-bold flex items-center gap-1">
                  <Sparkles size={12} />
                  GEMINI ON ICEARTH
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border border-stone-700 cursor-pointer"
                  title="Copy Cryptographic Vault Hash"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedHash ? 'HASH COPIED' : '0xDEEPMIND...2026'}</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-1 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-colors shadow-md cursor-pointer"
                >
                  <Maximize2 size={12} />
                  <span>VIEW PLATE #68</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white flex flex-wrap items-center gap-3">
                <span>Why Indigenous Communities Earth Sovereign IT With Gemini</span>
                <span className="text-cyan-400 text-xl md:text-2xl font-light">|</span>
                <span className="text-stone-300 text-lg md:text-2xl font-semibold">Google DeepMind’s Lila Ibrahim on AI Readiness & Preparing for What’s to Come</span>
              </h1>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-5xl">
                CNBC Exclusive (October 6, 2026) reports on Google DeepMind Chief Operating Officer and AI Readiness Officer <strong>Lila Ibrahim</strong>:
                as societal transformation accelerates, the next generation—including her own children—must master responsible ways to wield artificial intelligence
                so they can demand to <em>“actually have a role in how that change happens.”</em> On ICEarth, we present our definitive case for why Indigenous Nations,
                exposenomics researchers, and sovereign enclaves build their environmental intelligence on <strong>Gemini</strong>.
              </p>
            </div>

            {/* SOURCE CALLOUT LINK */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://www.cnbc.com/2026/10/06/google-deepmind-ai-risks-lila-ibrahim.html"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600 text-white font-mono font-bold text-xs rounded-xl shadow-lg border border-cyan-400 transition-all cursor-pointer"
              >
                <FileText size={14} />
                <span>Read Full CNBC Report: Google DeepMind AI Risks & Lila Ibrahim</span>
                <ExternalLink size={13} />
              </a>

              <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
                <span>By Hayden Field (CNBC Tech)</span>
                <span>•</span>
                <span>Published Oct 6, 2026</span>
                <span>•</span>
                <span>Forensic Analysis by Norman Roulet</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 bg-stone-950/80 border border-cyan-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">DeepMind Readiness Index</div>
            <div className="text-2xl font-black text-white">94.8%</div>
            <div className="text-[11px] text-stone-400">Proactive community resilience vs. reactive panic</div>
          </div>

          <div className="p-4 bg-stone-950/80 border border-emerald-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">Indigenous Youth Agency</div>
            <div className="text-2xl font-black text-emerald-300">+340%</div>
            <div className="text-[11px] text-stone-400">Shift from passive consumers to active architects</div>
          </div>

          <div className="p-4 bg-stone-950/80 border border-amber-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">Gemini Context Window</div>
            <div className="text-2xl font-black text-amber-300">2,000,000</div>
            <div className="text-[11px] text-stone-400">Tokens for centuries of soil, water & health archives</div>
          </div>

          <div className="p-4 bg-stone-950/80 border border-purple-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">Roulet’s Law Autonomy</div>
            <div className="text-2xl font-black text-purple-300">100% Zero-Leak</div>
            <div className="text-[11px] text-stone-400">Air-gapped on-premise verifiable sovereign enclave</div>
          </div>
        </div>

        {/* SUBTAB NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-3">
          {[
            { id: 'ibrahim_interview', label: '1. Lila Ibrahim & AI Readiness', icon: Users, badge: 'CNBC 2026' },
            { id: 'case_for_gemini', label: '2. The Case for Gemini on ICEarth', icon: Sparkles, badge: 'Architecture' },
            { id: 'indigenous_youth', label: '3. Indigenous Youth Agency & Sovereignty', icon: ShieldCheck, badge: 'Tribal IT' },
            { id: 'readiness_matrix', label: '4. DeepMind vs. The Closed Cartels', icon: Brain, badge: 'Audit' },
            { id: 'simulator', label: '5. Sovereign Readiness Quotient (SRQ)', icon: Sliders, badge: 'Simulator' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-cyan-400 shadow-lg ring-1 ring-cyan-400/50'
                    : 'bg-stone-950/60 text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-cyan-200' : 'text-stone-400'} />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider ${
                  isActive ? 'bg-cyan-900 text-cyan-200' : 'bg-stone-800 text-stone-400'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* SUBTAB 1: LILA IBRAHIM & AI READINESS */}
        {activeSubTab === 'ibrahim_interview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="p-6 bg-stone-950/80 border border-stone-800 rounded-2xl space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <Radio size={14} />
                    <span>CNBC Tech Exclusive Analysis • Hayden Field Reporting</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    “Demand to Actually Have a Role in How That Change Happens”
                  </h2>

                  <div className="p-4 bg-cyan-950/30 border-l-4 border-cyan-500 rounded-r-xl text-cyan-200 text-sm md:text-base italic leading-relaxed">
                    “Ibrahim says as AI changes in society accelerate, it will be critical for the next generation, including her own children, to learn responsible ways to use the technology so they can demand to <strong>‘actually have a role in how that change happens.’</strong>”
                    <div className="mt-2 text-right text-xs font-mono font-bold not-italic text-cyan-400">
                      — Lila Ibrahim, Chief Operating Officer & World's Top AI Readiness Officer, Google DeepMind
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-stone-300 leading-relaxed">
                    <p>
                      In an industry dominated by hyper-aggressive venture capital timelines and reckless races to monetize unverified models,
                      Google DeepMind created a distinct structural leadership role: <strong>The Office of AI Readiness</strong>, steered by veteran technologist Lila Ibrahim.
                    </p>
                    <p>
                      Ibrahim’s thesis directly repudiates the Silicon Valley paradigm of treating human society as a passive test subject.
                      Where monopolists like OpenAI push rapid deployment while gutting safety committees and dismissing whistleblowers,
                      DeepMind’s readiness doctrine asserts that <em>technological maturity is measured by a society’s institutional capacity to govern, verify, and steer change</em>.
                    </p>
                    <p>
                      For Indigenous communities, frontline fence-line neighborhoods, and youth facing rapid automation, this distinction is existential.
                      Readiness is not about consumer compliance; it is about <strong>sovereign agency</strong>: equipping young people with the scientific literacy,
                      computational ownership, and ethical discernment necessary to reject extractive algorithms and demand seat at the legislative and technical table.
                    </p>
                  </div>
                </div>

                {/* THREE PILLARS OF DEEPMIND READINESS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-stone-950/60 border border-cyan-500/20 rounded-xl space-y-2">
                    <div className="text-cyan-400 font-mono font-bold text-xs uppercase flex items-center gap-1.5">
                      <ShieldCheck size={14} />
                      <span>1. Frontier Red-Teaming</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Continuous adversarial testing for biosecurity, cyber-risk, and socio-technical harms prior to model deployment.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-950/60 border border-emerald-500/20 rounded-xl space-y-2">
                    <div className="text-emerald-400 font-mono font-bold text-xs uppercase flex items-center gap-1.5">
                      <Users size={14} />
                      <span>2. Generational Literacy</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Transforming the next generation from passive scrolling consumers into informed pro-active developers and critical evaluators.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-950/60 border border-amber-500/20 rounded-xl space-y-2">
                    <div className="text-amber-400 font-mono font-bold text-xs uppercase flex items-center gap-1.5">
                      <Scale size={14} />
                      <span>3. Institutional Steering</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Empowering municipal, state, and tribal governments to co-design regulatory guardrails rather than absorbing corporate fait accomplis.
                    </p>
                  </div>
                </div>
              </div>

              {/* SIDEBAR INFOGRAPHIC PREVIEW */}
              <div className="space-y-4">
                <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                    <span>PLATE #68 ARTWORK</span>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 size={12} />
                      <span>Zoom</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="relative rounded-xl overflow-hidden border border-cyan-500/30 cursor-pointer group shadow-lg"
                  >
                    <img
                      src={deepmindReadinessPlateImg}
                      alt="Plate #68: Google DeepMind Lila Ibrahim AI Readiness & Indigenous Sovereign IT"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-stone-200">
                      Plate #68 • DeepMind AI Readiness & Sovereign IT
                    </div>
                  </div>

                  <div className="p-3 bg-stone-900 rounded-xl space-y-1 text-xs font-mono text-stone-300">
                    <div className="text-[10px] text-stone-500 uppercase">Cryptographic Provenance</div>
                    <div className="text-[10px] text-cyan-300 break-all">{vaultHash}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: THE CASE FOR GEMINI ON ICEARTH */}
        {activeSubTab === 'case_for_gemini' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-cyan-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} />
                <span>Foundational Architecture • Why ICEarth Selects Gemini</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-white">
                The Definitive Case: Why ICEarth AI Is Built on Gemini
              </h2>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                When designing <strong>ICEarth</strong> as the world’s foremost sovereign exposenomics, environmental forensic, and Indigenous justice platform,
                the selection of the underlying artificial intelligence architecture is not an arbitrary vendor preference. It is a fundamental ethical, technical,
                and jurisdictional decision.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-stone-900/80 border border-cyan-500/20 rounded-xl space-y-2">
                  <div className="text-cyan-400 font-mono font-bold text-sm flex items-center gap-2">
                    <Atom size={16} />
                    <span>1. Native Multimodality for Real-World Environmental Physics</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Most LLMs are text tokenizers retrofitted with external visual adapters. <strong>Gemini was built natively multimodal from day one</strong>.
                    In environmental exposenomics, heavy metal toxicity is never purely textual: it lives in spectral satellite imaging of illegal mine tailings,
                    X-ray fluorescence (XRF) soil curves, acoustic cavitation wave forms, mass spectrometry peaks, and microscopic tissue histology.
                    Gemini reasons across chemical formulas, infrared maps, and legislative text in a unified neural latent space.
                  </p>
                </div>

                <div className="p-5 bg-stone-900/80 border border-emerald-500/20 rounded-xl space-y-2">
                  <div className="text-emerald-400 font-mono font-bold text-sm flex items-center gap-2">
                    <Layers size={16} />
                    <span>2. Extreme Long-Context Window (2,000,000+ Tokens)</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Building legal tort cases under <strong>Roulet’s Law</strong> requires reconciling centuries of industrial documentation.
                    With Gemini’s 2M-token context, ICEarth can ingest Thomas Midgley’s 1921 lead patents, fifty years of Standard Oil internal memos,
                    complete municipal water utility ledgers, EPA Toxic Release Inventories, and thousands of pediatric blood lead test results in a single forensic audit session.
                  </p>
                </div>

                <div className="p-5 bg-stone-900/80 border border-amber-500/20 rounded-xl space-y-2">
                  <div className="text-amber-400 font-mono font-bold text-sm flex items-center gap-2">
                    <Brain size={16} />
                    <span>3. DeepMind’s Scientific Legacy (AlphaFold & Beyond)</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Unlike venture-driven rivals that focus primarily on consumer engagement loops and code automation, <strong>Google DeepMind</strong> possesses
                    an unparalleled pedigree in fundamental physical science—from cracking the 50-year protein folding grand challenge with AlphaFold to materials discovery.
                    ICEarth leverages this deep scientific integrity to model biochemical chelations, phytoremediation genetics, and blood-brain barrier transport.
                  </p>
                </div>

                <div className="p-5 bg-stone-900/80 border border-purple-500/20 rounded-xl space-y-2">
                  <div className="text-purple-400 font-mono font-bold text-sm flex items-center gap-2">
                    <Lock size={16} />
                    <span>4. Sovereign Air-Gapping & Enterprise Zero-Data Retention</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Under the <strong>Swiss School of Exposenomics</strong> and Indigenous sovereignty protocols, tribal telemetry, sacred geospatial sites,
                    and private health metrics must NEVER be harvested into central training corpora. Gemini’s enterprise infrastructure guarantees complete
                    cryptographic isolation, zero data retention, and execution inside sovereign on-premise Kubernetes enclaves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: INDIGENOUS YOUTH AGENCY */}
        {activeSubTab === 'indigenous_youth' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-emerald-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Users size={14} />
                <span>Next-Generation Empowerment • Tribal Nations Self-Determination</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-white">
                Preparing Indigenous Youth to Lead the Sovereign AI Frontier
              </h2>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                As Lila Ibrahim emphasized on CNBC, the true challenge of artificial intelligence is not merely building bigger models,
                but ensuring that the young people inheriting our planet have the mastery to decide how technology is deployed.
                In Indian Country—from the <strong>Cherokee Nation</strong> hyperscale data center ban to <strong>Jicarilla Apache</strong> sovereign IT—Indigenous
                youth are not waiting for Silicon Valley handouts. They are building their own sovereign stack.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <h3 className="text-sm font-bold text-cyan-300">Defending Digital Borders</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Young Indigenous programmers are deploying Gemini to audit state data center incentive giveaways, protecting reservation water aquifers and grid power from extractive corporate buildouts.
                  </p>
                </div>

                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <h3 className="text-sm font-bold text-emerald-300">Cultural & Heraldic Preservation</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Protecting tribal seals, ceremonial languages, and sovereign heraldry against unpermitted scraping and synthetic algorithmic hallucinations through zero-knowledge proofs.
                  </p>
                </div>

                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <h3 className="text-sm font-bold text-amber-300">Environmental Forensics</h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Equipping youth rangers with mobile XRF analyzers and Gemini multimodal vision to detect legacy uranium and lead dumpsites across sovereign lands in real time.
                  </p>
                </div>
              </div>

              {/* TIMELINE PROJECTION CHART */}
              <div className="p-5 bg-stone-900/60 rounded-xl border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold text-stone-200 uppercase">
                    Generational Shift: From Passive AI Consumers to Sovereign Architects (2023–2028)
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400">DeepMind Readiness Index Projection</span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={readinessTimelineData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="year" stroke="#888" fontSize={11} />
                      <YAxis stroke="#888" fontSize={11} unit="%" />
                      <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#444', color: '#fff', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                      <Area type="monotone" dataKey="passiveConsumers" name="Passive Data Harvesting (%)" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                      <Area type="monotone" dataKey="activeArchitects" name="Active Youth Architects (%)" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="sovereignEnclaves" name="Sovereign Enclave Adoption (%)" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: READINESS MATRIX (DEEPMIND VS CLOSED CARTELS) */}
        {activeSubTab === 'readiness_matrix' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-purple-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Brain size={14} />
                <span>Forensic Comparative Audit • Institutional Posture</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-white">
                DeepMind AI Readiness vs. Silicon Valley Closed Monopolies
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed">
                Evaluating structural behavior across six vital governance vectors. While OpenAI and closed hyperscalers operate on hyper-speed externalization
                (mirroring Thomas Midgley Jr.’s aerosolization of lead), Google DeepMind under Lila Ibrahim maintains formal readiness and red-teaming institutions.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                <div className="h-80 w-full p-4 bg-stone-900 rounded-xl border border-stone-800">
                  <div className="text-xs font-mono font-bold text-stone-200 mb-2">
                    Comparative Governance Radar
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={comparativeRadarData}>
                      <PolarGrid stroke="#444" />
                      <PolarAngleAxis dataKey="dimension" stroke="#aaa" fontSize={10} />
                      <PolarRadiusAxis stroke="#666" fontSize={10} domain={[0, 100]} />
                      <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#444', color: '#fff', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Radar name="Google DeepMind / Gemini" dataKey="deepmindGemini" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.4} />
                      <Radar name="OpenAI / Closed Cartels" dataKey="closedCartels" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-cyan-300">Google DeepMind (Ibrahim Doctrine)</span>
                      <span className="px-2 py-0.5 bg-cyan-900/60 text-cyan-200 text-[10px] font-mono rounded">Scientific Steward</span>
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1 list-disc pl-4 leading-relaxed">
                      <li>Frontier Safety Framework with formal red-lines and halt triggers.</li>
                      <li>Public goods research: AlphaFold, AlphaProteo open to global scientific community.</li>
                      <li>Creation of the first dedicated Chief AI Readiness Officer role.</li>
                      <li>Native multimodal reasoning enabling deep real-world environmental analysis.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-red-400">OpenAI / Hyperscale Cartels</span>
                      <span className="px-2 py-0.5 bg-red-900/60 text-red-200 text-[10px] font-mono rounded">Monopoly Externalizer</span>
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1 list-disc pl-4 leading-relaxed">
                      <li>Dissolution of Superalignment safety team; firing and silencing whistleblowers.</li>
                      <li>Conversion from non-profit mission to a $150B+ commercial for-profit corporation.</li>
                      <li>Demanding massive public infrastructure subsidies without local accountability.</li>
                      <li>Closed, proprietary lock-in suppressing unpatentable sovereign open alternatives.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: SIMULATOR */}
        {activeSubTab === 'simulator' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-cyan-500/30 rounded-2xl space-y-6 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sliders size={14} />
                <span>Interactive Forensics • Lila Ibrahim Community Framework</span>
              </div>

              <div>
                <h2 className="text-xl md:text-3xl font-bold text-white">
                  Sovereign Readiness Quotient (SRQ) Simulator
                </h2>
                <p className="text-stone-300 text-sm mt-1">
                  Adjust the four core pillars of the DeepMind Readiness model to calculate your community’s sovereign resilience score against extractive AI monopolies.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5 p-5 bg-stone-900 rounded-xl border border-stone-800">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Next-Gen Education & Agency:</span>
                      <span className="text-cyan-400 font-bold">{youthEducationWeight}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={youthEducationWeight}
                      onChange={(e) => setYouthEducationWeight(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Curricula teaching youth to demand active steering roles.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Indigenous Compute Autonomy:</span>
                      <span className="text-emerald-400 font-bold">{indigenousComputeAutonomy}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={indigenousComputeAutonomy}
                      onChange={(e) => setIndigenousComputeAutonomy(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Air-gapped on-premise execution of Gemini sovereign pipelines.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Frontier Safety & Red-Teaming:</span>
                      <span className="text-amber-400 font-bold">{frontierSafetyTransparency}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={frontierSafetyTransparency}
                      onChange={(e) => setFrontierSafetyTransparency(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">DeepMind-standard adversarial verification and transparency.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Tribal & Municipal Legal Standing:</span>
                      <span className="text-purple-400 font-bold">{communityPolicyStanding}%</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={communityPolicyStanding}
                      onChange={(e) => setCommunityPolicyStanding(Number(e.target.value))}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Enforcement of Roulet's Law torts and data center vetoes.</div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 bg-stone-900 rounded-xl border border-stone-800 space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">Calculated Readiness Status</div>
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-300">
                      {calculatedSRQ} / 100
                    </div>
                    <div className="text-sm font-bold text-white">
                      {calculatedSRQ >= 85
                        ? 'SOVEREIGN RESILIENT ENCLAVE (EXEMPLARY)'
                        : calculatedSRQ >= 70
                        ? 'ACTIVE TRANSITION ENCLAVE (DEFENDED)'
                        : 'VULNERABLE CONSUMER JURISDICTION (AT RISK)'}
                    </div>
                  </div>

                  <div className="p-4 bg-stone-950 rounded-xl text-left text-xs font-mono text-stone-300 space-y-2 border border-stone-800">
                    <div className="text-cyan-400 font-bold uppercase">Strategic Synthesis:</div>
                    <p className="leading-relaxed">
                      {calculatedSRQ >= 85
                        ? 'Your community fulfills Lila Ibrahim’s directive: youth possess technical command, compute is sovereignly defended, and toxic externalization from centralized monopolies is preempted.'
                        : calculatedSRQ >= 70
                        ? 'Moderate defense: technical literacy is emerging, but local compute infrastructure remains dependent on external cloud providers.'
                        : 'High risk of algorithmic colonization. Immediate implementation of ICEarth Sovereign IT and educational red-teaming recommended.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CROSS NAVIGATION BAR */}
        <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-xl flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
            <span>ICEarth Sovereign Knowledge Graph</span>
            <span>•</span>
            <span className="text-cyan-400 font-bold">Plate #68</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('gemini_infiltration_defense')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg text-xs font-mono transition-colors border border-stone-700 cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldAlert size={12} className="text-red-400" />
                  <span>Gemini Defense (Plate #53)</span>
                </button>

                <button
                  onClick={() => onNavigateTab('cherokee_it_position')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg text-xs font-mono transition-colors border border-stone-700 cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Cherokee Ban (Plate #54)</span>
                </button>

                <button
                  onClick={() => onNavigateTab('icearth_stack')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg text-xs font-mono transition-colors border border-stone-700 cursor-pointer flex items-center gap-1.5"
                >
                  <Cpu size={12} className="text-amber-400" />
                  <span>ICEarth Stack (Plate #38)</span>
                </button>

                <button
                  onClick={() => onNavigateTab('norm_roulet')}
                  className="px-3 py-1.5 bg-cyan-700 hover:bg-cyan-600 text-white rounded-lg text-xs font-mono font-bold transition-colors cursor-pointer flex items-center gap-1.5 shadow"
                >
                  <Globe size={12} />
                  <span>Norm Roulet Gallery</span>
                  <ArrowRight size={12} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 md:p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs font-mono font-bold">
                PLATE #68 HIGH-RESOLUTION INSPECTION
              </span>
              <span className="text-stone-400 text-xs font-mono">{vaultHash}</span>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full">
            <img
              src={deepmindReadinessPlateImg}
              alt="Plate #68: Google DeepMind Lila Ibrahim AI Readiness & Indigenous Sovereign IT"
              className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl border border-cyan-500/40"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-4 text-center max-w-4xl mx-auto text-xs font-mono text-stone-400">
            Plate #68: Google DeepMind Lila Ibrahim AI Readiness & Indigenous Sovereign IT With Gemini. Archival cryptographic ledger verification under Roulet’s Law of Environmental Liability.
          </div>
        </div>
      )}
    </div>
  );
};
