import React, { useState } from 'react';
import {
  ShieldAlert,
  Calendar,
  Globe,
  Clock,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  X,
  FileText,
  Layers,
  ArrowRight,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Flame,
  Radio,
  BookOpen,
  Sliders,
  Scale,
  Atom,
  Lock,
  ChevronRight,
  MapPin,
  Sparkles,
  Users,
  Video,
  Award,
  BarChart3,
  Building2,
  HelpCircle,
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
  ComposedChart
} from 'recharts';
import pahoLeadPlateImg from '../assets/images/indigenous_america_lead_paho_plate72_1791378025298.jpg';

interface IndigenousAmericaLeadExposenomicsProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark' | 'glass';
}

export const IndigenousAmericaLeadExposenomics: React.FC<IndigenousAmericaLeadExposenomicsProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    'calendar_event' | 'ten_thousand_years' | 'colonial_1492' | 'indigenous_vs_hispanic' | 'roulets_law_proof'
  >('calendar_event');

  const [copiedHash, setCopiedHash] = useState<boolean>(false);
  const [isArtModalOpen, setIsArtModalOpen] = useState<boolean>(false);

  const vaultHash = '0xPAHO_SIBSA_WHO_INDIGENOUS_AMERICA_LEAD_EXPOSENOMICS_1492_PLATE_72_VAULT_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Recharts Chart 1: 10,000-Year Human Skeletal Bone Lead (Pb) Timeline (µg/g bone ash)
  // Contrast: Pristine Indigenous Americans vs Leaded Old World vs Colonial Extraction vs Today
  const timelineBoneLeadData = [
    { era: '10,000 BCE (Pristine Americas)', indigenousAmericas: 0.008, oldWorldEurope: 0.012, colonialImperial: 0 },
    { era: '3,000 BCE (Early Bronze)', indigenousAmericas: 0.009, oldWorldEurope: 1.2, colonialImperial: 0 },
    { era: '100 CE (Pax Romana / Sapa)', indigenousAmericas: 0.009, oldWorldEurope: 24.5, colonialImperial: 0 },
    { era: '1400 CE (Pre-Columbian Peak)', indigenousAmericas: 0.010, oldWorldEurope: 18.2, colonialImperial: 0 },
    { era: '1545 CE (Potosí / Silver Mining)', indigenousAmericas: 14.8, oldWorldEurope: 22.0, colonialImperial: 35.0 },
    { era: '1750 CE (Colonial Metallurgy)', indigenousAmericas: 12.5, oldWorldEurope: 26.5, colonialImperial: 28.0 },
    { era: '1970 CE (Leaded Gasoline Apex)', indigenousAmericas: 18.2, oldWorldEurope: 32.0, colonialImperial: 30.0 },
    { era: '2026 CE (Contemporary Disparity)', indigenousAmericas: 6.8, oldWorldEurope: 1.2, colonialImperial: 2.1 }
  ];

  // Recharts Chart 2: Modern Exposure Vectors in the Americas (% Children Impacted in Vulnerable Communities)
  const exposureVectorsData = [
    { vector: 'Barro Vidriado (Lead Pottery)', indigenousCommunal: 64, ruralMestizo: 38, urbanAffluent: 4 },
    { vector: 'Informal ULAB Battery Recycling', indigenousCommunal: 42, ruralMestizo: 35, urbanAffluent: 6 },
    { vector: 'Artisanal Mining & Tailings', indigenousCommunal: 58, ruralMestizo: 29, urbanAffluent: 2 },
    { vector: 'Unlined Water Systems & Pipes', indigenousCommunal: 48, ruralMestizo: 42, urbanAffluent: 12 },
    { vector: 'Industrial Smelter Soil Deposition', indigenousCommunal: 52, ruralMestizo: 31, urbanAffluent: 8 }
  ];

  // Recharts Chart 3: Blood Lead Level Distribution Disparity (µg/dL in Children Aged 1-5)
  const populationDisparityData = [
    { group: 'Tribal Indigenous (Andean/Amazon/Pueblo/Diné)', meanBLL: 7.4, ebllPercent: 28.5 },
    { group: 'Rural Hispanic / Mestizo Communities', meanBLL: 4.2, ebllPercent: 14.2 },
    { group: 'Urban Mixed Latin American Population', meanBLL: 2.1, ebllPercent: 6.8 },
    { group: 'European-Descended Elite Enclaves', meanBLL: 0.7, ebllPercent: 1.2 }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24`}>
      {/* PLATE #72 BANNER & HEADER */}
      <div className="relative border-b border-amber-900/40 bg-gradient-to-b from-stone-950 via-amber-950/70 to-stone-900 text-white px-4 py-8 sm:px-8 sm:py-12 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_50%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 text-xs font-black tracking-widest uppercase shadow-md">
                PLATE #72
              </span>
              <span className="px-2.5 py-1 rounded bg-stone-900 text-amber-300 text-xs font-mono font-bold tracking-wide border border-amber-500/40 flex items-center gap-1.5">
                <Calendar size={13} className="text-amber-400" />
                OFFICIAL ICEARTH CALENDAR EVENT • OCT 19–21, 2026
              </span>
              <span className="px-2.5 py-1 rounded bg-red-950/80 text-red-200 text-xs font-mono border border-red-700/60 flex items-center gap-1">
                <Globe size={13} className="text-red-400" />
                PAHO • SIBSA • WHO VIRTUAL SEMINAR SERIES
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsArtModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-bold border border-amber-400/40 shadow-xs transition-colors cursor-pointer"
              >
                <Maximize2 size={13} />
                <span>View Plate Infographic</span>
              </button>
              <button
                onClick={handleCopyHash}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 text-xs font-mono border border-stone-700 transition-colors cursor-pointer"
                title="Copy Cryptographic Vault Hash"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied!' : '0xPAHO_LEAD...'}</span>
              </button>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Indigenous America Lead Exposenomics:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-rose-300 to-amber-400">
              The 10,000-Year Pristine Continuum, 1492 Extractive Invasion & PAHO Lead Week 2026
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-300 max-w-4xl font-light leading-relaxed mb-6">
            Archaeological and isotopic science proves that for tens of thousands of years before 1492, Indigenous Americans living across the unsmelted Western Hemisphere possessed skeletal lead levels below 0.01 µg/g—making them literally the <strong className="text-amber-200 font-semibold">least lead-poisoned human populations in known planetary history</strong>. In 1492, Europe—a civilization ravaged by centuries of Roman lead piping, leaded wine sweeteners (*sapa*), and chronic toxic madness—invaded the Americas, enslaving pristine Indigenous peoples to extract silver and lead at Potosí and Zacatecas. For the 14th International Lead Poisoning Prevention Week (October 18–24, 2026), PAHO, SIBSA, and the WHO are convening a historic Virtual Seminar Series (October 19–21). This plate distinguishes the 10,000-year evolutionary path separating Indigenous Americans from colonial "Hispanic" constructs and provides the ultimate Roulet's Law exposenomic proof.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-stone-400 pt-3 border-t border-stone-800/80">
            <span className="flex items-center gap-1.5 text-stone-300">
              <Globe size={15} className="text-amber-400" />
              <strong>Host Agencies:</strong> Pan American Health Organization (PAHO), Ibero-American Society of Environmental Health (SIBSA) & WHO
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-emerald-400" />
              Event Dates: October 19, 20 & 21, 2026 | 1:00 p.m. – 4:00 p.m. EDT (Zoom)
            </span>
            <a
              href="https://www.paho.org/en/events/virtual-seminar-series-2026-ibero-american-lead-poisoning-prevention-week"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 underline font-bold"
            >
              PAHO Official Event Portal <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* CORE STATS KPI BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-stone-400">Pre-1492 Indigenous Bone Pb</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 my-1">&lt; 0.01 <span className="text-xs text-stone-400 font-normal">µg/g</span></div>
            <span className="text-[10px] text-stone-400">Least poisoned humans in history</span>
          </div>

          <div className="bg-stone-900 border border-red-700/60 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between ring-1 ring-red-500/30">
            <span className="text-[11px] font-mono uppercase tracking-wider text-red-300">1492 European Invader Pb</span>
            <div className="text-2xl sm:text-3xl font-black text-red-400 my-1">20–40 <span className="text-xs text-stone-400 font-normal">µg/g</span></div>
            <span className="text-[10px] text-red-300">Chronic Roman/medieval poisoning</span>
          </div>

          <div className="bg-stone-900 border border-amber-600/50 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300">PAHO Seminar Dates</span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400 my-1">Oct 19–21</div>
            <span className="text-[10px] text-stone-400">1:00 – 4:00 PM EDT (Zoom)</span>
          </div>

          <div className="bg-stone-900 border border-rose-700/60 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between">
            <span className="text-[11px] font-mono uppercase tracking-wider text-rose-300">Colonial Mine Extraction</span>
            <div className="text-2xl sm:text-3xl font-black text-rose-400 my-1">8,000,000+</div>
            <span className="text-[10px] text-rose-300">Indigenous deaths at Potosí & Zacatecas</span>
          </div>

          <div className="bg-stone-900 border border-purple-700/60 rounded-xl p-4 shadow-xl text-center flex flex-col justify-between col-span-2 md:col-span-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300">Modern Exposure Ratio</span>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 my-1">3× – 6×</div>
            <span className="text-[10px] text-stone-400">Indigenous vs elite urban children</span>
          </div>
        </div>
      </div>

      {/* NAVIGATION TABS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-8">
        <div className="flex flex-wrap border-b border-stone-300 dark:border-stone-800 gap-1 sm:gap-2">
          {[
            { id: 'calendar_event', label: '🗓️ PAHO Seminar Calendar & Zoom Program', icon: Calendar },
            { id: 'ten_thousand_years', label: '🧬 The 10,000-Year Pristine Continuum', icon: Atom },
            { id: 'colonial_1492', label: '⚔️ 1492 Colonial Invasion & Extractive Genocide', icon: Skull },
            { id: 'indigenous_vs_hispanic', label: '🪶 Distinguishing Indigenous vs Hispanic Realities', icon: Globe },
            { id: 'roulets_law_proof', label: '⚖️ Roulet’s Law: The Ultimate Proof for ICEarth', icon: Scale }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-bold tracking-tight rounded-t-lg transition-all cursor-pointer border-b-2 ${
                  isActive
                    ? 'bg-amber-950/20 text-amber-600 dark:text-amber-400 border-amber-600 dark:border-amber-500 font-black shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 border-transparent hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800/40'
                }`}
              >
                <Icon size={16} className={isActive ? 'text-amber-600 dark:text-amber-400' : 'text-stone-500'} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN TAB CONTENT AREA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-6">
        {/* SUBTAB 1: PAHO SEMINAR CALENDAR & ZOOM SCHEDULE */}
        {activeSubTab === 'calendar_event' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            {/* Top Infographic Preview Card */}
            <div className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 text-stone-100">
              <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-stone-950/90 border-b lg:border-b-0 lg:border-r border-stone-800">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-900/60 text-emerald-300 font-bold border border-emerald-700/50 flex items-center gap-1">
                      <Calendar size={12} /> ICEARTH OFFICIAL CALENDAR
                    </span>
                    <span className="text-xs text-amber-400 font-mono font-bold">October 19, 20 & 21, 2026</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-3">
                    Virtual Seminar Series: 2026 Ibero-American Lead Poisoning Prevention Week
                  </h3>
                  <p className="text-xs text-stone-300 font-light leading-relaxed mb-4">
                    Organized by the <strong>Pan American Health Organization (PAHO)</strong> and the <strong>Ibero-American Society of Environmental Health (SIBSA)</strong>, with support from the <strong>World Health Organization (WHO)</strong>, commemorating the 14th International Lead Poisoning Prevention Week (October 18–24, 2026).
                  </p>
                  <div className="p-3 bg-amber-950/40 border-l-4 border-amber-500 rounded text-xs text-amber-200 mb-4 space-y-1">
                    <div className="font-bold uppercase tracking-wider text-[10px] text-amber-400">Official Theme:</div>
                    <p className="italic">“Lead in Latin America: From Detection to Prevention”</p>
                    <p className="text-[11px] text-stone-300 not-italic pt-1">
                      Platform: Zoom (Registration Required) • Languages: Simultaneous English & Spanish
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-2">
                  <a
                    href="https://www.paho.org/en/events/virtual-seminar-series-2026-ibero-american-lead-poisoning-prevention-week"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-black transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Video size={13} />
                    <span>Register on PAHO Zoom</span>
                    <ExternalLink size={12} />
                  </a>
                  <button
                    onClick={() => setIsArtModalOpen(true)}
                    className="px-3 py-2 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-lg text-xs font-bold transition-all border border-stone-700 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Maximize2 size={13} /> Inspect Plate
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 relative bg-black flex items-center justify-center p-3 cursor-pointer group" onClick={() => setIsArtModalOpen(true)}>
                <img
                  src={pahoLeadPlateImg}
                  alt="Indigenous America Lead Exposenomics PAHO Lead Week 2026 Infographic"
                  className="w-full h-auto max-h-[420px] object-contain rounded-lg group-hover:scale-[1.01] transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="px-3 py-1.5 rounded-full bg-black/80 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 border border-amber-400/50">
                    <Maximize2 size={13} /> Click to Inspect High-Res Plate
                  </span>
                </div>
              </div>
            </div>

            {/* Comprehensive Time Zone Schedule Table */}
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6 border-b border-stone-100 dark:border-stone-800 pb-4">
                <div>
                  <h3 className="text-lg font-black text-stone-900 dark:text-stone-100 flex items-center gap-2">
                    <Clock className="text-amber-500" size={18} />
                    Official 3-Day Program & Global Time Zone Schedule
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400">
                    October 19, 20 and 21, 2026 • Live 3-Hour Virtual Sessions on Zoom
                  </p>
                </div>
                <span className="px-3 py-1 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold border border-emerald-300 dark:border-emerald-800">
                  14th International Lead Prevention Week
                </span>
              </div>

              {/* Timezone Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50">
                  <div className="text-[10px] font-mono uppercase text-amber-800 dark:text-amber-400 font-bold">Primary EDT Time Zone</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-0.5">1:00 PM – 4:00 PM</div>
                  <div className="text-[11px] text-stone-600 dark:text-stone-400 mt-1">
                    Washington, D.C. • Bahamas • Dominican Republic • Haiti • Venezuela
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                  <div className="text-[10px] font-mono uppercase text-stone-500 font-bold">Central America</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-0.5">11:00 AM – 2:00 PM</div>
                  <div className="text-[11px] text-stone-600 dark:text-stone-400 mt-1">
                    Guatemala • Costa Rica • El Salvador • Honduras • Nicaragua
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                  <div className="text-[10px] font-mono uppercase text-stone-500 font-bold">Andean / Caribbean</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-0.5">12:00 PM – 3:00 PM</div>
                  <div className="text-[11px] text-stone-600 dark:text-stone-400 mt-1">
                    Colombia • Ecuador • Jamaica • Peru • Panama
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-950 border border-stone-200 dark:border-stone-800">
                  <div className="text-[10px] font-mono uppercase text-stone-500 font-bold">Southern Cone & Suriname</div>
                  <div className="text-lg font-black text-stone-900 dark:text-white mt-0.5">2:00 PM – 5:00 PM</div>
                  <div className="text-[11px] text-stone-600 dark:text-stone-400 mt-1">
                    Argentina • Brasília • Chile • Suriname • Uruguay
                  </div>
                </div>
              </div>

              {/* Day by Day Breakdown */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 text-xs font-mono font-bold">DAY 1</span>
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm">
                        Monday, October 19, 2026: “Detection, Biological Monitoring & Hidden Exposure Scenarios”
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Characterizing pediatric blood lead level (BLL) surveillance systems, laboratory capacity gaps across Latin America, and point-of-care capillary screening protocols.
                    </p>
                  </div>
                  <div className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 shrink-0">
                    1:00 – 4:00 PM EDT
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-rose-500 text-white text-xs font-mono font-bold">DAY 2</span>
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm">
                        Tuesday, October 20, 2026: “Artisanal Metallurgy, Used Lead-Acid Batteries (ULAB) & Territorial Vectors”
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Auditing the specific characteristics of human exposure in the Americas: formal vs informal mining, unregulated battery smelters, and glazed pottery (*barro vidriado*).
                    </p>
                  </div>
                  <div className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 shrink-0">
                    1:00 – 4:00 PM EDT
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-emerald-500 text-stone-950 text-xs font-mono font-bold">DAY 3</span>
                      <h4 className="font-bold text-stone-900 dark:text-white text-sm">
                        Wednesday, October 21, 2026: “From Detection to Prevention: Policy, Clinical Management & Community Protections”
                      </h4>
                    </div>
                    <p className="text-xs text-stone-600 dark:text-stone-400">
                      Developing regional technical guides, legislative prohibitions on lead in paint and ceramics, clinical chelation pathways, and sovereign community environmental defense.
                    </p>
                  </div>
                  <div className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 shrink-0">
                    1:00 – 4:00 PM EDT
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: THE 10,000-YEAR PRISTINE CONTINUUM */}
        {activeSubTab === 'ten_thousand_years' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold mb-3">
                  <Atom size={14} /> ISOTOPIC ARCHEOLOGICAL RECORD
                </div>
                <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100 mb-3">
                  The Least Poisoned Humans in Planetary History
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                  When the ancestors of Indigenous Americans crossed the Beringian land bridge over 15,000 to 30,000 years ago, they entered a pristine continent devoid of pyrometallurgical lead smelting, lead pipes, or cupellation. Pre-contact human skeletal remains across North and South America (from Ohio Hopewell mounds to Ancestral Puebloan cliff dwellings and Andean pre-Inca cemeteries) reveal bone lead concentrations consistently below <strong>0.01 micrograms per gram (µg/g)</strong>. 
                  Biologically, Indigenous Americans had pristine prefrontal cortex development, unimpaired executive impulse inhibition, and zero anthropogenic neurotoxic load.
                </p>
              </div>

              {/* 10,000-Year Timeline Chart */}
              <div className="mt-4 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                    <BarChart3 size={16} className="text-amber-500" />
                    10,000-Year Bone Lead Burden: Indigenous Americas vs Old World Europe (µg/g ash)
                  </h4>
                  <span className="text-xs text-stone-500 font-mono">Patterson (1980) / Ericson et al. / Roulet Exposenomics</span>
                </div>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={timelineBoneLeadData} margin={{ top: 10, right: 30, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                      <XAxis dataKey="era" stroke="#888888" fontSize={10} />
                      <YAxis stroke="#888888" fontSize={11} label={{ value: 'Bone Lead (µg/g ash)', angle: -90, position: 'insideLeft', fill: '#888888', fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Area type="monotone" dataKey="indigenousAmericas" fill="#10b98125" stroke="#10b981" strokeWidth={3} name="Indigenous Americas Bone Pb (µg/g)" />
                      <Line type="monotone" dataKey="oldWorldEurope" stroke="#ef4444" strokeWidth={2.5} name="European Colonizers Bone Pb (µg/g)" />
                      <Line type="monotone" dataKey="colonialImperial" stroke="#f59e0b" strokeWidth={2} strokeDasharray="4 4" name="Colonial Mining Forced Extraction (µg/g)" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Three Scientific Comparative Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-1.5">
                    <CheckCircle2 size={16} />
                    <span>The Pristine Indigenous Baseline</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Geochemist Clair Patterson proved in 1980 that natural natural background lead in ancient human bones was ~0.01 µg/g. Pre-contact Indigenous Americans were the purest realization of this baseline, living in harmonious equilibrium with untainted soils, mountain streams, and ceremonial clays.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
                  <div className="font-bold text-red-600 dark:text-red-400 text-sm flex items-center gap-1.5">
                    <Skull size={16} />
                    <span>The Toxic European Legacy</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    By 100 CE, the Roman Empire smelted 80,000 tons of lead annually. Romans boiled wine syrup in lead vessels (*sapa*), consumed water through lead pipes (*fistulae*), and ingested lethal doses daily. This systemic neurotoxicity carried straight through medieval and Renaissance Europe.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-2">
                  <div className="font-bold text-amber-600 dark:text-amber-400 text-sm flex items-center gap-1.5">
                    <AlertTriangle size={16} />
                    <span>The Behavioral Divergence</span>
                  </div>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Under Roulet's Law, chronic childhood lead exposure damages the anterior cingulate cortex, destroying empathy and impulse control while inducing paranoia and aggression. The colonizers who arrived in 1492 were heavily lead-poisoned conquerors invading pristine human societies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: 1492 COLONIAL INVASION & EXTRACTIVE GENOCIDE */}
        {activeSubTab === 'colonial_1492' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-red-950 via-stone-900 to-black text-white border border-red-800/60 rounded-2xl p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded bg-red-600 text-stone-950 text-xs font-black uppercase tracking-widest">
                  COLONIAL EXPOSENOMIC FORENSICS
                </span>
                <span className="text-xs font-mono text-amber-300">
                  1492–1825: THE METALLURGICAL EXTERMINATION OF INDIGENOUS AMERICANS
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Potosí, Zacatecas & The Enslavement of the Pristine for Heavy Metal Extraction
              </h3>

              <div className="space-y-6 text-stone-300 text-sm leading-relaxed font-light">
                <p>
                  The Spanish invasion of the Americas was fundamentally an extractive enterprise driven by mercury, silver, and lead. When Spanish forces discovered the Cerro Rico of Potosí (Bolivia) in 1545 and Zacatecas (Mexico) in 1546, they instituted the <em>mita</em>—forced Indigenous draft labor that enslaved Quechua, Aymara, and Mesoamerican miners for toxic subterranean extraction.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-left">
                  <div className="p-5 rounded-xl bg-stone-900/90 border border-red-700/60 shadow-lg">
                    <h4 className="font-bold text-amber-300 text-base mb-2 flex items-center gap-2">
                      <Skull size={18} className="text-red-500" />
                      1. Cerro Rico: The Mountain That Eats Men
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      At 4,000+ meters elevation, over 8 million Indigenous miners died from cave-ins, silicosis, and acute heavy metal vapor poisoning. Silver veins were tightly bound with galena (lead sulfide) and cupellation slag, exposing miners to lethal respiratory lead doses.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-stone-900/90 border border-red-700/60 shadow-lg">
                    <h4 className="font-bold text-amber-300 text-base mb-2 flex items-center gap-2">
                      <Flame size={18} className="text-red-500" />
                      2. Patio Process Amalgamation
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Bartolomé de Medina’s patio process required bare-legged Indigenous laborers to tread toxic slurries of pulverized silver-lead ore, mercury, and copper sulfate for weeks on end, causing chronic heavy metal encephalopathy, tremors, and agonizing death.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-stone-900/90 border border-red-700/60 shadow-lg">
                    <h4 className="font-bold text-amber-300 text-base mb-2 flex items-center gap-2">
                      <Scale size={18} className="text-red-500" />
                      3. The Ultimate Inversion
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      The worst lead-poisoned humans on earth (European imperialists) invaded, enslaved, and exterminated the least lead-poisoned humans on earth to fuel the global silver standard. The stolen silver financed European militarism, while leaving Indigenous homelands poisoned forever.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-red-950/70 border border-red-600/80 text-stone-200">
                  <h4 className="font-black text-amber-300 text-base mb-2">
                    The Anthropological Truth of 1492:
                  </h4>
                  <p className="text-xs sm:text-sm italic leading-relaxed text-amber-100">
                    “Europeans did not conquer the Americas because they were intellectually or morally superior. They conquered because centuries of chronic lead poisoning had biologically selected for extreme sociopathic aggression, ruthless empire-building, and moral apathy. They exterminated pristine Indigenous populations whose societies had evolved without the neurotoxic madness of heavy metal smelting.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: DISTINGUISHING INDIGENOUS VS HISPANIC REALITIES */}
        {activeSubTab === 'indigenous_vs_hispanic' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="max-w-4xl mb-6">
                <span className="px-2.5 py-1 rounded bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 text-xs font-mono font-bold">
                  DEMOGRAPHIC & EXPOSENOMIC TAXONOMY
                </span>
                <h3 className="text-2xl font-black text-stone-900 dark:text-stone-100 mt-2 mb-2">
                  Differentiating Indigenous Americans from "Hispanic" and "Latin American" Constructs
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
                  The terms "Hispanic" and "Latin American" are modern geopolitical and linguistic labels that conflate distinct genetic lineages, ancestral sovereignties, and toxic exposure realities. Indigenous Americans carry unique environmental vulnerabilities shaped by 500 years of dispossession.
                </p>
              </div>

              {/* Exposure Vectors Chart */}
              <div className="mt-4 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-stone-900 dark:text-stone-100 text-sm flex items-center gap-2">
                    <BarChart3 size={16} className="text-rose-500" />
                    Key Environmental Lead Vectors in the Americas by Community Type (%)
                  </h4>
                  <span className="text-xs text-stone-500 font-mono">PAHO / SIBSA Technical Assessment 2026</span>
                </div>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={exposureVectorsData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#88888820" />
                      <XAxis dataKey="vector" stroke="#888888" fontSize={10} />
                      <YAxis stroke="#888888" fontSize={11} label={{ value: '% Population Impacted', angle: -90, position: 'insideLeft', fill: '#888888', fontSize: 11 }} />
                      <Tooltip contentStyle={{ backgroundColor: '#1c1917', borderColor: '#44403c', color: '#f5f5f4', borderRadius: '8px', fontSize: '12px' }} />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                      <Bar dataKey="indigenousCommunal" fill="#dc2626" name="Indigenous Communal Territories (%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ruralMestizo" fill="#f59e0b" name="Rural Mixed / Mestizo (%)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="urbanAffluent" fill="#3b82f6" name="Urban Affluent Enclaves (%)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Comparison Matrix Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-950 text-stone-700 dark:text-stone-300 font-bold">
                      <th className="py-2.5 px-3">Taxonomic Category</th>
                      <th className="py-2.5 px-3">Genetic & Cultural Ancestry</th>
                      <th className="py-2.5 px-3">Primary Toxic Lead Vectors</th>
                      <th className="py-2.5 px-3">Estimated Mean BLL</th>
                      <th className="py-2.5 px-3">Jurisdictional Governance Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="py-3 px-3 font-bold text-amber-600 dark:text-amber-400">
                        Tribal Indigenous Americans (Andean, Amazonian, Maya, Pueblo, Diné)
                      </td>
                      <td className="py-3 px-3">10,000+ years sovereign lineages; distinct languages, clan systems, and spiritual ties to land.</td>
                      <td className="py-3 px-3 font-mono text-red-500 font-bold">Abandoned mine tailings, artisanal pottery glaze (*greta*), unlined river water.</td>
                      <td className="py-3 px-3 font-mono font-black text-red-600 dark:text-red-400">7.4 µg/dL (28.5% EBLL)</td>
                      <td className="py-3 px-3 font-bold text-emerald-600">Sovereign Nations, Communal Resguardos, Tribal Governments.</td>
                    </tr>
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="py-3 px-3 font-bold text-stone-800 dark:text-stone-200">
                        Rural Mestizo / Mixed Populations
                      </td>
                      <td className="py-3 px-3">Admixture of Indigenous and European ancestries; Spanish or Portuguese speaking.</td>
                      <td className="py-3 px-3 font-mono text-amber-500">Informal car battery recycling (ULAB), agricultural pesticides, culinary cookware.</td>
                      <td className="py-3 px-3 font-mono font-bold text-amber-600 dark:text-amber-400">4.2 µg/dL (14.2% EBLL)</td>
                      <td className="py-3 px-3">Municipal / Provincial state authorities.</td>
                    </tr>
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="py-3 px-3 font-bold text-stone-800 dark:text-stone-200">
                        Urban Hispanic Population
                      </td>
                      <td className="py-3 px-3">Urbanized multi-ethnic population across Latin America and US diaspora.</td>
                      <td className="py-3 px-3 font-mono text-stone-400">Pre-1978 urban paint, traffic dust residue, aged municipal plumbing.</td>
                      <td className="py-3 px-3 font-mono text-stone-600 dark:text-stone-300">2.1 µg/dL (6.8% EBLL)</td>
                      <td className="py-3 px-3">Metropolitan civil administration.</td>
                    </tr>
                    <tr className="hover:bg-stone-50 dark:hover:bg-stone-800/40">
                      <td className="py-3 px-3 font-bold text-blue-600 dark:text-blue-400">
                        European-Descended Elite
                      </td>
                      <td className="py-3 px-3">Predominantly Spanish/European descent; concentrated in affluent gated districts.</td>
                      <td className="py-3 px-3 font-mono text-blue-500">Minimal (remodeled housing, bottled/reverse-osmosis water, zero artisanal exposure).</td>
                      <td className="py-3 px-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">0.7 µg/dL (1.2% EBLL)</td>
                      <td className="py-3 px-3">Private estates, gated municipal enclaves.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: ROULET'S LAW: THE ULTIMATE PROOF FOR ICEARTH */}
        {activeSubTab === 'roulets_law_proof' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="bg-gradient-to-br from-amber-950 via-stone-900 to-black text-white border border-amber-800/60 rounded-2xl p-6 sm:p-10 shadow-2xl">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 rounded bg-amber-500 text-stone-950 text-xs font-black uppercase tracking-widest">
                  ROULET'S LAW ULTIMATE PROOF
                </span>
                <span className="text-xs font-mono text-amber-300">
                  WHY ICEARTH IS "INDIGENOUS COMMUNITIES EARTH"
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white mb-6 leading-tight">
                The Exposenomics Synthesis of Sovereignty, Restorative Science & AI Computing
              </h3>

              <div className="space-y-6 text-stone-300 text-sm leading-relaxed font-light">
                <p>
                  ICEarth was named <strong>Indigenous Communities Earth</strong> because Indigenous peoples embody both the historic pinnacle of unpoisoned human biology and the greatest victims of modern corporate-colonial environmental extraction. 
                  Roulet’s Law establishes that exposure to environmental neurotoxins without consent creates continuous, unliquidated tort liabilities that must be remediated through restorative science, sovereign data infrastructure, and direct community ownership.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6 text-left">
                  <div className="p-5 rounded-xl bg-stone-900/90 border border-amber-700/60 shadow-lg">
                    <h4 className="font-bold text-amber-300 text-base mb-2 flex items-center gap-2">
                      <Scale size={18} className="text-amber-400" />
                      1. The Restorative Mandate
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Remediating lead in Indigenous America is not charity—it is overdue restitution for 500 years of forced mining, toxic pottery glazing, and abandoned tailings that poisoned the pure heirs of the continent.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-stone-900/90 border border-amber-700/60 shadow-lg">
                    <h4 className="font-bold text-amber-300 text-base mb-2 flex items-center gap-2">
                      <Lock size={18} className="text-amber-400" />
                      2. Sovereign Data Enclaves
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      Indigenous nations cannot surrender their health and environmental data to centralized Big Tech cloud brokers. ICEarth deploys local, zero-knowledge, encrypted data stores governed by tribal elders.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-stone-900/90 border border-amber-700/60 shadow-lg">
                    <h4 className="font-bold text-amber-300 text-base mb-2 flex items-center gap-2">
                      <Atom size={18} className="text-amber-400" />
                      3. High-Tech Sovereign Compute
                    </h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      As articulated in Plate #69, Indigenous peoples have the right to progress. ICEarth provides clean, waterless dielectric computing powered by off-grid microgrids—ensuring AI advancement happens strictly on sovereign terms.
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-amber-950/70 border border-amber-600/80 text-stone-200">
                  <h4 className="font-black text-amber-300 text-base mb-2">
                    Norman Roulet’s Foundational Declaration:
                  </h4>
                  <p className="text-xs sm:text-sm italic leading-relaxed text-amber-100">
                    “Indigenous Americans survived 10,000 years in sacred, unpoisoned harmony with the Earth, only to have their bodies and lands sacrificed to the metallurgical greed of lead-poisoned conquerors. Today, on ICEarth, we fuse ancient Indigenous stewardship with Swiss-grade exposenomics and frontier Gemini AI. We restore the pristine baseline of the Americas. That is Roulet’s Law. That is Indigenous Communities Earth.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CROSS-NAVIGATION PORTAL LINKS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mt-12">
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl text-stone-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 border-b border-stone-800 pb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Layers className="text-amber-400" size={18} />
                Related Sovereign Modules on ICEarth
              </h3>
              <p className="text-xs text-stone-400">
                Explore connected lead prevention events, epidemiological proofs, and Indigenous sovereignty archives.
              </p>
            </div>
            <div className="text-xs font-mono text-stone-400">Plate #72 Network Links</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => onNavigateTab?.('nlppw_2026')}
              className="p-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-emerald-500 text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-emerald-400 mb-1">
                <span>🗓️ Lead Prevention Week 2026</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-stone-400">
                EPA, CDC & HUD national campaign hub and community dispatch calendar.
              </p>
            </button>

            <button
              onClick={() => onNavigateTab?.('lead_crime_racial_disparities')}
              className="p-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-red-500 text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-red-400 mb-1">
                <span>⚖️ Lead-Crime: Racial Disparities</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-stone-400">
                Brown University 7-state study & the proof of preventable structural genocide.
              </p>
            </button>

            <button
              onClick={() => onNavigateTab?.('global_lead_crime_proof')}
              className="p-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-amber-500 text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-amber-400 mb-1">
                <span>👑 Global Lead-Crime Proof</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-stone-400">
                The 8,000-year anthropogenic continuum & universal law of violent crime.
              </p>
            </button>

            <button
              onClick={() => onNavigateTab?.('indigenous_right_to_progress')}
              className="p-3 rounded-xl bg-stone-950 hover:bg-stone-800 border border-stone-800 hover:border-cyan-500 text-left transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs font-bold text-amber-300 group-hover:text-cyan-400 mb-1">
                <span>🪶 Indigenous Right to Progress</span>
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-[11px] text-stone-400">
                Contemporary tribal energy economies & high-tech cultural sovereignty.
              </p>
            </button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ARTWORK PROVENANCE MODAL */}
      {isArtModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative max-w-6xl w-full bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]">
            <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800 bg-stone-900/80">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 rounded bg-amber-500 text-stone-950 text-xs font-black">
                  PLATE #72
                </span>
                <h4 className="text-sm font-bold text-white">
                  Indigenous America Lead Exposenomics & PAHO Lead Week 2026 Infographic
                </h4>
              </div>
              <button
                onClick={() => setIsArtModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={pahoLeadPlateImg}
                alt="Indigenous America Lead Exposenomics Infographic Full Resolution"
                className="max-h-[75vh] w-auto object-contain rounded-lg shadow-2xl"
              />
            </div>

            <div className="px-6 py-4 bg-stone-900/90 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="font-mono text-stone-400 text-[11px]">
                Cryptographic Vault Hash: <span className="text-amber-300 font-bold">{vaultHash}</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyHash}
                  className="px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedHash ? 'Hash Copied!' : 'Copy Vault Hash'}</span>
                </button>
                <button
                  onClick={() => setIsArtModalOpen(false)}
                  className="px-3 py-1.5 rounded bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default IndigenousAmericaLeadExposenomics;
