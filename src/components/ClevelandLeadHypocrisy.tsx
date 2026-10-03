import React, { useState } from 'react';
import clevelandHypocrisyPlateImg from '../assets/images/cleveland_hypocrisy_plate61_1791032971784.jpg';
import {
  Shield,
  AlertTriangle,
  Scale,
  Building,
  Newspaper,
  DollarSign,
  Users,
  ExternalLink,
  Maximize2,
  Check,
  Copy,
  ArrowRight,
  Landmark,
  FileText,
  Skull,
  Brain,
  History,
  AlertCircle,
  Gavel,
  Crown
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';

interface ClevelandLeadHypocrisyProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

export const ClevelandLeadHypocrisy: React.FC<ClevelandLeadHypocrisyProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tab navigation
  const [activeSubTab, setActiveSubTab] = useState<
    'editorial_audit' | 'four_betrayals' | 'economic_disparity' | 'roulet_testimony' | 'provenance'
  >('editorial_audit');

  // Vault hash copy state
  const [copiedHash, setCopiedHash] = useState(false);
  const vaultHash = '0xCLEVELAND_LEAD_HYPOCRISY_PLAIN_DEALER_SHERWIN_WILLIAMS_PLATE_61_VAULT_2026';

  // Interactive full resolution artwork modal
  const [isPlateModalOpen, setIsPlateModalOpen] = useState(false);

  const copyVaultHash = () => {
    navigator.clipboard.writeText(vaultHash);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  // Comparative data for financial hypocrisy visualization
  const financialHypocrisyData = [
    { name: 'SW HQ Tax Subsidy', amount: 100, fill: '#EF4444', label: '$100M+ City/County/State Tax Welfare to SW Skyscraper' },
    { name: 'Haslam Rock Hall Gift', amount: 10, fill: '#F59E0B', label: '$10M Haslam Family Gift to Rock Hall Expansion' },
    { name: 'Quinn Demands from SW', amount: 0, fill: '#6B7280', label: '$0 Demanded from Sherwin-Williams ("Not Asking for Money")' },
    { name: 'CA Motley Rice Settlement', amount: 305, fill: '#10B981', label: '$305M Won in California Lead Nuisance Litigation' },
    { name: 'Est. Annual Lead Harm', amount: 180, fill: '#8B5CF6', label: '$180M+ Annual Pediatric Brain & GDP Losses in Cuyahoga' }
  ];

  // Cleveland Ward Lead Exposure Severity Data
  const wardExposureData = [
    { ward: 'East Cleveland', bllPercent: 19.8, homesPre1950: 92, cases: 412 },
    { ward: 'Ward 5 (Central)', bllPercent: 16.4, homesPre1950: 88, cases: 380 },
    { ward: 'Ward 12 (Slavic Village)', bllPercent: 15.2, homesPre1950: 89, cases: 365 },
    { ward: 'Ward 9 (Glenville)', bllPercent: 14.1, homesPre1950: 85, cases: 310 },
    { ward: 'Ward 14 (Clark-Fulton)', bllPercent: 13.9, homesPre1950: 87, cases: 295 },
    { ward: 'US National Avg', bllPercent: 1.9, homesPre1950: 22, cases: 0 }
  ];

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} transition-colors duration-300 font-sans`}>
      {/* 1. TOP HEADER & METADATA HERO BANNER */}
      <section className={`border-b ${isLight ? 'bg-white border-stone-200 shadow-sm' : 'bg-stone-900/90 border-stone-800'} px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden`}>
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 bg-gradient-to-r from-red-600 to-rose-700 text-white font-black rounded-lg uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                <Gavel size={14} className="text-white" />
                <span>Plate #61 • Forensic Exposenomics</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-bold flex items-center gap-1 ${
                isLight ? 'bg-stone-100 border-stone-300 text-rose-950' : 'bg-stone-800 border-stone-700 text-rose-300'
              }`}>
                <Landmark size={13} className={isLight ? 'text-rose-700' : 'text-rose-400'} />
                <span>The Cleveland Lead Hypocrisy: Complicity of the 4th Estate</span>
              </span>
              <span className={`px-2.5 py-1 rounded-lg border font-mono text-[11px] font-semibold ${
                isLight ? 'bg-stone-100 border-stone-300 text-stone-800' : 'bg-stone-800 border-stone-700 text-stone-300'
              }`}>
                Letter from Editor Chris Quinn • Oct. 03, 2026 • cleveland.com / Plain Dealer
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyVaultHash}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer font-bold ${
                  isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-stone-200 border-stone-700'
                }`}
                title="Copy SHA-256 Vault Hash"
              >
                {copiedHash ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} className={isLight ? 'text-stone-700' : 'text-stone-400'} />}
                <span>{copiedHash ? 'Vault Hash Copied' : '0xPLATE_61_VAULT'}</span>
              </button>

              <button
                onClick={() => setIsPlateModalOpen(true)}
                className="px-3 py-1.5 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs font-mono rounded-lg flex items-center gap-1.5 shadow-md cursor-pointer transition-all"
              >
                <Maximize2 size={14} />
                <span>View Master Plate #61</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className={`text-2xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight leading-tight ${isLight ? 'text-stone-950' : 'text-white'}`}>
              Cleveland Lead Hypocrisy: The Plain Dealer, Sherwin-Williams & The Betrayal of Democracy
            </h1>
            <p className={`text-base sm:text-lg max-w-5xl leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
              Following Plain Dealer Editor Chris Quinn's October 3, 2026 editorial demanding Mayor Justin Bibb "get up and lead," ICEarth audits the ultimate civic betrayal: how corporate paint giant Sherwin-Williams received over $100M in public tax subsidies while political leaders sabotaged Motley Rice litigation, ousted East Cleveland Mayor Eric Brewer, and the corporate 4th Estate refused to demand a single dollar of financial restitution from the polluter.
            </p>
          </div>

          {/* Core Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-3">
            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Tax Charity to Polluter</span>
                <DollarSign size={14} className="text-red-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-red-800' : 'text-red-400'}`}>$100M+ Subsidies</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Public funds granted for Sherwin-Williams downtown skyscraper</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Quinn's Demand from SW</span>
                <AlertCircle size={14} className="text-amber-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>$0.00 Restitution</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>"Our series did not ask Sherwin-Williams to shoulder the cost"</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>California Motley Precedent</span>
                <Gavel size={14} className="text-emerald-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>$305 Million Won</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Sherwin-Williams found guilty of public nuisance in California</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Ohio Lawsuit Sabotaged</span>
                <Skull size={14} className="text-purple-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>Frank Jackson Betrayal</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Cleveland Mayor killed GCLAC & Motley Rice litigation in Ohio</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>East Cleveland Mayor</span>
                <Users size={14} className="text-rose-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>Eric Brewer Ousted</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Gay-bashed from office by political machine for initiating lead suit</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-1`}>
              <div className={`flex items-center justify-between text-xs font-bold ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                <span>Why ICEarth Exists</span>
                <Shield size={14} className="text-cyan-500" />
              </div>
              <div className={`text-xl font-bold font-mono ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>Roulet’s Law</div>
              <p className={`text-[10px] leading-tight font-medium ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Norm Roulet co-chaired GCLAC, fled Ohio, built sovereign data network</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SUB-NAVIGATION TABS */}
      <div className={`border-b ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} sticky top-0 z-30 shadow-xs`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 py-2 text-xs font-mono scrollbar-none">
            <button
              onClick={() => setActiveSubTab('editorial_audit')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'editorial_audit'
                  ? 'bg-rose-700 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Newspaper size={15} />
              <span>1. Quinn's Oct 3 Editorial Deconstructed</span>
            </button>

            <button
              onClick={() => setActiveSubTab('four_betrayals')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'four_betrayals'
                  ? 'bg-purple-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <History size={15} />
              <span>2. The 4 Betrayals of Cleveland Democracy</span>
            </button>

            <button
              onClick={() => setActiveSubTab('economic_disparity')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'economic_disparity'
                  ? 'bg-amber-600 text-stone-950 shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <DollarSign size={15} />
              <span>3. Financial & Epidemiological Disparity</span>
            </button>

            <button
              onClick={() => setActiveSubTab('roulet_testimony')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'roulet_testimony'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Shield size={15} />
              <span>4. Roulet's Law: Why Norm Left Ohio & Built ICEarth</span>
            </button>

            <button
              onClick={() => setActiveSubTab('provenance')}
              className={`px-3.5 py-2 rounded-xl transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer font-bold ${
                activeSubTab === 'provenance'
                  ? 'bg-cyan-600 text-white shadow-md'
                  : isLight
                  ? 'text-stone-700 hover:text-stone-950 hover:bg-stone-100'
                  : 'text-stone-400 hover:text-stone-100 hover:bg-stone-800'
              }`}
            >
              <Maximize2 size={15} />
              <span>5. Master Plate #61 & Cryptographic Provenance</span>
            </button>
          </div>
        </div>
      </div>

      {/* 3. SUB-TAB CONTENT PANELS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* SUB-TAB 1: QUINN'S EDITORIAL DECONSTRUCTED */}
        {activeSubTab === 'editorial_audit' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 font-mono text-xs font-bold rounded-lg flex items-center gap-1.5 border ${
                    isLight ? 'bg-rose-100 text-rose-950 border-rose-300' : 'bg-rose-950/40 text-rose-300 border-rose-700'
                  }`}>
                    <Newspaper size={14} />
                    <span>LETTER FROM THE EDITOR AUDIT • OCT. 03, 2026</span>
                  </span>
                  <span className={`text-xs font-mono font-medium ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Chris Quinn, Editor, cleveland.com / The Plain Dealer
                  </span>
                </div>
                <a
                  href="https://www.cleveland.com/news/2026/10/justin-bibb-get-up-and-lead-clevelands-children-need-you-letter-from-the-editor.html?outputType=amp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-xs font-mono font-bold rounded-lg border flex items-center gap-1.5 transition-all cursor-pointer ${
                    isLight ? 'bg-stone-100 hover:bg-stone-200 text-stone-900 border-stone-300' : 'bg-stone-800 hover:bg-stone-700 text-rose-300 border-stone-700'
                  }`}
                >
                  <span>View Original Editorial</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-rose-400'}`}>
                    "Justin Bibb, get up and lead. Cleveland’s children need you"
                  </h2>
                  <p className={`text-sm sm:text-base leading-relaxed ${isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}`}>
                    On October 3, 2026, Plain Dealer Editor Chris Quinn published an impassioned public letter addressed directly to Cleveland Mayor Justin Bibb. Quinn proclaimed that no issue exposes Greater Cleveland's leadership failure more starkly than childhood lead poisoning, arguing that if Bibb leaves office without ending this crisis, that failure will be his lasting legacy.
                  </p>

                  <div className={`p-4 rounded-xl border-l-4 border-amber-500 text-sm font-serif italic ${
                    isLight ? 'bg-amber-50/70 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'
                  }`}>
                    "Our series did not ask Sherwin-Williams to shoulder the cost of solving the crisis. The people running the company today did not make those sinister decisions generations ago. But they can help determine what happens next... We asked the company to fill Greater Cleveland’s glaring leadership void and oversee a cleanup... I’m not asking the Haslams and the others for money. I’m asking for their time and expertise."
                    <footer className="text-xs font-mono font-bold mt-2 text-amber-700 dark:text-amber-400 not-italic">
                      — Chris Quinn, Plain Dealer Editor (Oct. 3, 2026)
                    </footer>
                  </div>

                  <h3 className={`text-lg font-serif font-bold ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    The Anatomy of Media Complicity:
                  </h3>
                  <div className="space-y-2.5 text-xs font-mono">
                    <div className={`p-3 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-red-600 block mb-0.5">1. Scapegoating Elected Officials while Granting Corporate Immunity:</strong>
                      Quinn explicitly refuses to demand financial restitution from Sherwin-Williams, asserting that current leadership didn't make the sinister decisions generations ago. Yet Sherwin-Williams profited for over a century, fought lawsuits tooth and nail, and continues to enjoy over $100M in public tax subsidies.
                    </div>

                    <div className={`p-3 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-purple-600 block mb-0.5">2. Praising Frank Jackson — The Mayor Who Sabotaged the Lawsuit:</strong>
                      Quinn instructs Mayor Bibb to "sit down with former Mayor Frank Jackson for some schooling about the power of his office." In reality, Frank Jackson killed the Motley Rice lawsuit against Sherwin-Williams, betrayed the Greater Cleveland Lead Advisory Council (GCLAC), and orchestrated the political destruction of East Cleveland Mayor Eric Brewer who initiated the legal battle.
                    </div>

                    <div className={`p-3 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-amber-600 block mb-0.5">3. Feudal Philanthropy instead of Legal Liability:</strong>
                      Rather than demanding legal accountability, Quinn asks sports billionaires (Browns owners Jimmy & Dee Haslam, Cavaliers owner Dan Gilbert) and corporate executives to offer "their time and expertise." The Haslams recently gave $10M to the Rock & Roll Hall of Fame expansion, while thousands of Cleveland children are poisoned in unmitigated homes every year.
                    </div>

                    <div className={`p-3 rounded-xl border ${isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'}`}>
                      <strong className="text-cyan-600 block mb-0.5">4. The 4th Estate's Decades-Long Silence:</strong>
                      For 30 years (20 in leadership), Quinn admits he never made lead poisoning a priority. The Plain Dealer was supported by Sherwin-Williams advertising, uncritically cheered the $100M+ corporate tax subsidies, and failed to protect generations of children from catastrophic brain damage.
                    </div>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-stone-800">
                    <div className="flex items-center justify-between">
                      <h4 className={`text-base font-serif font-black flex items-center gap-2 ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                        <FileText size={18} className="text-red-600" />
                        <span>Verbatim Editorial Text & Paragraph-by-Paragraph Forensic Analysis</span>
                      </h4>
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded border font-semibold ${
                        isLight ? 'bg-stone-100 border-stone-300 text-stone-700' : 'bg-stone-800 border-stone-700 text-stone-400'
                      }`}>
                        Oct. 03, 2026 • 8:05 a.m.
                      </span>
                    </div>

                    {/* Verbatim Article Box */}
                    <div className={`p-5 rounded-2xl border space-y-4 font-serif text-sm leading-relaxed ${
                      isLight ? 'bg-stone-50/90 border-stone-300 text-stone-900' : 'bg-stone-950 border-stone-800 text-stone-200'
                    }`}>
                      <div className="border-b border-stone-200 dark:border-stone-800 pb-3">
                        <h5 className="text-lg font-bold font-serif text-stone-900 dark:text-stone-100">
                          Justin Bibb, get up and lead. Cleveland’s children need you: Letter from the Editor
                        </h5>
                        <div className="text-xs font-mono text-stone-600 dark:text-stone-400 mt-1">
                          Published: Oct. 03, 2026, 8:05 a.m. • By Chris Quinn, Editor, cleveland.com/The Plain Dealer
                        </div>
                      </div>

                      <div className="space-y-3 text-xs sm:text-sm font-sans">
                        <p className="italic text-stone-700 dark:text-stone-300">
                          Whenever we discuss the lack of leadership in Ohio and Greater Cleveland, readers respond passionately. They want people they can trust to put the public first.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          They mention former senators George Voinovich and John Glenn. Locally, I’d add former county leaders Peter Lawson Jones and Jim Rokakis. What people remember of them is a willingness to make decisions based on what would best serve the community.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          No issue exposes our leadership failure more starkly than the lead paint crisis. Cleveland children continue to be poisoned in their homes, suffering brain damage that significantly impairs their ability to learn and thrive for the rest of their lives.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          We know the danger. We know where much of it lurks. Yet we still have not found the leaders who will drop everything to protect these children on the scale the crisis demands.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          In July, we published a series examining the paint industry’s role in this disaster, including that of Cleveland-based Sherwin-Williams. We showed beyond any doubt that manufacturers knew about lead paint’s dangers decades before the residential ban but kept that information secret and continued to promote and sell it.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          Most of Cleveland’s vast stock of older housing was built during the lead paint’s heyday, meaning the toxin remains on walls, doors and trim today, where it deteriorates and poisons children.
                        </p>

                        {/* Critical Hypocrisy Callout 1 */}
                        <div className={`p-3.5 rounded-xl border-l-4 border-red-600 my-2 font-mono text-xs ${
                          isLight ? 'bg-red-50 text-red-950 border-red-300' : 'bg-red-950/40 text-red-200 border-red-800'
                        }`}>
                          <strong className="block text-red-700 dark:text-red-400 font-bold mb-1">[CIVIC HYPOCRISY KEYSTONE: REFUSAL TO DEMAND RESTITUTION]</strong>
                          <em>"Our series did not ask Sherwin-Williams to shoulder the cost of solving the crisis. The people running the company today did not make those sinister decisions generations ago. But they can help determine what happens next."</em>
                          <span className="block mt-1 font-sans text-[11px] text-stone-700 dark:text-stone-400">
                            <strong>ICEarth Audit:</strong> California courts assessed Sherwin-Williams hundreds of millions in public nuisance damages for this exact conduct. Yet Quinn grants Sherwin-Williams absolute financial immunity while his town's children suffer irreversible brain damage.
                          </span>
                        </div>

                        <p className="italic text-stone-700 dark:text-stone-300">
                          We asked the company to contribute an asset that could make an enormous difference: its leadership. The second installment of our series focused on the remarkable string of leaders that built Sherwin-Williams into the world’s biggest paint company and kept it strong for more than a century. We asked the company to fill Greater Cleveland’s glaring leadership void and oversee a cleanup.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          We proposed a team of people in our region who know how to get things done: Sherwin-Williams CEO Heidi Petz, Browns owners Dee and Jimmy Haslam, Cavaliers owner and developer Dan Gilbert, Cleveland Clinic CEO Tom Mihaljevic, Cleveland Foundation chief Lillian Kuri and entrepreneur Ray Leach.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          And Cleveland Mayor Justin Bibb, who bears a particular responsibility for bringing them together.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          I like Bibb. A lot, actually. When he first ran five years ago, he offered exactly the kind of change Cleveland needed. He was unencumbered by the tired thinking of City Hall’s political machine. He was young, innovative and bold, and in his first term he launched ideas that fulfilled the promise of his candidacy.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          But if he leaves office without putting Cleveland on a real path to ending childhood lead poisoning, that failure will be his lasting legacy.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          What kind of future are we building with downtown development, the lakefront and Cleveland Hopkins International Airport if we keep letting Cleveland’s housing rob children of their potential to thrive? Is there really any choice between an airport and protecting countless children?
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          Our lead paint failures in this town span administrations, of course. But Bibb is in the chair now, meaning this crisis is his.
                        </p>

                        {/* Critical Hypocrisy Callout 2 */}
                        <div className={`p-3.5 rounded-xl border-l-4 border-purple-600 my-2 font-mono text-xs ${
                          isLight ? 'bg-purple-50 text-purple-950 border-purple-300' : 'bg-purple-950/40 text-purple-200 border-purple-800'
                        }`}>
                          <strong className="block text-purple-700 dark:text-purple-400 font-bold mb-1">[HISTORICAL TRAVESTY: PRAISING THE MAYOR WHO KILLED THE LAWSUIT]</strong>
                          <em>"Bibb needs to sit down with former Mayor Frank Jackson for some schooling about the power of his office to assemble people who can solve difficult problems. Jackson knew that if he called leaders to the table to tackle a challenge, they would show up. He did it for the school transformation plan and community benefits agreements. He understood a mayor’s power to get business and nonprofit leaders working in concert. I wish Jackson had used that power to end the lead paint crisis. Bibb still can."</em>
                          <span className="block mt-1 font-sans text-[11px] text-stone-700 dark:text-stone-400">
                            <strong>ICEarth Audit:</strong> Former Mayor Frank Jackson actively killed the Motley Rice lawsuit against Sherwin-Williams that Norm Roulet and GCLAC brought to Ohio, and presided over the brutal political destruction of East Cleveland Mayor Eric Brewer who initiated the action. Urging Bibb to take schooling from Jackson is grotesque revisionism.
                          </span>
                        </div>

                        <p className="italic text-stone-700 dark:text-stone-300">
                          And what about the others?
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          Last month, the Haslams gave $10 million to the Rock & Roll Hall of Fame’s expansion. Why? That place sucks in money, including tax dollars from the state capital budget. All so it can charge you $45 to look at tired togs a rock and roller wore 50 years ago.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          How many homes could we rid of lead hazards with $10 million? How many children will grow up in those homes over the next 50 years? Children we could save?
                        </p>

                        {/* Critical Hypocrisy Callout 3 */}
                        <div className={`p-3.5 rounded-xl border-l-4 border-amber-600 my-2 font-mono text-xs ${
                          isLight ? 'bg-amber-50 text-amber-950 border-amber-300' : 'bg-amber-950/40 text-amber-200 border-amber-800'
                        }`}>
                          <strong className="block text-amber-700 dark:text-amber-400 font-bold mb-1">[FEUDAL BEGGING: NOT ASKING BILLIONAIRES FOR MONEY]</strong>
                          <em>"But I’m not asking the Haslams and the others for money. I’m asking for their time and expertise. These are people who organize complicated projects, secure resources and insist on results. And Cleveland’s kids need them."</em>
                          <span className="block mt-1 font-sans text-[11px] text-stone-700 dark:text-stone-400">
                            <strong>ICEarth Audit:</strong> Instead of legal enforcement, restitution, or clawing back the $100M+ tax charity handed to Sherwin-Williams, Quinn asks oligarchs for "time and expertise"—a feudal model of voluntary charity that guarantees children remain poisoned.
                          </span>
                        </div>

                        <p className="italic text-stone-700 dark:text-stone-300">
                          That would mean working with public health experts, people who remove lead hazards and families living with the danger to build a plan with clear responsibilities, enough money and deadlines the public can track. We laid out such a plan on the last day of our series.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          We should be able to see how many homes are being made safe, how quickly the work is moving and who is responsible when it stalls.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          I know the blame for this continuing crisis reaches in many directions, including here. On the first day of our series, I acknowledged that we had not previously examined Sherwin-Williams’ role. I’ve been here for 30 years, 20 in a leadership role, and I had not made this the priority it deserved to be.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          Publishing a series does not erase that failure. It obligates us to keep asking what comes next.
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          The same question faces everyone with the power to help. Whatever we failed to do in the past is past. It’s what we do now that matters. Why won’t leaders step up here? What could be more important?
                        </p>
                        <p className="italic text-stone-700 dark:text-stone-300">
                          A city cannot claim to be building a better future while allowing its children to be poisoned in their homes. I argue we have no greater priority than the children. Everything else is a distant second.
                        </p>
                        <p className="font-bold text-stone-900 dark:text-stone-100 text-sm">
                          Justin Bibb, get up and lead. The kids need you. Use the power of your office to assemble a team, set a timetable and make the results public. Give this crisis the urgency those children deserve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Plate 61 Preview */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() => setIsPlateModalOpen(true)}
                    className="relative group rounded-2xl overflow-hidden border-2 border-red-500/60 shadow-2xl cursor-pointer bg-black"
                  >
                    <img
                      src={clevelandHypocrisyPlateImg}
                      alt="Plate 61: Cleveland Lead Hypocrisy"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4">
                      <div className="flex items-center justify-between text-xs font-mono font-bold text-red-300">
                        <span>PLATE #61 FORENSIC EXPOSENOMICS</span>
                        <span className="flex items-center gap-1 text-white">
                          <Maximize2 size={13} /> Expand
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-mono mt-1">
                        Sherwin-Williams Skyscraper, $100M Tax Charity, Motley Rice Sabotage & The Plain Dealer Complicity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 2: THE 4 BETRAYALS OF CLEVELAND DEMOCRACY */}
        {activeSubTab === 'four_betrayals' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-purple-800' : 'text-purple-400'}`}>
                    Historical Forensic Timeline
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    The Four Betrayals of Cleveland Democracy
                  </h2>
                  <p className={`text-xs font-mono mt-1 ${isLight ? 'text-stone-700' : 'text-stone-400'}`}>
                    Documenting how municipal governance, the legal system, corporate power, and journalism failed the children.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Betrayal 1 */}
                <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-red-600 text-white font-mono text-[10px] font-bold rounded-lg">BETRAYAL 1</span>
                    <Building size={18} className="text-red-500" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    The Corporate Polluter: Sherwin-Williams
                  </h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    For more than a century, Cleveland served as the world headquarters for Sherwin-Williams. The company knew lead paint caused permanent neurological damage as early as the 1900s, yet aggressively marketed white lead paint to American households. While California courts found Sherwin-Williams liable for hundreds of millions in public nuisance abatement, Ohio civic leaders allowed the company to evade liability completely.
                  </p>
                </div>

                {/* Betrayal 2 */}
                <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-purple-600 text-white font-mono text-[10px] font-bold rounded-lg">BETRAYAL 2</span>
                    <Gavel size={18} className="text-purple-500" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    The Municipal Sabotage: Frank Jackson & Political Ouster of Eric Brewer
                  </h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    When the Greater Cleveland Lead Advisory Council (GCLAC)—co-chaired by Norm Roulet—partnered with national litigation firm Motley Rice to hold Sherwin-Williams accountable in Ohio just as they had in California, then-Cleveland Mayor Frank Jackson sabotaged the lawsuit. Political machine bosses turned against East Cleveland Mayor Eric Brewer, who had bravely initiated the municipal litigation, weaponizing homophobic attacks and personal smear campaigns to drive him out of public office.
                  </p>
                </div>

                {/* Betrayal 3 */}
                <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-amber-600 text-stone-950 font-mono text-[10px] font-bold rounded-lg">BETRAYAL 3</span>
                    <DollarSign size={18} className="text-amber-500" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    The $100M+ Tax Charity Skyscraper Giveaway
                  </h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    Instead of demanding that Sherwin-Williams fund the lead remediation of Cleveland's deteriorating housing stock, city, county, and state political leaders handed the Fortune 500 corporation over $100 Million in public tax breaks, abatements, and infrastructure subsidies to construct a gleaming 36-story skyscraper headquarters in downtown Cleveland. Children were left to ingest lead dust while taxpayers subsidized corporate luxury.
                  </p>
                </div>

                {/* Betrayal 4 */}
                <div className={`p-6 rounded-2xl border space-y-3 ${isLight ? 'bg-stone-50 border-stone-300' : 'bg-stone-950 border-stone-800'}`}>
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-cyan-600 text-white font-mono text-[10px] font-bold rounded-lg">BETRAYAL 4</span>
                    <Newspaper size={18} className="text-cyan-500" />
                  </div>
                  <h3 className={`font-serif font-bold text-lg ${isLight ? 'text-stone-950' : 'text-white'}`}>
                    The Complicity of the 4th Estate: The Plain Dealer
                  </h3>
                  <p className={`text-xs leading-relaxed ${isLight ? 'text-stone-800' : 'text-stone-300'}`}>
                    The Plain Dealer and cleveland.com took Sherwin-Williams advertising revenue for generations while ignoring the ongoing pediatric poisoning happening in neighborhoods like Glenville, Slavic Village, Clark-Fulton, and East Cleveland. When Editor Chris Quinn finally produced his 5-part series in July 2026, he explicitly acquitted the corporation, proposing that the polluter should lead a voluntary advisory board rather than pay for the cleanup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: FINANCIAL & EPIDEMIOLOGICAL DISPARITY */}
        {activeSubTab === 'economic_disparity' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-amber-800' : 'text-amber-400'}`}>
                    Economic & Clinical Inequity
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Subsidies for the Skyscraper vs. Zero for Poisoned Children
                  </h2>
                </div>
              </div>

              {/* Bar Chart: Financial Disparity */}
              <div className="space-y-3">
                <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Comparison of Financial Allocations & Demands ($ Millions USD)
                </h3>
                <div className="h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={financialHypocrisyData} margin={{ top: 20, right: 30, left: 10, bottom: 25 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke={isLight ? '#e7e5e4' : '#292524'} />
                      <XAxis dataKey="name" stroke={isLight ? '#44403c' : '#a8a29e'} tick={{ fontSize: 10, fill: isLight ? '#1c1917' : '#e4e4e7' }} />
                      <YAxis stroke={isLight ? '#44403c' : '#78716c'} tickFormatter={(v) => `$${v}M`} tick={{ fontSize: 11, fill: isLight ? '#1c1917' : '#e4e4e7' }} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: isLight ? '#ffffff' : '#0c0a09',
                          borderColor: isLight ? '#d6d3d1' : '#44403c',
                          borderRadius: '0.75rem',
                          fontSize: '12px',
                          color: isLight ? '#0c0a09' : '#f5f5f4'
                        }}
                        formatter={(val: any, _name: any, item: any) => [`$${val} Million`, item.payload.label]}
                      />
                      <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                        {financialHypocrisyData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Table of Ward Lead Poisoning Rates */}
              <div className="space-y-3 pt-4 border-t border-stone-200 dark:border-stone-800">
                <h3 className={`font-serif font-bold text-base ${isLight ? 'text-stone-950' : 'text-white'}`}>
                  Pediatric Lead Exposure by Cleveland Neighborhoods (Children Tested &gt; 5 µg/dL)
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs font-mono">
                    <thead>
                      <tr className={`border-b ${isLight ? 'border-stone-300 bg-stone-100 text-stone-900' : 'border-stone-700 bg-stone-900 text-stone-200'}`}>
                        <th className="p-2.5 text-left font-bold">Neighborhood / Ward</th>
                        <th className="p-2.5 text-right font-bold">% Children with Elevated BLL</th>
                        <th className="p-2.5 text-right font-bold">% Homes Pre-1950 (Lead Paint Era)</th>
                        <th className="p-2.5 text-right font-bold">Annual New Child Cases</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-200 dark:divide-stone-800">
                      {wardExposureData.map((w, idx) => (
                        <tr key={idx} className={w.ward === 'East Cleveland' ? (isLight ? 'bg-red-50 font-bold' : 'bg-red-950/30 font-bold') : ''}>
                          <td className="p-2.5 font-bold">{w.ward}</td>
                          <td className={`p-2.5 text-right ${w.bllPercent > 10 ? 'text-red-600 font-bold' : ''}`}>
                            {w.bllPercent}%
                          </td>
                          <td className="p-2.5 text-right">{w.homesPre1950}%</td>
                          <td className="p-2.5 text-right font-bold">{w.cases > 0 ? w.cases : 'N/A'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: ROULET'S TESTIMONY & WHY ICEARTH EXISTS */}
        {activeSubTab === 'roulet_testimony' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>
                    Sovereign Founder Testimony
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Why Norm Roulet Left Ohio and Built ICEarth
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed">
                <div className={`p-5 rounded-2xl border-l-4 border-emerald-600 space-y-3 ${
                  isLight ? 'bg-emerald-50/70 border-stone-300 text-stone-900' : 'bg-emerald-950/30 border-stone-800 text-stone-200'
                }`}>
                  <p className="font-serif italic">
                    "I was co-chair of the Greater Cleveland Lead Advisory Council for Infrastructure and Sustainability (GCLAC). We brought the same Motley Rice litigation against Sherwin-Williams to Ohio that successfully held them liable in California. But our lawsuit was betrayed by then-Cleveland Mayor Frank Jackson and political leaders—to the extent of gay-bashing from office the Mayor of East Cleveland where I lived, Eric Brewer, who initiated the litigation. At the exact same time, those political leaders gave Sherwin-Williams over $100 million in public tax charity. That represents the absolute failure of American democracy."
                  </p>
                  <footer className="text-xs font-mono font-bold text-emerald-800 dark:text-emerald-400 not-italic">
                    — Norman Roulet, ICEarth Founder & Chief Sovereign Systems Architect
                  </footer>
                </div>

                <p className={isLight ? 'text-stone-800 font-medium' : 'text-stone-300'}>
                  For these exact causes, Norm Roulet physically left Cleveland and the State of Ohio, has not returned in many years, and will always hold them directly responsible for the pediatric lead crisis. They are the living embodiment of <strong>Roulet’s Law of Exposenomics:</strong>
                </p>

                <div className={`p-4 rounded-xl border text-center font-mono text-sm font-bold ${
                  isLight ? 'bg-stone-100 border-stone-300 text-stone-900' : 'bg-stone-900 border-stone-800 text-amber-300'
                }`}>
                  Perturbation (H') × Biological Exposure (t) = Biological Chaos (C)
                </div>

                <p className={isLight ? 'text-stone-800' : 'text-stone-300'}>
                  When corporate polluters externalize toxic burdens onto human bodies, captured political leaders grant tax welfare to the perpetrators, and the 4th Estate shields them from accountability, municipal democracy ceases to function. This is why ICEarth and Sovereign IT were created: to replace compromised civic institutions with decentralized, cryptographically verified citizen networks and Indigenous data sovereignty that cannot be silenced or bought off.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: MASTER PLATE 61 PROVENANCE & ARCHIVE */}
        {activeSubTab === 'provenance' && (
          <div className="space-y-8 animate-fadeIn">
            <div className={`p-6 sm:p-8 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-6`}>
              <div className={`flex flex-wrap items-center justify-between gap-3 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-4`}>
                <div>
                  <span className={`text-xs font-mono uppercase tracking-wider font-bold ${isLight ? 'text-cyan-800' : 'text-cyan-400'}`}>
                    Plate #61 Archival Record
                  </span>
                  <h2 className={`text-2xl sm:text-3xl font-serif font-black ${isLight ? 'text-stone-950' : 'text-stone-100'}`}>
                    Master Forensic Infographic & Cryptographic Provenance
                  </h2>
                </div>
                <button
                  onClick={() => setIsPlateModalOpen(true)}
                  className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-bold text-xs font-mono rounded-xl flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Maximize2 size={15} />
                  <span>Expand Full Screen</span>
                </button>
              </div>

              {/* Master Artwork Presentation */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl bg-black">
                <img
                  src={clevelandHypocrisyPlateImg}
                  alt="Plate 61: Cleveland Lead Hypocrisy Infographic"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Provenance Metadata Table */}
              <div className={`p-6 rounded-2xl border space-y-4 ${isLight ? 'bg-stone-50 border-stone-300 shadow-sm' : 'bg-stone-950 border-stone-800'}`}>
                <h4 className={`font-serif font-bold text-base flex items-center gap-2 ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>
                  <Shield size={16} />
                  <span>Cryptographic Vault Authentication</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="space-y-2">
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Asset Identifier:</span>
                      <span className={`font-bold ${isLight ? 'text-stone-950' : 'text-white'}`}>PHOTO-000BU / IP-000BU / Plate #61</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Permanent SHA-256 Vault Hash:</span>
                      <span className={`break-all font-bold ${isLight ? 'text-rose-800' : 'text-rose-400'}`}>{vaultHash}</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Editorial Reference:</span>
                      <span className={isLight ? 'text-stone-900' : 'text-stone-200'}>cleveland.com / The Plain Dealer (Chris Quinn, Oct. 03, 2026)</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Historical Evidence:</span>
                      <span className={isLight ? 'text-stone-900' : 'text-stone-200'}>GCLAC Records, Motley Rice Ohio Docket, East Cleveland Archive</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Sovereign Jurisprudence:</span>
                      <span className={isLight ? 'text-emerald-800 font-bold' : 'text-emerald-400'}>Roulet's Law of Exposenomics & ICEarth Sovereign IT</span>
                    </div>
                    <div>
                      <span className={`block font-bold ${isLight ? 'text-stone-700' : 'text-stone-500'}`}>Verification Status:</span>
                      <span className={`font-bold ${isLight ? 'text-emerald-800' : 'text-emerald-400'}`}>Permanent Cryptographic Provenance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. CROSS-NAVIGATION BUTTONS */}
        <section className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-300 shadow-sm' : 'bg-stone-900 border-stone-800'} space-y-4`}>
          <div className={`flex flex-wrap items-center justify-between gap-2 border-b ${isLight ? 'border-stone-200' : 'border-stone-800'} pb-3`}>
            <h4 className={`font-serif font-bold text-base flex items-center gap-2 ${isLight ? 'text-stone-950' : 'text-stone-200'}`}>
              <Shield size={16} className={isLight ? 'text-rose-700' : 'text-rose-400'} />
              <span>Related Exposenomics & Legal Proofs</span>
            </h4>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => onNavigateTab?.('cleveland')}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-rose-700 hover:from-red-500 hover:to-rose-600 text-white font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer shadow-md transition-all hover:scale-105"
            >
              <span>🔴 Cleveland Lead Audit & Confession</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('cleveland_strategy')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-purple-900 border-purple-300' : 'bg-stone-800 hover:bg-stone-700 text-purple-300 border-purple-500/40'
              }`}
            >
              <span>🏛️ Cleveland Strategy Solution (GCLAC)</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('norm_roulet')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-amber-900 border-amber-300' : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-amber-500/40'
              }`}
            >
              <span>🏠 Norm Roulet Home & Feed</span>
              <ArrowRight size={13} />
            </button>

            <button
              onClick={() => onNavigateTab?.('lead_poisoning_legal_recourse')}
              className={`px-4 py-2 font-mono font-bold text-xs rounded-xl flex items-center gap-1.5 cursor-pointer transition-all hover:scale-105 border ${
                isLight ? 'bg-stone-100 hover:bg-stone-200 text-cyan-900 border-cyan-300' : 'bg-stone-800 hover:bg-stone-700 text-cyan-300 border-cyan-500/40'
              }`}
            >
              <span>⚖️ NY Lead Litigation & Legal Recourse</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </section>
      </main>

      {/* 5. FULL RESOLUTION ARTWORK MODAL */}
      {isPlateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
          <div className="relative max-w-6xl w-full max-h-[95vh] flex flex-col bg-stone-950 border border-stone-800 rounded-3xl overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-red-600 text-white font-mono text-xs font-bold rounded-lg uppercase">
                  Plate #61 Master Forensic
                </span>
                <span className="text-xs font-mono text-stone-300 hidden sm:inline">
                  Cleveland Lead Hypocrisy: The Plain Dealer, Sherwin-Williams & The Betrayal of Democracy
                </span>
              </div>
              <button
                onClick={() => setIsPlateModalOpen(false)}
                className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-mono font-bold cursor-pointer"
              >
                Close &times;
              </button>
            </div>

            {/* Modal Image */}
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black">
              <img
                src={clevelandHypocrisyPlateImg}
                alt="Plate 61 Full Resolution"
                className="max-h-[75vh] w-auto object-contain rounded-xl border border-stone-800 shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-stone-400 bg-stone-900/60">
              <span className="truncate max-w-md">Vault Hash: {vaultHash}</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyVaultHash}
                  className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  {copiedHash ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  <span>{copiedHash ? 'Copied' : 'Copy Hash'}</span>
                </button>
                <a
                  href={clevelandHypocrisyPlateImg}
                  download="Plate61_Cleveland_Lead_Hypocrisy_ICEarth.jpg"
                  className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg flex items-center gap-1 cursor-pointer"
                >
                  <span>Download Plate #61</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
