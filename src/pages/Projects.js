import Project from '../components/Project';

function Projects (props) {
    return (
        <div>
            <h1>Projects</h1>
            <Project projects={props.projects}/>
        </div>
    )
}


export default Projects;