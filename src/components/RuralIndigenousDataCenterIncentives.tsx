import React, { useState } from 'react';
import ruralDatacenterPlateImg from '../assets/images/rural_datacenter_tax_1791131258360.jpg';
import {
  DollarSign,
  Zap,
  Building,
  Home,
  Shield,
  Scale,
  Users,
  AlertTriangle,
  ExternalLink,
  Maximize2,
  Copy,
  Check,
  FileText,
  Sliders,
  ArrowRight,
  Layers,
  BarChart3,
  TrendingDown,
  TrendingUp,
  Ban,
  Droplets,
  Landmark,
  Radio,
  FileCheck,
  Compass,
  Cpu,
  ShieldAlert,
  Sparkles,
  PieChart as PieIcon,
  Crown
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
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

interface RuralIndigenousDataCenterIncentivesProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const RuralIndigenousDataCenterIncentives: React.FC<RuralIndigenousDataCenterIncentivesProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'wired_dispatch' | 'tribal_tax_sovereignty' | 'interactive_calculator' | 'recharts_analytics' | 'sovereign_blueprint'
  >('wired_dispatch');

  // Provenance hash state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xRURAL_INDIGENOUS_DATACENTER_TAX_INCENTIVES_PLATE_64_VAULT_2026';

  // Modal state for master artwork
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  // Interactive Calculator State
  const [datacenterCapacityMW, setDatacenterCapacityMW] = useState<number>(250); // 50 to 1000 MW
  const [jurisdictionType, setJurisdictionType] = useState<'rural_oz' | 'tribal_trust' | 'state_corridor'>('tribal_trust');
  const [waterCoolingType, setWaterCoolingType] = useState<'evaporative' | 'closed_loop'>('evaporative');

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Calculations for calculator
  const capitalExpenditureMillions = datacenterCapacityMW * 9.5; // ~$9.5M per MW for hyperscale AI
  const federalTaxBreakMillions = jurisdictionType === 'rural_oz' 
    ? capitalExpenditureMillions * 0.38
    : jurisdictionType === 'tribal_trust'
    ? capitalExpenditureMillions * 0.45 // NMTC + Section 168(j) accelerated + dual exemption potential
    : capitalExpenditureMillions * 0.22; // standard state corridor

  const annualWaterGallonsMillions = waterCoolingType === 'evaporative'
    ? datacenterCapacityMW * 1.8 // ~450M gallons for 250MW
    : 0;

  const residentialRateHikePercent = Math.min(65, Math.round((datacenterCapacityMW / 15) * 2.2));
  const householdMonthlyHikeDollars = Math.round(residentialRateHikePercent * 1.75);
  const requiredSovereignDividendHousehold = Math.round((federalTaxBreakMillions * 1000000 * 0.25) / 12000); // 25% restitution over 12k residents

  // Data for Charts
  const comparativeCostData = [
    {
      category: 'Federal Tax Windfall',
      corporateBenefit: Math.round(federalTaxBreakMillions),
      communityCost: 0
    },
    {
      category: 'Grid Upgrades Shifted',
      corporateBenefit: 0,
      communityCost: Math.round(datacenterCapacityMW * 0.85)
    },
    {
      category: 'Residential Power Rate Hikes',
      corporateBenefit: 0,
      communityCost: Math.round(householdMonthlyHikeDollars * 144) / 10
    },
    {
      category: 'Aquifer & Water Depletion',
      corporateBenefit: 0,
      communityCost: Math.round(annualWaterGallonsMillions * 0.08)
    },
    {
      category: 'Mandatory Sovereign Dividend',
      corporateBenefit: Math.round(federalTaxBreakMillions * 0.3),
      communityCost: Math.round(requiredSovereignDividendHousehold * 12) / 1000
    }
  ];

  const radarMetrics = [
    { dimension: 'Tax Subsidy Extraction', federalOz: 88, tribalSovereign: 32, sovereignIt: 5 },
    { dimension: 'Community Water Protection', federalOz: 12, tribalSovereign: 78, sovereignIt: 100 },
    { dimension: 'Elder & Council Veto Power', federalOz: 8, tribalSovereign: 92, sovereignIt: 100 },
    { dimension: 'Immunity to Utility Hikes', federalOz: 15, tribalSovereign: 65, sovereignIt: 98 },
    { dimension: 'Local Knowledge Dividends', federalOz: 0, tribalSovereign: 35, sovereignIt: 96 },
    { dimension: 'Zero-Knowledge Security', federalOz: 20, tribalSovereign: 45, sovereignIt: 100 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-100 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-200 pb-20 font-sans`}>
      {/* 1. TOP HERO BANNER: WIRED INVESTIGATION & ONE BIG BEAUTIFUL BILL ACT */}
      <header className={`border-b ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 font-mono text-xs font-black rounded-lg flex items-center gap-1.5 border ${
                isLight ? 'bg-amber-100 text-amber-950 border-amber-300' : 'bg-amber-950/60 text-amber-300 border-amber-700'
              }`}>
                <Landmark size={14} className="text-amber-500" />
                <span>TAX FORENSICS • WIRED MAGAZINE & TRIBAL SOVEREIGNTY • OCT 2026</span>
              </span>
              <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                Plate #64 Forensic Audit • Congressional Tax Windfall
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://www.wired.com/story/rural-data-centers-are-in-for-a-big-federal-tax-break/?utm_source=firefox-newtab-en-us"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-cyan-300 border-stone-700'
                }`}
              >
                <span>Wired Feature (Oct 2026)</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-stone-950 font-mono text-xs font-bold rounded-lg shadow flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105"
              >
                <Maximize2 size={13} />
                <span>Inspect Master Plate #64</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-2 py-0.5 rounded bg-amber-600 text-stone-950 font-black uppercase">
                Federal Tax Windfall
              </span>
              <span className={`px-2 py-0.5 rounded font-bold ${isLight ? 'bg-stone-200 text-stone-800' : 'bg-stone-800 text-stone-300'}`}>
                One Big Beautiful Bill Act • Jan 1 Implementation
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-600 text-white font-bold">
                House Ways & Means Chair Jason Smith
              </span>
              <span className={`px-2 py-0.5 rounded font-bold ${isLight ? 'bg-emerald-100 text-emerald-950' : 'bg-emerald-950/40 text-emerald-300'}`}>
                Native American Tribal Tax Sovereignty (IRC §7871 & §168(j))
              </span>
            </div>

            <h1 className={`text-3xl sm:text-5xl font-serif font-black tracking-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              Rural & Indigenous Data Centers: The Federal Tax Break & Sovereign Resistance
            </h1>

            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              Wired reports that on <strong>January 1</strong>, a massive corporate tax windfall will kick in for rural data center projects across the United States under the <strong>One Big Beautiful Bill Act</strong>. Expanding rural opportunity zone incentives, House Ways and Means Committee Chairman <strong>Jason Smith</strong> declared that the new rules <em>“may significantly lower barriers for large-scale, capital-intensive projects in rural areas—most notably hyperscale data centers.”</em> Simultaneously, <strong>Native American nations</strong> hold distinct sovereign tax jurisdictions, accelerated reservation depreciation rules, and New Markets Tax Credits. Yet many hyperscalers hesitate to take the “free cash.” ICEarth audits the financial mechanics of this federal giveaway, explores tribal sovereign advantages and perils, and presents <strong>Sovereign IT</strong> as the community antidote to corporate resource extraction.
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Effective Date</span>
                <Landmark size={14} className="text-amber-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-stone-950' : 'text-amber-400'}`}>January 1</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>One Big Beautiful Bill Act rural tax windfall launch</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Key Sponsor</span>
                <FileCheck size={14} className="text-purple-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>Rep. Jason Smith</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>House Ways and Means Committee Chairman</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Hyperscale Subsidy</span>
                <DollarSign size={14} className="text-emerald-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>35% – 50% CapEx</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Accelerated bonus depreciation + Opportunity Zone gains</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Tribal Nations</span>
                <Crown size={14} className="text-amber-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-amber-700' : 'text-amber-400'}`}>574 Nations</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>IRC §7871 & §168(j) sovereign tax autonomy</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Developer Reluctance</span>
                <AlertTriangle size={14} className="text-red-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-red-800' : 'text-red-400'}`}>7-Year Queue</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>PJM/MISO grid lock & fear of federal audit strings</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Sovereign Antidote</span>
                <Shield size={14} className="text-cyan-500" />
              </div>
              <div className={`text-lg font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>Roulet’s Law</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>100% Closed loop, 0 water, elder veto & cognitive dividends</p>
            </div>
          </div>

          {/* Sub-tab Navigation */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-200 dark:border-stone-800">
            <button
              onClick={() => setActiveSubTab('wired_dispatch')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'wired_dispatch'
                  ? 'bg-amber-600 text-stone-950 border-amber-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <FileText size={13} />
              <span>1. The Wired Investigation & The Bill</span>
            </button>

            <button
              onClick={() => setActiveSubTab('tribal_tax_sovereignty')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'tribal_tax_sovereignty'
                  ? 'bg-purple-600 text-white border-purple-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <Crown size={13} />
              <span>2. Native American Nations & Tax Sovereignty</span>
            </button>

            <button
              onClick={() => setActiveSubTab('interactive_calculator')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'interactive_calculator'
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <Sliders size={13} />
              <span>3. Interactive Subsidy & Resource Calculator</span>
            </button>

            <button
              onClick={() => setActiveSubTab('recharts_analytics')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'recharts_analytics'
                  ? 'bg-cyan-600 text-white border-cyan-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <BarChart3 size={13} />
              <span>4. Forensic Radar & Cost Breakdown</span>
            </button>

            <button
              onClick={() => setActiveSubTab('sovereign_blueprint')}
              className={`px-4 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 border ${
                activeSubTab === 'sovereign_blueprint'
                  ? 'bg-red-600 text-white border-red-500 shadow-md font-black'
                  : isLight
                  ? 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-300 border-stone-700'
              }`}
            >
              <Shield size={13} />
              <span>5. Model Tribal Ordinance & Sovereign IT</span>
            </button>
          </div>
        </div>
      </header>

      {/* 2. MAIN SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* SUBTAB 1: WIRED DISPATCH & THE BILL */}
        {activeSubTab === 'wired_dispatch' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-5`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-amber-500/20 text-amber-700 dark:text-amber-300 font-mono text-xs font-black rounded-lg border border-amber-500/30">
                    WIRED EXCLUSIVE DISPATCH
                  </span>
                  <span className={`text-xs font-mono ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                    Published October 2026 • By Wired Technology Desk
                  </span>
                </div>
                <a
                  href="https://www.wired.com/story/rural-data-centers-are-in-for-a-big-federal-tax-break/?utm_source=firefox-newtab-en-us"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono font-bold text-amber-600 hover:underline flex items-center gap-1"
                >
                  <span>View Original Article on Wired</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <blockquote className={`p-4 rounded-xl border-l-4 border-amber-500 ${isLight ? 'bg-amber-50/50 text-stone-800' : 'bg-stone-950 text-stone-200'}`}>
                  <p className="font-serif italic text-base sm:text-lg mb-2">
                    “Under the One Big Beautiful Bill Act, data center projects in rural areas could be eligible for major tax benefits starting next year. Some hyperscalers do not seem eager to take the free cash.”
                  </p>
                  <p className="font-serif italic text-base sm:text-lg mb-2">
                    “On January 1, a new tax windfall will kick in that could benefit scores of rural data center projects—all thanks to the One Big Beautiful Bill Act. Starting next year, projects sited in tracts of rural land across the country will be newly eligible for a set of specific corporate tax benefits under a program expanded by the bill.”
                  </p>
                  <p className="font-serif italic text-base sm:text-lg">
                    “The new rules <em>‘may significantly lower barriers for large-scale, capital-intensive projects in rural areas—most notably hyperscale data centers,’</em> said a statement from Ways and Means Committee chair Jason Smith last year. <em>‘The economic case for building data centers in designated rural opportunity zones becomes far more compelling’</em> with the new program, he continued.”
                  </p>
                  <div className="mt-3 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                    — Rep. Jason Smith (Chairman, House Ways and Means Committee) via Wired
                  </div>
                </blockquote>

                <h3 className={`text-lg font-bold font-serif ${isLight ? 'text-stone-900' : 'text-stone-100'}`}>
                  Forensic Exposenomics Breakdown: Why Hyperscalers Hesitate to Take the “Free Cash”
                </h3>

                <p>
                  While congressional politicians and corporate tax lobbyists tout the <strong>One Big Beautiful Bill Act</strong> as an unalloyed economic stimulus, the hesitation of hyperscalers exposes a deeper truth about the economics of AI infrastructure:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-red-600 dark:text-red-400">
                      <AlertTriangle size={15} />
                      <span>1. THE RURAL GRID INTERCONNECTION BOTTLENECK</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Rural opportunity zones are defined by geography, not electric transmission capacity. Siting a 500 MW hyperscale facility in rural Missouri, Ohio, or New Mexico requires multi-gigawatt transmission line expansions that face a <strong>5 to 7-year interconnection queue</strong> in regional transmission networks like PJM and MISO. Free tax cash does not create high-voltage substations overnight.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-amber-600 dark:text-amber-400">
                      <Scale size={15} />
                      <span>2. FEDERAL REGULATORY STRINGS & COMPLIANCE AUDITS</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Accepting expanded federal opportunity zone write-offs triggers strict federal reporting mandates, prevailing wage certifications under the Davis-Bacon Act, and supply-chain domestic content scrutiny. Hyperscalers prefer opaque state-level tax giveaways (like Ohio’s $100M+ handouts) where municipal councils sign nondisclosure agreements and demand zero federal accountability.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-purple-600 dark:text-purple-400">
                      <Users size={15} />
                      <span>3. RISING RURAL REVOLT & ZONING MORATORIA</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      From <strong>Hazle Township, PA</strong> (where citizens enacted a zoning moratorium after rejecting $10,000 cash buyouts) to rural Virginia, residents are organizing against substation noise, diesel pollution, and skyrocketing electric rates. Siting in designated rural tracts paints a giant bullseye for local citizen litigation and municipal moratoria.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 text-xs font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      <Droplets size={15} />
                      <span>4. AQUIFER DEPLETION & AGRICULTURAL CLASH</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Rural agricultural communities rely on shallow alluvial aquifers for irrigation and livestock. A single 250 MW evaporative data center consumes <strong>1.5 to 3 million gallons of fresh potable water per day</strong>—competing directly with multi-generational farming families. Federal tax subsidies do not refill a dry well.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: NATIVE AMERICAN NATIONS & TAX SOVEREIGNTY */}
        {activeSubTab === 'tribal_tax_sovereignty' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-5`}>
              <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-purple-500/20 text-purple-700 dark:text-purple-300 font-mono text-xs font-black rounded-lg border border-purple-500/30">
                    TRIBAL SOVEREIGN TAX CODE & FEDERAL PREEMPTION
                  </span>
                  <span className={`text-xs font-mono ${isLight ? 'text-stone-600' : 'text-stone-400'}`}>
                    574 Federally Recognized Sovereign Nations • Title 26 & Title 25 US Code
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <h3 className={`text-xl font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  The Indigenous Tax Landscape: Advantages, Perils & Sovereign Autonomy
                </h3>

                <p>
                  Native American tribal reservations encompass over <strong>56 million acres</strong> of sovereign land across the United States. Under federal Indian law and the Internal Revenue Code, tribal nations possess inherent sovereign authority and unique statutory tax instruments that corporate developers frequently attempt to exploit:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600 dark:text-amber-400">
                      <Landmark size={15} />
                      <span>IRC §168(j): ACCELERATED DEPRECIATION</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Under Section 168(j), qualified infrastructure property placed in service on Indian reservations enjoys significantly shortened recovery periods (often 3 to 5 years instead of standard 15 to 39 years). Hyperscalers view this as an aggressive tool to zero out corporate tax liabilities.
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-600 dark:text-purple-400">
                      <Scale size={15} />
                      <span>IRC §7871: TRIBAL TAX STATUS ACT</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Tribes are treated as sovereign states for federal tax purposes. Tribal governments cannot be taxed by the federal government or by adjacent state governments on trust lands, and tribes possess the legal right to issue tax-exempt Tribal Economic Development Bonds (TEDBs).
                    </p>
                  </div>

                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                    <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400">
                      <DollarSign size={15} />
                      <span>NEW MARKETS TAX CREDITS (NMTC)</span>
                    </div>
                    <p className={`text-xs ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                      Virtually all tribal lands qualify as severely distressed low-income communities under the CDFI Fund, allowing developers to stack 39% federal tax credits over a 7-year compliance period on top of Opportunity Zone capital gains exclusions.
                    </p>
                  </div>
                </div>

                <div className={`p-5 rounded-xl border ${isLight ? 'bg-red-50/60 border-red-200 text-stone-900' : 'bg-red-950/20 border-red-800 text-stone-200'} space-y-3`}>
                  <div className="flex items-center gap-2 font-bold font-mono text-sm text-red-600 dark:text-red-400">
                    <ShieldAlert size={16} />
                    <span>THE DUAL TAXATION TRAP & TRIBAL EXPLOITATION WARNING</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    Despite federal benefits, commercial hyperscalers routinely subject tribal lands to <strong>predatory economic rent extraction</strong>. Under the landmark U.S. Supreme Court decision <em>Cotton Petroleum v. New Mexico (1989)</em>, adjacent state governments often attempt to impose state gross receipts taxes and severance taxes on non-tribal commercial contractors operating on reservation land—creating debilitating dual taxation that robs the tribe of tax revenue while leaving the tribal community to bear the water depletion and transmission burdens.
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    This is why the <strong>Cherokee Nation</strong> enacted the historic <strong>Cherokee Hyperscale Data Center Ban (Plate #54)</strong> and why the <strong>Jicarilla Apache Nation</strong> is deploying closed-loop, off-grid micro-hydro compute: <em>Sovereignty means the right to say NO to federal tax-arbitrage schemes that poison the soil and deplete the water.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 3: INTERACTIVE SUBSIDY & RESOURCE CALCULATOR */}
        {activeSubTab === 'interactive_calculator' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sliders size={18} className="text-amber-500" />
                  <h3 className={`text-lg font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Hyperscale Tax Windfall vs. Community Cost Simulator
                  </h3>
                </div>
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold">
                  Roulet’s Law Exposenomics Calibration
                </span>
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold flex justify-between ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    <span>Facility Capacity (MW):</span>
                    <span className="text-amber-500 font-black">{datacenterCapacityMW} MW</span>
                  </label>
                  <input
                    type="range"
                    min="50"
                    max="1000"
                    step="25"
                    value={datacenterCapacityMW}
                    onChange={(e) => setDatacenterCapacityMW(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-stone-500">
                    <span>50 MW (Mid-scale)</span>
                    <span>500 MW (Hyperscale)</span>
                    <span>1,000 MW (Gigascale)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    Jurisdiction & Tax Regime:
                  </label>
                  <select
                    value={jurisdictionType}
                    onChange={(e) => setJurisdictionType(e.target.value as any)}
                    className={`w-full p-2 text-xs font-mono rounded-lg border cursor-pointer ${
                      isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-800 border-stone-700 text-white'
                    }`}
                  >
                    <option value="rural_oz">Rural Opportunity Zone (One Big Beautiful Bill Act)</option>
                    <option value="tribal_trust">Native American Sovereign Trust Land (IRC §7871/§168(j))</option>
                    <option value="state_corridor">Standard State Tech Corridor (Ohio/Virginia Model)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                    Cooling Architecture:
                  </label>
                  <select
                    value={waterCoolingType}
                    onChange={(e) => setWaterCoolingType(e.target.value as any)}
                    className={`w-full p-2 text-xs font-mono rounded-lg border cursor-pointer ${
                      isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-800 border-stone-700 text-white'
                    }`}
                  >
                    <option value="evaporative">Commercial Evaporative (Consumes Municipal Aquifer)</option>
                    <option value="closed_loop">Sovereign Closed-Loop Dielectric (Zero Water Consumption)</option>
                  </select>
                </div>
              </div>

              {/* Simulation Result Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-emerald-50 border-emerald-300' : 'bg-emerald-950/30 border-emerald-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-emerald-700 dark:text-emerald-400">
                    Corporate Tax Windfall
                  </span>
                  <div className="text-2xl font-black font-mono text-emerald-800 dark:text-emerald-300">
                    ${Math.round(federalTaxBreakMillions)}M
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Subsidized federal & state write-offs on ${Math.round(capitalExpenditureMillions)}M CapEx
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-red-50 border-red-300' : 'bg-red-950/30 border-red-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-red-700 dark:text-red-400">
                    Residential Electric Rate Spike
                  </span>
                  <div className="text-2xl font-black font-mono text-red-800 dark:text-red-300">
                    +{residentialRateHikePercent}%
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    ~${householdMonthlyHikeDollars}/month added to average rural family power bill
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-blue-50 border-blue-300' : 'bg-blue-950/30 border-blue-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-blue-700 dark:text-blue-400">
                    Annual Fresh Water Draw
                  </span>
                  <div className="text-2xl font-black font-mono text-blue-800 dark:text-blue-300">
                    {annualWaterGallonsMillions}M Gallons
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    {waterCoolingType === 'closed_loop' ? 'Pristine: 100% closed-loop zero municipal depletion' : 'Equivalent to annual usage of 4,200 rural homes'}
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-amber-50 border-amber-300' : 'bg-amber-950/30 border-amber-800'} space-y-1`}>
                  <span className="text-[10px] font-mono uppercase font-bold text-amber-700 dark:text-amber-400">
                    Mandatory Cognitive Dividend
                  </span>
                  <div className="text-2xl font-black font-mono text-amber-800 dark:text-amber-300">
                    ${requiredSovereignDividendHousehold} / yr
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Restitution owed to each local household under Roulet’s Law
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 4: RECHARTS ANALYTICS */}
        {activeSubTab === 'recharts_analytics' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Cost Shift Comparison Bar Chart */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                  <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Corporate Benefit vs. Local Community Cost ($ Millions)
                  </h4>
                  <span className="text-[10px] font-mono text-stone-500">250 MW Baseline Model</span>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={comparativeCostData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                      <XAxis dataKey="category" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                      <YAxis tick={{ fontSize: 10 }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#fff' : '#1c1917',
                          borderColor: isLight ? '#d6d3d1' : '#44403c',
                          fontSize: 12
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
                      <Bar dataKey="corporateBenefit" name="Corporate Subsidies & Benefits ($M)" fill="#10b981" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="communityCost" name="Community Resource Drain ($M Equiv)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                  Note: While tech developers pocket tens of millions in tax breaks, host towns bear millions in uncompensated grid upgrades and water table degradation.
                </p>
              </div>

              {/* Sovereign Protection Radar Chart */}
              <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
                  <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    Sovereignty & Community Protection Radar
                  </h4>
                  <span className="text-[10px] font-mono text-stone-500">0 – 100 Index</span>
                </div>
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarMetrics}>
                      <PolarGrid stroke={isLight ? '#e7e5e4' : '#292524'} />
                      <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 9, fill: isLight ? '#44403c' : '#a8a29e' }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 8 }} />
                      <Radar name="Federal Rural OZ (Smith Bill)" dataKey="federalOz" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.25} />
                      <Radar name="Tribal Sovereign Zone" dataKey="tribalSovereign" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.25} />
                      <Radar name="ICEarth Sovereign IT" dataKey="sovereignIt" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.45} />
                      <Legend wrapperStyle={{ fontSize: 11, paddingTop: 10 }} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-400 italic">
                  ICEarth Sovereign IT achieves 100% on water protection and elder veto power through off-grid micro-grids and client-side zero-knowledge enclaves.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 5: MODEL TRIBAL ORDINANCE & SOVEREIGN BLUEPRINT */}
        {activeSubTab === 'sovereign_blueprint' && (
          <div className="space-y-6">
            <div className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                <span className="px-2.5 py-1 bg-red-600 text-white font-mono text-xs font-black rounded-lg">
                  SOVEREIGN DEFENSE SPECIFICATION
                </span>
                <h3 className={`text-2xl font-bold font-serif mt-2 ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Model Sovereign IT Data Center Ordinance for Rural & Tribal Councils
                </h3>
                <p className={`text-xs sm:text-sm mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                  Before accepting federal opportunity zone subsidies or signing commercial utility leases, sovereign tribal nations and rural county commissioners should enact these 5 core protections:
                </p>
              </div>

              <div className="space-y-4">
                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-amber-600 dark:text-amber-400">
                    <Droplets size={16} />
                    <span>ARTICLE 1: ZERO MUNICIPAL OR ALLUVIAL WATER DEPLETION</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    No hyperscale computing facility shall consume groundwater, surface water, or municipal treated water for cooling purposes. All heat rejection must utilize closed-loop dielectric fluid or air-to-air heat exchangers with independent closed circuits.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-purple-600 dark:text-purple-400">
                    <Zap size={16} />
                    <span>ARTICLE 2: 100% OFF-GRID PRIVATE RENEWABLE GENERATION</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    Facilities over 50 MW shall not connect directly to the municipal or rural residential distribution grid. Power must be sourced from dedicated, off-grid micro-hydro, geothermal, or co-located solar with multi-day battery storage, strictly prohibiting the shifting of substation infrastructure costs onto residential ratepayers.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-emerald-600 dark:text-emerald-400">
                    <DollarSign size={16} />
                    <span>ARTICLE 3: MANDATORY 20% GROSS COGNITIVE DIVIDEND (ROULET’S LAW)</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    In recognition that AI models are trained on collective human and cultural knowledge, 20% of the calculated gross value of all compute operations shall be disbursed directly to tribal enrolled citizens or rural host town residents as an untaxed sovereign cognitive dividend.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-red-600 dark:text-red-400">
                    <Users size={16} />
                    <span>ARTICLE 4: INHERENT ELDER COUNCIL VETO POWER</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    All permits, leases, and rights-of-way remain subject to annual review and unappealable veto by the tribal elder council or town meeting. Nondisclosure agreements (NDAs) shielding energy consumption, water volume, or corporate identity are strictly void and unlawful.
                  </p>
                </div>

                <div className={`p-4 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-1`}>
                  <div className="flex items-center gap-2 font-mono font-bold text-xs text-cyan-600 dark:text-cyan-400">
                    <Shield size={16} />
                    <span>ARTICLE 5: LOCAL SOVEREIGN DATA RESIDENCY & ZERO-KNOWLEDGE EXECUTION</span>
                  </div>
                  <p className="text-xs leading-relaxed text-stone-600 dark:text-stone-300">
                    Infrastructure must host sovereign community data locally, granting the tribe or town first priority over computing capacity during natural emergencies, grid disruptions, or climate events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. CROSS-NAVIGATION TO RELATED SOVEREIGN TABS */}
        <section className={`p-6 rounded-2xl border ${isLight ? 'bg-white border-stone-300 shadow-md' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <Compass size={18} className="text-amber-500" />
              <h4 className={`text-base font-bold font-serif ${isLight ? 'text-stone-950' : 'text-white'}`}>
                Cross-Navigation: The Sovereign IT Infrastructure Cluster
              </h4>
            </div>
            <span className="text-xs font-mono text-stone-500">Related Cryptographic Plates & Proofs</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {onNavigateTab && (
              <>
                <button
                  onClick={() => onNavigateTab('datacenter_incentives')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-amber-600 flex items-center gap-1.5">
                      <Landmark size={14} />
                      <span>Plate #56</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      Data Center Incentives Engine
                    </div>
                    <div className="text-[10px] text-stone-500">Hazle Twp PA & PJM Grid Analysis</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('cherokee_it_position')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-purple-600 flex items-center gap-1.5">
                      <Ban size={14} />
                      <span>Plate #54</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      Cherokee Hyperscale Ban
                    </div>
                    <div className="text-[10px] text-stone-500">Sovereign Water & Grid Protection</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('super_intelligence_force')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <ShieldAlert size={14} />
                      <span>Plate #63</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      AI Czar & SIF Audit
                    </div>
                    <div className="text-[10px] text-stone-500">Jay Clayton & 6-Tier Matrix</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>

                <button
                  onClick={() => onNavigateTab('swiss_data_sovereignty')}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all hover:scale-[1.02] flex items-center justify-between ${
                    isLight ? 'bg-stone-50 hover:bg-stone-100 border-stone-300' : 'bg-stone-950 hover:bg-stone-800 border-stone-800'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="text-xs font-bold text-cyan-600 flex items-center gap-1.5">
                      <Shield size={14} />
                      <span>Plate #55</span>
                    </div>
                    <div className={`text-xs font-bold ${isLight ? 'text-stone-900' : 'text-white'}`}>
                      Swiss Data Sovereignty
                    </div>
                    <div className="text-[10px] text-stone-500">Alpine Zero-Knowledge Enclaves</div>
                  </div>
                  <ArrowRight size={14} className="text-stone-400" />
                </button>
              </>
            )}
          </div>
        </section>
      </main>

      {/* 4. MASTER ARTWORK MODAL (PLATE #64) */}
      {isPlateModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className={`relative max-w-5xl w-full rounded-2xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-800'} overflow-hidden shadow-2xl flex flex-col max-h-[92vh]`}>
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber-600 text-stone-950 font-mono text-xs font-black rounded uppercase">
                  MASTER PLATE #64
                </span>
                <span className={`text-xs font-mono font-bold ${isLight ? 'text-stone-700' : 'text-stone-300'}`}>
                  Rural & Indigenous Data Center Tax Windfall Schematic
                </span>
              </div>
              <button
                onClick={() => setIsPlateModalOpen(false)}
                className={`p-1.5 rounded-lg border text-xs font-mono font-bold cursor-pointer ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-800 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
              >
                Close (ESC)
              </button>
            </div>

            {/* Modal Image */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-stone-950">
              <img
                src={ruralDatacenterPlateImg}
                alt="Rural & Indigenous Data Centers Tax Windfall Master Plate #64"
                className="max-h-[68vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Modal Footer with Cryptographic Provenance */}
            <div className="p-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">VAULT HASH:</span>
                <span className="font-mono text-[11px] text-stone-400 truncate max-w-xs sm:max-w-md">
                  {vaultHash}
                </span>
              </div>
              <button
                onClick={copyVaultHash}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-lg border border-stone-700 flex items-center gap-1.5 cursor-pointer font-bold"
              >
                {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedHash ? 'Hash Copied to Clipboard!' : 'Copy Vault Hash'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
