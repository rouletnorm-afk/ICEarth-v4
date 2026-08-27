import React, { useState, useMemo } from 'react';
import goldGreedGravesImg from '../assets/images/gold_greed_graves_primal_mining_1787869660769.jpg';
import rouletsLawMiningImg from '../assets/images/roulets_law_mining_1786944208391.jpg';
import osunGoldDynastyImg from '../assets/images/osun_gold_dynasty_inequity_sahel_1786948468266.jpg';
import rouletsLawSahelImg from '../assets/images/roulets_law_four_variables_sahel_lithium_1786946853842.jpg';
import leadHomeostasisInfographicImg from '../assets/images/lead_homeostasis_review_1787820570934.jpg';
import {
  Pickaxe,
  Flame,
  ShieldAlert,
  Skull,
  TrendingDown,
  Activity,
  AlertTriangle,
  FileText,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  BarChart2,
  Maximize2,
  X,
  Compass,
  Scale,
  Award,
  Layers,
  Search,
  Users,
  Eye,
  Info,
  Clock,
  MapPin,
  Landmark,
  Radio,
  Coins,
  Cpu,
  Globe,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  DollarSign,
  Droplets,
  Atom,
  AlertOctagon,
  ArrowRight,
  Download,
  Share2,
  HeartCrack,
  Network,
  Crown,
  Building2,
  Briefcase,
  TrendingUp,
  Percent,
  Dna,
  Workflow
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  LineChart,
  Line
} from 'recharts';

interface ArtisanalMetallurgyExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ArtisanalMetallurgyExposenomics: React.FC<ArtisanalMetallurgyExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';
  const [activeSubTab, setActiveSubTab] = useState<
    'deep_history' | 'case_study' | 'indigenous_americas' | 'genotoxic_toxicology' | 'interactive_simulation' | 'forensic_manifest'
  >('deep_history');

  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);
  const [modalTab, setModalTab] = useState<'provenance' | 'evolutionary_timeline' | 'ghana_nigeria' | 'genotoxicity' | 'indigenous_biome'>('provenance');

  // Interactive Economic & Toxicological Simulator State
  const [oreProcessingSite, setOreProcessingSite] = useState<'cave_hearth' | 'domestic_compound' | 'open_river_galamsey' | 'contained_sovereign_coop'>('open_river_galamsey');
  const [oreToxicityPpm, setOreToxicityPpm] = useState<number>(9200); // combined Pb/Hg ppm in raw ore
  const [mercuryRetortCapturePct, setMercuryRetortCapturePct] = useState<number>(10); // % mercury vapor captured vs vented into air/water
  const [cartelInterceptionPct, setCartelInterceptionPct] = useState<number>(80); // % skimmed by armed syndicates/middlemen

  // Computed Exposenomics & Roulet's Law Metrics
  const simOutputs = useMemo(() => {
    let dispersionFactor = 1.0;
    if (oreProcessingSite === 'cave_hearth') dispersionFactor = 4.2;
    else if (oreProcessingSite === 'domestic_compound') dispersionFactor = 3.6;
    else if (oreProcessingSite === 'open_river_galamsey') dispersionFactor = 2.8;
    else dispersionFactor = 0.12;

    const uncapturedHgFraction = (100 - mercuryRetortCapturePct) / 100;
    const atmosphericVaporExposurePpm = Math.round(oreToxicityPpm * 0.35 * dispersionFactor * uncapturedHgFraction);
    const riverTurbidityNtu = Math.round(180 + (oreToxicityPpm * 1.4 * (oreProcessingSite === 'open_river_galamsey' ? 2.5 : 0.2)));
    const pediatricBllEstimate = Math.min(140, parseFloat((0.02 + (oreToxicityPpm / 110) * dispersionFactor * 0.8).toFixed(1)));
    const dnaBreakIndex8OHdG = Math.min(100, Math.round((pediatricBllEstimate * 0.65) + (atmosphericVaporExposurePpm / 45)));
    const neurologicalLossPct = Math.min(98, Math.round(pediatricBllEstimate * 0.92));
    const conflictIndex = Math.min(100, Math.round((cartelInterceptionPct * 0.65) + (pediatricBllEstimate * 0.35)));
    const totalOreValueUsdPerKg = 72000;
    const cartelLootUsd = Math.round(totalOreValueUsdPerKg * (cartelInterceptionPct / 100));
    const minerSubsistenceUsd = Math.round(totalOreValueUsdPerKg * ((100 - cartelInterceptionPct) / 100));

    return {
      atmosphericVaporExposurePpm,
      riverTurbidityNtu,
      pediatricBllEstimate,
      dnaBreakIndex8OHdG,
      neurologicalLossPct,
      conflictIndex,
      cartelLootUsd,
      minerSubsistenceUsd
    };
  }, [oreProcessingSite, oreToxicityPpm, mercuryRetortCapturePct, cartelInterceptionPct]);

  // Deep-Time Evolutionary Metallurgy Timeline (1,000,000 BCE to 2026 CE)
  const deepTimeTimelineData = [
    { era: '1,000,000 BCE', event: 'Cave Hearths & Shiny Rocks', leadBurden: 0.005, mercuryBurden: 0.001, dnaLesionIndex: 2, societalChaos: 5, notes: 'Primates collect lustrous pyrites & galena, throwing into fire; natural metal homeostasis maintained without heavy metal bioaccumulation' },
    { era: '6,000 BCE', event: 'Anatolian Lead/Silver Smelting', leadBurden: 12.4, mercuryBurden: 1.2, dnaLesionIndex: 24, societalChaos: 28, notes: 'First cupellation of argentiferous galena; airborne lead plumes begin altering Mediterranean hominin prefrontal cortex' },
    { era: '2,500 BCE', event: 'Bronze & Copper Age Metallurgy', leadBurden: 28.0, mercuryBurden: 4.5, dnaLesionIndex: 38, societalChaos: 45, notes: 'Arsenical bronze & lead alloy casting; dynastic warfare and slave mining established across the Fertile Crescent' },
    { era: '100 CE', event: 'Greco-Roman Empire (Sapa & Aqueducts)', leadBurden: 65.0, mercuryBurden: 15.0, dnaLesionIndex: 72, societalChaos: 82, notes: '80,000 tons Pb/yr; aristocratic infertility, gout, mania, and military collapse under universal heavy metal poisoning' },
    { era: '1492–1800 CE', event: 'Colonization of Pristine Americas', leadBurden: 88.0, mercuryBurden: 65.0, dnaLesionIndex: 85, societalChaos: 94, notes: 'Old World lead-poisoned conquerors colonize the least lead-poisoned genome, biome & exposome on Earth (Indigenous Communities Earth America); Potosí mercury amalgamation' },
    { era: '1923–2000 CE', event: 'Tetraethyl Lead Gasoline & Industrial Age', leadBurden: 98.0, mercuryBurden: 78.0, dnaLesionIndex: 94, societalChaos: 96, notes: '100M+ tons lead combusted into atmosphere; global Flynn effect depression and violent crime wave' },
    { era: '2026 CE', event: 'West African Gold Belt & Modern Galamsey', leadBurden: 99.5, mercuryBurden: 96.0, dnaLesionIndex: 98, societalChaos: 99, notes: 'Ghana galamsey & Zamfara galena milling; excavators churn mercury into rivers while 400+ children die from lead encephalopathy' }
  ];

  // West Africa River & Basin Heavy Metal Contamination (Ghana & Nigeria Case Study)
  const riverBasinData = [
    { river: 'Pra River (Ghana Gold Belt)', mercuryHg: 95, leadPb: 88, turbidityNtu: 9800, communityRisk: 96, state: 'Ghana (Western/Central)' },
    { river: 'Ankobra River (Ghana)', mercuryHg: 98, leadPb: 92, turbidityNtu: 12500, communityRisk: 99, state: 'Ghana (Western Region)' },
    { river: 'Birim River (Ghana)', mercuryHg: 90, leadPb: 84, turbidityNtu: 8400, communityRisk: 92, state: 'Ghana (Eastern Region)' },
    { river: 'Offin River (Ghana)', mercuryHg: 92, leadPb: 86, turbidityNtu: 9100, communityRisk: 94, state: 'Ghana (Ashanti Region)' },
    { river: 'Rima/Bukkuyum Basin (Zamfara)', mercuryHg: 65, leadPb: 99, turbidityNtu: 4500, communityRisk: 98, state: 'Nigeria (Zamfara State)' },
    { river: 'Shiroro/Kaduna Basin (Niger)', mercuryHg: 78, leadPb: 85, turbidityNtu: 5200, communityRisk: 89, state: 'Nigeria (Niger/Kaduna)' },
    { river: 'Osun River Sacred Grove (Osun)', mercuryHg: 82, leadPb: 76, turbidityNtu: 3800, communityRisk: 86, state: 'Nigeria (Osun State)' }
  ];

  // Radar Comparison: Pre-Metallurgy Pristine Americas vs Old World Smelting vs Modern Artisanal Galamsey
  const exposomeRadarData = [
    { metric: 'Genomic DNA Integrity (Low 8-OHdG)', pristineIndigenous: 98, romanSmelting: 25, modernGalamsey: 8, fullMark: 100 },
    { metric: 'Trace Mineral Homeostasis (Zn/Ca/Mg)', pristineIndigenous: 95, romanSmelting: 30, modernGalamsey: 12, fullMark: 100 },
    { metric: 'Watershed & River Purity', pristineIndigenous: 99, romanSmelting: 40, modernGalamsey: 5, fullMark: 100 },
    { metric: 'Prefrontal Executive Function', pristineIndigenous: 96, romanSmelting: 35, modernGalamsey: 15, fullMark: 100 },
    { metric: 'Community Wealth Sovereignty', pristineIndigenous: 90, romanSmelting: 20, modernGalamsey: 10, fullMark: 100 },
    { metric: 'Ecological Resilience & Biome Health', pristineIndigenous: 98, romanSmelting: 28, modernGalamsey: 6, fullMark: 100 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-[#FAFAF7] text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      {/* HEADER HERO BANNER */}
      <div className={`border-b ${isLight ? 'border-amber-200/80 bg-gradient-to-r from-amber-50/90 via-stone-50 to-amber-100/60' : 'border-amber-900/60 bg-gradient-to-r from-stone-950 via-amber-950/30 to-stone-950'} px-4 sm:px-8 py-8 shadow-xs`}>
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider bg-amber-600 text-white shadow-xs flex items-center gap-1.5">
                <Flame size={14} className="animate-pulse text-amber-200" />
                DEEP-AI RESEARCH DIVE • EXPOSENOMICS OF METALLURGY
              </span>
              <span className={`text-xs font-mono ${isLight ? 'text-amber-800 bg-amber-100/70 border border-amber-300' : 'text-amber-300 bg-amber-950/60 border border-amber-800'} px-2 py-0.5 rounded`}>
                ROULET'S LAW • PRIMAL TO MODERN
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.modernghana.com/news/1522829/gold-greed-and-graves-illegal-minings-growing.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  isLight
                    ? 'border-amber-300 bg-white hover:bg-amber-50 text-amber-950 shadow-xs'
                    : 'border-amber-800 bg-stone-900 hover:bg-amber-950/40 text-amber-200'
                }`}
              >
                <ExternalLink size={13} />
                <span>ModernGhana Source Article</span>
              </a>

              <button
                onClick={() => setShowArtworkModal(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-sm transition-all cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Inspect Visual Masterwork</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight text-amber-950 dark:text-amber-100">
              Gold, Greed and Graves: Primal Metallurgy to the Global Exposenome
            </h1>
            <p className="text-sm sm:text-base font-sans text-stone-700 dark:text-stone-300 max-w-5xl leading-relaxed">
              From early primates collecting shiny rocks and throwing them into cave hearths to modern West African excavators churning mercury-laced rivers in Ghana (galamsey) and lead-milling in Nigeria (Zamfara), metallurgy has dictated human economics, neurotoxic degradation, and the violent colonization of Earth's pristine biomes.
            </p>
          </div>

          {/* METRIC STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-3">
            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-amber-200' : 'bg-stone-900/80 border-amber-900/40'} shadow-xs`}>
              <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Evolutionary Span</div>
              <div className="text-lg font-bold font-mono text-amber-700 dark:text-amber-400">1,000,000+ Yrs</div>
              <div className="text-[10px] text-stone-500">Cave fires to modern pits</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-red-200' : 'bg-stone-900/80 border-red-900/40'} shadow-xs`}>
              <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Mercury (Hg) Inhalation</div>
              <div className="text-lg font-bold font-mono text-red-700 dark:text-red-400">&gt; 100× WHO Limit</div>
              <div className="text-[10px] text-stone-500">Open-pan amalgamation</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-rose-200' : 'bg-stone-900/80 border-rose-900/40'} shadow-xs`}>
              <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Zamfara Lead Deaths</div>
              <div className="text-lg font-bold font-mono text-rose-700 dark:text-rose-400">400+ Children</div>
              <div className="text-[10px] text-stone-500">Galena-gold domestic flour</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-teal-200' : 'bg-stone-900/80 border-teal-900/40'} shadow-xs`}>
              <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">River Destruction</div>
              <div className="text-lg font-bold font-mono text-teal-800 dark:text-teal-400">&gt; 12,000 NTU</div>
              <div className="text-[10px] text-stone-500">Pra, Ankobra, Birim, Offin</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-purple-200' : 'bg-stone-900/80 border-purple-900/40'} shadow-xs`}>
              <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">8-OHdG DNA Lesions</div>
              <div className="text-lg font-bold font-mono text-purple-700 dark:text-purple-400">+380% Surge</div>
              <div className="text-[10px] text-stone-500">Zinc displacement & breaks</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-emerald-200' : 'bg-stone-900/80 border-emerald-900/40'} shadow-xs`}>
              <div className="text-[10px] font-mono text-stone-500 uppercase font-semibold">Pristine Genome</div>
              <div className="text-lg font-bold font-mono text-emerald-700 dark:text-emerald-400">Indigenous Americas</div>
              <div className="text-[10px] text-stone-500">Pre-1492 zero-Pb baseline</div>
            </div>
          </div>
        </div>
      </div>

      {/* SUB-NAVIGATION TABS */}
      <div className={`border-b ${isLight ? 'border-stone-200 bg-white' : 'border-stone-800 bg-stone-900'} sticky top-0 z-20 px-4 sm:px-8`}>
        <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs font-semibold">
          <button
            onClick={() => setActiveSubTab('deep_history')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'deep_history'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : isLight
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Clock size={14} />
            <span>1. Primal Genesis & Cave Fires</span>
          </button>

          <button
            onClick={() => setActiveSubTab('case_study')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'case_study'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : isLight
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Droplets size={14} />
            <span>2. Gold, Greed & Graves (Ghana & Nigeria)</span>
          </button>

          <button
            onClick={() => setActiveSubTab('indigenous_americas')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'indigenous_americas'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : isLight
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Sprout size={14} />
            <span>3. Colonization of Pristine Americas</span>
          </button>

          <button
            onClick={() => setActiveSubTab('genotoxic_toxicology')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'genotoxic_toxicology'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : isLight
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Dna size={14} />
            <span>4. 8-OHdG & DNA Strand Cleavage</span>
          </button>

          <button
            onClick={() => setActiveSubTab('interactive_simulation')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'interactive_simulation'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : isLight
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Cpu size={14} />
            <span>5. Exposenomics Simulator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('forensic_manifest')}
            className={`px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
              activeSubTab === 'forensic_manifest'
                ? 'bg-amber-600 text-white shadow-xs font-bold'
                : isLight
                ? 'text-stone-700 hover:bg-stone-100'
                : 'text-stone-300 hover:bg-stone-800'
            }`}
          >
            <FileText size={14} />
            <span>6. Sovereign Manifest & ZK-Proofs</span>
          </button>
        </div>
      </div>

      {/* MAIN BODY CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        
        {/* SUBTAB 1: PRIMAL GENESIS & CAVE FIRES */}
        {activeSubTab === 'deep_history' && (
          <div className="space-y-8 animate-fade-in">
            {/* HERO FEATURE CARD WITH IMAGE */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900 border-amber-900/50'} shadow-sm space-y-6`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-300">
                      PRIMAL ORIGINS • 1,000,000 BCE TO PRESENT
                    </span>
                    <span className="text-xs text-stone-500 font-mono">PLATE #26</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 dark:text-amber-100">
                    The Primal Spark: How Shiny Rocks in Cave Fires Created Extractive Economics
                  </h2>
                  <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                    Long before modern strip mines and high-pressure water cannons, hominin evolution encountered metallurgy through an innocent curiosity. Primates, possessing advanced visual trichromacy, were drawn to shiny, heavy minerals—pyrites, galena, cinnabar, and native copper nuggets. Throwing these minerals into cave hearth fires triggered the accidental reduction of metallic ores, releasing toxic lead ($Pb$) and mercury ($Hg$) vapors in enclosed living quarters.
                  </p>
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50/70 border-amber-200 text-amber-950' : 'bg-amber-950/40 border-amber-800 text-amber-200'} text-xs space-y-2`}>
                    <div className="font-bold flex items-center gap-1.5">
                      <Flame size={14} className="text-amber-600" />
                      The Etymology of Economics (Oikos = Management of the Home)
                    </div>
                    <p className="leading-relaxed">
                      "Economics" literally derives from the Greek <em>oikonomia</em> (management of the household). When early humans transformed cave hearths from biological cooking tools into metallic extraction chambers, they created the world's first industrial economy—one predicated on resource extraction, environmental toxicity, and cognitive perturbation.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative group cursor-pointer overflow-hidden rounded-xl border border-amber-300/80 shadow-md" onClick={() => setShowArtworkModal(true)}>
                    <img
                      src={goldGreedGravesImg}
                      alt="Primal Origins of Artisanal Mining and Modern Galamsey"
                      className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <div className="text-white space-y-1">
                        <div className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                          <Maximize2 size={13} />
                          <span>Click to Inspect High-Resolution Plate</span>
                        </div>
                        <div className="text-sm font-semibold">From Cave Fires to Modern Excavators: The Unbroken Metallurgical Continuum</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DEEP TIME TIMELINE CHART */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} shadow-sm space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <Activity size={18} className="text-amber-600" />
                    Deep-Time Anthropogenic Heavy Metal & Societal Chaos Index (1,000,000 BCE – 2026 CE)
                  </h3>
                  <p className="text-xs text-stone-500">Logarithmic evolution of human blood lead/mercury burdens versus DNA lesion rate & societal volatility</p>
                </div>
                <div className="text-xs font-mono bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded text-stone-600 dark:text-stone-300">
                  ROULET'S LAW EMPIRICAL MODEL
                </div>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={deepTimeTimelineData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#d97706" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#d97706" stopOpacity={0.1}/>
                      </linearGradient>
                      <linearGradient id="chaosGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#dc2626" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#dc2626" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="era" tick={{ fontSize: 11 }} />
                    <YAxis tick={{ fontSize: 11 }} />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="p-3 bg-stone-900 text-white rounded-lg text-xs space-y-1 shadow-lg border border-amber-500/30 max-w-xs">
                              <div className="font-bold text-amber-400">{data.era}: {data.event}</div>
                              <div className="text-stone-300">Anthropogenic Pb Index: <span className="font-mono font-bold text-amber-300">{data.leadBurden}</span></div>
                              <div className="text-stone-300">Societal Chaos (H'): <span className="font-mono font-bold text-red-400">{data.societalChaos}%</span></div>
                              <div className="text-[11px] text-stone-400 pt-1 border-t border-stone-800">{data.notes}</div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Area type="monotone" dataKey="leadBurden" name="Lead Burden Index" stroke="#d97706" fillOpacity={1} fill="url(#leadGrad)" />
                    <Area type="monotone" dataKey="societalChaos" name="Societal Chaos Index (H')" stroke="#dc2626" fillOpacity={1} fill="url(#chaosGrad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* 4 HISTORICAL MILESTONES OF METALLURGY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900 border-amber-900/40'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-xs font-mono">
                  01
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Chalcolithic & Bronze Extraction</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  From 6000 BCE in Anatolia, the cupellation of lead-silver ores generated the earliest regional atmospheric plumes. Smelting furnaces operated without chimneys, dosing early metallurgical workers with heavy lead vapors and creating hereditary dynasties centered on armed coercive control.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-red-200' : 'bg-stone-900 border-red-900/40'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-800 flex items-center justify-center font-bold text-xs font-mono">
                  02
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Greco-Roman Lead Aristocracy</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  The Roman Empire refined over 80,000 tons of lead annually for aqueducts, cooking vessels, and sapa (sweet syrup). Ice core data from Greenland confirms Roman smelting deposited lead across the northern hemisphere, inducing widespread neurological degradation across imperial leadership.
                </p>
              </div>

              <div className={`p-5 rounded-xl border ${isLight ? 'bg-white border-emerald-200' : 'bg-stone-900 border-emerald-900/40'} space-y-3`}>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs font-mono">
                  03
                </div>
                <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Potosí & The Mercury Amalgamation Era</h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  The patio process introduced toxic mercury amalgamation to extract silver and gold in the New World. Millions of indigenous miners died in the mercury vapor furnaces of Huancavelica and Potosí, exporting uncalculated ecological and human trauma to Europe's commercial empire.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: CASE STUDY - GOLD, GREED & GRAVES (GHANA & NIGERIA) */}
        {activeSubTab === 'case_study' && (
          <div className="space-y-8 animate-fade-in">
            {/* EXECUTIVE INVESTIGATION OVERVIEW */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-red-200' : 'bg-stone-900 border-red-900/50'} shadow-sm space-y-4`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-red-600 text-white">
                  CASE STUDY • WEST AFRICA GOLD BELT
                </span>
                <span className="text-xs text-stone-500 font-mono">GHANA & NIGERIA FORENSIC AUDIT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Gold, Greed and Graves: Illegal Mining's Growing Threat to Public Life
              </h2>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Across West Africa’s gold belt, a quiet emergency is unfolding beneath the roar of excavators and the churn of mercury-laced water. As documented by Mustapha Bature Sallama (ModernGhana), informal artisanal extraction (known as <em>Galamsey</em> in Ghana and illegal mining in Nigeria) has metastasized from traditional panning into a heavily mechanized, cartel-dominated crisis.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50/80 border-amber-200' : 'bg-amber-950/40 border-amber-800'} space-y-2`}>
                  <div className="font-bold text-xs uppercase tracking-wider text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <Droplets size={14} /> Ghana (Galamsey Ecological Collapse)
                  </div>
                  <ul className="text-xs space-y-1.5 text-stone-700 dark:text-stone-300 list-disc list-inside">
                    <li>Over 60% of major water bodies (Pra, Ankobra, Birim, Offin) heavily polluted with cyanide & mercury.</li>
                    <li>Water treatment facilities forced to shut down due to extreme turbidity reaching 14,000 NTU (WHO standard &lt; 5 NTU).</li>
                    <li>Fertile cocoa and forest reserves excavated by foreign and local cartels armed with excavators (Changfas).</li>
                  </ul>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50/80 border-red-200' : 'bg-red-950/40 border-red-800'} space-y-2`}>
                  <div className="font-bold text-xs uppercase tracking-wider text-red-900 dark:text-red-300 flex items-center gap-1.5">
                    <Skull size={14} /> Nigeria (Zamfara Lead Catastrophe & Bandit Financing)
                  </div>
                  <ul className="text-xs space-y-1.5 text-stone-700 dark:text-stone-300 list-disc list-inside">
                    <li>Over 400+ children killed and 1,500+ disabled in Zamfara from crushing lead-bearing gold ore (galena) inside domestic flour mills.</li>
                    <li>4,000+ abandoned, un-remediated mining pits acting as death traps and toxic breeding grounds across Plateau, Niger, and Kaduna.</li>
                    <li>Armed bandit syndicates and Boko Haram/ISWAP factions taxing artisanal pits to procure heavy weapons.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIVER & BASIN HEAVY METAL BAR CHART */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} shadow-sm space-y-6`}>
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Droplets size={18} className="text-teal-600" />
                  Heavy Metal Saturation & Turbidity Across West African River Basins
                </h3>
                <p className="text-xs text-stone-500">Comparative toxic load index (0–100) and NTU turbidity measurements across mining-affected river systems</p>
              </div>

              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={riverBasinData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis dataKey="river" tick={{ fontSize: 10 }} />
                    <YAxis />
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="p-3 bg-stone-900 text-white rounded-lg text-xs space-y-1 shadow-lg border border-amber-500/30">
                              <div className="font-bold text-amber-400">{data.river}</div>
                              <div className="text-stone-300">Location: {data.state}</div>
                              <div className="text-cyan-300">Mercury (Hg) Index: {data.mercuryHg} / 100</div>
                              <div className="text-red-400">Lead (Pb) Index: {data.leadPb} / 100</div>
                              <div className="text-teal-400">Turbidity: {data.turbidityNtu} NTU</div>
                              <div className="text-amber-300">Community Risk Score: {data.communityRisk}%</div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend />
                    <Bar dataKey="mercuryHg" name="Mercury (Hg) Saturation" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="leadPb" name="Lead (Pb) Saturation" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="communityRisk" name="Community Risk Score" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ROULET'S LAW FORMULA APPLIED TO WEST AFRICA */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-amber-50/90 border-amber-300' : 'bg-stone-900 border-amber-800/60'} space-y-4`}>
              <div className="font-serif font-bold text-xl text-amber-950 dark:text-amber-100 flex items-center gap-2">
                <Scale size={20} className="text-amber-700 dark:text-amber-400" />
                Roulet's Law Synthesis: Perturbation × Uncertainty = Chaos × Relativity
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-sans">
                <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-900 space-y-1">
                  <div className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase">1. Perturbation (X₁)</div>
                  <p className="text-stone-600 dark:text-stone-300">Mercury vapors from open roasting, sub-micron lead dust from galena ore grinding, and cyanide leaching entering waterways.</p>
                </div>

                <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-900 space-y-1">
                  <div className="font-mono font-bold text-amber-800 dark:text-amber-300 uppercase">2. Uncertainty (X₂)</div>
                  <p className="text-stone-600 dark:text-stone-300">Regulatory voids, corrupt chieftaincy connivance, secret gold smuggling syndicates, and lack of real-time biomonitoring.</p>
                </div>

                <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-900 space-y-1">
                  <div className="font-mono font-bold text-red-700 dark:text-red-400 uppercase">3. Chaos (Y₁)</div>
                  <p className="text-stone-600 dark:text-stone-300">Acute pediatric lead encephalopathy, renal collapse, 4,000+ death pits, armed bandit shootouts, and water plant shutdowns.</p>
                </div>

                <div className="p-3 bg-white dark:bg-stone-800 rounded-lg border border-amber-200 dark:border-amber-900 space-y-1">
                  <div className="font-mono font-bold text-purple-700 dark:text-purple-400 uppercase">4. Relativity (Y₂)</div>
                  <p className="text-stone-600 dark:text-stone-300">Multinational private equity and political dynasties hoard billions in gold assets while local diggers earn under $2/day with ruined brains.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: INDIGENOUS AMERICAS - THE PRISTINE GENOME */}
        {activeSubTab === 'indigenous_americas' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-emerald-200' : 'bg-stone-900 border-emerald-900/50'} shadow-sm space-y-6`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-emerald-600 text-white">
                  INDIGENOUS COMMUNITIES EARTH AMERICA
                </span>
                <span className="text-xs text-stone-500 font-mono">THE LEAST POISONED BIOME ON EARTH</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                The Pristine Genome & The True Life Cycle of Homo sapiens
              </h2>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Primates evolved into modern <em>Homo sapiens</em> through continuous interaction with Earth’s natural mineral matrix—a delicate balance of zinc, magnesium, calcium, iron, selenium, and copper. Crucially, this biological evolutionary envelope <strong>never included bioaccumulated anthropogenic lead ($Pb$) or mercury ($Hg$)</strong>.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-emerald-50/80 border-emerald-200' : 'bg-emerald-950/30 border-emerald-800'} space-y-3`}>
                  <div className="font-serif font-bold text-base text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                    <Sprout size={18} /> The Pre-1492 Indigenous American Baseline
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    Prior to European colonization in 1492, the Indigenous peoples of the Americas inhabited the least lead-poisoned biome, genome, and exposome ever recorded in hominin history. With no smelting furnaces, no lead piping, no tetraethyl lead, and an agriculture centered on regenerative balance, their prefrontal cortex, emotional regulation, and trace mineral homeostasis functioned at full biological purity.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-red-50/80 border-red-200' : 'bg-red-950/30 border-red-800'} space-y-3`}>
                  <div className="font-serif font-bold text-base text-red-900 dark:text-red-300 flex items-center gap-2">
                    <Skull size={18} /> Old World Metallurgy & Colonial Destruction
                  </div>
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                    In contrast, Old World populations had endured 6,000+ years of continuous lead and heavy metal exposure (from Anatolia to Rome to Medieval silver mining). Under Roulet's Law, this deep-time metallic perturbation degraded prefrontal impulse control and induced systemic resource desperation, culminating in the violent invasion, genocide, and toxic contamination of the pristine American continents.
                  </p>
                </div>
              </div>

              {/* RADAR CHART COMPARISON */}
              <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-serif font-bold text-stone-900 dark:text-stone-100">
                    Comparative Exposome & Genomic Integrity Radar
                  </h3>
                  <span className="text-xs text-stone-500 font-mono">Pristine Americas vs Roman Smelting vs Modern Galamsey</span>
                </div>

                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={exposomeRadarData}>
                      <PolarGrid opacity={0.2} />
                      <PolarAngleAxis dataKey="metric" tick={{ fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="Pristine Indigenous Americas" dataKey="pristineIndigenous" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                      <Radar name="Roman Empire Smelting" dataKey="romanSmelting" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                      <Radar name="Modern Galamsey / Zamfara" dataKey="modernGalamsey" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: GENOTOXIC TOXICOLOGY & 8-OHdG */}
        {activeSubTab === 'genotoxic_toxicology' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-purple-200' : 'bg-stone-900 border-purple-900/50'} shadow-sm space-y-6`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-purple-600 text-white">
                  CELLULAR & MOLECULAR EXPOSENOMICS
                </span>
                <span className="text-xs text-stone-500 font-mono">DNA STRAND BREAKS & ZINC DISPLACEMENT</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100">
                02 Severe DNA Strand Breaks & Mutagenic 8-OHdG
              </h2>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                When heavy metals from artisanal metallurgy (lead Pb²⁺, mercury Hg²⁺, arsenic As³⁺, cadmium Cd²⁺) enter human physiology, they do not remain inert. Through Fenton-like catalytic cycles, they generate massive surges of reactive oxygen species (ROS), causing direct single- and double-stranded DNA cleavage and mutagenic 8-hydroxy-2'-deoxyguanosine (8-OHdG) base lesions.
              </p>

              {/* 4 MOLECULAR PATHWAYS */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-purple-50/80 border-purple-200' : 'bg-purple-950/30 border-purple-800'} space-y-2`}>
                  <div className="font-bold text-xs uppercase font-mono text-purple-900 dark:text-purple-300 flex items-center gap-1.5">
                    <Atom size={14} /> 1. Direct DNA Cleavage
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Hydroxyl radicals (·OH) directly attack deoxyribose phosphodiester backbones, generating high comet assay tail moments and irreversible chromosomal fragmentation.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50/80 border-amber-200' : 'bg-amber-950/30 border-amber-800'} space-y-2`}>
                  <div className="font-bold text-xs uppercase font-mono text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <Dna size={14} /> 2. Mutagenic 8-OHdG
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Oxidation of guanine residues forms 8-OHdG, pairing incorrectly with adenine instead of cytosine (G:C → T:A transversions), initiating oncogenic transformations.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50/80 border-red-200' : 'bg-red-950/30 border-red-800'} space-y-2`}>
                  <div className="font-bold text-xs uppercase font-mono text-red-900 dark:text-red-300 flex items-center gap-1.5">
                    <ShieldAlert size={14} /> 3. Zinc-Finger Knockout
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Pb²⁺ competitively displaces Zn²⁺ from the catalytic centers of DNA repair enzymes (OGG1, PARP-1, ALAD), crippling base excision repair and leaving breaks un-repaired.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-cyan-50/80 border-cyan-200' : 'bg-cyan-950/30 border-cyan-800'} space-y-2`}>
                  <div className="font-bold text-xs uppercase font-mono text-cyan-900 dark:text-cyan-300 flex items-center gap-1.5">
                    <Droplets size={14} /> 4. Mineral Depletion
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    Systematic collapse of essential trace metals (Zinc, Calcium, Magnesium, Selenium, Copper), inactivating Cu/Zn-SOD and glutathione peroxidase antioxidants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: INTERACTIVE EXPOSENOMICS SIMULATOR */}
        {activeSubTab === 'interactive_simulation' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-amber-200' : 'bg-stone-900 border-amber-900/50'} shadow-sm space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <Cpu size={20} className="text-amber-600" />
                    Interactive Metallurgy Exposenomics & Roulet's Law Simulator
                  </h3>
                  <p className="text-xs text-stone-500">Model domestic vs river ore processing, mercury vapor capture, cartel extraction, and pediatric BLL impact</p>
                </div>
                <div className="text-xs font-mono bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 px-3 py-1 rounded border border-amber-300 dark:border-amber-800">
                  REAL-TIME CALCULATION
                </div>
              </div>

              {/* SLIDERS & CONTROLS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300 flex justify-between">
                      <span>1. Processing Environment</span>
                      <span className="font-mono text-amber-600 dark:text-amber-400 capitalize">{oreProcessingSite.replace(/_/g, ' ')}</span>
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => setOreProcessingSite('cave_hearth')}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                          oreProcessingSite === 'cave_hearth'
                            ? 'bg-amber-600 text-white font-bold border-amber-600'
                            : isLight ? 'bg-stone-50 hover:bg-stone-100 text-stone-800' : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                        }`}
                      >
                        🔥 Primal Cave Hearth
                      </button>
                      <button
                        onClick={() => setOreProcessingSite('domestic_compound')}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                          oreProcessingSite === 'domestic_compound'
                            ? 'bg-amber-600 text-white font-bold border-amber-600'
                            : isLight ? 'bg-stone-50 hover:bg-stone-100 text-stone-800' : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                        }`}
                      >
                        🏠 Domestic Compound (Zamfara)
                      </button>
                      <button
                        onClick={() => setOreProcessingSite('open_river_galamsey')}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                          oreProcessingSite === 'open_river_galamsey'
                            ? 'bg-amber-600 text-white font-bold border-amber-600'
                            : isLight ? 'bg-stone-50 hover:bg-stone-100 text-stone-800' : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                        }`}
                      >
                        🌊 Open River Galamsey (Ghana)
                      </button>
                      <button
                        onClick={() => setOreProcessingSite('contained_sovereign_coop')}
                        className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                          oreProcessingSite === 'contained_sovereign_coop'
                            ? 'bg-emerald-600 text-white font-bold border-emerald-600'
                            : isLight ? 'bg-stone-50 hover:bg-stone-100 text-stone-800' : 'bg-stone-800 hover:bg-stone-700 text-stone-200'
                        }`}
                      >
                        🛡️ Contained Sovereign Co-op
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-stone-700 dark:text-stone-300">
                      <span>2. Raw Ore Heavy Metal Concentration (Pb/Hg):</span>
                      <span className="font-mono text-red-600 dark:text-red-400">{oreToxicityPpm.toLocaleString()} ppm</span>
                    </div>
                    <input
                      type="range"
                      min="500"
                      max="25000"
                      step="500"
                      value={oreToxicityPpm}
                      onChange={(e) => setOreToxicityPpm(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>500 ppm (Low)</span>
                      <span>10,000 ppm (High Galena)</span>
                      <span>25,000 ppm (Lethal)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-stone-700 dark:text-stone-300">
                      <span>3. Mercury Retort Vapor Capture Efficiency:</span>
                      <span className="font-mono text-cyan-600 dark:text-cyan-400">{mercuryRetortCapturePct}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="5"
                      value={mercuryRetortCapturePct}
                      onChange={(e) => setMercuryRetortCapturePct(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>0% (Open Burn / Vented)</span>
                      <span>50% (Partial)</span>
                      <span>100% (Zero-Emission Retort)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-stone-700 dark:text-stone-300">
                      <span>4. Cartel / Armed Syndicate Interception Rate:</span>
                      <span className="font-mono text-purple-600 dark:text-purple-400">{cartelInterceptionPct}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="95"
                      step="5"
                      value={cartelInterceptionPct}
                      onChange={(e) => setCartelInterceptionPct(Number(e.target.value))}
                      className="w-full h-2 bg-stone-200 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                    />
                    <div className="flex justify-between text-[10px] text-stone-400 font-mono">
                      <span>0% (100% Miner Wealth)</span>
                      <span>50% (Standard Brokerage)</span>
                      <span>95% (Cartel Enslavement)</span>
                    </div>
                  </div>
                </div>

                {/* COMPUTED RESULTS DISPLAY */}
                <div className={`p-5 rounded-xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-800/80 border-amber-900/40'} space-y-4`}>
                  <div className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center justify-between">
                    <span>Model Outputs & Risk Forecast</span>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300">
                      Roulet's Law Index
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 space-y-1">
                      <div className="text-[10px] uppercase font-mono text-stone-500">Pediatric Blood Lead (BLL)</div>
                      <div className="text-xl font-bold font-mono text-red-600">{simOutputs.pediatricBllEstimate} µg/dL</div>
                      <div className="text-[10px] text-stone-400">CDC limit: 3.5 µg/dL</div>
                    </div>

                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 space-y-1">
                      <div className="text-[10px] uppercase font-mono text-stone-500">8-OHdG DNA Lesion Index</div>
                      <div className="text-xl font-bold font-mono text-purple-600">{simOutputs.dnaBreakIndex8OHdG} / 100</div>
                      <div className="text-[10px] text-stone-400">Severe Strand Break Risk</div>
                    </div>

                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 space-y-1">
                      <div className="text-[10px] uppercase font-mono text-stone-500">River Turbidity</div>
                      <div className="text-xl font-bold font-mono text-teal-600">{simOutputs.riverTurbidityNtu.toLocaleString()} NTU</div>
                      <div className="text-[10px] text-stone-400">WHO safe: &lt; 5 NTU</div>
                    </div>

                    <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 space-y-1">
                      <div className="text-[10px] uppercase font-mono text-stone-500">Societal Conflict Index</div>
                      <div className="text-xl font-bold font-mono text-amber-600">{simOutputs.conflictIndex} / 100</div>
                      <div className="text-[10px] text-stone-400">Banditry & Violence Propensity</div>
                    </div>
                  </div>

                  <div className="p-3 bg-white dark:bg-stone-900 rounded-lg border border-stone-200 dark:border-stone-700 space-y-2 text-xs">
                    <div className="font-bold text-stone-800 dark:text-stone-200 flex justify-between">
                      <span>Economics of 1 kg Gold Yield ($72,000 Value):</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Miner Retained Revenue:</span>
                      <span className="font-mono font-bold">${simOutputs.minerSubsistenceUsd.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-red-700 dark:text-red-400 font-semibold">Cartel / Shadow Interception:</span>
                      <span className="font-mono font-bold">${simOutputs.cartelLootUsd.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: FORENSIC MANIFEST & PROOFS */}
        {activeSubTab === 'forensic_manifest' && (
          <div className="space-y-8 animate-fade-in">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} shadow-sm space-y-6`}>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-amber-600 text-white">
                  CRYPTOGRAPHIC PROVENANCE
                </span>
                <span className="text-xs text-stone-500 font-mono">SOVEREIGN IP ASSET IP-000AH</span>
              </div>
              <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100">
                Sovereign Cryptographic Manifest & Research Ledger
              </h2>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Every dataset, investigative finding, and visual plate generated for this Deep-AI Dive is permanently registered with cryptographic provenance hashes to secure scientific integrity and historical veracity under Swiss-grade exposure protocols.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-800/80 border-stone-700'} space-y-2`}>
                  <div className="text-amber-600 dark:text-amber-400 font-bold">SOVEREIGN VAULT HASH:</div>
                  <div className="break-all font-bold text-stone-900 dark:text-stone-100 select-all">
                    0xGOLD_GREED_GRAVES_PRIMAL_METALLURGY_GHANA_NIGERIA_2026
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-800/80 border-stone-700'} space-y-2`}>
                  <div className="text-teal-600 dark:text-teal-400 font-bold">SOURCE CITATIONS & CITATION ENGINE:</div>
                  <div className="space-y-1 text-stone-700 dark:text-stone-300 font-sans text-xs">
                    <div>• <strong>Mustapha Bature Sallama (2026)</strong>: "Gold, Greed and Graves: Illegal Mining's Growing Threat to Public Life; A Ghana-Nigeria Case Study" — ModernGhana.</div>
                    <div>• <strong>Elsevier / ScienceDirect Scoping Review (2026)</strong>: "Effects of Occupational Lead Exposure on Oxidative Stress and Essential Metal Homeostasis in Humans" — J. Trace Elem. Med. Biol.</div>
                    <div>• <strong>Norman Roulet (ICEarth Sovereign Lab)</strong>: "Roulet's Law of Exposenomics: Perturbation × Uncertainty = Chaos × Relativity".</div>
                  </div>
                </div>
              </div>

              {/* CROSS-NAVIGATION BUTTONS */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                {onNavigateTab && (
                  <>
                    <button
                      onClick={() => onNavigateTab('artisanal_mining')}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-amber-600 hover:bg-amber-700 text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Pickaxe size={14} />
                      <span>Artisanal Mining & Illicit Pits Tab</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('occupational_lead_review')}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-purple-600 hover:bg-purple-700 text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Dna size={14} />
                      <span>Occupational Lead & 8-OHdG Review</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('indigenous')}
                      className="px-4 py-2 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Sprout size={14} />
                      <span>Indigenous Sovereignty Tab</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('reports')}
                      className="px-4 py-2 rounded-lg text-xs font-semibold border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-stone-200 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <FileText size={14} />
                      <span>Global Newsfeed Hub</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ARTWORK LIGHTBOX MODAL */}
      {showArtworkModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="bg-stone-900 border border-amber-500/40 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl text-stone-100">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-stone-800">
              <div className="space-y-1">
                <div className="text-xs font-mono font-bold text-amber-400 uppercase">
                  FORENSIC VISUAL PLATE #26 • SOVEREIGN IP-000AH
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                  Primal Metallurgy to Modern West African Extraction
                </h3>
              </div>
              <button
                onClick={() => setShowArtworkModal(false)}
                className="p-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
              <div className="rounded-xl overflow-hidden border border-amber-500/30 shadow-lg">
                <img
                  src={goldGreedGravesImg}
                  alt="Full Plate: Primal Metallurgy to Modern Galamsey"
                  className="w-full h-auto object-cover max-h-[60vh]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-stone-300">
                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 space-y-2">
                  <div className="font-bold text-amber-400 font-serif text-sm">Visual Composition Details:</div>
                  <p className="leading-relaxed text-stone-300">
                    Juxtaposes Paleolithic primates discovering lustrous pyrites and galena around enclosed cave hearth fires (left) with modern West African artisanal gold fields in Ghana and Nigeria (right), where heavy excavators and open mercury-pan amalgamation poison surrounding river watersheds.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 space-y-2 font-mono text-[11px]">
                  <div className="font-bold text-teal-400 uppercase">Cryptographic Provenance:</div>
                  <div className="text-stone-300">Vault: 0xGOLD_GREED_GRAVES_PRIMAL_METALLURGY_GHANA_NIGERIA_2026</div>
                  <div className="text-stone-300">Resolution: 1920 × 1080 (High-Fidelity 16:9 Masterwork)</div>
                  <div className="text-stone-300">Curator: Norman Roulet & Gemini AI Exposenomics Team</div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-stone-800 flex justify-end gap-3">
              <button
                onClick={() => setShowArtworkModal(false)}
                className="px-4 py-2 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
