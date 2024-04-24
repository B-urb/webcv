export type Blogpost = {
  id: number;
  title: string;
  abstract: string;
  thumbnail: string;
  content: string;
  tags: Array<string>;
  date_created: string;
};

export type Project = {
  id: number;
  name: string;
  tags: Array<string>;
  translations: ProjectTranslations[] | null;
  repository_url: string;
  associated_skills: Skill[] | null;
};
export type ProjectTranslations = {
  id: number;
  projects_id: number;
  category: string;
  languages_code: string;
  description: string;
};

export type ProjectsSkills = {
  id: number;
  project_id: number;
  skill_id: number;
};

export type Skill = {
  id: number;
  key: string;
  text: string;
};

export type WorkExperience = {
  id: number;
  name: string;
  startdate: string;
  enddate?: string;
  logo: string;
  url: string;
  roles: WorkRoles[] | null;
};

export type WorkRoles = {
  id: number;
  employer_id: number;
  title: string;
  startdate: string;
  enddate?: string;
  translations: WorkRolesTranslations[] | null;
  associated_skills: Skill[] | null;
};

export type WorkRolesTranslations = {
  id: number;
  work_roles_id: number;
  description: string;
  languages_code: string;
};

export type Introtext = {
  id: number;
  introtext: string;
};
