import React, { useState, useEffect } from 'react';
import launching1Img from '../assets/images/Launching1.png';
import caseAlumnusHeaderImg from '../assets/images/CaseAlumnusHeader.JPG';
import scatterplotImg from '../assets/images/Scatterplot.jpg';
import nanoSpire20YearsImg from '../assets/images/NanoSpire20Years.jpg';
import nanoSpireRoadmapImg from '../assets/images/NanoSpireRoadmap.jpg';
import natureSoilCanaryImg from '../assets/images/nature_soil_canary_1786614634627.jpg';
import omahaSuperfundImg from '../assets/images/omaha_superfund_lead_soil_proof_1786683057243.jpg';
import mittalCanaryLogoImg from '../assets/images/mittal_canary_logo_1786591941409.jpg';
import picaGeophagyImg from '../assets/images/pica_geophagy_lead_1786618000000_1786618338553.jpg';
import probioticGraphicImg from '../assets/images/probiotic_lead_intervention_1786650125640.jpg';
import flintLeadCrimeProofImg from '../assets/images/flint_lead_crime_proof_1786663441194.jpg';
import globalLeadCrimeProofImg from '../assets/images/global_lead_crime_proof_1786670881917.jpg';
import rouletsLawGlobalChaosImg from '../assets/images/roulets_law_global_chaos_1786670893758.jpg';
import nyLeadLitigationImg from '../assets/images/ny_lead_litigation_kakistocracy_1786687000000_1786686155359.jpg';
import surinameIsotopeImg from '../assets/images/suriname_lead_isotope_dbs_proof_1786692681970.jpg';
import denisovanInfographicImg from '../assets/images/denisovan_epas1_altitude_lead_introgression_1786695776411.jpg';
import wildfireInfographicImg from '../assets/images/wildfire_pyro_exposenomics_1786712573132.jpg';
import {
  Shield,
  UserCheck,
  Building2,
  MapPin,
  Key,
  Lock,
  Sparkles,
  AlertTriangle,
  CheckCircle,
  FileText,
  Activity,
  Award,
  Heart,
  TrendingUp,
  Search,
  ChevronRight,
  Database,
  Coins,
  DollarSign,
  Gavel,
  Globe,
  Dna,
  Sliders,
  RefreshCw,
  Plus,
  Trash2,
  Eye,
  Check,
  User,
  Users,
  Info,
  Layers,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  HardDrive,
  Download,
  Image,
  Share2,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line
} from 'recharts';

interface SovereignMembershipPortalProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface HistoricalAddress {
  id: string;
  location: string;
  years: string;
  leadRisk: 'High' | 'Moderate' | 'Low';
  notes: string;
}

interface OccupationalHazard {
  id: string;
  title: string;
  category: 'Mining' | 'Construction' | 'Firefighting' | 'Agriculture' | 'Military' | 'Manufacturing' | 'Other';
  yearsActive: number;
  exposureIntensity: 'Severe' | 'Moderate' | 'Mild';
}

