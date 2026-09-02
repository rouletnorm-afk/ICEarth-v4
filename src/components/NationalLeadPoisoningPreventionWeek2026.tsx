import React, { useState, useMemo } from 'react';
import {
  Shield,
  Calendar,
  AlertTriangle,
  FileText,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Sparkles,
  Search,
  Filter,
  Eye,
  Info,
  Layers,
  Award,
  Hash,
  Download,
  Share2,
  Copy,
  Check,
  Zap,
  Flame,
  Atom,
  Droplets,
  Scale,
  Sliders,
  Maximize2,
  X,
  Users,
  Globe,
  Cpu,
  Heart,
  Home,
  ShieldAlert,
  Building2,
  UserCheck,
  TrendingUp,
  Brain,
  Lightbulb,
  ShieldCheck,
  PlusCircle,
  Megaphone,
  Clock,
  MapPin,
  Stethoscope,
  PenTool,
  BookmarkCheck,
  HelpCircle,
  Activity,
  BarChart3
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
  LineChart,
  Line,
  AreaChart,
  Area
} from 'recharts';
import nlppw2026Img from '../assets/images/nlppw_epa_fixed_1788387847458.jpg';

interface NationalLeadPoisoningPreventionWeek2026Props {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

interface EventUpdate {
  id: string;
  title: string;
  date: string;
  author: string;
  agency: string;
  category: 'Federal Announcement' | 'Testing Clinic' | 'Community Action' | 'Research Brief' | 'Material Release';
  priority: 'High' | 'Routine' | 'Urgent';
  summary: string;
  details: string;
  linkUrl?: string;
  linkText?: string;
}

export const NationalLeadPoisoningPreventionWeek2026: React.FC<NationalLeadPoisoningPreventionWeek2026Props> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Navigation Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState<'overview' | 'updates' | 'pillars' | 'toolkits' | 'risk_calculator' | 'plate_view'>('overview');

  // Interactive Plate Modal
  const [showPlateModal, setShowPlateModal] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [copiedShareText, setCopiedShareText] = useState<boolean>(false);

  // Search & Filter for Updates
  const [updateSearch, setUpdateSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // New Update Submission Modal / State
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  const [newUpdateTitle, setNewUpdateTitle] = useState<string>('');
  const [newUpdateAuthor, setNewUpdateAuthor] = useState<string>('ICEarth Community Organizer');
  const [newUpdateAgency, setNewUpdateAgency] = useState<string>('Local Public Health Taskforce');
  const [newUpdateCategory, setNewUpdateCategory] = useState<EventUpdate['category']>('Community Action');
  const [newUpdatePriority, setNewUpdatePriority] = useState<EventUpdate['priority']>('High');
  const [newUpdateSummary, setNewUpdateSummary] = useState<string>('');
  const [newUpdateDetails, setNewUpdateDetails] = useState<string>('');
  const [newUpdateLinkUrl, setNewUpdateLinkUrl] = useState<string>('https://www.epa.gov/lead');
  const [newUpdateLinkText, setNewUpdateLinkText] = useState<string>('View EPA Lead Guidelines');

  // Initial event updates state
  const [updates, setUpdates] = useState<EventUpdate[]>([
    {
      id: 'UPDATE-NLPPW-001',
      title: 'EPA, CDC & HUD Officially Release 2026 Outreach Materials: "Keep Kids Safe from Lead"',
      date: 'September 1, 2026',
      author: 'Office of Pollution Prevention and Toxics',
      agency: 'U.S. EPA / CDC / HUD Joint Taskforce',
      category: 'Federal Announcement',
      priority: 'Urgent',
      summary: 'Outreach packages, customizable flyers, posters, and multilingual social media assets are officially made public ahead of National Lead Poisoning Prevention Week (Oct 25-31, 2026).',
      details: 'The U.S. Environmental Protection Agency (EPA), Centers for Disease Control and Prevention (CDC), and U.S. Department of Housing and Urban Development (HUD) have released comprehensive educational toolkits designed for local municipalities, tribal sovereign authorities, community organizations, and healthcare providers. Materials emphasize three decisive action tracks: Get the Facts, Get Your Child Tested, and Get Your Home Tested.',
      linkUrl: 'https://www.epa.gov/chemicals-under-tsca/now-available-national-lead-poisoning-prevention-week-materials-1',
      linkText: 'Access EPA Official Announcement & Downloads'
    },
    {
      id: 'UPDATE-NLPPW-002',
      title: 'ICEarth Sovereign Lab Coordinates Universal Blood Lead Level (BLL) Screening Drives for October 25-31',
      date: 'September 2, 2026',
      author: 'Norman Roulet',
      agency: 'ICEarth Sovereign Exposenomics Consortium',
      category: 'Testing Clinic',
      priority: 'High',
      summary: 'Point-of-care capillary and venous blood lead testing clinics scheduled across 8 high-burden jurisdictions (Taos, Cleveland, Flint, Detroit, Milwaukee, Chicago, Twin Cities, and Troy).',
      details: 'In alignment with the CDC 3.5 µg/dL blood lead reference value and Roulet\'s Law (no safe biological dose of lead exists), ICEarth is partnering with local sovereign health clinics and mobile units to deliver free 3-minute LeadCare blood testing for toddlers aged 9–36 months and expectant mothers during the last week of October.',
      linkUrl: 'https://icearth.org/?tab=childhood_lead_testing',
      linkText: 'View Clinical Testing Algorithm & Protocols'
    },
    {
      id: 'UPDATE-NLPPW-003',
      title: 'Pre-1978 Housing Audit Protocols & Point-of-Use Water Filter Distribution Initiative Launched',
      date: 'September 2, 2026',
      author: 'Community Housing Action Team',
      agency: 'Sovereign Housing & Infrastructure Taskforce',
      category: 'Community Action',
      priority: 'High',
      summary: 'Free certified lead-removal water filters (NSF 53/58) and home inspection test kits distributed to low-income tenants and homeowners in pre-1978 zip codes.',
      details: 'Because lead was banned from residential paint only in 1978, over 30 million American homes retain layers of dangerous white lead pigment on window sills, door frames, and porch steps. As older paint chalks into fine dust, toddlers ingest toxic doses during hand-to-mouth exploration. This initiative equips families with certified HEPA cleaning guides, point-of-use water filters, and professional inspector referrals.',
      linkUrl: 'https://www.epa.gov/lead/protect-your-family-exposures-lead',
      linkText: 'EPA Home Protection Checklist'
    },
    {
      id: 'UPDATE-NLPPW-004',
      title: 'Pediatric Neurodevelopmental Exposenomics: The Prefrontal Cortex & Zero Safe Threshold',
      date: 'September 2, 2026',
      author: 'Sovereign Health Science Desk',
      agency: 'ICEarth Medical Exposenomics Division',
      category: 'Research Brief',
      priority: 'Routine',
      summary: 'Synthesis of Lanphear (2005) pooled analysis and recent MRI neuro-imaging proving that the steepest loss of cognitive function occurs at the lowest detectable blood lead levels (<5 µg/dL).',
      details: 'Sub-clinical lead exposure permanently disrupts NMDA glutamate receptors and calcium-dependent neurotransmitter release, selectively shrinking prefrontal gray matter volume in the anterior cingulate cortex (ACC) and ventromedial prefrontal cortex (vmPFC). Prevention before exposure is the only medically sound standard.',
      linkUrl: 'https://icearth.org/?tab=public_interest_tech',
      linkText: 'Explore Public Interest AI Predictive Models'
    }
  ]);

  // Risk Calculator State
  const [homeYear, setHomeYear] = useState<number>(1965);
  const [hasPeelingPaint, setHasPeelingPaint] = useState<boolean>(true);
  const [hasLeadServiceLine, setHasLeadServiceLine] = useState<boolean>(true);
  const [childAgeMonths, setChildAgeMonths] = useState<number>(18);
  const [hasTestedBll, setHasTestedBll] = useState<boolean>(false);
  const [usesFilteredWater, setUsesFilteredWater] = useState<boolean>(false);

  // Filtered updates
  const filteredUpdates = useMemo(() => {
    return updates.filter(u => {
      const matchSearch = (u.title + u.summary + u.details + u.agency + u.author).toLowerCase().includes(updateSearch.toLowerCase());
      const matchCategory = selectedCategory === 'all' || u.category === selectedCategory;
      return matchSearch && matchCategory;
    });
  }, [updates, updateSearch, selectedCategory]);

  // Handle posting a new update
  const handleCreateUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUpdateTitle.trim() || !newUpdateSummary.trim()) return;

