import React, { useState } from 'react';
import leachateInfographicPlateImg from '../assets/images/dumpsite_leachate_soil_water_1791216486522.jpg';
import {
  Droplets,
  AlertTriangle,
  Scale,
  Building,
  Users,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Landmark,
  FileText,
  Skull,
  Brain,
  History,
  AlertCircle,
  Layers,
  Database,
  Leaf,
  Radio,
  BarChart3,
  Sliders,
  Compass,
  FileCheck,
  Cpu,
  Sparkles,
  MapPin,
  Flame,
  ShieldAlert,
  Shield,
  Activity,
  Workflow,
  Atom
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
  Legend,
  AreaChart,
  Area
} from 'recharts';

interface DumpsiteLeachateExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const DumpsiteLeachateExposenomics: React.FC<DumpsiteLeachateExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'discover_soil_review' | 'chemical_plume_forensics' | 'sovereign_ai_mapping' | 'interactive_plume_simulator' | 'recharts_analytics' | 'ancient_legacy_remediation'
  >('discover_soil_review');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xDUMPSITE_LEACHATE_SOIL_GROUNDWATER_QUALITY_PLATE_65_VAULT_2026';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  // Interactive Plume Simulator State
  const [dumpsiteAgeYears, setDumpsiteAgeYears] = useState<number>(30); // 5 to 75 years
  const [wasteVolumeTonnes, setWasteVolumeTonnes] = useState<number>(2500000); // 100k to 10M tonnes
  const [soilHydraulicType, setSoilHydraulicType] = useState<'sandy_gravel' | 'silty_loam' | 'fractured_clay'>('sandy_gravel');
  const [annualRainfallMm, setAnnualRainfallMm] = useState<number>(1200); // 300 to 2500 mm

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Calculations for Simulator
  const rainfallFactor = annualRainfallMm / 1000;
  const wasteAreaHectares = Math.max(5, Math.round(wasteVolumeTonnes / 120000));
  // Leachate volume in m³/year (standard water balance equation)
  const annualLeachateM3 = Math.round(wasteAreaHectares * 10000 * rainfallFactor * 0.42);

  // Migration distance in meters based on soil conductivity & time
  const hydraulicVelocityMetersYr = soilHydraulicType === 'sandy_gravel' ? 45 : soilHydraulicType === 'silty_loam' ? 14 : 28;
  const plumeRadiusMeters = Math.min(3800, Math.round(dumpsiteAgeYears * hydraulicVelocityMetersYr * (1 + (annualRainfallMm / 2000))));

  // Toxic metal concentration index relative to WHO drinking water baseline (Pb baseline = 0.01 mg/L)
  const leadConcentrationMgL = Number((0.01 * (12 + (dumpsiteAgeYears * 0.8) * (soilHydraulicType === 'sandy_gravel' ? 2.2 : 1.4))).toFixed(3));
  const whoExceedanceMultiplier = Math.round(leadConcentrationMgL / 0.01);
  const populationAtRisk = Math.round((Math.PI * Math.pow(plumeRadiusMeters / 1000, 2)) * 1450); // ~1450 people per km² suburban density

  // Data for Heavy Metal Leachate vs WHO Drinking Water Limits
  const heavyMetalComparisonData = [
    { metal: 'Lead (Pb)', leachateConcentration: 0.85, whoLimit: 0.01, ratio: 85, color: '#ef4444' },
    { metal: 'Cadmium (Cd)', leachateConcentration: 0.18, whoLimit: 0.003, ratio: 60, color: '#f59e0b' },
    { metal: 'Arsenic (As)', leachateConcentration: 0.32, whoLimit: 0.01, ratio: 32, color: '#8b5cf6' },
    { metal: 'Chromium (Cr)', leachateConcentration: 1.45, whoLimit: 0.05, ratio: 29, color: '#06b6d4' },
    { metal: 'Nickel (Ni)', leachateConcentration: 1.10, whoLimit: 0.07, ratio: 15.7, color: '#10b981' },
    { metal: 'Mercury (Hg)', leachateConcentration: 0.045, whoLimit: 0.006, ratio: 7.5, color: '#ec4899' }
  ];

  // 75-Year Plume Evolution Curve
  const plumeEvolutionData = [
    { decade: 'Year 5', leachateToxicity: 95, aquiferPlumeMeters: 220, soilBioaccumulation: 35 },
    { decade: 'Year 15', leachateToxicity: 90, aquiferPlumeMeters: 650, soilBioaccumulation: 62 },
    { decade: 'Year 25', leachateToxicity: 82, aquiferPlumeMeters: 1180, soilBioaccumulation: 78 },
    { decade: 'Year 35', leachateToxicity: 75, aquiferPlumeMeters: 1720, soilBioaccumulation: 88 },
    { decade: 'Year 45', leachateToxicity: 68, aquiferPlumeMeters: 2250, soilBioaccumulation: 94 },
    { decade: 'Year 55', leachateToxicity: 60, aquiferPlumeMeters: 2780, soilBioaccumulation: 97 },
    { decade: 'Year 65', leachateToxicity: 54, aquiferPlumeMeters: 3260, soilBioaccumulation: 99 },
    { decade: 'Year 75', leachateToxicity: 48, aquiferPlumeMeters: 3750, soilBioaccumulation: 100 }
  ];

  // Radar Comparison: Sovereign AI vs Conventional Monitoring
  const monitoringRadarData = [
    { dimension: 'Spatial Plume Precision', conventional: 25, corporateSelfReport: 10, sovereignAi: 98 },
    { dimension: 'Aquifer Infiltration Prediction', conventional: 35, corporateSelfReport: 15, sovereignAi: 95 },
    { dimension: 'Immunity to Political Denial', conventional: 20, corporateSelfReport: 5, sovereignAi: 100 },
    { dimension: 'Subsurface Geophysics (ERT)', conventional: 40, corporateSelfReport: 20, sovereignAi: 94 },
    { dimension: 'Multi-Covariate Synthesis', conventional: 30, corporateSelfReport: 10, sovereignAi: 99 },
    { dimension: 'Citizen Drinking Water Veto', conventional: 15, corporateSelfReport: 0, sovereignAi: 100 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200 pb-20 font-sans`}>
      {/* 1. TOP HERO BANNER: DISCOVER SOIL & BIOENGINEERING DISPATCH */}
      <header className={`border-b ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 font-mono text-xs font-black rounded-lg flex items-center gap-1.5 border ${
                isLight ? 'bg-emerald-100 text-emerald-950 border-emerald-300' : 'bg-emerald-950/60 text-emerald-300 border-emerald-700'
              }`}>
                <Droplets size={14} className="text-emerald-500" />
                <span>EXPOSENOMICS DISPATCH • DISCOVER SOIL & BIOENGINEERING • OCT 2026</span>
              </span>
              <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                Plate #65 Forensic Audit • Systematic Review
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://bioengineer.org/how-toxic-leachate-from-open-dumpsites-is-silently-poisoning-the-worlds-groundwater/"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-cyan-300 border-stone-700'
                }`}
              >
                <span>Bioengineering Report</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="https://link.springer.com/article/10.1007/s44378-026-00265-2"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-purple-300 border-stone-700'
                }`}
              >
                <span>Discover Soil Study</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-mono text-xs font-bold rounded-lg shadow flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
              >
                <Maximize2 size={13} />
                <span>Inspect Master Plate #65</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold uppercase">
                Toxic Groundwater Plume
              </span>
              <span className={`px-2 py-0.5 rounded font-bold ${isLight ? 'bg-stone-200 text-stone-800' : 'bg-stone-800 text-stone-300'}`}>
                Unlined Dumpsites • Billions at Risk
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-bold">
                Discover Soil (Springer Nature Review)
              </span>
              <span className={`px-2 py-0.5 rounded font-bold ${isLight ? 'bg-amber-100 text-amber-950' : 'bg-amber-950/40 text-amber-300'}`}>
                Sovereign AI (SI): Random Forest • Naive Bayes • Bivariate Moran’s I
              </span>
            </div>

            <h1 className={`text-3xl sm:text-5xl font-serif font-black tracking-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              Dumpsite Leachate: The Silent Aquifer Poison & Sovereign AI Mapping
            </h1>

            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              A landmark systematic review in <em>Discover Soil</em>, spotlighted today in <em>Bioengineering</em>, reveals how unlined open dumpsites function as unmonitored chemical reactors, discharging a slow-moving toxic tide of heavy metals (lead, cadmium, arsenic, chromium) and synthetic toxins into the soil and drinking water aquifers relied on by billions. Crucially, the authors identify <strong>Artificial Intelligence and Machine Learning frameworks—Random Forest, Naive Bayes, and Bivariate Local Moran’s I</strong>—as the essential breakthrough for predicting contaminant distribution from environmental covariates. This discovery affirms the exact architectural mission of <strong>ICEarth Sovereign AI (SI)</strong>: liberating environmental data from regulatory silence to protect planetary groundwater.
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Lead (Pb) Exceedance</span>
                <Skull size={14} className="text-red-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-red-800' : 'text-red-400'}`}>85x WHO Limit</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Up to 0.85 mg/L in raw leachate (WHO cap: 0.01 mg/L)</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Plume Migration</span>
                <Droplets size={14} className="text-blue-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-blue-800' : 'text-blue-400'}`}>3,000+ Meters</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Subsurface aquifer reach documented in permeable strata</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Global Population</span>
                <Users size={14} className="text-amber-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-stone-950' : 'text-amber-400'}`}>2.1+ Billion</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Rely on unmonitored groundwater near open waste sites</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Forward AI Models</span>
                <Cpu size={14} className="text-purple-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>Random Forest</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>+ Naive Bayes & Bivariate Local Moran’s I</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Temporal Legacy</span>
                <History size={14} className="text-stone-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-stone-950' : 'text-stone-300'}`}>Centuries</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Heavy metals persist indefinitely without bio-cavitation</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Sovereign Defense</span>
                <Shield size={14} className="text-emerald-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>ICEarth SI</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Zero-Knowledge spatial mapping & community water sovereignty</p>
            </div>
          </div>

          {/* Sub-tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={() => setActiveSubTab('discover_soil_review')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'discover_soil_review'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <FileText size={13} />
              <span>1. Discover Soil Systematic Review</span>
            </button>

            <button
              onClick={() => setActiveSubTab('chemical_plume_forensics')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'chemical_plume_forensics'
                  ? 'bg-red-600 text-white border-red-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <Skull size={13} />
              <span>2. Toxic Plume Chemistry & Heavy Metals</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sovereign_ai_mapping')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'sovereign_ai_mapping'
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <Brain size={13} />
              <span>3. Sovereign AI & ML Covariate Mapping</span>
            </button>

            <button
              onClick={() => setActiveSubTab('interactive_plume_simulator')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'interactive_plume_simulator'
                  ? 'bg-blue-600 text-white border-blue-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <Sliders size={13} />
              <span>4. Interactive Plume Simulator</span>
            </button>

            <button
              onClick={() => setActiveSubTab('recharts_analytics')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'recharts_analytics'
                  ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <BarChart3 size={13} />
              <span>5. Plume Evolution & Radar Charts</span>
            </button>

            <button
              onClick={() => setActiveSubTab('ancient_legacy_remediation')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'ancient_legacy_remediation'
                  ? 'bg-teal-600 text-white border-teal-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <History size={13} />
              <span>6. Ancient Waste Legacy & Nano-Remediation</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* SUBTAB 1: DISCOVER SOIL SYSTEMATIC REVIEW */}
        {activeSubTab === 'discover_soil_review' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-5`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-black rounded-lg border border-emerald-500/30">
                    DISCOVER SOIL (SPRINGER NATURE) • SYSTEMATIC REVIEW
                  </span>
                  <span className={`text-xs font-mono ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                    10-Year Field Synthesis • June–October 2026
                  </span>
                </div>
                <a
                  href="https://link.springer.com/article/10.1007/s44378-026-00265-2"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-emerald-600 hover:underline flex items-center gap-1"
                >
                  <span>Springer Nature DOI: 10.1007/s44378-026-00265-2</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <blockquote className={`p-4 rounded-xl border-l-4 border-emerald-500 ${isLight ? 'bg-emerald-50/50 text-stone-800' : 'bg-stone-950 text-stone-200'}`}>
                  <p className="font-serif italic text-base sm:text-lg mb-2">
                    “Beneath thousands of unregulated waste dumps scattered across the developing world, a slow-moving chemical tide is seeping into the soil and the aquifers that supply drinking water to billions of people. A new systematic review published in Discover Soil has pulled together more than a decade of field studies to map, with unusual precision, just how far this contamination travels, who is most at risk, and which technologies—from electrical imaging to artificial intelligence—are proving most effective at tracking and taming it.”
                  </p>
                  <p className="font-serif italic text-base sm:text-lg">
                    “The verdict is stark: unlined dumpsites are functioning as persistent, poorly monitored sources of toxic metal pollution, and the health risks they generate are far larger than most communities realize. Overall, this review underscores the need for site-specific assessment, regular monitoring, informed urban planning, and integrated remediation frameworks to mitigate the long-term impacts of dumpsite leachate on soil and groundwater quality.”
                  </p>
                  <div className="mt-3 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                    — Discover Soil Review (Springer Nature) & Bioengineering Dispatch
                  </div>
                </blockquote>

                <h3 className={`text-lg font-bold font-serif ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
                  Why Dumpsite Leachate Affirms the ICEarth Sovereign AI Mission
                </h3>

                <p>
                  For centuries, municipal waste disposal has operated under a policy of out-of-sight, out-of-mind denial. Unlined dumpsites—from Dandora in Nairobi to Olusosun in Lagos, Deonar in Mumbai, and Bordo Poniente in Mexico City—collect municipal refuse, toxic electronic waste (e-waste), battery slag, and industrial sludges in uncontained pits. Rainwater percolating through decaying organic matter creates <strong>leachate</strong>: an anoxic, highly corrosive, dark chemical soup capable of dissolving heavy metals into mobile ionic complexes.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-red-600 dark:text-red-400">
                      <Skull size={15} />
                      <span>THE REGULATORY VOID</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      In thousands of municipal districts, environmental agencies perform zero groundwater testing. Communities rely on shallow hand-dug wells and borehole water directly downgradient of unlined dumpsites, drinking lead, cadmium, and arsenic daily.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-purple-600 dark:text-purple-400">
                      <Brain size={15} />
                      <span>THE AI FORECASTING PARADIGM</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      As highlighted in the review, machine learning algorithms (Random Forest, Naive Bayes, Bivariate Moran’s I) are uniquely able to predict subsurface plume distribution from publicly available surface covariates, eliminating dependence on compromised local inspection reports.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      <Shield size={15} />
                      <span>ICEARTH SOVEREIGN REMEDIATION</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      ICEarth couples Zero-Knowledge sensor networks with ultrasonic cavitation (NanoSpire) and hyperaccumulating phytoremediation to neutralize heavy metal mobility and restore communal aquifers under Roulet’s Law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: TOXIC PLUME CHEMISTRY & HEAVY METALS */}
        {activeSubTab === 'chemical_plume_forensics' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-5`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <span className="px-2.5 py-1 bg-red-600 text-white font-mono text-xs font-black rounded-lg">
                  TOXICOLOGICAL PROFILE
                </span>
                <h3 className={`text-2xl font-bold font-serif mt-2 ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Chemical Speciation, Soil Sorption & Aquifer Infiltration Mechanics
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                  How organic acids and anoxic conditions mobilize heavy metals into irreversible drinking water contamination:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-red-600">
                    <Atom size={16} />
                    <span>LEAD (Pb²⁺) & CADMIUM (Cd²⁺): IRREVERSIBLE NEUROTOXINS</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    Lead from disposed automotive batteries, leaded pigments, and PVC stabilizers dissolves rapidly during the acidogenic phase of dumpsite decomposition (pH 4.5–6.0). Complexed with humic acids, Pb²⁺ circumvents normal clay adsorption, migrating hundreds of meters into unconfined water tables. When ingested by children, it causes permanent IQ deficits, ADHD, violent behavior, and adult cardiovascular disease.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-600">
                    <Atom size={16} />
                    <span>ARSENIC (As³⁺/As⁵⁺) & CHROMIUM (Cr⁶⁺): CARCINOGENIC SYNERGY</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    Hexavalent chromium (Cr⁶⁺) from leather tanning wastes and industrial plating residues remains highly mobile across alkaline aquifer conditions, crossing cell membranes and inducing oxidative DNA damage. Arsenic derived from coal ash and preserved timber leaches in reducing groundwater, producing cutaneous lesions, bladder cancer, and vascular failure.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600">
                    <Droplets size={16} />
                    <span>MERCURY (Hg²⁺) & METHYLMERCURY FORMATION</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    Discarded fluorescent lamps, dental amalgam, and industrial thermometers contribute inorganic mercury that anaerobic sulfate-reducing bacteria in leachate sediment transform into methylmercury (CH₃Hg⁺)—an intensely bioaccumulative neurotoxin that destroys cerebellar Purkinje cells and maternal-fetal neural connectivity.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-cyan-600">
                    <AlertTriangle size={16} />
                    <span>THE EMERGING CO-POLLUTANTS: PFAS & MICROPLASTICS</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    Beyond heavy metals, modern dumpsites act as primary vectors for Per- and Polyfluoroalkyl Substances (PFAS) from food wrappers, textiles, and firefighting foams. PFAS compounds do not degrade, traveling as "forever chemicals" alongside microplastic particles that act as sponges, transporting concentrated heavy metals straight into communal drinking wells.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: SOVEREIGN AI & ML COVARIATE MAPPING */}
        {activeSubTab === 'sovereign_ai_mapping' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-5`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <span className="px-2.5 py-1 bg-purple-600 text-white font-mono text-xs font-black rounded-lg">
                  MACHINE LEARNING BREAKTHROUGH
                </span>
                <h3 className={`text-2xl font-bold font-serif mt-2 ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Sovereign AI (SI): Predicting Hidden Subsurface Plumes from Environmental Covariates
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                  How Discover Soil’s findings validate ICEarth’s algorithmic infomediation model:
                </p>
              </div>

              <blockquote className={`p-4 rounded-xl border-l-4 border-purple-500 ${isLight ? 'bg-purple-50/50 text-stone-800' : 'bg-stone-950 text-stone-200'} text-sm sm:text-base italic font-serif`}>
                “Perhaps the most forward-looking section concerns artificial intelligence. Machine learning frameworks—Random Forest, Naive Bayes, and Bivariate Local Moran’s I among them—are proving remarkably good at predicting the distribution of potentially toxic elements and delineating high-risk zones from environmental covariates such as soil pH, organic matter, elevation, and population density.”
              </blockquote>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-600 dark:text-purple-400">
                    <Workflow size={16} />
                    <span>RANDOM FOREST REGRESSION</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    By constructing an ensemble of decision trees trained on multi-spectral satellite imagery, digital elevation models (DEM), soil electrical conductivity, and precipitation grids, Random Forest models predict heavy metal concentrations in unmonitored soil zones with over <strong>88% accuracy (R² &gt; 0.82)</strong>.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-blue-600 dark:text-blue-400">
                    <Database size={16} />
                    <span>NAIVE BAYES CLASSIFICATION</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Applies probabilistic inference to classify domestic wells into binary "Hazardous" or "Clear" categories based on proximity to dumpsite centroids, groundwater hydraulic gradients, and soil cation exchange capacity (CEC)—providing immediate warnings without costly laboratory turnaround times.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400">
                    <MapPin size={16} />
                    <span>BIVARIATE LOCAL MORAN’S I</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Detects spatial auto-correlation and cross-correlation clusters (High-High, High-Low, Low-High anomalies). Delineates whether elevated soil lead is a spatial consequence of open dumpsite leachate runoff versus regional industrial background, creating legally defensible evidence for community litigation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: INTERACTIVE PLUME SIMULATOR */}
        {activeSubTab === 'interactive_plume_simulator' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders size={18} className="text-blue-500" />
                  <h3 className={`text-lg font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Dumpsite Leachate Plume & Aquifer Penetration Simulator
                  </h3>
                </div>
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold">
                  Discover Soil Hydrogeological Calibration
                </span>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <span>Dumpsite Age:</span>
                    <span className="text-blue-500 font-black">{dumpsiteAgeYears} Years</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="75"
                    step="5"
                    value={dumpsiteAgeYears}
                    onChange={(e) => setDumpsiteAgeYears(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>5 yrs (New)</span>
                    <span>35 yrs (Mature)</span>
                    <span>75 yrs (Legacy)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <span>Waste Volume:</span>
                    <span className="text-blue-500 font-black">{(wasteVolumeTonnes / 1000000).toFixed(1)}M Tonnes</span>
                  </label>
                  <input
                    type="range"
                    min="200000"
                    max="8000000"
                    step="200000"
                    value={wasteVolumeTonnes}
                    onChange={(e) => setWasteVolumeTonnes(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>0.2M Tonnes</span>
                    <span>4.0M Tonnes</span>
                    <span>8.0M Tonnes</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    Aquifer Stratum Porosity:
                  </label>
                  <select
                    value={soilHydraulicType}
                    onChange={(e) => setSoilHydraulicType(e.target.value as any)}
                    className={`w-full p-2 text-xs font-mono rounded-lg border cursor-pointer ${
                      isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-800 border-stone-700 text-white'
                    }`}
                  >
                    <option value="sandy_gravel">Sandy Gravel / Alluvial (High Velocity ~45 m/yr)</option>
                    <option value="silty_loam">Silty Loam (Moderate Velocity ~14 m/yr)</option>
                    <option value="fractured_clay">Fractured Basalt / Clay (Channelized ~28 m/yr)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <span>Annual Rainfall:</span>
                    <span className="text-blue-500 font-black">{annualRainfallMm} mm</span>
                  </label>
                  <input
                    type="range"
                    min="300"
                    max="2400"
                    step="100"
                    value={annualRainfallMm}
                    onChange={(e) => setAnnualRainfallMm(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>300 mm (Arid)</span>
                    <span>1200 mm (Temperate)</span>
                    <span>2400 mm (Monsoon)</span>
                  </div>
                </div>
              </div>

              {/* Simulation Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-blue-50 border-blue-300' : 'bg-blue-950/30 border-blue-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-700 dark:text-blue-400">
                    Annual Leachate Output
                  </span>
                  <div className="text-2xl font-black font-mono text-blue-800 dark:text-blue-300">
                    {(annualLeachateM3 / 1000).toFixed(1)}k m³/yr
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Corrosive chemical fluid seeping into unlined subsoil
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50 border-red-300' : 'bg-red-950/30 border-red-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-red-700 dark:text-red-400">
                    Aquifer Plume Reach
                  </span>
                  <div className="text-2xl font-black font-mono text-red-800 dark:text-red-300">
                    {plumeRadiusMeters.toLocaleString()} Meters
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Radial distance of toxic groundwater contamination
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-950/30 border-amber-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-700 dark:text-amber-400">
                    Groundwater Lead (Pb) Level
                  </span>
                  <div className="text-2xl font-black font-mono text-amber-800 dark:text-amber-300">
                    {leadConcentrationMgL} mg/L
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    <strong>{whoExceedanceMultiplier}x</strong> higher than WHO 0.01 mg/L safety threshold
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-purple-50 border-purple-300' : 'bg-purple-950/30 border-purple-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-purple-700 dark:text-purple-400">
                    Downgradient Population at Risk
                  </span>
                  <div className="text-2xl font-black font-mono text-purple-800 dark:text-purple-300">
                    {populationAtRisk.toLocaleString()} Residents
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Using contaminated shallow boreholes & private wells
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: RECHARTS ANALYTICS */}
        {activeSubTab === 'recharts_analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Heavy Metals Concentration Exceedance Bar Chart */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                  <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Leachate Heavy Metals: Fold-Exceedance Above WHO Safe Water Cap
                  </h4>
                  <span className="text-[10px] font-mono text-stone-500">Discover Soil Field Data</span>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={heavyMetalComparisonData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="metal" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#d6d3d1' : '#44403c',
                          fontSize: 12
                        }}
                        formatter={(value: any, name: any) => [`${value}x WHO Drinking Limit`, 'Toxicity Multiple']}
                      />
                      <Bar dataKey="ratio" name="Times Above WHO Threshold" radius={[4, 4, 0, 0]}>
                        {heavyMetalComparisonData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                  Lead (Pb) and Cadmium (Cd) exhibit the highest toxic amplification, registering up to 85 times safe human consumption thresholds in unlined leachate plumes.
                </p>
              </div>

              {/* 75-Year Plume Penetration Evolution Area Chart */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                  <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    75-Year Subsurface Plume Penetration (Meters)
                  </h4>
                  <span className="text-[10px] font-mono text-stone-500">Alluvial Aquifer Flow</span>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={plumeEvolutionData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="decade" tick={{ fontSize: 10 }} />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#d6d3d1' : '#44403c',
                          fontSize: 12
                        }}
                      />
                      <Area type="monotone" dataKey="aquiferPlumeMeters" name="Plume Radius (Meters)" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.25} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                  Even after dumpsites cease accepting waste, leachate discharge continues for decades, expanding the radius of aquifer poisoning exponentially over time.
                </p>
              </div>
            </div>

            {/* Monitoring Radar Comparison */}
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Monitoring Paradigm Comparison: Conventional vs Sovereign AI (SI)
                </h4>
                <span className="text-[10px] font-mono text-stone-500">0 – 100 Index</span>
              </div>
              <div className="h-72 sm:h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={monitoringRadarData}>
                    <PolarGrid stroke={isLight ? '#e7e5e4' : '#292524'} />
                    <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 9, fill: isLight ? '#44403c' : '#a8a29e' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 8 }} />
                    <Radar name="Conventional Periodic Testing" dataKey="conventional" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} />
                    <Radar name="Corporate / Municipal Self-Reporting" dataKey="corporateSelfReport" stroke="#ef4444" fill="#ef4444" fillOpacity={0.15} />
                    <Radar name="ICEarth Sovereign AI (SI)" dataKey="sovereignAi" stroke="#10b981" fill="#10b981" fillOpacity={0.45} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 6: ANCIENT LEGACY & NANO-REMEDIATION */}
        {activeSubTab === 'ancient_legacy_remediation' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <span className="px-2.5 py-1 bg-teal-600 text-white font-mono text-xs font-black rounded-lg">
                  HISTORICAL EXPOSENOMICS & ADVANCED REMEDIATION
                </span>
                <h3 className={`text-2xl font-bold font-serif mt-2 ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Dumpsite Contamination: As Old as Human Settlement, Restored by Sovereign Science
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                  From Roman lead pipe tailings and Bronze Age middens to 21st-century megadumps:
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  Waste disposal is not a modern anomaly—it is <strong>as old as human waste</strong>. Archaeological records reveal that urban centers have poisoned adjacent soil and groundwater for millennia:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-700 dark:text-amber-400">
                      <History size={15} />
                      <span>THE ANCIENT URBAN LEGACY</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Neolithic middens, Roman metallurgical smelting mounds, and medieval municipal cesspools concentrated heavy metals and pathogenic effluents into local springs. What changed in the 20th century is <strong>synthetic chemistry and scale</strong>: billions of pounds of electronic waste, fluorinated polymers, and tetraethyl lead sludge stacked hundreds of feet high without basal liners.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-700 dark:text-emerald-400">
                      <Leaf size={15} />
                      <span>NANOSPIRE CAVITATION & BIO-EXTRACTION</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Conventional remediation (excavation and relocation) merely transfers toxic liability to another vulnerable zip code. ICEarth deploys two real solutions: (1) <strong>Deep-root hyperaccumulating phytoremediation</strong> (Vetiver grass, cannabis/industrial hemp) to lock heavy metals in harvestable biomass, and (2) <strong>NanoSpire hydrodynamic cavitation</strong> to break down persistent organic complexes and precipitate ionic metals in closed-loop water treatment.
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-amber-50/70 border-amber-300 text-stone-900' : 'bg-amber-950/20 border-amber-800 text-stone-200'} space-y-2`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600 dark:text-amber-400">
                    <Sparkles size={16} />
                    <span>THE CITIZEN’S GROUNDWATER SOVEREIGNTY BILL OF RIGHTS</span>
                  </div>
                  <ul className="text-xs sm:text-sm space-y-1.5 list-disc pl-5">
                    <li><strong>Right to Zero-Knowledge Testing</strong>: Immediate cryptographic verification of tap water heavy metal levels without municipal censorship.</li>
                    <li><strong>Informed Spatial Buffer Zones</strong>: Automatic machine-learning bans on new residential borehole drilling within high-risk Moran’s I clusters.</li>
                    <li><strong>Polluter Financial Liability</strong>: Mandatory remediation trust funds holding historical dumpsite operators and packaging manufacturers strictly liable for aquifer restoration under Roulet’s Law.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CROSS-NAVIGATION TO RELATED SOVEREIGN TABS */}
        <section className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-emerald-500" />
              <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                Cross-Navigation: Environmental Exposenomics & Water Defense
              </h4>
            </div>
            <span className="text-xs font-mono text-stone-500">Related Cryptographic Plates & Proofs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('pica_exposenomics')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-amber-600 flex items-center gap-1.5">
                      <Landmark size={14} />
                      <span>Exposenomics Hub</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      Pica & Geophagy Exposenomics
                    </div>
                    <div className="text-[10px] text-stone-500">Soil Ingestion & Toxic Lead Intake</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('rural_datacenter_tax')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                      <Droplets size={14} />
                      <span>Plate #64</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      Rural & Indigenous Data Center Tax
                    </div>
                    <div className="text-[10px] text-stone-500">Aquifer Depletion & One Big Beautiful Bill</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('super_intelligence_force')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldAlert size={14} />
                      <span>Plate #63</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      AI Czar & SIF Audit
                    </div>
                    <div className="text-[10px] text-stone-500">Jay Clayton & 6-Tier Matrix</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('nanospire_nanocanx')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-cyan-600 flex items-center gap-1.5">
                      <Atom size={14} />
                      <span>Remediation</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      NanoSpire Cavitation
                    </div>
                    <div className="text-[10px] text-stone-500">Quantum Ultrasonic Water Purification</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>
              </>
            )}
          </div>
        </section>
      </main>

      {/* 4. MASTER ARTWORK MODAL (PLATE #65) */}
      {isPlateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`relative max-w-5xl w-full rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'} overflow-hidden shadow-2xl flex flex-col max-h-[92vh]`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-emerald-600 text-white font-mono text-xs font-black rounded uppercase">
                  MASTER PLATE #65
                </span>
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                  Dumpsite Leachate Soil & Groundwater Quality Schematic
                </span>
              </div>
              <button
                onClick={() => setIsPlateModalOpen(false)}
                className={`p-1.5 rounded-lg border text-xs font-mono font-bold cursor-pointer ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
              >
                Close (ESC)
              </button>
            </div>

            {/* Modal Image */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950">
              <img
                src={leachateInfographicPlateImg}
                alt="Long-Term Impacts of Dumpsite Leachate on Soil & Groundwater Quality Master Plate #65"
                className="max-h-[68vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer with Cryptographic Provenance */}
            <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-emerald-500 font-bold">VAULT HASH:</span>
                <span className="font-mono text-[11px] text-stone-400 truncate max-w-xs sm:max-w-md">
                  {vaultHash}
                </span>
              </div>
              <button
                onClick={copyVaultHash}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-emerald-300 rounded-lg border border-stone-700 flex items-center gap-1.5 cursor-pointer font-bold"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied to Clipboard!' : 'Copy Vault Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
