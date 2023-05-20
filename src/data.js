export default {
    bio: {
        short: 'Amber is a software engineer with a passion for innovation and simplicity.',
        medium: 'Amber is a software engineer with an extensive background in pharmaceutical compounding. She is a methodical problem solver who possesses expert judgement and insightful decision making.',
        long: 'Amber is a skilled full-stack software engineer with an extensive background in pharmaceutical compounding. She is a methodical problem solver who possesses expert judgement and insightful decision making. She excels in rapidly analyzing and troubleshooting complex scenarios. She is eager to utilize her expertise and ingenuity, and to apply her passion for innovation and simplicity.'
    },
    skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Node-js', 'React', 'Next-js', 'Mongodb', 'Postgresql', 'Python', 'Firebase', 'AWS', 'Tailwind'],
    projects: [
        {
            name: 'Astronomy Memory Game',
            src: 'astronomy-memory-game',
            deployLink: 'https://ambertav.github.io/astronomy-memory-game/',
            repoLink: 'https://github.com/ambertav/astronomy-memory-game',
            description: 'A web application that utilizes randomized images from NASA\'s Astronomy Photo of the Day (APOD) API as the cards for a memory matching game.',
            stack: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
            featured: false
        },
        {
            name: 'Weightlifting Training Log',
            src: 'weightlifting-training-log',
            deployLink: 'https://weightlifting-log.herokuapp.com/',
            repoLink: 'https://github.com/ambertav/weightlifting-training-log',
            description: 'A full CRUD web application built via a MEN (MongoDB, Express, Node) stack, that allows users to plan and track olympic weightlifting workouts for the week.',
            stack: ['Node.js', 'Express', 'MongoDB', 'JavaScript', 'jQuery', 'bcrypt', 'Bootstrap', 'Embedded JavaScript'],
            featured: true
        },
        {
            name: 'What\'s For Dinner',
            src: 'whats-for-dinner',
            deployLink: 'https://whatsfordinnerteam.netlify.app/',
            repoLink: 'https://github.com/ambertav/whatsfordinner',
            backendRepoLink: 'https://github.com/ambertav/whatsfordinner-backend',
            description: 'A full stack MERN (MongoDB, Express, Node, and React) application that allows users to search for recipes on Edamam\'s Recipe API based on ingredients available within their pantry. The user can then save the recipe, and view details such as a list of ingredients, a link to the full recipe instructions, and even nutrition information per serving.',
            stack: ['React', 'Node.js', 'Express,js', 'MongoDB', 'Firebase', 'JavaScript'],
            featured: false
        },
        {
            name: 'FlowerCollector',
            src: 'flowercollector',
            deployLink: 'http://flowercollector.herokuapp.com/',
            repoLink: 'https://github.com/ambertav/flower_collector',
            description: 'A web application that allows the user to collect flowers, maintain a watering log for each flower, and add various types pollinators that can pollinate each flower.',
            stack: ['Django', 'Python', 'PostgreSQL', 'AWS', 'Bulma'],
            featured: false
        },
        {
            name: 'MediManage',
            src: 'medimanage',
            deployLink: 'https://medi-manage.herokuapp.com/',
            repoLink: 'https://github.com/ambertav/medication_tracker',
            description: 'A web application that allows users to manage both current and past logs of medications for multiple patients.',
            stack: ['Django', 'Python', 'PostgreSQL', 'Foundation Framework'],
            featured: true
        },
    ]
}