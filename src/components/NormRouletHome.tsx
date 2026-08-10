import React, { useState } from 'react';
import {
  User,
  ShieldCheck,
  Lock,
  Globe,
  BookOpen,
  Sparkles,
  Share2,
  Tag,
  Layers,
  ChevronRight,
  ExternalLink,
  Zap,
  Sprout,
  GraduationCap,
  Atom,
  Camera,
  Image as ImageIcon,
  CheckCircle2,
  Sliders,
  Users,
  Search,
  Filter,
  ArrowUpRight,
  Info,
  Calendar,
  Key,
  Database,
  FileText,
  Compass
} from 'lucide-react';

// Import local image assets
import plazaPanImg from '../assets/images/PlazaPan1.JPG';
import caseAlumnusImg from '../assets/images/CaseAlumnusHeader.JPG';
import taosKIHeaderImg from '../assets/images/TaosKIHeader100421s_0_0.png';
import tkiGisImg from '../assets/images/TKI-GIS2.png';
import nanoSpire20YearsImg from '../assets/images/NanoSpire20Years.jpg';
import scatterplotImg from '../assets/images/Scatterplot.jpg';
import icearthLaunchImg from '../assets/images/Launching1.png';

interface NormRouletHomeProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface ArticleFeedItem {
  id: string;
  title: string;
  category: 'Infomediation' | 'Exposenomics' | 'Cavitation' | 'Sovereign Law' | 'Community';
  date: string;
  summary: string;
  fullText: string;
  tags: string[];
  linkHash: string;
  publishedUrl?: string;
}

interface PhotoGalleryItem {
  id: string;
  title: string;
  category: 'Agua Das' | 'Taos Kush Institute' | 'ICEarth Historic' | 'NanoSpire & Proofs' | 'ICETaos & Taos Heritage';
  imageSrc: string;
  location: string;
  date: string;
  description: string;
  vaultHash: string;
}

