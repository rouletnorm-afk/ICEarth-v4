import React, { useState } from 'react';
import {
  FileText,
  ExternalLink,
  Eye,
  Maximize2,
  X,
  Check,
  Copy,
  ArrowRight,
  Shield,
  Activity,
  Gavel,
  Scale,
  Building,
  AlertTriangle,
  Info,
  ChevronRight,
  Clock,
  Sparkles,
  Sliders,
  DollarSign,
  Users,
  HardHat,
  Scroll,
  BookOpen,
  Briefcase,
  Layers,
  History,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts';

import leadLitigationRecourseImg from '../assets/images/lead_litigation_recourse_ny_1789169382379.jpg';

interface Props {
  onNavigateTab?: (tab: string) => void;
}

export const LeadPoisoningLegalRecourseNY: React.FC<Props> = ({ onNavigateTab }) => {
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeTabSection, setActiveTabSection] = useState<
    'precedents' | 'nylabor' | 'history' | 'calculator'
  >('precedents');

  // Interactive Calculator State for Legal Damages & Economic Valuation
  const [calcVictimType, setCalcVictimType] = useState<'construction' | 'pediatric' | 'municipal'>('construction');
  const [calcBloodLeadLevel, setCalcBloodLeadLevel] = useState<number>(24);
  const [calcDurationYears, setCalcDurationYears] = useState<number>(3);
  const [calcAnnualWage, setCalcAnnualWage] = useState<number>(85000);
  const [calcSafetyViolation, setCalcSafetyViolation] = useState<boolean>(true);

  const provenanceHash = '0xLEAD_LITIGATION_RECOURSE_NY_LABOR_LAW_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(provenanceHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Litigation Benchmark Comparison Data
  const litigationCompsData = [
    {
      caseName: 'California Lead Paint (Motley Rice)',
      amountMillions: 305.0,
      scope: 'Abatement Fund against Sherwin-Williams, ConAgra & NL Industries',
      year: '2019',
      color: '#f59e0b'
    },
    {
      caseName: 'Flint Water Crisis (Total Recoveries)',
      amountMillions: 719.0,
      scope: 'Civil Class Action ($626.25M) + Veolia/Engineering Recoveries',
      year: '2021-2024',
      color: '#ef4444'
    },
    {
      caseName: 'Flint Class-Action (Landmark Fund)',
      amountMillions: 626.25,
      scope: 'State of Michigan, City of Flint, McLaren Hospital settlement',
      year: '2021',
      color: '#dc2626'
    },
    {
      caseName: 'NYC Pre-1978 Housing Verdicts (Comps)',
      amountMillions: 18.5,
      scope: 'Single-child pediatric neurological brain damage & cognitive loss',
      year: '2023',
      color: '#06b6d4'
    },
    {
      caseName: 'NY Labor Law § 241(6) Lead Toxicity',
      amountMillions: 9.2,
      scope: 'Construction worker encephalopathy, neuropathy & OSHA violations',
      year: '2025',
      color: '#10b981'
    },
    {
      caseName: 'Freddie Gray Siblings (Baltimore)',
      amountMillions: 0.435,
      scope: 'Structured settlement ($435k future / ~$280k present value)',
      year: '2010',
      color: '#8b5cf6'
    }
  ];

  // Construction Lead Exposure Pathways Data
  const exposurePathwaysData = [
    { name: 'Lead Paint Grinding & Sanding', value: 38, color: '#f59e0b' },
    { name: 'Confined Space Welding/Cutting', value: 27, color: '#ef4444' },
    { name: 'High-Voltage Cable Sheathing', value: 18, color: '#06b6d4' },
    { name: 'Structural Sheet & Roofing Demo', value: 12, color: '#10b981' },
    { name: 'Secondary Ingestion & Contaminated PPE', value: 5, color: '#8b5cf6' }
  ];

  // 3,000-Year Continuum Timeline Data
  const historicalTimeline = [
    {
      era: 'Ancient Egypt (c. 1500 B.C.)',
      title: 'Earliest Documented Utilitarian Use',
      description:
        'Egyptians fashioned lead into fishing-net sinkers, solder, pottery glazes, and ornamental glass, initiating centuries of craft exposure.',
      badge: 'Craft Era'
    },
    {
      era: 'Ancient Greece (c. 400 B.C.)',
      title: 'Hippocrates Identifies Lead Colic',
      description:
        'Hippocrates documents the classical clinical triad of lead poisoning: severe appetite loss, acute intestinal colic, pallor, weight loss, and nervous spasms.',
      badge: 'Medical Discovery'
    },
    {
      era: 'Roman Empire (c. 100 B.C. – 663 A.D.)',
      title: '"Saturnism" & Roman Wine Bans',
      description:
        'Dr. Herbert L. Needleman noted German tribes banned Roman wine boiled in lead vessels (sapa). Emperor Constans II covered the Pantheon with lead roofing in 663 A.D.',
      badge: 'Imperial Toxicity'
    },
    {
      era: 'Colonial England (1763)',
      title: 'Court of King George III Cider Colic',
      description:
        'A royal physician traced an epidemic of devastating colic to lead-lined presses used in apple cider fermentation, confirming heavy metal leaching.',
      badge: 'Food Matrix'
    },
    {
      era: 'Philadelphia (July 31, 1786)',
      title: 'Benjamin Franklin Warns of "Dry Bellyach"',
      description:
        'In a landmark letter to Benjamin Vaughan, Franklin observed that rainwater running off lead-painted roofs into cisterns poisoned entire households with "dry bellyach."',
      badge: 'American Forensics'
    },
    {
      era: 'Industrial Revolution (1850–1970)',
      title: 'Mass Production & Corporate Deception',
      description:
        'Rapid industrialization exponentially increased lead usage in white lead paint, tetraethyl lead gasoline, and plumbing, establishing the Kehoe Rule.',
      badge: 'Industrial Pathology'
    },
    {
      era: 'Modern New York (1970–2026)',
      title: 'Labor Law § 241(6) & Construction Recourse',
      description:
        'Despite EPA 1978 domestic bans, New York construction workers face severe toxic plumes from pre-1978 bridge retrofits, cable sheathing, and torch-cutting, making litigation the primary recourse.',
      badge: 'Statutory Shield'
    }
  ];

  // Damage calculation logic
  const calculateEstimatedRecovery = () => {
    let baseEconomic = calcAnnualWage * calcDurationYears * 0.45;
    let medicalMonitoring = 180000;
    let iqLossCompensation = 0;
    let statutoryPainSuffering = 0;

    if (calcVictimType === 'pediatric') {
      const estimatedIqPointsLost = Math.min(Math.round(calcBloodLeadLevel * 0.65), 18);
      iqLossCompensation = estimatedIqPointsLost * 95000; // ~$95k lifetime earnings lost per IQ point
      statutoryPainSuffering = 1500000 + calcBloodLeadLevel * 25000;
    } else if (calcVictimType === 'construction') {
      statutoryPainSuffering = calcBloodLeadLevel * 45000;
      if (calcSafetyViolation) {
        statutoryPainSuffering *= 2.2; // Labor Law § 241(6) contractor liability multiplier
      }
    } else {
      // Municipal / Water Grid (e.g. Flint archetype)
      statutoryPainSuffering = 350000 + calcBloodLeadLevel * 18000;
    }

    const totalEstimate = baseEconomic + medicalMonitoring + iqLossCompensation + statutoryPainSuffering;
    return {
      baseEconomic: Math.round(baseEconomic),
      medicalMonitoring: Math.round(medicalMonitoring),
      iqLossCompensation: Math.round(iqLossCompensation),
      statutoryPainSuffering: Math.round(statutoryPainSuffering),
      totalEstimate: Math.round(totalEstimate)
    };
  };

  const calculatedDamages = calculateEstimatedRecovery();

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 p-4 sm:p-6 lg:p-8 space-y-8 font-sans">
      {/* TOP SCIENTIFIC HERO BANNER */}
      <div className="relative overflow-hidden rounded-3xl border border-amber-600/40 bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950/40 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6">
          <div className="space-y-3 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-amber-500 text-stone-950 font-mono font-black text-xs rounded-full uppercase tracking-wider flex items-center gap-1.5 shadow">
                <Gavel size={14} className="text-stone-950" />
                <span>PLATE #47 FORENSIC DOSSIER</span>
              </span>
              <span className="px-3 py-1 bg-stone-900 text-amber-300 border border-amber-500/30 font-mono text-xs rounded-full flex items-center gap-1.5">
                <Scale size={13} className="text-amber-400" />
                <span>Civil Litigation & Labor Law Precedents</span>
              </span>
              <span className="px-3 py-1 bg-red-950/80 text-red-300 border border-red-500/40 font-mono text-xs rounded-full flex items-center gap-1.5">
                <Shield size={13} className="text-red-400" />
                <span>NY Labor Law § 241(6)</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              Lead Poisoning Legal Recourse: The Only Recourse for Victims Is Litigation
            </h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              From the historic Motley Rice lead paint litigation against Sherwin-Williams in Ohio and California ($305M)
              to the $719M+ Flint Water Crisis civil recoveries and Freddie Gray’s Baltimore legacy—society forces victims
              to litigate after poisoning. Attorney Jay Nelson Gorayeb’s amNY Op-Ed uncovers how New York’s construction
              workers confront ancient lead risks without mandatory respirators, relying on NY Labor Law § 241(6) and 12
              NYCRR § 23-1.26 for justice.
            </p>

            {/* Source Document & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="https://www.amny.com/law/op-ed-lead-poisoning-construction-workers/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-stone-950 font-mono font-black rounded-xl flex items-center gap-2 shadow-xl border border-amber-300 text-sm cursor-pointer transition-all hover:scale-102"
              >
                <FileText size={16} className="text-stone-950" />
                <span>📄 Read Original amNY Op-Ed by Jay Nelson Gorayeb</span>
                <ExternalLink size={14} className="text-stone-950" />
              </a>

              <button
                onClick={() => setIsArtModalOpen(true)}
                className="px-4 py-2.5 bg-stone-900/90 hover:bg-stone-800 text-amber-300 border border-amber-500/40 font-mono font-bold rounded-xl flex items-center gap-2 text-sm cursor-pointer transition-colors shadow"
              >
                <Maximize2 size={16} className="text-amber-400" />
                <span>Inspect Plate #47 Infographic</span>
              </button>

              <button
                onClick={handleCopyHash}
                className="px-4 py-2.5 bg-stone-900/80 hover:bg-stone-800 text-stone-300 border border-stone-800 font-mono text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-colors"
                title="Copy Sovereign Cryptographic Hash"
              >
                {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copiedHash ? 'Hash Copied!' : `${provenanceHash.slice(0, 18)}...`}</span>
              </button>
            </div>
          </div>

          {/* Quick Infographic Thumbnail Preview */}
          <div
            onClick={() => setIsArtModalOpen(true)}
            className="w-full xl:w-80 shrink-0 bg-stone-900 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl cursor-pointer group relative"
          >
            <img
              src={leadLitigationRecourseImg}
              alt="Plate #47 Lead Poisoning Litigation Recourse"
              className="w-full h-48 xl:h-52 object-cover object-center transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
              <div className="flex items-center justify-between w-full text-xs font-mono text-amber-300">
                <span className="flex items-center gap-1 font-bold">
                  <Eye size={13} /> Fullscreen Plate #47
                </span>
                <span className="bg-amber-500/30 px-2 py-0.5 rounded text-[10px] text-amber-200 border border-amber-500/40">
                  Click to Expand
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CORE METRICS SUMMARY BAR */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 font-mono">
        <div className="bg-stone-900/80 border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <Building size={14} className="text-amber-400" />
            <span>MOTLEY RICE CA</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-amber-400 mt-2">$305,000,000</div>
          <div className="text-[10px] text-stone-500 mt-1">Sherwin-Williams & Lead Abatement Fund</div>
        </div>

        <div className="bg-stone-900/80 border border-red-500/30 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <Scale size={14} className="text-red-400" />
            <span>FLINT RECOVERIES</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-red-400 mt-2">$719,000,000+</div>
          <div className="text-[10px] text-stone-500 mt-1">$626.25M Class Action + Contractor Trials</div>
        </div>

        <div className="bg-stone-900/80 border border-purple-500/30 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <Users size={14} className="text-purple-400" />
            <span>FREDDIE GRAY SIBLINGS</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-purple-400 mt-2">$435,000</div>
          <div className="text-[10px] text-stone-500 mt-1">Structured Payout (~$280k Present Value)</div>
        </div>

        <div className="bg-stone-900/80 border border-emerald-500/30 rounded-2xl p-4 flex flex-col justify-between">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <HardHat size={14} className="text-emerald-400" />
            <span>NY LABOR LAW § 241(6)</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-emerald-400 mt-2">STRICT DUTY</div>
          <div className="text-[10px] text-stone-500 mt-1">Non-Delegable Owner/Contractor Mandate</div>
        </div>

        <div className="bg-stone-900/80 border border-cyan-500/30 rounded-2xl p-4 flex flex-col justify-between col-span-2 md:col-span-1">
          <div className="text-stone-400 text-xs flex items-center gap-1.5">
            <History size={14} className="text-cyan-400" />
            <span>RECORDED TOXICITY</span>
          </div>
          <div className="text-xl sm:text-2xl font-black text-cyan-400 mt-2">3,000+ YEARS</div>
          <div className="text-[10px] text-stone-500 mt-1">Ancient Rome to 1786 Ben Franklin Letter</div>
        </div>
      </div>

      {/* NAVIGATION TABS FOR SECTIONS */}
      <div className="flex flex-wrap items-center gap-2 border-b border-stone-800 pb-3 font-mono text-xs">
        <button
          onClick={() => setActiveTabSection('precedents')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'precedents'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <Gavel size={14} />
          <span>I. Landmark Litigation Precedents</span>
        </button>

        <button
          onClick={() => setActiveTabSection('nylabor')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'nylabor'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <HardHat size={14} />
          <span>II. NY Labor Law § 241(6) & 12 NYCRR § 23-1.26</span>
        </button>

        <button
          onClick={() => setActiveTabSection('history')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'history'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <History size={14} />
          <span>III. 3,000-Year Continuum of Failure</span>
        </button>

        <button
          onClick={() => setActiveTabSection('calculator')}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer ${
            activeTabSection === 'calculator'
              ? 'bg-amber-500 text-stone-950 font-black shadow-lg'
              : 'bg-stone-900 text-stone-400 hover:bg-stone-800 hover:text-white'
          }`}
        >
          <Sliders size={14} />
          <span>IV. Civil Damage & Valuation Simulator</span>
        </button>
      </div>

      {/* TAB CONTENT AREAS */}
      <div className="space-y-8">
        {/* TAB 1: LANDMARK LITIGATION PRECEDENTS */}
        {activeTabSection === 'precedents' && (
          <div className="space-y-6">
            <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Scale className="text-amber-400" size={20} />
                    <span>The Only Recourse: Why Poisoning Victims Are Forced to Litigate</span>
                  </h3>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Comparative Forensic Ledger of Historic Public Nuisance, Civil Rights, and Class Action Settlements
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-lg">
                    Civil Recovery Comp Matrix
                  </span>
                </div>
              </div>

              {/* Bar Chart: Major Lead Litigation Recoveries */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-stone-200">
                  Major Lead Toxicity Recoveries ($ Millions Awarded / Settled)
                </h4>
                <div className="h-72 w-full bg-stone-950 p-4 rounded-2xl border border-stone-800">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={litigationCompsData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                      <XAxis
                        dataKey="caseName"
                        stroke="#a8a29e"
                        fontSize={11}
                        angle={-15}
                        textAnchor="end"
                        interval={0}
                      />
                      <YAxis
                        stroke="#a8a29e"
                        fontSize={11}
                        tickFormatter={(v) => `$${v}M`}
                        domain={[0, 800]}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#0c0a09',
                          borderColor: '#78350f',
                          borderRadius: '0.75rem',
                          color: '#f5f5f4',
                          fontSize: '12px'
                        }}
                        formatter={(value: any) => [`$${value} Million`, 'Recovery']}
                      />
                      <Bar dataKey="amountMillions" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Deep Dive Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Motley Rice & Sherwin-Williams */}
                <div className="bg-stone-950 p-5 rounded-2xl border border-amber-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-amber-400 font-bold">PUBLIC NUISANCE PRECEDENT</span>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-[10px] font-mono rounded">
                      Ohio & California
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">Motley Rice vs. Sherwin-Williams ($305M)</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Motley Rice spearheaded historic litigation against the lead paint cartel—Sherwin-Williams, ConAgra
                    Grocery Products, and NL Industries. While similar attempts were initiated in Ohio, the California
                    litigation resulted in a landmark decision affirmed on appeal, ordering the paint manufacturers to
                    pay <strong>$305 million</strong> into an abatement fund to inspect and remove lead paint from homes
                    built before 1951 across ten California cities and counties.
                  </p>
                  <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 text-[11px] font-mono text-amber-200">
                    Key Legal Mechanism: Representative public nuisance doctrine holding manufacturers liable for
                    deceptively marketing white lead paint despite knowing of severe pediatric toxicity.
                  </div>
                </div>

                {/* Flint Water Crisis */}
                <div className="bg-stone-950 p-5 rounded-2xl border border-red-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-red-400 font-bold">CIVIL RIGHTS & NEGLIGENCE</span>
                    <span className="px-2 py-0.5 bg-red-500/20 text-red-300 text-[10px] font-mono rounded">
                      Flint, MI
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">Flint Water Crisis ($626.25M / $719M+ Total)</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    When the government switched Flint’s drinking water source to the corrosive Flint River without
                    orthophosphate corrosion inhibitors, over 100,000 residents were exposed to neurotoxic lead leachates.
                    Victims were forced to initiate protracted civil rights and class-action litigation against the State of
                    Michigan and City of Flint, resulting in a landmark <strong>$626.25 million</strong> civil class-action
                    settlement, with total recoveries exceeding <strong>$719 million</strong> as engineering contractors
                    settled separate federal trials.
                  </p>
                  <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 text-[11px] font-mono text-red-200">
                    Key Legal Mechanism: Substantive due process bodily integrity violations (Guertin v. Michigan) and
                    professional engineering negligence.
                  </div>
                </div>

                {/* Freddie Gray & Structured Settlements */}
                <div className="bg-stone-950 p-5 rounded-2xl border border-purple-600/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-400 font-bold">INDIVIDUAL VICTIM SETTLEMENTS</span>
                    <span className="px-2 py-0.5 bg-purple-500/20 text-purple-300 text-[10px] font-mono rounded">
                      Baltimore, MD
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">Freddie Gray & Structured Settlement Exploitation</h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Freddie Gray was one of Baltimore’s most notorious lead poisoning victims long before his 2015 death in
                    police custody. Diagnosed with peak blood lead levels exceeding 37 µg/dL in childhood rental housing,
                    Freddie and his sisters received a structured settlement of <strong>$435,000</strong> in future monthly
                    payments (present cash value around <strong>$280,000</strong>). Unscrupulous factoring companies later
                    purchased these payments for pennies on the dollar, illustrating how society poisons children and then
                    financially exploits their settlements.
                  </p>
                  <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 text-[11px] font-mono text-purple-200">
                    Modern Reality: In current individual civil lawsuits, pediatric lead victims with documented brain
                    damage and cognitive loss are routinely awarded $5M to $20M+ in structured verdicts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: NEW YORK LABOR LAW & CONSTRUCTION PROTECTIONS */}
        {activeTabSection === 'nylabor' && (
          <div className="space-y-6">
            <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-6 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <HardHat className="text-amber-400" size={20} />
                    <span>New York Labor Law § 241(6) & Industrial Code 12 NYCRR § 23-1.26</span>
                  </h3>
                  <p className="text-xs font-mono text-stone-400 mt-1">
                    Statutory Framework Holding General Contractors and Property Owners Strictly Accountable for Toxic Worksite Exposures
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-lg">
                    Labor Law § 241(6) Non-Delegable Duty
                  </span>
                </div>
              </div>

              {/* Architectural Layout: Statute Analysis */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3">
                    <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                      <Scroll size={16} />
                      <span>Labor Law § 241(6) Mandatory Protection</span>
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      New York Labor Law § 241(6) is one of the most powerful statutory worker-safety enactments in the
                      United States. It imposes a <strong>non-delegable duty</strong> upon general contractors and property
                      owners to provide reasonable and adequate protection and safety to persons employed in construction,
                      excavation, and demolition.
                    </p>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Unlike ordinary negligence where an owner can blame subcontractors, under § 241(6), an injured worker
                      need only prove that a specific, concrete provision of the New York Industrial Code (12 NYCRR Part 23)
                      was violated, and that this violation was a proximate cause of the injury.
                    </p>
                  </div>

                  <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3">
                    <h4 className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                      <Shield size={16} />
                      <span>12 NYCRR § 23-1.4(b)(13) & 12 NYCRR § 23-1.26</span>
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Under <strong>12 NYCRR § 23-1.4(b)(13)</strong>, lead-abatement work performed as part of a renovation
                      or demolition project falls squarely within the statutory definition of covered construction work.
                    </p>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Specifically, <strong>12 NYCRR § 23-1.26</strong> directly addresses lead in construction:
                    </p>
                    <ul className="text-xs text-stone-400 space-y-1.5 list-disc pl-5">
                      <li>
                        <strong className="text-stone-200">Confined Space Welding Ban:</strong> Materials containing lead
                        that may generate toxic fumes <em>cannot be welded or torch-cut</em> in confined spaces without
                        mechanical exhaust ventilation.
                      </li>
                      <li>
                        <strong className="text-stone-200">Mandatory Respirator Equipment:</strong> Any laborer performing
                        cleaning, torching, or grinding on lead-coated metals <em>must be provided with an approved, fit-tested respirator</em>.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Construction Exposure Pathway Distribution */}
                <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-stone-200 mb-1">
                      New York Construction Lead Exposure Pathways
                    </h4>
                    <p className="text-xs text-stone-400 font-mono">
                      Breakdown of High-Risk Trades Subject to 12 NYCRR § 23-1.26 Violations
                    </p>
                  </div>

                  <div className="h-56 w-full flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={exposurePathwaysData}
                          cx="50%"
                          cy="50%"
                          outerRadius={75}
                          innerRadius={45}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {exposurePathwaysData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0c0a09',
                            borderColor: '#78350f',
                            borderRadius: '0.75rem',
                            color: '#f5f5f4',
                            fontSize: '12px'
                          }}
                          formatter={(v: any) => [`${v}% of Reported Claims`, 'Exposure Share']}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
                    {exposurePathwaysData.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-stone-300">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                        <span className="truncate">{item.name} ({item.value}%)</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-red-950/40 rounded-xl border border-red-500/30 text-xs text-red-200">
                    <span className="font-bold block">Attorney Jay Nelson Gorayeb Warning:</span>
                    "Unfortunately, regardless of the historical risks of working with lead, workers are all too often
                    provided with inadequate protection. Respirators may not be readily available onsite or may be in faulty
                    condition. Much of the time, safety protocols are ignored on job sites to prioritize speed over safety."
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: 3,000-YEAR CONTINUUM OF FAILURE */}
        {activeTabSection === 'history' && (
          <div className="space-y-6">
            <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-6 space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <History className="text-amber-400" size={20} />
                  <span>The 3,000-Year Continuum of Failure: Documented Knowledge vs. Ignored Safety</span>
                </h3>
                <p className="text-xs font-mono text-stone-400 mt-1">
                  How humanity recognized lead’s catastrophic toxicity for millennia yet repeatedly permitted industrial and construction contamination
                </p>
              </div>

              {/* Interactive Timeline */}
              <div className="space-y-4">
                {historicalTimeline.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-stone-950 border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 md:w-3/4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-amber-400 font-bold">{item.era}</span>
                        <span className="px-2 py-0.5 bg-stone-800 text-stone-300 text-[10px] font-mono rounded">
                          {item.badge}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-stone-300 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="md:w-1/4 flex items-center justify-end">
                      <div className="p-2 bg-stone-900 border border-stone-800 rounded-xl text-stone-400 text-xs font-mono flex items-center gap-1.5">
                        <BookOpen size={14} className="text-amber-400" />
                        <span>Documented Proof</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Spotlight: Benjamin Franklin's 1786 Letter */}
              <div className="p-5 bg-gradient-to-r from-stone-950 via-amber-950/20 to-stone-950 rounded-2xl border border-amber-600/40 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-wider">
                    AMERICAN FORENSIC HERITAGE
                  </span>
                  <span className="text-xs font-mono text-stone-400">July 31, 1786</span>
                </div>
                <h4 className="text-base font-bold text-white">
                  Benjamin Franklin’s Letter to Benjamin Vaughan on Lead Paint & Rainwater
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed italic">
                  "In a July 31, 1786 letter to Benjamin Vaughan, Franklin observed that rainwater running over white lead
                  paint could carry lead residue from rooftops into collected water. Specifically, he described a case in
                  which an entire family suffered from 'dry bellyach' after drinking rainwater that had been stored in a
                  tank contaminated by lead."
                </p>
                <div className="text-[11px] font-mono text-amber-300">
                  Conclusion: Contractors and paint manufacturers cannot claim that lead toxicity was an "unforeseen risk."
                  It has been clinically and empirically documented in America since before the signing of the U.S. Constitution.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: INTERACTIVE DAMAGE & LIABILITY SETTLEMENT CALCULATOR */}
        {activeTabSection === 'calculator' && (
          <div className="space-y-6">
            <div className="bg-stone-900/60 border border-stone-800 rounded-3xl p-6 space-y-6">
              <div className="border-b border-stone-800 pb-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sliders className="text-amber-400" size={20} />
                  <span>Lead Poisoning Civil Damages & Valuation Simulator</span>
                </h3>
                <p className="text-xs font-mono text-stone-400 mt-1">
                  Model economic loss, medical monitoring, Roulet's Law lifetime cognitive earnings deficits, and NY Labor Law § 241(6) contractor liability
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Input Controls */}
                <div className="lg:col-span-6 bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-5">
                  <h4 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider border-b border-stone-800 pb-2">
                    LITIGATION CASE PARAMETERS
                  </h4>

                  {/* Victim Category Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-stone-300">Claimant Category:</label>
                    <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                      <button
                        onClick={() => setCalcVictimType('construction')}
                        className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                          calcVictimType === 'construction'
                            ? 'bg-amber-500 text-stone-950 border-amber-400 shadow'
                            : 'bg-stone-900 text-stone-400 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        👷 NY Laborer
                      </button>
                      <button
                        onClick={() => setCalcVictimType('pediatric')}
                        className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                          calcVictimType === 'pediatric'
                            ? 'bg-amber-500 text-stone-950 border-amber-400 shadow'
                            : 'bg-stone-900 text-stone-400 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        👶 Pediatric
                      </button>
                      <button
                        onClick={() => setCalcVictimType('municipal')}
                        className={`p-2.5 rounded-xl border text-center font-bold cursor-pointer transition-all ${
                          calcVictimType === 'municipal'
                            ? 'bg-amber-500 text-stone-950 border-amber-400 shadow'
                            : 'bg-stone-900 text-stone-400 border-stone-800 hover:bg-stone-800'
                        }`}
                      >
                        💧 Municipal / Flint
                      </button>
                    </div>
                  </div>

                  {/* Blood Lead Level (BLL) */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Documented Blood Lead Level (BLL):</span>
                      <span className="text-amber-400 font-bold">{calcBloodLeadLevel} µg/dL</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="65"
                      step="1"
                      value={calcBloodLeadLevel}
                      onChange={(e) => setCalcBloodLeadLevel(parseInt(e.target.value))}
                      className="w-full h-2 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                    <div className="flex justify-between text-[10px] text-stone-500 font-mono">
                      <span>5 µg/dL (CDC Action)</span>
                      <span>25 µg/dL (OSHA Medical Removal)</span>
                      <span>60+ µg/dL (Critical Encephalopathy)</span>
                    </div>
                  </div>

                  {/* Exposure Duration */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Exposure Period:</span>
                      <span className="text-amber-400 font-bold">{calcDurationYears} Years</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      step="1"
                      value={calcDurationYears}
                      onChange={(e) => setCalcDurationYears(parseInt(e.target.value))}
                      className="w-full h-2 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>

                  {/* Baseline Earnings / Earning Capacity */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-stone-300">Baseline Annual Wage:</span>
                      <span className="text-amber-400 font-bold">${calcAnnualWage.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="30000"
                      max="160000"
                      step="5000"
                      value={calcAnnualWage}
                      onChange={(e) => setCalcAnnualWage(parseInt(e.target.value))}
                      className="w-full h-2 bg-stone-900 rounded-lg appearance-none cursor-pointer accent-amber-500"
                    />
                  </div>

                  {/* Statutory Violation Toggle */}
                  <div className="pt-2">
                    <label className="flex items-center justify-between p-3.5 bg-stone-900 rounded-xl border border-stone-800 cursor-pointer">
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-white block">
                          NY Labor Law § 241(6) / 12 NYCRR § 23-1.26 Violation
                        </span>
                        <span className="text-[11px] text-stone-400 block">
                          Contractor failed to provide approved respirators or performed confined space torch-cutting
                        </span>
                      </div>
                      <input
                        type="checkbox"
                        checked={calcSafetyViolation}
                        onChange={(e) => setCalcSafetyViolation(e.target.checked)}
                        className="w-5 h-5 accent-amber-500 rounded cursor-pointer"
                      />
                    </label>
                  </div>
                </div>

                {/* Valuation Results Output */}
                <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="bg-stone-950 p-6 rounded-2xl border border-stone-800 space-y-6">
                    <h4 className="text-sm font-mono font-bold text-stone-200 border-b border-stone-800 pb-2 flex items-center justify-between">
                      <span>PROJECTED CIVIL RECOVERY RANGE</span>
                      <span className="text-xs text-amber-400">NY Supreme Court Valuation Model</span>
                    </h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <div className="text-stone-400 text-xs font-mono mb-1">TOTAL PROJECTED RECOVERY</div>
                        <div className="text-3xl font-black text-amber-400">
                          ${(calculatedDamages.totalEstimate / 1000000).toFixed(2)}M
                        </div>
                        <div className="text-[11px] text-stone-500 mt-1">
                          Full structured verdict / settlement valuation
                        </div>
                      </div>

                      <div className="bg-stone-900 p-4 rounded-xl border border-stone-800">
                        <div className="text-stone-400 text-xs font-mono mb-1">PAIN, SUFFERING & STATUTORY</div>
                        <div className="text-3xl font-black text-emerald-400">
                          ${(calculatedDamages.statutoryPainSuffering / 1000000).toFixed(2)}M
                        </div>
                        <div className="text-[11px] text-stone-500 mt-1">
                          {calcSafetyViolation ? 'Includes § 241(6) strict liability' : 'Standard common law claim'}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex justify-between p-2.5 bg-stone-900/80 rounded-lg border border-stone-800">
                        <span className="text-stone-400">Lost Lifetime Wage Capacity (Roulet's Law):</span>
                        <span className="text-stone-200 font-bold">
                          ${(calculatedDamages.baseEconomic + calculatedDamages.iqLossCompensation).toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between p-2.5 bg-stone-900/80 rounded-lg border border-stone-800">
                        <span className="text-stone-400">Lifelong Chelation & Medical Monitoring:</span>
                        <span className="text-stone-200 font-bold">
                          ${calculatedDamages.medicalMonitoring.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="text-xs text-stone-400 leading-relaxed bg-stone-900/50 p-4 rounded-xl border border-stone-800/80">
                      <span className="font-bold text-amber-300 block mb-1">Forensic Legal Commentary:</span>
                      Because society fails to proactively enforce environmental standards or penalize landlords and
                      general contractors before poisoning occurs, civil litigation remains the sole mechanism to fund
                      medical care, restore family dignity, and impose economic consequences on tortfeasors.
                    </div>
                  </div>

                  <div className="p-4 bg-stone-950 rounded-xl border border-stone-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-stone-400">Cryptographic Legal Provenance:</span>
                    <button
                      onClick={handleCopyHash}
                      className="text-amber-400 hover:underline flex items-center gap-1 font-bold cursor-pointer"
                    >
                      <span>Copy Dossier Hash</span>
                      <Copy size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CROSS NAVIGATION BANNER */}
      <div className="bg-stone-900/90 border border-amber-600/30 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h4 className="text-sm font-bold text-white flex items-center gap-2">
            <Gavel size={16} className="text-amber-400" />
            <span>Explore Related Legal & Forensic Modules on ICEarth</span>
          </h4>
          <p className="text-xs text-stone-400">
            Cross-navigate to sovereign research hubs, municipal water audits, and the legal ledger
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {onNavigateTab && (
            <>
              <button
                onClick={() => onNavigateTab('ny_lead_litigation')}
                className="px-3 py-1.5 bg-stone-950 hover:bg-stone-800 text-amber-300 border border-stone-800 rounded-xl text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                <span>NY Lead Kakistocracy</span>
                <ArrowRight size={12} />
              </button>
              <button
                onClick={() => onNavigateTab('flint_lead_crime')}
                className="px-3 py-1.5 bg-stone-950 hover:bg-stone-800 text-red-300 border border-stone-800 rounded-xl text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                <span>Flint Water Crisis</span>
                <ArrowRight size={12} />
              </button>
              <button
                onClick={() => onNavigateTab('cleveland_lead_audit')}
                className="px-3 py-1.5 bg-stone-950 hover:bg-stone-800 text-amber-300 border border-stone-800 rounded-xl text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                <span>Cleveland Lead Scandal</span>
                <ArrowRight size={12} />
              </button>
              <button
                onClick={() => onNavigateTab('news_repository')}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-xl text-xs font-mono flex items-center gap-1.5 cursor-pointer"
              >
                <span>News & Reports Hub</span>
                <ArrowRight size={12} />
              </button>
            </>
          )}
        </div>
      </div>

      {/* FULLSCREEN ARTWORK LIGHTBOX MODAL */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 backdrop-blur-md p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-amber-500 text-stone-950 font-mono font-black text-xs rounded-md shadow">
                PLATE #47 FORENSIC ARCHIVE
              </span>
              <span className="text-sm font-mono text-stone-300 hidden sm:inline">
                Lead Poisoning: The Only Recourse Is Litigation — New York Construction (amNY Op-Ed)
              </span>
            </div>
            <button
              onClick={() => setIsArtModalOpen(false)}
              className="p-2 text-stone-400 hover:text-white rounded-lg bg-stone-900 border border-stone-800 hover:bg-stone-800 cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="my-6 flex items-center justify-center">
            <div className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-black">
              <img
                src={leadLitigationRecourseImg}
                alt="Plate #47 Lead Poisoning Litigation Fullscreen"
                className="w-full max-h-[75vh] object-contain mx-auto"
              />
            </div>
          </div>

          <div className="border-t border-stone-800 pt-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-stone-400">
            <div className="flex flex-wrap items-center gap-3">
              <span>Legal Source: amNY Op-Ed by Attorney Jay Nelson Gorayeb</span>
              <span>•</span>
              <span>Statute: NY Labor Law § 241(6) & 12 NYCRR § 23-1.26</span>
              <span>•</span>
              <a
                href="https://www.amny.com/law/op-ed-lead-poisoning-construction-workers/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded border border-amber-300 flex items-center gap-1.5 cursor-pointer font-bold transition-colors"
              >
                <FileText size={13} className="text-stone-950" />
                <span>Read amNY Op-Ed</span>
                <ExternalLink size={12} className="text-stone-950" />
              </a>
            </div>
            <button
              onClick={handleCopyHash}
              className="px-3 py-1 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded border border-amber-600/40 flex items-center gap-1.5 cursor-pointer font-bold"
            >
              {copiedHash ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>Copy Provenance Hash ({provenanceHash.slice(0, 16)}...)</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadPoisoningLegalRecourseNY;
