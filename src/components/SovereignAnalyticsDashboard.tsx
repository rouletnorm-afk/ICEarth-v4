import React, { useState, useEffect } from 'react';
import {
  BarChart3,
  Users,
  Clock,
  Globe,
  Share2,
  Download,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Brain,
  Zap,
  Activity,
  FileSpreadsheet,
  ExternalLink,
  Info,
  CheckCircle2,
  Copy,
  Layers,
  Search,
  Eye,
  Filter
} from 'lucide-react';
import {
  getAnalyticsSummary,
  resetAnalyticsData,
  AnalyticsSummary,
  PageViewEvent
} from '../lib/analytics';

interface SovereignAnalyticsDashboardProps {
  onNavigateTab?: (tab: string) => void;
}

export const SovereignAnalyticsDashboard: React.FC<SovereignAnalyticsDashboardProps> = ({ onNavigateTab }) => {
  const [summary, setSummary] = useState<AnalyticsSummary>(getAnalyticsSummary());
  const [copiedScript, setCopiedScript] = useState(false);
  const [activeSubTab, setActiveSubTab] = useState<'metrics' | 'setup_guide' | 'recent_stream'>('metrics');
  const [gaInput, setGaInput] = useState('');
  const [gaSaved, setGaSaved] = useState(false);

  useEffect(() => {
    // Refresh summary periodically
    const interval = setInterval(() => {
      setSummary(getAnalyticsSummary());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setSummary(getAnalyticsSummary());
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(summary, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `icearth_analytics_report_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyGaSnippet = () => {
    const snippet = `<!-- Google Analytics 4 (GA4) Integration for ICEarth.org -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_MEASUREMENT_ID');
</script>`;
    navigator.clipboard.writeText(snippet);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 3000);
  };

  const formatSeconds = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="w-full space-y-8 pb-16 font-sans text-stone-900">
      
      {/* TOP HEADER BANNER */}
      <div className="bg-stone-950 text-white p-6 sm:p-10 rounded-3xl border-2 border-amber-500/60 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Background Glows */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header Badges & Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-800 pb-4 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-mono text-xs font-black uppercase tracking-wider rounded-xl shadow-lg flex items-center gap-2">
              <BarChart3 size={16} className="text-stone-950" />
              <span>SOVEREIGN ANALYTICS & VISITOR METRICS</span>
            </span>
            <span className="px-3 py-1 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold rounded-xl flex items-center gap-1.5">
              <Activity size={15} className="text-emerald-400" />
              <span>Live Site Telemetry Active</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-stone-200 font-mono text-xs font-bold rounded-xl border border-stone-800 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw size={14} className="text-amber-400" />
              <span>Refresh Metrics</span>
            </button>
            <button
              onClick={handleExportJson}
              className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-mono text-xs font-black rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download size={14} />
              <span>Export Report</span>
            </button>
          </div>
        </div>

        {/* Title & Overview */}
        <div className="space-y-3 relative z-10">
          <h1 className="text-3xl sm:text-4xl font-serif font-black text-stone-100 leading-tight">
            ICEarth.org Visitor Analytics & Impact Dashboard
          </h1>
          <p className="text-xs sm:text-sm font-sans text-stone-300 max-w-4xl leading-relaxed">
            Track real-time traffic dispatches, unique visitor engagement, length of time on site, popular deep links (<code className="text-amber-300 font-mono">?tab=flint</code>, <code className="text-amber-300 font-mono">?tab=ai_testimonial</code>), and referral channels from your global email dispatches and social media shares.
          </p>
        </div>

        {/* Sub Navigation Bar */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800/80 relative z-10 font-mono text-xs">
          <button
            onClick={() => setActiveSubTab('metrics')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'metrics'
                ? 'bg-amber-500 text-stone-950 font-black shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <TrendingUp size={15} />
            <span>Live Visitor Metrics</span>
          </button>

          <button
            onClick={() => setActiveSubTab('setup_guide')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'setup_guide'
                ? 'bg-amber-500 text-stone-950 font-black shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Globe size={15} />
            <span>Google Analytics & Cloudflare Setup</span>
          </button>

          <button
            onClick={() => setActiveSubTab('recent_stream')}
            className={`px-4 py-2 rounded-xl font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeSubTab === 'recent_stream'
                ? 'bg-amber-500 text-stone-950 font-black shadow-md'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800'
            }`}
          >
            <Activity size={15} />
            <span>Real-Time Visitor Log</span>
          </button>
        </div>

      </div>

      {/* SUB-VIEW 1: METRICS DASHBOARD */}
      {activeSubTab === 'metrics' && (
        <div className="space-y-6">
          
          {/* TOP STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Unique Visitors */}
            <div className="p-6 bg-white rounded-3xl border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-stone-500 font-mono text-xs font-bold">
                <span>UNIQUE VISITORS</span>
                <Users size={18} className="text-amber-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
                {summary.uniqueVisitors.toLocaleString()}
              </div>
              <span className="text-[11px] font-mono text-emerald-600 font-bold block">
                ✓ Unique Session Persistent Tracking
              </span>
            </div>

            {/* Card 2: Total Page Views */}
            <div className="p-6 bg-white rounded-3xl border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-stone-500 font-mono text-xs font-bold">
                <span>TOTAL PAGE VIEWS</span>
                <Eye size={18} className="text-blue-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
                {summary.totalViews.toLocaleString()}
              </div>
              <span className="text-[11px] font-mono text-blue-600 font-bold block">
                Direct Deep Links & Tab Views
              </span>
            </div>

            {/* Card 3: Avg Time on Site */}
            <div className="p-6 bg-white rounded-3xl border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-stone-500 font-mono text-xs font-bold">
                <span>AVG TIME ON SITE</span>
                <Clock size={18} className="text-emerald-600" />
              </div>
              <div className="text-3xl sm:text-4xl font-serif font-black text-stone-900">
                {formatSeconds(summary.avgTimeOnSiteSeconds)}
              </div>
              <span className="text-[11px] font-mono text-stone-500 font-bold block">
                Active Session Dwell Duration
              </span>
            </div>

            {/* Card 4: Top Content Case Study */}
            <div className="p-6 bg-white rounded-3xl border-2 border-stone-200 shadow-sm space-y-2">
              <div className="flex items-center justify-between text-stone-500 font-mono text-xs font-bold">
                <span>MOST POPULAR CASE STUDY</span>
                <Brain size={18} className="text-purple-600" />
              </div>
              <div className="text-lg font-serif font-black text-stone-900 truncate">
                {summary.topPages[0]?.label || 'Flint Lead Audit'}
              </div>
              <span className="text-[11px] font-mono text-amber-600 font-bold block">
                Highest Reader Engagement
              </span>
            </div>

          </div>

          {/* POPULAR CONTENT & REFERRERS BREAKDOWN */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: Popular Pages & Case Studies */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="text-amber-600" size={20} />
                  <h3 className="text-lg font-serif font-black text-stone-900">
                    Most Popular Content & Deep Links
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-500 font-bold">Views Count</span>
              </div>

              <div className="space-y-4">
                {summary.topPages.slice(0, 8).map((page, idx) => {
                  const maxCount = summary.topPages[0]?.count || 1;
                  const pct = Math.round((page.count / maxCount) * 100);

                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-stone-800 flex items-center gap-2">
                          <span className="w-5 h-5 bg-stone-100 text-stone-700 rounded-full flex items-center justify-center text-[10px] font-black">
                            {idx + 1}
                          </span>
                          <span className="truncate max-w-xs sm:max-w-md">{page.label}</span>
                        </span>
                        <span className="font-black text-stone-900 bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200">
                          {page.count} views
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-stone-100 h-2.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-amber-400 h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(pct, 12)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Traffic Sources & Inbound Dispatches */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                <div className="flex items-center gap-2">
                  <Share2 className="text-emerald-600" size={20} />
                  <h3 className="text-lg font-serif font-black text-stone-900">
                    Inbound Traffic Channels & Referrers
                  </h3>
                </div>
                <span className="text-xs font-mono text-stone-500 font-bold">Source</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {summary.topReferrers.map((ref, idx) => (
                  <div key={idx} className="p-3 bg-stone-50 rounded-2xl border border-stone-200 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="font-bold text-stone-900 block">{ref.source}</span>
                      <span className="text-[10px] text-stone-500">Email Dispatches, Social Media, Direct URL</span>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 font-black rounded-lg">
                      {ref.count} clicks
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold text-amber-900 flex items-center gap-1.5">
                  <Zap size={14} /> Global Dispatches Recommendation
                </span>
                <p className="text-xs font-sans text-amber-950 leading-relaxed">
                  When emailing global experts or posting on social media, use structured UTM parameters in your links (e.g., <code className="font-mono text-amber-900 bg-amber-200/60 px-1 rounded">?tab=flint&utm_source=email_dispatch</code>) to automatically segment referral impact!
                </p>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* SUB-VIEW 2: EXTERNAL SETUP GUIDE (GA4 & CLOUDFLARE) */}
      {activeSubTab === 'setup_guide' && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border-2 border-stone-200 shadow-sm space-y-8">
          
          <div className="border-b border-stone-200 pb-4 space-y-1">
            <h2 className="text-2xl font-serif font-black text-stone-900 flex items-center gap-2">
              <Globe className="text-blue-600" size={24} />
              <span>Available Analytics Options for ICEarth.org</span>
            </h2>
            <p className="text-xs font-mono text-stone-500">
              Detailed breakdown of available web analytics, unique visitor tracking, and implementation steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Option 1: Built-In In-App Analytics */}
            <div className="p-6 bg-stone-950 text-white rounded-2xl border-2 border-amber-500/60 space-y-4 shadow-md">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <span className="px-2.5 py-1 bg-amber-500 text-stone-950 font-mono text-xs font-black rounded-md">
                  ACTIVE NOW
                </span>
                <span className="text-xs font-mono text-amber-400">Option 1</span>
              </div>

              <h3 className="text-lg font-serif font-black text-stone-100">
                ICEarth Sovereign Telemetry
              </h3>

              <p className="text-xs font-sans text-stone-300 leading-relaxed">
                Integrated directly into the codebase. Operates right now out of the box with zero third-party cookies or external logins required.
              </p>

              <ul className="text-xs font-mono space-y-1.5 text-stone-300">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Unique visitor session tokens</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Tab/case-study view counts</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-amber-400 shrink-0" />
                  <span>Dwell time & time on site</span>
                </li>
              </ul>
            </div>

            {/* Option 2: Google Analytics 4 (GA4) */}
            <div className="p-6 bg-stone-50 text-stone-900 rounded-2xl border-2 border-stone-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="px-2.5 py-1 bg-blue-100 text-blue-900 font-mono text-xs font-bold rounded-md">
                  FREE GOOGLE TOOL
                </span>
                <span className="text-xs font-mono text-stone-500">Option 2</span>
              </div>

              <h3 className="text-lg font-serif font-black text-stone-900">
                Google Analytics 4 (GA4)
              </h3>

              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                Provides comprehensive global demographics, country origins, real-time user maps, and acquisition funnel analysis.
              </p>

              <ul className="text-xs font-mono space-y-1.5 text-stone-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                  <span>Country & city geographic maps</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                  <span>Real-time active user count</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-blue-600 shrink-0" />
                  <span>Search engine keyword sources</span>
                </li>
              </ul>
            </div>

            {/* Option 3: Cloudflare Edge Web Analytics */}
            <div className="p-6 bg-stone-50 text-stone-900 rounded-2xl border-2 border-stone-200 space-y-4 shadow-sm">
              <div className="flex items-center justify-between border-b border-stone-200 pb-3">
                <span className="px-2.5 py-1 bg-emerald-100 text-emerald-900 font-mono text-xs font-bold rounded-md">
                  DNS EDGE LEVEL
                </span>
                <span className="text-xs font-mono text-stone-500">Option 3</span>
              </div>

              <h3 className="text-lg font-serif font-black text-stone-900">
                Cloudflare Web Analytics
              </h3>

              <p className="text-xs font-sans text-stone-600 leading-relaxed">
                If <code className="font-mono text-stone-900">ICEarth.org</code> DNS is proxied through Cloudflare, edge analytics track all requests at the server level without tracking cookies.
              </p>

              <ul className="text-xs font-mono space-y-1.5 text-stone-700">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Total DNS requests & bandwidth</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Bot traffic filtering</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                  <span>Zero client script overhead</span>
                </li>
              </ul>
            </div>

          </div>

          {/* HOW TO ADD GOOGLE ANALYTICS 4 STEP BY STEP */}
          <div className="p-6 bg-stone-900 text-white rounded-2xl border border-stone-800 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="text-base font-serif font-bold text-amber-300 flex items-center gap-2">
                <ExternalLink size={18} />
                <span>How to Enable Google Analytics 4 on ICEarth.org</span>
              </h3>
              <button
                onClick={handleCopyGaSnippet}
                className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 font-mono text-xs font-bold rounded-lg border border-stone-700 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                {copiedScript ? <CheckCircle2 size={13} className="text-emerald-400" /> : <Copy size={13} />}
                <span>{copiedScript ? 'Snippet Copied!' : 'Copy GA4 Tag Snippet'}</span>
              </button>
            </div>

            <ol className="space-y-3 font-sans text-xs text-stone-300 list-decimal list-inside">
              <li>
                Go to <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">analytics.google.com</a> and sign in with your Google account.
              </li>
              <li>
                Create a new property named <strong>ICEarth.org</strong> and choose "Web Stream".
              </li>
              <li>
                Enter website URL: <code className="font-mono bg-stone-950 px-1.5 py-0.5 rounded text-amber-300">https://icearth.org</code>
              </li>
              <li>
                Copy your <strong>Measurement ID</strong> (looks like <code className="font-mono bg-stone-950 px-1.5 py-0.5 rounded text-emerald-300">G-XXXXXXXXXX</code>).
              </li>
              <li>
                Set the environment variable <code className="font-mono text-amber-300">VITE_GA_MEASUREMENT_ID="G-XXXXXXXXXX"</code> in project settings or inform your AI developer to inject it!
              </li>
            </ol>
          </div>

        </div>
      )}

      {/* SUB-VIEW 3: REAL-TIME VISITOR LOG STREAM */}
      {activeSubTab === 'recent_stream' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <h3 className="text-lg font-serif font-black text-stone-900 flex items-center gap-2">
                <Activity className="text-emerald-600" size={20} />
                <span>Real-Time Visitor Log & Event Stream</span>
              </h3>
              <p className="text-xs font-mono text-stone-500">
                Inspection log of raw visitor page views, time zones, screen dimensions, and deep link targets
              </p>
            </div>
            <span className="px-3 py-1 bg-stone-100 text-stone-700 font-mono text-xs font-bold rounded-lg">
              Last {summary.recentEvents.length} Events
            </span>
          </div>

          <div className="space-y-2 font-mono text-xs overflow-x-auto">
            {summary.recentEvents.map((evt) => (
              <div key={evt.id} className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-900 font-bold rounded text-[10px]">
                    {evt.tabId.toUpperCase()}
                  </span>
                  <span className="font-bold text-stone-800">
                    {new Date(evt.timestamp).toLocaleTimeString()}
                  </span>
                  <span className="text-stone-500 text-[11px] truncate max-w-xs">
                    {evt.referrer}
                  </span>
                </div>

                <div className="flex items-center gap-3 text-stone-500 text-[11px]">
                  <span>TZ: {evt.timeZone}</span>
                  <span>Res: {evt.screenRes}</span>
                  <span className="text-stone-400 text-[10px]">ID: {evt.id}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