export const NormRouletHome: React.FC<NormRouletHomeProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-navigation state within Norm Roulet Home
  const [activeSection, setActiveSection] = useState<'all' | 'highlights' | 'projects' | 'magazine' | 'photography' | 'infomediation'>('all');

  // Interactive Infomediation Data Brokerage Controls State
  const [infomediationSettings, setInfomediationSettings] = useState({
    publicMagazine: true,
    swissSchoolVault: true,
    ucanxCommodities: true,
    photographyVault: true,
    litigationProofs: false, // private by default
    aiBrokerAuthorization: true
  });

  // Selected Article for Reading View Modal
  const [selectedArticle, setSelectedArticle] = useState<ArticleFeedItem | null>(null);

  // Selected Photograph for Lightbox View Modal
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoGalleryItem | null>(null);

  // Search state for magazine
  const [magazineQuery, setMagazineQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Magazine Feed Articles
  const magazineArticles: ArticleFeedItem[] = [
    {
      id: 'MAG-001',
      title: 'ICEarth — Information Community Earth — Conceptual Framework (normALST 02/07/01)',
      category: 'Infomediation',
      date: '2001-02-07 (Submitted 2009)',
      summary: 'The seminal treatise introducing Infomediation: "An individual should own his or her own data and only trusted parties should broker individuals data as allowed and authorized by the individual."',
      fullText: `ICEarth - Information Community Earth - Conceptual Framework - normALST 02/07/01\nSubmitted by Norm Roulet on Fri, 05/08/2009\n\nThe Emergence of "Info Mediated Enterprise"\n\nOne of today's most critical global imperatives is "universal access." In our world's now thoroughly computerized, internetworked economic, social and cultural environment, all people must have access to like information technology (IT) tools, resources and capabilities. As access becomes increasingly universal, exciting interpersonal dynamics become possible; like distant learning, telemedicine, virtual community, and 'infomediation,' a core interest of this document that enables the other dynamics listed before and many still to be seen on our virtual horizons.\n\nThe concept underlying infomediation is that an individual should 'own' his or her own data and that only trusted parties should broker individuals' data as allowed and authorized by the individual. Recent IT developments like the explosive growth of the Internet, maturation of wireless technologies, increasing deployment of extensible markup language (XML), Microsoft's development of a .net (DotNet) philosophy, and the emergence of application service providers (ASPs) indicate 'infomediation' will rapidly become a big part of all our lives. Consider how it may impact yours.`,
      tags: ['ICEarth', 'Infomediation', 'Data Ownership', 'Conceptual Framework', 'DotNet', 'XML'],
      linkHash: '0xICEARTH_CONCEPTUAL_FRAMEWORK_2001',
      publishedUrl: 'http://realneo.us/content/icearth-information-community-earth-conceptual-framework-normalst-020701'
    },
    {
      id: 'MAG-002',
      title: 'Swiss School of Exposenomics: The Human Equation (G x B x E = We)',
      category: 'Exposenomics',
      date: '2024-12-13',
      summary: 'Defining Exposenomics as the economics of environmental impact. How genetics, biology, and the exposome interact to influence human health and economic outcomes.',
      fullText: `Exposenomics is the study of the economics of environmental impact, focusing on how genetics, biology, and the environment interact to influence human health and, ultimately, economic outcomes. By understanding how these three key factors—the genome, the biome, and the exposome—shape our health, we can develop innovative solutions to mitigate environmental stressors and reduce their economic impact on society.\n\nTHE HUMAN EQUATION:\nGenome x Biome x Exposome = We (Our Human State)\n\n• The Genome provides the instructions.\n• The Biome expresses and adapts those instructions through living systems.\n• The Exposome shapes how these systems are influenced by pollutants and environmental stress.\n\nDeath / Health Risk = [(We x %Genome) + (We x %Biome) + (We x %Exposome)] x %Care Access`,
      tags: ['Exposenomics', 'Swiss School', 'Genome', 'Biome', 'Exposome', 'TKI'],
      linkHash: '0xSWISS_EXPOSENOMICS_HUMAN_EQUATION',
      publishedUrl: 'https://business.taoski.com/why-tki/exposenomics'
    },
    {
      id: 'MAG-003',
      title: 'NanoSpire 20+ Years Cavitation Roadmap & Zero-Chemical PFAS Destruction',
      category: 'Cavitation',
      date: '2025-06-15',
      summary: 'Two decades of nanosecond/nanoscale cavitation micro-jet research winning Tokyo Nanotech 2003 award and achieving sub-50nm particle shearing.',
      fullText: `NanoSpire, Inc. was founded in December 2001 to commercialize hydrodynamic cavitation reentrant jet-based high shear tools. Winner of the prestigious Innovation Technology Award at Nanotech 2003 + Future Conference in Tokyo, Japan.\n\nNanoSpire high-shear acoustic cavitation enables sub-50nm particle homogenization, botanical cell wall rupture, and zero-chemical destruction of toxic PFAS/PFOS forever chemicals.`,
      tags: ['NanoSpire', 'NanoCanX', 'Cavitation', 'PFAS Destruction', 'Tokyo Award'],
      linkHash: '0xNANOSPIRE_20_YEARS_CAVITATION'
    },
    {
      id: 'MAG-004',
      title: "Roulet's Law of Environmental Liability: ZK-Exposure Proofs & Municipal Torts",
      category: 'Sovereign Law',
      date: '2025-04-18',
      summary: "Mathematical scatterplot proof connecting municipal environmental heavy metal footprints to blood lead levels and GDP loss, protected by Swiss-grade zero-knowledge privacy.",
      fullText: `Roulet's Law establishes that municipal toxic footprints create quantifiable liabilities that grow exponentially if unmitigated. By combining zero-knowledge exposure verification with phytoremediation, affected citizens achieve unassailable legal tort standing without sacrificing data privacy.`,
      tags: ["Roulet's Law", 'Lead Audit', 'Cleveland', 'Buffalo', 'ZK-Proofs'],
      linkHash: '0xROULETS_LAW_PROOF_SCATTERPLOT'
    }
  ];

  // Creative Photography Gallery Items
  const photographyGallery: PhotoGalleryItem[] = [
    {
      id: 'PHOTO-001',
      title: 'Historic Taos Plaza Panorama Header',
      category: 'ICETaos & Taos Heritage',
      imageSrc: plazaPanImg,
      location: 'Historic District Plaza, Town of Taos, New Mexico',
      date: '2026-08-10',
      description: 'Panoramic wide-angle header of the historic Taos Plaza, the cultural, commercial, and artistic focal point of Northern New Mexico.',
      vaultHash: '0xTAOS_PLAZA_PANORAMA_HEADER'
    },
    {
      id: 'PHOTO-002',
      title: 'Case Alumnus Water History & Hydro-Stewardship Header',
      category: 'Agua Das',
      imageSrc: caseAlumnusImg,
      location: 'Case Western Reserve / Cleveland Water Legacy',
      date: '2010-05-15',
      description: 'Historical archive banner celebrating water stewardship, environmental research, and alumni innovation at Case Western Reserve University.',
      vaultHash: '0xCASE_ALUMNUS_WATER_STEWARDSHIP_HEADER'
    },
    {
      id: 'PHOTO-003',
      title: 'Taos Kush Institute High-Altitude Phytoremediation Banner',
      category: 'Taos Kush Institute',
      imageSrc: taosKIHeaderImg,
      location: 'Taos Mesa, New Mexico (7,000 ft Elevation)',
      date: '2021-10-04',
      description: 'Panoramic mountain vista framing the high-altitude cannabis and hemp genetic research laboratory at Taos Kush Institute.',
      vaultHash: '0xTAOS_KUSH_INSTITUTE_PANORAMIC_HEADER'
    },
    {
      id: 'PHOTO-004',
      title: 'TKI GIS Spatial Environmental Analysis & Soil Toxicity Mapping',
      category: 'Taos Kush Institute',
      imageSrc: tkiGisImg,
      location: 'GIS Spatial Laboratory, Taos',
      date: '2022-03-20',
      description: 'Geographic Information System (GIS) mapping overlay quantifying heavy metal concentrations, watershed vectors, and phytoremediation yields.',
      vaultHash: '0xTKI_GIS_SPATIAL_ENVIRONMENTAL_MAPPING'
    },
    {
      id: 'PHOTO-005',
      title: 'ICEarth Launching Slide 01: Original Identity Banner',
      category: 'ICEarth Historic',
      imageSrc: icearthLaunchImg,
      location: 'ICEarth Platform Genesis',
      date: '2001-02-07',
      description: 'Historic launching banner depicting Information Community Earth and the emergence of the Info Mediated Enterprise.',
      vaultHash: '0xICEARTH_LAUNCHING_SLIDE_01'
    },
    {
      id: 'PHOTO-006',
      title: 'Roulet Law Scatterplot: Lead Exposure vs GDP Per Capita Correlation',
      category: 'NanoSpire & Proofs',
      imageSrc: scatterplotImg,
      location: 'Cleveland & Great Lakes Urban Audit',
      date: '2025-02-14',
      description: 'Original mathematical scatterplot proof demonstrating direct correlation between municipal environmental toxins and biological economic loss.',
      vaultHash: '0xROULETS_LAW_PROOF_SCATTERPLOT_GRAPHIC'
    }
  ];

  // Filtered Magazine Articles
  const filteredArticles = magazineArticles.filter(item => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesQuery = magazineQuery === '' ||
      item.title.toLowerCase().includes(magazineQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(magazineQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(magazineQuery.toLowerCase()));
    return matchesCat && matchesQuery;
  });

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      
      {/* NORM ROULET HERO & INFOMEDIATION STATUS BANNER */}
      <section className={`border-b relative overflow-hidden ${
        isLight ? 'bg-gradient-to-br from-amber-950 via-stone-900 to-stone-950 text-white border-amber-900/40' : 'bg-stone-950 text-stone-100 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          
          {/* Top Identity & Unique URL Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <User size={14} />
                <span>Norm Roulet</span>
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-stone-300 rounded-md border border-stone-700 font-bold">
                ICEarth Site Creator & User #1 Owner
              </span>
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded-md border border-amber-500/30">
                https://icearth.org/?tab=norm_roulet
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 font-bold flex items-center gap-1">
                <ShieldCheck size={12} />
                <span>Infomediation Data Ownership: Active</span>
              </span>
            </div>
          </div>

          {/* Main Title & Bio Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
                <span>Personal Sovereign Vault & Home</span>
                <span>•</span>
                <span>Infomediation Pioneer</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-serif font-bold tracking-tight text-white leading-tight">
                Norm Roulet
              </h1>

              <p className="text-base sm:text-lg text-stone-300 font-serif leading-relaxed">
                Founder of ICEarth (<strong className="text-amber-300">Information Community Earth</strong> & <strong className="text-emerald-300">Indigenous Communities Earth</strong>), sole practitioner of <strong className="text-red-400">Exposenomics</strong>, and creator of <strong className="text-cyan-300">Roulet's Law</strong>. Housed in private User #1 encrypted vaults to steward intellectual property, manage purposive communities, and publish sovereign research.
              </p>

              {/* Indigenous Etymology Breakdown */}
              <div className="p-4 bg-stone-900/90 border border-stone-800 rounded-2xl space-y-2 text-xs font-mono text-stone-300">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-[11px] uppercase tracking-wider">
                  <Info size={14} />
                  <span>Etymology of Indigenous Communities Earth</span>
                </div>
                <p className="text-[11px] leading-relaxed text-stone-300">
                  <em>indigenous</em> (adj.) — "born or originating in a particular place" (Late Latin <em>indigenus</em>, from Old Latin <em>indu</em> "in, within" + <em>gignere</em> "to beget, produce"). Every individual, community, and project on ICEarth retains native data sovereignty over what they produce from within.
                </p>
              </div>
            </div>

            {/* Infomediation Control Panel Widget */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-stone-900/95 border border-stone-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders size={18} className="text-amber-400" />
                  <h3 className="font-bold text-sm font-serif text-white">Infomediation Control Console</h3>
                </div>
                <span className="text-[10px] font-mono text-amber-400 font-bold">2001 Protocol</span>
              </div>

              <p className="text-[11px] text-stone-400 font-sans leading-snug">
                "An individual should own his or her data and only trusted parties broker data as allowed and authorized."
              </p>

              <div className="space-y-2 text-xs font-mono">
                
                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950 border border-stone-800">
                  <span className="text-stone-300 text-[11px]">Public Magazine Feed</span>
                  <button
                    onClick={() => setInfomediationSettings(s => ({ ...s, publicMagazine: !s.publicMagazine }))}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      infomediationSettings.publicMagazine ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-800 text-stone-500'
                    }`}
                  >
                    {infomediationSettings.publicMagazine ? 'Brokered' : 'Private'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950 border border-stone-800">
                  <span className="text-stone-300 text-[11px]">Swiss School Vault</span>
                  <button
                    onClick={() => setInfomediationSettings(s => ({ ...s, swissSchoolVault: !s.swissSchoolVault }))}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      infomediationSettings.swissSchoolVault ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-800 text-stone-500'
                    }`}
                  >
                    {infomediationSettings.swissSchoolVault ? 'Shared' : 'Locked'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950 border border-stone-800">
                  <span className="text-stone-300 text-[11px]">UCANX Commodities Hub</span>
                  <button
                    onClick={() => setInfomediationSettings(s => ({ ...s, ucanxCommodities: !s.ucanxCommodities }))}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      infomediationSettings.ucanxCommodities ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-800 text-stone-500'
                    }`}
                  >
                    {infomediationSettings.ucanxCommodities ? 'Federated' : 'Offline'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-stone-950 border border-stone-800">
                  <span className="text-stone-300 text-[11px]">Photography Vault</span>
                  <button
                    onClick={() => setInfomediationSettings(s => ({ ...s, photographyVault: !s.photographyVault }))}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      infomediationSettings.photographyVault ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'bg-stone-800 text-stone-500'
                    }`}
                  >
                    {infomediationSettings.photographyVault ? 'Open Gallery' : 'Private'}
                  </button>
                </div>

              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
                <span>Vault Encryption: AES-256</span>
                <span className="text-amber-400 font-bold">User #1 Exclusive</span>
              </div>
            </div>

          </div>

          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 pt-4 border-t border-stone-800/80 overflow-x-auto scrollbar-none">
            {[
              { id: 'all', label: 'Complete Home Overview', icon: Layers },
              { id: 'highlights', label: 'Development Highlights', icon: Sparkles },
              { id: 'projects', label: 'Projects & Communities', icon: Users },
              { id: 'magazine', label: 'Personal Magazine & Articles', icon: BookOpen },
              { id: 'photography', label: 'Creative Photography Vault', icon: Camera },
              { id: 'infomediation', label: '2001 Infomediation Framework', icon: Lock },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeSection === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id as any)}
                  className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-stone-950 shadow-lg font-extrabold'
                      : 'bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* MAIN CONTENT CONTAINERS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

        {/* SECTION 1: RECENT DEVELOPMENT HIGHLIGHTS WINDOW */}
        {(activeSection === 'all' || activeSection === 'highlights') && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
                  Live Platform Evolution
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Recent Development Highlights
                </h2>
              </div>
              <span className="text-xs font-mono text-stone-500 dark:text-stone-400">
                Managed from User #1 Sovereign Vault
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Highlight 1: Swiss School */}
              <div 
                onClick={() => onNavigateTab && onNavigateTab('swiss_school')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg space-y-3 ${
                  isLight ? 'bg-white border-stone-200 hover:border-red-400' : 'bg-stone-900 border-stone-800 hover:border-red-500/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-red-500/10 text-red-600 dark:text-red-400 font-bold rounded border border-red-500/20">
                    🇨🇭 Swiss School
                  </span>
                  <span className="text-stone-400">Aug 2026</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 leading-snug">
                  Swiss School of Exposenomics
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Established the Human Equation (G × B × E = We) & Neuchâtel Roulet family Swiss stewardship lineage repository.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-red-600 dark:text-red-400 font-bold">
                  <span>Open Swiss Vault</span>
                  <ChevronRight size={14} />
                </div>
              </div>

              {/* Highlight 2: NanoSpire NanoCanX */}
              <div 
                onClick={() => onNavigateTab && onNavigateTab('nanospire_nanocanx')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg space-y-3 ${
                  isLight ? 'bg-white border-stone-200 hover:border-cyan-400' : 'bg-stone-900 border-stone-800 hover:border-cyan-500/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-bold rounded border border-cyan-500/20">
                    ⚡ NanoSpire Tech
                  </span>
                  <span className="text-stone-400">Tokyo Award</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 leading-snug">
                  NanoSpire NanoCanX Portal
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  20+ years hydrodynamic cavitation micro-jets, sub-50nm high-shear processing, and zero-chemical PFAS destruction.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                  <span>Open NanoCanX Portal</span>
                  <ChevronRight size={14} />
                </div>
              </div>

              {/* Highlight 3: UCANX Commodities */}
              <div 
                onClick={() => onNavigateTab && onNavigateTab('ucanx')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg space-y-3 ${
                  isLight ? 'bg-white border-stone-200 hover:border-amber-400' : 'bg-stone-900 border-stone-800 hover:border-amber-500/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold rounded border border-amber-500/20">
                    🌱 UCANX Exchange
                  </span>
                  <span className="text-stone-400">Taos Kush</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 leading-snug">
                  UCANX Commodities Exchange
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Sub-50nm cannabinoid nano-emulsions, hemp bast biopolymers, and carbon credit commodities trading.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                  <span>Open UCANX Hub</span>
                  <ChevronRight size={14} />
                </div>
              </div>

              {/* Highlight 4: Roulet's Law & Litigation */}
              <div 
                onClick={() => onNavigateTab && onNavigateTab('litigation')}
                className={`p-5 rounded-2xl border cursor-pointer transition-all hover:scale-[1.02] hover:shadow-lg space-y-3 ${
                  isLight ? 'bg-white border-stone-200 hover:border-indigo-400' : 'bg-stone-900 border-stone-800 hover:border-indigo-500/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold rounded border border-indigo-500/20">
                    ⚖️ Sovereign Law
                  </span>
                  <span className="text-stone-400">Lead Audit</span>
                </div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 leading-snug">
                  Roulet's Law & Tort Valuation
                </h3>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Mathematical scatterplots correlating municipal toxic footprints with blood lead levels and economic GDP loss.
                </p>
                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">
                  <span>Open Legal Proofs</span>
                  <ChevronRight size={14} />
                </div>
              </div>

            </div>
          </section>
        )}

        {/* SECTION 2: PROJECTS, PURPOSIVE GROUPS & COMMUNITIES BLOCK */}
        {(activeSection === 'all' || activeSection === 'projects') && (
          <section className="space-y-6">
            <div>
              <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
                Infomediation Purposive Networks
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                Norm Roulet Projects, Groups & Purposive Communities
              </h2>
              <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                Each purpose anchors to User #1's vault while enabling community membership as authorized.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {[
                {
                  title: 'Swiss School of Exposenomics',
                  category: 'Organization of Thought',
                  badge: 'User #1 Founder',
                  desc: 'The study of the economics of environmental exposures, integrating the genome, biome, and exposome.',
                  membersCount: '1 Sole Practitioner (Norm Roulet)',
                  tab: 'swiss_school',
                  icon: GraduationCap,
                  color: 'red'
                },
                {
                  title: 'UCANX Commodities Exchange',
                  category: 'Purposive Trading Hub',
                  badge: 'Commercial IP',
                  desc: 'Global exchange for high-shear nano-emulsions, CBD/CBG bio-molecules, and industrial hemp polymers.',
                  membersCount: 'Federated Producers Network',
                  tab: 'ucanx',
                  icon: Sprout,
                  color: 'amber'
                },
                {
                  title: 'NanoSpire, Inc. Nanotechnology',
                  category: 'Industrial Licensing',
                  badge: 'Tokyo Nanotech Award',
                  desc: 'Harnessing acoustic cavitation micro-jets up to 100,000 atmospheres for nanofabrication and PFAS destruction.',
                  membersCount: 'Research & Strategic Partners',
                  tab: 'nanospire_nanocanx',
                  icon: Zap,
                  color: 'cyan'
                },
                {
                  title: 'Taos Kush Institute (TKI)',
                  category: 'Location & Research (Taos, NM)',
                  badge: 'Phytoremediation Lab',
                  desc: 'High-altitude research center studying plant-human genetic interaction and phytoremediation of heavy metals.',
                  membersCount: 'Taos Regional Community',
                  tab: 'ucanx',
                  icon: Atom,
                  color: 'emerald'
                },
                {
                  title: 'Agua Das Water Remediation',
                  category: 'Environmental Stewardship',
                  badge: 'Case Alumnus',
                  desc: 'Botanical and hydrodynamic water purification systems restoring urban watersheds and river basins.',
                  membersCount: 'Hydro-Stewardship Network',
                  tab: 'manuscript',
                  icon: ImageIcon,
                  color: 'blue'
                },
                {
                  title: 'Indigenous Communities Earth (ICEarth)',
                  category: 'Indigenous & Identity Network',
                  badge: 'User #1 + User #2',
                  desc: 'Federated sovereign member portal connecting User #1 (Norm Roulet) and User #2 (Ouray Muskrat).',
                  membersCount: 'Multi-User Sovereign Vaults',
                  tab: 'sovereign_portal',
                  icon: Users,
                  color: 'indigo'
                },
                {
                  title: 'ICETaos Community Hub',
                  category: 'Local Neighbor Federation',
                  badge: 'Taos NM Federation',
                  desc: 'Neighbors, Taos Pueblo artisans, local businesses, real estate marketplace, KNCE 90.1 FM radio, and municipal news feed.',
                  membersCount: 'Taos Regional Members',
                  tab: 'icetaos',
                  icon: Compass,
                  color: 'teal'
                }
              ].map((group, idx) => {
                const Icon = group.icon;
                return (
                  <div 
                    key={idx}
                    className={`p-6 rounded-2xl border space-y-4 flex flex-col justify-between transition-all hover:shadow-md ${
                      isLight ? 'bg-white border-stone-200 hover:border-amber-400' : 'bg-stone-900 border-stone-800 hover:border-amber-500/50'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                          <Icon size={20} />
                        </div>
                        <span className="px-2 py-0.5 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[10px] font-mono font-bold rounded border border-stone-200 dark:border-stone-700">
                          {group.badge}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                          {group.title}
                        </h3>
                        <span className="text-[10px] font-mono text-stone-400 block mt-0.5">
                          {group.category}
                        </span>
                      </div>

                      <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                        {group.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                      <span className="text-[11px] text-stone-400 font-semibold">
                        👥 {group.membersCount}
                      </span>
                      {onNavigateTab && (
                        <button
                          onClick={() => onNavigateTab(group.tab)}
                          className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[11px] rounded-lg transition-all cursor-pointer flex items-center gap-1"
                        >
                          <span>Open Community</span>
                          <ArrowUpRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>
          </section>
        )}

        {/* SECTION 3: PERSONAL MAGAZINE & NEWSFEED (INFOMEDIATION PUBLISHING) */}
        {(activeSection === 'all' || activeSection === 'magazine' || activeSection === 'infomediation') && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
                  Personal Magazine Feed
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Norm Roulet Research & Infomediation Feed
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Publications served directly from User #1 encrypted vault to ICEarth and external domains.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search articles & tags..."
                    value={magazineQuery}
                    onChange={(e) => setMagazineQuery(e.target.value)}
                    className={`pl-8 pr-3 py-1.5 rounded-xl text-xs font-mono border focus:outline-none ${
                      isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Category Filter Bar */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 text-xs font-mono">
              {['All', 'Infomediation', 'Exposenomics', 'Cavitation', 'Sovereign Law'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : isLight ? 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200' : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 transition-all hover:shadow-lg ${
                    isLight ? 'bg-white border-stone-200 hover:border-amber-400' : 'bg-stone-900 border-stone-800 hover:border-amber-500/50'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                      <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold rounded border border-amber-500/20">
                        {article.category}
                      </span>
                      <span className="text-stone-400">{article.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono text-stone-400 pt-2 border-t border-stone-100 dark:border-stone-800">
                      <Tag size={12} className="text-amber-500" />
                      {article.tags.map((t, idx) => (
                        <span key={idx} className="mr-1">#{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] text-stone-400 truncate max-w-[160px]">
                      {article.linkHash}
                    </span>

                    <button
                      onClick={() => setSelectedArticle(article)}
                      className="px-3 py-1.5 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 text-[11px] font-bold rounded-lg hover:opacity-90 transition-all cursor-pointer flex items-center gap-1"
                    >
                      <span>Read Publication</span>
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SECTION 4: CREATIVE CONTENT & PHOTOGRAPHY VAULT */}
        {(activeSection === 'all' || activeSection === 'photography') && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold uppercase text-amber-600 dark:text-amber-400 tracking-wider">
                  Visual Assets & Creative Vault
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 dark:text-stone-100 mt-1">
                  Norm Roulet Photography & Visual Header Archive
                </h2>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-1">
                  Featuring original photography headers from Agua Das, Taos Kush Institute, and ICEarth historic archives.
                </p>
              </div>

              <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold rounded-lg border border-amber-500/20">
                🔒 Cryptographically Watermarked
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photographyGallery.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className={`group rounded-2xl border overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:scale-[1.01] ${
                    isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
                  }`}
                >
                  <div className="aspect-video relative bg-stone-950 overflow-hidden">
                    <img
                      src={photo.imageSrc}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-stone-950/80 backdrop-blur text-amber-300 font-mono text-[10px] rounded border border-stone-800">
                      📍 {photo.location}
                    </span>
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                      <span className="text-amber-600 dark:text-amber-400 font-bold">{photo.category}</span>
                      <span>{photo.date}</span>
                    </div>

                    <h3 className="font-serif font-bold text-sm text-stone-900 dark:text-stone-100 leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {photo.title}
                    </h3>

                    <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-2">
                      {photo.description}
                    </p>

                    <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[10px] font-mono text-stone-400">
                      <span className="truncate max-w-[150px]">{photo.vaultHash}</span>
                      <span className="text-amber-500 font-bold">View Lightbox →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </main>

      {/* ARTICLE READER MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 space-y-6 ${
            isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 font-mono text-xs font-bold rounded border border-amber-500/20">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold leading-snug mt-2">
                  {selectedArticle.title}
                </h3>
                <span className="text-xs font-mono text-stone-400 block">
                  Author: Norm Roulet • {selectedArticle.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="prose dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed font-serif whitespace-pre-wrap space-y-4">
              {selectedArticle.fullText}
            </div>

            {selectedArticle.publishedUrl && (
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-between text-xs font-mono text-amber-700 dark:text-amber-300">
                <span>External Publication Link:</span>
                <a
                  href={selectedArticle.publishedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline flex items-center gap-1 hover:opacity-80"
                >
                  <span>Visit {selectedArticle.publishedUrl}</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}

            <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between text-xs font-mono text-stone-400">
              <span>Vault Hash: {selectedArticle.linkHash}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 font-bold rounded-xl"
              >
                Close Reader
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PHOTOGRAPHY LIGHTBOX MODAL */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl rounded-3xl bg-stone-950 border border-stone-800 text-white overflow-hidden space-y-4 p-6 relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 bg-stone-900/80 text-stone-400 hover:text-white rounded-xl border border-stone-800 z-10"
            >
              ✕
            </button>

            <div className="max-h-[60vh] overflow-hidden rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center">
              <img
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.title}
                className="max-h-[60vh] w-auto object-contain rounded-2xl"
              />
            </div>

            <div className="space-y-2 font-serif">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                <span>{selectedPhoto.category} • {selectedPhoto.location}</span>
                <span>{selectedPhoto.date}</span>
              </div>

              <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>Cryptographic Ownership: Norm Roulet (User #1 Vault)</span>
                <span>{selectedPhoto.vaultHash}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
