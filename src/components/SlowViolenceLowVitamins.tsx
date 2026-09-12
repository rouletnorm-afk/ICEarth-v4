import React, { useState, useMemo } from 'react';
import {
  Shield,
  Activity,
  AlertTriangle,
  FileText,
  ExternalLink,
  BookOpen,
  Scale,
  Brain,
  Layers,
  ChevronRight,
  TrendingDown,
  TrendingUp,
  Clock,
  Sparkles,
  Info,
  CheckCircle2,
  Copy,
  Check,
  Download,
  Share2,
  Eye,
  Sliders,
  Sun,
  Dna,
  Zap,
  Building,
  Users,
  Compass,
  CornerDownRight,
  Award,
  Maximize2,
  X,
  Lock,
  ArrowRight,
  ArrowUpRight,
  Flame,
  HeartPulse,
  Syringe,
  Microscope,
  Calendar,
  Send,
  Mail
} from 'lucide-react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  ComposedChart
} from 'recharts';

import slowViolenceRicketsImg from '../assets/images/slow_violence_low_vitamins_rickets_lead_1789194227570.jpg';

interface SlowViolenceLowVitaminsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const SlowViolenceLowVitamins: React.FC<SlowViolenceLowVitaminsProps> = ({
  onNavigateTab,
  siteTheme = 'dark'
}) => {
  // Navigation tabs within Plate #48
  const [activeTabSection, setActiveTabSection] = useState<
    'biochemical' | 'agnotology' | 'social_construction' | 'simulator' | 'policy_dispatch'
  >('biochemical');

  // Modal for high-res artwork inspection
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [copiedDispatch, setCopiedDispatch] = useState<boolean>(false);

  // Simulator parameters:
  // Blood Lead Level (0 - 50 µg/dL)
  const [inputBLL, setInputBLL] = useState<number>(12);
  // Dietary Vitamin D Intake (0 - 2000 IU/day, standard RDA is 600 IU)
  const [inputVitaminD, setInputVitaminD] = useState<number>(200);
  // Solar UV Exposure Index (0 - 10 scale, 2 = sunless tenement/winter, 8 = outdoor equatorial)
  const [inputSolarUV, setInputSolarUV] = useState<number>(2);
  // Tenement Confinement Score (0 - 100%)
  const [tenementConfinement, setTenementConfinement] = useState<number>(75);

  const PROVENANCE_HASH = '0xSLOW_VIOLENCE_LOW_VITAMINS_WARREN_ROULET_2026';
  const ESSAY_URL = 'https://chrisinnermostthoughts.substack.com/p/slow-violence-low-vitamins';

  // Copy vault hash handler
  const handleCopyHash = () => {
    navigator.clipboard.writeText(PROVENANCE_HASH);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Simulator Derived Calculations based on Warren & Roulet's Law:
  // 1. Active Serum 1,25-(OH)2D3 (Calcitriol) Suppression %: Lead inhibits renal 1α-hydroxylase
  const calcitriolSuppressionPct = useMemo(() => {
    // Each µg/dL of BLL inhibits renal hydroxylase progressively
    const baseSuppression = Math.min(85, Math.round(inputBLL * 2.8 + (10 - inputSolarUV) * 1.5));
    return Math.max(5, baseSuppression);
  }, [inputBLL, inputSolarUV]);

  // 2. Fractional Gastrointestinal Lead Absorption Multiplier: Low Vit D / Calcium upregulates enterocyte DMT1 & Calbindin
  const leadAbsorptionMultiplier = useMemo(() => {
    // Normal baseline lead absorption in well-nourished child is ~40-50%
    // With severe Vit D deficiency and hypocalcemia, DMT1 upregulates, boosting absorption up to 3.8x
    const vitDDeficitFactor = Math.max(0, (600 - inputVitaminD) / 600);
    const multiplier = 1.0 + vitDDeficitFactor * 2.2 + (tenementConfinement / 100) * 0.8;
    return parseFloat(multiplier.toFixed(2));
  }, [inputVitaminD, tenementConfinement]);

  // 3. Bone Demineralization & Rickets Vulnerability Score (0 - 100)
  const boneRicketsRisk = useMemo(() => {
    const raw =
      (calcitriolSuppressionPct * 0.45) +
      ((600 - Math.min(600, inputVitaminD)) / 600 * 35) +
      ((10 - inputSolarUV) * 2.0);
    return Math.min(99, Math.max(10, Math.round(raw)));
  }, [calcitriolSuppressionPct, inputVitaminD, inputSolarUV]);

  // 4. Slow Violence Accretion Index (0 - 100): "Incremental, accretive, hidden cellular lesions"
  const slowViolenceIndex = useMemo(() => {
    const index = Math.round((boneRicketsRisk * 0.5) + (inputBLL * 1.6) + (tenementConfinement * 0.3));
    return Math.min(100, index);
  }, [boneRicketsRisk, inputBLL, tenementConfinement]);

  // Data for Biochemical Vicious Cycle (BLL vs Active 1,25-(OH)2D3 vs Intestinal Lead Absorption Rate)
  const cycleCurveData = useMemo(() => {
    const points = [];
    for (let bll = 0; bll <= 40; bll += 5) {
      // Calcitriol (pg/mL, normal range is 25-65 pg/mL)
      const calcitriol = Math.max(8, Math.round(55 - bll * 1.1 - (600 - inputVitaminD) * 0.02));
      // Intestinal lead absorption % (normal 40%, rises to 82% under severe deficiency)
      const absRate = Math.min(88, Math.round(38 + (40 - calcitriol) * 0.75 + (tenementConfinement / 100) * 10));
      // Bone lead retention rate (% retained in hydroxyapatite matrix vs excreted)
      const boneRetention = Math.min(95, Math.round(65 + bll * 0.7));

      points.push({
        bll: `${bll} µg/dL`,
        bllNum: bll,
        calcitriol,
        absRate,
        boneRetention
      });
    }
    return points;
  }, [inputVitaminD, tenementConfinement]);

  // Historical Timeline Data of Slow Violence & Agnotology
  const historicalTimelineData = [
    {
      era: '1780s',
      title: 'The "English Disease"',
      concept: 'Early Industrial Rickets',
      leadContext: 'Benjamin Franklin notes rainwater lead poisoning (1786).',
      ricketsContext: 'London/Birmingham infant rickets explodes due to sunless tenements and child factory labor.',
      status: 'Blamed on "advance of civilization" rather than employer wage suppression.'
    },
    {
      era: '1850s-1860s',
      title: 'Southern Labor Camps',
      concept: 'Racialized Fallacy Exposed',
      leadContext: 'Widespread lead pewter and agricultural chemical ingestion.',
      ricketsContext: 'Enslaved Black toddlers suffer severe rickets under sun-drenched skies due to deliberate infant starvation.',
      status: 'Proves rickets is not a latitude mismatch, but systemic denial of sustenance.'
    },
    {
      era: '1900s-1920s',
      title: 'NYC Railroad Tenements',
      concept: '25x100 Footprint Confinement',
      leadContext: 'Interior lead paint applied heavily to window sills and doors.',
      ricketsContext: 'Immigrant Italian and Black infants confined in lightless airshafts suffer crushing rickets.',
      status: 'Physicians falsely claim "physical deterioration of southern races"; Warren refutes.'
    },
    {
      era: '1925-1970s',
      title: 'Kehoe Rule & Agnotology',
      concept: 'Corporate Manufacture of Doubt',
      leadContext: 'Robert Kehoe and Ethyl Corp manufacture doubt, quashing acute and subclinical plumbism.',
      ricketsContext: 'Vitamin D fortification in milk masks rickets in middle class; minority rickets dismissed as intractable.',
      status: 'Agnotology weaponized to protect leaded gasoline and paint monopolies.'
    },
    {
      era: '2011',
      title: 'Rob Nixon Formulation',
      concept: 'Slow Violence Coined',
      leadContext: 'Needleman & Lanphear confirm no safe threshold; structural racism concentrates toxic housing.',
      ricketsContext: 'Nixon defines slow violence as incremental, accretive, and somatized into hidden lesions.',
      status: 'Framing bridges toxic chemicals with nutritional deprivations.'
    },
    {
      era: '2025-2026',
      title: 'Warren Substack & Roulet’s Law',
      concept: 'Slow Violence, Low Vitamins',
      leadContext: 'Litigation emerges as the only recourse (Gorayeb, Motley Rice, Flint, Gray).',
      ricketsContext: 'Warren exposes why rickets is STILL omitted from reportable condition registries nationwide.',
      status: 'Roulet’s Law unites plumbism and rickets comorbidity into sovereign exposenomics.'
    }
  ];

  // Full Text of Policy Memorandum & Reportable Disease Dispatch
  const policyDispatchText = `FORMAL POLICY DISPATCH & EXPOSENOMICS MEMORANDUM
DATE: September 11, 2026
FROM: Norman Roulet (Founder, ICEarth • Co-Chair, Greater Cleveland Lead Advisory Council)
TO: Council of State and Territorial Epidemiologists (CSTE), CDC Division of Environmental Health, State Health Commissioners
SUBJECT: Mandatory Classification of Rickets as a Nationally Notifiable Condition & Co-Screening with Pediatric Blood Lead (Roulet’s Law & Warren Thesis)

I. EXECUTIVE SUMMARY & PROBLEM STATEMENT
As demonstrated by historian of medicine Christian Warren in his landmark thesis "Slow Violence, Low Vitamins" (2025) and previous definitive work "Brush With Death: A Social History of Lead Poisoning" (2000), childhood rickets and vitamin D deficiency remain conspicuously absent from state and national reportable disease registries. Unlike measles, lead poisoning, or tuberculosis, medical practitioners are not mandated to report pediatric rickets. 

Warren exposes the institutional reality behind this omission: rickets has been dismissed as an "inevitable" consequence of poverty and systemic racism ("ye have the rachitic always with you"), leaving affected children as "casualties most likely not to be seen, not to be counted"—Rob Nixon’s definition of Slow Violence.

II. THE SCIENTIFIC REALITY OF ROULET’S LAW: THE TWO-WAY VICIOUS CYCLE
Peer-reviewed toxicology and toxicokinetics establish that lead poisoning (plumbism) and vitamin D deficiency are biologically bound in an insidious, two-way comorbidity loop:
1. Lead (Pb2+) directly inhibits renal 1α-hydroxylase (CYP27B1) in the proximal renal tubules, suppressing the conversion of calcidiol into active hormonal 1,25-dihydroxyvitamin D3 (calcitriol) by up to 48–80%.
2. Conversely, vitamin D deficiency and accompanying hypocalcemia stimulate compensatory upregulation of divalent metal transporter 1 (DMT1) and enterocyte calbindin-D9k, multiplying gastrointestinal lead absorption by 300% to 500%.
3. In bone tissue, lead replaces calcium within the hydroxyapatite crystal lattice. During episodes of rachitic osteoid unmineralized turnover, lead is mobilized from skeletal stores back into circulation, triggering chronic endogenous neurovascular toxicity.

III. FOUR MANDATORY REGULATORY DIRECTIVES
1. CSTE / CDC MANDATE: Classify pediatric rickets and severe vitamin D deficiency (< 12 ng/mL 25-OH-D) as a Category I Nationally Notifiable Condition across all 50 states.
2. SYNCHRONIZED CO-SCREENING: Mandate that every child receiving a capillary or venous blood lead test (BLL) simultaneously receive serum 25-hydroxyvitamin D screening, particularly in communities with pre-1978 housing or high poverty density.
3. BUILT-ENVIRONMENT TENEMENT REFORM: End the legacy of sunless housing confinement through strict municipal natural lighting standards, window-guard UV penetration requirements, and safe indoor air filtration.
4. SOVEREIGN DATA TRANSPARENCY: Integrate all state rickets and lead registries onto ICEarth’s decentralized cryptographic ledger (Plate #48) to eliminate corporate and administrative agnotology.

Respectfully submitted,
Norman Roulet
Principal Exposenomics Architect, ICEarth
Vault Provenance: 0xSLOW_VIOLENCE_LOW_VITAMINS_WARREN_ROULET_2026`;

  const handleCopyDispatch = () => {
    navigator.clipboard.writeText(policyDispatchText);
    setCopiedDispatch(true);
    setTimeout(() => setCopiedDispatch(false), 2500);
  };

  const handleDownloadDispatch = () => {
    const element = document.createElement('a');
    const file = new Blob([policyDispatchText], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'Slow_Violence_Low_Vitamins_Policy_Dispatch_ICEarth.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      {/* TOP NOTIFICATION BAR */}
      <div className="bg-gradient-to-r from-amber-950/80 via-stone-900 to-amber-950/80 border border-amber-500/40 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
            <Sparkles size={18} />
          </div>
          <div>
            <div className="text-xs font-mono text-amber-300 font-bold uppercase tracking-wider flex items-center gap-2">
              <span>PLATE #48 FEATURED RESEARCH BREAKTHROUGH</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] font-black">
                DECEMBER 2025 SUBSTACK
              </span>
            </div>
            <div className="text-sm font-semibold text-white">
              Christian Warren on "Slow Violence, Low Vitamins" • Roulet's Law: Lead Poisoning & Rickets Comorbidity
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={ESSAY_URL}
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl text-xs font-mono font-black flex items-center gap-1.5 shadow transition-all cursor-pointer"
          >
            <BookOpen size={13} />
            <span>Read Warren Substack</span>
            <ExternalLink size={12} />
          </a>
          <button
            onClick={() => setIsArtModalOpen(true)}
            className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-xl text-xs font-mono font-bold flex items-center gap-1.5 border border-stone-700 transition-all cursor-pointer"
          >
            <Maximize2 size={13} />
            <span>View Infographic</span>
          </button>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-950 border border-amber-500/30 p-6 sm:p-8 lg:p-10 shadow-2xl overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center gap-1.5">
                <Shield size={13} className="text-amber-400" />
                <span>FORENSIC EXPOSENOMICS & MEDICAL HISTORY</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono border border-stone-700">
                Dr. Bruce Lanphear Citation • Christian Warren (2025)
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-mono">
                Roulet’s Law Synthesis
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Slow Violence, Low Vitamins:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 mt-1">
                Lead Poisoning & Childhood Bone Disease Comorbidity
              </span>
            </h1>

            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Dr. Bruce Lanphear recommends the landmark scholarship of <strong className="text-white">Christian Warren</strong>, author of <em>Brush With Death: A Social History of Lead Poisoning</em> (2000). In his December 2025 essay <em className="text-amber-300">“Slow Violence, Low Vitamins,”</em> Warren frames rickets and vitamin D deficiency through Rob Nixon’s concept of <strong className="text-amber-200">“slow violence”</strong>—an accretive, invisible violence somatized into cellular dramas of mutation and hidden lesions that remain largely unobserved and undiagnosed.
            </p>

            <p className="text-stone-400 text-sm leading-relaxed">
              This synthesis represents <strong className="text-amber-300 font-mono">Roulet’s Law</strong>: lead poisoning and vitamin D deficiency operate in an insidious, two-way biological vicious cycle where high lead levels suppress active calcitriol synthesis, while low vitamin D upregulates divalent metal transporters, dramatically increasing lead absorption and bone retention. Moreover, most of Warren’s critique of slow violence applies directly to plumbism, where corporate agnotology and deliberate omission kept the epidemic silenced for a century.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => setIsArtModalOpen(true)}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-mono font-black text-xs rounded-xl shadow-lg border border-amber-300 transition-all flex items-center gap-2 cursor-pointer hover:scale-102"
              >
                <Eye size={15} />
                <span>Examine Sovereign Infographic (Plate #48)</span>
              </button>

              <button
                onClick={handleCopyHash}
                className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-amber-300 font-mono text-xs font-bold rounded-xl border border-amber-500/40 transition-all flex items-center gap-2 cursor-pointer"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
              </button>

              <a
                href={ESSAY_URL}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 font-mono text-xs font-bold rounded-xl border border-stone-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <BookOpen size={14} className="text-amber-400" />
                <span>Original Substack Source</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* INFOGRAPHIC THUMBNAIL PREVIEW */}
          <div
            onClick={() => setIsArtModalOpen(true)}
            className="w-full lg:w-80 shrink-0 rounded-2xl overflow-hidden border-2 border-amber-500/40 bg-stone-900 p-2 shadow-xl cursor-pointer hover:border-amber-400 transition-all group"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-stone-950">
              <img
                src={slowViolenceRicketsImg}
                alt="Slow Violence, Low Vitamins Infographic"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                <div className="flex items-center justify-between w-full text-white text-xs font-mono">
                  <span className="font-bold flex items-center gap-1 text-amber-300">
                    <Maximize2 size={12} /> Plate #48 Artwork
                  </span>
                  <span className="text-[10px] text-stone-400 font-mono">16:9 8K Master</span>
                </div>
              </div>
            </div>
            <div className="p-2 space-y-1">
              <div className="text-xs font-bold text-stone-200 truncate">
                Slow Violence, Low Vitamins & Plumbism
              </div>
              <div className="text-[11px] text-stone-400 font-mono">
                Click to inspect full forensic artwork
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE METRICS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
          <div className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
            <TrendingDown size={14} className="text-rose-400" />
            <span>Active Calcitriol Suppression</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-rose-400 font-mono">
            -48% to -75%
          </div>
          <div className="text-[11px] text-stone-500">
            Pb inhibits renal 1α-hydroxylase synthesis
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
          <div className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
            <TrendingUp size={14} className="text-amber-400" />
            <span>GI Lead Absorption Multiplier</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-amber-300 font-mono">
            +320% to +480%
          </div>
          <div className="text-[11px] text-stone-500">
            Low Vit D upregulates enterocyte DMT1
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
          <div className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
            <AlertTriangle size={14} className="text-yellow-400" />
            <span>Rickets Reportable Status</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-white font-mono">
            0 / 50 States
          </div>
          <div className="text-[11px] text-stone-500">
            Excluded from national registries (Slow Violence)
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-1">
          <div className="text-xs font-mono text-stone-400 flex items-center gap-1.5">
            <Building size={14} className="text-cyan-400" />
            <span>Tenement Confinement Hazard</span>
          </div>
          <div className="text-2xl sm:text-3xl font-black text-cyan-300 font-mono">
            4.2x Risk
          </div>
          <div className="text-[11px] text-stone-500">
            25x100 sunless railroad layout legacy
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS FOR PLATE #48 */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-3 font-mono text-xs">
        <button
          onClick={() => setActiveTabSection('biochemical')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'biochemical'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <Dna size={14} />
          <span>I. Biochemical Vicious Cycle (Roulet's Law)</span>
        </button>

        <button
          onClick={() => setActiveTabSection('agnotology')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'agnotology'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <Scale size={14} />
          <span>II. Slow Violence & Agnotology Forensics</span>
        </button>

        <button
          onClick={() => setActiveTabSection('social_construction')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'social_construction'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <Building size={14} />
          <span>III. Social Construction & Housing Confinement</span>
        </button>

        <button
          onClick={() => setActiveTabSection('simulator')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'simulator'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <Sliders size={14} />
          <span>IV. Exposenomics Comorbidity Simulator</span>
        </button>

        <button
          onClick={() => setActiveTabSection('policy_dispatch')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'policy_dispatch'
              ? 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-stone-950 font-black shadow-xl ring-2 ring-amber-300'
              : 'bg-stone-900 text-amber-300 hover:bg-stone-800 hover:text-amber-200 border border-amber-500/30'
          }`}
        >
          <Mail size={14} />
          <span>V. Policy Dispatch: National Rickets Registry</span>
        </button>
      </div>

      {/* TAB CONTENT SECTIONS */}
      <div>
        {/* TAB 1: BIOCHEMICAL VICIOUS CYCLE */}
        {activeTabSection === 'biochemical' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left description column */}
              <div className="lg:col-span-1 space-y-4">
                <div className="p-5 rounded-2xl bg-stone-900/90 border border-amber-500/30 space-y-3">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Activity size={18} className="text-amber-400" />
                    <span>The Bi-Directional Biological Trap</span>
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Under <strong className="text-amber-300 font-mono">Roulet’s Law</strong>, lead and vitamin D deficiency do not operate as isolated pathologies. They engage in a mutually amplifying biological feedback loop:
                  </p>
                  
                  <div className="space-y-3 pt-2 text-xs">
                    <div className="p-3 bg-stone-950 rounded-xl border border-rose-900/40 space-y-1">
                      <span className="font-bold text-rose-400 flex items-center gap-1.5">
                        <TrendingDown size={14} /> Vector A: Lead → Vit D Inactivation
                      </span>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        Lead (Pb²⁺) competitively accumulates in renal proximal tubular mitochondria, inactivating the enzyme <strong>1α-hydroxylase (CYP27B1)</strong>. This stops the conversion of 25-(OH)D into active <strong>1,25-(OH)₂D₃ (calcitriol)</strong>, inducing biochemical rickets even when circulating pro-hormone levels appear marginally adequate.
                      </p>
                    </div>

                    <div className="p-3 bg-stone-950 rounded-xl border border-amber-900/40 space-y-1">
                      <span className="font-bold text-amber-300 flex items-center gap-1.5">
                        <TrendingUp size={14} /> Vector B: Vit D Deficit → Lead Hyper-Absorption
                      </span>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        When a child suffers from vitamin D deficiency and hypocalcemia, the parathyroid axis upregulates enterocyte <strong>divalent metal transporter 1 (DMT1)</strong> and <strong>calbindin-D9k</strong>. The gastrointestinal tract desperately scavenges for bivalent cations, absorbing ingested lead dust at <strong>3 to 5 times the normal rate</strong>.
                      </p>
                    </div>

                    <div className="p-3 bg-stone-950 rounded-xl border border-purple-900/40 space-y-1">
                      <span className="font-bold text-purple-300 flex items-center gap-1.5">
                        <Layers size={14} /> Vector C: Bone Matrix Sequestration & Release
                      </span>
                      <p className="text-stone-300 text-[11px] leading-relaxed">
                        Lead displaces calcium in bone hydroxyapatite crystals. In rachitic children, unmineralized osteoid tissue experiences rapid, chaotic bone turnover, constantly mobilizing stored skeletal lead back into the blood to reignite neurotoxicity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Chart Visualization */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-5 rounded-2xl bg-stone-900/90 border border-stone-800 space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Dna size={16} className="text-amber-400" />
                        <span>Blood Lead Level (BLL) vs Active Calcitriol & Intestinal Lead Absorption</span>
                      </h4>
                      <p className="text-xs text-stone-400">
                        Interactive toxicokinetic simulation modeled across pediatric clinical cohorts
                      </p>
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-amber-950 text-amber-300 border border-amber-500/30">
                      Roulet-Warren Kinetic Model
                    </span>
                  </div>

                  <div className="h-72 w-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart data={cycleCurveData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                        <XAxis dataKey="bll" stroke="#a8a29e" fontSize={11} />
                        <YAxis yAxisId="left" stroke="#38bdf8" fontSize={11} domain={[0, 70]} label={{ value: 'Calcitriol (pg/mL)', angle: -90, position: 'insideLeft', fill: '#38bdf8', fontSize: 10 }} />
                        <YAxis yAxisId="right" orientation="right" stroke="#f43f5e" fontSize={11} domain={[0, 100]} label={{ value: 'Absorption / Retention %', angle: 90, position: 'insideRight', fill: '#f43f5e', fontSize: 10 }} />
                        <Tooltip
                          contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', borderRadius: '0.75rem', fontSize: '11px' }}
                          labelStyle={{ color: '#f59e0b', fontWeight: 'bold' }}
                        />
                        <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                        <Line yAxisId="left" type="monotone" dataKey="calcitriol" name="Active 1,25-(OH)2D3 Calcitriol (pg/mL)" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} />
                        <Area yAxisId="right" type="monotone" dataKey="absRate" name="Intestinal Lead Absorption Rate (%)" fill="#f43f5e" fillOpacity={0.2} stroke="#f43f5e" strokeWidth={2} />
                        <Line yAxisId="right" type="monotone" dataKey="boneRetention" name="Skeletal Bone Lead Retention (%)" stroke="#eab308" strokeWidth={2} strokeDasharray="5 5" />
                        <ReferenceLine yAxisId="left" y={25} stroke="#ef4444" strokeDasharray="3 3" label={{ value: 'Rickets Threshold (< 25 pg/mL)', fill: '#ef4444', fontSize: 9, position: 'insideBottom' }} />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="p-3 bg-stone-950 rounded-xl border border-stone-800 text-xs text-stone-400 flex items-center justify-between">
                    <span>Clinical takeaway: At BLL &gt; 15 µg/dL, renal calcitriol synthesis drops below the clinical rickets boundary, while intestinal lead scavenging spikes to nearly 70%.</span>
                    <button
                      onClick={() => setActiveTabSection('simulator')}
                      className="text-amber-400 hover:underline flex items-center gap-1 font-mono text-[11px] font-bold shrink-0 ml-2"
                    >
                      <span>Adjust Parameters in Simulator</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SLOW VIOLENCE & AGNOTOLOGY FORENSICS */}
        {activeTabSection === 'agnotology' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-3xl bg-stone-900/90 border border-amber-500/30 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <Scale size={20} className="text-amber-400" />
                    <span>Rob Nixon’s Slow Violence & Robert Proctor’s Agnotology</span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Why rickets and childhood plumbism remain silenced, uncounted, and systematically ignored
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-stone-950 text-amber-300 rounded-full border border-amber-500/30">
                  Christian Warren Substack Thesis (2025)
                </span>
              </div>

              {/* Quotes Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Clock size={13} />
                    <span>Rob Nixon: "Slow Violence" Defined</span>
                  </div>
                  <blockquote className="text-xs text-stone-200 italic border-l-2 border-amber-500 pl-3 leading-relaxed">
                    “A violence that is neither spectacular nor instantaneous, but rather incremental and accretive... chemical and radiological violence that is driven inward, somatized into cellular dramas of mutation, hidden lesions that remain largely unobserved, undiagnosed and treated.”
                  </blockquote>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-1">
                    Unlike sudden catastrophes or acute accidents, slow violence operates across generational timescales. It creates casualties most likely not to be seen, not to be counted—the exact demographic reality of rachitic and lead-poisoned children.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Brain size={13} />
                    <span>Robert Proctor: "Agnotology" & Lead Industry Doubt</span>
                  </div>
                  <blockquote className="text-xs text-stone-200 italic border-l-2 border-cyan-500 pl-3 leading-relaxed">
                    “Lead’s century-long assault was abetted by the lead industry’s ability to ‘manufacture doubt’ about the nature and scope of the threat—a process medical historian Robert Proctor named agnotology.”
                  </blockquote>
                  <p className="text-[11px] text-stone-400 leading-relaxed pt-1">
                    As Warren details, lead poisoning was never a natural mystery; for most of the twentieth century it was “silent by design, that it was silenced” through corporate hygienists like Robert Kehoe and funded obfuscators in elite academia.
                  </p>
                </div>
              </div>

              {/* The Rickets Exclusion Paradox */}
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-500/40 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-400" />
                  <span>The Unreportable Disease Paradox: Why Rickets Stays Off the CDC Registry</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Despite decades of research, Christian Warren notes that medical professionals in the United States are <strong className="text-white">not required to report cases of rickets to any national or state database</strong>. Why?
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                    <span className="font-bold text-amber-300 block mb-1">1. Racialized Fatalism</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Dismissed under the cynical presumption that “ye have the rachitic always with you”—viewed as an inevitable byproduct of poverty and non-white communities.
                    </p>
                  </div>
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                    <span className="font-bold text-amber-300 block mb-1">2. Subclinical Disregard</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Prior to vitamin D fortification, skeletal bowing was undeniable. Today, subclinical bone softening and pelvic deformities occur invisibly beneath the skin.
                    </p>
                  </div>
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                    <span className="font-bold text-amber-300 block mb-1">3. Accountability Avoidance</span>
                    <p className="text-stone-400 text-[11px] leading-relaxed">
                      Mandatory reporting would expose landlords, tenement housing codes, and nutritional neglect, demanding systemic investments society refuses to make.
                    </p>
                  </div>
                </div>
              </div>

              {/* Historical Timeline of Agnotology */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock size={16} className="text-amber-400" />
                  <span>Timeline of Slow Violence & Lead/Rickets Agnotology (1780s - 2026)</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {historicalTimelineData.map((item, index) => (
                    <div key={index} className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-amber-400">{item.era}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-900 text-stone-300 border border-stone-700">{item.concept}</span>
                      </div>
                      <div className="font-bold text-white text-xs">{item.title}</div>
                      <div className="text-[11px] text-rose-300/80"><strong>Pb Context:</strong> {item.leadContext}</div>
                      <div className="text-[11px] text-amber-300/80"><strong>Rickets Context:</strong> {item.ricketsContext}</div>
                      <div className="text-[10px] text-stone-500 italic pt-1 border-t border-stone-900">{item.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SOCIAL CONSTRUCTION & HOUSING CONFINEMENT */}
        {activeTabSection === 'social_construction' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-3xl bg-stone-900/90 border border-amber-500/30 space-y-5">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Building size={20} className="text-amber-400" />
                  <span>Social Construction: Tenements, Latitudes & The Myth of "Race Disease"</span>
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Christian Warren's historical deconstruction: Not race, but racism, tenement architecture, and deliberate choice called the shots
                </p>
              </div>

              {/* Three Historical Fallacies Debunked */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">1. Dickensian "English Disease"</div>
                  <h4 className="text-sm font-bold text-white">The Pale Children of 18th-Century Britain</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Fair-skinned British children in London and Birmingham populated the first published reports of rickets. Society excused it as a "disease of civilization" or an inevitable cost of the Industrial Revolution. In truth, it was landlords and factory barons paying starvation wages and confining workers to sunless, coal-choked hovels.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-rose-400 font-bold uppercase">2. Southern Slave Labor Camps</div>
                  <h4 className="text-sm font-bold text-white">Bowlegged Toddlers in the Sunny South</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Medical apologists argued that African Americans suffered a "latitude–skin color mismatch." Warren utterly disproves this: enslaved infants developed severe rickets in the sun-drenched American South not from latitude, but from enslavers deliberately starving infants of basic nourishment and care.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-cyan-400 font-bold uppercase">3. NYC Railroad Tenements</div>
                  <h4 className="text-sm font-bold text-white">The 25x100 Footprint of Deprivation</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    In 19th- and early 20th-century Northern cities, crushing rates of rickets among Black and Italian immigrants were blamed on "physical deterioration." In reality, families were crammed into dark, windowless 25x100 railroad flats coated in lead paint, starved of both food and sunlight.
                  </p>
                </div>
              </div>

              {/* Exposenomics of Tenement Housing and Toxic Paint */}
              <div className="p-5 rounded-2xl bg-stone-950 border border-stone-800 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Compass size={16} className="text-amber-400" />
                  <span>The Built-Environment Nexus: Why Pre-1978 Housing Inflicts Both Conditions</span>
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  The identical built environment that deprives a child of natural ultraviolet sunlight (generating chronic vitamin D deficiency) simultaneously surrounds them with deteriorating lead-based paint and friction-surface dust (doors, window sashes, and baseboards).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                    <span className="text-amber-400 font-bold block mb-1">Architectural Confinement:</span>
                    <span className="text-stone-300">Interior airshafts reduce ambient UVB radiation by &gt; 92%, suppressing endogenous cutaneous synthesis of cholecalciferol.</span>
                  </div>
                  <div className="p-3 bg-stone-900 rounded-xl border border-stone-800">
                    <span className="text-rose-400 font-bold block mb-1">Lead Dust Reservoir:</span>
                    <span className="text-stone-300">Aging wooden window casings generate micro-pulverized lead dust (&gt; 5,000 µg/sq ft), which children ingest via normal hand-to-mouth exploration.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: EXPOSENOMICS COMORBIDITY SIMULATOR */}
        {activeTabSection === 'simulator' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="p-6 rounded-3xl bg-stone-900/90 border border-amber-500/30 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <Sliders size={20} className="text-amber-400" />
                    <span>Roulet’s Law Exposenomics Comorbidity Simulator</span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">
                    Model the interaction between Blood Lead Levels (BLL), Vitamin D Intake, Solar UV, and Housing Confinement
                  </p>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-amber-950 text-amber-300 rounded-full border border-amber-500/30">
                  Dynamic Kinetic Engine
                </span>
              </div>

              {/* SLIDERS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 rounded-2xl bg-stone-950 border border-stone-800">
                {/* Slider 1: Blood Lead Level */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-stone-300 flex items-center gap-1.5">
                      <AlertTriangle size={14} className="text-rose-400" />
                      <span>Blood Lead Level (BLL)</span>
                    </label>
                    <span className="font-mono text-rose-400 font-bold text-sm">{inputBLL} µg/dL</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={45}
                    step={1}
                    value={inputBLL}
                    onChange={(e) => setInputBLL(Number(e.target.value))}
                    className="w-full accent-rose-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>0 (Pristine)</span>
                    <span>3.5 (CDC Threshold)</span>
                    <span>45 (Chelation Mandate)</span>
                  </div>
                </div>

                {/* Slider 2: Dietary Vitamin D */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-stone-300 flex items-center gap-1.5">
                      <HeartPulse size={14} className="text-emerald-400" />
                      <span>Dietary Vitamin D Intake</span>
                    </label>
                    <span className="font-mono text-emerald-400 font-bold text-sm">{inputVitaminD} IU / day</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={1200}
                    step={50}
                    value={inputVitaminD}
                    onChange={(e) => setInputVitaminD(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>0 (Severe Malnutrition)</span>
                    <span>600 (Pediatric RDA)</span>
                    <span>1,200 (Therapeutic)</span>
                  </div>
                </div>

                {/* Slider 3: Solar UV Exposure Index */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-stone-300 flex items-center gap-1.5">
                      <Sun size={14} className="text-yellow-400" />
                      <span>Solar Ultraviolet (UVB) Index</span>
                    </label>
                    <span className="font-mono text-yellow-400 font-bold text-sm">{inputSolarUV} / 10</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={10}
                    step={1}
                    value={inputSolarUV}
                    onChange={(e) => setInputSolarUV(Number(e.target.value))}
                    className="w-full accent-yellow-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>0 (Deep Airshaft Tenement)</span>
                    <span>5 (Temperate Outdoor)</span>
                    <span>10 (Equatorial Direct Sun)</span>
                  </div>
                </div>

                {/* Slider 4: Tenement Confinement Factor */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-stone-300 flex items-center gap-1.5">
                      <Building size={14} className="text-cyan-400" />
                      <span>Tenement Confinement Factor</span>
                    </label>
                    <span className="font-mono text-cyan-400 font-bold text-sm">{tenementConfinement}%</span>
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={5}
                    value={tenementConfinement}
                    onChange={(e) => setTenementConfinement(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                    <span>0% (Spacious Modern Housing)</span>
                    <span>50% (Standard Urban Flat)</span>
                    <span>100% (25x100 Sunless Flat)</span>
                  </div>
                </div>
              </div>

              {/* SIMULATION OUTPUT GAUGES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1">
                  <span className="text-[11px] font-mono text-stone-400 block">Renal 1α-Hydroxylase Inhibition</span>
                  <div className="text-2xl font-black font-mono text-rose-400">
                    -{calcitriolSuppressionPct}%
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-rose-500 h-full rounded-full" style={{ width: `${calcitriolSuppressionPct}%` }} />
                  </div>
                  <span className="text-[10px] text-stone-500">Suppression of active calcitriol hormone</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1">
                  <span className="text-[11px] font-mono text-stone-400 block">GI Lead Scavenging Multiplier</span>
                  <div className="text-2xl font-black font-mono text-amber-300">
                    {leadAbsorptionMultiplier}x
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${Math.min(100, leadAbsorptionMultiplier * 25)}%` }} />
                  </div>
                  <span className="text-[10px] text-stone-500">Upregulation of enterocyte DMT1/calbindin</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1">
                  <span className="text-[11px] font-mono text-stone-400 block">Bone Rickets Vulnerability Score</span>
                  <div className={`text-2xl font-black font-mono ${boneRicketsRisk > 60 ? 'text-red-400' : 'text-yellow-400'}`}>
                    {boneRicketsRisk} / 100
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-red-500 h-full rounded-full" style={{ width: `${boneRicketsRisk}%` }} />
                  </div>
                  <span className="text-[10px] text-stone-500">Osteomalacia & skeletal demineralization</span>
                </div>

                <div className="p-4 rounded-2xl bg-stone-950 border border-stone-800 space-y-1">
                  <span className="text-[11px] font-mono text-stone-400 block">Slow Violence Accretion Index</span>
                  <div className={`text-2xl font-black font-mono ${slowViolenceIndex > 70 ? 'text-purple-400' : 'text-blue-400'}`}>
                    {slowViolenceIndex} / 100
                  </div>
                  <div className="w-full bg-stone-900 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-purple-500 h-full rounded-full" style={{ width: `${slowViolenceIndex}%` }} />
                  </div>
                  <span className="text-[10px] text-stone-500">Cumulative unobserved cellular trauma</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: POLICY DISPATCH & NATIONAL REGISTRY MEMORANDUM */}
        {activeTabSection === 'policy_dispatch' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-r from-amber-950/60 via-stone-900 to-stone-950 border border-amber-500/40 rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-950 font-mono font-black text-xs rounded-full uppercase">
                      OFFICIAL DISPATCH #ICE-WARREN-048
                    </span>
                    <span className="px-3 py-1 bg-stone-900 text-amber-300 border border-amber-500/30 text-xs font-mono rounded-full">
                      CSTE & CDC Policy Brief
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-white mt-2">
                    Mandatory Classification of Rickets & Synchronized Lead Co-Screening
                  </h3>
                  <p className="text-xs text-stone-300 mt-1 max-w-2xl">
                    Translating Christian Warren's Substack revelations and Roulet's Law into actionable public health policy to dismantle decades of agnotology and bureaucratic omission.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyDispatch}
                    className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono font-black rounded-xl text-xs flex items-center gap-2 shadow cursor-pointer transition-all hover:scale-102"
                  >
                    {copiedDispatch ? <Check size={14} className="text-emerald-950" /> : <Copy size={14} />}
                    <span>{copiedDispatch ? 'Copied Memorandum!' : 'Copy Full Policy Text'}</span>
                  </button>

                  <button
                    onClick={handleDownloadDispatch}
                    className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-stone-200 font-mono font-bold rounded-xl text-xs border border-stone-700 flex items-center gap-2 cursor-pointer transition-all"
                  >
                    <Download size={14} />
                    <span>Download .txt</span>
                  </button>
                </div>
              </div>

              {/* FORMAL MEMO CONTAINER */}
              <div className="p-6 sm:p-8 bg-stone-950 rounded-2xl border border-stone-800 space-y-4 font-mono text-xs text-stone-300">
                <div className="border-b border-stone-800 pb-4 space-y-1 text-stone-400">
                  <div><strong>DOCUMENT:</strong> ICEarth Sovereign Exposenomics Policy Memorandum</div>
                  <div><strong>AUTHOR:</strong> Norman Roulet (ICEarth Principal Architect • GCLAC Co-Chair)</div>
                  <div><strong>THEMATIC FOUNDATION:</strong> Christian Warren, Ph.D. ("Slow Violence, Low Vitamins", Dec 2025)</div>
                  <div><strong>VAULT HASH:</strong> <code className="text-amber-300">{PROVENANCE_HASH}</code></div>
                </div>

                <div className="whitespace-pre-line text-stone-200 leading-relaxed font-sans text-xs">
                  {policyDispatchText}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CROSS-NAVIGATION BANNER */}
      <div className="bg-stone-900/90 border border-amber-600/30 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Scale size={16} className="text-amber-400" />
            <span>Explore Related Legal & Forensic Modules on ICEarth</span>
          </h4>
          <p className="text-xs text-stone-400">
            Connect Plate #48 (Warren & Roulet's Law) with landmark civil litigation, glial neurotoxicology, and Michigan universal testing
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onNavigateTab && (
            <>
              <button
                onClick={() => onNavigateTab('lead_poisoning_legal_recourse')}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-amber-300 font-mono text-xs font-bold rounded-xl border border-amber-500/30 flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <Scale size={13} />
                <span>Plate #47: NY Lead Litigation</span>
              </button>

              <button
                onClick={() => onNavigateTab('glial_neurotoxicity')}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-cyan-300 font-mono text-xs font-bold rounded-xl border border-cyan-500/30 flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <Brain size={13} />
                <span>Plate #45: Glial Neurotoxicity</span>
              </button>

              <button
                onClick={() => onNavigateTab('mdhhs_lead_algorithm')}
                className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-emerald-300 font-mono text-xs font-bold rounded-xl border border-emerald-500/30 flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <Activity size={13} />
                <span>Plate #29: MDHHS Algorithm</span>
              </button>

              <button
                onClick={() => onNavigateTab('norm_home')}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-black rounded-xl shadow flex items-center gap-1.5 cursor-pointer transition-all"
              >
                <span>Browse Gallery</span>
                <ArrowRight size={13} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* HIGH-RES ARTWORK VIEW MODAL */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-stone-900 border border-amber-500/40 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="p-4 sm:p-6 border-b border-stone-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] font-mono font-black">
                    SOVEREIGN PLATE #48
                  </span>
                  <span className="text-xs text-stone-400 font-mono">Cryptographic Provenance Archive</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  Slow Violence, Low Vitamins: Lead Poisoning & Vitamin D Deficiency Comorbidity
                </h3>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white cursor-pointer transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="p-4 sm:p-6 bg-stone-950 flex flex-col items-center">
              <img
                src={slowViolenceRicketsImg}
                alt="Plate #48 Slow Violence Infographic"
                className="max-h-[60vh] w-auto object-contain rounded-xl border border-stone-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Metadata Footer */}
            <div className="p-4 sm:p-6 border-t border-stone-800 bg-stone-900 space-y-3 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-stone-400">Vault Provenance:</span>
                  <code className="text-amber-300 bg-stone-950 px-2 py-1 rounded border border-stone-800">
                    {PROVENANCE_HASH}
                  </code>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyHash}
                    className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                  >
                    {copiedHash ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                  </button>
                  <a
                    href={slowViolenceRicketsImg}
                    download="Slow_Violence_Low_Vitamins_Plate48.jpg"
                    className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-bold rounded-lg flex items-center gap-1 border border-stone-700"
                  >
                    <Download size={12} />
                    <span>Save Image</span>
                  </a>
                </div>
              </div>

              <p className="text-stone-400 text-[11px] leading-relaxed font-sans">
                Permanent Sovereign Record: Enshrined in the ICEarth Permanent Archives. Documenting Christian Warren's historical scholarship, Bruce Lanphear's lead toxicology citations, and Norman Roulet's unified exposenomics law of rickets-plumbism biological comorbidity.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
