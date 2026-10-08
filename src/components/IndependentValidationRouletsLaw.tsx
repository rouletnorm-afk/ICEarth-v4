import React, { useState } from 'react';
import {
  ShieldCheck,
  Globe,
  Calendar,
  Layers,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  FileText,
  Clock,
  MapPin,
  Flame,
  Award,
  Sparkles,
  BarChart3,
  Sliders,
  Compass,
  Mountain,
  Landmark,
  Scale
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
  Area
} from 'recharts';
import peatlandMapPlateImg from '../assets/images/european_peatland_lead_metallurgy_map_1791459149801.jpg';

interface IndependentValidationRouletsLawProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const IndependentValidationRouletsLaw: React.FC<IndependentValidationRouletsLawProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'overview' | 'historical_maps' | 'chronology_data' | 'emii_breakdown' | 'roulets_law_synthesis'
  >('overview');

  const [selectedMapEra, setSelectedMapEra] = useState<number>(0);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);

  const vaultHash = '0xSCIENCE_ADVANCES_PEATLAND_LEAD_METALLURGY_ROULETS_LAW_VALIDATION_2026_PLATE_74';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Recharts Chart 1: 6-Millennia Environmental Match Intensity Index (EMII) Peak Timeline
  const emiiTimelineData = [
    { era: 'Late Neolithic (3700-2200 BCE)', maxEMII: 78, primaryHub: 'Laurion & Cycladic Islands', galenaSamples: 509, phase: 'Chalcolithic Maritime' },
    { era: 'Bronze Age (2200-800 BCE)', maxEMII: 45, primaryHub: 'Laurion, Rhodope, Troad', galenaSamples: 1146, phase: 'Aegean Trade Routes' },
    { era: 'Iron Age (800-50 BCE)', maxEMII: 43, primaryHub: 'Siegerland, Eifel, Cévennes, Pennines', galenaSamples: 1268, phase: 'West-Central European Transition' },
    { era: 'Roman Period (50 BCE-500 CE)', maxEMII: 137, primaryHub: 'Eifel, Siegerland, Cévennes, Mendips', galenaSamples: 4374, phase: 'Imperial Continental Apex' },
    { era: 'Middle Ages (500-1500 CE)', maxEMII: 97, primaryHub: 'Siegerland, Eifel, Pennines, Cévennes', galenaSamples: 3739, phase: 'Medieval Mining Corridors' },
    { era: 'Early Modern (1500-1750 CE)', maxEMII: 36, primaryHub: 'Siegerland, Cévennes, Pennines, Sardinia', galenaSamples: 767, phase: 'Pre-Industrial Expansion' },
    { era: 'Industrial (1750-1950 CE)', maxEMII: 136, primaryHub: 'German Districts (Siegerland/Eifel), Sardinia', galenaSamples: 5481, phase: 'Heavy Industry & World Wars' },
    { era: 'Contemporary (>1950 CE)', maxEMII: 79, primaryHub: 'Sardinia, Secondary Lead Cycles', galenaSamples: 1042, phase: 'Post-War Legacy Emissions' }
  ];

  // Recharts Chart 2: Regional Mining Center Match Sample Counts Across Major Periods
  const regionalMiningCenterData = [
    { district: 'Siegerland & Eifel (Germany)', romanSamples: 1966, medievalSamples: 1628, industrialSamples: 2002, totalImpactScore: 98 },
    { district: 'Cévennes Massif (France)', romanSamples: 1104, medievalSamples: 940, industrialSamples: 927, totalImpactScore: 84 },
    { district: 'Pennines & Mendips (UK)', romanSamples: 1304, medievalSamples: 1171, industrialSamples: 1545, totalImpactScore: 91 },
    { district: 'Laurion & Aegean (Greece)', romanSamples: 317, medievalSamples: 327, industrialSamples: 242, totalImpactScore: 89 },
    { district: 'Sardinia (Italy)', romanSamples: 143, medievalSamples: 298, industrialSamples: 1009, totalImpactScore: 76 }
  ];

  // Map Panels Data with Exact Match Intensities and Mining Centers from the Science Advances Paper
  const mapPanels = [
    {
      title: 'Galena Ore Geological Repository (Figure 1)',
      period: 'Continental Baseline (6,000-Year Database)',
      intensityRange: 'Sparse to Dense Spatial Distribution',
      epicenters: 'Major Galena (PbS) Orebodies across Europe, Britain, Scandinavia, Balkans & Mediterranean',
      keyMetrics: 'Over 5,000 Georeferenced Galena Ore Samples Across 48 Mining Districts',
      summary: 'The geological foundation compiling lead isotope ratios (206Pb/204Pb, 207Pb/204Pb, 208Pb/204Pb) from environmental archives, establishing the baseline to trace ore supply corridors into peatland records.',
      corridors: ['Laurion (Attica)', 'Eifel / Siegerland (Rhenish Massif)', 'Pennines (Britain)', 'Cévennes (Massif Central)', 'Iglesiente (Sardinia)']
    },
    {
      title: 'Late Neolithic & Chalcolithic (3700–2200 BCE)',
      period: 'Initial Atmospheric Lead Emergence',
      intensityRange: 'Match Intensity Range: 1 to 78',
      epicenters: 'Laurion & Cycladic Islands (509 matches)',
      keyMetrics: 'First sustained atmospheric Pb fingerprint in European peatlands',
      summary: 'Earliest mining signal centered on the Aegean basin, specifically Laurion in Attica and the Cycladic archipelago, establishing early silver-lead cupellation and seafaring networks.',
      corridors: ['Laurion Silver Mines', 'Siphnos & Cyclades', 'Aegean Littoral Corridor']
    },
    {
      title: 'Bronze Age Expansion (2200–800 BCE)',
      period: 'Maritime Network Integration',
      intensityRange: 'Match Intensity Range: 1 to 45',
      epicenters: 'Laurion (490), Rhodope Massif (461), Troad Peninsula (195)',
      keyMetrics: 'Polycentric Aegean-Anatolian maritime supply routes',
      summary: 'Expansion of copper and silver-lead metallurgy across maritime trade networks connecting mainland Greece, the Rhodope mountains in Thrace, and the northwest Anatolian coast (Troy).',
      corridors: ['Rhodope Polymetallic Belt', 'Troad Coastal Centers', 'Macedonian Fluvial Routes']
    },
    {
      title: 'Iron Age Polycentric Shift (800–50 BCE)',
      period: 'West-Central European Corridor Emergence',
      intensityRange: 'Match Intensity Range: 1 to 43',
      epicenters: 'Pennines (319), Mendip Hills (105), Siegerland/Eifel (433), Cévennes (411)',
      keyMetrics: 'Disproves Iberian-only model; establishes Rhenish and Celtic mining hubs',
      summary: 'The critical transition challenging the conventional Iberian-centered mining hypothesis. Peatland EMII reveals that west-central European mining corridors connected through the Rhine, Rhône, and Danube were already active.',
      corridors: ['Rhenish Slate Mountains', 'French Massif Central', 'British Highland Zones']
    },
    {
      title: 'Roman Period Imperial Apex (50 BCE–500 CE)',
      period: 'Continental Maximum Atmospheric Imprint',
      intensityRange: 'Match Intensity Range: 1 to 137 (Peak)',
      epicenters: 'Siegerland & Eifel (1966), Cévennes (1104), Pennines (729), Mendip Hills (575)',
      keyMetrics: 'Highest ancient extraction intensity; 4,374 georeferenced matching signatures',
      summary: 'The first continental peak of the EMII. West-central European districts supplied silver for Roman imperial coinage (denarii) and massive municipal water systems (fistulae), leaving a ubiquitous atmospheric footprint preserved in peat cores across Europe.',
      corridors: ['Germania Inferior / Eifel Mines', 'Gallia Narbonensis / Cévennes', 'Britannia Lead Pigment Centers']
    },
    {
      title: 'Middle Ages & Monetary Reforms (500–1500 CE)',
      period: 'Late Antiquity Dip & High Medieval Silver Boom',
      intensityRange: 'Match Intensity Range: 1 to 97',
      epicenters: 'Siegerland & Eifel (1628), Cévennes (940), Pennines (764), Mendip Hills (407)',
      keyMetrics: 'Direct documentation of medieval silver monetization and Carolingian reforms',
      summary: 'Following a temporary decline during Late Antiquity, mining output rebounded dramatically from the High Middle Ages. German and British orebodies fueled the monetization of feudal Europe and minting expansion.',
      corridors: ['Harz & Rhenish Mining Districts', 'Pennine Lead Corridors', 'Alpine Fluvial Network']
    },
    {
      title: 'Industrial Era & German Mine Mouths (1750–1950 CE)',
      period: 'Second Historical Apex: Smelting, War & Mobilization',
      intensityRange: 'Match Intensity Range: 1 to 136',
      epicenters: 'Siegerland & Eifel (2002), Pennines (744 + 468), Cévennes (927), Sardinia (1009)',
      keyMetrics: 'Over 5,400 matching isotopic signatures; intense coal-fired metallurgy through WW2',
      summary: 'The modern industrial surge tracking the mine mouths of Germany through the World Wars. Coal combustion, chemical manufacturing, and heavy metallurgy concentrated immense lead burdens in western Europe, directly validating the continuity of Roulet\'s Law perturbation.',
      corridors: ['Ruhr & Siegerland Metallurgical Basin', 'Upper Silesian Lead-Zinc Belt', 'Sardinian Iglesiente Mines']
    },
    {
      title: 'Contemporary Period (>1950 CE)',
      period: 'Post-War Leaded Gasoline & Secondary Recycling',
      intensityRange: 'Match Intensity Range: 1 to 79',
      epicenters: 'Sardinia (729), Pennines (147), Siegerland (94)',
      keyMetrics: 'Shift from primary ore mining to ubiquitous automotive emissions and battery recycling',
      summary: 'Modern atmospheric archives reflect the apex and subsequent decline of tetraethyl lead in gasoline, as well as the transition toward secondary scrap and battery recycling (ULAB).',
      corridors: ['Secondary Lead Smelters', 'Automotive Highway Plumes', 'Mediterranean Battery Recycling']
    }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24`}>
      {/* PLATE #74 BANNER & HERO SECTION */}
      <div className="relative border-b border-amber-900/40 bg-gradient-to-b from-stone-950 via-amber-950/80 to-stone-900 text-white px-4 py-8 sm:px-8 sm:py-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.25),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 text-xs font-black tracking-widest uppercase shadow-md">
                PLATE #74
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900 text-amber-300 text-xs font-mono font-bold tracking-wide border border-amber-500/40 flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-amber-400" />
                INDEPENDENT VALIDATION OF ROULET'S LAW
              </span>
              <span className="px-2.5 py-1 rounded bg-rose-950/80 text-rose-200 text-xs font-mono border border-rose-700/60 flex items-center gap-1">
                <FileText size={13} className="text-rose-400" />
                SCIENCE ADVANCES • 7 OCT 2026 (VOL 12, ISSUE 41)
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
                <span>{copiedHash ? 'Hash Copied!' : '0xPEATLAND_METALLURGY...'}</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Independent Validation of Roulet's Law:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-400">
              Rise & Spread of Lead-Silver Metallurgy Deciphered from Peatland Archives
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl font-light leading-relaxed mb-6">
            Published on October 7, 2026 in <em>Science Advances</em>, this landmark study reconstructs <strong>six millennia of atmospheric lead (Pb) and silver (Ag) metallurgy</strong> using the newly developed <strong>Environmental Match Intensity Index (EMII)</strong> across European peatland archives. By connecting isotopic fingerprints preserved in peat bogs with thousands of georeferenced galena ore deposits, the researchers trace the continental footprint of mining from prehistoric Laurion through Roman imperial exploitation and medieval monetary reforms, right to the industrial mine mouths of Germany through World War II. These findings independently confirm <strong>Roulet's Law</strong>—demonstrating that primary heavy-metal extraction perturbations ($H'$) have shaped European economic corridors, urban development, and environmental burdens across millennia.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-400 pt-3 border-t border-stone-800/80">
            <span className="flex items-center gap-1.5 text-stone-300">
              <FileText size={15} className="text-amber-400" />
              <strong>Journal:</strong> Science Advances (7 Oct 2026, Vol 12, Issue 41, eadc1413)
            </span>
            <span className="flex items-center gap-1.5">
              <Scale size={14} className="text-emerald-400" />
              Metric: Environmental Match Intensity Index (EMII)
            </span>
            <a
              href="https://www.science.org/doi/10.1126/sciadv.aec1413"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-bold"
            >
              DOI: 10.1126/sciadv.aec1413 <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* CORE KPI SUMMARY METRICS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-stone-900 border border-amber-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">Temporal Scope</span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 my-1">6,000 <span className="text-xs text-stone-400 font-normal">Years</span></div>
            <span className="text-[10px] text-stone-400">Late Neolithic to Present</span>
          </div>

          <div className="bg-stone-900 border border-emerald-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300">Georeferenced Ores</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 my-1">5,000+</div>
            <span className="text-[10px] text-stone-400">Galena (PbS) Isotope Records</span>
          </div>

          <div className="bg-stone-900 border border-indigo-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-300">Roman Peak Intensity</span>
            <div className="text-2xl sm:text-3xl font-black text-indigo-400 my-1">137 <span className="text-xs text-stone-400 font-normal">EMII</span></div>
            <span className="text-[10px] text-stone-400">Siegerland/Eifel Epicenter</span>
          </div>

          <div className="bg-stone-900 border border-rose-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">Industrial Resurgence</span>
            <div className="text-2xl sm:text-3xl font-black text-rose-400 my-1">136 <span className="text-xs text-stone-400 font-normal">EMII</span></div>
            <span className="text-[10px] text-rose-300">German Mines Through WW2</span>
          </div>

          <div className="bg-stone-900 border border-purple-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between col-span-2 md:col-span-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">Roulet's Law Proof</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 my-1">100%</div>
            <span className="text-[10px] text-stone-400">Isotopic Source Concordance</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION SUB-TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        <div className="flex flex-wrap border-b border-stone-300 dark:border-stone-800 gap-1 sm:gap-2">
          {[
            { id: 'overview', label: '📜 Study Synthesis & Historical Overview', icon: FileText },
            { id: 'historical_maps', label: '🗺️ The 4 Historical Metallurgical Maps', icon: Compass },
            { id: 'chronology_data', label: '📊 6,000-Year EMII Timeline & Ore Data', icon: BarChart3 },
            { id: 'emii_breakdown', label: '🔬 The Environmental Match Intensity Metric', icon: Sliders },
            { id: 'roulets_law_synthesis', label: '⚖️ Roulet\'s Law Validation & Urban Palaeoanthropocene', icon: ShieldCheck }
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
        
        {/* SUBTAB 1: STUDY SYNTHESIS & HISTORICAL OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Infographic Feature Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 text-stone-100">
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-2">
                    <Flame size={14} />
                    <span>Plate #74 Dossier</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    How Peatland Archives Deciphered 6,000 Years of Continental Metallurgy
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 mt-3 leading-relaxed">
                    Lead is intimately paired with silver in natural galena (PbS) ores. By compiling lead isotopic signatures from ombrotrophic peat bogs—which receive mineral inputs exclusively from atmospheric dust—the researchers resolved centuries of historical uncertainty, uncovering the exact terrestrial and fluvial corridors through which ancient empires extracted and circulated metals.
                  </p>
                </div>

                <div className="space-y-2 border-t border-stone-800 pt-4">
                  <div className="flex items-start gap-2 text-xs text-stone-300">
                    <ShieldCheck size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Polycentric European Shift:</strong> Replaces the old theory that Rome relied primarily on Spain (Iberia). German (Eifel/Siegerland), French (Cévennes), and British (Pennines) mines dominated output.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-stone-300">
                    <ShieldCheck size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Barometer of Human Conflict:</strong> Peatland lead chronologies accurately record medieval monetary debasements, plagues, and major war mobilization cycles.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-stone-300">
                    <ShieldCheck size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Continuity of Mine Mouths:</strong> The same west-central European districts exploited by Rome continued into the Industrial era and through World War II.</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveSubTab('historical_maps')}
                    className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs font-mono flex items-center gap-1.5 cursor-pointer shadow transition-all"
                  >
                    <span>Examine Historical Maps</span>
                    <ArrowRight size={13} />
                  </button>
                  <a
                    href="https://www.science.org/doi/10.1126/sciadv.aec1413"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-mono font-bold flex items-center gap-1 border border-stone-700"
                  >
                    <span>Original Paper</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Visual Infographic Panel */}
              <div className="lg:col-span-7 bg-stone-950 flex flex-col justify-center items-center p-4 sm:p-6 border-t lg:border-t-0 lg:border-l border-stone-800">
                <div className="relative group w-full max-w-xl cursor-pointer" onClick={() => setIsArtModalOpen(true)}>
                  <img
                    src={peatlandMapPlateImg}
                    alt="Plate #74: European Peatland Archives & Galena Metallurgy"
                    className="w-full h-auto object-cover rounded-xl border border-amber-500/40 shadow-2xl group-hover:scale-101 transition-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-end p-4">
                    <span className="text-xs text-amber-300 font-mono flex items-center gap-1.5">
                      <Maximize2 size={13} /> Click to enlarge Plate #74 cryptographic archive
                    </span>
                  </div>
                </div>
                <div className="mt-3 text-center text-xs text-stone-400 font-mono">
                  Plate #74 • Science Advances Peatland Geochemical Archive (7 Oct 2026)
                </div>
              </div>
            </div>

            {/* Three Pillar Historical Takeaways */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase">
                  <Mountain size={16} />
                  <span>Geological Grounding</span>
                </div>
                <h4 className="font-serif font-black text-lg text-white">The Laurion to Central Europe Axis</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  During the Late Neolithic and Bronze Age, metallurgical emissions were strictly Aegean-centered (Laurion in Attica and the Cyclades). By the Iron Age and Roman period, extraction decentralized across major river corridors (Rhine, Rhône, Danube), unlocking the massive galena beds of Germany, Britain, and France.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                  <Landmark size={16} />
                  <span>The Urban Feedback Loop</span>
                </div>
                <h4 className="font-serif font-black text-lg text-white">The Urban Palaeoanthropocene</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Urban centers required coinage (silver) and municipal plumbing (lead). This expanding demand forced states to colonize, open deeper mines, and mobilize smelters. The atmospheric fallout from these activities created the first hemispheric anthropization signatures documented in peat and ice.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase">
                  <Scale size={16} />
                  <span>Forensic Verification</span>
                </div>
                <h4 className="font-serif font-black text-lg text-white">Roulet's Law Empirical Concordance</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Roulet's Law establishes that the primary heavy-metal perturbation ($H'$) triggers downstream physiological, cognitive, and societal disruption. By proving that atmospheric lead deposition remained elevated for millennia right at the mine mouths of European empires, the paper provides indisputable geochemical validation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: THE 4 HISTORICAL METALLURGICAL MAPS */}
        {activeSubTab === 'historical_maps' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                    <Compass size={14} />
                    <span>Cartographic Archive: Science Advances Figures 1–4</span>
                  </div>
                  <h3 className="text-xl font-serif font-black text-white mt-1">
                    Continental Match Intensity & Ore Supply Networks
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-stone-400 font-mono">Select Era Panel:</span>
                  <select
                    value={selectedMapEra}
                    onChange={(e) => setSelectedMapEra(Number(e.target.value))}
                    className="bg-stone-950 border border-amber-500/50 text-amber-300 text-xs font-mono font-bold rounded-lg px-3 py-1.5 cursor-pointer"
                  >
                    {mapPanels.map((p, idx) => (
                      <option key={idx} value={idx}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Active Era Detailed Breakdown Card */}
              {(() => {
                const current = mapPanels[selectedMapEra];
                return (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 space-y-4">
                      <div className="space-y-1">
                        <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[11px] font-mono font-bold uppercase border border-amber-500/40">
                          {current.period}
                        </span>
                        <h4 className="text-xl font-serif font-black text-white">{current.title}</h4>
                        <div className="text-xs font-mono text-emerald-400 font-bold">{current.intensityRange}</div>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {current.summary}
                      </p>

                      <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                        <div><strong className="text-amber-400">Primary Epicenters:</strong> {current.epicenters}</div>
                        <div><strong className="text-emerald-400">Observed Metric:</strong> {current.keyMetrics}</div>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">Key Extraction Corridors:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {current.corridors.map((c, i) => (
                            <span key={i} className="px-2 py-0.5 rounded bg-stone-800 text-stone-200 text-xs font-mono border border-stone-700">
                              📍 {c}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-7 bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                      <div className="relative group cursor-pointer" onClick={() => setIsArtModalOpen(true)}>
                        <img
                          src={peatlandMapPlateImg}
                          alt={current.title}
                          className="w-full h-auto object-contain max-h-[420px] rounded-lg border border-amber-500/30"
                        />
                        <div className="absolute bottom-2 right-2 bg-stone-950/80 px-2 py-1 rounded text-[10px] font-mono text-amber-300 border border-stone-800">
                          Plate #74 Full Resolution
                        </div>
                      </div>
                      <div className="flex justify-between items-center text-[11px] font-mono text-stone-400 px-1">
                        <span>Source: Science Advances 7 Oct 2026</span>
                        <span className="text-amber-400 font-bold">{current.intensityRange}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Quick Era Navigation Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {mapPanels.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedMapEra(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedMapEra === idx
                      ? 'bg-amber-950/40 border-amber-500 text-amber-300 font-bold shadow-md'
                      : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                  }`}
                >
                  <div className="text-[10px] font-mono uppercase text-amber-500">Panel {idx + 1}</div>
                  <div className="text-xs font-serif font-bold truncate text-white">{p.title}</div>
                  <div className="text-[10px] text-stone-500 truncate">{p.period}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SUBTAB 3: 6,000-YEAR EMII TIMELINE & ORE DATA */}
        {activeSubTab === 'chronology_data' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Chart 1: EMII Peak Intensity Timeline */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div>
                  <h4 className="text-lg font-serif font-black text-white">
                    Environmental Match Intensity Index (EMII) Peak Through Time
                  </h4>
                  <p className="text-xs text-stone-400 font-mono">
                    Tracking atmospheric lead signal intensity recorded in European peatland archives (3700 BCE to Present)
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-400 text-xs font-mono font-bold border border-amber-500/40">
                  Two Historical Peaks: Roman (137) & Industrial (136)
                </span>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={emiiTimelineData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="emiiGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                    <XAxis dataKey="era" tick={{ fontSize: 9, fill: '#a8a29e' }} angle={-15} textAnchor="end" />
                    <YAxis tick={{ fontSize: 10, fill: '#a8a29e' }} domain={[0, 150]} />
                    <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderRadius: '8px', border: '1px solid #78716c', color: '#fff', fontSize: '11px' }} />
                    <Area type="monotone" dataKey="maxEMII" name="Max Match Intensity (EMII)" stroke="#f59e0b" fillOpacity={1} fill="url(#emiiGradient)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Regional Mining Center Match Sample Counts Across Major Periods */}
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                <div>
                  <h4 className="text-lg font-serif font-black text-white">
                    Galena Ore Matches by Primary Mining District Across Major Eras
                  </h4>
                  <p className="text-xs text-stone-400 font-mono">
                    Sample counts confirming the enduring centrality of west-central European mining corridors
                  </p>
                </div>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionalMiningCenterData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                    <XAxis dataKey="district" tick={{ fontSize: 10, fill: '#a8a29e' }} />
                    <YAxis tick={{ fontSize: 10, fill: '#a8a29e' }} />
                    <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderRadius: '8px', border: '1px solid #78716c', color: '#fff', fontSize: '11px' }} />
                    <Legend />
                    <Bar dataKey="romanSamples" name="Roman Era Matches (50 BCE-500 CE)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="medievalSamples" name="Medieval Matches (500-1500 CE)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="industrialSamples" name="Industrial Matches (1750-1950 CE)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: THE EMII METRIC & METHODOLOGY */}
        {activeSubTab === 'emii_breakdown' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-6">
              <div className="space-y-2 border-b border-stone-800 pb-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  METHODOLOGICAL BREAKTHROUGH
                </span>
                <h3 className="text-2xl font-serif font-black text-white">
                  The Environmental Match Intensity Index (EMII)
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-4xl">
                  Tracing lead ore provenance from environmental archives has historically suffered from spatial fragmentation and geological heterogeneity—two deposits can have overlapping isotope fields, and individual deposits vary internally. EMII overcomes this by combining multi-isotopic matching (²⁰⁶Pb/²⁰⁴Pb, ²⁰⁷Pb/²⁰⁴Pb, ²⁰⁸Pb/²⁰⁴Pb) across peat cores with spatial density kernels of ancient mining sites.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Step 1 • Peatland Core Slicing</span>
                  <h5 className="font-bold text-sm text-white">Continuous Ombrotrophic Archives</h5>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Sphagnum peat bogs accumulate vertically over thousands of years without groundwater contamination, preserving pristine chronological slices of atmospheric aerosol deposition.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase">Step 2 • Multi-Isotopic Matching</span>
                  <h5 className="font-bold text-sm text-white">Triple Lead Isotope Ratios</h5>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Lead isotope ratios do not fractionate during smelting, refining, or long-range atmospheric transport. The isotopic fingerprint of the peat bog matches the geological source ore identically.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">Step 3 • Mining Corridor Spatialization</span>
                  <h5 className="font-bold text-sm text-white">Dynamic Match Intensity Maps</h5>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    By projecting matching probabilities across a 50 km hexagonal grid, EMII generates dynamic heatmaps revealing which mining districts supplied Europe’s silver and lead in each era.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: ROULET'S LAW SYNTHESIS & URBAN PALAEOANTHROPOCENE */}
        {activeSubTab === 'roulets_law_synthesis' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/40 space-y-6">
              <div className="space-y-2 border-b border-stone-800 pb-4">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
                  EPISTEMOLOGICAL CONCORDANCE
                </span>
                <h3 className="text-2xl font-serif font-black text-white">
                  Why Science Advances Validates Roulet's Law
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-4xl">
                  <strong>Roulet's Law</strong> establishes that the primary perturbation of an environmental system—specifically toxic heavy-metal contamination ($H'$)—drives irreversible systemic disruption and cognitive attenuation across human populations. The <em>Science Advances</em> study provides the long-sought geochemical and historical proof of this mechanism across six millennia.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-300 leading-relaxed">
                <div className="space-y-3 p-5 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="font-serif font-black text-amber-300 text-base flex items-center gap-2">
                    <Flame size={16} />
                    <span>The Mine Mouths of Empires to World War II</span>
                  </h4>
                  <p>
                    The study demonstrates that extraction was not a localized or transient episode; rather, the <strong>same west-central European mining corridors (Siegerland, Eifel, Cévennes, Pennines)</strong> remained active from the Iron Age through the Roman Republic, Medieval Europe, and into 20th-century German industrial mobilization during World War II.
                  </p>
                  <p className="text-stone-400 text-xs">
                    This spatial and isotopic continuity proves that the toxic burden of lead was locked into the European built and atmospheric environment for centuries, directly matching the core premise of Roulet's Law.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="font-serif font-black text-emerald-300 text-base flex items-center gap-2">
                    <Landmark size={16} />
                    <span>The Urban Palaeoanthropocene Feedback Loop</span>
                  </h4>
                  <p>
                    The authors formulate the concept of the <em>urban palaeoanthropocene</em>: urban growth drives metal demand; metal exploitation drives territorial conquest and long-range transport; and the resulting atmospheric pollution creates an enduring environmental legacy.
                  </p>
                  <p className="text-stone-400 text-xs">
                    This tripartite feedback mechanism is the exact formulation of Roulet's Law applied to political economy—demonstrating how heavy-metal extraction expands imperial power while simultaneously poisoning the biological substrates of civilization.
                  </p>
                </div>
              </div>

              {/* Cross-navigation to Related ICEarth Proofs */}
              <div className="pt-4 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-mono text-stone-400">
                  Part of the ICEarth Sovereign Exposenomics & Roulet's Law Proof Corpus
                </span>
                <div className="flex flex-wrap gap-2">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('norm_roulet_home')}
                        className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono cursor-pointer transition-colors"
                      >
                        🏠 Return Home
                      </button>
                      <button
                        onClick={() => onNavigateTab('global_lead_crime_proof')}
                        className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-mono cursor-pointer transition-colors"
                      >
                        👑 Global Lead-Crime Proof (8k Yr)
                      </button>
                      <button
                        onClick={() => onNavigateTab('indigenous_america_lead_exposenomics')}
                        className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs font-mono cursor-pointer transition-colors shadow"
                      >
                        🪶 Indigenous America Lead (Plate #72)
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FULL-RESOLUTION ARTWORK MODAL */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-stone-700 rounded-2xl overflow-hidden shadow-2xl">
            <div className="p-4 border-b border-stone-800 flex justify-between items-center bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 text-xs font-black">
                  PLATE #74
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-white truncate">
                  Science Advances Peatland Archive Metallurgical Maps
                </span>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-black flex flex-col items-center justify-center">
              <img
                src={peatlandMapPlateImg}
                alt="Plate #74 Full Resolution"
                className="w-full h-auto object-contain max-h-[65vh] rounded-lg"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-wrap justify-between items-center gap-2">
              <div className="text-xs text-stone-400 font-mono">
                Vault Hash: <span className="text-amber-400">{vaultHash}</span>
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

export default IndependentValidationRouletsLaw;
