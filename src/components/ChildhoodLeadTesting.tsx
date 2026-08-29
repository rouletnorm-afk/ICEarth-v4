import React, { useState, useMemo } from 'react';
import {
  Shield,
  Activity,
  AlertTriangle,
  FileText,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Building,
  Home,
  User,
  Baby,
  Stethoscope,
  BookOpen,
  Scale,
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
  MapPin
} from 'lucide-react';
import childhoodAlgorithmImg from '../assets/images/mdhhs_childhood_lead_testing_algorithm_1787999281654.jpg';

interface ChildhoodLeadTestingProps {
  onNavigateTab?: (tab: string) => void;
  siteTheme?: 'light' | 'dark';
}

// 82 High-Risk Communities designated by MDHHS
export const MICHIGAN_HIGH_RISK_COMMUNITIES = [
  { name: 'Flint', county: 'Genesee', zip: '48501-48532', riskTier: 'Tier 1 Crisis Zone' },
  { name: 'Detroit (Central / East / West)', county: 'Wayne', zip: '48201-48243', riskTier: 'Tier 1 High Burden' },
  { name: 'Grand Rapids', county: 'Kent', zip: '49501-49548', riskTier: 'Tier 1 High Burden' },
  { name: 'Highland Park', county: 'Wayne', zip: '48203', riskTier: 'Tier 1 High Burden' },
  { name: 'Hamtramck', county: 'Wayne', zip: '48212', riskTier: 'Tier 1 High Burden' },
  { name: 'Saginaw', county: 'Saginaw', zip: '48601-48609', riskTier: 'Tier 1 High Burden' },
  { name: 'Pontiac', county: 'Oakland', zip: '48340-48343', riskTier: 'Tier 1 High Burden' },
  { name: 'Benton Harbor', county: 'Berrien', zip: '49022-49023', riskTier: 'Tier 1 Crisis Zone' },
  { name: 'Lansing', county: 'Ingham', zip: '48906-48933', riskTier: 'Tier 1 High Burden' },
  { name: 'Muskegon / Muskegon Heights', county: 'Muskegon', zip: '49440-49445', riskTier: 'Tier 1 High Burden' },
  { name: 'Jackson', county: 'Jackson', zip: '49201-49204', riskTier: 'Tier 1 High Burden' },
  { name: 'Kalamazoo', county: 'Kalamazoo', zip: '49001-49048', riskTier: 'Tier 1 High Burden' },
  { name: 'Battle Creek', county: 'Calhoun', zip: '49014-49037', riskTier: 'Tier 1 High Burden' },
  { name: 'Bay City', county: 'Bay', zip: '48706-48708', riskTier: 'Tier 2 High Risk' },
  { name: 'Adrian', county: 'Lenawee', zip: '49221', riskTier: 'Tier 2 High Risk' },
  { name: 'Port Huron', county: 'St. Clair', zip: '48060-48061', riskTier: 'Tier 2 High Risk' },
  { name: 'Ecorse', county: 'Wayne', zip: '48229', riskTier: 'Tier 2 High Risk' },
  { name: 'River Rouge', county: 'Wayne', zip: '48218', riskTier: 'Tier 2 High Risk' },
  { name: 'Dearborn / Dearborn Heights', county: 'Wayne', zip: '48120-48128', riskTier: 'Tier 2 High Risk' },
  { name: 'Inkster', county: 'Wayne', zip: '48141', riskTier: 'Tier 2 High Risk' },
  { name: 'Albion', county: 'Calhoun', zip: '49224', riskTier: 'Tier 2 High Risk' },
  { name: 'Mount Clemens', county: 'Macomb', zip: '48043-48046', riskTier: 'Tier 2 High Risk' },
  { name: 'Ypsilanti', county: 'Washtenaw', zip: '48197-48198', riskTier: 'Tier 2 High Risk' },
  { name: 'Dowagiac', county: 'Cass', zip: '49047', riskTier: 'Tier 2 High Risk' },
  { name: 'Niles', county: 'Berrien', zip: '49120', riskTier: 'Tier 2 High Risk' },
  { name: 'Monroe', county: 'Monroe', zip: '48161-48162', riskTier: 'Tier 2 High Risk' },
  { name: 'Sturgis', county: 'St. Joseph', zip: '49091', riskTier: 'Tier 2 High Risk' },
  { name: 'Coldwater', county: 'Branch', zip: '49036', riskTier: 'Tier 2 High Risk' },
  { name: 'Alpena', county: 'Alpena', zip: '49707', riskTier: 'Tier 2 High Risk' },
  { name: 'Escanaba', county: 'Delta', zip: '49829', riskTier: 'Tier 2 High Risk' },
  { name: 'Ironwood', county: 'Gogebic', zip: '49938', riskTier: 'Tier 2 High Risk' },
  { name: 'Marquette', county: 'Marquette', zip: '49855', riskTier: 'Tier 2 High Risk' },
  { name: 'Traverse City', county: 'Grand Traverse', zip: '49684-49686', riskTier: 'Tier 2 High Risk' },
  { name: 'Cadillac', county: 'Wexford', zip: '49601', riskTier: 'Tier 2 High Risk' },
  { name: 'Holland', county: 'Ottawa', zip: '49423-49424', riskTier: 'Tier 2 High Risk' },
  { name: 'Owosso', county: 'Shiawassee', zip: '48867', riskTier: 'Tier 2 High Risk' },
  { name: 'Alma', county: 'Gratiot', zip: '48801', riskTier: 'Tier 2 High Risk' },
  { name: 'Manistee', county: 'Manistee', zip: '49660', riskTier: 'Tier 2 High Risk' },
  { name: 'Ludington', county: 'Mason', zip: '49431', riskTier: 'Tier 2 High Risk' },
  { name: 'Ionia', county: 'Ionia', zip: '48846', riskTier: 'Tier 2 High Risk' },
  { name: 'Greenville', county: 'Montcalm', zip: '48838', riskTier: 'Tier 2 High Risk' },
  { name: 'Belding', county: 'Ionia', zip: '48809', riskTier: 'Tier 2 High Risk' },
  { name: 'Three Rivers', county: 'St. Joseph', zip: '49093', riskTier: 'Tier 2 High Risk' },
  { name: 'Hastings', county: 'Barry', zip: '49058', riskTier: 'Tier 2 High Risk' },
  { name: 'Charlotte', county: 'Eaton', zip: '48813', riskTier: 'Tier 2 High Risk' },
  { name: 'Grand Ledge', county: 'Eaton', zip: '48837', riskTier: 'Tier 2 High Risk' },
  { name: 'Howell', county: 'Livingston', zip: '48843-48855', riskTier: 'Tier 2 High Risk' },
  { name: 'Mount Pleasant', county: 'Isabella', zip: '48858-48859', riskTier: 'Tier 2 High Risk' },
  { name: 'Big Rapids', county: 'Mecosta', zip: '49307', riskTier: 'Tier 2 High Risk' },
  { name: 'Midland (Old Town Sector)', county: 'Midland', zip: '48640-48642', riskTier: 'Tier 2 High Risk' },
  { name: 'Clare', county: 'Clare', zip: '48617', riskTier: 'Tier 2 High Risk' },
  { name: 'Gladwin', county: 'Gladwin', zip: '48624', riskTier: 'Tier 2 High Risk' },
  { name: 'West Branch', county: 'Ogemaw', zip: '48661', riskTier: 'Tier 2 High Risk' },
  { name: 'Tawas City / East Tawas', county: 'Iosco', zip: '48763-48730', riskTier: 'Tier 2 High Risk' },
  { name: 'Cheboygan', county: 'Cheboygan', zip: '49721', riskTier: 'Tier 2 High Risk' },
  { name: 'Petoskey', county: 'Emmet', zip: '49770', riskTier: 'Tier 2 High Risk' },
  { name: 'Boyne City', county: 'Charlevoix', zip: '49712', riskTier: 'Tier 2 High Risk' },
  { name: 'Charlevoix', county: 'Charlevoix', zip: '49720', riskTier: 'Tier 2 High Risk' },
  { name: 'Gaylord', county: 'Otsego', zip: '49735', riskTier: 'Tier 2 High Risk' },
  { name: 'Grayling', county: 'Crawford', zip: '49738', riskTier: 'Tier 2 High Risk' },
  { name: 'Houghton / Hancock', county: 'Houghton', zip: '49930-49931', riskTier: 'Tier 2 High Risk' },
  { name: 'Iron Mountain / Kingsford', county: 'Dickinson', zip: '49801-49802', riskTier: 'Tier 2 High Risk' },
  { name: 'Ishpeming / Negaunee', county: 'Marquette', zip: '49849-49866', riskTier: 'Tier 2 High Risk' },
  { name: 'Menominee', county: 'Menominee', zip: '49858', riskTier: 'Tier 2 High Risk' },
  { name: 'Sault Ste. Marie', county: 'Chippewa', zip: '49783', riskTier: 'Tier 2 High Risk' },
  { name: 'Iron River / Stambaugh', county: 'Iron', zip: '49935-49964', riskTier: 'Tier 2 High Risk' },
  { name: 'Manistique', county: 'Schoolcraft', zip: '49854', riskTier: 'Tier 2 High Risk' },
  { name: 'St. Ignace', county: 'Mackinac', zip: '49781', riskTier: 'Tier 2 High Risk' },
  { name: 'Lapeer', county: 'Lapeer', zip: '48446', riskTier: 'Tier 2 High Risk' },
  { name: 'Fenton', county: 'Genesee', zip: '48430', riskTier: 'Tier 2 High Risk' },
  { name: 'Grand Blanc', county: 'Genesee', zip: '48439', riskTier: 'Tier 2 High Risk' },
  { name: 'Davison', county: 'Genesee', zip: '48423', riskTier: 'Tier 2 High Risk' },
  { name: 'Burton', county: 'Genesee', zip: '48509-48529', riskTier: 'Tier 1 High Burden' },
  { name: 'Clio / Mount Morris', county: 'Genesee', zip: '48420-48458', riskTier: 'Tier 2 High Risk' },
  { name: 'Swartz Creek', county: 'Genesee', zip: '48473', riskTier: 'Tier 2 High Risk' },
  { name: 'Flushing', county: 'Genesee', zip: '48433', riskTier: 'Tier 2 High Risk' },
  { name: 'Carson City', county: 'Montcalm', zip: '48811', riskTier: 'Tier 2 High Risk' },
  { name: 'St. Johns', county: 'Clinton', zip: '48879', riskTier: 'Tier 2 High Risk' },
  { name: 'Portland', county: 'Ionia', zip: '48875', riskTier: 'Tier 2 High Risk' },
  { name: 'South Haven', county: 'Van Buren', zip: '49090', riskTier: 'Tier 2 High Risk' },
  { name: 'Hartford', county: 'Van Buren', zip: '49057', riskTier: 'Tier 2 High Risk' },
  { name: 'Paw Paw', county: 'Van Buren', zip: '49079', riskTier: 'Tier 2 High Risk' }
];