export const SovereignMembershipPortal: React.FC<SovereignMembershipPortalProps> = ({ onNavigateTab, siteTheme = 'light' }) => {
  const isLight = siteTheme === 'light';
  // Main Sub-tabs inside Portal
  const [activePortalSubTab, setActivePortalSubTab] = useState<'sovereign_vault' | 'onboarding' | 'exposome_profiler' | 'tribal_gov' | 'membership_pricing'>('sovereign_vault');

  // USER AUTHENTICATION & IDENTITY STATE
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true); // Pre-logged in as demo sovereign member
  const [authRole, setAuthRole] = useState<'individual' | 'tribal_official' | 'municipal_officer' | 'supporter'>('individual');
  
  // MEMBER PROFILE FIELDS - DEFAULTED TO USER #1 (NORM ROULET / FOUNDER)
  const [memberName, setMemberName] = useState<string>('Norm Roulet');
  const [tribalAffiliation, setTribalAffiliation] = useState<string>('ICEarth Founder & UCANX Co-Founder • Taos Kush Institute');
  const [tribalRollId, setTribalRollId] = useState<string>('ICEARTH-USER-00000001-FOUNDER');
  const [nationalIdHash, setNationalIdHash] = useState<string>('US-FOUNDER-ZK-00000001');
  const [currentAddress, setCurrentAddress] = useState<string>('Taos, New Mexico 87571 (Upper Rio Grande Watershed)');
  const [email, setEmail] = useState<string>('rouletnorm@gmail.com');
  const [phone, setPhone] = useState<string>('(505) 555-0100');
  const [zkVerificationStatus, setZkVerificationStatus] = useState<string>('User #1 Sovereign Founder Key (0x00000001-NORM-ROULET)');
  const [showZkKeyModal, setShowZkKeyModal] = useState<boolean>(false);

  // SOVEREIGN MEMBER VAULT SECTIONS (PROPERTIES, HEALTH, MEDIA & IP, COMPACT)
  const [memberProperties, setMemberProperties] = useState([
    {
      id: 'PROP-001',
      name: 'Taos Kush Institute Agricultural Property (User #1 Founder Holding)',
      location: '260 New Mexico 150, El Prado, NM 87529 (Upper Rio Grande Watershed)',
      acres: '3.6 Acres Agricultural Property',
      waterRights: '3 Acequia Surface Water Rights (Acequia Madre / Rio Pueblo System)',
      cropType: 'High-CBD/CBG Cannabinoids & Phytoremediation Industrial Hemp',
      soilLeadPpm: 18,
      status: 'NM State License #NM-AG-2026-TKI-001 (Active)'
    },
    {
      id: 'PROP-002',
      name: 'Spectrum Telecom & Wireless Infrastructure Site',
      location: 'Taos Mesa, NM 87571 (Upper Rio Grande Watershed)',
      acres: '2.0 Acres',
      waterRights: 'Solar Powered Off-Grid Wireless Hub',
      cropType: 'Environmental Monitoring & Decentralized Node Infrastructure',
      soilLeadPpm: 12,
      status: 'Active Telecom Node'
    }
  ]);

  const [memberHealthLogs, setMemberHealthLogs] = useState([
    { id: 'HLTH-001', date: '2026-06-15', metric: 'Capillary Blood Lead Level (BLL)', value: '0.8 µg/dL', status: 'Pristine (Low Risk)', provider: 'Taos Health Clinic ZK-Lab' },
    { id: 'HLTH-002', date: '2026-05-20', metric: 'Tap Water PFAS & Heavy Metal Screen', value: 'Non-Detect (< 1.0 ppt)', status: 'Optimal Alpine Water', provider: 'NM Environmental Lab' },
    { id: 'HLTH-003', date: '2026-03-10', metric: 'Soil Bio-Accumulation Heavy Metal Panel', value: '18 ppm Lead, 0.2 ppm Cadmium', status: 'Safe Organic Soil', provider: 'UCANX Soil Test Station' }
  ]);

  const [memberMediaIp, setMemberMediaIp] = useState([
    {
      id: 'IP-000P',
      title: 'Wildfire Pyrogenic Heavy Metal Plume & Urban-WUI Aerosol Fallout Forensic Plate (Plate #09)',
      type: 'Atmospheric Aerosol & Urban Conflagration Exposenomics Model',
      imageSrc: wildfireInfographicImg,
      link: 'wildfire_pyro',
      description: 'Landmark forensic exposenomics plate modeling atmospheric transport of lead (Pb), chromium, copper, and asbestos fibers from 900+ incinerated homes into undamaged suburban properties, nursery window sills, and elementary school playground soils.',
      sovereignHash: '0xWILDFIRE_PYRO_EXPOSENOMICS_SOVEREIGN_IP_2026'
    },
    {
      id: 'IP-000N',
      title: 'Denisovan EPAS1 Haplotype, Tibetan Altitude Hypoxia & Heavy Metal Archaic Introgression Forensic Plate (Plate #08)',
      type: 'Evolutionary Exposenomics & Archaic Reticulate Introgression Asset',
      imageSrc: denisovanInfographicImg,
      link: 'denisovan_epas1',
      description: 'Landmark evolutionary exposenomics plate establishing that cross-breeding with archaic hominins (Denisovans & Neanderthals) provided pre-adapted genetic survival toolkits (EPAS1 hypoxia blunting at 86% in Tibetans). Cross-examined with deep-time heavy metal (lead/Pb) selective pressures that shaped modern human physiological diversity.',
      sovereignHash: '0xDENISOVAN_EPAS1_ALTITUDE_LEAD_SOVEREIGN_IP_2026'
    },
    {
      id: 'IP-000M',
      title: 'Suriname Lead Isotope Analysis in Dried Blood Spots & Dual Exposure Source Forensic Plate (Plate #07)',
      type: 'Forensic Isotope Biomonitoring & Environmental Matrix Model',
      imageSrc: surinameIsotopeImg,
      link: 'suriname_isotope',
      description: 'Breakthrough biomonitoring paradigm using capillary Dried Blood Spots (DBS) on filter paper with MC-ICP-MS lead stable isotope analysis (SIA). Fingerprints pediatric lead burdens in remote Amazonian rainforest settings directly to soil/dirt ingestion and lead shotgun hunting ammunition without cold-chain refrigeration.',
      sovereignHash: '0xSURINAME_LEAD_ISOTOPE_DBS_SOVEREIGN_IP_2026'
    },
    {
      id: 'IP-000L',
      title: 'New York Lead Safety Loopholes & Environmental Bill of Rights Sovereign Tort Audit (Plate #06)',
      type: 'Constitutional Tort & Regulatory Audit IP Asset',
      imageSrc: nyLeadLitigationImg,
      link: 'litigation',
      description: 'Sovereign legal audit of Earthjustice’s lawsuit against NY State DOH challenging 4 administrative loopholes gutting the Proactive Lead Inspection Law (PLIL) under Article 1 §19. Establishes state kakistocracy liability model ($450B NY damages) for nationwide community replication.',
      sovereignHash: '0xNY_DOH_LEAD_SAFETY_LOOPHOLES_KAKISTOCRACY_SOVEREIGN_IP_2026'
    },
    {
      id: 'IP-000',
      title: 'H. sapiens Evolutionary Canary & Nature 2026 Soil-to-Dust Tracking Study (Plate #01)',
      type: 'Peer-Reviewed Source Study & Evolutionary Model',
      imageSrc: natureSoilCanaryImg,
      link: 'evolutionary_canary',
      description: 'Landmark Nature 2026 publication (Stratton et al.) proving 80% of floor dust samples in paint-free homes exceed EPA safety limits due to exterior soil tracking. Integrated into Roulet\'s Law H. sapiens Evolutionary Canary Proof.',
      sovereignHash: '0xEVOLUTIONARY_CANARY_NATURE_2026_TRENTON_PROOF'
    },
    {
      id: 'IP-000B',
      title: 'Cleveland Industrial Canary in the Coal Mine (Mittal Steel Plumes & Heavy Metal Footprint - Plate #02)',
      type: 'Industrial Exposenomics Baseline Graphic',
      imageSrc: mittalCanaryLogoImg,
      link: 'evolutionary_canary',
      description: 'Historical industrial baseline image capturing Mittal Steel plumes over Cleveland, OH. Establishes the modern urban heavy metal footprint in Roulet\'s Law Canary Series.',
      sovereignHash: '0xCLEVELAND_MITTAL_CANARY_SERIES_PLATE_02'
    },
    {
      id: 'IP-000C',
      title: 'Pica Disorder, Maternal Geophagy & Sweet Lead Paint Chips Model (Plate #03)',
      type: 'Global Exposenomics & Maternal Toxicology Model',
      imageSrc: picaGeophagyImg,
      link: 'pica_exposenomics',
      description: 'Co-created visual infographic analyzing Pica disorder, gestational iron deficiency anemia, cultural geophagy, and sweet lead paint chips (100,000 ppm Pb) as primary drivers of global lead poisoning in 800 million children.',
      sovereignHash: '0xPICA_GEOPHAGY_GESTATIONAL_ANEMIA_LEAD_2026'
    },
    {
      id: 'IP-000D',
      title: 'Graphical Storybook Edition: The Story of Earth\'s Soil & Human Brains',
      type: 'Public Health & Early Learner Educational Media',
      imageSrc: natureSoilCanaryImg,
      link: 'storybook',
      description: 'Standalone educational storybook platform for early learners and families, converting peer-reviewed exposenomics into accessible visual narratives.',
      sovereignHash: '0xICEARTH_GRAPHICAL_STORYBOOK_IP_2026'
    },
    {
      id: 'IP-000E',
      title: 'Animated Documentary Stage: The Hominin Exposome (1,000,000 Years)',
      type: 'Cinematic Animated Film & Video Production Stage',
      imageSrc: picaGeophagyImg,
      link: 'documentary',
      description: 'Interactive documentary presentation stage tracing 1,000,000 years of hominin lead exposure from cave hearths to industrial steel and Pica disorder.',
      sovereignHash: '0xICEARTH_ANIMATED_DOCUMENTARY_STAGE_IP_2026'
    },
    {
      id: 'IP-000F',
      title: 'Medical Interventions Engine: Probiotic Lead Trapping, Chelation & DMT1 Nutrition',
      type: 'Synthetic Biology & Medical Interventions Model',
      imageSrc: probioticGraphicImg,
      link: 'medical_interventions',
      description: 'Interactive medical diagram & research engine analyzing Dr. Natalie Farny (WPI) & NIH Award R21ES038018 probiotic E. coli Nissle lead-aptamer trapping alongside chelation and DMT1 competitive nutrition.',
      sovereignHash: '0xWPI_NIH_PROBIOTIC_LEAD_INTERVENTION_2026'
    },
    {
      id: 'IP-000G',
      title: 'Flint Lead-Crime Continuum & Roulet’s Law Scatterplot IP Asset',
      type: 'Exposenomics Infographic & Legal Proof',
      imageSrc: flintLeadCrimeProofImg,
      link: 'flint',
      description: 'Sovereign mathematical proof of Roulet’s Law connecting 50+ years of cumulative lead poisoning (1970s leaded gasoline through water crisis) to prefrontal neurotoxicity, special education, violent crimes/homicides, neighborhood demolitions, and municipal economic collapse.',
      sovereignHash: '0xFLINT_LEAD_CRIME_ROULETS_LAW_IP_2026'
    },
    {
      id: 'IP-000J',
      title: 'Omaha Superfund Lead Remediation Breakdown & Metallurgy Smelting Proof IP Asset',
      type: 'Exposenomics Forensic Audit & Superfund Proof',
      imageSrc: omahaSuperfundImg,
      link: 'evolutionary_canary',
      description: 'Forensic exposenomics audit of $273M EPA Superfund remediation breakdown across 14,000 Omaha yards. Documents 200,000 tons of ASARCO lead dust, the arbitrary 400 ppm boundary flaw, windblown cross-yard recontamination, and Roulet\'s Law: "On paper, everything’s wonderful, but at the sites, there’s still chaos."',
      sovereignHash: '0xOMAHA_SUPERFUND_LEAD_SOIL_REMEDIATION_FAILURE_2026'
    },
    {
      id: 'IP-000H',
      title: 'The Global Lead-Crime Hypothesis Proof & 8,000-Year Anthropogenic Timeline Masterwork',
      type: 'Global Historical Exposenomics & Sovereign Proof Masterwork',
      imageSrc: globalLeadCrimeProofImg,
      link: 'global_lead_crime_proof',
      description: 'Comprehensive global synthesis proving the Lead-Crime Hypothesis from 6000 BCE Anatolia to modern day. Tracing how industrial heavy metals determine prefrontal destruction, global inequality, Flynn effect reversal, and planetary conflict under Roulet’s Law.',
      sovereignHash: '0xGLOBAL_LEAD_CRIME_PROOF_8000YR_TIMELINE_IP_2026'
    },
    {
      id: 'IP-000I',
      title: 'Roulet’s Law of Global Chaos & Anthropogenic Lead Relativity Dynamic Equation Model',
      type: 'Mathematical Proof & Dynamic Chaos Simulation Engine',
      imageSrc: rouletsLawGlobalChaosImg,
      link: 'global_lead_crime_proof',
      description: 'Dynamic equation model visualizing Perturbation (1st Order Pb) × Uncertainty (Climate/Economic) = Chaos (Conflict/Violence) × Relativity (1/3+ of humanity with Pb neurotoxicity).',
      sovereignHash: '0xROULETS_LAW_GLOBAL_CHAOS_DYNAMIC_EQUATION_IP_2026'
    },
    {
      id: 'IP-001',
      title: 'Co-Founder Agua Das at Hemp-I-Scream Booth (Case Alumnus Photo)',
      type: 'Historical Photography',
      imageSrc: caseAlumnusHeaderImg,
      link: 'https://taoskushinstitute.com/sites/default/files/inline-images/CaseAlumnusHeader.JPG',
      description: 'Original photograph of Agua Das promoting non-dairy high-EFA hemp ice cream at 2010 exhibition booth.',
      sovereignHash: '0xAGUA_DAS_CASE_ALUMNUS_2010'
    },
    {
      id: 'IP-002',
      title: 'ICEarth Now Launching - DNA Helix & Sovereign Earth Emblem',
      type: 'Founding Charter Graphic',
      imageSrc: launching1Img,
      link: 'https://taoski.com/sites/default/files/inline-images/Launching1.png',
      description: 'Original 1996 ICEarth launch slide 1 featuring Earth bound by orbital data rings adjacent to human DNA.',
      sovereignHash: '0xICEARTH_LAUNCHING_SLIDE_01'
    },
    {
      id: 'IP-003',
      title: 'Roulet\'s Law: Lead-Crime Correlation Proof Scatterplot',
      type: 'Research Dataset & Scatterplot',
      imageSrc: scatterplotImg,
      link: '#proofs',
      description: 'Comprehensive scatterplot proving blood lead levels vs violent crime rate drops following gasoline lead ban.',
      sovereignHash: '0xROULETS_LAW_PROOF_SCATTERPLOT'
    },
    {
      id: 'IP-004',
      title: 'NanoSpire NanoCanX 20 Years Cavitation & PFAS Destruction Roadmap',
      type: 'Patent & Technical Roadmap',
      imageSrc: nanoSpire20YearsImg,
      link: '#nanospire_nanocanx',
      description: 'Two decades of nanoscale cavitation research, sub-50nm high-shear processing, and zero-chemical destruction of toxic PFAS/PFOS compounds.',
      sovereignHash: '0xNANOSPIRE_20_YEARS_CAVITATION'
    },
    {
      id: 'IP-005',
      title: 'Swiss School of Exposenomics Repository & Roulet Law Vault',
      type: 'Organization of Thought & Research Vault',
      imageSrc: nanoSpire20YearsImg,
      link: '#swiss_school',
      description: 'User #1 Personal Vault repository housing the Genome x Biome x Exposome Human Equation, Swiss Neuchâtel ancestry stewardship, and data rights publishing.',
      sovereignHash: '0xSWISS_EXPOSENOMICS_ORGANIZATION_OF_THOUGHT'
    }
  ]);

  // LIFETIME EXPOSOME PROFILER STATE
  const [addressQuery, setAddressQuery] = useState<string>('Taos, New Mexico 87571');
  const [analyzedLocation, setAnalyzedLocation] = useState<string>('Taos, NM (Taos Kush Institute High-Altitude Farm)');
  const [isAnalyzingAddress, setIsAnalyzingAddress] = useState<boolean>(false);

  // Environmental Metrics for currently analyzed location
  const [envData, setEnvData] = useState({
    soilLeadPpm: 18,
    waterLeadPpb: 0.8,
    airAqi: 12,
    pm25: 2.1,
    miningProximityKm: 35.0,
    pfasRisk: 'Pristine Alpine Spring (Non-Detect)',
    overallExposomeRiskScore: 12
  });

  // Lifetime History Elements
  const [historicalAddresses, setHistoricalAddresses] = useState<HistoricalAddress[]>([
    { id: '1', location: 'Taos, NM (Upper Rio Grande Basin)', years: '2010 - Present', leadRisk: 'Low', notes: 'Pristine mountain spring water & organic soil' },
    { id: '2', location: 'Dulce, NM (Jicarilla Reservation)', years: '2012 - 2020', leadRisk: 'Moderate', notes: 'Well water source, historical mining catchment' },
    { id: '3', location: 'Cleveland, OH (Cuyahoga Industrial Corridor)', years: '1990 - 2010', leadRisk: 'High', notes: 'Pre-1978 infrastructure & urban industrial soil' }
  ]);

  const [occupationalHazards, setOccupationalHazards] = useState<OccupationalHazard[]>([
    { id: '1', title: 'Heavy Equipment & Mining Reclamation', category: 'Mining', yearsActive: 8, exposureIntensity: 'Moderate' },
    { id: '2', title: 'Wildland Firefighting & Dust Inhalation', category: 'Firefighting', yearsActive: 5, exposureIntensity: 'Severe' }
  ]);

  // Lifestyle Exposures
  const [huntingLeadAmmo, setHuntingLeadAmmo] = useState<boolean>(false);
  const [gameConsumptionFreq, setGameConsumptionFreq] = useState<number>(0); // times/week
  const [traditionalPotteryUse, setTraditionalPotteryUse] = useState<boolean>(false);
  const [pipeWaterSource, setPipeWaterSource] = useState<'well' | 'tribal_municipal' | 'bottled'>('well');
  const [smokingStatus, setSmokingStatus] = useState<boolean>(false);

  // New History Item Inputs
  const [newAddrLoc, setNewAddrLoc] = useState<string>('');
  const [newAddrYears, setNewAddrYears] = useState<string>('');
  const [newOccTitle, setNewOccTitle] = useState<string>('');
  const [newOccCat, setNewOccCat] = useState<'Mining' | 'Construction' | 'Firefighting' | 'Agriculture' | 'Military' | 'Manufacturing' | 'Other'>('Mining');
  const [newOccYears, setNewOccYears] = useState<number>(3);

  // TRIBAL & GOVERNMENT OFFICIAL DASHBOARD STATE
  const [selectedGovDept, setSelectedGovDept] = useState<'health' | 'water' | 'environmental' | 'police'>('health');
  const [leadPipeReplacedCount, setLeadPipeReplacedCount] = useState<number>(342);
  const [totalLeadPipesCount, setTotalLeadPipesCount] = useState<number>(580);
  const [testKitsDistributed, setTestKitsDistributed] = useState<number>(1250);
  const [communityBllAverage, setCommunityBllAverage] = useState<number>(2.4); // ug/dL
  const [showAddCitizenReportModal, setShowAddCitizenReportModal] = useState<boolean>(false);
  
  // Citizen Reports Logged
  const [citizenLogs, setCitizenLogs] = useState([
    { id: 'LOG-101', date: '2026-08-05', residency: 'Dulce Sector 3', type: 'Home Tap Water Test', leadResult: '18.2 ppb (ELEVATED)', status: 'Remediation Kit Issued', zkpProof: '0x7A91...BC02' },
    { id: 'LOG-102', date: '2026-08-02', residency: 'Dulce Sector 1', type: 'Pediatric Blood Screening', leadResult: '3.1 ug/dL (MONITOR)', status: 'Filtered Pitcher Provided', zkpProof: '0x3F88...DD91' },
    { id: 'LOG-103', date: '2026-07-28', residency: 'Jicarilla North Boundary', type: 'Soil Lead Sampling', leadResult: '240 ppm (MODERATE)', status: 'Soil Capping Approved', zkpProof: '0x9E12...AA44' }
  ]);

  // MEMBERSHIP TIER & FINANCIAL CHECKOUT STATE
  const [selectedTier, setSelectedTier] = useState<'free' | 'supporter' | 'tribal_grant' | 'municipal'>('free');
  const [donationAmount, setDonationAmount] = useState<number>(100);
  const [paymentSuccessModal, setPaymentSuccessModal] = useState<boolean>(false);

  // Pre-load preset for Norm Roulet (User #1 Founder)
  const handleLoadNormRouletUser1Preset = () => {
    setMemberName('Norm Roulet');
    setTribalAffiliation('ICEarth Founder & UCANX Co-Founder • Taos Kush Institute');
    setTribalRollId('ICEARTH-USER-00000001-FOUNDER');
    setNationalIdHash('US-FOUNDER-ZK-00000001');
    setCurrentAddress('Taos, New Mexico 87571 (Upper Rio Grande Watershed)');
    setEmail('rouletnorm@gmail.com');
    setPhone('(505) 555-0100');
    setZkVerificationStatus('User #1 Sovereign Founder Key (0x00000001-NORM-ROULET)');
    setAddressQuery('Taos, New Mexico 87571');
    setAnalyzedLocation('Taos, NM (Taos Kush Institute High-Altitude Farm)');
    setEnvData({
      soilLeadPpm: 18,
      waterLeadPpb: 0.8,
      airAqi: 12,
      pm25: 2.1,
      miningProximityKm: 35.0,
      pfasRisk: 'Pristine Alpine Spring (Non-Detect)',
      overallExposomeRiskScore: 12
    });
    setHuntingLeadAmmo(false);
    setGameConsumptionFreq(0);
    setTraditionalPotteryUse(false);
    setPipeWaterSource('well');
    setAuthRole('individual');
    setActivePortalSubTab('sovereign_vault');
  };

  // Pre-load preset for Ouray Muskrat
  const handleLoadOurayMuskratPreset = () => {
    setMemberName('Ouray Muskrat');
    setTribalAffiliation('Jicarilla Apache Nation');
    setTribalRollId('JAN-77492-ZKP');
    setCurrentAddress('Dulce, New Mexico 87528 (Jicarilla Reservation)');
    setEmail('ouray.muskrat@jicarilla-sovereign.org');
    setAddressQuery('Dulce, New Mexico 87528');
    setAnalyzedLocation('Dulce, NM (Jicarilla Apache Nation)');
    setEnvData({
      soilLeadPpm: 185,
      waterLeadPpb: 12.4,
      airAqi: 28,
      pm25: 6.8,
      miningProximityKm: 14.2,
      pfasRisk: 'Moderate (Rio Arriba Catchment)',
      overallExposomeRiskScore: 68
    });
    setHuntingLeadAmmo(true);
    setGameConsumptionFreq(3);
    setTraditionalPotteryUse(true);
    setPipeWaterSource('well');
    setAuthRole('individual');
    setActivePortalSubTab('exposome_profiler');
  };

  // Export JSON Sovereign Data Package
  const handleExportSovereignDataPackage = () => {
    const dataPackage = {
      icearthVersion: '2026.1.0',
      sovereignMember: {
        userId: 'USER-00000001',
        name: memberName,
        affiliation: tribalAffiliation,
        rollId: tribalRollId,
        address: currentAddress,
        email: email,
        zkpVerificationStatus: zkVerificationStatus,
        exportTimestamp: new Date().toISOString()
      },
      dataSovereigntyCompact: {
        ownership: '100% Exclusively Owned by Sovereign Member',
        commercializationRights: 'None - Zero Third-Party Monetization',
        privacyStandard: 'Zero-Knowledge Cryptographic Storage'
      },
      properties: memberProperties,
      healthAndExposomeLogs: memberHealthLogs,
      intellectualPropertyVault: memberMediaIp.map(item => ({
        id: item.id,
        title: item.title,
        type: item.type,
        link: item.link,
        sovereignHash: item.sovereignHash
      }))
    };

    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(dataPackage, null, 2)
    )}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', `ICEarth_Sovereign_Vault_${memberName.replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleAnalyzeAddress = () => {
    setIsAnalyzingAddress(true);
    setTimeout(() => {
      setIsAnalyzingAddress(false);
      if (addressQuery.toLowerCase().includes('dulce')) {
        setAnalyzedLocation('Dulce, NM (Jicarilla Apache Nation)');
        setEnvData({
          soilLeadPpm: 185,
          waterLeadPpb: 12.4,
          airAqi: 28,
          pm25: 6.8,
          miningProximityKm: 14.2,
          pfasRisk: 'Moderate (Rio Arriba Catchment)',
          overallExposomeRiskScore: 68
        });
      } else if (addressQuery.toLowerCase().includes('chicago')) {
        setAnalyzedLocation('Chicago, IL (Cook County)');
        setEnvData({
          soilLeadPpm: 420,
          waterLeadPpb: 24.8,
          airAqi: 54,
          pm25: 14.2,
          miningProximityKm: 45.0,
          pfasRisk: 'High (Lake Michigan Industrial)',
          overallExposomeRiskScore: 84
        });
      } else if (addressQuery.toLowerCase().includes('cleveland')) {
        setAnalyzedLocation('Cleveland, OH (Cuyahoga County)');
        setEnvData({
          soilLeadPpm: 510,
          waterLeadPpb: 28.1,
          airAqi: 62,
          pm25: 16.5,
          miningProximityKm: 60.0,
          pfasRisk: 'Severe (Legacy Industrial Corridor)',
          overallExposomeRiskScore: 89
        });
      } else {
        setAnalyzedLocation(addressQuery);
        setEnvData({
          soilLeadPpm: 120,
          waterLeadPpb: 8.5,
          airAqi: 35,
          pm25: 8.1,
          miningProximityKm: 25.0,
          pfasRisk: 'Low-Moderate',
          overallExposomeRiskScore: 45
        });
      }
    }, 600);
  };

  // Add address to history
  const handleAddHistoricalAddress = () => {
    if (!newAddrLoc) return;
    const newEntry: HistoricalAddress = {
      id: Date.now().toString(),
      location: newAddrLoc,
      years: newAddrYears || 'Past Residence',
      leadRisk: 'Moderate',
      notes: 'User self-reported historical exposure location'
    };
    setHistoricalAddresses([...historicalAddresses, newEntry]);
    setNewAddrLoc('');
    setNewAddrYears('');
  };

  // Add occupation
  const handleAddOccupationalHazard = () => {
    if (!newOccTitle) return;
    const newEntry: OccupationalHazard = {
      id: Date.now().toString(),
      title: newOccTitle,
      category: newOccCat,
      yearsActive: newOccYears,
      exposureIntensity: 'Moderate'
    };
    setOccupationalHazards([...occupationalHazards, newEntry]);
    setNewOccTitle('');
  };

  // Trajectory Chart Data
  const bllTrajectoryData = [
    { age: 'Birth', bll: 1.2, baseline: 0.016, safeThreshold: 3.5 },
    { age: '5 yrs', bll: 4.8, baseline: 0.016, safeThreshold: 3.5 },
    { age: '12 yrs', bll: 3.9, baseline: 0.016, safeThreshold: 3.5 },
    { age: '20 yrs', bll: 6.2, baseline: 0.016, safeThreshold: 3.5 },
    { age: '30 yrs', bll: 5.4, baseline: 0.016, safeThreshold: 3.5 },
    { age: 'Current', bll: 4.1, baseline: 0.016, safeThreshold: 3.5 },
    { age: 'Target (Post-Filter)', bll: 0.8, baseline: 0.016, safeThreshold: 3.5 },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* TOP NAVIGATION BAR TO ICEARTH LAUNCH HOME PAGE */}
      <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-amber-950 dark:text-amber-200 shadow-md">
        <div className="flex items-center gap-2.5">
          <Globe size={18} className="text-amber-600 dark:text-amber-400 animate-pulse shrink-0" />
          <div>
            <span className="font-bold uppercase tracking-wider block text-amber-800 dark:text-amber-300">
              Sovereign Directory Navigation:
            </span>
            <span>You are viewing the <strong>ICEarth Sovereign Member & Exposome Portal</strong>.</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onNavigateTab && (
            <button
              id="btn-nav-evolutionary-canary"
              onClick={() => onNavigateTab('evolutionary_canary')}
              className="px-4 py-2.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-900 dark:text-amber-200 font-extrabold text-xs rounded-xl shadow border border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
            >
              <Dna size={16} className="text-amber-600 dark:text-amber-400" />
              <span>🐤 H. sapiens Canary (Nature 2026)</span>
            </button>
          )}
          {onNavigateTab && (
            <button
              id="btn-return-icearth-home"
              onClick={() => onNavigateTab('norm_roulet_home')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs rounded-xl shadow-lg border border-amber-300 transition-all flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105"
            >
              <Globe size={16} className="text-stone-950" />
              <span>🏠 ICEarth Launch Home Page</span>
            </button>
          )}
        </div>
      </div>

      {/* TOP SOVEREIGN HEADER & DEMO PRESET SWITCHER */}
      <div className="bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-amber-800/40 relative overflow-hidden">
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Sovereign Identity Protocol
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                Zero-Knowledge Verified
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-stone-100 font-serif">
              ICEarth Sovereign Member & Exposome Portal
            </h1>
            <p className="text-stone-300 text-sm sm:text-base max-w-3xl">
              Authentic human verification, sovereign tribal identity custody, address-based exposome profiling, and departmental governance tools for Indigenous Nations & Municipalities.
            </p>
          </div>

          {/* Quick Demo Preset Trigger */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-stone-950/70 p-4 rounded-xl border border-amber-700/40 shrink-0">
            <div className="text-left space-y-0.5">
              <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase">Active Sovereign Member</div>
              <div className="text-sm font-bold text-white flex items-center gap-1.5">
                <User className="w-4 h-4 text-amber-400" />
                {memberName} ({tribalAffiliation})
              </div>
              <div className="text-xs text-stone-400">{currentAddress}</div>
            </div>
            
            <button
              id="btn-load-ouray-preset"
              onClick={handleLoadOurayMuskratPreset}
              className="px-3.5 py-2 text-xs font-bold bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-lg shadow transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Load Ouray Muskrat Demo
            </button>
          </div>
        </div>

        {/* FEATURED FOUNDING BANNER: ICEARTH NOW LAUNCHING */}
        <div className="mt-6 bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/60 rounded-2xl border border-amber-500/30 p-5 sm:p-6 shadow-xl space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold uppercase rounded">
                Founding Emblem & Charter
              </span>
              <span className="text-xs text-stone-400 font-mono">Internet Community Earth Matrix</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://taoski.com/sites/default/files/inline-images/Launching1.png"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 px-2.5 py-1 rounded flex items-center gap-1 transition-colors"
              >
                <span>View Launching1.png Original</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://taoski.com/ICESaturn"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-mono bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold px-3 py-1 rounded flex items-center gap-1 transition-colors"
              >
                <span>ICESaturn Presentation</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7 bg-stone-950 rounded-xl p-3 border border-amber-500/30 shadow-2xl group relative overflow-hidden">
              <div className="w-full aspect-[16/9] bg-white rounded-lg border border-stone-300 p-3 flex items-center justify-center overflow-hidden">
                <img
                  src={launching1Img}
                  alt="ICEarth Now Launching - DNA Double Helix and Earth Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-102"
                />
              </div>
              <div className="mt-2.5 flex items-center justify-between px-1 text-[10px] font-mono text-stone-400">
                <span className="text-amber-300 font-semibold">🧬 DNA Matrix + Sovereign Earth Rings</span>
                <span>ICEarth Launching #1</span>
              </div>
            </div>

            <div className="md:col-span-5 space-y-3">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-amber-400 tracking-wider uppercase font-bold block">
                  Sovereign Architecture Axiom
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-100">
                  ICEarth now launching...
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Framed by the human double helix and the orbital planetary emblem, the original ICEarth launch charter unifies individual biological sovereignty, toxic exposome protection, and open community trade.
              </p>

              <div className="p-3 bg-stone-950/80 border border-amber-500/20 rounded-xl space-y-1.5 text-xs text-stone-200">
                <div className="font-bold text-amber-300 font-mono text-[11px]">
                  🏛️ Founding Principles:
                </div>
                <ul className="text-[11px] text-stone-300 space-y-1 list-disc list-inside">
                  <li><strong>Human Custody:</strong> Direct data ownership and ZK-verified identity without central surveillance.</li>
                  <li><strong>Exposome Defense:</strong> Address-level monitoring of soil lead, heavy metals, and pipe toxicity.</li>
                  <li><strong>UCANX Open Exchange:</strong> Phytoremediation commodities and sovereign resource trading.</li>
                </ul>
              </div>

              {onNavigateTab && (
                <div className="pt-1 flex items-center gap-2">
                  <button
                    onClick={() => onNavigateTab('ucanx')}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Explore UCANX Exchange</span>
                    <ArrowUpRight size={13} />
                  </button>
                  <button
                    onClick={() => onNavigateTab('manuscript')}
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-bold text-xs rounded-lg transition-colors"
                  >
                    ICEarth Owners' Manual
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Portal Navigation Tabs */}
        <div className="mt-8 border-t border-stone-800 pt-4 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 w-full md:w-auto">
            <button
              id="subtab-sovereign-vault"
              onClick={() => setActivePortalSubTab('sovereign_vault')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePortalSubTab === 'sovereign_vault'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <HardDrive className="w-4 h-4 text-amber-950" />
              Sovereign Member Vault (User #1)
            </button>

            <button
              id="subtab-onboarding"
              onClick={() => setActivePortalSubTab('onboarding')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePortalSubTab === 'onboarding'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              Join ICEarth & Onboarding
            </button>

            <button
              id="subtab-exposome-profiler"
              onClick={() => setActivePortalSubTab('exposome_profiler')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePortalSubTab === 'exposome_profiler'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              Individual Exposome Profiler
            </button>

            <button
              id="subtab-onboarding"
              onClick={() => setActivePortalSubTab('onboarding')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePortalSubTab === 'onboarding'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              Member Onboarding & Identity
            </button>

            <button
              id="subtab-tribal-gov"
              onClick={() => setActivePortalSubTab('tribal_gov')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePortalSubTab === 'tribal_gov'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              Tribal & Gov Operations Hub
            </button>

            <button
              id="subtab-membership-pricing"
              onClick={() => setActivePortalSubTab('membership_pricing')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activePortalSubTab === 'membership_pricing'
                  ? 'bg-amber-500 text-stone-950 shadow-md'
                  : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-white'
              }`}
            >
              <Coins className="w-4 h-4" />
              Membership Tiers & Grants
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-amber-300/80">
            <Lock className="w-3.5 h-3.5" />
            256-bit ZK-Encrypted Vault
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SUBTAB 1: DYNAMIC INDIVIDUAL EXPOSOME PROFILER (OURAY MUSKRAT / GLOBAL)   */}
      {/* ========================================================================= */}
      {activePortalSubTab === 'exposome_profiler' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* ADDRESS SEARCH & QUICK PRESETS BAR */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-500" />
                  Address-Based Environmental Exposome Profiler
                </h2>
                <p className="text-stone-400 text-xs sm:text-sm">
                  Enter any address or reservation community to query EPA monitors, geological background, soil heavy metals, and lead water pipes.
                </p>
              </div>

              {/* Sample Location Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                <span className="text-xs text-stone-500 font-medium whitespace-nowrap">Presets:</span>
                <button
                  onClick={() => { setAddressQuery('Dulce, New Mexico 87528'); handleAnalyzeAddress(); }}
                  className="px-2.5 py-1 text-xs bg-amber-950/60 border border-amber-800/60 text-amber-300 rounded-lg hover:bg-amber-900/60 transition-all whitespace-nowrap"
                >
                  Dulce, NM (Jicarilla)
                </button>
                <button
                  onClick={() => { setAddressQuery('Chicago, IL 60623'); handleAnalyzeAddress(); }}
                  className="px-2.5 py-1 text-xs bg-stone-800 border border-stone-700 text-stone-300 rounded-lg hover:bg-stone-700 transition-all whitespace-nowrap"
                >
                  Chicago, IL
                </button>
                <button
                  onClick={() => { setAddressQuery('Cleveland, OH 44105'); handleAnalyzeAddress(); }}
                  className="px-2.5 py-1 text-xs bg-stone-800 border border-stone-700 text-stone-300 rounded-lg hover:bg-stone-700 transition-all whitespace-nowrap"
                >
                  Cleveland, OH
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 text-stone-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  value={addressQuery}
                  onChange={(e) => setAddressQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAnalyzeAddress()}
                  placeholder="Enter street, city, ZIP, or sovereign land (e.g. Dulce, New Mexico 87528)..."
                  className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <button
                id="btn-analyze-address"
                onClick={handleAnalyzeAddress}
                disabled={isAnalyzingAddress}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isAnalyzingAddress ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Querying EPA & Satellite...
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4" />
                    Compile Exposome
                  </>
                )}
              </button>
            </div>
          </div>

          {/* EXPOSOME DASHBOARD METRICS FOR ANALYZED ADDRESS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Soil Lead */}
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
                <span>Soil Lead (Pb)</span>
                <span className="text-amber-400 font-bold">Target &lt; 50 ppm</span>
              </div>
              <div className="text-2xl font-black text-stone-100">
                {envData.soilLeadPpm} <span className="text-sm font-normal text-stone-400">ppm</span>
              </div>
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${envData.soilLeadPpm > 300 ? 'bg-red-500' : envData.soilLeadPpm > 150 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                  style={{ width: `${Math.min(100, (envData.soilLeadPpm / 500) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-stone-400">
                {analyzedLocation.includes('Dulce') ? 'Dulce rural soil baseline with localized tailings influence.' : 'Urban soil deposit with legacy paint residues.'}
              </p>
            </div>

            {/* Tap Water Lead */}
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
                <span>Water Lead Concentration</span>
                <span className="text-amber-400 font-bold">EPA Limit 15 ppb</span>
              </div>
              <div className="text-2xl font-black text-stone-100">
                {envData.waterLeadPpb} <span className="text-sm font-normal text-stone-400">ppb</span>
              </div>
              <div className="w-full bg-stone-800 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${envData.waterLeadPpb > 15 ? 'bg-red-500' : envData.waterLeadPpb > 10 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                  style={{ width: `${Math.min(100, (envData.waterLeadPpb / 30) * 100)}%` }}
                />
              </div>
              <p className="text-xs text-stone-400">
                {pipeWaterSource === 'well' ? 'Well source: Periodic leaching from fittings.' : 'Municipal service line mapping active.'}
              </p>
            </div>

            {/* EPA Air & PM2.5 */}
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
                <span>Air Quality Index (AQI)</span>
                <span className="text-emerald-400 font-bold">Good Quality</span>
              </div>
              <div className="text-2xl font-black text-stone-100">
                {envData.airAqi} <span className="text-sm font-normal text-stone-400">AQI</span>
              </div>
              <div className="text-xs text-stone-300 font-medium">
                PM2.5: {envData.pm25} µg/m³
              </div>
              <p className="text-xs text-stone-400">
                Continuous EPA air monitor telemetry active.
              </p>
            </div>

            {/* Mining Proximity */}
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-2">
              <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
                <span>Mining / Superfund Proximity</span>
                <span className="text-amber-400 font-bold">Active Zone</span>
              </div>
              <div className="text-2xl font-black text-stone-100">
                {envData.miningProximityKm} <span className="text-sm font-normal text-stone-400">km</span>
              </div>
              <div className="text-xs text-amber-300 font-medium truncate">
                PFAS: {envData.pfasRisk}
              </div>
              <p className="text-xs text-stone-400">
                Historical uranium & lead extraction catchment.
              </p>
            </div>
          </div>

          {/* MAIN PROFILER TWO-COLUMN SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: LIFETIME EXPOSOME BUILDER */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* HISTORICAL ADDRESS HISTORY */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-500" />
                      1. Historical Address Timeline
                    </h3>
                    <p className="text-xs text-stone-400">
                      Add previous places lived (childhood homes, military bases, previous cities) to calculate cumulative heavy-metal burden.
                    </p>
                  </div>
                </div>

                {/* List of Addresses */}
                <div className="space-y-3">
                  {historicalAddresses.map((addr) => (
                    <div key={addr.id} className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-bold text-stone-200 flex items-center gap-2">
                          {addr.location}
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${
                            addr.leadRisk === 'High' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          }`}>
                            {addr.leadRisk} Risk
                          </span>
                        </div>
                        <div className="text-xs text-stone-400">{addr.years} — {addr.notes}</div>
                      </div>
                      <button
                        onClick={() => setHistoricalAddresses(historicalAddresses.filter(a => a.id !== addr.id))}
                        className="text-stone-500 hover:text-red-400 p-1 transition-colors"
                        title="Remove address"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Address Form */}
                <div className="pt-2 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <input
                    type="text"
                    value={newAddrLoc}
                    onChange={(e) => setNewAddrLoc(e.target.value)}
                    placeholder="Location (e.g., Taos, NM)..."
                    className="sm:col-span-6 bg-stone-950 text-stone-100 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    value={newAddrYears}
                    onChange={(e) => setNewAddrYears(e.target.value)}
                    placeholder="Years (e.g. 1990 - 1998)..."
                    className="sm:col-span-4 bg-stone-950 text-stone-100 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={handleAddHistoricalAddress}
                    className="sm:col-span-2 px-3 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg text-xs flex items-center justify-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add
                  </button>
                </div>
              </div>

              {/* OCCUPATIONAL EXPOSURES */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-amber-500" />
                    2. Occupational & Field Hazards
                  </h3>
                  <p className="text-xs text-stone-400">
                    Mining, construction, firefighting, military ordnance, battery recycling, or pesticide exposure.
                  </p>
                </div>

                <div className="space-y-3">
                  {occupationalHazards.map((occ) => (
                    <div key={occ.id} className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-bold text-stone-200 flex items-center gap-2">
                          {occ.title}
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-stone-800 text-stone-300">
                            {occ.category}
                          </span>
                        </div>
                        <div className="text-xs text-stone-400">{occ.yearsActive} Years Active — Intensity: {occ.exposureIntensity}</div>
                      </div>
                      <button
                        onClick={() => setOccupationalHazards(occupationalHazards.filter(o => o.id !== occ.id))}
                        className="text-stone-500 hover:text-red-400 p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add Occupation */}
                <div className="pt-2 border-t border-stone-800 grid grid-cols-1 sm:grid-cols-12 gap-2">
                  <input
                    type="text"
                    value={newOccTitle}
                    onChange={(e) => setNewOccTitle(e.target.value)}
                    placeholder="Job Title / Activity..."
                    className="sm:col-span-5 bg-stone-950 text-stone-100 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  />
                  <select
                    value={newOccCat}
                    onChange={(e: any) => setNewOccCat(e.target.value)}
                    className="sm:col-span-4 bg-stone-950 text-stone-100 border border-stone-800 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-amber-500"
                  >
                    <option value="Mining">Mining</option>
                    <option value="Construction">Construction</option>
                    <option value="Firefighting">Firefighting</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Military">Military</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Other">Other</option>
                  </select>
                  <button
                    onClick={handleAddOccupationalHazard}
                    className="sm:col-span-3 px-3 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg text-xs flex items-center justify-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Hazard
                  </button>
                </div>
              </div>

              {/* LIFESTYLE & CULTURAL FACTORS */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-amber-500" />
                    3. Cultural & Lifestyle Ingestion Vectors
                  </h3>
                  <p className="text-xs text-stone-400">
                    Traditional hunting with lead shot, game consumption, pottery usage, well water, and dietary supplements.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Lead Ammunition Toggle */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-stone-200">Subsistence Hunting with Lead Shot</span>
                      <button
                        onClick={() => setHuntingLeadAmmo(!huntingLeadAmmo)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                          huntingLeadAmmo ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {huntingLeadAmmo ? 'ACTIVE' : 'INACTIVE'}
                      </button>
                    </div>
                    <p className="text-xs text-stone-400">
                      High-velocity lead ammunition shatters into microscopic nanoparticles in game tissue.
                    </p>
                  </div>

                  {/* Traditional Pottery */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-stone-200">Traditional Lead-Glazed Cookware</span>
                      <button
                        onClick={() => setTraditionalPotteryUse(!traditionalPotteryUse)}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                          traditionalPotteryUse ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-400'
                        }`}
                      >
                        {traditionalPotteryUse ? 'USED' : 'NONE'}
                      </button>
                    </div>
                    <p className="text-xs text-stone-400">
                      Low-fire glazed pottery (e.g. loza vidriada) leaches lead into acidic foods.
                    </p>
                  </div>

                  {/* Water Source */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <label className="text-sm font-semibold text-stone-200 block">Primary Drinking Water Source</label>
                    <select
                      value={pipeWaterSource}
                      onChange={(e: any) => setPipeWaterSource(e.target.value)}
                      className="w-full bg-stone-900 text-stone-200 border border-stone-700 rounded-lg p-2 text-xs focus:outline-none focus:border-amber-500"
                    >
                      <option value="well">Private / Tribal Well Water</option>
                      <option value="tribal_municipal">Tribal / Municipal Water Line</option>
                      <option value="bottled">Filtered / Bottled Water Only</option>
                    </select>
                  </div>

                  {/* Game Meat Consumption Frequency */}
                  <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-stone-200">Game Consumption</label>
                      <span className="text-xs font-bold text-amber-400">{gameConsumptionFreq} meals/week</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="7"
                      value={gameConsumptionFreq}
                      onChange={(e) => setGameConsumptionFreq(parseInt(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: AI EXPOSOME SUMMARY & BLL TRAJECTORY CHART */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* BLL TRAJECTORY CHART */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-amber-500" />
                    Estimated Lifetime Blood Lead (BLL) Trajectory
                  </h3>
                  <p className="text-xs text-stone-400">
                    Modeled trajectory comparing cumulative exposures vs CDC Action Threshold (3.5 µg/dL) and pre-industrial Homo Sapiens 0 baseline (0.016 µg/dL).
                  </p>
                </div>

                <div className="h-64 w-full pt-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={bllTrajectoryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="bllColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                      <XAxis dataKey="age" stroke="#a1a1aa" tick={{ fontSize: 11 }} />
                      <YAxis stroke="#a1a1aa" tick={{ fontSize: 11 }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '8px', fontSize: '12px', color: '#f4f4f5' }}
                        formatter={(val: any) => [`${val} µg/dL`, 'Concentration']}
                      />
                      <Area type="monotone" dataKey="bll" name="Estimated BLL" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#bllColor)" />
                      <Line type="monotone" dataKey="safeThreshold" name="CDC Reference Level (3.5 µg/dL)" stroke="#ef4444" strokeDasharray="4 4" strokeWidth={2} dot={false} />
                      <Line type="monotone" dataKey="baseline" name="Pre-Industrial Baseline (0.016 µg/dL)" stroke="#10b981" strokeDasharray="2 2" strokeWidth={2} dot={false} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex items-center justify-between text-xs border-t border-stone-800 pt-3 text-stone-400">
                  <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" /> Modeled BLL
                  </span>
                  <span className="flex items-center gap-1.5 text-red-400 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" /> CDC Reference (3.5 µg/dL)
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Pre-Industrial (0.016 µg/dL)
                  </span>
                </div>
              </div>

              {/* AI EXPOSENOMICS ACTION PLAN & SUMMARY */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-400" />
                    AI Exposenomics Summary & Action Plan
                  </h3>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    High Precision
                  </span>
                </div>

                <div className="bg-stone-950 p-4 rounded-xl border border-stone-800 space-y-3 text-xs text-stone-300 leading-relaxed">
                  <p>
                    <strong className="text-amber-400">Exposome Profile for {memberName} ({analyzedLocation}):</strong>
                  </p>
                  <p>
                    Your overall environmental exposome score is <strong className="text-amber-300">{envData.overallExposomeRiskScore}/100</strong>. Primary burden vectors stem from historical residency in Farmington industrial corridors, wildland firefighting particulate inhalation, and well water filtration gaps in Dulce.
                  </p>

                  <div className="border-t border-stone-800 pt-3 space-y-2">
                    <div className="font-bold text-stone-200">Recommended Action Steps:</div>
                    <ul className="space-y-1.5 text-stone-300 list-disc list-inside">
                      <li><strong>Copper/Non-Lead Ammo Transition:</strong> Switch subsistence hunting rounds to monolithic copper to eliminate lead fragment intake.</li>
                      <li><strong>Reverse Osmosis Filtration:</strong> Install point-of-use NSF-53 certified filter on household tap water.</li>
                      <li><strong>Annual Capillary BLL Screening:</strong> Schedule sovereign capillary blood test with Jicarilla Apache Health Center.</li>
                      <li><strong>Zero-Knowledge Vault Sync:</strong> Store test results in your encrypted sovereign ledger to maintain absolute privacy.</li>
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setShowZkKeyModal(true)}
                  className="w-full py-3 bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 font-bold rounded-xl border border-amber-500/40 transition-all flex items-center justify-center gap-2 text-xs"
                >
                  <Lock className="w-4 h-4" />
                  View Cryptographic ZK-Proof Certificate
                </button>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 1: SOVEREIGN MEMBER VAULT (USER #1 & GENERAL MEMBERSHIP)           */}
      {/* ========================================================================= */}
      {activePortalSubTab === 'sovereign_vault' && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* VAULT BANNER & PRESET SWITCHER */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase">
                    Member Vault #00000001
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Zero-Knowledge Private Ledger</span>
                </div>
                <h2 className="text-2xl font-bold text-stone-100 font-serif mt-1 flex items-center gap-2">
                  <HardDrive className="w-6 h-6 text-amber-500" />
                  Sovereign Personal Data Vault: {memberName}
                </h2>
                <p className="text-xs sm:text-sm text-stone-400 mt-1 max-w-3xl">
                  Your private, sovereign-held repository on ICEarth.org. Contains exact land & agricultural coordinates, private health and blood lead logs, and original intellectual property (photos, papers, research). 100% owned by you — never indexed, advertised against, or monetized by external third parties.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={handleLoadNormRouletUser1Preset}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
                >
                  <User className="w-4 h-4" />
                  <span>Load User #1 (Norm Roulet)</span>
                </button>
                <button
                  onClick={handleLoadOurayMuskratPreset}
                  className="px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5"
                >
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Load Ouray Muskrat Preset</span>
                </button>
                <button
                  onClick={handleExportSovereignDataPackage}
                  className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Vault JSON</span>
                </button>
              </div>
            </div>

            {/* QUICK STATS & BILL OF RIGHTS SUMMARY */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                <div className="text-[10px] uppercase font-mono text-stone-400">Sovereign Identity</div>
                <div className="text-sm font-bold text-amber-300 truncate">{memberName}</div>
                <div className="text-[10px] text-stone-500 font-mono truncate">{tribalRollId}</div>
              </div>
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                <div className="text-[10px] uppercase font-mono text-stone-400">Real Land Assets</div>
                <div className="text-sm font-bold text-stone-200">{memberProperties.length} Properties</div>
                <div className="text-[10px] text-emerald-400 font-mono">14.5 Total Acres</div>
              </div>
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                <div className="text-[10px] uppercase font-mono text-stone-400">Exposome Lab Logs</div>
                <div className="text-sm font-bold text-stone-200">{memberHealthLogs.length} Verified Records</div>
                <div className="text-[10px] text-amber-400 font-mono">BLL & PFAS Tested</div>
              </div>
              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800">
                <div className="text-[10px] uppercase font-mono text-stone-400">Sovereign IP Vault</div>
                <div className="text-sm font-bold text-stone-200">{memberMediaIp.length} Works & Archives</div>
                <div className="text-[10px] text-stone-400 font-mono">Photos, Datasets, Deck</div>
              </div>
            </div>
          </div>

          {/* MAIN GRID: PROPERTIES, HEALTH, AND MEDIA/IP */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* LEFT COLUMN (7 COLS): PROPERTIES & HEALTH LABS */}
            <div className="lg:col-span-7 space-y-6">

              {/* SECTION 1: LAND & PROPERTY ASSETS */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2 font-serif">
                      <MapPin className="w-5 h-5 text-amber-500" />
                      1. Real Land, Agricultural & Water Holdings
                    </h3>
                    <p className="text-xs text-stone-400">
                      Exact geographic coordinates, acreages, crops, and water rights stored exclusively in your sovereign vault.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newProp = {
                        id: `PROP-${Date.now()}`,
                        name: 'New Agricultural Parcel / Infrastructure Unit',
                        location: 'Upper Rio Grande Watershed, NM',
                        acres: '5.0 Acres',
                        waterRights: 'Acequia / Surface Well Water',
                        cropType: 'Phytoremediation Hemp / Crops',
                        soilLeadPpm: 15,
                        status: 'Registered Sovereign Asset'
                      };
                      setMemberProperties([...memberProperties, newProp]);
                    }}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg text-xs flex items-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Property
                  </button>
                </div>

                <div className="space-y-3">
                  {memberProperties.map((prop) => (
                    <div key={prop.id} className="bg-stone-950 p-4 rounded-xl border border-amber-500/20 space-y-2 relative group">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="px-2 py-0.5 bg-stone-800 text-amber-300 text-[10px] font-mono font-semibold rounded">
                            {prop.id} • {prop.acres}
                          </span>
                          <h4 className="text-sm font-bold text-stone-100 mt-1">{prop.name}</h4>
                          <p className="text-xs text-stone-400 flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 text-amber-500" /> {prop.location}
                          </p>
                        </div>
                        <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30">
                          {prop.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-stone-800 text-stone-300">
                        <div>
                          <span className="text-stone-500 text-[10px] block uppercase font-mono">Water Rights</span>
                          <span>{prop.waterRights}</span>
                        </div>
                        <div>
                          <span className="text-stone-500 text-[10px] block uppercase font-mono">Crops & Soil Lead</span>
                          <span className="text-amber-300">{prop.cropType} ({prop.soilLeadPpm} ppm Pb)</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2: PRIVATE HEALTH & EXPOSOME RECORDS */}
              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2 font-serif">
                      <Heart className="w-5 h-5 text-amber-500" />
                      2. Sovereign Health & Blood Lead ($Pb$) Vault
                    </h3>
                    <p className="text-xs text-stone-400">
                      Private medical screening data, capillary BLL levels, and environmental exposure lab logs.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      const newLog = {
                        id: `HLTH-${Date.now()}`,
                        date: new Date().toISOString().split('T')[0],
                        metric: 'Capillary Blood Lead Screening (BLL)',
                        value: '0.9 µg/dL',
                        status: 'Optimal / Verified',
                        provider: 'Sovereign Lab ZK-Standard'
                      };
                      setMemberHealthLogs([...memberHealthLogs, newLog]);
                    }}
                    className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-lg text-xs flex items-center gap-1 transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" /> Add Lab Record
                  </button>
                </div>

                <div className="space-y-3">
                  {memberHealthLogs.map((log) => (
                    <div key={log.id} className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 flex items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-stone-400 font-mono text-[10px]">{log.date}</span>
                          <span className="text-amber-400 font-bold">{log.metric}</span>
                        </div>
                        <div className="text-stone-300 font-mono mt-0.5">Result: <strong className="text-stone-100">{log.value}</strong> ({log.status})</div>
                        <div className="text-[10px] text-stone-500 mt-0.5">Lab Provider: {log.provider}</div>
                      </div>
                      <span className="px-2 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-mono rounded">
                        ZK-Encrypted
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN (5 COLS): ORIGINAL IP & MEDIA REPOSITORY (YOUTUBE / NAPSTER / FACEBOOK ALTERNATIVE) */}
            <div className="lg:col-span-5 space-y-6">

              <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2 font-serif">
                      <Image className="w-5 h-5 text-amber-500" />
                      3. Sovereign Media & IP Vault
                    </h3>
                    <span className="text-[10px] font-mono bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded">
                      Member Owned
                    </span>
                  </div>
                  <p className="text-xs text-stone-400 mt-1">
                    Your sovereign alternative to YouTube, Napster, and Facebook. Store original photography, articles, slide decks, and data.
                  </p>
                </div>

                <div className="space-y-4">
                  {memberMediaIp.map((item) => (
                    <div 
                      key={item.id} 
                      onClick={() => {
                        if (!item.link.startsWith('http') && onNavigateTab) {
                          onNavigateTab(item.link.replace('#', ''));
                        }
                      }}
                      className={`bg-stone-950 rounded-xl border border-stone-800 p-3 space-y-2.5 overflow-hidden group ${
                        !item.link.startsWith('http') ? 'cursor-pointer hover:border-amber-500/50 transition-colors' : ''
                      }`}
                    >
                      <div className="w-full aspect-video bg-stone-900 rounded-lg overflow-hidden border border-stone-800 relative">
                        <img
                          src={item.imageSrc}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-2 right-2 bg-stone-950/80 backdrop-blur-sm text-stone-200 text-[10px] font-mono px-2 py-0.5 rounded border border-stone-700">
                          {item.type}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-stone-100 group-hover:text-amber-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-[11px] text-stone-400 leading-snug">
                          {item.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-stone-800 text-[10px] font-mono text-stone-500">
                        <span className="truncate max-w-[180px]">{item.sovereignHash}</span>
                        {item.link.startsWith('http') ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span>Original Link</span>
                            <ArrowUpRight size={11} />
                          </a>
                        ) : (
                          <button
                            onClick={() => onNavigateTab && onNavigateTab(item.link.replace('#', ''))}
                            className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
                          >
                            <span>View App Section</span>
                            <ArrowUpRight size={11} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* MEMBER DATA COMPACT & LEGAL RIGHTS */}
              <div className="bg-gradient-to-br from-stone-900 to-amber-950/30 border border-amber-500/30 rounded-2xl p-5 shadow-md space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <h4 className="text-sm font-bold text-stone-100">ICEarth Data Sovereignty Compact</h4>
                </div>
                <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside leading-relaxed">
                  <li><strong>Individual Ownership:</strong> 100% of property, medical, and media assets remain your exclusive property.</li>
                  <li><strong>Zero Monetization:</strong> ICEarth will never sell, lease, or trade member data to third-party brokers or AI training corpora.</li>
                  <li><strong>Zero Surveillance:</strong> No invasive tracking pixels or cross-site fingerprinting.</li>
                  <li><strong>Full Portability:</strong> Export or wipe your entire vault at any time in standard JSON or encrypted format.</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 2: MEMBER ONBOARDING & AUTHENTICATION HUB                         */}
      {/* ========================================================================= */}
      {activePortalSubTab === 'onboarding' && (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-8 animate-fadeIn max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-800 pb-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">Sovereign Onboarding</span>
              <h2 className="text-2xl font-bold text-stone-100 font-serif mt-1">
                Join ICEarth as an Individual Sovereign Member
              </h2>
              <p className="text-sm text-stone-400 mt-1">
                Establish your authentic human identity, connect your sovereign tribal credentials, and lock your health data inside a Zero-Knowledge privacy vault.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleLoadNormRouletUser1Preset}
                className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
              >
                <User className="w-4 h-4" />
                <span>Auto-Fill User #1 (Norm Roulet)</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Field 1: Full Sovereign Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-stone-300 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-amber-500" /> Full Legal / Sovereign Name
              </label>
              <input
                type="text"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                placeholder="e.g. Ouray Muskrat"
                className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Field 2: Tribal Affiliation */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-stone-300 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-500" /> Tribal Nation / Sovereign Affiliation
              </label>
              <input
                type="text"
                value={tribalAffiliation}
                onChange={(e) => setTribalAffiliation(e.target.value)}
                placeholder="e.g. Jicarilla Apache Nation, Taos Pueblo, Cherokee..."
                className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Field 3: Tribal Roll ID / Sovereign Identifier */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-stone-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-amber-500" /> Tribal Roll ID / Sovereign Identifier
              </label>
              <input
                type="text"
                value={tribalRollId}
                onChange={(e) => setTribalRollId(e.target.value)}
                placeholder="e.g. JAN-77492-ZKP"
                className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Field 4: National ID / SSN Hash */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase text-stone-300 flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-amber-500" /> US National ID / SSN (Encrypted via ZKP)
              </label>
              <input
                type="text"
                value={nationalIdHash}
                onChange={(e) => setNationalIdHash(e.target.value)}
                placeholder="US-SSN-***-**-8491"
                className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Field 5: Physical Residence Address */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-stone-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500" /> Primary Residence Address / Land Jurisdiction
              </label>
              <input
                type="text"
                value={currentAddress}
                onChange={(e) => setCurrentAddress(e.target.value)}
                placeholder="Dulce, New Mexico 87528 (Jicarilla Reservation)"
                className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Field 6: Primary Role Selection */}
            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-bold uppercase text-stone-300 flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5 text-amber-500" /> Select Membership Role & Access Level
              </label>
              <select
                value={authRole}
                onChange={(e: any) => setAuthRole(e.target.value)}
                className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="individual">Individual Sovereign Member (e.g. Ouray Muskrat)</option>
                <option value="tribal_official">Tribal Government / Healthcare Director</option>
                <option value="municipal_officer">Municipal Water / Lead Inspector / Police Chief</option>
                <option value="supporter">Sovereign Supporter / Restoration Donor</option>
              </select>
            </div>

          </div>

          <div className="bg-stone-950 p-5 rounded-xl border border-stone-800 space-y-3">
            <div className="text-xs font-bold text-amber-400 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Human Authentication Guarantee
            </div>
            <p className="text-xs text-stone-400">
              ICEarth guarantees that your medical, genetic, and location data is encrypted on a local zero-knowledge vault. Neither corporate algorithms nor third-party marketing entities can harvest your information.
            </p>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-stone-800">
            <div className="text-xs text-stone-400">
              Status: <span className="text-emerald-400 font-bold">{zkVerificationStatus}</span>
            </div>
            <button
              onClick={() => {
                setActivePortalSubTab('exposome_profiler');
                handleAnalyzeAddress();
              }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow transition-all flex items-center gap-2 text-sm"
            >
              <CheckCircle className="w-4 h-4" />
              Save Sovereign Member Profile
            </button>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 3: TRIBAL & GOVERNMENT OPERATIONS PORTAL                         */}
      {/* ========================================================================= */}
      {activePortalSubTab === 'tribal_gov' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Government & Health Officers Hub</span>
              <h2 className="text-2xl font-bold text-stone-100 font-serif">
                {tribalAffiliation} Environmental Operations Center
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Manage municipal water lead pipe remediation, citizen test kit distribution, and community health logs.
              </p>
            </div>

            {/* Department Switcher */}
            <div className="flex items-center gap-2 bg-stone-950 p-1.5 rounded-xl border border-stone-800">
              <button
                onClick={() => setSelectedGovDept('health')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedGovDept === 'health' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
              >
                Health Dept
              </button>
              <button
                onClick={() => setSelectedGovDept('water')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedGovDept === 'water' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
              >
                Water Manager
              </button>
              <button
                onClick={() => setSelectedGovDept('environmental')}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedGovDept === 'environmental' ? 'bg-amber-500 text-stone-950' : 'text-stone-400 hover:text-white'
                }`}
              >
                Environmental
              </button>
            </div>
          </div>

          {/* METRIC CARDS FOR GOVERNMENT AUDIT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-1">
              <div className="text-xs text-stone-400 font-medium">Lead Pipe Replacement</div>
              <div className="text-2xl font-black text-amber-400">
                {leadPipeReplacedCount} / {totalLeadPipesCount}
              </div>
              <div className="text-xs text-stone-400">
                {Math.round((leadPipeReplacedCount / totalLeadPipesCount) * 100)}% Replaced
              </div>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-1">
              <div className="text-xs text-stone-400 font-medium">Test Kits Distributed</div>
              <div className="text-2xl font-black text-emerald-400">
                {testKitsDistributed}
              </div>
              <div className="text-xs text-stone-400">Free Household Water & Soil Kits</div>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-1">
              <div className="text-xs text-stone-400 font-medium">Community BLL Average</div>
              <div className="text-2xl font-black text-stone-100">
                {communityBllAverage} <span className="text-xs font-normal text-stone-400">µg/dL</span>
              </div>
              <div className="text-xs text-stone-400">Down from 4.2 µg/dL (2022)</div>
            </div>

            <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 space-y-1">
              <div className="text-xs text-stone-400 font-medium">Remediation Escrow Grant</div>
              <div className="text-2xl font-black text-amber-300">
                $1.25M <span className="text-xs font-normal text-stone-400">USD</span>
              </div>
              <div className="text-xs text-stone-400">ICE Token Escrow Active</div>
            </div>
          </div>

          {/* CITIZEN REPORT INGESTION LOG TABLE */}
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                  <Database className="w-5 h-5 text-amber-500" />
                  Citizen Test Kit Ingestion & Remediation Log
                </h3>
                <p className="text-xs text-stone-400">
                  Encrypted telemetry from citizens (like Ouray) submitting soil and tap water readings.
                </p>
              </div>

              <button
                onClick={() => setShowAddCitizenReportModal(true)}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" /> Log New Test Result
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-300">
                <thead className="bg-stone-950 text-stone-400 uppercase font-semibold text-[11px] border-b border-stone-800">
                  <tr>
                    <th className="p-3">Log ID</th>
                    <th className="p-3">Date</th>
                    <th className="p-3">Residency Sector</th>
                    <th className="p-3">Test Type</th>
                    <th className="p-3">Result Value</th>
                    <th className="p-3">Remediation Status</th>
                    <th className="p-3">ZKP Proof</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60">
                  {citizenLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-stone-800/40 transition-colors">
                      <td className="p-3 font-mono font-bold text-amber-400">{log.id}</td>
                      <td className="p-3 text-stone-400">{log.date}</td>
                      <td className="p-3 font-medium text-stone-200">{log.residency}</td>
                      <td className="p-3">{log.type}</td>
                      <td className="p-3 font-bold text-amber-300">{log.leadResult}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          {log.status}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-[10px] text-stone-500">{log.zkpProof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      )}

      {/* ========================================================================= */}
      {/* SUBTAB 4: MEMBERSHIP TIERS & FINANCIAL LEDGER                            */}
      {/* ========================================================================= */}
      {activePortalSubTab === 'membership_pricing' && (
        <div className="space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Sovereign Funding & Membership</span>
            <h2 className="text-3xl font-bold text-stone-100 font-serif">
              Tiered Membership & Enterprise Grant Options
            </h2>
            <p className="text-sm text-stone-400">
              Grassroots access remains completely free for sovereign individuals. Enterprise tiers and donations directly fund soil chelation and water filtration for vulnerable communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Free Sovereign Tier */}
            <div className={`bg-stone-900 border rounded-2xl p-6 flex flex-col justify-between space-y-6 ${
              selectedTier === 'free' ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-stone-800'
            }`}>
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-stone-800 text-stone-300 uppercase">
                  Grassroots Free
                </span>
                <h3 className="text-xl font-bold text-stone-100">Sovereign Individual</h3>
                <div className="text-3xl font-black text-amber-400">$0 <span className="text-xs font-normal text-stone-400">/ forever</span></div>
                <p className="text-xs text-stone-400">
                  Full access for individual community members (like Ouray) to construct address exposome profiles and store data securely.
                </p>
                <ul className="text-xs text-stone-300 space-y-2 pt-2 border-t border-stone-800">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Unlimited Address Profiling</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> ZK-Proof Health Vault</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Lifetime Trajectory Chart</li>
                </ul>
              </div>

              <button
                onClick={() => { setSelectedTier('free'); setPaymentSuccessModal(true); }}
                className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold rounded-xl text-xs transition-all"
              >
                Select Free Tier
              </button>
            </div>

            {/* Supporter / Donor */}
            <div className={`bg-stone-900 border rounded-2xl p-6 flex flex-col justify-between space-y-6 ${
              selectedTier === 'supporter' ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-stone-800'
            }`}>
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 uppercase">
                  Grassroots Supporter
                </span>
                <h3 className="text-xl font-bold text-stone-100">Restoration Fund Donor</h3>
                <div className="text-3xl font-black text-amber-400">${donationAmount} <span className="text-xs font-normal text-stone-400">/ donation</span></div>
                <p className="text-xs text-stone-400">
                  Directly funds free home lead water & soil test kits for families living on reservation lands.
                </p>
                <div className="flex items-center gap-1 pt-2">
                  {[25, 100, 250, 500].map((amt) => (
                    <button
                      key={amt}
                      onClick={() => setDonationAmount(amt)}
                      className={`px-2 py-1 text-[11px] font-bold rounded ${
                        donationAmount === amt ? 'bg-amber-500 text-stone-950' : 'bg-stone-800 text-stone-300'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => { setSelectedTier('supporter'); setPaymentSuccessModal(true); }}
                className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs shadow transition-all"
              >
                Donate to Restoration Fund
              </button>
            </div>

            {/* Tribal Nation Grant */}
            <div className={`bg-stone-900 border rounded-2xl p-6 flex flex-col justify-between space-y-6 ${
              selectedTier === 'tribal_grant' ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-stone-800'
            }`}>
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 uppercase">
                  Sovereign Nation
                </span>
                <h3 className="text-xl font-bold text-stone-100">Tribal Nation Enterprise</h3>
                <div className="text-3xl font-black text-amber-400">$2,500 <span className="text-xs font-normal text-stone-400">/ yr (or grant waived)</span></div>
                <p className="text-xs text-stone-400">
                  Full operational center for tribal health departments, environmental officers, and sovereign leaders.
                </p>
                <ul className="text-xs text-stone-300 space-y-2 pt-2 border-t border-stone-800">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Tribal Operations Dashboard</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Lead Pipe Remediation Tracking</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Citizen Test Ingestion Engine</li>
                </ul>
              </div>

              <button
                onClick={() => { setSelectedTier('tribal_grant'); setPaymentSuccessModal(true); }}
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold rounded-xl text-xs transition-all"
              >
                Apply for Tribal Grant
              </button>
            </div>

            {/* Municipal Compliance */}
            <div className={`bg-stone-900 border rounded-2xl p-6 flex flex-col justify-between space-y-6 ${
              selectedTier === 'municipal' ? 'border-amber-500 ring-2 ring-amber-500/30' : 'border-stone-800'
            }`}>
              <div className="space-y-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 uppercase">
                  City & County
                </span>
                <h3 className="text-xl font-bold text-stone-100">Municipal Compliance</h3>
                <div className="text-3xl font-black text-amber-400">$5,000 <span className="text-xs font-normal text-stone-400">/ yr</span></div>
                <p className="text-xs text-stone-400">
                  Designed for municipal water departments, lead inspectors, and law enforcement agencies.
                </p>
                <ul className="text-xs text-stone-300 space-y-2 pt-2 border-t border-stone-800">
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> EPA Compliance Reporting</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Infrastructure Map Sync</li>
                  <li className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-amber-400" /> Multi-Inspector License</li>
                </ul>
              </div>

              <button
                onClick={() => { setSelectedTier('municipal'); setPaymentSuccessModal(true); }}
                className="w-full py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-100 font-bold rounded-xl text-xs transition-all"
              >
                Subscribe Municipal
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL: CRYPTOGRAPHIC ZK-PROOF CERTIFICATE */}
      {showZkKeyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-stone-900 border border-amber-800/60 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <Shield className="w-5 h-5" />
                Zero-Knowledge Proof Certificate
              </div>
              <button onClick={() => setShowZkKeyModal(false)} className="text-stone-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs text-stone-300">
              <div className="bg-stone-950 p-3 rounded-lg border border-stone-800 space-y-1 font-mono">
                <div className="text-stone-500">SUBJECT:</div>
                <div className="text-stone-100 font-bold">{memberName}</div>
                <div className="text-stone-500 mt-2">SOVEREIGN HASH:</div>
                <div className="text-amber-400">{zkVerificationStatus}</div>
                <div className="text-stone-500 mt-2">ZK-PROOF COMMITMENT:</div>
                <div className="text-stone-400 break-all">0x8F921A049B7C3E118940FD22910AA8423617152019A81726</div>
              </div>
              <p>
                This Zero-Knowledge Proof confirms that {memberName} is a verified human with authentic residency in {currentAddress}, without exposing unencrypted personal details.
              </p>
            </div>

            <button
              onClick={() => setShowZkKeyModal(false)}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs"
            >
              Close Certificate
            </button>
          </div>
        </div>
      )}

      {/* MODAL: LOG NEW CITIZEN TEST RESULT */}
      {showAddCitizenReportModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="text-base font-bold text-stone-100">Log Citizen Environmental Test</h3>
              <button onClick={() => setShowAddCitizenReportModal(false)} className="text-stone-400 hover:text-white">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="text-stone-300 font-bold block mb-1">Residency Sector / Location</label>
                <input
                  type="text"
                  placeholder="e.g., Dulce Sector 2"
                  className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-lg p-2.5"
                  id="input-residency-sector"
                />
              </div>

              <div>
                <label className="text-stone-300 font-bold block mb-1">Test Sample Type</label>
                <select className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-lg p-2.5" id="select-sample-type">
                  <option value="water">Home Tap Water Lead (ppb)</option>
                  <option value="soil">Yard Soil Lead (ppm)</option>
                  <option value="blood">Pediatric Capillary BLL (µg/dL)</option>
                </select>
              </div>

              <div>
                <label className="text-stone-300 font-bold block mb-1">Result Value</label>
                <input
                  type="text"
                  placeholder="e.g. 14.5 ppb"
                  className="w-full bg-stone-950 text-stone-100 border border-stone-700 rounded-lg p-2.5"
                  id="input-test-result-value"
                />
              </div>
            </div>

            <button
              onClick={() => {
                const newLog = {
                  id: `LOG-${Math.floor(100 + Math.random() * 900)}`,
                  date: new Date().toISOString().split('T')[0],
                  residency: 'Dulce Sector 2',
                  type: 'Home Tap Water Test',
                  leadResult: '14.5 ppb',
                  status: 'Remediation Pitcher Issued',
                  zkpProof: `0x${Math.floor(Math.random() * 1000000).toString(16)}...ZKP`
                };
                setCitizenLogs([newLog, ...citizenLogs]);
                setShowAddCitizenReportModal(false);
              }}
              className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl text-xs"
            >
              Submit Encrypted Log
            </button>
          </div>
        </div>
      )}

      {/* MODAL: PAYMENT / MEMBERSHIP SUCCESS */}
      {paymentSuccessModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-stone-900 border border-emerald-800/60 rounded-2xl max-w-md w-full p-6 space-y-4 text-center shadow-2xl">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-stone-100">Sovereign Membership Active</h3>
            <p className="text-xs text-stone-300">
              Your tier selection has been registered on the ICEarth ledger. Thank you for supporting sovereign environmental intelligence.
            </p>
            <button
              onClick={() => setPaymentSuccessModal(false)}
              className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold rounded-xl text-xs"
            >
              Return to Portal
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
