import React, { useState } from 'react';
import {
  MapPin,
  Radio,
  Building2,
  ShoppingBag,
  Newspaper,
  Users,
  Palette,
  Compass,
  Volume2,
  VolumeX,
  Play,
  Pause,
  ExternalLink,
  Search,
  Filter,
  PlusCircle,
  Sparkles,
  ArrowRight,
  Sun,
  ShieldCheck,
  Tag,
  Home,
  CheckCircle2,
  MessageSquare,
  Globe,
  Share2,
  Heart,
  Droplet
} from 'lucide-react';

// Import local image assets
import plazaPanImg from '../assets/images/PlazaPan1.JPG';
import taosKIHeaderImg from '../assets/images/TaosKIHeader100421s_0_0.png';
import tkiGisImg from '../assets/images/TKI-GIS2.png';

interface ICETaosProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface MarketplaceItem {
  id: string;
  title: string;
  category: 'Real Estate' | 'Art & Pueblo Craft' | 'Local Produce & Botanicals' | 'Services & Solar';
  price: string;
  location: string;
  seller: string;
  sellerRole: string;
  description: string;
  badge: string;
  contactHash: string;
}

interface LocalNewsItem {
  id: string;
  title: string;
  category: 'Arts & Culture' | 'Water & Acequias' | 'Municipal Notice' | 'Mesa Community';
  date: string;
  author: string;
  summary: string;
  fullContent: string;
  tags: string[];
}

