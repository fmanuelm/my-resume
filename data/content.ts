export const contentData = [
  {
    title: "Work Experience",
    items: [
      {
        title: "Full-Stack Developer",
        company: "DataCRM",
        website: "https://www.datacrm.com/",
        subTitle: "Remote",
        date: "Feb 2024 - Nov 2024",
        goals: ["He contributes to enhancing the SEO of the company's official website, focusing on optimizing the interaction between the frontend and backend.", "Additionally, he works on implementing new features for the company's CRM application, the main product. He successfully implemented the payment process, delivering an effective solution to a longstanding issue."],
        technologies: "Laravel, Php, Javascript, Vue, JQuery, Html, CSS, Jira, Git, Linux, Sem Rush, Href, etc."
      },
      {
        title: "Full-Stack Developer",
        company: "Tamikha",
        website: "https://www.tamikha.com/",
        subTitle: "Remote",
        date: "2013 - Now",
        goals: ["Web Developer for his clients in Colombia and outside Colombia", "App Developer for clients in USA specially in Laravel Framework.", "Hosting Administrator (Web Master) for the customers that host their Web Sites"],
        technologies: "Laravel, React, Javascript, Nodejs, AWS (EC2, Lambda, SQS, DynamoDB), Bash-Shell, Script, CPanel, Html, CSS, etc."
      },
      {
        title: "Full-Stack Developer",
        company: "Eme Marketing & Consulting",
        website: "https://www.tamikha.com/",
        subTitle: "Remote",
        date: "May 2023 - Enero 2024",
        goals: ["Developed an application for a company client using Angular version 14.", "built a chat system integrated with WhatsApp for Vtiger, utilizing the WhatsApp API.", "Created new modules for the CRM to enhance functionality.", "Web Applications Developer"],
        technologies: "Angular, Wordpress, Php, Javascript, Nodejs, Bash-Shell Script, Git, Linux, CPanel, Html, CSS"
      },
      {
        title: "Front-End Developer",
        company: "NIPPY",
        website: "https://nippy.la/",
        subTitle: "Remote",
        date: "Mar 2022 - May 2022",
        goals: ["Developed several Screens for a Web Application in React"],
        technologies: "React, Material and basic functions in Laravel (backend), Git."
      },
      {
        title: "Senior Full-Stack Developer",
        company: "SPLAY 7 (A StartUp Social Media)",
        subTitle: "Remote",
        date: "Mar 2022 - May 2022",
        goals: ["As Backend: Developed part of the GraphApi (Authentication, Followers, Friends, etc","As Frontend: Developed several screens like Dashboard, Profile, Register, Signin, etc."],
        technologies: "Nodejs, GraphQL, React, MongoDB, Firebase, NextJS, Ant Design, Git."
      },
      {
        title: "Front-End Developer",
        company: "Planeta Software",
        subTitle: "Remote - Office",
        date: "Jun 2019 - Oct 2019",
        goals: ["Who together with the Graphic Designer was able to create several pages and sections, specially for one of his biggest clients called Nettalk Connect"],
        technologies: "Bootstrap, HTML, CSS, Javascript, Jquery"
      },
      {
        title: "Web Master",
        company: "All Naturals",
        subTitle: "Office",
        date: "Feb 2015 - May 2016",
        goals: ["Build the ecommerce of this company with more than 200 products online.", "Responsible of the Web Ranking in Google (SEO)"],
        technologies: "Wordpress, Php, Mysql, HTML, CSS, Javascript, Jquery, Photoshop"
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        title: "Systems Engineering",
        subTitle: "O & M University, Santo Domingo, Dominican Republic",
        date: "2008 - 2011",
        description: "Obtained a Bachelor's degree in System Engineering.",
      },
    ],
  }
];

export type Content = {
  title: string;
  items: {
    title: string;
    company?: string;
    website?: string;
    goals?: any[];
    subTitle: string;
    date: string;
    description?: string;
    technologies?: string;
  }[];
};

export type ContentData = Content[];

export const Qualifications = [
  "React", "Laravel", "Javascript", "Typescript", "NodeJS", "Angular", "NextJS", "Git", "Api REST", "GraphQL", "Mysql", "Vue", "Bootstrap", "Jest", "NestJS", "Docker", "Kubernetes", "AWS", "Agile Scrum"
];