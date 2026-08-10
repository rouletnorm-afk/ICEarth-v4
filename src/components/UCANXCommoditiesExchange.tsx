import React, { useState } from 'react';
import caseAlumnusHeaderImg from '../assets/images/CaseAlumnusHeader.JPG';
import launching1Img from '../assets/images/Launching1.png';
import icearthLaunchImg from '../assets/images/icearth_launch.png';
import {
  Sprout,
  Wheat,
  TrendingUp,
  ShieldCheck,
  Scale,
  Database,
  Layers,
  FileText,
  CheckCircle2,
  ArrowUpRight,
  Activity,
  Filter,
  Globe,
  Building2,
  Sparkles,
  Coins,
  Lock,
  Download,
  RefreshCw,
  Sliders,
  ChevronRight,
  Info,
  Layers3,
  Flame,
  Award
} from 'lucide-react';

interface CommodityListing {
  id: string;
  name: string;
  category: 'industrial_fiber' | 'grain_seed' | 'phytoremediation' | 'cannabinoids' | 'biochar';
  grade: string;
  sovereigntyJurisdiction: string;
  spotPricePerLb: number;
  futures2026Price: number;
  change24h: number;
  availableVolumeTons: number;
  leadRemediationCertified: boolean;
  pfasRemediationCertified: boolean;
  thcCompliance: string;
  moisturePercent: number;
  producerRegion: string;
}

const SAMPLE_LISTINGS: CommodityListing[] = [
  {
    id: 'UCX-FIBER-01',
    name: 'Industrial Hemp Hurds (Structural Hempcrete Grade)',
    category: 'industrial_fiber',
    grade: 'AAA Structural',
    sovereigntyJurisdiction: 'Jicarilla Apache Sovereign Territory / NM State Compact',
    spotPricePerLb: 0.85,
    futures2026Price: 0.92,
    change24h: 3.4,
    availableVolumeTons: 1250,
    leadRemediationCertified: true,
    pfasRemediationCertified: false,
    thcCompliance: '< 0.3% Δ9-THC',
    moisturePercent: 8.5,
    producerRegion: 'Taos Kush Institute / Upper Rio Grande Basin'
  },
  {
    id: 'UCX-PHYTO-02',
    name: 'Heavy Metal Phytoremediation Biomass (Bio-Char & Thermal Recovery Grade)',
    category: 'phytoremediation',
    grade: 'Phyto-Extract Class A',
    sovereigntyJurisdiction: 'Tribal Sovereign Agricultural Compact',
    spotPricePerLb: 0.42,
    futures2026Price: 0.48,
    change24h: 5.1,
    availableVolumeTons: 3400,
    leadRemediationCertified: true,
    pfasRemediationCertified: true,
    thcCompliance: 'Non-Flower Biomass / Industrial Exemption',
    moisturePercent: 10.2,
    producerRegion: 'Cleveland Lead Belt Phytoremediation Zone'
  },
  {
    id: 'UCX-GRAIN-03',
    name: 'Organic High-Protein Hemp Grain & Cold-Pressed Seed Oil Stock',
    category: 'grain_seed',
    grade: 'USDA Organic / Sovereign Choice',
    sovereigntyJurisdiction: 'State of Ohio / Midwest Sovereign Farm Co-op',
    spotPricePerLb: 1.65,
    futures2026Price: 1.78,
    change24h: 1.8,
    availableVolumeTons: 890,
    leadRemediationCertified: true,
    pfasRemediationCertified: false,
    thcCompliance: '0.00% Δ9-THC (Zero Trace)',
    moisturePercent: 6.8,
    producerRegion: 'Midwest Agricultural Basin'
  },
  {
    id: 'UCX-CANN-04',
    name: 'Full Spectrum CBG / Terpene Crude Biomass (Medical Sovereign Reserve)',
    category: 'cannabinoids',
    grade: 'Pharmaceutical Grade 98% purity',
    sovereigntyJurisdiction: 'Native Tribal Nation Health Council Compact',
    spotPricePerLb: 14.50,
    futures2026Price: 16.20,
    change24h: -0.8,
    availableVolumeTons: 120,
    leadRemediationCertified: true,
    pfasRemediationCertified: true,
    thcCompliance: '< 0.3% Δ9-THC Sovereign Tribal Standard',
    moisturePercent: 7.0,
    producerRegion: 'Taos Kush Institute High Altitude Cultivation'
  },
  {
    id: 'UCX-CHAR-05',
    name: 'Sequestered Hemp Biochar (Carbon Removal & Soil Regeneration Matrix)',
    category: 'biochar',
    grade: 'Premium Carbon-Negative 92% C',
    sovereigntyJurisdiction: 'ICEarth Global Carbon & Sovereign Exchange',
    spotPricePerLb: 0.55,
    futures2026Price: 0.61,
    change24h: 4.2,
    availableVolumeTons: 5000,
    leadRemediationCertified: true,
    pfasRemediationCertified: true,
    thcCompliance: 'Carbonized / Zero Organic THC',
    moisturePercent: 3.5,
    producerRegion: 'Taos Valley Ecological Restoration Complex'
  }
];

