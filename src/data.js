export default {
    bio: {
        short: 'this is the short bio',
        medium: 'this is the medium bio',
        long: 'this is the long bio'
    },
    skills: {
        languages: ['JavaScript', 'HTML5', 'CSS3', 'Python'],
        'frameworks / libraries': ['Express', 'React', 'Next.js', 'Django', 'Tailwind'],
        'databases / backend': ['MongoDB', 'PostgreSQL', 'Firebase', 'AWS'],
    },
    projects: [
        {
            name: 'Astronomy Memory Game',
            deployLink: 'https://ambertav.github.io/astronomy-memory-game/',
            repoLink: 'https://github.com/ambertav/astronomy-memory-game',
            description: 'A web application that utilizes randomized images from NASA\'s Astronomy Photo of the Day (APOD) API as the cards for a memory matching game.',
            stack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
            featured: false
        },
        {
            name: 'Weightlifting Training Log',
            deployLink: 'https://weightlifting-log.herokuapp.com/',
            repoLink: 'https://github.com/ambertav/weightlifting-training-log',
            description: 'A full CRUD web application built via a MEN stack, that allows users to plan and track olympic weightlifting workouts for the week.',
            stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'jQuery', 'Bootstrap', 'Embedded JavaScript'],
            featured: true
        },
        {
            name: 'What`s For Dinner',
            deployLink: 'https://whatsfordinnerteam.netlify.app/',
            repoLink: 'https://github.com/ambertav/whatsfordinner',
            backendRepoLink: 'https://github.com/ambertav/whatsfordinner-backend',
            description: 'A full stack MERN application that allows users to search for recipes based on ingredients available within their pantry.',
            stack: ['React', 'Node.js', 'Express,js', 'MongoDB', 'Firebase', 'JavaScript'],
            featured: false
        },
        {
            name: 'MediManage',
            deployLink: 'https://medi-manage.herokuapp.com/',
            repoLink: 'https://github.com/ambertav/medication_tracker',
            description: 'A web application that allows users to manage both current and past logs of medications for multiple patients.',
            stack: ['Django', 'Python', 'PostgreSQL', 'Foundation Framework'],
            featured: true
        },
    ]
}