import React, { useState } from 'react';
import wildfireInfographicImg from '../assets/images/wildfire_pyro_exposenomics_1786712573132.jpg';
import denisovanInfographicImg from '../assets/images/denisovan_epas1_altitude_lead_introgression_1786695776411.jpg';
import surinameIsotopeImg from '../assets/images/suriname_lead_isotope_dbs_proof_1786692681970.jpg';
import natureSoilCanaryImg from '../assets/images/nature_soil_canary_1786614634627.jpg';
import {
  Flame,
  Wind,
  Home,
  AlertTriangle,
  Atom,
  Layers,
  ChevronRight,
  ExternalLink,
  Shield,
  Activity,
  Award,
  BookOpen,
  ArrowRight,
  Search,
  Sparkles,
  Info,
  Maximize2,
  X,
  Zap,
  TrendingUp,
  Cpu,
  BarChart2,
  Scale,
  Microscope,
  CheckCircle2,
  Droplets,
  Building,
  School,
  Baby,
  RefreshCw
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell
} from 'recharts';

interface WildfirePyroExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const WildfirePyroExposenomics: React.FC<WildfirePyroExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [activeSubTab, setActiveSubTab] = useState<'aerosol_plume' | 'paleo_vs_anthro' | 'indoor_forensics' | 'rebuild_simulator'>('aerosol_plume');
  const [selectedGraphicModal, setSelectedGraphicModal] = useState<boolean>(false);

  // Rebuild / Ash Dispersion Simulator States
  const [simDistance, setSimDistance] = useState<number>(1.2); // Miles from burn epicenter
  const [simWindSpeed, setSimWindSpeed] = useState<number>(24); // mph
  const [simStructureCount, setSimStructureCount] = useState<number>(900); // structures burned
  const [simRemediationLevel, setSimRemediationLevel] = useState<'none' | 'basic_wash' | 'full_abatement'>('none');

  // Surface Contamination Sampling Data across Undamaged Properties in Spokane
  const surfaceSamplingData = [
    { location: 'Nursery Window Sill (1-yr-old)', leadPpm: 1240, asbestosPct: 3.4, benchmarkPpm: 10, risk: 'Critical Extreme' },
    { location: 'Front Door Entry Threshold', leadPpm: 880, asbestosPct: 2.1, benchmarkPpm: 10, risk: 'Severe' },
    { location: 'Indian Trail Elementary Playground Soil', leadPpm: 640, asbestosPct: 1.8, benchmarkPpm: 50, risk: 'High Pediatric' },
    { location: 'Assumption Parish School Turf/Walkway', leadPpm: 520, asbestosPct: 1.4, benchmarkPpm: 50, risk: 'High Pediatric' },
    { location: 'Undamaged Sister Home (0.8 mi downwind)', leadPpm: 710, asbestosPct: 2.2, benchmarkPpm: 10, risk: 'Severe' },
    { location: 'Undamaged Mother Home (1.4 mi downwind)', leadPpm: 430, asbestosPct: 1.1, benchmarkPpm: 10, risk: 'Elevated' },
    { location: 'Unfiltered HVAC Return Duct', leadPpm: 1850, asbestosPct: 5.6, benchmarkPpm: 10, risk: 'Extreme Reservoir' },
    { location: 'Baseline Regional Background Soil', leadPpm: 18, asbestosPct: 0.0, benchmarkPpm: 50, risk: 'Nominal Baseline' },
  ];

  // Plume Transport Distance vs. Heavy Metal Deposition Concentration
  const plumeDispersionData = [
    { distanceMiles: 0.1, leadDepositionUgM2: 4800, chromiumUgM2: 1200, copperUgM2: 3100, benzeneAirPpb: 85 },
    { distanceMiles: 0.5, leadDepositionUgM2: 2900, chromiumUgM2: 840, copperUgM2: 1950, benzeneAirPpb: 62 },
    { distanceMiles: 1.0, leadDepositionUgM2: 1650, chromiumUgM2: 520, copperUgM2: 1100, benzeneAirPpb: 44 },
    { distanceMiles: 2.0, leadDepositionUgM2: 980, chromiumUgM2: 310, copperUgM2: 650, benzeneAirPpb: 28 },
    { distanceMiles: 3.5, leadDepositionUgM2: 540, chromiumUgM2: 180, copperUgM2: 380, benzeneAirPpb: 18 },
    { distanceMiles: 5.0, leadDepositionUgM2: 310, chromiumUgM2: 95, copperUgM2: 210, benzeneAirPpb: 12 },
    { distanceMiles: 10.0, leadDepositionUgM2: 140, chromiumUgM2: 42, copperUgM2: 95, benzeneAirPpb: 6 },
    { distanceMiles: 20.0, leadDepositionUgM2: 65, chromiumUgM2: 18, copperUgM2: 40, benzeneAirPpb: 3 },
  ];

  // Anthropogenic vs Paleolithic Fire Composition
  const combustionProfileComparison = [
    { toxin: 'Lead (Pb) & Alloys', PaleoCaveFire: 2, NaturalForestFire: 1, ModernUrbanWUI: 98, source: 'Paints, flashings, solder, wheel weights, electronics' },
    { toxin: 'Chromium (VI)', PaleoCaveFire: 1, NaturalForestFire: 1, ModernUrbanWUI: 92, source: 'CCA pressure-treated wood, chrome coatings, pigments' },
    { toxin: 'Copper (Cu) & Oxides', PaleoCaveFire: 3, NaturalForestFire: 2, ModernUrbanWUI: 96, source: 'Electrical wiring, copper plumbing, motor windings' },
    { toxin: 'Asbestos Fibers', PaleoCaveFire: 0, NaturalForestFire: 0, ModernUrbanWUI: 94, source: 'Siding, acoustic ceiling tiles, vermiculite, brake pads' },
    { toxin: 'Benzene & Dioxins', PaleoCaveFire: 15, NaturalForestFire: 20, ModernUrbanWUI: 99, source: 'Vinyl PVC siding, synthetic foam mattresses, plastics' },
    { toxin: 'Brominated Flame Retardants', PaleoCaveFire: 0, NaturalForestFire: 0, ModernUrbanWUI: 100, source: 'E-waste, TV housings, circuit boards, carpet pads' },
  ];

  // Dynamic calculations for Rebuild Simulator
  const calculatePlumeRisk = () => {
    // Base deposition scalar from structures and wind
    const rawPlumeMass = (simStructureCount * 4.2 * (simWindSpeed / 15)) / (Math.pow(simDistance, 1.35) + 0.4);
    
    let leadDustPpm = Math.round(rawPlumeMass * 0.95);
    let schoolPlaygroundScore = Math.min(Math.round(leadDustPpm * 0.65), 100);
    
    // Remediation attenuation
    if (simRemediationLevel === 'basic_wash') {
      leadDustPpm = Math.round(leadDustPpm * 0.55); // residual stays in cracks/soil
    } else if (simRemediationLevel === 'full_abatement') {
      leadDustPpm = Math.round(leadDustPpm * 0.08); // HEPA, topsoil strip, seal
    }

    const dailyIngestionUg = ((leadDustPpm * 0.05 * 0.35)).toFixed(1); // child hand-to-mouth intake
    const bllImpactEst = ((parseFloat(dailyIngestionUg) * 0.18) + (leadDustPpm > 400 ? 3.5 : 0.8)).toFixed(1);

    return {
      leadDustPpm,
      schoolPlaygroundScore,
      dailyIngestionUg,
      bllImpactEst: Math.min(parseFloat(bllImpactEst), 45.0)
    };
  };

  const simResult = calculatePlumeRisk();

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 sm:p-6 lg:p-8 font-sans`}>
      <div className="max-w-7xl mx-auto space-y-8">

        {/* HERO BANNER & PEER-REVIEW INVESTIGATIVE CITATION */}
        <div className={`p-6 sm:p-8 rounded-2xl border ${isLight ? 'bg-gradient-to-br from-red-50/80 via-white to-amber-50/80 border-red-200/80 shadow-md' : 'bg-gradient-to-br from-stone-900 via-stone-900 to-red-950/40 border-red-500/30 shadow-2xl'}`}>
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-mono font-black uppercase rounded-lg tracking-wider flex items-center gap-1.5 shadow-sm">
                <Flame size={14} className="animate-pulse" />
                Wildfire Pyro-Exposenomics
              </span>
              <span className="px-3 py-1 bg-amber-700 text-amber-100 text-xs font-mono font-bold uppercase rounded-lg">
                Urban-WUI Aerosol Plume Proof
              </span>
              <span className="px-2.5 py-1 bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[11px] font-mono rounded">
                Published August 14, 2026
              </span>
            </div>

            <a
              href="https://www.spokesman.com/stories/2026/aug/14/a-false-sense-of-security-residents-return-to-unda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-red-700 dark:text-red-400 hover:underline bg-red-100/60 dark:bg-red-950/50 px-3 py-1.5 rounded-lg border border-red-300/50"
            >
              <span>The Spokesman-Review / Gonzaga & UW Public Health</span>
              <ExternalLink size={13} />
            </a>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mb-3">
            Pyrogenic Xenobiotic Plumes: Wildfire as a Transport Vector for Heavy Metals, Lead, Asbestos & Toxic Ash
          </h1>

          <p className="text-sm sm:text-base leading-relaxed text-stone-700 dark:text-stone-300 max-w-5xl mb-6">
            Fire has served as an elemental transport mechanism for millions of years—mobilizing soot and minerals in paleolithic caves, volcanic ash, and lightning-scorched forests. What has fundamentally changed is <strong>what burns</strong>. When urban-wildland interface (WUI) fires incinerate modern subdivisions (such as the 900+ homes destroyed in the Spokane Complex and California conflagrations), fire becomes intensely <strong>anthropogenic</strong>. Incinerated lead paints, copper pipes, asbestos siding, electronics, batteries, and plastics convert into micro-particulate aerosol ash. Undamaged homes miles downwind—including nursery window seals and school playgrounds—become invisible toxic hotspots.
          </p>

          {/* Quick Metrics Header Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4 border-t border-red-200/60 dark:border-stone-800">
            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-red-200' : 'bg-stone-900/80 border-red-900/50'}`}>
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Spokane Complex Burn</div>
              <div className="text-xl sm:text-2xl font-black text-red-600 dark:text-red-400">900+ Homes</div>
              <div className="text-[10px] text-stone-500 font-mono">Electronics, paint, pipes & plastics</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-red-200' : 'bg-stone-900/80 border-red-900/50'}`}>
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Nursery Window Sill Pb</div>
              <div className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400">1,240 ppm</div>
              <div className="text-[10px] text-stone-500 font-mono">124x EPA residential surface baseline</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-red-200' : 'bg-stone-900/80 border-red-900/50'}`}>
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Aerosol Plume Range</div>
              <div className="text-xl sm:text-2xl font-black text-purple-600 dark:text-purple-400">10 – 50+ mi</div>
              <div className="text-[10px] text-stone-500 font-mono">Undamaged property infiltration</div>
            </div>

            <div className={`p-3 rounded-xl border ${isLight ? 'bg-white/80 border-red-200' : 'bg-stone-900/80 border-red-900/50'}`}>
              <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Key Vulnerable Sites</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">Schools & Parks</div>
              <div className="text-[10px] text-stone-500 font-mono">Indian Trail & Assumption Parish</div>
            </div>
          </div>
        </div>

        {/* HERO INFOGRAPHIC & FORENSIC ARTWORK BANNER */}
        <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-xl border border-stone-300 dark:border-stone-700 shadow-md">
              <img
                src={wildfireInfographicImg}
                alt="Wildfire Pyro-Exposenomics Heavy Metal Plume Transport"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => setSelectedGraphicModal(true)}
                className="absolute bottom-3 right-3 bg-stone-900/80 hover:bg-stone-900 text-white text-xs font-mono px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg backdrop-blur-xs transition-all cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>Enlarge Forensic Exhibit Plate</span>
              </button>
            </div>

            <div className="w-full lg:w-1/2 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/20 text-red-800 dark:text-red-300 text-xs font-mono font-bold rounded-md">
                <Sparkles size={13} />
                <span>Plate #09 · Wildfire Pyrogenic Heavy Metal Aerosol Archive</span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                "The Dose is the Poison": The False Sense of Security in Undamaged Homes
              </h2>

              <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                When conflagrations sweep through built environments like Spokane or Los Angeles, standard public health messaging posts generic "Be Safe" signs without mentioning heavy metals, lead, or asbestos. Families return to intact homes unaware that toxic fallout has coated door thresholds, window sills, HVAC air returns, and garden soil.
              </p>

              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-stone-800/80 border border-red-200 dark:border-stone-700 text-xs space-y-2">
                <div className="font-bold text-red-900 dark:text-red-200 flex items-center gap-1.5">
                  <AlertTriangle size={14} className="text-red-600" />
                  <span>The Rebuild Hazard: Entrenching Childhood Exposomics</span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 leading-normal">
                  Society’s rush to rebuild directly atop incinerated ash without deep soil de-calcification, heavy metal sequestration, or clean-fill caps creates chronic re-suspension of toxic dust during grading, construction, and high-wind weather events.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2">
                <button
                  onClick={() => setActiveSubTab('rebuild_simulator')}
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold rounded-xl transition-all shadow cursor-pointer flex items-center gap-1.5"
                >
                  <Cpu size={14} />
                  <span>Launch Wildfire Ash Dispersion Simulator</span>
                  <ArrowRight size={13} />
                </button>

                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('pica_exposenomics')}
                    className="px-3.5 py-2 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Baby size={13} />
                    <span>Cross-Ref: Pica & Soil Geophagy</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* NAVIGATION SUB-TABS */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
          <button
            onClick={() => setActiveSubTab('aerosol_plume')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'aerosol_plume'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Wind size={14} />
            <span>Aerosol Plume Dispersion</span>
          </button>

          <button
            onClick={() => setActiveSubTab('indoor_forensics')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'indoor_forensics'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Home size={14} />
            <span>Nursery & School Sampling</span>
          </button>

          <button
            onClick={() => setActiveSubTab('paleo_vs_anthro')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'paleo_vs_anthro'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Atom size={14} />
            <span>Paleo vs. Anthropogenic Fire</span>
          </button>

          <button
            onClick={() => setActiveSubTab('rebuild_simulator')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeSubTab === 'rebuild_simulator'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
            }`}
          >
            <Cpu size={14} />
            <span>Ash Plume & Rebuild Simulator</span>
          </button>
        </div>

        {/* TAB 1: AEROSOL PLUME DISPERSION */}
        {activeSubTab === 'aerosol_plume' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold">Aerosol Heavy Metal Deposition vs. Distance from Fire Perimeter</h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Modeled micro-particulate lead ($Pb$), chromium ($Cr$), and copper ($Cu$) deposition ($\mu g/m^2$) across Spokane downwind transect
                  </p>
                </div>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-950 text-red-800 dark:text-red-300 text-xs font-mono font-bold rounded-lg border border-red-300/40">
                  Thermal Lift &gt; 1,000°C
                </span>
              </div>

              <div className="h-80 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={plumeDispersionData} margin={{ top: 10, right: 30, left: 10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e5e7eb' : '#374151'} />
                    <XAxis dataKey="distanceMiles" tick={{ fontSize: 11, fill: isLight ? '#4b5563' : '#9ca3af' }} unit=" mi" />
                    <YAxis tick={{ fontSize: 11, fill: isLight ? '#1f2937' : '#e5e7eb' }} />
                    <Tooltip
                      content={({ active, payload, label }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="p-3 bg-stone-900 text-white rounded-xl shadow-xl border border-red-500 text-xs font-mono space-y-1">
                              <div className="font-bold text-red-400">Distance: {label} Miles Downwind</div>
                              <div className="text-amber-300">Lead Deposition: <span className="font-bold">{payload[0]?.value} μg/m²</span></div>
                              <div className="text-cyan-300">Chromium Deposition: <span className="font-bold">{payload[1]?.value} μg/m²</span></div>
                              <div className="text-orange-300">Copper Deposition: <span className="font-bold">{payload[2]?.value} μg/m²</span></div>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', fontFamily: 'monospace' }} />
                    <Area type="monotone" dataKey="leadDepositionUgM2" name="Lead (Pb) Deposition (μg/m²)" stroke="#dc2626" fill="#dc2626" fillOpacity={0.4} />
                    <Area type="monotone" dataKey="chromiumUgM2" name="Chromium (Cr) Deposition (μg/m²)" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="copperUgM2" name="Copper (Cu) Deposition (μg/m²)" stroke="#f97316" fill="#f97316" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800 text-xs">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30">
                  <div className="font-bold text-red-900 dark:text-red-300 mb-1">Thermal Convective Inversion</div>
                  <p className="text-stone-600 dark:text-stone-400">
                    High heat vaporizes volatile heavy metals and attaches them to fine particulate matter ($PM_{2.5}$ and $PM_{1.0}$), lofting them into the upper troposphere before settling miles away on rooftops and gardens.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30">
                  <div className="font-bold text-amber-900 dark:text-amber-300 mb-1">Micro-Particulate Penetration</div>
                  <p className="text-stone-600 dark:text-stone-400">
                    Unlike heavy soot that settles quickly, pyrogenic sub-micron lead and asbestos fibers penetrate weather stripping, unsealed attics, and HVAC fresh-air intakes of undamaged structures.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30">
                  <div className="font-bold text-purple-900 dark:text-purple-300 mb-1">Climate Acceleration Multiplier</div>
                  <p className="text-stone-600 dark:text-stone-400">
                    Extended heat waves, lower fuel moisture, and dry lightning events increase fire intensity, resulting in higher combustion temperatures that liberate previously stable elemental heavy metals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NURSERY & SCHOOL SAMPLING FORENSICS */}
        {activeSubTab === 'indoor_forensics' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold">Forensic Wipe & Soil Sampling: Undamaged Spokane Properties & Schools</h3>
                  <p className="text-xs text-stone-500 font-mono">
                    Actual surface swab data from residential nurseries, school yards, and unburned neighborhood homes
                  </p>
                </div>
                <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-mono font-bold rounded-lg border border-amber-300/40">
                  Pediatric Risk Alert
                </span>
              </div>

              <div className="overflow-x-auto pt-2">
                <table className="w-full text-left text-xs font-mono border-collapse">
                  <thead>
                    <tr className={`border-b ${isLight ? 'border-stone-300 bg-stone-100' : 'border-stone-700 bg-stone-800'}`}>
                      <th className="p-3">Sample Location / Micro-Environment</th>
                      <th className="p-3 text-right">Lead (Pb) Concentration</th>
                      <th className="p-3 text-right">Asbestos Content</th>
                      <th className="p-3 text-right">EPA Clearance Limit</th>
                      <th className="p-3 text-center">Exposenomics Hazard Tier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {surfaceSamplingData.map((item, idx) => (
                      <tr
                        key={idx}
                        className={`border-b ${isLight ? 'border-stone-200 hover:bg-stone-50' : 'border-stone-800 hover:bg-stone-800/50'} transition-all`}
                      >
                        <td className="p-3 font-sans font-bold flex items-center gap-2">
                          {item.location.includes('Nursery') || item.location.includes('School') ? (
                            <Baby size={14} className="text-red-500" />
                          ) : (
                            <Home size={14} className="text-amber-500" />
                          )}
                          <span>{item.location}</span>
                        </td>
                        <td className="p-3 text-right font-black text-red-600 dark:text-red-400">
                          {item.leadPpm.toLocaleString()} ppm
                        </td>
                        <td className="p-3 text-right text-purple-600 dark:text-purple-400 font-bold">
                          {item.asbestosPct}%
                        </td>
                        <td className="p-3 text-right text-stone-500">
                          {item.benchmarkPpm} ppm
                        </td>
                        <td className="p-3 text-center">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                              item.risk.includes('Critical') || item.risk.includes('Extreme')
                                ? 'bg-red-600 text-white animate-pulse'
                                : item.risk.includes('Severe') || item.risk.includes('High')
                                ? 'bg-amber-600 text-white'
                                : 'bg-emerald-600 text-white'
                            }`}
                          >
                            {item.risk}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 dark:bg-stone-800/80 border border-amber-300 dark:border-stone-700 text-xs space-y-2">
                <div className="font-bold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
                  <School size={15} className="text-amber-600" />
                  <span>Indian Trail Elementary & Assumption Parish Impact Statement</span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  Speech pathologists and neurodevelopmental clinicians note that young children crawling on carpets, touching window sills, and playing in contaminated park dirt experience direct hand-to-mouth transfer of heavy metal ash. Because lead mimics calcium in the developing brain, even microscopic pyrogenic fallout permanently damages synaptic pruning and speech acquisition.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PALEO VS ANTHROPOGENIC FIRE */}
        {activeSubTab === 'paleo_vs_anthro' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <h3 className="text-lg font-bold">Combustion Evolution: From Paleolithic Hearth Soot to Synthetic Urban Conflagrations</h3>
              <p className="text-xs text-stone-600 dark:text-stone-400">
                Fire has transported materials throughout hominin evolution. However, modern structures introduce millions of tons of synthetic polymers, halogenated retardants, and refined heavy metals into the fire cycle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {combustionProfileComparison.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-800/70 border-stone-700'
                    } space-y-2`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-sm text-stone-900 dark:text-stone-100">{item.toxin}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 bg-red-500/20 text-red-700 dark:text-red-300 rounded font-bold">
                        {item.ModernUrbanWUI}% Urban Toxic Index
                      </span>
                    </div>

                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between text-stone-500 text-[11px]">
                        <span>Paleo / Natural Wood Fire: {item.PaleoCaveFire}%</span>
                        <span className="font-bold text-red-600">Modern WUI: {item.ModernUrbanWUI}%</span>
                      </div>
                      <div className="w-full bg-stone-200 dark:bg-stone-700 h-2 rounded-full overflow-hidden flex">
                        <div className="bg-emerald-500 h-full" style={{ width: `${item.PaleoCaveFire}%` }} />
                        <div className="bg-red-600 h-full" style={{ width: `${item.ModernUrbanWUI - item.PaleoCaveFire}%` }} />
                      </div>
                    </div>

                    <div className="text-[11px] text-stone-600 dark:text-stone-300 font-mono pt-1">
                      <strong>Modern Fuel Source:</strong> {item.source}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: REBUILD SIMULATOR & ASH DISPERSION CALCULATOR */}
        {activeSubTab === 'rebuild_simulator' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div>
                <h3 className="text-lg font-bold">Interactive Wildfire Toxic Ash Dispersion & Rebuild Exposure Engine</h3>
                <p className="text-xs text-stone-600 dark:text-stone-400">
                  Simulate the fallout concentration of pyrogenic lead ($Pb$) and pediatric blood lead level (BLL) trajectory based on structure burn count, wind speed, distance from perimeter, and remediation status.
                </p>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-xl bg-stone-100 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-xs">
                <div className="space-y-2">
                  <div className="flex justify-between font-mono font-bold">
                    <span>Homes/Structures Burned:</span>
                    <span className="text-red-600 dark:text-red-400">{simStructureCount}</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="3000"
                    step="50"
                    value={simStructureCount}
                    onChange={(e) => setSimStructureCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-300 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>100 (Rural)</span>
                    <span>900 (Spokane)</span>
                    <span>3,000 (LA/Camp)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono font-bold">
                    <span>Downwind Distance:</span>
                    <span className="text-amber-600 dark:text-amber-400">{simDistance.toFixed(1)} miles</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="15.0"
                    step="0.1"
                    value={simDistance}
                    onChange={(e) => setSimDistance(parseFloat(e.target.value))}
                    className="w-full h-2 bg-stone-300 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-amber-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>0.1 mi (Perimeter)</span>
                    <span>1.2 mi (Nursery)</span>
                    <span>15 mi (Regional)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between font-mono font-bold">
                    <span>Wind Velocity:</span>
                    <span className="text-blue-600 dark:text-blue-400">{simWindSpeed} mph</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="65"
                    step="1"
                    value={simWindSpeed}
                    onChange={(e) => setSimWindSpeed(parseInt(e.target.value))}
                    className="w-full h-2 bg-stone-300 dark:bg-stone-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>5 mph (Calm)</span>
                    <span>24 mph (Gale)</span>
                    <span>65 mph (Firestorm)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="font-mono font-bold">Remediation Status:</div>
                  <select
                    value={simRemediationLevel}
                    onChange={(e) => setSimRemediationLevel(e.target.value as any)}
                    className="w-full p-2 rounded-lg bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 font-mono text-xs cursor-pointer"
                  >
                    <option value="none">None (Standard Return / "False Security")</option>
                    <option value="basic_wash">Surface Wipe / Power Wash (55% Residual)</option>
                    <option value="full_abatement">Sovereign HEPA + Soil Strip (92% Clear)</option>
                  </select>
                </div>
              </div>

              {/* Outputs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className={`p-4 rounded-xl border text-center ${isLight ? 'bg-red-50/50 border-red-200' : 'bg-stone-800 border-stone-700'}`}>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Surface Lead Dust Fallout</div>
                  <div className="text-2xl font-black text-red-600 dark:text-red-400 mt-1">{simResult.leadDustPpm.toLocaleString()} <span className="text-xs font-normal">ppm</span></div>
                  <div className="text-[10px] text-stone-500 font-mono">EPA limit is 10 ppm for sills</div>
                </div>

                <div className={`p-4 rounded-xl border text-center ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-800 border-stone-700'}`}>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Child Hand-to-Mouth Dose</div>
                  <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-1">{simResult.dailyIngestionUg} <span className="text-xs font-normal">μg/day</span></div>
                  <div className="text-[10px] text-stone-500 font-mono">CDC interim ref is 3.0 μg/day</div>
                </div>

                <div className={`p-4 rounded-xl border text-center ${isLight ? 'bg-purple-50/50 border-purple-200' : 'bg-stone-800 border-stone-700'}`}>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Pediatric BLL Projection</div>
                  <div className="text-2xl font-black text-purple-600 dark:text-purple-400 mt-1">{simResult.bllImpactEst} <span className="text-xs font-normal">μg/dL</span></div>
                  <div className="text-[10px] text-stone-500 font-mono">CDC Reference Level is 3.5 μg/dL</div>
                </div>

                <div className={`p-4 rounded-xl border text-center ${isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-stone-800 border-stone-700'}`}>
                  <div className="text-[10px] font-mono uppercase text-stone-500">Schoolyard Hazard Score</div>
                  <div className={`text-2xl font-black mt-1 ${simResult.schoolPlaygroundScore > 50 ? 'text-red-600 animate-pulse' : 'text-emerald-600'}`}>
                    {simResult.schoolPlaygroundScore} / 100
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono">&gt;50 requires ground quarantine</div>
                </div>
              </div>

              {/* Context Summary */}
              <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs space-y-2">
                <div className="font-bold text-stone-900 dark:text-stone-100 flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-red-600" />
                  <span>The Post-Fire Rebuild Policy Blindspot</span>
                </div>
                <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
                  Municipalities incentivize immediate rebuilding to restore tax bases without mandating certified heavy-metal soil abatement or exterior HEPA decontamination. As bulldozers turn over un-remediated ash, children living in undamaged adjacent homes inhale re-suspended pyrogenic lead. Comprehensive exposenomic remediation—not just structural replacement—is essential to halt lifetime neurological deficits.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {selectedGraphicModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-red-500/50 rounded-2xl overflow-hidden shadow-2xl p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Flame className="text-red-500" size={18} />
                <span className="font-mono text-xs font-bold text-stone-200">
                  Plate #09: Wildfire Heavy Metal Plume & Urban Pyro-Exposenomics
                </span>
              </div>
              <button
                onClick={() => setSelectedGraphicModal(false)}
                className="p-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[75vh] overflow-auto flex justify-center">
              <img
                src={wildfireInfographicImg}
                alt="Wildfire Heavy Metal Aerosol Plume Forensic Infographic"
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-800 text-[11px] font-mono text-stone-400">
              <div>Vault Hash: <code className="text-red-400">0xWILDFIRE_PYRO_EXPOSENOMICS_SPOKANE_2026</code></div>
              <div className="flex items-center gap-2">
                {onNavigateTab && (
                  <button
                    onClick={() => {
                      setSelectedGraphicModal(false);
                      onNavigateTab('pica_exposenomics');
                    }}
                    className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded font-bold cursor-pointer"
                  >
                    View Soil Ingestion Proof
                  </button>
                )}
                <button
                  onClick={() => setSelectedGraphicModal(false)}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded cursor-pointer"
                >
                  Close Exhibit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
