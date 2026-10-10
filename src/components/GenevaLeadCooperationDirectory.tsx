import React, { useState, useMemo } from 'react';
import genevaLeadPlateImg from '../assets/images/geneva_lead_elimination_cooperation_1791590581970.jpg';
import {
  Globe,
  Building2,
  Shield,
  ShieldCheck,
  Search,
  ExternalLink,
  Mail,
  MapPin,
  FileText,
  Scale,
  Award,
  Sparkles,
  ArrowRight,
  Maximize2,
  Copy,
  Check,
  Users,
  Compass,
  AlertTriangle,
  HeartPulse,
  Database,
  Layers,
  Phone,
  Bookmark,
  Share2,
  Filter,
  CheckCircle2,
  Calendar,
  Zap,
  TrendingUp,
  Cpu
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
  Cell,
  LineChart,
  Line
} from 'recharts';

interface GenevaLeadCooperationDirectoryProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

interface GenevaOrganization {
  id: string;
  acronym: string;
  name: string;
  category: 'UN Specialized Agency' | 'Multilateral Convention' | 'Global Partnership' | 'Human Rights Mandate' | 'Network Secretariat';
  address: string;
  city: string;
  postalCode: string;
  country: string;
  website: string;
  emailContact?: string;
  leadSpecificRole: string;
  keyInitiatives: string[];
  historicalBenchmark: string;
  rouletLawConvergence: string;
  badgeColor: string;
}

