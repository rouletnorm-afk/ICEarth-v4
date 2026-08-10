import React, { useState, useEffect } from 'react';
import caseAlumnusHeaderImg from '../assets/images/CaseAlumnusHeader.JPG';
import launching1Img from '../assets/images/Launching1.png';
import icearthLaunchImg from '../assets/images/icearth_launch.png';
import taosKiHeaderImg from '../assets/images/TaosKIHeader100421s_0_0.png';
import tkiGisImg from '../assets/images/TKI-GIS.png';
import tkiGis2Img from '../assets/images/TKI-GIS2.png';
import tkiTimelineImg from '../assets/images/TKI-Timeline.png';
import {
  Zap,
  Atom,
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
  Award,
  MapPin,
  Truck,
  FileCheck,
  Calendar,
  ArrowLeft,
  DollarSign,
  PackageCheck,
  AlertTriangle,
  UserCheck,
  Building,
  Check,
  Share2,
  ShoppingBag,
  Calculator,
  ExternalLink,
  Search,
  Phone,
  Mail,
  Printer,
  Moon,
  Video,
  Radio,
  Copy,
  Sun,
  Droplet,
  Wind,
  Eye,
  Clock,
  BarChart3,
  Compass,
  FileSpreadsheet,
  Play,
  CheckCircle,
  Terminal,
  Newspaper
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
  initialFarmId?: string | null;
  siteTheme?: 'light' | 'dark';
}

