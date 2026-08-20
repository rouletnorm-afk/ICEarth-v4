import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Compass,
  Cpu,
  Database,
  Dna,
  ExternalLink,
  Flame,
  Globe,
  Heart,
  HelpCircle,
  Info,
  Layers,
  Microscope,
  Moon,
  Pill,
  RotateCcw,
  Scale,
  Search,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
  TestTube,
  TrendingDown,
  TrendingUp,
  UserCheck,
  Users,
  Volume2,
  VolumeX,
  X,
  Zap
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell
} from 'recharts';
import { MiadmsaMedicalInterventions } from './components/MiadmsaMedicalInterventions';
import { MedicalInterventionsTab } from './components/MedicalInterventionsTab';
import { speakExposenomicsText, stopExposenomicsSpeech } from './lib/speechUtils';

export type MainTab =
  | 'medical_interventions'
  | 'miadmsa_chelation'
  | 'roulets_law'
  | 'exposome_matrix'
  | 'simulator'
  | 'library';

export const App: React.FC = () => {
  const [siteTheme, setSiteTheme] = useState<'dark' | 'light'>('dark');
  const isLight = siteTheme === 'light';
  const [activeTab, setActiveTab] = useState<MainTab>('miadmsa_chelation');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [activeBookChapter, setActiveBookChapter] = useState<number>(1);

  // ABM Simulator State
  const [ambientPb, setAmbientPb] = useState<number>(45); // ug/dL or ppm
  const [chelatorType, setChelatorType] = useState<'none' | 'dmsa' | 'edta' | 'miadmsa'>('miadmsa');
  const [exposureDurationYears, setExposureDurationYears] = useState<number>(15);

  const toggleAudio = (text: string) => {
    if (isSpeaking) {
      stopExposenomicsSpeech();
      setIsSpeaking(false);
    } else {
      const ok = speakExposenomicsText(text);
      if (ok) setIsSpeaking(true);
    }
  };

  // Simulator calculation
  const calculateOrganLoad = () => {
    let baseMultiplier = ambientPb * (exposureDurationYears / 10);
    let mitigationFactor = 1.0;
    if (chelatorType === 'dmsa') mitigationFactor = 0.65;
    if (chelatorType === 'edta') mitigationFactor = 0.55;
    if (chelatorType === 'miadmsa') mitigationFactor = 0.18;

    const boneSequestration = Math.min(100, Math.round(baseMultiplier * 0.85 * mitigationFactor));
    const brainNeurotoxicity = Math.min(100, Math.round(baseMultiplier * 0.72 * mitigationFactor));
    const vascularEndothelium = Math.min(100, Math.round(baseMultiplier * 0.68 * mitigationFactor));
    const oncologyRiskIndex = Math.min(100, Math.round(baseMultiplier * 0.94 * mitigationFactor));

    return [
      { organ: 'Bone Matrix (Pb Sequestration)', level: boneSequestration, baseline: 2 },
      { organ: 'Blood-Brain Barrier / CNS', level: brainNeurotoxicity, baseline: 1 },
      { organ: 'Cardiovascular / Endothelium', level: vascularEndothelium, baseline: 3 },
      { organ: 'Tumor Chemoresistance Synergism', level: oncologyRiskIndex, baseline: 0 }
    ];
  };

  const organData = calculateOrganLoad();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
      isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-950 text-stone-100'
    }`}>
      {/* ========================================================================= */}
      {/* 1. TOP GLOBAL NAVIGATION HEADER */}
      {/* ========================================================================= */}
      <header className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors ${
        isLight ? 'bg-white/90 border-stone-200 shadow-sm' : 'bg-stone-950/90 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Brand Logo & Title */}
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('miadmsa_chelation')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-teal-500 to-amber-500 flex items-center justify-center shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-500/30">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif font-black text-lg sm:text-xl tracking-tight bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400 bg-clip-text text-transparent">
                    ICEarth Sovereign
                  </span>
                  <span className="text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 font-mono font-bold">
                    Nature 2026
                  </span>
                </div>
                <p className="text-[11px] text-stone-400 hidden sm:block">
                  Roulet's Law • Exposenomics Matrix • MiADMSA Oncology Chelation
                </p>
              </div>
            </div>

            {/* Desktop Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-xl bg-stone-900/60 border border-stone-800/80">
              <button
                onClick={() => setActiveTab('medical_interventions')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'medical_interventions'
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Stethoscope className="w-4 h-4 text-emerald-300" />
                <span>Medical Interventions</span>
              </button>

              <button
                onClick={() => setActiveTab('miadmsa_chelation')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'miadmsa_chelation'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Pill className="w-4 h-4 text-cyan-300" />
                <span>MiADMSA Pan-Metal</span>
              </button>

              <button
                onClick={() => setActiveTab('roulets_law')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'roulets_law'
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-amber-300" />
                <span>Roulet's Law Book</span>
              </button>

              <button
                onClick={() => setActiveTab('exposome_matrix')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'exposome_matrix'
                    ? 'bg-teal-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Activity className="w-4 h-4 text-teal-300" />
                <span>Pre-Industrial Baseline</span>
              </button>

              <button
                onClick={() => setActiveTab('simulator')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeTab === 'simulator'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-stone-400 hover:text-stone-200 hover:bg-stone-800/60'
                }`}
              >
                <Cpu className="w-4 h-4 text-purple-300" />
                <span>Biokinetics Simulator</span>
              </button>
            </nav>

            {/* Right Header Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSiteTheme(isLight ? 'dark' : 'light')}
                className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-stone-200 hover:bg-stone-300 border-stone-300 text-stone-700'
                    : 'bg-stone-900 hover:bg-stone-800 border-stone-800 text-stone-300'
                }`}
                title="Toggle Theme"
              >
                {isLight ? <Moon size={16} /> : <Sun size={16} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 2. MAIN WORKSPACE VIEWPORT */}
      {/* ========================================================================= */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">

        {/* TAB 0: CLINICAL MEDICAL INTERVENTIONS & CHELATION SUITE */}
        {activeTab === 'medical_interventions' && (
          <div className="animate-in fade-in duration-200">
            <MedicalInterventionsTab
              onNavigateTab={(tab) => {
                if (tab === 'miadmsa_chelation') setActiveTab('miadmsa_chelation');
                if (tab === 'roulets_law') setActiveTab('roulets_law');
                if (tab === 'simulator') setActiveTab('simulator');
                if (tab === 'exposome_matrix') setActiveTab('exposome_matrix');
              }}
              siteTheme={siteTheme}
            />
          </div>
        )}

        {/* TAB 1: MiADMSA MULTI-METAL ONCOLOGY BREAKTHROUGH */}
        {activeTab === 'miadmsa_chelation' && (
          <div className="animate-in fade-in duration-200">
            <MiadmsaMedicalInterventions
              onNavigateTab={(tab) => {
                if (tab === 'medical_interventions') setActiveTab('medical_interventions');
                if (tab === 'roulets_law') setActiveTab('roulets_law');
                if (tab === 'simulator') setActiveTab('simulator');
                if (tab === 'exposome_matrix') setActiveTab('exposome_matrix');
              }}
              siteTheme={siteTheme}
            />
          </div>
        )}

        {/* TAB 2: ROULET'S LAW BOOK & EXPOSENOMICS MANUSCRIPT */}
        {activeTab === 'roulets_law' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-950/60 via-stone-900 to-stone-950 border border-amber-500/30 shadow-2xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <BookOpen size={16} />
                    <span>Sovereign Treatise & Manuscript</span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-black text-white">
                    Roulet's Law: The Non-Threshold Axiom of Heavy Metal Degeneracy
                  </h1>
                  <p className="text-stone-400 text-sm mt-1">
                    Authored by Norman Roulet • Pre-Industrial Homo Sapiens 0 Baseline vs Industrial Body Burden
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleAudio("Roulet's Law of Heavy Metal Degeneracy states that there is zero biological threshold for heavy metal exposure. Industrial civilization has elevated modern skeletal lead burdens by 500- to 1000-fold over pre-industrial Homo Sapiens baseline.")}
                    className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg cursor-pointer"
                  >
                    {isSpeaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
                    <span>{isSpeaking ? 'Mute Narrator' : 'Audio Narration'}</span>
                  </button>
                </div>
              </div>

              {/* Chapters Navigation Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
                {[
                  { id: 1, title: 'Chapter 1: The Pre-Industrial Homo Sapiens 0 Baseline', desc: 'Ancient bone spectrometry proving natural lead levels are <0.016 µg/g' },
                  { id: 2, title: 'Chapter 2: Multi-Metal Combinatorial Synergy', desc: 'How Lead, Cadmium, Arsenic, and Nickel act cooperatively at subtoxic levels' },
                  { id: 3, title: 'Chapter 3: Membrane-Permeable Chelation & MiADMSA', desc: 'Cellular penetration, mitochondrial detox, and oncology reversal (Nature 2026)' }
                ].map(chap => (
                  <button
                    key={chap.id}
                    onClick={() => setActiveBookChapter(chap.id)}
                    className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                      activeBookChapter === chap.id
                        ? 'bg-amber-950/80 border-amber-500 text-white shadow-lg'
                        : 'bg-stone-900/60 border-stone-800 text-stone-300 hover:border-stone-700'
                    }`}
                  >
                    <div className="text-xs font-bold font-mono text-amber-400 mb-1">CHAPTER 0{chap.id}</div>
                    <div className="text-sm font-bold font-serif mb-1">{chap.title}</div>
                    <div className="text-xs text-stone-400 leading-relaxed">{chap.desc}</div>
                  </button>
                ))}
              </div>

              {/* Chapter Content Reader */}
              <div className="mt-6 p-6 rounded-xl bg-stone-950 border border-stone-800/80 space-y-4">
                {activeBookChapter === 1 && (
                  <div className="space-y-4 font-sans text-stone-300 leading-relaxed">
                    <h3 className="text-xl font-serif font-bold text-amber-300">
                      Chapter 1: The Pristine Homo Sapiens 0 Baseline
                    </h3>
                    <p>
                      Modern clinical medicine frequently operates under a fraudulent premise: treating contemporary population averages as "normal" biological reference ranges. In 1980, geochemist Clair Patterson demonstrated that ancient pre-industrial humans living thousands of years prior to smelters and leaded fuels possessed skeletal lead levels over <strong>600 to 1,000 times lower</strong> than modern urban inhabitants.
                    </p>
                    <p>
                      Under <strong>Roulet's Law</strong>, there is no harmless sub-threshold exposure. Heavy metals like Lead (Pb), Cadmium (Cd), and Arsenic (As) have zero physiological utility in human biology; every atom absorbed substitutes for essential calcium, zinc, and iron cofactors, permanently altering neurodevelopment, vascular integrity, and cellular senescence.
                    </p>
                  </div>
                )}

                {activeBookChapter === 2 && (
                  <div className="space-y-4 font-sans text-stone-300 leading-relaxed">
                    <h3 className="text-xl font-serif font-bold text-amber-300">
                      Chapter 2: Multi-Metal Combinatorial Synergy & Exposenomics
                    </h3>
                    <p>
                      Regulatory frameworks consistently test individual toxic elements in sterile isolation. In reality, individuals living in industrial urban centers are simultaneously exposed to low concentrations of multiple heavy metals: lead from aging pipes and paint, cadmium from brake dust and industrial particulates, and arsenic from contaminated groundwater and fossil fuels.
                    </p>
                    <p>
                      As documented in the <strong>Nature Springer (Cell Death Discovery 2026)</strong> findings, when lung cells are exposed to individual subtoxic concentrations of these metals, no chemoresistance emerges. However, when combined into a multi-metal cocktail, they activate cross-compensatory NRF2 pathways and ABC drug-efflux pumps, causing extreme chemotherapy resistance against platinum therapeutics.
                    </p>
                  </div>
                )}

                {activeBookChapter === 3 && (
                  <div className="space-y-4 font-sans text-stone-300 leading-relaxed">
                    <h3 className="text-xl font-serif font-bold text-amber-300">
                      Chapter 3: The Membrane-Permeable Chelation Revolution (MiADMSA)
                    </h3>
                    <p>
                      Conventional hydrophilic chelating agents like DMSA (succimer) and Calcium Disodium EDTA have saved countless lives in acute toxicity, but they possess a critical biological limitation: their charged hydrophilic nature renders them virtually incapable of penetrating intracellular membranes to extract metals sequestered inside mitochondria, the endoplasmic reticulum, and the nucleus.
                    </p>
                    <p>
                      <strong>MiADMSA (monoisoamyl dimercaptosuccinic acid)</strong> represents the culmination of pan-metal pharmacology. By esterifying DMSA with an isoamyl moiety, the molecule gains high lipid solubility, enabling it to cross lipid bilayers, deplete intracellular heavy metal reservoirs, restore mitochondrial redox homeostasis, and re-sensitize refractory carcinomas to first-line oncological chemotherapy.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRE-INDUSTRIAL BASELINE EXPOSOME MATRIX */}
        {activeTab === 'exposome_matrix' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-black text-white flex items-center gap-2">
                  <Activity className="text-emerald-400" />
                  <span>Pre-Industrial Homo Sapiens 0 vs Modern Exposure Matrix</span>
                </h2>
                <p className="text-stone-400 text-sm mt-1">
                  Quantitative elemental analysis comparing ancient human baseline tissue with contemporary industrial averages.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="text-xs font-mono text-emerald-400 uppercase font-bold">Pre-Industrial Homo Sapiens 0</div>
                  <div className="text-3xl font-serif font-bold text-white mt-1">0.016 µg/g</div>
                  <p className="text-xs text-stone-400 mt-2">Natural pre-smelting skeletal lead concentration.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="text-xs font-mono text-amber-400 uppercase font-bold">Modern Industrial Average</div>
                  <div className="text-3xl font-serif font-bold text-amber-400 mt-1">15.0 - 35.0 µg/g</div>
                  <p className="text-xs text-stone-400 mt-2">Over 625x to 1,000x higher than evolutionary baseline.</p>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                  <div className="text-xs font-mono text-cyan-400 uppercase font-bold">MiADMSA Post-Intervention Goal</div>
                  <div className="text-3xl font-serif font-bold text-cyan-400 mt-1">&lt; 1.5 µg/g</div>
                  <p className="text-xs text-stone-400 mt-2">Intracellular and systemic heavy metal clearance target.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: BIOKINETICS & CHELATION SIMULATOR */}
        {activeTab === 'simulator' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="p-6 rounded-2xl bg-stone-900/80 border border-stone-800 shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-black text-white flex items-center gap-2">
                  <Cpu className="text-purple-400" />
                  <span>Agent-Based Toxicokinetics & Chelation Clearance Simulator</span>
                </h2>
                <p className="text-stone-400 text-sm mt-1">
                  Model cumulative organ burden, blood-brain barrier penetration, and pan-metal clearance trajectories.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 rounded-xl bg-stone-950 border border-stone-800">
                <div>
                  <label className="text-xs font-mono text-stone-400 block mb-1">
                    Ambient Metal Exposure: {ambientPb} µg/dL
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="100"
                    value={ambientPb}
                    onChange={(e) => setAmbientPb(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-stone-400 block mb-1">
                    Exposure Duration: {exposureDurationYears} Years
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    value={exposureDurationYears}
                    onChange={(e) => setExposureDurationYears(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-stone-400 block mb-1">
                    Therapeutic Chelation Intervention
                  </label>
                  <select
                    value={chelatorType}
                    onChange={(e) => setChelatorType(e.target.value as any)}
                    className="w-full bg-stone-900 border border-stone-700 text-stone-200 text-xs rounded-lg p-2 font-mono cursor-pointer"
                  >
                    <option value="none">None (Untreated Accumulation)</option>
                    <option value="dmsa">DMSA (Hydrophilic Extracellular)</option>
                    <option value="edta">CaNa2-EDTA (IV Vascular)</option>
                    <option value="miadmsa">MiADMSA (Lipophilic Pan-Metal Intracellular)</option>
                  </select>
                </div>
              </div>

              {/* Organ Load Visualization */}
              <div className="h-72 w-full p-4 rounded-xl bg-stone-950 border border-stone-800">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={organData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                    <XAxis dataKey="organ" stroke="#a1a1aa" fontSize={11} />
                    <YAxis stroke="#a1a1aa" domain={[0, 100]} unit="%" fontSize={11} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px', color: '#fff' }}
                      formatter={(val: any) => [`${val}% Toxic Load Index`, 'Organ Status']}
                    />
                    <Bar dataKey="level" fill="#a855f7" radius={[6, 6, 0, 0]}>
                      {organData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.level > 60 ? '#ef4444' : entry.level > 30 ? '#f59e0b' : '#10b981'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================================= */}
      {/* 3. GLOBAL FOOTER */}
      {/* ========================================================================= */}
      <footer className="border-t border-stone-800/80 bg-stone-950 py-6 px-4 sm:px-6 lg:px-8 mt-12 text-center text-xs text-stone-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 ICEarth Sovereign Platform • Norman Roulet's Law • Nature Cell Death Discovery Citation 10.1038/s41420-026-03222-8</p>
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-bold">MiADMSA Pan-Metal Engine</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">Homo Sapiens 0 Baseline</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