interface UCANXProps {
  onNavigateTab?: (tab: string) => void;
}

export const UCANXCommoditiesExchange: React.FC<UCANXProps> = ({ onNavigateTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<'exchange' | 'sovereignty_framework' | 'phytoremediation' | 'contract_builder'>('exchange');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Interactive Contract Builder State
  const [contractCommodity, setContractCommodity] = useState<string>(SAMPLE_LISTINGS[0].id);
  const [contractVolumeTons, setContractVolumeTons] = useState<number>(50);
  const [contractJurisdiction, setContractJurisdiction] = useState<string>('jicarilla');
  const [escrowType, setEscrowType] = useState<'ice_token' | 'usdc' | 'sovereign_escrow'>('sovereign_escrow');
  const [contractCreated, setContractCreated] = useState<boolean>(false);

  // Filter listings
  const filteredListings = SAMPLE_LISTINGS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesJurisdiction = selectedJurisdiction === 'all' || item.sovereigntyJurisdiction.toLowerCase().includes(selectedJurisdiction.toLowerCase());
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.producerRegion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesJurisdiction && matchesSearch;
  });

  const activeCommodityObj = SAMPLE_LISTINGS.find(c => c.id === contractCommodity) || SAMPLE_LISTINGS[0];
  const calculatedTotal = (contractVolumeTons * 2000 * activeCommodityObj.spotPricePerLb).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FCFCFC] text-[#1A1A1A] overflow-y-auto font-sans">
      
      {/* TOP HEADER BANNER: CO-FOUNDER AGUA DAS LEGACY HEADER PHOTO */}
      <div className="w-full bg-neutral-950 border-b border-amber-500/30 flex justify-center items-center py-2 px-2 sm:px-6 shadow-md shrink-0">
        <div className="w-full max-w-6xl flex justify-center items-center overflow-hidden rounded-lg bg-black border border-neutral-800">
          <img
            src={caseAlumnusHeaderImg}
            alt="Co-Founder Agua Das - Hemp-I-Scream Pioneer Header"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[420px] object-cover sm:object-contain mx-auto"
          />
        </div>
      </div>

      {/* HERO BANNER & HISTORICAL CONTEXT */}
      <section className="bg-neutral-900 text-white border-b border-neutral-800 p-6 sm:p-8 shrink-0 relative overflow-hidden">
        {/* Subtle grid backdrop decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
        
        <div className="max-w-6xl mx-auto space-y-4 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-lg flex items-center justify-center shrink-0">
                <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center">
                  <Sprout className="text-amber-400" size={24} />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                    Founded 2010 • Sovereign Ag Commodities
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded border border-neutral-700">
                    ICEarth Matrix
                  </span>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white mt-1">
                  UCANX: United Cannabis & Agricultural Commodities Exchange
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] uppercase font-mono text-neutral-400">ICEarth Root Architecture</p>
                <p className="text-xs font-bold text-amber-400 font-mono">1996 - 2026 Sovereign Data Era</p>
              </div>
              <button 
                onClick={() => setActiveSubTab('contract_builder')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-md"
              >
                <Coins size={15} />
                <span>Execute Sovereign Trade</span>
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-4xl leading-relaxed">
            Founded in 2010 for the Hemp Industries Association and expanded under the <strong>ICEarth 1996 Sovereign Framework</strong>, UCANX is the world's premier peer-to-peer commodities exchange for industrial hemp, phytoremediative biomass, grains, carbon-negative biochar, and medicinal extracts. Powered by individual data sovereignty and multi-tier tribal, state, and international regulatory cross-matching.
          </p>

          {/* TOP METRIC RIBBON */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-neutral-800/80 border border-neutral-700/80 p-3 rounded-xl">
              <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono uppercase">
                <span>Active Volume</span>
                <TrendingUp size={12} className="text-emerald-400" />
              </div>
              <p className="text-base font-bold font-mono text-white mt-1">10,540 Tons</p>
              <p className="text-[10px] text-emerald-400 mt-0.5">↑ 14.2% MoM</p>
            </div>

            <div className="bg-neutral-800/80 border border-neutral-700/80 p-3 rounded-xl">
              <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono uppercase">
                <span>Phytoremediated Lead Soil</span>
                <ShieldCheck size={12} className="text-amber-400" />
              </div>
              <p className="text-base font-bold font-mono text-white mt-1">42,800 Acres</p>
              <p className="text-[10px] text-amber-300 mt-0.5">Taos & Cleveland Belt</p>
            </div>

            <div className="bg-neutral-800/80 border border-neutral-700/80 p-3 rounded-xl">
              <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono uppercase">
                <span>Sovereignty Jurisdictions</span>
                <Globe size={12} className="text-cyan-400" />
              </div>
              <p className="text-base font-bold font-mono text-white mt-1">57 Tribal & State</p>
              <p className="text-[10px] text-cyan-300 mt-0.5">Zero-Knowledge Compacts</p>
            </div>

            <div className="bg-neutral-800/80 border border-neutral-700/80 p-3 rounded-xl">
              <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono uppercase">
                <span>Data Ownership</span>
                <Lock size={12} className="text-purple-400" />
              </div>
              <p className="text-base font-bold font-mono text-white mt-1">100% Individual</p>
              <p className="text-[10px] text-purple-300 mt-0.5">ICESaturn Ledger Vaults</p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION SUB-TABS */}
      <div className="bg-white border-b border-neutral-200 px-6 sm:px-8 shrink-0">
        <div className="max-w-6xl mx-auto flex items-center gap-2 sm:gap-6 overflow-x-auto py-2">
          <button
            onClick={() => setActiveSubTab('exchange')}
            className={`py-2.5 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeSubTab === 'exchange'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            <Wheat size={15} />
            <span>Live Spot & Futures Exchange</span>
          </button>

          <button
            onClick={() => setActiveSubTab('contract_builder')}
            className={`py-2.5 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeSubTab === 'contract_builder'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            <Coins size={15} />
            <span>Sovereign Contract Builder</span>
          </button>

          <button
            onClick={() => setActiveSubTab('phytoremediation')}
            className={`py-2.5 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeSubTab === 'phytoremediation'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            <Flame size={15} />
            <span>Taos Kush Ag-Exposenomics & Phytoremediation</span>
          </button>

          <button
            onClick={() => setActiveSubTab('sovereignty_framework')}
            className={`py-2.5 px-3.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
              activeSubTab === 'sovereignty_framework'
                ? 'bg-neutral-900 text-white shadow-xs'
                : 'text-neutral-600 hover:bg-neutral-100'
            }`}
          >
            <Database size={15} />
            <span>1996 - 2026 Sovereign Architecture</span>
          </button>
        </div>
      </div>

      {/* MAIN SUB-TAB CONTENT AREA */}
      <div className="max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6 flex-1">
        
        {/* SUB-TAB 1: LIVE EXCHANGE BOARD */}
        {activeSubTab === 'exchange' && (
          <div className="space-y-6">
            
            {/* SEARCH & FILTERS BAR */}
            <div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
                <div className="relative flex-1">
                  <Filter className="absolute left-3 top-2.5 text-neutral-400" size={15} />
                  <input
                    type="text"
                    placeholder="Search commodities, producers, or locations (e.g. Hempcrete, Taos, Jicarilla, Lead Remediation)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-sans focus:outline-none focus:border-neutral-900"
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-medium focus:outline-none focus:border-neutral-900 cursor-pointer"
                  >
                    <option value="all">All Commodity Types</option>
                    <option value="industrial_fiber">Industrial Fiber & Hempcrete</option>
                    <option value="phytoremediation">Phytoremediation Soil Biomass</option>
                    <option value="grain_seed">Grain & Seed Oil Stock</option>
                    <option value="cannabinoids">Medical Cannabinoids & Terpenes</option>
                    <option value="biochar">Sequestered Biochar</option>
                  </select>

                  <select
                    value={selectedJurisdiction}
                    onChange={(e) => setSelectedJurisdiction(e.target.value)}
                    className="px-3 py-2 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-medium focus:outline-none focus:border-neutral-900 cursor-pointer"
                  >
                    <option value="all">All Sovereign Jurisdictions</option>
                    <option value="jicarilla">Jicarilla Apache / Tribal Sovereignty</option>
                    <option value="ohio">State of Ohio / Midwest Co-op</option>
                    <option value="taos">Taos Kush / Upper Rio Grande</option>
                  </select>
                </div>
              </div>
            </div>

            {/* COMMODITY CARDS LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredListings.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs hover:border-neutral-400 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded border border-neutral-200">
                        {item.id}
                      </span>
                      <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${
                        item.change24h >= 0 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {item.change24h >= 0 ? `+${item.change24h}%` : `${item.change24h}%`} 24h
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-neutral-900 leading-snug">
                      {item.name}
                    </h3>

                    <div className="text-[11px] text-neutral-600 space-y-1">
                      <p className="flex items-center gap-1.5 text-neutral-700 font-medium">
                        <Building2 size={13} className="text-amber-600 shrink-0" />
                        <span>{item.sovereigntyJurisdiction}</span>
                      </p>
                      <p className="flex items-center gap-1.5 text-neutral-500">
                        <Globe size={13} className="text-neutral-400 shrink-0" />
                        <span>{item.producerRegion}</span>
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {item.leadRemediationCertified && (
                        <span className="text-[9px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle2 size={11} className="text-emerald-600" />
                          Lead Remediation Certified ($Pb$)
                        </span>
                      )}
                      {item.pfasRemediationCertified && (
                        <span className="text-[9px] font-bold bg-cyan-50 text-cyan-800 border border-cyan-200 px-2 py-0.5 rounded flex items-center gap-1">
                          <ShieldCheck size={11} className="text-cyan-600" />
                          PFAS Clearance Certified
                        </span>
                      )}
                      <span className="text-[9px] font-mono bg-neutral-100 text-neutral-700 px-2 py-0.5 rounded border border-neutral-200">
                        Moisture: {item.moisturePercent}%
                      </span>
                      <span className="text-[9px] font-mono bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                        {item.thcCompliance}
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[10px] text-neutral-400 font-mono uppercase">Spot / Futures Price</p>
                      <p className="text-base font-bold font-mono text-neutral-900">
                        ${item.spotPricePerLb.toFixed(2)} <span className="text-xs text-neutral-500 font-normal">/ lb</span>
                      </p>
                      <p className="text-[10px] text-neutral-500 font-mono">
                        Futures '26: ${item.futures2026Price.toFixed(2)} / lb
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] text-neutral-400 font-mono uppercase">Available Volume</p>
                      <p className="text-xs font-bold font-mono text-neutral-800">
                        {item.availableVolumeTons.toLocaleString()} Tons
                      </p>
                      <button
                        onClick={() => {
                          setContractCommodity(item.id);
                          setActiveSubTab('contract_builder');
                        }}
                        className="mt-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-black text-white font-bold text-[11px] rounded transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>Trade Listing</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* HIGHLIGHT BOX: TRIBAL & SOVEREIGN EXCHANGES */}
            <div className="bg-amber-50/80 border border-amber-200/90 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="text-amber-700" size={18} />
                <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                  Sovereign Compact & Tribal Nation Trading
                </h4>
              </div>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                UCANX enforces sovereign-to-sovereign trade compacts. Native Tribal Nations (e.g., Jicarilla Apache Nation), state producers, and international buyers execute transactions on an unencumbered peer-to-peer ledger. Agricultural output from phytoremediated soils is automatically assigned appropriate non-food industrial grade certifications (e.g. structural hempcrete, carbon-negative biochar, thermal insulation).
              </p>
            </div>

            {/* CO-FOUNDER FEATURE: AGUA DAS & HEMP-I-SCREAM */}
            <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950 text-white rounded-xl overflow-hidden border border-amber-500/30 shadow-md p-4 sm:p-5 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase rounded">
                    UCANX Co-Founders & Heritage
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono">realNEO Co-op Era</span>
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-semibold">Featured Photo: Case Alumnus Archive</span>
              </div>

              <div className="relative rounded-lg overflow-hidden border border-amber-500/40 bg-black shadow-inner group">
                <img
                  src={caseAlumnusHeaderImg}
                  alt="Co-Founder Agua Das at Hemp-I-Scream Exhibition Booth"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[360px] mx-auto transition-transform duration-300 group-hover:scale-[1.01]"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-300 uppercase tracking-wider block">
                      Co-Founder Agua Das • Hemp-I-Scream!™ Founder
                    </span>
                    <span className="text-[11px] text-neutral-300">
                      Early hemp industry innovator exhibiting non-dairy high-EFA hemp ice cream (realNEO / CASE Archive)
                    </span>
                  </div>
                  <a
                    href="https://taoskushinstitute.com/sites/default/files/inline-images/CaseAlumnusHeader.JPG"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] font-mono bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 px-2 py-1 rounded shrink-0 transition-colors"
                  >
                    View Original JPG ↗
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Honoring Co-Founder Agua Das & The Hemp Food Revolution
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Agua Das, co-founder of UCANX alongside Norm Roulet, is a legendary early hemp industry innovator and creator of <strong>Hemp-I-Scream!™</strong> — a groundbreaking organic, non-dairy, non-soy, high-EFA hemp ice cream. His pioneering work demonstrated the immense economic and nutritional potential of industrial hemp foods long before commercial legalization.
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-amber-200/90 pt-1">
                  <span className="flex items-center gap-1 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700">
                    🍦 Hemp-I-Scream Pioneer
                  </span>
                  <span className="flex items-center gap-1 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700">
                    🌿 High EFAs & Protein
                  </span>
                  <span className="flex items-center gap-1 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700">
                    🏛️ 2010 Hemp Industries Association
                  </span>
                  <span className="flex items-center gap-1 bg-neutral-800/80 px-2.5 py-1 rounded border border-neutral-700">
                    📸 Case Alumnus Photo
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* SUB-TAB 2: SOVEREIGN CONTRACT BUILDER */}
        {activeSubTab === 'contract_builder' && (
          <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs space-y-6">
            <div className="border-b border-neutral-200 pb-4 flex items-center justify-between">
              <div>
                <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                  <Coins className="text-amber-600" size={18} />
                  <span>Execute Bi-Directional Sovereign Trade Contract</span>
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Direct peer-to-peer execution backed by ICEarth & ICESaturn sovereign data vaults and escrow smart contracts.
                </p>
              </div>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded text-[10px] font-mono font-bold uppercase">
                Zero Intermediary Fees
              </span>
            </div>

            {contractCreated ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 size={24} />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-emerald-950">
                    Sovereign Contract Executed & Sealed
                  </h3>
                  <p className="text-xs text-emerald-800 max-w-lg mx-auto">
                    Contract hash <code className="font-mono font-bold bg-white px-2 py-0.5 rounded border border-emerald-200 text-emerald-900">0xUCX_SOVEREIGN_77A912F3</code> has been written to your ICESaturn Sovereign Vault.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-emerald-200 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-neutral-800">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Commodity:</span>
                    <span className="font-bold">{activeCommodityObj.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Volume:</span>
                    <span className="font-bold">{contractVolumeTons} Tons</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Escrow Total:</span>
                    <span className="font-bold text-emerald-700">{calculatedTotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Jurisdiction:</span>
                    <span className="font-bold capitalize">{contractJurisdiction} Sovereign Compact</span>
                  </div>
                </div>

                <button
                  onClick={() => setContractCreated(false)}
                  className="px-4 py-2 bg-neutral-900 hover:bg-black text-white text-xs font-bold rounded cursor-pointer transition-colors"
                >
                  Create Another Sovereign Contract
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* FORM CONTROLS */}
                <div className="lg:col-span-2 space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 uppercase font-mono">
                      1. Select Sovereign Commodity Listing
                    </label>
                    <select
                      value={contractCommodity}
                      onChange={(e) => setContractCommodity(e.target.value)}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-medium focus:outline-none focus:border-neutral-900"
                    >
                      {SAMPLE_LISTINGS.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} — ${item.spotPricePerLb.toFixed(2)}/lb ({item.sovereigntyJurisdiction})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-700 uppercase font-mono">
                        2. Volume (Tons)
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={activeCommodityObj.availableVolumeTons}
                        value={contractVolumeTons}
                        onChange={(e) => setContractVolumeTons(Number(e.target.value))}
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-mono font-bold focus:outline-none focus:border-neutral-900"
                      />
                      <p className="text-[10px] text-neutral-500 font-mono">
                        Available: {activeCommodityObj.availableVolumeTons.toLocaleString()} Tons
                      </p>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-700 uppercase font-mono">
                        3. Sovereign Escrow Method
                      </label>
                      <select
                        value={escrowType}
                        onChange={(e) => setEscrowType(e.target.value as any)}
                        className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-medium focus:outline-none focus:border-neutral-900"
                      >
                        <option value="sovereign_escrow">ICEarth Sovereign Escrow (Zero-Fee)</option>
                        <option value="ice_token">ICE Token Crypto Reserve</option>
                        <option value="usdc">USDC / Multi-Currency Fiat Vault</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-neutral-700 uppercase font-mono">
                      4. Sovereign Regulatory Compact Matching
                    </label>
                    <select
                      value={contractJurisdiction}
                      onChange={(e) => setContractJurisdiction(e.target.value)}
                      className="w-full p-2.5 bg-neutral-50 border border-neutral-300 rounded-lg text-xs font-medium focus:outline-none focus:border-neutral-900"
                    >
                      <option value="jicarilla">Jicarilla Apache Nation Sovereign Compact</option>
                      <option value="tribal_inter">Inter-Tribal Agricultural Council Compact</option>
                      <option value="state_usda">State & USDA Industrial Hemp Program</option>
                      <option value="global_export">Global International Sovereign Export (UN/EU)</option>
                    </select>
                  </div>
                </div>

                {/* SUMMARY & ORDER EXECUTION SIDEBAR */}
                <div className="bg-neutral-900 text-white p-5 rounded-xl space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                      <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">Trade Specification</span>
                      <ShieldCheck size={16} className="text-emerald-400" />
                    </div>

                    <div className="space-y-2 text-xs font-sans">
                      <div>
                        <p className="text-[10px] font-mono text-neutral-400 uppercase">Selected Item</p>
                        <p className="font-bold text-white leading-tight mt-0.5">{activeCommodityObj.name}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-800/80 font-mono">
                        <div>
                          <p className="text-[10px] text-neutral-400 uppercase">Unit Price</p>
                          <p className="font-bold text-amber-300">${activeCommodityObj.spotPricePerLb.toFixed(2)} / lb</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-neutral-400 uppercase">Weight (Lbs)</p>
                          <p className="font-bold text-white">{(contractVolumeTons * 2000).toLocaleString()} lbs</p>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-neutral-800/80">
                        <p className="text-[10px] font-mono text-neutral-400 uppercase">Total Escrow Value</p>
                        <p className="text-xl font-bold font-mono text-emerald-400 mt-0.5">
                          {calculatedTotal}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setContractCreated(true)}
                    className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
                  >
                    <Lock size={14} />
                    <span>Seal Sovereign Contract</span>
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

        {/* SUB-TAB 3: TAOS KUSH AG-EXPOSENOMICS & PHYTOREMEDIATION */}
        {activeSubTab === 'phytoremediation' && (
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 text-emerald-800 rounded-lg">
                  <Sprout size={20} />
                </div>
                <div>
                  <h2 className="text-base font-bold text-neutral-900">
                    Taos Kush Institute: Ag-Exposenomics & Phytoremediation Architecture
                  </h2>
                  <p className="text-xs text-neutral-600">
                    Demonstrating how industrial hemp bio-remediates toxic heavy metals ($Pb$, $Cd$) and PFAS from soil while creating carbon-negative structural building materials.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                    <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-800 text-[10px] font-mono flex items-center justify-center">1</span>
                    <span>Soil Extraction ($Pb$ Phytoremediation)</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Industrial hemp roots extract up to 120 lbs of bioavailable lead per acre, pulling heavy metals out of toxic soil zones without destroying agricultural viability.
                  </p>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-[10px] font-mono flex items-center justify-center">2</span>
                    <span>Industrial Partitioning & Processing</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Lead isolates concentrate in non-edible stalk fibers and biochar feeds. Fibers are mineralized into structural hempcrete blocks, locking metals permanently into buildings.
                  </p>
                </div>

                <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-900">
                    <span className="w-5 h-5 rounded-full bg-purple-200 text-purple-800 text-[10px] font-mono flex items-center justify-center">3</span>
                    <span>Sovereign Carbon & Economic Returns</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    Farmers earn dual revenues: Soil decontamination carbon credits plus high-value industrial hurds traded directly on UCANX under sovereign tribal/state credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* TAOS KUSH DEMO IMAGE / CARD */}
            <div className="bg-neutral-900 text-white rounded-xl p-6 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded border border-amber-500/30">
                  Taos Kush Institute • Upper Rio Grande Valley
                </span>
                <h3 className="text-lg font-bold text-white">
                  High-Altitude Agricultural Sovereignty & Ecological Restoration
                </h3>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Located in Taos, New Mexico, the Taos Kush Institute serves as the primary physical proof-of-concept for UCANX. Combining traditional Indigenous stewardship, high-altitude cultivation, and cutting-edge 6-Sigma environmental testing, the institute demonstrates how sovereign agriculture transforms environmental hazards into community wealth.
                </p>
                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 pt-1">
                  <span>📍 Taos, NM</span>
                  <span>•</span>
                  <span>⚡ Zero Carbon Grid</span>
                  <span>•</span>
                  <span>🛡️ Jicarilla Apache Compact Integration</span>
                </div>
              </div>

              <div className="shrink-0 bg-neutral-800 border border-neutral-700 p-4 rounded-xl text-center space-y-2 w-full md:w-64">
                <Sprout className="text-emerald-400 mx-auto" size={32} />
                <h4 className="text-xs font-bold text-white font-mono">TAOSKI AG-LEDGER</h4>
                <p className="text-[10px] text-neutral-400">Integrated with ICESaturn Data Vault</p>
                <a
                  href="https://taoski.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 underline font-mono"
                >
                  <span>Visit Taoski Archive</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: 1996 - 2026 SOVEREIGN ARCHITECTURE & ROOTS */}
        {activeSubTab === 'sovereignty_framework' && (
          <div className="space-y-6">
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs space-y-5">
              <div className="border-b border-neutral-200 pb-4">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-500">
                  Historical Roots & Architecture Matrix
                </span>
                <h2 className="text-lg font-bold text-neutral-900 mt-1">
                  From 1996 "Information Community Earth" to 2026 Sovereign Exchange
                </h2>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  The conceptual framework for ICEarth and UCANX traces directly back to 1996 utility benchmarking and individual data ownership.
                </p>
              </div>

              <div className="space-y-4">
                <div className="border-l-2 border-amber-500 pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-amber-900">1996 — Information Community Earth (ICEarth Foundation)</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Formulated by Norm Roulet following 6-Sigma global enterprise benchmarking for utility and IT/defense leaders (DEC, IBM, HP, Motorola, Boeing supporting Echelon). Established the founding axiom: <em>"An individual should own his or her own data and only trusted parties should broker individuals' data as authorized by the individual."</em>
                  </p>
                </div>

                <div className="border-l-2 border-purple-500 pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-purple-900">2001 / 2021 — ICESaturn Architecture</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Designed as a sovereign data vault layer ensuring zero-knowledge privacy, verifiable credentials, and decentralized data custody. Pre-dated commercial cloud monoliths to guarantee that users retain total ownership over their personal, environmental, and financial assets.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500 pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-emerald-900">2005 — realNEO.us Sovereign Co-op</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Founded as a non-monetized, ad-free social portal and media network where members owned the platform co-operatively. Demonstrated early decentralized governance and member-owned digital space.
                  </p>
                </div>

                <div className="border-l-2 border-cyan-500 pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-cyan-900">2010 — UCANX (United Cannabis Exchange) Founded</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Established for the Hemp Industries Association as a global commodities exchange for industrial agricultural products subject to complex, shifting legal frameworks across tribal, state, and national borders.
                  </p>
                </div>

                <div className="border-l-2 border-neutral-900 pl-4 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold font-mono text-neutral-900">2026 — The Integrated ICEarth / UCANX Sovereign Platform</span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed">
                    Unifying environmental lead/PFAS remediation, sovereign exposure profiling, tribal compacts (e.g. Jicarilla Apache Nation), and multi-trillion-dollar agricultural commodities trading into a single sovereign platform.
                  </p>
                </div>
              </div>
            </div>

            {/* ICESATURN HISTORICAL SLIDESHOW SHOWCASE */}
            <div className="bg-gradient-to-br from-slate-900 via-neutral-900 to-indigo-950 text-white rounded-xl overflow-hidden border border-indigo-500/30 p-6 shadow-md space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-indigo-500/20 pb-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/20 px-2.5 py-1 rounded border border-indigo-500/30">
                    Historical Artifact • ICESaturn Slideshow (1996 - 2026)
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    Featured Slide 1: Original ICEarth Launch Logo & DNA Matrix
                  </h3>
                </div>
                <a
                  href="https://taoski.com/ICESaturn"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold font-mono rounded flex items-center gap-1.5 transition-colors shrink-0"
                >
                  <span>Open ICESaturn Slideshow</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 bg-neutral-950 rounded-lg p-3 border border-indigo-500/30 shadow-inner group relative">
                  <div className="w-full aspect-[16/9] bg-white rounded-md border border-neutral-300 p-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={launching1Img}
                      alt="ICEarth Launching Slide 1 - DNA Double Helix and Earth Logo"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                    />
                  </div>
                  <div className="mt-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-neutral-400">
                    <span>Slide 01: ICESaturn Conceptual Presentation</span>
                    <span className="text-indigo-300 font-bold">taoski.com/ICESaturn</span>
                  </div>
                </div>

                <div className="md:col-span-5 space-y-3">
                  <h4 className="text-sm font-bold text-indigo-200">
                    "Internet Community Earth now launching..."
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    This foundational slide contains Norm Roulet's original <strong>ICEarth</strong> emblem — depicting Earth bound by high-speed data rings adjacent to human genomic DNA. It articulates the founding mission: combining sovereign human biology, environmental data, and open trade architecture.
                  </p>
                  <div className="p-3 bg-indigo-950/50 border border-indigo-500/20 rounded-lg space-y-1 text-xs text-indigo-100">
                    <span className="font-bold text-amber-300 block font-mono text-[11px]">🔑 Architectural Axiom:</span>
                    <p className="text-[11px] italic leading-normal text-neutral-300">
                      "An individual should own his or her own data, and only trusted parties should broker data as authorized by the individual."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* DOWNLOAD / SPECIFICATION SHEET */}
            <div className="bg-neutral-900 text-white p-5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <FileText className="text-amber-400 shrink-0" size={24} />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase font-mono">ICEarth & UCANX Sovereign Specification</h4>
                  <p className="text-[11px] text-neutral-400">Read the complete architectural whitepaper and legacy framework documents.</p>
                </div>
              </div>
              <a
                href="https://taoski.com/ICEarth"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-2 shrink-0"
              >
                <span>Read Taoski Framework</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
