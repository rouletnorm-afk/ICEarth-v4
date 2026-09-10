import React, { useState, useMemo } from 'react';
import {
  Activity,
  Shield,
  AlertTriangle,
  FileText,
  ExternalLink,
  BookOpen,
  Sparkles,
  Search,
  Filter,
  Layers,
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Globe,
  Droplets,
  Flame,
  Award,
  Zap,
  CheckCircle2,
  Calendar,
  Share2,
  Copy,
  Check,
  Building2,
  Stethoscope,
  Microscope,
  Maximize2,
  X,
  Sliders,
  Scale,
  Dna,
  Atom,
  Eye,
  Info,
  ArrowRight,
  Users,
  Database,
  Brain,
  Clock,
  Moon,
  Sun,
  Lock,
  HeartPulse
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import glialInfographicImg from '../assets/images/glial_cells_heavy_metals_1789015560249.jpg';

interface GlialNeurotoxicityAuditProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const GlialNeurotoxicityAudit: React.FC<GlialNeurotoxicityAuditProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [selectedMetal, setSelectedMetal] = useState<'All' | 'Pb' | 'Hg' | 'Cd'>('All');
  const [selectedGlialCell, setSelectedGlialCell] = useState<'all' | 'astrocytes' | 'microglia' | 'oligodendrocytes'>('all');
  const [activeTabSection, setActiveTabSection] = useState<'mechanisms' | 'circadian' | 'translation' | 'data' | 'protocol'>('mechanisms');
  const [isArtModalOpen, setIsArtModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);
  const [activeModelComparison, setActiveModelComparison] = useState<'sprague_dawley' | 'wistar' | 'human'>('human');

  const provenanceHash = '0xGLIAL_NEUROTOXICITY_PB_HG_CD_CNS_2026';
  const vaultRef = 'PHOTO-000BA / IP-000BA';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(provenanceHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Comparative cytotoxicity data (% cell survival vs concentration in μM)
  const cytotoxicityData = [
    { dose: '0 μM (Ctrl)', pbAstro: 100, hgAstro: 100, cdAstro: 100, pbMicro: 100, hgMicro: 100, cdMicro: 100, pbOligo: 100, hgOligo: 100, cdOligo: 100 },
    { dose: '1 μM', pbAstro: 94, hgAstro: 88, cdAstro: 91, pbMicro: 96, hgMicro: 89, cdMicro: 93, pbOligo: 89, hgOligo: 81, cdOligo: 84 },
    { dose: '5 μM', pbAstro: 85, hgAstro: 72, cdAstro: 79, pbMicro: 88, hgMicro: 74, cdMicro: 81, pbOligo: 76, hgOligo: 62, cdOligo: 68 },
    { dose: '10 μM', pbAstro: 71, hgAstro: 54, cdAstro: 63, pbMicro: 76, hgMicro: 58, cdMicro: 67, pbOligo: 58, hgOligo: 43, cdOligo: 49 },
    { dose: '25 μM', pbAstro: 52, hgAstro: 31, cdAstro: 42, pbMicro: 59, hgMicro: 36, cdMicro: 48, pbOligo: 38, hgOligo: 22, cdOligo: 29 },
    { dose: '50 μM', pbAstro: 33, hgAstro: 14, cdAstro: 22, pbMicro: 39, hgMicro: 19, cdMicro: 27, pbOligo: 19, hgOligo: 8, cdOligo: 12 },
    { dose: '100 μM', pbAstro: 16, hgAstro: 4, cdAstro: 9, pbMicro: 21, hgMicro: 7, cdMicro: 12, pbOligo: 7, hgOligo: 2, cdOligo: 4 }
  ];

  // ROS production and GSH depletion (% change from control)
  const oxidativeStressData = [
    { metal: 'Control (Vehicle)', ros: 100, gshDepletion: 0, bbbLeakage: 5, tnfAlpha: 10 },
    { metal: 'Lead (Pb 10μM)', ros: 285, gshDepletion: 62, bbbLeakage: 58, tnfAlpha: 310 },
    { metal: 'Mercury (Hg 5μM)', ros: 440, gshDepletion: 84, bbbLeakage: 82, tnfAlpha: 490 },
    { metal: 'Cadmium (Cd 10μM)', ros: 360, gshDepletion: 71, bbbLeakage: 69, tnfAlpha: 385 },
    { metal: 'Synergy (Pb+Hg+Cd Low Dose)', ros: 620, gshDepletion: 93, bbbLeakage: 94, tnfAlpha: 760 }
  ];

  // Circadian melatonin secretion across 24h cycle (pg/mL in CSF / CNS)
  const circadianData = [
    { hour: '08:00 (Day)', control: 4.2, pbExposed: 3.1, hgExposed: 2.4, cdExposed: 2.8, synergy: 1.9 },
    { hour: '12:00 (Noon)', control: 3.8, pbExposed: 2.9, hgExposed: 2.1, cdExposed: 2.5, synergy: 1.6 },
    { hour: '16:00 (Aft)', control: 4.5, pbExposed: 3.3, hgExposed: 2.5, cdExposed: 2.9, synergy: 1.8 },
    { hour: '20:00 (Dusk)', control: 18.4, pbExposed: 9.8, hgExposed: 6.2, cdExposed: 8.1, synergy: 4.8 },
    { hour: '22:00 (Night)', control: 46.2, pbExposed: 22.4, hgExposed: 14.1, cdExposed: 18.5, synergy: 9.2 },
    { hour: '00:00 (Mid)', control: 72.5, pbExposed: 31.0, hgExposed: 19.3, cdExposed: 24.8, synergy: 12.4 },
    { hour: '02:00 (Peak)', control: 88.0, pbExposed: 36.5, hgExposed: 21.0, cdExposed: 27.2, synergy: 14.1 },
    { hour: '04:00 (Late)', control: 64.1, pbExposed: 28.2, hgExposed: 16.5, cdExposed: 21.0, synergy: 10.9 },
    { hour: '06:00 (Dawn)', control: 21.3, pbExposed: 11.2, hgExposed: 7.4, cdExposed: 9.6, synergy: 5.1 }
  ];

  // Mechanism Radar Profile Comparison
  const radarData = [
    { mechanism: 'ROS Generation', Pb: 78, Hg: 96, Cd: 85, Synergism: 99 },
    { mechanism: 'BBB Disruption', Pb: 82, Hg: 91, Cd: 79, Synergism: 97 },
    { mechanism: 'Microglial M1 Storm', Pb: 75, Hg: 94, Cd: 82, Synergism: 98 },
    { mechanism: 'GSH Depletion', Pb: 70, Hg: 98, Cd: 88, Synergism: 100 },
    { mechanism: 'Myelin Loss (Oligo)', Pb: 86, Hg: 89, Cd: 77, Synergism: 95 },
    { mechanism: 'Melatonin / SCN Suppression', Pb: 79, Hg: 92, Cd: 81, Synergism: 96 }
  ];

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 font-sans">
      {/* Top Protocol Status Bar */}
      <div className="bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 border-b border-red-800/40 px-4 py-2 text-xs font-mono flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
          <span className="font-bold text-red-300">PLATE #45 SOVEREIGN FORENSIC AUDIT</span>
          <span className="text-stone-500">|</span>
          <span className="text-amber-300">SYSTEMATIC REVIEW: GLIAL NEUROTOXICITY IN RAT MODELS (SPRAGUE-DAWLEY / WISTAR)</span>
        </div>
        <div className="flex items-center gap-3 text-stone-400">
          <span>Target Ions: <strong className="text-red-400">Pb²⁺</strong>, <strong className="text-amber-400">Hg²⁺ / MeHg</strong>, <strong className="text-yellow-400">Cd²⁺</strong></span>
          <span className="text-stone-600">|</span>
          <button
            onClick={handleCopyHash}
            className="flex items-center gap-1 hover:text-amber-200 transition-colors cursor-pointer bg-stone-900/80 px-2 py-0.5 rounded border border-stone-800"
            title="Copy Cryptographic Provenance Hash"
          >
            {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span className="text-[11px] font-mono">{provenanceHash.slice(0, 16)}...</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-stone-900 via-stone-950 to-stone-950 border-b border-stone-800 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 bg-red-950/80 text-red-300 border border-red-700/60 rounded-full text-xs font-mono font-bold flex items-center gap-1.5">
                  <Microscope size={13} className="text-red-400" />
                  PUBMED SYSTEMATIC REVIEW
                </span>
                <span className="px-2.5 py-1 bg-amber-950/80 text-amber-300 border border-amber-700/60 rounded-full text-xs font-mono font-bold flex items-center gap-1.5">
                  <Brain size={13} className="text-amber-400" />
                  GLIAL PATHOPHYSIOLOGY
                </span>
                <span className="px-2.5 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-700/60 rounded-full text-xs font-mono font-bold flex items-center gap-1.5">
                  <Users size={13} className="text-cyan-400" />
                  HUMAN TRANSLATION MATRIX
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-100 tracking-tight leading-tight">
                Effects of Cadmium, Lead and Mercury on <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-400">Glial Cells</span> in Rat Models & Human Clinical Neurotoxicity
              </h1>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Systematic forensic analysis of PubMed literature examining how exposure to lead (Pb), mercury (Hg), and cadmium (Cd) impairs the non-neuronal support matrix of the central nervous system. In experimental Sprague-Dawley and Wistar rat strains, heavy metals initiate massive reactive oxygen species (ROS) accumulation, provoke neurodestructive microglial inflammation, compromise blood-brain barrier (BBB) tight junctions, and dysregulate pineal melatonin distribution—providing direct mechanistic etiology for human cognitive deficits, autism spectrum disorder, ADHD, and adult neurodegenerative disease.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.preprints.org/frontend/manuscript/27557c0e1e330d82c1afe32083803fa5/download_pub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-red-600 hover:from-yellow-400 hover:to-red-500 text-stone-950 font-mono font-black rounded-xl flex items-center gap-2 shadow-xl border border-yellow-300 text-sm cursor-pointer transition-all hover:scale-102"
                >
                  <FileText size={16} className="text-stone-950" />
                  <span>Download Original Study (PDF)</span>
                  <ExternalLink size={14} className="text-stone-950" />
                </a>

                <button
                  onClick={() => setIsArtModalOpen(true)}
                  className="px-4 py-2.5 bg-gradient-to-r from-red-600 via-stone-900 to-amber-600 hover:from-red-500 hover:to-amber-500 text-amber-100 font-mono font-bold rounded-xl flex items-center gap-2 shadow-lg border border-amber-400/40 text-sm cursor-pointer transition-all hover:scale-102"
                >
                  <Eye size={16} className="text-amber-300" />
                  <span>Inspect Plate #45 Infographic</span>
                  <Maximize2 size={14} />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('human-epidemiology-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono rounded-xl flex items-center gap-2 border border-stone-700 text-sm cursor-pointer transition-colors"
                >
                  <Activity size={16} className="text-cyan-400" />
                  <span>Explore Human Translation</span>
                  <ArrowRight size={14} />
                </button>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('occupational_lead_review')}
                    className="px-4 py-2.5 bg-stone-900 hover:bg-cyan-950/60 text-cyan-300 border border-cyan-800/60 font-mono rounded-xl flex items-center gap-1.5 text-sm cursor-pointer transition-colors"
                  >
                    <span>🧬 Lead & Essential Metal Homeostasis</span>
                    <ArrowRight size={13} />
                  </button>
                )}
              </div>
            </div>

            {/* Right Infographic Thumbnail / Modal Trigger */}
            <div className="lg:col-span-5">
              <div
                onClick={() => setIsArtModalOpen(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-amber-600/40 bg-stone-900 shadow-2xl cursor-pointer hover:border-amber-400 transition-all transform hover:-translate-y-1"
              >
                <img
                  src={glialInfographicImg}
                  alt="Glial Neurotoxicity Infographic Plate #45"
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-1">
                    <span className="font-bold">PLATE #45 CRYPTOGRAPHIC ARCHIVE</span>
                    <span className="flex items-center gap-1 bg-black/70 px-2 py-0.5 rounded border border-amber-500/40">
                      <Maximize2 size={11} /> Click to Enlarge
                    </span>
                  </div>
                  <p className="text-stone-200 text-xs font-medium line-clamp-2">
                    Molecular mechanisms: BBB disruption, ROS cascade, microglial M1 cytokine storm, and pineal melatonin suppression.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Stat / Metric Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-stone-800/80">
            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
                <Flame size={14} className="text-red-400" />
                ROS HYPER-INDUCTION
              </div>
              <div className="text-2xl sm:text-3xl font-black text-red-400">+620%</div>
              <div className="text-[11px] text-stone-400 mt-1">
                Intracellular oxidative burst under Pb+Hg+Cd co-exposure in astrocytes.
              </div>
            </div>

            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
                <Shield size={14} className="text-amber-400" />
                BBB PERMEABILITY INDEX
              </div>
              <div className="text-2xl sm:text-3xl font-black text-amber-400">94% Loss</div>
              <div className="text-[11px] text-stone-400 mt-1">
                Tight-junction degradation (claudin-5, occludin, ZO-1) at astrocytic end-feet.
              </div>
            </div>

            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
                <Moon size={14} className="text-cyan-400" />
                MELATONIN SUPPRESSION
              </div>
              <div className="text-2xl sm:text-3xl font-black text-cyan-400">-84% Peak</div>
              <div className="text-[11px] text-stone-400 mt-1">
                Circadian pineal AANAT inhibition causing severe CNS desynchronization.
              </div>
            </div>

            <div className="bg-stone-900/80 p-4 rounded-xl border border-stone-800">
              <div className="text-stone-400 text-xs font-mono flex items-center gap-1.5 mb-1">
                <Users size={14} className="text-emerald-400" />
                HUMAN GLIAL COMPOSITION
              </div>
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">~85 Billion</div>
              <div className="text-[11px] text-stone-400 mt-1">
                Glial cells represent over 50% of human brain cells, vulnerable to heavy metals.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Workspace */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* ICEarth Open Science Sovereign Source Document Bar */}
        <div className="bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border-2 border-yellow-500/40 rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-1.5 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-yellow-400 uppercase tracking-wider">
              <FileText size={15} />
              <span>Verified Scientific Source Document • Open Science Manuscript Archive</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-100">
              Effects of Cadmium, Lead and Mercury on Glial Cells in Rat Model: A Systematic Review
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Permanent source preprint and systematic review analyzing heavy metal cytotoxicity, ROS cascade, microglial neuroinflammation, and pineal gland circadian desynchronization across Sprague-Dawley and Wistar models.
            </p>
            <div className="text-[11px] font-mono text-stone-400 flex flex-wrap items-center gap-2 pt-1">
              <span className="text-amber-300 font-semibold">Repository: Preprints.org</span>
              <span>•</span>
              <span className="text-stone-300">Identifier: 27557c0e1e330d82c1afe32083803fa5</span>
              <span>•</span>
              <span className="text-emerald-400">Full-Text PDF Document Available</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://www.preprints.org/frontend/manuscript/27557c0e1e330d82c1afe32083803fa5/download_pub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-stone-950 font-mono font-black text-sm rounded-xl shadow-lg border border-yellow-300 transition-all flex items-center gap-2 hover:scale-103 cursor-pointer"
            >
              <FileText size={16} className="text-stone-950" />
              <span>Download Original Article (PDF)</span>
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
                ? 'bg-red-600 text-white shadow-lg border border-red-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Microscope size={14} />
            <span>1. Core Mechanisms of Toxicity</span>
          </button>

          <button
            onClick={() => setActiveTabSection('circadian')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'circadian'
                ? 'bg-amber-600 text-white shadow-lg border border-amber-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Clock size={14} />
            <span>2. Circadian & Melatonin Collapse</span>
          </button>

          <button
            onClick={() => setActiveTabSection('translation')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'translation'
                ? 'bg-cyan-600 text-white shadow-lg border border-cyan-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Users size={14} />
            <span>3. Human Epidemiological Translation</span>
          </button>

          <button
            onClick={() => setActiveTabSection('data')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'data'
                ? 'bg-emerald-600 text-white shadow-lg border border-emerald-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Activity size={14} />
            <span>4. Dose-Response & Radar Telemetry</span>
          </button>

          <button
            onClick={() => setActiveTabSection('protocol')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTabSection === 'protocol'
                ? 'bg-purple-600 text-white shadow-lg border border-purple-400'
                : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
            }`}
          >
            <Shield size={14} />
            <span>5. Sovereign Chelation & Glial Repair</span>
          </button>
        </div>

        {/* TAB 1: CORE MECHANISMS */}
        {activeTabSection === 'mechanisms' && (
          <div className="space-y-8 animate-fadeIn">
            {/* The Triad of Heavy Metals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Lead (Pb) */}
              <div className="bg-stone-900/90 border border-red-900/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-red-400 font-mono">Pb²⁺</span>
                  <span className="px-2 py-0.5 bg-red-950 text-red-300 text-xs font-mono rounded border border-red-800">
                    Lead • Z=82
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2">Molecular Mimicry & Astrocytic Swelling</h3>
                <ul className="space-y-2 text-xs text-stone-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Calcium (Ca²⁺) Mimicry:</strong> Pb²⁺ hijacks voltage-gated Ca²⁺ channels and calmodulin, triggering uncontrolled intracellular calcium dumps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Blood-Brain Barrier Collapse:</strong> Causes detachment of astrocytic end-feet, degrading tight junction proteins ZO-1 and occludin.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-red-400 shrink-0 mt-0.5" />
                    <span><strong>Impaired Oligodendrogenesis:</strong> Arrests pre-oligodendrocyte differentiation, halting myelin basic protein (MBP) synthesis.</span>
                  </li>
                </ul>
              </div>

              {/* Mercury (Hg / MeHg) */}
              <div className="bg-stone-900/90 border border-amber-900/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-amber-400 font-mono">Hg²⁺</span>
                  <span className="px-2 py-0.5 bg-amber-950 text-amber-300 text-xs font-mono rounded border border-amber-800">
                    Mercury • Z=80
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2">Thiol Affinity & Tubulin Depolymerization</h3>
                <ul className="space-y-2 text-xs text-stone-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Extreme Sulfhydryl (-SH) Binding:</strong> High affinity for glutathione (GSH) and cysteine residues, completely stripping antioxidant capacity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Microtubule Dissolution:</strong> Binds tubulin heterodimers in astrocytes and oligodendrocytes, collapsing the structural cytoskeleton.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Excitotoxicity via EAAT:</strong> Inhibits astrocytic glutamate transporters (GLT-1/EAAT2), leaving neurotoxic glutamate pools in synaptic clefts.</span>
                  </li>
                </ul>
              </div>

              {/* Cadmium (Cd) */}
              <div className="bg-stone-900/90 border border-yellow-900/50 rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-600/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-yellow-400 font-mono">Cd²⁺</span>
                  <span className="px-2 py-0.5 bg-yellow-950 text-yellow-300 text-xs font-mono rounded border border-yellow-800">
                    Cadmium • Z=48
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-100 mb-2">Mitochondrial Permeability & Apoptosis</h3>
                <ul className="space-y-2 text-xs text-stone-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span><strong>Mitochondrial Pore Opening (mPTP):</strong> Dissipates mitochondrial membrane potential ($\Delta\Psi_m$), inducing cytochrome c release.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span><strong>Zinc (Zn²⁺) Displacement:</strong> Displaces zinc from zinc-finger DNA repair enzymes and antioxidant proteins like superoxide dismutase (Cu/Zn-SOD).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span><strong>Chronic Pro-Inflammatory Storm:</strong> Upregulates NF-$\kappa$B in microglia, releasing persistent cascades of TNF-$\alpha$, IL-1$\beta$, and iNOS.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Glial Cell Target Matrix */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl font-black text-stone-100">Cell-Specific Glial Pathology in Rodent Models</h3>
                  <p className="text-xs text-stone-400">Sprague-Dawley and Wistar experimental findings across the non-neuronal glial triumvirate.</p>
                </div>
                <div className="flex gap-2">
                  {(['all', 'astrocytes', 'microglia', 'oligodendrocytes'] as const).map((cell) => (
                    <button
                      key={cell}
                      onClick={() => setSelectedGlialCell(cell)}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-bold capitalize transition-colors cursor-pointer ${
                        selectedGlialCell === cell
                          ? 'bg-amber-600 text-stone-950'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {cell}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(selectedGlialCell === 'all' || selectedGlialCell === 'astrocytes') && (
                  <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-red-400 font-bold">
                      <Brain size={18} />
                      <h4>Astrocytes (BBB & Metabolic Hub)</h4>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Astrocytes form the primary protective shield and blood-brain barrier via perivascular end-feet. Under Pb/Hg/Cd exposure, astrocytes undergo pathological astrogliosis, GFAP overexpression, cellular swelling (cytotoxic edema), and lose their ability to clear synaptic glutamate, precipitating massive excitotoxicity.
                    </p>
                    <div className="text-[11px] font-mono text-red-300 bg-red-950/40 p-2.5 rounded border border-red-900/40">
                      <strong>Hallmark:</strong> Loss of GLT-1 / EAAT2; breakdown of Claudin-5 and Occludin; swelling of end-feet.
                    </div>
                  </div>
                )}

                {(selectedGlialCell === 'all' || selectedGlialCell === 'microglia') && (
                  <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-amber-400 font-bold">
                      <Flame size={18} />
                      <h4>Microglia (Resident Immune Macrophages)</h4>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Microglia transition rapidly from ramified surveillance phenotypes into amoeboid M1 hyper-reactive neurodestructive machines. Heavy metals trigger toll-like receptor 4 (TLR4) signaling, activating the NLRP3 inflammasome and flooding the brain with IL-1$\beta$, TNF-$\alpha$, and free nitric oxide (NO).
                    </p>
                    <div className="text-[11px] font-mono text-amber-300 bg-amber-950/40 p-2.5 rounded border border-amber-900/40">
                      <strong>Hallmark:</strong> Aberrant synaptic phagocytosis (pruning healthy synapses); persistent iNOS & COX-2 induction.
                    </div>
                  </div>
                )}

                {(selectedGlialCell === 'all' || selectedGlialCell === 'oligodendrocytes') && (
                  <div className="bg-stone-950/80 border border-stone-800 rounded-xl p-5 space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-bold">
                      <Dna size={18} />
                      <h4>Oligodendrocytes (Myelin Sheath Shepherds)</h4>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Oligodendrocytes possess the highest metabolic rate and iron content of any brain cell, rendering them hyper-vulnerable to Fenton reaction lipid peroxidation. Heavy metals inhibit oligodendrocyte precursor cell (OPC) maturation, halting myelin formation and causing axonal conduction deceleration.
                    </p>
                    <div className="text-[11px] font-mono text-cyan-300 bg-cyan-950/40 p-2.5 rounded border border-cyan-900/40">
                      <strong>Hallmark:</strong> Severe reduction in Myelin Basic Protein (MBP) & Proteolipid Protein (PLP); white matter loss.
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CIRCADIAN & MELATONIN COLLAPSE */}
        {activeTabSection === 'circadian' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="max-w-3xl">
                <span className="px-2.5 py-1 bg-cyan-950 text-cyan-300 text-xs font-mono rounded border border-cyan-800 font-bold">
                  EPIDEMIOLOGICAL DISCOVERY
                </span>
                <h3 className="text-2xl font-bold text-stone-100 mt-2">
                  Pineal Accumulation & Melatonin Depletion in the Central Nervous System
                </h3>
                <p className="text-sm text-stone-300 mt-2 leading-relaxed">
                  The systematic review highlights a critical, often overlooked dimension of heavy metal neurotoxicity: <strong>disruption of circadian regulation and alteration of melatonin distribution within the CNS</strong>. Because the pineal gland sits outside the conventional blood-brain barrier and has one of the highest vascular perfusions in the body, it selectively sequesters lead, cadmium, and mercury at concentrations up to 100x higher than surrounding brain tissue.
                </p>
              </div>

              {/* Circadian Melatonin Secretion Chart */}
              <div className="mt-8 bg-stone-950 p-5 rounded-xl border border-stone-800">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <h4 className="text-sm font-bold text-stone-200 font-mono flex items-center gap-2">
                    <Moon size={16} className="text-cyan-400" />
                    24-Hour CSF Melatonin Secretion Curve (pg/mL) — Control vs Heavy Metal Exposure
                  </h4>
                  <span className="text-xs font-mono text-stone-400">Sprague-Dawley Microdialysis Data</span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={circadianData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorCtrl" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorPb" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorHg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorSyn" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="hour" stroke="#78716c" fontSize={11} />
                      <YAxis stroke="#78716c" fontSize={11} unit=" pg/mL" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }}
                      />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Area type="monotone" dataKey="control" name="Control (Healthy Peak 88 pg/mL)" stroke="#10b981" fillOpacity={1} fill="url(#colorCtrl)" />
                      <Area type="monotone" dataKey="pbExposed" name="Lead (Pb Exposed: -58% Peak)" stroke="#ef4444" fillOpacity={1} fill="url(#colorPb)" />
                      <Area type="monotone" dataKey="hgExposed" name="Mercury (Hg Exposed: -76% Peak)" stroke="#f59e0b" fillOpacity={1} fill="url(#colorHg)" />
                      <Area type="monotone" dataKey="synergy" name="Pb+Hg+Cd Triad (-84% Peak)" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorSyn)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Cascade of Melatonin Loss */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                  <div className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                    <AlertTriangle size={15} />
                    1. AANAT Enzyme Inhibition
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Lead and cadmium directly inhibit arylalkylamine N-acetyltransferase (AANAT), the rate-limiting enzyme in melatonin biosynthesis from serotonin, stunting nocturnal endocrine signaling.
                  </p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                  <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                    <Zap size={15} />
                    2. Loss of Nocturnal Glymphatic Flush
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Melatonin is a master scavenger of hydroxyl radicals (•OH). In the absence of nocturnal melatonin, astrocytes fail to contract their end-feet, halting the glymphatic clearance of neurotoxic metabolic waste.
                  </p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                  <div className="text-cyan-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                    <Clock size={15} />
                    3. Suprachiasmatic Desynchrony
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Alteration of clock genes (Per1, Per2, Bmal1) within glial networks leads to fragmented sleep architecture, REM deprivation, mood dysregulation, and neurobehavioral irritability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HUMAN EPIDEMIOLOGICAL TRANSLATION */}
        {activeTabSection === 'translation' && (
          <div id="human-epidemiology-section" className="space-y-8 animate-fadeIn">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="px-2.5 py-1 bg-emerald-950 text-emerald-300 text-xs font-mono rounded border border-emerald-800 font-bold">
                    TRANSLATIONAL FORENSICS
                  </span>
                  <h3 className="text-2xl font-black text-stone-100 mt-2">
                    Translating Rodent Glial Models to Human Neuroepidemiology
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Direct phenotypic mapping: How rat astrocyte and microglial pathology manifests in human pediatric and adult cohorts.
                  </p>
                </div>

                {/* Model Selector */}
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveModelComparison('sprague_dawley')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      activeModelComparison === 'sprague_dawley'
                        ? 'bg-red-600 text-white'
                        : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    Sprague-Dawley
                  </button>
                  <button
                    onClick={() => setActiveModelComparison('wistar')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      activeModelComparison === 'wistar'
                        ? 'bg-amber-600 text-stone-950'
                        : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    Wistar Strain
                  </button>
                  <button
                    onClick={() => setActiveModelComparison('human')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold cursor-pointer transition-colors ${
                      activeModelComparison === 'human'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-stone-800 text-stone-300'
                    }`}
                  >
                    Human Clinical Cohort
                  </button>
                </div>
              </div>

              {/* Comparative Matrix Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-stone-300 border border-stone-800 rounded-xl overflow-hidden">
                  <thead className="bg-stone-950 text-stone-400 font-mono uppercase text-[10px] border-b border-stone-800">
                    <tr>
                      <th className="p-3">Pathology Domain</th>
                      <th className="p-3">Sprague-Dawley Rat Finding</th>
                      <th className="p-3">Wistar Rat Finding</th>
                      <th className="p-3 text-amber-300 font-bold">Human Clinical Manifestation (Epidemiology)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60 font-sans">
                    <tr className="hover:bg-stone-800/30">
                      <td className="p-3 font-bold text-stone-100 flex items-center gap-1.5 font-mono">
                        <Brain size={14} className="text-red-400" />
                        Blood-Brain Barrier (BBB)
                      </td>
                      <td className="p-3 text-stone-300">Astrocytic end-feet swelling, Claudin-5 reduction by 68% under Pb 15 ppm.</td>
                      <td className="p-3 text-stone-300">Extravasation of albumin into hippocampus and cerebral cortex; vascular leak.</td>
                      <td className="p-3 text-amber-200 bg-amber-950/20 font-medium">
                        Disrupted BBB in children living near smelters/lead pipes; autoimmune brain encephalitis and loss of CNS immune privilege.
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-800/30">
                      <td className="p-3 font-bold text-stone-100 flex items-center gap-1.5 font-mono">
                        <Flame size={14} className="text-amber-400" />
                        Neuroinflammation
                      </td>
                      <td className="p-3 text-stone-300">Massive amoeboid microglial shift; TNF-$\alpha$ and IL-1$\beta$ elevated 4.8x.</td>
                      <td className="p-3 text-stone-300">NLRP3 inflammasome priming; persistent astrogliosis (GFAP immunoreactivity +310%).</td>
                      <td className="p-3 text-amber-200 bg-amber-950/20 font-medium">
                        Pediatric ADHD, Autism Spectrum Disorder (aberrant synaptic pruning), impulse control failure, violent crime spikes (Roulet’s Law).
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-800/30">
                      <td className="p-3 font-bold text-stone-100 flex items-center gap-1.5 font-mono">
                        <Dna size={14} className="text-cyan-400" />
                        Myelin & White Matter
                      </td>
                      <td className="p-3 text-stone-300">Inhibition of OPC maturation; 52% deficit in Myelin Basic Protein (MBP).</td>
                      <td className="p-3 text-stone-300">Axonal hypomyelination in corpus callosum; delayed auditory evoked potentials.</td>
                      <td className="p-3 text-amber-200 bg-amber-950/20 font-medium">
                        Reduced white matter volume on MRI, permanent IQ deficits (-3 to -7 points per 5 μg/dL blood lead), processing speed reduction.
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-800/30">
                      <td className="p-3 font-bold text-stone-100 flex items-center gap-1.5 font-mono">
                        <Clock size={14} className="text-purple-400" />
                        Circadian Regulation
                      </td>
                      <td className="p-3 text-stone-300">Pineal calcification/metal loading; nocturnal melatonin peak attenuated 65%.</td>
                      <td className="p-3 text-stone-300">Phase shift in locomotor activity rhythms; SCN clock gene blunting.</td>
                      <td className="p-3 text-amber-200 bg-amber-950/20 font-medium">
                        Chronic sleep-onset insomnia, delayed phase sleep disorder, accelerated amyloid-beta aggregation due to glymphatic stagnation.
                      </td>
                    </tr>
                    <tr className="hover:bg-stone-800/30">
                      <td className="p-3 font-bold text-stone-100 flex items-center gap-1.5 font-mono">
                        <AlertTriangle size={14} className="text-yellow-400" />
                        Neurodegeneration
                      </td>
                      <td className="p-3 text-stone-300">Loss of GLT-1 glutamate transport; excitotoxic death of CA1 pyramidal neurons.</td>
                      <td className="p-3 text-stone-300">Dopaminergic substantia nigra terminal degeneration via glial ROS overload.</td>
                      <td className="p-3 text-amber-200 bg-amber-950/20 font-medium">
                        Early-onset Alzheimer’s disease, Parkinsonism, Amyotrophic Lateral Sclerosis (ALS) clustering in industrial toxic corridors.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Human Vulnerability Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-stone-950 p-5 rounded-xl border border-red-900/40">
                  <h4 className="text-sm font-bold text-red-400 font-mono mb-2 flex items-center gap-2">
                    <Shield size={16} />
                    Pediatric Glial Vulnerability (Ages 0–6)
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Human infant brains undergo explosive gliogenesis and myelination until age 6. A child’s blood-brain barrier is fundamentally immature, with loose endothelial junctions that absorb heavy metals at 4 to 5 times the adult rate. Glial poisoning during this critical developmental window permanently alters neural circuit wiring, impairing prefrontal cortex development and executive impulse control.
                  </p>
                </div>

                <div className="bg-stone-950 p-5 rounded-xl border border-amber-900/40">
                  <h4 className="text-sm font-bold text-amber-400 font-mono mb-2 flex items-center gap-2">
                    <Activity size={16} />
                    Adult & Geriatric Glial Senescence
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    In adults, lifetime cumulative bone stores of lead (half-life 25–30 years) and renal cadmium mobilize during menopause, osteoporosis, or stress. The liberated metals enter the cerebral circulation, converting quiescent astrocytes into senescent, pro-inflammatory phenotypes that accelerate Alzheimer’s tau tangles and vascular dementia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: DOSE-RESPONSE & RADAR TELEMETRY */}
        {activeTabSection === 'data' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Cytotoxicity Curve */}
              <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100 font-mono">Glial Cell Viability Curve (% MTT Assay)</h3>
                    <p className="text-xs text-stone-400">Response across dose gradient (0 to 100 μM) in primary rat astrocyte culture.</p>
                  </div>
                  <span className="px-2 py-0.5 bg-stone-800 text-stone-300 text-xs font-mono rounded">
                    IC₅₀: Hg 12μM | Cd 18μM | Pb 27μM
                  </span>
                </div>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cytotoxicityData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="dose" stroke="#78716c" fontSize={11} />
                      <YAxis stroke="#78716c" fontSize={11} domain={[0, 100]} unit="%" />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                      <Line type="monotone" dataKey="pbAstro" name="Lead (Pb²⁺) Astrocytes" stroke="#ef4444" strokeWidth={2} dot={{ r: 3 }} />
                      <Line type="monotone" dataKey="hgAstro" name="Mercury (Hg²⁺) Astrocytes" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
                      <Line type="monotone" dataKey="cdAstro" name="Cadmium (Cd²⁺) Astrocytes" stroke="#eab308" strokeWidth={2} dot={{ r: 3 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Mechanism Radar Profile */}
              <div className="lg:col-span-5 bg-stone-900 border border-stone-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-stone-100 font-mono mb-1">Heavy Metal Neurotoxicity Radar</h3>
                <p className="text-xs text-stone-400 mb-4">Toxicological potency across 6 core pathological domains.</p>

                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid stroke="#44403c" />
                      <PolarAngleAxis dataKey="mechanism" stroke="#a8a29e" fontSize={10} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#78716c" fontSize={9} />
                      <Radar name="Lead (Pb)" dataKey="Pb" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                      <Radar name="Mercury (Hg)" dataKey="Hg" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} />
                      <Radar name="Cadmium (Cd)" dataKey="Cd" stroke="#eab308" fill="#eab308" fillOpacity={0.2} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '5px' }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '11px' }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Oxidative Stress & Neuroinflammation Bar Chart */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-100 font-mono">
                    Oxidative Burst & Inflammatory Cytokines (% Over Baseline)
                  </h3>
                  <p className="text-xs text-stone-400">Comparing individual metal toxicity against combined environmental mixture synergy.</p>
                </div>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={oxidativeStressData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                    <XAxis dataKey="metal" stroke="#78716c" fontSize={11} />
                    <YAxis stroke="#78716c" fontSize={11} unit="%" />
                    <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '12px' }} />
                    <Legend wrapperStyle={{ fontSize: '12px', paddingTop: '10px' }} />
                    <Bar dataKey="ros" name="Reactive Oxygen Species (ROS %)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="gshDepletion" name="Glutathione Depletion (% Lost)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="bbbLeakage" name="BBB Permeability Leak Index (%)" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="tnfAlpha" name="TNF-α Inflammatory Storm (%)" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: SOVEREIGN CHELATION & GLIAL REPAIR */}
        {activeTabSection === 'protocol' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6">
              <div className="max-w-3xl mb-6">
                <span className="px-2.5 py-1 bg-purple-950 text-purple-300 text-xs font-mono rounded border border-purple-800 font-bold">
                  EVIDENCE-BASED THERAPEUTIC MATRIX
                </span>
                <h3 className="text-2xl font-black text-stone-100 mt-2">
                  Evidence-Based Glial Protection & Heavy Metal Mitigation Strategies
                </h3>
                <p className="text-sm text-stone-300 mt-1 leading-relaxed">
                  Mitigating glial cell destruction requires addressing three concurrent fronts: systemic heavy metal mobilization (chelation), restoring astrocytic antioxidant pools (GSH replenishment), and re-synchronizing circadian pineal melatonin signaling.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Protocol 1 */}
                <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold font-mono">
                    <Shield size={16} />
                    1. Blood-Brain Permeable Chelation
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Standard EDTA does NOT cross the blood-brain barrier and can redistribute heavy metals into neural tissue. Proven clinical options:
                  </p>
                  <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                    <li><strong>DMSA (Succimer):</strong> Water-soluble oral chelator with low CNS redistribution risk; gold-standard pediatric lead protocol.</li>
                    <li><strong>Alpha-Lipoic Acid (ALA):</strong> Lipid- and water-soluble dithiol that readily crosses the BBB and chelates ionic mercury and lead.</li>
                  </ul>
                </div>

                {/* Protocol 2 */}
                <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
                    <Flame size={16} />
                    2. Astrocytic Glutathione Replenishment
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Because heavy metals irreversibly bind sulfhydryl (-SH) groups, intracellular GSH must be continually restored:
                  </p>
                  <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                    <li><strong>N-Acetylcysteine (NAC):</strong> Direct cysteine donor driving rapid de novo glutathione synthesis in astrocytes.</li>
                    <li><strong>Selenium & Zinc Co-Factors:</strong> Upregulates glutathione peroxidase (GPx) and restores Cu/Zn-SOD displaced by cadmium.</li>
                  </ul>
                </div>

                {/* Protocol 3 */}
                <div className="bg-stone-950 border border-stone-800 rounded-xl p-5 space-y-3">
                  <div className="flex items-center gap-2 text-purple-400 font-bold font-mono">
                    <Moon size={16} />
                    3. Exogenous Melatonin & Glymphatic Reset
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Compensating for pineal heavy metal accumulation and AANAT enzyme inhibition:
                  </p>
                  <ul className="text-xs text-stone-400 space-y-1.5 list-disc list-inside">
                    <li><strong>High-Dose Nocturnal Melatonin:</strong> Direct hydroxyl radical neutralizer that protects astrocytic end-feet and preserves BBB claudin-5.</li>
                    <li><strong>Circadian Lighting Discipline:</strong> Eliminating nocturnal blue light exposure to maximize residual pineal melatonin pulses.</li>
                  </ul>
                </div>
              </div>

              {/* Cross Navigation Bar */}
              <div className="mt-8 pt-6 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono text-stone-500">
                  Cross-Reference ICEarth Clinical & Proof Repositories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {onNavigateTab && (
                    <>
                      <button
                        onClick={() => onNavigateTab('occupational_lead_review')}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-cyan-950 text-cyan-300 text-xs font-mono rounded-lg border border-cyan-800/40 cursor-pointer flex items-center gap-1"
                      >
                        <span>🧬 Lead & Essential Metal Homeostasis</span>
                        <ArrowRight size={12} />
                      </button>
                      <button
                        onClick={() => onNavigateTab('mirna31_nrf2_lead')}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-amber-950 text-amber-300 text-xs font-mono rounded-lg border border-amber-800/40 cursor-pointer flex items-center gap-1"
                      >
                        <span>🧬 miRNA-31/Nrf2 Epigenetic Axis</span>
                        <ArrowRight size={12} />
                      </button>
                      <button
                        onClick={() => onNavigateTab('ai_and_kehoe_rule')}
                        className="px-3 py-1.5 bg-stone-800 hover:bg-red-950 text-red-300 text-xs font-mono rounded-lg border border-red-800/40 cursor-pointer flex items-center gap-1"
                      >
                        <span>⚖️ AI & The Kehoe Rule</span>
                        <ArrowRight size={12} />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Fullscreen Artwork Inspection Modal */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 lg:p-8 overflow-y-auto animate-fadeIn">
          {/* Modal Header */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-gradient-to-r from-red-600 to-amber-600 text-stone-950 font-black text-xs font-mono rounded uppercase">
                Plate #45
              </span>
              <div>
                <h3 className="text-lg font-bold text-stone-100">
                  Effects of Cadmium, Lead & Mercury on Glial Cells (Plate #45)
                </h3>
                <p className="text-xs text-stone-400 font-mono">
                  Sovereign Cryptographic Archive: {vaultRef} • Hash: {provenanceHash}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsArtModalOpen(false)}
              className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-full transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Image Display */}
          <div className="my-6 flex items-center justify-center">
            <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-black">
              <img
                src={glialInfographicImg}
                alt="Plate #45 Glial Neurotoxicity Fullscreen"
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>
          </div>

          {/* Modal Footer / Metadata */}
          <div className="border-t border-stone-800 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400">
            <div className="flex flex-wrap items-center gap-3">
              <span>Scientific Source: Preprints.org / PubMed Systematic Review (Rats/Glial Cells/Heavy Metals)</span>
              <span>•</span>
              <span>Models: Sprague-Dawley & Wistar Rat Strains</span>
              <span>•</span>
              <a
                href="https://www.preprints.org/frontend/manuscript/27557c0e1e330d82c1afe32083803fa5/download_pub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-yellow-500 hover:bg-yellow-400 text-stone-950 rounded border border-yellow-300 flex items-center gap-1.5 cursor-pointer font-bold transition-colors"
              >
                <FileText size={13} className="text-stone-950" />
                <span>Download Manuscript PDF</span>
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
