import { CompanyContact, NavItem } from '../types/company';

export const COMPANY_INFO: CompanyContact = {
  name: 'SATURN GLOBAL FZCO',
  arabicName: 'ساترن غلوبال ش.م.ح',
  phone: '+971506874646',
  displayPhone: '+971 50 687 4646',
  email: 'Saturnglobalfzco@gmail.com',
  website: 'https://saturnglobalfzco.com',
  domain: 'saturnglobalfzco.com',
  address: {
    building: 'DMCC Business Centre',
    office: 'Unit No: 3O-01-5071, Level No 1',
    area: 'Jewellery & Gemplex 3',
    city: 'Dubai',
    country: 'United Arab Emirates',
    mapsUrl: 'https://maps.google.com/?q=Jewellery+%26+Gemplex+3+DMCC+Dubai',
  },
  socials: {
    linkedIn: 'https://www.linkedin.com/company/saturn-global-fzco',
    instagram: 'https://www.instagram.com/saturnglobalfzco/',
  },
  workingHours: [
    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
};

export const NAV_LINKS: NavItem[] = [
  { name: 'About', path: '/about', simpleNote: 'Who we are' },
  { name: 'FAQ', path: '/faq', simpleNote: 'Questions & answers' },
  { name: 'Markets', path: '/markets', simpleNote: 'Where we trade' },
  { name: 'Services', path: '/services', simpleNote: 'What we do' },
  { name: 'Mining', path: '/mining', simpleNote: 'Gold from mines' },
  { name: 'Market Data', path: '/marketdata', simpleNote: 'Live gold prices' },
  { name: 'Contact Us', path: '/contactus', simpleNote: 'Call or visit us' },
];

export const COMPANY_STATS = [
  { value: 'DMCC', label: 'Registered Firm', sublabel: 'Jewellery & Gemplex 3, Dubai' },
  { value: '999.9', label: 'Pure Gold Standard', sublabel: 'Certified DMCC & LBMA bars' },
  { value: 'Same Day', label: 'Fast Payment', sublabel: 'Direct payout in AED or USD' },
  { value: '100%', label: 'Insured Delivery', sublabel: 'Guarded by Brinks & G4S' },
];
