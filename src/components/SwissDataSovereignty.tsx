import React, { useState } from 'react';
import swissPlateImg from '../assets/images/swiss_data_sovereignty_plate55_1790481058586.jpg';
import {
  Shield,
  Zap,
  Droplets,
  Cpu,
  Globe,
  Lock,
  Radio,
  ExternalLink,
  ChevronRight,
  Maximize2,
  Copy,
  Check,
  FileText,
  Printer,
  Sparkles,
  Ban,
  Scale,
  Users,
  ArrowRight,
  FileCheck,
  AlertTriangle,
  Fingerprint,
  Layers,
  Compass,
  Building,
  Key,
  Flame,
  PowerOff,
  Server,
  CloudRain,
  Sliders,
  CheckCircle,
  HelpCircle,
  BarChart3,
  Bot
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface SwissDataSovereigntyProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const SwissDataSovereignty: React.FC<SwissDataSovereigntyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const [activeSection, setActiveSection] = useState<'overview' | 'dw_report' | 'repressive_regimes' | 'swiss_stack' | 'tribal_parallels' | 'risk_calculator'>('overview');
  const [copiedHash, setCopiedHash] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<'authoritarian' | 'us_commercial' | 'eu_hyperscale' | 'icearth_swiss'>('icearth_swiss');

  const vaultHash = '0xSWISS_DATA_SOVEREIGNTY_GLOBAL_FREEDOM_SPECTRUM_PLATE_55_VAULT_2026';

  const handleCopyHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  // Comparative Freedom & Sovereignty Index (0 to 100)
  const sovereigntyIndexData = [
    { regime: 'ICEarth Swiss Cryptographic', autonomy: 99.8, stateControl: 0.2, resourceBurden: 0.0, color: '#10b981' },
    { regime: 'Switzerland (National / Proton)', autonomy: 92.4, stateControl: 7.6, resourceBurden: 22.0, color: '#06b6d4' },
    { regime: 'European Union (GDPR / Regulatory)', autonomy: 68.5, stateControl: 31.5, resourceBurden: 84.0, color: '#3b82f6' },
    { regime: 'United States (FISA 702 / Hyperscale)', autonomy: 47.8, stateControl: 52.2, resourceBurden: 96.0, color: '#f59e0b' },
    { regime: 'Russia (RuNet / TSPU DPI)', autonomy: 14.2, stateControl: 85.8, resourceBurden: 65.0, color: '#ef4444' },
    { regime: 'China (Great Firewall / Social Credit)', autonomy: 11.5, stateControl: 88.5, resourceBurden: 92.0, color: '#dc2626' },
    { regime: 'Iran (National Info Net / Blackouts)', autonomy: 7.8, stateControl: 92.2, resourceBurden: 78.0, color: '#b91c1c' },
    { regime: 'Ethiopia (Full State Kill-Switch)', autonomy: 3.9, stateControl: 96.1, resourceBurden: 55.0, color: '#991b1b' }
  ];

  // Hyperscale Resource Depletion Data (DW Report context: Daily cooling water in M gal and Grid load in MW)
  const resourceDepletionData = [
    { name: 'US Hyperscale (AWS/Google)', dailyWaterMGal: 5.2, gridDrawMW: 125, carbonIntensity: 88 },
    { name: 'EU Hyperscale (Frankfurt/Dublin)', dailyWaterMGal: 3.9, gridDrawMW: 90, carbonIntensity: 64 },
    { name: 'Standard Colocation', dailyWaterMGal: 1.4, gridDrawMW: 35, carbonIntensity: 42 },
    { name: 'ICEarth Swiss/Tribal Stack', dailyWaterMGal: 0.0, gridDrawMW: 0.0, carbonIntensity: 0.0 }
  ];

  // Radar comparison for jurisdiction profiles
  const radarComparisonData = [
    { subject: 'Cryptographic Privacy', icearth: 100, swissGov: 92, euReg: 70, usHyperscale: 45, authoritarian: 5 },
    { subject: 'Zero-Kill-Switch Immunity', icearth: 100, swissGov: 88, euReg: 75, usHyperscale: 60, authoritarian: 2 },
    { subject: 'Aquifer Protection (0 Water)', icearth: 100, swissGov: 70, euReg: 25, usHyperscale: 15, authoritarian: 10 },
    { subject: 'Grid Independence (Microgrid)', icearth: 100, swissGov: 65, euReg: 20, usHyperscale: 10, authoritarian: 15 },
    { subject: 'Individual Key Self-Custody', icearth: 100, swissGov: 90, euReg: 50, usHyperscale: 20, authoritarian: 0 },
    { subject: 'Jurisdictional Neutrality', icearth: 100, swissGov: 95, euReg: 60, usHyperscale: 30, authoritarian: 0 }
  ];

  return (
    <div className={`min-h-screen ${siteTheme === 'dark' ? 'bg-stone-950 text-stone-100' : 'bg-stone-50 text-stone-900'} pb-24 font-sans`}>
      {/* 1. TOP ANNOUNCEMENT & SOURCE HERO BANNER */}
      <div className="bg-gradient-to-r from-red-950 via-stone-950 to-emerald-950 text-white border-b border-red-700/60 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-red-600/90 text-white font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-md flex items-center gap-1.5 border border-red-400">
                <Shield size={14} className="animate-pulse" />
                PLATE #55 MASTERWORK
              </span>
              <span className="px-3 py-1 bg-white/10 text-stone-200 font-mono text-xs rounded-md border border-white/20 flex items-center gap-1.5">
                🇨🇭 Swiss Data Sovereignty Foundation
              </span>
              <span className="px-3 py-1 bg-emerald-600/80 text-emerald-100 font-mono text-xs rounded-md border border-emerald-400/40 flex items-center gap-1.5">
                ⚡ 100% Waterless Alpine & Tribal Microgrid
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://p.dw.com/p/5NEiW?at_medium=SocialMedia&at_campaign=Twitter&at_share_source=SharingButton&at_origin=Web"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white font-mono font-black text-xs rounded-lg shadow transition-colors flex items-center gap-1.5 border border-red-400 cursor-pointer"
              >
                <span>DW Live Report (David Ehl)</span>
                <ExternalLink size={12} />
              </a>

              <button
                onClick={() => setIsModalOpen(true)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs rounded-lg border border-stone-600 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Maximize2 size={13} />
                <span>View Plate #55 Artwork</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-red-400 font-mono text-xs tracking-wider uppercase font-bold">
                <Globe size={14} />
                <span>The Global Sovereignty Spectrum: From Repressive Kill Switches to Alpine Enclaves</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Swiss Data Sovereignty vs. The Global Panopticon: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-stone-200 to-emerald-400">Why ICEarth Was Created</span>
              </h1>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-4xl">
                Founded upon the ancestral Swiss sovereignty of the <strong className="text-white font-mono">Roulet</strong> family and the uncompromising zero-trust privacy exemplified by <strong className="text-white">Proton Mail</strong>, ICEarth provides Swiss data sovereignty to <em>anyone</em> who demands cryptographic integrity. Contrasting the authoritarian kill switches of <strong className="text-red-300">Ethiopia, Iran, Russia, and China</strong> against the resource-exhausting European data center protests reported by <strong className="text-emerald-300">Deutsche Welle (DW)</strong>, ICEarth engineers the ultimate freedom extreme: 100% individual cryptographic self-custody, zero public grid dependency, and zero gallons of water depleted.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-stone-300">
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Key size={13} className="text-amber-400" />
                  <span>Founding Roots: Roulet Swiss Ancestry</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Lock size={13} className="text-emerald-400" />
                  <span>Proton-Grade Encryption</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Droplets size={13} className="text-sky-400" />
                  <span>0 Gal/Day Water Consumption</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                  <Fingerprint size={13} className="text-red-400" />
                  <span>Anti-Kill-Switch Architecture</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center">
              <div 
                onClick={() => setIsModalOpen(true)}
                className="relative group cursor-pointer rounded-xl overflow-hidden border-2 border-red-500/80 shadow-2xl bg-black max-w-xs transition-transform hover:scale-102"
              >
                <img
                  src={swissPlateImg}
                  alt="Swiss Data Sovereignty and the Global Freedom Spectrum Plate #55"
                  className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                  <span className="text-[10px] font-mono text-red-300 font-bold uppercase">Plate #55 Forensic Infographic</span>
                  <span className="text-xs font-bold text-white leading-tight">Swiss Data Sovereignty & Global Freedom Spectrum</span>
                  <span className="text-[9px] font-mono text-stone-400 mt-1">Click to expand high-res masterwork</span>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-[10px] font-mono text-stone-400">Vault Hash:</span>
                <code className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded text-amber-300 border border-white/10">
                  {vaultHash.slice(0, 18)}...
                </code>
                <button
                  onClick={handleCopyHash}
                  className="p-1 hover:bg-white/10 rounded text-stone-300 transition-colors"
                  title="Copy cryptographic vault hash"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. CORE METRICS BAR */}
      <div className={`border-b ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Cryptographic Autonomy</span>
                <Shield size={16} className="text-emerald-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-emerald-500">100% Non-Custodial</div>
              <p className="mt-1 text-xs text-stone-400">Client-side keys under Swiss FADP & post-quantum zero knowledge</p>
            </div>

            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Water Depletion</span>
                <Droplets size={16} className="text-sky-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-sky-500">0 Gal / Day</div>
              <p className="mt-1 text-xs text-stone-400">Closed-loop waterless vs 5M gal/day US/EU hyperscaler depletion</p>
            </div>

            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">Kill-Switch Regimes</span>
                <PowerOff size={16} className="text-red-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-red-500">4 Audited Regimes</div>
              <p className="mt-1 text-xs text-stone-400">Ethiopia, Iran, Russia & China documented state internet kill switches</p>
            </div>

            <div className={`p-4 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950/60 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-stone-500 uppercase">EU Data Dilemma</span>
                <Server size={16} className="text-amber-500" />
              </div>
              <div className="mt-2 text-2xl font-black text-amber-500">27 EU Nations</div>
              <p className="mt-1 text-xs text-stone-400">DW Report: Trapped between US CLOUD Act & domestic resource revolt</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. SECTION NAVIGATION PILLS */}
      <div className={`border-b ${siteTheme === 'dark' ? 'bg-stone-900/80 border-stone-800' : 'bg-stone-100/90 border-stone-200'} sticky top-0 z-20 backdrop-blur-md`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            <button
              onClick={() => setActiveSection('overview')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'overview'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Shield size={14} />
              <span>1. Roulet Swiss Sovereignty</span>
            </button>

            <button
              onClick={() => setActiveSection('dw_report')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'dw_report'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Server size={14} />
              <span>2. DW Europe Backlash Analysis</span>
            </button>

            <button
              onClick={() => setActiveSection('repressive_regimes')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'repressive_regimes'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <PowerOff size={14} />
              <span>3. Global Repressive Regimes</span>
            </button>

            <button
              onClick={() => setActiveSection('swiss_stack')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'swiss_stack'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Lock size={14} />
              <span>4. ICEarth Swiss Stack Architecture</span>
            </button>

            <button
              onClick={() => setActiveSection('tribal_parallels')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'tribal_parallels'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Zap size={14} />
              <span>5. Swiss-Tribal Parallels (Jicarilla & Cherokee)</span>
            </button>

            <button
              onClick={() => setActiveSection('risk_calculator')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeSection === 'risk_calculator'
                  ? 'bg-stone-800 text-white shadow-md'
                  : 'text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800'
              }`}
            >
              <Sliders size={14} />
              <span>6. Sovereignty Spectrum Calculator</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. MAIN CONTENT CONTAINER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">

        {/* SECTION 1: OVERVIEW & ROULET HERITAGE */}
        {activeSection === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Foundational Sovereignty Thesis</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    Swiss Neutrality, Roulet Family Heritage & The Sovereign Genesis of ICEarth
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 text-xs font-mono font-bold rounded-full border border-red-300 dark:border-red-800">
                    Art. 13 Swiss Constitution
                  </span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-mono font-bold rounded-full border border-emerald-300 dark:border-emerald-800">
                    Proton-Grade Integrity
                  </span>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>The Roulet Family Heritage:</strong> ICEarth was not born from Silicon Valley venture capital nor beholden to the extraction models of transnational cloud cartels. The founder of ICEarth, <strong>Norman Roulet</strong>, traces his lineage directly to Switzerland. In the Swiss tradition, sovereignty is neither an abstract legal fiction nor a privilege granted at the whim of a central bureaucrat: it is rooted in <em>cantonal direct democracy, inviolable individual privacy, and historical armed neutrality</em>.
                </p>

                <p>
                  In the digital era, Switzerland remains the world's undisputed sanctuary for informational integrity. As Norm Roulet explains:
                </p>

                <blockquote className="border-l-4 border-red-500 pl-4 py-2 my-4 italic bg-red-50/50 dark:bg-red-950/20 text-stone-800 dark:text-stone-200 rounded-r-lg font-serif">
                  "My family is Swiss, Roulet, and I consider Swiss my sovereignty. I use Proton for email, encrypted in Switzerland, and am interested in ICEarth providing Swiss data sovereignty for anyone who wants that integrity, to the Sovereign IT Stack, Data Center and infrastructure, like we will provide the Jicarilla. ICEarth was created to establish the freedom extreme: mathematical, non-custodial sovereignty where no state or corporation can pull the plug or seize your mind."
                </blockquote>

                <p>
                  <strong>Proton Mail as the Benchmark:</strong> Proton Mail (founded by CERN scientists in Geneva) proved that end-to-end encryption under the strict protection of the <em>Swiss Federal Act on Data Protection (FADP)</em> can withstand pressure from foreign surveillance dragnet laws (such as US FISA Section 702 and the CLOUD Act). Under Swiss law, user data cannot be disclosed to foreign authorities without a formal order from a Swiss cantonal judge following stringent dual criminality procedures.
                </p>

                <p>
                  <strong>Democratizing Swiss Sovereignty via ICEarth:</strong> ICEarth takes this alpine standard and universalizes it. Historically, Swiss physical vaults and private banking confidentiality were accessible only to sovereign states, multinational conglomerates, and ultra-wealthy elites. ICEarth levels the playing field: by combining <em>cryptographic client-side keys, zero-knowledge proofs, and zero-water islanded microgrids</em>, ICEarth delivers Swiss-grade data sovereignty to <strong>any community, sovereign tribal nation (such as the Jicarilla Apache and Cherokee Nations), scientific research team, or private citizen</strong> who refuses to surrender their autonomy.
                </p>
              </div>

              {/* RECHARTS: Global Sovereignty Spectrum Bar Chart */}
              <div className="mt-8 pt-6 border-t border-stone-200 dark:border-stone-800">
                <h3 className="text-base font-bold text-stone-900 dark:text-white mb-2 flex items-center gap-2">
                  <BarChart3 size={16} className="text-red-500" />
                  <span>The Global Digital Sovereignty Spectrum: Individual Autonomy vs. State / Corporate Control</span>
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mb-4">
                  Comparative assessment of digital freedom: scoring non-custodial autonomy (%) versus centralized state or corporate control.
                </p>

                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={sovereigntyIndexData}
                      layout="vertical"
                      margin={{ top: 10, right: 30, left: 140, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                      <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 10 }} unit="%" />
                      <YAxis dataKey="regime" type="category" tick={{ fontSize: 11, fontWeight: 'bold' }} width={130} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1c1917',
                          border: '1px solid #44403c',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '12px'
                        }}
                      />
                      <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                      <Bar dataKey="autonomy" name="Individual Autonomy / Cryptographic Sovereignty (%)" fill="#10b981" radius={[0, 4, 4, 0]} />
                      <Bar dataKey="stateControl" name="State / Corporate Surveillance & Kill-Switch Risk (%)" fill="#ef4444" radius={[0, 4, 4, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: DW EUROPE BACKLASH ANALYSIS */}
        {activeSection === 'dw_report' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] font-bold rounded">DW TECHNOLOGY EUROPE</span>
                    <span className="text-xs font-mono text-stone-500">David Ehl • Published September 2026</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    "Backlash over data centers tests Europe's AI ambitions"
                  </h2>
                </div>
                <a
                  href="https://p.dw.com/p/5NEiW?at_medium=SocialMedia&at_campaign=Twitter&at_share_source=SharingButton&at_origin=Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-mono font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Open Full Article on DW</span>
                  <ExternalLink size={13} />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                  <div className="p-4 bg-stone-100 dark:bg-stone-950/60 rounded-xl border border-stone-200 dark:border-stone-800 font-mono text-xs sm:text-sm text-stone-800 dark:text-stone-300">
                    <p className="font-bold text-red-600 dark:text-red-400 mb-1">DW LEAD DISPATCH:</p>
                    <p className="italic">
                      "Massive data centers needed to run AI are triggering protests across Europe. Their operators counter that they boost digital sovereignty and energy independence. This is currently a major issue in Europe, where many governments and companies have decided that they would prefer to store data in Europe rather than in the United States, which is the global leader in computing. But more digital sovereignty in Europe will mean more consumption of the continent's resources."
                    </p>
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 dark:text-white pt-2">
                    The European Digital Sovereignty Paradox
                  </h3>
                  <p>
                    As documented by David Ehl, Europe faces an acute structural bind. For the past decade, EU policymakers in Brussels, Berlin, and Paris have sounded the alarm over <em>digital dependency</em>: over 75% of European enterprise and government cloud workloads are hosted on US-controlled hyperscalers (Amazon Web Services, Microsoft Azure, Google Cloud). Under the US CLOUD Act, American law enforcement can compel US hyperscalers to turn over data stored on foreign servers, regardless of EU GDPR protections.
                  </p>
                  <p>
                    In response, European nations initiated massive infrastructure builds to host AI and sovereign clouds domestically. However, this has collided violently with physical reality:
                  </p>

                  <ul className="list-disc pl-5 space-y-2 text-stone-700 dark:text-stone-300 text-sm">
                    <li>
                      <strong>Grid Exhaustion in Germany:</strong> In Frankfurt and the state of Hesse (home to DE-CIX, the world's largest internet exchange), data centers consume more electricity than the entire city of Frankfurt itself. Municipal utilities warn that residential neighborhoods and heat pumps face grid rationing.
                    </li>
                    <li>
                      <strong>Water Depletion During Droughts:</strong> Hyperscale evaporative cooling systems consume up to <strong>5 million gallons of clean drinking water per day</strong> per cluster. Amid Mediterranean and Central European summer heatwaves, citizens are protesting the subsidization of compute cooling while farmers face irrigation bans.
                    </li>
                    <li>
                      <strong>Ireland's Grid Moratorium:</strong> In Ireland, data centers now consume over <strong>21% of the entire republic's metered electricity</strong>—surpassing all urban homes combined—forcing EirGrid to impose an effective moratorium on new Dublin hookups.
                    </li>
                  </ul>

                  <p>
                    <strong>The ICEarth Contrast:</strong> The European conundrum arises because European planners simply copy-pasted the extractive, centralized hyperscale blueprint of Silicon Valley onto a resource-constrained continent. ICEarth solves this paradox at the root: <em>waterless, closed-loop micro-modular compute operating 100% on islanded renewable power (hydro, geothermal, and solar) with zero drain on communal grids or municipal water tables</em>.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-4`}>
                    <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider block">Resource Footprint Forensic</span>
                    <h4 className="font-bold text-sm text-stone-900 dark:text-white">Daily Cooling Water Comparison (M Gal/Day)</h4>
                    
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={resourceDepletionData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                          <XAxis dataKey="name" tick={{ fontSize: 9 }} angle={-15} textAnchor="end" interval={0} />
                          <YAxis tick={{ fontSize: 10 }} />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: '#1c1917',
                              border: '1px solid #44403c',
                              borderRadius: '8px',
                              color: '#fff',
                              fontSize: '11px'
                            }}
                          />
                          <Bar dataKey="dailyWaterMGal" name="Daily Water (Million Gal)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>

                    <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-lg text-xs font-mono text-emerald-300">
                      <strong>ICEarth Guarantee:</strong> 0.0 gallons of water consumed. Zero public utility grid draw.
                    </div>
                  </div>

                  <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'}`}>
                    <h4 className="font-bold text-sm text-stone-900 dark:text-white flex items-center gap-1.5 mb-2">
                      <AlertTriangle size={15} className="text-amber-500" />
                      <span>EU Sovereign Backlash Cities</span>
                    </h4>
                    <div className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="font-medium text-stone-300">Frankfurt / Hesse:</span>
                        <span className="font-mono text-red-400">&gt;20% municipal power draw</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="font-medium text-stone-300">Dublin / Ireland:</span>
                        <span className="font-mono text-red-400">21% of national electricity</span>
                      </div>
                      <div className="flex justify-between border-b border-stone-800 pb-1">
                        <span className="font-medium text-stone-300">Amsterdam / Schiphol:</span>
                        <span className="font-mono text-red-400">Agricultural land conflict</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="font-medium text-stone-300">Sweden / Luleå:</span>
                        <span className="font-mono text-amber-400">Subsidized hydro backlash</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 3: REPRESSIVE REGIMES (ETHIOPIA, IRAN, RUSSIA, CHINA) */}
        {activeSection === 'repressive_regimes' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">Forensic Exposenomics Audit</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    The Repressive Extreme: State Kill Switches, Total Blackouts & Algorithmic Subjugation
                  </h2>
                </div>
                <span className="px-3 py-1 bg-red-950 text-red-400 text-xs font-mono font-bold rounded-lg border border-red-800 flex items-center gap-1.5">
                  <PowerOff size={13} className="animate-pulse" />
                  <span>Documented Kill Switches</span>
                </span>
              </div>

              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                To understand why ICEarth is committed to Swiss cryptographic sovereignty, one must examine the opposite end of the spectrum. In totalitarian and authoritarian states, the internet is not a public commons: it is an instrument of biometric surveillance, information quarantine, and weaponized disconnectivity. Under these regimes, citizens have <strong>zero control over their data, zero guarantee of connectivity, and zero legal recourse</strong>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ethiopia */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-red-900/60' : 'bg-red-50/50 border-red-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 uppercase">1. ETHIOPIA • Full State Kill Switch</span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] rounded">State Monopoly</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Weaponized Network Disruptions & National Blackouts</h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    Ethiopia stands as one of the world's most aggressive implementers of nationwide and regional internet blackouts. Controlled entirely through the state-owned monopoly Ethio Telecom, the federal government repeatedly pulls the master kill switch during political protests, the Tigray war (a 2-year total communications blackout), conflicts in the Amhara region, and routinely shuts down the entire country's internet during national high school examinations. Citizens have no independent ISPs, no satellite alternatives, and zero data self-custody.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 border border-red-900/40">
                    <strong>Vulnerability:</strong> Single-point-of-failure infrastructure. State orders cut all cellular towers and fiber backbones in minutes.
                  </div>
                </div>

                {/* Iran */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-red-900/60' : 'bg-red-50/50 border-red-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 uppercase">2. IRAN • National Information Network</span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] rounded">Halal Intranet</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">The "Halal Internet" & Total Digital Encirclement</h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    The Islamic Republic of Iran engineered the <em>National Information Network (SHOMA)</em>, a domestic intranet designed to sever the Iranian population from the global web while maintaining domestic banking and government services. During protests (such as the 2019 "Bloody November" and 2022 Mahsa Amini demonstrations), authorities impose total global internet blackouts, throttle mobile data speeds to unusable levels, poison DNS records, and criminalize VPN usage. Citizens' private communications are routinely scraped and decrypted by state intelligence apparatuses.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 border border-red-900/40">
                    <strong>Vulnerability:</strong> Domestic intranet architecture enables localized isolation while preserving state surveillance feeds.
                  </div>
                </div>

                {/* Russia */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-red-900/60' : 'bg-red-50/50 border-red-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 uppercase">3. RUSSIA • The Sovereign RuNet Law</span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] rounded">TSPU / DPI Hardware</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Centralized Deep Packet Inspection & Autonomous Disconnect</h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    Under Russia's 2019 "Sovereign Internet Law", Roskomnadzor mandated the physical installation of <em>TSPU</em> (Technical Means for Countering Threats) Deep Packet Inspection hardware across every telecom operator in the Russian Federation. Managed directly from Moscow, TSPU boxes autonomously inspect, throttle, and sever encrypted traffic. The state conducts live disconnection tests to sever Russia from the global ICANN DNS root, while outlawing Signal, Tor, independent press, and encrypted protocols without state-approved Russian TLS certificates.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 border border-red-900/40">
                    <strong>Vulnerability:</strong> Mandatory physical hardware on every ISP edge giving state security remote execution rights.
                  </div>
                </div>

                {/* China */}
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-red-900/60' : 'bg-red-50/50 border-red-200'} space-y-3`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-black text-red-600 dark:text-red-400 uppercase">4. CHINA • The Great Firewall & Golden Shield</span>
                    <span className="px-2 py-0.5 bg-red-600 text-white font-mono text-[10px] rounded">Social Credit Panopticon</span>
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Total Data Subjugation & Automated Algorithmic Censorship</h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    The People's Republic of China operates the most technologically sophisticated digital enclosure in human history. Every byte entering or leaving the nation passes through state border gateways executing keyword filtering, active probing of VPN handshakes, and machine learning censorship. Domestic super-apps enforce real-name identification tied to national biometric ID cards, while the Cyber Security Law requires all corporate and personal data to be accessible to state intelligence agencies on demand without judicial warrant.
                  </p>
                  <div className="p-3 bg-black/40 rounded-lg text-xs font-mono text-red-300 border border-red-900/40">
                    <strong>Vulnerability:</strong> Elimination of encryption autonomy; state-controlled certificate authorities and algorithmic compliance.
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-r from-stone-900 via-red-950 to-stone-900 rounded-xl border border-red-700/60 text-white space-y-2">
                <h4 className="font-bold text-sm text-amber-300 flex items-center gap-2">
                  <Fingerprint size={16} />
                  <span>ICEarth's Direct Technical Rebuttal: The Freedom Extreme</span>
                </h4>
                <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                  When repressive regimes pull the plug, centralized systems die. ICEarth is architected so that <strong>no single entity—neither ICEarth administrators, nor telco monopolies, nor hostile sovereign states—holds the master kill switch</strong>. Data is client-side encrypted before transit, stored across decentralized sovereign nodes with Shamir Secret Sharing, and routed over resilient peer-to-peer mesh networks that can operate even when national gateways are severed.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 4: SWISS STACK ARCHITECTURE */}
        {activeSection === 'swiss_stack' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Sovereign Computing Architecture</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    The 5 Pillars of ICEarth Swiss Data Sovereignty
                  </h2>
                </div>
                <span className="px-3 py-1 bg-emerald-950 text-emerald-300 text-xs font-mono font-bold rounded-lg border border-emerald-700 flex items-center gap-1.5">
                  <Lock size={13} />
                  <span>Zero-Trust Protocol</span>
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-3`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                    01
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Non-Custodial Client-Side Cryptography</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Just as Proton Mail never holds your private decryption keys, ICEarth encrypts all personal biometric, exposenomic, and cultural assets on the client device prior to storage. Even if server nodes are seized, decrypted contents cannot be reconstructed without citizen keys.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-3`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                    02
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Zero-Water Closed-Loop Dielectric Cooling</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Eliminating the ecological flaw that triggered European protests: ICEarth sovereign modular clusters use 100% closed-loop dielectric liquid immersion cooling consuming <strong>0 gallons of water per day</strong>, protecting communal aquifers in both alpine valleys and high desert homelands.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-3`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                    03
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">100% Islanded Renewable Microgrids</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Operating completely off the public electric grid via dedicated micro-hydro, high-desert solar, and geothermal power banks. ICEarth compute clusters never compete with citizen homes or increase local residential utility rates.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-3`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                    04
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Swiss Legal & Jurisdictional Immunity</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Anchored under the Swiss Federal Constitution (Art. 13) and FADP, shielded from US CLOUD Act search warrants, extraterritorial subpoena overreach, and European Brussels effect regulatory bloat.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-3`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                    05
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Anti-Fragile P2P Mesh Routing</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Peer-to-peer libp2p cryptographic mesh topologies with automated multi-hop fallback across satellite, local optical relays, and shortwave sovereign radio, rendering state-ordered DNS blocks and kill switches mathematically impotent.
                  </p>
                </div>

                <div className={`p-5 rounded-xl border ${siteTheme === 'dark' ? 'bg-stone-950 border-stone-800' : 'bg-stone-50 border-stone-200'} space-y-3`}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center font-black font-mono">
                    06
                  </div>
                  <h3 className="font-bold text-base text-stone-900 dark:text-white">Democratized Access for All</h3>
                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    Not a private enclave reserved for Swiss billionaires. Built as an open sovereign protocol empowering Indigenous tribes, exposenomic researchers, environmental activists, and everyday citizens worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 5: TRIBAL PARALLELS (JICARILLA & CHEROKEE) */}
        {activeSection === 'tribal_parallels' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Sovereignty Unification</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    From the Swiss Alps to the High Desert: The Jicarilla Apache & Cherokee Unification
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onNavigateTab && onNavigateTab('cherokee_it_position')}
                    className="px-3 py-1 bg-emerald-700 hover:bg-emerald-600 text-white font-mono text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <span>Cherokee Ban (Plate #54)</span>
                    <ArrowRight size={11} />
                  </button>
                  <button
                    onClick={() => onNavigateTab && onNavigateTab('jicarilla_sovereign_it')}
                    className="px-3 py-1 bg-amber-700 hover:bg-amber-600 text-white font-mono text-xs font-bold rounded-lg cursor-pointer transition-colors flex items-center gap-1"
                  >
                    <span>Jicarilla IT Stack</span>
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-stone-700 dark:text-stone-300 space-y-4 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong>Why Swiss Sovereignty and Indigenous Tribal Sovereignty Are Natural Allies:</strong> At first glance, the snow-capped cantons of Switzerland and the high-desert mesas of the <strong>Jicarilla Apache Nation</strong> in Dulce, New Mexico, or the Ozark river valleys of the <strong>Cherokee Nation</strong> in Tahlequah, Oklahoma, seem worlds apart. Yet philosophically and structurally, they share an identical imperative:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                  <div className="p-5 bg-stone-100 dark:bg-stone-950/80 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-bold font-mono text-sm">
                      <span>🇨🇭 Swiss Cantonal Sovereignty</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 space-y-1.5 list-disc pl-4">
                      <li>Centuries of armed neutrality repelling imperial European hegemony.</li>
                      <li>Decentralized cantonal federation where power flows from the local commune up.</li>
                      <li>Inviolable privacy laws protecting citizens from foreign regulatory overreach.</li>
                      <li>Underground alpine infrastructure engineered for permanent survival.</li>
                    </ul>
                  </div>

                  <div className="p-5 bg-stone-100 dark:bg-stone-950/80 rounded-xl border border-stone-200 dark:border-stone-800 space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm">
                      <span>🪶 Indigenous Tribal Sovereignty</span>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 space-y-1.5 list-disc pl-4">
                      <li>Inherent pre-constitutional sovereign status as distinct political nations.</li>
                      <li>Sacred stewardship of precious aquifers, land, and cultural memory.</li>
                      <li>Rejection of extractive hyperscale data centers that deplete water and stress grids.</li>
                      <li>Communal Elder governance safeguarding cultural heritage from algorithmic erasure.</li>
                    </ul>
                  </div>
                </div>

                <p>
                  <strong>The Shared Technical Specification:</strong> What ICEarth provides to the <strong>Jicarilla Apache Nation</strong>—and what matches the Cherokee Nation's executive prohibition on hyperscale facilities (Plate #54)—is the exact same architecture derived from Swiss data sovereignty:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Sovereign Physical Infrastructure:</strong> Tribally owned and Swiss-encrypted modular data clusters deployed inside tribal reservation borders, governed exclusively by tribal council and elder law.
                  </li>
                  <li>
                    <strong>Zero Water Depletion:</strong> High-desert aquifers (and fragile alpine headwaters) cannot afford 5M gal/day cooling losses. ICEarth's closed-loop dielectric technology uses <em>zero water</em>.
                  </li>
                  <li>
                    <strong>Energy Autonomy:</strong> Jicarilla solar and geothermal microgrids operate completely islanded from the fragile New Mexico public utility grid, shielding citizens from rate spikes.
                  </li>
                  <li>
                    <strong>Non-Custodial Data Ownership:</strong> Environmental monitoring, exposenomic blood lead isotope data, and cultural sacred archives remain 100% cryptographically encrypted with 3-of-5 Shamir Secret Sharing among designated tribal custodians.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        )}

        {/* SECTION 6: SOVEREIGNTY SPECTRUM CALCULATOR & RADAR COMPARISON */}
        {activeSection === 'risk_calculator' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-lg space-y-6`}>
              <div className="border-b pb-4 border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Interactive Forensic Model</span>
                  <h2 className="text-xl sm:text-2xl font-black text-stone-900 dark:text-white mt-1">
                    Jurisdiction Risk & Sovereignty Matrix
                  </h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setSelectedJurisdiction('authoritarian')}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors ${
                      selectedJurisdiction === 'authoritarian'
                        ? 'bg-red-700 text-white'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    Authoritarian Kill-Switch
                  </button>
                  <button
                    onClick={() => setSelectedJurisdiction('us_commercial')}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors ${
                      selectedJurisdiction === 'us_commercial'
                        ? 'bg-amber-600 text-white'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    US Hyperscale (FISA)
                  </button>
                  <button
                    onClick={() => setSelectedJurisdiction('eu_hyperscale')}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors ${
                      selectedJurisdiction === 'eu_hyperscale'
                        ? 'bg-blue-600 text-white'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    EU Regulatory (DW Dilemma)
                  </button>
                  <button
                    onClick={() => setSelectedJurisdiction('icearth_swiss')}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-lg cursor-pointer transition-colors ${
                      selectedJurisdiction === 'icearth_swiss'
                        ? 'bg-emerald-600 text-white shadow'
                        : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                    }`}
                  >
                    ICEarth Swiss Sovereign
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarComparisonData}>
                      <PolarGrid stroke="#44403c" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: siteTheme === 'dark' ? '#d6d3d1' : '#44403c', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                      <Radar name="ICEarth Swiss Stack" dataKey="icearth" stroke="#10b981" fill="#10b981" fillOpacity={0.4} />
                      <Radar name="Swiss Gov / Proton" dataKey="swissGov" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.2} />
                      <Radar name="EU Hyperscale (DW)" dataKey="euReg" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.15} />
                      <Radar name="US Hyperscale" dataKey="usHyperscale" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} />
                      <Radar name="Authoritarian Regime" dataKey="authoritarian" stroke="#ef4444" fill="#ef4444" fillOpacity={0.15} />
                      <Legend wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: '#1c1917',
                          border: '1px solid #44403c',
                          borderRadius: '8px',
                          color: '#fff',
                          fontSize: '11px'
                        }}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>

                <div className="lg:col-span-6 space-y-4">
                  {selectedJurisdiction === 'authoritarian' && (
                    <div className="p-5 rounded-xl bg-red-950/40 border border-red-800 text-stone-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-red-400">JURISDICTION PROFILE</span>
                        <span className="text-xs font-mono bg-red-800 px-2 py-0.5 rounded text-white font-bold">CRITICAL THREAT</span>
                      </div>
                      <h4 className="text-base font-bold text-white">Authoritarian Regimes (Ethiopia, Iran, Russia, China)</h4>
                      <p className="text-xs leading-relaxed text-stone-300">
                        Total surveillance, DPI packet inspection, and state-mandated internet kill switches. Data is entirely property of the state. Independent encryption is outlawed or severely penalized. Zero due process.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-red-900/60">
                        <div>Kill Switch Risk: <span className="text-red-400 font-bold">100% (Instant)</span></div>
                        <div>Aquifer Depletion: <span className="text-red-400 font-bold">Unregulated</span></div>
                        <div>Extradition Risk: <span className="text-red-400 font-bold">Arbitrary Arrest</span></div>
                        <div>Autonomy Rating: <span className="text-red-400 font-bold">3.9% - 14%</span></div>
                      </div>
                    </div>
                  )}

                  {selectedJurisdiction === 'us_commercial' && (
                    <div className="p-5 rounded-xl bg-amber-950/40 border border-amber-800 text-stone-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-400">JURISDICTION PROFILE</span>
                        <span className="text-xs font-mono bg-amber-800 px-2 py-0.5 rounded text-white font-bold">COMMERCIAL MONOPOLY</span>
                      </div>
                      <h4 className="text-base font-bold text-white">US Hyperscalers (AWS, Microsoft Azure, Google Cloud)</h4>
                      <p className="text-xs leading-relaxed text-stone-300">
                        Dominates global computing (75%+ share) but subject to FISA 702 warrantless queries and the CLOUD Act. Consumes up to 5M gal/day water per site, straining municipal utility grids across Virginia, Texas, and Oregon.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-amber-900/60">
                        <div>CLOUD Act Subpoenas: <span className="text-amber-400 font-bold">Extraterritorial</span></div>
                        <div>Aquifer Depletion: <span className="text-amber-400 font-bold">5.2M Gal/Day</span></div>
                        <div>Grid Stress: <span className="text-amber-400 font-bold">125 MW / Cluster</span></div>
                        <div>Autonomy Rating: <span className="text-amber-400 font-bold">47.8%</span></div>
                      </div>
                    </div>
                  )}

                  {selectedJurisdiction === 'eu_hyperscale' && (
                    <div className="p-5 rounded-xl bg-blue-950/40 border border-blue-800 text-stone-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-blue-400">JURISDICTION PROFILE</span>
                        <span className="text-xs font-mono bg-blue-800 px-2 py-0.5 rounded text-white font-bold">RESOURCE BACKLASH</span>
                      </div>
                      <h4 className="text-base font-bold text-white">EU Regulatory Hyperscale (DW Europe Backlash)</h4>
                      <p className="text-xs leading-relaxed text-stone-300">
                        Strong legal privacy under GDPR, but paralyzed by the physical resource crisis documented by DW: massive public protests in Frankfurt and Dublin as data centers consume over 20% of national power grids and scarce water.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-blue-900/60">
                        <div>Citizen Protests: <span className="text-blue-400 font-bold">Severe & Rising</span></div>
                        <div>Aquifer Depletion: <span className="text-blue-400 font-bold">3.9M Gal/Day</span></div>
                        <div>Grid Moratorium: <span className="text-blue-400 font-bold">Dublin & Frankfurt</span></div>
                        <div>Autonomy Rating: <span className="text-blue-400 font-bold">68.5%</span></div>
                      </div>
                    </div>
                  )}

                  {selectedJurisdiction === 'icearth_swiss' && (
                    <div className="p-5 rounded-xl bg-emerald-950/40 border border-emerald-700 text-stone-200 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-400">JURISDICTION PROFILE</span>
                        <span className="text-xs font-mono bg-emerald-800 px-2 py-0.5 rounded text-white font-bold">THE FREEDOM EXTREME</span>
                      </div>
                      <h4 className="text-base font-bold text-white">ICEarth Swiss Stack & Indigenous Microgrids</h4>
                      <p className="text-xs leading-relaxed text-stone-300">
                        Non-custodial client encryption (Swiss FADP standard), zero public grid dependency, 0 gallons of water consumed, and post-quantum zero-knowledge proofs. Delivers uncompromised individual data sovereignty worldwide.
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono pt-2 border-t border-emerald-900/60">
                        <div>Kill Switch Risk: <span className="text-emerald-400 font-bold">0% (Mathematically Immune)</span></div>
                        <div>Aquifer Depletion: <span className="text-emerald-400 font-bold">0.0 Gal/Day (Waterless)</span></div>
                        <div>Grid Stress: <span className="text-emerald-400 font-bold">0.0 MW (Islanded Microgrid)</span></div>
                        <div>Autonomy Rating: <span className="text-emerald-400 font-bold">99.8%</span></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. CROSS-NAVIGATION BAR */}
        <div className={`p-6 rounded-2xl border ${siteTheme === 'dark' ? 'bg-stone-900 border-stone-800' : 'bg-white border-stone-200'} shadow-sm space-y-4`}>
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <span className="text-xs font-mono font-bold text-stone-500 uppercase">Related Sovereign Engines & Proofs</span>
              <h3 className="font-bold text-stone-900 dark:text-white text-base">Explore Interconnected Sovereign Architecture Tabs</h3>
            </div>
            <span className="text-xs font-mono text-stone-400">Direct Permalinks</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <button
              onClick={() => onNavigateTab && onNavigateTab('sovereign_agents')}
              className="p-3 bg-gradient-to-br from-emerald-950/80 to-stone-900 hover:from-emerald-900/90 hover:to-stone-800 rounded-xl text-left border border-emerald-500/50 shadow-md transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-400">PLATE #59</span>
                <Bot size={14} className="text-emerald-400 group-hover:translate-x-1 transition-transform animate-pulse" />
              </div>
              <div className="text-xs font-bold text-white">AI Agents: Normal-People Problem</div>
              <p className="text-[11px] text-stone-300 mt-1">Axios forensic & Roulet's Law sovereign enclave solution</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('icearth_stack')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-amber-500">PLATE #38</span>
                <Cpu size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">The ICEarth Stack: Indigenous AI</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Foundational clean compute & sovereign architecture</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('cherokee_it_position')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-500">PLATE #54</span>
                <Ban size={14} className="text-red-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">Cherokee Nation Hyperscale Ban</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Chief Hoskin Jr. data center moratorium</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('sovereign_identity')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-amber-500">HERALDRY DEFENSE</span>
                <Fingerprint size={14} className="text-amber-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">Sovereign Identity vs. AI Mirage</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Authentic Great Seal & anti-algorithmic erasure</p>
            </button>

            <button
              onClick={() => onNavigateTab && onNavigateTab('jicarilla_sovereign_it')}
              className="p-3 bg-stone-100 hover:bg-stone-200 dark:bg-stone-950 dark:hover:bg-stone-800 rounded-xl text-left border border-stone-300 dark:border-stone-800 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-500">HIGH DESERT COMPUTE</span>
                <Zap size={14} className="text-emerald-500 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-xs font-bold text-stone-900 dark:text-white">Jicarilla Apache Sovereign IT</div>
              <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">Waterless high desert microgrids & Gasbuggy audit</p>
            </button>
          </div>
        </div>
      </div>

      {/* 6. HIGH-RESOLUTION ARTWORK MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6 backdrop-blur-md animate-fadeIn">
          <div className="relative max-w-5xl w-full bg-stone-950 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
            <div className="p-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 bg-red-600 text-white font-mono text-[10px] font-black uppercase rounded">
                  PLATE #55 MASTERWORK
                </span>
                <span className="text-sm font-bold text-white">
                  Swiss Data Sovereignty & The Global Freedom Spectrum
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-colors cursor-pointer text-xs font-mono"
              >
                ✕ Close
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={swissPlateImg}
                alt="Swiss Data Sovereignty & Global Freedom Spectrum (Plate #55)"
                className="max-h-[75vh] w-auto object-contain rounded-lg border border-stone-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-4 bg-stone-900 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2">
                <span className="text-stone-400">Vault Reference:</span>
                <code className="text-amber-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                  {vaultHash}
                </code>
                <button
                  onClick={handleCopyHash}
                  className="p-1 hover:bg-stone-800 rounded text-stone-300"
                  title="Copy cryptographic vault hash"
                >
                  {copiedHash ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://p.dw.com/p/5NEiW?at_medium=SocialMedia&at_campaign=Twitter&at_share_source=SharingButton&at_origin=Web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded font-bold flex items-center gap-1"
                >
                  <span>DW Article by David Ehl</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
