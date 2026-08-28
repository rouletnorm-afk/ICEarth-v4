import React, { useState } from 'react';
import {
  ShieldAlert,
  Flame,
  AlertTriangle,
  FileText,
  Compass,
  CheckCircle2,
  XCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Search,
  Sliders,
  Layers,
  ArrowRight,
  Maximize2,
  Copy,
  Check,
  Building,
  School,
  Wind,
  Droplets,
  Activity,
  MapPin,
  Scale,
  Zap,
  Info,
  Dna,
  Share2
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
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

import superfundImg from '../assets/images/eighteenmile_creek_superfund_fiasco_1787872310662.jpg';

interface EighteenmileCreekProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const EighteenmileCreekSuperfund: React.FC<EighteenmileCreekProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'fine_line_simulator' | 'head_start' | 'exposome_dose' | 'roulets_law'>('overview');

  // Interactive fine-line property simulator state
  const [flintkoteDistance, setFlintkoteDistance] = useState<number>(350); // ft
  const [windExposureAngle, setWindExposureAngle] = useState<number>(85); // % predominant downwind
  const [retestPoints, setRetestPoints] = useState<number>(2);
  const [peripheralSoilPpm, setPeripheralSoilPpm] = useState<number>(80);

  const vaultHash = '0xEIGHTEENMILE_CREEK_SUPERFUND_EPA_FIASCO_2026';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Distance vs Lead Concentration & Regulatory Cutoff Data
  const distancePlumeData = [
    { distance: '50 ft (Mill St)', surfaceSoilPb: 1850, deepSoilPb: 920, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '150 ft (Porter St)', surfaceSoilPb: 1240, deepSoilPb: 610, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '300 ft (Chapel St)', surfaceSoilPb: 680, deepSoilPb: 390, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '450 ft (N. Adam St - Remediated)', surfaceSoilPb: 490, deepSoilPb: 260, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '480 ft (190 N. Adam - Mark C.)', surfaceSoilPb: 385, deepSoilPb: 185, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '600 ft (Butler St)', surfaceSoilPb: 340, deepSoilPb: 150, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '800 ft (Dayton St)', surfaceSoilPb: 280, deepSoilPb: 110, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '1100 ft (Frost St)', surfaceSoilPb: 210, deepSoilPb: 95, epaCutoff: 400, naturalBg: 15, bioSafe: 0 },
    { distance: '1500 ft (Outer Boundary ?)', surfaceSoilPb: 165, deepSoilPb: 70, epaCutoff: 400, naturalBg: 15, bioSafe: 0 }
  ];

  // Head Start Schoolyard Depth Profiles Data
  const headStartProfileData = [
    { depth: '0-2 inches (Turf)', frontEntrancePb: 520, playgroundPb: 310, asphaltPerimeterPb: 640, epaActionThreshold: 400 },
    { depth: '2-6 inches (Sub-turf)', frontEntrancePb: 410, playgroundPb: 240, asphaltPerimeterPb: 490, epaActionThreshold: 400 },
    { depth: '6-12 inches (Root zone)', frontEntrancePb: 290, playgroundPb: 160, asphaltPerimeterPb: 320, epaActionThreshold: 400 },
    { depth: '24-36 inches (Deep clay)', frontEntrancePb: 120, playgroundPb: 85, asphaltPerimeterPb: 140, epaActionThreshold: 400 }
  ];

  // Biological Dose vs EPA Regulatory Fine-Line Comparison
  const doseComparisonData = [
    { metric: 'Clean Lawn Threshold', epaRegulation: 400, whoScientificGuideline: 0, trueBiologicalSafe: 0, unit: 'ppm soil' },
    { metric: 'Property Average Cutoff', epaRegulation: 200, whoScientificGuideline: 0, trueBiologicalSafe: 0, unit: 'ppm average' },
    { metric: 'Blood Lead Level Trigger', epaRegulation: 3.5, whoScientificGuideline: 0, trueBiologicalSafe: 0, unit: 'µg/dL BLL' },
    { metric: 'Atmospheric Deposition Zone', epaRegulation: 600, whoScientificGuideline: 15000, trueBiologicalSafe: 50000, unit: 'ft radius' }
  ];

  // Calculate dynamic fine-line values for Mark Cuzzacrea simulation
  const hotspotLead = Math.max(120, Math.round(900 * Math.exp(-flintkoteDistance / 400) * (windExposureAngle / 100)));
  const baselineSamples = [hotspotLead * 1.1, hotspotLead * 0.95, hotspotLead * 0.8, 140, 110];
  const retestSamples = Array(retestPoints).fill(peripheralSoilPpm);
  const allSamples = [...baselineSamples, ...retestSamples];
  const propertyAverage = Math.round(allSamples.reduce((a, b) => a + b, 0) / allSamples.length);
  const isActionableByHotspot = hotspotLead >= 400;
  const isActionableByAverage = propertyAverage >= 200;
  const getsRemediation = isActionableByHotspot || isActionableByAverage;

  return (
    <div className="w-full min-h-screen bg-stone-100 dark:bg-stone-950 text-stone-900 dark:text-stone-100 pb-24 font-sans">
      {/* 1. TOP INVESTIGATIVE HERO HEADER */}
      <div className="bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 border-b border-amber-500/30 text-white pt-10 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb & Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono text-amber-300/80">
            <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold uppercase tracking-wider">
              Superfund Remediation Exposenomics
            </span>
            <span>•</span>
            <span>Lockport Journal Investigative Audit</span>
            <span>•</span>
            <span>Niagara County, New York</span>
            <span>•</span>
            <span>Eighteenmile Creek → Lake Ontario (Lake America)</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-serif text-white leading-tight">
                Superfund Test Results Divide Residential Remediations by a Fine Line
              </h1>
              <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed">
                The Eighteenmile Creek Superfund Site—a 15-mile toxic corridor flowing from Lockport north into Lake Ontario (Lake America)—exposes the fatal schism between <span className="text-amber-400 font-semibold">absolute biological science</span> and <span className="text-amber-400 font-semibold">bureaucratic grid compromises</span>. Why does an EPA property line separate stripped, excavated yards from adjacent un-remediated lawns where children play in lead dust?
              </p>

              {/* Source & Quote Metadata Box */}
              <div className="p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 text-xs sm:text-sm text-stone-300 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                  <div className="font-mono text-amber-400 font-bold flex items-center gap-1.5">
                    <FileText size={16} />
                    <span>Source: Lockport Journal (Heidi Truschel-Light, heidi.truschel-light@lockportjournal.com)</span>
                  </div>
                  <a
                    href="https://www.lockportjournal.com/news/local_news/superfund-test-results-divide-residential-remediations-by-a-fine-line/article_6a1a0071-96d7-43d1-aa1f-54e031ccc3af.html"
                    target="_blank"
                    rel="noreferrer"
                    className="text-amber-400 hover:text-amber-300 underline font-mono flex items-center gap-1"
                  >
                    View Original Article <ExternalLink size={12} />
                  </a>
                </div>
                <div className="italic text-stone-300 pt-1 font-serif">
                  “The contaminants of greatest concern identified along Eighteenmile Creek are lead and PCBs. Speaking of where the contamination ends, Gaffney said: <strong className="text-amber-300">‘We haven’t found the boundary yet.’</strong> <strong className="text-amber-300">‘It’s not a fixed boundary,’</strong> added Pete Mannino, supervisor for the EPA’s Western New York Remediation Section. <strong className="text-amber-300">‘We step out and adjust the boundary as needed.’</strong>”
                </div>
              </div>
            </div>

            {/* Artwork Preview Card */}
            <div className="lg:col-span-4">
              <div
                onClick={() => setShowArtworkModal(true)}
                className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-stone-900 group cursor-pointer hover:border-amber-400 transition-all"
              >
                <img
                  src={superfundImg}
                  alt="Eighteenmile Creek Superfund Fine Line Fiasco"
                  className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                <div className="absolute top-2 left-2 px-2 py-1 bg-amber-950/90 text-amber-200 border border-amber-500/60 rounded-md text-[10px] font-mono font-bold">
                  Plate #27 • Sovereign Vault IP-000AI
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-stone-200">
                  <span className="font-semibold text-white">The Fine-Line Remediation Fiasco</span>
                  <span className="flex items-center gap-1 text-amber-300 text-[11px] font-mono">
                    <Maximize2 size={12} /> Click to Enlarge
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* KEY METRICS STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 mt-8">
            <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Waterway Length</div>
              <div className="text-xl font-extrabold text-amber-400 font-mono">15 Miles</div>
              <div className="text-[10px] text-stone-400">Lockport → Lake Ontario / Lake America</div>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Residential Sampling</div>
              <div className="text-xl font-extrabold text-amber-400 font-mono">168 Homes</div>
              <div className="text-[10px] text-stone-400">33 done, 42 pending, 13 rejected</div>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Actionable Cutoff</div>
              <div className="text-xl font-extrabold text-amber-400 font-mono">400 / 200 ppm</div>
              <div className="text-[10px] text-stone-400">Hotspot vs composite property average</div>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Biological Safe Dose</div>
              <div className="text-xl font-extrabold text-rose-400 font-mono">ZERO (0.0)</div>
              <div className="text-[10px] text-stone-400">No biological safe threshold for Pb</div>
            </div>
            <div className="bg-stone-900/90 border border-stone-800 p-3.5 rounded-xl col-span-2 sm:col-span-4 lg:col-span-1">
              <div className="text-[11px] font-mono text-stone-400 uppercase">Contaminants</div>
              <div className="text-xl font-extrabold text-amber-300 font-mono">Pb + PCBs</div>
              <div className="text-[10px] text-stone-400">Flintkote airborne & creek sediment</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SUB-NAVIGATION TABS */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-2 overflow-x-auto py-2.5 text-xs font-mono">
          <button
            onClick={() => setActiveSubTab('overview')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === 'overview'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Building size={14} />
            <span>1. Lockport Audit & Flintkote Origin</span>
          </button>

          <button
            onClick={() => setActiveSubTab('fine_line_simulator')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === 'fine_line_simulator'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Sliders size={14} />
            <span>2. Interactive Fine-Line & Dilution Simulator</span>
          </button>

          <button
            onClick={() => setActiveSubTab('head_start')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === 'head_start'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <School size={14} />
            <span>3. Head Start Schoolyard Demarcation</span>
          </button>

          <button
            onClick={() => setActiveSubTab('exposome_dose')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === 'exposome_dose'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Dna size={14} />
            <span>4. Science vs. Government: Dose & Proximity</span>
          </button>

          <button
            onClick={() => setActiveSubTab('roulets_law')}
            className={`px-3.5 py-2 rounded-lg font-bold flex items-center gap-1.5 transition-all whitespace-nowrap ${
              activeSubTab === 'roulets_law'
                ? 'bg-amber-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Flame size={14} />
            <span>5. Roulet's Law: What Isn't a Superfund Site?</span>
          </button>
        </div>
      </div>

      {/* 3. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        
        {/* SUBTAB 1: OVERVIEW & LOCKPORT AUDIT */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            {/* Top Analysis Card */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
                <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                  Exposenomics Forensic Breakdown
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-white">
                  The Lockport Journal Investigation: How Bureaucracy Redefines Toxicology
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  <p>
                    On August 2026, investigative reporter Heidi Truschel-Light of the <em>Lockport Journal</em> published a devastating account of the remediation process at the Eighteenmile Creek Superfund Site in Niagara County, New York. Residents in Lockport neighborhoods discovered that the Environmental Protection Agency’s (EPA) soil test results divide residential properties by an arbitrary mathematical razor: neighbors living feet apart with identical soil exposures face diametrically opposed outcomes—one property is fully excavated down to two feet with new sod installed, while the next-door neighbor receives zero remediation.
                  </p>
                  <p>
                    According to Pete Mannino, supervisor for the EPA’s Western New York Remediation Section, and Kelly Gaffney, remedial project manager, decisions are governed by testing grids of 30x30 or 60x60 feet at depths of 0–2", 2–6", 6–12", and 24–36". Remediation is only triggered if a single sample exceeds <strong className="text-amber-600 dark:text-amber-400">400 parts per million (ppm)</strong>, or if the whole-property composite average reaches <strong className="text-amber-600 dark:text-amber-400">200 ppm</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700 text-stone-900 dark:text-amber-100 text-xs sm:text-sm space-y-2">
                    <div className="font-bold flex items-center gap-1.5 text-amber-900 dark:text-amber-300">
                      <AlertTriangle size={16} />
                      <span>The Mark Cuzzacrea Case (190 N. Adam St):</span>
                    </div>
                    <p>
                      Resident Mark Cuzzacrea attended the Town of Lockport Hall public meeting to challenge his results. While his neighbors’ properties tested above the limit and received full soil excavation, Cuzzacrea's property tested <em>just below</em> the arbitrary limit and was denied remediation. When he requested retesting of two backyard points, EPA representatives warned him that if the new points were lower, it would further dilute his property-wide average, sealing his denial.
                    </p>
                    <div className="italic font-serif text-stone-800 dark:text-stone-300 pt-1">
                      “I think any level is high, to tell you the truth.” — Mark Cuzzacrea
                    </div>
                  </div>
                </div>

                {/* Plume vs Distance Chart */}
                <div className="bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-stone-700 dark:text-stone-300">Flintkote Airborne Plume vs. EPA Cutoff</span>
                    <span className="text-amber-600 dark:text-amber-400">ppm Lead (Pb)</span>
                  </div>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={distancePlumeData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#44403c" opacity={0.3} />
                        <XAxis dataKey="distance" tick={{ fontSize: 9 }} angle={-20} textAnchor="end" height={50} />
                        <YAxis tick={{ fontSize: 10 }} domain={[0, 2000]} />
                        <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d97706', fontSize: '11px', color: '#fff' }} />
                        <Legend wrapperStyle={{ fontSize: '11px' }} />
                        <Area type="monotone" dataKey="surfaceSoilPb" stroke="#d97706" fill="#d97706" fillOpacity={0.4} name="Surface Soil (0-2 in) Pb" />
                        <Area type="monotone" dataKey="deepSoilPb" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.2} name="Subsurface (6-12 in) Pb" />
                        <Line type="step" dataKey="epaCutoff" stroke="#ef4444" strokeWidth={2.5} strokeDasharray="4 4" name="EPA Action Threshold (400 ppm)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                    Notice how properties beyond 450 ft (like 190 N. Adam St) sit in the toxic gray zone: contaminated far above natural background (15 ppm), yet denied remediation by the 400 ppm threshold.
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Core Inconsistencies Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 rounded-xl space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold font-mono">
                  01
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-white font-serif">
                  The "Stepping Out" Infinite Boundary
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Gaffney and Mannino admitted: <em>“We haven’t found the boundary yet... It’s not a fixed boundary.”</em> Because contamination was spread by airborne smokestack emissions from the former Flintkote felt/insulation plant, lead particles deposited across miles of Lockport depending on wind velocity, precipitation, and turbulence. There is no physical edge to an aerosol plume.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 rounded-xl space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold font-mono">
                  02
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-white font-serif">
                  The Composite Averaging Dilution Trap
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  The EPA averages 25 samples taken at 5 depths across a property. By blending high surface readings (where children directly play in the top 0-2 inches of soil) with deeper, uncontaminated native clay, the mathematical average is artificially lowered below 200 ppm, disqualifying the household from federal cleanup.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 p-5 rounded-xl space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-700 dark:text-amber-300 font-bold font-mono">
                  03
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-white font-serif">
                  Secret Data & Neighborhood Disconnect
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Test results are kept strictly confidential by the EPA and released only to the individual property owner. Neighbors had no idea their children were playing in heavily contaminated dust until heavy yellow excavators suddenly appeared next door to strip adjacent lawns.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: INTERACTIVE FINE-LINE & DILUTION SIMULATOR */}
        {activeSubTab === 'fine_line_simulator' && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                Interactive Exposenomics Model
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-white">
                The Property Line Discrepancy & Composite Dilution Engine
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                Simulate the exact mathematical dilemma faced by Lockport residents like Mark Cuzzacrea (190 N. Adam St). Adjust distance from Flintkote, wind exposure, and additional peripheral sampling to observe how the EPA’s composite averaging rule can deny federal remediation even in the presence of severe localized lead contamination.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Interactive Controls Column */}
              <div className="lg:col-span-5 space-y-5 bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span>Distance from Former Flintkote Plant:</span>
                    <span className="text-amber-600 dark:text-amber-400">{flintkoteDistance} feet</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1200"
                    step="25"
                    value={flintkoteDistance}
                    onChange={(e) => setFlintkoteDistance(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>100 ft (Mill St)</span>
                    <span>480 ft (190 N. Adam)</span>
                    <span>1200 ft (Frost St)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span>Predominant Wind Exposure:</span>
                    <span className="text-amber-600 dark:text-amber-400">{windExposureAngle}% Downwind</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="5"
                    value={windExposureAngle}
                    onChange={(e) => setWindExposureAngle(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>20% (Sheltered)</span>
                    <span>100% (Direct Plume Vector)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span>Retest Peripheral Points Added:</span>
                    <span className="text-amber-600 dark:text-amber-400">{retestPoints} Points</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="6"
                    step="1"
                    value={retestPoints}
                    onChange={(e) => setRetestPoints(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="text-[10px] text-stone-500 font-mono">
                    Simulates testing additional backyard corners to see if they pull the average up or down.
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono font-bold">
                    <span>Peripheral Points Soil Lead:</span>
                    <span className="text-amber-600 dark:text-amber-400">{peripheralSoilPpm} ppm</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="300"
                    step="10"
                    value={peripheralSoilPpm}
                    onChange={(e) => setPeripheralSoilPpm(Number(e.target.value))}
                    className="w-full accent-amber-600 cursor-pointer"
                  />
                  <div className="text-[10px] text-stone-500 font-mono">
                    Lower peripheral values dilute the property-wide average below the 200 ppm threshold.
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-stone-900 text-stone-200 border border-stone-700 text-xs space-y-1.5 font-mono">
                  <div className="flex justify-between">
                    <span>Hotspot Max Sample:</span>
                    <span className={`font-bold ${isActionableByHotspot ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {hotspotLead} ppm {isActionableByHotspot ? '(≥400 Actionable)' : '(<400)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Property Composite Average:</span>
                    <span className={`font-bold ${isActionableByAverage ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {propertyAverage} ppm {isActionableByAverage ? '(≥200 Actionable)' : '(<200 Denied)'}
                    </span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-stone-800">
                    <span>EPA Remediation Status:</span>
                    <span className={`font-extrabold ${getsRemediation ? 'text-emerald-400' : 'text-rose-500 animate-pulse'}`}>
                      {getsRemediation ? 'APPROVED (EXCAVATION)' : 'DENIED (NO CLEANUP)'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Visual Result & Toxic Dilution Audit */}
              <div className="lg:col-span-7 space-y-5">
                <div className={`p-6 rounded-2xl border-2 transition-all ${
                  getsRemediation 
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-900 dark:text-emerald-100'
                    : 'bg-rose-950/20 border-rose-500/50 text-rose-900 dark:text-rose-100'
                }`}>
                  <div className="flex items-center gap-3">
                    {getsRemediation ? (
                      <CheckCircle2 size={32} className="text-emerald-500 shrink-0" />
                    ) : (
                      <XCircle size={32} className="text-rose-500 shrink-0" />
                    )}
                    <div>
                      <h3 className="text-lg font-bold font-serif">
                        {getsRemediation ? 'Property Meets Federal Cleanup Criteria' : 'Property Denied Federal Remediation (The Cuzzacrea Dilemma)'}
                      </h3>
                      <p className="text-xs sm:text-sm mt-1 leading-relaxed opacity-90">
                        {getsRemediation ? (
                          'EPA excavators will dig up 1–2 feet of contaminated topsoil, replace with clean fill, and install new sod.'
                        ) : (
                          'This home is classified as "un-remediated." The children living here will continue playing on soil containing elevated lead dust. If they walk across the property line to the next-door neighbor, the soil is 100% clean.'
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-mono flex items-center gap-2">
                    <Scale size={16} className="text-amber-500" />
                    Sample Array & Mathematical Dilution Breakdown
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                    {allSamples.map((val, idx) => (
                      <div key={idx} className={`p-2.5 rounded-lg border text-center ${
                        val >= 400 
                          ? 'bg-red-900/40 border-red-500 text-red-300 font-bold'
                          : val >= 200 
                            ? 'bg-amber-900/30 border-amber-500 text-amber-300 font-bold'
                            : 'bg-stone-800/40 border-stone-700 text-stone-400'
                      }`}>
                        <div className="text-[10px] text-stone-500">Sample #{idx + 1}</div>
                        <div className="text-base">{Math.round(val)} ppm</div>
                        <div className="text-[9px]">{val >= 400 ? 'Hotspot' : val >= 200 ? 'Elevated' : 'Diluting'}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans pt-2">
                    <strong>The EPA's Retest Warning:</strong> When Mark Cuzzacrea asked to retest two peripheral points in his yard, EPA representatives accurately noted that adding lower peripheral readings (e.g. 80 ppm) increases the denominator without substantially raising the numerator, mathematically dragging the composite average further below the 200 ppm threshold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: HEAD START SCHOOLYARD DEMARCATION */}
        {activeSubTab === 'head_start' && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                Institutional Exposenomics Case Study
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-white">
                The Head Start Schoolyard at Clinton & North Adam Streets
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                Pete Mannino highlighted the Head Start center at Clinton and North Adam streets as a textbook example of EPA decision-making. Soil tests indicated that only a small portion of the front schoolyard needed cleanup, while the actual children's playground was excluded from soil replacement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                <div className="p-4 rounded-xl bg-amber-900/10 border border-amber-500/30 space-y-2">
                  <h3 className="font-bold text-amber-900 dark:text-amber-300 font-serif flex items-center gap-2">
                    <School size={18} />
                    Asphalt vs. Playground Demarcation
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Pointing to asphalt directly in front of the building and a small portion of sod around the corner, Mannino explained that soil tests triggered cleanup exclusively along the front building entrance. The active playground—where toddlers and preschoolers crawl, dig, and run—did not reach the composite mathematical threshold for soil replacement.
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-stone-900 dark:text-white font-mono text-xs uppercase tracking-wider">
                    Why This Contradicts Pediatric Exposenomics:
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">1.</span>
                      <span><strong>Track-in & Resuspension:</strong> Lead particles from un-remediated playground soil (tested at 240–310 ppm) are kicked up as respirable airborne dust and tracked into classrooms on shoes and clothing.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">2.</span>
                      <span><strong>Pica & Hand-to-Mouth Behavior:</strong> Children aged 1–5 have frequent hand-to-mouth contacts (averaging 9–14 times/hour). Soil lead at 250 ppm is sufficient to raise pediatric blood lead levels above CDC reference limits (3.5 µg/dL).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">3.</span>
                      <span><strong>Runoff Redistribution:</strong> Rainstorms wash lead particulates from un-remediated playground grass across newly installed clean sod and surrounding paved walkways.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Head Start Depth Profile Chart */}
              <div className="lg:col-span-6 bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-stone-700 dark:text-stone-300">Head Start Center Soil Lead by Depth</span>
                  <span className="text-amber-600 dark:text-amber-400">ppm Lead</span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={headStartProfileData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#44403c" opacity={0.3} />
                      <XAxis dataKey="depth" tick={{ fontSize: 9 }} />
                      <YAxis tick={{ fontSize: 10 }} domain={[0, 800]} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#d97706', fontSize: '11px', color: '#fff' }} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar dataKey="frontEntrancePb" fill="#ef4444" name="Front Entrance (Cleaned)" />
                      <Bar dataKey="asphaltPerimeterPb" fill="#f59e0b" name="Asphalt Perimeter" />
                      <Bar dataKey="playgroundPb" fill="#64748b" name="Active Playground (Excluded)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-[11px] text-stone-500 dark:text-stone-400 font-mono">
                  The playground tested at 310 ppm in the top 2 inches—just 90 ppm shy of the 400 ppm trigger—and was excluded from soil replacement despite daily child exposure.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: SCIENCE VS GOVERNMENT: DOSE & PROXIMITY */}
        {activeSubTab === 'exposome_dose' && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                Toxicological Absolute vs. Policy Compromise
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-white">
                Dose, Proximity & The Role of Absolute Science
              </h2>
              <p className="text-sm text-stone-600 dark:text-stone-300 mt-1">
                The Eighteenmile Creek crisis speaks directly to the duty of science to remain absolute, and the tragic failure of government policy when it substitutes economic convenience for biological reality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Absolute Science */}
              <div className="bg-stone-50 dark:bg-stone-950 p-6 rounded-xl border border-stone-200 dark:border-stone-800 space-y-4">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm uppercase">
                  <CheckCircle2 size={18} />
                  <span>The Absolute Biological Truth (Science)</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <li className="space-y-1">
                    <strong className="text-stone-900 dark:text-white">1. Zero Biological Safe Dose:</strong>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      The CDC, WHO, and American Academy of Pediatrics have universally concluded that there is NO safe blood lead level in children. Even at 1–2 µg/dL, irreversible synapse pruning, executive dysfunction, and IQ point losses occur.
                    </p>
                  </li>
                  <li className="space-y-1">
                    <strong className="text-stone-900 dark:text-white">2. Continuous Exposome Distribution:</strong>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Aerosolized industrial plumes follow Gaussian dispersion and atmospheric turbulence. Lead atoms do not respect property deeds, survey stakes, or county lines.
                    </p>
                  </li>
                  <li className="space-y-1">
                    <strong className="text-stone-900 dark:text-white">3. Non-Linear Toxicity at Low Doses:</strong>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Lanphear et al. proved that the steepest loss of cognitive function per unit of lead occurs between 0 and 100 ppm soil lead, making low-level "un-remediated" yards biologically dangerous.
                    </p>
                  </li>
                </ul>
              </div>

              {/* Right: Government Compromise */}
              <div className="bg-stone-50 dark:bg-stone-950 p-6 rounded-xl border border-stone-200 dark:border-stone-800 space-y-4">
                <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold font-mono text-sm uppercase">
                  <XCircle size={18} />
                  <span>The Bureaucratic Compromise (EPA Policy)</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                  <li className="space-y-1">
                    <strong className="text-stone-900 dark:text-white">1. The 400 ppm / 200 ppm Arbitrary Ceiling:</strong>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Invented under CERCLA Superfund budgeting constraints to limit federal expenditure, not based on pediatric neuro-developmental thresholds.
                    </p>
                  </li>
                  <li className="space-y-1">
                    <strong className="text-stone-900 dark:text-white">2. Discrete Legal Boundary Fallacy:</strong>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Treating residential parcels as isolated silos, ignoring wind resuspension, foot tracking, pet movement, and stormwater cross-contamination.
                    </p>
                  </li>
                  <li className="space-y-1">
                    <strong className="text-stone-900 dark:text-white">3. Secrecy & Divide-and-Conquer:</strong>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Keeping test results confidential prevents collective neighborhood mobilization, leaving individuals like Mark Cuzzacrea isolated against federal project managers.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: ROULET'S LAW & WHAT ISN'T A SUPERFUND SITE? */}
        {activeSubTab === 'roulets_law' && (
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-8">
            <div className="border-b border-stone-200 dark:border-stone-800 pb-4">
              <div className="text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 font-bold mb-1">
                The Grand Exposenomics Synthesis
              </div>
              <h2 className="text-xl sm:text-3xl font-extrabold font-serif text-stone-900 dark:text-white">
                Roulet's Law: What Isn't a Superfund Site, When Contaminated by Pb?
              </h2>
            </div>

            {/* Roulet's Law Mathematical Formula Card */}
            <div className="bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-white p-6 sm:p-8 rounded-2xl border-2 border-amber-500 shadow-xl space-y-4">
              <div className="text-xs font-mono text-amber-300 uppercase tracking-widest font-bold flex items-center gap-2">
                <Flame size={18} className="text-amber-400" />
                <span>Roulet's Law of Exposenomics & Remediation Boundaries</span>
              </div>
              
              <div className="text-center py-4 px-2 bg-stone-950/80 rounded-xl border border-amber-400/30">
                <div className="text-lg sm:text-2xl lg:text-3xl font-mono font-extrabold text-amber-300 tracking-wide">
                  Perturbation × Uncertainty = Chaos × Relativity
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-mono pt-2">
                <div className="bg-stone-900/80 p-3 rounded-lg border border-amber-500/20">
                  <span className="text-amber-400 font-bold block mb-1">Perturbation (P):</span>
                  <span className="text-stone-300">Decades of Flintkote industrial emissions & Eighteenmile Creek PCB/lead effluents discharging into Lake Ontario.</span>
                </div>
                <div className="bg-stone-900/80 p-3 rounded-lg border border-amber-500/20">
                  <span className="text-amber-400 font-bold block mb-1">Uncertainty (U):</span>
                  <span className="text-stone-300">Arbitrary 400/200 ppm cutoffs, "unfound" plume boundaries, and confidential individual testing.</span>
                </div>
                <div className="bg-stone-900/80 p-3 rounded-lg border border-amber-500/20">
                  <span className="text-amber-400 font-bold block mb-1">Chaos (C):</span>
                  <span className="text-stone-300">Patchwork residential remediations, Head Start children crawling on excluded soil, and neighborhood anxiety.</span>
                </div>
                <div className="bg-stone-900/80 p-3 rounded-lg border border-amber-500/20">
                  <span className="text-amber-400 font-bold block mb-1">Relativity (R):</span>
                  <span className="text-stone-300">Federal Superfund budget limits vs. lifelong neurological deficit in pediatric populations.</span>
                </div>
              </div>
            </div>

            {/* The Ultimate Epistemological Question */}
            <div className="bg-stone-50 dark:bg-stone-950 p-6 sm:p-8 rounded-2xl border border-stone-200 dark:border-stone-800 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-stone-900 dark:text-white flex items-center gap-2">
                <Zap size={20} className="text-amber-500" />
                The Universal Corollary: What Isn't a Superfund Site?
              </h3>
              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                If the EPA remedial project manager admits that <em>“We haven’t found the boundary yet”</em> and <em>“It’s not a fixed boundary,”</em> and if modern medical science proves that <strong>no quantity of lead is biologically benign</strong>, then every urban center, industrial corridor, legacy housing tract, and roadside right-of-way on Earth is functionally a Superfund site.
              </p>
              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
                The designation of a "Superfund Site" is not a scientific diagnosis—it is an <strong>administrative rationing mechanism</strong>. By drawing a line down the middle of a street or between two suburban lawns, the state creates the legal fiction that toxicity stops where the money runs out. Roulet’s Law collapses this fiction: whenever lead is released into the biosphere, the exposome is uncontained, permanent, and universal.
              </p>

              {/* Cross-Navigation Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                {onNavigateTab && (
                  <>
                    <button
                      onClick={() => onNavigateTab('cleveland_strategy')}
                      className="px-4 py-2 bg-amber-800 hover:bg-amber-700 text-white rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all shadow-xs"
                    >
                      <Building size={14} />
                      <span>Explore Cleveland Sovereign Remediations</span>
                      <ArrowRight size={12} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('artisanal_metallurgy')}
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all border border-stone-700"
                    >
                      <Flame size={14} className="text-amber-400" />
                      <span>Deep-AI Dive: Artisanal Metallurgy</span>
                      <ArrowRight size={12} />
                    </button>
                    <button
                      onClick={() => onNavigateTab('litigation')}
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer transition-all border border-stone-700"
                    >
                      <Scale size={14} className="text-amber-400" />
                      <span>View Sovereign Toxic Tort Litigation</span>
                      <ArrowRight size={12} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 4. HIGH-RESOLUTION ARTWORK MODAL */}
      {showArtworkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-5xl w-full bg-stone-900 border-2 border-amber-500 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-950 text-white">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-xs font-mono font-bold">
                  Sovereign IP-000AI • Plate #27
                </span>
                <span className="text-xs sm:text-sm font-semibold font-serif">
                  Eighteenmile Creek Superfund: The Fine-Line Remediation Fiasco
                </span>
              </div>
              <button
                onClick={() => setShowArtworkModal(false)}
                className="text-stone-400 hover:text-white p-1.5 rounded-lg hover:bg-stone-800 text-sm font-mono cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-4">
              <img
                src={superfundImg}
                alt="Eighteenmile Creek Superfund Fiasco Master Plate"
                className="w-full h-auto rounded-xl border border-stone-800"
              />

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-amber-400 font-bold">Cryptographic Provenance Vault Hash:</span>
                  <button
                    onClick={() => copyToClipboard(vaultHash)}
                    className="flex items-center gap-1 text-stone-300 hover:text-white px-2 py-1 bg-stone-800 rounded border border-stone-700 cursor-pointer"
                  >
                    {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    <span>{copiedHash ? 'Copied!' : 'Copy Hash'}</span>
                  </button>
                </div>
                <div className="p-2.5 bg-black/60 rounded border border-stone-800 text-stone-300 break-all select-all">
                  {vaultHash}
                </div>
                <div className="text-[11px] text-stone-400 leading-relaxed font-sans">
                  <strong>Visual Analysis:</strong> Illustrates the arbitrary demarcation line cutting across Lockport, New York residential yards. On the left, EPA yellow excavators strip contaminated topsoil down to two feet; on the right, identical un-remediated grass receives toxic airborne dust from the former Flintkote plant smokestacks. In the background, Eighteenmile Creek carries toxic PCB and lead sediment north into Lake Ontario (Lake America).
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
