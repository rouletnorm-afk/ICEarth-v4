import React, { useState } from 'react';
import {
  Shield,
  ShieldCheck,
  AlertTriangle,
  Zap,
  Droplets,
  Wind,
  Trash2,
  Users,
  Building,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  ArrowRight,
  Eye,
  Info,
  Sparkles,
  Lock,
  Cpu,
  Flame,
  Award,
  BookOpen,
  Compass,
  Landmark,
  Scale,
  RefreshCw,
  Sun,
  Layers,
  Leaf,
  UserCheck
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Cell
} from 'recharts';
import debHaalandProfileImg from '../assets/images/deb_haaland_profile_1789687423309.jpg';
import nmItSovereigntyPlateImg from '../assets/images/deb_haaland_laguna_plate_1789691744576.jpg';
import debHaalandNewYorkerImg from '../assets/images/deb_haaland_newyorker_portrait.jpg';
import lagunaHomelandLandscapeImg from '../assets/images/laguna_pueblo_homeland.jpg';

interface DebHaalandICEarthHomeProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const DebHaalandICEarthHome: React.FC<DebHaalandICEarthHomeProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeMeasureIndex, setActiveMeasureIndex] = useState<number>(0);
  const [selectedComparisonMetric, setSelectedComparisonMetric] = useState<'all' | 'water' | 'energy' | 'jobs' | 'governance'>('all');
  const [showArtworkModal, setShowArtworkModal] = useState<boolean>(false);
  const [selectedPlate, setSelectedPlate] = useState<'plate52' | 'laguna' | 'plate51' | 'newyorker'>('plate52');
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeTabSubView, setActiveTabSubView] = useState<'case_study' | 'accountability_audit' | 'solution_matrix' | 'user3_dashboard'>('case_study');

  const plate52Hash = '0x8_LAWS_OF_NM_IT_SOVEREIGNTY_DEB_HAALAND_PLATE_52_VAULT_2026';
  const lagunaHash = '0xLAGUNA_PUEBLO_ANCESTRAL_HOMELAND_LANDSCAPE_2026';
  const plate51Hash = '0xUSER_003_DEB_HAALAND_LAGUNA_PUEBLO_SOVEREIGN_VAULT_2026';
  const newYorkerHash = '0xDEB_HAALAND_NEW_YORKER_PORTRAIT_ARCHIVE_2026';

  const currentVaultHash =
    selectedPlate === 'plate52'
      ? plate52Hash
      : selectedPlate === 'laguna'
      ? lagunaHash
      : selectedPlate === 'plate51'
      ? plate51Hash
      : newYorkerHash;

  const handleCopyHash = () => {
    navigator.clipboard.writeText(currentVaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Deb Haaland's 8 Accountability Measures
  const accountabilityMeasures = [
    {
      id: 1,
      title: 'No Backroom Deals, Strong Community Benefits',
      shortTitle: '1. No Backroom Deals',
      category: 'Governance & Transparency',
      icon: Landmark,
      color: 'amber',
      problem: 'Corporate tech monopolies negotiate multi-decade industrial tax abatements (IRBs), non-disclosure agreements (NDAs), and secret municipal water allotments behind closed doors with zero public hearing or tribal consultation.',
      haalandMandate: 'Complete public transparency. Every data center deal must be publicly vetted, with enforceable community benefit agreements (CBAs) negotiated directly with local municipalities and tribal nations prior to any groundbreaking.',
      icearthSolution: 'ICEarth uses open-ledger, treaty-bound sovereign compacts. All infrastructure is 100% on-reservation or co-governed with New Mexico pueblos and counties. Zero private NDAs; sovereign community benefit terms are cryptographically anchored and publicly auditable.',
      complianceScore: 100,
      corporateScore: 18
    },
    {
      id: 2,
      title: 'No Utility Rate Increases & Reliable Energy for New Mexicans',
      shortTitle: '2. Zero Utility Rate Hikes',
      category: 'Energy & Grid Equity',
      icon: Zap,
      color: 'red',
      problem: 'Massive 500MW corporate AI data center clusters threaten to overwhelm PNM and El Paso Electric grids, forcing residential New Mexicans and working families to subsidize billions in new fossil peaker plants and high-voltage transmission lines through soaring electric bills.',
      haalandMandate: 'Strict ratepayer protection. Data center operators must supply 100% of their own power infrastructure or fund dedicated grid capacity without shifting a single cent of cost onto New Mexico families or risking rolling brownouts.',
      icearthSolution: 'ICEarth builds 100% behind-the-meter off-grid and microgrid architectures. Every node is paired with dedicated tribal agrivoltaic solar and iron-flow storage. Zero strain on public residential grids; surplus clean battery power is fed backward to rural pueblo and colonia households at zero cost.',
      complianceScore: 100,
      corporateScore: 22
    },
    {
      id: 3,
      title: 'Protect New Mexico’s Water',
      shortTitle: '3. Protect NM Water',
      category: 'Hydrology & Aquifer Defense',
      icon: Droplets,
      color: 'cyan',
      problem: 'Standard evaporative cooling towers in desert data centers consume 3 to 5 million gallons of pristine potable water per day per facility—draining the Rio Grande, San Juan, and high-desert ancestral aquifers during the worst Southwestern megadrought in 1,200 years.',
      haalandMandate: 'Absolute water conservation. Moratorium on any data facility that drains fresh groundwater or municipal water supplies. Strict zero-water or non-potable closed-loop mandates.',
      icearthSolution: 'ICEarth nodes use 100% dry dielectric immersion cooling and high-desert New Mexico ambient heat exchangers. Water consumption = ZERO gallons per day. No groundwater extraction, zero cooling tower evaporation, and zero chemical biocide discharge.',
      complianceScore: 100,
      corporateScore: 12
    },
    {
      id: 4,
      title: 'New Mexico Jobs for New Mexico Workers',
      shortTitle: '4. NM Jobs for NM Workers',
      category: 'Labor & Economic Sovereignty',
      icon: Users,
      color: 'emerald',
      problem: 'Hyper-scale data centers create hundreds of temporary out-of-state construction jobs, but once operational, they employ only 20 to 40 specialized security guards and technician fly-ins, extracting billions in revenue while employing negligible local New Mexicans.',
      haalandMandate: 'Guaranteed local hiring quotas, project labor agreements, union apprenticeship pipelines, and permanent high-wage technical careers reserved for New Mexican workers and tribal citizens.',
      icearthSolution: 'ICEarth transforms computing into a community infomediation co-op. Trains Native youth and New Mexican workers in sovereign AI architecture, phytoremediation sensor networks, hardware stewardship, and biocultural data stewardship—creating 300+ permanent high-wage local sovereign tech careers per node cluster.',
      complianceScore: 100,
      corporateScore: 28
    },
    {
      id: 5,
      title: 'Expand Renewable Energy',
      shortTitle: '5. Expand Renewables',
      category: 'Clean Power Transition',
      icon: Sun,
      color: 'amber',
      problem: 'Big Tech claims "100% green" by buying unbundled Renewable Energy Certificates (RECs) from out-of-state wind farms while physically running their New Mexico servers on gas and coal baseload power 24/7.',
      haalandMandate: 'True physical additionality. Operators must construct new, on-site or in-state renewable generation and multi-hour battery storage that adds real clean megawatts to New Mexico’s clean energy capacity.',
      icearthSolution: 'ICEarth deploys true 24/7 carbon-free computing. Nodes run exclusively on locally installed tribal agrivoltaics (solar panels mounted over indigenous crops and phytoremediation hemp), driving direct regenerative land use and expanding New Mexico’s physical clean energy generation.',
      complianceScore: 100,
      corporateScore: 35
    },
    {
      id: 6,
      title: 'Clean Air, Land, and Habitat',
      shortTitle: '6. Clean Air, Land & Habitat',
      category: 'Ecology & Environmental Justice',
      icon: Wind,
      color: 'emerald',
      problem: 'Massive data center campuses deploy hundreds of multi-megawatt diesel backup generators that test regularly, discharging particulate matter (PM2.5), nitrogen oxides (NOx), and carcinogens over frontline Hispanic, Native, and rural neighborhoods, while bulldozing sacred pinon-juniper habitats.',
      haalandMandate: 'Zero toxic emissions. Protect critical wildlife corridors, sacred ancestral landscapes, and residential air quality. Prohibit dirty diesel backup generation in proximity to communities.',
      icearthSolution: 'ICEarth nodes use zero diesel generation. Microgrid resilience is powered by non-toxic zinc/iron flow batteries, green hydrogen cells, and modular flywheel buffers. Modular footprint integrates harmoniously with adobe architectural traditions without habitat destruction.',
      complianceScore: 100,
      corporateScore: 15
    },
    {
      id: 7,
      title: 'Clean Up Your Mess. Any Industry in New Mexico Should Clean Up After Themselves',
      shortTitle: '7. Clean Up Your Mess',
      category: 'Remediation & Reclamation',
      icon: Trash2,
      color: 'rose',
      problem: 'From legacy uranium mill tailings to oil and gas orphan wells, New Mexico has repeatedly suffered boom-and-bust extractive industries that take the profits and leave toxic contamination for taxpayers and tribes to clean up. Data centers discard thousands of obsolete servers laden with lead, cadmium, and PFAS every 3 years.',
      haalandMandate: 'Pre-funded environmental reclamation bonds, mandatory circular e-waste recycling, and strict liability ensuring corporations cannot walk away from abandoned industrial husks or toxic debris.',
      icearthSolution: 'ICEarth requires mandatory cryptographic reclamation bonding locked in smart escrow before server installation. All server components utilize modular circular lifecycles with 100% closed-loop reclamation and local soil phytoremediation offsets for zero net environmental burden.',
      complianceScore: 100,
      corporateScore: 10
    },
    {
      id: 8,
      title: 'Accountable to Communities',
      shortTitle: '8. Accountable to Communities',
      category: 'Sovereignty & Democratic Control',
      icon: ShieldCheck,
      color: 'blue',
      problem: 'Global tech conglomerates answer exclusively to Wall Street shareholders and Silicon Valley boards. When local communities raise concerns regarding water depletion, electromagnetic noise, or grid reliability, corporate lawyers file injunctions or threaten to relocate to neighboring states.',
      haalandMandate: 'Ongoing, legally binding democratic accountability. Communities and tribal nations must retain continuous monitoring access, right of inspection, and statutory authority to revoke operating permits if standards are violated.',
      icearthSolution: 'ICEarth operates under the Sovereign Biocultural Compact. Physical ownership and cryptographic master keys are held by Tribal Councils and New Mexico community trusts (via Shamir 3/5 Elder Key ceremonies). The community possesses the physical and cryptographic power to throttle or shut down nodes at will.',
      complianceScore: 100,
      corporateScore: 8
    }
  ];

  // Radar Data comparing Corporate Hyperscale vs ICEarth
  const radarComparisonData = [
    { subject: '1. No Backroom Deals', Corporate: 18, ICEarth: 100 },
    { subject: '2. Ratepayer Protection', Corporate: 22, ICEarth: 100 },
    { subject: '3. Water Preservation', Corporate: 12, ICEarth: 100 },
    { subject: '4. Local NM Jobs', Corporate: 28, ICEarth: 100 },
    { subject: '5. Real Clean Power', Corporate: 35, ICEarth: 100 },
    { subject: '6. Zero Air Pollution', Corporate: 15, ICEarth: 100 },
    { subject: '7. Upfront Cleanup Bond', Corporate: 10, ICEarth: 100 },
    { subject: '8. Community Control', Corporate: 8, ICEarth: 100 }
  ];

  // Quantitative Metrics for a 100MW Facility in New Mexico
  const metricsComparisonData = [
    {
      metric: 'Daily Water Depletion',
      corporate: '3,800,000 Gallons/Day',
      corporateNumeric: 3.8,
      icearth: '0 Gallons/Day (Waterless)',
      icearthNumeric: 0,
      unit: 'Million Gal/Day',
      note: 'ICEarth utilizes dry dielectric immersion + high-desert ambient air exchangers.'
    },
    {
      metric: 'Residential Rate Impact',
      corporate: '+8.4% to +14.2% Rate Hikes',
      corporateNumeric: 14.2,
      icearth: '0% Rate Hike (Supplies Surplus)',
      icearthNumeric: 0,
      unit: '% Increase on NM Families',
      note: 'ICEarth generates 100% off-grid power via tribal agrivoltaics.'
    },
    {
      metric: 'Local NM Workforce Ratio',
      corporate: '14% Local (Fly-in specialists)',
      corporateNumeric: 14,
      icearth: '92% Local & Indigenous Workers',
      icearthNumeric: 92,
      unit: '% Local Workforce',
      note: 'Permanent sovereign infomediation, phytoremediation, and IT careers.'
    },
    {
      metric: 'Backup Diesel Emissions',
      corporate: '48.6 Tons PM2.5/yr',
      corporateNumeric: 48.6,
      icearth: '0.0 Tons (Flow Batteries & H2)',
      icearthNumeric: 0,
      unit: 'Tons PM2.5/Year',
      note: 'Zero diesel generators; non-toxic iron-flow and flywheel storage.'
    },
    {
      metric: 'Reclamation Bond Escrow',
      corporate: '$0 (Taxpayer Cleanup Risk)',
      corporateNumeric: 0,
      icearth: '$25,000,000 Cryptographic Bond',
      icearthNumeric: 25,
      unit: 'Escrow USD Millions',
      note: 'Locked in smart contract prior to installation to guarantee site clean-up.'
    }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-[#faf8f5] text-stone-900'} pb-24 transition-colors`}>
      {/* TOP NOTIFICATION & PROVENANCE BAR */}
      <div className="bg-gradient-to-r from-red-900 via-amber-900 to-emerald-950 text-amber-100 border-b border-amber-600/50 px-4 py-2 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-white font-black text-[10px] rounded tracking-widest uppercase animate-pulse">
              OFFICIAL CASE STUDY
            </span>
            <span className="font-bold">
              GOVERNOR DEB HAALAND’S ICEARTH HOME • ICEARTH USER #3
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="https://x.com/DebHaalandNM/status/2100685661917553063"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-amber-300 hover:text-white underline decoration-amber-400"
            >
              <span>Verified Statement on X (@DebHaalandNM)</span>
              <ExternalLink size={12} />
            </a>
            <a
              href="http://DebHaaland.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-emerald-300 hover:text-white underline decoration-emerald-400"
            >
              <span>DebHaaland.com</span>
              <ExternalLink size={12} />
            </a>
            <span className="hidden sm:inline text-stone-400">Vault: 0xUSER_003_DEB_HAALAND</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION WITH PORTRAIT & INFOGRAPHIC */}
      <div className="relative overflow-hidden border-b border-amber-500/30 bg-gradient-to-b from-stone-900 via-amber-950/40 to-stone-900 text-stone-100">
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-1 bg-gradient-to-r from-amber-600 to-red-600 text-stone-950 font-black text-xs rounded-full uppercase tracking-wider shadow-md">
                  35th Generation New Mexican • Laguna Pueblo
                </span>
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/50 font-mono text-xs rounded-full">
                  User #3 Sovereign Profile
                </span>
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-mono text-xs rounded-full">
                  Pueblo & Inter-Tribal Compact
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight text-white">
                Governor Deb Haaland’s <br />
                <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-300 bg-clip-text text-transparent">
                  ICEarth Home & Sovereign AI Solution
                </span>
              </h1>

              <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-sans">
                Addressing Governor Deb Haaland’s historic call for a <strong>moratorium on exploitative data centers</strong> in New Mexico. 
                As an enrolled member of the <strong>Laguna Pueblo</strong>, 35th Generation New Mexican, former US Secretary of the Interior, and future Governor, 
                she has established <strong>8 Clear Accountability Measures</strong> for artificial intelligence development in The Land of Enchantment. 
                ICEarth is honored to provide her sovereign home as <strong>ICEarth User #3</strong>, demonstrating that indigenous-led, air-gapped, waterless computing 
                is the exact technological fulfillment of her vision.
              </p>

              {/* Verified Quote Box */}
              <div className="p-4 rounded-xl bg-stone-950/80 border-l-4 border-amber-500 shadow-xl space-y-2">
                <div className="flex items-center justify-between text-xs text-amber-400 font-mono font-bold">
                  <span>DEB HAALAND (@DebHaalandNM) • SEPT 17, 2026</span>
                  <a
                    href="https://x.com/DebHaalandNM/status/2100685661917553063"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <span>View Post on X</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
                <p className="text-sm italic text-stone-300 font-serif leading-relaxed">
                  &ldquo;I support a moratorium on data centers until developers can meet the strong, clear, statewide protections many New Mexicans want. 
                  That’s why I am proposing the following accountability measures: 1. No backroom deals, strong community benefits. 2. No utility rate increases & reliable energy for New Mexicans. 3. Protect New Mexico’s water. 4. New Mexico jobs for New Mexico workers. 5. Expand renewable energy. 6. Clean air, land, and habitat. 7. Clean up your mess. Any industry in New Mexico should clean up after themselves. 8. Accountable to communities. Want to learn more about my plan? Visit DebHaaland.com.&rdquo;
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveTabSubView('accountability_audit')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    activeTabSubView === 'accountability_audit'
                      ? 'bg-amber-500 text-stone-950 ring-2 ring-amber-300'
                      : 'bg-stone-800 hover:bg-stone-700 text-amber-200 border border-amber-500/40'
                  }`}
                >
                  <Scale size={15} />
                  <span>8 Accountability Measures</span>
                </button>

                <button
                  onClick={() => setActiveTabSubView('solution_matrix')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    activeTabSubView === 'solution_matrix'
                      ? 'bg-emerald-500 text-stone-950 ring-2 ring-emerald-300'
                      : 'bg-stone-800 hover:bg-stone-700 text-emerald-200 border border-emerald-500/40'
                  }`}
                >
                  <Cpu size={15} />
                  <span>Corporate vs. ICEarth Matrix</span>
                </button>

                <button
                  onClick={() => setActiveTabSubView('user3_dashboard')}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all flex items-center gap-2 cursor-pointer shadow-md ${
                    activeTabSubView === 'user3_dashboard'
                      ? 'bg-red-500 text-white ring-2 ring-red-300'
                      : 'bg-stone-800 hover:bg-stone-700 text-red-200 border border-red-500/40'
                  }`}
                >
                  <ShieldCheck size={15} />
                  <span>User #3 Sovereign Vault</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedPlate('plate52');
                    setShowArtworkModal(true);
                  }}
                  className="px-3 py-2 rounded-xl text-xs font-mono font-bold bg-amber-950/80 hover:bg-amber-900 text-amber-300 border border-amber-500/50 flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye size={14} />
                  <span>Inspect Plate #52 (8 Laws)</span>
                </button>

                <button
                  onClick={() => {
                    setSelectedPlate('plate51');
                    setShowArtworkModal(true);
                  }}
                  className="px-3 py-2 rounded-xl text-xs font-mono font-bold bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-600 flex items-center gap-1.5 cursor-pointer"
                >
                  <UserCheck size={14} />
                  <span>Inspect Plate #51 (User Profile)</span>
                </button>
              </div>
            </div>

            {/* Right Card: High Resolution Artwork Plate */}
            <div className="lg:col-span-5 space-y-2">
              {/* Plate switcher tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-1 bg-stone-900/90 rounded-xl border border-amber-500/40 text-[10px] sm:text-[11px] font-mono">
                <button
                  onClick={() => setSelectedPlate('plate52')}
                  className={`py-1.5 px-1.5 rounded-lg font-bold transition-all text-center cursor-pointer truncate ${
                    selectedPlate === 'plate52'
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                  title="Plate #52: 8 Laws of NM IT Sovereignty"
                >
                  Plate #52 (8 Laws)
                </button>
                <button
                  onClick={() => setSelectedPlate('laguna')}
                  className={`py-1.5 px-1.5 rounded-lg font-bold transition-all text-center cursor-pointer truncate ${
                    selectedPlate === 'laguna'
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                  title="Deb Haaland's Actual Homeland: Laguna Pueblo, NM"
                >
                  Laguna Pueblo
                </button>
                <button
                  onClick={() => setSelectedPlate('plate51')}
                  className={`py-1.5 px-1.5 rounded-lg font-bold transition-all text-center cursor-pointer truncate ${
                    selectedPlate === 'plate51'
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                  title="Plate #51: User #3 Profile Plate"
                >
                  Plate #51 (User #3)
                </button>
                <button
                  onClick={() => setSelectedPlate('newyorker')}
                  className={`py-1.5 px-1.5 rounded-lg font-bold transition-all text-center cursor-pointer truncate ${
                    selectedPlate === 'newyorker'
                      ? 'bg-amber-500 text-stone-950 shadow'
                      : 'text-stone-300 hover:text-white hover:bg-stone-800'
                  }`}
                  title="Official Portrait Study"
                >
                  Portrait Study
                </button>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-stone-950 group">
                <img
                  src={
                    selectedPlate === 'plate52'
                      ? nmItSovereigntyPlateImg
                      : (selectedPlate === 'laguna'
                        ? lagunaHomelandLandscapeImg
                        : (selectedPlate === 'plate51' ? debHaalandProfileImg : debHaalandNewYorkerImg))
                  }
                  alt={
                    selectedPlate === 'plate52'
                      ? 'The 8 Laws of New Mexico IT Sovereignty Plate #52 with Laguna Pueblo homeland'
                      : (selectedPlate === 'laguna'
                        ? 'Authentic Homeland: Laguna Pueblo, New Mexico'
                        : (selectedPlate === 'plate51' ? 'Governor Deb Haaland User #3 Credential Plate #51' : 'Official New Yorker Portrait Deb Haaland'))
                  }
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer max-h-[480px]"
                  onClick={() => setShowArtworkModal(true)}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-95 pointer-events-none" />

                <div className="absolute bottom-0 inset-x-0 p-4 space-y-1.5 text-left">
                  <div className="flex items-center justify-between text-[11px] font-mono font-bold text-amber-300">
                    <span>
                      {selectedPlate === 'plate52'
                        ? 'PLATE #52 • 8 LAWS OF NM IT SOVEREIGNTY'
                        : (selectedPlate === 'laguna'
                          ? 'AUTHENTIC HOMELAND • PUEBLO OF LAGUNA'
                          : (selectedPlate === 'plate51' ? 'PLATE #51 • USER #3 SOVEREIGN CREDENTIAL' : 'OFFICIAL STUDY • NEW YORKER ARCHIVE'))}
                    </span>
                    <span className="px-2 py-0.5 bg-amber-500/30 text-amber-200 rounded border border-amber-400/40">
                      {selectedPlate === 'plate52'
                        ? 'PUEBLO OF LAGUNA • NM DIRECTIVE'
                        : (selectedPlate === 'laguna'
                          ? 'HISTORIC OLD LAGUNA • CIBOLA COUNTY'
                          : (selectedPlate === 'plate51' ? 'USER #3 VAULT' : 'PORTRAIT MASTER'))}
                    </span>
                  </div>
                  <h3 className="text-sm font-serif font-bold text-white leading-snug">
                    {selectedPlate === 'plate52'
                      ? 'The 8 Laws of New Mexico IT Sovereignty: Governor Deb Haaland Directive'
                      : (selectedPlate === 'laguna'
                        ? 'Deb Haaland’s Ancestral Homeland: Laguna Pueblo, New Mexico'
                        : (selectedPlate === 'plate51'
                          ? 'Governor Deb Haaland: Laguna Pueblo 35th Generation New Mexican'
                          : 'Governor Deb Haaland: Official New Yorker Portrait by Celeste Sloman'))}
                  </h3>
                  <p className="text-[11px] text-stone-300 font-mono">
                    {selectedPlate === 'plate52'
                      ? 'Deb Haaland (Foreground) & Authentic Laguna Pueblo Homeland (Background) • Verbatim 8 Laws'
                      : (selectedPlate === 'laguna'
                        ? 'Old Laguna Hillside Village • San José de la Laguna Mission Church (1699) • Mount Taylor'
                        : (selectedPlate === 'plate51'
                          ? 'Laguna Pueblo Ancestral Sovereignty • Former US Secretary of the Interior'
                          : 'Authentic Visionary Portrait • Turquoise Blazer & Traditional Silver Zia Sun Pendant'))}
                  </p>
                  
                  <div className="pt-2 flex items-center justify-between gap-2 text-[10px] font-mono">
                    <button
                      onClick={handleCopyHash}
                      className="flex items-center gap-1 text-amber-300 hover:text-white bg-stone-900/90 px-2 py-1 rounded border border-amber-500/40 cursor-pointer"
                    >
                      {copiedHash ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                      <span>{copiedHash ? 'Hash Copied!' : `${currentVaultHash.slice(0, 18)}...`}</span>
                    </button>
                    <button
                      onClick={() => setShowArtworkModal(true)}
                      className="flex items-center gap-1 text-emerald-300 hover:text-white bg-emerald-950/80 px-2 py-1 rounded border border-emerald-500/40 cursor-pointer"
                    >
                      <Maximize2 size={11} />
                      <span>Full Artwork Modal</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THREE MEMBERS OF THE SOVEREIGN COMMUNITY HEADER BADGES */}
      <div className="border-b border-stone-200 dark:border-stone-800 bg-amber-50/60 dark:bg-stone-900/60 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center sm:text-left mb-3">
            <span className="text-xs font-mono font-black uppercase tracking-widest text-amber-800 dark:text-amber-400">
              INDIGENOUS COMMUNITIES EARTH • SOVEREIGN MEMBER SEQUENCE
            </span>
            <p className="text-xs text-stone-600 dark:text-stone-400">
              Founded in Taos, New Mexico with Jicarilla Apache partners to deliver sovereign computing for humanity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* USER 1: Norm Roulet */}
            <div 
              onClick={() => onNavigateTab && onNavigateTab('norm_roulet')}
              className="p-3.5 rounded-xl border border-amber-500/40 bg-white dark:bg-stone-950 shadow-sm hover:border-amber-500 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 bg-amber-600 text-white font-mono text-[10px] font-black rounded uppercase">
                  USER #1 • FOUNDER
                </span>
                <span className="text-[11px] font-mono text-stone-500">Taos & Switzerland</span>
              </div>
              <h4 className="font-serif font-black text-sm text-stone-900 dark:text-stone-100 group-hover:text-amber-600 transition-colors">
                Norm Roulet
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">
                Founder of ICEarth (2001). Pioneer of Exposenomics, Infomediation, and the Swiss School of Exposenomics.
              </p>
              <div className="mt-2 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1">
                <span>View Norm Roulet Home</span>
                <ArrowRight size={10} />
              </div>
            </div>

            {/* USER 2: Ouray Muskrat */}
            <div 
              onClick={() => onNavigateTab && onNavigateTab('jicarilla_sovereign_it')}
              className="p-3.5 rounded-xl border border-emerald-500/40 bg-white dark:bg-stone-950 shadow-sm hover:border-emerald-500 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 bg-emerald-600 text-white font-mono text-[10px] font-black rounded uppercase">
                  USER #2 • INDIGENOUS PRODUCER
                </span>
                <span className="text-[11px] font-mono text-stone-500">Jicarilla Apache Nation (Dulce, NM)</span>
              </div>
              <h4 className="font-serif font-black text-sm text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 transition-colors">
                Ouray Muskrat
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">
                Master Phytoremediator, botanical heavy metal soil restoration specialist, and Jicarilla Apache Sovereign IT leader.
              </p>
              <div className="mt-2 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <span>View Jicarilla Sovereign IT</span>
                <ArrowRight size={10} />
              </div>
            </div>

            {/* USER 3: Governor Deb Haaland */}
            <div 
              onClick={() => setActiveTabSubView('user3_dashboard')}
              className="p-3.5 rounded-xl border-2 border-red-500 bg-gradient-to-br from-amber-50 to-red-50/50 dark:from-stone-900 dark:to-red-950/40 shadow-md ring-2 ring-red-500/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="px-2 py-0.5 bg-gradient-to-r from-red-600 to-amber-600 text-white font-mono text-[10px] font-black rounded uppercase shadow-xs">
                  USER #3 • NEW MEXICO GOVERNOR
                </span>
                <span className="text-[11px] font-mono font-bold text-red-600 dark:text-red-400">Laguna Pueblo</span>
              </div>
              <h4 className="font-serif font-black text-sm text-stone-900 dark:text-stone-100 group-hover:text-red-600 transition-colors">
                Deb Haaland
              </h4>
              <p className="text-xs text-stone-600 dark:text-stone-400 line-clamp-2 mt-1">
                35th Generation New Mexican, former US Interior Secretary, and Governor: 8 Data Center Accountability Measures.
              </p>
              <div className="mt-2 text-[10px] font-mono text-red-600 dark:text-red-400 font-bold flex items-center gap-1">
                <span>Active Sovereign Profile (ICEarth User #3)</span>
                <CheckCircle2 size={11} className="text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        
        {/* SUBVIEW NAVIGATION PILLS */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
          <button
            onClick={() => setActiveTabSubView('case_study')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all cursor-pointer ${
              activeTabSubView === 'case_study'
                ? 'bg-stone-900 text-amber-300 dark:bg-amber-500 dark:text-stone-950 shadow-md'
                : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            🏛️ Executive Case Study
          </button>

          <button
            onClick={() => setActiveTabSubView('accountability_audit')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all cursor-pointer ${
              activeTabSubView === 'accountability_audit'
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            ⚖️ The 8 Accountability Measures (Interactive)
          </button>

          <button
            onClick={() => setActiveTabSubView('solution_matrix')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all cursor-pointer ${
              activeTabSubView === 'solution_matrix'
                ? 'bg-emerald-600 text-white shadow-md'
                : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            ⚡ Big Tech vs. ICEarth Proof Matrix
          </button>

          <button
            onClick={() => setActiveTabSubView('user3_dashboard')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all cursor-pointer ${
              activeTabSubView === 'user3_dashboard'
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-stone-100 dark:bg-stone-900 text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            🔒 User #3 Sovereign Home Dashboard
          </button>
        </div>

        {/* SECTION 1: EXECUTIVE CASE STUDY */}
        {activeTabSubView === 'case_study' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Context & Strategic Overview */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-amber-500/30 shadow-md space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    EXPOSENOMICS CASE STUDY #003 • STATE OF NEW MEXICO
                  </span>
                  <h2 className="text-2xl font-serif font-black text-stone-900 dark:text-white">
                    Why Deb Haaland’s Data Center Moratorium Is the Exact Catalyst for ICEarth Sovereign AI
                  </h2>
                </div>
                <span className="px-3 py-1 bg-emerald-600/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/40 rounded-full font-mono text-xs font-bold">
                  Sovereign Alignment: 100%
                </span>
              </div>

              <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed space-y-4">
                <p>
                  <strong>The Crisis in The Land of Enchantment:</strong> Silicon Valley hyperscalers (Amazon Web Services, Microsoft, Google, and Meta) 
                  have targeted New Mexico—specifically Los Lunas, Albuquerque&apos;s Mesa del Sol, Santa Fe County, and the Rio Grande corridor—for gigawatts of new 
                  data center capacity. While corporate marketing brochures promise &quot;high-tech economic modernization,&quot; New Mexico faces a catastrophic resource collision:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose my-4">
                  <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-300 dark:border-red-900">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold text-sm mb-1">
                      <Droplets size={16} />
                      <span>Aquifer Depletion</span>
                    </div>
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      Evaporative cooling uses up to 5M gallons of drinking water daily per facility in a desert state enduring its worst drought in 1,200 years.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-900">
                    <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-sm mb-1">
                      <Zap size={16} />
                      <span>Grid Hijacking</span>
                    </div>
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      Gigawatt server loads threaten PNM grid stability, forcing working New Mexican families to subsidize expensive fossil peaker plants through double-digit rate increases.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-300 dark:border-purple-900">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm mb-1">
                      <Landmark size={16} />
                      <span>Extractive Colonialism</span>
                    </div>
                    <p className="text-xs text-stone-700 dark:text-stone-300">
                      Profits and proprietary model weights are extracted to California, while New Mexico absorbs the air pollution, diesel backup exhaust, and toxic e-waste.
                    </p>
                  </div>
                </div>

                <p>
                  <strong>Deb Haaland’s Historical Mandate:</strong> Deb Haaland understands this colonial extractive dynamic intimately. 
                  Her Laguna Pueblo ancestors have stewarded water and land across 35 generations. As US Secretary of the Interior, she restored 
                  tribal co-stewardship across hundreds of millions of acres of public lands. When she declared on September 17, 2026:
                  <em> &ldquo;I support a moratorium on data centers until developers can meet the strong, clear, statewide protections many New Mexicans want,&rdquo;</em>
                  she drew a definitive boundary between predatory corporate resource raiding and genuine community welfare.
                </p>

                <p>
                  <strong>How ICEarth Provides the Superior Alternative:</strong> Indigenous Communities Earth was created in Taos, New Mexico specifically to solve this dilemma. 
                  Collaborating with Jicarilla Apache partners (Dulce, NM), Taos Pueblo, and Laguna Pueblo thinkers, ICEarth engineered a decentralized <strong>Sovereign Hybrid IT architecture</strong>. 
                  Instead of centralized 500MW corporate mega-centers that pillage the water table, ICEarth deploys <strong>distributed 2MW to 10MW sovereign nodes</strong>:
                </p>
                
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Waterless:</strong> 100% closed-loop dielectric immersion cooling consuming 0 gallons of drinking water.</li>
                  <li><strong>Self-Powered:</strong> 100% on-site tribal agrivoltaic solar and iron-flow battery microgrids that feed surplus power to rural homes.</li>
                  <li><strong>Treaty-Protected:</strong> Owned by Tribal Councils and New Mexico public trusts under Shamir 3/5 Elder Key cryptography.</li>
                  <li><strong>Local High-Wage Careers:</strong> Training local New Mexico workers and Native youth in sovereign AI orchestration and phytoremediation telemetry.</li>
                </ul>
              </div>
            </div>

            {/* Radar Comparison Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-6 p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-stone-100">
                    8-Point Accountability Compliance
                  </h3>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    Radar Evaluation
                  </span>
                </div>
                <p className="text-xs text-stone-600 dark:text-stone-400 mb-4">
                  Visualizing compliance scores across Deb Haaland’s 8 accountability measures: Big Tech Hyperscale Data Centers vs. ICEarth Sovereign Indigenous Computing.
                </p>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarComparisonData}>
                      <PolarGrid stroke="#78716c" opacity={0.3} />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#78716c', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#78716c" opacity={0.5} />
                      <Radar name="ICEarth Sovereign Nodes" dataKey="ICEarth" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                      <Radar name="Corporate Hyperscale Centers" dataKey="Corporate" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Strategic Takeaway Card */}
              <div className="lg:col-span-6 space-y-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-emerald-500/10 to-stone-900/10 dark:from-amber-950/40 dark:via-emerald-950/40 dark:to-stone-900 border-2 border-amber-500/40 shadow-md">
                  <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-serif font-black text-lg mb-2">
                    <Award size={20} className="text-amber-600" />
                    <span>The Sovereign New Mexico Guarantee</span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans mb-3">
                    Governor Deb Haaland’s 8 measures provide the precise legal and policy foundation for New Mexico to become the world capital of <strong>Sovereign Green Computing</strong>. 
                    Rather than saying &quot;no&quot; to technology, New Mexico under Governor Haaland will say <strong>&quot;YES on our sovereign terms&quot;</strong>:
                  </p>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="flex items-start gap-2 text-stone-800 dark:text-stone-200">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>State Sovereign Cloud:</strong> Built on Jicarilla & Pueblo lands, keeping NM state data out of Silicon Valley surveillance architectures.</span>
                    </div>
                    <div className="flex items-start gap-2 text-stone-800 dark:text-stone-200">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Water Protection Act:</strong> Zero municipal drinking water permits issued to high-evaporative cooling data centers.</span>
                    </div>
                    <div className="flex items-start gap-2 text-stone-800 dark:text-stone-200">
                      <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Ratepayer Shield:</strong> Mandatory 100% off-grid or dedicated behind-the-meter generation for all large server deployments.</span>
                    </div>
                  </div>
                </div>

                {/* Quick Switch to Auditor */}
                <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-xs font-bold text-stone-900 dark:text-white">Audit Every Measure</h4>
                    <p className="text-[11px] text-stone-500">Explore the problem, Haaland mandate, and ICEarth solution for each measure.</p>
                  </div>
                  <button
                    onClick={() => setActiveTabSubView('accountability_audit')}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold rounded-lg transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect 8 Points</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: INTERACTIVE 8 ACCOUNTABILITY MEASURES AUDITOR */}
        {activeTabSubView === 'accountability_audit' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                DEB HAALAND FOR NEW MEXICO • 8 ACCOUNTABILITY MEASURES AUDITOR
              </span>
              <h2 className="text-2xl font-serif font-black text-stone-900 dark:text-white">
                Detailed Measure-by-Measure Analysis & Sovereign Fulfillment
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                Select any of Governor Haaland&apos;s 8 accountability measures to review the corporate threat, her statewide mandate, and ICEarth&apos;s technological proof.
              </p>
            </div>

            {/* Horizontal Measure Selector */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
              {accountabilityMeasures.map((measure, idx) => {
                const Icon = measure.icon;
                const isSelected = activeMeasureIndex === idx;
                return (
                  <button
                    key={measure.id}
                    onClick={() => setActiveMeasureIndex(idx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-md font-black ring-2 ring-amber-400'
                        : 'bg-white dark:bg-stone-900 hover:bg-amber-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 border-stone-200 dark:border-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <Icon size={18} className={isSelected ? 'text-stone-950' : 'text-amber-600 dark:text-amber-400'} />
                      <span className="text-[10px] font-mono font-black">#{measure.id}</span>
                    </div>
                    <span className="text-[11px] font-bold line-clamp-2 leading-tight">
                      {measure.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Measure Detail Card */}
            {(() => {
              const current = accountabilityMeasures[activeMeasureIndex];
              const Icon = current.icon;
              return (
                <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-stone-900 border-2 border-amber-500/40 shadow-xl space-y-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                        <Icon size={24} />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase">
                          MEASURE #{current.id} • {current.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-black text-stone-900 dark:text-white">
                          {current.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-xs font-mono">
                      <div className="px-3 py-1.5 rounded-lg bg-red-100 dark:bg-red-950/60 border border-red-300 dark:border-red-900 text-red-700 dark:text-red-300 font-bold">
                        Corporate Score: {current.corporateScore}%
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-900 text-emerald-700 dark:text-emerald-300 font-bold">
                        ICEarth Fulfillment: {current.complianceScore}%
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* The Corporate Problem */}
                    <div className="p-5 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 space-y-2">
                      <div className="flex items-center gap-1.5 text-red-700 dark:text-red-400 font-bold text-xs font-mono uppercase">
                        <XCircle size={15} />
                        <span>The Corporate Status Quo</span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white">
                        What Monopolies Do Today
                      </h4>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {current.problem}
                      </p>
                    </div>

                    {/* Deb Haaland's Mandate */}
                    <div className="p-5 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-900/60 space-y-2">
                      <div className="flex items-center gap-1.5 text-amber-700 dark:text-amber-400 font-bold text-xs font-mono uppercase">
                        <Landmark size={15} />
                        <span>Deb Haaland’s Mandate</span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white">
                        The Moratorium Standard
                      </h4>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {current.haalandMandate}
                      </p>
                    </div>

                    {/* ICEarth Solution */}
                    <div className="p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-300 dark:border-emerald-900/60 space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 font-bold text-xs font-mono uppercase">
                        <CheckCircle2 size={15} />
                        <span>ICEarth Sovereign Proof</span>
                      </div>
                      <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white">
                        How ICEarth Native Fulfills It
                      </h4>
                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {current.icearthSolution}
                      </p>
                    </div>
                  </div>

                  {/* Navigation between measures */}
                  <div className="flex items-center justify-between pt-2 border-t border-stone-200 dark:border-stone-800 text-xs font-mono">
                    <button
                      disabled={activeMeasureIndex === 0}
                      onClick={() => setActiveMeasureIndex((prev) => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 rounded bg-stone-100 dark:bg-stone-800 disabled:opacity-30 cursor-pointer hover:bg-stone-200 dark:hover:bg-stone-700"
                    >
                      ← Previous Measure
                    </button>
                    <span className="text-stone-500">Measure {current.id} of 8</span>
                    <button
                      disabled={activeMeasureIndex === 7}
                      onClick={() => setActiveMeasureIndex((prev) => Math.min(7, prev + 1))}
                      className="px-3 py-1.5 rounded bg-amber-600 text-white disabled:opacity-30 cursor-pointer hover:bg-amber-500 font-bold"
                    >
                      Next Measure →
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* SECTION 3: BIG TECH VS. ICEARTH QUANTITATIVE PROOF MATRIX */}
        {activeTabSubView === 'solution_matrix' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="text-center sm:text-left">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                QUANTITATIVE BENCHMARK FOR A 100MW NEW MEXICO CLUSTER
              </span>
              <h2 className="text-2xl font-serif font-black text-stone-900 dark:text-white">
                Hyperscale Data Center vs. ICEarth Sovereign Indigenous Mesh
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                Empirical comparative metrics demonstrating why ICEarth preserves New Mexico’s water, budget, and power grid.
              </p>
            </div>

            {/* Table of Quantitative Proofs */}
            <div className="overflow-x-auto rounded-2xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 shadow-md">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 font-mono text-[11px] uppercase border-b border-stone-200 dark:border-stone-800">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">Metric / Impact Vector</th>
                    <th className="py-3.5 px-4 font-bold text-red-600 dark:text-red-400">Hyperscale Big Tech (100MW)</th>
                    <th className="py-3.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">ICEarth Sovereign Mesh (100MW)</th>
                    <th className="py-3.5 px-4 font-bold">Haaland Compliance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200 dark:divide-stone-800 font-sans">
                  {metricsComparisonData.map((item, idx) => (
                    <tr key={idx} className="hover:bg-stone-50 dark:hover:bg-stone-800/40 transition-colors">
                      <td className="py-3 px-4 font-bold text-stone-900 dark:text-stone-100">
                        <div>{item.metric}</div>
                        <div className="text-[11px] text-stone-500 font-normal font-mono">{item.note}</div>
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-red-600 dark:text-red-400">
                        {item.corporate}
                      </td>
                      <td className="py-3 px-4 font-mono font-bold text-emerald-600 dark:text-emerald-400">
                        {item.icearth}
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[10px] flex items-center gap-1 w-fit">
                          <Check size={11} />
                          <span>100% Meets Mandate</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bar Chart Visualization */}
            <div className="p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-sm">
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 mb-2">
                Water Depletion Comparison (Million Gallons per Day)
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Hyperscale data centers consume millions of gallons of desert drinking water daily; ICEarth consumes 0 gallons via closed-loop dielectric immersion cooling.
              </p>
              <div className="h-48 w-full max-w-xl">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={[
                      { name: 'Hyperscale Center (100MW)', water: 3.8, fill: '#ef4444' },
                      { name: 'ICEarth Sovereign Mesh (100MW)', water: 0.0, fill: '#10b981' }
                    ]}
                    margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                    <XAxis type="number" unit=" M Gal/day" />
                    <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} />
                    <Tooltip />
                    <Bar dataKey="water" name="Water Consumed (Million Gal/Day)" radius={[0, 8, 8, 0]}>
                      <Cell fill="#ef4444" />
                      <Cell fill="#10b981" />
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: USER #3 SOVEREIGN DASHBOARD & CASE STUDY PROFILE */}
        {activeTabSubView === 'user3_dashboard' && (
          <div className="space-y-6 animate-fadeIn">
            {/* User #3 Membership Certificate */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 text-white border-2 border-amber-500 shadow-2xl space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-amber-500/40 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 via-amber-500 to-emerald-600 p-0.5 flex items-center justify-center shadow-lg">
                    <div className="w-full h-full bg-stone-950 rounded-2xl flex items-center justify-center font-serif font-black text-xl text-amber-300">
                      DH
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-red-600 text-white text-[9px] font-mono font-black rounded uppercase tracking-wider">
                        ICEARTH MEMBER #003
                      </span>
                      <span className="text-xs font-mono text-amber-400 font-bold">Laguna Pueblo Citizen</span>
                    </div>
                    <h3 className="text-2xl font-serif font-black text-white">
                      Deb Haaland • Governor of New Mexico
                    </h3>
                    <p className="text-xs text-stone-300 font-mono">
                      Former US Secretary of the Interior • 35th Generation New Mexican
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] font-mono uppercase text-stone-400 block">Sovereign Vault Cryptographic Root</span>
                  <div className="flex items-center gap-2 mt-1">
                    <code className="text-xs font-mono text-amber-300 bg-stone-900 px-2 py-1 rounded border border-amber-500/40">
                      0xUSER_003_DEB_HAALAND_LAGUNA...
                    </code>
                    <button
                      onClick={handleCopyHash}
                      className="p-1 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/40 cursor-pointer"
                      title="Copy Full Vault Hash"
                    >
                      {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Three Sovereign Pillars of User #3 Home */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-900/90 border border-amber-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono uppercase">
                    <Landmark size={15} />
                    <span>Statewide Moratorium Authority</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white">Executive Directive #1</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Statutory pause on all municipal water and high-voltage interconnect permits for speculative corporate data centers until developers satisfy the 8 clear statewide protections.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/90 border border-emerald-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono uppercase">
                    <Cpu size={15} />
                    <span>Pueblo & Tribal Cloud Mesh</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white">Inter-Tribal Compact</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Partnering with Jicarilla Apache (User #2 Ouray Muskrat), Taos Pueblo, and Laguna Pueblo to deploy distributed, air-gapped sovereign IT nodes running on tribal solar microgrids.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/90 border border-red-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-bold text-xs font-mono uppercase">
                    <ShieldCheck size={15} />
                    <span>Biocultural Data Sovereignty</span>
                  </div>
                  <h4 className="font-serif font-bold text-sm text-white">Cryptographic Privacy</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Ensuring all New Mexico educational, health, and ancestral linguistic datasets remain inside state and tribal borders, shielded against unauthorized Silicon Valley scraping.
                  </p>
                </div>
              </div>

              {/* Links and Contact Details */}
              <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-4">
                  <a
                    href="https://x.com/DebHaalandNM"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-amber-400 hover:text-white"
                  >
                    <span>@DebHaalandNM on X</span>
                    <ExternalLink size={12} />
                  </a>
                  <a
                    href="http://DebHaaland.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-emerald-400 hover:text-white"
                  >
                    <span>DebHaaland.com</span>
                    <ExternalLink size={12} />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-stone-400">Sequence in ICEarth:</span>
                  <span className="text-white font-bold">#1 Norm Roulet → #2 Ouray Muskrat → #3 Deb Haaland</span>
                </div>
              </div>
            </div>

            {/* Cross Navigation Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <button
                onClick={() => onNavigateTab && onNavigateTab('jicarilla_sovereign_it')}
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-left hover:border-amber-500 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-stone-500 text-xs font-mono mb-1">
                  <span>Collaborative Partner</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white group-hover:text-amber-600">
                  Jicarilla Sovereign IT
                </h4>
                <p className="text-xs text-stone-500 mt-1">Air-gapped 3-Tier Dulce micro-datacenter (User #2 Ouray Muskrat).</p>
              </button>

              <button
                onClick={() => onNavigateTab && onNavigateTab('ai_sovereignty')}
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-left hover:border-red-500 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-stone-500 text-xs font-mono mb-1">
                  <span>Related Audit</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white group-hover:text-red-600">
                  Global AI Sovereignty (Plate #50)
                </h4>
                <p className="text-xs text-stone-500 mt-1">Forensic critique of corporate watchdogs vs. indigenous enclaves.</p>
              </button>

              <button
                onClick={() => onNavigateTab && onNavigateTab('icearth_stack')}
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-left hover:border-emerald-500 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-stone-500 text-xs font-mono mb-1">
                  <span>Hardware Stack</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white group-hover:text-emerald-600">
                  The ICEarth Stack (Plate #38)
                </h4>
                <p className="text-xs text-stone-500 mt-1">The clean compute and hardware architecture for indigenous AI.</p>
              </button>

              <button
                onClick={() => onNavigateTab && onNavigateTab('icetaos')}
                className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-left hover:border-amber-500 transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-stone-500 text-xs font-mono mb-1">
                  <span>Founding Community</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white group-hover:text-amber-600">
                  ICETaos Community Hub
                </h4>
                <p className="text-xs text-stone-500 mt-1">Taos Pueblo & high-desert ancestral sovereign computing roots.</p>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ARTWORK MODAL */}
      {showArtworkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/90 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-stone-950 rounded-2xl overflow-hidden border-2 border-amber-500 shadow-2xl">
            <button
              onClick={() => setShowArtworkModal(false)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-stone-900/80 text-stone-300 hover:text-white border border-stone-700 cursor-pointer"
            >
              ✕
            </button>

            {/* Modal header switcher tabs */}
            <div className="bg-stone-900 px-6 py-3 border-b border-stone-800 flex flex-wrap items-center gap-2 pr-14">
              <span className="text-[11px] font-mono text-stone-400 font-bold mr-2 hidden sm:inline">ARCHIVE SELECTION:</span>
              <button
                onClick={() => setSelectedPlate('plate52')}
                className={`py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedPlate === 'plate52'
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                Plate #52: 8 Laws Infographic
              </button>
              <button
                onClick={() => setSelectedPlate('laguna')}
                className={`py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedPlate === 'laguna'
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                Laguna Pueblo Homeland
              </button>
              <button
                onClick={() => setSelectedPlate('plate51')}
                className={`py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  selectedPlate === 'plate51'
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                Plate #51: User #3 Profile
              </button>
              <button
                onClick={() => setSelectedPlate('newyorker')}
                className={`py-1.5 px-3 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer hidden md:inline-block ${
                  selectedPlate === 'newyorker'
                    ? 'bg-amber-500 text-stone-950 shadow-md'
                    : 'bg-stone-800 text-stone-300 hover:text-white'
                }`}
              >
                Portrait Study
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
              <div className="lg:col-span-7 bg-black flex items-center justify-center p-4">
                <img
                  src={
                    selectedPlate === 'plate52'
                      ? nmItSovereigntyPlateImg
                      : (selectedPlate === 'laguna'
                        ? lagunaHomelandLandscapeImg
                        : (selectedPlate === 'plate51' ? debHaalandProfileImg : debHaalandNewYorkerImg))
                  }
                  alt={
                    selectedPlate === 'plate52'
                      ? 'The 8 Laws of New Mexico IT Sovereignty Plate #52 with Laguna Pueblo homeland'
                      : (selectedPlate === 'laguna'
                        ? 'Authentic Homeland: Laguna Pueblo, New Mexico'
                        : (selectedPlate === 'plate51' ? 'Governor Deb Haaland ICEarth Home Plate #51' : 'Official New Yorker Portrait Deb Haaland'))
                  }
                  className="w-full h-auto object-contain max-h-[75vh] rounded-lg shadow-lg"
                />
              </div>

              <div className="lg:col-span-5 p-6 space-y-4 text-left font-sans text-stone-300">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase font-black tracking-wider">
                    {selectedPlate === 'plate52'
                      ? 'PLATE #52 • CRYPTOGRAPHIC INFOGRAPHIC PROVENANCE'
                      : (selectedPlate === 'laguna'
                        ? 'AUTHENTIC LANDSCAPE PROVENANCE • PUEBLO OF LAGUNA'
                        : (selectedPlate === 'plate51'
                          ? 'PLATE #51 • SOVEREIGN USER CREDENTIAL'
                          : 'OFFICIAL PORTRAIT STUDY • THE NEW YORKER'))}
                  </span>
                  <h3 className="text-xl font-serif font-black text-white">
                    {selectedPlate === 'plate52'
                      ? 'The 8 Laws of New Mexico IT Sovereignty: Governor Deb Haaland Directive'
                      : (selectedPlate === 'laguna'
                        ? 'Deb Haaland’s Ancestral Homeland: Laguna Pueblo, New Mexico'
                        : (selectedPlate === 'plate51'
                          ? 'Governor Deb Haaland: Enrolled Member of Laguna Pueblo & User #3'
                          : 'Deb Haaland: Official New Yorker Portrait by Celeste Sloman'))}
                  </h3>
                  <p className="text-xs text-stone-400 font-mono">
                    {selectedPlate === 'plate52'
                      ? 'Deb Haaland (Foreground) & Authentic Laguna Pueblo Homeland (Background) • Verbatim 8 Laws'
                      : (selectedPlate === 'laguna'
                        ? 'Old Laguna Hillside Village • San José de la Laguna Mission Church (1699) • Mount Taylor'
                        : (selectedPlate === 'plate51'
                          ? 'Laguna Pueblo Ancestral Sovereignty • Former US Secretary of the Interior'
                          : 'Authentic Visionary Portrait • Turquoise Blazer & Traditional Silver Zia Sun Pendant'))}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-stone-900 border border-stone-800 text-xs font-mono space-y-1.5">
                  <div className="flex justify-between text-stone-400">
                    <span>Subject:</span>
                    <span className="text-amber-300 font-bold">
                      {selectedPlate === 'plate52'
                        ? '8 Laws of NM IT Sovereignty'
                        : (selectedPlate === 'laguna'
                          ? 'Laguna Pueblo Homeland'
                          : (selectedPlate === 'plate51' ? 'Deb Haaland (User #3)' : 'Official Portrait Archive'))}
                    </span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Date:</span>
                    <span className="text-stone-200">September 17, 2026</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Origin:</span>
                    <span className="text-stone-200">
                      {selectedPlate === 'laguna'
                        ? 'Laguna Pueblo, Cibola County, NM'
                        : 'Laguna Pueblo, NM'}
                    </span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Medium:</span>
                    <span className="text-stone-200">
                      {selectedPlate === 'plate52'
                        ? 'Sovereign Infographic Master Plate'
                        : (selectedPlate === 'laguna'
                          ? 'Documentary Landscape Photography'
                          : 'Sovereign Photographic Plate')}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-stone-400 font-bold">Sovereign Vault Hash:</span>
                  <div className="flex items-center gap-2">
                    <code className="text-xs font-mono text-amber-300 bg-stone-900 p-2 rounded border border-amber-500/40 w-full break-all">
                      {currentVaultHash}
                    </code>
                    <button
                      onClick={handleCopyHash}
                      className="p-2 rounded bg-amber-500 text-stone-950 hover:bg-amber-400 cursor-pointer font-bold"
                    >
                      {copiedHash ? <Check size={14} /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-stone-800 text-xs text-stone-300 leading-relaxed font-serif">
                  {selectedPlate === 'plate52' ? (
                    <>
                      <p>
                        <strong>Plate #52 Summary:</strong> This authoritative master infographic plate features Governor Deb Haaland (enrolled member of Laguna Pueblo, 35th generation New Mexican) in the foreground with her authentic ancestral homeland of Laguna Pueblo in the background. It presents her official statement calling for a statewide moratorium on data centers until developers meet strong community protections, accompanied by her exact 8 accountability measures.
                      </p>
                      <p>
                        Displays her exact verified words: 1. No backroom deals, strong community benefits; 2. No utility rate increases &amp; reliable energy for New Mexicans; 3. Protect New Mexico’s water; 4. New Mexico jobs for New Mexico workers; 5. Expand renewable energy; 6. Clean air, land, and habitat; 7. Clean up your mess. Any industry in New Mexico should clean up after themselves; 8. Accountable to communities.
                      </p>
                    </>
                  ) : selectedPlate === 'laguna' ? (
                    <>
                      <p>
                        <strong>Laguna Pueblo Homeland Documentation:</strong> Authentic documentary landscape photograph of Deb Haaland’s actual homeland: the historic village of Old Laguna, New Mexico (Kawaik, Cibola County). Situated atop a sunlit sandstone rise, the village is crowned by the white adobe mission church of San José de la Laguna, founded in 1699.
                      </p>
                      <p>
                        In the background across the high desert rises Mount Taylor (Tsiipiya), one of the four sacred mountains of the Southwest. This authentic geographical record ensures that Deb Haaland’s indigenous lineage, culture, and environmental policies remain accurately and respectfully situated in her true ancestral territory, rejecting generic or interchangeable representations.
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <strong>Plate Summary:</strong> This plate captures the convergence of Deb Haaland&apos;s 35th generation Laguna Pueblo heritage, her executive leadership as US Secretary of the Interior and future Governor of New Mexico, and her welcoming as ICEarth User #3.
                      </p>
                      <p>
                        It stands alongside User #1 Norm Roulet (Founder, Exposenomics) and User #2 Ouray Muskrat (Jicarilla Apache Nation phytoremediation leader and producer) as the cornerstone of New Mexico&apos;s sovereign computing future.
                      </p>
                    </>
                  )}
                </div>

                <div className="pt-3 space-y-2">
                  <a
                    href="http://DebHaaland.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-black text-xs rounded-xl flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Learn More at DebHaaland.com</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href="https://x.com/DebHaalandNM/status/2100685661917553063"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-2 bg-stone-900 hover:bg-stone-800 text-stone-300 font-mono text-xs rounded-xl flex items-center justify-center gap-2 border border-stone-700"
                  >
                    <span>Read Verified Statement on X (@DebHaalandNM)</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
