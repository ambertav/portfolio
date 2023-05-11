import Project from '../components/Project';

function Projects (props) {
    return (
        <div class='h-5/6'>
            <h1 class='text-2xl text-center font-semibold my-4'>Projects</h1>
            <div class='flex items-center justify-center'>
                <Project projects={props.projects}/>
            </div>
        </div>
    )
}


export default Projects;