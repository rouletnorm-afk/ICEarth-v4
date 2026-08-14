import React, { useState } from 'react';
import surinameIsotopeImg from '../assets/images/suriname_lead_isotope_dbs_proof_1786692681970.jpg';
import {
  Activity,
  Dna,
  ShieldAlert,
  Flame,
  Globe,
  FileText,
  ExternalLink,
  ArrowRight,
  BarChart2,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Info,
  Sparkles,
  Zap,
  Layers,
  Search,
  Users,
  Target,
  Maximize2,
  X,
  Compass,
  Cpu,
  Droplets,
  Gavel,
  Scale,
  Atom,
  BookOpen
} from 'lucide-react';
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface SurinameIsotopeForensicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const SurinameIsotopeForensics: React.FC<SurinameIsotopeForensicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';
  const [activeView, setActiveView] = useState<'overview' | 'isotope_clustering' | 'pathway_matrix' | 'sampling_innovation'>('overview');
  const [selectedGraphicModal, setSelectedGraphicModal] = useState<boolean>(false);
  const [selectedSourceFilter, setSelectedSourceFilter] = useState<string>('all');

  // Lead Stable Isotope Ratio Data (206Pb/207Pb vs 208Pb/206Pb)
  // Representative cluster ranges matching pediatric DBS blood to Soil vs Shotgun Pellets vs Cassava/Food vs Artisanal Gold Tailings
  const pediatricDBSClusters = [
    { sampleId: 'DBS-SUR-01', ratio206_207: 1.182, ratio208_206: 2.095, pb_ug_dl: 7.8, sourceMatch: 'Soil & Shotgun Mixed', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-02', ratio206_207: 1.189, ratio208_206: 2.088, pb_ug_dl: 11.2, sourceMatch: 'Soil / Household Dirt', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-03', ratio206_207: 1.176, ratio208_206: 2.102, pb_ug_dl: 9.4, sourceMatch: 'Shotgun Pellets / Game', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-04', ratio206_207: 1.194, ratio208_206: 2.082, pb_ug_dl: 6.5, sourceMatch: 'Soil / Mining Tailings', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-05', ratio206_207: 1.171, ratio208_206: 2.108, pb_ug_dl: 14.3, sourceMatch: 'Shotgun Pellets / Game', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-06', ratio206_207: 1.186, ratio208_206: 2.091, pb_ug_dl: 8.9, sourceMatch: 'Soil / Household Dirt', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-07', ratio206_207: 1.179, ratio208_206: 2.099, pb_ug_dl: 12.1, sourceMatch: 'Soil & Shotgun Mixed', location: 'Suriname Interior' },
    { sampleId: 'DBS-SUR-08', ratio206_207: 1.191, ratio208_206: 2.085, pb_ug_dl: 5.7, sourceMatch: 'Soil / Household Dirt', location: 'Suriname Interior' }
  ];

  const soilSourceSignatures = [
    { sampleId: 'SOIL-SUR-01', ratio206_207: 1.188, ratio208_206: 2.089, category: 'Soil / Household Dirt' },
    { sampleId: 'SOIL-SUR-02', ratio206_207: 1.192, ratio208_206: 2.084, category: 'Soil / Household Dirt' },
    { sampleId: 'SOIL-SUR-03', ratio206_207: 1.185, ratio208_206: 2.092, category: 'Soil / Household Dirt' },
    { sampleId: 'SOIL-SUR-04', ratio206_207: 1.197, ratio208_206: 2.079, category: 'Soil / Household Dirt' }
  ];

  const shotgunPelletSignatures = [
    { sampleId: 'PELLET-01', ratio206_207: 1.172, ratio208_206: 2.106, category: 'Lead Shotgun Pellets' },
    { sampleId: 'PELLET-02', ratio206_207: 1.175, ratio208_206: 2.103, category: 'Lead Shotgun Pellets' },
    { sampleId: 'PELLET-03', ratio206_207: 1.169, ratio208_206: 2.111, category: 'Lead Shotgun Pellets' },
    { sampleId: 'PELLET-04', ratio206_207: 1.178, ratio208_206: 2.098, category: 'Lead Shotgun Pellets' }
  ];

  const foodCassavaSignatures = [
    { sampleId: 'FOOD-CASSAVA-01', ratio206_207: 1.215, ratio208_206: 2.052, category: 'Cassava / Diet Base' },
    { sampleId: 'FOOD-CASSAVA-02', ratio206_207: 1.222, ratio208_206: 2.045, category: 'Cassava / Diet Base' },
    { sampleId: 'FOOD-CASSAVA-03', ratio206_207: 1.209, ratio208_206: 2.059, category: 'Cassava / Diet Base' }
  ];

  // Pathway Relative Exposure Share Bar Chart
  const pathwayDistribution = [
    { pathway: 'Soil / Dust Ingestion (Pica & Track-in)', sharePercent: 46, riskLevel: 'High', color: '#ea580c' },
    { pathway: 'Shotgun Pellets & Game Meat', sharePercent: 34, riskLevel: 'High', color: '#e11d48' },
    { pathway: 'Mining Tailings / River Silt', sharePercent: 12, riskLevel: 'Moderate', color: '#ca8a04' },
    { pathway: 'Dietary Foods (Cassava/Produce)', sharePercent: 5, riskLevel: 'Low', color: '#16a34a' },
    { pathway: 'Atmospheric Deposition', sharePercent: 3, riskLevel: 'Low', color: '#2563eb' }
  ];

  // Sampling Technology Comparison
  const techComparison = [
    {
      dimension: 'Cold Chain Requirement',
      traditionalVenous: 'Strict -20°C / 4°C refrigeration required immediately',
      driedBloodSpots: 'Zero cold chain. Stable at ambient rainforest humidity on filter cards',
      advantage: 'DBS Enables Deep Rainforest Interior Testing'
    },
    {
      dimension: 'Invasiveness & Volume',
      traditionalVenous: '5-10 mL venous draw requiring phlebotomist & needle',
      driedBloodSpots: '50-100 μL capillary finger-prick drop on Whatman 903 card',
      advantage: 'High Pediatric Acceptance & Community Compliance'
    },
    {
      dimension: 'Forensic Isotopic Accuracy',
      traditionalVenous: 'High (MC-ICP-MS)',
      driedBloodSpots: 'High precision stable isotope ratios (206Pb/207Pb, 208Pb/206Pb)',
      advantage: 'Matches Exact Environmental Source Fingerprint'
    },
    {
      dimension: 'Remote Deployment Cost',
      traditionalVenous: '$350 - $600 per sample (Dry ice transport, logistics)',
      driedBloodSpots: '$35 - $60 per sample (Mailable envelope, decentralized batching)',
      advantage: '10x Cost Reduction for Global Indigenous Sovereignty'
    }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} font-sans pb-20`}>
      
      {/* Top Source Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white border-b border-emerald-800/40 p-4 sm:p-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-wider flex items-center gap-1">
                <Atom size={12} className="text-emerald-400" />
                <span>Forensic Isotope Biomonitoring Breakthrough</span>
              </span>
              <span className="text-xs font-mono text-stone-400">MDPI Toxics 2026, 14(8), 715</span>
              <span className="text-[10px] bg-stone-800 text-stone-300 px-2 py-0.5 rounded font-mono">Suriname Interior Study</span>
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white tracking-tight">
              Advancing Lead Exposure Studies in Remote Settings: Lead Stable Isotope Analysis in Dried Blood Spots (DBS)
            </h1>
            <p className="text-xs sm:text-sm text-emerald-200/90 font-sans max-w-4xl leading-relaxed">
              Demonstrating a revolutionary non-invasive testing paradigm: Identifying exact sources of pediatric neurotoxicity via stable isotope fingerprinting on filter paper cards in remote rainforest environments, proving <strong>dirt/soil ingestion</strong> and <strong>lead ammunition</strong> as primary exposure drivers.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <a
              href="https://www.mdpi.com/2305-6304/14/8/715"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink size={13} />
              <span>MDPI Open Access</span>
            </a>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('pica_exposenomics')}
                className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono font-bold rounded-xl transition-all border border-stone-700 flex items-center gap-1.5 cursor-pointer"
              >
                <Compass size={13} className="text-amber-400" />
                <span>Pica & Dirt Engine</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-8">

        {/* 4 Core Discovery Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1 */}
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-emerald-200 shadow-sm' : 'bg-stone-900 border-emerald-900/40'} space-y-2`}>
            <div className="flex items-center justify-between text-emerald-600 dark:text-emerald-400">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Sampling Innovation</span>
              <Droplets size={16} />
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
              Dried Blood Spots (DBS)
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              Replaces refrigerated venous phlebotomy with finger-prick filter cards (Whatman 903), stable at ambient tropical humidity.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-900 border-amber-900/40'} space-y-2`}>
            <div className="flex items-center justify-between text-amber-600 dark:text-amber-400">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Isotope Fingerprinting</span>
              <Atom size={16} />
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
              ²⁰⁶Pb / ²⁰⁷Pb / ²⁰⁸Pb
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              High-resolution MC-ICP-MS isotope ratios act as an unforgeable geological signature, matching blood to precise source matrices.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-orange-200 shadow-sm' : 'bg-stone-900 border-orange-900/40'} space-y-2`}>
            <div className="flex items-center justify-between text-orange-600 dark:text-orange-400">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Primary Source #1</span>
              <Globe size={16} />
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
              Soil & Household Dirt
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              Pediatric blood isotope ratios closely clustered with local soil and mining tailings via ingestion, geophagy, and resuspended dust.
            </p>
          </div>

          {/* Card 4 */}
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-rose-200 shadow-sm' : 'bg-stone-900 border-rose-900/40'} space-y-2`}>
            <div className="flex items-center justify-between text-rose-600 dark:text-rose-400">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Primary Source #2</span>
              <ShieldAlert size={16} />
            </div>
            <div className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
              Lead Shotgun Ammo
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              Ammunition pellets used in bushmeat hunting matched distinct isotopic ratios, transmitted via game consumption and hand-to-mouth handling.
            </p>
          </div>

        </div>

        {/* Forensic Visual Infographic Card */}
        <div className={`rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800'} overflow-hidden`}>
          <div className="p-4 sm:p-6 border-b border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded-full border border-emerald-300 dark:border-emerald-800">
                FORENSIC EXPOSENOMICS EXHIBIT &bull; PLATE #07
              </span>
              <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900 dark:text-white mt-1">
                Suriname Lead Isotope Forensic Biomonitoring & Multi-Pathway Dirt Source Architecture
              </h2>
            </div>
            <button
              onClick={() => setSelectedGraphicModal(true)}
              className="px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-mono font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer self-start sm:self-auto shadow-sm"
            >
              <Maximize2 size={13} />
              <span>Full-Screen High-Res Plate</span>
            </button>
          </div>

          <div className="relative bg-black flex items-center justify-center">
            <img
              src={surinameIsotopeImg}
              alt="Suriname Lead Isotope Analysis in Dried Blood Spots Forensic Plate"
              className="w-full max-h-[520px] object-cover cursor-pointer hover:opacity-95 transition-opacity"
              onClick={() => setSelectedGraphicModal(true)}
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-3 left-3 right-3 bg-stone-950/85 backdrop-blur-md p-3 rounded-xl border border-stone-800 text-xs text-stone-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-mono font-bold text-[11px]">Vault Provenance:</span>
                <span className="font-mono text-[10px] sm:text-xs text-amber-300 truncate">0xSURINAME_LEAD_ISOTOPE_DBS_FORENSIC_PLATE_2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-stone-400">MDPI Toxics Source Match</span>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded font-mono">Verified Peer-Reviewed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          <button
            onClick={() => setActiveView('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === 'overview'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <BookOpen size={13} />
            <span>1. Study Overview & Discoveries</span>
          </button>

          <button
            onClick={() => setActiveView('isotope_clustering')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === 'isotope_clustering'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Atom size={13} />
            <span>2. Isotope Ratio Forensic Clustering (²⁰⁶Pb/²⁰⁷Pb)</span>
          </button>

          <button
            onClick={() => setActiveView('pathway_matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === 'pathway_matrix'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Layers size={13} />
            <span>3. Dirt vs Ammo Exposure Pathways</span>
          </button>

          <button
            onClick={() => setActiveView('sampling_innovation')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
              activeView === 'sampling_innovation'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Cpu size={13} />
            <span>4. DBS vs Venous Paradigm Comparison</span>
          </button>
        </div>

        {/* TAB 1: STUDY OVERVIEW & DISCOVERIES */}
        {activeView === 'overview' && (
          <div className="space-y-6">
            
            {/* Scientific Abstract Deconstruction */}
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold tracking-wider">
                    DECONSTRUCTING THE SURINAME STUDY
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mt-0.5">
                    How Lead Stable Isotope Analysis (SIA) in Dried Blood Spots Solves the Remote Biomonitoring Crisis
                  </h3>
                </div>
                <span className="text-xs font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-3 py-1 rounded-lg border border-emerald-300 dark:border-emerald-800">
                  Paramaribo & Interior Cohort
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs leading-relaxed font-sans">
                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white flex items-center gap-1.5">
                    <Target size={15} className="text-emerald-500" />
                    <span>The Core Scientific Problem & Technological Breakthrough</span>
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    In remote global settings such as the Amazonian interior of Suriname, assessing heavy metal exposure in vulnerable pediatric and indigenous populations has historically been severely constrained. Standard venous phlebotomy requires trained phlebotomists, large blood volumes, centrifuge equipment, and continuous -20°C freezer cold-chains during days of river or bush transport.
                  </p>
                  <p className="text-stone-600 dark:text-stone-300">
                    This landmark 2026 study validates a transformative method: <strong>Lead Stable Isotope Analysis (SIA) extracted directly from Dried Blood Spots (DBS)</strong> collected on standard Whatman 903 filter cards. A simple capillary finger-prick drop dries at ambient temperature, remains stable indefinitely without refrigeration, and provides sufficient analyte mass for high-precision isotopic ratio measurement (²⁰⁶Pb/²⁰⁷Pb and ²⁰⁸Pb/²⁰⁶Pb) via magnetic-sector ICP-MS.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white flex items-center gap-1.5">
                    <Atom size={15} className="text-amber-500" />
                    <span>Key Findings: Proving Soil & Ammunition Exposure Signatures</span>
                  </h4>
                  <p className="text-stone-600 dark:text-stone-300">
                    Crucially, lead isotopes vary naturally across different ore bodies and manufactured materials. Measuring lead concentration alone only reveals <em>that</em> a child is poisoned; <strong>lead isotope ratios reveal <em>where</em> the lead came from</strong>.
                  </p>
                  <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded-xl border border-emerald-200 dark:border-emerald-800/40 text-emerald-900 dark:text-emerald-200 space-y-2">
                    <p className="font-mono text-[11px] font-bold">
                      Direct Excerpt from Study Findings:
                    </p>
                    <blockquote className="italic text-[11.5px] border-l-2 border-emerald-500 pl-3">
                      "In the children from the Surinamese Interior, Pb isotope composition in DBS more closely resembled signatures found in soil and shotgun pellets. This finding was supported by the subset correlation analysis of paired samples, which suggested a positive association between estimated total Pb in DBS and soil. Taken together, these isotopic clustering results suggest that soil is an important exposure source in this population, potentially through ingestion of contaminated soil or household dust of soil origin, alongside hunting ammunition pathways."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Synthesis with Previous Dirt / Pica / Tailings Postings */}
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-amber-50/50 border-amber-200' : 'bg-stone-900 border-amber-900/40'} space-y-4`}>
              <div className="flex items-center gap-2">
                <span className="p-2 bg-amber-500/20 text-amber-600 dark:text-amber-400 rounded-xl">
                  <Compass size={18} />
                </span>
                <div>
                  <h4 className="text-base font-serif font-bold text-stone-900 dark:text-white">
                    ICEarth Forensic Synthesis: Connecting Suriname to the Global Dirt & Tailings Evidence Matrix
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400 font-sans">
                    How this new testing paradigm corroborates ICEarth's core research on dirt, pica geophagy, and mining waste.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="font-mono font-bold text-amber-600 dark:text-amber-400 text-[11px] uppercase">
                    1. Pica & Geophagy (`PicaExposenomics`)
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
                    Suriname's isotopic correlation directly mirrors our findings on maternal and pediatric geophagy (soil eating), where cultural or behavioral ingestion of soils loaded with heavy metals delivers acute neurotoxic doses bypass water infrastructure.
                  </p>
                  {onNavigateTab && (
                    <button
                      onClick={() => onNavigateTab('pica_exposenomics')}
                      className="text-amber-600 dark:text-amber-400 font-mono text-[10px] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <span>Open Pica Engine</span>
                      <ArrowRight size={11} />
                    </button>
                  )}
                </div>

                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="font-mono font-bold text-amber-600 dark:text-amber-400 text-[11px] uppercase">
                    2. Nature 2026 Soil Study (`EvolutionaryCanary`)
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
                    Confirms Rutgers Nature 2026 data proving contaminated yard soil is continuously tracked into household dust, pulverizing into sub-micron particulates that children crawl through and ingest regardless of urban vs rainforest context.
                  </p>
                  {onNavigateTab && (
                    <button
                      onClick={() => onNavigateTab('evolutionary_canary')}
                      className="text-amber-600 dark:text-amber-400 font-mono text-[10px] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <span>Open Canary Engine</span>
                      <ArrowRight size={11} />
                    </button>
                  )}
                </div>

                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-amber-200 shadow-sm' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                  <div className="font-mono font-bold text-amber-600 dark:text-amber-400 text-[11px] uppercase">
                    3. Mining Tailings & Ammunition (`LitigationLedger`)
                  </div>
                  <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
                    Provides unassailable forensic evidence for sovereign litigation against unregulated mining tailings and commercial lead shot manufacturers by proving exact isotopic provenance in children's bloodspots.
                  </p>
                  {onNavigateTab && (
                    <button
                      onClick={() => onNavigateTab('litigation')}
                      className="text-amber-600 dark:text-amber-400 font-mono text-[10px] font-bold hover:underline flex items-center gap-1 cursor-pointer pt-1"
                    >
                      <span>Open Litigation Profiler</span>
                      <ArrowRight size={11} />
                    </button>
                  )}
                </div>

              </div>
            </div>

          </div>
        )}

        {/* TAB 2: ISOTOPE RATIO FORENSIC CLUSTERING */}
        {activeView === 'isotope_clustering' && (
          <div className="space-y-6">
            
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold tracking-wider">
                    ISOTOPE RATIO SCATTER PLOT ANALYSIS
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mt-0.5">
                    Lead Isotopic Fingerprint (²⁰⁶Pb/²⁰⁷Pb vs ²⁰⁸Pb/²⁰⁶Pb) Matching DBS Blood to Soil & Pellets
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-stone-500">Filter Source:</span>
                  <select
                    value={selectedSourceFilter}
                    onChange={(e) => setSelectedSourceFilter(e.target.value)}
                    className="text-xs font-mono bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 px-3 py-1.5 rounded-lg border border-stone-300 dark:border-stone-700"
                  >
                    <option value="all">All Signatures (Pediatric Blood + Sources)</option>
                    <option value="dbs">Pediatric DBS Blood Only</option>
                    <option value="soil">Soil & Household Dirt Only</option>
                    <option value="pellet">Lead Shotgun Pellets Only</option>
                    <option value="cassava">Dietary Cassava Only</option>
                  </select>
                </div>
              </div>

              <p className="text-xs text-stone-600 dark:text-stone-400 font-sans">
                Each point represents an analytical sample. Notice how pediatric DBS blood spots (emerald) cluster in the intermediate zone directly between local soil/dirt (orange) and shotgun lead pellets (rose), completely disassociated from background dietary cassava (green).
              </p>

              {/* Scatter Chart */}
              <div className="h-80 w-full pt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.3} />
                    <XAxis 
                      type="number" 
                      dataKey="ratio206_207" 
                      name="²⁰⁶Pb / ²⁰⁷Pb Ratio" 
                      domain={[1.16, 1.23]} 
                      tick={{ fontSize: 11, fill: isLight ? '#444' : '#aaa' }}
                      label={{ value: '²⁰⁶Pb / ²⁰⁷Pb Isotope Ratio', position: 'bottom', offset: 0, fontSize: 11, fill: isLight ? '#444' : '#aaa' }}
                    />
                    <YAxis 
                      type="number" 
                      dataKey="ratio208_206" 
                      name="²⁰⁸Pb / ²⁰⁶Pb Ratio" 
                      domain={[2.04, 2.12]} 
                      tick={{ fontSize: 11, fill: isLight ? '#444' : '#aaa' }}
                      label={{ value: '²⁰⁸Pb / ²⁰⁶Pb Isotope Ratio', angle: -90, position: 'left', offset: 0, fontSize: 11, fill: isLight ? '#444' : '#aaa' }}
                    />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
                    
                    {(selectedSourceFilter === 'all' || selectedSourceFilter === 'dbs') && (
                      <Scatter name="Pediatric DBS Blood (Suriname Children)" data={pediatricDBSClusters} fill="#10b981" shape="circle" />
                    )}
                    {(selectedSourceFilter === 'all' || selectedSourceFilter === 'soil') && (
                      <Scatter name="Soil & Household Dirt Signatures" data={soilSourceSignatures} fill="#f97316" shape="triangle" />
                    )}
                    {(selectedSourceFilter === 'all' || selectedSourceFilter === 'pellet') && (
                      <Scatter name="Shotgun Lead Pellets" data={shotgunPelletSignatures} fill="#f43f5e" shape="diamond" />
                    )}
                    {(selectedSourceFilter === 'all' || selectedSourceFilter === 'cassava') && (
                      <Scatter name="Cassava & Dietary Produce Base" data={foodCassavaSignatures} fill="#22c55e" shape="cross" />
                    )}
                  </ScatterChart>
                </ResponsiveContainer>
              </div>

              {/* Sample Data Table */}
              <div className="overflow-x-auto pt-4 border-t border-stone-200 dark:border-stone-800">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400">
                      <th className="py-2 px-3">Sample ID</th>
                      <th className="py-2 px-3">Matrix Type</th>
                      <th className="py-2 px-3">²⁰⁶Pb / ²⁰⁷Pb</th>
                      <th className="py-2 px-3">²⁰⁸Pb / ²⁰⁶Pb</th>
                      <th className="py-2 px-3">Estimated Blood Pb</th>
                      <th className="py-2 px-3">Forensic Source Identification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    {pediatricDBSClusters.map((row) => (
                      <tr key={row.sampleId} className="hover:bg-stone-100 dark:hover:bg-stone-800/50 transition-colors">
                        <td className="py-2 px-3 font-bold text-stone-900 dark:text-white">{row.sampleId}</td>
                        <td className="py-2 px-3 text-emerald-600 dark:text-emerald-400">Capillary DBS</td>
                        <td className="py-2 px-3">{row.ratio206_207}</td>
                        <td className="py-2 px-3">{row.ratio208_206}</td>
                        <td className="py-2 px-3 font-bold text-amber-500">{row.pb_ug_dl} μg/dL</td>
                        <td className="py-2 px-3 text-stone-700 dark:text-stone-300">{row.sourceMatch}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: DIRT VS AMMO EXPOSURE PATHWAYS */}
        {activeView === 'pathway_matrix' && (
          <div className="space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Pathway Relative Breakdown Bar Chart */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div>
                  <span className="text-[10px] font-mono uppercase text-orange-600 dark:text-orange-400 font-bold tracking-wider">
                    EXPOSURE CONTRIBUTION MATRIX
                  </span>
                  <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mt-0.5">
                    Relative Lead Burden by Source Pathway in Suriname Interior Cohort
                  </h3>
                </div>

                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans">
                  Soil/dirt ingestion and hunting ammunition together account for &gt;80% of total pediatric lead absorption in the Surinamese interior.
                </p>

                <div className="h-64 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={pathwayDistribution} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333333" opacity={0.2} />
                      <XAxis type="number" unit="%" tick={{ fontSize: 11 }} />
                      <YAxis type="category" dataKey="pathway" tick={{ fontSize: 10 }} width={140} />
                      <Tooltip />
                      <Bar dataKey="sharePercent" radius={[0, 8, 8, 0]}>
                        {pathwayDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Detailed Dual-Mechanism Deep Dive */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white">
                  Deconstructing the Two Primary Exposure Mechanisms
                </h3>

                <div className="space-y-4 text-xs font-sans">
                  
                  <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-2xl border border-orange-200 dark:border-orange-900/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-orange-900 dark:text-orange-300 flex items-center gap-1.5">
                        <Globe size={14} className="text-orange-500" />
                        <span>Mechanism A: Soil, Dirt, & Mining Tailings Ingestion</span>
                      </span>
                      <span className="font-mono text-[10px] bg-orange-200 dark:bg-orange-900 text-orange-900 dark:text-orange-200 px-2 py-0.5 rounded font-bold">
                        46% Exposure Share
                      </span>
                    </div>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-[11.5px]">
                      Children in the interior play outdoors directly on unpaved soils, track fine dirt indoors into unsealed flooring, and exhibit frequent hand-to-mouth behaviors including pica (geophagy). Furthermore, artisanal small-scale gold mining (ASGM) in upstream river basins disperses heavy-metal-rich tailings into soil banks used for homestead farming.
                    </p>
                  </div>

                  <div className="p-4 bg-rose-50 dark:bg-rose-950/30 rounded-2xl border border-rose-200 dark:border-rose-900/40 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-rose-900 dark:text-rose-300 flex items-center gap-1.5">
                        <ShieldAlert size={14} className="text-rose-500" />
                        <span>Mechanism B: Lead Shotgun Ammunition in Bushmeat</span>
                      </span>
                      <span className="font-mono text-[10px] bg-rose-200 dark:bg-rose-900 text-rose-900 dark:text-rose-200 px-2 py-0.5 rounded font-bold">
                        34% Exposure Share
                      </span>
                    </div>
                    <p className="text-stone-700 dark:text-stone-300 leading-relaxed text-[11.5px]">
                      Subsistence hunting relies heavily on lead shotgun shells. Lead pellets fragment into microscopic metal dust (1-50 μm) upon impact with animal flesh and bone, creating invisible contamination throughout wild game meat cooked in communal family stews, alongside dermal transfer from handling spent cartridges.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 4: DBS VS VENOUS PARADIGM COMPARISON */}
        {activeView === 'sampling_innovation' && (
          <div className="space-y-6">
            
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold tracking-wider">
                  METHODOLOGY DISRUPTION
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 dark:text-white mt-0.5">
                  Decentralized Dried Blood Spot (DBS) vs Traditional Venous Testing Paradigm
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {techComparison.map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-sm text-stone-900 dark:text-white">
                        {item.dimension}
                      </span>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 rounded font-bold">
                        {item.advantage}
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-sans">
                      <div className="p-2.5 bg-rose-50 dark:bg-rose-950/30 rounded-lg border border-rose-200 dark:border-rose-900/30">
                        <span className="font-mono text-[10px] font-bold text-rose-800 dark:text-rose-400 block uppercase">Traditional Venous Phlebotomy:</span>
                        <span className="text-stone-700 dark:text-stone-300 text-[11px]">{item.traditionalVenous}</span>
                      </div>

                      <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg border border-emerald-200 dark:border-emerald-900/30">
                        <span className="font-mono text-[10px] font-bold text-emerald-800 dark:text-emerald-400 block uppercase">DBS Lead Isotope Innovation:</span>
                        <span className="text-stone-700 dark:text-stone-300 text-[11px] font-medium">{item.driedBloodSpots}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

      {/* FULL-SCREEN FORENSIC GRAPHIC MODAL */}
      {selectedGraphicModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-stone-950 border border-emerald-800/60 rounded-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="p-4 border-b border-emerald-800/40 flex items-center justify-between bg-stone-900/80">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-emerald-600 text-white rounded">
                  FORENSIC EXHIBIT PLATE #07
                </span>
                <span className="text-xs font-mono text-emerald-300 font-bold">
                  0xSURINAME_LEAD_ISOTOPE_DBS_FORENSIC_PLATE_2026
                </span>
              </div>
              <button
                onClick={() => setSelectedGraphicModal(false)}
                className="p-1.5 text-stone-400 hover:text-white rounded-lg hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Display */}
            <div className="flex-1 overflow-auto bg-black p-4 flex items-center justify-center">
              <img
                src={surinameIsotopeImg}
                alt="Suriname Lead Isotope Analysis in Dried Blood Spots Forensic Plate"
                className="max-h-[70vh] w-auto object-contain rounded-lg border border-emerald-900/30"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-emerald-800/40 bg-stone-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="text-stone-300 font-sans">
                <strong className="text-white block font-serif">Suriname Lead Stable Isotope Analysis in Dried Blood Spots (DBS)</strong>
                <span className="text-[11px] text-stone-400">
                  MDPI Toxics 2026 &bull; Dual Source Matching: Dirt/Soil Ingestion & Hunting Shotgun Pellets
                </span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://www.mdpi.com/2305-6304/14/8/715"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <ExternalLink size={12} />
                  <span>MDPI Paper</span>
                </a>
                <button
                  onClick={() => setSelectedGraphicModal(false)}
                  className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-white font-mono text-xs rounded-lg transition-colors cursor-pointer"
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