export const ICETaos: React.FC<ICETaosProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Active Tab View within ICETaos Hub
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'marketplace' | 'map' | 'directory' | 'news'>('overview');

  // Radio Player State (KNCE 90.1 FM True Taos Radio)
  const [isPlayingRadio, setIsPlayingRadio] = useState(false);
  const [isMutedRadio, setIsMutedRadio] = useState(false);
  const [selectedStation, setSelectedStation] = useState<'knce' | 'ktaos'>('knce');

  // Search & Filters
  const [marketSearch, setMarketSearch] = useState('');
  const [marketCategory, setMarketCategory] = useState<string>('All');
  
  // Selected Map Landmark
  const [selectedLandmark, setSelectedLandmark] = useState<string>('plaza');

  // Modal State for New Marketplace Listing
  const [showAddListingModal, setShowAddListingModal] = useState(false);

  // Marketplace Mock Data
  const marketplaceListings: MarketplaceItem[] = [
    {
      id: 'REAL-001',
      title: 'Historic Adobe Dwelling near Taos Pueblo & Kit Carson Road',
      category: 'Real Estate',
      price: '$485,000 (or UCANX Asset Swap)',
      location: 'Historic District, Town of Taos',
      seller: 'Taos Heritage Land Trust',
      sellerRole: 'Verified Local Non-Profit Trust',
      description: 'Restored 1920s thick adobe wall casita with original vigas, kiva fireplace, passive solar orientation, and private water acequia rights.',
      badge: 'Real Estate',
      contactHash: '0xTAOS_ADOBE_CASITA_REALTY'
    },
    {
      id: 'ART-001',
      title: 'Hand-Coiled Micaceous Clay Pottery Vessel',
      category: 'Art & Pueblo Craft',
      price: '$1,200',
      location: 'Taos Pueblo Artisan Circle',
      seller: 'Taos Pueblo Pueblo Master Potter',
      sellerRole: 'Pueblo Registered Artisan',
      description: 'Traditional native micaceous clay harvested from sacred Sangre de Cristo mountain veins, pit-fired with cedar wood according to centuries-old tradition.',
      badge: 'Pueblo Master Art',
      contactHash: '0xTAOS_PUEBLO_MICACEOUS_POTTERY'
    },
    {
      id: 'PROD-001',
      title: 'High-Altitude Sub-50nm Botanical Extract Batch #2026',
      category: 'Local Produce & Botanicals',
      price: '$85 / 100ml',
      location: 'Taos Kush Institute, Taos Mesa',
      seller: 'Taos Kush Institute Research Collective',
      sellerRole: 'High-Altitude Botanical Producer',
      description: 'Full-spectrum organic hemp oil produced at 7,000ft using cavitation nano-emulsion technology for maximum bio-availability.',
      badge: 'TKI Certified Organic',
      contactHash: '0xTKI_BOTANICAL_EXTRACT_BATCH_2026'
    },
    {
      id: 'REAL-002',
      title: '10-Acre Off-Grid Taos Mesa Earthship Building Parcel',
      category: 'Real Estate',
      price: '$65,000',
      location: 'Taos Mesa West / Gorge View',
      seller: 'Taos Mesa Neighbors Collective',
      sellerRole: 'Off-Grid Cooperative',
      description: 'Unrestricted 10-acre parcel with unobstructed 360-degree views of Wheeler Peak and Rio Grande Gorge. Solar-ready with verified groundwater table test.',
      badge: 'Off-Grid Ready',
      contactHash: '0xTAOS_MESA_10ACRE_PARCEL'
    },
    {
      id: 'SERV-001',
      title: 'Passive Solar & Micro-Hydro System Design Service',
      category: 'Services & Solar',
      price: '$150 / hr Consultation',
      location: 'Ranchos de Taos',
      seller: 'Sangre de Cristo Renewable Engineering',
      sellerRole: 'Local Certified Solar Installer',
      description: 'Custom off-grid solar microgrid, battery storage, and rainwater harvesting installation for high-altitude desert homes.',
      badge: 'Local Service',
      contactHash: '0xSANGRE_SOLAR_HYDRO_ENG'
    }
  ];

  // Filtered Marketplace
  const filteredMarketplace = marketplaceListings.filter(item => {
    const matchesCat = marketCategory === 'All' || item.category === marketCategory;
    const matchesSearch = marketSearch === '' ||
      item.title.toLowerCase().includes(marketSearch.toLowerCase()) ||
      item.description.toLowerCase().includes(marketSearch.toLowerCase()) ||
      item.location.toLowerCase().includes(marketSearch.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Taos Local News Items
  const localNews: LocalNewsItem[] = [
    {
      id: 'NEWS-001',
      title: 'Taos School of Art & Pueblo Master Crafters Joint Exhibition at Taos Plaza',
      category: 'Arts & Culture',
      date: 'August 12, 2026',
      author: 'Taos Arts Council',
      summary: 'Celebrating 125 years of world-renowned Taos impressionist art paired with millennia-old Taos Pueblo pottery, silverwork, and weaving traditions.',
      fullContent: 'The Town of Taos Plaza will host a landmark multi-generational art showcase featuring oil paintings from the Taos School of Art alongside micaceous clay pottery and turquoise jewelry crafted by Taos Pueblo artisans. Live classical guitar and native flute performances will accompany the public opening.',
      tags: ['Taos Art', 'Taos Pueblo', 'Plaza Exhibition', 'Culture']
    },
    {
      id: 'NEWS-002',
      title: '2026 Acequia Water Allocation & Mountain Snowpack Report',
      category: 'Water & Acequias',
      date: 'August 08, 2026',
      author: 'Rio Lucero Acequia Association',
      summary: 'Acequia commissioners report steady mountain runoff maintaining historical water rights across El Prado, Ranchos, and Pueblo agricultural fields.',
      fullContent: 'Thanks to late-spring snowpack in the Sangre de Cristo range, Acequia Madre del Pueblo and Rio Lucero ditches are delivering vital irrigation to local organic alfalfa, heirloom blue corn, and botanical trial plots.',
      tags: ['Acequia', 'Sangre de Cristo', 'Water Rights', 'Agua Das']
    },
    {
      id: 'NEWS-003',
      title: 'Taos Mesa Off-Grid Solar & Wireless Mesh Network Expansion',
      category: 'Mesa Community',
      date: 'August 04, 2026',
      author: 'Taos Mesa Digital Cooperative',
      summary: '30 new off-grid homes connected to decentralized encrypted ICEarth nodes, providing high-speed community internet without public utility power.',
      fullContent: 'The Taos Mesa Digital Co-op has successfully completed Phase 3 of its solar-powered community network, linking research sites at Taos Kush Institute directly to the ICEarth sovereign Member Matrix.',
      tags: ['Taos Mesa', 'Off-Grid', 'Solar Mesh', 'ICEarth Node']
    }
  ];

  // Landmarks Data for Interactive Map
  const mapLandmarks = [
    {
      id: 'plaza',
      name: 'Historic Taos Plaza',
      type: 'Cultural & Historic Center',
      coords: '36.4072° N, 105.5734° W',
      desc: 'The historic heart of Taos surrounded by traditional adobe architecture, art galleries, local shops, and the central community gazebo.',
      accent: 'border-amber-500 bg-amber-500/20 text-amber-300'
    },
    {
      id: 'pueblo',
      name: 'Taos Pueblo (UNESCO Heritage Site)',
      type: 'Millennia-Old Indigenous Community',
      coords: '36.4383° N, 105.5453° W',
      desc: 'Continuously inhabited multi-story adobe pueblo structure representing over 1,000 years of living Tiwa culture, craftsmanship, and sovereignty.',
      accent: 'border-teal-400 bg-teal-500/20 text-teal-300'
    },
    {
      id: 'ski_valley',
      name: 'Taos Ski Valley & Wheeler Peak Watershed',
      type: 'High-Alpine Alpine Environment (13,161 ft)',
      coords: '36.5962° N, 105.4494° W',
      desc: 'Pristine mountain alpine zone sourcing the Rio Hondo and Rio Lucero watersheds that nourish the entire Taos Valley.',
      accent: 'border-cyan-400 bg-cyan-500/20 text-cyan-300'
    },
    {
      id: 'mesa_tki',
      name: 'Taos Mesa & Taos Kush Institute (TKI)',
      type: 'Botanical Research & Off-Grid Lab',
      coords: '36.4800° N, 105.6800° W',
      desc: '7,000 ft elevation high-altitude research station pioneering sub-50nm cavitation botanical extracts, GIS soil mapping, and solar power.',
      accent: 'border-orange-500 bg-orange-500/20 text-orange-300'
    },
    {
      id: 'ranchos',
      name: 'Ranchos de Taos (San Francisco de Asís)',
      type: 'Historic Agricultural & Art District',
      coords: '36.3578° N, 105.5956° W',
      desc: 'Home to the iconic 18th-century adobe church immortalized by Georgia O’Keeffe and Ansel Adams, surrounding traditional acequia farmland.',
      accent: 'border-amber-600 bg-amber-600/20 text-amber-200'
    }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      
      {/* TAOS PANORAMIC HEADER HERO */}
      <header className="relative w-full border-b border-amber-900/40 bg-stone-950 text-white overflow-hidden">
        
        {/* Background Image Container */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity hover:opacity-60 transition-opacity duration-700">
          <img
            src={plazaPanImg}
            alt="Historic Taos Plaza Panorama"
            className="w-full h-full object-cover object-center scale-105 filter contrast-125"
          />
        </div>

        {/* New Mexico Color Gradients Overlay (Turquoise, Gold, Adobe Terracotta) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-950 via-teal-950/80 to-amber-950/90" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10 space-y-6">
          
          {/* Header Badges */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 bg-teal-500 text-stone-950 font-bold rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                <Compass size={14} />
                <span>ICETaos Community Hub</span>
              </span>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-md border border-amber-500/30 font-bold">
                Information Community Earth • Northern New Mexico
              </span>
            </div>

            <span className="px-2.5 py-1 bg-orange-500/20 text-orange-300 text-xs font-mono font-bold rounded border border-orange-500/30 flex items-center gap-1">
              <Sun size={14} className="text-amber-400" />
              <span>Land of Enchantment • Elev. 7,000 ft</span>
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
              ICETaos Community
            </h1>
            <p className="text-stone-300 font-serif text-base sm:text-lg leading-relaxed">
              Connecting Taos neighbors, native artisans, local businesses, government, and research institutions into one unified sovereign community directory, marketplace, and live broadcast network.
            </p>
          </div>

          {/* MULTIMEDIA RADIO BAR: KNCE 90.1 FM TRUE TAOS RADIO */}
          <div className="p-4 rounded-2xl bg-stone-900/90 border border-teal-500/40 backdrop-blur-md shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
            
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-stone-950 transition-all ${
                isPlayingRadio ? 'bg-teal-400 animate-pulse shadow-lg shadow-teal-500/30' : 'bg-stone-700 text-stone-300'
              }`}>
                <Radio size={20} />
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-white text-sm">KNCE 90.1 FM • True Taos Radio</span>
                  <span className="px-1.5 py-0.2 bg-teal-500/20 text-teal-300 text-[9px] rounded font-bold uppercase border border-teal-500/30">
                    Live Broadcast
                  </span>
                </div>
                <span className="text-[11px] text-stone-400 block mt-0.5">
                  Independent Community Radio from the Taos Mesa • Broadcasting Local Music, News & Culture
                </span>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center gap-3 self-end md:self-center">
              <button
                onClick={() => setIsPlayingRadio(!isPlayingRadio)}
                className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 shadow-sm ${
                  isPlayingRadio
                    ? 'bg-amber-500 text-stone-950 hover:bg-amber-400'
                    : 'bg-teal-500 text-stone-950 hover:bg-teal-400'
                }`}
              >
                {isPlayingRadio ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlayingRadio ? 'Pause Radio Stream' : 'Listen Live (90.1 FM)'}</span>
              </button>

              <button
                onClick={() => setIsMutedRadio(!isMutedRadio)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
                title={isMutedRadio ? 'Unmute' : 'Mute'}
              >
                {isMutedRadio ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>

              <a
                href="https://truetaosradio.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-teal-300 transition-colors flex items-center gap-1"
                title="Open Official KNCE Site"
              >
                <ExternalLink size={16} />
              </a>
            </div>

          </div>

          {/* Sub-Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pt-2 font-mono text-xs">
            {[
              { id: 'overview', label: '🏡 Community Overview', icon: Home },
              { id: 'marketplace', label: '🛍️ Taos Marketplace & Real Estate', icon: ShoppingBag },
              { id: 'map', label: '🗺️ Taos Cultural GIS Map', icon: MapPin },
              { id: 'directory', label: '👥 Member & Pueblo Directory', icon: Users },
              { id: 'news', label: '📰 Local News & Arts Spotlight', icon: Newspaper }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSubTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSubTab(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl font-bold transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md ring-1 ring-amber-400/50'
                      : 'bg-stone-900/80 text-stone-300 border-stone-800 hover:border-teal-500/50 hover:text-white'
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </header>

      {/* MAIN BODY CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* SECTION 1: OVERVIEW SUB-TAB */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            
            {/* 3 Pillar Cards (Pueblo Culture, Taos Plaza Commerce, High-Altitude Science) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className={`p-6 rounded-2xl border space-y-3 transition-all hover:shadow-xl ${
                isLight ? 'bg-white border-teal-200 hover:border-teal-400' : 'bg-stone-900 border-stone-800 hover:border-teal-500'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center font-bold">
                  <Palette size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Taos Art & Pueblo Legacy
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Honoring the world-renowned Taos School of Art and the millennia-old pottery, micaceous clay, and turquoise craft traditions of Taos Pueblo.
                </p>
                <button
                  onClick={() => setActiveSubTab('news')}
                  className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Explore Arts Spotlight</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              <div className={`p-6 rounded-2xl border space-y-3 transition-all hover:shadow-xl ${
                isLight ? 'bg-white border-amber-200 hover:border-amber-400' : 'bg-stone-900 border-stone-800 hover:border-amber-500'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                  <ShoppingBag size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  Taos Plaza & Local Commerce
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  A peer-to-peer marketplace featuring local historic adobe real estate, solar microgrid installations, organic farms, and small business goods.
                </p>
                <button
                  onClick={() => setActiveSubTab('marketplace')}
                  className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 pt-1"
                >
                  <span>Open Taos Marketplace</span>
                  <ArrowRight size={12} />
                </button>
              </div>

              <div className={`p-6 rounded-2xl border space-y-3 transition-all hover:shadow-xl ${
                isLight ? 'bg-white border-orange-200 hover:border-orange-400' : 'bg-stone-900 border-stone-800 hover:border-orange-500'
              }`}>
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold">
                  <Droplet size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                  High-Altitude Phytoremediation
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Taos Kush Institute and regional growers conducting botanical heavy metal soil remediation, acequia water stewardship, and sub-50nm cavitation research.
                </p>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('ucanx')}
                  className="text-xs font-mono font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1 pt-1"
                >
                  <span>View TKI & UCANX Research</span>
                  <ArrowRight size={12} />
                </button>
              </div>

            </div>

            {/* Featured Taos Plaza Image Spotlight Banner */}
            <div className="p-6 rounded-3xl border bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white border-amber-800/50 shadow-2xl space-y-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-3 md:w-2/3">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                    <Sun size={16} />
                    <span>Featured Landmark Header • Historic Taos Plaza Panorama</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">
                    Centering Taos Heritage & Community Sovereignty
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                    The historic Taos Plaza header image captured above is archived in Norm Roulet's personal photo vault. It represents the focal point of commerce, community gatherings, and regional identity in Northern New Mexico.
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                    <button
                      onClick={() => onNavigateTab && onNavigateTab('norm_roulet')}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>View in Norm Roulet Photo Vault</span>
                      <ArrowRight size={14} />
                    </button>
                    <button
                      onClick={() => setActiveSubTab('map')}
                      className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-teal-300 font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 border border-stone-700"
                    >
                      <span>View on GIS Map</span>
                      <MapPin size={14} />
                    </button>
                  </div>
                </div>

                <div className="md:w-1/3 w-full h-48 rounded-2xl overflow-hidden border border-amber-500/30 shadow-lg">
                  <img
                    src={plazaPanImg}
                    alt="Taos Plaza Panorama"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Quick News & Events Snippets */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2 dark:border-stone-800">
                <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Newspaper size={18} className="text-amber-500" />
                  <span>Recent Taos Community Announcements</span>
                </h3>
                <button
                  onClick={() => setActiveSubTab('news')}
                  className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  View All News
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {localNews.slice(0, 2).map((item) => (
                  <div key={item.id} className={`p-4 rounded-2xl border space-y-2 ${
                    isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
                  }`}>
                    <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="font-bold text-sm text-stone-900 dark:text-stone-100 font-serif">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* SECTION 2: MARKETPLACE SUB-TAB */}
        {activeSubTab === 'marketplace' && (
          <div className="space-y-6">
            
            {/* Header + Search & Add Button */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-amber-950/40 via-stone-900 to-teal-950/40 border border-amber-800/30 text-white">
              <div>
                <h2 className="font-serif font-bold text-2xl text-white">
                  Taos Sovereign Marketplace & Real Estate
                </h2>
                <p className="text-xs text-stone-300 font-sans mt-1">
                  P2P commerce, historic adobe properties, solar services, and native Pueblo artwork.
                </p>
              </div>

              <button
                onClick={() => setShowAddListingModal(true)}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer flex items-center gap-2 shrink-0"
              >
                <PlusCircle size={16} />
                <span>Post New Taos Listing</span>
              </button>
            </div>

            {/* Filter Bar */}
            <div className={`p-4 rounded-2xl border space-y-3 ${
              isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search real estate, adobe homes, pottery, solar..."
                    value={marketSearch}
                    onChange={(e) => setMarketSearch(e.target.value)}
                    className={`w-full pl-10 pr-4 py-2 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                      isLight ? 'bg-stone-50 border-stone-200 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                    }`}
                  />
                </div>

                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-mono">
                  {['All', 'Real Estate', 'Art & Pueblo Craft', 'Local Produce & Botanicals', 'Services & Solar'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setMarketCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                        marketCategory === cat
                          ? 'bg-amber-500 text-stone-950'
                          : isLight ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Listing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMarketplace.map((listing) => (
                <div
                  key={listing.id}
                  className={`p-5 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:shadow-xl ${
                    isLight ? 'bg-white border-stone-200 hover:border-amber-400' : 'bg-stone-900 border-stone-800 hover:border-amber-500'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="px-2 py-0.5 bg-teal-500/10 text-teal-600 dark:text-teal-400 text-[10px] font-mono font-bold rounded border border-teal-500/20">
                        {listing.badge}
                      </span>
                      <span className="font-mono font-bold text-amber-600 dark:text-amber-400 text-sm">
                        {listing.price}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 leading-snug">
                      {listing.title}
                    </h3>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      {listing.description}
                    </p>

                    <div className="pt-2 border-t border-stone-100 dark:border-stone-800 text-[11px] font-mono space-y-1 text-stone-500 dark:text-stone-400">
                      <div>📍 <strong>Location:</strong> {listing.location}</div>
                      <div>👤 <strong>Seller:</strong> {listing.seller} ({listing.sellerRole})</div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-stone-400 truncate max-w-[140px]">
                      {listing.contactHash}
                    </span>
                    <button
                      onClick={() => alert(`Contacting seller for ${listing.title} via encrypted ICEarth Vault message (${listing.contactHash})`)}
                      className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[11px] rounded-xl transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>Inquire & Buy</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* SECTION 3: CULTURAL GIS MAP SUB-TAB */}
        {activeSubTab === 'map' && (
          <div className="space-y-6">
            
            <div className="p-5 rounded-2xl bg-stone-950 text-white border border-teal-500/30 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-mono text-xs font-bold">
                <MapPin size={16} />
                <span>Taos Regional GIS Spatial Overlay</span>
              </div>
              <h2 className="font-serif font-bold text-2xl">
                Interactive Taos Cultural & Environmental Landmark Map
              </h2>
              <p className="text-xs text-stone-300 font-sans">
                Click any key regional landmark below to inspect community coordinates, environmental data, and historical cultural context.
              </p>
            </div>

            {/* Interactive Visual Map Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Map Canvas Simulation */}
              <div className="lg:col-span-7 p-6 rounded-3xl bg-stone-950 border border-stone-800 text-white space-y-4 shadow-2xl relative min-h-[420px] flex flex-col justify-between overflow-hidden">
                
                {/* Background Topo Pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00A896_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex items-center justify-between relative z-10 font-mono text-xs border-b border-stone-800 pb-3">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <Compass size={14} />
                    <span>Sangre de Cristo Watershed & Taos Valley</span>
                  </span>
                  <span className="text-stone-400 text-[10px]">Lat: 36.4072° N | Lon: 105.5734° W</span>
                </div>

                {/* Interactive Map Nodes Layout */}
                <div className="relative z-10 my-8 space-y-4">
                  {mapLandmarks.map((lm) => {
                    const isSelected = selectedLandmark === lm.id;
                    return (
                      <div
                        key={lm.id}
                        onClick={() => setSelectedLandmark(lm.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-amber-500/20 border-amber-400 ring-2 ring-amber-400/50 text-white shadow-lg'
                            : 'bg-stone-900/80 border-stone-800 hover:border-teal-500 text-stone-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-xl border ${lm.accent}`}>
                            <MapPin size={16} />
                          </div>
                          <div>
                            <h4 className="font-bold text-sm font-serif text-white">{lm.name}</h4>
                            <span className="text-[10px] font-mono text-stone-400">{lm.type} • {lm.coords}</span>
                          </div>
                        </div>

                        <span className={`px-2.5 py-1 text-[10px] font-mono font-bold rounded-lg ${
                          isSelected ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                        }`}>
                          {isSelected ? 'Selected' : 'View Data'}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="relative z-10 pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span>🗺️ Taos Kush Institute GIS Database</span>
                  <span className="text-teal-400">Layer: Elevation & Acequia Hydrology</span>
                </div>

              </div>

              {/* Landmark Details Sidebar */}
              <div className="lg:col-span-5 p-6 rounded-3xl border bg-stone-900 border-stone-800 text-stone-100 space-y-5 shadow-xl">
                {(() => {
                  const current = mapLandmarks.find(m => m.id === selectedLandmark) || mapLandmarks[0];
                  return (
                    <div className="space-y-4 font-sans">
                      <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                        <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-mono text-xs font-bold rounded border border-amber-500/30">
                          {current.type}
                        </span>
                        <span className="text-[11px] font-mono text-stone-400">
                          {current.coords}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-xl text-white">
                        {current.name}
                      </h3>

                      <p className="text-xs text-stone-300 leading-relaxed">
                        {current.desc}
                      </p>

                      <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                        <div className="text-teal-400 font-bold text-[11px] uppercase tracking-wider">
                          Community Integration
                        </div>
                        <p className="text-stone-300 text-[11px] leading-relaxed">
                          Connected to ICEarth Member Matrix nodes. Includes registered native artists, local business registries, and water stewardship logs.
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveSubTab('directory')}
                        className="w-full py-2.5 bg-teal-500 hover:bg-teal-400 text-stone-950 font-mono text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Users size={14} />
                        <span>View Members Near {current.name}</span>
                      </button>
                    </div>
                  );
                })()}
              </div>

            </div>

          </div>
        )}

        {/* SECTION 4: MEMBER DIRECTORY SUB-TAB */}
        {activeSubTab === 'directory' && (
          <div className="space-y-6">
            
            <div className="flex items-center justify-between border-b pb-3 dark:border-stone-800">
              <div>
                <h2 className="font-serif font-bold text-2xl text-stone-900 dark:text-stone-100">
                  ICETaos Local Member & Business Directory
                </h2>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans mt-1">
                  Connect with neighbors, indigenous producers, Pueblo artisans, solar co-ops, and municipal leaders in Taos.
                </p>
              </div>

              <button
                onClick={() => onNavigateTab && onNavigateTab('member_matrix')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>View Full Global Member Matrix</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Taos Local Member Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className={`p-5 rounded-2xl border space-y-4 ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white font-serif font-bold text-base flex items-center justify-center shadow-md">
                    OM
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Ouray Muskrat</h3>
                    <span className="text-[10px] font-mono text-stone-400">📍 Taos Pueblo & Four Corners Basin</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Indigenous community leader pioneering botanical soil heavy metal extraction, hemp biopolymers, and watershed protection across Four Corners.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">User #2 Member</span>
                  <button
                    onClick={() => onNavigateTab && onNavigateTab('sovereign_portal')}
                    className="text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>Sovereign Vault</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border space-y-4 ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-700 text-white font-serif font-bold text-base flex items-center justify-center shadow-md">
                    TK
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Taos Kush Institute</h3>
                    <span className="text-[10px] font-mono text-stone-400">📍 Taos Mesa (7,000 ft Elevation)</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  High-altitude agricultural research collective producing sub-50nm botanical inputs, GIS heavy metal mapping, and soil phytoremediation models.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">14 Active Members</span>
                  <button
                    onClick={() => onNavigateTab && onNavigateTab('ucanx')}
                    className="text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>TKI Hub</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

              <div className={`p-5 rounded-2xl border space-y-4 ${
                isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white font-serif font-bold text-base flex items-center justify-center shadow-md">
                    TP
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100">Taos Pueblo Artisan Guild</h3>
                    <span className="text-[10px] font-mono text-stone-400">📍 Taos Pueblo UNESCO Site</span>
                  </div>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  Federated network of native potters, silversmiths, weavers, and woodcrafters preserving traditional techniques and authentic provenance.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between font-mono text-xs">
                  <span className="text-amber-600 dark:text-amber-400 font-bold">Pueblo Crafters</span>
                  <button
                    onClick={() => setActiveSubTab('marketplace')}
                    className="text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1 hover:underline"
                  >
                    <span>View Art</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SECTION 5: NEWS & ARTS SPOTLIGHT SUB-TAB */}
        {activeSubTab === 'news' && (
          <div className="space-y-6">
            
            <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-950 via-stone-900 to-amber-950 text-white border border-teal-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold">
                <Palette size={16} />
                <span>Taos Arts Spotlight & Local Community Newsfeed</span>
              </div>
              <h2 className="font-serif font-bold text-2xl">
                The Taos Cultural & Municipal Chronicle
              </h2>
              <p className="text-xs text-stone-300 font-sans">
                Curated local announcements celebrating the Taos School of Art, Taos Pueblo traditions, water rights, and Mesa innovation.
              </p>
            </div>

            <div className="space-y-6">
              {localNews.map((news) => (
                <article
                  key={news.id}
                  className={`p-6 rounded-3xl border space-y-4 transition-all hover:shadow-xl ${
                    isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold rounded border border-amber-500/20">
                      {news.category}
                    </span>
                    <span className="text-stone-400">
                      📅 {news.date} • By {news.author}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100 leading-snug">
                    {news.title}
                  </h3>

                  <p className="text-sm text-stone-700 dark:text-stone-200 leading-relaxed font-sans">
                    {news.fullContent}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs font-mono">
                    <div className="flex flex-wrap gap-1 text-[10px] text-stone-400">
                      {news.tags.map((t, idx) => (
                        <span key={idx} className="mr-1">#{t}</span>
                      ))}
                    </div>

                    <button
                      onClick={() => alert(`Shared article "${news.title}" to ICEarth Newsfeed Feed`)}
                      className="text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1 hover:underline"
                    >
                      <Share2 size={12} />
                      <span>Share to Member Feed</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

      </main>

      {/* POST NEW MARKETPLACE LISTING MODAL */}
      {showAddListingModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-3xl border p-6 space-y-5 ${
            isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-amber-500" />
                <h3 className="font-serif font-bold text-lg">Post New Taos Listing</h3>
              </div>
              <button
                onClick={() => setShowAddListingModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
              List real estate, art, produce, or solar services in the ICETaos local directory.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Listing Title</label>
                <input
                  type="text"
                  placeholder="e.g., Passive Solar Adobe Casita"
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Category</label>
                <select className="w-full px-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none">
                  <option>Real Estate</option>
                  <option>Art & Pueblo Craft</option>
                  <option>Local Produce & Botanicals</option>
                  <option>Services & Solar</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Price / Term</label>
                <input
                  type="text"
                  placeholder="e.g., $350,000 or UCANX Asset Swap"
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowAddListingModal(false)}
                className="px-4 py-2 text-xs font-mono text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowAddListingModal(false);
                  alert('Listing submitted to ICETaos Marketplace directory!');
                }}
                className="px-4 py-2 bg-amber-500 text-stone-950 font-mono text-xs font-bold rounded-xl"
              >
                Publish Listing
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
