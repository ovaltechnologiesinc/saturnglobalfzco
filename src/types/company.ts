export interface CompanyContact {
  name?: string;
  arabicName?: string;
  phone: string;
  displayPhone: string;
  email: string;
  website: string;
  domain: string;
  address: {
    building: string;
    office: string;
    area: string;
    city: string;
    country: string;
    mapsUrl: string;
  };
  socials: {
    linkedIn: string;
    instagram: string;
  };
  workingHours: {
    day: string;
    hours: string;
  }[];
}

export interface NavItem {
  name: string;
  path: string;
  simpleNote?: string;
}
