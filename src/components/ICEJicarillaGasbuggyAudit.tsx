import React, { useState, useMemo } from 'react';
import gasbuggyImg from '../assets/images/gasbuggy_jicarilla_audit_1788431807620.jpg';
import {
  Radiation,
  AlertTriangle,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Flame,
  Layers,
  MapPin,
  ExternalLink,
  Info,
  Maximize2,
  Copy,
  Check,
  Download,
  Share2,
  Calendar,
  Activity,
  Compass,
  ArrowRight,
  TrendingDown,
  TrendingUp,
  FileText,
  Search,
  BookOpen,
  Feather,
  Server,
  Lock,
  Cpu,
  Database,
  Radio,
  Wifi,
  Scale,
  Eye
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  BarChart,
  Bar,
  Cell
} from 'recharts';

interface ICEJicarillaGasbuggyAuditProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ICEJicarillaGasbuggyAudit: React.FC<ICEJicarillaGasbuggyAuditProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  const isLight = siteTheme === 'light';

  // Navigation Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState<'forensic_audit' | 'geological_cross_section' | 'environmental_injustice' | 'ice_jicarilla_mesh' | 'jicarilla_newsfeed'>('forensic_audit');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  // Radionuclide Decay Interactive Simulator
  const [selectedDecayYear, setSelectedDecayYear] = useState<number>(2026);
  const [activeRadionuclide, setActiveRadionuclide] = useState<'tritium' | 'krypton' | 'cesium' | 'strontium' | 'carbon14'>('tritium');

  // Search in Newsfeed
  const [newsSearchQuery, setNewsSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const copyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Radionuclide Half-life Data
  const radionuclides = {
    tritium: { name: 'Tritium (³H)', halfLife: 12.32, initialActivity: 100, unit: '% initial Ci', decayProduct: 'Helium-3 (³He)', hazard: 'Beta emitter; enters hydrological water cycle as tritiated water (HTO)' },
    krypton: { name: 'Krypton-85 (⁸⁵Kr)', halfLife: 10.76, initialActivity: 100, unit: '% initial Ci', decayProduct: 'Rubidium-85 (⁸⁵Rb)', hazard: 'Noble gas; flared into regional atmospheric plume over Carson National Forest' },
    cesium: { name: 'Cesium-137 (¹³⁷Cs)', halfLife: 30.17, initialActivity: 100, unit: '% initial Ci', decayProduct: 'Barium-137m (¹³⁷ᵐBa)', hazard: 'Potent gamma/beta emitter; bioaccumulates in soil, plants, and game' },
    strontium: { name: 'Strontium-90 (⁹⁰Sr)', halfLife: 28.9, initialActivity: 100, unit: '% initial Ci', decayProduct: 'Yttrium-90 (⁹⁰Y)', hazard: 'Bone-seeker; mimics calcium in pediatric bone marrow and dentition' },
    carbon14: { name: 'Carbon-14 (¹⁴C)', halfLife: 5730, initialActivity: 100, unit: '% initial Ci', decayProduct: 'Nitrogen-14 (¹⁴N)', hazard: 'Incorporates directly into hydrocarbon gas, plant carbohydrates, and living tissue' }
  };

  // Decay Curve Timeline (1967 to 2070)
  const decayData = useMemo(() => {
    const years = [1967, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2026, 2030, 2040, 2050, 2060, 2070];
    return years.map(yr => {
      const elapsed = yr - 1967;
      const t_tritium = Math.pow(0.5, elapsed / 12.32) * 100;
      const t_krypton = Math.pow(0.5, elapsed / 10.76) * 100;
      const t_cesium = Math.pow(0.5, elapsed / 30.17) * 100;
      const t_strontium = Math.pow(0.5, elapsed / 28.9) * 100;
      const t_carbon14 = Math.pow(0.5, elapsed / 5730) * 100;
      return {
        year: yr,
        tritium: parseFloat(t_tritium.toFixed(2)),
        krypton: parseFloat(t_krypton.toFixed(2)),
        cesium: parseFloat(t_cesium.toFixed(2)),
        strontium: parseFloat(t_strontium.toFixed(2)),
        carbon14: parseFloat(t_carbon14.toFixed(2))
      };
    });
  }, []);

  // Current year remaining activity calculation
  const currentElapsed = selectedDecayYear - 1967;
  const currentTritiumRemaining = (Math.pow(0.5, currentElapsed / 12.32) * 100).toFixed(2);
  const currentCesiumRemaining = (Math.pow(0.5, currentElapsed / 30.17) * 100).toFixed(2);
  const currentKryptonRemaining = (Math.pow(0.5, currentElapsed / 10.76) * 100).toFixed(2);
  const currentStrontiumRemaining = (Math.pow(0.5, currentElapsed / 28.9) * 100).toFixed(2);

  // Subsurface Geological Stratigraphy
  const geologicalLayers = [
    { depth: '0 - 1,500 ft', formation: 'San Jose Formation', lithology: 'Tertiary Sandstone & Siltstone', hydrogeology: 'Shallow domestic aquifers used by rural ranching and wildlife', hazardLevel: 'Surface runoff & shallow infiltration' },
    { depth: '1,500 - 2,100 ft', formation: 'Nacimiento Formation', lithology: 'Shale & interbedded fluvial sandstone', hydrogeology: 'Semi-confined regional groundwater aquifer', hazardLevel: 'Low baseline, monitored for fault fracture leakage' },
    { depth: '2,100 - 2,350 ft', formation: 'Ojo Alamo Sandstone', lithology: 'Massive, coarse-grained conglomeratic sandstone', hydrogeology: 'PRIMARY REGIONAL DRINKING & IRRIGATION AQUIFER (San Juan Basin)', hazardLevel: 'CRITICAL VULNERABILITY: Hydrologic connection via historic boreholes' },
    { depth: '2,350 - 3,600 ft', formation: 'Kirtland Shale & Fruitland Formation', lithology: 'Impermeable shales, coals, and sandstone stringers', hydrogeology: 'Methane reservoir, natural aquitard barrier', hazardLevel: 'Faulted zone; fractured by regional hydrocarbon extraction' },
    { depth: '3,600 - 3,900 ft', formation: 'Pictured Cliffs Sandstone', lithology: 'Low-permeability tight-gas sandstone', hydrogeology: 'Target natural gas reservoir for 1967 stimulation', hazardLevel: 'Directly breached by detonation chimney fractures' },
    { depth: '3,900 - 4,300 ft', formation: 'Lewis Shale (Detonation Horizon at 4,227 ft)', lithology: 'Dense marine shale with high fracture resistance', hydrogeology: 'Cavity containment zone; 335 ft high collapse rubble chimney', hazardLevel: 'GROUND ZERO: 29-kt nuclear cavity, molten radioactive glass puddle' }
  ];

  // Indigenous Injustice Case Studies
  const environmentalInjusticeCases = [
    {
      territory: 'Jicarilla Apache Nation & Carson National Forest, NM',
      event: 'Project Gasbuggy (1967)',
      type: '29-kt Subterranean Nuclear Detonation & Gas Flaring',
      distance: '12 miles SW of Dulce, NM',
      impact: 'Flared 213M ft³ of radioactive natural gas into atmosphere. Created permanent subsurface radioactive cavity directly upstream of Jicarilla aquifers. Zero tribal consent or sovereign consultation under Operation Plowshare.',
      status: 'Active long-term surveillance; legacy radiation hazard.'
    },
    {
      territory: 'Navajo Nation (Diné Tah), AZ/NM/UT',
      event: 'Church Rock Uranium Tailings Disaster (1979) & 500+ Abandoned Mines',
      type: 'Uranium Mill Tailings Dam Collapse & Airborne Dust',
      distance: 'Crosses entire reservation; Rio Puerco watershed',
      impact: '94M gallons of radioactive acidic effluent dumped into the Puerco River; largest radioactive spill in US history. 523 un-remediated abandoned uranium mines contaminating drinking water and causing generational kidney disease and cancer.',
      status: 'Ongoing public health emergency; chronic federal neglect.'
    },
    {
      territory: 'Western Shoshone Nation (Newe Sogobia), NV',
      event: 'Nevada National Security Site (Nevada Test Site)',
      type: '928 Atmospheric & Underground Nuclear Explosions',
      distance: 'Directly on 1863 Treaty of Ruby Valley sovereign land',
      impact: 'Most heavily bombed nation on Earth. Over 100 atmospheric and 828 underground detonations created vast contaminated groundwater zones and downwind cancer clusters.',
      status: 'Unceded treaty territory occupied for weapons testing.'
    },
    {
      territory: 'Confederated Tribes of Yakama & Nez Perce, WA',
      event: 'Hanford Nuclear Reservation (Manhattan Project)',
      type: 'Plutonium Production & 56 Million Gallons High-Level Waste',
      distance: 'Sacred Columbia River fishing sanctuaries',
      impact: 'Massive underground tank leaks leaking radioactive strontium, cesium, and technetium toward the Columbia River, bioaccumulating in anadromous salmon runs.',
      status: 'Most expensive and complex radioactive Superfund site on Earth.'
    }
  ];

  // ICE-Jicarilla Newsfeed Articles
  const jicarillaNewsArticles = [
    {
      id: 'JIC-NEWS-001',
      title: 'In 1967, the US Detonated a 29-Kiloton Nuclear Device 4,227 Feet Below New Mexico to Unlock Natural Gas: The Sovereign Imperative for ICE-Jicarilla',
      source: 'Times of India Science Desk / TOI',
      date: 'September 2, 2026',
      url: 'https://timesofindia.indiatimes.com/science/in-1967-the-us-detonated-a-29-kiloton-nuclear-device-4227-feet-below-new-mexico-to-unlock-natural-gas-5-tests-produced-213-million-cubic-feet-but-the-gas-had-measurable-radioactivity/articleshow/133705011.cms',
      category: 'Nuclear Forensic Audit',
      badge: 'Breakthrough',
      summary: 'Project Gasbuggy was detonated just 12 miles southwest of Dulce in the Carson National Forest. Five production tests released 213 million cubic feet of natural gas tainted with radioactive tritium and krypton-85. This historic Cold War experiment proves why sovereign indigenous nations cannot rely on federal self-policing and must deploy air-gapped independent telemetry.',
      hash: '0xJICARILLA_GASBUGGY_1967_NUCLEAR_AUDIT_SOVEREIGN_VAULT'
    },
    {
      id: 'JIC-NEWS-002',
      title: 'ICE-Jicarilla Sovereign Air-Gapped IoT Sensor Mesh: Deploying Real-Time Gamma & Tritium Spectrometry at Reservation Boundaries',
      source: 'ICEarth Intelligence & Jicarilla Apache Sovereign IT Council',
      date: 'September 3, 2026',
      url: 'https://icearth.org/?tab=jicarilla_sovereign_it',
      category: 'Sovereign IT Architecture',
      badge: 'Deployment',
      summary: 'Integrating with the Jicarilla Apache Sovereign Hybrid IT Architecture (Plate #24), ICE-Jicarilla establishes localized sensor nodes along the Navajo River and Carson National Forest perimeter. Telemetry is routed through post-quantum encrypted WireGuard tunnels directly to Dulce air-gapped servers with zero cloud egress.',
      hash: '0xJICARILLA_SOVEREIGN_HYBRID_IT_AIRGAP_AI_2026'
    },
    {
      id: 'JIC-NEWS-003',
      title: 'San Juan Basin Methane Plume & VOC Exposure Audit: Mapping Fence-Line Emissions Along Highway 64',
      source: 'San Juan Basin Environmental Observatory / ICEarth',
      date: 'August 28, 2026',
      url: 'https://icearth.org/?tab=realtime_pollution_tracking',
      category: 'Air Quality & VOCs',
      badge: 'Exposenomics',
      summary: 'Orbital satellite spectrometry (TROPOMI & Sentinel-5P) combined with ground-level optical gas imaging identifies recurring methane and benzene plumes from over 40,000 active oil and gas wells surrounding the Jicarilla Apache reservation.',
      hash: '0xSAN_JUAN_BASIN_METHANE_SOVEREIGN_AUDIT_2026'
    },
    {
      id: 'JIC-NEWS-004',
      title: 'Water Sanctuary Defense: Deep Aquifer Sampling of the Ojo Alamo Sandstone and Navajo River Tributaries',
      source: 'Jicarilla Natural Resources Department & Taos Farm Co-op',
      date: 'August 20, 2026',
      url: 'https://icearth.org/?tab=indigenous',
      category: 'Water Sovereignty',
      badge: 'Aquifer Audit',
      summary: 'Comprehensive isotopic baseline testing of municipal drinking wells serving Dulce, NM confirms current safety while establishing continuous real-time tritium scintillation monitoring to detect any potential hydraulic fracture migration.',
      hash: '0xJICARILLA_WATER_SANCTUARY_ISOTOPE_BASELINE_2026'
    }
  ];

  const filteredArticles = jicarillaNewsArticles.filter(art => {
    const matchesCategory = selectedCategory === 'all' || art.category.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = newsSearchQuery === '' || 
      art.title.toLowerCase().includes(newsSearchQuery.toLowerCase()) || 
      art.summary.toLowerCase().includes(newsSearchQuery.toLowerCase()) ||
      art.source.toLowerCase().includes(newsSearchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} font-sans`}>
      {/* Top Breadcrumb & Sovereign Header */}
      <header className="border-b border-stone-800 bg-stone-900/90 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-400">
              <Radiation className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-amber-950 border border-amber-500 text-amber-300 text-[10px] font-mono uppercase tracking-wider rounded font-bold">
                  Sovereign Environmental Audit
                </span>
                <span className="px-2 py-0.5 bg-cyan-950 border border-cyan-500 text-cyan-300 text-[10px] font-mono uppercase tracking-wider rounded">
                  ICE-Jicarilla Node
                </span>
                <span className="text-xs text-stone-400 font-mono hidden sm:inline">
                  San Juan Basin • Carson National Forest • Dulce, NM
                </span>
              </div>
              <h1 className="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-2 mt-0.5">
                Project Gasbuggy (1967) Subterranean Nuclear Audit & Environmental Injustice Defense
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Inspect Plate</span>
            </button>
            {onNavigateTab && (
              <button
                onClick={() => onNavigateTab('jicarilla_sovereign_it')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer"
              >
                <Feather className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Jicarilla Sovereign IT</span>
                <span className="sm:hidden">IT Blueprint</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Hero Banner with Times of India Source & Core Excerpt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-4">
        <div className="bg-stone-900 border border-amber-900/60 rounded-xl p-5 sm:p-6 relative overflow-hidden shadow-2xl">
          <div className="absolute -right-16 -bottom-16 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -top-16 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row gap-6 items-start justify-between">
            <div className="space-y-3 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-400">
                <span className="text-amber-400 font-bold flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> September 02, 2026
                </span>
                <span>•</span>
                <span className="text-white">TOI Science Desk / TIMESOFINDIA.COM</span>
                <span>•</span>
                <span className="text-stone-400">Operation Plowshare • Subsurface Detonation</span>
              </div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug">
                In 1967, the US Detonated a 29-Kiloton Nuclear Device 4,227 Feet Below New Mexico to Unlock Natural Gas: 
                <span className="text-amber-400 block sm:inline sm:ml-2">5 Tests Produced 213M ft³ of Gas, but with Measurable Radioactivity</span>
              </h2>

              <p className="text-sm text-stone-300 leading-relaxed">
                On December 10, 1967, the US Atomic Energy Commission and El Paso Natural Gas detonated a 29-kiloton nuclear device 
                in the Carson National Forest, directly adjacent to the <strong className="text-amber-300">Jicarilla Apache Nation</strong>, 
                just <strong className="text-cyan-300">12 miles southwest of Dulce, New Mexico</strong>. The blast pulverized the Lewis Shale 
                and created a 335-foot radioactive chimney. While millions of cubic feet of gas flowed, the fuel was heavily contaminated with 
                tritium (<span className="text-emerald-400 font-mono">³H</span>) and krypton-85 (<span className="text-emerald-400 font-mono">⁸⁵Kr</span>), 
                rendering it completely unusable and forcing dangerous flaring into the atmosphere over northern New Mexico.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href="https://timesofindia.indiatimes.com/science/in-1967-the-us-detonated-a-29-kiloton-nuclear-device-4227-feet-below-new-mexico-to-unlock-natural-gas-5-tests-produced-213-million-cubic-feet-but-the-gas-had-measurable-radioactivity/articleshow/133705011.cms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 text-stone-950 font-bold rounded hover:bg-amber-400 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Times of India Original Dispatch</span>
                </a>
                <span className="text-stone-400">
                  Site: Carson National Forest (G-1 Wellhead) • Coordinates: 36°40′40″N 107°12′30″W
                </span>
              </div>
            </div>

            {/* Micro Graphic Preview Card */}
            <div 
              onClick={() => setIsModalOpen(true)}
              className="lg:w-80 w-full shrink-0 border border-stone-800 rounded-lg overflow-hidden group cursor-pointer hover:border-amber-500/50 transition-all bg-stone-950/80"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={gasbuggyImg} 
                  alt="Project Gasbuggy Subterranean Nuclear Audit Plate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px] font-mono text-white">
                  <span className="bg-amber-950/80 px-1.5 py-0.5 rounded border border-amber-500/40 text-amber-300">
                    Plate #35
                  </span>
                  <span className="flex items-center gap-1 text-cyan-300">
                    <Maximize2 className="w-3 h-3" /> Expand
                  </span>
                </div>
              </div>
              <div className="p-3 text-xs font-mono space-y-1">
                <div className="flex justify-between text-stone-400">
                  <span>Detonation Yield:</span>
                  <span className="text-amber-400 font-bold">29 Kilotons</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Subsurface Depth:</span>
                  <span className="text-cyan-400 font-bold">4,227 Feet</span>
                </div>
                <div className="flex justify-between text-stone-400">
                  <span>Proximity to Dulce:</span>
                  <span className="text-emerald-400 font-bold">12.0 Miles SW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Metric Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-6 mt-6 border-t border-stone-800">
            <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-lg">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Nuclear Yield</span>
              <span className="text-xl font-black text-amber-400 font-mono">29 KT</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">~1.9× Hiroshima Bomb</span>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-lg">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Detonation Depth</span>
              <span className="text-xl font-black text-cyan-400 font-mono">4,227 FT</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Lewis Shale Formation</span>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-lg">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Distance to Dulce</span>
              <span className="text-xl font-black text-emerald-400 font-mono">12.0 MI</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Jicarilla Tribal Center</span>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-lg">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Gas Released</span>
              <span className="text-xl font-black text-purple-400 font-mono">213M FT³</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">5 Flared Production Tests</span>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-lg">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Primary Radionuclides</span>
              <span className="text-xl font-black text-rose-400 font-mono">³H & ⁸⁵Kr</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">+ ¹³⁷Cs, ⁹⁰Sr, ¹⁴C</span>
            </div>
            <div className="bg-stone-950/70 border border-stone-800 p-3 rounded-lg">
              <span className="text-[10px] font-mono text-stone-400 uppercase tracking-wider block">Tribal Consent</span>
              <span className="text-xl font-black text-red-500 font-mono">0.0%</span>
              <span className="text-[11px] text-stone-400 block mt-0.5">Operation Plowshare</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sub-navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex border-b border-stone-800 space-x-1 sm:space-x-2 overflow-x-auto no-scrollbar py-2">
          {[
            { id: 'forensic_audit', label: '☢️ Gasbuggy Forensic Audit', icon: Radiation },
            { id: 'geological_cross_section', label: '🗺️ Subsurface Stratigraphy & Aquifers', icon: Layers },
            { id: 'environmental_injustice', label: '⚖️ Indigenous Injustice & Sacrifice Zones', icon: Scale },
            { id: 'ice_jicarilla_mesh', label: '🛡️ ICE-Jicarilla Air-Gapped Rad Mesh', icon: ShieldCheck },
            { id: 'jicarilla_newsfeed', label: '📰 ICE-Jicarilla Newsfeed & Hub', icon: BookOpen }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer border-b-2 ${
                  isActive
                    ? 'border-amber-500 text-amber-400 bg-amber-500/10'
                    : 'border-transparent text-stone-400 hover:text-stone-200 hover:bg-stone-900/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content Rendering */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        {/* TAB 1: FORENSIC AUDIT & RADIONUCLIDE SIMULATOR */}
        {activeSubTab === 'forensic_audit' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Historical Narrative & Operation Plowshare */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Cold War Subterranean Fracking Experiment</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    The 1967 Detonation: Operation Plowshare & The Jicarilla Proximity
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    Under the Cold War program <em>Operation Plowshare</em>, the United States Atomic Energy Commission (AEC), 
                    in joint venture with the El Paso Natural Gas Company, sought to demonstrate the "peaceful uses of nuclear explosions" 
                    by detonating nuclear weapons to fracture tight natural gas formations. On December 10, 1967, at 12:30 PM MST, 
                    a 29-kiloton thermonuclear device was lowered 4,227 feet into hole GB-ER, located in the Carson National Forest, 
                    exactly 12 miles southwest of the tribal capital of Dulce, NM.
                  </p>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    The blast instantly vaporized thousands of tons of rock, creating a spherical cavity that collapsed within seconds 
                    into a cylindrical rubble chimney measuring 335 feet high and 160 feet wide. Extensively fractured sandstone 
                    and shale radiated over 400 feet into the surrounding formation. Over the next 36 months, five production test runs 
                    extracted 213 million cubic feet of gas. However, every cubic foot was laced with dangerous levels of tritium (³H), 
                    krypton-85 (⁸⁵Kr), and carbon-14 (¹⁴C). The experiment was deemed a catastrophic commercial failure, and the contaminated 
                    gas was simply flared into the regional skies over Rio Arriba County.
                  </p>

                  <div className="bg-amber-950/40 border border-amber-500/30 rounded-lg p-4 text-xs font-mono space-y-2">
                    <span className="text-amber-300 font-bold block">
                      ROULET'S LAW OF EXPOSENOMICS APPLIED TO PROJECT GASBUGGY:
                    </span>
                    <p className="text-stone-300">
                      Perturbation (H') × Biological Exposure (t) = Biological Chaos (C). 
                      Detonating 29 kilotons of nuclear fission products 12 miles from a sovereign tribal population without baseline 
                      biological monitoring created decades of un-modeled chronic exposure latency. The Jicarilla Apache Nation has lived 
                      downwind and downstream of this subterranean nuclear footprint for over 59 years.
                    </p>
                  </div>
                </div>

                {/* Subsurface Cavity Dynamics Card */}
                <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-3">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Cavity Anatomy & Radiation Trap
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                    <div className="p-3 bg-stone-950 border border-stone-800 rounded">
                      <span className="text-stone-400 block">Detonation Cavity:</span>
                      <span className="text-white font-bold text-sm">80 ft radius</span>
                      <span className="text-stone-400 block text-[11px] mt-0.5">Molten radioactive silicate melt puddle</span>
                    </div>
                    <div className="p-3 bg-stone-950 border border-stone-800 rounded">
                      <span className="text-stone-400 block">Collapse Chimney:</span>
                      <span className="text-white font-bold text-sm">335 ft H × 160 ft W</span>
                      <span className="text-stone-400 block text-[11px] mt-0.5">Porous fractured shale rubble column</span>
                    </div>
                    <div className="p-3 bg-stone-950 border border-stone-800 rounded">
                      <span className="text-stone-400 block">Radial Fracture Zone:</span>
                      <span className="text-white font-bold text-sm">400+ ft outward</span>
                      <span className="text-stone-400 block text-[11px] mt-0.5">Hydraulic connectivity to regional faults</span>
                    </div>
                    <div className="p-3 bg-stone-950 border border-stone-800 rounded">
                      <span className="text-stone-400 block">Total Flared Volume:</span>
                      <span className="text-white font-bold text-sm">213M cu ft gas</span>
                      <span className="text-stone-400 block text-[11px] mt-0.5">Volatilized tritium & krypton atmospheric plume</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Radionuclide Decay Curves & Interactive Timeline */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-4">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                      <Activity className="w-4 h-4 text-emerald-400" />
                      Radionuclide Decay Model (1967–2070)
                    </h4>
                    <span className="text-xs font-mono text-amber-400">Half-Life Dynamics</span>
                  </div>

                  {/* Chart */}
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={decayData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                        <XAxis dataKey="year" stroke="#78716c" fontSize={10} fontStyle="mono" />
                        <YAxis stroke="#78716c" fontSize={10} fontStyle="mono" unit="%" />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}
                        />
                        <Line type="monotone" dataKey="tritium" name="Tritium (³H, 12.3y)" stroke="#38bdf8" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="krypton" name="Krypton-85 (10.8y)" stroke="#a855f7" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="cesium" name="Cesium-137 (30.2y)" stroke="#f59e0b" strokeWidth={2} dot={false} />
                        <Line type="monotone" dataKey="strontium" name="Strontium-90 (28.9y)" stroke="#ef4444" strokeWidth={2} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Interactive Timeline Slider */}
                  <div className="p-4 bg-stone-950 border border-stone-800 rounded-lg space-y-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-stone-400">Simulation Year:</span>
                      <span className="text-amber-400 font-bold text-sm">{selectedDecayYear}</span>
                      <span className="text-stone-400">({selectedDecayYear - 1967} years post-shot)</span>
                    </div>
                    <input
                      type="range"
                      min="1967"
                      max="2070"
                      value={selectedDecayYear}
                      onChange={(e) => setSelectedDecayYear(parseInt(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />

                    {/* Calculated Residual Activity */}
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2">
                      <div className="p-2 bg-stone-900 border border-stone-800 rounded">
                        <span className="text-sky-400 block">³H Tritium Remaining:</span>
                        <span className="text-white font-bold text-sm">{currentTritiumRemaining}%</span>
                        <span className="text-stone-500 text-[10px] block">Half-life: 12.3 yrs</span>
                      </div>
                      <div className="p-2 bg-stone-900 border border-stone-800 rounded">
                        <span className="text-purple-400 block">⁸⁵Kr Krypton Remaining:</span>
                        <span className="text-white font-bold text-sm">{currentKryptonRemaining}%</span>
                        <span className="text-stone-500 text-[10px] block">Half-life: 10.8 yrs</span>
                      </div>
                      <div className="p-2 bg-stone-900 border border-stone-800 rounded">
                        <span className="text-amber-400 block">¹³⁷Cs Cesium Remaining:</span>
                        <span className="text-white font-bold text-sm">{currentCesiumRemaining}%</span>
                        <span className="text-stone-500 text-[10px] block">Half-life: 30.2 yrs</span>
                      </div>
                      <div className="p-2 bg-stone-900 border border-stone-800 rounded">
                        <span className="text-rose-400 block">⁹⁰Sr Strontium Remaining:</span>
                        <span className="text-white font-bold text-sm">{currentStrontiumRemaining}%</span>
                        <span className="text-stone-500 text-[10px] block">Half-life: 28.9 yrs</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-stone-400 leading-tight">
                      *Note: While gaseous krypton and tritium have decayed substantially, Cesium-137 and Strontium-90 
                      retain over 25% of their peak activity in 2026, trapped in subterranean melt glass and deep brine aquifers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GEOLOGICAL CROSS-SECTION & AQUIFERS */}
        {activeSubTab === 'geological_cross_section' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <Layers className="w-5 h-5 text-cyan-400" />
                    Subsurface Stratigraphy: San Juan Basin & Aquifer Vulnerability
                  </h3>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Well GB-ER / G-1 Borehole Log: Ground elevation 7,200 ft MSL • Detonation Horizon 2,973 ft MSL
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-1.5 bg-cyan-950 border border-cyan-500 text-cyan-300 rounded text-xs font-mono flex items-center gap-1.5 hover:bg-cyan-900 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Plate Visual Schematic</span>
                </button>
              </div>

              <p className="text-sm text-stone-300 leading-relaxed">
                The geological architecture of northern New Mexico is defined by thick sedimentary sequences of the San Juan Basin. 
                Above the Lewis Shale target formation sits the <strong className="text-cyan-300">Ojo Alamo Sandstone</strong> (2,100–2,350 ft), 
                one of the primary regional drinking and agricultural aquifers supporting northern New Mexico, the Jicarilla Apache Nation, 
                and surrounding communities. If deep subterranean fractures or deteriorated wellbores allow pressurized migration of 
                radionuclides into the Ojo Alamo or Nacimiento formations, the regional water security is irreversibly compromised.
              </p>

              {/* Stratigraphic Layer Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400 bg-stone-950/80">
                      <th className="p-3">Depth</th>
                      <th className="p-3">Geological Formation</th>
                      <th className="p-3">Lithology</th>
                      <th className="p-3">Hydrogeological Role</th>
                      <th className="p-3">Sovereign Hazard Assessment</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800/60">
                    {geologicalLayers.map((layer, idx) => (
                      <tr 
                        key={idx} 
                        className={`hover:bg-stone-800/30 transition-colors ${
                          layer.formation.includes('Lewis Shale') 
                            ? 'bg-amber-950/20 text-amber-200' 
                            : layer.formation.includes('Ojo Alamo')
                            ? 'bg-cyan-950/20 text-cyan-200'
                            : 'text-stone-300'
                        }`}
                      >
                        <td className="p-3 font-bold whitespace-nowrap">{layer.depth}</td>
                        <td className="p-3 font-semibold">{layer.formation}</td>
                        <td className="p-3 text-stone-400">{layer.lithology}</td>
                        <td className="p-3">{layer.hydrogeology}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            layer.hazardLevel.includes('GROUND ZERO')
                              ? 'bg-red-950 text-red-300 border border-red-700'
                              : layer.hazardLevel.includes('CRITICAL')
                              ? 'bg-amber-950 text-amber-300 border border-amber-700'
                              : 'bg-stone-800 text-stone-300'
                          }`}>
                            {layer.hazardLevel}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Modern Hydraulic Fracturing Interaction Risk */}
              <div className="p-4 bg-stone-950 border border-amber-500/30 rounded-lg space-y-2 text-xs">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-mono">
                  <AlertTriangle className="w-4 h-4" />
                  <span>THE COMPOUND THREAT: MODERN FRACKING SURROUNDING THE NUCLEAR CHIMNEY</span>
                </div>
                <p className="text-stone-300 leading-relaxed">
                  In recent decades, commercial horizontal drilling and multi-stage high-pressure hydraulic fracturing have surged 
                  throughout the San Juan Basin. The Department of Energy enforces a subsurface exclusion boundary around the Gasbuggy site; 
                  however, micro-seismic monitoring demonstrates that modern high-volume injection wells and fracking operations within 
                  a 5-to-15 mile radius generate stress-field alterations. These pressure perturbations risk reopening sealed fracture 
                  networks in the Lewis Shale, potentially facilitating upward migration of residual radionuclides into active water tables.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: ENVIRONMENTAL INJUSTICE ON INDIGENOUS LANDS */}
        {activeSubTab === 'environmental_injustice' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Structural Environmental Racism & Sacrifice Zones</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Indigenous Lands as Atomic & Industrial Sacrifice Zones
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                Project Gasbuggy was not an isolated anomaly. It is part of a systemic, century-long pattern across the American West 
                and globally where nuclear detonations, uranium tailings, toxic chemical dumping, and extraction externalities were 
                deliberately sited in or adjacent to indigenous sovereign lands. Because tribal nations lacked representation in federal 
                decision-making bodies like the Atomic Energy Commission, their homelands, sacred mountains, and watersheds were treated 
                as expendable "national sacrifice zones."
              </p>

              {/* Comparison Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {environmentalInjusticeCases.map((cs, idx) => (
                  <div key={idx} className="bg-stone-950 border border-stone-800 p-4 rounded-lg space-y-2">
                    <div className="flex justify-between items-start">
                      <span className="text-amber-400 font-bold text-xs font-mono">{cs.territory}</span>
                      <span className="px-1.5 py-0.5 bg-stone-800 text-stone-300 text-[10px] font-mono rounded">
                        {cs.distance}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white">{cs.event}</h4>
                    <p className="text-xs text-stone-400 leading-relaxed">{cs.impact}</p>
                    <div className="pt-2 border-t border-stone-800/80 flex justify-between text-[11px] font-mono">
                      <span className="text-stone-500">Status:</span>
                      <span className="text-rose-400 font-semibold">{cs.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sovereign Philosophy */}
              <div className="bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-4 text-xs font-mono space-y-2">
                <span className="text-cyan-300 font-bold block">
                  WHY INDIGENOUS TRIBAL NATIONS ACTUALLY NEED ICEARTH:
                </span>
                <p className="text-stone-300 leading-relaxed">
                  When a tribe relies entirely on federal (EPA, DOE, BLM) or state portals, environmental data is filtered through 
                  bureaucratic lenses that prioritize corporate indemnity and political containment over human biological survival. 
                  ICEarth equips sovereign nations with an independent, air-gapped technological stack: sovereign IoT sensors, 
                  local cryptographic ledgers, and edge AI inference running on tribal soil. Sovereignty is meaningless without 
                  environmental and computational autonomy.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: ICE-JICARILLA AIR-GAPPED RAD MESH */}
        {activeSubTab === 'ice_jicarilla_mesh' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 sm:p-6 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-800 pb-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                    ICE-Jicarilla Sovereign Sensor Mesh & Radiation Early-Warning Stack
                  </h3>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Integrated with Jicarilla Apache Sovereign Hybrid IT (Plate #24) • Post-Quantum Air-Gapped Data Flow
                  </p>
                </div>
                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('jicarilla_sovereign_it')}
                    className="px-3 py-1.5 bg-amber-500 text-stone-950 rounded font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-amber-400 transition-colors cursor-pointer"
                  >
                    <Feather className="w-3.5 h-3.5" />
                    <span>Open IT Architecture Blueprint</span>
                  </button>
                )}
              </div>

              {/* 3 Pillars of ICE-Jicarilla */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg space-y-2">
                  <div className="p-2 w-fit bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400">
                    <Radio className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono">1. Frontier Edge Telemetry</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Solar-powered, ruggedized sensor pods positioned along the Carson National Forest boundary and Jicarilla municipal 
                    wells in Dulce. Sensors monitor continuous gamma counts, alpha/beta particulate deposition, and real-time tritium scintillation.
                  </p>
                </div>

                <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg space-y-2">
                  <div className="p-2 w-fit bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono">2. Post-Quantum Air-Gap</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Data streams over tribal fiber and encrypted LoRaWAN meshes directly to Dulce servers. An optical hardware data diode 
                    ensures raw sovereign telemetry can never be remotely tampered with, intercepted, or wiped by external federal agencies.
                  </p>
                </div>

                <div className="bg-stone-950 border border-stone-800 p-4 rounded-lg space-y-2">
                  <div className="p-2 w-fit bg-amber-500/10 border border-amber-500/30 rounded text-amber-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white font-mono">3. On-Premise Sovereign AI</h4>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Local air-gapped Gemini inference models analyze aquifer isotopic shifts, correlate regional seismic tremors from 
                    surrounding commercial fracking operations, and issue immediate community health alerts in English and Jicarilla Eastern Apache.
                  </p>
                </div>
              </div>

              {/* Live Mock Node Status */}
              <div className="bg-stone-950 border border-stone-800 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-stone-400 font-bold uppercase tracking-wider">
                    Simulated Sensor Node Telemetry (Jicarilla Perimeter)
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    All 6 Nodes Online
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs font-mono">
                  {[
                    { id: 'NODE-JIC-01', location: 'Carson NF Border (Hwy 64)', gamma: '0.12 µSv/h', tritium: '< 1.2 pCi/L', status: 'Normal' },
                    { id: 'NODE-JIC-02', location: 'Dulce Municipal Wellhead #2', gamma: '0.09 µSv/h', tritium: '< 0.8 pCi/L', status: 'Normal' },
                    { id: 'NODE-JIC-03', location: 'Stone Lake Ecological Sanctuary', gamma: '0.11 µSv/h', tritium: '< 0.9 pCi/L', status: 'Normal' },
                    { id: 'NODE-JIC-04', location: 'Navajo River Watershed Inflow', gamma: '0.10 µSv/h', tritium: '< 1.0 pCi/L', status: 'Normal' },
                    { id: 'NODE-JIC-05', location: 'Continental Divide Crest Station', gamma: '0.14 µSv/h', tritium: '< 1.4 pCi/L', status: 'High Cosmic Baseline' },
                    { id: 'NODE-JIC-06', location: 'Gasbuggy Perimeter Perimeter Deep Bore', gamma: '0.16 µSv/h', tritium: '4.8 pCi/L', status: 'Elevated Baseline' }
                  ].map(node => (
                    <div key={node.id} className="p-2.5 bg-stone-900 border border-stone-800 rounded flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <span className="text-white font-bold">{node.id}</span>
                          <span className={`text-[10px] px-1.5 rounded ${
                            node.status.includes('Elevated') ? 'bg-amber-950 text-amber-300 border border-amber-800' : 'bg-stone-800 text-stone-300'
                          }`}>
                            {node.status}
                          </span>
                        </div>
                        <span className="text-stone-400 text-[11px] block mt-0.5">{node.location}</span>
                      </div>
                      <div className="mt-2 pt-1.5 border-t border-stone-800/80 flex justify-between text-[11px]">
                        <span className="text-stone-500">Gamma: <strong className="text-cyan-400">{node.gamma}</strong></span>
                        <span className="text-stone-500">³H: <strong className="text-amber-400">{node.tritium}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: ICE-JICARILLA TRIBAL NEWSFEED & REPORTS HUB */}
        {activeSubTab === 'jicarilla_newsfeed' && (
          <div className="space-y-6">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 sm:p-6 space-y-5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    ICE-Jicarilla Official Newsfeed & Environmental Reports Hub
                  </h3>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Independent Tribal Dispatches • Exposenomics Bulletins • Sovereign Accountability
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-stone-500" />
                    <input
                      type="text"
                      placeholder="Search Jicarilla articles..."
                      value={newsSearchQuery}
                      onChange={(e) => setNewsSearchQuery(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded pl-8 pr-3 py-1.5 text-xs text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 font-mono"
                    />
                  </div>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-stone-950 border border-stone-800 text-stone-300 text-xs font-mono rounded px-2.5 py-1.5 focus:outline-none focus:border-amber-500"
                  >
                    <option value="all">All Categories</option>
                    <option value="Nuclear">Nuclear Forensic Audit</option>
                    <option value="Sovereign">Sovereign IT</option>
                    <option value="Air Quality">Air Quality & VOCs</option>
                    <option value="Water">Water Sovereignty</option>
                  </select>
                </div>
              </div>

              {/* News Cards */}
              <div className="space-y-4">
                {filteredArticles.length === 0 ? (
                  <div className="text-center py-12 text-stone-500 text-sm font-mono">
                    No articles found matching "{newsSearchQuery}".
                  </div>
                ) : (
                  filteredArticles.map((article, idx) => (
                    <div 
                      key={article.id}
                      className={`border rounded-lg p-5 transition-all ${
                        idx === 0 
                          ? 'bg-amber-950/20 border-amber-500/50 shadow-lg' 
                          : 'bg-stone-950/70 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-500 text-stone-950 font-bold rounded text-[10px]">
                            {article.badge}
                          </span>
                          <span className="text-amber-400 font-semibold">{article.category}</span>
                          <span className="text-stone-500">•</span>
                          <span className="text-stone-400">{article.date}</span>
                        </div>
                        <span className="text-stone-400">{article.source}</span>
                      </div>

                      <h4 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2 hover:text-amber-300 transition-colors">
                        {article.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                        {article.summary}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-800 text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <span className="text-stone-500">Vault Hash:</span>
                          <button
                            onClick={() => copyHash(article.hash)}
                            className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                          >
                            <span className="truncate max-w-[200px] sm:max-w-[280px]">{article.hash}</span>
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          {article.url.startsWith('http') && !article.url.includes('icearth.org') ? (
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                            >
                              <span>Read Primary Source</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                const tabParam = new URL(article.url).searchParams.get('tab');
                                if (tabParam && onNavigateTab) {
                                  onNavigateTab(tabParam);
                                }
                              }}
                              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 cursor-pointer"
                            >
                              <span>Launch Interactive Engine</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Cross-Navigation Footer Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 pt-4">
        <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400" />
              Sovereign Ecosystem Navigation
            </h4>
            <p className="text-xs text-stone-400 mt-1">
              Explore interconnected sovereign research, sensor tracking engines, and community archives.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('jicarilla_sovereign_it')}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-amber-950 text-amber-300 border border-amber-500 hover:bg-amber-900 transition-colors cursor-pointer"
                >
                  🪶 Jicarilla Sovereign IT
                </button>
                <button
                  onClick={() => onNavigateTab('realtime_pollution_tracking')}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  📡 Real-Time Pollution
                </button>
                <button
                  onClick={() => onNavigateTab('indigenous')}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  🪶 Indigenous Health
                </button>
                <button
                  onClick={() => onNavigateTab('reports')}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  📰 Reports Hub
                </button>
                <button
                  onClick={() => onNavigateTab('norm_roulet')}
                  className="px-3 py-1.5 text-xs font-mono rounded bg-stone-800 text-stone-200 border border-stone-700 hover:bg-stone-700 transition-colors cursor-pointer"
                >
                  📸 Origins Gallery
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* High-Resolution Artwork View Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-6xl w-full bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                  Sovereign Forensic Evidence Plate #35
                </span>
                <h3 className="text-base font-bold text-white tracking-tight">
                  Project Gasbuggy (1967) Subterranean Nuclear Audit: Jicarilla Apache Sovereign Radiation Defense
                </h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body / Image Viewer */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={gasbuggyImg}
                alt="Project Gasbuggy Subterranean Nuclear Audit Plate Full View"
                className="max-h-[65vh] w-auto object-contain rounded-lg border border-stone-800"
              />
            </div>

            {/* Modal Footer / Metadata */}
            <div className="p-4 border-t border-stone-800 bg-stone-950 text-xs font-mono space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">Provenance Hash:</span>
                  <button
                    onClick={() => copyHash('0xJICARILLA_GASBUGGY_1967_NUCLEAR_AUDIT_SOVEREIGN_VAULT')}
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 cursor-pointer"
                  >
                    <span>0xJICARILLA_GASBUGGY_1967_NUCLEAR_AUDIT_SOVEREIGN_VAULT</span>
                    {copiedHash ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
                <div className="flex items-center gap-2 text-stone-400">
                  <span>Resolution: 1376 × 768</span>
                  <span>•</span>
                  <span>Cartography: San Juan Basin Subsurface</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-[11px] text-stone-400 pt-1 border-t border-stone-800/80">
                <span>Location: Carson National Forest (12 mi SW of Dulce, NM)</span>
                <span className="text-amber-300">ICE-Jicarilla Sovereign Air-Gapped Environmental Mesh</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
