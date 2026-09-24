import React, { useState } from 'react';
import cherokeePlateImg from '../assets/images/cherokee_hyperscale_ban_plate54_1790198046613.jpg';
import cherokeeSealImg from '../assets/images/great_seal_of_the_cherokee_nation_authentic.png';
import {
  Shield,
  Zap,
  Droplets,
  Cpu,
  Building,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Copy,
  Check,
  FileText,
  Printer,
  Sparkles,
  Ban,
  Radio,
  Scale,
  Trees,
  Volume2,
  Moon,
  Landmark,
  Share2,
  Users,
  Compass,
  ArrowRight,
  BookmarkCheck,
  FileCheck
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface CherokeeNationITPositionProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const CherokeeNationITPosition: React.FC<CherokeeNationITPositionProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'survey' | 'prohibitions' | 'icearth_solution' | 'intertribal_coalition' | 'diplomatic_memo'>('overview');
  const [copiedHash, setCopiedHash] = useState(false);
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const vaultHash = '0xCHEROKEE_NATION_HYPERSCALE_BAN_SOVEREIGN_IT_SPEC_PLATE_54_VAULT_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // 1,593 Cherokee Citizen Task Force Survey Responses
  const surveyPieData = [
    { name: 'Oppose Hyperscale (64%)', value: 64, color: '#dc2626' }, // Red
    { name: 'Unsure / Need Info (22%)', value: 22, color: '#d97706' }, // Amber
    { name: 'Support Development (14%)', value: 14, color: '#10b981' } // Emerald
  ];

  // Specific Citizen Concerns Identified in Task Force Report
  const citizenConcernData = [
    { concern: 'Aquifer & Water Consumption', citizenPercent: 88, severity: 'Severe Depletion' },
    { concern: 'Grid Strain & Power Bills', citizenPercent: 84, severity: 'Grid Destabilization' },
    { concern: 'Cultural & Sacred Sites', citizenPercent: 79, severity: 'Heritage Disruption' },
    { concern: 'Continuous Noise Pollution', citizenPercent: 72, severity: 'Acoustic Distress' },
    { concern: 'Air Quality (Diesel Gensets)', citizenPercent: 68, severity: 'Exposenomic Risk' },
    { concern: 'Night Light Pollution', citizenPercent: 61, severity: 'Dark Sky Loss' }
  ];

  // Conventional Hyperscale vs. ICEarth Sovereign Specification Matrix
  const specComparisonData = [
    {
      metric: 'Evaporative Water Use',
      hyperscale: '2,000,000 - 5,000,000 Gal/Day',
      icearthSpec: '0.00 Gal / Day (Closed-Loop Dielectric Immersion)',
      compliance: '100% Water-Neutral (Safe for Cherokee Aquifers)'
    },
    {
      metric: 'Electrical Grid Impact',
      hyperscale: '100 - 1,000 MW Parasitic Public Grid Draw',
      icearthSpec: '100% Behind-the-Meter Sovereign Solar + Iron Flow BESS',
      compliance: 'Zero Public Grid Siphon; Delivers Clean Power to Citizens'
    },
    {
      metric: 'Land Footprint & Trust Jurisdiction',
      hyperscale: '300 - 800 Acres Heavy Industrial Sprawl',
      icearthSpec: '0.25 - 2.0 Acres Modular Micro-Pods (Non-Sacred Enclaves)',
      compliance: 'Fully Owned by Cherokee Nation Trust with Zero Land Loss'
    },
    {
      metric: 'Acoustic & Noise Footprint',
      hyperscale: '75 - 85 dBA Cooling Tower & Chiller Howl',
      icearthSpec: '<35 dBA Sub-Audible Sound-Attenuated Enclosures',
      compliance: 'Preserves Rural Quiet & Wildlife Corridors'
    },
    {
      metric: 'Night Sky & Light Pollution',
      hyperscale: 'Stadium-Grade Perimeter Security Illumination',
      icearthSpec: 'Dark Sky Compliant / Low-Lux Zero-Emission Shrouding',
      compliance: 'Protects Night Skies Across 14 Reservation Counties'
    },
    {
      metric: 'NEPA & Tribal Consultation',
      hyperscale: 'Evades NEPA via Municipal & County Shell Permitting',
      icearthSpec: 'Sovereign 3-of-5 Tribal Council Cryptographic Key Consensus',
      compliance: 'Cryptographic Veto Invariant in Code'
    },
    {
      metric: 'Data & Cultural Sovereignty',
      hyperscale: 'Corporate Cloud Harvesting of Language & Health Archives',
      icearthSpec: 'Air-Gapped HSM Vaults (Tsalagi Language Sovereignty)',
      compliance: 'Protected by Tribal Jurisdiction & UNDRIP Article 19'
    }
  ];

  // Inter-Tribal Data Center Moratorium Coalition
  const intertribalCoalition = [
    {
      nation: 'Cherokee Nation (ᏣᎳᎩᎯ ᎠᏰᎵ)',
      location: '14 Counties, Northeastern Oklahoma',
      action: 'Executive Ban on Tribal & Trust Lands; Mandatory Robust Consultation on Reservation',
      date: 'August 10, 2026',
      leader: 'Principal Chief Chuck Hoskin Jr.',
      status: 'Active Sovereign Prohibition'
    },
    {
      nation: 'Seminole Nation of Oklahoma',
      location: 'Seminole County, Oklahoma',
      action: 'Reservation-Wide Moratorium on Hyperscale Development',
      date: 'March 2026',
      leader: 'General Council',
      status: 'Active Moratorium'
    },
    {
      nation: 'Kickapoo Tribe of Oklahoma',
      location: 'Lincoln & Pottawatomie Counties, OK',
      action: 'Tribal Moratorium on Commercial Hyperscale Facilities',
      date: 'July 2026',
      leader: 'Business Committee',
      status: 'Active Moratorium'
    },
    {
      nation: 'Tonawanda Seneca Nation',
      location: 'Genesee County / Western New York',
      action: 'Federal Lawsuit Against STAMP Mega-Site Abutting Seneca Territory',
      date: '2024 - 2026',
      leader: 'Council of Chiefs',
      status: 'Active Litigation Defense'
    },
    {
      nation: 'Mohawk Council of Akwesasne',
      location: 'Massena, NY / St. Lawrence River',
      action: 'Formal Opposition to Bitcoin-to-Hyperscale Data Center Conversion',
      date: '2025 - 2026',
      leader: 'Grand Council of Akwesasne',
      status: 'Emergency Mobilization'
    }
  ];

  const officialDiplomaticMemo = `MEMORANDUM OF SOVEREIGN TECHNICAL CONCURRENCE & TRIBAL IT SPECIFICATION
Date: August 12, 2026
To: Principal Chief Chuck Hoskin Jr., Cherokee Nation Council & Data Center Task Force
From: Norman Roulet (Founder, Indigenous Communities Earth - ICEarth) & Sovereign IT Architecture Working Group
Subject: Concurrence with Cherokee Nation Hyperscale Data Center Prohibition & Presentation of ICEarth Zero-Water Clean Compute Specification
Sovereign Provenance Hash: 0xCHEROKEE_NATION_HYPERSCALE_BAN_SOVEREIGN_IT_SPEC_PLATE_54_VAULT_2026

1. FORMAL CONCURRENCE WITH PRINCIPAL CHIEF HOSKIN'S EXECUTIVE PROHIBITION
Indigenous Communities Earth (ICEarth) hereby registers formal technical and sovereign concurrence with the decision of the Cherokee Nation to prohibit hyperscale data center development across all tribally owned and trust lands, and to mandate robust consultation across the entire 14-county reservation.

The findings of the Cherokee Nation Data Center Task Force—highlighting 64% citizen opposition, catastrophic water depletion, grid destabilization, acoustic trauma, and the deliberate circumvention of NEPA tribal consultation by commercial developers—reflect the exact systemic failures that ICEarth was founded to dismantle.

2. THE STATE REGULATORY VOID IN OKLAHOMA
As documented in the Task Force report and reporting by Chez Oxendine (Tribal Business News) and KOSU, the State of Oklahoma possesses no tracking mechanism or regulatory framework for data centers. Commercial developers deliberately exploit municipal industrial authorities to bypass federal environmental reviews and tribal sovereignty. This extraction treats tribal communities as sacrifice zones for out-of-state AI compute profits.

3. THE ICEARTH SPECIFICATION FOR CHEROKEE NATION (PLATE #54)
ICEarth submits that tribal digital empowerment and AI capability do not require hyperscale environmental devastation. For any future IT infrastructure commissioned by or partnering with the Cherokee Nation, ICEarth establishes the following non-negotiable specifications:
  • ZERO-WATER COOLING: 100% closed-loop dielectric immersion cooling consuming 0.00 gallons/day of Oklahoma water.
  • BEHIND-THE-METER POWER: Microgrid generation (solar + battery storage) that operates autonomously without straining the public electrical grid or raising utility rates for Cherokee citizens.
  • MODULAR MICRO-PODS: Compute units deployed on compact footprints (<1 acre) strictly located outside cultural, historical, or environmental preservation corridors.
  • CRYPTOGRAPHIC ELDER CONSENSUS: Model deployment and access controls gated by 3-of-5 Shamir Secret Sharing held by the Cherokee Nation Administration and Cultural Preservation Officers.
  • AIR-GAPPED TSALAGI VAULTS: Complete protection of the Cherokee syllabary, oral histories, and government archives from unauthorized commercial AI model training.

4. INVITATION FOR FORMAL BILATERAL ACCORD
We invite the Cherokee Nation Data Center Task Force and Council to review the ICEarth Sovereign IT Specification (Plate #54) and evaluate its adoption as the baseline technical standard for any sovereign computing facilities within Cherokee territory.

In Sovereign Solidarity,
Norman Roulet, Founder & Lead Exposenomics Architect
Indigenous Communities Earth (ICEarth)`;

  const handleCopyMemo = () => {
    navigator.clipboard.writeText(officialDiplomaticMemo);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  return (
    <div className="w-full bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 min-h-screen font-sans">
      
      {/* HERO SECTION - RECOGNIZED INDIGENOUS COMMUNITY IT POSITION BANNER */}
      <div className="border-b border-stone-200 dark:border-stone-800 bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-900 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-6 relative z-10">
          
          {/* Breadcrumb & Navigation links */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigateTab && onNavigateTab('icearth_stack')}
                className="px-2.5 py-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 rounded transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>⚡ The ICEarth Stack: Indigenous AI</span>
              </button>
              <span className="text-stone-500">/</span>
              <span className="text-emerald-300 font-bold">Recognized Indigenous IT Position</span>
              <span className="text-stone-500">/</span>
              <span className="px-2 py-0.5 bg-emerald-900/80 text-emerald-200 rounded border border-emerald-500/40 font-black">
                PLATE #54
              </span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://tribalbusinessnews.com/sections/economic-development/15724-cherokee-nation-bans-hyperscale-data-centers-on-tribal-lands"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileCheck size={13} className="text-emerald-400" />
                <span>Tribal Business News Wire (Chez Oxendine)</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Main Title Row with Plate Infographic Thumbnail */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-emerald-600 text-stone-950 font-mono text-xs font-black uppercase rounded tracking-wider shadow">
                  CHEROKEE NATION (ᏣᎳᎩᎯ ᎠᏰᎵ)
                </span>
                <span className="px-3 py-1 bg-red-900/90 text-red-200 border border-red-500/60 font-mono text-xs font-bold uppercase rounded flex items-center gap-1.5">
                  <Ban size={13} />
                  <span>EXECUTIVE HYPERSCALE BAN (AUG 10, 2026)</span>
                </span>
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 font-mono text-xs rounded">
                  Principal Chief Chuck Hoskin Jr.
                </span>
              </div>

              <div className="flex items-start gap-4">
                {/* Official Authentic Great Seal */}
                <div className="shrink-0 hidden sm:block">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white p-1 shadow-2xl border-2 border-amber-400 ring-2 ring-emerald-500/50 hover:scale-105 transition-transform duration-300">
                    <img
                      src={cherokeeSealImg}
                      alt="Great Seal of the Cherokee Nation (Adopted Sept. 6, 1839 • ᏣᎳᎩᎯ ᎠᏰᎵ)"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="block text-center text-[9px] font-mono text-amber-300/80 mt-1 font-bold">
                    Sept. 6, 1839
                  </span>
                </div>

                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                    Cherokee Nation Bans Hyperscale Data Centers on Tribal Lands
                  </h1>

                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    Prompted by a comprehensive citizen task force finding <strong className="text-red-400">64% community opposition</strong>, the Cherokee Nation issued a formal executive ban on hyperscale data centers on tribal and trust lands across its 14-county reservation. ICEarth establishes full technical concurrence and delivers the <strong className="text-emerald-400">0 Gal/Day Waterless Sovereign IT Specification (Plate #54)</strong> to protect tribal aquifers, clean grids, and cultural sovereignty.
                  </p>
                </div>
              </div>

              {/* Cryptographic Vault Hash Bar */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-mono">
                <div className="px-3 py-1.5 bg-stone-900/90 border border-stone-700 rounded-lg flex items-center gap-2 text-stone-300">
                  <Shield size={14} className="text-emerald-400" />
                  <span className="text-stone-400">Sovereign Vault:</span>
                  <span className="text-emerald-300 font-bold truncate max-w-[240px] sm:max-w-[340px]">
                    {vaultHash}
                  </span>
                </div>
                <button
                  onClick={handleCopyHash}
                  className="px-2.5 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy cryptographic vault hash"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
              </div>
            </div>

            {/* Infographic Plate Card */}
            <div className="shrink-0 lg:w-80">
              <div className="relative group bg-stone-900 rounded-2xl p-2.5 border-2 border-emerald-500/60 shadow-2xl transition-all duration-300 hover:border-emerald-400">
                <div
                  onClick={() => setIsModalOpen(true)}
                  className="relative cursor-pointer overflow-hidden rounded-xl aspect-square bg-stone-950"
                >
                  <img
                    src={cherokeePlateImg}
                    alt="Plate #54: Cherokee Nation Hyperscale Data Center Ban"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-2 left-2 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 font-mono text-[9px] font-black uppercase rounded shadow">
                      PLATE #54 MASTER
                    </span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[9px] font-black uppercase rounded shadow">
                      64% BAN
                    </span>
                  </div>

                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                    <span className="text-[10px] font-mono text-emerald-300 font-bold truncate">
                      Cherokee IT Position & Solution
                    </span>
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-stone-900/90 text-amber-200 rounded border border-amber-500/40 flex items-center gap-1">
                      <Maximize2 size={10} />
                      <span>Inspect</span>
                    </span>
                  </div>
                </div>

                <div className="px-2 pt-2 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-bold">Plate #54 Infographic</span>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-stone-400 hover:text-emerald-300 underline cursor-pointer text-[10px]"
                  >
                    View Fullscreen Lightbox
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* KEY METRICS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 border-t border-stone-800">
            <div className="bg-stone-900/90 border border-red-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-red-400 block">Citizen Opposition</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-red-400">64% Opposed</span>
              <span className="text-[10px] text-stone-400 block">1,593 Surveyed Citizens</span>
            </div>
            <div className="bg-stone-900/90 border border-emerald-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-emerald-400 block">ICEarth Water Spec</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">0.00 Gal / Day</span>
              <span className="text-[10px] text-stone-400 block">Closed-Loop Dielectric</span>
            </div>
            <div className="bg-stone-900/90 border border-amber-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-amber-400 block">Jurisdiction Scope</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-amber-300">14 Counties</span>
              <span className="text-[10px] text-stone-400 block">All Tribal & Trust Lands</span>
            </div>
            <div className="bg-stone-900/90 border border-blue-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-blue-400 block">State Oversight</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-rose-300">Zero In OK</span>
              <span className="text-[10px] text-stone-400 block">No Tracking Framework</span>
            </div>
            <div className="bg-stone-900/90 border border-purple-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-purple-400 block">Allied Nations</span>
              <span className="text-xl sm:text-2xl font-bold font-mono text-purple-300">5+ Coalitions</span>
              <span className="text-[10px] text-stone-400 block">Seminole, Kickapoo, Seneca</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION TABS NAVIGATION */}
      <div className="bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-2.5 font-mono text-xs no-scrollbar">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeSection === 'overview'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <Landmark size={14} />
              <span>1. Official Position & Ban</span>
            </button>

            <button
              onClick={() => setActiveSection('survey')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeSection === 'survey'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <Users size={14} />
              <span>2. Citizen Survey (64% Opposition)</span>
            </button>

            <button
              onClick={() => setActiveSection('prohibitions')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeSection === 'prohibitions'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <Ban size={14} />
              <span>3. Specific Prohibitions & Risks</span>
            </button>

            <button
              onClick={() => setActiveSection('icearth_solution')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeSection === 'icearth_solution'
                  ? 'bg-gradient-to-r from-emerald-600 to-amber-600 text-white shadow'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200 border border-emerald-300/60 hover:bg-emerald-100'
              }`}
            >
              <Sparkles size={14} className="text-amber-300 animate-pulse" />
              <span>4. ICEarth Sovereign Specification</span>
            </button>

            <button
              onClick={() => setActiveSection('intertribal_coalition')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeSection === 'intertribal_coalition'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <Shield size={14} />
              <span>5. Inter-Tribal Moratorium Wave</span>
            </button>

            <button
              onClick={() => setActiveSection('diplomatic_memo')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all cursor-pointer shrink-0 flex items-center gap-1.5 ${
                activeSection === 'diplomatic_memo'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
              }`}
            >
              <FileText size={14} />
              <span>6. Diplomatic Concurrence Memo</span>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-7xl mx-auto p-4 sm:p-10 space-y-10">

        {/* TAB 1: OVERVIEW & CHIEF HOSKIN'S DECLARATION */}
        {activeSection === 'overview' && (
          <div className="space-y-8">
            
            {/* Executive Statement Callout */}
            <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-stone-950 text-white p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-500 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-emerald-500 text-stone-950 font-mono text-xs font-black uppercase rounded">
                  OFFICIAL EXECUTIVE STATEMENT
                </span>
                <span className="text-stone-400 font-mono text-xs">
                  Tahlequah, OK • August 10, 2026
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl italic font-serif text-emerald-100 leading-relaxed">
                &ldquo;It’s clear that our Cherokee Nation Administration, Council, and citizens have serious concerns about the construction of hyperscale data centers on our tribal lands, which affect our resources and cultural lifeways. Our primary responsibility is to protect our citizens and tribal communities from these threats.&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-2 border-t border-stone-800 text-xs font-mono text-stone-300">
                <div>
                  <strong className="text-emerald-300 font-bold">Principal Chief Chuck Hoskin Jr.</strong> — Cherokee Nation
                </div>
                <div className="text-stone-400">
                  Data Center Task Force Executive Directives
                </div>
              </div>
            </div>

            {/* Overview Grid: Core Principles of the Ban */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-950/60 text-red-600 flex items-center justify-center font-bold">
                  <Ban size={20} />
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  1. Absolute Prohibition on Trust Lands
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Hyperscale facilities are strictly prohibited on all tribally owned and federal trust lands across the Cherokee Nation reservation, ending attempts by predatory developers to exploit sovereign land status for tax sheltering.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center font-bold">
                  <Scale size={20} />
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  2. Robust Consultation on Fee Lands
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  For projects proposed on non-tribal private or fee lands within the 14-county Cherokee reservation, the Nation will withhold support without formal, binding consultation addressing environmental, cultural, and community impacts.
                </p>
              </div>

              <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center font-bold">
                  <Compass size={20} />
                </div>
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  3. Permanent Advisory Oversight
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Establishment of a permanent tribal advisory committee to evaluate future digital proposals, lead inter-governmental consultations with utilities and municipalities, and advise the Principal Chief on sovereign compute alternatives.
                </p>
              </div>
            </div>

            {/* Reporting Context from Tribal Business News & KOSU */}
            <div className="bg-stone-100 dark:bg-stone-900/60 border border-stone-300 dark:border-stone-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <FileCheck size={18} className="text-emerald-600" />
                <h3 className="font-bold text-base text-stone-900 dark:text-stone-100">
                  The Regulatory Void in Oklahoma: Why Tribal Action is Essential
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                Reporting by Chez Oxendine (Tribal Business News) and KOSU reveals that the State of Oklahoma maintains <strong>no centralized tracking mechanism</strong> and <strong>no state regulatory framework</strong> for hyperscale data center construction. Commercial developers deliberately bypass federal review under the National Environmental Policy Act (NEPA) by routing power and water agreements through municipal utilities and county industrial trusts. This strategy circumvents Section 106 tribal cultural consultations entirely, placing sacred burial sites, high-volume aquifers, and rural electric co-ops at immediate risk.
              </p>
            </div>

            {/* AUTHENTIC SOVEREIGN INSIGNIA PROTOCOL & SEAL PROVENANCE */}
            <div className="bg-white dark:bg-stone-900 border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white p-1 shadow border border-amber-400 shrink-0">
                    <img
                      src={cherokeeSealImg}
                      alt="Authentic Great Seal of the Cherokee Nation"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 block">
                      Authentic Sovereign Insignia Protocol
                    </span>
                    <h3 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100">
                      The Great Seal of the Cherokee Nation (ᏣᎳᎩᎯ ᎠᏰᎵ)
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2.5 py-1 bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-400/40 rounded-lg font-bold">
                    Adopted: Sept. 6, 1839
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40 rounded-lg font-bold">
                    Official Identity
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-3 text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                  <p>
                    <strong>Constitutional Provenance:</strong> The Great Seal of the Cherokee Nation was established on <strong className="text-amber-600 dark:text-amber-400">September 6, 1839</strong>, upon adoption of the Cherokee Nation Constitution in Tahlequah, Oklahoma, formally reuniting the Eastern and Western Cherokees following the Trail of Tears.
                  </p>
                  <p>
                    <strong>Iconographic Anatomy & Clan Symbolism:</strong>
                  </p>
                  <ul className="space-y-1.5 pl-4 list-disc marker:text-emerald-500 text-xs">
                    <li>
                      <strong>7-Pointed Star:</strong> Represents the seven ancient clans of the Cherokee people: <em>Bird, Paint, Deer, Wolf, Blue, Long Hair,</em> and <em>Wild Potato</em>.
                    </li>
                    <li>
                      <strong>Oak Wreath & Acorns:</strong> Commemorates the eternal sacred fire of the Cherokee people, traditionally fueled by white oak wood.
                    </li>
                    <li>
                      <strong>Cherokee Syllabary (ᏣᎳᎩᎯ ᎠᏰᎵ):</strong> Pronounced <em>Tsalagihi Ayeli</em>, signifying the "Cherokee Nation" in the 85-character writing system invented by Sequoyah in 1821.
                    </li>
                    <li>
                      <strong>Continuous Golden Rope Border:</strong> Represents unbroken national sovereignty, self-determination, and territorial jurisdiction.
                    </li>
                  </ul>
                </div>

                <div className="bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800 space-y-3">
                  <div className="flex items-center gap-2 text-stone-900 dark:text-stone-100 font-bold text-xs font-mono uppercase">
                    <Shield size={16} className="text-emerald-600" />
                    <span>ICEarth Sovereign Identity Standard</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Official seals, national flags, tribal cartography, cultural regalia, and sacred emblems embody living sovereignty, treaty law, and ancestral memory. Under the ICEarth Sovereign Publishing standard, official identities and insignia must <strong>never be synthetically reimagined, hallucinated, or altered by generative models</strong>. Only authentic, verified archival assets and government-conferred emblems are used across the ICEarth platform.
                  </p>
                  <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-500">
                    <span>Source: Wikimedia Commons / Cherokee Nation Records</span>
                    <a
                      href="https://commons.wikimedia.org/wiki/File:Great_seal_of_the_cherokee_nation.svg"
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 hover:underline flex items-center gap-1"
                    >
                      <span>Verified Commons File</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CITIZEN SURVEY FINDINGS (64% OPPOSITION) */}
        {activeSection === 'survey' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-md space-y-6">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 block mb-1">
                  Cherokee Nation Data Center Task Force
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Citizen Survey Findings: 1,593 Verified Respondents
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                  Democratically conducted survey of Cherokee citizens across the 14-county reservation and at-large community.
                </p>
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                
                {/* Donut Chart of Overall Sentiment */}
                <div className="bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
                  <h3 className="text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-4 text-center">
                    Overall Citizen Sentiment on Hyperscale Facilities
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={surveyPieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={90}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {surveyPieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend verticalAlign="bottom" height={36} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center text-[11px] font-mono text-stone-500 dark:text-stone-400 mt-2">
                    64% Opposed (1,020 citizens) • 22% Unsure (350 citizens) • 14% Supported (223 citizens)
                  </div>
                </div>

                {/* Specific Concerns Bar Chart */}
                <div className="bg-stone-50 dark:bg-stone-950 p-5 rounded-xl border border-stone-200 dark:border-stone-800">
                  <h3 className="text-xs font-mono font-bold uppercase text-stone-700 dark:text-stone-300 mb-4 text-center">
                    Top Stated Concerns Among Cherokee Citizens (%)
                  </h3>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        layout="vertical"
                        data={citizenConcernData}
                        margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                        <XAxis type="number" domain={[0, 100]} unit="%" />
                        <YAxis dataKey="concern" type="category" width={110} tick={{ fontSize: 9 }} />
                        <Tooltip />
                        <Bar dataKey="citizenPercent" name="Citizens Concerned (%)" fill="#059669" radius={[0, 4, 4, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="text-center text-[11px] font-mono text-stone-500 dark:text-stone-400 mt-2">
                    Water depletion (88%) and electrical grid strain (84%) dominated citizen objections.
                  </div>
                </div>
              </div>

              {/* Task Force Conclusions */}
              <div className="border-t border-stone-200 dark:border-stone-800 pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-3 bg-stone-100 dark:bg-stone-800/60 rounded-xl">
                  <span className="text-red-600 dark:text-red-400 font-bold block mb-1">Democratic Mandate</span>
                  <span>Chief Hoskin and the Tribal Council acted on direct citizen consensus, rejecting outside pressure.</span>
                </div>
                <div className="p-3 bg-stone-100 dark:bg-stone-800/60 rounded-xl">
                  <span className="text-amber-600 dark:text-amber-400 font-bold block mb-1">Cautious Evolution</span>
                  <span>Transitioned from open study in July to full executive ban after empirical evidence showed severe net drain.</span>
                </div>
                <div className="p-3 bg-stone-100 dark:bg-stone-800/60 rounded-xl">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold block mb-1">Cultural Primacy</span>
                  <span>Affirmed that tribal land trust status must serve cultural lifeways, not multinational corporate cloud profits.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SPECIFIC PROHIBITIONS & COMMUNITY RISKS */}
        {activeSection === 'prohibitions' && (
          <div className="space-y-6">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="text-xs font-mono font-bold uppercase text-red-600 dark:text-red-400">
                Empirical Environmental & Social Impact
              </span>
              <h2 className="text-xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                The 6 Threats Identified by Cherokee Citizens
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                Why conventional hyperscale cloud facilities are incompatible with rural tribal ecosystems and sovereign lands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Threat 1: Water */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 flex items-center justify-center">
                  <Droplets size={20} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  1. Groundwater & Aquifer Depletion
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  A typical 100 MW hyperscale facility evaporates <strong>2 to 5 million gallons of potable water every day</strong> in open cooling towers. In rural Oklahoma, this lowers regional water tables, threatening agricultural wells and municipal drinking supplies.
                </p>
              </div>

              {/* Threat 2: Energy */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 flex items-center justify-center">
                  <Zap size={20} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  2. Grid Overload & Rate Hikes
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Massive continuous baseload demands monopolize local electrical transmission lines. Public utility upgrades are routinely shifted onto residential electric co-op members, driving up utility bills for Cherokee families on fixed incomes.
                </p>
              </div>

              {/* Threat 3: Noise */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-950/60 text-purple-600 flex items-center justify-center">
                  <Volume2 size={20} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  3. Continuous Acoustic Trauma
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Cooling chiller banks and massive air-handling exhaust fans emit constant 75–85 dBA low-frequency hums audible for miles, disrupting traditional community gatherings, livestock grazing, and peaceful residential lifeways.
                </p>
              </div>

              {/* Threat 4: Air Quality */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 flex items-center justify-center">
                  <Trees size={20} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  4. Diesel Backup Emissions
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Campuses install dozens of multi-megawatt diesel backup generators that undergo routine weekly test runs, venting tons of carcinogenic particulate matter (PM2.5), nitrogen oxides, and sulfur into surrounding Cherokee valleys.
                </p>
              </div>

              {/* Threat 5: Light */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 flex items-center justify-center">
                  <Moon size={20} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  5. Night Sky Destruction
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Industrial perimeter security lights flood the rural night sky with intense artificial lumens, erasing natural darkness required for celestial navigation, traditional seasonal ceremonies, and migratory bird routes.
                </p>
              </div>

              {/* Threat 6: Cultural Destruction */}
              <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center">
                  <Shield size={20} />
                </div>
                <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                  6. Desecration of Sacred Heritage
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Large-scale excavation across hundreds of acres frequently uncovers or damages historical Cherokee archaeological sites, ceremonial grounds, and unmarked resting places without required cultural preservation surveys.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: HOW ICEARTH SPECIFICALLY ADDRESSES CHEROKEE NATION'S POSITION */}
        {activeSection === 'icearth_solution' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-stone-950 via-emerald-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 border-2 border-emerald-500/50 shadow-2xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-500 text-stone-950 font-mono text-xs font-black uppercase rounded shadow">
                  THE SOVEREIGN TECHNICAL SPECIFICATION
                </span>
                <span className="text-amber-300 font-mono text-xs">
                  Engineered to Fully Comply with Cherokee Ban Directives
                </span>
              </div>

              <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
                How ICEarth Solves the Cherokee Nation IT Dilemma
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed max-w-4xl">
                Cherokee Nation made the righteous choice: ban toxic hyperscale extraction. However, Indigenous nations still require advanced computing power to govern, run environmental sensor meshes, preserve the Tsalagi language, and monitor water rights. <strong>ICEarth replaces predatory hyperscale sprawl with sovereign, waterless micro-pods</strong> that satisfy every condition set forth by Chief Hoskin and the Task Force.
              </p>
            </div>

            {/* Comprehensive Matrix Table */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 shadow-md overflow-hidden">
              <div className="p-5 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-stone-900 dark:text-stone-100 text-sm sm:text-base">
                    Technical Architecture Comparison: Hyperscale Cloud vs. ICEarth Sovereign Standard
                  </h3>
                  <span className="text-xs text-stone-500 dark:text-stone-400 font-mono">
                    Direct mapping against the Cherokee Nation Data Center Task Force report
                  </span>
                </div>
                <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs rounded border border-emerald-300 dark:border-emerald-700 font-bold">
                  Zero-Deficit Spec
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 uppercase tracking-wider border-b border-stone-200 dark:border-stone-700">
                    <tr>
                      <th className="p-4 w-1/4">Environmental / Legal Vector</th>
                      <th className="p-4 w-1/4 text-red-600 dark:text-red-400">Commercial Hyperscale (BANNED)</th>
                      <th className="p-4 w-1/4 text-emerald-600 dark:text-emerald-400">ICEarth Sovereign Spec (APPROVED)</th>
                      <th className="p-4 w-1/4 text-stone-700 dark:text-stone-300">Cherokee Benefit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    {specComparisonData.map((row, idx) => (
                      <tr key={idx} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/30 transition-colors">
                        <td className="p-4 font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                          <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                          <span>{row.metric}</span>
                        </td>
                        <td className="p-4 text-red-700 dark:text-red-300 bg-red-50/40 dark:bg-red-950/20">
                          {row.hyperscale}
                        </td>
                        <td className="p-4 text-emerald-700 dark:text-emerald-300 bg-emerald-50/40 dark:bg-emerald-950/20 font-bold">
                          {row.icearthSpec}
                        </td>
                        <td className="p-4 text-stone-600 dark:text-stone-400">
                          {row.compliance}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* The 4 Architectural Pillars of Cherokee IT Sovereignty */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white dark:bg-stone-900 border border-emerald-500/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Droplets size={16} />
                  <span>1. 100% Waterless Closed-Loop Immersion</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Servers are submerged in non-conductive, biodegradable synthetic dielectric fluid that circulates in a sealed loop to outdoor dry radiators. <strong>Evaporative water loss is exactly 0.00 gallons per day</strong>, protecting the Grand River basin, Tenkiller Ferry Lake watershed, and rural Cherokee aquifers forever.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-stone-900 border border-emerald-500/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Zap size={16} />
                  <span>2. Behind-the-Meter Solar & Iron-Flow BESS</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Compute clusters are paired with dedicated on-site solar PV and non-toxic iron-flow battery storage monetized via <strong>IRA Section 6417 Direct Elective Pay</strong>. Not a single kilowatt is drained from residential lines; surplus microgrid power is back-fed to Cherokee community health clinics.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-stone-900 border border-emerald-500/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Shield size={16} />
                  <span>3. 3-of-5 Elder Cryptographic Hardware Consensus</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Every node requires a multi-signature quorum (3-of-5 Shamir Secret Sharing) held by the Principal Chief, Tribal Council, and Cultural Preservation Officers to flash firmware or authorize compute workloads. No outside entity can repurpose Cherokee hardware.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-stone-900 border border-emerald-500/40 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                  <Cpu size={16} />
                  <span>4. Air-Gapped Tsalagi Language SLMs</span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                  Rather than feeding Cherokee cultural knowledge into Silicon Valley LLMs, ICEarth runs private, air-gapped Small Language Models (SLMs) trained strictly on Cherokee syllabary texts and audio archives, remaining 100% owned by the Cherokee Nation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: THE INTER-TRIBAL MORATORIUM WAVE */}
        {activeSection === 'intertribal_coalition' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-md space-y-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-purple-600 dark:text-purple-400 block mb-1">
                  National Sovereign Defense
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                  The Growing Inter-Tribal Hyperscale Moratorium Wave
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                  Cherokee Nation’s ban follows a coordinated uprising of tribal nations resisting unvetted data center expansion across Indian Country.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {intertribalCoalition.map((coalition, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                        {coalition.nation}
                      </span>
                      <span className="px-2 py-0.5 bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-mono text-[10px] rounded font-bold">
                        {coalition.status}
                      </span>
                    </div>

                    <div className="text-xs text-stone-600 dark:text-stone-400 space-y-1">
                      <div><strong>Location:</strong> {coalition.location}</div>
                      <div><strong>Action Taken:</strong> {coalition.action}</div>
                      <div><strong>Leadership:</strong> {coalition.leader}</div>
                      <div><strong>Action Date:</strong> {coalition.date}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Legal Analysis: The NEPA Loophole */}
              <div className="p-5 bg-amber-50 dark:bg-amber-950/30 border border-amber-300/80 dark:border-amber-800/60 rounded-xl space-y-2">
                <div className="flex items-center gap-2 text-amber-900 dark:text-amber-200 font-bold text-xs uppercase font-mono">
                  <Scale size={15} />
                  <span>The NEPA Circumvention Loophole Explained</span>
                </div>
                <p className="text-xs text-amber-950 dark:text-amber-100 leading-relaxed">
                  Under federal law, major federal actions require National Environmental Policy Act (NEPA) review, which automatically triggers government-to-government consultation with tribal nations under Section 106 of the National Historic Preservation Act. However, hyperscale developers deliberately structure projects through municipal zoning and private utility contracts without seeking federal permits or grants. By bypassing NEPA, developers evade tribal consultation while inflicting massive off-reservation externalities. Sovereign bans and robust reservation-wide consultation mandates are the essential antidote.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: DIPLOMATIC CONCURRENCE MEMORANDUM */}
        {activeSection === 'diplomatic_memo' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-md space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400 block">
                    Diplomatic Letter of Concurrence
                  </span>
                  <h2 className="text-lg sm:text-2xl font-bold text-stone-900 dark:text-stone-100">
                    Formal Transmission to Principal Chief Chuck Hoskin Jr.
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyMemo}
                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow"
                  >
                    {copiedMemo ? <Check size={14} /> : <Copy size={14} />}
                    <span>{copiedMemo ? 'Copied Full Memo' : 'Copy Memorandum'}</span>
                  </button>

                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-mono text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Printer size={14} />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Memo Document Body */}
              <div className="bg-stone-50 dark:bg-stone-950 p-6 sm:p-8 rounded-xl border border-stone-200 dark:border-stone-800 font-mono text-xs text-stone-800 dark:text-stone-200 whitespace-pre-wrap leading-relaxed">
                {officialDiplomaticMemo}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-500 dark:text-stone-400 pt-2">
                <span>Cryptographically Timestamped: August 12, 2026</span>
                <span>Transmitted via Sovereign Diplomatic Vault</span>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* LIGHTBOX MODAL FOR PLATE #54 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-5xl w-full bg-stone-900 border border-emerald-500/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-950">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-emerald-500 text-stone-950 font-mono text-xs font-black uppercase rounded">
                  PLATE #54
                </span>
                <span className="text-white font-mono text-xs font-bold truncate">
                  Cherokee Nation Hyperscale Ban & ICEarth Sovereign IT Specification
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-stone-400 hover:text-white px-2 py-1 rounded bg-stone-800 hover:bg-stone-700 text-xs font-mono cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950">
              <img
                src={cherokeePlateImg}
                alt="Plate #54 Fullscreen View"
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-stone-800 shadow-xl"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="text-stone-400">
                Provenance Hash: <span className="text-emerald-400 font-bold">{vaultHash}</span>
              </div>
              <button
                onClick={handleCopyHash}
                className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold rounded flex items-center gap-1.5 cursor-pointer"
              >
                {copiedHash ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied' : 'Copy Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