export const UCANXCommoditiesExchange: React.FC<UCANXProps> = ({ onNavigateTab, initialFarmId, siteTheme = 'light' }) => {
  const isLight = siteTheme === 'light';
  const [activeSubTab, setActiveSubTab] = useState<'exchange' | 'sovereignty_framework' | 'phytoremediation' | 'contract_builder'>('exchange');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Standardized Farm Page View State
  const [viewingFarmId, setViewingFarmId] = useState<string | null>(() => {
    if (initialFarmId) return initialFarmId;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const farm = params.get('farm');
      if (farm === 'taos_kush_institute' || farm === 'taoskushinstitute' || farm === 'tki' || window.location.pathname.toLowerCase().includes('taoskushinstitute')) {
        return 'taos_kush_institute';
      }
    }
    return null;
  });

  const [copiedFarmUrl, setCopiedFarmUrl] = useState<boolean>(false);
  const [farmActiveTab, setFarmActiveTab] = useState<'storefront' | 'telemetry' | 'news_media' | 'agronomy' | 'compliance_coa' | 'gis_archive'>('storefront');
  const [farmTheme, setFarmTheme] = useState<'dark' | 'light'>(siteTheme);
  const [activeVideoModal, setActiveVideoModal] = useState<{ title: string; desc: string; date: string } | null>(null);

  // Sync farmTheme when siteTheme prop changes
  useEffect(() => {
    if (siteTheme) {
      setFarmTheme(siteTheme);
    }
  }, [siteTheme]);

  // Interactive Contract Builder State
  const [contractCommodity, setContractCommodity] = useState<string>(SAMPLE_LISTINGS[0].id);
  const [contractVolumeTons, setContractVolumeTons] = useState<number>(50);
  const [contractJurisdiction, setContractJurisdiction] = useState<string>('jicarilla');
  const [escrowType, setEscrowType] = useState<'ice_token' | 'usdc' | 'sovereign_escrow'>('sovereign_escrow');
  const [contractCreated, setContractCreated] = useState<boolean>(false);

  // Farm Logistics Calculator State for Taos Kush Institute
  const [orderCommodity, setOrderCommodity] = useState<string>('cbg_flower');
  const [orderQuantityLbs, setOrderQuantityLbs] = useState<number>(100);
  const [fulfillmentType, setFulfillmentType] = useState<'pickup' | 'freight'>('pickup');
  const [deliveryMiles, setDeliveryMiles] = useState<number>(150);
  const [orderPlacedModal, setOrderPlacedModal] = useState<boolean>(false);

  // Sync URL query parameters when viewing farm page
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    if (viewingFarmId === 'taos_kush_institute') {
      params.set('tab', 'ucanx');
      params.set('farm', 'taos_kush_institute');
      window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    } else if (params.get('farm')) {
      params.delete('farm');
      window.history.replaceState(null, '', `${window.location.pathname}?${params.toString()}`);
    }
  }, [viewingFarmId]);

  const handleCopyFarmUrl = () => {
    const shareableUrl = 'https://icearth.org/?tab=ucanx&farm=taos_kush_institute';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareableUrl);
      setCopiedFarmUrl(true);
      setTimeout(() => setCopiedFarmUrl(false), 3000);
    }
  };

  // Filter listings
  const filteredListings = SAMPLE_LISTINGS.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesJurisdiction = selectedJurisdiction === 'all' || item.sovereigntyJurisdiction.toLowerCase().includes(selectedJurisdiction.toLowerCase());
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.producerRegion.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesJurisdiction && matchesSearch;
  });

  const activeCommodityObj = SAMPLE_LISTINGS.find(c => c.id === contractCommodity) || SAMPLE_LISTINGS[0];
  const calculatedTotal = (contractVolumeTons * 2000 * activeCommodityObj.spotPricePerLb).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  // Calculation for Taos Kush Institute order
  const unitPrice = orderCommodity === 'cbg_flower' ? 450 : orderCommodity === 'hemp_hurd' ? 0.85 : orderCommodity === 'seed_oil' ? 1.65 : 12;
  const commodityCost = orderQuantityLbs * unitPrice;
  const freightCost = fulfillmentType === 'freight' ? deliveryMiles * 2.5 : 0;
  const totalFarmOrderCost = commodityCost + freightCost;

  // IF VIEWING STANDARDIZED FARM HOME PAGE (TAOS KUSH INSTITUTE)
  if (viewingFarmId === 'taos_kush_institute') {
    const isLight = farmTheme === 'light';

    return (
      <div className={`flex-1 flex flex-col h-full overflow-y-auto font-sans transition-colors duration-200 ${
        isLight ? 'bg-stone-50 text-stone-900' : 'bg-[#121212] text-[#E5E5E5]'
      }`}>
        <style>{`
          @media print {
            body, #root, div {
              background: #ffffff !important;
              color: #000000 !important;
              box-shadow: none !important;
            }
            .print\\:hidden {
              display: none !important;
            }
            .print\\:border-black {
              border-color: #000000 !important;
            }
          }
        `}</style>
        
        {/* FULL-WIDTH TOP HEADER BANNER (TAOS PUEBLO SACRED HORIZON) - IMAGE IS COMPLETELY UNOBSTRUCTED */}
        <div className={`w-full overflow-hidden shrink-0 ${
          isLight ? 'bg-stone-200 border-b border-stone-300' : 'bg-black border-b border-amber-500/30'
        }`}>
          <div className="w-full max-w-7xl mx-auto flex items-center justify-center">
            <img
              src={taosKiHeaderImg}
              alt="Taos Kush Institute Header - Taos Pueblo Sacred Ancestral Horizon"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[420px] object-contain mx-auto block"
            />
          </div>
        </div>

        {/* HEADER INFORMATION BAR SITUATIONALLY PLACED DIRECTLY BELOW THE IMAGE */}
        <div className={`w-full px-4 py-3 shrink-0 ${
          isLight ? 'bg-amber-100/90 border-b border-amber-300 text-stone-900' : 'bg-stone-950 border-b border-amber-500/30 text-stone-300'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-bold text-[11px] rounded uppercase">
                Taos Pueblo Ancestral Horizon
              </span>
              <span className={`font-bold ${isLight ? 'text-amber-900' : 'text-amber-300'}`}>
                260 New Mexico 150, El Prado, NM 87529
              </span>
            </div>
            <div className={`flex flex-wrap items-center gap-3 ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">3.6 Acres Ag Property</span>
              <span>•</span>
              <span className="text-cyan-700 dark:text-cyan-400 font-bold">3 Acequia Water Rights</span>
              <span>•</span>
              <span className="text-amber-800 dark:text-amber-400 font-bold">NM License #NM-AG-XXXX-TKI-XXX</span>
            </div>
          </div>
        </div>

        {/* FARM HEADER BAR & DEEP LINK ACTION CONTROLS */}
        <div className={`px-4 sm:px-8 py-4 shrink-0 border-b ${
          isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setViewingFarmId(null)}
                className={`px-3.5 py-2 border rounded-lg text-xs font-bold font-mono flex items-center gap-2 transition-colors cursor-pointer print:hidden ${
                  isLight
                    ? 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
              >
                <ArrowLeft size={14} />
                <span>Back to UCANX Exchange</span>
              </button>

              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase rounded">
                    Sovereign Agricultural Business Home
                  </span>
                  <span className={`text-xs font-mono ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                    User #1 Owner Profile
                  </span>
                </div>
                <h1 className={`text-xl sm:text-2xl font-bold font-serif mt-0.5 ${
                  isLight ? 'text-stone-900' : 'text-stone-100'
                }`}>
                  Taos Kush Institute
                </h1>
              </div>
            </div>

            {/* DIRECT OWNER CONTACTS, THEME TOGGLE, PRINT & SHARE CONTROLS */}
            <div className="flex flex-wrap items-center gap-2">
              
              {/* DIRECT OWNER PHONE */}
              <a
                href="tel:5757411750"
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
                  isLight
                    ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
                    : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30'
                }`}
                title="Call Sovereign Owner Norm Roulet"
              >
                <Phone size={13} />
                <span>575-741-1750</span>
              </a>

              {/* DIRECT OWNER EMAIL */}
              <a
                href="mailto:rouletnorm@gmail.com"
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer border ${
                  isLight
                    ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-300'
                    : 'bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border-amber-500/30'
                }`}
                title="Email Sovereign Owner Norm Roulet"
              >
                <Mail size={13} />
                <span>rouletnorm@gmail.com</span>
              </a>

              {/* COLOR SCHEME INTERFACE TOGGLE */}
              <button
                onClick={() => setFarmTheme(isLight ? 'dark' : 'light')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer border print:hidden ${
                  isLight
                    ? 'bg-purple-100 hover:bg-purple-200 text-purple-900 border-purple-300'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
                title="Switch Color Theme (Dark Mode / Light Mode)"
              >
                {isLight ? <Moon size={13} className="text-purple-700" /> : <Sun size={13} className="text-amber-400" />}
                <span>{isLight ? '🌙 Dark View' : '☀️ Light View'}</span>
              </button>

              {/* PRINT FARM PAGE BUTTON */}
              <button
                onClick={() => window.print()}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer border print:hidden ${
                  isLight
                    ? 'bg-stone-200 hover:bg-stone-300 text-stone-900 border-stone-400'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
                title="Print Page / Save as PDF"
              >
                <Printer size={13} />
                <span>Print Page</span>
              </button>

              {/* SHAREABLE DEEP LINK URL BUTTON */}
              <button
                onClick={handleCopyFarmUrl}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-sm print:hidden ${
                  copiedFarmUrl
                    ? 'bg-emerald-500 text-stone-950 border border-emerald-400'
                    : isLight
                    ? 'bg-amber-500 text-stone-950 hover:bg-amber-400 border border-amber-600'
                    : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-500/40'
                }`}
              >
                {copiedFarmUrl ? <Check size={13} /> : <Share2 size={13} />}
                <span>{copiedFarmUrl ? 'URL Copied!' : 'Share URL'}</span>
              </button>

              <button
                onClick={() => onNavigateTab && onNavigateTab('sovereign_portal')}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <UserCheck size={13} />
                <span>Owner: Norm Roulet</span>
              </button>
            </div>
          </div>
        </div>

        {/* REAL-TIME IoT SENSOR TELEMETRY & LIVE FARM METRICS BAR */}
        <div className={`px-4 sm:px-8 py-3 shrink-0 border-b ${
          isLight ? 'bg-stone-100 border-stone-300' : 'bg-stone-950 border-stone-800'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
            <div className={`flex items-center gap-2 text-xs font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
              <Radio size={14} className="animate-pulse text-emerald-600 dark:text-emerald-400" />
              <span className="font-bold uppercase tracking-wider text-[11px]">260 NM-150 Live IoT Sensor Telemetry Feed</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs font-mono w-full lg:w-auto">
              <div className={`px-3 py-1.5 rounded-lg border flex flex-col ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
                <span className={`text-[9px] uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Soil Moisture</span>
                <span className="font-bold text-cyan-700 dark:text-cyan-300 flex items-center gap-1">
                  <Droplet size={11} /> 38.4% (Acequia)
                </span>
              </div>

              <div className={`px-3 py-1.5 rounded-lg border flex flex-col ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
                <span className={`text-[9px] uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Soil Temp</span>
                <span className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1">
                  <Sun size={11} /> 68.2°F (7k ft)
                </span>
              </div>

              <div className={`px-3 py-1.5 rounded-lg border flex flex-col ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
                <span className={`text-[9px] uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Solar Array</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <Activity size={11} /> 14.2 kW Output
                </span>
              </div>

              <div className={`px-3 py-1.5 rounded-lg border flex flex-col ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
                <span className={`text-[9px] uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Acequia Flow</span>
                <span className="font-bold text-blue-700 dark:text-blue-300 flex items-center gap-1">
                  <Droplet size={11} /> 2.4 ft/s
                </span>
              </div>

              <div className={`px-3 py-1.5 rounded-lg border flex flex-col ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
                <span className={`text-[9px] uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Ambient CO2</span>
                <span className="font-bold text-purple-700 dark:text-purple-300 flex items-center gap-1">
                  <Wind size={11} /> 420 ppm
                </span>
              </div>

              <div className={`px-3 py-1.5 rounded-lg border flex flex-col ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'}`}>
                <span className={`text-[9px] uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Lead Test</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck size={11} /> &lt; 0.8 ppm Clean
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FARM NAVIGATION BUSINESS TABS */}
        <div className={`px-4 sm:px-8 py-2 shrink-0 overflow-x-auto border-b print:hidden ${
          isLight ? 'bg-stone-200 border-stone-300' : 'bg-stone-900 border-stone-800'
        }`}>
          <div className="max-w-7xl mx-auto flex items-center gap-2">
            {[
              { id: 'storefront', label: 'B2B Storefront & Orders', icon: ShoppingBag },
              { id: 'telemetry', label: 'Real-Time IoT Telemetry', icon: Radio },
              { id: 'news_media', label: 'Newsfeed & Video Feed', icon: Video },
              { id: 'agronomy', label: 'Agronomy & Soil Care', icon: Sprout },
              { id: 'compliance_coa', label: 'COA Lab Vault & Compliance', icon: FileCheck },
              { id: 'gis_archive', label: 'GIS Maps & 20-Yr Archive', icon: MapPin }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = farmActiveTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFarmActiveTab(tab.id as any)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-md'
                      : isLight
                      ? 'bg-white hover:bg-stone-100 text-stone-800 border border-stone-300'
                      : 'bg-stone-950/60 hover:bg-stone-800 text-stone-300 border border-stone-800'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN FARM BODY CONTENT */}
        <div className="max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8 flex-1">

          {/* SECURITY & LEGAL COMPLIANCE PROTOCOL NOTICE */}
          <div className="bg-gradient-to-r from-stone-900 via-amber-950/40 to-stone-900 border border-amber-500/30 p-4 rounded-2xl shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Lock className="text-amber-400 shrink-0 mt-0.5" size={20} />
              <div className="space-y-1">
                <h4 className="text-xs font-bold font-mono text-amber-300 uppercase tracking-wider">
                  Sovereign Agricultural Business Homepage & State Compliance Notice
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  <strong>Official Industry Hub:</strong> This page serves as the official business home for <strong>Taos Kush Institute</strong> (260 NM-150, El Prado, NM 87529). It connects sovereign producers directly with the B2B supply chain, state agricultural regulators, live IoT field telemetry, and UCANX commodity futures execution.
                </p>
              </div>
            </div>

            <div className="bg-stone-950 px-3.5 py-2 rounded-xl border border-stone-800 text-right shrink-0">
              <div className="text-[10px] font-mono text-stone-400 uppercase">State Parcel Address</div>
              <div className="text-xs font-bold text-stone-100 font-mono">260 NM-150, El Prado, NM 87529</div>
            </div>
          </div>

          {/* TAB CONTENT 1: STOREFRONT & B2B ORDERS */}
          {farmActiveTab === 'storefront' && (
            <div className="space-y-8">

              {/* DIRECT SOVEREIGN OWNER CONTACT & BUSINESS PROMOTION CARD */}
              <div className={`p-5 rounded-2xl border ${
                isLight
                  ? 'bg-amber-50/90 border-amber-300 text-stone-900'
                  : 'bg-gradient-to-r from-stone-900 via-amber-950/50 to-stone-900 border-amber-500/40 text-stone-100'
              } shadow-md space-y-3`}>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-500/30 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-800 dark:text-amber-400 tracking-wider">
                      Direct Sovereign Owner Contact & Business Promotion
                    </span>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-stone-900 dark:text-stone-100 mt-0.5">
                      Taos Kush Institute — Connect with Norm Roulet (User #1 Founder)
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-900 dark:text-amber-300 border border-amber-500/30 text-xs font-mono rounded font-bold">
                    Official Public Media & Commerce
                  </span>
                </div>

                <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                  Connect directly with Norm Roulet for commodity pre-orders, wholesale industrial hemp fiber/seed, ICEarth & UCANX co-op partnership inquiries, phytoremediation consulting, and NM state hemp licensing coordination.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-xs font-mono">
                  <a
                    href="tel:5757411750"
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                      isLight
                        ? 'bg-white border-stone-300 hover:border-amber-500'
                        : 'bg-stone-950 border-stone-800 hover:border-amber-500/50'
                    }`}
                  >
                    <div className="p-2 bg-amber-500/20 text-amber-800 dark:text-amber-400 rounded-lg shrink-0">
                      <Phone size={16} />
                    </div>
                    <div>
                      <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Direct Phone</span>
                      <span className="font-bold text-amber-800 dark:text-amber-300 text-xs">575-741-1750</span>
                    </div>
                  </a>

                  <a
                    href="mailto:rouletnorm@gmail.com"
                    className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                      isLight
                        ? 'bg-white border-stone-300 hover:border-amber-500'
                        : 'bg-stone-950 border-stone-800 hover:border-amber-500/50'
                    }`}
                  >
                    <div className="p-2 bg-amber-500/20 text-amber-800 dark:text-amber-400 rounded-lg shrink-0">
                      <Mail size={16} />
                    </div>
                    <div>
                      <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Direct Email</span>
                      <span className="font-bold text-amber-800 dark:text-amber-300 text-xs truncate block">rouletnorm@gmail.com</span>
                    </div>
                  </a>

                  <div className={`p-3 rounded-xl border flex items-center gap-3 ${
                    isLight ? 'bg-white border-stone-300' : 'bg-stone-950 border-stone-800'
                  }`}>
                    <div className="p-2 bg-emerald-500/20 text-emerald-800 dark:text-emerald-400 rounded-lg shrink-0">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Farm Parcel</span>
                      <span className="font-bold text-stone-900 dark:text-stone-200 text-xs">260 NM-150, El Prado, NM</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* PROPERTY METRICS & WATER RIGHTS SUMMARY GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className={`p-4 rounded-xl border space-y-1 ${
                  isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'
                }`}>
                  <span className={`text-[10px] font-mono uppercase block ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Agricultural Property</span>
                  <div className="text-base font-bold text-amber-700 dark:text-amber-400 font-mono">3.6 Acres</div>
                  <span className={`text-[10px] block ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>Organic High-Altitude Soil</span>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${
                  isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'
                }`}>
                  <span className={`text-[10px] font-mono uppercase block ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Water Rights Holdings</span>
                  <div className="text-base font-bold text-cyan-700 dark:text-cyan-400 font-mono">3 Acequia Rights</div>
                  <span className={`text-[10px] block ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>Acequia Madre / Rio Pueblo</span>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${
                  isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'
                }`}>
                  <span className={`text-[10px] font-mono uppercase block ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Heavy Metal Screening</span>
                  <div className="text-base font-bold text-emerald-700 dark:text-emerald-400 font-mono">0.8 ppm Lead (Clean)</div>
                  <span className={`text-[10px] block ${isLight ? 'text-emerald-800' : 'text-emerald-300'}`}>Alpine Spring Source</span>
                </div>

                <div className={`p-4 rounded-xl border space-y-1 ${
                  isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'
                }`}>
                  <span className={`text-[10px] font-mono uppercase block ${isLight ? 'text-stone-500' : 'text-stone-400'}`}>Sovereign Owner Key</span>
                  <div className="text-base font-bold text-amber-800 dark:text-amber-300 font-mono truncate">Norm Roulet</div>
                  <span className="text-[10px] text-amber-800 dark:text-amber-400 font-mono block">User #1 Founder</span>
                </div>
              </div>

              {/* SECTION 1: LIVE COMMODITY STOREFRONT & FUTURES CATALOG */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">
                      Standardized Commerce & Exchange
                    </span>
                    <h3 className="text-lg font-bold font-serif text-stone-100 flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-amber-500" />
                      Taos Kush Institute Commodity Catalog & Futures Lots
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-mono rounded">
                    UCANX Standardized Spot & Pre-Order Lots
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {/* ITEM 1 */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-mono rounded font-bold">
                          CANNABINOID FLOWER
                        </span>
                        <h4 className="text-sm font-bold text-stone-100 mt-1">
                          High-CBD / CBG Alpine Terpene Flower
                        </h4>
                        <p className="text-xs text-stone-400 mt-0.5">3.6 Acre Yield • High Altitude Organically Grown</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-amber-400 font-mono">$450 / lb</div>
                        <div className="text-[10px] text-stone-500 font-mono">Spot Price</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800 text-stone-400 font-mono">
                      <span>COA Tested: &lt; 0.3% Δ9-THC</span>
                      <span className="text-emerald-400 font-semibold">2026 Futures: $420 / lb</span>
                    </div>
                  </div>

                  {/* ITEM 2 */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-stone-800 text-stone-300 text-[10px] font-mono rounded font-bold">
                          INDUSTRIAL FIBER
                        </span>
                        <h4 className="text-sm font-bold text-stone-100 mt-1">
                          Structural Hempcrete Hurds & Bast Fiber
                        </h4>
                        <p className="text-xs text-stone-400 mt-0.5">Carbon Negative Construction Grade</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-stone-200 font-mono">$0.85 / lb</div>
                        <div className="text-[10px] text-stone-500 font-mono">Spot Price</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800 text-stone-400 font-mono">
                      <span>Volume: 125 Tons Ready</span>
                      <span className="text-emerald-400 font-semibold">2026 Futures: $0.92 / lb</span>
                    </div>
                  </div>

                  {/* ITEM 3 */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-300 text-[10px] font-mono rounded font-bold">
                          GRAIN & OIL
                        </span>
                        <h4 className="text-sm font-bold text-stone-100 mt-1">
                          Cold-Pressed Organic Hemp Seed Oil & Grain
                        </h4>
                        <p className="text-xs text-stone-400 mt-0.5">High-EFA Nutritional & Cosmetic Stock</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-cyan-300 font-mono">$1.65 / lb</div>
                        <div className="text-[10px] text-stone-500 font-mono">Spot Price</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800 text-stone-400 font-mono">
                      <span>Zero Lead / Zero Pesticide</span>
                      <span className="text-emerald-400 font-semibold">2026 Futures: $1.78 / lb</span>
                    </div>
                  </div>

                  {/* ITEM 4 */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] font-mono rounded font-bold">
                          GENETICS & CLONES
                        </span>
                        <h4 className="text-sm font-bold text-stone-100 mt-1">
                          High-Altitude Certified Hemp Seedlings & Clones
                        </h4>
                        <p className="text-xs text-stone-400 mt-0.5">Acclimated to 7,000 ft Frost Resilience</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-purple-300 font-mono">$12.00 / plant</div>
                        <div className="text-[10px] text-stone-500 font-mono">Pre-Order</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs pt-2 border-t border-stone-800 text-stone-400 font-mono">
                      <span>Batch minimum: 50 units</span>
                      <span className="text-emerald-400 font-semibold">Ready for Spring Planting</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* SECTION 2: STANDARDIZED LOGISTICS & PICK-UP / FREIGHT DELIVERY CALCULATOR */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">
                      Logistics & Fulfillment Engine
                    </span>
                    <h3 className="text-lg font-bold font-serif text-stone-100 flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-amber-500" />
                      Order & Logistics Calculator (260 NM-150, El Prado, NM)
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-400">
                    Pick-Up / Haulage Freight Manifest
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-stone-400 block mb-1 font-mono">Select Commodity Lot</label>
                        <select
                          value={orderCommodity}
                          onChange={(e) => setOrderCommodity(e.target.value)}
                          className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                        >
                          <option value="cbg_flower">High-CBD/CBG Flower ($450/lb)</option>
                          <option value="hemp_hurd">Hempcrete Structural Hurds ($0.85/lb)</option>
                          <option value="seed_oil">Organic Seed Oil Stock ($1.65/lb)</option>
                          <option value="clones">High-Altitude Clones ($12/plant)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-stone-400 block mb-1 font-mono">Order Quantity (Lbs / Units)</label>
                        <input
                          type="number"
                          value={orderQuantityLbs}
                          onChange={(e) => setOrderQuantityLbs(Math.max(1, Number(e.target.value)))}
                          className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div>
                        <label className="text-stone-400 block mb-1 font-mono">Fulfillment Option</label>
                        <select
                          value={fulfillmentType}
                          onChange={(e) => setFulfillmentType(e.target.value as any)}
                          className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                        >
                          <option value="pickup">On-Site Pickup (260 NM-150, El Prado)</option>
                          <option value="freight">Regional Freight Haulage ($2.50/mile)</option>
                        </select>
                      </div>

                      {fulfillmentType === 'freight' && (
                        <div>
                          <label className="text-stone-400 block mb-1 font-mono">Delivery Distance (Miles)</label>
                          <input
                            type="number"
                            value={deliveryMiles}
                            onChange={(e) => setDeliveryMiles(Math.max(10, Number(e.target.value)))}
                            className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 focus:outline-none focus:border-amber-500 font-mono"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-stone-950 p-5 rounded-2xl border border-amber-500/30 space-y-3">
                    <div className="text-xs font-mono text-amber-400 uppercase font-bold">
                      Order & Freight Cost Summary
                    </div>

                    <div className="space-y-1.5 text-xs text-stone-300">
                      <div className="flex justify-between">
                        <span>Commodity Cost ({orderQuantityLbs} units):</span>
                        <span className="font-mono text-stone-100">${commodityCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fulfillment ({fulfillmentType === 'pickup' ? 'On-Site Pickup' : `${deliveryMiles} mi freight`}):</span>
                        <span className="font-mono text-stone-100">${freightCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-amber-300 font-bold pt-2 border-t border-stone-800 text-sm">
                        <span>Total Contract Value:</span>
                        <span className="font-mono">${totalFarmOrderCost.toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => setOrderPlacedModal(true)}
                      className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Coins size={15} />
                      <span>Execute UCANX Smart Contract Order</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT 2: REAL-TIME IoT TELEMETRY */}
          {farmActiveTab === 'telemetry' && (
            <div className="space-y-6">
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400">Wireless Node #TKI-NODE-01</span>
                    <h3 className="text-lg font-bold text-stone-100 font-serif">260 NM-150 Real-Time Soil & Environmental Sensor Log</h3>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono rounded">
                    Status: Online (Solar Powered 24/7)
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="text-stone-400">Soil Moisture & Hydration</div>
                    <div className="text-2xl font-bold text-cyan-400">38.4 %</div>
                    <div className="text-[11px] text-stone-400">Acequia Madre Irrigated • Sub-Surface Sensor 12"</div>
                  </div>

                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="text-stone-400">Off-Grid Solar Microgrid</div>
                    <div className="text-2xl font-bold text-amber-400">14.2 kW</div>
                    <div className="text-[11px] text-stone-400">Battery Bank: 98% Charged (48V LiFePO4)</div>
                  </div>

                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="text-stone-400">Heavy Metal Soil Sensor (Pb)</div>
                    <div className="text-2xl font-bold text-emerald-400">0.8 ppm</div>
                    <div className="text-[11px] text-emerald-300">Clean Alpine Standard (EPA Threshold 400 ppm)</div>
                  </div>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 text-xs font-mono space-y-2">
                  <div className="text-amber-300 font-bold uppercase">Telemetry Stream Audit Trail (Latest 5 Minutes)</div>
                  <div className="space-y-1 text-stone-400 text-[11px]">
                    <div>[2026-08-09 22:25:01] NODE_TKI_01: Moisture=38.4%, Temp=68.2F, Solar=14.2kW, CO2=420ppm &rarr; OK</div>
                    <div>[2026-08-09 22:20:01] NODE_TKI_01: Moisture=38.2%, Temp=68.1F, Solar=14.5kW, CO2=418ppm &rarr; OK</div>
                    <div>[2026-08-09 22:15:01] NODE_TKI_01: Moisture=38.5%, Temp=68.0F, Solar=14.8kW, CO2=421ppm &rarr; OK</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT 3: NEWSFEED & VIDEO FEED */}
          {farmActiveTab === 'news_media' && (
            <div className="space-y-8">
              
              {/* FEATURED VIDEO UPDATES */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400">Multimedia Feed</span>
                    <h3 className="text-lg font-bold text-stone-100 font-serif flex items-center gap-2">
                      <Video className="w-5 h-5 text-amber-500" />
                      Taos Kush Institute Video Updates & Field Recordings
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-400">Live Field Coverage</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "2026 High-Altitude Terpene Flower Harvest",
                      desc: "Field recording of the 3.6 acre CBG/CBD harvest under the Taos Pueblo horizon.",
                      date: "Aug 2026",
                      tag: "Harvest Video"
                    },
                    {
                      title: "Acequia Ditch Cleaning & Water Turn Allocation",
                      desc: "Community maintenance of Acequia Madre de Taos for sustainable flood irrigation.",
                      date: "Jul 2026",
                      tag: "Water Rights"
                    },
                    {
                      title: "Pressing Carbon-Negative Hempcrete Hurds",
                      desc: "Demonstrating structural hemp hurd block pressing for local eco-construction.",
                      date: "Jun 2026",
                      tag: "Industrial Fiber"
                    }
                  ].map((vid, idx) => (
                    <div key={idx} className="bg-stone-950 rounded-xl overflow-hidden border border-stone-800 space-y-3 p-3 flex flex-col justify-between">
                      <div className="w-full aspect-video bg-stone-900 rounded-lg overflow-hidden border border-stone-800 flex items-center justify-center relative group cursor-pointer"
                           onClick={() => setActiveVideoModal(vid)}>
                        <div className="w-12 h-12 rounded-full bg-amber-500/90 text-stone-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <Play size={20} className="ml-1 fill-stone-950" />
                        </div>
                        <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[10px] font-mono text-amber-300 border border-amber-500/30">
                          {vid.tag}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs font-bold text-stone-100">{vid.title}</div>
                        <p className="text-[11px] text-stone-400">{vid.desc}</p>
                        <div className="text-[10px] font-mono text-amber-400/80 pt-1">{vid.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CHRONOLOGICAL OPERATIONAL NEWSFEED */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-amber-400">Operational Bulletin</span>
                    <h3 className="text-lg font-bold text-stone-100 font-serif flex items-center gap-2">
                      <Newspaper className="w-5 h-5 text-amber-500" />
                      Taos Kush Institute Newsfeed & Field Announcements
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-stone-400">Chronological Logs</span>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      date: "August 4, 2026",
                      title: "State Agriculture Licensing Audit Passed - 100% Zero-Lead Soil Certification Verified",
                      content: "New Mexico Department of Agriculture field inspectors completed annual soil and crop compliance testing. All 3.6 acres tested at < 0.8 ppm Lead and zero synthetic pesticide residue. License #NM-AG-2026-TKI-001 renewed.",
                      category: "Compliance"
                    },
                    {
                      date: "July 18, 2026",
                      title: "Acequia Madre Water Turn Opened for 3.6 Acre Crop Rotation",
                      content: "Mayordomo authorized 48-hour flood irrigation turn from Acequia Madre de Taos. High-altitude CBG flower and hemp hurd plots fully hydrated with pure alpine watershed runoff.",
                      category: "Water Rights"
                    },
                    {
                      date: "June 12, 2026",
                      title: "2026 Spring Seedling Batch (High-Altitude Clones) Fully Distributed",
                      content: "First batch of frost-acclimated CBG clones delivered to partner farms in the Upper Rio Grande Basin. Solar-powered wireless monitoring node site operational at 7,000 ft elevation.",
                      category: "Agronomy"
                    }
                  ].map((post, i) => (
                    <div key={i} className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-amber-400 font-bold">{post.title}</span>
                        <span className="text-stone-500">{post.date}</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed">{post.content}</p>
                      <div className="text-[10px] font-mono text-emerald-400 pt-1">Category: {post.category} • Verified Sovereign Log</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB CONTENT 4: AGRONOMY & CROP ROTATION */}
          {farmActiveTab === 'agronomy' && (
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
              <div className="border-b border-stone-800 pb-3">
                <span className="text-[10px] font-mono font-bold uppercase text-amber-400">Regenerative Farming</span>
                <h3 className="text-lg font-bold text-stone-100 font-serif">Crop Rotation, Soil Health & Bio-Accumulation Schedule</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-amber-300 font-bold">High-Altitude Cannabinoid Rotation (Plot A)</div>
                  <p className="text-stone-300">Organically grown CBG/CBD cultivar bred specifically for 7,000 ft elevation, UV-B terpene enhancement, and extreme diurnal temperature swings.</p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-cyan-300 font-bold">Acequia Irrigated Cover Crop (Plot B)</div>
                  <p className="text-stone-300">Leguminous cover crops and deep-taproot industrial hemp for nitrogen fixation and soil organic matter enrichment using traditional surface water rights.</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB CONTENT 5: COA LAB VAULT & COMPLIANCE */}
          {farmActiveTab === 'compliance_coa' && (
            <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 space-y-6">
              <div className="border-b border-stone-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-400">State & Laboratory Vault</span>
                  <h3 className="text-lg font-bold text-stone-100 font-serif">Certificate of Analysis (COA) & License Documents</h3>
                </div>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono rounded">
                  100% Certified Clean
                </span>
              </div>

              <div className="space-y-3 text-xs font-mono">
                {[
                  { name: "Heavy Metal ICP-MS Screen (Lead, Cadmium, Arsenic)", result: "< 0.8 ppm Pb (PASS)", lab: "NM Environmental Lab #XXXX-TKI-XX" },
                  { name: "Cannabinoid HPLC Potency Profile (CBD/CBG Flower)", result: "18.4% CBG, 0.12% Δ9-THC (PASS)", lab: "Sovereign Ag Testing Station" },
                  { name: "Acequia Spring Water Purity Panel", result: "Non-Detect PFAS, Zero Lead (PASS)", lab: "Upper Rio Grande Watershed Lab" },
                  { name: "State Agriculture & Hemp Producer License", result: "Active License #NM-AG-XXXX-TKI-XXX", lab: "NM Dept of Agriculture" }
                ].map((doc, i) => (
                  <div key={i} className="bg-stone-950 p-4 rounded-xl border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <div>
                      <div className="font-bold text-stone-100">{doc.name}</div>
                      <div className="text-stone-400 text-[11px]">{doc.lab}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">{doc.result}</span>
                      <button className="px-2.5 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded text-[11px]">View PDF</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB CONTENT 6: GIS SPATIAL MAPS & 20-YR ARCHIVE */}
          {farmActiveTab === 'gis_archive' && (
            <div className="space-y-8">
              
              {/* GIS SPATIAL SURVEY & AERIAL MAPS */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">
                    Geographic Information System
                  </span>
                  <h3 className="text-lg font-bold font-serif text-stone-100 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-500" />
                    Taos Kush Institute Property GIS & Acequia Maps
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Aerial parcel boundaries, 3 Acequia ditch irrigation routes, soil sampling nodes, and wireless node site.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-2">
                    <div className="w-full aspect-[4/3] bg-stone-900 rounded-lg overflow-hidden border border-stone-800">
                      <img
                        src={tkiGisImg}
                        alt="Taos Kush Institute GIS Aerial Map 1"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <div className="p-2 bg-stone-900 rounded-lg border border-stone-800 text-[11px] text-stone-300 font-mono">
                      <span className="text-amber-300 font-bold block mb-0.5">GIS Survey #1: Parcel & Acequia Canal</span>
                      3.6 Acre Agricultural Parcel Boundary • Acequia Madre de Taos Catchment
                    </div>
                  </div>

                  <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 space-y-2">
                    <div className="w-full aspect-[4/3] bg-stone-900 rounded-lg overflow-hidden border border-stone-800">
                      <img
                        src={tkiGis2Img}
                        alt="Taos Kush Institute GIS Map 2"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover block"
                      />
                    </div>
                    <div className="p-2 bg-stone-900 rounded-lg border border-stone-800 text-[11px] text-stone-300 font-mono">
                      <span className="text-cyan-300 font-bold block mb-0.5">GIS Survey #2: Soil Grid & Pickup Hub</span>
                      Soil Heavy Metal Sampling Grid (0.8 ppm Pb) • Freight Truck Turning Radius
                    </div>
                  </div>
                </div>
              </div>

              {/* 20-YEAR TIMELINE & RESEARCH DEVELOPMENT */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase text-amber-400 tracking-wider">
                    Research Milestones & Legacy
                  </span>
                  <h3 className="text-lg font-bold font-serif text-stone-100 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-500" />
                    Taos Kush Institute Development Timeline
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Two decades of high-altitude cannabinoid research, phytoremediation trials, and sovereign trade architecture.
                  </p>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3 overflow-hidden">
                  <div className="w-full aspect-[16/9] max-h-[400px] bg-stone-900 rounded-lg overflow-hidden border border-stone-800">
                    <img
                      src={tkiTimelineImg}
                      alt="Taos Kush Institute 20-Year Timeline"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain mx-auto block"
                    />
                  </div>
                  <div className="p-3 bg-stone-900 rounded-lg border border-stone-800 flex flex-wrap items-center justify-between text-xs text-stone-300 font-mono">
                    <span>Founded by Norm Roulet & Agua Das</span>
                    <span className="text-amber-300 font-bold">1996 - 2026 Sovereign Milestone Record</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* PLAYABLE VIDEO MODAL */}
        {activeVideoModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-amber-500/40 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl text-center">
              <div className="w-full aspect-video bg-black rounded-xl border border-stone-800 flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-6 space-y-2">
                  <Play size={40} className="text-amber-400 mx-auto animate-pulse" />
                  <div className="text-xs font-mono text-stone-300">Playing Simulated Field Stream</div>
                  <div className="text-sm font-bold text-amber-300 font-serif">{activeVideoModal.title}</div>
                </div>
              </div>

              <div className="text-left space-y-1">
                <div className="text-xs font-bold text-stone-100">{activeVideoModal.title}</div>
                <p className="text-xs text-stone-300">{activeVideoModal.desc}</p>
                <div className="text-[10px] font-mono text-amber-400">{activeVideoModal.date} • Taos Kush Institute Archive</div>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold text-xs rounded-xl transition-colors"
              >
                Close Video Player
              </button>
            </div>
          </div>
        )}

        {/* ORDER SUCCESS MODAL */}
        {orderPlacedModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-stone-900 border border-amber-500/40 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                <CheckCircle2 size={28} />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-stone-100 font-serif">
                  UCANX Contract Escrow Initiated
                </h3>
                <p className="text-xs text-stone-300">
                  Your commodity contract for <strong>Taos Kush Institute</strong> has been booked under UCANX Sovereign Escrow.
                </p>
              </div>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs font-mono space-y-1 text-left text-stone-300">
                <div><strong>Farm:</strong> Taos Kush Institute (260 NM-150, El Prado)</div>
                <div><strong>Contract Value:</strong> ${totalFarmOrderCost.toLocaleString()}</div>
                <div><strong>Fulfillment:</strong> {fulfillmentType === 'pickup' ? 'On-Site Pickup' : `Freight Delivery (${deliveryMiles} mi)`}</div>
                <div><strong>State Manifest ID:</strong> NM-UCANX-2026-{Math.floor(100000 + Math.random() * 900000)}</div>
              </div>

              <button
                onClick={() => setOrderPlacedModal(false)}
                className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close & Return to Farm Page
              </button>
            </div>
          </div>
        )}

      </div>
    );
  }

  return (
    <div className={`flex-1 flex flex-col h-full overflow-y-auto font-sans transition-colors duration-200 ${
      isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'
    }`}>
      
      {/* TOP HEADER BANNER: CO-FOUNDER AGUA DAS LEGACY HEADER PHOTO - CLEANLY DISPLAYED WITH CAPTION BELOW */}
      <div className={`w-full border-b flex flex-col justify-center items-center py-2 px-2 sm:px-6 shadow-md shrink-0 ${
        isLight ? 'bg-stone-100 border-stone-300' : 'bg-neutral-950 border-amber-500/30'
      }`}>
        <div className="w-full max-w-6xl flex justify-center items-center overflow-hidden rounded-lg bg-black border border-stone-800">
          <img
            src={caseAlumnusHeaderImg}
            alt="Co-Founder Agua Das - Hemp-I-Scream Pioneer Header"
            referrerPolicy="no-referrer"
            className="w-full h-auto max-h-[420px] object-cover sm:object-contain mx-auto block"
          />
        </div>
        <div className={`w-full max-w-6xl border px-4 py-2 mt-1.5 rounded-lg flex flex-wrap items-center justify-between gap-2 text-xs font-mono ${
          isLight ? 'bg-amber-50/90 border-amber-200 text-amber-950' : 'bg-neutral-900 border-neutral-800 text-amber-300'
        }`}>
          <span className="font-bold uppercase">Co-Founder Agua Das at 2010 Exhibition Booth — Hemp-I-Scream!™ Pioneer</span>
          <span className={isLight ? 'text-stone-600 text-[11px]' : 'text-neutral-400 text-[11px]'}>CASE Alumnus Archive • realNEO Co-op Era</span>
        </div>
      </div>

      {/* HERO BANNER & HISTORICAL CONTEXT */}
      <section className={`border-b p-6 sm:p-8 shrink-0 relative overflow-hidden ${
        isLight
          ? 'bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100/60 border-stone-300 text-stone-900'
          : 'bg-neutral-900 text-white border-neutral-800'
      }`}>
        {/* Subtle grid backdrop decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
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
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${
                    isLight ? 'bg-amber-200/80 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    Founded 2010 • Sovereign Ag Commodities
                  </span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                    isLight ? 'bg-stone-200 text-stone-700 border-stone-300' : 'bg-neutral-800 text-neutral-400 border-neutral-700'
                  }`}>
                    ICEarth Matrix
                  </span>
                </div>
                <h1 className={`text-xl sm:text-2xl font-bold tracking-tight mt-1 ${
                  isLight ? 'text-stone-900' : 'text-white'
                }`}>
                  UCANX: United Cannabis & Agricultural Commodities Exchange
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className={`text-[10px] uppercase font-mono ${isLight ? 'text-stone-600' : 'text-neutral-400'}`}>ICEarth Root Architecture</p>
                <p className="text-xs font-bold text-amber-800 dark:text-amber-400 font-mono">1996 - 2026 Sovereign Data Era</p>
              </div>
              <button 
                onClick={() => setActiveSubTab('contract_builder')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-md"
              >
                <Coins size={15} />
                <span>Issue Smart Commodity Contract</span>
              </button>
            </div>
          </div>

          <p className={`text-xs sm:text-sm max-w-4xl leading-relaxed ${
            isLight ? 'text-stone-700' : 'text-neutral-300'
          }`}>
            UCANX is the world's first <strong>Tribal & Inter-Sovereign Commodity Exchange</strong>, designed to standardize trade for organic industrial hemp fiber, grain, seed oil, cannabinoid biomass, and heavy-metal phytoremediation crops across Native Tribal Nations, state compacts, and international agricultural corridors.
          </p>

          {/* SUB TABS NAVIGATION */}
          <div className={`flex flex-wrap items-center gap-2 pt-2 border-t ${
            isLight ? 'border-amber-200' : 'border-neutral-800'
          }`}>
            <button
              onClick={() => setActiveSubTab('exchange')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'exchange'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : isLight ? 'bg-stone-200 text-stone-800 hover:bg-stone-300' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <TrendingUp size={14} />
              <span>Spot & Futures Exchange</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sovereignty_framework')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'sovereignty_framework'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : isLight ? 'bg-stone-200 text-stone-800 hover:bg-stone-300' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <Scale size={14} />
              <span>Sovereignty & Legal Compacts</span>
            </button>

            <button
              onClick={() => setActiveSubTab('phytoremediation')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'phytoremediation'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : isLight ? 'bg-stone-200 text-stone-800 hover:bg-stone-300' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <ShieldCheck size={14} />
              <span>Phytoremediation Standards</span>
            </button>

            <button
              onClick={() => setActiveSubTab('contract_builder')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                activeSubTab === 'contract_builder'
                  ? 'bg-amber-500 text-neutral-950 font-bold'
                  : isLight ? 'bg-stone-200 text-stone-800 hover:bg-stone-300' : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              <FileText size={14} />
              <span>Interactive Contract Builder</span>
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT ZONE */}
      <main className="max-w-6xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8 flex-1">

        {/* SUBTAB 1: EXCHANGE LISTINGS */}
        {activeSubTab === 'exchange' && (
          <div className="space-y-6">

            {/* FEATURED DEMO PROMPT & STANDARDIZED FARM CARD: TAOS KUSH INSTITUTE */}
            <div className={`rounded-2xl overflow-hidden shadow-xl border ${
              isLight
                ? 'bg-white border-amber-300 text-stone-900'
                : 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-amber-950/60 text-white border-amber-500/40'
            }`}>
              
              {/* GRAPHICAL FEATURE BANNER AT TOP OF CARD - FULL IMAGE UNMUTILATED WITH CAPTION BELOW */}
              <div className="w-full bg-black border-b border-amber-500/30 overflow-hidden flex items-center justify-center py-2 px-2">
                <img
                  src={taosKiHeaderImg}
                  alt="Taos Kush Institute Header - Taos Pueblo Sacred Horizon"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[380px] object-contain block mx-auto"
                />
              </div>

              {/* CAPTION BAR BELOW THE THUMBNAIL IMAGE */}
              <div className="bg-black/90 px-4 py-2 border-b border-amber-500/30 flex flex-wrap items-center justify-between text-[10px] font-mono text-amber-300">
                <span className="font-bold uppercase">Taos Pueblo Ancestral Horizon • 260 NM-150, El Prado, NM</span>
                <span className="hidden sm:inline text-neutral-300">Featured Sovereign Farm #0001</span>
              </div>

              <div className="p-5 sm:p-6 space-y-4">
                <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b pb-3 ${
                  isLight ? 'border-stone-200' : 'border-neutral-800'
                }`}>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 border text-[10px] font-mono font-bold uppercase rounded ${
                        isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      }`}>
                        🏛️ DEMO FEATURED SOVEREIGN FARM #0001
                      </span>
                      <span className={`text-xs font-mono ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>User #1 Owner Presence</span>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold font-serif mt-1 ${
                      isLight ? 'text-stone-900' : 'text-white'
                    }`}>
                      Taos Kush Institute (260 New Mexico 150, El Prado, NM 87529)
                    </h3>
                  </div>

                  <button
                    onClick={() => setViewingFarmId('taos_kush_institute')}
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2 shrink-0 active:scale-95"
                  >
                    <Building2 size={16} />
                    <span>Open Farm Business Homepage</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-700' : 'text-neutral-300'}`}>
                  The <strong>Taos Kush Institute</strong> is a premier sovereign high-altitude agricultural research farm located directly across from Taos Pueblo land at 260 New Mexico 150, El Prado, NM. Featuring <strong>3.6 acres of organic agricultural property</strong>, <strong>3 surface water rights along the Acequia Madre de Taos</strong>, and State Agriculture License <strong>#NM-AG-XXXX-TKI-XXX</strong>, this property demonstrates how sovereign farms connect directly into the UCANX exchange.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs font-mono">
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-amber-50/80 border-amber-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Property Acreage</span>
                    <span className="font-bold text-amber-800 dark:text-amber-300">3.6 Acres Ag Soil</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-cyan-50/80 border-cyan-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Water Rights</span>
                    <span className="font-bold text-cyan-800 dark:text-cyan-300">3 Acequia Rights</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-emerald-50/80 border-emerald-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Heavy Metal Test</span>
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">0.8 ppm Pb (Clean)</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-emerald-50/80 border-emerald-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>State Licensing</span>
                    <span className="font-bold text-emerald-800 dark:text-emerald-400">#NM-AG-XXXX-TKI-XXX</span>
                  </div>
                </div>
              </div>

              {/* DEMO FEATURED PROCESSING COMPANY #0002: NANOSPIRE NANOCANNX */}
              <div className={`p-6 sm:p-8 rounded-3xl border shadow-lg space-y-5 ${
                isLight ? 'bg-cyan-50/40 border-cyan-200' : 'bg-stone-900 border-cyan-500/30'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`px-2 py-0.5 border text-[10px] font-mono font-bold uppercase rounded ${
                        isLight ? 'bg-cyan-100 text-cyan-950 border-cyan-300' : 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
                      }`}>
                        ⚡ STANDARDIZED PROCESSING TECHNOLOGY COMPANY #0002
                      </span>
                      <span className={`text-xs font-mono ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>User #1 Partner Company</span>
                    </div>
                    <h3 className={`text-lg sm:text-xl font-bold font-serif mt-1 ${
                      isLight ? 'text-stone-900' : 'text-white'
                    }`}>
                      NanoSpire NanoCannX (Exclusive Cannabis Nanotech Rights)
                    </h3>
                  </div>

                  {onNavigateTab && (
                    <button
                      onClick={() => onNavigateTab('nanospire_nanocannx')}
                      className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2 shrink-0 active:scale-95 font-mono"
                    >
                      <Zap size={16} />
                      <span>Open NanoSpire Processing Portal</span>
                      <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>

                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-700' : 'text-neutral-300'}`}>
                  Standardized Nanotechnology Processing Enterprise & Exclusive Industry Licensing Portal operated by <strong>Norm Roulet (User #1)</strong>. Utilizing patented <strong>reentrant micro-jet acoustic & hydrodynamic cavitation</strong> developed by key inventor <strong>Mark L. LeClair</strong> (CEO & Founder) and <strong>Serge Lebid</strong> (President & Co-Founder) with guidance from Caltech Prof. Christopher Brennen and Capt. Edmond Pope. Provides particle reduction down to sub-50nm, nano-emulsions, wood oil homogenization (e.g., <strong>Hemp Shield</strong>), biopolymer nanofibrils, biofuels, and zero-chemical PFAS remediation.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 text-xs font-mono">
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-white border-cyan-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Particle Scale</span>
                    <span className="font-bold text-cyan-800 dark:text-cyan-300">Sub-50 Nanometers</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-white border-amber-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Featured Proposal</span>
                    <span className="font-bold text-amber-800 dark:text-amber-300">Hemp Shield Licensing</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-white border-emerald-200' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Extract Bioavailability</span>
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">500% - 1000% Boost</span>
                  </div>
                  <div className={`p-2.5 rounded-lg border ${
                    isLight ? 'bg-white border-stone-300' : 'bg-neutral-950 border-neutral-800'
                  }`}>
                    <span className={`text-[10px] block uppercase ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>PFAS Destruction</span>
                    <span className="font-bold text-stone-900 dark:text-stone-100">Zero Chemical Cleavage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* FILTER & SEARCH BAR */}
            <div className={`p-4 rounded-2xl border shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 ${
              isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-neutral-800'
            }`}>
              <div className="flex-1 relative">
                <Search size={16} className={`absolute left-3.5 top-1/2 -translate-y-1/2 ${isLight ? 'text-stone-400' : 'text-neutral-400'}`} />
                <input
                  type="text"
                  placeholder="Search commodity lots by grade, jurisdiction, or region..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs focus:outline-none focus:border-amber-500 font-sans border ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                  }`}
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 border ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                  }`}
                >
                  <option value="all">All Categories</option>
                  <option value="industrial_fiber">Industrial Fiber / Hempcrete</option>
                  <option value="phytoremediation">Phytoremediation Biomass</option>
                  <option value="grain_seed">Grain & Seed Oil</option>
                  <option value="cannabinoids">Full-Spectrum Cannabinoids</option>
                  <option value="biochar">Sequestered Biochar</option>
                </select>

                <select
                  value={selectedJurisdiction}
                  onChange={(e) => setSelectedJurisdiction(e.target.value)}
                  className={`px-3 py-2 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 border ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                  }`}
                >
                  <option value="all">All Sovereign Compacts</option>
                  <option value="jicarilla">Jicarilla Apache / NM</option>
                  <option value="tribal">Tribal Agricultural Compact</option>
                  <option value="ohio">State of Ohio / Midwest</option>
                </select>
              </div>
            </div>

            {/* COMMODITY CARDS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredListings.map((item) => (
                <div
                  key={item.id}
                  className={`border hover:border-amber-500/50 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4 group ${
                    isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className={`px-2.5 py-1 border text-[10px] font-mono font-bold uppercase rounded ${
                        isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                      }`}>
                        {item.category.replace('_', ' ')}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        isLight ? 'bg-stone-100 text-stone-600' : 'bg-neutral-800 text-neutral-400'
                      }`}>
                        {item.id}
                      </span>
                    </div>

                    <h3 className={`text-sm font-bold group-hover:text-amber-600 transition-colors leading-snug ${
                      isLight ? 'text-stone-900' : 'text-neutral-100'
                    }`}>
                      {item.name}
                    </h3>

                    <div className={`text-[11px] font-mono space-y-1 ${isLight ? 'text-stone-600' : 'text-neutral-400'}`}>
                      <div className="flex items-center gap-1">
                        <Building2 size={12} className={isLight ? 'text-stone-500' : 'text-neutral-400'} />
                        <span className="truncate">{item.sovereigntyJurisdiction}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={12} className={isLight ? 'text-stone-500' : 'text-neutral-400'} />
                        <span>{item.producerRegion}</span>
                      </div>
                    </div>

                    <div className={`grid grid-cols-2 gap-2 pt-2 border-t text-xs font-mono ${
                      isLight ? 'border-stone-200' : 'border-neutral-800'
                    }`}>
                      <div>
                        <span className={`text-[10px] block ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>Spot Price / lb</span>
                        <span className={`font-bold ${isLight ? 'text-stone-900' : 'text-neutral-100'}`}>${item.spotPricePerLb.toFixed(2)}</span>
                      </div>
                      <div>
                        <span className={`text-[10px] block ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>2026 Futures / lb</span>
                        <span className="font-bold text-amber-600 dark:text-amber-400">${item.futures2026Price.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className={`space-y-2 pt-2 border-t ${isLight ? 'border-stone-200' : 'border-neutral-800'}`}>
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className={isLight ? 'text-stone-600' : 'text-neutral-400'}>Available Volume:</span>
                      <span className={`font-bold ${isLight ? 'text-stone-900' : 'text-neutral-200'}`}>{item.availableVolumeTons.toLocaleString()} Tons</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
                      {item.leadRemediationCertified && (
                        <span className={`px-2 py-0.5 border rounded flex items-center gap-1 ${
                          isLight ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                        }`}>
                          <CheckCircle size={10} /> Lead Certified
                        </span>
                      )}
                      {item.pfasRemediationCertified && (
                        <span className={`px-2 py-0.5 border rounded flex items-center gap-1 ${
                          isLight ? 'bg-sky-100 text-sky-900 border-sky-300' : 'bg-sky-950 text-sky-300 border-sky-800'
                        }`}>
                          <ShieldCheck size={10} /> PFAS Free
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => {
                        setContractCommodity(item.id);
                        setActiveSubTab('contract_builder');
                      }}
                      className="w-full mt-2 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                    >
                      <Coins size={14} className="text-stone-950" />
                      <span>Lock Futures Contract</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* CO-FOUNDER FEATURE: AGUA DAS & HEMP-I-SCREAM - CAPTION IS PLACED DIRECTLY BELOW THE PHOTO */}
            <div className={`rounded-2xl overflow-hidden border shadow-md p-5 sm:p-6 space-y-4 ${
              isLight ? 'bg-white border-amber-300 text-stone-900' : 'bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950 text-white border-amber-500/30'
            }`}>
              <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b pb-3 ${
                isLight ? 'border-amber-200' : 'border-amber-500/20'
              }`}>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 border text-[10px] font-mono font-bold uppercase rounded ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                  }`}>
                    UCANX Co-Founders & Heritage
                  </span>
                  <span className={`text-[10px] font-mono ${isLight ? 'text-stone-500' : 'text-neutral-400'}`}>realNEO Co-op Era</span>
                </div>
                <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 font-semibold">Featured Photo: Case Alumnus Archive</span>
              </div>

              {/* PHOTO CONTAINER WITH ZERO OVERLAYS - CAPTION SITUATIONALLY BELOW */}
              <div className="rounded-xl overflow-hidden border border-amber-500/40 bg-black shadow-inner">
                <img
                  src={caseAlumnusHeaderImg}
                  alt="Co-Founder Agua Das at Hemp-I-Scream Exhibition Booth"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[380px] mx-auto block"
                />
                <div className="bg-neutral-950 border-t border-amber-500/30 p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
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
                    className="text-[10px] font-mono bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/40 px-2.5 py-1 rounded shrink-0 transition-colors flex items-center gap-1"
                  >
                    <span>View Original JPG</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className={`text-base sm:text-lg font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                  Honoring Co-Founder Agua Das & The Hemp Food Revolution
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-stone-700' : 'text-neutral-300'}`}>
                  Agua Das, co-founder of UCANX alongside Norm Roulet, is a legendary early hemp industry innovator and creator of <strong>Hemp-I-Scream!™</strong> — a groundbreaking organic, non-dairy, non-soy, high-EFA hemp ice cream. His pioneering work demonstrated the immense economic and nutritional potential of industrial hemp foods long before commercial legalization.
                </p>

                <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono pt-1">
                  <span className={`flex items-center gap-1 px-2.5 py-1 rounded border ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-200' : 'bg-neutral-800/80 text-amber-200 border-neutral-700'
                  }`}>
                    🍦 Hemp-I-Scream Pioneer
                  </span>
                  <span className={`flex items-center gap-1 px-2.5 py-1 rounded border ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-200' : 'bg-neutral-800/80 text-amber-200 border-neutral-700'
                  }`}>
                    🌿 High EFAs & Protein
                  </span>
                  <span className={`flex items-center gap-1 px-2.5 py-1 rounded border ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-200' : 'bg-neutral-800/80 text-amber-200 border-neutral-700'
                  }`}>
                    🏛️ 2010 Hemp Industries Association
                  </span>
                  <span className={`flex items-center gap-1 px-2.5 py-1 rounded border ${
                    isLight ? 'bg-amber-100 text-amber-950 border-amber-200' : 'bg-neutral-800/80 text-amber-200 border-neutral-700'
                  }`}>
                    📸 Case Alumnus Photo
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* SUBTAB 2: SOVEREIGNTY FRAMEWORK */}
        {activeSubTab === 'sovereignty_framework' && (
          <div className={`border rounded-2xl p-6 shadow-xs space-y-6 ${
            isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className={`border-b pb-4 ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
              <span className="text-[10px] font-mono font-bold uppercase text-amber-700 dark:text-amber-400">Inter-Sovereign Trade Protocols</span>
              <h2 className="text-xl font-bold font-serif mt-1">
                Tribal Compacts & Inter-State Trade Jurisdictions
              </h2>
              <p className={`text-xs mt-1 ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                How UCANX standardizes inter-jurisdictional commerce between sovereign Native Nations, state agricultural departments, and international buyers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-5 rounded-xl border space-y-3 ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
              }`}>
                <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                  <Scale size={18} />
                  <span>Article I, Section 8 Commerce Framework</span>
                </div>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                  Under federal law and inherent tribal sovereignty, recognized Native American tribes hold constitutionally protected rights to regulate commerce within their territorial boundaries and enter inter-sovereign agricultural compacts.
                </p>
              </div>

              <div className={`p-5 rounded-xl border space-y-3 ${
                isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'
              }`}>
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                  <ShieldCheck size={18} />
                  <span>Zero-Lead & Zero-PFAS Quality Standards</span>
                </div>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                  Every commodity lot traded on UCANX carries mandatory lab certification verifying total lead levels (&lt; 1.0 ppm) and non-detect PFAS contamination to protect food systems.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: PHYTOREMEDIATION STANDARDS */}
        {activeSubTab === 'phytoremediation' && (
          <div className={`border rounded-2xl p-6 shadow-xs space-y-6 ${
            isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className={`border-b pb-4 ${isLight ? 'border-stone-200' : 'border-stone-800'}`}>
              <span className="text-[10px] font-mono font-bold uppercase text-amber-700 dark:text-amber-400">Environmental Remediation</span>
              <h2 className="text-xl font-bold font-serif mt-1">
                Phytoremediation Biomass Processing & Safety Protocols
              </h2>
              <p className={`text-xs mt-1 ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                Standardizing industrial hemp crops grown specifically for bio-accumulating heavy metals (Lead) and forever chemicals (PFAS) from contaminated municipal soil.
              </p>
            </div>

            <div className={`p-4 rounded-xl border text-xs space-y-2 ${
              isLight ? 'bg-amber-50 border-amber-300 text-amber-950' : 'bg-amber-950/40 border-amber-500/30 text-amber-200'
            }`}>
              <div className="font-bold flex items-center gap-2">
                <AlertTriangle size={16} className="text-amber-600" />
                <span>Strict Separation Protocol for Remediation Crops</span>
              </div>
              <p className="leading-relaxed">
                Industrial hemp grown for phytoremediation (e.g. Cleveland Lead Belt extraction) is strictly isolated from human/animal food crops. Remediation biomass is routed exclusively into structural hempcrete, high-temperature gasification biochar, or thermal energy recovery systems where metals are safely vitrified.
              </p>
            </div>
          </div>
        )}

        {/* SUBTAB 4: CONTRACT BUILDER */}
        {activeSubTab === 'contract_builder' && (
          <div className={`border rounded-2xl p-6 shadow-xs space-y-6 ${
            isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className={`border-b pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
              isLight ? 'border-stone-200' : 'border-stone-800'
            }`}>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-amber-700 dark:text-amber-400">Smart Escrow Generator</span>
                <h2 className="text-xl font-bold font-serif mt-1">
                  UCANX Inter-Sovereign Futures Contract Builder
                </h2>
              </div>
              <span className={`px-3 py-1 font-mono text-xs font-bold rounded-lg border ${
                isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}>
                Escrow Engine v2.4
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-7 space-y-4">
                <div>
                  <label className={`text-xs font-mono font-bold block mb-1 ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>Select Commodity Lot</label>
                  <select
                    value={contractCommodity}
                    onChange={(e) => setContractCommodity(e.target.value)}
                    className={`w-full p-2.5 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 border ${
                      isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                    }`}
                  >
                    {SAMPLE_LISTINGS.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name} (${item.spotPricePerLb.toFixed(2)}/lb spot)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`text-xs font-mono font-bold block mb-1 ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>Contract Volume (Tons)</label>
                    <input
                      type="number"
                      value={contractVolumeTons}
                      onChange={(e) => setContractVolumeTons(Math.max(1, Number(e.target.value)))}
                      className={`w-full p-2.5 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 border ${
                        isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`text-xs font-mono font-bold block mb-1 ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>Sovereignty Compact</label>
                    <select
                      value={contractJurisdiction}
                      onChange={(e) => setContractJurisdiction(e.target.value)}
                      className={`w-full p-2.5 rounded-xl text-xs font-mono focus:outline-none focus:border-amber-500 border ${
                        isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                      }`}
                    >
                      <option value="jicarilla">Jicarilla Apache Sovereign Compact</option>
                      <option value="ohio">State of Ohio / Midwest Compact</option>
                      <option value="international">ICEarth Global Sovereign Trade Protocol</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`text-xs font-mono font-bold block mb-1 ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>Escrow Settlement Mechanism</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'sovereign_escrow', label: 'Sovereign Bank Escrow' },
                      { id: 'ice_token', label: 'ICEarth Token' },
                      { id: 'usdc', label: 'USDC Stablecoin' }
                    ].map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setEscrowType(type.id as any)}
                        className={`p-2.5 rounded-xl border text-xs font-mono text-center transition-all cursor-pointer ${
                          escrowType === type.id
                            ? 'bg-amber-500 text-neutral-950 font-bold border-amber-600 shadow-xs'
                            : isLight ? 'bg-stone-50 text-stone-700 border-stone-300 hover:bg-stone-100' : 'bg-stone-950 text-stone-300 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border space-y-4 flex flex-col justify-between ${
                isLight ? 'bg-stone-900 text-stone-100 border-stone-800' : 'bg-stone-950 text-stone-100 border-stone-800'
              }`}>
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-stone-800 pb-2">
                    <span className="text-[10px] font-mono text-amber-400 uppercase">Contract Summary</span>
                    <span className="text-[10px] font-mono text-stone-400">UCANX Smart Escrow</span>
                  </div>

                  <div className="space-y-1 text-xs font-mono text-stone-300">
                    <div className="text-white font-bold">{activeCommodityObj.name}</div>
                    <div className="text-stone-400">Volume: {contractVolumeTons} Tons ({contractVolumeTons * 2000} Lbs)</div>
                    <div className="text-stone-400">Rate: ${activeCommodityObj.spotPricePerLb.toFixed(2)} / lb</div>
                    <div className="text-stone-400">Jurisdiction: {contractJurisdiction.toUpperCase()}</div>
                  </div>

                  <div className="pt-3 border-t border-stone-800">
                    <span className="text-[10px] font-mono text-stone-400 uppercase block">Total Contract Value</span>
                    <div className="text-xl font-bold font-mono text-amber-400">{calculatedTotal}</div>
                  </div>
                </div>

                <button
                  onClick={() => setContractCreated(true)}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Coins size={16} />
                  <span>Deploy Smart Contract Escrow</span>
                </button>
              </div>
            </div>

            {contractCreated && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 space-y-2 animate-fade-in">
                <div className="font-bold flex items-center gap-2 text-emerald-800">
                  <CheckCircle size={16} />
                  <span>UCANX Futures Smart Contract Successfully Issued & Registered</span>
                </div>
                <div className="font-mono text-[11px] text-emerald-700">
                  Contract Hash: 0xUCANX_FUTURES_2026_{Math.floor(10000000 + Math.random() * 90000000)} • Locked in ICEarth Sovereign Vault.
                </div>
              </div>
            )}
          </div>
        )}

      </main>

    </div>
  );
};
