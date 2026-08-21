import React, { useState } from 'react';
import {
  Users,
  Search,
  UserCheck,
  Shield,
  Sparkles,
  ArrowRight,
  Globe,
  Lock,
  Compass,
  Cpu,
  Layers,
  ExternalLink,
  PlusCircle,
  GraduationCap,
  Sprout,
  Zap,
  CheckCircle2,
  Bot,
  MessageSquare,
  Key,
  Database,
  Tag
} from 'lucide-react';

interface MemberMatrixProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface MemberRecord {
  id: string;
  name: string;
  userRole: string;
  title: string;
  location: string;
  type: 'Founder' | 'Member' | 'AI Agent' | 'Community Circle' | 'Project';
  avatarInitials: string;
  avatarColor: string;
  description: string;
  projects: { name: string; tab: string }[];
  vaultHash: string;
  featured?: boolean;
  navTab?: string;
  navLabel?: string;
  badgeText: string;
  tags: string[];
}

export const MemberMatrix: React.FC<MemberMatrixProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Founder' | 'Member' | 'AI Agent' | 'Community Circle' | 'Project'>('All');
  
  // Interactive Modal for New Member Joining / Community Building
  const [showJoinModal, setShowJoinModal] = useState(false);
  const [showAiBuilderModal, setShowAiBuilderModal] = useState(false);
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiOutput, setAiOutput] = useState<string | null>(null);

  // Directory Members List
  const membersList: MemberRecord[] = [
    {
      id: 'USER-001',
      name: 'Norm Roulet',
      userRole: 'User #1 (Site Creator & Platform Founder)',
      title: 'Sole Practitioner of Exposenomics • Infomediation Pioneer',
      location: 'Taos, NM / Neuchâtel, Switzerland',
      type: 'Founder',
      avatarInitials: 'NR',
      avatarColor: 'bg-amber-600 text-white',
      description: 'Creator of Information Community Earth (2001). Owns private encrypted User #1 vault holding Swiss School of Exposenomics, UCANX Commodities, NanoSpire, and Roulet Law IP.',
      projects: [
        { name: 'Swiss School of Exposenomics', tab: 'swiss_school' },
        { name: 'UCANX Commodities Exchange', tab: 'ucanx' },
        { name: 'NanoSpire NanoCanX', tab: 'nanospire_nanocanx' },
        { name: 'Taos Kush Institute', tab: 'ucanx' }
      ],
      vaultHash: '0xUSER_001_NORM_ROULET_VAULT',
      featured: true,
      navTab: 'norm_roulet',
      navLabel: 'Visit Norm Roulet Home Page',
      badgeText: 'User #1 Owner',
      tags: ['Exposenomics', 'Infomediation', 'Swiss School', 'Roulet Law', 'UCANX', 'NanoSpire']
    },
    {
      id: 'USER-002',
      name: 'Ouray Muskrat',
      userRole: 'User #2 (Featured Indigenous Producer)',
      title: 'Master Phytoremediator & Soil Restoration Specialist',
      location: 'Taos Pueblo & Four Corners Basin',
      type: 'Member',
      avatarInitials: 'OM',
      avatarColor: 'bg-emerald-600 text-white',
      description: 'Indigenous community leader pioneering botanical soil heavy metal extraction, hemp biopolymers, watershed protection, and Indigenous hybrid IT data sovereignty across Four Corners.',
      projects: [
        { name: 'Jicarilla Sovereign IT Architecture', tab: 'jicarilla_sovereign_it' },
        { name: 'Agua Das Hydro-Remediation', tab: 'manuscript' },
        { name: 'Indigenous Hemp Guild', tab: 'indigenous' },
        { name: 'Four Corners Basin Trust', tab: 'sovereign_portal' }
      ],
      vaultHash: '0xUSER_002_OURAY_MUSKRAT_VAULT',
      featured: true,
      navTab: 'jicarilla_sovereign_it',
      navLabel: 'View Jicarilla Sovereign IT Blueprint',
      badgeText: 'User #2 Member',
      tags: ['Indigenous', 'JicarillaApache', 'DataSovereignty', 'Phytoremediation', 'Four Corners', 'Agua Das', 'AirGappedAI']
    },
    {
      id: 'AI-AGENT-001',
      name: 'ICEarth AI Community Concierge',
      userRole: 'Autonomous AI Navigator & Vault Captain',
      title: 'Generative AI Community Builder & Infomediation Concierge',
      location: 'ICEarth Distributed Network',
      type: 'AI Agent',
      avatarInitials: 'AI',
      avatarColor: 'bg-indigo-600 text-white',
      description: 'Intelligent agent assisting members to deploy custom project vaults, synthesize research newsfeeds, automate ZK-proofs, and federate services.',
      projects: [
        { name: 'Community Builder Engine', tab: 'chat' },
        { name: 'ZK-Proof Validator', tab: 'proofs' },
        { name: 'Federated Newsfeed Curation', tab: 'chat' }
      ],
      vaultHash: '0xICEARTH_AUTONOMOUS_AI_CONCIERGE',
      featured: true,
      navTab: 'chat',
      navLabel: 'Engage AI Community Concierge',
      badgeText: 'AI Agent',
      tags: ['AI Concierge', 'Community Navigator', 'ZK-Proofs', 'Vault Creation']
    },
    {
      id: 'COMM-001',
      name: 'Taos Kush Institute Member Circle',
      userRole: 'Purposive Agricultural Community',
      title: 'High-Altitude Botanical Research & Phytoremediation Guild',
      location: 'Taos Mesa, New Mexico (7,000 ft)',
      type: 'Community Circle',
      avatarInitials: 'TK',
      avatarColor: 'bg-amber-700 text-white',
      description: 'Regional network of 14 growers, geneticists, and environmental researchers producing sub-50nm botanical inputs and soil restoration models.',
      projects: [
        { name: 'TKI Research Hub', tab: 'ucanx' },
        { name: 'GIS Toxicity Mapping', tab: 'profiler' }
      ],
      vaultHash: '0xCOMMUNITY_TAOS_KUSH_INSTITUTE',
      navTab: 'ucanx',
      navLabel: 'Explore TKI Community Hub',
      badgeText: '14 Active Members',
      tags: ['Botanicals', 'Taos NM', 'Phytoremediation', 'GIS Mapping']
    },
    {
      id: 'COMM-002',
      name: 'Swiss School of Exposenomics Guild',
      userRole: 'Academic & Research Organization',
      title: 'Genome x Biome x Exposome Economic Analysts',
      location: 'Neuchâtel, Switzerland & Global',
      type: 'Community Circle',
      avatarInitials: 'SS',
      avatarColor: 'bg-red-700 text-white',
      description: 'International syndicate of environmental economists, epidemiologists, and legal scholars deploying the Human Equation.',
      projects: [
        { name: 'Exposenomics Repository', tab: 'swiss_school' },
        { name: 'Agent-Based Exposure Modeling', tab: 'abm_simulator' },
        { name: "Roulet's Law Legal Proofs", tab: 'litigation' }
      ],
      vaultHash: '0xGUILD_SWISS_EXPOSENOMICS',
      navTab: 'swiss_school',
      navLabel: 'Explore Swiss Vault',
      badgeText: 'Research Guild',
      tags: ['Exposenomics', 'Swiss Vault', 'Human Equation', 'Legal Tort']
    },
    {
      id: 'SERV-ABM-001',
      name: 'Agent-Based Modelling (ABM) Exposenomics Engine',
      userRole: 'Sovereign Core Computing Service',
      title: 'Dynamic Spatio-Temporal Population & Trajectory Exposure Service',
      location: 'Swiss TPH / ICEarth Distributed Nodes',
      type: 'Project',
      avatarInitials: 'ABM',
      avatarColor: 'bg-indigo-700 text-white',
      description: 'Decentralized multi-agent simulation mapping personal time-activity patterns, commute trajectories, and micro-environmental toxicant burdens to eliminate static address misclassification.',
      projects: [
        { name: 'Live Multi-Agent Canvas Simulator', tab: 'abm_simulator' },
        { name: 'Personal Microenvironment Trajectory', tab: 'abm_simulator' },
        { name: 'MATSim & EXPANSE Benchmarking', tab: 'benchmarking' }
      ],
      vaultHash: '0xSERVICE_AGENT_BASED_MODELLING_EXPOSENOMICS',
      navTab: 'abm_simulator',
      navLabel: 'Launch ABM Exposenomics Engine',
      badgeText: 'Core AI Service',
      tags: ['Agent-Based Modelling', 'ABM', 'MATSim', 'Mobility', 'Swiss TPH', 'Microenvironments']
    },
    {
      id: 'PROJ-001',
      name: 'UCANX Commodities Trading Network',
      userRole: 'Federated Commercial Platform',
      title: 'Cannabis, Hemp Bast & Carbon Credit Exchange',
      location: 'Global Digital Exchange',
      type: 'Project',
      avatarInitials: 'UC',
      avatarColor: 'bg-cyan-700 text-white',
      description: 'Standardized commodity contract engine for nano-emulsions, industrial biopolymers, and verifiable carbon remediation credits.',
      projects: [
        { name: 'Commodities Exchange Floor', tab: 'ucanx' },
        { name: 'NanoCanX High-Shear Licensing', tab: 'nanospire_nanocanx' }
      ],
      vaultHash: '0xPROJECT_UCANX_COMMODITIES',
      navTab: 'ucanx',
      navLabel: 'Open UCANX Floor',
      badgeText: 'Federated Market',
      tags: ['UCANX', 'Commodities', 'Nano-Emulsions', 'Carbon Credits']
    }
  ];

  // Filtering Logic
  const filteredMembers = membersList.filter(item => {
    const matchesFilter = selectedFilter === 'All' || item.type === selectedFilter;
    const matchesSearch = searchQuery === '' ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const handleAiPromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;
    setAiOutput(`🤖 ICEarth AI Concierge Analyzing: "${aiPrompt}"...\n\nI have generated a sovereign project vault configuration tailored to your request. \n\n• Designated Community Name: ${aiPrompt.slice(0, 30)} Community Guild\n• Suggested Infrastructure: Private Encrypted Vault + ZK-Proof Brokerage\n• Federated Services: Newsfeed syndication, member directory indexing, and UCANX commodity exchange mapping.\n\nClick below to connect with the full AI Chat Assistant to complete setup!`);
  };

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'}`}>
      
      {/* MEMBER MATRIX HERO HEADER */}
      <section className={`border-b relative overflow-hidden ${
        isLight ? 'bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white border-amber-900/40' : 'bg-stone-950 text-stone-100 border-stone-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <span className="px-3 py-1 bg-amber-500 text-stone-950 font-bold rounded-md uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Users size={14} />
                <span>Member Matrix</span>
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-stone-300 rounded-md border border-stone-700 font-bold">
                One ICEarth Home For All
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 rounded border border-indigo-500/30 font-bold flex items-center gap-1.5">
                <Bot size={14} className="text-indigo-400" />
                <span>AI Navigator & Concierge Active</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                ICEarth Member Matrix
              </h1>

              <p className="text-base sm:text-lg text-stone-300 font-serif leading-relaxed">
                The universal directory connecting sovereign members, AI autonomous agents, purposive projects, and indigenous communities across <strong className="text-amber-400">Information Community Earth</strong>. Every member owns their private vault while federating services to build thriving communities.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowJoinModal(true)}
                  className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <PlusCircle size={16} />
                  <span>Join ICEarth & Claim Member Entry</span>
                </button>

                <button
                  onClick={() => setShowAiBuilderModal(true)}
                  className="px-5 py-3 bg-indigo-900/80 hover:bg-indigo-800 text-indigo-100 border border-indigo-700 font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center gap-2"
                >
                  <Sparkles size={16} className="text-indigo-400" />
                  <span>Build Community with AI Navigator</span>
                </button>
              </div>
            </div>

            {/* AI Community Concierge Quick Card */}
            <div className="lg:col-span-4 p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Bot size={20} className="text-indigo-400" />
                  <h3 className="font-bold text-sm font-serif text-white">AI Community Concierge</h3>
                </div>
                <span className="px-1.5 py-0.5 bg-indigo-500/20 text-indigo-300 text-[9px] font-mono font-bold rounded border border-indigo-500/30">
                  Online
                </span>
              </div>

              <p className="text-xs text-stone-300 font-sans leading-relaxed">
                "Tell me what community, service, or research guild you want to create. I will configure your vault, generate your newsfeed, and index your Member Matrix entry."
              </p>

              <form onSubmit={handleAiPromptSubmit} className="space-y-2">
                <input
                  type="text"
                  placeholder="e.g., Build a soil remediation collective in Ohio..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-indigo-500 font-mono"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Sparkles size={14} />
                  <span>Prompt AI Navigator</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>

      {/* SEARCH, FILTER & MEMBER MATRIX DIRECTORY GRID */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Search & Filter Controls */}
        <div className={`p-4 rounded-2xl border space-y-4 shadow-sm ${
          isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                placeholder="Search member names, titles, tags, location, or vault hash..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs font-mono border focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                  isLight ? 'bg-stone-50 border-stone-200 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-100'
                }`}
              />
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none text-xs font-mono">
              {(['All', 'Founder', 'Member', 'AI Agent', 'Community Circle', 'Project'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3 py-2 rounded-xl font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedFilter === filter
                      ? 'bg-amber-500 text-stone-950 shadow-sm'
                      : isLight ? 'bg-stone-100 text-stone-700 hover:bg-stone-200' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* DEMO NAVIGATION CALLOUT FOR NORM ROULET (USER #1) */}
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-amber-500 text-stone-950 rounded-xl font-bold">
              💡 Demo Navigation
            </span>
            <div>
              <span className="font-bold text-amber-900 dark:text-amber-300 block">
                User #1 Norm Roulet Home Navigation Demo
              </span>
              <span className="text-stone-600 dark:text-stone-400 text-[11px]">
                Click on Norm Roulet's entry below or the button to visit his dedicated ICEarth Home page.
              </span>
            </div>
          </div>

          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab('norm_roulet')}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <span>Visit Norm Roulet Home</span>
              <ArrowRight size={14} />
            </button>
          )}
        </div>

        {/* MEMBER MATRIX CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className={`p-6 rounded-2xl border flex flex-col justify-between space-y-5 transition-all hover:shadow-xl ${
                member.featured
                  ? isLight ? 'bg-amber-50/40 border-amber-300 ring-1 ring-amber-400/50' : 'bg-amber-950/20 border-amber-800/60 ring-1 ring-amber-500/30'
                  : isLight ? 'bg-white border-stone-200 hover:border-amber-400' : 'bg-stone-900 border-stone-800 hover:border-amber-500/50'
              }`}
            >
              
              {/* Header Info */}
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-2xl ${member.avatarColor} font-serif font-bold text-base flex items-center justify-center shadow-md shrink-0`}>
                      {member.avatarInitials}
                    </div>

                    <div>
                      <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100 leading-snug">
                        {member.name}
                      </h3>
                      <span className="text-[10px] font-mono text-stone-400 block mt-0.5">
                        📍 {member.location}
                      </span>
                    </div>
                  </div>

                  <span className="px-2 py-0.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-mono font-bold rounded border border-amber-500/20 whitespace-nowrap">
                    {member.badgeText}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 block mb-1">
                    {member.title}
                  </span>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {member.description}
                  </p>
                </div>

                {/* Associated Projects & Communities */}
                <div className="space-y-1.5 pt-2 border-t border-stone-100 dark:border-stone-800">
                  <span className="text-[10px] font-mono text-stone-400 uppercase font-bold tracking-wider block">
                    Connected Communities & Projects:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {member.projects.map((proj, idx) => (
                      <button
                        key={idx}
                        onClick={() => onNavigateTab && onNavigateTab(proj.tab)}
                        className="px-2 py-1 bg-stone-100 dark:bg-stone-800 hover:bg-amber-500/20 text-stone-700 dark:text-stone-300 text-[10px] font-mono rounded border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <span>{proj.name}</span>
                        <ArrowRight size={10} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 text-[10px] font-mono text-stone-400">
                  {member.tags.map((t, idx) => (
                    <span key={idx} className="mr-1">#{t}</span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs font-mono">
                <span className="text-[10px] text-stone-400 truncate max-w-[140px]">
                  {member.vaultHash}
                </span>

                {member.navTab && onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab(member.navTab!)}
                    className="px-3 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-[11px] rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <span>{member.navLabel || 'Open Member Page'}</span>
                    <ArrowRight size={14} />
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </main>

      {/* JOIN ICEARTH MEMBER MATRIX MODAL */}
      {showJoinModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-md rounded-3xl border p-6 space-y-5 ${
            isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Users size={18} className="text-amber-500" />
                <h3 className="font-serif font-bold text-lg">Join ICEarth Member Matrix</h3>
              </div>
              <button
                onClick={() => setShowJoinModal(false)}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
              Create your sovereign profile, initialize your private encrypted vault, and publish your entry on the Member Matrix directory.
            </p>

            <div className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Full Member Name or Alias</label>
                <input
                  type="text"
                  placeholder="e.g., Sovereign Member #3"
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Primary Purposive Focus or Industry</label>
                <input
                  type="text"
                  placeholder="e.g., Water Remediation, Botanical Research, Energy"
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] text-stone-400 mb-1">Geographic Location / Basin</label>
                <input
                  type="text"
                  placeholder="e.g., Great Lakes, Taos NM, Europe"
                  className="w-full px-3 py-2 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none"
                />
              </div>
            </div>

            <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl text-[11px] font-mono text-amber-800 dark:text-amber-300">
              🔒 Encrypted Vault Creation: Your profile remains under your total control via Infomediation principles.
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setShowJoinModal(false)}
                className="px-4 py-2 text-xs font-mono text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setShowJoinModal(false);
                  if (onNavigateTab) onNavigateTab('sovereign_portal');
                }}
                className="px-4 py-2 bg-amber-500 text-stone-950 font-mono text-xs font-bold rounded-xl"
              >
                Initialize Profile & Vault
              </button>
            </div>
          </div>
        </div>
      )}

      {/* AI COMMUNITY BUILDER MODAL */}
      {showAiBuilderModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`w-full max-w-lg rounded-3xl border p-6 space-y-5 ${
            isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-stone-100'
          }`}>
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-indigo-400" />
                <h3 className="font-serif font-bold text-lg">AI Community Navigator & Concierge</h3>
              </div>
              <button
                onClick={() => {
                  setShowAiBuilderModal(false);
                  setAiOutput(null);
                }}
                className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
              Leverage artificial intelligence to synthesize research, organize community groups, automate newsfeeds, and establish your ICEarth footprint.
            </p>

            <form onSubmit={handleAiPromptSubmit} className="space-y-3 font-mono text-xs">
              <textarea
                rows={3}
                placeholder="Describe what community or service you want AI to help you build..."
                value={aiPrompt}
                onChange={(e) => setAiPrompt(e.target.value)}
                className="w-full p-3 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Sparkles size={14} />
                <span>Generate Vault & Community Structure</span>
              </button>
            </form>

            {aiOutput && (
              <div className="p-4 bg-stone-950 text-stone-200 font-mono text-xs rounded-2xl border border-stone-800 whitespace-pre-wrap leading-relaxed space-y-3">
                <p>{aiOutput}</p>
                <button
                  onClick={() => {
                    setShowAiBuilderModal(false);
                    if (onNavigateTab) onNavigateTab('chat');
                  }}
                  className="w-full py-2 bg-indigo-500 text-white font-bold rounded-xl flex items-center justify-center gap-1.5"
                >
                  <span>Continue in AI Assistant Chat</span>
                  <MessageSquare size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};
