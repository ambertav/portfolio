import { useLocation } from 'react-router-dom';
import Project from '../components/Project';

function ProjectInfo () {
    const location = useLocation();

    const project = location.state.project;

    return (
        <Project project={project} />
    );
}


export default ProjectInfo;