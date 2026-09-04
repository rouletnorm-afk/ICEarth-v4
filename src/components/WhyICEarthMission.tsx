import React, { useState } from 'react';
import {
  Feather,
  Mountain,
  Shield,
  Compass,
  BookOpen,
  Calendar,
  ExternalLink,
  Award,
  Hash,
  Layers,
  MapPin,
  CheckCircle2,
  Users,
  Flame,
  Radiation,
  Eye,
  X,
  Share2,
  Copy,
  Check,
  ArrowRight,
  Globe,
  Sparkles,
  Zap,
  Clock,
  Heart,
  FileText
} from 'lucide-react';
import puebloRevoltTaosImg from '../assets/images/pueblo_revolt_1680_taos_1788483881945.jpg';

interface WhyICEarthMissionProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const WhyICEarthMission: React.FC<WhyICEarthMissionProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'mission' | 'history' | 'timeline' | 'pillars' | 'statement'>('mission');
  const [showArtModal, setShowArtModal] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [selectedPillarId, setSelectedPillarId] = useState<string>('p1');

  const vaultHash = '0x1680_PUEBLO_REVOLT_TAOS_SOVEREIGN_MISSION_VAULT';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  const timelineEvents = [
    {
      year: '10,000+ BCE',
      era: 'Paleolithic & Ancestral Pueblo Roots',
      title: '12,000+ Years of Continual Inhabitation',
      desc: 'Clovis-point stone tools, arrowheads, and spearheads attest to 12 millennia of indigenous life in the upper Rio Grande. Ancestors of modern Pueblo peoples (Anasazi, Hohokam, Mogollon) construct multistoried adobe communities, cliffside dwellings, and mesa complexes across more than 100 sovereign villages.',
      significance: 'Continuous sovereign relationship with the land, waters, and sacred kivas prior to any European arrival.'
    },
    {
      year: '1540',
      era: 'First European Contact',
      title: 'Coronado Expedition & The Tiguex War',
      desc: 'Francisco Vázquez de Coronado leads an armed Spanish expedition seeking the mythical Seven Golden Cities of Cíbola. Finding mud and stone architecture instead of gold, his forces instigate the Tiguex War against Tiwa pueblos, beginning a century of violent colonial friction.',
      significance: 'First armed confrontation sparking multi-generational Indigenous resistance.'
    },
    {
      year: '1598',
      era: 'Formal Colonial Occupation',
      title: 'Juan de Oñate & The Imposition of Encomienda',
      desc: 'Oñate invades the upper Rio Grande valley with 129 soldiers, 10 Franciscan Catholic priests, and settlers, demanding Pueblo tribute in corn, blankets, and forced labor while attempting to systematically obliterate Indigenous spiritual ceremonies.',
      significance: 'Establishment of forced spiritual conversion and tribute exploitation.'
    },
    {
      year: '1599',
      era: 'The Acoma Massacre',
      title: 'Genocidal Reprisal at Acoma Mesa',
      desc: 'Following a skirmish that killed 12 Spanish soldiers, 70 Spanish troops storm the clifftop fortress of Acoma. Hundreds of Acoma people are slaughtered; ~600 captured and enslaved. 25 Acoma men have their right feet amputated by order of the Spanish Crown to break warrior resistance.',
      significance: 'Trauma resonates across all Pueblos, solidifying resolve for unified liberation.'
    },
    {
      year: '1656–1665',
      era: 'Religious Terror',
      title: 'Franciscan Desecration of Sacred Kivas',
      desc: 'Franciscan missionary leader Fray Alonso de Posada outlaws traditional dances and kachina ceremonies, directing soldiers to raid sacred kivas, seize and incinerate sacred wooden masks, and destroy ancient ceremonial regalia across the Rio Grande valley.',
      significance: 'Attacking the spiritual root of Pueblo life makes peaceful coexistence impossible.'
    },
    {
      year: '1675',
      era: 'The Spark in Santa Fe',
      title: 'Persecution of 47 Medicine Men & Po\'pay\'s Release',
      desc: 'Governor Juan Francisco Treviño arrests 47 Pueblo spiritual leaders for "sorcery." Three are hanged, one commits suicide. In response, armed Pueblo leaders march on Santa Fe and force Treviño to release the surviving elders—including a medicine man from Ohkay Owingeh named Po\'pay.',
      significance: 'Pueblo leaders recognize that armed collective solidarity forces Spanish capitulation.'
    },
    {
      year: '1675–1680',
      era: 'Taos Sanctuary & Grand Conspiracy',
      title: 'Po\'pay Plans the Revolution from Taos Pueblo',
      desc: 'Po\'pay retreats to northernmost Taos Pueblo—a fortified bastion against the Sangre de Cristo Mountains. Over 5 years, he coordinates an unprecedented secret alliance across linguistic barriers: Tiwa, Tewa, Towa, Tano, Keres, Zuni, Hopi, and allied Navajo and Apache warriors.',
      significance: 'Taos Pueblo becomes the tactical command center of the first successful American revolution.'
    },
    {
      year: 'Aug 8–9, 1680',
      era: 'The Knotted Deerskin Cords',
      title: 'Secret Synchronization & Capture of Tesuque Runners',
      desc: 'Po\'pay dispatches fleet runners carrying knotted deerskin cords to every village; one knot is untied each sunrise. The final untied knot signals August 11. On August 9, two runners from Tesuque Pueblo (Pedro Omtua and Nicolas Catua) are captured and tortured by Spanish authorities in Santa Fe.',
      significance: 'Po\'pay learns of the leak and advances the revolution by 24 hours to August 10.'
    },
    {
      year: 'Aug 10–21, 1680',
      era: 'The 1680 Pueblo Revolt',
      title: 'Spanish Expulsion & 12 Years of Complete Independence',
      desc: 'On August 10, Ohkay Owingeh and allied Pueblos launch simultaneous attacks. 21 of 33 Spanish priests and ~400 colonizers are killed. Pueblo warriors surround Santa Fe and sever its freshwater canal. On August 21, Governor Antonio de Otermín and 2,000 survivors retreat 300 miles south to El Paso del Norte.',
      significance: 'The most successful Native American uprising in North American history; establishes 12 years of sovereign self-governance.'
    }
  ];

  const sovereignPillars = [
    {
      id: 'p1',
      title: 'Exposenomics & Environmental Self-Defense',
      icon: Shield,
      color: 'amber',
      tagline: 'Testing Our Own Waters, Soils, and Air with Zero Federal Dependency',
      body: 'From the 1967 Project Gasbuggy 29-kiloton nuclear detonation 12 miles from Jicarilla Apache lands to abandoned uranium tailings across the Navajo Nation and heavy metals in Rio Grande tributaries, Indigenous communities bear the deepest burdens of environmental violence. Under Roulet\'s Law (H\' × t = C), silent toxic exposure steals neural baselines. ICEarth equips sovereign tribes with independent field testing, mass spectrometry verification, and immutable open-source reporting.'
    },
    {
      id: 'p2',
      title: 'Air-Gapped Sovereign IT & Edge AI',
      icon: Zap,
      color: 'emerald',
      tagline: 'Local Computational Power Owned and Controlled by Tribal Governments',
      body: 'Decolonizing technology means eliminating corporate surveillance clouds and federal backdoors. ICEarth designs on-premise, solar-powered, air-gapped server nodes with localized post-quantum encryption. Like the secret knotted cords of 1680, tribal governments can analyze environmental data, preserve language archives, and coordinate economic initiatives without third-party corporate data harvesting.'
    },
    {
      id: 'p3',
      title: 'Food, Soil & Agricultural Sovereignty',
      icon: Mountain,
      color: 'teal',
      tagline: 'Preserving Ancestral Seeds, Pure Waters & Regenerative Farming',
      body: 'Taos Pueblo has farmed its sacred valley for over a thousand years using the pure meltwaters of Blue Lake and the Rio Pueblo de Taos. ICEarth fosters community seed banks, organic soil detoxification, and direct peer-to-peer agricultural exchanges through UCANX, bypassing extractive industrial distribution chains to feed our children nutrient-dense, heavy-metal-free food.'
    },
    {
      id: 'p4',
      title: 'Genetic, Genomic & Cultural Sanctuary',
      icon: Feather,
      color: 'rose',
      tagline: 'Protecting Indigenous Biometrics, DNA & Sacred Knowledge',
      body: 'Biotech corporations and academic institutions have repeatedly exploited Indigenous genetic samples (such as the Denisovan EPAS1 high-altitude adaptation and tribal lineage studies) without equitable consent or ownership. ICEarth establishes cryptographic vaults that give Indigenous nations sovereign copyright and custody over their genomic heritage, oral histories, and sacred arts.'
    },
    {
      id: 'p5',
      title: 'Pan-Indigenous Sovereign Solidarity',
      icon: Globe,
      color: 'indigo',
      tagline: 'Connecting Rio Grande Pueblos, Apache Nations, and Global Tribes',
      body: 'Just as Po\'pay united Towa, Tiwa, Tewa, Hopi, and Apache warriors in 1680, ICEarth bridges local communities with global Indigenous relatives—from Suriname Maroon tribes resisting toxic mercury mining to Nigerian agrarian villages fighting oil extraction and First Nations defending northern watersheds.'
    }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24 font-sans`}>
      {/* TOP HERO SECTION */}
      <section className="relative overflow-hidden border-b border-amber-900/30 bg-gradient-to-b from-stone-950 via-stone-900 to-amber-950/40 text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Smithsonian Banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-stone-800 text-xs font-mono">
            <div className="flex items-center gap-2 text-amber-400">
              <BookOpen size={16} className="text-amber-400" />
              <span className="font-bold tracking-wider uppercase">Smithsonian Voices • National Museum of the American Indian</span>
              <span className="hidden sm:inline text-stone-500">|</span>
              <span className="text-stone-300">September 2, 2026</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[11px] font-semibold">
                Author: Dennis W. Zotigh
              </span>
              <span className="text-stone-400 text-[11px] hidden md:inline">
                Kiowa / Ohkay Owingeh / Isanti Dakota
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider">
                <Feather size={14} className="text-amber-400" />
                <span>Founding Philosophy & Historical Mandate</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-serif">
                In 1680, Pueblo Natives Launched America's First Successful Revolution.
                <span className="block text-amber-400 mt-1">This Is Why We Founded ICEarth in Taos.</span>
              </h1>

              <p className="text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
                After enduring more than a century of colonial suppression, forced labor, and religious desecration, the Indigenous tribes of modern-day New Mexico united under Po'pay at Taos Pueblo to expel the Spanish Crown. 
                <strong className="text-amber-300 font-semibold"> Norm Roulet moved to Taos, New Mexico to establish Indigenous Communities Earth (ICEarth)</strong>—translating the enduring spirit of the 1680 Pueblo Revolt into 21st-century environmental, technological, and exposenomic sovereignty for Indigenous peoples.
              </p>

              {/* METADATA & HASH BAR */}
              <div className="p-3.5 rounded-xl bg-stone-900/90 border border-amber-800/40 space-y-2 text-xs font-mono">
                <div className="flex flex-wrap items-center justify-between gap-2 text-stone-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <Hash size={13} />
                    <span>Cryptographic Provenance Hash:</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <code className="text-amber-200 text-[11px] bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                      {vaultHash}
                    </code>
                    <button
                      onClick={() => copyToClipboard(vaultHash)}
                      className="p-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-all cursor-pointer"
                      title="Copy Hash"
                    >
                      {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                    </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-stone-400 text-[11px]">
                  <span>🏛️ Smithsonian NMAI Reference: John Wetherill / Carl Moon Archives</span>
                  <span>📍 Sanctuary: Taos Pueblo, Sangre de Cristo Range, NM</span>
                  <span>🛡️ Plate #37 Historical Documentary Asset</span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowArtModal(true)}
                  className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer hover:scale-105"
                >
                  <Eye size={15} />
                  <span>Inspect Historical Plate #37</span>
                </button>

                <button
                  onClick={() => setActiveSubTab('statement')}
                  className="px-4 py-2.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs tracking-wider flex items-center gap-2 border border-stone-700 transition-all cursor-pointer"
                >
                  <FileText size={15} className="text-amber-400" />
                  <span>Why I Moved to Taos</span>
                </button>

                {onNavigateTab && (
                  <>
                    <button
                      onClick={() => onNavigateTab('icetaos')}
                      className="px-3.5 py-2 rounded-lg bg-teal-950/80 hover:bg-teal-900 text-teal-200 font-semibold text-xs border border-teal-600/50 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Compass size={14} className="text-teal-400" />
                      <span>Launch ICETaos</span>
                    </button>

                    <button
                      onClick={() => onNavigateTab('jicarilla_sovereign_it')}
                      className="px-3.5 py-2 rounded-lg bg-amber-950/80 hover:bg-amber-900 text-amber-200 font-semibold text-xs border border-amber-600/50 flex items-center gap-1.5 transition-all cursor-pointer"
                    >
                      <Feather size={14} className="text-amber-400" />
                      <span>Launch ICE-Jicarilla</span>
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* ARTWORK CARD PREVIEW */}
            <div className="lg:col-span-5">
              <div 
                onClick={() => setShowArtModal(true)}
                className="group relative rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-stone-900 shadow-2xl cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video w-full relative overflow-hidden">
                  <img
                    src={puebloRevoltTaosImg}
                    alt="Why ICEarth: 1680 Pueblo Revolt and Taos Rebellion Historical Infographic Plate"
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-stone-950/80 backdrop-blur-md border border-amber-500/50 text-[10px] font-mono text-amber-400 font-bold uppercase">
                    Plate #37 • 1680 Revolt
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-amber-400 font-mono">
                    <span className="font-bold">Loren Mozley 1936 / Dennis Zotigh 2026 Archive</span>
                    <span>Taos Pueblo Bastion</span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    The Knotted Cord of Po'pay: Taos Pueblo Tactical Command Center
                  </h3>
                  <p className="text-xs text-stone-400 line-clamp-2">
                    Visual documentary plate commemorating Po'pay's united Indigenous alliance, the deerskin countdown cords, and the 1680 liberation of New Mexico.
                  </p>
                  <div className="pt-2 flex items-center justify-between text-[11px] text-stone-500 font-mono border-t border-stone-800">
                    <span>Click to expand high-res plate</span>
                    <span className="text-amber-400 flex items-center gap-1">Expand <ArrowRight size={12} /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUB-NAVIGATION TABS */}
      <div className={`sticky top-0 z-20 border-b ${siteTheme === 'dark' ? 'bg-stone-900/95 border-stone-800' : 'bg-stone-100/95 border-stone-200'} backdrop-blur-md px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-semibold">
          {[
            { id: 'mission', label: '1. Collective Mission & Purpose', icon: Feather },
            { id: 'statement', label: '2. Why I Moved to Taos (Norm Roulet)', icon: MapPin },
            { id: 'history', label: '3. Smithsonian Monograph (Dennis Zotigh)', icon: BookOpen },
            { id: 'timeline', label: '4. Revolt Chronology & Timeline', icon: Calendar },
            { id: 'pillars', label: '5. The Five Sovereign Pillars', icon: Layers }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-600 text-white font-bold shadow-sm'
                    : siteTheme === 'dark'
                      ? 'text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                      : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200'
                }`}
              >
                <Icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CONTENT PANELS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* TAB 1: COLLECTIVE MISSION */}
        {activeSubTab === 'mission' && (
          <div className="space-y-10">
            {/* Core Manifesto Card */}
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900/90 border-amber-900/40 text-stone-200' : 'bg-white border-amber-200 text-stone-800'} shadow-lg space-y-6`}>
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                <Feather size={28} />
                <div>
                  <h2 className="text-2xl font-bold font-serif text-stone-900 dark:text-white">
                    The Collective Mission of Indigenous Communities Earth (ICEarth)
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Sovereign Environmental Intelligence • Decentralized Community Technology • Exposenomic Self-Defense
                  </p>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-base leading-relaxed space-y-4">
                <p className="text-lg font-medium text-amber-900 dark:text-amber-200">
                  Indigenous Communities Earth is not a charitable foundation, a bureaucratic non-profit, or an academic research observer. ICEarth is an operational, decentralized mutual defense and empowerment network engineered directly for and with Indigenous tribes and sovereign territories.
                </p>

                <p>
                  For five centuries, colonialism relied upon military force, religious persecution, and territorial theft. In the modern era, colonial extraction has transformed into silent, systemic environmental poisoning:
                </p>

                <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300">
                  <li>
                    <strong>Subterranean & Atmospheric Radiation:</strong> Like the 1967 Project Gasbuggy nuclear detonation conducted without tribal consent 12 miles from the Jicarilla Apache Nation.
                  </li>
                  <li>
                    <strong>Heavy Metal Neurotoxicity:</strong> Abandoned uranium tailings, lead pipes in reservation schools, toxic runoff from artisanal gold mining (galamsey), and industrial chemical redlining.
                  </li>
                  <li>
                    <strong>Corporate Data Enclosure:</strong> Exploitation of Indigenous genetic sequences (such as high-altitude EPAS1 markers) and algorithmic enclosure of native languages by centralized Silicon Valley cloud providers.
                  </li>
                  <li>
                    <strong>Agricultural & Water Dispossession:</strong> Depletion and chemical contamination of sacred ancestral watersheds, replacing regenerative local heirloom crops with industrial monoculture.
                  </li>
                </ul>

                <p>
                  <strong>Why We Exist:</strong> We believe that true sovereignty requires technical, scientific, and nutritional sovereignty. Just as Po'pay sent runners with knotted cords to bypass the Spanish postal routes and coordinate an independent rebellion, ICEarth builds sovereign, open-source technology—air-gapped environmental sensors, peer-to-peer commodities exchanges (UCANX), and sovereign forensic laboratories—so that Indigenous nations can defend their people, their waters, and their future without asking for permission from the federal government or multinational corporations.
                </p>
              </div>

              {/* Quick Pillars Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
                  <Shield className="text-amber-500 mb-2" size={20} />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white mb-1">Environmental Forensics</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Applying Roulet's Law of Exposenomics to detect, quantify, and legally litigate heavy metal, chemical, and radioactive incursions.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
                  <Zap className="text-emerald-500 mb-2" size={20} />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white mb-1">Air-Gapped Sovereign IT</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    On-premise hardware, localized edge AI models, and post-quantum encryption owned exclusively by tribal authorities.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
                  <Globe className="text-indigo-500 mb-2" size={20} />
                  <h4 className="font-bold text-sm text-stone-900 dark:text-white mb-1">Global Tribal Alliance</h4>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    Uniting Rio Grande Pueblos and Apache nations with Indigenous relatives across the Americas, Africa, and the Pacific.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote Block from Dennis Zotigh */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-950/60 via-stone-900 to-amber-950/60 border border-amber-600/40 text-stone-200 shadow-md">
              <div className="flex items-start gap-4">
                <Award className="text-amber-400 shrink-0 mt-1" size={28} />
                <div className="space-y-2">
                  <p className="font-serif italic text-base sm:text-lg text-amber-100 leading-relaxed">
                    "The 1680 revolt is considered the most successful Native American uprising in North America and illustrates the complexity of historical colonialism, Indigenous resistance and cultural survival."
                  </p>
                  <div className="text-xs font-mono text-stone-400">
                    — <strong className="text-amber-400">Dennis W. Zotigh</strong>, Cultural Specialist & Writer at the Smithsonian National Museum of the American Indian (Kiowa / Ohkay Owingeh Pueblo / Isanti Dakota Indian)
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: WHY I MOVED TO TAOS (NORM ROULET STATEMENT) */}
        {activeSubTab === 'statement' && (
          <div className="space-y-8">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900/90 border-amber-900/40 text-stone-200' : 'bg-white border-amber-200 text-stone-800'} shadow-lg space-y-6`}>
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                <MapPin size={28} />
                <div>
                  <h2 className="text-2xl font-bold font-serif text-stone-900 dark:text-white">
                    Why I Moved to Taos, New Mexico to Found ICEarth
                  </h2>
                  <p className="text-xs font-mono text-stone-500 uppercase tracking-wider">
                    Personal Statement by Norm Roulet • Founder & Chief Exposenomics Researcher
                  </p>
                </div>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-stone-700 dark:text-stone-300">
                <p className="text-lg font-serif italic text-amber-900 dark:text-amber-200">
                  "When people ask me why I chose Taos, New Mexico to establish the headquarters and operational heart of Indigenous Communities Earth, I tell them the answer is written in the blood, the adobe walls, and the unyielding soil of this valley."
                </p>

                <p>
                  Taos is not just a breathtaking geographic sanctuary framed by the Sangre de Cristo Mountains and the Rio Grande Gorge. <strong>Taos Pueblo is the northernmost citadel of Indigenous survival in North America.</strong> For over a thousand years, the Red Willow people have continuously inhabited these multistoried adobe complexes, protecting Blue Lake and cultivating the sacred high-desert soil with unbroken ceremonies.
                </p>

                <p>
                  When Po'pay was released from the Spanish governor's prison in Santa Fe in 1675 after the public flogging and hanging of his fellow medicine men, he did not surrender, nor did he hide. <em>He sought refuge right here in Taos Pueblo.</em> 
                </p>

                <p>
                  It was here in Taos that Po'pay sat with the war chiefs, council leaders, and runners. It was here that they crafted the knotted deerskin cords. It was here that people who spoke different languages—Tiwa, Tewa, Towa, Keres, Zuni, and Hopi—put aside centuries of local rivalries to forge the only synchronized revolution that completely routed an imperial European empire from its continental capital.
                </p>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 space-y-2">
                  <h4 className="font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                    <Sparkles size={16} />
                    <span>The Contemporary Parallel: From Armed Conquest to Invisible Exposenomics</span>
                  </h4>
                  <p className="text-sm">
                    Today, the violence visited upon Indigenous people is no longer delivered by Spanish matchlocks and Franciscan whips. It is delivered through toxic dust, fracking chemicals injected into shale, lead-lined drinking water pipes, unmonitored radiation plumes, and the algorithmic theft of Indigenous data.
                  </p>
                </div>

                <p>
                  I moved to Taos because this is where the precedent was set: <strong>when Indigenous nations unite around shared intelligence and decentralized action, no colonial system can withstand them.</strong>
                </p>

                <p>
                  We are building ICEarth right here—in this sacred soil, under this high desert sun—for these Indigenous communities. We are giving them the scientific instruments, the air-gapped cryptographic computers, the soil testing protocols, and the sovereign commodity networks to ensure that their next thousand years will be governed by their own law, their own science, and their own children.
                </p>
              </div>

              {/* Navigation Jump */}
              <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-500 font-mono">
                  Location: Taos, New Mexico (Elevation: 6,969 ft • Lat: 36.4072° N, Long: 105.5734° W)
                </div>
                {onNavigateTab && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onNavigateTab('icetaos')}
                      className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <Compass size={14} />
                      <span>Explore ICETaos Community Hub</span>
                    </button>
                    <button
                      onClick={() => onNavigateTab('jicarilla_sovereign_it')}
                      className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <Feather size={14} />
                      <span>Explore ICE-Jicarilla</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SMITHSONIAN MONOGRAPH BY DENNIS ZOTIGH */}
        {activeSubTab === 'history' && (
          <div className="space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900/90 border-stone-800 text-stone-200' : 'bg-white border-stone-300 text-stone-800'} shadow-lg space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-4 space-y-2">
                <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                  Smithsonian Voices • National Museum of the American Indian
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 dark:text-white">
                  In 1680, Pueblo Natives in the Southwest Launched the First Successful, Although Short-Lived, American Revolution
                </h2>
                <h3 className="text-base text-stone-600 dark:text-stone-400 font-medium">
                  After enduring more than a century of suppression, the Indigenous tribes of modern-day New Mexico united to expel the Spanish colonists from their lands
                </h3>
                <div className="text-xs font-mono text-stone-500 pt-2">
                  By <span className="font-bold text-stone-800 dark:text-stone-200">Dennis Zotigh</span> • Published September 2, 2026 • Washington, D.C.
                </div>
              </div>

              {/* Monograph Full Text */}
              <div className="prose dark:prose-invert max-w-none text-base leading-relaxed space-y-4">
                <p>
                  Early humans inhabited what is now New Mexico for over 12,000 years, as evidenced by the man-made Clovis-point stone tools, arrow and spear heads unearthed from the Paleolithic period. Modern Pueblo people are believed to be descendants of the Anasazi (Navajo for "ancient enemies”), Hohokam and Mogollon cultures, and live in one of the oldest continually inhabited regions in North America. In prehistory, they lived in cliffside fortresses as well as communities on top of mesas and in the open desert in multistoried housing made of timber, clay, straw and stone. As many as 100 Pueblo villages spanned throughout what is now New Mexico, Arizona and Colorado.
                </p>

                <p>
                  In 1540, the first European expedition into present-day New Mexico was led by Francisco Vázquez de Coronado, who was motivated by stories of the legendary Seven Golden Cities of Cíbola. During his expedition, the Tiguex War was fought with some of the Tiwa Pueblos, which started the demise of Pueblo and Spanish relations. After two years of searching for the Golden Cities with no results, Coronado returned to New Spain (Mexico) without establishing permanent settlements.
                </p>

                <p>
                  In 1598 Juan de Oñate revisited the upper Rio Grande valley of what is now New Mexico, with 129 soldiers, 10 Catholic priests and colonizers, to begin the establishment of multiple Spanish settlements. During Oñate’s occupation, the new Spanish occupiers sought land, labor and food from their sophisticated agriculture and attempted to impose religious control over the Pueblo people who followed their traditional religious practices. Realizing that their way of life was being disrupted and overrun, small skirmishes of rebellion occurred from individual Pueblo villages.
                </p>

                <p>
                  In 1599, 70 Spanish soldiers were ordered to the clifftop village of Acoma Pueblo to punish the Pueblo inhabitants for killing 12 soldiers. After two days of battle, many Acoma were slain. In addition, approximately 600 Acoma were captured and enslaved. From these captives, 25 Acoma men were selected to have one foot cut off as punishment for crimes against the Spanish Crown. News of the Acoma Massacre spread throughout all the pueblos, instilling anger among villagers. In addition, Franciscan missionaries established Catholic churches in several of the Pueblo villages, Christianizing the Natives while abolishing their traditional worship practices under the protection of armed Spanish soldiers. From 1656 to 1665, Franciscan missionary leader Alonso de Posada forbid traditional ceremonies by the Pueblo people and ordered the Spanish missionaries to invade the sacred Pueblo kivas (dwellings of spiritual worship), burn their masks and confiscate or destroy their sacred objects.
                </p>

                <p>
                  Additional attempts of rebellion were met with severe reprisals targeting medicine men and spiritual leaders. In 1675 Juan Francisco Treviño, Spanish governor of Santa Fe de Nuevo México, ordered the arrest of 47 medicine men for practicing sorcery. Four were sentenced to death by hanging; in the end, three were hanged and one committed suicide. The remaining spiritual leaders were humiliated and publicly whipped before being sent to prison. When news reached the pueblo villages, they organized and traveled to Santa Fe to demand the release of the remaining prisoners. The Spanish complied. Among those released was a leader from Ohkay Owingeh, a Tewa language phrase meaning “Village of the Strong People.” His name was Po’pay.
                </p>

                <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800/80 border-l-4 border-amber-500 my-4 text-sm italic">
                  "Upon his release, Po’pay sought refuge in the northernmost Taos Pueblo and planned a united and synchronized revolt of Pueblo villages. The Towa, Tiwa, Tewa, Tano and Keres language-speaking pueblos, as well as Zuni, Hopi and even some Apache pledged their support."
                </div>

                <p>
                  Integral to the revolt, Po’pay sent runners carrying knotted ropes to the distant villages. A knot was unraveled each day until all the knots were gone, to synchronize the revolt. The day all the knots were untied signaled the time to begin the revolt, which was set for August 11, 1680. On the morning of August 8, Pedro Omtua and Nicolas Catua, two young runners from Tesuque Pueblo, meaning “village of the narrow place of the cottonwood trees” in the Tewa language, set out for Tanogeh (Tano villages) with the ropes. The first pueblo they reached was Pecos. Upon their departure from Pecos, Christian Indians informed Franciscan missionary leader Fernando De Velasco that two Tewa messengers had visited the war chief’s house.
                </p>

                <p>
                  On August 9, the Spanish captured Pedro Omtua and Nicolas Catua and tortured them to make them reveal the significance of the knotted cord. Learning of their capture, Po’pay ordered the revolt to begin a day early. The Hopi villages located in what is now Arizona did not receive the advance notice. On August 10, the Ohkay Owingeh began their revolution by attacking Spanish settlements. When they were finished, approximately 400 people were killed, including 21 of the 33 Spanish priests in Nuevo México. Tusayan (Hopi) Christian churches at Oraibi, Awatovi and Shungopavi were also obliterated and their priests were killed. The surviving Spanish immediately sought refuge in Santa Fe and in Isleta Pueblo, a village that did not participate in the revolt, located south of present-day Albuquerque.
                </p>

                <p>
                  By August 13, almost all the Spanish settlements in Nuevo México had been destroyed. Santa Fe was surrounded by Pueblo warriors who cut off its water supply. In desperation, on August 21, Governor Antonio de Otermín, who had been barricaded in Santa Fe’s Palace of the Governors, gathered the remaining Spanish to force the Pueblo warriors to momentarily retreat and give them time to escape. The remaining 2,000 settlers fled south to El Paso del Norte, present day El Paso, Texas.
                </p>

                <p>
                  After the expulsion of the Spanish, their churches were destroyed and the traditional religious practices of the Pueblo people were restored. The Pueblo Revolt effectively ended Spanish rule in the region for 12 years. Upon their return, the Spanish adopted more accommodating policies toward Pueblo customs. Today, most Pueblo feast days include a combination of Pueblo and Spanish customs, such as receiving a blessing by the Catholic priest before beginning a traditional Pueblo dance. The 1680 revolt is considered the most successful Native American uprising in North America and illustrates the complexity of historical colonialism, Indigenous resistance and cultural survival.
                </p>
              </div>

              {/* Author Bio Footer */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-300 dark:border-stone-800 text-xs text-stone-600 dark:text-stone-400 space-y-1">
                <div className="font-bold text-stone-900 dark:text-stone-200">
                  About the Author:
                </div>
                <p>
                  Dennis W. Zotigh (Kiowa/Ohkay Owingeh Pueblo/Isanti Dakota Indian) is a member of the Kiowa Gourd Clan and San Juan Pueblo Winter Clan and a descendant of Sitting Bear and No Retreat, both principal war chiefs of the Kiowas. Dennis works as a writer and cultural specialist at the Smithsonian's National Museum of the American Indian in Washington, D.C.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TIMELINE & CHRONOLOGY */}
        {activeSubTab === 'timeline' && (
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 dark:text-white">
                Chronology of Resistance: 12,000 BCE to 1680 CE
              </h2>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                From Paleolithic Roots to the Complete Expulsion of Colonial Rule
              </p>
            </div>

            <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-32 space-y-8 pb-4">
              {timelineEvents.map((evt, idx) => (
                <div key={idx} className="relative pl-6 sm:pl-8 group">
                  {/* Timeline Badge */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-2 border-stone-900 group-hover:scale-125 transition-transform" />
                  
                  {/* Year Tag on Left (for larger screens) */}
                  <div className="hidden sm:block absolute -left-36 top-1 w-28 text-right font-mono text-xs font-bold text-amber-600 dark:text-amber-400">
                    {evt.year}
                  </div>

                  <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-900/80 border-stone-800' : 'bg-white border-stone-200'} shadow-md space-y-2 hover:border-amber-500/50 transition-colors`}>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="sm:hidden text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                        {evt.year}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                        {evt.era}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-stone-900 dark:text-white font-serif">
                      {evt.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {evt.desc}
                    </p>

                    <div className="text-xs font-mono text-amber-700 dark:text-amber-400 pt-2 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-1.5">
                      <Shield size={13} className="shrink-0" />
                      <span>{evt.significance}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: FIVE SOVEREIGN PILLARS */}
        {activeSubTab === 'pillars' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 dark:text-white">
                The Five Sovereign Pillars of Indigenous Communities Earth
              </h2>
              <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">
                Operational Framework for 21st-Century Tribal Self-Determination
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Pillar Selector List */}
              <div className="lg:col-span-4 space-y-2">
                {sovereignPillars.map((p) => {
                  const Icon = p.icon;
                  const isSel = selectedPillarId === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPillarId(p.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isSel
                          ? 'bg-amber-600 text-white border-amber-600 shadow-md font-bold'
                          : siteTheme === 'dark'
                            ? 'bg-stone-900 border-stone-800 text-stone-300 hover:bg-stone-800'
                            : 'bg-white border-stone-200 text-stone-700 hover:bg-stone-50'
                      }`}
                    >
                      <Icon size={20} className={isSel ? 'text-white shrink-0' : 'text-amber-500 shrink-0'} />
                      <div className="space-y-1">
                        <div className="text-sm font-semibold">{p.title}</div>
                        <div className={`text-[11px] line-clamp-1 ${isSel ? 'text-amber-100' : 'text-stone-500'}`}>
                          {p.tagline}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Pillar Detailed View */}
              <div className="lg:col-span-8">
                {(() => {
                  const pillar = sovereignPillars.find((p) => p.id === selectedPillarId) || sovereignPillars[0];
                  const Icon = pillar.icon;
                  return (
                    <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800 text-stone-200' : 'bg-white border-stone-200 text-stone-800'} shadow-lg space-y-6`}>
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded-xl bg-amber-500/20 text-amber-500 border border-amber-500/30">
                          <Icon size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-white">
                            {pillar.title}
                          </h3>
                          <p className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">
                            {pillar.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="text-base sm:text-lg leading-relaxed text-stone-700 dark:text-stone-300 space-y-4">
                        <p>{pillar.body}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-stone-500">
                          Practical Implementation in Indigenous Communities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-stone-700 dark:text-stone-300">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>Zero Corporate Cloud Ingestion</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>Field Forensic Testing Kits</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>Post-Quantum Encrypted Archives</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                            <span>Direct UCANX Peer Commodities</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

      </div>

      {/* ARTWORK INSPECTION MODAL */}
      {showArtModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto">
          <div className="relative max-w-5xl w-full rounded-2xl bg-stone-950 border-2 border-amber-500/50 shadow-2xl overflow-hidden my-8">
            <div className="flex items-center justify-between p-4 border-b border-stone-800 bg-stone-900/90 text-stone-200">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Feather size={16} />
                <span className="font-bold uppercase tracking-wider">Plate #37 • 1680 Pueblo Revolt & Sovereign Mission</span>
              </div>
              <button
                onClick={() => setShowArtModal(false)}
                className="p-1 rounded-md text-stone-400 hover:text-white hover:bg-stone-800 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-4">
              <div className="rounded-xl overflow-hidden border border-stone-800 bg-black flex items-center justify-center">
                <img
                  src={puebloRevoltTaosImg}
                  alt="Full resolution 1680 Pueblo Revolt & Taos Rebellion Infographic Plate"
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono text-stone-300">
                <div className="space-y-1 p-3 rounded-lg bg-stone-900/70 border border-stone-800">
                  <div className="text-amber-400 font-bold">HISTORICAL PROVENANCE:</div>
                  <div>Source: Smithsonian Voices / NMAI (Sep 2, 2026)</div>
                  <div>Curator: Dennis W. Zotigh (Kiowa/Ohkay Owingeh/Isanti Dakota)</div>
                  <div>Sanctuary: Taos Pueblo, New Mexico</div>
                </div>

                <div className="space-y-1 p-3 rounded-lg bg-stone-900/70 border border-stone-800">
                  <div className="text-amber-400 font-bold">SOVEREIGN VAULT PROOF:</div>
                  <div className="truncate">Hash: {vaultHash}</div>
                  <div>Gallery Archive ID: PHOTO-000AS / IP-000AS</div>
                  <div>Network: Indigenous Communities Earth (ICEarth)</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  onClick={() => copyToClipboard(vaultHash)}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-950" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied!' : 'Copy Sovereign Vault Hash'}</span>
                </button>

                <div className="flex items-center gap-2">
                  {onNavigateTab && (
                    <button
                      onClick={() => {
                        setShowArtModal(false);
                        onNavigateTab('icetaos');
                      }}
                      className="px-3.5 py-2 rounded-lg bg-teal-800 hover:bg-teal-700 text-white font-semibold text-xs transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <Compass size={14} />
                      <span>Go to ICETaos</span>
                    </button>
                  )}
                  <button
                    onClick={() => setShowArtModal(false)}
                    className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold cursor-pointer"
                  >
                    Close Viewer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
