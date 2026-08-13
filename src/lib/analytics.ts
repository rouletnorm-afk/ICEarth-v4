// ICEarth Sovereign Analytics & Telemetry Engine
// Privacy-First, Real-Time Visitor Metrics & Data Provenance Tracker

export interface PageViewEvent {
  id: string;
  tabId: string;
  timestamp: number;
  durationSeconds: number;
  referrer: string;
  userAgent: string;
  screenRes: string;
  timeZone: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface VisitorSession {
  sessionId: string;
  firstSeen: number;
  lastActive: number;
  pageViews: number;
  totalTimeSeconds: number;
  tabHistory: string[];
}

export interface AnalyticsSummary {
  totalViews: number;
  uniqueVisitors: number;
  totalSessions: number;
  avgTimeOnSiteSeconds: number;
  topPages: { tabId: string; count: number; label: string }[];
  topReferrers: { source: string; count: number }[];
  recentEvents: PageViewEvent[];
}

const STORAGE_KEY_EVENTS = 'icearth_analytics_events_v1';
const STORAGE_KEY_SESSION = 'icearth_analytics_session_v1';
const STORAGE_KEY_VISITORS = 'icearth_analytics_visitors_v1';

// Tab Labels Lookup
const TAB_LABELS: Record<string, string> = {
  norm_roulet_home: '🏠 ICEarth Launch Home Page',
  ai_testimonial: '🤖 AI Testimonial & Cognition (AI as New Pb)',
  flint: '☣️ Flint Lead Audit & Roulet’s Law Scatterplots',
  cleveland: '🏛️ Cleveland Lead Audit & Sherwin-Williams',
  sovereign_portal: '🪶 Sovereign Member Portal',
  ucanx: '🌱 UCANX Commodities Exchange',
  profiler: '🛡️ Sovereign Exposure Profiler',
  manuscript: '📜 Exposenomics Manuscript',
  swiss_school: '🇨🇭 Swiss School of Exposenomics',
  toledo: '🌊 Toledo Lake Erie Toxic Algae Audit',
  chicago: '🏙️ Chicago Lead Water Audit',
  buffalo: '🦬 Buffalo Environmental Audit',
  milwaukee: '🍺 Milwaukee Water Audit',
  bihar: '🇮🇳 Bihar India Lead Audit',
  litigation: '⚖️ Sovereign Litigation Vault',
  proofs: '🔬 Subatomic Lead-Crime Proofs',
  terrorism_proofs: '☢️ Environmental Terrorism Proofs',
  genocost: '💰 GenoCost Macroeconomic Losses',
};

// Get or initialize visitor session
export function getOrCreateSession(): VisitorSession {
  try {
    let sessionRaw = localStorage.getItem(STORAGE_KEY_SESSION);
    const now = Date.now();

    if (sessionRaw) {
      const session: VisitorSession = JSON.parse(sessionRaw);
      // Session expires after 30 mins of inactivity
      if (now - session.lastActive < 30 * 60 * 1000) {
        session.lastActive = now;
        localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
        return session;
      }
    }

    // Create new session
    const newSession: VisitorSession = {
      sessionId: 'SES-' + Math.random().toString(36).substring(2, 11).toUpperCase() + '-' + Date.now().toString(36),
      firstSeen: now,
      lastActive: now,
      pageViews: 0,
      totalTimeSeconds: 0,
      tabHistory: []
    };

    // Track unique visitor ID in separate persistent key
    let visitorList: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY_VISITORS) || '[]');
    if (!visitorList.includes(newSession.sessionId)) {
      visitorList.push(newSession.sessionId);
      localStorage.setItem(STORAGE_KEY_VISITORS, JSON.stringify(visitorList));
    }

    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(newSession));
    return newSession;
  } catch (err) {
    console.warn('[ICEarth Analytics] LocalStorage error:', err);
    return {
      sessionId: 'SES-FALLBACK-' + Date.now(),
      firstSeen: Date.now(),
      lastActive: Date.now(),
      pageViews: 1,
      totalTimeSeconds: 0,
      tabHistory: []
    };
  }
}

