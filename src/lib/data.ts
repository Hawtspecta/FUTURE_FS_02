export type LeadStatus = "new" | "contacted" | "converted";

export interface LeadNote {
  id: string;
  content: string;
  createdAt: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  source: string;
  status: LeadStatus;
  notes: LeadNote[];
  createdAt: string;
  updatedAt: string;
}

export const MOCK_LEADS: Lead[] = [
  {
    id: "1",
    name: "Sarah Chen",
    email: "sarah.chen@techstartup.io",
    source: "Website Form",
    status: "new",
    notes: [
      { id: "n1", content: "Interested in enterprise plan. Schedule demo.", createdAt: "2026-02-20T10:30:00Z" },
    ],
    createdAt: "2026-02-20T09:00:00Z",
    updatedAt: "2026-02-20T10:30:00Z",
  },
  {
    id: "2",
    name: "Marcus Rivera",
    email: "marcus@designagency.com",
    source: "LinkedIn",
    status: "contacted",
    notes: [
      { id: "n2", content: "Sent proposal. Follow up Friday.", createdAt: "2026-02-18T14:00:00Z" },
      { id: "n3", content: "Initial call went well. Needs team plan.", createdAt: "2026-02-17T11:00:00Z" },
    ],
    createdAt: "2026-02-15T08:00:00Z",
    updatedAt: "2026-02-18T14:00:00Z",
  },
  {
    id: "3",
    name: "Emily Watson",
    email: "emily@creativeco.design",
    source: "Referral",
    status: "converted",
    notes: [
      { id: "n4", content: "Signed annual contract! 🎉", createdAt: "2026-02-19T16:00:00Z" },
    ],
    createdAt: "2026-02-10T12:00:00Z",
    updatedAt: "2026-02-19T16:00:00Z",
  },
  {
    id: "4",
    name: "James Park",
    email: "james@ecommercelab.io",
    source: "Google Ads",
    status: "new",
    notes: [],
    createdAt: "2026-02-21T07:00:00Z",
    updatedAt: "2026-02-21T07:00:00Z",
  },
  {
    id: "5",
    name: "Aisha Mohammed",
    email: "aisha@fintechpro.com",
    source: "Website Form",
    status: "contacted",
    notes: [
      { id: "n5", content: "Requested pricing comparison doc.", createdAt: "2026-02-20T15:30:00Z" },
    ],
    createdAt: "2026-02-16T10:00:00Z",
    updatedAt: "2026-02-20T15:30:00Z",
  },
  {
    id: "6",
    name: "Tom Bradley",
    email: "tom@brandworks.co",
    source: "Twitter",
    status: "converted",
    notes: [
      { id: "n6", content: "Onboarding complete. Happy customer.", createdAt: "2026-02-14T09:00:00Z" },
    ],
    createdAt: "2026-02-05T14:00:00Z",
    updatedAt: "2026-02-14T09:00:00Z",
  },
  {
    id: "7",
    name: "Lisa Nakamura",
    email: "lisa@devstudio.jp",
    source: "Referral",
    status: "new",
    notes: [],
    createdAt: "2026-02-21T06:00:00Z",
    updatedAt: "2026-02-21T06:00:00Z",
  },
  {
    id: "8",
    name: "David Okonkwo",
    email: "david@growthlab.ng",
    source: "LinkedIn",
    status: "contacted",
    notes: [
      { id: "n7", content: "Booked demo for next week.", createdAt: "2026-02-19T11:00:00Z" },
    ],
    createdAt: "2026-02-13T08:00:00Z",
    updatedAt: "2026-02-19T11:00:00Z",
  },
];

export const CHART_DATA_LEADS_OVER_TIME = [
  { month: "Sep", leads: 12 },
  { month: "Oct", leads: 19 },
  { month: "Nov", leads: 15 },
  { month: "Dec", leads: 28 },
  { month: "Jan", leads: 34 },
  { month: "Feb", leads: 42 },
];

export const CHART_DATA_STATUS = [
  { name: "New", value: 3, fill: "hsl(200, 80%, 55%)" },
  { name: "Contacted", value: 3, fill: "hsl(40, 90%, 55%)" },
  { name: "Converted", value: 2, fill: "hsl(150, 60%, 45%)" },
];
