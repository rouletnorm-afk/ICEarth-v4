import React, { useState } from 'react';
import trumpAiSummitOfficialImg from '../assets/images/trump_ai_summit_nypost_official_800.jpg';
import {
  Shield,
  DollarSign,
  Users,
  Cpu,
  Building,
  Check,
  Copy,
  ExternalLink,
  Maximize2,
  Sliders,
  ArrowRight,
  Landmark,
  Crown,
  CircleDollarSign
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';

interface TrumpAISummitRichestTableProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const TrumpAISummitRichestTable: React.FC<TrumpAISummitRichestTableProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'summit_overview' | 'ceo_roster_ledger' | 'cognitive_commons' | 'dividend_simulator' | 'provenance'
  >('summit_overview');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xTRUMP_1_8_TRILLION_AI_SUMMIT_RICHEST_TABLE_SOVEREIGN_DIVIDEND_VAULT_2026';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  // Sovereign Dividend Simulator interactive state
  const [globalAiMarketCapTrillions, setGlobalAiMarketCapTrillions] = useState<number>(1.84);
  const [sovereignDataRoyaltyPercent, setSovereignDataRoyaltyPercent] = useState<number>(3.0);
  const [communityPopulationMillions, setCommunityPopulationMillions] = useState<number>(470);
  const [cleanMicrogridSharePercent, setCleanMicrogridSharePercent] = useState<number>(40);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Seating List & Net Worth at the White House Table (Official NY Post Infographic Roster)
  const summitTableAttendees = [
    {
      name: 'Elon Musk',
      company: 'X, Tesla, SpaceX, xAI',
      role: 'CEO & Founder',
      netWorthBillions: 929.9,
      companyCategory: 'Frontier AI, Robotics, Space & Compute Clusters',
      color: '#F59E0B'
    },
    {
      name: 'Jeff Bezos',
      company: 'Amazon / Blue Origin',
      role: 'Founder & Executive Chairman',
      netWorthBillions: 370.2,
      companyCategory: 'AWS Cloud Infrastructure & Frontier Compute',
      color: '#F97316'
    },
    {
      name: 'Mark Zuckerberg',
      company: 'Meta',
      role: 'Founder & CEO',
      netWorthBillions: 249.4,
      companyCategory: 'Llama Open Models & Hyperscale Infrastructure',
      color: '#3B82F6'
    },
    {
      name: 'Jensen Huang',
      company: 'Nvidia',
      role: 'President & CEO',
      netWorthBillions: 199.4,
      companyCategory: 'GPU Hardware, CUDA Architecture & AI Silicon',
      color: '#10B981'
    },
    {
      name: 'Greg Brockman',
      company: 'OpenAI',
      role: 'President & Co-Founder',
      netWorthBillions: 25.5,
      companyCategory: 'ChatGPT, o1/o3 Frontier Reasoning Models',
      color: '#06B6D4'
    },
    {
      name: 'Alex Karp',
      company: 'Palantir',
      role: 'CEO & Co-Founder',
      netWorthBillions: 20.2,
      companyCategory: 'Enterprise AI Operations & Defense Intelligence',
      color: '#6366F1'
    },
    {
      name: 'Dario Amodei',
      company: 'Anthropic',
      role: 'CEO & Co-Founder',
      netWorthBillions: 15.5,
      companyCategory: 'Claude Frontier Models & AI Alignment',
      color: '#EC4899'
    },
    {
      name: 'Tom Brown',
      company: 'Anthropic',
      role: 'Co-Founder',
      netWorthBillions: 15.5,
      companyCategory: 'Frontier Language Model Architecture',
      color: '#D946EF'
    },
    {
      name: 'Lisa Su',
      company: 'AMD',
      role: 'Chair & CEO',
      netWorthBillions: 3.3,
      companyCategory: 'MI300 AI Accelerators & High-Performance Silicon',
      color: '#8B5CF6'
    },
    {
      name: 'Nikesh Arora',
      company: 'Palo Alto Networks',
      role: 'CEO & Chairman',
      netWorthBillions: 1.8,
      companyCategory: 'Enterprise AI Cybersecurity & Cloud Defense',
      color: '#14B8A6'
    },
    {
      name: 'Sundar Pichai',
      company: 'Google / Alphabet',
      role: 'CEO',
      netWorthBillions: 1.6,
      companyCategory: 'Gemini Models, TPU Hardware & Search Index',
      color: '#EAB308'
    },
    {
      name: 'Satya Nadella',
      company: 'Microsoft',
      role: 'Chairman & CEO',
      netWorthBillions: 1.4,
      companyCategory: 'Azure Cloud, Copilot & OpenAI Infrastructure',
      color: '#0284C7'
    },
    {
      name: 'Sanjay Mehrotra',
      company: 'Micron',
      role: 'President & CEO',
      netWorthBillions: 1.4,
      companyCategory: 'High-Bandwidth Memory (HBM) for AI Accelerators',
      color: '#84CC16'
    }
  ];

  // Government & Summit Hosts
  const summitHosts = [
    {
      name: 'Donald J. Trump',
      title: 'President of the United States',
      role: 'Summit Host & Convener',
      quote: '"These big, powerful, very rich, very smart companies are going to be making massive contributions to communities. It\'s going to be so good for the people."'
    },
    {
      name: 'JD Vance',
      title: 'Vice President of the United States',
      role: 'Administration Leadership',
      quote: '"We want domestic American dominance in AI compute and energy production."'
    },
    {
      name: 'Mike Johnson',
      title: 'Speaker of the House of Representatives',
      role: 'Congressional Leadership',
      quote: '"Congress will ensure America stays ahead without burdensome federal mandates."'
    }
  ];

  // Chart data: Net worth comparison of CEOs
  const ceoWealthChartData = summitTableAttendees.map((att) => ({
    name: att.name.split(' ')[1] || att.name,
    fullName: att.name,
    company: att.company,
    netWorth: att.netWorthBillions,
    color: att.color
  }));

  // Calculations for Simulator
  const totalRoyaltyBillions = (globalAiMarketCapTrillions * 1000) * (sovereignDataRoyaltyPercent / 100);
  const cleanMicrogridBillions = totalRoyaltyBillions * (cleanMicrogridSharePercent / 100);
  const directCommunityDividendsBillions = totalRoyaltyBillions - cleanMicrogridBillions;
  const annualDividendPerPerson = Math.round((directCommunityDividendsBillions * 1000000000) / (communityPopulationMillions * 1000000));

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-300 font-sans`}>
      {/* 1. TOP HEADER & METADATA HERO BANNER */}
      <section className={`border-b ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/90 border-stone-800'} px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-stone-950 font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Crown size={14} className="text-stone-950" />
                <span>Plate #60 • Sovereign Wealth & AI Restitution</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-bold flex items-center gap-1 ${
                isLight ? 'bg-stone-100 border-stone-300 text-amber-950' : 'bg-stone-800 border-stone-700 text-amber-300'
              }`}>
                <Landmark size={13} className={isLight ? 'text-amber-700' : 'text-amber-400'} />
                <span>The Richest Table Ever Assembled ($1.84 Trillion)</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] font-semibold ${
                isLight ? 'bg-stone-100 border-stone-300 text-stone-800' : 'bg-stone-800 border-stone-700 text-stone-300'
              }`}>
                White House Summit • Sep. 30, 2026 • NY Post Official Photo
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
                <span>{copiedHash ? 'Vault Hash Copied' : '0xPLATE_60_VAULT'}</span>
              </button>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white font-bold text-xs font-mono rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
              >
                <Maximize2 size={14} />
                <span>View Full Photo</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              Trump’s $1.8 Trillion AI Summit: The Richest Table Ever Assembled
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              WASHINGTON — President Donald Trump convened the richest executive table in history, assembling 13 technology leaders with a combined net worth of over $1.84 Trillion. The core question for humanity and Indigenous communities: <strong>Whose knowledge and intelligence built the models powering these trillions, and how should that value be shared?</strong>
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Total Exec Net Worth</span>
                <DollarSign size={14} className={isLight ? 'text-amber-700' : 'text-amber-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>$1.84 Trillion</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>13 CEOs pictured in the official NY Post photo</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Top Net Worth Leader</span>
                <Crown size={14} className={isLight ? 'text-purple-700' : 'text-purple-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>Elon Musk (~$929.9B)</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Tesla, SpaceX, xAI, X</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Training Data Origin</span>
                <Users size={14} className={isLight ? 'text-cyan-700' : 'text-cyan-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>All Humanity</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Languages, literature, science & Indigenous cultural heritage</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Proposed Sovereign Dividend</span>
                <Shield size={14} className={isLight ? 'text-emerald-700' : 'text-emerald-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>3.0% Royalty ($55B/yr)</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Direct community dividend & clean microgrid trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-NAVIGATION TABS */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} sticky top-0 z-30 shadow-xs`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-2 text-xs font-mono scrollbar-none">
            <button
              onClick={() => setActiveSubTab('summit_overview')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'summit_overview'
                  ? 'bg-amber-600 text-stone-950 shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Landmark size={15} />
              <span>1. Summit Overview & Photo</span>
            </button>

            <button
              onClick={() => setActiveSubTab('ceo_roster_ledger')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'ceo_roster_ledger'
                  ? 'bg-purple-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Users size={15} />
              <span>2. 13 CEOs & Net Worth Ledger ($1.84T)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('cognitive_commons')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'cognitive_commons'
                  ? 'bg-rose-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Cpu size={15} />
              <span>3. The Cognitive Commons & Roulet’s Law</span>
            </button>

            <button
              onClick={() => setActiveSubTab('dividend_simulator')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'dividend_simulator'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Sliders size={15} />
              <span>4. Sovereign Dividend Calculator</span>
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
              <span>5. Official Photo & Provenance Archive</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* SUB-TAB 1: SUMMIT OVERVIEW & PHOTO */}
        {activeSubTab === 'summit_overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 border ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    <Crown size={14} />
                    <span>WHITE HOUSE WEST WING SUMMIT</span>
                  </span>
                  <span className={`text-xs font-mono font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Reported by Ryan King (New York Post) • Published Sep. 30, 2026
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://nypost.com/2026/09/30/us-news/trumps-1-8-trillion-ai-summit-table-all-the-execs-and-what-theyre-worth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                      isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
                    }`}
                  >
                    <span>NY Post Article Source</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-amber-400'}`}>
                    "It’s the Richest Table Ever Assembled"
                  </h2>
                  <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                    On September 30, 2026, President Donald Trump gathered the world's most prominent technology executives at the White House. The participants represent over <strong>$1.84 Trillion in personal wealth</strong>, leading corporations that power global artificial intelligence hardware, software, and cloud infrastructure.
                  </p>
                  <blockquote className={`p-4 rounded-xl border-l-4 border-amber-500 text-sm font-serif italic ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'
                  }`}>
                    "I just have to do what’s right... All I can tell you is that these big, powerful, very rich, very smart companies are going to be making massive contributions to communities. It’s going to be so good for the people."
                    <footer className="text-xs font-mono font-bold mt-2 text-amber-700 dark:text-amber-400 not-italic">
                      — President Donald J. Trump
                    </footer>
                  </blockquote>
                  <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                    As President Trump highlighted, these companies must make massive contributions to communities. Indigenous Communities and everyday creators whose collective language, culture, discoveries, and digital records were used to train frontier models should participate directly in the economic gains generated by AI.
                  </p>
                  <div className={`p-4 rounded-2xl border text-xs font-mono space-y-1.5 ${
                    isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5">
                      <Shield size={14} className={isLight ? 'text-emerald-700' : 'text-emerald-400'} />
                      <span>THE SOVEREIGN IT PERSPECTIVE:</span>
                    </div>
                    <p className="leading-relaxed">
                      Indigenous Communities and individuals who are the sources of human intelligence should share in these trillions in value through non-custodial data trusts, computational royalties, and community-owned clean energy microgrids.
                    </p>
                  </div>
                </div>

                {/* Right: Official Photo Preview */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative group rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-2xl cursor-pointer bg-black"
                  >
                    <img
                      src={trumpAiSummitOfficialImg}
                      alt="NY Post Official Photo: Trump’s $1.8 Trillion AI Summit Table"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-300">
                        <span>OFFICIAL NY POST PHOTOGRAPH</span>
                        <span className="flex items-center gap-1 text-white">
                          <Maximize2 size={13} /> Click to Expand
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-200 font-mono mt-1">
                        All 13 CEOs labeled with exact net worth and company affiliations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wealth Distribution Chart */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    Personal Net Worth Breakdown
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-serif font-bold ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Net Worth of the 13 Tech Leaders at the Table ($ Billions)
                  </h3>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                  isLight ? 'bg-stone-100 text-stone-900 border-stone-300' : 'bg-stone-800 text-stone-300 border-stone-700'
                }`}>
                  Source: NY Post / Bloomberg
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ceoWealthChartData} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e7e5e4' : '#292524'} />
                    <XAxis
                      dataKey="name"
                      stroke={isLight ? '#44403c' : '#a8a29e'}
                      interval={0}
                      angle={-30}
                      textAnchor="end"
                      tick={{ fontSize: 11, fill: isLight ? '#1c1917' : '#e4e4e7' }}
                    />
                    <YAxis
                      stroke={isLight ? '#44403c' : '#78716c'}
                      tickFormatter={(v) => `$${v}B`}
                      tick={{ fontSize: 11, fill: isLight ? '#1c1917' : '#e4e4e7' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isLight ? '#ffffff' : '#0c0a09',
                        borderColor: isLight ? '#d6d3d1' : '#44403c',
                        borderRadius: '0.75rem',
                        fontSize: '12px',
                        color: isLight ? '#0c0a09' : '#f5f5f4'
                      }}
                      formatter={(val: any, _name: any, item: any) => [
                        `$${val} Billion (${item.payload.company})`,
                        item.payload.fullName
                      ]}
                    />
                    <Bar dataKey="netWorth" radius={[6, 6, 0, 0]}>
                      {ceoWealthChartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: 13 CEOS & NET WORTH LEDGER */}
        {activeSubTab === 'ceo_roster_ledger' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    Complete Official Roster
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    All 13 Tech Leaders and Their Net Worth
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Exact figures and company affiliations as annotated in the official photograph.
                  </p>
                </div>
                <div className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold border ${
                  isLight ? 'bg-purple-100 text-purple-950 border-purple-300' : 'bg-purple-950/40 text-purple-300 border-purple-700'
                }`}>
                  Combined Net Worth: ~$1,835.6 Billion ($1.84T)
                </div>
              </div>

              {/* Grid of all 13 CEOs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {summitTableAttendees.map((att, idx) => (
                  <div
                    key={idx}
                    className={`p-5 rounded-2xl border space-y-3 transition-all hover:scale-[1.01] ${
                      isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>{att.name}</h4>
                        <span className="text-xs font-mono font-bold block" style={{ color: att.color }}>
                          {att.role}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 text-xs font-mono rounded font-bold ${
                        isLight ? 'bg-stone-200 text-stone-900 border border-stone-300' : 'bg-stone-900 text-amber-300 border border-stone-800'
                      }`}>
                        ~${att.netWorthBillions}B
                      </span>
                    </div>

                    <div className={`space-y-1 text-xs font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                      <div>
                        <span className={isLight ? 'text-stone-600' : 'text-stone-500'}>Company: </span>
                        <span className="font-bold">{att.company}</span>
                      </div>
                      <div>
                        <span className={isLight ? 'text-stone-600' : 'text-stone-500'}>Focus: </span>
                        <span>{att.companyCategory}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Government Hosts */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 space-y-4">
                <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Government Leadership at the Table
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {summitHosts.map((host, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border space-y-2 ${
                        isLight ? 'bg-stone-100/70 border-stone-300' : 'bg-stone-900/60 border-stone-800'
                      }`}
                    >
                      <h4 className={`font-serif font-bold text-sm ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>{host.name}</h4>
                      <p className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>{host.title}</p>
                      <p className={`text-xs italic font-serif ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>{host.quote}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: THE COGNITIVE COMMONS & ROULET'S LAW */}
        {activeSubTab === 'cognitive_commons' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                    Sovereign Economics Analysis
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    The Source of AI Intelligence: Humanity's Collective Commons
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white bg-blue-600`}>1</div>
                  <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>The Collective Corpus</h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    Foundation models do not generate intelligence out of thin air. Every parameter, embedding, and token is trained on billions of texts, articles, code, art, oral traditions, and scientific research created by human beings across centuries.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white bg-amber-600`}>2</div>
                  <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>Roulet’s Law of Extraction</h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    Under Roulet's Law, centralized corporate systems extract value from the shared commons while externalizing the costs—energy drain, water depletion, and community displacement. AI models represent the latest extraction of humanity's cognitive commons.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white bg-emerald-600`}>3</div>
                  <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>The Sovereign Restitution Solution</h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    Rather than relying on philanthropic promises, sovereign communities must hold computational equity: a perpetual data dividend, zero-water decentralized microgrid nodes, and immutable cryptographic ownership of their own knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: SOVEREIGN DIVIDEND CALCULATOR */}
        {activeSubTab === 'dividend_simulator' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    Interactive Sovereign Economic Model
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Sovereign Cognitive Dividend Calculator
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Model how sharing a fraction of AI enterprise revenue directly benefits Indigenous and local communities.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Controls */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold">Total AI Industry Valuation:</span>
                      <span className="text-amber-600 font-bold">${globalAiMarketCapTrillions.toFixed(2)} Trillion</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={5.0}
                      step={0.1}
                      value={globalAiMarketCapTrillions}
                      onChange={(e) => setGlobalAiMarketCapTrillions(parseFloat(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>$0.5T</span>
                      <span>Current: $1.84T</span>
                      <span>$5.0T</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold">Sovereign Data Royalty Rate:</span>
                      <span className="text-emerald-600 font-bold">{sovereignDataRoyaltyPercent.toFixed(1)}%</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={6.0}
                      step={0.1}
                      value={sovereignDataRoyaltyPercent}
                      onChange={(e) => setSovereignDataRoyaltyPercent(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>0.5% (Baseline)</span>
                      <span>3.0% (Recommended)</span>
                      <span>6.0% (Full Restitution)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="font-bold">Clean Microgrid & Infrastructure Share:</span>
                      <span className="text-cyan-600 font-bold">{cleanMicrogridSharePercent}%</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={70}
                      step={5}
                      value={cleanMicrogridSharePercent}
                      onChange={(e) => setCleanMicrogridSharePercent(parseInt(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>10% (Mostly Direct Cash)</span>
                      <span>40% (Balanced)</span>
                      <span>70% (Microgrid Heavy)</span>
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-6 space-y-4">
                  <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-emerald-50/50 border-emerald-300' : 'bg-emerald-950/20 border-emerald-700/60'}`}>
                    <h3 className={`font-serif font-bold text-lg flex items-center gap-2 ${isLight ? 'text-emerald-950' : 'text-emerald-300'}`}>
                      <CircleDollarSign size={20} className={isLight ? 'text-emerald-700' : 'text-emerald-400'} />
                      <span>Annual Sovereign Dividend Distribution</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <span className={`text-xs font-mono ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Total Annual Dividend</span>
                        <div className={`text-2xl font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                          ${totalRoyaltyBillions.toFixed(1)} Billion
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className={`text-xs font-mono ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Clean Microgrid Fund</span>
                        <div className={`text-2xl font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                          ${cleanMicrogridBillions.toFixed(1)} Billion
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className={`text-xs font-mono ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Direct Community Trust</span>
                        <div className={`text-2xl font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                          ${directCommunityDividendsBillions.toFixed(1)} Billion
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className={`text-xs font-mono ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Per-Capita Annual Share</span>
                        <div className={`text-2xl font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                          ${annualDividendPerPerson}/yr
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: OFFICIAL PHOTO & PROVENANCE ARCHIVE */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                    Plate #60 Archival Record
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Official NY Post Photograph & Cryptographic Provenance
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlateModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white font-bold text-xs font-mono rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Maximize2 size={15} />
                    <span>Expand Full Screen</span>
                  </button>
                </div>
              </div>

              {/* Master Artwork Presentation */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-black">
                <img
                  src={trumpAiSummitOfficialImg}
                  alt="Plate 60: Trump’s $1.8 Trillion AI Summit Table Official Photograph"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Provenance Metadata Table */}
              <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-950 border-stone-800'}`}>
                <h4 className={`font-serif font-bold text-base flex items-center gap-2 ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                  <Shield size={16} />
                  <span>Vault Authentication & Cryptographic Fingerprint</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-2">
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Asset Identifier:</span>
                      <span className={`font-bold ${isLight ? 'text-stone-950' : 'text-white'}`}>PHOTO-000BT / IP-000BT / Plate #60</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Permanent SHA-256 Vault Hash:</span>
                      <span className={`break-all font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{vaultHash}</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Source:</span>
                      <span className={isLight ? 'text-stone-900' : 'text-stone-200'}>New York Post (Ryan King, White House Press Pool)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Summit Date:</span>
                      <span className={isLight ? 'text-stone-900' : 'text-stone-200'}>September 30, 2026</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Sovereign Jurisprudence:</span>
                      <span className={isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400'}>Indigenous Communities Earth & Roulet's Law</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Cryptographic Integrity:</span>
                      <span className={`font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>Immutable SHA-256 Registered</span>
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
              <Shield size={16} className={isLight ? 'text-amber-700' : 'text-amber-400'} />
              <span>Related Sovereign IT Engines</span>
            </h4>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onNavigateTab?.('sovereign_agents')}
              className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-stone-950 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>🤖 Plate #59: AI Agents Normal-People Problem</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('super_intelligence_sovereignty')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-amber-900 border-amber-300' : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-amber-500/40'
              }`}
            >
              <span>👑 Plate #57: Sovereignty of Super Intelligence</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('datacenter_incentives')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-purple-900 border-purple-300' : 'bg-stone-800 hover:bg-stone-700 text-purple-300 border-purple-500/40'
              }`}
            >
              <span>🏛️ Plate #56: Data Center Incentives ($10k Checks)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('swiss_data_sovereignty')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-cyan-900 border-cyan-300' : 'bg-stone-800 hover:bg-stone-700 text-cyan-300 border-cyan-500/40'
              }`}
            >
              <span>🇨🇭 Plate #55: Swiss Data Sovereignty</span>
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
                <span className="px-3 py-1 bg-amber-500 text-stone-950 font-mono text-xs font-bold rounded-lg uppercase">
                  Plate #60 Official Photo
                </span>
                <span className="text-xs font-mono text-stone-300 hidden sm:inline">
                  Trump’s $1.8 Trillion AI Summit: 13 CEOs & Net Worth Callouts
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
                src={trumpAiSummitOfficialImg}
                alt="Trump AI Summit $1.8 Trillion Table Official Photo"
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
                  href={trumpAiSummitOfficialImg}
                  download="Trump_1.8T_AI_Summit_Table_NYPost_Plate60.jpg"
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Photo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
