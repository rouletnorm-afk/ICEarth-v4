import React, { useState } from 'react';
import trumpAiSummitPlateImg from '../assets/images/trump_ai_summit_richest_table_plate60_1790839148889.jpg';
import {
  Shield,
  DollarSign,
  Users,
  Lock,
  Cpu,
  TrendingUp,
  AlertTriangle,
  Scale,
  Building,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  Maximize2,
  FileText,
  Sliders,
  Sparkles,
  ArrowRight,
  PieChart,
  Landmark,
  Coins,
  Crown,
  Share2,
  Award,
  CircleDollarSign,
  Factory
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
  PieChart as RechartsPieChart,
  Pie,
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
    'richest_table_forensic' | 'seating_and_net_worth' | 'data_extraction_paradox' | 'sovereign_dividend_simulator' | 'plate_provenance'
  >('richest_table_forensic');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0x60A1F78D32E549B89C230491EF3978BD728A37549C012F4902B7854EFB60718A';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);
  const [showPlateAnnotations, setShowPlateAnnotations] = useState(true);

  // Sovereign Dividend Simulator interactive state
  const [globalAiMarketCapTrillions, setGlobalAiMarketCapTrillions] = useState<number>(1.8);
  const [sovereignDataRoyaltyPercent, setSovereignDataRoyaltyPercent] = useState<number>(3.5);
  const [communityPopulationMillions, setCommunityPopulationMillions] = useState<number>(470); // Global Indigenous & Local Population
  const [watershedRemediationSharePercent, setWatershedRemediationSharePercent] = useState<number>(30);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Seating List & Net Worth at the White House Table (Sep. 30, 2026)
  const summitTableAttendees = [
    {
      name: 'Elon Musk',
      role: 'CEO & Founder, xAI, Tesla, SpaceX',
      netWorthBillions: 485,
      marketCapTrillions: 1.15,
      seatingPosition: 'Right of President Trump',
      companyValuation: '$50B (xAI) / $850B (Tesla)',
      quote: '"We are building digital superintelligence at an exponential trajectory."',
      color: '#F59E0B'
    },
    {
      name: 'Jensen Huang',
      role: 'President & CEO, NVIDIA',
      netWorthBillions: 135,
      marketCapTrillions: 3.42,
      seatingPosition: 'Immediate Right Flank',
      companyValuation: '$3.42T (NVIDIA)',
      quote: '"The next industrial revolution has begun—every nation needs sovereign AI factories."',
      color: '#10B981'
    },
    {
      name: 'Donald J. Trump',
      role: '45th & 47th President of the United States',
      netWorthBillions: 6.5,
      marketCapTrillions: 0.0,
      seatingPosition: 'Head of Table (Center)',
      companyValuation: 'Executive Power',
      quote: '"These big, powerful, very rich, very smart companies are going to be making massive contributions to communities. It\'s going to be so good for the people."',
      color: '#EF4444'
    },
    {
      name: 'JD Vance',
      role: 'Vice President of the United States',
      netWorthBillions: 0.015,
      marketCapTrillions: 0.0,
      seatingPosition: 'Across from President Trump',
      companyValuation: 'Executive Branch',
      quote: '"We want domestic American dominance in AI compute and energy production."',
      color: '#8B5CF6'
    },
    {
      name: 'Mike Johnson',
      role: 'Speaker of the US House of Representatives',
      netWorthBillions: 0.005,
      marketCapTrillions: 0.0,
      seatingPosition: 'Across Table from Trump',
      companyValuation: 'Legislative Branch',
      quote: '"Congress will ensure America stays ahead without burdensome federal mandates."',
      color: '#6366F1'
    },
    {
      name: 'Greg Brockman',
      role: 'President & Co-Founder, OpenAI',
      netWorthBillions: 1.8,
      marketCapTrillions: 0.157,
      seatingPosition: 'Opposite Amodei',
      companyValuation: '$157B (OpenAI)',
      quote: '"AGI requires tens of gigawatts and unprecedented capital cooperation."',
      color: '#06B6D4'
    },
    {
      name: 'Dario Amodei',
      role: 'CEO & Co-Founder, Anthropic',
      netWorthBillions: 1.2,
      marketCapTrillions: 0.045,
      seatingPosition: 'Right End of Table',
      companyValuation: '$45B (Anthropic)',
      quote: '"Models in 2027 could exceed human experts across all disciplines."',
      color: '#EC4899'
    }
  ];

  // Market Cap vs Sovereign Distribution Breakdown Data
  const wealthDistributionComparison = [
    { sector: '6 Summit Tech Giants Market Cap', value: 5200, fill: '#8B5CF6' },
    { sector: 'Summit Execs Combined Net Worth', value: 1800, fill: '#F59E0B' },
    { sector: 'Total Global Indigenous Revenue Share from AI Training', value: 0.001, fill: '#EF4444' },
    { sector: 'ICEarth Proposed Annual Sovereign Equity Fund (3.5%)', value: 63, fill: '#10B981' }
  ];

  // Calculations for Simulator
  const totalRoyaltyBillions = (globalAiMarketCapTrillions * 1000) * (sovereignDataRoyaltyPercent / 100);
  const watershedRemediationBillions = totalRoyaltyBillions * (watershedRemediationSharePercent / 100);
  const directCommunityDividendBillions = totalRoyaltyBillions - watershedRemediationBillions;
  const annualDividendPerCapitaDollars = Math.round((directCommunityDividendBillions * 1e9) / (communityPopulationMillions * 1e6));

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-300 font-sans`}>
      {/* 1. TOP HEADER & METADATA HERO BANNER */}
      <section className={`border-b ${isLight ? 'bg-gradient-to-r from-amber-900/10 via-stone-100 to-emerald-900/10 border-stone-200' : 'bg-gradient-to-r from-amber-950/40 via-stone-900 to-purple-950/30 border-stone-800'} px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden`}>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-yellow-600 text-stone-950 font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Crown size={14} className="text-stone-950" />
                <span>Plate #60 • Sovereign Wealth & AI Justice</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-bold flex items-center gap-1 ${
                isLight ? 'bg-stone-200 border-stone-300 text-amber-950' : 'bg-stone-800 border-stone-700 text-amber-300'
              }`}>
                <Landmark size={13} className={isLight ? 'text-amber-700' : 'text-amber-400'} />
                <span>The Richest Table in Human History ($1.8 Trillion)</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] font-semibold ${
                isLight ? 'bg-stone-200 border-stone-300 text-stone-800' : 'bg-stone-800 border-stone-700 text-stone-300'
              }`}>
                White House Summit • NY Post Forensic • Sep. 30, 2026
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer font-bold ${
                  isLight ? 'bg-stone-200 hover:bg-stone-300 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
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
                <span>View Forensic Master Plate #60</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              Trump’s $1.8 Trillion AI Summit Table: Whose Intelligence Built the Richest Table in History?
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              WASHINGTON — As Donald Trump assembled Elon Musk, Jensen Huang, Greg Brockman, and Dario Amodei for the richest meeting in world history, the core sovereign truth emerges: <strong>Indigenous Communities and individuals who authored human intelligence must share in these trillions in generated value.</strong>
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Table Wealth</span>
                <DollarSign size={14} className={isLight ? 'text-amber-700' : 'text-amber-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>$1.8 Trillion</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Combined personal net worth of seated executives</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Market Cap Represented</span>
                <Building size={14} className={isLight ? 'text-purple-700' : 'text-purple-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>$5.2 Trillion</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>NVIDIA, Tesla/xAI, OpenAI, Anthropic aggregate value</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Origin Data Source</span>
                <Users size={14} className={isLight ? 'text-cyan-700' : 'text-cyan-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>All Humanity</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Centuries of collective language, culture, art & science</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Indigenous Share Today</span>
                <AlertTriangle size={14} className="text-red-500 animate-pulse" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-red-700' : 'text-red-400'}`}>$0.00 (0.0%)</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Uncompensated extraction of cultural & linguistic corpora</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>ICEarth Proposed Dividend</span>
                <Coins size={14} className={isLight ? 'text-emerald-700' : 'text-emerald-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>3.5% Royalty</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>$63 Billion annual sovereign perpetual trust fund</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900/90 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Infrastructure Drain</span>
                <Factory size={14} className={isLight ? 'text-rose-700' : 'text-rose-400'} />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>Aquifers & Grid</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Billions of gallons extracted from local water tables</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-TAB NAVIGATION */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900/80 border-stone-800'} sticky top-0 z-20 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-4 overflow-x-auto py-3 no-scrollbar text-xs font-mono font-bold">
            <button
              onClick={() => setActiveSubTab('richest_table_forensic')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'richest_table_forensic'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Landmark size={15} />
              <span>1. The White House Summit Table Forensic</span>
            </button>

            <button
              onClick={() => setActiveSubTab('seating_and_net_worth')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'seating_and_net_worth'
                  ? 'bg-purple-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Users size={15} />
              <span>2. Executive Seating Chart & Wealth Ledger</span>
            </button>

            <button
              onClick={() => setActiveSubTab('data_extraction_paradox')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'data_extraction_paradox'
                  ? 'bg-rose-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Cpu size={15} />
              <span>3. Whose Intelligence Built the Model?</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sovereign_dividend_simulator')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'sovereign_dividend_simulator'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Sliders size={15} />
              <span>4. Interactive Sovereign Equity & Dividend Simulator</span>
            </button>

            <button
              onClick={() => setActiveSubTab('plate_provenance')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'plate_provenance'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-200'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Maximize2 size={15} />
              <span>5. Master Plate #60 & Cryptographic Provenance</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* SUB-TAB 1: THE RICHEST TABLE IN HISTORY */}
        {activeSubTab === 'richest_table_forensic' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 border ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  }`}>
                    <Crown size={14} />
                    <span>WHITE HOUSE WEST WING INVESTIGATION</span>
                  </span>
                  <span className={`text-xs font-mono font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Reported by Ryan King (NY Post) • Published Sep. 30, 2026
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
                    On September 30, 2026, President Donald Trump convened the most concentrated accumulation of private capital ever seated in a single room. Seated around the White House Roosevelt Table were tech titans commanding over <strong>$1.8 Trillion in personal net worth</strong> and presiding over companies valued at over <strong>$5.2 Trillion</strong>.
                  </p>
                  <blockquote className={`p-4 rounded-xl border-l-4 border-amber-500 text-sm font-serif italic ${
                    isLight ? 'bg-amber-50/70 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'
                  }`}>
                    "I just have to do what’s right... All I can tell you is that these big, powerful, very rich, very smart companies are going to be making massive contributions to communities. It’s going to be so good for the people."
                    <footer className="text-xs font-mono font-bold mt-2 text-amber-600 dark:text-amber-400 not-italic">
                      — President Donald J. Trump to Reporters
                    </footer>
                  </blockquote>
                  <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                    Yet beneath the celebratory rhetoric of "massive contributions," an unaddressed moral and economic question looms: <strong>Where did the foundational intelligence inside these models come from?</strong> The LLMs, neural networks, and generative transformers represented at this table were trained by scraping billions of words, centuries of Indigenous linguistic heritage, folklore, mathematical treaties, medical discoveries, and cultural art—without consent, attribution, or compensation.
                  </p>
                  <div className={`p-4 rounded-2xl border text-xs font-mono space-y-1.5 ${
                    isLight ? 'bg-emerald-50 border-emerald-300 text-emerald-950' : 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
                  }`}>
                    <div className="font-bold flex items-center gap-1.5">
                      <Sparkles size={14} className={isLight ? 'text-emerald-700' : 'text-emerald-400'} />
                      <span>THE SOVEREIGN ICEARTH THESIS:</span>
                    </div>
                    <p className="leading-relaxed">
                      "True economic justice requires that Indigenous Communities and individuals who authored human knowledge are not treated as passive extractive colonies for Silicon Valley hyperscalers. They must hold perpetual equity shares, non-custodial cryptographic keys, and direct dividend rights in the multi-trillion dollar AI economy."
                    </p>
                  </div>
                </div>

                {/* Right: Graphic Card Preview */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative group rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-2xl cursor-pointer bg-black"
                  >
                    <img
                      src={trumpAiSummitPlateImg}
                      alt="Plate 60: Trump’s $1.8 Trillion AI Summit Table"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-amber-300">
                        <span>PLATE #60 MASTER FORENSIC ARCHIVE</span>
                        <span className="flex items-center gap-1 text-white">
                          <Maximize2 size={13} /> Expand
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-mono mt-1">
                        White House Summit: Executive Seating, $1.8T Net Worth Ledger & Sovereign Dividend Model
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wealth Concentration Comparison Chart */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    Macroeconomic Wealth Disparity Analysis
                  </span>
                  <h3 className={`text-xl sm:text-2xl font-serif font-bold ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    The Trillion-Dollar Disparity: Summit Execs vs. Human Data Contributors
                  </h3>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Visualizing the disparity between corporate valuation and community returns (Billions USD).
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                  isLight ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                }`}>
                  Data: Bloomberg Billionaires & SEC Filings
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={wealthDistributionComparison} margin={{ top: 20, right: 30, left: 10, bottom: 25 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e7e5e4' : '#292524'} />
                      <XAxis dataKey="sector" stroke={isLight ? '#44403c' : '#a8a29e'} tick={{ fontSize: 10, fill: isLight ? '#1c1917' : '#e4e4e7' }} />
                      <YAxis stroke={isLight ? '#44403c' : '#78716c'} tickFormatter={(v) => `$${v}B`} tick={{ fontSize: 11, fill: isLight ? '#1c1917' : '#e4e4e7' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#ffffff' : '#0c0a09',
                          borderColor: isLight ? '#d6d3d1' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px',
                          color: isLight ? '#0c0a09' : '#f5f5f4'
                        }}
                        formatter={(val: any) => [`$${val} Billion`, 'Valuation']}
                      />
                      <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                        {wealthDistributionComparison.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="lg:col-span-4 space-y-3">
                  <div className={`p-4 rounded-2xl border space-y-2 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                    <h4 className={`font-serif font-bold text-sm flex items-center gap-1.5 ${isLight ? 'text-amber-900' : 'text-amber-400'}`}>
                      <CircleDollarSign size={15} />
                      <span>The Extractive Imbalance</span>
                    </h4>
                    <p className={`text-xs leading-relaxed font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                      While 6 corporations captured over <strong>$5.2 Trillion in market capitalization</strong> using human knowledge, the individuals and communities whose languages, recipes, folk histories, and code were scraped have received <strong>zero royalties</strong>.
                    </p>
                    <div className={`text-[11px] pt-2 border-t font-semibold ${
                      isLight ? 'text-emerald-900 border-stone-300' : 'text-emerald-400 border-stone-800'
                    }`}>
                      A 3.5% Sovereign Data Royalty would deliver $63B annually to Indigenous and local community infrastructure funds.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: SEATING CHART AND NET WORTH LEDGER */}
        {activeSubTab === 'seating_and_net_worth' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    Forensic Seating Protocol • White House Roosevelt Room
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    The $1.8 Trillion Seating Ledger: Execs Who Answered the Call
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Detailed breakdown of personal net worth, corporate capitalization, and quoted positions.
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border ${
                  isLight ? 'bg-purple-100 text-purple-900 border-purple-300' : 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                }`}>
                  Sep. 30, 2026 Summit
                </span>
              </div>

              {/* Seating Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      <span className={`px-2 py-0.5 text-[10px] font-mono rounded border font-bold ${
                        isLight ? 'bg-stone-200 text-stone-800 border-stone-300' : 'bg-stone-900 text-stone-400 border-stone-800'
                      }`}>
                        {att.seatingPosition}
                      </span>
                    </div>

                    <div className={`space-y-1.5 text-xs font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                      <div className="flex justify-between items-center">
                        <span className={isLight ? 'text-stone-600' : 'text-stone-500'}>Personal Net Worth:</span>
                        <span className={`font-bold text-sm ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                          {att.netWorthBillions > 0 ? `$${att.netWorthBillions} Billion` : 'N/A (Public Official)'}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={isLight ? 'text-stone-600' : 'text-stone-500'}>Corporate Capitalization:</span>
                        <span className="font-bold">{att.companyValuation}</span>
                      </div>
                    </div>

                    <div className={`p-3 rounded-xl border text-[11px] font-mono italic leading-relaxed ${
                      isLight ? 'bg-white border-stone-300 text-stone-900 shadow-xs' : 'bg-stone-900/80 border-stone-800 text-stone-300'
                    }`}>
                      "{att.quote}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: WHOSE INTELLIGENCE BUILT THE MODEL? */}
        {activeSubTab === 'data_extraction_paradox' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>
                    Epistemological & Sovereign Jurisprudence
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Whose Intelligence Built the Model? The 4 Extraction Pillars
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Deconstructing how frontier AI models privatize the intellectual commons of Indigenous nations and global humanity.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`flex items-center gap-2 font-mono text-xs font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    <Cpu size={16} />
                    <span>PILLAR 1: UNCOMPENSATED LINGUISTIC SCRAPING</span>
                  </div>
                  <h4 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>Indigenous & Public Knowledge Expropriation</h4>
                  <p className={`text-xs leading-relaxed font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    Frontier foundation models crawled millions of open web pages, academic archives, Cherokee, Navajo, Quechua, and Gaelic linguistic preservation databases, and global literary libraries. This collective heritage was transformed into proprietary vector weights sold back to the public at $20/month per seat.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`flex items-center gap-2 font-mono text-xs font-bold ${isLight ? 'text-rose-700' : 'text-rose-400'}`}>
                    <Factory size={16} />
                    <span>PILLAR 2: LOCAL INFRASTRUCTURE & AQUIFER EXTERNALIZATION</span>
                  </div>
                  <h4 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>The Data Center Sacrifice Zones</h4>
                  <p className={`text-xs leading-relaxed font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    As demonstrated in Plate #54 (Cherokee Hyperscale Moratorium) and Plate #56 (Data Center Tax Breaks), hyperscalers demand billions of gallons of drinking water for cooling towers and unpermitted gas turbines, socializing environmental destruction while privatizing billions in profit.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`flex items-center gap-2 font-mono text-xs font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    <Scale size={16} />
                    <span>PILLAR 3: ANTITRUST & REGULATORY CAPTURE</span>
                  </div>
                  <h4 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>The "Morally Binding" Deregulation Accord</h4>
                  <p className={`text-xs leading-relaxed font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    At the White House summit, the administration embraced voluntary "self-policing" without codified federal mandates or enforceable accountability. When six CEOs control the silicon supply chain and frontier weights, sovereign self-governance collapses into corporate feudalism.
                  </p>
                </div>

                <div className={`p-5 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <div className={`flex items-center gap-2 font-mono text-xs font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    <Shield size={16} />
                    <span>PILLAR 4: THE ICEARTH SOVEREIGN ALTERNATIVE</span>
                  </div>
                  <h4 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>Non-Custodial Keys & Community Equity</h4>
                  <p className={`text-xs leading-relaxed font-mono ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    ICEarth Sovereign IT mandates that communities retain non-custodial cryptographic custody of their data assets, deploy waterless closed-loop dielectric computing, and receive direct equity dividends from all commercial model inferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: INTERACTIVE SOVEREIGN EQUITY & DIVIDEND SIMULATOR */}
        {activeSubTab === 'sovereign_dividend_simulator' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-3`}>
                <div>
                  <h3 className={`text-xl font-serif font-bold flex items-center gap-2 ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    <Sliders size={20} className={isLight ? 'text-emerald-700' : 'text-emerald-400'} />
                    <span>Interactive Engine: Sovereign AI Dividend & Community Equity Calculator</span>
                  </h3>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Calculate fair perpetual royalty yields from the $1.8T AI market cap for Indigenous Nations and human data contributors.
                  </p>
                </div>
                <span className={`text-xs font-mono px-3 py-1 border rounded-lg font-bold ${
                  isLight ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                }`}>
                  Model Grounded in ICEarth Sovereign Charter
                </span>
              </div>

              {/* Slider Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>
                    <span>Global AI Enterprise Market Cap</span>
                    <span className={`font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>${globalAiMarketCapTrillions.toFixed(1)} Trillion</span>
                  </label>
                  <input
                    type="range"
                    min="1.0"
                    max="10.0"
                    step="0.2"
                    value={globalAiMarketCapTrillions}
                    onChange={(e) => setGlobalAiMarketCapTrillions(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                  <p className={`text-[10px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-500'}`}>Combined valuation of hyperscalers, chipmakers, and frontier labs.</p>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>
                    <span>Sovereign Data Royalty Rate</span>
                    <span className={`font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>{sovereignDataRoyaltyPercent.toFixed(1)}%</span>
                  </label>
                  <input
                    type="range"
                    min="1.0"
                    max="10.0"
                    step="0.5"
                    value={sovereignDataRoyaltyPercent}
                    onChange={(e) => setSovereignDataRoyaltyPercent(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <p className={`text-[10px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-500'}`}>Standard mineral & intellectual property royalty benchmark (3–5%).</p>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>
                    <span>Beneficiary Population</span>
                    <span className={`font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>{communityPopulationMillions} Million</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={communityPopulationMillions}
                    onChange={(e) => setCommunityPopulationMillions(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <p className={`text-[10px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-500'}`}>Global Indigenous populations & local data center host communities.</p>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-900' : 'text-stone-300'}`}>
                    <span>Watershed & Aquifer Reserve</span>
                    <span className={`font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>{watershedRemediationSharePercent}%</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="5"
                    value={watershedRemediationSharePercent}
                    onChange={(e) => setWatershedRemediationSharePercent(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <p className={`text-[10px] ${isLight ? 'text-stone-600 font-medium' : 'text-stone-500'}`}>Portion locked into drinking water aquifer restoration & off-grid microgrids.</p>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className={`p-4 rounded-xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <span className={`text-[11px] font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Total Annual Sovereign Royalty</span>
                  <div className={`text-2xl font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>${totalRoyaltyBillions.toFixed(1)} Billion / Year</div>
                  <p className={`text-[11px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Perpetual endowment funded from AI enterprise market cap.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <span className={`text-[11px] font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Watershed & Infrastructure Fund</span>
                  <div className={`text-2xl font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>${watershedRemediationBillions.toFixed(1)} Billion</div>
                  <p className={`text-[11px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Dedicated to waterless cooling, microgrid islanding, and local lead/water cleanup.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${isLight ? 'bg-stone-50 border-stone-300 shadow-xs' : 'bg-stone-950 border-stone-800'}`}>
                  <span className={`text-[11px] font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>Annual Sovereign Citizen Dividend</span>
                  <div className={`text-2xl font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>${annualDividendPerCapitaDollars.toLocaleString()} / Person</div>
                  <p className={`text-[11px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Direct annual citizen distribution to recognized community members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: MASTER PLATE #60 & PROVENANCE */}
        {activeSubTab === 'plate_provenance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                    Forensic Provenance & Permanent Vault Pinning
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Plate #60 Cryptographic Master Archive
                  </h2>
                  <p className={`text-xs sm:text-sm font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Master Forensic Infographic: Trump’s $1.8 Trillion AI Summit Table & The Sovereign Equity Doctrine
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowPlateAnnotations(!showPlateAnnotations)}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                      showPlateAnnotations
                        ? isLight ? 'bg-emerald-100 text-emerald-950 border-emerald-400 shadow-xs' : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 shadow-md'
                        : isLight ? 'bg-stone-200 text-stone-800 border-stone-300 hover:bg-stone-300' : 'bg-stone-800 text-stone-400 border-stone-700 hover:text-stone-200'
                    }`}
                  >
                    <Check size={14} className={showPlateAnnotations ? (isLight ? 'text-emerald-700' : 'text-emerald-400') : (isLight ? 'text-stone-600' : 'text-stone-500')} />
                    <span>{showPlateAnnotations ? 'Forensic Overlay: Active' : 'Show Forensic Overlay'}</span>
                  </button>

                  <button
                    onClick={() => setIsPlateModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-600 to-emerald-600 hover:from-amber-500 hover:to-emerald-500 text-white font-bold text-xs font-mono rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Maximize2 size={15} />
                    <span>Full Screen High-Resolution Modal</span>
                  </button>
                </div>
              </div>

              {/* Master Artwork Presentation */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-black group">
                <img
                  src={trumpAiSummitPlateImg}
                  alt="Plate 60: Trump’s $1.8 Trillion AI Summit Table Master Infographic"
                  className="w-full h-auto object-cover"
                />

                {showPlateAnnotations && (
                  <div className="absolute inset-0 pointer-events-none p-4 sm:p-6 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <div className="max-w-xs sm:max-w-sm p-3 rounded-2xl bg-stone-950/90 border border-amber-500/60 text-stone-100 shadow-xl backdrop-blur-md space-y-1 animate-fadeIn">
                        <div className="flex items-center gap-1.5 text-amber-300 font-mono text-[11px] font-bold">
                          <Crown size={13} className="text-amber-400" />
                          <span>The Roosevelt Table • $1.8T Ledger</span>
                        </div>
                        <p className="text-xs font-sans text-stone-200 leading-snug">
                          Musk ($485B), Huang ($135B), Brockman ($1.8B), Amodei ($1.2B) seated with Trump, Vance, and Johnson.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-start">
                      <div className="max-w-md p-3.5 rounded-2xl bg-stone-950/95 border-2 border-emerald-500/80 text-stone-100 shadow-2xl backdrop-blur-md space-y-1">
                        <div className="flex items-center gap-1.5 text-emerald-300 font-mono text-xs font-bold">
                          <Shield size={13} className="text-emerald-400" />
                          <span>ICEarth Sovereign Data Royalty Rule</span>
                        </div>
                        <p className="text-xs font-sans text-stone-100 leading-snug">
                          Those who authored the languages, literature, and knowledge of humanity are owed perpetual 3.5% equity royalties ($63B/yr).
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Provenance Metadata Table */}
              <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-950 border-stone-800'}`}>
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
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Registration Timestamp:</span>
                      <span className={isLight ? 'text-stone-800' : 'text-stone-300'}>2026-10-01T04:30:00-07:00 (Summit Ingestion & Verification)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Source Authorities:</span>
                      <span className={isLight ? 'text-purple-900 font-bold' : 'text-purple-300'}>New York Post, White House Press Pool, Bloomberg Billionaires</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Sovereign Jurisprudence:</span>
                      <span className={isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400'}>ICEarth Indigenous Communities Alliance & Roulet's Law</span>
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

        {/* 4. CROSS-NAVIGATION BUTTONS TO RELATED PROOFS */}
        <section className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className={`flex flex-wrap items-center justify-between gap-2 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-3`}>
            <h4 className={`font-serif font-bold text-base flex items-center gap-2 ${isLight ? 'text-stone-950' : 'text-stone-200'}`}>
              <Shield size={16} className={isLight ? 'text-amber-700' : 'text-amber-400'} />
              <span>Related Sovereign IT & Economic Defense Engines</span>
            </h4>
            <span className={`text-xs font-mono font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>ICEarth System Stack</span>
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

            <button
              onClick={() => onNavigateTab?.('reports')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-rose-900 border-rose-300' : 'bg-stone-800 hover:bg-stone-700 text-rose-300 border-rose-500/40'
              }`}
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
                <span className="px-3 py-1 bg-amber-500 text-stone-950 font-mono text-xs font-bold rounded-lg uppercase">
                  Plate #60 Master Forensic
                </span>
                <span className="text-xs font-mono text-stone-400 hidden sm:inline">
                  Trump’s $1.8 Trillion AI Summit Table: Seating & Sovereign Equity
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
                  <span>{showPlateAnnotations ? 'Overlay: ON' : 'Overlay: OFF'}</span>
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
                  src={trumpAiSummitPlateImg}
                  alt="Plate 60 Full Resolution"
                  className="max-h-[75vh] w-auto object-contain rounded-xl border border-stone-800"
                />

                {showPlateAnnotations && (
                  <div className="absolute inset-0 pointer-events-none p-4 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <div className="max-w-xs p-3 rounded-2xl bg-stone-950/90 border border-amber-500/60 text-stone-100 shadow-xl backdrop-blur-md space-y-1">
                        <div className="text-amber-300 font-mono text-[11px] font-bold">
                          The Roosevelt Seating
                        </div>
                        <p className="text-xs font-sans text-stone-200">
                          Trump flanked by Musk ($485B) and Huang ($135B). Brockman ($1.8B) opposite Amodei ($1.2B).
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="max-w-md p-3 rounded-2xl bg-stone-950/95 border-2 border-emerald-500/80 text-stone-100 shadow-2xl backdrop-blur-md space-y-1 text-center">
                        <div className="text-emerald-300 font-mono text-xs font-bold">
                          Sovereign Dividend: 3.5% ($63 Billion/Year)
                        </div>
                        <p className="text-xs font-sans text-stone-100">
                          Indigenous communities and human creators must share in these generated trillions.
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
                  href={trumpAiSummitPlateImg}
                  download="ICEarth_Plate60_Trump_AI_Summit_Richest_Table.jpg"
                  className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Master Plate #60</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
