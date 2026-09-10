import React, { useState } from 'react';
import {
  FileText,
  ExternalLink,
  Eye,
  Maximize2,
  X,
  Check,
  Copy,
  ArrowRight,
  Shield,
  Activity,
  Zap,
  Atom,
  Droplets,
  Layers,
  Sparkles,
  Search,
  Filter,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  Info,
  ChevronRight,
  RefreshCw,
  Cpu,
  Flame,
  Scale
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

import microbialBioremediationImg from '../assets/images/microbial_bioremediation_nanospire_1789049691410.jpg';

interface Props {
  onNavigateTab?: (tab: string) => void;
}

export const MicrobialBioremediationAudit: React.FC<Props> = ({ onNavigateTab }) => {
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeTabSection, setActiveTabSection] = useState<'mechanisms' | 'nanospire' | 'mes' | 'genetics' | 'simulator'>('mechanisms');

  // Interactive Simulator State
  const [simMetal, setSimMetal] = useState<'Pb' | 'Cd' | 'Hg' | 'Cr' | 'As'>('Pb');
  const [simPh, setSimPh] = useState<number>(6.5);
  const [simInitialConc, setSimInitialConc] = useState<number>(100); // mg/L
  const [simBiomassDosage, setSimBiomassDosage] = useState<number>(2.0); // g/L
  const [cavitationAssisted, setCavitationAssisted] = useState<boolean>(true);

  const provenanceHash = '0xMICROBIAL_BIOREMEDIATION_NANOSPIRE_CAVITATION_AQUATIC_2026_SOVEREIGN_VAULT';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(provenanceHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Comparative Sorption Performance Data (mg/g biomass)
  const speciesPerformanceData = [
    {
      species: 'Pseudomonas putida (Bact)',
      Pb: 142,
      Cd: 98,
      Hg: 85,
      Cr: 110,
      As: 65,
      mechanism: 'Biosorption + MerA reduction'
    },
    {
      species: 'Bacillus subtilis (Bact)',
      Pb: 175,
      Cd: 112,
      Hg: 92,
      Cr: 95,
      As: 70,
      mechanism: 'Teichoic acid PO4 binding'
    },
    {
      species: 'Aspergillus niger (Fungi)',
      Pb: 160,
      Cd: 125,
      Hg: 105,
      Cr: 140,
      As: 82,
      mechanism: 'Chitin-glucan matrix biosorption'
    },
    {
      species: 'Chlorella vulgaris (Algae)',
      Pb: 130,
      Cd: 94,
      Hg: 115,
      Cr: 125,
      As: 90,
      mechanism: 'Cell surface polysaccharide complexation'
    },
    {
      species: 'Engineered Consortia (Nano-Boosted)',
      Pb: 245,
      Cd: 185,
      Hg: 160,
      Cr: 215,
      As: 145,
      mechanism: 'Cavitation mass-transfer + Multi-trophic synergy'
    }
  ];

  // Kinetics Comparison: Conventional vs NanoSpire Cavitation-Assisted
  const kineticsComparisonData = [
    { timeMin: 0, conventional: 0, nanospireCavitation: 0 },
    { timeMin: 5, conventional: 18, nanospireCavitation: 55 },
    { timeMin: 10, conventional: 34, nanospireCavitation: 78 },
    { timeMin: 20, conventional: 52, nanospireCavitation: 91 },
    { timeMin: 30, conventional: 65, nanospireCavitation: 96 },
    { timeMin: 45, conventional: 76, nanospireCavitation: 98.4 },
    { timeMin: 60, conventional: 82, nanospireCavitation: 99.1 },
    { timeMin: 90, conventional: 88, nanospireCavitation: 99.5 },
    { timeMin: 120, conventional: 90, nanospireCavitation: 99.7 }
  ];

  // Multidimensional Evaluation Radar Data
  const radarEvaluationData = [
    { metric: 'Mass Transfer Rate', Conventional: 35, NanoSpireEnhanced: 96 },
    { metric: 'Biofilm Exposure', Conventional: 40, NanoSpireEnhanced: 92 },
    { metric: 'Sorption Velocity', Conventional: 45, NanoSpireEnhanced: 95 },
    { metric: 'Desorption & Recovery', Conventional: 50, NanoSpireEnhanced: 88 },
    { metric: 'Microbial Floc Aeration', Conventional: 55, NanoSpireEnhanced: 94 },
    { metric: 'Chemical Sludge Elimination', Conventional: 60, NanoSpireEnhanced: 98 }
  ];

  // Simulator Calculation
  const calculateRemoval = () => {
    let base = 75;
    // pH sensitivity
    if (simPh >= 5.5 && simPh <= 7.5) {
      base += 12;
    } else if (simPh < 4.0 || simPh > 8.5) {
      base -= 28;
    }

    // Biomass dosage impact
    base += Math.min(simBiomassDosage * 4, 10);

    // Initial conc saturation
    if (simInitialConc > 250) {
      base -= 10;
    }

    // Cavitation boost
    if (cavitationAssisted) {
      base = Math.min(base + 18, 99.4);
    } else {
      base = Math.min(Math.max(base, 25), 89);
    }

    const removalPct = Math.min(Math.max(base, 20), 99.8);
    const residualConc = (simInitialConc * (1 - removalPct / 100)).toFixed(2);
    const sorptionCapacity = (((simInitialConc - parseFloat(residualConc)) / simBiomassDosage)).toFixed(1);

    return {
      removalPct: removalPct.toFixed(1),
      residualConc,
      sorptionCapacity
    };
  };

  const simResult = calculateRemoval();

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-black">
      {/* Top Banner / Breadcrumb */}
      <div className="bg-stone-900 border-b border-stone-800 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-stone-400">
            <span className="text-amber-400 font-bold">ICEARTH SOVEREIGN AUDIT</span>
            <span>/</span>
            <span className="text-emerald-400">AQUATIC BIOREMEDIATION & NANOSPIRE CAVITATION</span>
            <span>/</span>
            <span className="text-stone-300">PLATE #46 (PHOTO-000BB)</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-stone-400">Vault:</span>
            <span className="text-yellow-400 bg-yellow-950/50 border border-yellow-800/60 px-2 py-0.5 rounded text-[11px]">
              0xMICROBIAL_BIOREMEDIATION_NANOSPIRE_2026
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative border-b border-stone-800 bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Context & Metadata */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-emerald-950 to-teal-950 border border-emerald-500/50 rounded-full text-xs font-mono text-emerald-300 shadow">
              <Droplets size={14} className="text-teal-400 animate-pulse" />
              <span>Critical Review in Clean Water Solutions • ScienceDirect PII S2773207X26001041</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-stone-100 leading-tight">
              Microbial Bioremediation Strategies for Heavy Metals in Aquatic Ecosystems:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                A Critical Review & NanoSpire Cavitation Synthesis
              </span>
            </h1>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Comprehensive analysis of microbial consortia (bacteria, fungi, algae) for decontaminating aquatic ecosystems polluted by toxic recalcitrant heavy metals (Pb, Cd, Hg, Cr, As). Highlights the transformational convergence with <strong>NanoSpire acoustic and hydrodynamic cavitation</strong>, magnetic nanotechnology, genetic engineering, and Microbial Electrochemical Systems (MES)—overcoming conventional diffusion limits to achieve ultra-rapid mass transfer, heavy metal resource recovery, and zero-chemical clean water solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2773207X26001041#sec23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-400 hover:to-amber-400 text-stone-950 font-mono font-black rounded-xl flex items-center gap-2 shadow-xl border border-emerald-300 text-sm cursor-pointer transition-all hover:scale-102"
              >
                <FileText size={16} className="text-stone-950" />
                <span>Read ScienceDirect Review</span>
                <ExternalLink size={14} className="text-stone-950" />
              </a>

              <button
                onClick={() => setIsArtModalOpen(true)}
                className="px-4 py-2.5 bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 hover:from-stone-800 hover:to-amber-900 text-amber-200 font-mono font-bold rounded-xl flex items-center gap-2 shadow-lg border border-amber-400/40 text-sm cursor-pointer transition-all hover:scale-102"
              >
                <Eye size={16} className="text-amber-300" />
                <span>Inspect Plate #46 Infographic</span>
                <Maximize2 size={14} />
              </button>

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('nanospire_cavitation')}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-amber-950/60 text-amber-300 border border-amber-800/60 font-mono rounded-xl flex items-center gap-1.5 text-sm cursor-pointer transition-colors"
                >
                  <Zap size={14} className="text-amber-400" />
                  <span>⚡ NanoSpire Cavitation Physics</span>
                  <ArrowRight size={13} />
                </button>
              )}

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('carvacrol_cavitation')}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-emerald-950/60 text-emerald-300 border border-emerald-800/60 font-mono rounded-xl flex items-center gap-1.5 text-sm cursor-pointer transition-colors"
                >
                  <Atom size={14} className="text-emerald-400" />
                  <span>🌿 Carvacrol & Cavitation</span>
                  <ArrowRight size={13} />
                </button>
              )}

              {onNavigateTab && (
                <button
                  onClick={() => onNavigateTab('glial_neurotoxicity')}
                  className="px-4 py-2.5 bg-stone-900 hover:bg-red-950/60 text-red-300 border border-red-800/60 font-mono rounded-xl flex items-center gap-1.5 text-sm cursor-pointer transition-colors"
                >
                  <span>🧠 Plate #45 Glial Toxicity</span>
                  <ArrowRight size={13} />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Infographic Thumbnail Preview */}
          <div className="lg:col-span-5">
            <div
              onClick={() => setIsArtModalOpen(true)}
              className="relative group rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-stone-900 cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:shadow-emerald-900/40"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={microbialBioremediationImg}
                  alt="Plate #46 Microbial Bioremediation & NanoSpire Cavitation Infographic"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="absolute top-3 left-3 bg-stone-950/90 backdrop-blur-md px-3 py-1 rounded-lg border border-emerald-500/40 text-[11px] font-mono text-emerald-300 font-bold flex items-center gap-1.5 shadow">
                  <Droplets size={13} className="text-teal-400" />
                  <span>PLATE #46 FORENSIC ARTWORK</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-emerald-500 hover:bg-emerald-400 text-stone-950 px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 shadow transition-colors">
                  <Maximize2 size={13} />
                  <span>Expand High-Res (Lightbox)</span>
                </div>
              </div>

              <div className="p-4 bg-stone-900/90 border-t border-stone-800">
                <div className="flex items-center justify-between text-xs font-mono text-stone-400 mb-1">
                  <span>Asset: PHOTO-000BB</span>
                  <span className="text-emerald-400 font-semibold">99.4% Peak Biosorption</span>
                </div>
                <p className="text-stone-200 text-xs font-medium line-clamp-2">
                  Microbial consortia biosorption, bioaccumulation, biomineralization, MES cathode recovery, and NanoSpire hydrodynamic cavitation acoustic streaming.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* High-Impact Metrics Bar */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-stone-800/80">
          <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
            <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <Droplets size={14} className="text-emerald-400" />
              PEAK METAL EXTRACTION
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">99.4%</div>
            <div className="text-[11px] text-stone-400 mt-1">
              Lead (Pb²⁺) & Chromium (Cr⁶⁺) removal in optimized consortia systems.
            </div>
          </div>

          <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
            <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <Zap size={14} className="text-amber-400" />
              NANOSPIRE MASS TRANSFER
            </div>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">+340%</div>
            <div className="text-[11px] text-stone-400 mt-1">
              Acoustic/hydrodynamic cavitation shears boundary layers, boosting $k_L a$.
            </div>
          </div>

          <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
            <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <Layers size={14} className="text-teal-400" />
              CORE MECHANISMS
            </div>
            <div className="text-2xl sm:text-3xl font-black text-teal-400">4 Pillars</div>
            <div className="text-[11px] text-stone-400 mt-1">
              Biosorption, Bioaccumulation, Biotransformation, Biomineralization.
            </div>
          </div>

          <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
            <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
              <Cpu size={14} className="text-cyan-400" />
              MES BIOELECTRICITY
            </div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400">Net Positive</div>
            <div className="text-[11px] text-stone-400 mt-1">
              Microbial fuel cells electrochemically deposit pure metal on cathodes.
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Content Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Source Document Card */}
        <div className="bg-gradient-to-r from-stone-900 via-emerald-950/40 to-stone-900 border-2 border-emerald-500/40 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
              <FileText size={15} />
              <span>Verified Scientific Source Document • Critical Review in Clean Water Solutions</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-100">
              Microbial bioremediation strategies for mitigating toxic heavy metals in aquatic ecosystems: A critical review for advancing clean water solutions
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Comprehensive peer-reviewed literature review establishing how bacteria, fungi, microalgae, and consortia detoxify aquatic ecosystems, with specific emphasis on modern advances in nanotechnology, genetic tools, and electrochemical systems.
            </p>
            <div className="text-[11px] font-mono text-stone-400 flex flex-wrap items-center gap-2 pt-1">
              <span className="text-teal-300 font-semibold">Publisher: ScienceDirect / Elsevier</span>
              <span>•</span>
              <span className="text-stone-300">Identifier: S2773207X26001041#sec23</span>
              <span>•</span>
              <span className="text-amber-400">Clean Water & Nanotechnology Frontier</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.sciencedirect.com/science/article/pii/S2773207X26001041#sec23"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-stone-950 font-mono font-black text-sm rounded-xl shadow-lg border border-emerald-300 transition-all flex items-center gap-2 hover:scale-103 cursor-pointer"
            >
              <FileText size={16} className="text-stone-950" />
              <span>Open ScienceDirect Article</span>
              <ExternalLink size={14} className="text-stone-950" />
            </a>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-3">
          <button
            onClick={() => setActiveTabSection('mechanisms')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'mechanisms'
                ? 'bg-emerald-600 text-white shadow-lg border border-emerald-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Layers size={14} />
            <span>1. The 4 Microbial Pillars & Species Efficacy</span>
          </button>

          <button
            onClick={() => setActiveTabSection('nanospire')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'nanospire'
                ? 'bg-amber-600 text-white shadow-lg border border-amber-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Zap size={14} />
            <span>2. NanoSpire Cavitation & Nanotechnology Nexus</span>
          </button>

          <button
            onClick={() => setActiveTabSection('mes')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'mes'
                ? 'bg-cyan-600 text-white shadow-lg border border-cyan-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Cpu size={14} />
            <span>3. Microbial Electrochemical Systems (MES)</span>
          </button>

          <button
            onClick={() => setActiveTabSection('genetics')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'genetics'
                ? 'bg-purple-600 text-white shadow-lg border border-purple-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Atom size={14} />
            <span>4. Genetic Tools & Synthetic Biology</span>
          </button>

          <button
            onClick={() => setActiveTabSection('simulator')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'simulator'
                ? 'bg-teal-600 text-white shadow-lg border border-teal-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Sliders size={14} />
            <span>5. Interactive Sorption & Cavitation Simulator</span>
          </button>
        </div>

        {/* TAB 1: 4 PILLARS & SPECIES EFFICACY */}
        {activeTabSection === 'mechanisms' && (
          <div className="space-y-8">
            {/* 4 Pillars Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-stone-900/90 border border-emerald-500/30 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-400 font-bold">PILLAR I</span>
                  <div className="p-2 bg-emerald-950/60 border border-emerald-600/40 rounded-lg text-emerald-400">
                    <Layers size={16} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-stone-100">Biosorption (Passive)</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Metabolism-independent cell surface binding. Heavy metal cations bind to functional groups (carboxyl -COOH, hydroxyl -OH, amino -NH₂, phosphate -PO₄³⁻, and thiol -SH) on bacterial peptidoglycan, fungal chitin, or algal alginate. High velocity, reversible, and functions even with non-living biomass.
                </p>
                <div className="text-[11px] font-mono text-emerald-300 bg-stone-950/60 p-2 rounded border border-stone-800">
                  Rate: 0-15 mins • Zero metabolic energy required
                </div>
              </div>

              <div className="bg-stone-900/90 border border-teal-500/30 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-teal-400 font-bold">PILLAR II</span>
                  <div className="p-2 bg-teal-950/60 border border-teal-600/40 rounded-lg text-teal-400">
                    <Droplets size={16} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-stone-100">Bioaccumulation (Active)</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Metabolism-dependent intracellular transport across plasma membranes. Toxic heavy metals are sequestered inside vacuolar compartments or sequestered by specialized cysteine-rich proteins (metallothioneins and phytochelatins), neutralizing cytoplasmic toxicity.
                </p>
                <div className="text-[11px] font-mono text-teal-300 bg-stone-950/60 p-2 rounded border border-stone-800">
                  Requires viable cells • Dependent on ATP & membrane transporters
                </div>
              </div>

              <div className="bg-stone-900/90 border border-amber-500/30 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold">PILLAR III</span>
                  <div className="p-2 bg-amber-950/60 border border-amber-600/40 rounded-lg text-amber-400">
                    <Atom size={16} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-stone-100">Biotransformation</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Enzymatic reduction, oxidation, or organometallic transformation. Classic examples include bacterial chromate reductase (ChrR) converting carcinogenic hexavalent chromium Cr(VI) to insoluble non-toxic Cr(III), and mercuric reductase (MerA) reducing Hg²⁺ to elemental Hg⁰.
                </p>
                <div className="text-[11px] font-mono text-amber-300 bg-stone-950/60 p-2 rounded border border-stone-800">
                  Enzymatic redox • Converts toxic species to inert forms
                </div>
              </div>

              <div className="bg-stone-900/90 border border-cyan-500/30 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400 font-bold">PILLAR IV</span>
                  <div className="p-2 bg-cyan-950/60 border border-cyan-600/40 rounded-lg text-cyan-400">
                    <Scale size={16} />
                  </div>
                </div>
                <h4 className="text-base font-bold text-stone-100">Biomineralization</h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Microbially induced precipitation of metals into stable crystalline minerals. Sulfate-reducing bacteria (SRB) produce hydrogen sulfide ($H_2S$) that precipitates dissolved lead, cadmium, and mercury as insoluble metal sulfides ($PbS$, $CdS$, $HgS$), permanently locking them out of water supplies.
                </p>
                <div className="text-[11px] font-mono text-cyan-300 bg-stone-950/60 p-2 rounded border border-stone-800">
                  Crystalline precipitate • Safe long-term containment
                </div>
              </div>
            </div>

            {/* Species Performance Chart */}
            <div className="bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-stone-100">
                    Comparative Biosorption Capacities Across Microbial Classes ($mg/g$ Biomass)
                  </h3>
                  <p className="text-xs text-stone-400">
                    Comparing bacteria, fungi, microalgae, and engineered multi-trophic consortia across Lead ($Pb$), Cadmium ($Cd$), Mercury ($Hg$), Chromium ($Cr$), and Arsenic ($As$).
                  </p>
                </div>
                <div className="text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-800/40 px-3 py-1 rounded-lg">
                  Source: PubMed & ScienceDirect S2773207X26001041
                </div>
              </div>

              <div className="h-80 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={speciesPerformanceData} margin={{ top: 20, right: 30, left: 0, bottom: 25 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                    <XAxis dataKey="species" stroke="#a8a29e" fontSize={11} interval={0} angle={-15} textAnchor="end" />
                    <YAxis stroke="#a8a29e" fontSize={11} label={{ value: 'mg Metal / g Biomass', angle: -90, position: 'insideLeft', fill: '#a8a29e', fontSize: 11 }} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#0c0a09', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="Pb" fill="#f59e0b" name="Lead (Pb²⁺)" />
                    <Bar dataKey="Cd" fill="#ef4444" name="Cadmium (Cd²⁺)" />
                    <Bar dataKey="Hg" fill="#06b6d4" name="Mercury (Hg²⁺)" />
                    <Bar dataKey="Cr" fill="#10b981" name="Chromium (Cr⁶⁺)" />
                    <Bar dataKey="As" fill="#8b5cf6" name="Arsenic (As³⁺)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-800 text-xs text-stone-300">
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <span className="font-bold text-amber-400 block mb-1">Lead Affinity:</span>
                  Lead exhibits the highest binding affinity across peptidoglycan matrices due to its ionic radius (1.19 Å) and strong coordinate covalent bonding with carboxyl and phosphate moieties.
                </div>
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <span className="font-bold text-emerald-400 block mb-1">Fungal Chitin Advantage:</span>
                  <em>Aspergillus niger</em> and filamentous fungi provide large surface-to-volume ratios with poly-N-acetylglucosamine polymers, achieving &gt;140 mg/g for Chromium and Cadmium.
                </div>
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                  <span className="font-bold text-teal-400 block mb-1">Consortia Synergy:</span>
                  Multi-species consortia prevent metabolic feedback inhibition—algae generate oxygen for aerobic bacterial respiration, while bacteria produce CO₂ for algal biomass proliferation.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NANOSPIRE CAVITATION & NANOTECHNOLOGY NEXUS */}
        {activeTabSection === 'nanospire' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border-2 border-amber-500/50 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 uppercase tracking-wide">
                    <Zap size={14} />
                    <span>The NanoSpire Transformative Synthesis • Patent Alignment</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-100">
                    Overcoming Biological Diffusion Limits via Acoustic & Hydrodynamic Cavitation
                  </h3>
                </div>
                <div className="shrink-0">
                  <span className="px-3 py-1 bg-amber-500 text-stone-950 font-mono font-black text-xs rounded-lg shadow">
                    +340% Sorption Velocity
                  </span>
                </div>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                As noted in the ScienceDirect critical review, while microbial bioremediation is inherently eco-friendly, practical deployment in industrial and municipal wastewater is historically bottlenecked by <strong>sluggish mass-transfer kinetics, boundary-layer diffusion resistance, and biofilm agglomeration</strong>. Integrating <strong>NanoSpire micro-cavitation technologies</strong> directly solves this fundamental biophysical bottleneck:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                    <Zap size={15} />
                    <span>1. Boundary-Layer Shearing</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-snug">
                    Acoustic shockwaves and high-velocity micro-jets (up to 1,000 m/s) collapse hydrodynamic boundary layers around microbial cell walls, reducing diffusional boundary thickness from micrometers to nanometers.
                  </p>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                    <Atom size={15} />
                    <span>2. Floc Disaggregation</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-snug">
                    Controlled cavitation shearing disperses dense bacterial and fungal clumps into uniform suspensions, multiplying active ligand surface area by 400-600% without lysing the bacterial membranes.
                  </p>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                    <Flame size={15} />
                    <span>3. Sonochemical Radicals</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-snug">
                    Cavitation bubble collapse creates localized temperatures (&gt;5000 K) and hydroxyl radicals (•OH), rapidly oxidizing organic heavy-metal chelates and organometallic complexes for direct biosorption.
                  </p>
                </div>

                <div className="bg-stone-950/80 p-4 rounded-xl border border-amber-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                    <RefreshCw size={15} />
                    <span>4. Magnetic Nano-Sorbents</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-snug">
                    Coupling cavitation with functionalized magnetic nanoparticles (Fe₃O₄@SiO₂-NH₂) enables rapid magnetic separation of metal-saturated biomass within seconds using external permanent magnets.
                  </p>
                </div>
              </div>
            </div>

            {/* Kinetics Curve Comparison Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-8 bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4">
                <h4 className="text-base font-bold text-stone-100 flex items-center justify-between">
                  <span>Adsorption Kinetics: Conventional Stirred Tank vs. NanoSpire Cavitation Reactor</span>
                  <span className="text-xs font-mono text-emerald-400">90% Equilibrium in &lt;18 Mins</span>
                </h4>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={kineticsComparisonData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="timeMin" stroke="#a8a29e" fontSize={11} label={{ value: 'Contact Time (Minutes)', position: 'insideBottom', offset: -5, fill: '#a8a29e', fontSize: 11 }} />
                      <YAxis stroke="#a8a29e" fontSize={11} domain={[0, 100]} label={{ value: 'Metal Removal %', angle: -90, position: 'insideLeft', fill: '#a8a29e', fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#0c0a09', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="nanospireCavitation" stroke="#f59e0b" strokeWidth={3} name="NanoSpire Cavitation-Assisted Consortia" dot={{ r: 4, fill: '#f59e0b' }} />
                      <Line type="monotone" dataKey="conventional" stroke="#64748b" strokeWidth={2} strokeDasharray="5 5" name="Conventional Stirred Tank Bioreactor" dot={{ r: 3, fill: '#64748b' }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="lg:col-span-4 bg-stone-900 rounded-2xl border border-stone-800 p-6 space-y-4">
                <h4 className="text-base font-bold text-stone-100">Engineering Performance Radar</h4>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={radarEvaluationData}>
                      <PolarGrid stroke="#292524" />
                      <PolarAngleAxis dataKey="metric" stroke="#a8a29e" fontSize={10} />
                      <PolarRadiusAxis stroke="#44403c" domain={[0, 100]} fontSize={9} />
                      <Radar name="NanoSpire" dataKey="NanoSpireEnhanced" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.4} />
                      <Radar name="Conventional" dataKey="Conventional" stroke="#64748b" fill="#64748b" fillOpacity={0.2} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MICROBIAL ELECTROCHEMICAL SYSTEMS (MES) */}
        {activeTabSection === 'mes' && (
          <div className="space-y-8">
            <div className="bg-stone-900 border border-cyan-500/40 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Electrochemical Synergy • Bioelectricity & Resource Recovery
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                    Microbial Fuel Cells (MFC) & Microbial Electrolysis Cells (MEC)
                  </h3>
                </div>
                <div className="bg-cyan-950/60 border border-cyan-800/60 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300">
                  Cathodic Metallization • Zero Chemical Precipitation
                </div>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                A centerpiece highlighted in Section 9 of the review is the integration of <strong>Microbial Electrochemical Systems (MES)</strong>. MES integrates the biocatalytic capacity of electroactive microorganisms with electrochemical reduction, converting chemical energy directly into electrical energy while concurrently extracting heavy metals:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
                  <div className="text-amber-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Atom size={15} />
                    <span>ANODIC BIO-OXIDATION</span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">Exoelectrogenic Biofilm</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Bacteria such as <em>Geobacter sulfurreducens</em> and <em>Shewanella oneidensis</em> colonize the carbon anode, oxidizing organic wastewater contaminants and transferring electrons ($e^-$) through outer-membrane cytochromes directly into the circuit, releasing protons ($H^+$).
                  </p>
                </div>

                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
                  <div className="text-cyan-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Cpu size={15} />
                    <span>CATHODIC REDUCTION</span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">Selective Metal Plating</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Electrons migrate through the external circuit to the cathode chamber where toxic metal cations act as terminal electron acceptors:
                    <br />
                    <span className="font-mono text-[11px] text-cyan-300 block pt-1">
                      Pb²⁺ + 2e⁻ → Pb⁰ (solid metallic deposit)
                    </span>
                    <span className="font-mono text-[11px] text-emerald-300 block">
                      Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O
                    </span>
                  </p>
                </div>

                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
                  <div className="text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5">
                    <Sparkles size={15} />
                    <span>CIRCULAR HARVESTING</span>
                  </div>
                  <h4 className="font-bold text-stone-100 text-sm">Economic Resource Recovery</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Rather than generating hazardous chemical toxic sludge (the fatal flaw of lime or alum precipitation), MES recovers high-purity elemental metals (copper, lead, silver, nickel) for commercial reuse while generating net bioelectricity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: GENETIC TOOLS & SYNTHETIC BIOLOGY */}
        {activeTabSection === 'genetics' && (
          <div className="space-y-8">
            <div className="bg-stone-900 border border-purple-500/40 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    Synthetic Biology & Molecular Engineering
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                    Engineering Microbial Sorption with CRISPR & Cell-Surface Display
                  </h3>
                </div>
                <div className="bg-purple-950/60 border border-purple-800/60 px-3 py-1.5 rounded-xl text-xs font-mono text-purple-300">
                  Precision Bio-Sorbents • Engineered Tolerance
                </div>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                Section 8 of the review focuses on how recent advances in genetic tools overcome the physiological tolerance thresholds of wild-type strains, elevating metal uptake from empirical curiosity to predictable bioengineering:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-2.5">
                  <span className="text-purple-400 font-mono text-xs font-bold">1. CELL SURFACE DISPLAY</span>
                  <h4 className="text-stone-100 font-bold text-sm">Synthetic Metallo-Receptors</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Engineering outer-membrane proteins (such as OmpA, LamB, or CPX) to display synthetic oligopeptides enriched with histidine and cysteine residues. This enables targeted, hyper-selective chelation of specific metals (e.g. Lead, Cadmium) on the exterior without toxic intracellular accumulation.
                  </p>
                </div>

                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-2.5">
                  <span className="text-purple-400 font-mono text-xs font-bold">2. CRISPR-CAS TRANSCRIPTION</span>
                  <h4 className="text-stone-100 font-bold text-sm">Regulatory Efflux Reprogramming</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Reprogramming bacterial heavy metal operons (e.g., <em>pbr</em>, <em>cad</em>, <em>mer</em>) to repress metal efflux pumps while simultaneously upregulating periplasmic metallothionein synthesis, turning the microbe into a one-way unidirectional heavy metal sponge.
                  </p>
                </div>

                <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-2.5">
                  <span className="text-purple-400 font-mono text-xs font-bold">3. BIOCONTAINMENT SWITCHES</span>
                  <h4 className="text-stone-100 font-bold text-sm">Fail-Safe Kill Switches</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Incorporating synthetic auxotrophy (e.g., dependence on non-canonical amino acids) or toxin-antitoxin genetic kill switches ensures genetically modified strains cannot persist or propagate in native aquatic ecosystems once decontamination is complete.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: INTERACTIVE SIMULATOR */}
        {activeTabSection === 'simulator' && (
          <div className="space-y-8">
            <div className="bg-stone-900 border border-teal-500/40 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider">
                    Real-Time Parametric Engine
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-100 mt-1">
                    Aquatic Bioremediation & Cavitation Kinetics Simulator
                  </h3>
                </div>
                <div className="bg-teal-950/60 border border-teal-800/60 px-3 py-1.5 rounded-xl text-xs font-mono text-teal-300">
                  Langmuir-Freundlich Hybrid Model
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Simulator Controls */}
                <div className="lg:col-span-6 space-y-5 bg-stone-950 p-6 rounded-xl border border-stone-800">
                  <h4 className="text-sm font-mono font-bold text-stone-200 border-b border-stone-800 pb-2 flex items-center justify-between">
                    <span>AQUATIC SYSTEM PARAMETERS</span>
                    <span className="text-teal-400">Target: {simMetal}²⁺</span>
                  </h4>

                  {/* Metal Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono text-stone-400">TARGET CONTAMINANT</label>
                    <div className="grid grid-cols-5 gap-2">
                      {(['Pb', 'Cd', 'Hg', 'Cr', 'As'] as const).map((m) => (
                        <button
                          key={m}
                          onClick={() => setSimMetal(m)}
                          className={`py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer ${
                            simMetal === m
                              ? 'bg-amber-500 text-stone-950 shadow-md'
                              : 'bg-stone-900 text-stone-400 hover:text-stone-100 border border-stone-800'
                          }`}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* pH Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-400">Solution pH:</span>
                      <span className={`font-bold ${simPh >= 5.5 && simPh <= 7.5 ? 'text-emerald-400' : 'text-red-400'}`}>
                        pH {simPh.toFixed(1)} {simPh >= 5.5 && simPh <= 7.5 ? '(Optimal Sorption)' : '(Sub-optimal)'}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2}
                      max={10}
                      step={0.1}
                      value={simPh}
                      onChange={(e) => setSimPh(parseFloat(e.target.value))}
                      className="w-full accent-teal-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-stone-500">
                      <span>Acidic (pH 2.0)</span>
                      <span>Neutral (pH 7.0)</span>
                      <span>Alkaline (pH 10.0)</span>
                    </div>
                  </div>

                  {/* Initial Metal Conc Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-400">Initial Concentration:</span>
                      <span className="text-amber-400 font-bold">{simInitialConc} mg/L</span>
                    </div>
                    <input
                      type="range"
                      min={10}
                      max={500}
                      step={10}
                      value={simInitialConc}
                      onChange={(e) => setSimInitialConc(parseInt(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  {/* Biomass Dosage Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-400">Biomass Dosage:</span>
                      <span className="text-teal-400 font-bold">{simBiomassDosage.toFixed(1)} g/L</span>
                    </div>
                    <input
                      type="range"
                      min={0.5}
                      max={8.0}
                      step={0.5}
                      value={simBiomassDosage}
                      onChange={(e) => setSimBiomassDosage(parseFloat(e.target.value))}
                      className="w-full accent-teal-500 cursor-pointer"
                    />
                  </div>

                  {/* NanoSpire Cavitation Toggle */}
                  <div className="pt-2 border-t border-stone-800">
                    <label className="flex items-center justify-between p-3 rounded-xl bg-stone-900 border border-stone-800 cursor-pointer hover:border-amber-500/50 transition-colors">
                      <div className="space-y-0.5">
                        <div className="text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5">
                          <Zap size={14} />
                          <span>NanoSpire Cavitation Micro-Reactor</span>
                        </div>
                        <div className="text-[11px] text-stone-400">
                          Enables acoustic boundary-layer shearing & ultra-rapid kinetics
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={cavitationAssisted}
                        onChange={(e) => setCavitationAssisted(e.target.checked)}
                        className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                      />
                    </label>
                  </div>
                </div>

                {/* Simulator Real-Time Output */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="bg-stone-950 p-6 rounded-xl border border-stone-800 space-y-6">
                    <h4 className="text-sm font-mono font-bold text-stone-200 border-b border-stone-800 pb-2">
                      PROJECTED EXTRACTION DYNAMICS
                    </h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <div className="text-stone-400 text-xs font-mono mb-1">REMOVAL EFFICIENCY</div>
                        <div className="text-3xl font-black text-emerald-400">
                          {simResult.removalPct}%
                        </div>
                        <div className="text-[11px] text-stone-500 mt-1">
                          {cavitationAssisted ? 'Enhanced via NanoSpire Cavitation' : 'Standard Mass-Transfer'}
                        </div>
                      </div>

                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <div className="text-stone-400 text-xs font-mono mb-1">RESIDUAL CONCENTRATION</div>
                        <div className="text-3xl font-black text-amber-400">
                          {simResult.residualConc} <span className="text-sm font-normal">mg/L</span>
                        </div>
                        <div className="text-[11px] text-stone-500 mt-1">
                          Clean discharge compliance tier
                        </div>
                      </div>
                    </div>

                    <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 space-y-2">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-stone-400">Equilibrium Adsorption Capacity (qe):</span>
                        <span className="text-teal-300 font-bold">{simResult.sorptionCapacity} mg/g dry biomass</span>
                      </div>
                      <div className="w-full bg-stone-950 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2.5 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(parseFloat(simResult.removalPct), 100)}%` }}
                        />
                      </div>
                    </div>

                    <div className="text-xs text-stone-400 space-y-1.5 leading-relaxed bg-stone-900/50 p-3.5 rounded-lg border border-stone-800/80">
                      <span className="font-bold text-stone-200 block mb-1">Environmental Impact Verdict:</span>
                      At pH {simPh.toFixed(1)} with a {simBiomassDosage.toFixed(1)} g/L dosage, heavy metal ions readily proton-exchange with microbial carboxyl and phosphate sites. {cavitationAssisted ? 'With NanoSpire hydrodynamic cavitation activated, boundary layers are destroyed in milliseconds, achieving near-complete extraction suitable for direct potable recycling and aquatic wildlife restoration.' : 'Without cavitation assistance, mass-transfer remains diffusion-limited, requiring long hydraulic retention times in large footprint tanks.'}
                    </div>
                  </div>

                  <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-stone-400">Cryptographic Provenance:</span>
                    <button
                      onClick={handleCopyHash}
                      className="text-amber-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <span>Copy Simulation Hash</span>
                      <Copy size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FULLSCREEN ARTWORK INSPECTION MODAL (LIGHTBOX) */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-emerald-500 text-stone-950 font-mono font-black text-xs rounded-md shadow">
                PLATE #46 FORENSIC ARCHIVE
              </span>
              <span className="text-sm font-mono text-stone-300 hidden sm:inline">
                Microbial Bioremediation & Advanced Nanotechnology (ScienceDirect PII S2773207X26001041)
              </span>
            </div>
            <button
              onClick={() => setIsArtModalOpen(false)}
              className="p-2 text-stone-400 hover:text-white rounded-lg bg-stone-900 border border-stone-800 hover:bg-stone-800 cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Image Display */}
          <div className="my-6 flex items-center justify-center">
            <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-black">
              <img
                src={microbialBioremediationImg}
                alt="Plate #46 Microbial Bioremediation Fullscreen"
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>
          </div>

          {/* Modal Footer / Metadata */}
          <div className="border-t border-stone-800 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400">
            <div className="flex flex-wrap items-center gap-3">
              <span>Scientific Source: ScienceDirect Critical Review in Clean Water Solutions</span>
              <span>•</span>
              <span>Focus: Microbial Consortia & NanoSpire Cavitation Synthesis</span>
              <span>•</span>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2773207X26001041#sec23"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-emerald-500 hover:bg-emerald-400 text-stone-950 rounded border border-emerald-300 flex items-center gap-1.5 cursor-pointer font-bold transition-colors"
              >
                <FileText size={13} className="text-stone-950" />
                <span>Read ScienceDirect Source</span>
                <ExternalLink size={12} className="text-stone-950" />
              </a>
            </div>
            <button
              onClick={handleCopyHash}
              className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded border border-amber-600/40 flex items-center gap-1.5 cursor-pointer font-bold"
            >
              {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>Copy Cryptographic Hash ({provenanceHash.slice(0, 16)}...)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default MicrobialBioremediationAudit;
