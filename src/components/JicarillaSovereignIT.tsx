import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Server, 
  Network, 
  Cpu, 
  Globe, 
  HardDrive, 
  Key, 
  Users, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  EyeOff, 
  Radio, 
  Wifi, 
  Layers, 
  ArrowRight, 
  Download, 
  Share2, 
  Sparkles, 
  BookOpen, 
  Activity, 
  Compass, 
  Feather, 
  Mountain, 
  Zap, 
  Database, 
  ShieldAlert, 
  ShieldCheck, 
  Flame, 
  Terminal, 
  HelpCircle, 
  Check, 
  Copy, 
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Info,
  Maximize2
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
  Cell,
  PieChart,
  Pie
} from 'recharts';

interface JicarillaSovereignITProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const JicarillaSovereignIT: React.FC<JicarillaSovereignITProps> = ({ 
  onNavigateTab, 
  siteTheme = 'light' 
}) => {
  const isLight = siteTheme === 'light';

  // Navigation Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState<'architecture_diagram' | 'elder_presentation' | 'ouray_muskrat_demo' | 'data_flow_simulator' | 'security_charter'>('architecture_diagram');

  // Graphic View Modes for Plate #24 (New Mexico Map vs Physical Schematic vs Combined)
  const [graphicViewMode, setGraphicViewMode] = useState<'map' | 'schematic' | 'combined'>('map');
  const [showPlateModal, setShowPlateModal] = useState<boolean>(false);
  const [showWatershedOverlay, setShowWatershedOverlay] = useState<boolean>(true);
  const [showVpnMeshOverlay, setShowVpnMeshOverlay] = useState<boolean>(true);
  const [showDataDiodeOverlay, setShowDataDiodeOverlay] = useState<boolean>(true);
  const [showOurayOverlay, setShowOurayOverlay] = useState<boolean>(true);
  const [mapHoveredNode, setMapHoveredNode] = useState<string | null>(null);

  // Selected Network Node for Deep Inspection in Diagram
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-dulce-core');

  // Interactive Simulation State
  const [simScenario, setSimScenario] = useState<string>('ceremony_photo');
  const [simResult, setSimResult] = useState<any>(null);

  // Elder Presentation Slide
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

  // Copy Feedback
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Node details for Physical & Logical Network Architecture
  const networkNodes: Record<string, {
    id: string;
    name: string;
    tier: 'Tier 1: Physical Private (Reservation)' | 'Tier 2: Inter-Tribal S-VPN (Treaty Mesh)' | 'Tier 3: Public Cloud & WWW';
    location: string;
    securityLevel: 'Air-Gapped / Ultra-Sacred' | 'Hardware Encrypted / Sovereign Law' | 'Inter-Tribal Treaty Encrypted' | 'Zero-Trust Public Gateway';
    hardwareSpecs: string;
    storageType: string;
    aiEngine: string;
    description: string;
    allowedData: string[];
    forbiddenData: string[];
    jurisdiction: string;
  }> = {
    'node-dulce-core': {
      id: 'node-dulce-core',
      name: 'Dulce Sovereign Micro-Datacenter & HSM Root',
      tier: 'Tier 1: Physical Private (Reservation)',
      location: 'Dulce, New Mexico (Jicarilla Apache Sovereign Territory)',
      securityLevel: 'Air-Gapped / Ultra-Sacred',
      hardwareSpecs: 'Dual 64-Core AMD EPYC Nodes • 1.5TB ECC RAM • FIPS 140-3 Level 4 Hardware Security Module (HSM) • Offline Solar/Battery Microgrid Backup',
      storageType: 'Self-Encrypting NVMe RAID 10 (AES-256-XTS) with Shamir Secret Sharing among 5 Tribal Elders',
      aiEngine: 'Air-Gapped Gemini On-Premise Sovereign Engine (Local quantized inference, 0% WAN egress, zero telemetry)',
      description: 'The physical heart of Jicarilla Apache data sovereignty. Located deep within tribal territory under the absolute legal jurisdiction of the Jicarilla Apache Nation. Governed by tribal customary law, physically disconnected from any public cloud backdoor, and protected from US Federal, State, and corporate surveillance.',
      allowedData: [
        'Sacred ceremonial audio/video recordings & ritual chants',
        'Go-Jii-Ya Feast clan records & sacred lineage genealogies',
        'Indian Health Service (IHS) Electronic Health Records (EHR)',
        'Tribal Council executive deliberations & litigation strategies',
        'Sacred medicinal plant GPS coordinates & mineral rights maps',
        'Private biometric & whole-genome exposome profiles of members'
      ],
      forbiddenData: [
        'Any unencrypted outbound public internet transmission',
        'Commercial AI training datasets or public web scrapers',
        'Third-party cloud vendor telemetry or telemetry reporting'
      ],
      jurisdiction: 'Exclusive Jicarilla Apache Tribal Sovereignty (Article 1, Sec 8 US Constitution Treaty Authority)'
    },
    'node-sacred-vault': {
      id: 'node-sacred-vault',
      name: 'Sacred Ceremonial & Cultural Cold Vault',
      tier: 'Tier 1: Physical Private (Reservation)',
      location: 'Underground Cultural Repository, Jicarilla Reservation',
      securityLevel: 'Air-Gapped / Ultra-Sacred',
      hardwareSpecs: 'True Physical Air-Gap • Optical WORM (Write Once Read Many) M-DISC & Ceramic Nano-Storage • Faraday Cage Shielding',
      storageType: 'Physical Cold Media Vault with Triple-Biometric Elder Access Keys (No Ethernet, No Wi-Fi, No Bluetooth)',
      aiEngine: 'Offline Linguistic AI (Linguistic transcription and translation strictly in Jicarilla Eastern Apache dialect)',
      description: 'Permanent preservation of the sacred soul of the Jicarilla Nation. Audio recordings of holy ceremonies, oral history teachings, creation narratives, and spiritual knowledge accessible exclusively by authorized clan keepers and elders in physical presence.',
      allowedData: [
        'Ceremonial songs, prayers, and sacred site boundaries',
        'Clan histories, oral genealogies, and winter story teachings',
        'Sacred spiritual items provenance and repatriation registries'
      ],
      forbiddenData: [
        'ANY network connection (physically impossible via air-gap)',
        'Non-member viewing or external academic extraction'
      ],
      jurisdiction: 'Sacred Tribal Custodianship & Inherent Indigenous Sovereignty'
    },
    'node-ihs-clinic': {
      id: 'node-ihs-clinic',
      name: 'Dulce Health Center & IHS Sovereign EHR Node',
      tier: 'Tier 1: Physical Private (Reservation)',
      location: 'Dulce Health Center, Jicarilla Apache Nation',
      securityLevel: 'Hardware Encrypted / Sovereign Law',
      hardwareSpecs: 'High-Availability Medical Cluster • Hardware ZK-Prover • Sovereign DICOM PACS Imaging Server',
      storageType: 'Encrypted Sovereign Database (PostgreSQL + ZK-Rollup to ICEarth Sovereign Identity)',
      aiEngine: 'Sovereign Clinical AI (On-premise diagnostic support, lead/uranium exposome screening without external data leaks)',
      description: 'Tribally controlled healthcare data infrastructure for Jicarilla members. Integrates IHS health metrics, capillary blood lead levels, diabetes management, and toxic heavy metal monitoring while ensuring medical data cannot be shared with insurance algorithms or state agencies without explicit tribal consent.',
      allowedData: [
        'Member clinical charts & prescription histories',
        'Exposenomics blood heavy metal (BLL, Cd, Cr, U) screenings',
        'Elder chronic care monitoring & maternal health programs'
      ],
      forbiddenData: [
        'Commercial pharmaceutical data broker export',
        'State or federal law enforcement warrantless search'
      ],
      jurisdiction: 'Jicarilla Apache Health Authority & HIPAA Sovereign Compact'
    },
    'node-treaty-mesh': {
      id: 'node-treaty-mesh',
      name: 'Inter-Tribal Sovereign VPN Gateway (S-VPN)',
      tier: 'Tier 2: Inter-Tribal S-VPN (Treaty Mesh)',
      location: 'Encrypted Point-to-Point Microwave & Sovereign Fiber Link',
      securityLevel: 'Inter-Tribal Treaty Encrypted',
      hardwareSpecs: 'Post-Quantum WireGuard Cryptographic Routers (Kyber-1024 / Dilithium) • 10Gbps Dedicated Inter-Tribal Links',
      storageType: 'Federated Inter-Tribal Distributed Ledger (ICEarth Sovereign Node Consensus)',
      aiEngine: 'Federated Environmental AI (Collaborative training on environmental models across tribes without raw data sharing)',
      description: 'Encrypted, treaty-bound virtual private network connecting Jicarilla Apache Nation with allied Indigenous sovereignties including Taos Pueblo, Navajo Nation (Diné), Mescalero Apache, and Picuris Pueblo across New Mexico and the Four Corners basin.',
      allowedData: [
        'San Juan Basin & Rio Chama watershed water quality telemetry',
        'Cross-boundary uranium, oil, and gas flaring environmental monitoring',
        'Migratory wildlife protection (Elk, Golden Eagle, Bighorn sheep)',
        'Inter-tribal UCANX botanical & agricultural trade settlements',
        'Mutual emergency response & wildfire suppression dispatch'
      ],
      forbiddenData: [
        'Private sacred ceremonial files of individual tribes',
        'Individual patient identifiable medical records',
        'Non-tribal government surveillance sniffing'
      ],
      jurisdiction: 'Inter-Tribal Sovereign Treaties & Nation-to-Nation Compacts'
    },
    'node-public-gateway': {
      id: 'node-public-gateway',
      name: 'Deterministic Data Diode & Public DMZ Gateway',
      tier: 'Tier 3: Public Cloud & WWW',
      location: 'Dulce Gateway DMZ / Hybrid Cloud Interconnect',
      securityLevel: 'Zero-Trust Public Gateway',
      hardwareSpecs: 'Hardware Data Diode (Physically enforces one-way data flow) • Next-Gen Sovereign Firewall • WAF / DDoS Shield',
      storageType: 'Public Web Content & Tribal Enterprise Storage (Cloud Bucket / Edge CDN)',
      aiEngine: 'Sanitized Public Gemini 2.5 Pro / Flash Gateway (Strict token sanitization, zero PII transmission)',
      description: 'The boundary bridge connecting the sovereign tribal network to the global internet. Allows tribal members and staff to browse the web, access public cloud services, and publish tribal tourism/enterprise sites while physically preventing the public internet from penetrating the private sovereign tiers.',
      allowedData: [
        'Jicarilla Apache Wildlife & Fisheries hunting permit portal',
        'Apache Nugget Casino & tribal hospitality booking systems',
        'Public press releases, state legislative testimony, news updates',
        'Outbound sanitized research queries to public search engines & AI'
      ],
      forbiddenData: [
        'Any raw ingress path into Tier 1 private servers',
        'Unsanitized internal tribal IP addresses or member credentials'
      ],
      jurisdiction: 'Public Internet / Federal Communications Commission (FCC) Gateway Compliance'
    }
  };

  // 3-Tier Data Distribution Chart
  const tierDistributionData = [
    { name: 'Tier 1: Sacred & Private (Reservation Only)', value: 58, color: '#e11d48' },
    { name: 'Tier 2: Inter-Tribal S-VPN (Treaty Mesh)', value: 27, color: '#8b5cf6' },
    { name: 'Tier 3: Public Gateway & Cloud (WWW)', value: 15, color: '#0284c7' }
  ];

  // Inter-Tribal Bandwidth & Latency Metrics
  const interTribalLinks = [
    { nation: 'Taos Pueblo (Upper Rio Grande)', distance: '84 miles', protocol: 'Post-Quantum WireGuard S-VPN', latency: '4.2 ms', sharedResources: 'Rio Chama Watershed Sensors, Raptor Lead Clinic, Hemp Co-op' },
    { nation: 'Navajo Nation (Window Rock / Shiprock)', distance: '112 miles', protocol: 'Encrypted Microwave + Sovereign Fiber', latency: '6.1 ms', sharedResources: 'San Juan Basin Uranium Runoff, Oil & Gas Flaring AI, Water Rights' },
    { nation: 'Picuris Pueblo', distance: '92 miles', protocol: 'Post-Quantum WireGuard S-VPN', latency: '4.8 ms', sharedResources: 'Forest Fire Pyro-Exposomics, Traditional Agriculture, Water Sharing' },
    { nation: 'Mescalero Apache Nation (Southern NM)', distance: '240 miles', protocol: 'Dedicated Encrypted Cloud VPN Tunnel', latency: '12.4 ms', sharedResources: 'Apache Linguistic AI, Sovereign Timber Management, Cultural Compacts' }
  ];

  // Simulation handler
  const runDataFlowSimulation = (scenarioKey: string) => {
    setSimScenario(scenarioKey);
    let result = null;

    switch (scenarioKey) {
      case 'ceremony_photo':
        result = {
          title: 'High-Resolution Sacred Go-Jii-Ya Ceremony Photography',
          classification: 'TIER 1 — SACRED PRIVATE (RESERVATION ONLY)',
          action: 'Stored in Dulce Micro-Datacenter NVMe Vault with Shamir Elder 3-of-5 Key Split & Optical Cold Vault Backup.',
          routing: '❌ BLOCKED FROM S-VPN • ❌ BLOCKED FROM WWW • ✅ LOCAL ENCRYPTED SOVEREIGN AIR-GAP ONLY',
          aiInspection: 'Processed by local air-gapped Gemini model on-premise for high-definition facial redaction of non-clan observers.',
          publicLeakRisk: '0.00% (Hardware Data Diode enforces absolute air-gap).',
          securityStatus: 'PASSED — Sovereignty Protected'
        };
        break;
      case 'ihs_lead_test':
        result = {
          title: 'Tribal Member Capillary Blood Lead & Exposome Panel (Ouray Muskrat)',
          classification: 'TIER 1 — CONFIDENTIAL MEDICAL (JICARILLA HEALTH DEPT)',
          action: 'Encrypted in Dulce Health Center Sovereign EHR. ZK-Proof generated for ICEarth Sovereign Member Vault.',
          routing: '✅ TIER 1 LOCAL EHR • ⚠️ ANONYMIZED EXPOSOME METRICS TO TIER 2 MESH • ❌ BLOCKED FROM PUBLIC WWW',
          aiInspection: 'Local Clinical AI flags environmental lead vector from regional hunting ammunition and suggests chelation diet.',
          publicLeakRisk: '0.00% (Zero PII leaves reservation; only anonymous cryptographic ZK-hashes verified).',
          securityStatus: 'PASSED — HIPAA & Sovereign Health Compact Compliant'
        };
        break;
      case 'san_juan_water':
        result = {
          title: 'San Juan Basin Heavy Metal & Oil/Gas Flaring Real-Time Sensor Stream',
          classification: 'TIER 2 — INTER-TRIBAL CO-REGULATORY TREATY DATA',
          action: 'Transmitted over Post-Quantum S-VPN to Taos Pueblo and Navajo Nation Environmental Departments.',
          routing: '✅ TIER 1 DULCE • ✅ TIER 2 S-VPN TREATY MESH • ⚠️ PUBLIC WATER QUALITY REPORT (AGGREGATE ONLY) TO TIER 3',
          aiInspection: 'Inter-Tribal Federated AI detects upstream industrial discharge spike and alerts tribal water rangers.',
          publicLeakRisk: '0.00% (Raw sensor crypto-keys shared only between treaty-bound tribal nations).',
          securityStatus: 'PASSED — Inter-Tribal Environmental Sovereignty Active'
        };
        break;
      case 'external_subpoena':
        result = {
          title: 'Hostile External State / Corporate Subpoena or Cloud Surveillance Attempt',
          classification: 'SECURITY THREAT — EXTERNAL JURISDICTIONAL INTERFERENCE',
          action: 'Physical storage is on sovereign Jicarilla land. Commercial cloud provider has NO access keys or physical custody.',
          routing: '❌ ACCESS DENIED AT HARDWARE LEVEL • ✅ TRIBAL COURT EXCLUSIVE JURISDICTION INVOKED',
          aiInspection: 'Sovereign Network Intrusion AI isolates the probing IP address and logs immutable forensic hash.',
          publicLeakRisk: '0.00% (Data does not exist on third-party cloud servers; CLOUD Act cannot compel external vendors).',
          securityStatus: 'BLOCKED & REPULSED — Sovereign Immunity Upheld'
        };
        break;
      case 'elder_language_audio':
        result = {
          title: 'Elder Oral History & Jicarilla Eastern Apache Audio Recording',
          classification: 'TIER 1 — SACRED LINGUISTIC SOVEREIGN IP',
          action: 'Ingested into On-Premise Air-Gapped Audio Transcriber. Archived in Cold Optical Storage.',
          routing: '✅ TIER 1 PRIVATE REPOSITORY • ❌ NO PUBLIC CLOUD TRAINING • ⚠️ OPTIONAL SHARE WITH ALLIED APACHE NATIONS (TIER 2)',
          aiInspection: 'Custom Local Jicarilla Apache Language Model generates bilingual dictionary for tribal immersion school.',
          publicLeakRisk: '0.00% (Never uploaded to commercial LLM training corpora).',
          securityStatus: 'PASSED — Cultural & Linguistic Sovereignty Preserved'
        };
        break;
      default:
        break;
    }
    setSimResult(result);
  };

  // Elder Presentation Slides Data
  const elderSlides = [
    {
      title: 'Protecting the Sacred in the Digital Age: Indigenous IT Sovereignty',
      subtitle: 'A Hybrid Network Architecture Blueprint for the Jicarilla Apache Nation',
      audience: 'Presented to Jicarilla Apache Tribal Council, Elders, Taos Pueblo, Navajo Nation & New Mexico Leadership',
      keyPoints: [
        'Why Commercial Cloud is a Risk: Data stored in Google, Amazon, or Microsoft commercial clouds is subject to US federal surveillance, state subpoenas, and commercial AI training without tribal consent.',
        'The Sovereign Solution: Build physical server infrastructure on Jicarilla land in Dulce, creating our own sovereign private network with our own cryptographic keys.',
        'The 3 Rings of Protection: Physical On-Reservation Storage for the sacred, a Secure Tribal Treaty Network to cooperate with brother nations like Taos Pueblo and Navajo, and a One-Way Shield to the public internet.',
        'Sovereign AI: We bring the intelligence of modern AI (Gemini) inside our reservation borders on our own machines, so our children can learn and our elders can be heard, without letting tech companies harvest our sacred heritage.'
      ],
      quote: '“Our sacred ceremonies, our elder stories, our health records, and our water rights belong to our people forever. They must never sleep on another nation’s computers.”'
    },
    {
      title: 'Tier 1: The Sacred Private Ground (On-Reservation Physical Storage)',
      subtitle: 'Physical Hardware, Sovereign Keys & True Air-Gapped Security in Dulce, NM',
      audience: 'Technical Architecture & Cultural Protection Mandate',
      keyPoints: [
        'Physical Micro-Datacenter: Located in Dulce under the physical protection of Jicarilla Apache law enforcement and tribal sovereignty.',
        'Elder Key Ceremony: Master encryption keys are split using cryptographic math (Shamir Secret Sharing) so that no single person—and no outside government—can unlock tribal secrets without 3 of 5 Elders present.',
        'What Lives Here: Holy ceremony footage, clan oral traditions, winter stories, Indian Health Service medical charts, water rights legal strategies, and member exposome data.',
        'The Optical Cold Vault: Offline ceramic and glass discs stored in a Faraday cage with zero wire or wireless connection to any network.'
      ],
      quote: '“When our data is physically on sovereign land, US state and federal courts cannot demand backdoors from Silicon Valley corporations.”'
    },
    {
      title: 'Tier 2: The Inter-Tribal Treaty Mesh (S-VPN)',
      subtitle: 'Cooperating with Taos Pueblo, Navajo Nation & Mescalero Apache without Losing Control',
      audience: 'Inter-Tribal Governance & Regional Environmental Co-Regulation',
      keyPoints: [
        'Post-Quantum Encrypted Tunnels: High-speed microwave and sovereign fiber links between Dulce, Taos Pueblo, and Window Rock.',
        'Environmental Defense: Real-time sensor monitoring of San Juan and Rio Grande river watersheds, detecting uranium runoff, oil spills, and toxic flaring across borders.',
        'The UCANX Indigenous Exchange: Direct, peer-to-peer trade of phytoremediating hemp, clean organic crops, and renewable energy between sovereign nations.',
        'Collaborative Sovereign AI: Allied tribes train environmental protection models together using federated learning—the computer learns the patterns without any tribe sharing its private member records.'
      ],
      quote: '“Just as our ancestors formed alliances for peace and defense, our servers now form an encrypted circle of sovereign trust across New Mexico.”'
    },
    {
      title: 'Tier 3: The Public Gateway & Shielded AI Integration',
      subtitle: 'Engaging the Global Web & Cloud Services with Zero Sovereign Leakage',
      audience: 'Economic Development, Tourism & Government Operations',
      keyPoints: [
        'The Hardware Data Diode: A physical light-based valve that lets our tribal enterprises publish outward to tourists and customers, but makes it physically impossible for outside hackers to enter.',
        'Tribal Enterprise Prosperity: Powers Apache Nugget Casino, Jicarilla Wildlife hunting licenses, and tourism portals with 99.99% uptime.',
        'Safe Public AI Usage: Tribal staff can ask public Gemini models questions about world markets, grant writing, and weather forecasts, while an automated shield scrubs any private tribal information before it leaves.',
        'Ready for New Mexico’s First Indigenous Governor: Sets the gold standard for state-tribal digital compacts, data ownership agreements, and sovereign AI leadership.'
      ],
      quote: '“We will master the technology of the modern world without allowing the modern world to assimilate our sacred knowledge.”'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* HEADER BANNER WITH SOVEREIGN METADATA */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-950 via-stone-900 to-emerald-950 text-white border-2 border-amber-500/50 shadow-2xl p-6 sm:p-8">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="px-3.5 py-1 bg-amber-500/30 text-amber-300 border border-amber-400/50 rounded-full text-xs font-mono font-black tracking-wider uppercase flex items-center gap-1.5 shadow-xs">
                <Feather size={13} className="text-amber-300" />
                Jicarilla Apache Nation • Sovereign IT Blueprint
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full text-xs font-mono font-bold">
                Inter-Tribal Treaty Mesh
              </span>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-amber-200/90">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Sovereign Hash:</span>
              <span className="text-stone-300 bg-stone-900/80 px-2 py-0.5 rounded border border-amber-500/30 text-[10px]">
                0xJICARILLA_SOVEREIGN_HYBRID_IT_AIRGAP_AI_2026
              </span>
              <button
                onClick={() => handleCopy('0xJICARILLA_SOVEREIGN_HYBRID_IT_AIRGAP_AI_2026')}
                className="p-1 hover:bg-stone-800 rounded text-amber-400 hover:text-amber-200 transition-colors"
                title="Copy Hash"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white font-serif flex items-center gap-3">
              <Mountain className="text-amber-400 shrink-0" size={36} />
              <span>Jicarilla Apache Sovereign Hybrid IT & Air-Gapped AI Architecture</span>
            </h1>
            <p className="text-sm sm:text-base text-amber-100/90 max-w-4xl leading-relaxed">
              A comprehensive technological architecture engineered for the <strong>Jicarilla Apache Nation</strong> (Dulce, NM), allied Pueblos (Taos Pueblo, Picuris), and the Diné (Navajo Nation). Features physical on-reservation micro-datacenters for sacred ceremonies and Indian Health Service (IHS) records, an encrypted inter-tribal Virtual Private Network (S-VPN) for watershed and environmental co-regulation, and an air-gapped on-premise <strong>Gemini Sovereign AI Engine</strong> protected from external government surveillance and commercial cloud intrusion.
            </p>
          </div>

          {/* QUICK SUMMARY BADGES */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-stone-900/70 border border-amber-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-amber-400/80 block">Tier 1 Private Core</span>
              <span className="text-sm sm:text-base font-bold text-rose-300 font-mono">Dulce On-Premise Air-Gap</span>
              <span className="text-[11px] text-stone-400 block">Sacred ceremonies & IHS EHR</span>
            </div>
            <div className="bg-stone-900/70 border border-amber-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-purple-400/80 block">Tier 2 Treaty Mesh</span>
              <span className="text-sm sm:text-base font-bold text-purple-300 font-mono">Post-Quantum S-VPN</span>
              <span className="text-[11px] text-stone-400 block">Taos Pueblo & Navajo Network</span>
            </div>
            <div className="bg-stone-900/70 border border-amber-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-cyan-400/80 block">Tier 3 Public Gateway</span>
              <span className="text-sm sm:text-base font-bold text-cyan-300 font-mono">Hardware Data Diode</span>
              <span className="text-[11px] text-stone-400 block">Zero-leak public cloud edge</span>
            </div>
            <div className="bg-stone-900/70 border border-amber-500/30 rounded-xl p-3">
              <span className="text-[10px] font-mono uppercase text-emerald-400/80 block">Demonstration User</span>
              <span className="text-sm sm:text-base font-bold text-emerald-300 font-mono">Ouray Muskrat (User #2)</span>
              <span className="text-[11px] text-stone-400 block">Master Phytoremediator</span>
            </div>
          </div>
        </div>
      </div>

      {/* NAVIGATION SUB-TABS */}
      <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
        <button
          onClick={() => setActiveSubTab('architecture_diagram')}
          className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'architecture_diagram'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <Network size={16} />
          <span>Physical & Logical Network Topology</span>
        </button>

        <button
          onClick={() => setActiveSubTab('elder_presentation')}
          className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'elder_presentation'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <BookOpen size={16} />
          <span>Council & Elder Presentation Deck</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ouray_muskrat_demo')}
          className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'ouray_muskrat_demo'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <Users size={16} />
          <span>Ouray Muskrat Demonstration (User #2)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('data_flow_simulator')}
          className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'data_flow_simulator'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <Zap size={16} />
          <span>Live Data Flow & Anti-Surveillance Simulator</span>
        </button>

        <button
          onClick={() => setActiveSubTab('security_charter')}
          className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
            activeSubTab === 'security_charter'
              ? 'bg-amber-600 text-white shadow-md'
              : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
          }`}
        >
          <Shield size={16} />
          <span>Sovereign Security & Legal Charter</span>
        </button>
      </div>

      {/* SUBTAB 1: PHYSICAL & LOGICAL NETWORK TOPOLOGY */}
      {activeSubTab === 'architecture_diagram' && (
        <div className="space-y-8">
          
          {/* PLATE #24: FORENSIC TECHNOLOGICAL & CRYPTOGRAPHIC BLUEPRINT HEADER */}
          <div className="bg-stone-950 text-stone-100 rounded-3xl p-6 sm:p-8 border-2 border-amber-500/50 shadow-2xl space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-stone-800 pb-5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 bg-amber-500/30 text-amber-300 border border-amber-400/60 rounded-lg text-xs font-mono font-black uppercase tracking-wider flex items-center gap-1.5 shadow-xs">
                    <ShieldCheck size={14} className="text-amber-300" />
                    PLATE #24 • OFFICIAL FORENSIC BLUEPRINT
                  </span>
                  <span className="px-2.5 py-1 bg-rose-950/80 text-rose-300 border border-rose-500/40 rounded-lg text-xs font-mono font-bold">
                    Tier 1 Air-Gap
                  </span>
                  <span className="px-2.5 py-1 bg-purple-950/80 text-purple-300 border border-purple-500/40 rounded-lg text-xs font-mono font-bold">
                    Taos Pueblo & Diné Mesh
                  </span>
                  <span className="px-2.5 py-1 bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 rounded-lg text-xs font-mono font-bold">
                    Hardware Data Diode
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white flex items-center gap-2.5">
                  <Network className="text-amber-400 shrink-0" size={28} />
                  <span>Jicarilla Apache Sovereign Hybrid IT & Air-Gapped AI Network Architecture</span>
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <div className="flex items-center bg-stone-900 border border-stone-700 rounded-xl p-1">
                  <button
                    onClick={() => setGraphicViewMode('map')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      graphicViewMode === 'map'
                        ? 'bg-amber-600 text-white shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Compass size={14} />
                    <span>🗺️ NM Geographic Mesh</span>
                  </button>
                  <button
                    onClick={() => setGraphicViewMode('schematic')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      graphicViewMode === 'schematic'
                        ? 'bg-amber-600 text-white shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Cpu size={14} />
                    <span>⚙️ Physical Schematic</span>
                  </button>
                  <button
                    onClick={() => setGraphicViewMode('combined')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      graphicViewMode === 'combined'
                        ? 'bg-amber-600 text-white shadow'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <Layers size={14} />
                    <span>🔀 Dual Blueprint</span>
                  </button>
                </div>

                <button
                  onClick={() => setShowPlateModal(true)}
                  className="px-3 py-2 bg-stone-900 hover:bg-stone-800 border border-amber-500/40 text-amber-300 rounded-xl text-xs font-mono font-bold transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Expand High-Resolution Plate"
                >
                  <Maximize2 size={14} />
                  <span>Inspect Plate #24</span>
                </button>
              </div>
            </div>

            {/* ORIGINS & FORENSIC PROVENANCE METADATA BOX */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-950/40 via-stone-900/90 to-emerald-950/40 border border-amber-500/40 rounded-2xl space-y-2 text-stone-300">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-800 pb-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Feather size={14} className="text-amber-400" />
                  Origins & Cryptographic Provenance Record (Plate #24)
                </span>
                <span className="text-[11px] font-mono text-stone-400">
                  Vault ID: <span className="text-amber-300">0xJICARILLA_SOVEREIGN_HYBRID_IT_AIRGAP_AI_2026</span>
                </span>
              </div>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed font-serif">
                <strong>Origins:</strong> Forensic technological and cryptographic blueprint plate establishing the 3-Tier Sovereign Hybrid IT Architecture for the <strong>Jicarilla Apache Nation</strong> and allied Indigenous sovereignties (<strong>Taos Pueblo</strong>, <strong>Diné</strong>, <strong>Picuris</strong>). Features the <strong>Dulce On-Premise Micro-Datacenter</strong> (FIPS 140-3 HSM, Shamir 3/5 Elder Key Ceremony, air-gapped Gemini On-Premise AI), the <strong>Post-Quantum Treaty-Bound S-VPN Mesh</strong> for Four Corners / San Juan Basin watershed and flaring co-regulation, and the <strong>Hardware Data Diode Zero-Leak Public DMZ</strong>. Details the multi-layered sovereign profile of demonstration member <strong>Ouray Muskrat (User #2)</strong>.
              </p>
            </div>

            {/* MAP & SCHEMATIC CONTROLS / OVERLAY TOGGLES */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono bg-stone-900/80 p-3 rounded-xl border border-stone-800">
              <span className="text-stone-400 font-bold flex items-center gap-1.5">
                <Layers size={14} className="text-amber-400" />
                Active Map & Schematic Layers:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setShowWatershedOverlay(prev => !prev)}
                  className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                    showWatershedOverlay
                      ? 'bg-blue-950/80 border-blue-400 text-blue-300 font-bold'
                      : 'bg-stone-800/60 border-stone-700 text-stone-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                  <span>Rio Grande & San Juan Watersheds</span>
                </button>
                <button
                  onClick={() => setShowVpnMeshOverlay(prev => !prev)}
                  className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                    showVpnMeshOverlay
                      ? 'bg-purple-950/80 border-purple-400 text-purple-300 font-bold'
                      : 'bg-stone-800/60 border-stone-700 text-stone-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  <span>Post-Quantum S-VPN (Kyber-1024)</span>
                </button>
                <button
                  onClick={() => setShowDataDiodeOverlay(prev => !prev)}
                  className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                    showDataDiodeOverlay
                      ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-stone-800/60 border-stone-700 text-stone-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>Hardware Data Diode Outflow</span>
                </button>
                <button
                  onClick={() => setShowOurayOverlay(prev => !prev)}
                  className={`px-2.5 py-1 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
                    showOurayOverlay
                      ? 'bg-emerald-950/80 border-emerald-400 text-emerald-300 font-bold'
                      : 'bg-stone-800/60 border-stone-700 text-stone-400'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Ouray Muskrat (User #2) 3-Tier Path</span>
                </button>
              </div>
            </div>

            {/* MAIN GRAPHIC CANVAS (GEOGRAPHIC MAP OR PHYSICAL SCHEMATIC OR COMBINED) */}
            <div className="grid grid-cols-1 gap-6">
              
              {/* MODE 1: NEW MEXICO GEOGRAPHIC S-VPN MESH MAP */}
              {(graphicViewMode === 'map' || graphicViewMode === 'combined') && (
                <div className="bg-stone-950 border-2 border-stone-800 rounded-2xl p-4 sm:p-6 space-y-4 relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-amber-400 font-bold tracking-wider block">
                        Geographic Sovereignty Topology • Four Corners & New Mexico
                      </span>
                      <h4 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                        <span>🗺️ Jicarilla Apache & Taos Pueblo Sovereign Mesh Map (Plate #24)</span>
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-stone-400">
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span> Dulce Sovereign Root</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-400"></span> Treaty S-VPN Nodes</span>
                      <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400"></span> Public DMZ</span>
                    </div>
                  </div>

                  {/* SVG NEW MEXICO GEOGRAPHIC NETWORK CANVAS */}
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-b from-stone-950 via-[#101014] to-stone-950 rounded-xl border border-stone-800/80 overflow-hidden shadow-inner flex items-center justify-center">
                    <svg viewBox="0 0 1000 680" className="w-full h-full select-none">
                      <defs>
                        {/* Gradients */}
                        <linearGradient id="nmStateBg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#1e1b18" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="#171513" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#0f0e0d" stopOpacity="0.95" />
                        </linearGradient>

                        <linearGradient id="vpnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f43f5e" />
                          <stop offset="50%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>

                        <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                        </linearGradient>

                        <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="4" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        <filter id="glowPurple" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="3" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>

                        {/* Animated Dash Markers */}
                        <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#292524" strokeWidth="0.5" strokeOpacity="0.4" />
                        </pattern>
                      </defs>

                      {/* Background Grid */}
                      <rect width="1000" height="680" fill="url(#gridPattern)" />

                      {/* SURROUNDING STATE LABELS & BOUNDARIES */}
                      <g className="text-[11px] font-mono fill-stone-600 font-bold">
                        <text x="450" y="35" textAnchor="middle">COLORADO (SAN JUAN MOUNTAINS)</text>
                        <text x="50" y="320" textAnchor="middle" transform="rotate(-90 50,320)">ARIZONA (DINÉ BIKÉYAH)</text>
                        <text x="920" y="340" textAnchor="middle" transform="rotate(90 920,340)">TEXAS & OKLAHOMA</text>
                        <text x="450" y="665" textAnchor="middle">MEXICO / CHIHUAHUA BORDER</text>
                        <text x="135" y="65" textAnchor="end" className="fill-amber-400/80 font-mono text-[10px]">FOUR CORNERS (37°N 109°W) ✛</text>
                      </g>

                      {/* NEW MEXICO STATE OUTLINE */}
                      <path
                        d="M 140 70 L 860 70 L 860 250 L 860 590 L 480 590 L 480 620 L 220 620 L 220 650 L 140 650 Z"
                        fill="url(#nmStateBg)"
                        stroke="#78716c"
                        strokeWidth="1.5"
                        strokeDasharray="4,2"
                        className="transition-all"
                      />

                      {/* SANGRE DE CRISTO MOUNTAINS / CONTINENTAL DIVIDE CONTOURS */}
                      <path
                        d="M 380 70 Q 390 180 340 300 Q 300 420 320 580"
                        fill="none"
                        stroke="#44403c"
                        strokeWidth="2"
                        strokeDasharray="2,4"
                        opacity="0.6"
                      />
                      <text x="310" y="240" className="text-[9px] font-mono fill-stone-500" transform="rotate(-70 310,240)">Continental Divide</text>

                      {/* WATERSHEDS & RIVERS (RIO GRANDE, RIO CHAMA, SAN JUAN RIVER) */}
                      {showWatershedOverlay && (
                        <g>
                          {/* San Juan River */}
                          <path
                            d="M 420 70 Q 370 100 280 105 Q 200 115 140 100"
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="3"
                            strokeOpacity="0.85"
                          />
                          <text x="230" y="95" className="text-[9px] font-mono fill-cyan-400 font-bold">San Juan River (Navajo Reservoir)</text>

                          {/* Rio Chama */}
                          <path
                            d="M 390 115 Q 430 140 480 185 Q 520 220 540 235"
                            fill="none"
                            stroke="#0284c7"
                            strokeWidth="2.5"
                            strokeOpacity="0.8"
                          />
                          <text x="430" y="160" className="text-[8px] font-mono fill-cyan-300" transform="rotate(35 430,160)">Rio Chama</text>

                          {/* Rio Grande */}
                          <path
                            d="M 590 70 Q 585 130 575 190 Q 550 240 520 280 Q 480 340 470 420 Q 460 500 475 580 Q 480 620 480 650"
                            fill="none"
                            stroke="#0ea5e9"
                            strokeWidth="3.5"
                            strokeOpacity="0.9"
                          />
                          <text x="560" y="110" className="text-[9px] font-mono fill-cyan-400 font-bold" transform="rotate(80 560,110)">Rio Grande Watershed</text>
                          
                          {/* Real-time Environmental Sensor Dots along Rivers */}
                          <circle cx="360" cy="103" r="3" fill="#22c55e" className="animate-pulse" />
                          <circle cx="280" cy="105" r="3" fill="#22c55e" className="animate-pulse" />
                          <circle cx="460" cy="170" r="3" fill="#22c55e" className="animate-pulse" />
                          <circle cx="580" cy="155" r="3" fill="#22c55e" className="animate-pulse" />
                          <circle cx="530" cy="260" r="3" fill="#22c55e" className="animate-pulse" />
                        </g>
                      )}

                      {/* POST-QUANTUM S-VPN MESH TUNNELS (TIER 2) */}
                      {showVpnMeshOverlay && (
                        <g>
                          {/* Dulce <-> Taos Pueblo S-VPN Tunnel */}
                          <line
                            x1="380"
                            y1="115"
                            x2="610"
                            y2="145"
                            stroke="#a855f7"
                            strokeWidth="3.5"
                            strokeDasharray="6,4"
                            className="animate-pulse"
                            filter="url(#glowPurple)"
                          />
                          {/* Taos Latency Badge */}
                          <rect x="470" y="115" width="65" height="18" rx="4" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                          <text x="502" y="127" textAnchor="middle" className="text-[9px] font-mono fill-fuchsia-200 font-bold">4.2ms / 10G</text>

                          {/* Dulce <-> Navajo Nation (Shiprock) S-VPN Link */}
                          <line
                            x1="380"
                            y1="115"
                            x2="200"
                            y2="130"
                            stroke="#a855f7"
                            strokeWidth="3"
                            strokeDasharray="6,4"
                            className="animate-pulse"
                          />
                          <rect x="270" y="110" width="65" height="18" rx="4" fill="#3b0764" stroke="#c084fc" strokeWidth="1" />
                          <text x="302" y="122" textAnchor="middle" className="text-[9px] font-mono fill-fuchsia-200 font-bold">6.1ms / 10G</text>

                          {/* Dulce <-> Picuris Pueblo S-VPN Link */}
                          <line
                            x1="380"
                            y1="115"
                            x2="590"
                            y2="205"
                            stroke="#a855f7"
                            strokeWidth="2.5"
                            strokeDasharray="4,4"
                          />

                          {/* Taos Pueblo <-> Picuris Pueblo Direct Inter-Pueblo Link */}
                          <line
                            x1="610"
                            y1="145"
                            x2="590"
                            y2="205"
                            stroke="#c084fc"
                            strokeWidth="2.5"
                            strokeDasharray="3,3"
                          />

                          {/* Dulce <-> Mescalero Apache (Southern NM) S-VPN Link */}
                          <line
                            x1="380"
                            y1="115"
                            x2="630"
                            y2="570"
                            stroke="#9333ea"
                            strokeWidth="2"
                            strokeDasharray="4,4"
                            strokeOpacity="0.7"
                          />
                          <rect x="490" y="380" width="70" height="18" rx="4" fill="#3b0764" stroke="#a855f7" strokeWidth="1" />
                          <text x="525" y="392" textAnchor="middle" className="text-[9px] font-mono fill-fuchsia-200 font-bold">12.4ms / 5G</text>

                          {/* Diné (Shiprock) <-> Diné (Window Rock) Link */}
                          <line
                            x1="200"
                            y1="130"
                            x2="130"
                            y2="310"
                            stroke="#a855f7"
                            strokeWidth="2"
                            strokeDasharray="4,4"
                          />
                        </g>
                      )}

                      {/* HARDWARE DATA DIODE OUTFLOW (TIER 3 TO SANTA FE / ALBUQUERQUE CLOUD DMZ) */}
                      {showDataDiodeOverlay && (
                        <g>
                          {/* Unidirectional Laser Beam */}
                          <line
                            x1="380"
                            y1="115"
                            x2="530"
                            y2="285"
                            stroke="#06b6d4"
                            strokeWidth="2.5"
                            strokeDasharray="6,3"
                          />
                          {/* Data Diode Icon on Link */}
                          <circle cx="455" cy="200" r="12" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
                          <path d="M 450 195 L 460 200 L 450 205 Z" fill="#22d3ee" />
                          <line x1="460" y1="193" x2="460" y2="207" stroke="#22d3ee" strokeWidth="2" />
                          <text x="455" y="222" textAnchor="middle" className="text-[8px] font-mono fill-cyan-300 font-bold">DATA DIODE</text>

                          {/* Laser Extension to Albuquerque Public Cloud */}
                          <line
                            x1="530"
                            y1="285"
                            x2="480"
                            y2="370"
                            stroke="#0284c7"
                            strokeWidth="2"
                          />
                        </g>
                      )}

                      {/* OURAY MUSKRAT (USER #2) DEMONSTRATION DATA PATH */}
                      {showOurayOverlay && (
                        <g>
                          {/* Soil Remediation Path from Four Corners through Dulce to Taos Hemp Co-op */}
                          <path
                            d="M 240 160 Q 310 135 380 115 Q 495 130 610 145"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="2"
                            strokeDasharray="2,3"
                          />
                          <rect x="235" y="150" width="130" height="20" rx="4" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
                          <text x="300" y="163" textAnchor="middle" className="text-[9px] font-mono fill-emerald-200 font-bold">
                            User #2 Soil Phytoremediation Feed
                          </text>
                        </g>
                      )}

                      {/* TRIBAL NATION GEOGRAPHIC NODES */}

                      {/* 1. DULCE, NM (JICARILLA APACHE SOVEREIGN ROOT) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-dulce-core')}
                        onMouseEnter={() => setMapHoveredNode('dulce')}
                        onMouseLeave={() => setMapHoveredNode(null)}
                      >
                        {/* Air-Gap Faraday Protective Ring */}
                        <circle cx="380" cy="115" r="36" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.8" className="animate-spin" />
                        <circle cx="380" cy="115" r="28" fill="#4c0519" stroke="#f43f5e" strokeWidth="3" filter="url(#glowGold)" />
                        <circle cx="380" cy="115" r="14" fill="#be123c" />
                        
                        {/* Center Icon Symbol */}
                        <text x="380" y="120" textAnchor="middle" className="text-[12px] fill-amber-300 font-bold">🪶</text>

                        {/* Node Badge */}
                        <rect x="270" y="55" width="220" height="34" rx="6" fill="#1c1917" stroke="#f43f5e" strokeWidth="1.5" />
                        <text x="380" y="69" textAnchor="middle" className="text-[11px] font-mono fill-rose-400 font-black">
                          TIER 1 SOVEREIGN ROOT: DULCE, NM
                        </text>
                        <text x="380" y="83" textAnchor="middle" className="text-[9px] font-mono fill-amber-200">
                          Jicarilla Apache Nation • Air-Gapped Gemini AI
                        </text>
                      </g>

                      {/* 2. TAOS PUEBLO (UPPER RIO GRANDE) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-treaty-mesh')}
                        onMouseEnter={() => setMapHoveredNode('taos')}
                        onMouseLeave={() => setMapHoveredNode(null)}
                      >
                        <circle cx="610" cy="145" r="20" fill="#2e1065" stroke="#a855f7" strokeWidth="2.5" />
                        <circle cx="610" cy="145" r="8" fill="#9333ea" />
                        <text x="610" y="149" textAnchor="middle" className="text-[10px] fill-fuchsia-200 font-bold">⛰️</text>

                        {/* Badge */}
                        <rect x="635" y="130" width="180" height="32" rx="5" fill="#1c1917" stroke="#a855f7" strokeWidth="1.2" />
                        <text x="725" y="144" textAnchor="middle" className="text-[10px] font-mono fill-purple-300 font-bold">
                          TAOS PUEBLO SOVEREIGN NODE
                        </text>
                        <text x="725" y="156" textAnchor="middle" className="text-[8px] font-mono fill-stone-300">
                          Upper Rio Grande & Sacred Blue Lake S-VPN
                        </text>
                      </g>

                      {/* 3. PICURIS PUEBLO */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-treaty-mesh')}
                        onMouseEnter={() => setMapHoveredNode('picuris')}
                        onMouseLeave={() => setMapHoveredNode(null)}
                      >
                        <circle cx="590" cy="205" r="14" fill="#3b0764" stroke="#c084fc" strokeWidth="2" />
                        <text x="590" y="209" textAnchor="middle" className="text-[9px] fill-purple-200">🌲</text>
                        <text x="610" y="210" className="text-[9px] font-mono fill-purple-300 font-bold">Picuris Pueblo S-VPN (Forest Pyro-Exposomics)</text>
                      </g>

                      {/* 4. NAVAJO NATION / DINÉ (SHIPROCK & WINDOW ROCK) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-treaty-mesh')}
                        onMouseEnter={() => setMapHoveredNode('navajo')}
                        onMouseLeave={() => setMapHoveredNode(null)}
                      >
                        {/* Shiprock Node */}
                        <circle cx="200" cy="130" r="18" fill="#3b0764" stroke="#a855f7" strokeWidth="2" />
                        <circle cx="200" cy="130" r="7" fill="#7e22ce" />
                        <text x="200" y="134" textAnchor="middle" className="text-[9px] fill-purple-200 font-bold">🏜️</text>

                        <rect x="100" y="152" width="190" height="28" rx="4" fill="#1c1917" stroke="#a855f7" strokeWidth="1" />
                        <text x="195" y="165" textAnchor="middle" className="text-[9px] font-mono fill-purple-300 font-bold">
                          NAVAJO NATION: SHIPROCK / SAN JUAN
                        </text>
                        <text x="195" y="176" textAnchor="middle" className="text-[8px] font-mono fill-stone-300">
                          Uranium Runoff & Oil/Gas Flaring Sensor AI
                        </text>

                        {/* Window Rock Node */}
                        <circle cx="130" cy="310" r="14" fill="#3b0764" stroke="#a855f7" strokeWidth="1.5" />
                        <text x="130" y="314" textAnchor="middle" className="text-[8px] fill-purple-200">🏛️</text>
                        <text x="150" y="314" className="text-[9px] font-mono fill-purple-300">Window Rock (Diné Capital)</text>
                      </g>

                      {/* 5. MESCALERO APACHE NATION (SOUTHERN NM) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-treaty-mesh')}
                        onMouseEnter={() => setMapHoveredNode('mescalero')}
                        onMouseLeave={() => setMapHoveredNode(null)}
                      >
                        <circle cx="630" cy="570" r="16" fill="#3b0764" stroke="#9333ea" strokeWidth="2" />
                        <text x="630" y="574" textAnchor="middle" className="text-[9px] fill-purple-200">🦅</text>
                        <rect x="655" y="555" width="180" height="28" rx="4" fill="#1c1917" stroke="#9333ea" strokeWidth="1" />
                        <text x="745" y="567" textAnchor="middle" className="text-[9px] font-mono fill-purple-300 font-bold">
                          MESCALERO APACHE NATION
                        </text>
                        <text x="745" y="578" textAnchor="middle" className="text-[8px] font-mono fill-stone-300">
                          Sierra Blanca Apache League Link
                        </text>
                      </g>

                      {/* 6. SANTA FE (STATE CAPITOL & INTERGOVERNMENTAL COMPACT NODE) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-public-gateway')}
                      >
                        <circle cx="530" cy="285" r="14" fill="#0c4a6e" stroke="#0284c7" strokeWidth="1.5" />
                        <text x="530" y="289" textAnchor="middle" className="text-[8px] fill-cyan-200">🏛️</text>
                        <text x="550" y="285" className="text-[10px] font-mono fill-cyan-300 font-bold">Santa Fe (State Capitol & Compact Node)</text>
                        <text x="550" y="297" className="text-[8px] font-mono fill-stone-400">First Indigenous Governor Interconnect</text>
                      </g>

                      {/* 7. ALBUQUERQUE (PUBLIC CLOUD DMZ & DATA DIODE TERMINATION) */}
                      <g 
                        className="cursor-pointer group"
                        onClick={() => setSelectedNodeId('node-public-gateway')}
                      >
                        <circle cx="480" cy="370" r="15" fill="#082f49" stroke="#06b6d4" strokeWidth="2" />
                        <text x="480" y="374" textAnchor="middle" className="text-[9px] fill-cyan-200">🌐</text>
                        <rect x="360" y="400" width="240" height="30" rx="4" fill="#1c1917" stroke="#06b6d4" strokeWidth="1" />
                        <text x="480" y="413" textAnchor="middle" className="text-[9px] font-mono fill-cyan-300 font-bold">
                          ALBUQUERQUE HYBRID CLOUD DMZ
                        </text>
                        <text x="480" y="424" textAnchor="middle" className="text-[8px] font-mono fill-stone-400">
                          Casino & Wildlife License Gateway • Zero PII Leak
                        </text>
                      </g>
                    </svg>

                    {/* LIVE NODE TELEMETRY TOOLTIP */}
                    {mapHoveredNode && (
                      <div className="absolute bottom-4 left-4 bg-stone-900/95 border border-amber-500/60 rounded-xl p-3 text-xs font-mono shadow-2xl backdrop-blur-md max-w-sm pointer-events-none animate-in fade-in duration-150">
                        {mapHoveredNode === 'dulce' && (
                          <div className="space-y-1">
                            <span className="font-bold text-rose-400 flex items-center gap-1">🪶 Dulce Micro-Datacenter Root (Tier 1)</span>
                            <p className="text-stone-300 text-[11px]">Hardware FIPS 140-3 Level 4 HSM • Air-Gapped Gemini AI • Shamir 3/5 Elder Quorum. 0% WAN Egress.</p>
                          </div>
                        )}
                        {mapHoveredNode === 'taos' && (
                          <div className="space-y-1">
                            <span className="font-bold text-purple-400 flex items-center gap-1">⛰️ Taos Pueblo S-VPN Treaty Node (Tier 2)</span>
                            <p className="text-stone-300 text-[11px]">Post-Quantum Kyber-1024 Link (4.2ms) • Rio Grande Watershed Sensors • UCANX Hemp Co-op Clearing.</p>
                          </div>
                        )}
                        {mapHoveredNode === 'navajo' && (
                          <div className="space-y-1">
                            <span className="font-bold text-purple-400 flex items-center gap-1">🏜️ Navajo Nation / Diné S-VPN Link (Tier 2)</span>
                            <p className="text-stone-300 text-[11px]">Post-Quantum Link (6.1ms) • San Juan Uranium Runoff Sensors • Real-Time Oil/Gas Flaring Detection AI.</p>
                          </div>
                        )}
                        {mapHoveredNode === 'picuris' && (
                          <div className="space-y-1">
                            <span className="font-bold text-purple-400 flex items-center gap-1">🌲 Picuris Pueblo Sovereign Node (Tier 2)</span>
                            <p className="text-stone-300 text-[11px]">High Alpine Smoke/Pyro-Exposomics • Traditional Agricultural & Water Flow Sensor Sharing.</p>
                          </div>
                        )}
                        {mapHoveredNode === 'mescalero' && (
                          <div className="space-y-1">
                            <span className="font-bold text-purple-400 flex items-center gap-1">🦅 Mescalero Apache Nation Link (Tier 2)</span>
                            <p className="text-stone-300 text-[11px]">Apache Linguistic Preservation AI • Sovereign Timber Management • Inter-Tribal Mutual Defense.</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* MODE 2: PHYSICAL HARDWARE & CRYPTOGRAPHIC SCHEMATIC BLUEPRINT */}
              {(graphicViewMode === 'schematic' || graphicViewMode === 'combined') && (
                <div className="bg-stone-950 border-2 border-stone-800 rounded-2xl p-4 sm:p-6 space-y-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase text-amber-400 font-bold tracking-wider block">
                        Hardware Architecture & Cryptographic Flowchart
                      </span>
                      <h4 className="text-lg font-bold font-serif text-white flex items-center gap-2">
                        <span>⚙️ 3-Tier Sovereign Hardware & Data Diode Schematic (Plate #24)</span>
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-stone-400">
                      Standard: FIPS 140-3 L4 • Post-Quantum WireGuard • Shamir (k=3, n=5)
                    </span>
                  </div>

                  {/* HARDWARE FLOW BLOCKS */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    
                    {/* TIER 1 HARDWARE BLOCK (DULCE ON-PREMISE SOVEREIGN CLUSTER) */}
                    <div className="bg-rose-950/30 border-2 border-rose-600/50 rounded-2xl p-4 space-y-3.5 relative">
                      <div className="flex items-center justify-between border-b border-rose-700/40 pb-2">
                        <span className="font-serif font-bold text-rose-300 text-sm flex items-center gap-1.5">
                          <HardDrive size={16} className="text-rose-400" />
                          TIER 1: Physical On-Premise
                        </span>
                        <span className="px-2 py-0.5 bg-rose-900 text-rose-200 text-[10px] font-mono rounded font-bold">
                          DULCE, NM
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-rose-400 font-bold block">1. Compute & HSM Master Root</span>
                          <p className="text-stone-200 font-mono text-[11px]">Dual AMD EPYC 9654 • 1.5TB ECC RAM • FIPS 140-3 Level 4 HSM</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-amber-400 font-bold block">2. Shamir 3/5 Elder Key Distribution</span>
                          <p className="text-stone-200 text-[11px]">Master AES-256-XTS volume key split into 5 physical smartcards; requires 3 Elders present to reconstruct.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold block">3. Air-Gapped Gemini On-Premise AI</span>
                          <p className="text-stone-200 text-[11px]">Local quantized LLM for Jicarilla Eastern Apache linguistic archive & clinical diagnostic triage. 0% WAN egress.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-cyan-400 font-bold block">4. True Optical Cold Vault</span>
                          <p className="text-stone-200 text-[11px]">Ceramic WORM M-DISC carousel in Faraday shielded vault for sacred Go-Jii-Ya ceremonies.</p>
                        </div>
                      </div>

                      <div className="p-2 bg-rose-950/60 border border-rose-500/40 rounded-xl text-[10px] font-mono text-rose-200">
                        🛡️ Air-Gap Integrity: 100% physically isolated from public routing tables.
                      </div>
                    </div>

                    {/* TIER 2 HARDWARE BLOCK (INTER-TRIBAL S-VPN ROUTERS) */}
                    <div className="bg-purple-950/30 border-2 border-purple-600/50 rounded-2xl p-4 space-y-3.5 relative">
                      <div className="flex items-center justify-between border-b border-purple-700/40 pb-2">
                        <span className="font-serif font-bold text-purple-300 text-sm flex items-center gap-1.5">
                          <Network size={16} className="text-purple-400" />
                          TIER 2: Inter-Tribal S-VPN
                        </span>
                        <span className="px-2 py-0.5 bg-purple-900 text-purple-200 text-[10px] font-mono rounded font-bold">
                          POST-QUANTUM MESH
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-purple-400 font-bold block">1. Post-Quantum WireGuard Routers</span>
                          <p className="text-stone-200 font-mono text-[11px]">Kyber-1024 Key Exchange & Dilithium Digital Signatures across microwave and sovereign fiber.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-purple-300 font-bold block">2. Allied Peering Nodes</span>
                          <p className="text-stone-200 text-[11px]">Taos Pueblo (4.2ms), Navajo Nation (6.1ms), Picuris (4.8ms), Mescalero Apache (12.4ms).</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold block">3. Watershed & Flaring AI Co-Processors</span>
                          <p className="text-stone-200 text-[11px]">Real-time co-regulatory streaming of San Juan Basin, Rio Chama & Rio Grande heavy metal sensors.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-amber-400 font-bold block">4. UCANX Commodity Trade Clearing</span>
                          <p className="text-stone-200 text-[11px]">Cryptographic settlement for phytoremediation hemp, organic crops, and sovereign microgrid energy.</p>
                        </div>
                      </div>

                      <div className="p-2 bg-purple-950/60 border border-purple-500/40 rounded-xl text-[10px] font-mono text-purple-200">
                        🤝 Treaty Jurisdiction: Sovereign nation-to-nation encryption keys.
                      </div>
                    </div>

                    {/* TIER 3 HARDWARE BLOCK (HARDWARE DATA DIODE & PUBLIC DMZ) */}
                    <div className="bg-cyan-950/30 border-2 border-cyan-600/50 rounded-2xl p-4 space-y-3.5 relative">
                      <div className="flex items-center justify-between border-b border-cyan-700/40 pb-2">
                        <span className="font-serif font-bold text-cyan-300 text-sm flex items-center gap-1.5">
                          <Globe size={16} className="text-cyan-400" />
                          TIER 3: Public Gateway & DMZ
                        </span>
                        <span className="px-2 py-0.5 bg-cyan-900 text-cyan-200 text-[10px] font-mono rounded font-bold">
                          ONE-WAY VALVE
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-cyan-400 font-bold block">1. Physical Hardware Data Diode</span>
                          <p className="text-stone-200 font-mono text-[11px]">Single-strand optical laser transmitter; RX fiber physically severed to eliminate ingress attacks.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-cyan-300 font-bold block">2. Zero-Knowledge Query Sanitizer</span>
                          <p className="text-stone-200 text-[11px]">Automated proxy scrubs all tribal PII and internal IPs before querying public search and cloud AI.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-amber-400 font-bold block">3. Tribal Enterprise Portals</span>
                          <p className="text-stone-200 text-[11px]">Public high-availability hosting for Apache Nugget Casino, Jicarilla Wildlife Hunting Licenses.</p>
                        </div>

                        <div className="p-2.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                          <span className="text-[10px] font-mono text-emerald-400 font-bold block">4. Public Gemini 2.5 Cloud Proxy</span>
                          <p className="text-stone-200 text-[11px]">Powers general research, grant drafts, and tourist inquiries with 100% sovereign protection.</p>
                        </div>
                      </div>

                      <div className="p-2 bg-cyan-950/60 border border-cyan-500/40 rounded-xl text-[10px] font-mono text-cyan-200">
                        ⚡ Zero-Leak Guarantee: Reverse packet injection physically impossible.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* VISUAL ARCHITECTURE GRID & NODE SELECTOR */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4">
              
              {/* TIER 1 COLUMN: PHYSICAL PRIVATE RESERVATION NETWORK */}
              <div className="space-y-4 bg-rose-950/20 border-2 border-rose-600/40 rounded-2xl p-5 relative">
                <div className="flex items-center justify-between border-b border-rose-700/30 pb-3">
                  <div className="flex items-center gap-2">
                    <HardDrive className="text-rose-400" size={20} />
                    <span className="font-bold text-rose-300 font-serif">TIER 1: Physical Private</span>
                  </div>
                  <span className="px-2 py-0.5 bg-rose-900/60 text-rose-200 text-[10px] font-mono rounded font-bold border border-rose-500/40">
                    AIR-GAPPED SOIL
                  </span>
                </div>

                <p className="text-xs text-rose-200/80 leading-relaxed">
                  Located physically inside the Jicarilla Apache Reservation boundary in Dulce, NM. ZERO direct inbound or outbound commercial cloud connectivity.
                </p>

                {/* Nodes inside Tier 1 */}
                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedNodeId('node-dulce-core')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedNodeId === 'node-dulce-core'
                        ? 'bg-rose-900/80 border-rose-400 text-white shadow-lg ring-2 ring-rose-400/50'
                        : 'bg-stone-900/80 border-stone-700 text-stone-300 hover:border-rose-500/50 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm flex items-center gap-1.5">
                        <Server size={15} className="text-rose-400" />
                        Dulce Sovereign Core Micro-Datacenter
                      </span>
                      <ChevronRight size={14} className="text-rose-400" />
                    </div>
                    <span className="text-[11px] text-rose-300/80 block mt-1">
                      AMD EPYC • FIPS 140-3 HSM • Shamir 3/5 Elder Keys
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 block mt-0.5">
                      ⚡ Air-Gapped Gemini On-Premise AI
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedNodeId('node-sacred-vault')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedNodeId === 'node-sacred-vault'
                        ? 'bg-rose-900/80 border-rose-400 text-white shadow-lg ring-2 ring-rose-400/50'
                        : 'bg-stone-900/80 border-stone-700 text-stone-300 hover:border-rose-500/50 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm flex items-center gap-1.5">
                        <Lock size={15} className="text-amber-400" />
                        Sacred Ceremonial Cold Vault
                      </span>
                      <ChevronRight size={14} className="text-amber-400" />
                    </div>
                    <span className="text-[11px] text-rose-300/80 block mt-1">
                      Go-Jii-Ya Rituals • Clan Songs • Oral Creation Histories
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 block mt-0.5">
                      🔒 True Optical Glass / Ceramic Air-Gap
                    </span>
                  </button>

                  <button
                    onClick={() => setSelectedNodeId('node-ihs-clinic')}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedNodeId === 'node-ihs-clinic'
                        ? 'bg-rose-900/80 border-rose-400 text-white shadow-lg ring-2 ring-rose-400/50'
                        : 'bg-stone-900/80 border-stone-700 text-stone-300 hover:border-rose-500/50 hover:bg-stone-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm flex items-center gap-1.5">
                        <Activity size={15} className="text-emerald-400" />
                        Dulce Health & IHS EHR Sovereign Node
                      </span>
                      <ChevronRight size={14} className="text-emerald-400" />
                    </div>
                    <span className="text-[11px] text-rose-300/80 block mt-1">
                      Member Health Records • BLL & Toxic Metal Panels
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 block mt-0.5">
                      🏥 HIPAA Sovereign Data Compact
                    </span>
                  </button>
                </div>
              </div>

              {/* TIER 2 COLUMN: INTER-TRIBAL SOVEREIGN VPN MESH */}
              <div className="space-y-4 bg-purple-950/20 border-2 border-purple-600/40 rounded-2xl p-5 relative">
                <div className="flex items-center justify-between border-b border-purple-700/30 pb-3">
                  <div className="flex items-center gap-2">
                    <Network className="text-purple-400" size={20} />
                    <span className="font-bold text-purple-300 font-serif">TIER 2: Inter-Tribal S-VPN</span>
                  </div>
                  <span className="px-2 py-0.5 bg-purple-900/60 text-purple-200 text-[10px] font-mono rounded font-bold border border-purple-500/40">
                    TREATY ENCRYPTED
                  </span>
                </div>

                <p className="text-xs text-purple-200/80 leading-relaxed">
                  Post-quantum encrypted tunnels linking Jicarilla Apache with Taos Pueblo, Diné (Navajo Nation), Picuris, and Mescalero Apache for co-regulatory defense.
                </p>

                <button
                  onClick={() => setSelectedNodeId('node-treaty-mesh')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedNodeId === 'node-treaty-mesh'
                      ? 'bg-purple-900/80 border-purple-400 text-white shadow-lg ring-2 ring-purple-400/50'
                      : 'bg-stone-900/80 border-stone-700 text-stone-300 hover:border-purple-500/50 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      <Radio size={15} className="text-purple-400" />
                      Inter-Tribal Co-Regulatory Treaty Mesh
                    </span>
                    <ChevronRight size={14} className="text-purple-400" />
                  </div>
                  <span className="text-[11px] text-purple-300/80 block mt-1">
                    Post-Quantum WireGuard • Kyber-1024 / Dilithium
                  </span>
                  <span className="text-[10px] font-mono text-purple-400 block mt-0.5">
                    🌐 Taos Pueblo • Navajo • Picuris • Mescalero
                  </span>
                </button>

                {/* Linked Sovereign Nodes List */}
                <div className="bg-stone-900/90 rounded-xl p-3 border border-purple-500/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-purple-300 font-bold block">
                    Active Treaty-Bound Node Links:
                  </span>
                  <div className="space-y-1.5 text-xs">
                    <div className="flex items-center justify-between text-stone-300">
                      <span>Taos Pueblo (Upper Rio Grande)</span>
                      <span className="text-emerald-400 font-mono font-bold">4.2 ms / 10G</span>
                    </div>
                    <div className="flex items-center justify-between text-stone-300">
                      <span>Navajo Nation (Shiprock/Window Rock)</span>
                      <span className="text-emerald-400 font-mono font-bold">6.1 ms / 10G</span>
                    </div>
                    <div className="flex items-center justify-between text-stone-300">
                      <span>Picuris Pueblo (Forest & Pyro)</span>
                      <span className="text-emerald-400 font-mono font-bold">4.8 ms / 1G</span>
                    </div>
                    <div className="flex items-center justify-between text-stone-300">
                      <span>Mescalero Apache (Apache League)</span>
                      <span className="text-emerald-400 font-mono font-bold">12.4 ms / 5G</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-3 text-[11px] text-purple-200">
                  <strong>Shared Environmental Engine:</strong> Real-time watershed monitoring of Rio Chama & San Juan Basin, uranium leachate detection, and cross-border wildfire smoke modeling.
                </div>
              </div>

              {/* TIER 3 COLUMN: PUBLIC GATEWAY & CLOUD DMZ */}
              <div className="space-y-4 bg-cyan-950/20 border-2 border-cyan-600/40 rounded-2xl p-5 relative">
                <div className="flex items-center justify-between border-b border-cyan-700/30 pb-3">
                  <div className="flex items-center gap-2">
                    <Globe className="text-cyan-400" size={20} />
                    <span className="font-bold text-cyan-300 font-serif">TIER 3: Public Gateway</span>
                  </div>
                  <span className="px-2 py-0.5 bg-cyan-900/60 text-cyan-200 text-[10px] font-mono rounded font-bold border border-cyan-500/40">
                    ONE-WAY SHIELD
                  </span>
                </div>

                <p className="text-xs text-cyan-200/80 leading-relaxed">
                  Hardware Data Diode and reverse proxy boundary separating sovereign reservation infrastructure from the World Wide Web and public cloud.
                </p>

                <button
                  onClick={() => setSelectedNodeId('node-public-gateway')}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                    selectedNodeId === 'node-public-gateway'
                      ? 'bg-cyan-900/80 border-cyan-400 text-white shadow-lg ring-2 ring-cyan-400/50'
                      : 'bg-stone-900/80 border-stone-700 text-stone-300 hover:border-cyan-500/50 hover:bg-stone-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm flex items-center gap-1.5">
                      <ShieldCheck size={15} className="text-cyan-400" />
                      Deterministic Data Diode & Public DMZ
                    </span>
                    <ChevronRight size={14} className="text-cyan-400" />
                  </div>
                  <span className="text-[11px] text-cyan-300/80 block mt-1">
                    Optical One-Way Valve • Zero Ingress Path
                  </span>
                  <span className="text-[10px] font-mono text-cyan-400 block mt-0.5">
                    🛡️ Google Cloud Sovereign Interconnect
                  </span>
                </button>

                <div className="bg-stone-900/90 rounded-xl p-3 border border-cyan-500/30 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-cyan-300 font-bold block">
                    Public Enterprise Endpoints:
                  </span>
                  <div className="space-y-1.5 text-xs text-stone-300">
                    <div>• Jicarilla Wildlife & Fisheries Hunting License Portal</div>
                    <div>• Apache Nugget Casino & Hospitality Booking</div>
                    <div>• Public Environmental Press & State Legislative Reports</div>
                    <div>• Outbound Sanitized Web Search & Public Cloud AI</div>
                  </div>
                </div>

                <div className="bg-cyan-900/40 border border-cyan-500/30 rounded-xl p-3 text-[11px] text-cyan-200">
                  <strong>Zero-Leakage Guarantee:</strong> No private ceremonial, health, or tribal council data can ever transit the Data Diode to public LLMs.
                </div>
              </div>
            </div>

            {/* SELECTED NODE DEEP-DIVE INSPECTOR PANEL */}
            {selectedNodeId && networkNodes[selectedNodeId] && (
              <div className="bg-stone-950 border-2 border-amber-500/60 rounded-2xl p-6 space-y-5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                      Inspecting Node: {networkNodes[selectedNodeId].tier}
                    </span>
                    <h4 className="text-xl font-bold text-white font-serif flex items-center gap-2">
                      <Server size={22} className="text-amber-400" />
                      {networkNodes[selectedNodeId].name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-stone-900 border border-stone-700 text-stone-300 font-mono text-xs rounded-lg">
                      📍 {networkNodes[selectedNodeId].location}
                    </span>
                    <span className="px-3 py-1 bg-amber-500/20 border border-amber-400/50 text-amber-300 font-mono text-xs rounded-lg font-bold">
                      🛡️ {networkNodes[selectedNodeId].securityLevel}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 block font-bold">Hardware Specification</span>
                    <p className="text-xs text-stone-200 leading-snug">{networkNodes[selectedNodeId].hardwareSpecs}</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 block font-bold">Storage & Encryption Type</span>
                    <p className="text-xs text-stone-200 leading-snug">{networkNodes[selectedNodeId].storageType}</p>
                  </div>
                  <div className="p-3.5 bg-stone-900/90 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 block font-bold">AI Engine Capability</span>
                    <p className="text-xs text-emerald-300 font-mono font-medium leading-snug">{networkNodes[selectedNodeId].aiEngine}</p>
                  </div>
                </div>

                <p className="text-sm text-stone-300 leading-relaxed">
                  {networkNodes[selectedNodeId].description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <CheckCircle2 size={15} /> Permitted Data Payloads:
                    </span>
                    <ul className="text-xs text-stone-300 space-y-1.5 pl-4 list-disc marker:text-emerald-500">
                      {networkNodes[selectedNodeId].allowedData.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-rose-950/30 border border-rose-500/40 rounded-xl space-y-2">
                    <span className="text-xs font-mono font-bold text-rose-400 flex items-center gap-1.5">
                      <AlertTriangle size={15} /> Strictly Prohibited & Blocked:
                    </span>
                    <ul className="text-xs text-stone-300 space-y-1.5 pl-4 list-disc marker:text-rose-500">
                      {networkNodes[selectedNodeId].forbiddenData.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-amber-300/90 flex items-center gap-2 border-t border-stone-800">
                  <Shield size={14} className="text-amber-400" />
                  <span><strong>Legal Jurisdiction:</strong> {networkNodes[selectedNodeId].jurisdiction}</span>
                </div>
              </div>
            )}
          </div>

          {/* 3-TIER COMPARISON METRICS & DATA PROPORTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 space-y-4">
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Layers size={18} className="text-amber-600" />
                Tribal Data Distribution by Tier
              </h4>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={tierDistributionData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={70}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {tierDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(val: number) => [`${val}% of Total Tribal Data`, 'Proportion']}
                      contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '8px', color: '#f5f5f4' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-rose-600"></span> Tier 1 (On-Reservation Private)</span>
                  <span className="font-mono font-bold">58%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-purple-600"></span> Tier 2 (Inter-Tribal S-VPN)</span>
                  <span className="font-mono font-bold">27%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-cyan-600"></span> Tier 3 (Public Cloud & WWW)</span>
                  <span className="font-mono font-bold">15%</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 space-y-4">
              <h4 className="font-serif font-bold text-base text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Radio size={18} className="text-purple-600" />
                Inter-Tribal Treaty Mesh Links (Four Corners & New Mexico)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-stone-300 dark:border-stone-700 text-stone-500 dark:text-stone-400">
                      <th className="py-2">Allied Nation</th>
                      <th className="py-2">Distance</th>
                      <th className="py-2">Security Protocol</th>
                      <th className="py-2">Latency</th>
                      <th className="py-2">Co-Regulatory Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    {interTribalLinks.map((link, idx) => (
                      <tr key={idx} className="hover:bg-stone-100 dark:hover:bg-stone-800/50">
                        <td className="py-2.5 font-bold text-stone-900 dark:text-stone-100">{link.nation}</td>
                        <td className="py-2.5 text-stone-600 dark:text-stone-400">{link.distance}</td>
                        <td className="py-2.5 text-purple-700 dark:text-purple-300">{link.protocol}</td>
                        <td className="py-2.5 text-emerald-600 dark:text-emerald-400 font-bold">{link.latency}</td>
                        <td className="py-2.5 text-stone-600 dark:text-stone-300 text-[11px]">{link.sharedResources}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: COUNCIL & ELDER PRESENTATION DECK */}
      {activeSubTab === 'elder_presentation' && (
        <div className="space-y-8">
          
          {/* SLIDE NAVIGATION CONTROLS */}
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-amber-500/40 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest block">
                  Tribal Council & Elder Presentation Deck • Slide {currentSlideIndex + 1} of {elderSlides.length}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  {elderSlides[currentSlideIndex].title}
                </h3>
                <span className="text-xs font-mono text-stone-400 block mt-0.5">
                  {elderSlides[currentSlideIndex].subtitle}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={currentSlideIndex === 0}
                  onClick={() => setCurrentSlideIndex(prev => Math.max(0, prev - 1))}
                  className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 disabled:opacity-40 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer"
                >
                  ← Previous Slide
                </button>
                <button
                  disabled={currentSlideIndex === elderSlides.length - 1}
                  onClick={() => setCurrentSlideIndex(prev => Math.min(elderSlides.length - 1, prev + 1))}
                  className="px-3.5 py-2 bg-amber-600 hover:bg-amber-500 disabled:opacity-40 rounded-xl text-xs font-mono font-bold text-white transition-all cursor-pointer shadow"
                >
                  Next Slide →
                </button>
              </div>
            </div>

            {/* AUDIENCE CONTEXT */}
            <div className="p-3 bg-stone-800/60 rounded-xl border border-stone-700/60 text-xs font-mono text-amber-300/90 flex items-center gap-2">
              <Users size={15} className="text-amber-400 shrink-0" />
              <span><strong>Audience:</strong> {elderSlides[currentSlideIndex].audience}</span>
            </div>

            {/* SLIDE KEY POINTS */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-stone-400 font-bold block">
                Key Strategic & Cultural Pillars:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {elderSlides[currentSlideIndex].keyPoints.map((point, idx) => {
                  const [header, ...rest] = point.split(':');
                  return (
                    <div key={idx} className="p-4 bg-stone-800/80 border border-stone-700/80 rounded-2xl space-y-1.5 shadow-xs">
                      <div className="flex items-center gap-2 text-amber-400 font-bold text-sm font-serif">
                        <Feather size={15} className="shrink-0" />
                        <span>{header}</span>
                      </div>
                      <p className="text-xs text-stone-300 leading-relaxed pl-6">
                        {rest.join(':')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CEREMONIAL / SOVEREIGN QUOTE */}
            <div className="p-5 bg-gradient-to-r from-amber-950/60 via-stone-900 to-emerald-950/60 border-l-4 border-amber-500 rounded-r-2xl text-amber-100 font-serif italic text-base sm:text-lg leading-relaxed shadow-md">
              {elderSlides[currentSlideIndex].quote}
            </div>

            {/* SLIDE THUMBNAILS SELECTOR */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4 border-t border-stone-800">
              {elderSlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`p-2.5 text-left rounded-xl text-xs transition-all cursor-pointer border ${
                    currentSlideIndex === idx
                      ? 'bg-amber-600/30 border-amber-400 text-white font-bold'
                      : 'bg-stone-800/40 border-stone-700 text-stone-400 hover:bg-stone-800'
                  }`}
                >
                  <span className="font-mono text-[10px] text-amber-400 block">Slide {idx + 1}</span>
                  <span className="line-clamp-1">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* BRIEFING NOTES FOR STATE GOVERNMENT & PROSPECTIVE FIRST INDIGENOUS GOVERNOR */}
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-2xl">
                <Mountain size={24} />
              </span>
              <div>
                <span className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 font-bold tracking-widest block">
                  New Mexico State Briefing Document
                </span>
                <h4 className="text-xl font-bold font-serif text-stone-900 dark:text-stone-100">
                  State-Tribal Data Sovereignty Compact & Indigenous Governor Policy Vision
                </h4>
              </div>
            </div>

            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              As New Mexico prepares to potentially elect the <strong>first Indigenous American Governor in United States history</strong>, this architecture provides the ready-to-sign technological framework for State-Tribal intergovernmental cooperation. It replaces paternalistic federal data hoarding with true Sovereign Data Compacts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-2xl space-y-2">
                <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-600" />
                  1. Zero State Cloud Liability
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  The State of New Mexico does not take physical custody of sacred or confidential tribal records, eliminating state FOIA/IPRA disclosure risks and judicial subpoena exposure.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-2xl space-y-2">
                <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                  <Activity size={16} className="text-purple-600" />
                  2. Joint Environmental Action
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Real-time sensor feeds for Rio Grande, Rio Chama, and San Juan Basin water basins allow the New Mexico Environment Department (NMED) and Tribal Governments to co-regulate polluters instantaneously.
                </p>
              </div>

              <div className="p-4 bg-white dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-2xl space-y-2">
                <h5 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                  <Sparkles size={16} className="text-amber-600" />
                  3. Sovereign AI Leadership
                </h5>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  Positions New Mexico as the global capital of Ethical, Sovereign AI—proving how Indigenous Nations can deploy frontier Google Gemini capabilities on-premise without surrendering digital autonomy.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 3: OURAY MUSKRAT DEMONSTRATION PROFILE */}
      {activeSubTab === 'ouray_muskrat_demo' && (
        <div className="space-y-8">
          
          {/* USER 2 PROFILE HEADER */}
          <div className="bg-gradient-to-r from-emerald-950 via-stone-900 to-stone-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/40 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-mono font-bold text-2xl shadow-lg border-2 border-emerald-400">
                  OM
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 bg-emerald-500/30 text-emerald-300 text-xs font-mono font-bold rounded-full border border-emerald-400/40">
                      User #2 Sovereign Demonstration Profile
                    </span>
                    <span className="px-2.5 py-0.5 bg-amber-500/30 text-amber-300 text-xs font-mono font-bold rounded-full">
                      Master Phytoremediator
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white mt-1">
                    Ouray Muskrat
                  </h3>
                  <p className="text-xs font-mono text-stone-300">
                    Taos Pueblo & Four Corners Basin • Master Botanical Soil Restoration Specialist
                  </p>
                </div>
              </div>

              <div className="text-right font-mono text-xs text-stone-400">
                <span>Sovereign Identity Hash:</span>
                <span className="text-emerald-400 block font-bold">0xUSER_002_OURAY_MUSKRAT_VAULT</span>
              </div>
            </div>

            <p className="text-sm text-stone-200 leading-relaxed">
              Below is a live forensic demonstration of how <strong>User #2 Ouray Muskrat’s</strong> personal, medical, agricultural, and cultural data is mathematically partitioned across the 3 Tiers of the Jicarilla / Inter-Tribal Sovereign Hybrid IT Architecture.
            </p>

            {/* 3-TIER PARTITION MATRIX FOR OURAY MUSKRAT */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* OURAY TIER 1 DATA */}
              <div className="bg-rose-950/30 border-2 border-rose-600/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-rose-600/30 pb-2">
                  <span className="font-bold text-rose-300 text-sm font-serif">Tier 1: Private Air-Gap</span>
                  <span className="px-2 py-0.5 bg-rose-900 text-rose-200 text-[10px] font-mono rounded">
                    ON-RESERVATION ONLY
                  </span>
                </div>
                <ul className="text-xs text-stone-300 space-y-2">
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-rose-500/30">
                    <strong className="text-rose-400 block">Sacred Ceremonial Participation:</strong>
                    Record of Taos Pueblo & Jicarilla Go-Jii-Ya cultural duties (strictly air-gapped; 0% internet access).
                  </li>
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-rose-500/30">
                    <strong className="text-rose-400 block">IHS Health & Exposome Record:</strong>
                    Capillary Blood Lead Level (1.2 µg/dL pristine), cadmium urine screen, and family medical lineage.
                  </li>
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-rose-500/30">
                    <strong className="text-rose-400 block">Sacred Heirloom Seed Bank GPS:</strong>
                    Coordinates of ancestral high-potency CBD/CBG and phytoremediating industrial hemp genotypes.
                  </li>
                </ul>
              </div>

              {/* OURAY TIER 2 DATA */}
              <div className="bg-purple-950/30 border-2 border-purple-600/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-purple-600/30 pb-2">
                  <span className="font-bold text-purple-300 text-sm font-serif">Tier 2: Inter-Tribal S-VPN</span>
                  <span className="px-2 py-0.5 bg-purple-900 text-purple-200 text-[10px] font-mono rounded">
                    TREATY MESH SHARED
                  </span>
                </div>
                <ul className="text-xs text-stone-300 space-y-2">
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-purple-500/30">
                    <strong className="text-purple-400 block">Four Corners Soil Extraction Ledger:</strong>
                    Phytoremediation heavy metal uptake rates (Pb, U, As extraction per acre) shared with Jicarilla & Navajo producers.
                  </li>
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-purple-500/30">
                    <strong className="text-purple-400 block">Agua Das Hydro-Remediation Telemetry:</strong>
                    Real-time dissolved oxygen and heavy metal filtration data on the Upper Rio Grande & Rio Chama watersheds.
                  </li>
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-purple-500/30">
                    <strong className="text-purple-400 block">Raptor Lead Chelation Clinic Logs:</strong>
                    Collaborative eagle rehabilitation tracking with Anishinaabe and Pueblo raptor healers.
                  </li>
                </ul>
              </div>

              {/* OURAY TIER 3 DATA */}
              <div className="bg-cyan-950/30 border-2 border-cyan-600/40 rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-cyan-600/30 pb-2">
                  <span className="font-bold text-cyan-300 text-sm font-serif">Tier 3: Public Gateway</span>
                  <span className="px-2 py-0.5 bg-cyan-900 text-cyan-200 text-[10px] font-mono rounded">
                    PUBLIC WWW & COMMERCE
                  </span>
                </div>
                <ul className="text-xs text-stone-300 space-y-2">
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-cyan-500/30">
                    <strong className="text-cyan-400 block">UCANX Agricultural Certificate:</strong>
                    Public commodity verification of organic hemp fiber, certified zero-lead CBD biomass, and carbon credits.
                  </li>
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-cyan-500/30">
                    <strong className="text-cyan-400 block">Public Educational Papers:</strong>
                    Open-source exposenomics research on botanical soil regeneration and water conservation.
                  </li>
                  <li className="p-2 bg-stone-900/80 rounded-lg border border-cyan-500/30">
                    <strong className="text-cyan-400 block">Conference & Speaking Directory:</strong>
                    Public speaker bio for International Indigenous Science Symposia and New Mexico State Legislature hearings.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 4: LIVE DATA FLOW & ANTI-SURVEILLANCE SIMULATOR */}
      {activeSubTab === 'data_flow_simulator' && (
        <div className="space-y-8">
          
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 border-2 border-stone-800 shadow-2xl space-y-6">
            <div className="border-b border-stone-800 pb-4">
              <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-widest block">
                Interactive Sovereign IT Engine Simulator
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Simulate Data Ingestion, Routing & Anti-Surveillance Protection
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Select a scenario to test the deterministic firewall, data diode, post-quantum encryption, and on-premise Gemini AI engine in real time.
              </p>
            </div>

            {/* SCENARIO SELECTOR BUTTONS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              <button
                onClick={() => runDataFlowSimulation('ceremony_photo')}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  simScenario === 'ceremony_photo'
                    ? 'bg-rose-900/70 border-rose-400 text-white shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-rose-500/50'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Lock size={14} className="text-rose-400" />
                  <span>Sacred Ceremony</span>
                </div>
                <span className="text-[10px] text-stone-400 block mt-1">Go-Jii-Ya ritual media</span>
              </button>

              <button
                onClick={() => runDataFlowSimulation('ihs_lead_test')}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  simScenario === 'ihs_lead_test'
                    ? 'bg-emerald-900/70 border-emerald-400 text-white shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Activity size={14} className="text-emerald-400" />
                  <span>IHS Health Record</span>
                </div>
                <span className="text-[10px] text-stone-400 block mt-1">Blood lead & EHR panel</span>
              </button>

              <button
                onClick={() => runDataFlowSimulation('san_juan_water')}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  simScenario === 'san_juan_water'
                    ? 'bg-purple-900/70 border-purple-400 text-white shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-purple-500/50'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Radio size={14} className="text-purple-400" />
                  <span>Watershed Sensor</span>
                </div>
                <span className="text-[10px] text-stone-400 block mt-1">San Juan River telemetry</span>
              </button>

              <button
                onClick={() => runDataFlowSimulation('external_subpoena')}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  simScenario === 'external_subpoena'
                    ? 'bg-red-900/70 border-red-400 text-white shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-red-500/50'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <ShieldAlert size={14} className="text-red-400" />
                  <span>State Subpoena Attempt</span>
                </div>
                <span className="text-[10px] text-stone-400 block mt-1">External surveillance probe</span>
              </button>

              <button
                onClick={() => runDataFlowSimulation('elder_language_audio')}
                className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                  simScenario === 'elder_language_audio'
                    ? 'bg-amber-900/70 border-amber-400 text-white shadow-lg'
                    : 'bg-stone-800/80 border-stone-700 text-stone-300 hover:border-amber-500/50'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs">
                  <Feather size={14} className="text-amber-400" />
                  <span>Elder Oral History</span>
                </div>
                <span className="text-[10px] text-stone-400 block mt-1">Apache language audio</span>
              </button>
            </div>

            {/* SIMULATION RESULT DISPLAY */}
            {simResult && (
              <div className="bg-stone-950 border-2 border-stone-700 rounded-2xl p-6 space-y-4 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-amber-400 font-bold">
                      Payload Classification: {simResult.classification}
                    </span>
                    <h4 className="text-lg font-bold text-white font-serif">
                      {simResult.title}
                    </h4>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 rounded-full font-mono text-xs font-bold">
                    {simResult.securityStatus}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                      Physical Storage Action
                    </span>
                    <p className="text-xs text-stone-200">{simResult.action}</p>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-stone-400 font-bold block">
                      Network Routing & Diode Policy
                    </span>
                    <p className="text-xs font-mono text-stone-200">{simResult.routing}</p>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      On-Premise Gemini AI Processing
                    </span>
                    <p className="text-xs text-emerald-200">{simResult.aiInspection}</p>
                  </div>

                  <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">
                      Public Internet Leakage Risk
                    </span>
                    <p className="text-xs font-mono font-bold text-emerald-400">{simResult.publicLeakRisk}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUBTAB 5: SOVEREIGN SECURITY & LEGAL CHARTER */}
      {activeSubTab === 'security_charter' && (
        <div className="space-y-8">
          
          <div className="bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="p-2.5 bg-amber-500/20 text-amber-700 dark:text-amber-400 rounded-2xl">
                <ShieldCheck size={26} />
              </span>
              <div>
                <span className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 font-bold tracking-widest block">
                  Constitutional & Customary Legal Basis
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 dark:text-stone-100">
                  The Jicarilla Apache Nation Data Sovereignty Charter
                </h3>
              </div>
            </div>

            <div className="space-y-4 text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
              <p>
                Under the inherent sovereignty of the <strong>Jicarilla Apache Nation</strong>, recognized pursuant to the Treaty of 1852, Article 1, Section 8, Clause 3 of the United States Constitution (Indian Commerce Clause), and the Jicarilla Apache Constitution, all digital information representing tribal cultural patrimony, health data, natural resource surveys, and government deliberations is declared <strong>Sovereign Tribal Property</strong>.
              </p>

              <div className="p-5 bg-amber-500/10 border-l-4 border-amber-600 dark:border-amber-400 rounded-r-2xl space-y-3 font-mono text-xs text-amber-950 dark:text-amber-200">
                <div className="font-bold text-sm uppercase">Article I — Prohibition of Non-Tribal Extraterritorial Jurisdiction:</div>
                <p>
                  No foreign government, corporation, court, or intelligence service possesses lawful authority to compel disclosure, access encryption keys, or install surveillance backdoors on physical storage devices located within the sovereign boundaries of the Jicarilla Apache Reservation.
                </p>
                
                <div className="font-bold text-sm uppercase pt-2">Article II — Prohibition of Commercial AI Ingestion:</div>
                <p>
                  Any ingestion, scraping, tokenization, or vector embedding of Jicarilla sacred ceremonies, linguistic audio, or member health records into external commercial AI foundation models without formal Tribal Council legislative enactment constitutes a strict violation of sovereign intellectual property.
                </p>

                <div className="font-bold text-sm uppercase pt-2">Article III — Treaty-Bound Inter-Tribal Reciprocity:</div>
                <p>
                  Environmental sensor telemetry, water basin metrics, and agricultural trade ledgers shared over the Inter-Tribal S-VPN with Taos Pueblo, Navajo Nation, and allied sovereignties remain protected under multilateral Inter-Tribal Nation-to-Nation compacts.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2 font-mono text-xs text-stone-500">
                <Lock size={14} className="text-emerald-600" />
                <span>Enforced by FIPS 140-3 Hardware & Shamir Cryptography</span>
              </div>

              <div className="flex items-center gap-2">
                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('indigenous')}
                    className="px-4 py-2 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-mono text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Feather size={14} className="text-amber-600" />
                    <span>View Indigenous Sovereignty Tab</span>
                  </button>
                )}
                {onNavigateTab && (
                  <button
                    onClick={() => onNavigateTab('member_matrix')}
                    className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Users size={14} />
                    <span>View Member Matrix</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER NAVIGATION BAR */}
      <div className="bg-stone-100 dark:bg-stone-900/90 border border-stone-200 dark:border-stone-800 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-stone-600 dark:text-stone-400">
        <div className="flex items-center gap-2">
          <Globe size={16} className="text-amber-600 dark:text-amber-400" />
          <span>ICEarth Sovereign Research Directory • Jicarilla Apache Hybrid IT</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab('sovereign_portal')}
              className="px-3 py-1.5 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              Sovereign Member Portal
            </button>
          )}
          {onNavigateTab && (
            <button
              onClick={() => onNavigateTab('reports')}
              className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg transition-colors font-bold cursor-pointer"
            >
              News Repository
            </button>
          )}
        </div>
      </div>

      {/* PLATE #24 HIGH-RESOLUTION MODAL */}
      {showPlateModal && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-stone-900 border-2 border-amber-500/60 rounded-3xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="p-5 bg-stone-950 border-b border-stone-800 flex items-center justify-between">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded text-[11px] font-mono font-bold uppercase">
                  Plate #24 • High-Resolution Architectural Blueprint
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                  Jicarilla Apache Sovereign Hybrid IT & Air-Gapped AI Network Architecture
                </h3>
              </div>
              <button
                onClick={() => setShowPlateModal(false)}
                className="p-2 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-xl transition-colors cursor-pointer"
                title="Close Plate Modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-stone-200 font-sans">
              <div className="p-4 bg-stone-950/80 rounded-2xl border border-stone-800 space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider block">
                  Verbatim Forensic Specification & Cryptographic Provenance
                </span>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-serif">
                  <strong>Origins:</strong> Forensic technological and cryptographic blueprint plate establishing the 3-Tier Sovereign Hybrid IT Architecture for the <strong>Jicarilla Apache Nation</strong> and allied Indigenous sovereignties (<strong>Taos Pueblo</strong>, <strong>Diné</strong>, <strong>Picuris</strong>). Features the <strong>Dulce On-Premise Micro-Datacenter</strong> (FIPS 140-3 HSM, Shamir 3/5 Elder Key Ceremony, air-gapped Gemini On-Premise AI), the <strong>Post-Quantum Treaty-Bound S-VPN Mesh</strong> for Four Corners / San Juan Basin watershed and flaring co-regulation, and the <strong>Hardware Data Diode Zero-Leak Public DMZ</strong>. Details the multi-layered sovereign profile of demonstration member <strong>Ouray Muskrat (User #2)</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 bg-rose-950/30 border border-rose-600/40 rounded-xl space-y-2">
                  <span className="text-rose-400 font-bold block">TIER 1 SOVEREIGN ON-PREMISE ROOT (DULCE)</span>
                  <ul className="space-y-1 text-stone-300 list-disc list-inside">
                    <li>FIPS 140-3 Level 4 Hardware Security Module</li>
                    <li>Shamir Secret Sharing (k=3 of n=5 Elder Smartcards)</li>
                    <li>Air-Gapped Gemini On-Premise AI Inference Cluster</li>
                    <li>Ceramic M-DISC WORM Optical Ceremonial Carousel</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-950/30 border border-purple-600/40 rounded-xl space-y-2">
                  <span className="text-purple-400 font-bold block">TIER 2 TREATY S-VPN MESH (TAOS PUEBLO / DINÉ)</span>
                  <ul className="space-y-1 text-stone-300 list-disc list-inside">
                    <li>Post-Quantum WireGuard (Kyber-1024 / Dilithium)</li>
                    <li>San Juan & Rio Grande Watershed Telemetry Co-op</li>
                    <li>Real-time Oil/Gas Flaring Sensor Analytics</li>
                    <li>UCANX Inter-Tribal Commodity Settlement Ledger</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-cyan-950/30 border border-cyan-600/40 rounded-xl text-xs font-mono space-y-2">
                <span className="text-cyan-400 font-bold block">TIER 3 HARDWARE DATA DIODE & ZERO-LEAK PUBLIC DMZ</span>
                <p className="text-stone-300">
                  Single-strand optical physical diode terminating at Albuquerque/Santa Fe DMZ. Permits unidirectional telemetry and verified web publication with zero risk of sovereign data infiltration.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-stone-950 border-t border-stone-800 flex justify-end">
              <button
                onClick={() => setShowPlateModal(false)}
                className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white font-mono text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                Close Spec Inspector
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
