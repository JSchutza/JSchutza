

const defaultAbout = {
    about_text: 'I am a determined individual who is working towards a career as a leader, visionary, and advocate. One of my many objectives is to impact the workforce through developing individuals and drawing out their strengths. I am seeking a working and learning opportunity that will utilize my research skills and natural ability to see growth and potential within people and businesses.',
    avatar: 'https://joshuaschutzapersonal.s3.amazonaws.com/profile_img.JPG',
    email: 'joshua.schutza@pop.belmont.edu',
    firstname: 'Joshua',
    github_link: 'https://github.com/JSchutza',
    jobtitle: 'Full Stack Developer',
    lastname: 'Schutza',
    linkedin_link: 'https://www.linkedin.com/in/joshua-schutza-559819ba/',
};




const defaultProjects = [
    {
        project_img: 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG',
        project_name: 'Book Organizer',
        description: 'A app to help authors create and organize books they are currently writting and to connect authors to other aspiring authors.',
        live_link: 'https://book-organizer.herokuapp.com/',
        github_link: 'https://github.com/JSchutza/Book_Organizer',

    },
    {
        project_img: 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG',
        project_name: 'Remind Me',
        description: 'An app to help developers write quick notes about code.',
        live_link: 'https://remind----me.herokuapp.com/',
        github_link: 'https://github.com/JSchutza/Remind_Me',

    },
    {
        project_img: 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG',
        project_name: 'Instagram Clone',
        description: 'An clone of Instagram that allows users to post photos and connect with other users.',
        live_link: 'https://instagram--me.herokuapp.com/',
        github_link: 'https://github.com/JSchutza/Instagram_Clone',

    },
    {
        project_img: 'https://joshuaschutzapersonal.s3.amazonaws.com/default_project_img.JPG',
        project_name: 'Podemic',
        description: 'An app for podcast lovers to discover and save the most recent podcasts.',
        live_link: 'https://podemic.herokuapp.com/',
        github_link: 'https://github.com/JSchutza/Good_Pods',

    },
];




const defaultSkills = [
    {title: 'JavaScript',},
    {title: 'Python',},
    {title: 'PHP',},
    {title:'HTML',},
    {title:'CSS',},
    {title:'SQL',},
    {title:'React',},
    {title:'Redux',},
    {title:'Express',},
    {title:'Flask',},
    {title:'Django',},
    {title:'Node.js',},
    {title:'Markdown',},
    {title:'JSON',},
    {title:'Bash script',},
    {title:'Git',},
    {title:'Windows',},
    {title:'Linux',},
    {title:'Docker',},

];




const modalStyle = {
    overlay: {
      position: 'fixed',
      backgroundColor: 'transparent'
    },
    content: {
      position: 'absolute',
      inset: '7vw 25vw',
      background: '#1f1f35',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      border: 'transparent',
    }
  };


export {
    defaultProjects,
    defaultSkills,
    defaultAbout,
    modalStyle
};
