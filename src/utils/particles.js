
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// if you are going to use `loadSlim`, install the "tsparticles-slim" package too.


export default {
    background: {
        color: {
            value: "#1d1d1d",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export const SkillsData = [{
    label:"FRONT END",
    data: [
    {
       skillName:"HTML",
       percentage: "90"
    },
    {
        skillName:"CSS",
        percentage: "60"
     },
     {
        skillName:"SCSS",
        percentage: "50"
     },
     {
        skillName:"JAVASCRIPT",
        percentage: "70"
     },
     {
        skillName:"REACT",
        percentage: "50"
     },
     {
        skillName:"TYPESCRIPT",
        percentage: "25"
     },
     {
        skillName:"UX/UI",
        percentage: "35"
     },
     {
        skillName:"FIGMA",
        percentage: "35"
     },

],
},
{
    label:"BACK END",
    data: [
        {
           skillName:"PHP",
           percentage: "70"
        },
        {
            skillName:"LARAVEL",
            percentage: "70"
         },
         {
            skillName:"NODE JS",
            percentage: "60"
         },
         {
            skillName:"PYTHON",
            percentage: "40"
         },
         {
            skillName:"FLASK",
            percentage: "40"
         },
         {
            skillName:"DJANGO",
            percentage: "20"
         },
         
    ]
},
{
    label:"DATABASE",
    data: [
        {
           skillName:"ORALCE 11g",
           percentage: "50"
        },
        {
            skillName:"MYSQL",
            percentage: "70"
         },
         {
            skillName:"POSTGRESQL",
            percentage: "30"
         },
         {
            skillName:"SQLITE",
            percentage: "30"
         },
         {
            skillName:"MICROSOFT SQL SERVER",
            percentage: "20"
         },
         {
            skillName:"MONGO DB",
            percentage: "40"
         },
         
    ]
},
{
    label:"AUTRES",
    data: [
        {
           skillName:"C#",
           percentage: "40"
        },
        {
            skillName:"JAVA",
            percentage: "20"
         },
         {
            skillName:"C/C++",
            percentage: "50"
         },
         {
            skillName:"CRYSTAL REPORT",
            percentage: "70"
         },
         {
            skillName:"SQL",
            percentage: "90"
         },
         {
            skillName:"NoSQL",
            percentage: "30"
         },
         
    ]
}
];

export const resumeData = {
    experience:[{
        title: 'Chef de Service Étude et Développement',
        subTitle: "Guinée,Conakry",
        description: "Étudier les projets de développement Cordonner l’équipe de développement, la conception et le développement des projets informatiques",
        year: "Août 2023-Présent"
        
    },
    {
        title: 'Développeur Sénior Full Stack',
        subTitle: "Guinée,Conakry",
        description: "Analyser et faire le modèle conceptuel des données,Coder les designs en HTML5, CSS 3 et JavaScript,Développer les API ,Intégration avec l’interface",
        year: "Avril 2022 - Août 2023"
        
    },
    {
        title: 'Chef de Section gestion courante et prévisionnelle du fichier électoral',
        subTitle: "Guinée,Conakry",
        description: "Administrer la base de données du fichier électoral,Développer les modules de mise à jour sous C#,Écrire les Scripts SQL,Écrire les scripts de Migration,Élaborer les statistiques désagrégées",
        year: "Septembre 2019 – Septembre 2021"
        
    },
    {
        title: 'Administrateur de la Cartographie électorale',
        subTitle: "Guinée,Conakry",
        description: "Concevoir les statistiques et faire les propositions d’amélioration de la cartographie électorale,Assister et préparer les ,missions d’amélioration de la cartographie ",
        year: "Juillet 2018 – Septembre 2019"
        
    },
    {
        title: 'Chef de section Fichier électoral',
        subTitle: "Guinée,Conakry",
        description: "Développer les Interfaces pour implémenter certaines opérations de mise à jour du fichier électoral,Écrire les Scripts SQL,Écrire les scripts de Migration,Développer les modules de statistique,Développer les modules d’impression des liste électorales",
        year: "Septembre 2014 – Juin 2018"
    },
    {
        title: 'Assistant Technique',
        subTitle: "Guinée,Conakry",
        description: "Administrer la base de données des électeurs,Développer les modules d’impression des listes électorales,Écrire les scripts SQL,Assembler, rétrofit et tester les kits d’enrôlement biométrique,Former les opérateurs de saisie et les techniciens de maintenance des,kits d’enrôlement biométrique,Superviser les opérations d’enrôlement biométrique",
        year:"Juillet 2011 – Septembre 2014"
        
    },
   
   ],
   education:[{
    title: 'Certificat Programming Foundations with JavaScript, HTML and CSS',
    subTitle: "USA",
    description: "Javascript,HTML,CSS",
    year: "2022"
    },
    {
        title: 'Certificat Django for Everybody',
        subTitle: "USA",
        description: "Python,Django",
        year: "2022"
    },
    {
    title: 'Maîtrise en Méthode Informatique Appliquée à la Gestion des Entreprises',
    subTitle: "Guinée,Conakry",
    description: "Informatique et Gestion",
    year: "2010-2011"
  },
 ]
}