export const GenevaLeadCooperationDirectory: React.FC<GenevaLeadCooperationDirectoryProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  const [activeSubTab, setActiveSubTab] = useState<
    'directory' | 'swiss_school_exposenomics' | 'multilateral_benchmarks' | 'prevent_package' | 'provenance'
  >('directory');

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeOrgModal, setActiveOrgModal] = useState<GenevaOrganization | null>(null);

  const vaultHash = '0xGENEVA_2026_SWISS_SCHOOL_EXPOSENOMICS_LEAD_COOPERATION_PLATE_77';
  const provenanceSha256 = 'b4c8109d72e65fa1a083f2e1859c7041a87de64c391bb72c10283c921473fa58';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Geneva Lead Directory Organizations
  const genevaOrganizations: GenevaOrganization[] = [
    {
      id: 'GEN-01',
      acronym: 'WHO',
      name: 'World Health Organization (International Programme on Chemical Safety)',
      category: 'UN Specialized Agency',
      address: 'Avenue Appia 20',
      city: 'Geneva',
      postalCode: 'CH-1211 Geneva 27',
      country: 'Switzerland',
      website: 'https://www.who.int/teams/environment-climate-change-and-health/chemical-safety-and-health/health-impacts/chemicals/lead',
      emailContact: 'ipcsmail@who.int',
      leadSpecificRole: 'Establishes global medical and clinical guidelines on blood lead concentrations; co-leads the Global Alliance to Eliminate Lead Paint (GAELP) with UNEP; developing the WHO PREVENT Technical Package on Lead Poisoning Prevention scheduled for full release in 2027.',
      keyInitiatives: [
        'WHO Guideline for Clinical Management of Exposure to Lead (Recommends intervention at any detectable blood lead level)',
        'WHO PREVENT Technical Package (Prioritize, Respond, Engage, Verify, Enforce, Track)',
        'International Lead Poisoning Prevention Week (ILPPW) Global Campaign Lead',
        'Chemicals of Major Public Health Concern Risk Assessments'
      ],
      historicalBenchmark: 'Affirmed that no blood lead level exists without profound biochemical, neurological, and cardiovascular toxicity.',
      rouletLawConvergence: 'Provides clinical and toxicological verification of Roulet\'s Law by proving cellular harm occurs below outdated municipal action limits.',
      badgeColor: 'blue'
    },
    {
      id: 'GEN-02',
      acronym: 'UNEP Chemicals',
      name: 'UN Environment Programme (Chemicals and Health Branch)',
      category: 'UN Specialized Agency',
      address: 'International Environment House I, 11-13 Chemin des Anémones',
      city: 'Châtelaine, Geneva',
      postalCode: 'CH-1219 Châtelaine',
      country: 'Switzerland',
      website: 'https://www.unep.org/explore-topics/chemicals-waste/what-we-do/emerging-issues/lead-and-cadmium',
      emailContact: 'unep-chemicals@un.org',
      leadSpecificRole: 'Serves as joint Secretariat for the Global Alliance to Eliminate Lead Paint (GAELP) alongside WHO; coordinates the Partnership for Clean Fuels and Vehicles (PCFV) which achieved global phase-out of leaded gasoline.',
      keyInitiatives: [
        'Global Alliance to Eliminate Lead Paint (GAELP) Secretariat',
        'Partnership for Clean Fuels and Vehicles (PCFV) - Avoided 1.2M premature deaths/yr ($2.45T annual benefit)',
        'Model Law and Guidance for Regulating Lead Paint (90 ppm standard)',
        'Global Status Updates on Legal Limits on Lead in Paint (73+ countries enacted)'
      ],
      historicalBenchmark: 'Spearheaded the 20-year global elimination of tetraethyl lead in automotive petrol, completing the campaign across 82 nations.',
      rouletLawConvergence: 'Validates Roulet\'s Law macro-scale environmental shift from airborne tetraethyl lead to chronic infrastructure and industrial sinks.',
      badgeColor: 'teal'
    },
    {
      id: 'GEN-03',
      acronym: 'BRS Conventions',
      name: 'Secretariat of the Basel, Rotterdam and Stockholm Conventions',
      category: 'Multilateral Convention',
      address: 'International Environment House I, 11-13 Chemin des Anémones',
      city: 'Châtelaine, Geneva',
      postalCode: 'CH-1219 Châtelaine',
      country: 'Switzerland',
      website: 'http://www.basel.int/',
      emailContact: 'brs@brsmeas.org',
      leadSpecificRole: 'Enforces multilateral controls on transboundary movements of hazardous lead wastes; authors Technical Guidelines on Environmentally Sound Management (ESM) of Waste Lead-Acid Batteries and metal compounds recycling.',
      keyInitiatives: [
        'Technical Guidelines on Environmentally Sound Management of Waste Lead-Acid Batteries (Updated 2022-2026)',
        'Technical Guidelines on Environmentally Sound Recycling/Reclamation of Metals (R4)',
        'Prior Informed Consent (PIC) Procedure for Transboundary Hazardous Waste Movements',
        'Partnership on Technical Assistance to Developing Countries for Used Lead-Acid Batteries (ULAB)'
      ],
      historicalBenchmark: 'Established legally binding multilateral export restrictions preventing developed nations from dumping lead battery scrap onto vulnerable developing communities.',
      rouletLawConvergence: 'Aligns with Roulet\'s Law proof regarding transboundary industrial pollution shifts and unequal toxic burden distribution in LMICs.',
      badgeColor: 'emerald'
    },
    {
      id: 'GEN-04',
      acronym: 'GAHP',
      name: 'Global Alliance on Health and Pollution',
      category: 'Global Partnership',
      address: 'Campus Biotech Innovation Park, Avenue Sécheron 15',
      city: 'Geneva',
      postalCode: 'CH-1202 Geneva',
      country: 'Switzerland',
      website: 'https://gahp.net/',
      emailContact: 'info@gahp.net',
      leadSpecificRole: 'Collaborative body uniting over 70 members and dozens of observers from national ministries, UN agencies, and NGOs to mobilize policy resources against toxic lead, air, and water pollution in low- and middle-income countries.',
      keyInitiatives: [
        'Global Lead Forum Host (Collaborative knowledge-sharing platform with Pure Earth)',
        'Health and Pollution Action Plans (HPAPs) for national governments',
        'Lancet Commission on Pollution and Health Co-Leadership',
        'Targeted remediation roadmaps for informal battery recycling and contaminated pottery'
      ],
      historicalBenchmark: 'Pioneered multisectoral quantification of pollution burden, linking environmental toxins directly to global GDP loss and childhood IQ decline.',
      rouletLawConvergence: 'Directly operationalizes Roulet\'s Law policy benchmarking by quantifying systemic cardiovascular and cognitive genocost.',
      badgeColor: 'amber'
    },
    {
      id: 'GEN-05',
      acronym: 'GFC / SAICM',
      name: 'Global Framework on Chemicals (formerly SAICM Secretariat)',
      category: 'Multilateral Convention',
      address: 'International Environment House I, 11-13 Chemin des Anémones',
      city: 'Châtelaine, Geneva',
      postalCode: 'CH-1219 Châtelaine',
      country: 'Switzerland',
      website: 'https://www.chemicalsframework.org/',
      emailContact: 'gfc.secretariat@un.org',
      leadSpecificRole: 'Adopted in September 2023 at ICCM5 in Bonn to succeed SAICM; provides global building blocks for toxic chemical phase-outs, including dedicated issues of concern on Lead in Paint and lead in consumer goods.',
      keyInitiatives: [
        'Global Framework on Chemicals - For a Planet Free of Harm from Chemicals and Waste',
        'Lead in Paint Issue of Concern Workstream',
        'First International Conference on Chemicals Management (Convenes November 2026)',
        'Multi-stakeholder financing mechanism for chemicals safety in LMICs'
      ],
      historicalBenchmark: 'Unites 180+ member governments, chemical industry federations, and civil society under unified global chemicals targets.',
      rouletLawConvergence: 'Provides global regulatory architecture to codify Roulet\'s Law sovereign standards into binding international chemical targets.',
      badgeColor: 'indigo'
    },
    {
      id: 'GEN-06',
      acronym: 'ILO',
      name: 'International Labour Organization',
      category: 'UN Specialized Agency',
      address: 'Route des Morillons 4',
      city: 'Geneva',
      postalCode: 'CH-1211 Geneva 22',
      country: 'Switzerland',
      website: 'https://www.ilo.org/global/topics/safety-and-health-at-work/areasofwork/occupational-health/chemicals/lang--en/index.htm',
      emailContact: 'safework@ilo.org',
      leadSpecificRole: 'Pioneered international occupational lead safety beginning in 1919 with Recommendation No. 4; enforces the Chemicals Convention No. 170 to protect workers and pregnant women along global industrial supply chains.',
      keyInitiatives: [
        'Lead Poisoning (Women and Children) Recommendation No. 4 (1919) - One of ILO\'s very first international conventions',
        'Chemicals Convention, 1990 (No. 170) and Recommendation No. 177',
        'Occupational Safety and Health in Used Lead-Acid Battery Recycling Facilities Guidelines',
        'Decent Work in Global Supply Chains Chemical Safety Audits'
      ],
      historicalBenchmark: 'Enacted the world\'s first multilateral treaty standard explicitly banning women and children from industrial lead processing in 1919.',
      rouletLawConvergence: 'Validates Roulet\'s 100-year historical timeline showing industrial knowledge of maternal and pediatric lead harm pre-dated modern denials.',
      badgeColor: 'purple'
    },
    {
      id: 'GEN-07',
      acronym: 'UN SR Toxics',
      name: 'UN Special Rapporteur on Toxics and Human Rights',
      category: 'Human Rights Mandate',
      address: 'Palais des Nations',
      city: 'Geneva',
      postalCode: 'CH-1211 Geneva 10',
      country: 'Switzerland',
      website: 'https://www.ohchr.org/en/special-procedures/sr-toxics-and-human-rights',
      emailContact: 'hrc-sr-toxicshr@un.org',
      leadSpecificRole: 'Independent expert mandated by the UN Human Rights Council to investigate human rights violations arising from toxic exposure; authored landmark findings on lead-contaminated housing and rights to effective legal remedy.',
      keyInitiatives: [
        'Report on The Human Right to an Effective Remedy: The Case of Lead-Contaminated Housing in Kosovo (2020)',
        'Right to a Clean, Healthy and Sustainable Environment Doctrine Enforcement (UNGA Res 76/300)',
        'Country Mandate Visits investigating artisanal mining, smelter emissions, and environmental racism',
        'Communications to States and Corporations on Extractive Metallurgy Harms'
      ],
      historicalBenchmark: 'Established that state failure to protect citizens from environmental lead constitutes a direct violation of the fundamental human right to life and bodily integrity.',
      rouletLawConvergence: 'Supplies legal jurisprudential grounding for Roulet\'s Law sovereign restitution and corporate accountability litigation.',
      badgeColor: 'rose'
    },
    {
      id: 'GEN-08',
      acronym: 'GEN',
      name: 'Geneva Environment Network',
      category: 'Network Secretariat',
      address: 'International Environment House II, 9 Chemin de Balexert',
      city: 'Châtelaine, Geneva',
      postalCode: 'CH-1219 Châtelaine',
      country: 'Switzerland',
      website: 'https://www.genevaenvironmentnetwork.org/resources/news/lead-poisoning-prevention/',
      emailContact: 'geneva.environment.network@un.org',
      leadSpecificRole: 'Coordinates the multi-institutional environmental community in Geneva; synthesizes updates on chemical governance, waste diplomacy, and multilateral lead prevention across Geneva-based UN bodies.',
      keyInitiatives: [
        'Lead Poisoning Prevention Geneva Resource Portal & Organizational Directory',
        'Geneva Beat Plastic and Toxic Pollution Dialogues',
        'International Environment House Conference Series',
        'Multilateral Environmental Agreements (MEA) Synergies Tracking'
      ],
      historicalBenchmark: 'Acts as the central diplomatic switchboard connecting international secretariats, Swiss cantonal authorities, and diplomatic missions in Geneva.',
      rouletLawConvergence: 'Serves as the empirical publishing origin proving Geneva is the decisive global governance hub for the elimination of lead.',
      badgeColor: 'cyan'
    }
  ];

  // Recharts Data: Global Mortality Breakdown
  const globalBurdenData = [
    { cause: 'Cardiovascular Disease (Ischemic Heart)', deathsMillions: 2.85, fill: '#ef4444' },
    { cause: 'Stroke & Hypertensive Encephalopathy', deathsMillions: 0.65, fill: '#f97316' },
    { cause: 'Chronic Kidney Disease (Nephropathy)', deathsMillions: 0.40, fill: '#f59e0b' },
    { cause: 'Perinatal / Low Birth Weight Complications', deathsMillions: 0.15, fill: '#8b5cf6' }
  ];

  // Recharts Data: Global Lead Paint Legal Bans Over Time
  const leadPaintProgressData = [
    { year: '2010', countriesWithLaws: 38, percentGlobalPop: 24 },
    { year: '2015', countriesWithLaws: 56, percentGlobalPop: 35 },
    { year: '2019', countriesWithLaws: 73, percentGlobalPop: 46 },
    { year: '2023', countriesWithLaws: 88, percentGlobalPop: 53 },
    { year: '2026', countriesWithLaws: 104, percentGlobalPop: 62 },
    { year: '2030 (Target)', countriesWithLaws: 193, percentGlobalPop: 100 }
  ];

  // Filtered organizations
  const filteredOrgs = useMemo(() => {
    return genevaOrganizations.filter(org => {
      const matchesSearch =
        org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.leadSpecificRole.toLowerCase().includes(searchQuery.toLowerCase()) ||
        org.keyInitiatives.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat = selectedCategory === 'All' || org.category === selectedCategory;

      return matchesSearch && matchesCat;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'
      }`}
    >
      {/* 1. HERO BANNER WITH SOURCE METADATA */}
      <section className="relative overflow-hidden border-b border-stone-800 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-stone-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 text-white font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-md flex items-center gap-1.5">
                <Shield className="text-white animate-pulse" size={14} />
                Plate #77 Geneva Multilateral Hub
              </span>
              <span className="px-2.5 py-1 bg-stone-800 text-stone-300 font-mono text-xs rounded border border-stone-700 flex items-center gap-1">
                <Globe size={13} className="text-red-400" />
                Geneva Environment Network (GEN) Official Resource
              </span>
              <span className="px-2.5 py-1 bg-stone-800/80 text-amber-300 font-mono text-xs rounded border border-amber-600/40 flex items-center gap-1">
                <Award size={13} />
                Swiss School of Exposenomics Lineage
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsArtModalOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-red-950 hover:bg-red-900 border border-red-600/50 text-red-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition shadow-sm"
              >
                <Maximize2 size={13} className="text-red-400" />
                <span>View Plate #77 High-Res Infographic</span>
              </button>
              <a
                href="https://www.genevaenvironmentnetwork.org/fr/ressources/nouvelles/lead-poisoning-prevention/"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition"
              >
                <span>Geneva Environment Network Source</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Geneva International Cooperation to Eliminate Lead Use:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-300 to-amber-300 mt-1">
              Why the Swiss School of Exposenomics & ICEarth Anchor Global Chemical Governance
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl leading-relaxed mb-6 font-sans">
            As promoted by the Geneva Environment Network: <em>&ldquo;As a global hub of the governance of chemicals, waste and pollution,
            Geneva is an important place to foster global efforts to prevent lead poisoning, with key organizations active on the topic.&rdquo;</em>
            The Roulet family lineage is Swiss—embodying centuries of precision, benchmark standards, and institutional sovereignty.
            The Swiss School of Exposenomics connects Norman Roulet&apos;s empirical proofs of <strong>Roulet&apos;s Law</strong> (the 8,000-year anthropogenic lead continuum)
            directly to the Geneva constellation of international secretariats: WHO, UNEP Chemicals, the Basel Rotterdam &amp; Stockholm Conventions,
            GAHP, the Global Framework on Chemicals, ILO, and the UN Special Rapporteur on Toxics.
          </p>

          <div className="p-4 rounded-xl bg-stone-900/90 border border-red-600/30 text-stone-300 text-xs sm:text-sm font-mono flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 size={16} className="text-red-400" />
              <span>
                <strong>Policy & Government Resource:</strong> Complete directory of Geneva-based multilateral bodies,
                headquarters addresses, legal mandates, and technical guidance toolkits.
              </span>
            </div>
            <div className="flex items-center gap-2 text-stone-400">
              <span>Cryptographic Vault ID:</span>
              <code className="text-amber-400 font-bold">PHOTO-000CK / IP-000CK</code>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE METRICS BAR */}
      <section className="border-b border-stone-800 bg-stone-900 text-stone-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 text-center">
          <div className="p-3 rounded-lg bg-stone-950/60 border border-red-700/30">
            <div className="text-2xl sm:text-3xl font-black text-red-500 font-mono">3.5M</div>
            <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Annual Cardiovascular Deaths (IHME)</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-amber-600/30">
            <div className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">815M</div>
            <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Children with Elevated BLL (&gt;5 µg/dL)</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-rose-600/30">
            <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">90%</div>
            <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Deaths Borne by LMIC Populations</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-emerald-600/30">
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">73+</div>
            <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Countries with Lead Paint Laws</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-sky-600/30">
            <div className="text-2xl sm:text-3xl font-black text-sky-400 font-mono">$2.45T</div>
            <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Annual Leaded Fuel Elimination Benefit</div>
          </div>
          <div className="p-3 rounded-lg bg-stone-950/60 border border-purple-600/30">
            <div className="text-2xl sm:text-3xl font-black text-purple-400 font-mono">1919</div>
            <div className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">ILO Recommendation No. 4 in Geneva</div>
          </div>
        </div>
      </section>

      {/* 3. NAVIGATION SUB-TABS */}
      <section className="sticky top-0 z-20 border-b border-stone-800 bg-stone-950/95 backdrop-blur px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-start overflow-x-auto py-3 gap-2 scrollbar-none">
          {[
            { id: 'directory', label: 'Geneva Organizations Directory', icon: Building2 },
            { id: 'swiss_school_exposenomics', label: 'Why Swiss School of Exposenomics', icon: ShieldCheck },
            { id: 'multilateral_benchmarks', label: 'Global Disease Burden & Treaty Data', icon: TrendingUp },
            { id: 'prevent_package', label: 'WHO PREVENT Technical Package', icon: HeartPulse },
            { id: 'provenance', label: 'Cryptographic Provenance', icon: Award }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-tight whitespace-nowrap transition cursor-pointer border ${
                  isActive
                    ? 'bg-red-600 text-white border-red-400 shadow-md ring-1 ring-red-300'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border-stone-800 hover:border-stone-700'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-amber-300' : 'text-stone-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* SUB-TAB: DIRECTORY */}
        {activeSubTab === 'directory' && (
          <div className="space-y-8">
            {/* Visual Overview Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl">
              <div className="flex flex-col lg:flex-row items-center gap-6">
                <div className="w-full lg:w-1/2 relative group cursor-pointer" onClick={() => setIsArtModalOpen(true)}>
                  <img
                    src={genevaLeadPlateImg}
                    alt="Plate #77: Geneva International Cooperation to Eliminate Lead Use"
                    className="w-full h-auto object-cover rounded-xl border border-red-600/40 shadow-2xl transition duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition rounded-xl flex items-center justify-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-stone-900/90 text-red-400 text-xs font-mono font-bold border border-red-500 flex items-center gap-1.5">
                      <Maximize2 size={14} /> Click to Expand Infographic (Plate #77)
                    </span>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-red-950 text-red-300 text-xs font-mono font-bold border border-red-600/40">
                      Geneva Multilateral Hub
                    </span>
                    <span className="text-xs text-stone-400 font-mono">Diplomatic & Policy Directory</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    Multilateral Constellation to Eliminate Global Lead Poisoning
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-sans">
                    Geneva hosts the highest concentration of environmental treaties, health bodies, and labor standards in the world.
                    The directory below organizes each Geneva-based entity active on lead elimination in alphabetical order,
                    detailing headquarters addresses, official contact emails, legal treaty anchors, and concrete technical toolkits
                    tailored for government policymakers, diplomats, and environmental advocates.
                  </p>

                  <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 text-xs font-mono">
                    <div className="text-red-400 font-bold flex items-center gap-1.5">
                      <ShieldCheck size={14} /> Core Policy Mandates in Geneva:
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-stone-300 pl-1">
                      <li><strong>Lead in Paint Phase-out:</strong> Global Alliance to Eliminate Lead Paint (WHO &amp; UNEP) targeting &lt;90 ppm.</li>
                      <li><strong>Used Lead-Acid Batteries (ULAB):</strong> Basel Convention Technical Guidelines on transboundary ESM.</li>
                      <li><strong>Occupational Protection:</strong> ILO Chemicals Convention No. 170 &amp; 1919 Recommendation No. 4.</li>
                      <li><strong>Human Rights &amp; Legal Remedies:</strong> UN Special Rapporteur on Toxics holding polluters accountable.</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <button
                      onClick={() => setActiveSubTab('swiss_school_exposenomics')}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition shadow"
                    >
                      <Shield size={13} /> Why Swiss School of Exposenomics
                    </button>
                    <button
                      onClick={() => setActiveSubTab('prevent_package')}
                      className="px-4 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono font-bold text-xs flex items-center gap-1.5 transition border border-stone-700"
                    >
                      <HeartPulse size={13} className="text-rose-400" /> WHO PREVENT Package (2027)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search size={16} className="absolute left-3 top-3 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search organizations, acronyms, mandates, toolkits..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-stone-950 border border-stone-800 rounded-lg text-xs font-mono text-stone-200 placeholder-stone-500 focus:outline-hidden focus:border-red-500"
                />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
                <span className="text-xs font-mono text-stone-400 whitespace-nowrap flex items-center gap-1">
                  <Filter size={13} /> Category:
                </span>
                {['All', 'UN Specialized Agency', 'Multilateral Convention', 'Global Partnership', 'Human Rights Mandate'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap transition cursor-pointer border ${
                      selectedCategory === cat
                        ? 'bg-red-600 text-white border-red-500 font-bold'
                        : 'bg-stone-950 text-stone-400 hover:text-stone-200 border-stone-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Organization Directory Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredOrgs.map(org => (
                <div
                  key={org.id}
                  className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 hover:border-red-600/40 transition duration-300 shadow-lg flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-red-950 text-red-300 font-mono font-black text-xs border border-red-800/40">
                          {org.acronym}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono text-[10px]">
                          {org.category}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-stone-500">{org.id}</span>
                    </div>

                    <h4 className="text-base font-bold text-white leading-snug">{org.name}</h4>

                    <p className="text-xs text-stone-300 leading-relaxed font-sans">{org.leadSpecificRole}</p>

                    <div className="p-3 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 text-xs font-mono">
                      <div className="text-red-400 font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
                        <Zap size={12} /> Key Policy Initiatives & Toolkits:
                      </div>
                      <ul className="space-y-1 text-stone-300 pl-1 list-disc list-inside text-[11px]">
                        {org.keyInitiatives.slice(0, 3).map((init, idx) => (
                          <li key={idx} className="leading-snug">{init}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1 text-[11px] font-mono text-stone-400">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={13} className="text-red-400 shrink-0" />
                        <span className="truncate">{org.address}, {org.postalCode} {org.city}, {org.country}</span>
                      </div>
                      {org.emailContact && (
                        <div className="flex items-center gap-1.5">
                          <Mail size={13} className="text-amber-400 shrink-0" />
                          <span className="text-amber-300">{org.emailContact}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2">
                    <button
                      onClick={() => setActiveOrgModal(org)}
                      className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer transition border border-stone-700"
                    >
                      <FileText size={13} className="text-red-400" />
                      <span>Full Mandate & Roulet Law Convergence</span>
                    </button>
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-red-600/20 hover:bg-red-600/40 text-red-300 hover:text-white text-xs font-mono flex items-center gap-1.5 cursor-pointer transition border border-red-600/40"
                    >
                      <span>Official Portal</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB: WHY SWISS SCHOOL OF EXPOSENOMICS */}
        {activeSubTab === 'swiss_school_exposenomics' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-red-950 text-red-300 text-xs font-mono font-bold border border-red-700/50">
                    Swiss Sovereignty & Roulet Family Lineage
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Precision Benchmarking for Humanity</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <ShieldCheck className="text-red-500" />
                  Why the Swiss School of Exposenomics & ICEarth
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  Norman Roulet explains: <em>&ldquo;The Roulet Family is Swiss, I consider that my sovereignty, and Swiss define the benchmarks
                  of excellence in many ways significant to humanity, which is the basis for the Swiss School of Exposenomics,
                  and Indigenous Communities Earth, ICEarth.&rdquo;</em>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                  <div className="text-red-400 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Scale size={15} /> 1. Swiss Precision & Sovereign Neutrality
                  </div>
                  <h4 className="text-base font-bold text-white">The Benchmark Standard of Excellence</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Switzerland has served as humanity&apos;s neutral sanctuary for multilateral diplomacy, banking precision,
                    and rigorous scientific integrity. That exact heritage informs Norman Roulet&apos;s enterprise benchmarking methodology—from
                    founding Spectrum Telecom in the 1990s to setting the global standard for exposenomics data verification.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                  <div className="text-amber-400 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Shield size={15} /> 2. Geneva: The Global Chemicals Capital
                  </div>
                  <h4 className="text-base font-bold text-white">International Environment House</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Geneva is the undisputed international capital for hazardous waste and chemical governance.
                    Housing the secretariats of UNEP, WHO, the Basel, Rotterdam, and Stockholm Conventions, and the Global Framework on Chemicals,
                    Geneva is where treaties are negotiated and enforceable legal limits are established worldwide.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-stone-950 border border-stone-800 space-y-3">
                  <div className="text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                    <Award size={15} /> 3. Scientific Synthesis of Roulet&apos;s Law
                  </div>
                  <h4 className="text-base font-bold text-white">From Prehistory to Modern Treaties</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    The Swiss School of Exposenomics proves that heavy metal toxicity cannot be addressed through fragmented local policies alone.
                    By correlating 6,000 years of peatland galena isotope records (Science Advances 2026) with modern cardiovascular mortality (3.5M/yr),
                    Roulet&apos;s Law provides the unified mathematical framework for Geneva&apos;s multilateral treaty enforcement.
                  </p>
                </div>
              </div>

              {/* Swiss School of Exposenomics Core Doctrines */}
              <div className="p-5 rounded-xl bg-stone-950 border border-red-600/30 space-y-3">
                <h4 className="text-sm font-bold text-white font-mono flex items-center gap-2">
                  <Sparkles size={15} className="text-amber-400" />
                  Four Pillars of the Swiss School of Exposenomics:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-stone-300">
                  <div className="p-3 rounded-lg bg-stone-900/90 border border-stone-800">
                    <strong className="text-red-400 block mb-1">A. Zero-Tolerance Biological Baseline</strong>
                    Human biology co-evolved over millennia without industrial heavy metal intoxication.
                    There is zero safe threshold for lead; even 1.0 µg/dL initiates vascular, cognitive, and epigenetic damage.
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900/90 border border-stone-800">
                    <strong className="text-amber-400 block mb-1">B. Sovereign Data &amp; Environmental Privacy</strong>
                    Member health telemetry, blood lead tests, and municipal aquifer data belong strictly to individuals and sovereign nations (OCAP®),
                    shielded from corporate advertising extraction.
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900/90 border border-stone-800">
                    <strong className="text-emerald-400 block mb-1">C. Forensic Geochemical Traceability</strong>
                    Isotope ratio fingerprints (²⁰⁶Pb/²⁰⁴Pb, ²⁰⁷Pb/²⁰⁴Pb) definitively link downstream contamination back to specific mine mouths,
                    smelters, and municipal piping materials.
                  </div>
                  <div className="p-3 rounded-lg bg-stone-900/90 border border-stone-800">
                    <strong className="text-sky-400 block mb-1">D. Multilateral Restitution &amp; Remediation</strong>
                    Leveraging Geneva conventions and the UN Special Rapporteur on Toxics to hold industrial polluters accountable
                    and mandate quantum cavitation and bio-restoration worldwide.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: MULTILATERAL BENCHMARKS & TREATY DATA */}
        {activeSubTab === 'multilateral_benchmarks' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <TrendingUp className="text-red-500" />
                  Global Disease Burden &amp; Multilateral Treaty Progress
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  Empirical metrics reported by the Institute for Health Metrics and Evaluation (IHME), WHO, and UNEP
                  quantifying lead-related mortality and tracking the global rollout of binding lead paint legislation.
                </p>
              </div>

              {/* Chart 1: Global Disease Burden Breakdown */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-4">
                  Annual Global Mortality Attributable to Lead by Pathological Vector (IHME Data, Millions of Deaths)
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={globalBurdenData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="cause" stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                      <YAxis stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} unit="M" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', fontSize: '12px' }}
                      />
                      <Bar dataKey="deathsMillions" name="Deaths (Millions / Year)" fill="#ef4444" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-[11px] text-stone-400 font-mono mt-2 text-center">
                  Total annual mortality: ~4.05 million deaths globally, with 3.5 million from ischemic cardiovascular disease alone.
                </div>
              </div>

              {/* Chart 2: Countries with Lead Paint Laws */}
              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
                <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider mb-4">
                  Global Alliance to Eliminate Lead Paint (GAELP) - National Legislation Adoption (2010 - 2030 Target)
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={leadPaintProgressData} margin={{ top: 10, right: 30, left: 0, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis dataKey="year" stroke="#a8a29e" tick={{ fill: '#a8a29e', fontSize: 11 }} />
                      <YAxis yAxisId="left" stroke="#ef4444" tick={{ fill: '#ef4444', fontSize: 11 }} label={{ value: 'Countries', angle: -90, position: 'insideLeft', fill: '#ef4444', fontSize: 10 }} />
                      <YAxis yAxisId="right" orientation="right" stroke="#38bdf8" tick={{ fill: '#38bdf8', fontSize: 11 }} unit="%" label={{ value: '% Pop', angle: 90, position: 'insideRight', fill: '#38bdf8', fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', fontSize: '12px' }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Line yAxisId="left" type="monotone" dataKey="countriesWithLaws" name="Countries with Binding Laws" stroke="#ef4444" strokeWidth={3} />
                      <Line yAxisId="right" type="monotone" dataKey="percentGlobalPop" name="% Global Population Covered" stroke="#38bdf8" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: WHO PREVENT TECHNICAL PACKAGE */}
        {activeSubTab === 'prevent_package' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded bg-blue-950 text-blue-300 text-xs font-mono font-bold border border-blue-700/50">
                    World Health Organization (Geneva)
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Launching 2027 • 79th World Health Assembly Preview</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <HeartPulse className="text-rose-500" />
                  WHO PREVENT Technical Package on Lead Poisoning Prevention
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  On the margins of the 79th World Health Assembly in Geneva, the World Health Organization provided a first look
                  at its forthcoming <strong>PREVENT Technical Package</strong>, scheduled to be launched in 2027 alongside a draft
                  Global Action Plan on Lead Mitigation. The package provides concrete implementation guidance across six operational pillars:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    letter: 'P',
                    title: 'Prioritize Sources & Measure Exposures',
                    desc: 'Identify local exposure vectors (industrial paint, battery recycling, spices, pottery, water pipes) through population-level blood lead monitoring.',
                    icon: AlertTriangle,
                    color: 'red'
                  },
                  {
                    letter: 'R',
                    title: 'Respond to Elevated Blood Lead',
                    desc: 'Establish clinical protocols to remove individuals from exposure sources, initiate medical management, and remediate home/occupational environments.',
                    icon: HeartPulse,
                    color: 'rose'
                  },
                  {
                    letter: 'E',
                    title: 'Engage Partners & Private Sector',
                    desc: 'Unite health, environmental, and trade ministries with industry leaders and civil society to sustain financial and political momentum.',
                    icon: Users,
                    color: 'amber'
                  },
                  {
                    letter: 'V',
                    title: 'Verify Regulatory Alignment',
                    desc: 'Ensure national chemical limits align with WHO and UNEP global standards (e.g. 90 ppm total lead limit in decorative and industrial paints).',
                    icon: Scale,
                    color: 'emerald'
                  },
                  {
                    letter: 'E',
                    title: 'Enforce Regulations & Compliance',
                    desc: 'Equip national customs, market surveillance authorities, and lab inspection teams with handheld XRF analyzers and certified testing protocols.',
                    icon: ShieldCheck,
                    color: 'sky'
                  },
                  {
                    letter: 'T',
                    title: 'Track Progress & Evaluate Impact',
                    desc: 'Continuously assess declines in blood lead levels, monitor economic returns, and publish national compliance registries in open data repositories.',
                    icon: TrendingUp,
                    color: 'purple'
                  }
                ].map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div key={idx} className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-red-950 text-red-300 font-black text-sm flex items-center justify-center font-mono border border-red-700/40">
                          {step.letter}
                        </span>
                        <h4 className="text-sm font-bold text-white">{step.title}</h4>
                      </div>
                      <p className="text-xs text-stone-400 leading-relaxed font-sans">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB: CRYPTOGRAPHIC PROVENANCE */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100 shadow-xl space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Award className="text-amber-400" />
                  Plate #77 Cryptographic Provenance &amp; Policy Seal
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-4xl">
                  Cryptographically registered in the Swiss School of Exposenomics archive to guarantee permanent sovereign provenance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px]">Photo &amp; Gallery Asset ID</div>
                  <div className="text-white font-bold text-sm">PHOTO-000CK</div>
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] pt-2">Member Media IP ID</div>
                  <div className="text-white font-bold text-sm">IP-000CK</div>
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] pt-2">Plate Number</div>
                  <div className="text-amber-400 font-bold text-sm">Plate #77</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-2 text-xs font-mono">
                  <div className="text-stone-400 uppercase tracking-wider text-[10px]">Vault Cryptographic Hash</div>
                  <div className="text-amber-400 font-bold break-all">{vaultHash}</div>
                  <div className="text-stone-400 uppercase tracking-wider text-[10px] pt-2">SHA-256 Image Provenance</div>
                  <div className="text-red-400 font-bold break-all">{provenanceSha256}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-stone-300 font-mono">
                  Click to copy verified sovereign vault hash to clipboard:
                </div>
                <button
                  onClick={handleCopyHash}
                  className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 transition cursor-pointer shadow"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-300" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 5. CROSS-NAVIGATION BAR */}
        <section className="mt-12 p-6 rounded-2xl bg-stone-900 border border-stone-800 text-stone-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400" />
                Cross-Navigation: Swiss Sovereignty &amp; ICEarth Research Engines
              </h4>
              <p className="text-xs text-stone-400 font-mono mt-0.5">
                Navigate directly between Swiss Data Sovereignty, Gemini Agentic AI, and Exposenomics Research Engines.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {onNavigateTab && (
                <>
                  <button
                    onClick={() => onNavigateTab('swiss_data_sovereignty')}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-stone-700"
                  >
                    <span>🇨🇭 Plate #55: Swiss Data Sovereignty</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('gemini_agentic_sovereign_service')}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-stone-700"
                  >
                    <span>🚀 Plate #76: Gemini Agentic AI</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('independent_validation_roulets_law')}
                    className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono transition flex items-center gap-1.5 cursor-pointer border border-stone-700"
                  >
                    <span>🔬 Plate #74: Peatland Archives</span>
                  </button>
                  <button
                    onClick={() => onNavigateTab('sovereign_portal')}
                    className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-mono font-bold text-xs transition shadow flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>🏛️ Sovereign Portal</span>
                    <ArrowRight size={13} />
                  </button>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* 6. MODAL: DETAILED ORGANIZATION PROFILE */}
      {activeOrgModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setActiveOrgModal(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-stone-900 border border-red-600/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 bg-stone-950 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-red-950 text-red-300 font-mono font-black text-xs border border-red-800/40">
                  {activeOrgModal.acronym}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white truncate max-w-md">
                  {activeOrgModal.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveOrgModal(null)}
                className="p-1 rounded bg-stone-800 text-stone-400 hover:text-white transition cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4 text-xs font-mono">
              <div className="space-y-1">
                <div className="text-stone-400 uppercase tracking-wider text-[10px]">Headquarters &amp; Diplomatic Seat</div>
                <div className="text-stone-200">
                  {activeOrgModal.address}, {activeOrgModal.postalCode} {activeOrgModal.city}, {activeOrgModal.country}
                </div>
                {activeOrgModal.emailContact && (
                  <div className="text-amber-400">Direct Email: {activeOrgModal.emailContact}</div>
                )}
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                <div className="text-red-400 font-bold uppercase tracking-wider text-[10px]">Lead Specific Mandate in Geneva</div>
                <p className="text-stone-300 leading-relaxed font-sans">{activeOrgModal.leadSpecificRole}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">Historical Multilateral Benchmark</div>
                <p className="text-stone-300 leading-relaxed font-sans">{activeOrgModal.historicalBenchmark}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                <div className="text-emerald-400 font-bold uppercase tracking-wider text-[10px]">Roulet&apos;s Law Scientific Convergence</div>
                <p className="text-stone-300 leading-relaxed font-sans">{activeOrgModal.rouletLawConvergence}</p>
              </div>

              <div className="space-y-1">
                <div className="text-stone-400 uppercase tracking-wider text-[10px]">Key Initiatives &amp; Toolkits</div>
                <ul className="list-disc list-inside space-y-1 text-stone-300 pl-1">
                  {activeOrgModal.keyInitiatives.map((init, i) => (
                    <li key={i}>{init}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 flex justify-between items-center">
              <a
                href={activeOrgModal.website}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Visit Official Geneva Secretariat</span>
                <ExternalLink size={12} />
              </a>
              <button
                onClick={() => setActiveOrgModal(null)}
                className="px-4 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 7. HIGH-RESOLUTION ARTWORK VIEW MODAL */}
      {isArtModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setIsArtModalOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full bg-stone-900 border border-red-600/50 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 border-b border-stone-800 bg-stone-950 flex justify-between items-center">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>Plate #77: Geneva International Cooperation to Eliminate Lead Use</span>
                </h3>
                <p className="text-xs text-red-400 font-mono">
                  Asset ID: PHOTO-000CK / IP-000CK • Swiss School of Exposenomics Multilateral Policy Directory
                </p>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-400 hover:text-white transition cursor-pointer text-sm"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-black flex flex-col items-center justify-center overflow-auto">
              <img
                src={genevaLeadPlateImg}
                alt="Plate #77 Full Resolution Master Visual"
                className="w-full h-auto object-contain max-h-[70vh] rounded-lg border border-stone-800"
              />
            </div>

            <div className="p-4 border-t border-stone-800 bg-stone-950 flex flex-wrap justify-between items-center gap-2">
              <div className="text-xs text-stone-400 font-mono">
                Vault Hash: <span className="text-amber-400 break-all">{vaultHash}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono flex items-center gap-1.5 cursor-pointer border border-stone-700"
                >
                  {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Hash Copied' : 'Copy Hash'}</span>
                </button>
                <button
                  onClick={() => setIsArtModalOpen(false)}
                  className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold text-xs cursor-pointer shadow-md"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GenevaLeadCooperationDirectory;
