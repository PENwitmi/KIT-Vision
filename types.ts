export interface SectionContent {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionType {
  Hero,
  President,
  Philosophy,
  Future,
  Education,
  Leader,
  Knowledge,
  Admission,
  Keywords
}