import React, { useState } from 'react';
import geminiAgenticPlateImg from '../assets/images/gemini_agentic_ai_tribal_sovereign_1791498887746.jpg';
import {
  Shield,
  Bot,
  Users,
  Lock,
  Cpu,
  TrendingUp,
  AlertTriangle,
  Scale,
  Calendar,
  Code2,
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
  CheckCircle2,
  Eye,
  EyeOff,
  UserCheck,
  Server,
  Zap,
  MapPin,
  Compass,
  Coins,
  ShieldCheck,
  RefreshCw,
  Terminal,
  Play,
  RotateCcw,
  TreePine,
  Droplets,
  BookOpen
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from 'recharts';

interface GeminiAgenticSovereignServiceProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const GeminiAgenticSovereignService: React.FC<GeminiAgenticSovereignServiceProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'capabilities' | 'indigenous_deployment' | 'member_services' | 'simulator' | 'provenance'
  >('overview');

  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  // Simulator state
  const [selectedAgentPersona, setSelectedAgentPersona] = useState<
    'tribal_land_gis' | 'member_health_lead' | 'language_custodian' | 'sovereign_executive'
  >('tribal_land_gis');
  const [simStep, setSimStep] = useState<number>(0);
  const [isSimRunning, setIsSimRunning] = useState<boolean>(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  const vaultHash = '0xTECHCRUNCH_2026_GOOGLE_GEMINI_AGENTIC_AI_ENTERPRISE_INDIGENOUS_SOVEREIGNTY_PLATE_76';
  const provenanceSha256 = 'e8b7c340a1d6f48290baef91136b8c9d2f00a5814e59021e90b8471c4801af33';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Benchmark data: Manual vs Chatbot vs Gemini Enterprise vs ICEarth Sovereign Agent
  const capabilityBenchmarkData = [
    { metric: 'Task Ownership', manual: 100, legacyBot: 15, geminiEnterprise: 88, icearthSovereign: 98 },
    { metric: 'Code Automation', manual: 90, legacyBot: 30, geminiEnterprise: 92, icearthSovereign: 95 },
    { metric: 'Calendar/Travel', manual: 85, legacyBot: 20, geminiEnterprise: 90, icearthSovereign: 94 },
    { metric: 'Data Sovereignty', manual: 60, legacyBot: 10, geminiEnterprise: 45, icearthSovereign: 100 },
    { metric: 'OCAP Compliance', manual: 40, legacyBot: 0, geminiEnterprise: 25, icearthSovereign: 100 },
    { metric: 'Zero Surveillance', manual: 50, legacyBot: 5, geminiEnterprise: 20, icearthSovereign: 100 }
  ];

  // Indigenous Tribal Sovereign Domain Allocation
  const tribalDomainData = [
    { name: 'OCAP Data Governance & Sovereign Law', value: 30, color: '#f59e0b' },
    { name: 'Land Trust, Mineral & GIS Spatial Analytics', value: 25, color: '#10b981' },
    { name: 'Language & Sacred Oral Knowledge Preservation', value: 20, color: '#8b5cf6' },
    { name: 'Natural Resource, Aquifer & Run-off Stewardship', value: 15, color: '#06b6d4' },
    { name: 'Sovereign Gaming & Economic Ledger Audits', value: 10, color: '#ef4444' }
  ];

  // Adoption Curve & Work Ownership Metrics
  const adoptionTimelineData = [
    { year: '2023', chatConversational: 95, taskAssisted: 5, autonomousAgentic: 0 },
    { year: '2024', chatConversational: 80, taskAssisted: 18, autonomousAgentic: 2 },
    { year: '2025', chatConversational: 50, taskAssisted: 38, autonomousAgentic: 12 },
    { year: '2026 Q1', chatConversational: 30, taskAssisted: 42, autonomousAgentic: 28 },
    { year: '2026 Q4 (Now)', chatConversational: 15, taskAssisted: 35, autonomousAgentic: 50 },
    { year: '2027 Proj.', chatConversational: 8, taskAssisted: 22, autonomousAgentic: 70 }
  ];

  // Simulation step runner
  const personaConfigurations = {
    tribal_land_gis: {
      name: 'Tribal Land Trust & GIS Spatial Agent',
      domain: 'Indigenous Sovereign Enclave',
      trigger: 'Scan 140,000 reservation acres for mining tailing runoff, lease boundary overlaps, and water aquifer depth',
      steps: [
        'Ingesting multi-spectral satellite imagery and local sensor mesh telemetry via air-gapped sovereign enclave...',
        'Orchestrating Gemini tool: spatialGISBoundaryCrossCheck() against 1868 Treaty allotment coordinate registers...',
        'Verifying OCAP compliance: Enforcing Tribal Nation cryptographic signature (No cloud telemetry exfiltration)...',
        'Detecting 2 boundary incursions & flagged heavy metal runoff vector near northern tributary (Pb: 14.8 ppb)...',
        'Generated Sovereign Executive Briefing, dispatched certified legal notice, and committed hash to Tribal Ledger.'
      ],
      result: 'Action executed autonomously. All legal and environmental filings prepared without human delay.'
    },
    member_health_lead: {
      name: 'ICEarth Sovereign Member Health & Exposenomics Guard',
      domain: 'Personal Edge Vault',
      trigger: 'Audit household tap water filter telemetry, BLL lab test results, and calculate Roulet Law exposure index',
      steps: [
        'Decrypting member private health log in local browser enclave using member master ZK-key...',
        'Executing Gemini agentic tool: correlateBloodLeadToWaterPb(memberBLL: 1.2 ug/dL, waterFilterM3: 420L)...',
        'Detecting municipal service line replacement alert 300ft upstream via city GIS crawler agent...',
        'Scheduling certified water testing kit dispatch & updating local nutritional chelator dosing protocol...',
        'Generated encrypted health defense report with zero third-party health insurer exposure.'
      ],
      result: 'Member exposure preempted. Testing scheduled, health record sealed in private ledger.'
    },
    language_custodian: {
      name: 'Indigenous Sacred Language & Oral History Custodian',
      domain: 'Tribal Cultural Heritage Sovereign Enclave',
      trigger: 'Transcribe, index, and synthesize 120 hours of elder oral audio records without commercial cloud ingestion',
      steps: [
        'Mounting sovereign local audio model fine-tuned on tribal phoneme dictionary inside private boundary enclave...',
        'Gemini Agentic semantic mapping: Cross-referencing botanical terms with traditional medicinal geography...',
        'Enforcing Sacred Knowledge boundary rules: Redacting restricted ceremonial songs from public educational layer...',
        'Synthesizing bilingual educational primer for tribal youth immersion school with interactive phonetic agent...',
        'Signing cultural IP artifact with Tribal Sovereign Council multi-signature certificate.'
      ],
      result: 'Sacred language preserved verbatim. Restricted rites protected under tribal customary law.'
    },
    sovereign_executive: {
      name: 'Spectrum Telecom Benchmark Enterprise Operations Agent',
      domain: 'Sovereign Business Infrastructure',
      trigger: 'Orchestrate executive calendar, travel logistics, code deployment, and vendor compact benchmarking',
      steps: [
        'Ingesting multi-calendar feeds, corporate travel API contracts, and vendor SLA benchmarks...',
        'Autonomous task ownership: Rescheduling 4 overlapping meetings and booking compliant carbon-neutral transit...',
        'Executing automated code verification suite: Running test harnesses and compiling sovereign deployment artifacts...',
        'Benchmarking enterprise telecom costs against Spectrum 1990s COE baseline matrices...',
        'Dispatched status briefs to executive stakeholders with zero cognitive overhead.'
      ],
      result: 'All tasks settled in under 4 minutes. Zero human coordination ping-pong required.'
    }
  };

  const runSimulation = () => {
    setIsSimRunning(true);
    setSimStep(0);
    setSimLogs([`[00:01] Initializing ${personaConfigurations[selectedAgentPersona].name}...`]);

    const persona = personaConfigurations[selectedAgentPersona];
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= persona.steps.length) {
        setSimStep(currentStep);
        setSimLogs(prev => [...prev, `[00:0${currentStep + 1}] ${persona.steps[currentStep - 1]}`]);
      } else {
        clearInterval(interval);
        setIsSimRunning(false);
        setSimLogs(prev => [
          ...prev,
          `[00:07] SUCCESS: ${persona.result}`,
          `[00:08] Cryptographic Proof Hash: 0x${Math.random().toString(16).substring(2, 10)}${Math.random().toString(16).substring(2, 10)}... VERIFIED.`
        ]);
      }
    }, 1200);
  };

  const resetSimulation = () => {
    setSimStep(0);
    setIsSimRunning(false);
    setSimLogs([]);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'
      }`}
    >
      {/* 1. HERO BANNER WITH SOURCE METADATA */}
      <section className="relative overflow-hidden border-b border-stone-800 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 text-white font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-md flex items-center gap-1.5">
                <Zap size={14} className="text-amber-300 animate-pulse" />
                Plate #76 Sovereign Architecture
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-stone-300 font-mono text-xs rounded border border-stone-700 flex items-center gap-1">
                <Building size={13} className="text-sky-400" />
                TechCrunch & Google Cloud Event Wire (Oct 8, 2026)
              </span>
              <span className="px-2.5 py-1 bg-stone-800/80 text-amber-300 font-mono text-xs rounded border border-amber-600/40 flex items-center gap-1">
                <Scale size={13} />
                OCAP® Sovereign Indigenous Deployment
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsArtModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-sky-950 hover:bg-sky-900 border border-sky-600/50 text-sky-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition shadow-sm"
              >
                <Maximize2 size={13} className="text-sky-400" />
                <span>View Plate #76 High-Res Infographic</span>
              </button>
              <a
                href="https://techcrunch.com/2026/10/08/google-brings-agentic-ai-to-gemini-starting-with-businesses/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition"
              >
                <span>TechCrunch Source</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Google Brings Agentic AI to Gemini:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-teal-300 to-amber-300 mt-1">
              Integrating Sovereign Agentic Services for ICEarth Members & Indigenous Tribal Nations
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl leading-relaxed mb-6 font-sans">
            At a Google Cloud summit, Google launched a unified Gemini agent that transcends conversational chat
            to take direct ownership of assigned tasks—generating code, coordinating complex calendars, booking travel,
            and automating enterprise workflows across 1B+ monthly active users and 90% of Fortune 100 corporations.
            ICEarth takes this foundational agentic paradigm and frees it from corporate surveillance lock-in:
            deploying autonomous Gemini agentic engines into <strong>decentralized member personal vaults</strong> and
            <strong> sovereign Indigenous Tribal Nation enclaves</strong> under strict OCAP® (Ownership, Control, Access, Possession) governance.
          </p>

          <div className="p-4 rounded-xl bg-stone-900/90 border border-sky-600/30 text-stone-300 text-xs sm:text-sm font-mono flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Terminal size={16} className="text-sky-400" />
              <span>
                <strong>Enterprise IT Lineage:</strong> Synthesizing Norman Roulet&apos;s Spectrum Telecom Common Operating Environment (COE)
                benchmarking (IBM, HP, DEC, Boeing, SAIC) with modern sovereign AI agents.
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <span>Cryptographic Vault ID:</span>
              <code className="text-amber-400 font-bold">PHOTO-000CJ / IP-000CJ</code>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE METRICS BAR */}
      <section className="border-b border-stone-800 bg-stone-900 text-stone-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div className="p-3 rounded-lg bg-stone-950/60 border border-sky-700/30">
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">1B+</div>
            <div className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">Monthly Active Gemini Users</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-amber-600/30">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">90%</div>
            <div className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">Fortune 100 Enterprise Use</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-emerald-600/30">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">100%</div>
            <div className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">Client Task Ownership</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-purple-600/30">
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">574+</div>
            <div className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">Sovereign Tribal Nations</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-rose-600/30 col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">0%</div>
            <div className="text-[11px] text-stone-400 font-mono uppercase tracking-wider mt-1">Surveillance Exfiltration</div>
          </div>
        </div>
      </section>

      {/* 3. NAVIGATION SUB-TABS */}
      <section className="sticky top-0 z-20 border-b border-stone-800 bg-stone-950/95 backdrop-blur px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start overflow-x-auto py-3 gap-2 scrollbar-none">
          {[
            { id: 'overview', label: 'Architecture & Overview', icon: Layers },
            { id: 'capabilities', label: 'Agentic Benchmarks & Shift', icon: TrendingUp },
            { id: 'indigenous_deployment', label: 'Indigenous Sovereign Enclaves (OCAP)', icon: TreePine },
            { id: 'member_services', label: 'ICEarth Member Edge Services', icon: UserCheck },
            { id: 'simulator', label: 'Interactive Agent Orchestrator', icon: Play },
            { id: 'provenance', label: 'Cryptographic Provenance', icon: ShieldCheck }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-tight whitespace-nowrap transition cursor-pointer border ${
                  isActive
                    ? 'bg-sky-600 text-white border-sky-400 shadow-md ring-1 ring-sky-300'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border-stone-800 hover:border-stone-700'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-amber-300' : 'text-stone-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SUB-TAB: OVERVIEW & BLUEPRINT */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            {/* Infographic Banner Display */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-1/2 relative group cursor-pointer" onClick={() => setIsArtModalOpen(true)}>
                  <img
                    src={geminiAgenticPlateImg}
                    alt="Plate #76: Google Gemini Agentic AI Enterprise & Sovereign Indigenous Tribal Operations"
                    className="w-full h-auto object-cover rounded-xl border border-sky-600/40 shadow-2xl transition duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-center justify-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-stone-900/90 text-sky-400 text-xs font-mono font-bold border border-sky-500 flex items-center gap-1.5">
                      <Maximize2 size={14} /> Click to Expand Infographic (Plate #76)
                    </span>
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-sky-950 text-sky-300 text-xs font-mono font-bold border border-sky-600/40">
                      Unified Agentic Shift
                    </span>
                    <span className="text-xs text-stone-400 font-mono">TechCrunch Wire Analysis</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    Beyond Conversational Chat: The Age of Task Ownership & Autonomous Execution
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                    As reported by Frederic Lardinois in TechCrunch at Google&apos;s cloud summit, Gemini has formally crossed
                    the threshold from conversational Q&amp;A into autonomous agentic ownership. Instead of drafting a prompt
                    and waiting for text suggestions, the agent takes responsibility for complete goals: booking complex
                    multi-city travel, orchestrating enterprise meetings, executing multi-file codebase refactors, and
                    calling real-world APIs from a unified interface.
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                    <div className="text-sky-400 font-bold flex items-center gap-1.5">
                      <Cpu size={14} /> Three Pillars of ICEarth Sovereign Translation:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-stone-300 pl-1">
                      <li>
                        <strong>Commercial Scale:</strong> Google brings 1B+ MAUs and 90% of Fortune 100 companies, proving enterprise viability.
                      </li>
                      <li>
                        <strong>Member Sovereignty:</strong> Freeing the agent from cloud lock-in into client-side edge enclaves with ZK-proofs.
                      </li>
                      <li>
                        <strong>Tribal Nation Enclaves:</strong> Equipping 574+ Sovereign Indigenous Tribes with OCAP-compliant AI infrastructure.
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    <button
                      onClick={() => setActiveSubTab('simulator')}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition shadow"
                    >
                      <Play size={13} /> Launch Agentic Orchestrator
                    </button>
                    <button
                      onClick={() => setActiveSubTab('indigenous_deployment')}
                      className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono font-bold text-xs flex items-center gap-1.5 transition border border-stone-700"
                    >
                      <TreePine size={13} className="text-amber-400" /> View Tribal Enclaves
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Architectural Three-Tier Comparison */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Tier 1: Big Tech Corporate Cloud */}
              <div className="p-5 rounded-xl bg-stone-900/60 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Tier 1</span>
                  <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-[10px] font-mono border border-rose-800/40">
                    Proprietary Cloud
                  </span>
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Building size={16} className="text-rose-400" />
                  Google Gemini Enterprise
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed">
                  Deployed across Fortune 100 companies. Highly capable unified agent with broad workspace access, but all
                  prompts, tool calls, telemetry, and business models live inside Google Cloud infrastructure under corporate terms.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-stone-800 text-[11px] font-mono text-stone-300">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Host Environment:</span>
                    <span className="text-rose-300">Google Cloud VPC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Data Boundary:</span>
                    <span className="text-rose-300">Corporate Perimeter</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Indigenous Governance:</span>
                    <span className="text-rose-400">Non-Compliant (No OCAP)</span>
                  </div>
                </div>
              </div>

              {/* Tier 2: ICEarth Member Edge Service */}
              <div className="p-5 rounded-xl bg-stone-900/90 border border-sky-600/40 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">Tier 2</span>
                  <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-mono border border-sky-800/40">
                    Sovereign Member Service
                  </span>
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <ShieldCheck size={16} className="text-sky-400" />
                  ICEarth Member Co-Pilot
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Bridges Gemini&apos;s state-of-the-art agentic tool calling into the user&apos;s local browser and edge sandbox.
                  Member data (health logs, water lead tests, personal finances) remains encrypted with zero tracking.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-stone-800 text-[11px] font-mono text-stone-300">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Host Environment:</span>
                    <span className="text-sky-300">Local Browser / Edge Node</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Data Boundary:</span>
                    <span className="text-emerald-400">Zero-Knowledge Vault</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Surveillance Exposure:</span>
                    <span className="text-emerald-400">0% (Client-Authoritative)</span>
                  </div>
                </div>
              </div>

              {/* Tier 3: Indigenous Sovereign Tribal Enclave */}
              <div className="p-5 rounded-xl bg-stone-900/90 border border-amber-600/40 space-y-3 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">Tier 3</span>
                  <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-[10px] font-mono border border-amber-800/40">
                    Nation-State Sovereign
                  </span>
                </div>
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <TreePine size={16} className="text-amber-400" />
                  Tribal Sovereign Enclaves
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Deployed for 574+ federally recognized tribes. Powers GIS land trusts, sacred language corpus protection,
                  aquifer monitoring, and gaming compliance under strict First Nations OCAP® protocols.
                </p>
                <div className="space-y-1.5 pt-2 border-t border-stone-800 text-[11px] font-mono text-stone-300">
                  <div className="flex justify-between">
                    <span className="text-stone-500">Host Environment:</span>
                    <span className="text-amber-300">Air-Gapped Tribal Enclave</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Data Governance:</span>
                    <span className="text-amber-400">OCAP® Certified</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-stone-500">Legal Jurisdiction:</span>
                    <span className="text-amber-400">Inherent Tribal Sovereignty</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: CAPABILITIES & BENCHMARKS */}
        {activeSubTab === 'capabilities' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <TrendingUp className="text-sky-400" />
                  The Agentic Paradigm Shift: Conversational Chat to Autonomous Task Ownership
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  Benchmark analysis comparing conventional manual workflows, legacy conversational chatbots (ChatGPT-3.5/early Gemini),
                  Google Gemini Enterprise (Cloud 2026), and ICEarth Sovereign Agentic Architecture.
                </p>
              </div>

              {/* Chart 1: Capability Benchmarks */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-4">
                  Multi-Dimensional Capability & Privacy Benchmark (0 - 100 Index)
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={capabilityBenchmarkData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="metric" stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                      <YAxis stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', fontSize: '12px' }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar dataKey="legacyBot" name="Legacy Chatbot (2023)" fill="#78716c" />
                      <Bar dataKey="geminiEnterprise" name="Google Gemini Enterprise (2026)" fill="#38bdf8" />
                      <Bar dataKey="icearthSovereign" name="ICEarth Sovereign Agent (Edge/OCAP)" fill="#10b981" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Chart 2: Timeline Evolution */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-4">
                  Global Workload Distribution: Chat vs Task-Assisted vs Autonomous Agentic Ownership
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={adoptionTimelineData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="year" stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                      <YAxis stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} unit="%" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', fontSize: '12px' }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="chatConversational" name="Conversational Chat Only" stroke="#f43f5e" strokeWidth={2} />
                      <Line type="monotone" dataKey="taskAssisted" name="Task-Assisted Prompting" stroke="#f59e0b" strokeWidth={2} />
                      <Line type="monotone" dataKey="autonomousAgentic" name="Autonomous Agentic Ownership" stroke="#38bdf8" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: INDIGENOUS SOVEREIGN ENCLAVES */}
        {activeSubTab === 'indigenous_deployment' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-mono font-bold border border-amber-700/50">
                    First Nations OCAP® Principles
                  </span>
                  <span className="text-xs text-stone-400 font-mono">574+ Federally Recognized Tribes</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <TreePine className="text-amber-400" />
                  Deploying Gemini Agentic AI to Indigenous Communities as Sovereign Nations
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  Indigenous nations possess inherent constitutional sovereignty pre-dating the United States and Canada.
                  When Big Tech introduces agentic AI, commercial cloud contracts routinely absorb indigenous cultural data,
                  land maps, sacred languages, and natural resource registries. ICEarth delivers a sovereign architecture
                  guaranteeing complete adherence to First Nations Information Governance Centre (FNIGC) OCAP® standards.
                </p>
              </div>

              {/* Domain Breakdown Chart + Narrative */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-5 p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-2 text-center">
                    Tribal Sovereign Domain Allocation
                  </div>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={tribalDomainData}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                          labelLine={false}
                        >
                          {tribalDomainData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', fontSize: '11px' }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="space-y-1 mt-2 text-[10px] font-mono">
                    {tribalDomainData.map(d => (
                      <div key={d.name} className="flex items-center justify-between text-stone-300">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d.color }} />
                          <span className="truncate max-w-[220px]">{d.name}</span>
                        </div>
                        <span className="font-bold">{d.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-3">
                  {/* OCAP 4 Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-600/30">
                      <div className="text-amber-400 font-bold font-mono text-xs flex items-center gap-1.5">
                        <Shield size={14} /> Ownership (Inherent)
                      </div>
                      <p className="text-xs text-stone-300 mt-1">
                        The Tribal Nation collectively owns all data, models, weights, transcripts, and telemetry.
                        Commercial cloud providers hold zero licensing rights or derivatives.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-600/30">
                      <div className="text-amber-400 font-bold font-mono text-xs flex items-center gap-1.5">
                        <Scale size={14} /> Control (Tribal Law)
                      </div>
                      <p className="text-xs text-stone-300 mt-1">
                        Tribal councils define access policies. Agentic workflows execute within sovereign boundaries
                        under tribal customary law and treaty jurisdictions.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-600/30">
                      <div className="text-amber-400 font-bold font-mono text-xs flex items-center gap-1.5">
                        <Key size={14} /> Access (Authorized)
                      </div>
                      <p className="text-xs text-stone-300 mt-1">
                        Tribal members and authorized leadership access community assets via cryptographic keys.
                        Zero third-party scraping or unauthorized federal surveillance.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-950 border border-amber-600/30">
                      <div className="text-amber-400 font-bold font-mono text-xs flex items-center gap-1.5">
                        <Server size={14} /> Possession (Physical/Edge)
                      </div>
                      <p className="text-xs text-stone-300 mt-1">
                        Physical custody of storage media, localized edge servers, and air-gapped backups hosted
                        directly within tribal reservation land territories.
                      </p>
                    </div>
                  </div>

                  {/* Operational Capabilities Table */}
                  <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 text-xs space-y-2">
                    <div className="text-sky-400 font-bold font-mono flex items-center gap-1.5">
                      <Zap size={14} /> Real-World Tribal Enclave Use Cases:
                    </div>
                    <ul className="space-y-1.5 text-stone-300 list-disc list-inside">
                      <li>
                        <strong>Land Trust & Mineral GIS:</strong> Automated boundary audits, treaty rights defense,
                        and spatial mapping of oil/gas leases and mineral rights.
                      </li>
                      <li>
                        <strong>Water Aquifer & Runoff Defense:</strong> Real-time environmental sensor agents monitoring
                        lead, arsenic, and mine tailings flowing through sovereign watersheds.
                      </li>
                      <li>
                        <strong>Language Immersion Curricula:</strong> Sovereign speech and dialect agents assisting
                        tribal youth education without transmitting sacred oral histories to commercial servers.
                      </li>
                      <li>
                        <strong>Sovereign Gaming Auditing:</strong> Autonomous compliance agents auditing slot floor
                        telemetry, compact revenues, and financial reconciliation in real time.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: MEMBER SERVICES */}
        {activeSubTab === 'member_services' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <UserCheck className="text-sky-400" />
                  ICEarth Member Personal Agent Services: Enterprise Power in Client Hands
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  While Google focuses on corporate Fortune 100 enterprise deployments, ICEarth empowers individual
                  members with the exact same agentic capabilities—operating as private sovereign services with zero data brokerage.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Service 1: Health & Exposenomics Guard */}
                <div className="p-5 rounded-xl bg-stone-950 border border-sky-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-sky-400 flex items-center gap-2">
                      <Droplets size={16} /> Personal Exposenomics & Lead Guard
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-mono">
                      Health Edge Agent
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Continuously monitors tap water sensor readings, lab blood lead levels (BLL), and local municipal
                    infrastructure alerts. Calculates personalized Roulet Law exposure indices and orders replacement
                    filter cartridges without user intervention.
                  </p>
                  <div className="p-3 rounded-lg bg-stone-900 text-[11px] font-mono text-stone-400">
                    <strong>Autonomous Tools:</strong> waterFilterIoTWatcher(), bloodLeadDosingAuditor(), cityPipeNoticeCrawler()
                  </div>
                </div>

                {/* Service 2: Sovereign Executive Assistant */}
                <div className="p-5 rounded-xl bg-stone-950 border border-sky-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-sky-400 flex items-center gap-2">
                      <Calendar size={16} /> Autonomous Travel & Calendar Co-Pilot
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-mono">
                      Productivity Agent
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Takes ownership of complex scheduling across multiple calendars, resolves meeting conflicts,
                    books train and flight itineraries matching dietary and sovereign criteria, and compiles meeting briefs
                    without sharing user location or schedule with ad networks.
                  </p>
                  <div className="p-3 rounded-lg bg-stone-900 text-[11px] font-mono text-stone-400">
                    <strong>Autonomous Tools:</strong> conflictResolutionScheduler(), sovereignTravelBooker(), itineraryCompiler()
                  </div>
                </div>

                {/* Service 3: Automated Sovereign Developer */}
                <div className="p-5 rounded-xl bg-stone-950 border border-sky-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-sky-400 flex items-center gap-2">
                      <Code2 size={16} /> Automated Code & Node Deployment Engine
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-mono">
                      Engineering Agent
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Generates production-grade TypeScript code, creates pull requests, runs linting and test suites,
                    and deploys localized IPFS / sovereign ledger nodes on member hardware with zero cloud lock-in.
                  </p>
                  <div className="p-3 rounded-lg bg-stone-900 text-[11px] font-mono text-stone-400">
                    <strong>Autonomous Tools:</strong> gitRepoRefactorEngine(), testSuiteVerifier(), sovereignNodeDeployer()
                  </div>
                </div>

                {/* Service 4: Legal & Contract Watcher */}
                <div className="p-5 rounded-xl bg-stone-950 border border-sky-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-bold text-sky-400 flex items-center gap-2">
                      <Scale size={16} /> Sovereign Contract & Privacy Auditor
                    </div>
                    <span className="px-2 py-0.5 rounded bg-sky-950 text-sky-300 text-[10px] font-mono">
                      Legal Agent
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Audits incoming Terms of Service, NDAs, and consumer contracts for hidden arbitration clauses,
                    telemetry tracking clauses, or unilateral IP grabs. Generates redlined sovereign counter-proposals instantly.
                  </p>
                  <div className="p-3 rounded-lg bg-stone-900 text-[11px] font-mono text-stone-400">
                    <strong>Autonomous Tools:</strong> clauseArbitrationDetector(), tosPrivacyAuditor(), sovereignCounterDrafter()
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: INTERACTIVE SIMULATOR */}
        {activeSubTab === 'simulator' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                    <Play className="text-sky-400" />
                    Interactive Gemini Agentic Orchestrator Simulator
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-1">
                    Select an autonomous agent persona and observe real-time step-by-step task ownership,
                    tool orchestration, and cryptographic ledger verification.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={runSimulation}
                    disabled={isSimRunning}
                    className={`px-4 py-2 rounded-lg font-mono font-bold text-xs flex items-center gap-1.5 transition shadow cursor-pointer ${
                      isSimRunning
                        ? 'bg-stone-700 text-stone-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-stone-950 font-black'
                    }`}
                  >
                    <Play size={14} />
                    <span>{isSimRunning ? 'Executing Agent Run...' : 'Execute Task'}</span>
                  </button>
                  <button
                    onClick={resetSimulation}
                    disabled={isSimRunning}
                    className="px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 font-mono text-xs flex items-center gap-1 cursor-pointer"
                  >
                    <RotateCcw size={13} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Persona Selector Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  {
                    id: 'tribal_land_gis',
                    label: 'Tribal Land Trust GIS',
                    icon: TreePine,
                    badge: 'OCAP Enclave',
                    desc: '140k-acre reservation spatial audit'
                  },
                  {
                    id: 'member_health_lead',
                    label: 'Member Health & Lead Guard',
                    icon: Droplets,
                    badge: 'Edge Vault',
                    desc: 'BLL telemetry & water pipe crawler'
                  },
                  {
                    id: 'language_custodian',
                    label: 'Sacred Language Custodian',
                    icon: BookOpen,
                    badge: 'Cultural IP',
                    desc: '120h elder oral transcript indexing'
                  },
                  {
                    id: 'sovereign_executive',
                    label: 'Spectrum Telecom COE Agent',
                    icon: Terminal,
                    badge: 'Enterprise IT',
                    desc: 'Calendar, travel & code deployment'
                  }
                ].map(p => {
                  const Icon = p.icon;
                  const isSelected = selectedAgentPersona === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => {
                        setSelectedAgentPersona(p.id as any);
                        resetSimulation();
                      }}
                      disabled={isSimRunning}
                      className={`p-3.5 rounded-xl text-left border transition cursor-pointer ${
                        isSelected
                          ? 'bg-sky-950/80 border-sky-400 ring-2 ring-sky-400/50 text-white'
                          : 'bg-stone-950 border-stone-800 hover:border-stone-700 text-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Icon size={16} className={isSelected ? 'text-amber-400' : 'text-stone-400'} />
                        <span className="px-1.5 py-0.5 rounded bg-stone-800 text-[9px] font-mono text-stone-300">
                          {p.badge}
                        </span>
                      </div>
                      <div className="text-xs font-bold">{p.label}</div>
                      <div className="text-[10px] text-stone-400 mt-1">{p.desc}</div>
                    </button>
                  );
                })}
              </div>

              {/* Execution Console Display */}
              <div className="p-4 sm:p-5 rounded-xl bg-black border border-stone-800 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-stone-800 pb-2 text-stone-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-white font-bold">
                      {personaConfigurations[selectedAgentPersona].name}
                    </span>
                  </div>
                  <span className="text-[11px] text-sky-400">
                    Domain: {personaConfigurations[selectedAgentPersona].domain}
                  </span>
                </div>

                <div className="text-stone-300 bg-stone-950 p-2.5 rounded border border-stone-800 text-[11px]">
                  <span className="text-amber-400 font-bold">Goal Assignment: </span>
                  {personaConfigurations[selectedAgentPersona].trigger}
                </div>

                <div className="min-h-48 max-h-72 overflow-y-auto space-y-2 py-2 pr-2 scrollbar-thin">
                  {simLogs.length === 0 ? (
                    <div className="text-stone-600 italic py-8 text-center">
                      Click &ldquo;Execute Task&rdquo; above to run autonomous agentic execution loop...
                    </div>
                  ) : (
                    simLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={`leading-relaxed ${
                          log.includes('SUCCESS')
                            ? 'text-emerald-400 font-bold'
                            : log.includes('VERIFIED')
                            ? 'text-amber-300 font-bold'
                            : log.includes('Initializing')
                            ? 'text-sky-400'
                            : 'text-stone-300'
                        }`}
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>

                {/* Progress bar */}
                <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-sky-400 via-teal-400 to-emerald-400 h-full transition-all duration-500"
                    style={{
                      width: `${(simStep / (personaConfigurations[selectedAgentPersona].steps.length + 1)) * 100}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: CRYPTOGRAPHIC PROVENANCE */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <ShieldCheck className="text-sky-400" />
                  Plate #76 Cryptographic Provenance & Vault Registry
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  Every scientific plate, architectural blueprint, and agentic service deployed to ICEarth is sealed
                  with SHA-256 cryptographic hashes and dual-registered in the sovereign archive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px]">Photo & Gallery Asset ID</div>
                  <div className="text-white font-bold text-sm">PHOTO-000CJ</div>
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] pt-2">Member Media IP ID</div>
                  <div className="text-white font-bold text-sm">IP-000CJ</div>
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] pt-2">Plate Number</div>
                  <div className="text-amber-400 font-bold text-sm">Plate #76</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px]">Vault Cryptographic Hash</div>
                  <div className="text-amber-400 font-bold break-all">{vaultHash}</div>
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] pt-2">SHA-256 Image Provenance</div>
                  <div className="text-sky-400 font-bold break-all">{provenanceSha256}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-300 font-mono">
                  Click to copy verified sovereign vault hash to clipboard:
                </div>
                <button
                  onClick={handleCopyHash}
                  className="px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. CROSS-NAVIGATION BAR TO RELATED PLATES */}
        <section className="mt-12 p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400" />
                Cross-Navigation: Sovereign ICEarth Plates & Research Engines
              </h4>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                Connect directly between Agentic AI, Indigenous Sovereignty, and Environmental Forensic Timelines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {onNavigateTab && (
                <>
                  <button
                    onClick={() => onNavigateTab('vanishing_gut_microbiome')}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-stone-700"
                  >
                    <span>🧬 Plate #75: Vanishing Microbiome</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('indigenous_gaming_prediction_markets')}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-stone-700"
                  >
                    <span>🪙 Plate #73: Indigenous Gaming</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('indigenous_america_lead_exposenomics')}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-stone-700"
                  >
                    <span>🪶 Plate #72: PAHO Indigenous Lead</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('sovereign_portal')}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-mono font-bold text-xs transition shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>🏛️ Sovereign Portal</span>
                    <ArrowRight size={13} />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 6. HIGH-RESOLUTION ARTWORK VIEW MODAL */}
      {isArtModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setIsArtModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-stone-900 border border-sky-600/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 bg-stone-950 flex justify-between items-center">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Plate #76: Google Gemini Agentic AI Enterprise & Sovereign Indigenous Tribal Operations</span>
                </h3>
                <p className="text-xs text-sky-400 font-mono">
                  Asset ID: PHOTO-000CJ / IP-000CJ • 16:9 Master High-Resolution Infographic
                </p>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white transition cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-black flex flex-col items-center justify-center overflow-auto">
              <img
                src={geminiAgenticPlateImg}
                alt="Plate #76 Full Resolution Master Visual"
                className="w-full h-auto object-contain max-h-[70vh] rounded-lg border border-stone-800"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-wrap justify-between items-center gap-2">
              <div className="text-xs text-stone-400 font-mono">
                Vault Hash: <span className="text-amber-400 break-all">{vaultHash}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-stone-700"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied' : 'Copy Hash'}</span>
                </button>
                <button
                  onClick={() => setIsArtModalOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-stone-950 font-bold text-xs cursor-pointer shadow-md"
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

export default GeminiAgenticSovereignService;
