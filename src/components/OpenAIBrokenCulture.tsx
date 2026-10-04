import React, { useState } from 'react';
import openAIBrokenPlateImg from '../assets/images/openai_broken_culture_1791096032753.jpg';
import {
  Shield,
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
  UserX,
  UserCheck,
  TrendingDown,
  Layers,
  Database,
  Leaf
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

interface OpenAIBrokenCultureProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const OpenAIBrokenCulture: React.FC<OpenAIBrokenCultureProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'atlantic_essay' | 'ai_as_new_pb' | 'altman_pushback' | 'icearth_solution' | 'provenance'
  >('atlantic_essay');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xOPENAI_BROKEN_CULTURE_AI_AS_NEW_PB_PLATE_62_VAULT_2026';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Comparative data: Resource allocation in Frontier AI (Safety vs Scaling)
  const resourceAllocationData = [
    { category: 'Frontier Compute Scaling', percent: 84, fill: '#EF4444', label: '84% Massive GPU Clusters & Hardware Scaling' },
    { category: 'Marketing & Commercialization', percent: 9, fill: '#F59E0B', label: '9% Enterprise Sales & For-Profit Expansion' },
    { category: 'Legal & Lobbying Shields', percent: 4.5, fill: '#8B5CF6', label: '4.5% Regulatory Capture & Copyright Defense' },
    { category: 'Empirical Safety & Alignment', percent: 2.5, fill: '#10B981', label: '2.5% Pre-deployment Safety Testing & Audits' }
  ];

  // Radar Data: Centralized AI Cartel vs ICEarth Sovereign IT
  const comparativeRadarData = [
    { dimension: 'Cognitive Sovereignty', centralized: 15, sovereign: 98 },
    { dimension: 'Elder & Moral Wisdom', centralized: 5, sovereign: 95 },
    { dimension: 'User-Held Cryptographic Keys', centralized: 0, sovereign: 100 },
    { dimension: 'Ecological Hydrology (Zero-Water)', centralized: 12, sovereign: 96 },
    { dimension: 'Whistleblower Independence', centralized: 10, sovereign: 92 },
    { dimension: 'Perpetual Public Liability', centralized: 20, sovereign: 94 }
  ];

  // Lead (Pb) vs AI (Synthetic Neurotoxicity) Parallels
  const historicalParallels = [
    {
      era: '1920s Tetraethyl Lead (Pb) Boom',
      aiEra: '2020s Frontier AI Scaling Sprint',
      industryClaim: '"Gasoline lead additives give maximum engine power; no proof of population harm."',
      aiClaim: '"Scaling parameters guarantees artificial super intelligence; any pause cedes hegemony."',
      whistleblowerFate: 'Public health researchers (Kehoe rule) discredited; Needleman attacked by industry lawyers.',
      aiWhistleblowerFate: 'Safety team leads resign (Robinson, Leike, Sutskever); NDAs gag departing staff.',
      biologicalToxicity: 'Irreversible synaptic pruning, violent impulsivity, drops in childhood IQ across generations.',
      aiToxicity: 'Cognitive atrophy, epistemic pollution, synthetic hallucinations, digital addiction, hallucinations.',
      governanceModel: 'Corporate cartels (DuPont, Standard Oil, Ethyl Corp) self-regulate.',
      aiGovernanceModel: 'Oligarch board capture, converting non-profit charter to for-profit corporation.'
    }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-300 font-sans`}>
      {/* 1. TOP HEADER & METADATA HERO BANNER */}
      <section className={`border-b ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/90 border-stone-800'} px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Skull size={14} className="text-white" />
                <span>Plate #62 • Cognitive Exposenomics</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-bold flex items-center gap-1 ${
                isLight ? 'bg-stone-100 border-stone-300 text-rose-950' : 'bg-stone-800 border-stone-700 text-rose-300'
              }`}>
                <Landmark size={13} className={isLight ? 'text-rose-700' : 'text-rose-400'} />
                <span>The Atlantic Forensic: Inside OpenAI's Broken Culture</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] font-semibold ${
                isLight ? 'bg-stone-100 border-stone-300 text-stone-800' : 'bg-stone-800 border-stone-700 text-stone-300'
              }`}>
                David Robinson (Safety Reports Lead) • Oct. 2026 • The Atlantic
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer font-bold ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
                title="Copy SHA-256 Vault Hash"
              >
                {copiedHash ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className={isLight ? 'text-stone-700' : 'text-stone-400'} />}
                <span>{copiedHash ? 'Vault Hash Copied' : '0xPLATE_62_VAULT'}</span>
              </button>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-xs font-mono rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
              >
                <Maximize2 size={14} />
                <span>View Master Plate #62</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              Why AI is the New Pb (Lead): Inside OpenAI's Broken Safety Culture
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              Following David Robinson’s explosive resignation as OpenAI's safety reporting lead in <em>The Atlantic</em> (*"I Quit OpenAI Because Its Culture Is Broken"*), ICEarth deconstructs why Frontier AI is the 21st-century equivalent of Tetraethyl Lead (Pb). As CEO Sam Altman pushes back and the 4th Estate sounds the alarm on corporate recklessness, ICEarth presents the Sovereign IT remedy: human wisdom over hyper-scaling, local client-side cryptographic enclaves, and community elder governance.
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Safety Exodus</span>
                <UserX size={14} className="text-red-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-red-800' : 'text-red-400'}`}>10+ Key Leads</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Robinson, Leike, Sutskever, Saunders, Krueger departed</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Silicon Valley Flaw</span>
                <AlertTriangle size={14} className="text-amber-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>0% Humility</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>"The future depends on wisdom that Silicon Valley lacks"</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>The Pb Parallel</span>
                <Skull size={14} className="text-purple-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>AI = New Pb</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Synthetic cognitive poisoning mirrors atmospheric lead pollution</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Altman Counter-Spin</span>
                <TrendingDown size={14} className="text-rose-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>For-Profit Pivot</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Dismantling non-profit guardrails to reward venture capital</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>4th Estate Audit</span>
                <Newspaper size={14} className="text-cyan-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>Guaranteed Failures</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Culture of perpetual sprints guarantees systemic catastrophic breach</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>ICEarth Architecture</span>
                <Shield size={14} className="text-emerald-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>Sovereign Enclaves</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Elder stewardship, zero extraction, client-side cryptographic keys</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-NAVIGATION TABS */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} sticky top-0 z-30 shadow-xs`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-2 text-xs font-mono scrollbar-none">
            <button
              onClick={() => setActiveSubTab('atlantic_essay')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'atlantic_essay'
                  ? 'bg-rose-700 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <FileText size={15} />
              <span>1. Inside OpenAI: David Robinson's Atlantic Essay</span>
            </button>

            <button
              onClick={() => setActiveSubTab('ai_as_new_pb')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'ai_as_new_pb'
                  ? 'bg-purple-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Skull size={15} />
              <span>2. Why AI Is the New Pb (Lead) Exposenomics</span>
            </button>

            <button
              onClick={() => setActiveSubTab('altman_pushback')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'altman_pushback'
                  ? 'bg-amber-600 text-stone-950 shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Building size={15} />
              <span>3. Sam Altman's Pushback & 4th Estate Verdict</span>
            </button>

            <button
              onClick={() => setActiveSubTab('icearth_solution')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'icearth_solution'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Shield size={15} />
              <span>4. How ICEarth Sovereign AI Solves These Concerns</span>
            </button>

            <button
              onClick={() => setActiveSubTab('provenance')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'provenance'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Maximize2 size={15} />
              <span>5. Master Plate #62 & Cryptographic Provenance</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* SUB-TAB 1: INSIDE OPENAI: DAVID ROBINSON'S ATLANTIC ESSAY */}
        {activeSubTab === 'atlantic_essay' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 border ${
                    isLight ? 'bg-rose-100 text-rose-950 border-rose-300' : 'bg-rose-950/40 text-rose-300 border-rose-700'
                  }`}>
                    <Newspaper size={14} />
                    <span>THE ATLANTIC WHISTLEBLOWER DISPATCH • OCTOBER 2026</span>
                  </span>
                  <span className={`text-xs font-mono font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    By David Robinson, Former Lead Writer of OpenAI Safety Reports
                  </span>
                </div>
                <a
                  href="https://www.theatlantic.com/technology/2026/10/openai-safety-team-resignation/688881/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                    isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-rose-300 border-stone-700'
                  }`}
                >
                  <span>Original Atlantic Article</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-5">
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-rose-400'}`}>
                    "I Quit OpenAI Because Its Culture Is Broken"
                  </h2>
                  <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                    David Robinson, who spearheaded the writing and release of the official safety reports accompanying every major OpenAI frontier model release (including GPT-4, GPT-4o, and o1), resigned in protest this week. His resignation confirms what critics have warned: the company's internal culture prioritizes scaling speed over human safety.
                  </p>

                  {/* Verbatim Excerpt Box */}
                  <div className={`p-5 rounded-2xl border-l-4 border-rose-600 space-y-3 font-serif italic text-sm ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'
                  }`}>
                    <p>
                      "What I’m about to tell you has, I realize, become something of a cliché: I resigned this week from OpenAI. I led the writing of the safety reports we published with each major launch. Now I’m joining a parade of former colleagues—at OpenAI and the industry’s other leaders—who have decided that the current path is unacceptable."
                    </p>
                    <p>
                      "I agree with other recently departed staff that the companies building this technology aren’t being nearly careful enough. But I believe that we need to look deeper than specific rules or new laws. We need to talk about culture."
                    </p>
                    <p className="font-bold not-italic font-sans text-xs text-red-600 dark:text-red-400">
                      "The future depends on wisdom that Silicon Valley lacks. Wisdom about how to handle dangerous technology and, more fundamentally, wisdom about what it means to care for people. This moment needs a degree of humility that isn’t natural for people who have succeeded through their extreme confidence."
                    </p>
                    <p>
                      "My former colleagues at OpenAI were prescient: They came to understand the scaling laws that meant bigger AI systems would be smarter—and so they went all in on building bigger systems, at great cost. A can-do attitude of achieving the seemingly impossible—coupled with work timelines that amount to perpetual sprints—are common across the industry."
                    </p>
                    <footer className="text-xs font-mono font-bold mt-2 text-stone-600 dark:text-stone-400 not-italic">
                      — David Robinson, The Atlantic (October 2026)
                    </footer>
                  </div>

                  <h3 className={`text-lg font-serif font-bold ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    The Three Cultural Pathologies Exposed:
                  </h3>
                  <div className="space-y-3 text-xs font-mono">
                    <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-red-600 block mb-1 text-sm font-sans font-bold">1. Extreme Arrogance Mistaken for Wisdom:</strong>
                      Silicon Valley executives believe that the same venture-backed confidence that scaled consumer apps qualifies them to shepherd unprecedented cognitive technologies without public accountability or elder counsel.
                    </div>

                    <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-amber-600 block mb-1 text-sm font-sans font-bold">2. Perpetual Sprints That Guarantee Failures:</strong>
                      Work timelines structured as ceaseless hackathon-style sprints make deep safety auditing, red-teaming, and biological impact assessments structural impossibilities. Speed is monetized; caution is penalized.
                    </div>

                    <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-purple-600 block mb-1 text-sm font-sans font-bold">3. The Scaling Law Monomania:</strong>
                      An absolute theological faith in computational scaling (more GPUs + more scraped data = divine capability) while totally blinding leadership to systemic toxicity, energy drain, and community harm.
                    </div>
                  </div>
                </div>

                {/* Right: Plate 62 Preview & Image Card */}
                <div className="lg:col-span-5 space-y-4">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative group rounded-2xl overflow-hidden border-2 border-red-500/60 shadow-2xl cursor-pointer bg-black"
                  >
                    <img
                      src={openAIBrokenPlateImg}
                      alt="Plate 62: Inside OpenAI's Broken Culture"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-red-300">
                        <span>PLATE #62 FORENSIC AUDIT</span>
                        <span className="flex items-center gap-1 text-white">
                          <Maximize2 size={13} /> Expand
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-mono mt-1">
                        OpenAI Safety Resignations, Sam Altman Pushback & Why AI Is the New Pb (Lead)
                      </p>
                    </div>
                  </div>

                  {/* Resource Allocation Breakdown */}
                  <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                    <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                      Estimated Frontier Lab Capital Allocation
                    </h4>
                    <div className="h-44 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={resourceAllocationData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e7e5e4' : '#292524'} horizontal={false} />
                          <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} stroke={isLight ? '#44403c' : '#78716c'} tick={{ fontSize: 10 }} />
                          <YAxis dataKey="category" type="category" width={110} stroke={isLight ? '#44403c' : '#a8a29e'} tick={{ fontSize: 9 }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: isLight ? '#ffffff' : '#0c0a09',
                              borderColor: isLight ? '#d6d3d1' : '#44403c',
                              borderRadius: '0.75rem',
                              fontSize: '11px'
                            }}
                            formatter={(val: any, _name: any, item: any) => [`${val}%`, item.payload.label]}
                          />
                          <Bar dataKey="percent" radius={[0, 4, 4, 0]}>
                            {resourceAllocationData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <p className={`text-[10px] font-mono leading-tight ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                      Less than 3% of frontier capital and compute is devoted to pre-deployment safety, while 84%+ drives hyper-scaling sprints.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: WHY AI IS THE NEW PB (LEAD) */}
        {activeSubTab === 'ai_as_new_pb' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    Historical Exposenomics Forensic
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Why AI Is the New Tetraethyl Lead (Pb)
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Comparing the 20th-century lead epidemic (automotive TEL & Sherwin-Williams white lead) with 21st-century synthetic cognitive pollution.
                  </p>
                </div>
              </div>

              {/* Comparative Analysis Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-red-50/70 border-red-200 text-stone-900' : 'bg-red-950/20 border-red-800 text-stone-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                      The 20th Century: Industrial Lead (Pb)
                    </span>
                    <Skull size={20} className="text-red-500" />
                  </div>
                  <h3 className="font-serif font-black text-lg">
                    Atmospheric Neurotoxin of the Combustion Era
                  </h3>
                  <ul className="space-y-2 text-xs font-mono list-disc pl-4">
                    <li><strong>Market Drivers:</strong> General Motors, DuPont, Standard Oil, and Sherwin-Williams marketed white lead and leaded gasoline as indispensable signs of progress.</li>
                    <li><strong>Delayed Toxicity:</strong> Immediate combustion power masked cumulative bioaccumulation in bone and brain tissue across 170M+ Americans.</li>
                    <li><strong>Scientific Suppression:</strong> The Kehoe Rule enforced corporate self-certification; whistleblowers like Clair Patterson and Herbert Needleman faced industry slander and legal attacks.</li>
                    <li><strong>Civic Betrayal:</strong> Corporate polluters shielded from liability by politicians in places like Cleveland and Columbus while kids lost IQ points.</li>
                  </ul>
                </div>

                <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-amber-50/70 border-amber-200 text-stone-900' : 'bg-amber-950/20 border-amber-800 text-stone-200'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-amber-600 text-stone-950 font-mono text-xs font-bold rounded-lg uppercase">
                      The 21st Century: Frontier AI Hyper-Scaling
                    </span>
                    <Brain size={20} className="text-amber-500" />
                  </div>
                  <h3 className="font-serif font-black text-lg">
                    Cognitive Neurotoxin of the Algorithmic Era
                  </h3>
                  <ul className="space-y-2 text-xs font-mono list-disc pl-4">
                    <li><strong>Market Drivers:</strong> OpenAI, Microsoft, Google, Meta, and Nvidia market unvetted frontier models as the inevitable destiny of human civilization.</li>
                    <li><strong>Delayed Toxicity:</strong> Immediate synthetic convenience masks epistemic poisoning, attention disintegration, and the atrophy of human critical thought.</li>
                    <li><strong>Scientific Suppression:</strong> Top alignment researchers silenced with draconian non-disparagement agreements, clawback clauses, and corporate restructuring.</li>
                    <li><strong>Civic Betrayal:</strong> $1.8 Trillion summits celebrate monopoly profits while communities suffer power grid drains, millions of gallons of aquifer loss, and biological chaos.</li>
                  </ul>
                </div>
              </div>

              {/* Deep Exposenomics Breakdown */}
              <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Roulet’s Law of Cognitive Exposenomics: The Parallel Decoded
                </h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                  In 1923, when workers at the Bayway, New Jersey refinery started hallucinating, leaping from windows, and dying of acute lead delirium ("loony gas"), Standard Oil and GM issued statements calling tetraethyl lead a "gift of God" essential to modern aviation and motor vehicles. Exactly one century later, as frontier models hallucinate synthetic reality, leak private data, and induce psychological dependence, tech executives repeat the same exact playbook: dismissing public harm as the trivial cost of technological hegemony.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-1 rounded bg-red-600/10 text-red-600 border border-red-500/20 font-bold">1923: Bayway Loony Gas</span>
                  <span className="px-2.5 py-1 rounded bg-purple-600/10 text-purple-600 border border-purple-500/20 font-bold">1970: Clean Air Act Resistance</span>
                  <span className="px-2.5 py-1 rounded bg-amber-600/10 text-amber-600 border border-amber-500/20 font-bold">2026: OpenAI Safety Team Liquidation</span>
                  <span className="px-2.5 py-1 rounded bg-emerald-600/10 text-emerald-600 border border-emerald-500/20 font-bold">2026: ICEarth Sovereign IT Enclaves</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: SAM ALTMAN'S PUSHBACK & 4TH ESTATE VERDICT */}
        {activeSubTab === 'altman_pushback' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    Executive Pushback & Fourth Estate Scrutiny
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Sam Altman's Defense & The Media Reckoning
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left: Altman's Pushback */}
                <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-amber-600 text-stone-950 font-mono text-xs font-bold rounded-lg uppercase">
                      OpenAI Leadership Stance
                    </span>
                    <Building size={18} className="text-amber-500" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Altman's Narrative: "Iterative Deployment is True Safety"
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-stone-700 dark:text-stone-300 font-sans">
                    <p>
                      In response to Robinson’s departure and growing criticism from former executives, OpenAI CEO Sam Altman and top leadership have doubled down on their core counter-narrative:
                    </p>
                    <div className="p-3 bg-amber-500/10 border-l-2 border-amber-500 text-stone-800 dark:text-amber-200 italic font-serif">
                      "You cannot make AI safe in a closed laboratory. The only way to learn how to make systems safe is to put them in the hands of hundreds of millions of users and iteratively patch the vulnerabilities in the wild."
                    </div>
                    <p>
                      Furthermore, Altman has driven the corporate restructuring of OpenAI from a non-profit-governed entity into a standard for-profit public benefit corporation, seeking hundreds of billions in equity valuation from international sovereign wealth funds while stripping the non-profit board of its historic veto power.
                    </p>
                  </div>
                </div>

                {/* Right: The 4th Estate Analysis */}
                <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-rose-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                      The Fourth Estate Consensus
                    </span>
                    <Newspaper size={18} className="text-rose-500" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Media Verdict: The Pretense of Self-Regulation Has Collapsed
                  </h3>
                  <div className="space-y-3 text-xs leading-relaxed text-stone-700 dark:text-stone-300 font-sans">
                    <p>
                      Investigative analyses across <em>The Atlantic</em>, <em>The New York Times</em>, <em>Axios</em>, and <em>Wired</em> emphasize three critical findings:
                    </p>
                    <ul className="space-y-2 font-mono text-[11px] list-disc pl-4">
                      <li><strong>The NDA Equity Hostage Scandal:</strong> Whistleblowers revealed that OpenAI forced departing employees to sign lifetime non-disparagement agreements under threat of clawing back millions in vested equity.</li>
                      <li><strong>Superalignment Dissolution:</strong> The dedicated team created to prevent superintelligent catastrophe (led by Jan Leike and Ilya Sutskever) was starved of promised compute and dismantled.</li>
                      <li><strong>The Lab Rat Reality:</strong> Altman's "iterative deployment" is simply using the general public as unpaid human guinea pigs without informed consent.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Quote Block */}
              <div className={`p-5 rounded-2xl border-l-4 border-red-600 ${isLight ? 'bg-red-50 text-red-950' : 'bg-red-950/30 text-red-200'} space-y-2`}>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 dark:text-red-400">
                  The Core Warning from David Robinson
                </div>
                <p className="text-sm font-serif italic">
                  "If we treat safety as a public-relations report or an afterthought to be solved in the next sprint, we are not mitigating risk; we are merely documenting our own descent into catastrophic negligence."
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: HOW ICEARTH SOVEREIGN AI SOLVES THESE CONCERNS */}
        {activeSubTab === 'icearth_solution' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    Architectural Sovereign Remedy
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    How ICEarth Sovereign AI Solves OpenAI's Broken Model
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Replacing Silicon Valley hyper-scaling sprints with multi-generational elder wisdom and client-side cryptographic enclaves.
                  </p>
                </div>
              </div>

              {/* Radar Comparison Chart */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Systemic Architectural Comparison: Centralized AI vs. ICEarth Sovereign IT
                  </h3>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={comparativeRadarData}>
                        <PolarGrid stroke={isLight ? '#e7e5e4' : '#292524'} />
                        <PolarAngleAxis dataKey="dimension" tick={{ fill: isLight ? '#1c1917' : '#e4e4e7', fontSize: 10 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke={isLight ? '#78716c' : '#57534e'} />
                        <Radar name="Centralized AI Cartels (OpenAI / Big Tech)" dataKey="centralized" stroke="#EF4444" fill="#EF4444" fillOpacity={0.4} />
                        <Radar name="ICEarth Sovereign IT (Enclaves & Elders)" dataKey="sovereign" stroke="#10B981" fill="#10B981" fillOpacity={0.4} />
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

                <div className="lg:col-span-6 space-y-3 text-xs font-mono">
                  <div className={`p-4 rounded-2xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex items-center gap-2 text-emerald-600 font-bold">
                      <Lock size={15} />
                      <span>1. Local Enclaves & User-Held Cryptographic Keys</span>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      In ICEarth, computation executes within the user's local trusted hardware enclave (or zero-knowledge Swiss nodes). Model parameters do not harvest or aggregate user prompt streams into corporate data lakes.
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex items-center gap-2 text-emerald-600 font-bold">
                      <Users size={15} />
                      <span>2. Community Elder Governance (Wisdom Over Sprints)</span>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Decisions on AI deployment, capabilities, and ethics are anchored in Indigenous and community elder stewardship—a direct antidote to the lack of Silicon Valley wisdom identified by David Robinson.
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex items-center gap-2 text-emerald-600 font-bold">
                      <Leaf size={15} />
                      <span>3. Zero Biological & Hydrological Toxicity</span>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Rejecting the evaporative cooling towers that drain municipal aquifers and overwhelm electric grids, ICEarth clusters run on closed-loop, air-gapped, renewable microgrids.
                    </p>
                  </div>

                  <div className={`p-4 rounded-2xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                    <div className="flex items-center gap-2 text-emerald-600 font-bold">
                      <DollarSign size={15} />
                      <span>4. Sovereign Cognitive Dividend (Roulet's Law)</span>
                    </div>
                    <p className={`text-[11px] leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Under Roulet's Law, when corporate AI extracts cultural, artistic, or scientific knowledge from the commons, a mandatory sovereign dividend is repatriated directly to the originating human communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: MASTER PLATE #62 & CRYPTOGRAPHIC PROVENANCE */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                    Permanent Forensic Archive
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Plate #62: Master Forensic & Cryptographic Ledger
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
                      src={openAIBrokenPlateImg}
                      alt="Plate #62 Forensic Artwork"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-red-300">
                        <span>PLATE #62 FORENSIC PROVENANCE</span>
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
                      <span className="font-bold text-stone-800 dark:text-stone-200">PHOTO-000BV / IP-000BV</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Source Publication:</span>
                      <span className="font-bold text-stone-800 dark:text-stone-200">The Atlantic (Oct 2026)</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Exposenomics Domain:</span>
                      <span className="font-bold text-amber-600">Cognitive Neurotoxicity & Sovereign AI</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-stone-500">Jurisprudence:</span>
                      <span className="font-bold text-emerald-600">Roulet’s Law & ICEarth Framework</span>
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
              <Shield size={16} className={isLight ? 'text-rose-700' : 'text-rose-400'} />
              <span>Related Sovereign AI & Lead Exposenomics Sections</span>
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
              onClick={() => onNavigateTab?.('sovereign_agents')}
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>🤖 Normal-People Problem (Plate #59)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('super_intelligence_sovereignty')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-purple-900 border-purple-300' : 'bg-stone-800 hover:bg-stone-700 text-purple-300 border-purple-500/40'
              }`}
            >
              <span>👑 Super Intelligence Sovereignty (Plate #57)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('cleveland_hypocrisy')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-rose-900 border-rose-300' : 'bg-stone-800 hover:bg-stone-700 text-rose-300 border-rose-500/40'
              }`}
            >
              <span>⚖️ Cleveland Lead Hypocrisy (Plate #61)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('ai_and_kehoe_rule')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-amber-900 border-amber-300' : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-amber-500/40'
              }`}
            >
              <span>⚖️ AI & The Kehoe Rule (Plate #41)</span>
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
                  Plate #62 Master Forensic
                </span>
                <span className="text-xs font-mono text-stone-300 hidden sm:inline">
                  Why AI is the New Pb (Lead): Inside OpenAI's Broken Culture & The Atlantic Confession
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
                src={openAIBrokenPlateImg}
                alt="Plate 62 Full Resolution"
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
                  href={openAIBrokenPlateImg}
                  download="Plate62_OpenAI_Broken_Culture_AI_as_New_Pb_ICEarth.jpg"
                  className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Plate #62</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