// Track a Page / Tab View
export function recordPageView(tabId: string): void {
  try {
    const session = getOrCreateSession();
    const now = Date.now();

    // Parse URL params for UTM tracking & Referrer
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get('utm_source') || undefined;
    const utmMedium = params.get('utm_medium') || undefined;
    const utmCampaign = params.get('utm_campaign') || undefined;

    let referrer = document.referrer ? new URL(document.referrer).hostname : 'Direct / Social / Email Link';
    if (!referrer || referrer === window.location.hostname) {
      referrer = utmSource ? `Campaign: ${utmSource}` : 'Direct / Share Link';
    }

    const event: PageViewEvent = {
      id: 'EVT-' + Math.random().toString(36).substring(2, 9),
      tabId,
      timestamp: now,
      durationSeconds: 0,
      referrer,
      userAgent: navigator.userAgent,
      screenRes: `${window.innerWidth}x${window.innerHeight}`,
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
      utmSource,
      utmMedium,
      utmCampaign
    };

    // Update session
    session.pageViews += 1;
    session.lastActive = now;
    if (!session.tabHistory.includes(tabId)) {
      session.tabHistory.push(tabId);
    }
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));

    // Load existing events (keep last 500 max)
    let events: PageViewEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY_EVENTS) || '[]');
    events.unshift(event);
    if (events.length > 500) {
      events = events.slice(0, 500);
    }
    localStorage.setItem(STORAGE_KEY_EVENTS, JSON.stringify(events));

    // Optional Google Analytics 4 (GA4) dispatch if initialized
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: TAB_LABELS[tabId] || tabId,
        page_location: window.location.href,
        page_path: `/?tab=${tabId}`
      });
    }
  } catch (err) {
    console.warn('[ICEarth Analytics] Record event error:', err);
  }
}

// Update Active Time on Page
export function updateSessionDuration(secondsAdded: number): void {
  try {
    const session = getOrCreateSession();
    session.totalTimeSeconds += secondsAdded;
    session.lastActive = Date.now();
    localStorage.setItem(STORAGE_KEY_SESSION, JSON.stringify(session));
  } catch (err) {
    // Ignore non-critical heartbeat error
  }
}

// Get Aggregate Analytics Summary
export function getAnalyticsSummary(): AnalyticsSummary {
  try {
    const events: PageViewEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEY_EVENTS) || '[]');
    const visitorList: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY_VISITORS) || '[]');
    const currentSession = getOrCreateSession();

    // Page counts
    const pageCounts: Record<string, number> = {};
    const referrerCounts: Record<string, number> = {};

    events.forEach(evt => {
      pageCounts[evt.tabId] = (pageCounts[evt.tabId] || 0) + 1;
      referrerCounts[evt.referrer] = (referrerCounts[evt.referrer] || 0) + 1;
    });

    const topPages = Object.entries(pageCounts)
      .map(([tabId, count]) => ({
        tabId,
        count,
        label: TAB_LABELS[tabId] || `Tab: ${tabId}`
      }))
      .sort((a, b) => b.count - a.count);

    const topReferrers = Object.entries(referrerCounts)
      .map(([source, count]) => ({ source, count }))
      .sort((a, b) => b.count - a.count);

    return {
      totalViews: Math.max(events.length, currentSession.pageViews),
      uniqueVisitors: Math.max(visitorList.length, 1),
      totalSessions: Math.max(visitorList.length, 1),
      avgTimeOnSiteSeconds: currentSession.totalTimeSeconds || 180,
      topPages,
      topReferrers,
      recentEvents: events.slice(0, 25)
    };
  } catch (err) {
    return {
      totalViews: 1,
      uniqueVisitors: 1,
      totalSessions: 1,
      avgTimeOnSiteSeconds: 120,
      topPages: [{ tabId: 'flint', count: 1, label: 'Flint Lead Audit' }],
      topReferrers: [{ source: 'Direct / Social Link', count: 1 }],
      recentEvents: []
    };
  }
}

// Clear local analytics cache
export function resetAnalyticsData(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_EVENTS);
    localStorage.removeItem(STORAGE_KEY_SESSION);
    localStorage.removeItem(STORAGE_KEY_VISITORS);
  } catch (err) {
    console.warn('Failed to reset analytics:', err);
  }
}

// Initialize Google Analytics Script dynamically if GA4 ID is present
export function initGoogleAnalytics(gaMeasurementId?: string): void {
  const measurementId = gaMeasurementId || import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!measurementId || typeof window === 'undefined') return;

  if (document.getElementById('ga-script')) return; // Already initialized

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) {
    (window as any).dataLayer.push(args);
  }
  (window as any).gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, { send_page_view: false });
}
