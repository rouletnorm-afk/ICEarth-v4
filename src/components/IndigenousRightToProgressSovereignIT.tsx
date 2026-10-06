import React, { useState } from 'react';
import {
  Sparkles,
  Zap,
  Globe,
  Award,
  Users,
  Cpu,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  X,
  FileText,
  Clock,
  Layers,
  ArrowRight,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Radio,
  Sliders,
  Scale,
  Atom,
  Lock,
  ChevronRight,
  Building2,
  TrendingUp,
  Droplets,
  Server,
  DollarSign
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import indigenousProgressPlateImg from '../assets/images/indigenous_right_to_progress_sovereign_it_1791305740915.jpg';

interface IndigenousRightToProgressSovereignITProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const IndigenousRightToProgressSovereignIT: React.FC<IndigenousRightToProgressSovereignITProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'conversation_study' | 'nm_tribal_energy' | 'high_tech_sovereign' | 'comparison_matrix' | 'simulator'>('conversation_study');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Interactive Negotiator State: Community Self-Determination Index (CSDI)
  const [tribalEquityShare, setTribalEquityShare] = useState(51);
  const [localInfrastructureReinvest, setLocalInfrastructureReinvest] = useState(40);
  const [waterAirPreservationMandate, setWaterAirPreservationMandate] = useState(90);
  const [sovereignGovernanceVeto, setSovereignGovernanceVeto] = useState(95);

  const vaultHash = '0xINDIGENOUS_RIGHT_TO_PROGRESS_SOVEREIGN_IT_PLATE_69_VAULT_2026';

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Comparative Data: Extractive Corporate Model vs. ICEarth Sovereign Terms
  const economicModelComparison = [
    { metric: 'Local Equity Ownership', extractiveCorporate: 8, sovereignTerms: 55 },
    { metric: 'Community Infrastructure Funding', extractiveCorporate: 15, sovereignTerms: 45 },
    { metric: 'Water & Aquifer Protection', extractiveCorporate: 30, sovereignTerms: 95 },
    { metric: 'Tribal Governance Veto Power', extractiveCorporate: 12, sovereignTerms: 100 },
    { metric: 'Local High-Tech Job Retainment', extractiveCorporate: 10, sovereignTerms: 65 },
    { metric: 'Cultural & Heraldic Protection', extractiveCorporate: 5, sovereignTerms: 100 }
  ];

  // New Mexico State & Tribal Energy Revenue Matrix (Illustrative Historic vs. Modern Transition)
  const revenueTransitionData = [
    { year: '2020', oilGasRoyaltyShare: 35, renewableEnergyShare: 8, sovereignDataCompute: 2 },
    { year: '2022', oilGasRoyaltyShare: 42, renewableEnergyShare: 14, sovereignDataCompute: 6 },
    { year: '2024', oilGasRoyaltyShare: 38, renewableEnergyShare: 22, sovereignDataCompute: 16 },
    { year: '2026', oilGasRoyaltyShare: 32, renewableEnergyShare: 31, sovereignDataCompute: 30 },
    { year: '2028', oilGasRoyaltyShare: 24, renewableEnergyShare: 40, sovereignDataCompute: 48 },
    { year: '2030', oilGasRoyaltyShare: 15, renewableEnergyShare: 48, sovereignDataCompute: 62 }
  ];

  // Calculate dynamic Community Self-Determination Index (CSDI)
  const calculatedCSDI = Math.round(
    tribalEquityShare * 0.3 +
    localInfrastructureReinvest * 0.25 +
    waterAirPreservationMandate * 0.25 +
    sovereignGovernanceVeto * 0.2
  );

  return (
    <div className="w-full min-h-screen bg-stone-900 text-stone-100 p-4 md:p-8 font-sans selection:bg-amber-500 selection:text-black">
      {/* HEADER BANNER */}
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="border border-amber-500/30 bg-gradient-to-r from-stone-950 via-stone-900 to-amber-950/40 p-6 md:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded-full text-[11px] font-mono font-black tracking-widest uppercase">
                  PLATE #69 • INDIGENOUS SOVEREIGNTY & ENERGY-TECH DYNAMICS
                </span>
                <span className="px-2.5 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 rounded-full text-[11px] font-mono font-bold flex items-center gap-1">
                  <Globe size={12} />
                  THE CONVERSATION STUDY
                </span>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full text-[11px] font-mono font-bold flex items-center gap-1">
                  <Award size={12} />
                  NEW MEXICO TRIBAL ECONOMIES
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-300 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-colors border border-stone-700 cursor-pointer"
                  title="Copy Cryptographic Vault Hash"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  <span>{copiedHash ? 'HASH COPIED' : '0xINDIGENOUS...2026'}</span>
                </button>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-3 py-1 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-lg text-xs font-mono font-black flex items-center gap-1.5 transition-colors shadow-md cursor-pointer"
                >
                  <Maximize2 size={12} />
                  <span>VIEW PLATE #69</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white flex flex-wrap items-center gap-3">
                <span>“Indigenous People Have the Right to Progress Too”</span>
                <span className="text-amber-400 text-xl md:text-2xl font-light">|</span>
                <span className="text-stone-300 text-lg md:text-2xl font-semibold">High Tech, Energy Economies & Cultural Sovereignty on Indigenous Terms</span>
              </h1>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-5xl">
                A seminal anthropological investigation published in <em>The Conversation</em> explores why Indigenous communities often accept extraction in their territories:
                confronted with acute infrastructure deficits, residents demand basic services, sanitation, electricity, and economic mobility.
                As one resident poignantly summarized: <strong>“Indigenous people have the right to progress too.”</strong>
                In New Mexico and across the Americas, tribal energy economies and their engagement with hyperscale data centers follow this identical human imperative:
                Indigenous nations want advanced technology, compute, and energy—<strong>but on their own sovereign terms</strong>.
              </p>
            </div>

            {/* SOURCE CALLOUT LINK */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://theconversation.com/why-some-indigenous-communities-dont-resist-oil-extraction-in-their-territories-258837"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-stone-950 font-mono font-black text-xs rounded-xl shadow-lg border border-amber-400 transition-all cursor-pointer"
              >
                <FileText size={14} />
                <span>Read Full Study in The Conversation: Why Some Indigenous Communities Don’t Resist Oil Extraction</span>
                <ExternalLink size={13} />
              </a>

              <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
                <span>The Conversation Academic Archive</span>
                <span>•</span>
                <span>Anthropological Fieldwork</span>
                <span>•</span>
                <span>Forensic Exposenomics Synthesis by Norman Roulet</span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-4 bg-stone-950/80 border border-amber-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">NM State Energy Reliance</div>
            <div className="text-2xl font-black text-white">~35–42%</div>
            <div className="text-[11px] text-stone-400">Of general fund revenues derived from oil & gas royalties</div>
          </div>

          <div className="p-4 bg-stone-950/80 border border-cyan-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">Tribal IT & Tech Demand</div>
            <div className="text-2xl font-black text-cyan-300">100% Equal</div>
            <div className="text-[11px] text-stone-400">Demand for high-speed fiber, microgrids & advanced AI</div>
          </div>

          <div className="p-4 bg-stone-950/80 border border-emerald-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">The Asymmetric Dilemma</div>
            <div className="text-2xl font-black text-emerald-300">Basic Needs</div>
            <div className="text-[11px] text-stone-400">Sanitation, clean water & electricity vs. environmental harm</div>
          </div>

          <div className="p-4 bg-stone-950/80 border border-purple-500/20 rounded-xl space-y-1 shadow-md">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-purple-400">The ICEarth Solution</div>
            <div className="text-2xl font-black text-purple-300">Sovereign Terms</div>
            <div className="text-[11px] text-stone-400">Local compute, zero water theft & tribal governance vetoes</div>
          </div>
        </div>

        {/* SUBTAB NAVIGATION */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-3">
          {[
            { id: 'conversation_study', label: '1. The Conversation Study (The Dilemma)', icon: Globe, badge: 'Fieldwork' },
            { id: 'nm_tribal_energy', label: '2. New Mexico & Tribal Energy Economies', icon: Flame, badge: 'State & Tribes' },
            { id: 'high_tech_sovereign', label: '3. High Tech on Sovereign Terms', icon: Cpu, badge: 'ICEarth Stack' },
            { id: 'comparison_matrix', label: '4. Extractive Model vs. Sovereign Compact', icon: Scale, badge: 'Matrix' },
            { id: 'simulator', label: '5. Self-Determination Negotiator (CSDI)', icon: Sliders, badge: 'Simulator' }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 text-stone-950 border-amber-300 shadow-lg ring-1 ring-amber-400/50'
                    : 'bg-stone-950/60 text-stone-400 border-stone-800 hover:bg-stone-800 hover:text-stone-200'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-stone-950 font-black' : 'text-stone-400'} />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-extrabold ${
                  isActive ? 'bg-stone-950 text-amber-300' : 'bg-stone-800 text-stone-400'
                }`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* SUBTAB 1: THE CONVERSATION STUDY */}
        {activeSubTab === 'conversation_study' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div className="p-6 bg-stone-950/80 border border-stone-800 rounded-2xl space-y-4 shadow-xl">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                    <FileText size={14} />
                    <span>Anthropological Analysis • Amazonian Quichua & ITT Fields</span>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Why Some Indigenous Communities Accept Extraction
                  </h2>

                  <div className="p-4 bg-amber-950/30 border-l-4 border-amber-500 rounded-r-xl text-amber-200 text-sm md:text-base italic leading-relaxed">
                    “When oil exploration reached the community of Vicente Salazar, in January 2017, I asked what the community was going to decide – by which I meant: are you going to accept or oppose the oil project? It soon became clear that my question made little sense.
                    <strong> ‘How come will they oppose, if the people don’t have anywhere to poop?’</strong> said Juan Manuel, a councilman and member of the community.
                    <strong> ‘We are fed up with making small holes in the bushes.’</strong>”
                  </div>

                  <div className="space-y-3 text-sm text-stone-300 leading-relaxed">
                    <p>
                      Western environmentalists often view Indigenous territories through a romanticized lens, assuming communities prefer to remain in pre-industrial states,
                      rejecting development wholesale. As <em>The Conversation</em> study documented during the inauguration of the ITT oil project, this assumption collapses
                      when confronted with the visceral day-to-day realities of frontline survival.
                    </p>
                    <p>
                      The Amazonian river was already polluted from upstream human activities; bushmeat and fish were dwindling; government conservation edicts prohibited hunting
                      and wood cutting. At the same time, families desperately needed clean piped water, electricity, basic sanitation, medical clinics, and modern communication.
                      Residents wanted money for zinc roofs that don't leak, fiberglass canoes that don't rot, and gas stoves that don't fill their homes with woodsmoke.
                    </p>
                    <p>
                      As one elder put it with unassailable clarity: <strong>“Indigenous people have the right to progress too.”</strong>
                      If extraction was the only institution offering jobs, indemnification money, and drinking water infrastructure to solve existing contamination,
                      the decision was not an ethical compromise—it was an <strong>asymmetric dilemma</strong> where refusal meant prolonged deprivation.
                    </p>
                  </div>
                </div>

                {/* THE ASYMMETRIC DILEMMA BREAKDOWN */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="p-4 bg-stone-950/60 border border-red-500/20 rounded-xl space-y-2">
                    <div className="text-red-400 font-mono font-bold text-xs uppercase flex items-center gap-1.5">
                      <AlertTriangle size={14} />
                      <span>Pre-Existing Deficits</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Degraded river water, no sewage, dwindling game, and restrictive state conservation laws.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-950/60 border border-amber-500/20 rounded-xl space-y-2">
                    <div className="text-amber-400 font-mono font-bold text-xs uppercase flex items-center gap-1.5">
                      <DollarSign size={14} />
                      <span>The Cash & Tech Need</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Zinc roofs, modern healthcare, fiber canoes, gas kitchens, and reliable mobile connectivity.
                    </p>
                  </div>

                  <div className="p-4 bg-stone-950/60 border border-emerald-500/20 rounded-xl space-y-2">
                    <div className="text-emerald-400 font-mono font-bold text-xs uppercase flex items-center gap-1.5">
                      <Scale size={14} />
                      <span>The Right to Progress</span>
                    </div>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Rejecting the false binary that Indigenous sovereignty requires staying frozen in historic poverty.
                    </p>
                  </div>
                </div>
              </div>

              {/* SIDEBAR INFOGRAPHIC PREVIEW */}
              <div className="space-y-4">
                <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-2xl space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>PLATE #69 ARTWORK</span>
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="text-stone-400 hover:text-white flex items-center gap-1 cursor-pointer"
                    >
                      <Maximize2 size={12} />
                      <span>Zoom</span>
                    </button>
                  </div>

                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="relative rounded-xl overflow-hidden border border-amber-500/30 cursor-pointer group shadow-lg"
                  >
                    <img
                      src={indigenousProgressPlateImg}
                      alt="Plate #69: Indigenous Communities - The Right to Progress on Sovereign Terms"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-stone-200">
                      Plate #69 • High Tech, Energy & Indigenous Sovereignty
                    </div>
                  </div>

                  <div className="p-3 bg-stone-900 rounded-xl space-y-1 text-xs font-mono text-stone-300">
                    <div className="text-[10px] text-stone-500 uppercase">Cryptographic Provenance</div>
                    <div className="text-[10px] text-amber-300 break-all">{vaultHash}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: NEW MEXICO & TRIBAL ENERGY ECONOMIES */}
        {activeSubTab === 'nm_tribal_energy' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-amber-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Flame size={14} />
                <span>State Fiscal Realities & Sovereign Tribal Economies • New Mexico Context</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-white">
                New Mexico’s Energy Revenue Reality & Tribal Compacts
              </h2>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                In New Mexico, energy is not an abstract political debate; it is the fiscal bedrock of public education, highways, healthcare, and state pensions.
                Oil and gas extraction from the Permian and San Juan Basins funds between <strong>35% and 42% of the state’s annual general fund budget</strong>.
                Simultaneously, sovereign tribal nations across New Mexico—including the <strong>Navajo Nation</strong>, the <strong>Jicarilla Apache Nation</strong>,
                and various Pueblos—hold rich energy economies spanning oil, natural gas, geothermal, and utility-scale solar.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-5 bg-stone-900/80 border border-amber-500/20 rounded-xl space-y-3">
                  <h3 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                    <Building2 size={16} />
                    <span>The Tribal Energy Prerogative</span>
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Tribes recognize that energy revenues provide critical funding for community clinics, elder care, paved roads, and housing subsidies.
                    The Jicarilla Apache Nation, for example, successfully manages oil and gas leases while building one of the Southwest’s largest tribal solar arrays.
                    They do not oppose energy development—they demand direct royalty control, environmental oversight, and sovereign taxation power.
                  </p>
                </div>

                <div className="p-5 bg-stone-900/80 border border-cyan-500/20 rounded-xl space-y-3">
                  <h3 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                    <Server size={16} />
                    <span>The Data Center Parallel</span>
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    As hyperscale data centers flood the Southwest seeking desert land and cheap power, the tribal response mirrors their energy doctrine.
                    Tribes do not want to be excluded from the technological boom. They want modern data infrastructure, sovereign server clusters,
                    and fiber optics. <strong>What they reject is corporate exploitation</strong>: tech companies consuming billions of gallons of precious desert aquifer water
                    while paying zero local taxes under state loophole giveaways.
                  </p>
                </div>
              </div>

              {/* REVENUE TRANSITION CHART */}
              <div className="p-5 bg-stone-900/60 rounded-xl border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-mono font-bold text-stone-200 uppercase">
                    New Mexico Sovereign Energy & Compute Revenue Transition (2020–2030 Projection)
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400">ICEarth Sovereign Economic Modeling</span>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueTransitionData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="year" stroke="#888" fontSize={11} />
                      <YAxis stroke="#888" fontSize={11} unit="%" />
                      <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#444', color: '#fff', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                      <Area type="monotone" dataKey="oilGasRoyaltyShare" name="Fossil Fuel Royalties (%)" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.25} />
                      <Area type="monotone" dataKey="renewableEnergyShare" name="Tribal Clean Energy (%)" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                      <Area type="monotone" dataKey="sovereignDataCompute" name="Sovereign AI & Data Compute (%)" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.35} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: HIGH TECH ON SOVEREIGN TERMS */}
        {activeSubTab === 'high_tech_sovereign' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-cyan-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Cpu size={14} />
                <span>The ICEarth Architecture • Bridging High Tech & Cultural Sovereignty</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-white">
                What Indigenous Communities Want: High Tech on Their Terms
              </h2>

              <p className="text-stone-300 text-sm md:text-base leading-relaxed">
                Indigenous populations want high-speed internet, telehealth diagnostic scanners, AI-assisted water monitoring, advanced clean energy microgrids,
                and high-paying technological careers for their children. <strong>They want every modern convenience human ingenuity has engineered.</strong>
                The difference lies in governance: they refuse to trade their cultural identity, groundwater, or land rights to acquire them.
                This is precisely what <strong>ICEarth</strong> delivers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-cyan-300 font-bold text-sm flex items-center gap-1.5">
                    <Droplets size={16} />
                    <span>Closed-Loop Zero-Water Cooling</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Rejecting evaporative cooling towers that deplete reservation drinking aquifers. Demanding air-cooled and closed-loop geothermal compute systems.
                  </p>
                </div>

                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-emerald-300 font-bold text-sm flex items-center gap-1.5">
                    <Lock size={16} />
                    <span>Data Sovereignty & Local Enclaves</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Tribal data, sacred cultural knowledge, and health registries remain air-gapped on tribal servers, protected from corporate training scrapes under Swiss-grade encryption.
                  </p>
                </div>

                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                  <div className="text-amber-300 font-bold text-sm flex items-center gap-1.5">
                    <DollarSign size={16} />
                    <span>Direct Equity & Household Dividends</span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Replacing corporate tax subsidies with direct equity revenue sharing, guaranteeing annual payments to tribal households and community infrastructure funds.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-xl space-y-2">
                <h4 className="text-xs font-mono font-bold text-cyan-300 uppercase">
                  Governor Deb Haaland’s 8 Accountability Measures & Roulet’s Law
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Building upon Governor Deb Haaland’s 8 Data Center Accountability Measures (Plate #51), the ICEarth model codifies that any high-tech deployment
                  in Indian Country must guarantee 100% renewable power self-generation, mandatory local employment quotas, zero net water impact,
                  and absolute tribal sovereign veto power.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: COMPARISON MATRIX */}
        {activeSubTab === 'comparison_matrix' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-purple-500/30 rounded-2xl space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Scale size={14} />
                <span>Economic & Governance Forensics • The Two Paradigms</span>
              </div>

              <h2 className="text-xl md:text-3xl font-bold text-white">
                Extractive Corporate Enclave vs. ICEarth Sovereign Compact
              </h2>

              <p className="text-stone-300 text-sm leading-relaxed">
                Contrasting how conventional corporate developers exploit the "right to progress" dilemma by offering token compensation for devastating ecological degradation,
                versus how ICEarth structures true sovereign partnership.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                <div className="h-80 w-full p-4 bg-stone-900 rounded-xl border border-stone-800">
                  <div className="text-xs font-mono font-bold text-stone-200 mb-2">
                    Governance & Economic Equity Score (0–100)
                  </div>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={economicModelComparison} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis type="number" domain={[0, 100]} stroke="#888" fontSize={10} unit="%" />
                      <YAxis type="category" dataKey="metric" stroke="#ccc" fontSize={10} width={95} />
                      <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#444', color: '#fff', fontSize: '11px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px' }} />
                      <Bar dataKey="extractiveCorporate" name="Extractive Corporate Model" fill="#ef4444" radius={[0, 4, 4, 0]} />
                      <Bar dataKey="sovereignTerms" name="ICEarth Sovereign Compact" fill="#10b981" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-red-400">The Extractive Corporate Trap</span>
                      <span className="px-2 py-0.5 bg-red-900/60 text-red-200 text-[10px] font-mono rounded">Asymmetric Dilemma</span>
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1 list-disc pl-4 leading-relaxed">
                      <li>Offers zinc roofs and temporary construction jobs while polluting the river or drawing down aquifers.</li>
                      <li>Demands 30-year state property and sales tax abatements; zero municipal reinvestment.</li>
                      <li>Extracts tribal data and resources into corporate cloud silos.</li>
                      <li>Leaves abandoned brownfields when global commodities shift.</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-emerald-400">The ICEarth Sovereign Compact</span>
                      <span className="px-2 py-0.5 bg-emerald-900/60 text-emerald-200 text-[10px] font-mono rounded">Sovereign Progress</span>
                    </div>
                    <ul className="text-xs text-stone-300 space-y-1 list-disc pl-4 leading-relaxed">
                      <li>Minimum 51% tribal equity stake in high-tech energy and computing assets.</li>
                      <li>Mandatory closed-loop water systems; zero depletion of sacred groundwater.</li>
                      <li>Direct household dividend payments funded from compute and energy revenues.</li>
                      <li>Full tribal council veto power enforced by Roulet's Law cryptographic proofs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: SIMULATOR */}
        {activeSubTab === 'simulator' && (
          <div className="space-y-6">
            <div className="p-6 bg-stone-950/80 border border-amber-500/30 rounded-2xl space-y-6 shadow-xl">
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Sliders size={14} />
                <span>Interactive Forensics • Sovereign Terms Negotiator</span>
              </div>

              <div>
                <h2 className="text-xl md:text-3xl font-bold text-white">
                  Community Self-Determination Index (CSDI) Simulator
                </h2>
                <p className="text-stone-300 text-sm mt-1">
                  Adjust the four pillars of tribal negotiation to establish an equitable balance between community modernization, economic returns, and environmental preservation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-5 p-5 bg-stone-900 rounded-xl border border-stone-800">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Tribal Equity Share:</span>
                      <span className="text-amber-400 font-bold">{tribalEquityShare}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={tribalEquityShare}
                      onChange={(e) => setTribalEquityShare(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Ownership stake in high-tech compute and energy infrastructure.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Local Infrastructure Reinvestment:</span>
                      <span className="text-emerald-400 font-bold">{localInfrastructureReinvest}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="60"
                      value={localInfrastructureReinvest}
                      onChange={(e) => setLocalInfrastructureReinvest(Number(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Dedicated revenues for drinking water, schools, sanitation, and health.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Water & Environmental Protection Mandate:</span>
                      <span className="text-cyan-400 font-bold">{waterAirPreservationMandate}%</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="100"
                      value={waterAirPreservationMandate}
                      onChange={(e) => setWaterAirPreservationMandate(Number(e.target.value))}
                      className="w-full accent-cyan-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Strict air-cooling, zero aquifer drawdowns, and real-time sensor audits.</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Sovereign Governance Veto Power:</span>
                      <span className="text-purple-400 font-bold">{sovereignGovernanceVeto}%</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="100"
                      value={sovereignGovernanceVeto}
                      onChange={(e) => setSovereignGovernanceVeto(Number(e.target.value))}
                      className="w-full accent-purple-500 cursor-pointer"
                    />
                    <div className="text-[10px] text-stone-400">Binding legal authority to halt operations on sovereign territory.</div>
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 bg-stone-900 rounded-xl border border-stone-800 space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="text-xs font-mono text-stone-400 uppercase tracking-wider">Negotiated Sovereignty Status</div>
                    <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-300">
                      {calculatedCSDI} / 100
                    </div>
                    <div className="text-sm font-bold text-white">
                      {calculatedCSDI >= 80
                        ? 'SOVEREIGN SELF-DETERMINED COMPACT (ROULET STANDARD)'
                        : calculatedCSDI >= 60
                        ? 'BALANCED PROGRESS COMPACT (STABLE)'
                        : 'ASYMMETRIC EXTRACTIVE RISK (VULNERABLE)'}
                    </div>
                  </div>

                  <div className="p-4 bg-stone-950 rounded-xl text-left text-xs font-mono text-stone-300 space-y-2 border border-stone-800">
                    <div className="text-amber-400 font-bold uppercase">Strategic Synthesis:</div>
                    <p className="leading-relaxed">
                      {calculatedCSDI >= 80
                        ? 'Optimal sovereign balance achieved. The community secures modernization, basic services, high-speed compute, and living-wage jobs while retaining absolute territorial, environmental, and cultural authority.'
                        : calculatedCSDI >= 60
                        ? 'Reasonable progress: economic benefits are flowing, but higher environmental guarantees and equity ownership are required to prevent long-term liabilities.'
                        : 'Warning: Extractive corporate imbalance. The community is being forced into the asymmetric trap described in The Conversation: trading fundamental resources for basic survival.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CROSS NAVIGATION BAR */}
        <div className="p-4 bg-stone-950/80 border border-stone-800 rounded-xl flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-mono text-stone-400 flex items-center gap-2">
            <span>ICEarth Sovereign Knowledge Graph</span>
            <span>•</span>
            <span className="text-amber-400 font-bold">Plate #69</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('deb_haaland_home')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg text-xs font-mono transition-colors border border-stone-700 cursor-pointer flex items-center gap-1.5"
                >
                  <Award size={12} className="text-amber-400" />
                  <span>Deb Haaland Home (Plate #51)</span>
                </button>

                <button
                  onClick={() => onNavigateTab('cherokee_it_position')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg text-xs font-mono transition-colors border border-stone-700 cursor-pointer flex items-center gap-1.5"
                >
                  <ShieldCheck size={12} className="text-emerald-400" />
                  <span>Cherokee Ban (Plate #54)</span>
                </button>

                <button
                  onClick={() => onNavigateTab('deepmind_readiness')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white rounded-lg text-xs font-mono transition-colors border border-stone-700 cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles size={12} className="text-cyan-400" />
                  <span>DeepMind Readiness (Plate #68)</span>
                </button>

                <button
                  onClick={() => onNavigateTab('norm_roulet')}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-lg text-xs font-mono font-black transition-colors cursor-pointer flex items-center gap-1.5 shadow"
                >
                  <Globe size={12} />
                  <span>Norm Roulet Gallery</span>
                  <ArrowRight size={12} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* FULL-SCREEN ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 md:p-8 overflow-y-auto">
          <div className="flex items-center justify-between mb-4 max-w-7xl mx-auto w-full">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 rounded text-xs font-mono font-bold">
                PLATE #69 HIGH-RESOLUTION INSPECTION
              </span>
              <span className="text-stone-400 text-xs font-mono">{vaultHash}</span>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 bg-stone-800 hover:bg-stone-700 text-white rounded-full transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center max-w-7xl mx-auto w-full">
            <img
              src={indigenousProgressPlateImg}
              alt="Plate #69: Indigenous Communities - The Right to Progress on Sovereign Terms"
              className="max-h-[82vh] w-auto object-contain rounded-xl shadow-2xl border border-amber-500/40"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-4 text-center max-w-4xl mx-auto text-xs font-mono text-stone-400">
            Plate #69: Indigenous Communities — The Right to Progress on Sovereign Terms: High Tech, Energy Economies & Cultural Self-Determination. Cryptographic ledger verification under Roulet’s Law of Environmental Liability.
          </div>
        </div>
      )}
    </div>
  );
};
