


import { defaultProjectData } from "../ProjectViewer/data.js";
import { defaultSkillData } from "../SkillsViewer/data.js";



export const defaultResumeData = {
  aboutInfo: {
    firstname: 'Joshua',
    lastname: 'Schutza',
    github_link: 'https://github.com/JSchutza',
    linkedin_link: 'https://www.linkedin.com/in/joshua-schutza-559819ba/'
  },

  defaultSkillData,
  defaultProjectData,
  defaultExperienceData: [
    {
      title: 'Online Instructional Assistant',
      company_name: 'App Academy',
      start_date: 'June 2021',
      end_date: 'Present',
    },
    {
      title: 'Self Taught Software Engineer',
      company_name: 'Freelance',
      start_date: 'Sep 2019',
      end_date: 'Nov 2020',
    },
  ],

  defaultEducationData : [
    {
      title: 'Full Stack Development',
      instution_name: 'App Academy',
      start_year: '2020',
      end_year: '2021',
    },
    {
      title: 'BS Entertainment Industry Studies',
      instution_name: 'Belmont University',
      start_year: '2013',
      end_year: '2018',
    },
  ]
};
