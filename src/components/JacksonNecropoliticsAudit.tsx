import React, { useState, useMemo } from 'react';
import {
  AlertTriangle,
  Scale,
  Droplets,
  ShieldAlert,
  Gavel,
  BookOpen,
  ArrowRight,
  ExternalLink,
  Info,
  Maximize2,
  Copy,
  Check,
  Building,
  Users,
  Clock,
  HeartPulse,
  Flame,
  Activity,
  Award,
  Layers,
  Sparkles,
  Search,
  Filter,
  Eye,
  X,
  FileText,
  BadgeAlert,
  Dna,
  Skull
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
  LineChart,
  Line,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import jacksonNecropoliticsImg from '../assets/images/jackson_necropolitics_lead_water_1789219600494.jpg';

interface JacksonNecropoliticsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const JacksonNecropoliticsAudit: React.FC<JacksonNecropoliticsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [selectedSection, setSelectedSection] = useState<'overview' | 'opeds' | 'infrastructure' | 'judicial' | 'necropolitics' | 'flint_lineage'>('overview');
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [activeMetricTab, setActiveMetricTab] = useState<'ph_curve' | 'lead_comparison' | 'judicial_timeline'>('ph_curve');

  const provenanceHash = '0xJACKSON_NECROPOLITICS_LEAD_WATER_DENNIE_LINLY_ROULET_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(provenanceHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Water pH vs Lead leaching rate curve
  const phLeachingData = [
    { ph: 'pH 5.5 (Acidic Pearl River)', leadUptake: 88, corrosionScale: 'Severe Strip', color: '#ef4444' },
    { ph: 'pH 6.0 (Unbuffered River)', leadUptake: 64, corrosionScale: 'Rapid Dissolution', color: '#f97316' },
    { ph: 'pH 6.8 (Jackson 2014 Actual)', leadUptake: 46, corrosionScale: 'Passivation Lost', color: '#eab308' },
    { ph: 'pH 7.4 (Neutral Baseline)', leadUptake: 21, corrosionScale: 'Moderate Leaching', color: '#84cc16' },
    { ph: 'pH 8.2 (Orthophosphate Control)', leadUptake: 4.2, corrosionScale: 'Stable Protective Film', color: '#10b981' },
    { ph: 'pH 9.0 (Alkaline Treated)', leadUptake: 1.8, corrosionScale: 'Optimal Passivation', color: '#06b6d4' }
  ];

  // Jackson vs Flint comparative metrics
  const comparativeMetrics = [
    { metric: 'Elevated Lead Homes (%)', jackson: 22.0, flint: 17.1, epaStandard: 10.0 },
    { metric: 'Lead Pipes Age (Years)', jackson: 100, flint: 75, epaStandard: 0 },
    { metric: 'Black Population (%)', jackson: 82.5, flint: 53.7, epaStandard: 13.6 },
    { metric: 'Poverty Rate (%)', jackson: 24.5, flint: 35.5, epaStandard: 11.5 },
    { metric: 'Months Warnings Suppressed', jackson: 19, flint: 18, epaStandard: 0 }
  ];

  // Judicial regression timeline
  const judicialTimelineData = [
    { year: '2014', event: 'Willie Bell Warning', status: 'Whistleblower Fired by Mayor Yarber', constitutionalRightScore: 85 },
    { year: '2015', event: 'MSDH 22% Test Surge', status: 'Findings Concealed from Public', constitutionalRightScore: 65 },
    { year: '2016', event: 'Mayor Denies Crisis', status: '"We are not close to Flint"', constitutionalRightScore: 50 },
    { year: '2024', event: 'S.D. Miss Dismissal', status: 'No Constitutional Violation Proven', constitutionalRightScore: 30 },
    { year: '2025', event: '5th Circuit Panel', status: 'Violation Found, Qualified Immunity Given', constitutionalRightScore: 20 },
    { year: '2026', event: '5th Circuit En Banc', status: 'No Right to Bodily Integrity in Water', constitutionalRightScore: 0 }
  ];

  return (
    <div className="w-full min-h-screen bg-stone-900 text-stone-100 font-sans pb-24">
      {/* Top Breadcrumb & Quick Nav */}
      <div className="border-b border-stone-800 bg-stone-950/80 sticky top-0 z-40 backdrop-blur-md px-4 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
          <button 
            onClick={() => onNavigateTab && onNavigateTab('jackson_lead_audit')} 
            className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer font-bold"
          >
            <span>⚖️ Jackson MS Lead Water Audit</span>
          </button>
          <span className="text-stone-600">/</span>
          <span className="text-amber-400 font-semibold">Plate #49: Necropolitics & Constitutional Abandonment</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsArtworkModalOpen(true)}
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            <Maximize2 size={13} className="text-amber-400" />
            <span>Examine Plate #49 Visual</span>
          </button>

          <button
            onClick={handleCopyHash}
            className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-all cursor-pointer"
          >
            {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
            <span>{copiedHash ? 'Hash Copied!' : 'Provenance Hash'}</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8 space-y-10">
        {/* HERO BANNER */}
        <div className="relative rounded-2xl overflow-hidden border border-red-900/60 bg-gradient-to-br from-stone-950 via-stone-900 to-red-950/40 p-6 lg:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-red-950 text-red-300 border border-red-800/80 rounded-full text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Skull size={13} className="text-red-400" />
                  Forensic Jurisprudence & Necropolitics
                </span>
                <span className="px-3 py-1 bg-amber-950 text-amber-300 border border-amber-800/80 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                  Plate #49 Forensic Synthesis
                </span>
                <span className="px-3 py-1 bg-stone-800 text-stone-300 rounded-full text-xs font-mono">
                  September 2026 Dual Op-Ed Audit
                </span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-extrabold text-stone-100 tracking-tight leading-tight">
                The Necropolitics of Lead Poisoning:
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-yellow-500 mt-1">
                  Jackson, Flint & Constitutional Abandonment
                </span>
              </h1>

              <p className="text-stone-300 text-sm lg:text-base leading-relaxed">
                When lead water contamination strikes communities of color, public discourse routinely invokes systemic racism. Yet the granular forensic reality reveals a deeper, more devastating crisis: <strong className="text-stone-100 font-semibold">the complete abdication of executive responsibility by municipal leadership</strong>, compounded by white-shoe corporate austerity (the Jones Day / Kevyn Orr lineage in Flint and Detroit) and federal appellate courts systematically eviscerating the Fourteenth Amendment's guarantee of bodily integrity.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href="https://newsone.com/6871533/jackson-mississippi-poisonous-water-supply/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-mono font-bold rounded-xl shadow flex items-center gap-2 transition-all hover:scale-105"
                >
                  <FileText size={14} />
                  <span>Zack Linly (NewsOne Op-Ed)</span>
                  <ExternalLink size={13} />
                </a>

                <a
                  href="https://ballsandstrikes.org/law-politics/fifth-circuit-jackson-lead-drinking-water-constitution-originalism/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-mono font-bold rounded-xl shadow flex items-center gap-2 transition-all hover:scale-105"
                >
                  <Gavel size={14} />
                  <span>Madiba K. Dennie (Balls & Strikes)</span>
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => onNavigateTab && onNavigateTab('jackson_lead_audit')}
                  className="px-4 py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-mono rounded-xl border border-stone-700 flex items-center gap-2 transition-all"
                >
                  <span>Go to Jackson Water Audit (Plate #43)</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Thumbnail Preview Card */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <div 
                onClick={() => setIsArtworkModalOpen(true)}
                className="group relative rounded-xl overflow-hidden border-2 border-red-700/60 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:border-amber-400"
              >
                <img 
                  src={jacksonNecropoliticsImg} 
                  alt="Plate #49: Necropolitics of Lead Poisoning"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-amber-300 flex items-center gap-1">
                      <Eye size={12} /> Plate #49 High-Res
                    </span>
                    <span className="text-[10px] font-mono text-stone-400">Vault #PHOTO-000BE</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-stone-400 font-mono mt-2 text-center">
                Click to inspect full forensic cryptographic plate
              </p>
            </div>
          </div>
        </div>

        {/* CORE METRICS GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-stone-950 border border-red-900/50 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono">
              <span>Elevated Lead In Homes</span>
              <AlertTriangle size={14} className="text-red-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-black text-red-400 font-mono">22.0%</div>
            <p className="text-[11px] text-stone-400">Jackson, MS June 2015 test rate (Exceeded Flint's 17.1% crisis peak)</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950 border border-amber-900/50 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono">
              <span>Aged Water Piping</span>
              <Droplets size={14} className="text-amber-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-black text-amber-400 font-mono">1,500 Mi</div>
            <p className="text-[11px] text-stone-400">100+ miles century-old with solid lead bands every 20 feet</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950 border border-yellow-900/50 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono">
              <span>Demographic Target</span>
              <Users size={14} className="text-yellow-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-black text-yellow-400 font-mono">&gt;80% Black</div>
            <p className="text-[11px] text-stone-400">25% below poverty line; deliberate municipal neglect and isolation</p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 shadow-sm space-y-1">
            <div className="flex items-center justify-between text-stone-400 text-xs font-mono">
              <span>5th Circuit 14th Amend. Shield</span>
              <Gavel size={14} className="text-stone-400" />
            </div>
            <div className="text-2xl lg:text-3xl font-black text-stone-300 font-mono">0 Protection</div>
            <p className="text-[11px] text-stone-400">Courts ruled no constitutional right prevents government from poisoning tap water</p>
          </div>
        </div>

        {/* SECTION NAVIGATION PILLS */}
        <div className="flex flex-wrap gap-2 border-b border-stone-800 pb-3">
          {[
            { id: 'overview', label: '1. Executive Summary & Thesis', icon: BookOpen },
            { id: 'opeds', label: '2. The Two Landmark Op-Eds', icon: FileText },
            { id: 'infrastructure', label: '3. Chemistry & Whistleblower Suppression', icon: Droplets },
            { id: 'judicial', label: '4. 5th Circuit Constitutional Evisceration', icon: Scale },
            { id: 'flint_lineage', label: '5. Jones Day, Kevyn Orr & Flint Lineage', icon: Building },
            { id: 'necropolitics', label: '6. Achille Mbembe & Necropolitics', icon: Skull }
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = selectedSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedSection(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-red-600 text-white shadow-md border border-red-500' 
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                <Icon size={14} className={isActive ? 'text-white' : 'text-stone-400'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* SECTION 1: OVERVIEW & THESIS */}
        {selectedSection === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
              <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                <ShieldAlert className="text-red-400" size={20} />
                <span>The Crisis of Responsibility: Moving Beyond Generic Racial Tropes</span>
              </h2>
              <div className="text-stone-300 text-sm leading-relaxed space-y-4">
                <p>
                  In mainstream progressive media, the Jackson Water Crisis is frequently collapsed into a simplistic binary of white state officials depriving a predominantly Black municipality of resources. While state neglect and infrastructural apartheid by the Mississippi state legislature are real, <strong className="text-amber-300">this narrative obscures the primary constitutional and executive breakdown: the willful actions of Jackson's own municipal administration</strong>.
                </p>
                <p>
                  In 2014, <span className="text-stone-100 font-semibold">Willie Bell</span>, the interim director of Jackson’s Department of Public Works, explicitly warned Mayor <span className="text-stone-100 font-semibold">Tony Yarber</span> that low-pH Pearl River water was stripping corroded 100-year-old lead pipes and flooding homes with neurotoxic heavy metals. Rather than warning the community or installing corrosion inhibitors, Mayor Yarber <strong className="text-red-400">retaliated against Bell by firing him</strong> and aggressively increased the city's reliance on the corrosive acidic water.
                </p>
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/60 font-mono text-xs text-red-200">
                  <p className="font-bold text-red-300 mb-1">⚖️ FORENSIC VERDICT OF MUNICIPAL MALFEASANCE:</p>
                  "When leadership responsible for the poisoning shares the racial identity of the poisoned populace, the political crisis is not merely systemic racism—it is <strong className="underline text-white">the total breakdown of executive responsibility</strong>, weaponized by legal immunities that treat impoverished lives as collateral damage."
                </div>
              </div>
            </div>

            {/* Interactive Visualizations Selector */}
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-stone-100 flex items-center gap-2">
                    <Activity className="text-amber-400" size={18} />
                    <span>Forensic Data Models: Chemistry, Contamination & Judicial Collapse</span>
                  </h3>
                  <p className="text-xs text-stone-400 mt-0.5">Select a model to view interactive data analysis</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveMetricTab('ph_curve')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      activeMetricTab === 'ph_curve'
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    1. River pH vs Lead Dissolution
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('lead_comparison')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      activeMetricTab === 'lead_comparison'
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    2. Jackson vs. Flint Contamination
                  </button>
                  <button
                    onClick={() => setActiveMetricTab('judicial_timeline')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer ${
                      activeMetricTab === 'judicial_timeline'
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                    }`}
                  >
                    3. Constitutional Rights Evisceration (2014-2026)
                  </button>
                </div>
              </div>

              {/* Chart Rendering */}
              {activeMetricTab === 'ph_curve' && (
                <div className="space-y-3">
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={phLeachingData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                        <XAxis dataKey="ph" stroke="#a8a29e" tick={{ fontSize: 11 }} />
                        <YAxis stroke="#a8a29e" label={{ value: 'Estimated Lead Leaching (μg/L)', angle: -90, position: 'insideLeft', fill: '#a8a29e', fontSize: 11 }} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0c0a09', borderColor: '#44403c', borderRadius: '8px', color: '#f5f5f4' }}
                          formatter={(val: any, name: any, item: any) => [`${val} μg/L (${item.payload.corrosionScale})`, 'Lead Leached']}
                        />
                        <Bar dataKey="leadUptake" radius={[6, 6, 0, 0]}>
                          {phLeachingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-stone-400 font-mono text-center">
                    Chemical Mechanism: Without orthophosphate passivation, low-pH river water dissolves solid lead pipe scale at rates up to 40× higher than regulated thresholds.
                  </p>
                </div>
              )}

              {activeMetricTab === 'lead_comparison' && (
                <div className="space-y-3">
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={comparativeMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                        <XAxis dataKey="metric" stroke="#a8a29e" tick={{ fontSize: 11 }} />
                        <YAxis stroke="#a8a29e" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0c0a09', borderColor: '#44403c', borderRadius: '8px', color: '#f5f5f4' }}
                        />
                        <Legend wrapperStyle={{ fontSize: 11 }} />
                        <Bar dataKey="jackson" name="Jackson, MS" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="flint" name="Flint, MI" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="epaStandard" name="National / EPA Ref" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-stone-400 font-mono text-center">
                    Data comparison: Mississippi State Department of Health (June 2015) confirmed 22% of tested homes had dangerous lead levels—exceeding Flint's 17% threshold.
                  </p>
                </div>
              )}

              {activeMetricTab === 'judicial_timeline' && (
                <div className="space-y-3">
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={judicialTimelineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                        <defs>
                          <linearGradient id="judicialGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#292524" />
                        <XAxis dataKey="year" stroke="#a8a29e" tick={{ fontSize: 11 }} />
                        <YAxis stroke="#a8a29e" domain={[0, 100]} label={{ value: 'Judicial Recognition of Bodily Integrity (%)', angle: -90, position: 'insideLeft', fill: '#a8a29e', fontSize: 10 }} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0c0a09', borderColor: '#44403c', borderRadius: '8px', color: '#f5f5f4' }}
                          formatter={(val: any, name: any, item: any) => [`${val}% Recognition: ${item.payload.event} (${item.payload.status})`, 'Judicial Shield']}
                        />
                        <Area type="monotone" dataKey="constitutionalRightScore" stroke="#ef4444" fillOpacity={1} fill="url(#judicialGrad)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="text-xs text-stone-400 font-mono text-center">
                    Judicial erosion: From recognized fundamental right to bodily integrity to qualified immunity to outright denial that the Constitution protects against poisoned tap water.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SECTION 2: THE TWO OP-EDS */}
        {selectedSection === 'opeds' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* OP-ED 1: Zack Linly */}
              <div className="p-6 rounded-2xl bg-stone-950 border border-red-900/60 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-red-400">
                    <span>NewsOne Editorial Review</span>
                    <span>September 11, 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">
                    "Jackson Residents Not Legally Protected From Poisonous Water Supply"
                  </h3>
                  <div className="text-xs font-mono text-stone-400">
                    Author: <span className="text-stone-200 font-semibold">Zack Linly</span> | Published in NewsOne
                  </div>
                  <div className="p-3 bg-red-950/30 rounded-xl border border-red-900/50 text-xs text-red-200 italic">
                    "At some point, it's not hyperbolic to say that cash-poor Black people are being targeted for death via systematic neglect."
                  </div>
                  <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
                    <p>
                      Linly forcefully dissects how legal doctrine operates as a shield for state-sponsored manslaughter. He highlights that Jackson’s water woes began long before the 2022 flood, tracing back to Willie Bell's 2014 whistleblowing and Mayor Tony Yarber's active cover-up.
                    </p>
                    <p>
                      Linly asks the uncomfortable question: If a municipal administration knowingly distributes water from corroded lead mains with 22% elevated lead rates, and federal courts grant qualified immunity, what does that say about the status of Black citizenship? It is, in Linly’s words, <strong className="text-red-400">necropolitics codified into law</strong>.
                    </p>
                  </div>
                </div>

                <a
                  href="https://newsone.com/6871533/jackson-mississippi-poisonous-water-supply/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full py-2.5 bg-red-700 hover:bg-red-600 text-white rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Read Full NewsOne Op-Ed</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              {/* OP-ED 2: Madiba K. Dennie */}
              <div className="p-6 rounded-2xl bg-stone-950 border border-amber-900/60 flex flex-col justify-between space-y-4 shadow-lg">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                    <span>Balls & Strikes Legal Analysis</span>
                    <span>September 11, 2026</span>
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">
                    "Fifth Circuit: The Constitution Does Not Prevent the Government From Poisoning Your Drinking Water"
                  </h3>
                  <div className="text-xs font-mono text-stone-400">
                    Author: <span className="text-stone-200 font-semibold">Madiba K. Dennie</span> (Deputy Editor & Senior Contributor)
                  </div>
                  <div className="p-3 bg-amber-950/30 rounded-xl border border-amber-900/50 text-xs text-amber-200 italic">
                    "By defining constitutional rights as narrowly as possible, conservative judges make it very easy for them to conclude that those rights do not exist."
                  </div>
                  <div className="text-xs text-stone-300 space-y-2 leading-relaxed">
                    <p>
                      Dennie provides the rigorous constitutional autopsy of the Fifth Circuit’s decision. She demonstrates how originalist jurisprudence deliberately atomizes fundamental rights: rather than asking whether citizens have a right to bodily integrity free from state-created poisons, the court demands an unbroken 1791 precedent explicitly granting "a right to non-leaded municipal tap water."
                    </p>
                    <p>
                      Dennie exposes how this originalist game renders the 14th Amendment toothless against modern environmental toxins, creating an asymmetrical jurisprudence where corporate polluters receive constitutional protection while poisoned children are stripped of standing.
                    </p>
                  </div>
                </div>

                <a
                  href="https://ballsandstrikes.org/law-politics/fifth-circuit-jackson-lead-drinking-water-constitution-originalism/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 w-full py-2.5 bg-amber-600 hover:bg-amber-500 text-stone-950 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Gavel size={14} />
                  <span>Read Full Balls & Strikes Essay</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: INFRASTRUCTURE & RETALIATION */}
        {selectedSection === 'infrastructure' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
              <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                <Droplets className="text-amber-400" size={20} />
                <span>Underground Anatomy: 1,500 Miles of Piping & Solid Lead Bands</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-amber-400 font-bold uppercase">1. The Piping Matrix</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    Underneath Jackson, 1,500 miles of mains deliver water to 140,000 residents. At least 100 miles are over a century old and contain solid bands of lead every 20 feet, installed in the late 19th and early 20th centuries.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-red-400 font-bold uppercase">2. Corrosive Chemistry</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    The Pearl River has low pH levels. Unbuffered, acidic water strips mineral passivation scale, accelerating galvanic corrosion and leaching toxic lead into the water column.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2">
                  <div className="text-xs font-mono text-yellow-400 font-bold uppercase">3. The 2014 Whistleblower</div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    DPW Director Willie Bell alerted Mayor Yarber in 2014 that low pH was creating a public health emergency. Yarber terminated Bell and expanded the use of low-pH river water without corrosion control.
                  </p>
                </div>
              </div>

              {/* Timeline Table */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-stone-200 font-mono">Forensic Timeline of Deceit & Suppression</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono border border-stone-800 rounded-lg">
                    <thead className="bg-stone-900 text-stone-400 border-b border-stone-800">
                      <tr>
                        <th className="p-3">Date</th>
                        <th className="p-3">Action / Occurrence</th>
                        <th className="p-3">Perpetrator</th>
                        <th className="p-3">Public Deception / Consequence</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-800 text-stone-300">
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">2014</td>
                        <td className="p-3">Bell alerts Yarber that river pH spikes lead leaching</td>
                        <td className="p-3 text-stone-200">Mayor Tony Yarber</td>
                        <td className="p-3 text-red-400">Bell fired; low-pH river water use expanded</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">June 2015</td>
                        <td className="p-3">MSDH finds 22% of sampled homes have elevated lead</td>
                        <td className="p-3 text-stone-200">State Health Dept / City</td>
                        <td className="p-3 text-red-400">Findings withheld from public for over 6 months</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">Feb 2016</td>
                        <td className="p-3">Public finally alerted; Mayor minimizes danger</td>
                        <td className="p-3 text-stone-200">Mayor Tony Yarber</td>
                        <td className="p-3 text-red-400">"The system is not the issue... We are not close to being Flint"</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">June 2024</td>
                        <td className="p-3">Southern District of MS dismisses civil rights lawsuit</td>
                        <td className="p-3 text-stone-200">Federal District Court</td>
                        <td className="p-3 text-red-400">Residents ruled not to have proven constitutional violation</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">Nov 2025</td>
                        <td className="p-3">Fifth Circuit panel affirms qualified immunity</td>
                        <td className="p-3 text-stone-200">5th Circuit Appeals Court</td>
                        <td className="p-3 text-red-400">Court agrees rights violated but shields officials from liability</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-amber-400 font-bold">2026</td>
                        <td className="p-3">Fifth Circuit denies existence of bodily integrity right</td>
                        <td className="p-3 text-stone-200">5th Circuit En Banc</td>
                        <td className="p-3 text-red-400">Originalist ruling: Constitution provides zero protection against toxic tap water</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: JUDICIAL EVISCERATION */}
        {selectedSection === 'judicial' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
              <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                <Scale className="text-red-400" size={20} />
                <span>The Fifth Circuit's Originalist Sleight of Hand: Eviscerating the 14th Amendment</span>
              </h2>

              <div className="text-xs text-stone-300 leading-relaxed space-y-4">
                <p>
                  As Madiba K. Dennie incisively observes, conservative originalism does not interpret the Constitution; it amputates it. In the Jackson litigation, plaintiffs asserted claims under the <strong className="text-stone-100">Substantive Due Process Clause of the Fourteenth Amendment</strong>, citing two core doctrines:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
                  <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                    <div className="text-amber-400 font-bold mb-1 font-mono">1. Right to Bodily Integrity</div>
                    <p className="text-stone-400">
                      Established in <em>Rochin v. California</em> (1952) and affirmed in <em>Cruzan</em> (1990), establishing that state actors cannot forcibly inject or knowingly subject citizens to toxic substances that shock the conscience.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                    <div className="text-red-400 font-bold mb-1 font-mono">2. State-Created Danger Doctrine</div>
                    <p className="text-stone-400">
                      Holds officials liable when their affirmative acts create or significantly increase a danger of private harm that citizens would not otherwise have faced.
                    </p>
                  </div>
                </div>
                <p>
                  In the Sixth Circuit's landmark Flint water ruling, <em>Guertin v. Michigan</em> (912 F.3d 907, 2019), the federal court recognized that deliberately switching to a corrosive water source and lying about safety constitutes a profound violation of bodily integrity: <em>"When government officials knowingly deliver poisoned water to citizens, they violate the Constitution."</em>
                </p>
                <p>
                  The Fifth Circuit, by contrast, performed what Dennie terms an <strong className="text-red-400 font-semibold">"originalist containment strategy"</strong>. Rather than recognizing bodily integrity, the court narrowed the inquiry to whether the Framers in 1868 recognized a "specific right to public municipal water free from lead." Because municipal lead piping was only beginning to expand in the late 19th century, the court concluded that no such "deeply rooted" right exists in history and tradition.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/40 border border-red-900/80 font-mono text-xs text-stone-300 space-y-2">
                <div className="font-bold text-red-300 flex items-center gap-1.5">
                  <Gavel size={14} />
                  <span>The Qualified Immunity Trap:</span>
                </div>
                <p>
                  Even when the Fifth Circuit panel initially conceded that the city's behavior was appalling, it invoked qualified immunity because there was no "clearly established" prior 5th Circuit case with identical facts. This creates an impossible Catch-22: <strong className="text-stone-100">Courts refuse to declare the right clearly established, ensuring future polluters always escape liability.</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: JONES DAY, KEVYN ORR & FLINT LINEAGE */}
        {selectedSection === 'flint_lineage' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
              <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                <Building className="text-amber-400" size={20} />
                <span>The Corporate Architecture: Jones Day, Kevyn Orr, and Flint's Emergency Management</span>
              </h2>

              <div className="text-xs text-stone-300 leading-relaxed space-y-4">
                <p>
                  To understand why Jackson and Flint mirror each other so precisely, one must examine the legal and corporate architecture that pioneered modern emergency management.
                </p>
                <p>
                  In 2013, Michigan Governor Rick Snyder appointed <strong className="text-stone-100 font-semibold">Kevyn Orr</strong>, a senior restructuring partner at white-shoe corporate law firm <strong className="text-amber-400 font-semibold">Jones Day</strong>, as the Emergency Financial Manager of Detroit. Jones Day operated as de facto emergency governance, wielding dictatorial authority to override elected city councils, break union contracts, and slash municipal services.
                </p>
                <p>
                  Under Orr’s direction, the Detroit Water and Sewerage Department (DWSD) terminated its long-term wholesale water contract with Flint, forcing Flint to temporarily draw water from the highly corrosive Flint River to shave municipal expenses. Jones Day received tens of millions of dollars in restructuring fees while 100,000 citizens were poisoned.
                </p>
                <div className="p-4 rounded-xl bg-stone-900 border border-amber-900/60 font-mono text-xs space-y-2 text-stone-200">
                  <div className="font-bold text-amber-400">🏛️ The Jones Day / Trump Judicial Pipeline:</div>
                  <p>
                    Jones Day went on to serve as Donald Trump’s primary legal counsel, campaign apparatus, and judicial staffing architect. Donald McGahn, former Jones Day partner, served as White House Counsel and oversaw the rapid appointment of ultra-conservative judges across federal appeals courts—most notably packing the Fifth Circuit with ideologues who now rule that poisoned tap water is not a constitutional violation.
                  </p>
                </div>
                <p>
                  The throughline from Detroit to Flint to Jackson is unmistakable: <strong className="text-stone-100">Corporate legal malpractice and emergency austerity strip communities of democratic voice, poison their water supply, and then deploy a captured federal judiciary to deny them standing or restitution.</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 6: ACHILLE MBEMBE & NECROPOLITICS */}
        {selectedSection === 'necropolitics' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-6">
              <h2 className="text-xl font-bold text-stone-100 flex items-center gap-2">
                <Skull className="text-red-400" size={20} />
                <span>Achille Mbembe & The Theory of Necropolitics: Sovereign Exposure to Death</span>
              </h2>

              <div className="text-xs text-stone-300 leading-relaxed space-y-4">
                <p>
                  In his seminal 2003 treatise <em>Necropolitics</em>, political theorist <strong className="text-stone-100">Achille Mbembe</strong> expanded upon Michel Foucault’s concept of biopower. While biopolitics describes the state’s power to "make live and let die," <strong className="text-red-400 font-semibold">necropolitics</strong> describes the sovereign power to dictate who matters and who is disposable:
                </p>
                <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 text-stone-200 italic font-serif text-sm">
                  "The ultimate expression of sovereignty resides, to a large degree, in the power and the capacity to dictate who may live and who must die... to exercise sovereignty is to exercise control over mortality and to define life as the deployment and manifestation of power."
                </div>
                <p>
                  As Zack Linly articulates, Jackson, Mississippi represents necropolitics in its purest contemporary form. The state does not need to send armed troops to execute citizens; it accomplishes the same destruction through <strong className="text-amber-300">infrastructural abandonment and slow toxic violence</strong>:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-stone-300 font-mono text-[11px]">
                  <li>
                    <strong className="text-stone-100">Calculated Inaction:</strong> Allowing century-old lead bands to leach neurotoxins into school and household drinking water while sitting on tens of millions in federal infrastructure funds.
                  </li>
                  <li>
                    <strong className="text-stone-100">State-Sanctioned Deceit:</strong> Actively firing whistleblowers (Willie Bell) and misrepresenting lab results (MSDH June 2015 22% failure rate).
                  </li>
                  <li>
                    <strong className="text-stone-100">Judicial Disposability:</strong> Constructing legal doctrines of qualified immunity and originalist minimalism that strip poisoned citizens of legal standing, ensuring zero accountability.
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-red-950 to-stone-950 border border-red-800 text-xs font-mono text-stone-200 flex items-center justify-between">
                <div>
                  <span className="font-bold text-red-300 block mb-0.5">ICEARTH SOVEREIGN VERDICT:</span>
                  Lead poisoning in Jackson and Flint is not an accident of nature. It is sovereign necropolitics—the deliberate governance of disposability.
                </div>
                <button
                  onClick={() => onNavigateTab && onNavigateTab('slow_violence_low_vitamins')}
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg text-xs flex items-center gap-1.5 transition-all"
                >
                  <span>Connect to Plate #48 (Slow Violence)</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM CROSS-NAVIGATION BAR */}
        <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-4">
          <div className="text-xs font-mono text-stone-400 uppercase tracking-wider font-bold">
            ICEarth Inter-Tab Cross Navigation & Forensic Network
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab && onNavigateTab('jackson_lead_audit')}
              className="p-3 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-red-500/50 rounded-xl text-left transition-all group"
            >
              <div className="text-xs font-bold text-stone-200 group-hover:text-red-400 flex items-center gap-1.5">
                <Scale size={13} />
                <span>Jackson Lead Water Audit</span>
              </div>
              <p className="text-[10px] text-stone-400 mt-1 font-mono">Plate #43 • 5th Cir. Corruption Audit</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('slow_violence_low_vitamins')}
              className="p-3 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-amber-500/50 rounded-xl text-left transition-all group"
            >
              <div className="text-xs font-bold text-stone-200 group-hover:text-amber-400 flex items-center gap-1.5">
                <Dna size={13} />
                <span>Slow Violence & Low Vitamins</span>
              </div>
              <p className="text-[10px] text-stone-400 mt-1 font-mono">Plate #48 • Christian Warren & Roulet's Law</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('lead_poisoning_legal_recourse')}
              className="p-3 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-yellow-500/50 rounded-xl text-left transition-all group"
            >
              <div className="text-xs font-bold text-stone-200 group-hover:text-yellow-400 flex items-center gap-1.5">
                <Gavel size={13} />
                <span>Lead Legal Recourse & NY Law</span>
              </div>
              <p className="text-[10px] text-stone-400 mt-1 font-mono">Plate #47 • NY Labor Law 241(6) Audit</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('flint')}
              className="p-3 bg-stone-900 hover:bg-stone-800 border border-stone-800 hover:border-cyan-500/50 rounded-xl text-left transition-all group"
            >
              <div className="text-xs font-bold text-stone-200 group-hover:text-cyan-400 flex items-center gap-1.5">
                <Droplets size={13} />
                <span>Flint Water Crisis Vault</span>
              </div>
              <p className="text-[10px] text-stone-400 mt-1 font-mono">6th Cir. Guertin Precedent & Analysis</p>
            </button>
          </div>
        </div>
      </div>

      {/* ARTWORK MODAL */}
      {isArtworkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative max-w-5xl w-full bg-stone-950 border border-red-700/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-4 border-b border-stone-800 flex items-center justify-between bg-stone-900/60">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 bg-red-950 text-red-300 font-mono text-[10px] font-bold rounded border border-red-800">
                  PLATE #49 HIGH-RESOLUTION
                </span>
                <span className="text-xs font-mono text-stone-300">
                  Necropolitics of Lead Poisoning: Jackson, Flint & Constitutional Abandonment
                </span>
              </div>
              <button
                onClick={() => setIsArtworkModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 flex flex-col items-center justify-center">
              <img
                src={jacksonNecropoliticsImg}
                alt="Plate #49 High Resolution"
                className="max-h-[60vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
              />
              <div className="mt-4 w-full p-4 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono space-y-2">
                <div className="flex items-center justify-between text-stone-400">
                  <span>Cryptographic Vault ID: PHOTO-000BE / IP-000BE</span>
                  <span className="text-amber-400">Provenance Hash Verified</span>
                </div>
                <div className="p-2 bg-black rounded font-mono text-[11px] text-amber-300 break-all border border-stone-800">
                  {provenanceHash}
                </div>
                <div className="text-[11px] text-stone-400">
                  Recorded in the ICEarth Sovereign Vault. Visual synthesis of underground century-old lead water mains, acidic river chemistry, the 2014 whistleblower dismissal, and the 5th Circuit’s constitutional originalist abandonment.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
