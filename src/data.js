const data = {
    bio: ['Passion for innovation', 'Results driven', 'Methodical problem-solver', 'Expert judgement'],
    skills: {
        'programming languages': ['JavaScript', 'Python', 'TypeScript'],
        'frontend development': ['HTML', 'CSS', 'React', 'Next-js', 'jQuery'],
        'backend development': ['Node-js', 'Express', 'Django', 'Flask'],
        'databases': ['MongoDB', 'PostgreSQL'],
        'cloud services': ['AWS', 'Firebase'],
        'testing frameworks': ['Jest', 'Pytest']
    },
    projects: [
        {
            name: 'Presently',
            src: 'presently',
            deployLink: 'https://mypresently.online/',
            frontendRepo: 'https://github.com/GA-Oct-hackathon-team-3/frontend',
            backendRepo: 'https://github.com/GA-Oct-hackathon-team-3/backend',
            description: 'A full CRUD mobile and web application that utilizes AI to curate personalized gift suggestions based on the recipients\' interests and preferences.',
            stack: ['Node-js', 'Express', 'MongoDB', 'TypeScript', 'JavaScript', 'React', 'Jest', 'AWS'],
        },
        {
            name: 'Weightlifting Training Log',
            src: 'weightlifting-training-log',
            deployLink: 'https://weightlifting-log.herokuapp.com/',
            frontendRepo: 'https://github.com/ambertav/weightlifting-training-log',
            backendRepo: '',
            description: 'A full CRUD web application built via a MEN (MongoDB, Express, Node) stack, that allows users to plan and track olympic weightlifting workouts for the week.',
            stack: ['Node-js', 'Express', 'MongoDB', 'JavaScript', 'jQuery', 'Jest', 'AWS'],
        },
        {
            name: 'Astronomy Memory Game',
            src: 'astronomy-memory-game',
            deployLink: 'https://ambertav.github.io/astronomy-memory-game/',
            frontendRepo: 'https://github.com/ambertav/astronomy-memory-game',
            backendRepo: '',
            description: 'A web application that utilizes randomized images from NASA\'s Astronomy Photo of the Day (APOD) API as the cards for a memory matching game.',
            stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        },
        {
            name: 'MediManage',
            src: 'medimanage',
            deployLink: 'https://medi-manage.herokuapp.com/',
            frontendRepo: 'https://github.com/ambertav/medication_tracker',
            backendRepo: '',
            description: 'A web application that allows users to manage both current and past logs of medications for multiple patients.',
            stack: ['Django', 'Python', 'PostgreSQL'],
        },
    ]
}

export default data;