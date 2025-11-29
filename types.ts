export interface Cause {
  id: string;
  title: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  category: 'Legal' | 'Education' | 'Health' | 'Community';
  status: 'Ongoing' | 'Urgent' | 'Completed';
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: any; // Lucide icon
}

export interface VolunteerRole {
  id: string;
  title: string;
  description: string;
  timeCommitment: string;
}

export enum UserRole {
  DONOR = 'DONOR',
  VOLUNTEER = 'VOLUNTEER',
  ADMIN = 'ADMIN'
}