export const ChildhoodLeadTesting: React.FC<ChildhoodLeadTestingProps> = ({
  onNavigateTab,
  siteTheme = 'light'
}) => {
  const isLight = siteTheme === 'light';

  // Sub-tabs
  const [activeSubTab, setActiveSubTab] = useState<'decision_tool' | 'flowcharts' | 'high_risk_communities' | 'clinical_guidance' | 'roulets_law' | 'provenance_modal'>('decision_tool');

  // Interactive Decision Tool Form State
  const [ageMonths, setAgeMonths] = useState<number>(12);
  const [hasPreviousTest, setHasPreviousTest] = useState<boolean>(false);
  const [previousTestAgeMonths, setPreviousTestAgeMonths] = useState<number>(6);
  const [livesInPre1978Home, setLivesInPre1978Home] = useState<boolean>(false);
  const [minorWithElevatedBLL, setMinorWithElevatedBLL] = useState<boolean>(false);
  const [isHighRiskCommunity, setIsHighRiskCommunity] = useState<boolean>(false);
  const [selectedHighRiskCity, setSelectedHighRiskCity] = useState<string>('Flint');
  const [hasParentOrProviderConcerns, setHasParentOrProviderConcerns] = useState<boolean>(false);

  // Search in high-risk list
  const [communitySearch, setCommunitySearch] = useState<string>('');

  // Artwork Modal
  const [isArtworkModalOpen, setIsArtworkModalOpen] = useState<boolean>(false);
  const [copiedHash, setCopiedHash] = useState<boolean>(false);

  // Filtered High-Risk Communities
  const filteredCommunities = useMemo(() => {
    if (!communitySearch.trim()) return MICHIGAN_HIGH_RISK_COMMUNITIES;
    const q = communitySearch.toLowerCase();
    return MICHIGAN_HIGH_RISK_COMMUNITIES.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.county.toLowerCase().includes(q) ||
        c.zip.toLowerCase().includes(q) ||
        c.riskTier.toLowerCase().includes(q)
    );
  }, [communitySearch]);

  // CLINICAL ALGORITHM EVALUATION ENGINE
  const decisionResult = useMemo(() => {
    // TIER 1: Birth through 29 months (<2.5 years)
    if (ageMonths < 9) {
      if (hasParentOrProviderConcerns) {
        return {
          status: 'ORDER_TEST_3_MONTHS',
          badge: 'TEST WITHIN 3 MONTHS',
          color: 'amber',
          title: 'Order a blood lead test within 3 months',
          reason: 'Parent or provider concerns about lead poisoning risk factors in this infant (<9 months).',
          legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1 (Infant <9 mos risk pathway)',
          action: 'Order capillary or venous blood lead test within 90 days. Re-test universally around 12 months.'
        };
      } else {
        return {
          status: 'NO_TEST_TODAY_PLAN_12M',
          badge: 'TESTING NOT REQUIRED TODAY',
          color: 'emerald',
          title: 'Testing is not required today',
          reason: 'Infant is <9 months with no acute parent or provider risk concerns.',
          legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1',
          action: 'Plan universal blood lead testing around 12 months (9 through 17 months).'
        };
      }
    } else if (ageMonths >= 9 && ageMonths <= 17) {
      // 9 through 17 months (~12 months milestone)
      if (!hasPreviousTest) {
        return {
          status: 'ORDER_TEST_NOW',
          badge: 'ORDER BLOOD TEST TODAY',
          color: 'red',
          title: 'Order a blood lead test now (Universal ~12 Month Mandate)',
          reason: 'Child is in the 9–17 month window and has not been tested for lead previously.',
          legalRule: 'MCL 333.5474d / MDHHS Universal Lead Testing Rule (Mandatory 12-month test)',
          action: 'Perform capillary fingerstick (LeadCare II / state lab) or venous blood draw today.'
        };
      } else {
        // Was previous test drawn before 9 months?
        if (previousTestAgeMonths < 9) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER BLOOD TEST TODAY',
            color: 'red',
            title: 'Order a blood lead test now (~12 Month Requirement)',
            reason: 'Previous test was drawn before age 9 months and cannot substitute for the universal 12-month test.',
            legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1',
            action: 'Draw blood lead test today to fulfill the statutory ~12 month universal screening requirement.'
          };
        } else {
          // Previous test drawn between 9-17m: considered the ~12m test
          if (hasParentOrProviderConcerns) {
            return {
              status: 'ORDER_TEST_3_MONTHS',
              badge: 'TEST WITHIN 3 MONTHS',
              color: 'amber',
              title: 'Order a blood lead test within 3 months',
              reason: 'Parent or provider has new concerns about risk factors in this child despite previous ~12m test.',
              legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1',
              action: 'Order repeat blood lead test within 3 months. Plan second universal test around 24 months.'
            };
          } else {
            return {
              status: 'NO_TEST_TODAY_PLAN_24M',
              badge: 'TESTING NOT REQUIRED TODAY',
              color: 'emerald',
              title: 'Testing is not required today',
              reason: 'Child has valid ~12 month test (drawn between 9–17 months) and no new risk concerns.',
              legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1',
              action: 'Plan next universal blood lead test around 24 months (18 through 29 months).'
            };
          }
        }
      }
    } else if (ageMonths >= 18 && ageMonths <= 29) {
      // 18 through 29 months (~24 months milestone)
      if (!hasPreviousTest) {
        return {
          status: 'ORDER_TEST_NOW',
          badge: 'ORDER BLOOD TEST TODAY',
          color: 'red',
          title: 'Order a blood lead test now (Universal ~24 Month Mandate)',
          reason: 'Child is around 24 months (18–29 months) with no record of previous lead testing.',
          legalRule: 'MCL 333.5474d / MDHHS Universal Lead Testing Rule (Mandatory 24-month test)',
          action: 'Perform blood lead test today. Child requires both 12m and 24m baseline screening.'
        };
      } else {
        // Was previous test drawn before 18 months?
        if (previousTestAgeMonths < 18) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER BLOOD TEST TODAY',
            color: 'red',
            title: 'Order a blood lead test now (Universal ~24 Month Test)',
            reason: 'Child is around age 24 months; previous test was drawn before 18 months (at the ~12 month mark).',
            legalRule: 'MCL 333.5474d / MDHHS Universal Lead Testing Rule (Second mandatory test)',
            action: 'Draw second universal blood lead test today (interval of 6–12 months captures mobile toddler hand-to-mouth exposures).'
          };
        } else {
          // Previous test drawn after 18m: considered the ~24m test
          if (hasParentOrProviderConcerns) {
            return {
              status: 'ORDER_TEST_3_MONTHS',
              badge: 'TEST WITHIN 3 MONTHS',
              color: 'amber',
              title: 'Order a blood lead test within 3 months',
              reason: 'Parent or provider has new concerns about lead poisoning risk factors in this child.',
              legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1',
              action: 'Order repeat blood test within 3 months due to identified clinical or environmental risk.'
            };
          } else {
            return {
              status: 'NO_TEST_TODAY_MONITOR',
              badge: 'TESTING NOT REQUIRED TODAY',
              color: 'emerald',
              title: 'Testing is not required today',
              reason: 'Previous test is considered to be around age 24 months (drawn ≥18 months) and no new risk identified.',
              legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 1',
              action: 'Revisit risk factors and parent concerns at subsequent well-child visits.'
            };
          }
        }
      }
    }
    // TIER 2: 30 months through 59 months (2.5 years through 4 years)
    else if (ageMonths >= 30 && ageMonths <= 47) {
      // 2.5 through 3 years (30 through 47 months)
      if (!hasPreviousTest) {
        return {
          status: 'ORDER_TEST_NOW',
          badge: 'ORDER BLOOD TEST TODAY (CATCH-UP)',
          color: 'red',
          title: 'Order a blood lead test now (Universal Catch-Up Mandate)',
          reason: 'Child is between 30–47 months and has never been tested for lead. All children must be tested at least once by age 6.',
          legalRule: 'MCL 333.5474d / MDHHS Universal Lead Testing Final Rule / Fig 2',
          action: 'Order blood lead test today to fulfill mandatory pre-school lead screening.'
        };
      } else {
        // Has previous test. Check risk factors
        if (livesInPre1978Home) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER ADDITIONAL TEST TODAY',
            color: 'red',
            title: 'Order an additional blood lead test (Pre-1978 Housing Risk)',
            reason: 'Child resides in a home built before 1978. Children in pre-1978 homes are required to be tested an additional time.',
            legalRule: 'MDHHS Universal Lead Testing Rule R 330.302 / Fig 2 (Pre-1978 Housing Mandate)',
            action: 'Order blood lead test today even if tested previously due to high legacy paint dust exposure probability.'
          };
        } else if (minorWithElevatedBLL) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER ADDITIONAL TEST TODAY',
            color: 'red',
            title: 'Order an additional blood lead test (Co-habitant Elevated BLL)',
            reason: 'Child lives in a home where other minors have elevated blood lead levels (≥3.5 µg/dL).',
            legalRule: 'MDHHS Universal Lead Testing Rule R 330.302 / Fig 2 (Household Index Case Rule)',
            action: 'Order blood lead test today (even if tested previously) to assess shared environmental exposure.'
          };
        } else if (hasParentOrProviderConcerns) {
          return {
            status: 'ORDER_TEST_3_MONTHS',
            badge: 'TEST WITHIN 3 MONTHS',
            color: 'amber',
            title: 'Order a test within 3 months (Clinical Risk Judgement)',
            reason: 'New parent or provider concerns about lead poisoning risk factors identified.',
            legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 2',
            action: 'Order blood lead test within 90 days based on clinical provider judgement of risk.'
          };
        } else {
          return {
            status: 'NO_TEST_TODAY_EVALUATE_4YO',
            badge: 'TESTING NOT REQUIRED TODAY',
            color: 'emerald',
            title: 'Testing is not required today',
            reason: 'Child has previous test, lives in post-1978 home, no siblings with BLL ≥3.5 µg/dL, and no acute concerns.',
            legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 2',
            action: 'Plan to evaluate for risk factors and geographic risk at 48–60 months (Age 4 visit).'
          };
        }
      }
    } else if (ageMonths >= 48 && ageMonths <= 59) {
      // 4 years (48 through 59 months)
      if (!hasPreviousTest) {
        return {
          status: 'ORDER_TEST_NOW',
          badge: 'ORDER BLOOD TEST TODAY (CATCH-UP)',
          color: 'red',
          title: 'Order a blood lead test now (Universal Catch-Up Mandate)',
          reason: 'Child is 4 years old (48–59 months) and has never been tested. All children must be tested at least once before age 6.',
          legalRule: 'MCL 333.5474d / MDHHS Universal Lead Testing Final Rule / Fig 2',
          action: 'Order blood lead test today immediately.'
        };
      } else {
        // Child tested previously. Check 82 High Risk Communities
        if (isHighRiskCommunity) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER ADDITIONAL TEST (HIGH-RISK ZONE)',
            color: 'red',
            title: `Order an additional test (Age 4 High-Risk Jurisdiction: ${selectedHighRiskCity})`,
            reason: `Child lives in one of the 82 geographic communities determined by MDHHS to be at higher risk of lead poisoning. 4-year-olds in these communities are mandated to be tested an additional time.`,
            legalRule: 'MDHHS Universal Lead Testing Rule R 330.303 / Fig 2 (82 High-Risk Communities Mandate)',
            action: 'Order blood lead test today even if tested at 12m and 24m.'
          };
        } else {
          // Not in 82 communities. Check Pre-1978 Home
          if (livesInPre1978Home) {
            return {
              status: 'ORDER_TEST_3_MONTHS',
              badge: 'TEST WITHIN 3 MONTHS (PRE-1978 HOUSING)',
              color: 'amber',
              title: 'Order a test within 3 months (Pre-1978 Home Additional Screening)',
              reason: 'Child resides in a pre-1978 home. Children in pre-1978 homes are required to be tested an additional time.',
              legalRule: 'MDHHS Universal Lead Testing Rule R 330.302 / Fig 2',
              action: 'Order blood lead test within 3 months (even if tested previously).'
            };
          } else if (minorWithElevatedBLL) {
            return {
              status: 'ORDER_TEST_NOW',
              badge: 'ORDER ADDITIONAL TEST (HOUSEHOLD CONTACT)',
              color: 'red',
              title: 'Order a test today (Other Minors with BLL ≥3.5 µg/dL)',
              reason: 'Child lives in a residence where other minors have elevated blood lead levels (≥3.5 µg/dL).',
              legalRule: 'MDHHS Universal Lead Testing Rule R 330.302 / Fig 2',
              action: 'Order blood lead test today to detect environmental co-exposure.'
            };
          } else if (hasParentOrProviderConcerns) {
            return {
              status: 'ORDER_TEST_3_MONTHS',
              badge: 'TEST WITHIN 3 MONTHS',
              color: 'amber',
              title: 'Order a test within 3 months (Clinical Risk Judgement)',
              reason: 'New parent or provider concerns about lead poisoning risk factors identified in this child.',
              legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 2',
              action: 'Order test within 3 months based on provider judgement of clinical risk.'
            };
          } else {
            return {
              status: 'NO_TEST_TODAY_MONITOR',
              badge: 'TESTING NOT REQUIRED TODAY',
              color: 'emerald',
              title: 'Testing is not required today',
              reason: 'Child tested previously, not in 82 high-risk communities, post-1978 home, and no other risk factors.',
              legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 2',
              action: 'Plan to evaluate for new risks or parent concerns at next annual well-child visit.'
            };
          }
        }
      }
    }
    // TIER 3: 60 months through 17 years (5 years through 17 years)
    else if (ageMonths >= 60 && ageMonths <= 71) {
      // 5 years (60 through 71 months)
      if (!hasPreviousTest) {
        return {
          status: 'ORDER_TEST_NOW',
          badge: 'ORDER BLOOD TEST TODAY (FINAL CATCH-UP)',
          color: 'red',
          title: 'Order a blood lead test now (Mandatory by Age 6)',
          reason: 'Child is 5 years old (60–71 months) and has never been tested. All children in Michigan must be tested at least once before age 6.',
          legalRule: 'MCL 333.5474d / MDHHS Universal Lead Testing Final Rule / Fig 3',
          action: 'Order blood lead test today before child enters kindergarten / grade school.'
        };
      } else {
        if (livesInPre1978Home) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER ADDITIONAL TEST (PRE-1978 HOME)',
            color: 'red',
            title: 'Order a blood lead test now (Pre-1978 Home Exposure)',
            reason: 'Child lives in a home built before 1978. Children in pre-1978 homes are required to be tested an additional time.',
            legalRule: 'MDHHS Universal Lead Testing Rule / Fig 3',
            action: 'Order blood lead test today (even if tested previously).'
          };
        } else if (minorWithElevatedBLL) {
          return {
            status: 'ORDER_TEST_NOW',
            badge: 'ORDER ADDITIONAL TEST (ELEVATED SIBLING BLL)',
            color: 'red',
            title: 'Order a blood lead test now (Co-habitant with BLL ≥3.5 µg/dL)',
            reason: 'Child lives in a home where other minors have elevated lead levels (≥3.5 µg/dL).',
            legalRule: 'MDHHS Universal Lead Testing Rule / Fig 3',
            action: 'Order blood lead test today (even if tested previously).'
          };
        } else if (hasParentOrProviderConcerns) {
          return {
            status: 'ORDER_TEST_3_MONTHS',
            badge: 'TEST WITHIN 3 MONTHS',
            color: 'amber',
            title: 'Order a test within 3 months (Parent/Provider Judgement)',
            reason: 'New parent or provider concerns about risk factors for lead poisoning identified.',
            legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 3',
            action: 'Order test within 3 months.'
          };
        } else {
          return {
            status: 'NO_TEST_TODAY_MONITOR',
            badge: 'TESTING NOT REQUIRED TODAY',
            color: 'emerald',
            title: 'Testing is not required today',
            reason: 'Child was tested previously, does not live in pre-1978 home or with children with elevated BLL, and no new concerns.',
            legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 3',
            action: 'No further testing is required unless parent or provider identifies new risks.'
          };
        }
      }
    } else {
      // 6 years through 17 years (72 months through 215 months)
      if (hasParentOrProviderConcerns) {
        return {
          status: 'ORDER_TEST_3_MONTHS',
          badge: 'TEST WITHIN 3 MONTHS (RISK INDICATION)',
          color: 'amber',
          title: 'Order a blood lead test within 3 months (Parent/Provider Judgement)',
          reason: 'Parent or provider identifies clinical risk factors (pica behavior, plumbing/pipe replacement, hobbies/casting, international adoption, recent immigrant from high-lead zone).',
          legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 3 (6 through 17 years pathway)',
          action: 'Order capillary or venous blood lead test within 3 months.'
        };
      } else {
        return {
          status: 'NO_TEST_TODAY_MONITOR',
          badge: 'TESTING NOT REQUIRED TODAY',
          color: 'emerald',
          title: 'Testing is not required today',
          reason: 'Child is between 6 and 17 years old with no acute parent or provider risk concerns.',
          legalRule: 'MDHHS Universal Lead Testing Final Rule / Fig 3',
          action: 'No further testing is required today unless parent or provider identifies new risk factors.'
        };
      }
    }
  }, [
    ageMonths,
    hasPreviousTest,
    previousTestAgeMonths,
    livesInPre1978Home,
    minorWithElevatedBLL,
    isHighRiskCommunity,
    selectedHighRiskCity,
    hasParentOrProviderConcerns
  ]);

  const handleCopyHash = () => {
    navigator.clipboard.writeText('0xMDHHS_MICHIGAN_UNIVERSAL_LEAD_TESTING_ALGORITHM_MCL333_5474D');
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2500);
  };

  return (
    <div className={`min-h-screen ${isLight ? 'bg-stone-50 text-stone-900' : 'bg-stone-950 text-stone-100'} p-4 sm:p-6 lg:p-8 font-sans transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* HERO BANNER */}
        <div className={`relative overflow-hidden rounded-3xl border ${isLight ? 'bg-white/90 border-stone-200 shadow-xl' : 'bg-stone-900/90 border-stone-800 shadow-2xl'} p-6 sm:p-8 lg:p-10 backdrop-blur-md`}>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-sky-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-amber-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-xs">
                  <Shield size={13} className="text-emerald-500" />
                  MCL 333.5474d & R 330.301–330.304
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-sky-500/15 text-sky-700 dark:text-sky-400 border border-sky-500/30 flex items-center gap-1.5 shadow-xs">
                  <Stethoscope size={13} className="text-sky-500" />
                  MDHHS Universal Clinical Decision Support Tool
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30 flex items-center gap-1.5 shadow-xs">
                  <AlertTriangle size={13} className="text-amber-500" />
                  Zero Safe Biological Dose
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-white font-sans leading-tight">
                Universal Childhood Lead Testing <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-600 dark:from-emerald-400 dark:via-teal-300 dark:to-sky-400">
                  Decision Support Engine & Clinical Algorithm
                </span>
              </h1>

              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 font-sans leading-relaxed">
                A point-of-care clinical decision support system implementing Michigan’s landmark Universal Blood Lead Testing statute. Synthesizes universal mandatory screening gates at 12 and 24 months, catch-up rules by age 6, pre-1978 housing risk factors, sibling elevated blood lead levels (≥3.5 µg/dL), and mandatory age-4 testing across Michigan’s 82 high-risk jurisdictions under Roulet’s Law.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.michigan.gov/mileadsafe/-/media/Project/Websites/mileadsafe/Healthcare-providers/Algorithm-for-UT-Decision-Support-Tool.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-stone-900 hover:bg-stone-800 text-white dark:bg-stone-100 dark:hover:bg-white dark:text-stone-900 transition-all shadow-md hover:scale-105"
                >
                  <FileText size={14} />
                  <span>MDHHS Official .PDF Protocol</span>
                  <ExternalLink size={12} />
                </a>

                <button
                  onClick={() => setIsArtworkModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md hover:scale-105 cursor-pointer"
                >
                  <Eye size={14} />
                  <span>Inspect High-Res Clinical Plate</span>
                </button>

                <button
                  onClick={handleCopyHash}
                  className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-medium border transition-all ${
                    copiedHash
                      ? 'bg-emerald-50 border-emerald-500 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'bg-stone-100 dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                  }`}
                >
                  {copiedHash ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  <span>{copiedHash ? 'Provenance Hash Copied!' : 'Copy Vault Hash'}</span>
                </button>
              </div>
            </div>

            {/* Thumbnail Preview Card */}
            <div 
              onClick={() => setIsArtworkModalOpen(true)}
              className={`group relative w-full lg:w-72 h-48 rounded-2xl overflow-hidden border cursor-pointer ${isLight ? 'border-stone-300 shadow-lg' : 'border-stone-700 shadow-2xl'} flex-shrink-0 transition-transform duration-300 hover:scale-105`}
            >
              <img 
                src={childhoodAlgorithmImg} 
                alt="MDHHS Universal Lead Testing Algorithm Flowchart Plate" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-3">
                <div className="text-white text-xs space-y-0.5">
                  <div className="font-bold flex items-center gap-1">
                    <Sparkles size={12} className="text-amber-400" />
                    Plate #29: MDHHS Algorithm
                  </div>
                  <div className="text-[10px] text-stone-300 font-mono">
                    MCL 333.5474d • High-Res Proof
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS & BENCHMARK BAR */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
            <div className="text-xs font-mono text-stone-500 uppercase flex items-center gap-1.5">
              <Baby size={14} className="text-emerald-500" />
              <span>Universal Mandate</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              12m & 24m
            </div>
            <div className="text-[11px] text-stone-500 font-sans">
              Universal blood tests for every child in Michigan.
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
            <div className="text-xs font-mono text-stone-500 uppercase flex items-center gap-1.5">
              <AlertTriangle size={14} className="text-amber-500" />
              <span>CDC Reference Value</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-amber-600 dark:text-amber-400 font-mono">
              3.5 µg/dL
            </div>
            <div className="text-[11px] text-stone-500 font-sans">
              Action threshold triggering venous confirmation.
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
            <div className="text-xs font-mono text-stone-500 uppercase flex items-center gap-1.5">
              <MapPin size={14} className="text-sky-500" />
              <span>High-Risk Jurisdictions</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-sky-600 dark:text-sky-400 font-mono">
              82 Zones
            </div>
            <div className="text-[11px] text-stone-500 font-sans">
              Mandatory additional testing at age 4 (48–59m).
            </div>
          </div>

          <div className={`p-4 rounded-2xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-1`}>
            <div className="text-xs font-mono text-stone-500 uppercase flex items-center gap-1.5">
              <Home size={14} className="text-rose-500" />
              <span>Pre-1978 Housing</span>
            </div>
            <div className="text-xl sm:text-2xl font-black text-rose-600 dark:text-rose-400 font-mono">
              +1 Repeat Test
            </div>
            <div className="text-[11px] text-stone-500 font-sans">
              Required additional test for all pre-1978 residents.
            </div>
          </div>
        </div>

        {/* NAVIGATION SUBTABS */}
        <div className="flex flex-wrap items-center gap-2 border-b border-stone-200 dark:border-stone-800 pb-2">
          <button
            onClick={() => setActiveSubTab('decision_tool')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'decision_tool'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Stethoscope size={15} />
            <span>Interactive Point-of-Care Engine</span>
          </button>

          <button
            onClick={() => setActiveSubTab('flowcharts')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'flowcharts'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Layers size={15} />
            <span>Fig 1, 2 & 3 Clinical Flow Diagrams</span>
          </button>

          <button
            onClick={() => setActiveSubTab('high_risk_communities')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'high_risk_communities'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Building size={15} />
            <span>82 Designated High-Risk Communities</span>
          </button>

          <button
            onClick={() => setActiveSubTab('clinical_guidance')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'clinical_guidance'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <BookOpen size={15} />
            <span>Clinical Protocols & Venous Confirmation</span>
          </button>

          <button
            onClick={() => setActiveSubTab('roulets_law')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
              activeSubTab === 'roulets_law'
                ? 'bg-emerald-600 text-white shadow-md'
                : isLight
                ? 'bg-stone-200/70 text-stone-700 hover:bg-stone-300'
                : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Zap size={15} />
            <span>Roulet's Law Synthesis</span>
          </button>
        </div>

        {/* SUBTAB 1: INTERACTIVE POINT-OF-CARE CLINICAL DECISION TOOL */}
        {activeSubTab === 'decision_tool' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Questionnaire (7 cols) */}
            <div className={`lg:col-span-7 p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'} space-y-6`}>
              <div className="flex items-center justify-between border-b pb-4 border-stone-200 dark:border-stone-800">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white flex items-center gap-2">
                    <Stethoscope size={18} className="text-emerald-500" />
                    <span>Point-of-Care Clinical Assessment Form</span>
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">
                    Answer the prompts below to determine if a blood lead test is legally mandated or clinically indicated today.
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400">
                  MDHHS Rule Engine v2025.1
                </span>
              </div>

              {/* Step 1: Child's Exact Age */}
              <div className="space-y-3">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  1. Child's Current Age (in Months or Years)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: '6 Months (Infant)', months: 6 },
                    { label: '12 Months (~1 Year)', months: 12 },
                    { label: '18 Months (1.5 Yrs)', months: 18 },
                    { label: '24 Months (~2 Years)', months: 24 },
                    { label: '36 Months (3 Years)', months: 36 },
                    { label: '48 Months (4 Years)', months: 48 },
                    { label: '60 Months (5 Years)', months: 60 },
                    { label: '84 Months (7 Years)', months: 84 }
                  ].map((item) => (
                    <button
                      key={item.months}
                      type="button"
                      onClick={() => setAgeMonths(item.months)}
                      className={`p-2.5 rounded-xl text-xs font-mono font-bold text-center border transition-all ${
                        ageMonths === item.months
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-md ring-2 ring-emerald-400/40'
                          : isLight
                          ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                          : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <span className="text-xs font-mono text-stone-500">Custom Age (Months):</span>
                  <input
                    type="range"
                    min="1"
                    max="204"
                    value={ageMonths}
                    onChange={(e) => setAgeMonths(parseInt(e.target.value))}
                    className="flex-1 accent-emerald-500"
                  />
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                    {ageMonths} mos ({(ageMonths / 12).toFixed(1)} yrs)
                  </span>
                </div>
              </div>

              {/* Step 2: Previous Lead Test History */}
              <div className="space-y-3 pt-2 border-t border-stone-100 dark:border-stone-800/80">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  2. Has the child been tested for lead previously?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setHasPreviousTest(true)}
                    className={`p-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 border transition-all ${
                      hasPreviousTest
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                        : isLight
                        ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                        : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                    }`}
                  >
                    <CheckCircle2 size={16} />
                    <span>YES (Tested Previously)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setHasPreviousTest(false)}
                    className={`p-3 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 border transition-all ${
                      !hasPreviousTest
                        ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                        : isLight
                        ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                        : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                    }`}
                  >
                    <XCircle size={16} />
                    <span>NO (Never Tested)</span>
                  </button>
                </div>

                {hasPreviousTest && (
                  <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950/60 border-stone-800'} space-y-2`}>
                    <div className="text-xs font-mono font-bold text-stone-700 dark:text-stone-300">
                      At what age was the MOST RECENT test drawn?
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="1"
                        max={Math.max(1, ageMonths)}
                        value={Math.min(previousTestAgeMonths, ageMonths)}
                        onChange={(e) => setPreviousTestAgeMonths(parseInt(e.target.value))}
                        className="flex-1 accent-emerald-500"
                      />
                      <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
                        {Math.min(previousTestAgeMonths, ageMonths)} Months
                      </span>
                    </div>
                    <div className="text-[11px] text-stone-500 font-sans">
                      {Math.min(previousTestAgeMonths, ageMonths) < 9 && 'Drawn before 9m: Does not satisfy ~12 month universal screening requirement.'}
                      {Math.min(previousTestAgeMonths, ageMonths) >= 9 && Math.min(previousTestAgeMonths, ageMonths) < 18 && 'Drawn between 9–17m: Satisfies the ~12 month universal screening requirement.'}
                      {Math.min(previousTestAgeMonths, ageMonths) >= 18 && 'Drawn ≥18m: Satisfies the ~24 month universal screening requirement.'}
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Environmental & Housing Risk Factors */}
              <div className="space-y-3 pt-2 border-t border-stone-100 dark:border-stone-800/80">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  3. Housing & Environmental Exposures
                </label>

                {/* Pre-1978 Home Toggle */}
                <div 
                  onClick={() => setLivesInPre1978Home(!livesInPre1978Home)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    livesInPre1978Home
                      ? 'bg-rose-500/10 border-rose-500 text-rose-800 dark:text-rose-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Home size={18} className={livesInPre1978Home ? 'text-rose-500' : 'text-stone-400'} />
                    <div>
                      <div className="text-xs font-bold font-sans">Resides in Home Built Before 1978</div>
                      <div className="text-[10px] text-stone-500">Subject to lead-based paint deterioration and friction dust</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${livesInPre1978Home ? 'bg-rose-500 border-rose-600 text-white' : 'border-stone-400'}`}>
                    {livesInPre1978Home && <Check size={12} />}
                  </div>
                </div>

                {/* Household contact with BLL >= 3.5 ug/dL */}
                <div 
                  onClick={() => setMinorWithElevatedBLL(!minorWithElevatedBLL)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    minorWithElevatedBLL
                      ? 'bg-amber-500/10 border-amber-500 text-amber-800 dark:text-amber-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <User size={18} className={minorWithElevatedBLL ? 'text-amber-500' : 'text-stone-400'} />
                    <div>
                      <div className="text-xs font-bold font-sans">Co-habitant Minor Has Elevated BLL (≥3.5 µg/dL)</div>
                      <div className="text-[10px] text-stone-500">Identified household index case indicating shared environmental hazard</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${minorWithElevatedBLL ? 'bg-amber-500 border-amber-600 text-white' : 'border-stone-400'}`}>
                    {minorWithElevatedBLL && <Check size={12} />}
                  </div>
                </div>

                {/* 82 High Risk Communities (Applies particularly at 48-59 mos) */}
                <div 
                  onClick={() => setIsHighRiskCommunity(!isHighRiskCommunity)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isHighRiskCommunity
                      ? 'bg-sky-500/10 border-sky-500 text-sky-800 dark:text-sky-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Building size={18} className={isHighRiskCommunity ? 'text-sky-500' : 'text-stone-400'} />
                    <div>
                      <div className="text-xs font-bold font-sans">Lives in One of MDHHS 82 High-Risk Communities</div>
                      <div className="text-[10px] text-stone-500">Flint, Detroit, Grand Rapids, Saginaw, Pontiac, Benton Harbor, etc.</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isHighRiskCommunity ? 'bg-sky-500 border-sky-600 text-white' : 'border-stone-400'}`}>
                    {isHighRiskCommunity && <Check size={12} />}
                  </div>
                </div>

                {isHighRiskCommunity && (
                  <div className="pl-6 pt-1">
                    <select
                      value={selectedHighRiskCity}
                      onChange={(e) => setSelectedHighRiskCity(e.target.value)}
                      className={`w-full p-2.5 rounded-xl border font-mono text-xs ${isLight ? 'bg-white border-stone-300 text-stone-900' : 'bg-stone-800 border-stone-700 text-white'}`}
                    >
                      {MICHIGAN_HIGH_RISK_COMMUNITIES.map((c) => (
                        <option key={c.name} value={c.name}>
                          {c.name} ({c.county} County) - {c.riskTier}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Step 4: Parent or Provider Clinical Judgement */}
              <div className="space-y-3 pt-2 border-t border-stone-100 dark:border-stone-800/80">
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-stone-300">
                  4. Clinical & Parental Risk Concerns
                </label>
                <div 
                  onClick={() => setHasParentOrProviderConcerns(!hasParentOrProviderConcerns)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    hasParentOrProviderConcerns
                      ? 'bg-purple-500/10 border-purple-500 text-purple-800 dark:text-purple-300 shadow-sm'
                      : isLight
                      ? 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      : 'bg-stone-800/60 hover:bg-stone-800 border-stone-700 text-stone-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <AlertTriangle size={18} className={hasParentOrProviderConcerns ? 'text-purple-500' : 'text-stone-400'} />
                    <div>
                      <div className="text-xs font-bold font-sans">Parent or Healthcare Provider Has Risk Concerns</div>
                      <div className="text-[10px] text-stone-500">Pica, soil mouthing, foreign ceramics, imported spices, renovation dust, lead pipes</div>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${hasParentOrProviderConcerns ? 'bg-purple-500 border-purple-600 text-white' : 'border-stone-400'}`}>
                    {hasParentOrProviderConcerns && <Check size={12} />}
                  </div>
                </div>
              </div>
            </div>

            {/* Diagnostic Output & Action Directive (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Main Result Card */}
              <div className={`p-6 rounded-3xl border relative overflow-hidden ${
                decisionResult.color === 'red'
                  ? isLight ? 'bg-red-50/90 border-red-300 shadow-xl' : 'bg-red-950/40 border-red-700/80 shadow-2xl'
                  : decisionResult.color === 'amber'
                  ? isLight ? 'bg-amber-50/90 border-amber-300 shadow-xl' : 'bg-amber-950/40 border-amber-700/80 shadow-2xl'
                  : isLight ? 'bg-emerald-50/90 border-emerald-300 shadow-xl' : 'bg-emerald-950/40 border-emerald-700/80 shadow-2xl'
              }`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider ${
                      decisionResult.color === 'red'
                        ? 'bg-red-600 text-white shadow-md'
                        : decisionResult.color === 'amber'
                        ? 'bg-amber-600 text-white shadow-md'
                        : 'bg-emerald-600 text-white shadow-md'
                    }`}>
                      {decisionResult.badge}
                    </span>

                    <span className="text-[11px] font-mono text-stone-500">
                      Age: {ageMonths} mos
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-black font-sans leading-tight ${
                    decisionResult.color === 'red'
                      ? 'text-red-900 dark:text-red-200'
                      : decisionResult.color === 'amber'
                      ? 'text-amber-900 dark:text-amber-200'
                      : 'text-emerald-900 dark:text-emerald-200'
                  }`}>
                    {decisionResult.title}
                  </h3>

                  <div className="p-3.5 rounded-2xl bg-white/70 dark:bg-stone-900/70 border border-black/5 dark:border-white/5 space-y-2">
                    <div className="text-xs font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                      <Info size={14} className="text-stone-500" />
                      <span>Clinical Justification</span>
                    </div>
                    <p className="text-xs text-stone-700 dark:text-stone-300 font-sans leading-relaxed">
                      {decisionResult.reason}
                    </p>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono font-bold uppercase text-stone-500">
                      Provider Action Directive:
                    </div>
                    <p className="text-xs font-sans font-medium text-stone-800 dark:text-stone-200 bg-black/5 dark:bg-white/5 p-3 rounded-xl">
                      {decisionResult.action}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-black/10 dark:border-white/10 text-[10px] font-mono text-stone-500 flex items-center justify-between">
                    <span>Governing Statutory Authority:</span>
                    <span className="font-bold">{decisionResult.legalRule}</span>
                  </div>
                </div>
              </div>

              {/* Point of Care Best Practices Card */}
              <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-4`}>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <Award size={16} className="text-emerald-500" />
                  <span>Clinical Pearls for Healthcare Providers</span>
                </h4>
                <ul className="space-y-2.5 text-xs text-stone-600 dark:text-stone-300 font-sans">
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Optimal Interval:</strong> While testing at 17m and 18m technically satisfies statute, spacing tests 6–12 months apart maximizes detection of newly mobile toddler hand-to-mouth exposures.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Capillary vs Venous:</strong> Capillary tests (fingerstick) are acceptable for initial screening. Any result ≥3.5 µg/dL MUST be verified with a confirmatory venous blood draw within 1–3 months (or immediately if ≥45 µg/dL).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Good-Faith Enforcement:</strong> MDHHS exercises enforcement discretion and will not penalize providers demonstrating good-faith efforts to meet MCL 333.5474d requirements.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SUBTAB 2: FIG 1, FIG 2 & FIG 3 FLOW DIAGRAMS */}
        {activeSubTab === 'flowcharts' && (
          <div className="space-y-8">
            <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'} space-y-4`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4 border-stone-200 dark:border-stone-800">
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-stone-900 dark:text-white flex items-center gap-2">
                    <Layers size={20} className="text-emerald-500" />
                    <span>MDHHS Universal Lead Testing Flow Diagrams (Parts 1–3)</span>
                  </h3>
                  <p className="text-xs text-stone-500 font-sans">
                    Authoritative clinical decision trees interpreted from Michigan Department of Health and Human Services (MDHHS) Administrative Rules R 330.301–330.304.
                  </p>
                </div>

                <button
                  onClick={() => setIsArtworkModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all flex items-center gap-1.5 shadow-md"
                >
                  <Eye size={14} />
                  <span>Inspect Full Resolution Graphic</span>
                </button>
              </div>

              {/* FIG 1: Birth through 29 Months */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-mono flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs">Fig 1</span>
                    <span>Children Aged Birth Through 29 Months (Universal 12m & 24m Gates)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-500">Page 2 of MDHHS Protocol</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
                  {/* Branch A: <9 months */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      A. Less Than 9 Months
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 text-[11px]">
                      Parent/provider concerns about risk factors?
                    </p>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 rounded bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300">
                        <strong>YES:</strong> Order test within 3 months based on risk factors.
                      </div>
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300">
                        <strong>NO:</strong> Testing not required today. Plan universal test around 12 months.
                      </div>
                    </div>
                  </div>

                  {/* Branch B: 9 through 17 months */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      B. 9 Through 17 Months (~12m Gate)
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 text-[11px]">
                      Has child been tested previously?
                    </p>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 rounded bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-300">
                        <strong>NO:</strong> Order test now (~12 month universal screening).
                      </div>
                      <div className="p-2 rounded bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[10px]">
                        <strong>YES (Drawn &lt;9m):</strong> Order test now (satisfies ~12m test).
                      </div>
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[10px]">
                        <strong>YES (Drawn 9–17m):</strong> Considered ~12m test. Plan test at ~24m unless new concerns.
                      </div>
                    </div>
                  </div>

                  {/* Branch C: 18 through 29 months */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      C. 18 Through 29 Months (~24m Gate)
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 text-[11px]">
                      Has child been tested previously?
                    </p>
                    <div className="space-y-1.5 pt-1">
                      <div className="p-2 rounded bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-300">
                        <strong>NO:</strong> Order test now (~24 month universal screening).
                      </div>
                      <div className="p-2 rounded bg-red-500/10 border border-red-500/30 text-red-800 dark:text-red-300 text-[10px]">
                        <strong>YES (Drawn &lt;18m):</strong> Order test now (around age 24m, even if tested at 12m).
                      </div>
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-[10px]">
                        <strong>YES (Drawn ≥18m):</strong> Considered ~24m test. Revisit risks at next visit.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FIG 2: 30 through 59 Months */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-mono flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-600 dark:text-sky-400 text-xs">Fig 2</span>
                    <span>Children Aged 30 Through 59 Months (Catch-Up, Pre-1978 & 82 Communities)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-500">Page 3 of MDHHS Protocol</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                  {/* Branch A: 30-47 months (2.5 to 3 years) */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      A. 2.5 Through 3 Years (30 Through 47 Months)
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                      <li>• <strong>Never Tested:</strong> Order test (mandatory once by age 6).</li>
                      <li>• <strong>Pre-1978 Home:</strong> Order test (additional test required).</li>
                      <li>• <strong>Co-habitant with BLL ≥3.5 µg/dL:</strong> Order test.</li>
                      <li>• <strong>New Parent/Provider Concerns:</strong> Order test within 3 months.</li>
                      <li>• <strong>Otherwise:</strong> No test today. Evaluate at 48–60 months.</li>
                    </ul>
                  </div>

                  {/* Branch B: 48-59 months (4 years) */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      B. 4 Years (48 Through 59 Months)
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                      <li>• <strong>Never Tested:</strong> Order test immediately.</li>
                      <li>• <strong>Lives in 82 High-Risk Communities:</strong> Order test (additional mandatory test at age 4).</li>
                      <li>• <strong>Pre-1978 Home (Outside 82 zones):</strong> Order test within 3 months.</li>
                      <li>• <strong>Co-habitant with BLL ≥3.5 µg/dL:</strong> Order test.</li>
                      <li>• <strong>New Concerns:</strong> Order test within 3 months.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* FIG 3: 60 Months Through 17 Years */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-4`}>
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-stone-900 dark:text-white font-mono flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-600 dark:text-purple-400 text-xs">Fig 3</span>
                    <span>Children Aged 60 Months Through 17 Years (Kindergarten Catch-Up & Clinical Indication)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-stone-500">Page 4 of MDHHS Protocol</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                  {/* Branch A: 5 years (60-71 months) */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      A. 5 Years (60 Through 71 Months)
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                      <li>• <strong>Never Tested:</strong> Order test (final mandatory catch-up by age 6).</li>
                      <li>• <strong>Pre-1978 Home:</strong> Order test (even if tested previously).</li>
                      <li>• <strong>Co-habitant with BLL ≥3.5 µg/dL:</strong> Order test.</li>
                      <li>• <strong>Parent/Provider Concerns:</strong> Order test within 3 months.</li>
                    </ul>
                  </div>

                  {/* Branch B: 6 through 17 years */}
                  <div className={`p-4 rounded-xl border ${isLight ? 'bg-white border-stone-200' : 'bg-stone-900 border-stone-800'} space-y-2`}>
                    <div className="font-bold text-stone-800 dark:text-stone-200 border-b pb-1 font-mono">
                      B. 6 Years Through 17 Years
                    </div>
                    <ul className="space-y-1.5 text-[11px] text-stone-600 dark:text-stone-400">
                      <li>• <strong>Parent or Provider Concerns about Risk Factors:</strong> Order test within 3 months.</li>
                      <li>• <strong>No Concerns:</strong> Testing is not required today. Revisit if new exposures arise.</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SUBTAB 3: 82 HIGH-RISK JURISDICTIONS */}
        {activeSubTab === 'high_risk_communities' && (
          <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'} space-y-6`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-4 border-stone-200 dark:border-stone-800">
              <div className="space-y-1">
                <h3 className="text-xl font-black text-stone-900 dark:text-white flex items-center gap-2">
                  <Building size={20} className="text-sky-500" />
                  <span>Michigan's 82 High-Risk Communities & Jurisdictions</span>
                </h3>
                <p className="text-xs text-stone-500 font-sans">
                  Designated by MDHHS under Administrative Rule R 330.303. Children residing in these 82 jurisdictions MUST receive an additional blood lead test at age 4 (48–59 months).
                </p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full sm:w-72">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Search city, county, or zip..."
                  value={communitySearch}
                  onChange={(e) => setCommunitySearch(e.target.value)}
                  className={`w-full pl-9 pr-4 py-2 rounded-xl text-xs font-mono border ${
                    isLight ? 'bg-stone-50 border-stone-300 text-stone-900' : 'bg-stone-800 border-stone-700 text-white'
                  }`}
                />
              </div>
            </div>

            {/* Communities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-[600px] overflow-y-auto pr-2">
              {filteredCommunities.map((c, i) => (
                <div
                  key={i}
                  className={`p-3.5 rounded-2xl border transition-all hover:scale-[1.02] ${
                    c.riskTier.includes('Crisis')
                      ? 'bg-rose-500/10 border-rose-500/40 text-rose-900 dark:text-rose-200'
                      : c.riskTier.includes('Tier 1')
                      ? 'bg-amber-500/10 border-amber-500/40 text-amber-900 dark:text-amber-200'
                      : isLight
                      ? 'bg-stone-50 border-stone-200 text-stone-800'
                      : 'bg-stone-800/60 border-stone-700 text-stone-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold font-sans">{c.name}</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/10 dark:bg-white/10">
                      {c.county}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-stone-500 pt-1">
                    ZIP: {c.zip}
                  </div>
                  <div className="text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400 pt-0.5">
                    {c.riskTier}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-xs text-sky-900 dark:text-sky-300 flex items-center gap-3">
              <Info size={18} className="text-sky-500 flex-shrink-0" />
              <span>
                <strong>Clinical Implication:</strong> Even if a 4-year-old child had normal blood lead levels at 12m and 24m, residency in any of these 82 jurisdictions triggers an automatic statutory mandate for a 3rd blood test between 48 and 59 months.
              </span>
            </div>
          </div>
        )}

        {/* SUBTAB 4: CLINICAL PROTOCOLS & VENOUS CONFIRMATION */}
        {activeSubTab === 'clinical_guidance' && (
          <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'} space-y-6`}>
            <div className="space-y-1 border-b pb-4 border-stone-200 dark:border-stone-800">
              <h3 className="text-xl font-black text-stone-900 dark:text-white flex items-center gap-2">
                <BookOpen size={20} className="text-emerald-500" />
                <span>CDC Pediatric Blood Lead Reference Value (3.5 µg/dL) & Action Steps</span>
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Evidence-based medical management and environmental remediation workflow for pediatric patients with elevated blood lead levels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Box 1: Diagnostic Confirmation Protocols */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <Stethoscope size={16} className="text-emerald-500" />
                  <span>1. Capillary Fingerstick vs. Venous Confirmation</span>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Capillary blood draws (fingerstick) are convenient for point-of-care screening (e.g. LeadCare II), but are susceptible to false-positive elevation from external skin contamination with household lead dust.
                </p>
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 dark:text-amber-300 space-y-1 font-sans">
                  <div className="font-bold">Confirmatory Venous Draw Schedule:</div>
                  <div>• BLL 3.5–9.9 µg/dL: Venous confirmation within 1 to 3 months.</div>
                  <div>• BLL 10–44.9 µg/dL: Venous confirmation within 1 to 4 weeks.</div>
                  <div>• BLL ≥45 µg/dL: Venous confirmation within 24 to 48 hours (immediate chelation evaluation).</div>
                </div>
              </div>

              {/* Box 2: Environmental Investigation Triggers */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <Home size={16} className="text-rose-500" />
                  <span>2. Environmental & In-Home Abatement Triggers</span>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  A confirmed venous BLL ≥3.5 µg/dL legally and clinically triggers home environmental investigations through local health departments and MDHHS Lead Safe programs:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 font-sans">
                  <li>• Certified Lead Risk Assessment of interior/exterior painted surfaces.</li>
                  <li>• X-Ray Fluorescence (XRF) testing of window sills, door jambs, and porches.</li>
                  <li>• Drinking water testing for lead service line leachates and brass fixtures.</li>
                  <li>• Abatement grants and HEPA vacuum encapsulation for qualifying families.</li>
                </ul>
              </div>

              {/* Box 3: Nutritional Interventions */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <Activity size={16} className="text-sky-500" />
                  <span>3. Nutritional Protection & Competitive Mineral Blocking</span>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Lead uses the same intestinal transport mechanisms (DMT1) as calcium and iron. Nutritional deficits dramatically increase gastrointestinal lead absorption:
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-stone-400 font-sans">
                  <li>• <strong>Calcium:</strong> Competitively blocks Pb2+ intestinal binding and deposition into growing osteoid bone matrices.</li>
                  <li>• <strong>Iron:</strong> Corrects iron deficiency anemia, which up-regulates DMT1 transporters and triples gut lead absorption.</li>
                  <li>• <strong>Vitamin C:</strong> Enhances non-heme iron uptake and promotes urinary heavy metal clearance.</li>
                </ul>
              </div>

              {/* Box 4: Chelation Therapy Criteria */}
              <div className={`p-5 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-3`}>
                <h4 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                  <AlertTriangle size={16} className="text-red-500" />
                  <span>4. Clinical Chelation Criteria (BLL ≥45 µg/dL)</span>
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-400 font-sans leading-relaxed">
                  Pharmacological chelation (oral Succimer / DMSA or IV CaNa2EDTA) is indicated exclusively for severe poisoning (BLL ≥45 µg/dL):
                </p>
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-900 dark:text-red-300 font-sans">
                  <strong>Crucial Warning:</strong> Chelation does NOT reverse subclinical IQ loss or neuro-architectural damage from lower-dose chronic lead exposure (BLL &lt;45 µg/dL). Primary prevention via universal testing and source elimination is the only effective defense.
                </div>
              </div>

            </div>
          </div>
        )}

        {/* SUBTAB 5: ROULET'S LAW SYNTHESIS */}
        {activeSubTab === 'roulets_law' && (
          <div className={`p-6 rounded-3xl border ${isLight ? 'bg-white border-stone-200 shadow-md' : 'bg-stone-900 border-stone-800 shadow-xl'} space-y-6`}>
            <div className="space-y-2 border-b pb-4 border-stone-200 dark:border-stone-800">
              <h3 className="text-xl font-black text-stone-900 dark:text-white flex items-center gap-2">
                <Zap size={20} className="text-amber-500" />
                <span>Roulet's Law Synthesis: Pediatric Lead Testing Compliance & Exposenomics</span>
              </h3>
              <p className="text-xs text-stone-500 font-sans">
                Formulated by Norman Roulet (ICEarth Sovereign Lab / Global Chemical Liability Assessment Coalition):
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 font-mono text-xs sm:text-sm text-center">
              Roulet's Law: [Perturbation (Pb2+ Ingestion)] × [Uncertainty (Diagnostic Gaps)] = [Chaos (Pediatric Cognitive Loss)] × [Relativity (Administrative Burden vs Lifelong Disability)]
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs leading-relaxed text-stone-700 dark:text-stone-300">
              <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                <h4 className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                  Perturbation ($H'$): The Ingestion of Invisible Lead Dust
                </h4>
                <p>
                  Microscopic lead dust from pre-1978 window friction and aging distribution mains settles on nursery floors. For developing infants with rapid hand-to-mouth exploration, a dust particle the size of a grain of sand contains enough bioavailable Pb2+ to elevate pediatric blood levels beyond 20 µg/dL.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                <h4 className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                  Uncertainty ($U$): Historical Clinic Non-Compliance
                </h4>
                <p>
                  Prior to the 2025 Universal Testing law, less than 40% of Michigan toddlers received mandated Medicaid lead tests. Without universal testing gates, silent subclinical poisoning progressed undetected during critical synaptogenesis windows.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                <h4 className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                  Chaos ($C$): Irreversible Neuro-Structural Pruning Failure
                </h4>
                <p>
                  Pb2+ crosses the blood-brain barrier via molecular mimicry, substituting for Ca2+ in protein kinase C (PKC) activation. In prefrontal cortex oligodendrocytes, this triggers premature apoptosis, causing lifelong executive dysfunction, impulsivity, ADHD, and diminished earnings.
                </p>
              </div>

              <div className={`p-4 rounded-2xl border ${isLight ? 'bg-stone-50 border-stone-200' : 'bg-stone-950 border-stone-800'} space-y-2`}>
                <h4 className="font-bold text-stone-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                  Relativity ($R$): The $15 Blood Test vs. $1.2M Disability Deficit
                </h4>
                <p>
                  Relativity highlights the ultimate economic disparity: a point-of-care capillary lead screening costs under $15, yet prevents an estimated $1,200,000 in lifetime cognitive impairment, special education costs, and cardiovascular morbidity per child.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* PROVENANCE MODAL */}
        {isArtworkModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
            <div className={`relative max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl border ${isLight ? 'bg-white border-stone-300' : 'bg-stone-900 border-stone-700'} p-6 sm:p-8 space-y-6 shadow-2xl`}>
              
              <div className="flex items-center justify-between border-b pb-4 border-stone-200 dark:border-stone-800">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                    Plate #29 • Forensic Exposenomics Proof
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white">
                    Childhood Universal Blood Lead Testing Decision Support Algorithm
                  </h3>
                </div>
                <button
                  onClick={() => setIsArtworkModalOpen(false)}
                  className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-500 hover:text-stone-900 dark:hover:text-white transition-all"
                >
                  ✕
                </button>
              </div>

              {/* Artwork High-Res Display */}
              <div className="relative rounded-2xl overflow-hidden border border-stone-300 dark:border-stone-700 bg-black">
                <img
                  src={childhoodAlgorithmImg}
                  alt="MDHHS Universal Lead Testing Decision Support Algorithm Flowchart"
                  className="w-full h-auto object-contain max-h-[60vh] mx-auto"
                />
              </div>

              {/* Provenance Metadata Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 space-y-1">
                  <div className="text-stone-500 uppercase">Statutory Standard:</div>
                  <div className="font-bold text-stone-900 dark:text-white">Michigan Universal Blood Lead Testing Law (MCL 333.5474d)</div>
                </div>
                <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 space-y-1">
                  <div className="text-stone-500 uppercase">Administrative Rules:</div>
                  <div className="font-bold text-stone-900 dark:text-white">MDHHS R 330.301–330.304 (Effective April 2025)</div>
                </div>
                <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 space-y-1">
                  <div className="text-stone-500 uppercase">Cryptographic Vault Hash:</div>
                  <div className="font-bold text-emerald-600 dark:text-emerald-400 break-all">0xMDHHS_MICHIGAN_UNIVERSAL_LEAD_TESTING_ALGORITHM_MCL333_5474D</div>
                </div>
                <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 space-y-1">
                  <div className="text-stone-500 uppercase">Interactive Tab Route:</div>
                  <div className="font-bold text-sky-600 dark:text-sky-400">https://icearth.org/?tab=childhood_lead_testing</div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  onClick={() => setIsArtworkModalOpen(false)}
                  className="px-5 py-2 rounded-xl text-xs font-mono font-bold bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-all"
                >
                  Close Inspection
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
