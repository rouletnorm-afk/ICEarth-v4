import React, { useState, useMemo } from 'react';
import {
  Coins,
  Shield,
  TrendingUp,
  Scale,
  Cpu,
  Globe,
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
  Building2,
  Users,
  Award,
  BarChart3,
  Sliders,
  DollarSign,
  Briefcase,
  HelpCircle,
  Landmark,
  Zap,
  Flame,
  LineChart as LineChartIcon
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
  ComposedChart
} from 'recharts';
import gamingPredictionPlateImg from '../assets/images/indigenous_gaming_sovereignty_prediction_markets_1791421289452.jpg';

interface IndigenousGamingPredictionMarketsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const IndigenousGamingPredictionMarkets: React.FC<IndigenousGamingPredictionMarketsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview_rift' | 'sovereignty_legal' | 'prediction_mechanics' | 'tribal_it_economy' | 'yield_simulator'
  >('overview_rift');

  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);

  // Simulator State: Tribal App Scale
  const [projectedMonthlyTraders, setProjectedMonthlyTraders] = useState<number>(25000);
  const [averageMonthlyWager, setAverageMonthlyWager] = useState<number>(450);
  const [tribalTakeRatePercent, setTribalTakeRatePercent] = useState<number>(1.8);
  const [itInfrastructureAllocPercent, setItInfrastructureAllocPercent] = useState<number>(25);

  const vaultHash = '0xINDIGENOUS_GAMING_SOVEREIGNTY_PREDICTION_MARKETS_KALSHI_IGA_PLATE_73_VAULT_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Recharts Chart 1: Tribal Gaming Economic Growth vs Emerging Digital/Prediction Channels ($B)
  const gamingGrowthData = [
    { year: '1988 (IGRA Passed)', casinoBrickAndMortar: 0.1, digitalSportsbooks: 0, predictionMarkets: 0, tribalItInvestment: 0.02 },
    { year: '1995 (Tribal Compacts)', casinoBrickAndMortar: 5.4, digitalSportsbooks: 0, predictionMarkets: 0, tribalItInvestment: 0.4 },
    { year: '2005 (Indian Gaming Boom)', casinoBrickAndMortar: 22.6, digitalSportsbooks: 0, predictionMarkets: 0, tribalItInvestment: 1.8 },
    { year: '2015 (Pre-PASPA Repeal)', casinoBrickAndMortar: 30.5, digitalSportsbooks: 0, predictionMarkets: 0, tribalItInvestment: 2.9 },
    { year: '2020 (Pandemic Pivot)', casinoBrickAndMortar: 27.8, digitalSportsbooks: 1.2, predictionMarkets: 0.05, tribalItInvestment: 3.8 },
    { year: '2023 (Record Gross)', casinoBrickAndMortar: 41.9, digitalSportsbooks: 2.8, predictionMarkets: 0.4, tribalItInvestment: 4.9 },
    { year: '2025 (Official NIGA Stats)', casinoBrickAndMortar: 43.7, digitalSportsbooks: 3.8, predictionMarkets: 1.8, tribalItInvestment: 5.6 },
    { year: '2026 (Prediction Market Era)', casinoBrickAndMortar: 46.0, digitalSportsbooks: 4.5, predictionMarkets: 4.2, tribalItInvestment: 6.8 }
  ];

  // Recharts Chart 2: Revenue Composition of Contemporary Indian Gaming ($46B Ecosystem)
  const revenueSegmentData = [
    { segment: 'Class III Casino Slots & Tables', revenueBillions: 34.2, sharePercent: 74.3, regulatoryTier: 'Tribal-State Compact' },
    { segment: 'Class II Bingo & Electronic Games', revenueBillions: 7.6, sharePercent: 16.5, regulatoryTier: 'Sole Tribal Sovereignty / NIGC' },
    { segment: 'Sports Wagering & Digital Books', revenueBillions: 2.4, sharePercent: 5.2, regulatoryTier: 'Compact & Sovereign Digital' },
    { segment: 'Hospitality, Resort & Events IT', revenueBillions: 1.8, sharePercent: 3.9, regulatoryTier: 'Tribal Enterprise' },
    { segment: 'Emerging Prediction Market Event Apps', revenueBillions: 0.6, sharePercent: 1.3, regulatoryTier: 'Tribal-CFTC Frontier / Kalshi' }
  ];

  // Recharts Chart 3: Battle of Legal Theories: IGA Establishment vs Pioneer Tribes vs CFTC
  const legalMatrixData = [
    { dimension: 'Jurisdictional Authority', establishmentIGA: 85, kalshiPioneerTribes: 92, stateGovernments: 45 },
    { dimension: 'Digital IT Self-Determination', establishmentIGA: 35, kalshiPioneerTribes: 95, stateGovernments: 30 },
    { dimension: 'Small Tribe Revenue Inclusion', establishmentIGA: 28, kalshiPioneerTribes: 88, stateGovernments: 15 },
    { dimension: 'Federal Preemption Immunity', establishmentIGA: 78, kalshiPioneerTribes: 84, stateGovernments: 62 },
    { dimension: 'Sports Wagering Hegemony Defense', establishmentIGA: 96, kalshiPioneerTribes: 40, stateGovernments: 80 }
  ];

  // Simulator Calculations
  const calculatedMetrics = useMemo(() => {
    const monthlyVolume = projectedMonthlyTraders * averageMonthlyWager;
    const annualVolume = monthlyVolume * 12;
    const tribalGrossRevenueAnnual = annualVolume * (tribalTakeRatePercent / 100);
    const itInvestmentAnnual = tribalGrossRevenueAnnual * (itInfrastructureAllocPercent / 100);
    const directTechJobsSupported = Math.max(2, Math.round(itInvestmentAnnual / 135000));
    const communityDividendAnnual = tribalGrossRevenueAnnual - itInvestmentAnnual;

    return {
      monthlyVolume,
      annualVolume,
      tribalGrossRevenueAnnual,
      itInvestmentAnnual,
      directTechJobsSupported,
      communityDividendAnnual
    };
  }, [projectedMonthlyTraders, averageMonthlyWager, tribalTakeRatePercent, itInfrastructureAllocPercent]);

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24`}>
      {/* PLATE #73 BANNER & HERO SECTION */}
      <div className="relative border-b border-amber-900/40 bg-gradient-to-b from-stone-950 via-amber-950/80 to-stone-900 text-white px-4 py-8 sm:px-8 sm:py-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.25),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 text-xs font-black tracking-widest uppercase shadow-md">
                PLATE #73
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900 text-amber-300 text-xs font-mono font-bold tracking-wide border border-amber-500/40 flex items-center gap-1.5">
                <Coins size={13} className="text-amber-400" />
                SOVEREIGN TRIBAL GAMING & PREDICTION MARKETS
              </span>
              <span className="px-2.5 py-1 rounded bg-rose-950/80 text-rose-200 text-xs font-mono border border-rose-700/60 flex items-center gap-1">
                <Landmark size={13} className="text-rose-400" />
                $46 BILLION SOVEREIGN ECONOMY • NY POST INVESTIGATION
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsArtModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-bold border border-amber-400/40 shadow-xs transition-colors cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>View Plate Infographic</span>
              </button>
              <button
                onClick={handleCopyHash}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono border border-stone-700 transition-colors cursor-pointer"
                title="Copy Cryptographic Vault Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : '0xKALSHI_IGA...'}</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Indigenous Gaming Sovereignty & Prediction Markets:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
              The $46 Billion Tribal Economy Evolves to Sovereign IT, Event Contracts & Digital Self-Determination
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl font-light leading-relaxed mb-6">
            Few economies on Earth demonstrate sovereign self-determination like Indigenous gaming. Governed under the 1988 Indian Gaming Regulatory Act (IGRA) and inherent tribal sovereignty, tribal gaming generated a record <strong className="text-amber-200 font-semibold">$46.0 billion in 2025 (+5.3% growth)</strong>, funding schools, healthcare, and state-of-the-art information technology. Now, a historic rift reported today in the <em>New York Post</em> reveals four Native American tribes (three in California, one in Oklahoma) breaking with the Indian casino establishment to partner with prediction-markets giant <strong className="text-amber-200 font-semibold">Kalshi</strong>. By owning their own tribal-branded prediction apps while Kalshi powers exchange clearing, smaller tribes are capturing digital revenue across sports, politics, and macro events—democratizing financial technology and proving once again why <strong className="text-emerald-300 font-semibold">Indigenous Communities Earth (ICEarth)</strong> anchors sovereign IT and cognitive autonomy.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-400 pt-3 border-t border-stone-800/80">
            <span className="flex items-center gap-1.5 text-stone-300">
              <FileText size={15} className="text-amber-400" />
              <strong>Source Investigation:</strong> New York Post Business (Oct 7, 2026) • Ariel Zilber
            </span>
            <span className="flex items-center gap-1.5">
              <Scale size={14} className="text-emerald-400" />
              Ninth Circuit Appeals & Supreme Court Jurisdictional Showdown
            </span>
            <a
              href="https://nypost.com/2026/10/07/business/four-native-american-tribes-break-with-casino-establishment-team-with-kalshi-on-new-gambling-apps/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-bold"
            >
              NY Post Report <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* CORE KPI SUMMARY METRICS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-stone-900 border border-amber-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">Tribal Gaming Gross</span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 my-1">$46.0 <span className="text-xs text-stone-400 font-normal">Billion</span></div>
            <span className="text-[10px] text-stone-400">+5.3% annual expansion</span>
          </div>

          <div className="bg-stone-900 border border-emerald-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">Pioneer Sovereign Tribes</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 my-1">4 Tribes</div>
            <span className="text-[10px] text-stone-400">3 in California, 1 in Oklahoma</span>
          </div>

          <div className="bg-stone-900 border border-indigo-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">Kalshi Sports Handle</span>
            <div className="text-2xl sm:text-3xl font-black text-indigo-400 my-1">70% <span className="text-xs text-stone-400 font-normal">of $4B</span></div>
            <span className="text-[10px] text-stone-400">~$2.8B event contracts</span>
          </div>

          <div className="bg-stone-900 border border-rose-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">Federal Court Showdown</span>
            <div className="text-2xl sm:text-3xl font-black text-rose-400 my-1">9th Circuit</div>
            <span className="text-[10px] text-rose-300">Headed to U.S. Supreme Court</span>
          </div>

          <div className="bg-stone-900 border border-purple-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between col-span-2 md:col-span-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">Tribal IT & Infrastructure</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 my-1">$6.8 <span className="text-xs text-stone-400 font-normal">Billion</span></div>
            <span className="text-[10px] text-stone-400">High-tech servers, fiber & jobs</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION SUB-TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        <div className="flex flex-wrap border-b border-stone-300 dark:border-stone-800 gap-1 sm:gap-2">
          {[
            { id: 'overview_rift', label: '⚡ The NY Post Investigation: The Tribal Rift', icon: FileText },
            { id: 'sovereignty_legal', label: '⚖️ Tribal Sovereignty vs. Casino Cartels (IGRA)', icon: Scale },
            { id: 'prediction_mechanics', label: '📊 Prediction Markets & Event Contracts', icon: BarChart3 },
            { id: 'tribal_it_economy', label: '💻 Sovereign IT Infrastructure & Job Creation', icon: Cpu },
            { id: 'yield_simulator', label: '🧮 Tribal Digital Sovereignty Simulator', icon: Sliders }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold tracking-tight rounded-t-lg transition-all cursor-pointer border-b-2 ${
                  isActive
                    ? 'bg-amber-950/20 text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-500 font-black shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 border-transparent hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800/40'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-amber-600 dark:text-amber-400' : 'text-stone-500'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN TAB CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        {/* SUBTAB 1: THE NY POST INVESTIGATION & TRIBAL RIFT */}
        {activeSubTab === 'overview_rift' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Infographic Feature Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 text-stone-100">
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
                    <Flame size={14} />
                    <span>Plate #73 Analytical Dossier</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Four Tribes Partner With Kalshi: The Emerging Digital Turf War
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                    According to the <em>New York Post</em>, three tribes in California and one in Oklahoma are launching tribal-branded prediction apps powered by Kalshi clearing. This creates a bitter rift with the Indian Gaming Association (IGA), whose executive director Jason Giles warned tribes against the partnership, labeling it "snake oil."
                  </p>
                </div>

                <div className="space-y-2 border-t border-stone-800 pt-4">
                  <div className="flex items-start gap-2 text-xs text-stone-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Tribal App Ownership:</strong> Each tribe owns its application and controls all customer-facing business.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-stone-300">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Kalshi Clearing:</strong> Kalshi operates the underlying exchange and clears all event contract trades.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-stone-300">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Tarek Mansour (Kalshi CEO):</strong> "Prediction markets and tribal economic development don’t have to be at odds. It can be organized around opportunity."</span>
                  </div>
                </div>

                <button
                  onClick={() => setIsArtModalOpen(true)}
                  className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-stone-950 font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Eye size={14} />
                  <span>Inspect Full Infographic & Provenance</span>
                </button>
              </div>

              <div className="lg:col-span-7 bg-stone-950 p-4 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-stone-800">
                <div
                  className="relative group cursor-pointer overflow-hidden rounded-xl border border-amber-900/40 w-full"
                  onClick={() => setIsArtModalOpen(true)}
                >
                  <img
                    src={gamingPredictionPlateImg}
                    alt="Plate #73: Indigenous Gaming Sovereignty & Prediction Markets"
                    className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-lg bg-stone-900/90 text-amber-300 font-mono text-xs font-bold border border-amber-500/50 flex items-center gap-2">
                      <Maximize2 size={14} /> Enlarge Plate #73
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Growth Timeline Recharts Chart */}
            <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-black text-stone-900 dark:text-white flex items-center gap-2">
                    <TrendingUp size={18} className="text-amber-500" />
                    Growth of the Sovereign Tribal Gaming Economy (1988–2026)
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Gross gaming revenue expansion ($ Billions) from initial IGRA passage to prediction market event contracts and IT infrastructure.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold">
                  $46.0B Total in 2026
                </span>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={gamingGrowthData} margin={{ top: 10, right: 20, left: 0, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                    <XAxis dataKey="year" tick={{ fontSize: 10, fill: '#888' }} interval={0} angle={-15} textAnchor="end" />
                    <YAxis tick={{ fontSize: 10, fill: '#888' }} unit="$B" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1c1917', borderColor: '#78350f', borderRadius: 8, fontSize: 11 }}
                      itemStyle={{ color: '#fef3c7' }}
                    />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
                    <Bar dataKey="casinoBrickAndMortar" name="Physical Casino GGR ($B)" fill="#d97706" stackId="a" />
                    <Bar dataKey="digitalSportsbooks" name="Tribal Digital Books ($B)" fill="#059669" stackId="a" />
                    <Bar dataKey="predictionMarkets" name="Prediction Markets Handle ($B)" fill="#6366f1" stackId="a" />
                    <Line type="monotone" dataKey="tribalItInvestment" name="Direct Tribal IT & Fiber Capex ($B)" stroke="#ec4899" strokeWidth={3} dot={{ r: 4 }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Explanatory 3-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center font-black">
                  1
                </div>
                <h4 className="text-base font-black text-stone-900 dark:text-white">Sovereignty as the Engine</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Unlike commercial casino operators who operate under state charters and corporate concessions, tribal gaming exists by virtue of pre-constitutional tribal sovereignty recognized in <em>California v. Cabazon Band of Mission Indians (1987)</em> and codified in IGRA.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center font-black">
                  2
                </div>
                <h4 className="text-base font-black text-stone-900 dark:text-white">The Establishment Rift</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Mega-resort tribes represented by the Indian Gaming Association fear that event contracts cannibalize sports wagering revenues. Meanwhile, smaller, geographically isolated tribes see prediction apps as a lifeline to capture national handle without requiring multibillion-dollar brick-and-mortar resorts.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black">
                  3
                </div>
                <h4 className="text-base font-black text-stone-900 dark:text-white">Why ICEarth Sovereign IT</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  ICEarth champions Indigenous sovereignty not only in environmental defense but in cognitive and digital infrastructure. Prediction markets are fundamentally information aggregation engines. When tribes own the apps and host the nodes, they break dependence on extractive middlemen.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: SOVEREIGNTY VS CASINO CARTELS (IGRA & THE COURTS) */}
        {activeSubTab === 'sovereignty_legal' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                  Constitutional & Statutory Framework
                </span>
                <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-1">
                  The Indian Gaming Regulatory Act (IGRA) & The Battle for Digital Event Contracts
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 max-w-4xl leading-relaxed">
                  Passed by Congress in 1988, IGRA established the statutory framework for gaming on Indian lands. It divided gaming into three distinct classes, each with separate jurisdictional authority:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-emerald-500/30 bg-emerald-50/50 dark:bg-emerald-950/20">
                  <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase">Class I Gaming</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-1">Traditional & Ceremonial</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-2">
                    Traditional Indian gaming connected with tribal ceremonies or celebrations. Regulated <strong>exclusively by tribal governments</strong> without state or federal interference.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-50/50 dark:bg-amber-950/20">
                  <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">Class II Gaming</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-1">Bingo & Electronic Aids</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-2">
                    Bingo, pull-tabs, and non-banked card games, including sophisticated electronic bingo terminals. <strong>Requires no state compact</strong>; oversight conducted by the tribe and NIGC.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-indigo-500/30 bg-indigo-50/50 dark:bg-indigo-950/20">
                  <div className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 uppercase">Class III Gaming</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-1">Casino Games & Sports</div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 mt-2">
                    House-banked slots, roulette, blackjack, and sports wagering. <strong>Requires a tribal-state compact</strong> approved by the Secretary of the Interior.
                  </p>
                </div>
              </div>

              {/* Legal Positions Comparison Table */}
              <div className="overflow-x-auto border border-stone-200 dark:border-stone-800 rounded-xl">
                <table className="w-full text-left text-xs">
                  <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 uppercase font-mono">
                    <tr>
                      <th className="p-3">Party / Coalition</th>
                      <th className="p-3">Core Legal Thesis</th>
                      <th className="p-3">Jurisdictional Vehicle</th>
                      <th className="p-3">Economic Stake</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="p-3 font-bold text-amber-600 dark:text-amber-400">Indian Gaming Association (IGA) & Large Casino Tribes</td>
                      <td className="p-3 text-stone-600 dark:text-stone-300">
                        Prediction market sports contracts constitute unauthorized sports gambling that bypasses state compact exclusivity and drains casino floor traffic.
                      </td>
                      <td className="p-3 font-mono text-stone-500">IGRA Exclusivity & 9th Circuit Lawsuits</td>
                      <td className="p-3 font-bold text-rose-500">Defense of $46B physical casino moat</td>
                    </tr>
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">Pioneer Tribes (3 California, 1 Oklahoma)</td>
                      <td className="p-3 text-stone-600 dark:text-stone-300">
                        Tribes possess sovereign authority to enter financial technology agreements and capture national digital handle, leveling the playing field for remote reservations.
                      </td>
                      <td className="p-3 font-mono text-stone-500">Tribal App Ownership & Kalshi White-Label</td>
                      <td className="p-3 font-bold text-emerald-500">Digital diversification beyond local borders</td>
                    </tr>
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="p-3 font-bold text-indigo-600 dark:text-indigo-400">Kalshi Inc. (CFTC Regulated Exchange)</td>
                      <td className="p-3 text-stone-600 dark:text-stone-300">
                        Wagers are legally defined financial instruments ("event contracts" and "swaps") regulated by the federal CFTC, pre-empting state gambling statutes.
                      </td>
                      <td className="p-3 font-mono text-stone-500">Commodity Exchange Act (CEA) & DC Circuit Rulings</td>
                      <td className="p-3 font-bold text-indigo-500">$4B+ handle expansion & Supreme Court showdown</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Legal Matrix Recharts */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800">
                <h4 className="text-sm font-bold text-stone-900 dark:text-white mb-3">
                  Relative Score Across Key Strategic Dimensions (0–100 Scale)
                </h4>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={legalMatrixData} layout="vertical" margin={{ top: 5, right: 30, left: 140, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                      <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10, fill: '#888' }} />
                      <YAxis type="category" dataKey="dimension" tick={{ fontSize: 10, fill: '#888' }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#78350f', borderRadius: 8, fontSize: 11 }} />
                      <Legend wrapperStyle={{ fontSize: 11 }} />
                      <Bar dataKey="kalshiPioneerTribes" name="Pioneer Tribes (Pro-Prediction)" fill="#10b981" />
                      <Bar dataKey="establishmentIGA" name="IGA Establishment (Anti-Kalshi)" fill="#f59e0b" />
                      <Bar dataKey="stateGovernments" name="State Regulatory Cartels" fill="#6b7280" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: PREDICTION MARKETS & EVENT CONTRACTS */}
        {activeSubTab === 'prediction_mechanics' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-500 uppercase font-bold">
                  <BarChart3 size={16} />
                  <span>The Mechanism: Swaps vs Sportsbooks</span>
                </div>
                <h3 className="text-xl font-black text-stone-900 dark:text-white">
                  Why Prediction Markets Differ from Traditional Gambling
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                  In a traditional casino sportsbook, the house acts as the counterparty, setting odds with an embedded margin (the "vig" or juice) and taking financial risk against the bettor.
                </p>
                <div className="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                  <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                    <strong className="text-stone-900 dark:text-white">Binary Event Contracts:</strong> Contracts settle strictly between $0.00 and $1.00 based on the real-world outcome of a verifiable event (e.g., "Will the Chiefs win on Sunday?" or "Will CPI exceed 2.8%?").
                  </div>
                  <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                    <strong className="text-stone-900 dark:text-white">Peer-to-Peer Order Book:</strong> Traders execute against other participants rather than the house. Prices directly reflect consensus probabilities (e.g., $0.62 equals a 62% market probability).
                  </div>
                  <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700">
                    <strong className="text-stone-900 dark:text-white">Clearinghouse Guarantee:</strong> Kalshi serves as the centralized clearing organization (DCO), holding 100% fully collateralized reserves with no credit risk or insolvency hazard.
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-stone-900 p-6 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-500 uppercase font-bold">
                  <Coins size={16} />
                  <span>Revenue Breakdown ($46 Billion Total)</span>
                </div>
                <h3 className="text-xl font-black text-stone-900 dark:text-white">
                  Indian Gaming Revenue Composition
                </h3>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={revenueSegmentData} margin={{ top: 10, right: 10, left: -10, bottom: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                      <XAxis dataKey="segment" tick={{ fontSize: 9, fill: '#888' }} interval={0} angle={-25} textAnchor="end" />
                      <YAxis tick={{ fontSize: 10, fill: '#888' }} unit="$B" />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#78350f', borderRadius: 8, fontSize: 11 }} />
                      <Bar dataKey="revenueBillions" name="Annual Revenue ($B)" fill="#d97706" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: TRIBAL IT INFRASTRUCTURE & JOBS */}
        {activeSubTab === 'tribal_it_economy' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-500 uppercase tracking-widest">
                  High-Tech Sovereignty & Rural Development
                </span>
                <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-1">
                  How Tribal Gaming Drives Sovereign IT Infrastructure and High-Wage Jobs
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 mt-2 max-w-4xl leading-relaxed">
                  Tribal gaming has never been purely about casino floors. It has systematically served as the primary financing engine for Native American information technology, cybersecurity centers, fiber optic networks, and high-performance computing on sovereign land.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-center">
                  <div className="text-2xl font-black text-amber-500">$6.8 Billion</div>
                  <div className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1">Cumulative IT Capex</div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Invested in on-reservation high-speed connectivity & compute.</p>
                </div>

                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-center">
                  <div className="text-2xl font-black text-emerald-500">700,000+</div>
                  <div className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1">Jobs Supported</div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Direct, indirect, and induced employment across Indian Country.</p>
                </div>

                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-center">
                  <div className="text-2xl font-black text-indigo-500">100% Tribal App Rights</div>
                  <div className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1">Digital IP Retention</div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Tribes own user relationships, branding, and customer data.</p>
                </div>

                <div className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-800/40 text-center">
                  <div className="text-2xl font-black text-purple-500">Tier-3 Data Centers</div>
                  <div className="text-xs font-bold text-stone-800 dark:text-stone-200 mt-1">Sovereign Hosting</div>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">On-reservation servers immune to predatory state jurisdiction.</p>
                </div>
              </div>

              {/* The ICEarth Connection */}
              <div className="p-6 rounded-xl bg-gradient-to-r from-amber-950/40 via-stone-900 to-emerald-950/40 border border-amber-600/40 text-stone-100">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  <Globe size={14} />
                  <span>The ICEarth Foundation Principle</span>
                </div>
                <h4 className="text-lg font-black text-white mt-1">
                  Why Indigenous Communities Earth Anchors Sovereign IT
                </h4>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  When European extraction invaded Indigenous America in 1492, the colonizers monopolized metallurgy, trade routes, and weapons. Today, the new frontier of sovereignty is <strong>information architecture, cryptographic nodes, and financial computation</strong>. By owning prediction market apps and running sovereign data centers, tribal nations exercise the digital right to progress without yielding to Silicon Valley monopolists or state taxation cartels.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('indigenous_right_to_progress')}
                        className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs flex items-center gap-1.5 cursor-pointer transition-all shadow-md"
                      >
                        <span>🌾 Launch Indigenous Right to Progress (Plate #69)</span>
                        <ArrowRight size={13} />
                      </button>
                      <button
                        onClick={() => onNavigateTab('deb_haaland_home')}
                        className="px-3.5 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 font-bold text-xs border border-amber-500/40 flex items-center gap-1.5 cursor-pointer transition-all"
                      >
                        <span>🏛️ Deb Haaland 8 Data Center Measures (Plate #51)</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: TRIBAL DIGITAL SOVEREIGNTY SIMULATOR */}
        {activeSubTab === 'yield_simulator' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-stone-900 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-xl space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-indigo-500 uppercase tracking-widest">
                  Financial & Sovereign IT Modelling
                </span>
                <h3 className="text-2xl font-black text-stone-900 dark:text-white mt-1">
                  Tribal Digital Sovereignty & Prediction Market Yield Calculator
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1 max-w-3xl">
                  Simulate the economic yield for a sovereign tribe launching a tribal-branded prediction market app powered by Kalshi clearing. Adjust user scale, average monthly handle, and IT reinvestment quotas.
                </p>
              </div>

              {/* Sliders Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl bg-stone-100 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-stone-700 dark:text-stone-300">Active Monthly App Traders:</span>
                    <span className="font-mono text-amber-500">{projectedMonthlyTraders.toLocaleString()} users</span>
                  </div>
                  <input
                    type="range"
                    min={2000}
                    max={150000}
                    step={1000}
                    value={projectedMonthlyTraders}
                    onChange={(e) => setProjectedMonthlyTraders(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>2,000 (Small Tribe)</span>
                    <span>150,000 (Multi-State Reach)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-stone-700 dark:text-stone-300">Avg Monthly Wager Per Trader:</span>
                    <span className="font-mono text-amber-500">${averageMonthlyWager.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={2000}
                    step={50}
                    value={averageMonthlyWager}
                    onChange={(e) => setAverageMonthlyWager(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>$100 / mo</span>
                    <span>$2,000 / mo</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-stone-700 dark:text-stone-300">Tribal Net Revenue Share (%):</span>
                    <span className="font-mono text-emerald-500">{tribalTakeRatePercent}%</span>
                  </div>
                  <input
                    type="range"
                    min={0.5}
                    max={4.0}
                    step={0.1}
                    value={tribalTakeRatePercent}
                    onChange={(e) => setTribalTakeRatePercent(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>0.5% (Conservative)</span>
                    <span>4.0% (High Margin Tier)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-stone-700 dark:text-stone-300">Reinvestment in Tribal IT Infrastructure:</span>
                    <span className="font-mono text-indigo-500">{itInfrastructureAllocPercent}%</span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={50}
                    step={5}
                    value={itInfrastructureAllocPercent}
                    onChange={(e) => setItInfrastructureAllocPercent(Number(e.target.value))}
                    className="w-full accent-indigo-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400">
                    <span>10% (Minimal)</span>
                    <span>50% (High-Tech Sovereign Hub)</span>
                  </div>
                </div>
              </div>

              {/* Output Yield Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-stone-900 border border-amber-600/40 text-stone-100 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Annual Trading Handle</span>
                  <div className="text-xl sm:text-2xl font-black text-amber-400 my-1">
                    ${(calculatedMetrics.annualVolume / 1000000).toFixed(1)}M
                  </div>
                  <span className="text-[10px] text-stone-400">Gross event wager volume</span>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-emerald-600/40 text-stone-100 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Tribal Net Revenue</span>
                  <div className="text-xl sm:text-2xl font-black text-emerald-400 my-1">
                    ${(calculatedMetrics.tribalGrossRevenueAnnual / 1000000).toFixed(2)}M
                  </div>
                  <span className="text-[10px] text-stone-400">Annual recurring yield</span>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-indigo-600/40 text-stone-100 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">Sovereign IT Capex Fund</span>
                  <div className="text-xl sm:text-2xl font-black text-indigo-400 my-1">
                    ${(calculatedMetrics.itInvestmentAnnual / 1000).toFixed(0)}K
                  </div>
                  <span className="text-[10px] text-stone-400">Fiber, servers & cybersecurity</span>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-purple-600/40 text-stone-100 text-center">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">High-Wage Tech Jobs</span>
                  <div className="text-xl sm:text-2xl font-black text-purple-400 my-1">
                    {calculatedMetrics.directTechJobsSupported} FTEs
                  </div>
                  <span className="text-[10px] text-stone-400">On-reservation IT positions</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CROSS-NAVIGATION ACTION BAR */}
        <div className="rounded-2xl border border-stone-800 bg-stone-950 p-4 sm:p-6 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xs sm:text-sm font-mono font-bold text-amber-300 flex items-center justify-center md:justify-start gap-2">
              <Shield size={15} className="text-amber-400" />
              <span>Sovereign Knowledge Corridor: Cross-Navigation</span>
            </h4>
            <p className="text-[11px] text-stone-400">
              Continue exploring sovereign economic frameworks, environmental exposures, and archaeological proofs across ICEarth.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('indigenous_right_to_progress')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono transition-colors border border-stone-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <ArrowRight size={13} className="rotate-180" />
                  <span>Plate #69: Right to Progress</span>
                </button>
                <button
                  onClick={() => onNavigateTab('indigenous_america_lead_exposenomics')}
                  className="px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-amber-300 text-xs font-mono transition-colors border border-stone-800 flex items-center gap-1.5 cursor-pointer"
                >
                  <span>🪶 Plate #72: Indigenous Lead</span>
                </button>
                <button
                  onClick={() => onNavigateTab('independent_validation_roulets_law')}
                  className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-600 hover:from-emerald-500 hover:to-teal-500 text-stone-950 font-black text-xs font-mono transition-all shadow border border-emerald-400 flex items-center gap-1.5 cursor-pointer hover:scale-105"
                >
                  <span>🔬 Plate #74: Peatland Archives & Roulet's Law</span>
                  <ArrowRight size={13} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FULL HIGH-RESOLUTION ARTWORK & PROVENANCE MODAL */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-amber-900/60 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 font-black text-[10px] tracking-wider uppercase">
                  PLATE #73 VAULT
                </span>
                <span className="text-sm font-bold text-white truncate max-w-md">
                  Indigenous Gaming Sovereignty & Prediction Markets (NY Post Investigation)
                </span>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
              <div className="bg-stone-950 rounded-xl overflow-hidden border border-amber-900/40 flex justify-center">
                <img
                  src={gamingPredictionPlateImg}
                  alt="Plate #73: Full Infographic"
                  className="w-full h-auto object-contain max-h-[65vh] rounded-lg"
                />
              </div>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2 text-xs font-mono text-stone-300">
                <div className="flex justify-between items-center text-amber-400 font-bold">
                  <span>Cryptographic Vault Registration:</span>
                  <span>PHOTO-000CG / IP-000CG</span>
                </div>
                <div className="text-[11px] text-stone-400 break-all select-all bg-stone-900 p-2 rounded border border-stone-800">
                  {vaultHash}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[10px] text-stone-400">
                  <div><strong>Legal Anchor:</strong> IGRA 25 U.S.C. § 2701</div>
                  <div><strong>Federal Jurisdiction:</strong> 9th Circuit / CFTC</div>
                  <div><strong>Sovereignty:</strong> California & Oklahoma Tribes</div>
                  <div><strong>Curator:</strong> Norman Roulet (ICEarth)</div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-wrap justify-between items-center gap-2">
              <div className="text-xs text-stone-400">
                Archived in ICEarth Sovereign Membership Portal & Creative Gallery
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
                  className="px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs cursor-pointer shadow-md"
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

export default IndigenousGamingPredictionMarkets;
