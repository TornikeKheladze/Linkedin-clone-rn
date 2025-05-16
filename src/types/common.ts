export interface User {
  name: string;
  email: string;
  password: string;
  headline?: string;
  bio?: string;
  location?: string;
  website?: string;
  profilePhoto?: string;
  bannerPhoto?: string;
  connections: string[];
  experiences: {
    title: string;
    company: string;
    location?: string;
    from: Date;
    to?: Date;
    description?: string;
  }[];
  education: {
    school: string;
    degree?: string;
    fieldOfStudy?: string;
    from: Date;
    to?: Date;
    description?: string;
  }[];
  skills: string[];
  createdAt: Date;
  updatedAt: Date;
}