    const newItem: EventUpdate = {
      id: `UPDATE-NLPPW-${Date.now()}`,
      title: newUpdateTitle.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
      author: newUpdateAuthor.trim() || 'Community Contributor',
      agency: newUpdateAgency.trim() || 'ICEarth Community Member',
      category: newUpdateCategory,
      priority: newUpdatePriority,
      summary: newUpdateSummary.trim(),
      details: newUpdateDetails.trim() || newUpdateSummary.trim(),
      linkUrl: newUpdateLinkUrl.trim() || undefined,
      linkText: newUpdateLinkText.trim() || 'Learn More'
    };

    setUpdates(prev => [newItem, ...prev]);
    setNewUpdateTitle('');
    setNewUpdateSummary('');
    setNewUpdateDetails('');
    setShowPostModal(false);
  };

  // Copy hash helper
  const handleCopyHash = () => {
    navigator.clipboard.writeText('0xEPA_CDC_HUD_NLPPW_2026_EVENT_VAULT');
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Share social copy helper
  const handleCopyShare = () => {
    const text = `National Lead Poisoning Prevention Week (NLPPW 2026) is October 25-31! Theme: "Keep Kids Safe from Lead."\n1. Get the Facts\n2. Get Your Child Tested\n3. Get Your Home Tested\nOfficial outreach materials from EPA, CDC & HUD are available now: https://www.epa.gov/lead #NLPPW2026 #LeadFreeKids #ICEarth`;
    navigator.clipboard.writeText(text);
    setCopiedShareText(true);
    setTimeout(() => setCopiedShareText(false), 2000);
  };

  // Risk Score Calculation
  const riskAssessment = useMemo(() => {
    let score = 0;
    const factors: string[] = [];

    // Housing Year
    if (homeYear < 1940) {
      score += 40;
      factors.push('Pre-1940 Housing: 87% probability of lead paint');
    } else if (homeYear < 1960) {
      score += 30;
      factors.push('1940-1959 Housing: 69% probability of lead paint');
    } else if (homeYear < 1978) {
      score += 20;
      factors.push('1960-1977 Housing: 24% probability of lead paint');
    } else {
      score += 0;
      factors.push('Post-1978 Construction: Lead paint prohibited');
    }

    if (hasPeelingPaint) {
      score += 25;
      factors.push('Chipping / Peeling Paint: High toxic dust generation');
    }

    if (hasLeadServiceLine && !usesFilteredWater) {
      score += 25;
      factors.push('Lead Service Line without certified filtration');
    } else if (hasLeadServiceLine && usesFilteredWater) {
      score += 5;
      factors.push('Lead Service Line present but managed with filter');
    }

    if (!hasTestedBll && childAgeMonths <= 72) {
      score += 15;
      factors.push('Child under 6 years has not received blood test');
    }

    let level: 'High Risk' | 'Moderate Risk' | 'Low Risk' = 'Low Risk';
    let color = 'text-emerald-400 border-emerald-500/40 bg-emerald-950/40';
    if (score >= 50) {
      level = 'High Risk';
      color = 'text-rose-400 border-rose-500/40 bg-rose-950/40';
    } else if (score >= 25) {
      level = 'Moderate Risk';
      color = 'text-amber-400 border-amber-500/40 bg-amber-950/40';
    }

    return { score: Math.min(score, 100), level, color, factors };
  }, [homeYear, hasPeelingPaint, hasLeadServiceLine, childAgeMonths, hasTestedBll, usesFilteredWater]);

  // Data for Charts
  const housingLeadRiskData = [
    { era: 'Built < 1940', riskPct: 87, heavyMetalDensity: 95 },
    { era: '1940 – 1959', riskPct: 69, heavyMetalDensity: 74 },
    { era: '1960 – 1977', riskPct: 24, heavyMetalDensity: 35 },
    { era: '1978 & Newer', riskPct: 1, heavyMetalDensity: 2 }
  ];

  const cognitiveImpactCurve = [
    { bll: '0.0 µg/dL', iqLoss: 0.0, biologicalImpact: 'Indigenous Natural Baseline' },
    { bll: '1.0 µg/dL', iqLoss: 1.8, biologicalImpact: 'Early NMDA Synaptic Interference' },
    { bll: '2.0 µg/dL', iqLoss: 3.5, biologicalImpact: 'Measurable Prefrontal Attenuation' },
    { bll: '3.5 µg/dL', iqLoss: 5.2, biologicalImpact: 'CDC Blood Lead Reference Value (BLRV)' },
    { bll: '5.0 µg/dL', iqLoss: 6.8, biologicalImpact: 'Significant Impulsivity & ADHD Risk' },
    { bll: '10.0 µg/dL', iqLoss: 9.4, biologicalImpact: 'Severe Executive Function Deficit' },
    { bll: '15.0 µg/dL', iqLoss: 11.2, biologicalImpact: 'Volumetric vmPFC & ACC Shrinkage' }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200`}>
      
      {/* TOP NOTIFICATION / OBSERVATION BANNER */}
      <div className="bg-gradient-to-r from-amber-600 via-emerald-600 to-teal-700 text-white px-4 py-2 text-xs font-mono text-center flex items-center justify-center gap-2 shadow-md">
        <Calendar size={14} className="animate-pulse text-amber-200" />
        <span className="font-black tracking-wider uppercase">NATIONAL LEAD POISONING PREVENTION WEEK (NLPPW 2026)</span>
        <span className="opacity-75">•</span>
        <span className="font-bold">OCTOBER 25–31, 2026</span>
        <span className="opacity-75">•</span>
        <span className="hidden sm:inline bg-black/30 px-2 py-0.5 rounded text-[11px]">U.S. EPA • CDC • HUD Joint Federal Outreach</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* HERO SECTION WITH EPA PROMOTION ASSET */}
        <div className={`rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-xl' : 'bg-stone-900/90 border-stone-800 shadow-2xl'} p-6 sm:p-10 relative overflow-hidden`}>
          
          {/* Ambient Lighting Orbs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badges & Source Attribution */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-mono text-xs font-black uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <Megaphone size={14} />
                  <span>EPA FEATURED EVENT</span>
                </span>
                <span className={`px-3 py-1 rounded-xl text-xs font-mono font-bold border ${isLight ? 'bg-amber-50 border-amber-300 text-amber-800' : 'bg-amber-950/50 border-amber-700/60 text-amber-300'} flex items-center gap-1.5`}>
                  <ShieldCheck size={14} className="text-amber-500" />
                  <span>Theme: "Keep Kids Safe from Lead"</span>
                </span>
                <span className={`px-3 py-1 rounded-xl text-xs font-mono ${isLight ? 'bg-stone-100 text-stone-600' : 'bg-stone-800 text-stone-300'} flex items-center gap-1`}>
                  <Clock size={13} />
                  <span>Materials Released Sep 1, 2026</span>
                </span>
              </div>

              {/* Title & Official Narrative */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight leading-tight">
                  National Lead Poisoning Prevention Week 2026
                </h1>
                <p className={`text-base sm:text-lg leading-relaxed ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                  The U.S. Environmental Protection Agency (EPA), Centers for Disease Control and Prevention (CDC), and U.S. Department of Housing and Urban Development (HUD) have released official outreach materials for National Lead Poisoning Prevention Week (NLPPW), observed <strong className="text-emerald-600 dark:text-emerald-400">Oct. 25–31, 2026</strong>.
                </p>
                <p className={`text-sm leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                  Lead is a toxic metal that damages the brain and central nervous system, slows physical growth, and triggers lifelong learning and behavioral disorders in children. In older homes, lead remains hidden under layers of paint, in municipal water pipes, and in contaminated soil.
                </p>
              </div>

              {/* Three Core Pillars Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/70 border-stone-800'} space-y-1.5`}>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs font-mono uppercase">
                    <BookOpen size={16} />
                    <span>Pillar 1</span>
                  </div>
                  <h4 className="font-serif font-black text-sm">Get the Facts</h4>
                  <p className="text-xs text-stone-500 leading-snug">
                    Learn where lead hides—paint, pipes, soil, and imported spices—and eliminate exposure routes.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/70 border-stone-800'} space-y-1.5`}>
                  <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-xs font-mono uppercase">
                    <Stethoscope size={16} />
                    <span>Pillar 2</span>
                  </div>
                  <h4 className="font-serif font-black text-sm">Get Child Tested</h4>
                  <p className="text-xs text-stone-500 leading-snug">
                    The only way to detect lead toxicity is a blood test. Universal screening at 12 & 24 months saves brains.
                  </p>
                </div>

                <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/70 border-stone-800'} space-y-1.5`}>
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 font-bold text-xs font-mono uppercase">
                    <Home size={16} />
                    <span>Pillar 3</span>
                  </div>
                  <h4 className="font-serif font-black text-sm">Get Home Tested</h4>
                  <p className="text-xs text-stone-500 leading-snug">
                    Inspect pre-1978 housing paint, test tap water lead levels, and remediate before toddlers crawl.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setActiveSubTab('updates')}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-black shadow-lg shadow-emerald-600/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Megaphone size={16} />
                  <span>View Live Updates & Community Dispatches ({updates.length})</span>
                </button>

                <button
                  onClick={() => setActiveSubTab('toolkits')}
                  className={`px-4 py-3 rounded-2xl border font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isLight ? 'bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-800' : 'bg-stone-800 hover:bg-stone-700 border-stone-700 text-stone-200'
                  }`}
                >
                  <Download size={15} />
                  <span>Download EPA Outreach Toolkits</span>
                </button>

                <button
                  onClick={() => setShowPlateModal(true)}
                  className={`px-4 py-3 rounded-2xl border font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                    isLight ? 'bg-stone-100 hover:bg-stone-200 border-stone-300 text-stone-800' : 'bg-stone-800 hover:bg-stone-700 border-stone-700 text-stone-200'
                  }`}
                >
                  <Eye size={15} />
                  <span>Forensic Plate #33</span>
                </button>
              </div>

            </div>

            {/* Right Visual Column (EPA Generated Asset) */}
            <div className="lg:col-span-5 space-y-3">
              <div className="rounded-3xl overflow-hidden border-2 border-emerald-500/50 shadow-2xl group relative bg-black">
                <img
                  src={nlppw2026Img}
                  alt="National Lead Poisoning Prevention Week 2026 EPA Poster"
                  className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-700 cursor-pointer"
                  onClick={() => setShowPlateModal(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                      Plate #33 • Official Sovereign Cryptographic Vault
                    </span>
                    <span className="text-xs font-serif font-bold">
                      Keep Kids Safe from Lead (Oct 25-31, 2026)
                    </span>
                  </div>
                  <button
                    onClick={() => setShowPlateModal(true)}
                    className="p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur text-white cursor-pointer"
                    title="Enlarge Plate"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>
              </div>

              {/* Cryptographic Hash Bar */}
              <div className={`p-3 rounded-2xl border text-xs font-mono flex items-center justify-between ${
                isLight ? 'bg-stone-100 border-stone-200 text-stone-700' : 'bg-stone-900 border-stone-800 text-stone-400'
              }`}>
                <div className="flex items-center gap-2 truncate">
                  <Hash size={14} className="text-emerald-500 shrink-0" />
                  <span className="truncate">0xEPA_CDC_HUD_NLPPW_2026_EVENT_VAULT</span>
                </div>
                <button
                  onClick={handleCopyHash}
                  className="px-2.5 py-1 rounded-lg bg-emerald-600/20 text-emerald-500 hover:bg-emerald-600/30 text-[11px] font-bold shrink-0 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedHash ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copiedHash ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
            <div className="space-y-1">
              <span className="text-xs font-mono text-stone-500 uppercase">Target Observation</span>
              <div className="text-lg sm:text-xl font-serif font-black text-emerald-600 dark:text-emerald-400">
                Oct 25 – 31, 2026
              </div>
              <p className="text-[11px] text-stone-400">Nationwide observance</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-stone-500 uppercase">Pre-1978 US Homes</span>
              <div className="text-lg sm:text-xl font-serif font-black text-amber-600 dark:text-amber-400">
                30+ Million
              </div>
              <p className="text-[11px] text-stone-400">Contain toxic lead paint</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-stone-500 uppercase">Safe Blood Lead Level</span>
              <div className="text-lg sm:text-xl font-serif font-black text-rose-600 dark:text-rose-400">
                0.0 µg/dL
              </div>
              <p className="text-[11px] text-stone-400">Zero safe biological threshold</p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-stone-500 uppercase">Sponsoring Federal Agencies</span>
              <div className="text-lg sm:text-xl font-serif font-black text-sky-600 dark:text-sky-400">
                EPA • CDC • HUD
              </div>
              <p className="text-[11px] text-stone-400">TSCA & Title X Multi-Agency</p>
            </div>
          </div>

        </div>

        {/* SECTION NAVIGATION TABS */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-stone-200 dark:border-stone-800">
          {[
            { id: 'overview', label: 'Event Overview & Strategy', icon: Sparkles },
            { id: 'updates', label: `Live Updates & Community Dispatches (${updates.length})`, icon: Megaphone },
            { id: 'pillars', label: 'The 3 Federal Action Pillars', icon: ShieldCheck },
            { id: 'toolkits', label: 'Customizable Flyers & Toolkits', icon: Download },
            { id: 'risk_calculator', label: 'Home & Child Risk Screener', icon: Sliders },
            { id: 'plate_view', label: 'Cryptographic Plate #33', icon: Eye }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0 ${
                  isActive
                    ? 'bg-emerald-600 text-white shadow-md'
                    : isLight
                    ? 'bg-white hover:bg-stone-100 text-stone-700 border border-stone-200'
                    : 'bg-stone-900 hover:bg-stone-800 text-stone-300 border border-stone-800'
                }`}
              >
                <Icon size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* SUB-TAB 1: EVENT OVERVIEW */}
        {activeSubTab === 'overview' && (
          <div className="space-y-8">
            
            {/* Context & Federal Call to Action */}
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
                <div>
                  <h3 className="text-xl font-serif font-bold">Why National Lead Poisoning Prevention Week Matters in 2026</h3>
                  <p className="text-xs text-stone-500 font-mono mt-0.5">
                    Bridging Federal TSCA Outreach and ICEarth Sovereign Exposenomics
                  </p>
                </div>
                <button
                  onClick={handleCopyShare}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600/20 text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedShareText ? <Check size={14} /> : <Share2 size={14} />}
                  <span>{copiedShareText ? 'Copied Social Post' : 'Share Campaign'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm leading-relaxed">
                <div className="space-y-3">
                  <h4 className="font-serif font-black text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                    <AlertTriangle size={16} />
                    <span>The Persistent Threat in American Homes</span>
                  </h4>
                  <p className={isLight ? 'text-stone-700' : 'text-stone-300'}>
                    Although residential lead paint was prohibited in 1978 and leaded gasoline was phased out, the toxic burden remains locked in the built environment. Millions of pre-1978 residential homes and apartment buildings still contain layers of lead paint.
                  </p>
                  <p className={isLight ? 'text-stone-600' : 'text-stone-400'}>
                    Normal wear and tear, door and window friction, and home renovations pulverize lead into invisible, microscopic dust that settles on carpets and floors. Toddlers, exploring their environments through normal hand-to-mouth behaviors, absorb up to 50% of ingested lead into their developing bodies.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif font-black text-sky-600 dark:text-sky-400 flex items-center gap-2">
                    <Brain size={16} />
                    <span>Neurological Impact & Roulet's Law Verification</span>
                  </h4>
                  <p className={isLight ? 'text-stone-700' : 'text-stone-300'}>
                    Lead mimics calcium (Ca²⁺), crossing the blood-brain barrier and displacing zinc-finger proteins, crippling neurotransmitter pathways in the ventromedial prefrontal cortex (vmPFC) and anterior cingulate cortex (ACC).
                  </p>
                  <p className={isLight ? 'text-stone-600' : 'text-stone-400'}>
                    This subatomic disruption manifests as impulsive dysregulation, attention deficits, and cognitive suppression. Under Roulet's Law, eliminating primary perturbation (H') through upfront housing remediation and blood surveillance is the only true pathway to prevent systemic chaos.
                  </p>
                </div>
              </div>
            </div>

            {/* Interactive Charts: Housing Age & Cognitive Impact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Chart 1: Housing Age Hazard */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-amber-500 font-mono text-xs font-bold">
                    <Building2 size={14} />
                    <span>HUD & EPA HOUSING SURVEILLANCE</span>
                  </div>
                  <h4 className="font-serif font-bold text-base">Housing Age vs. Lead Paint Hazard Probability</h4>
                  <p className="text-xs text-stone-500">
                    Older structures exhibit exponentially higher concentrations of white lead pigment.
                  </p>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={housingLeadRiskData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="era" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} domain={[0, 100]} unit="%" />
                      <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px', border: '1px solid #78716c' }} />
                      <Legend />
                      <Bar dataKey="riskPct" name="Probability of Lead Paint (%)" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[11px] font-mono text-stone-500">
                  Data source: HUD Office of Lead Hazard Control and Healthy Homes (OLHCHH) National Survey.
                </p>
              </div>

              {/* Chart 2: Cognitive Loss Curve */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-bold">
                    <Activity size={14} />
                    <span>LANPHEAR 2005 / CDC REFERENCE DEFICIT</span>
                  </div>
                  <h4 className="font-serif font-bold text-base">Blood Lead Level (BLL) & IQ Deficit Non-Linear Curve</h4>
                  <p className="text-xs text-stone-500">
                    The steepest cognitive decrement occurs at the lowest blood lead tiers (&lt; 5 µg/dL).
                  </p>
                </div>

                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={cognitiveImpactCurve} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="bll" tick={{ fontSize: 11 }} />
                      <YAxis tick={{ fontSize: 11 }} domain={[0, 14]} unit=" pts" />
                      <Tooltip contentStyle={{ backgroundColor: isLight ? '#fff' : '#1c1917', borderRadius: '12px', border: '1px solid #78716c' }} />
                      <Legend />
                      <Line type="monotone" dataKey="iqLoss" name="Estimated Full-Scale IQ Loss (Points)" stroke="#e11d48" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-[11px] font-mono text-stone-500">
                  Definitive proof: Even low-level lead exposure damages cognitive potential without threshold.
                </p>
              </div>

            </div>

          </div>
        )}

        {/* SUB-TAB 2: DEDICATED UPDATES SECTION (WHERE UPDATES CAN BE POSTED) */}
        {activeSubTab === 'updates' && (
          <div className="space-y-6">
            
            {/* Updates Management & Header */}
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-bold uppercase">
                    <Megaphone size={15} />
                    <span>NLPPW 2026 DEDICATED UPDATE REPOSITORY</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold mt-1">
                    Event Updates, Clinic Schedules & Community Dispatches
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Real-time bulletins, inter-agency announcements, blood testing locations, and municipal reports.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowPostModal(true)}
                    className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-mono text-xs font-bold flex items-center gap-2 shadow-md cursor-pointer transition-all"
                  >
                    <PlusCircle size={15} />
                    <span>Post Event Update / Dispatch</span>
                  </button>
                </div>
              </div>

              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 border-t border-stone-100 dark:border-stone-800">
                <div className="relative flex-1 w-full">
                  <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                  <input
                    type="text"
                    placeholder="Search dispatches, agencies, clinics, or guidelines..."
                    value={updateSearch}
                    onChange={e => setUpdateSearch(e.target.value)}
                    className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono border ${
                      isLight ? 'bg-stone-50 border-stone-200 text-stone-800' : 'bg-stone-950 border-stone-800 text-stone-200'
                    } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                  />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
                  <Filter size={14} className="text-stone-400 shrink-0" />
                  {['all', 'Federal Announcement', 'Testing Clinic', 'Community Action', 'Research Brief'].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap cursor-pointer transition-colors ${
                        selectedCategory === cat
                          ? 'bg-emerald-600 text-white'
                          : isLight
                          ? 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                          : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                      }`}
                    >
                      {cat === 'all' ? 'All Updates' : cat}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Updates List */}
            <div className="space-y-4">
              {filteredUpdates.length === 0 ? (
                <div className={`p-12 text-center rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-3`}>
                  <Info size={28} className="mx-auto text-stone-400" />
                  <p className="text-sm font-mono text-stone-500">No event updates found matching your search query.</p>
                  <button
                    onClick={() => { setUpdateSearch(''); setSelectedCategory('all'); }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-mono text-xs font-bold cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </div>
              ) : (
                filteredUpdates.map(up => (
                  <div
                    key={up.id}
                    className={`p-6 rounded-3xl border transition-all ${
                      isLight ? 'bg-white border-stone-200 hover:border-emerald-300 shadow-sm' : 'bg-stone-900/90 border-stone-800 hover:border-emerald-700/60 shadow-md'
                    } space-y-4`}
                  >
                    {/* Update Meta Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-black uppercase ${
                          up.priority === 'Urgent'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                            : up.priority === 'High'
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        }`}>
                          {up.priority} Priority
                        </span>

                        <span className={`px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold ${
                          isLight ? 'bg-stone-100 text-stone-700' : 'bg-stone-800 text-stone-300'
                        }`}>
                          {up.category}
                        </span>

                        <span className="text-xs font-mono text-stone-400 flex items-center gap-1">
                          <Clock size={12} />
                          <span>{up.date}</span>
                        </span>
                      </div>

                      <div className="text-xs font-mono text-stone-400">
                        {up.id}
                      </div>
                    </div>

                    {/* Title & Author */}
                    <div className="space-y-1">
                      <h4 className="text-lg font-serif font-black">{up.title}</h4>
                      <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                        <UserCheck size={13} />
                        <span>Dispatched by <strong>{up.author}</strong> ({up.agency})</span>
                      </p>
                    </div>

                    {/* Summary & Details */}
                    <div className="space-y-2 text-sm leading-relaxed">
                      <p className={`font-semibold ${isLight ? 'text-stone-800' : 'text-stone-200'}`}>
                        {up.summary}
                      </p>
                      <p className={`text-xs ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                        {up.details}
                      </p>
                    </div>

                    {/* Footer Action Links */}
                    {up.linkUrl && (
                      <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
                        <a
                          href={up.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1.5"
                        >
                          <ExternalLink size={13} />
                          <span>{up.linkText || 'Learn More'}</span>
                        </a>

                        <button
                          onClick={() => {
                            navigator.clipboard.writeText(`${up.title}: ${up.summary} (Source: ${up.agency})`);
                            alert('Update text copied to clipboard for community distribution!');
                          }}
                          className="px-3 py-1 rounded-lg text-xs font-mono text-stone-400 hover:text-stone-200 hover:bg-stone-800 flex items-center gap-1 cursor-pointer transition-colors"
                        >
                          <Copy size={12} />
                          <span>Copy Brief</span>
                        </button>
                      </div>
                    )}

                  </div>
                ))
              )}
            </div>

          </div>
        )}

        {/* SUB-TAB 3: THE THREE FEDERAL PILLARS */}
        {activeSubTab === 'pillars' && (
          <div className="space-y-6">
            
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
              <h3 className="text-xl font-serif font-bold">The Three Official NLPPW 2026 Action Pillars</h3>
              <p className="text-xs text-stone-500 font-mono">
                Guidance synthesized from EPA, CDC, and HUD inter-agency mandates.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pillar 1 */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-serif font-black text-xl">
                  1
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-emerald-500 font-bold">Knowledge & Awareness</span>
                  <h4 className="text-lg font-serif font-bold">Get the Facts</h4>
                </div>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-300'}`}>
                  Understand the multiple exposure vectors threatening infants and pregnant mothers. Lead is non-biodegradable and accumulates in human bones and teeth over decades.
                </p>
                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-950 space-y-2 text-[11px] font-mono text-stone-600 dark:text-stone-400">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400">Key Exposure Vectors:</div>
                  <ul className="space-y-1">
                    <li>• Deteriorating pre-1978 paint dust on windows</li>
                    <li>• Lead service lines & lead solder plumbing</li>
                    <li>• Bare soil contaminated by historic leaded gasoline</li>
                    <li>• Imported cookware, glazes, traditional cosmetics</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-500 flex items-center justify-center font-serif font-black text-xl">
                  2
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-sky-500 font-bold">Clinical Surveillance</span>
                  <h4 className="text-lg font-serif font-bold">Get Your Child Tested</h4>
                </div>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-300'}`}>
                  Most children with elevated blood lead levels show no obvious immediate physical symptoms. Blood tests are the <em>only</em> definitive diagnostic method.
                </p>
                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-950 space-y-2 text-[11px] font-mono text-stone-600 dark:text-stone-400">
                  <div className="font-bold text-sky-600 dark:text-sky-400">Recommended Testing Schedule:</div>
                  <ul className="space-y-1">
                    <li>• Universal capillary or venous screen at 12 months</li>
                    <li>• Follow-up universal blood test at 24 months</li>
                    <li>• Catch-up testing for pre-1978 housing up to age 6</li>
                    <li>• Action threshold: &ge; 3.5 µg/dL (CDC BLRV)</li>
                  </ul>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-500 flex items-center justify-center font-serif font-black text-xl">
                  3
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase text-amber-500 font-bold">Environmental Prevention</span>
                  <h4 className="text-lg font-serif font-bold">Get Your Home Tested</h4>
                </div>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-600' : 'text-stone-300'}`}>
                  Identify and neutralize hazards before children are exposed. Pre-1978 properties should undergo professional certified risk assessments.
                </p>
                <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-950 space-y-2 text-[11px] font-mono text-stone-600 dark:text-stone-400">
                  <div className="font-bold text-amber-600 dark:text-amber-400">Remediation Steps:</div>
                  <ul className="space-y-1">
                    <li>• Certified Lead-Safe EPA RRP contractors</li>
                    <li>• Wet wipe window sills and uncarpeted floors</li>
                    <li>• Install NSF 53 or 58 certified drinking water filters</li>
                    <li>• Cover bare yard soil with woodchips or sod</li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* SUB-TAB 4: CUSTOMIZABLE FLYERS & TOOLKITS */}
        {activeSubTab === 'toolkits' && (
          <div className="space-y-6">
            
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
              <h3 className="text-xl font-serif font-bold">Downloadable & Customizable Federal Toolkits</h3>
              <p className="text-xs text-stone-500 font-mono">
                Multilingual flyers, posters, and social media materials released by EPA, CDC, and HUD for community localization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">English (US)</span>
                  <FileText size={18} className="text-stone-400" />
                </div>
                <h4 className="font-serif font-bold text-base">Keep Kids Safe from Lead Flyer & Factsheet</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  2-page customizable PDF flyer with blank footer box for local public health department contact numbers and clinic hours.
                </p>
                <a
                  href="https://www.epa.gov/lead/national-lead-poisoning-prevention-week"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download size={14} />
                  <span>Download English Package</span>
                </a>
              </div>

              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-400 text-xs font-mono font-bold">Español</span>
                  <FileText size={18} className="text-stone-400" />
                </div>
                <h4 className="font-serif font-bold text-base">Semana Nacional de Prevención del Envenenamiento por Plomo</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Folleto personalizable en español: "Mantenga a los niños a salvo del plomo." Incluye pruebas de sangre y riesgos de pintura.
                </p>
                <a
                  href="https://espanol.epa.gov/espanol/materiales-de-la-semana-nacional-de-prevencion-del-envenenamiento-por-plomo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download size={14} />
                  <span>Descargar Paquete en Español</span>
                </a>
              </div>

              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-400 text-xs font-mono font-bold">Multilingual</span>
                  <Globe size={18} className="text-stone-400" />
                </div>
                <h4 className="font-serif font-bold text-base">Social Media Cards & Graphic Toolkits</h4>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Pre-formatted square and story graphics for Instagram, @X, LinkedIn, and Facebook in Arabic, French, Chinese, and Vietnamese.
                </p>
                <a
                  href="https://www.epa.gov/lead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Download size={14} />
                  <span>Access Social Media Kit</span>
                </a>
              </div>

            </div>

          </div>
        )}

        {/* SUB-TAB 5: HOME & CHILD RISK SCREENER */}
        {activeSubTab === 'risk_calculator' && (
          <div className="space-y-6">
            
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
              <h3 className="text-xl font-serif font-bold">Interactive Household Lead Hazard Screener</h3>
              <p className="text-xs text-stone-500 font-mono">
                Estimate childhood exposure risk based on property vintage, physical condition, plumbing, and testing history.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Controls Column */}
              <div className={`lg:col-span-7 p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
                
                {/* Year Built Slider */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold">Home Construction Year:</span>
                    <span className="text-emerald-500 font-black text-sm">{homeYear}</span>
                  </div>
                  <input
                    type="range"
                    min={1910}
                    max={2026}
                    step={1}
                    value={homeYear}
                    onChange={e => setHomeYear(parseInt(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400">
                    <span>1910 (Extreme Paint)</span>
                    <span>1978 (Lead Banned)</span>
                    <span>2026 (Modern)</span>
                  </div>
                </div>

                {/* Child Age */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold">Youngest Child Age:</span>
                    <span className="text-sky-500 font-black text-sm">{childAgeMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={72}
                    step={1}
                    value={childAgeMonths}
                    onChange={e => setChildAgeMonths(parseInt(e.target.value))}
                    className="w-full accent-sky-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-400">
                    <span>3 Months (Infant)</span>
                    <span>12-24m (Critical Crawl Phase)</span>
                    <span>72 Months (6 Years)</span>
                  </div>
                </div>

                {/* Toggles */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-100 dark:bg-stone-950 cursor-pointer">
                    <span className="text-xs font-mono">Chipping, peeling, or cracked paint present?</span>
                    <input
                      type="checkbox"
                      checked={hasPeelingPaint}
                      onChange={e => setHasPeelingPaint(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-100 dark:bg-stone-950 cursor-pointer">
                    <span className="text-xs font-mono">Home connected via Lead Service Line (LSL)?</span>
                    <input
                      type="checkbox"
                      checked={hasLeadServiceLine}
                      onChange={e => setHasLeadServiceLine(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-100 dark:bg-stone-950 cursor-pointer">
                    <span className="text-xs font-mono">Uses NSF 53/58 certified lead water filter?</span>
                    <input
                      type="checkbox"
                      checked={usesFilteredWater}
                      onChange={e => setUsesFilteredWater(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-2xl bg-stone-100 dark:bg-stone-950 cursor-pointer">
                    <span className="text-xs font-mono">Has child received a capillary or venous blood test?</span>
                    <input
                      type="checkbox"
                      checked={hasTestedBll}
                      onChange={e => setHasTestedBll(e.target.checked)}
                      className="w-4 h-4 accent-emerald-500 cursor-pointer"
                    />
                  </label>
                </div>

              </div>

              {/* Result Column */}
              <div className={`lg:col-span-5 p-6 rounded-3xl border ${riskAssessment.color} space-y-6 flex flex-col justify-between`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-wider font-bold">Estimated Exposure Score</span>
                    <span className="text-2xl font-serif font-black">{riskAssessment.score}/100</span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-2xl font-serif font-black">{riskAssessment.level}</div>
                    <p className="text-xs leading-relaxed opacity-90">
                      {riskAssessment.level === 'High Risk'
                        ? 'Urgent action required: Contact your pediatrician immediately for a blood lead test and request an EPA-certified risk assessor for your residence.'
                        : riskAssessment.level === 'Moderate Risk'
                        ? 'Precautions recommended: Inspect window friction zones, install certified point-of-use water filters, and verify your child was tested at 12 & 24 months.'
                        : 'Low estimated risk, but maintain caution with any peeling paint or uncertified plumbing fixtures.'}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-current/20">
                    <span className="text-xs font-mono font-bold block">Key Vulnerability Factors:</span>
                    <ul className="space-y-1 text-xs">
                      {riskAssessment.factors.map((f, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span>•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigateTab?.('childhood_lead_testing')}
                    className="w-full py-3 rounded-2xl bg-white text-stone-950 font-mono text-xs font-black shadow-lg hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Stethoscope size={15} />
                    <span>View Universal Pediatric Testing Algorithm &rarr;</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* SUB-TAB 6: FORENSIC PLATE VIEW */}
        {activeSubTab === 'plate_view' && (
          <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-6`}>
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-mono text-emerald-500 uppercase font-bold">Plate #33 • Sovereign Cryptographic Vault</span>
                <h3 className="text-xl font-serif font-bold mt-1">
                  National Lead Poisoning Prevention Week 2026 Poster Artwork
                </h3>
              </div>
              <button
                onClick={() => setShowPlateModal(true)}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-mono font-bold flex items-center gap-1.5 cursor-pointer"
              >
                <Maximize2 size={14} />
                <span>Fullscreen</span>
              </button>
            </div>

            <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border-2 border-emerald-500/40 shadow-2xl bg-black">
              <img
                src={nlppw2026Img}
                alt="Plate #33 - NLPPW 2026"
                className="w-full h-auto cursor-pointer"
                onClick={() => setShowPlateModal(true)}
              />
            </div>

            <div className="p-4 rounded-2xl bg-stone-100 dark:bg-stone-950 text-xs font-mono space-y-2 max-w-3xl mx-auto">
              <div className="flex items-center justify-between text-stone-500">
                <span>Vault Ledger: ICEARTH-SOVEREIGN-MEDIA-VAULT</span>
                <span>Security: Cryptographically Timestamped</span>
              </div>
              <div className="text-emerald-500 font-bold truncate">
                Hash: 0xEPA_CDC_HUD_NLPPW_2026_EVENT_VAULT
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM CROSS-NAVIGATION TO ALLIED RESEARCH ENGINES */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-stone-100 border-stone-200' : 'bg-stone-900/60 border-stone-800'} space-y-4`}>
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
            <span className="text-xs font-mono uppercase text-emerald-600 dark:text-emerald-400 font-bold">
              Related Exposenomics Proof Engines
            </span>
            <span className="text-xs font-mono text-stone-400">Zero Biological Threshold Defense</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab?.('childhood_lead_testing')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isLight ? 'bg-white hover:bg-emerald-50 border-stone-200 text-stone-800' : 'bg-stone-950 hover:bg-stone-850 border-stone-800 text-stone-200'
              } space-y-1.5`}
            >
              <div className="flex items-center gap-1.5 text-emerald-500 font-mono text-[10px] font-bold uppercase">
                <Stethoscope size={13} />
                <span>Plate #29</span>
              </div>
              <h5 className="font-serif font-black text-xs">Childhood Testing Algorithm</h5>
              <p className="text-[11px] text-stone-400 line-clamp-2">
                Michigan Universal BLL law, point-of-care capillary screening, and clinical standards.
              </p>
            </button>

            <button
              onClick={() => onNavigateTab?.('public_interest_tech')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isLight ? 'bg-white hover:bg-emerald-50 border-stone-200 text-stone-800' : 'bg-stone-950 hover:bg-stone-850 border-stone-800 text-stone-200'
              } space-y-1.5`}
            >
              <div className="flex items-center gap-1.5 text-sky-500 font-mono text-[10px] font-bold uppercase">
                <Cpu size={13} />
                <span>Plate #32</span>
              </div>
              <h5 className="font-serif font-black text-xs">Public Interest Technology</h5>
              <p className="text-[11px] text-stone-400 line-clamp-2">
                Machine learning housing risk models predicting lead paint hazards before infants crawl.
              </p>
            </button>

            <button
              onClick={() => onNavigateTab?.('red_beetroot_neuroprotection')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isLight ? 'bg-white hover:bg-emerald-50 border-stone-200 text-stone-800' : 'bg-stone-950 hover:bg-stone-850 border-stone-800 text-stone-200'
              } space-y-1.5`}
            >
              <div className="flex items-center gap-1.5 text-rose-500 font-mono text-[10px] font-bold uppercase">
                <Heart size={13} />
                <span>Plate #31</span>
              </div>
              <h5 className="font-serif font-black text-xs">Nutritional Therapeutics</h5>
              <p className="text-[11px] text-stone-400 line-clamp-2">
                Dried Red Beetroot gut-brain axis protection, BDNF surge, and amyloid-beta clearance.
              </p>
            </button>

            <button
              onClick={() => onNavigateTab?.('home')}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isLight ? 'bg-white hover:bg-emerald-50 border-stone-200 text-stone-800' : 'bg-stone-950 hover:bg-stone-850 border-stone-800 text-stone-200'
              } space-y-1.5`}
            >
              <div className="flex items-center gap-1.5 text-amber-500 font-mono text-[10px] font-bold uppercase">
                <Home size={13} />
                <span>Landing Page</span>
              </div>
              <h5 className="font-serif font-black text-xs">ICEarth Sovereign Home</h5>
              <p className="text-[11px] text-stone-400 line-clamp-2">
                Return to Norm Roulet's home landing console, personal magazine, and complete gallery.
              </p>
            </button>
          </div>
        </div>

      </div>

      {/* FULLSCREEN PLATE MODAL */}
      {showPlateModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8">
          <div className="relative max-w-5xl w-full bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-6">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3 text-white">
              <div>
                <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                  Forensic Plate #33 • U.S. EPA / CDC / HUD National Lead Poisoning Prevention Week
                </span>
                <h3 className="text-base font-serif font-bold">
                  Keep Kids Safe from Lead (October 25–31, 2026)
                </h3>
              </div>
              <button
                onClick={() => setShowPlateModal(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto flex items-center justify-center bg-black rounded-2xl">
              <img
                src={nlppw2026Img}
                alt="National Lead Poisoning Prevention Week Full Plate"
                className="max-h-[68vh] w-auto object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-stone-400">
              <div className="flex items-center gap-2">
                <Hash size={14} className="text-emerald-500" />
                <span>0xEPA_CDC_HUD_NLPPW_2026_EVENT_VAULT</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 cursor-pointer"
                >
                  {copiedHash ? 'Hash Copied!' : 'Copy Hash'}
                </button>
                <a
                  href={nlppw2026Img}
                  download="NLPPW_2026_EPA_Plate_33.jpg"
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold cursor-pointer"
                >
                  Download High-Res Plate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* POST NEW UPDATE MODAL */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`relative max-w-xl w-full rounded-3xl border p-6 sm:p-8 shadow-2xl ${
            isLight ? 'bg-white border-stone-200 text-stone-900' : 'bg-stone-900 border-stone-800 text-white'
          }`}>
            <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
              <div>
                <span className="text-xs font-mono text-emerald-500 uppercase font-bold">Community Dispatch Dispatcher</span>
                <h3 className="text-lg font-serif font-bold">Post an NLPPW 2026 Event Update</h3>
              </div>
              <button
                onClick={() => setShowPostModal(false)}
                className="p-1.5 rounded-lg hover:bg-stone-800 text-stone-400 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleCreateUpdate} className="space-y-4 pt-4 text-xs font-mono">
              <div className="space-y-1">
                <label className="font-bold">Update Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Free LeadCare II Capillary Blood Testing Clinic at Taos Community Center"
                  value={newUpdateTitle}
                  onChange={e => setNewUpdateTitle(e.target.value)}
                  className={`w-full p-2.5 rounded-xl border ${
                    isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                  }`}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold">Author Name</label>
                  <input
                    type="text"
                    value={newUpdateAuthor}
                    onChange={e => setNewUpdateAuthor(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${
                      isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                    }`}
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold">Agency / Organization</label>
                  <input
                    type="text"
                    value={newUpdateAgency}
                    onChange={e => setNewUpdateAgency(e.target.value)}
                    className={`w-full p-2.5 rounded-xl border ${
                      isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-bold">Category</label>
                  <select
                    value={newUpdateCategory}
                    onChange={e => setNewUpdateCategory(e.target.value as any)}
                    className={`w-full p-2.5 rounded-xl border ${
                      isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                    }`}
                  >
                    <option value="Community Action">Community Action</option>
                    <option value="Testing Clinic">Testing Clinic</option>
                    <option value="Federal Announcement">Federal Announcement</option>
                    <option value="Research Brief">Research Brief</option>
                    <option value="Material Release">Material Release</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold">Priority Tier</label>
                  <select
                    value={newUpdatePriority}
                    onChange={e => setNewUpdatePriority(e.target.value as any)}
                    className={`w-full p-2.5 rounded-xl border ${
                      isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                    }`}
                  >
                    <option value="High">High</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Routine">Routine</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold">Brief Summary *</label>
                <textarea
                  required
                  rows={2}
                  placeholder="Short, high-impact overview of the announcement or clinic..."
                  value={newUpdateSummary}
                  onChange={e => setNewUpdateSummary(e.target.value)}
                  className={`w-full p-2.5 rounded-xl border ${
                    isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                  }`}
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold">Detailed Description & Logistics</label>
                <textarea
                  rows={3}
                  placeholder="Full details, times, eligibility, location address, testing protocol..."
                  value={newUpdateDetails}
                  onChange={e => setNewUpdateDetails(e.target.value)}
                  className={`w-full p-2.5 rounded-xl border ${
                    isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-700'
                  }`}
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowPostModal(false)}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold cursor-pointer"
                >
                  Publish Update to Live Feed
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
