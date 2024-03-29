import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Skills from '../components/Skills';

function ProjectInfo () {
    const location = useLocation();
    const project = location.state.project;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <section className='border-b-2 text-left mx-10 lg:mx-16'>
                <h1 className='mt-20 md:ml-10 ml-6 font-semibold text-3xl p-3 mb-4'>{project.name}</h1>
            </section>
            <div className='md:grid md:grid-cols-3 gap-10 mx-10 md:mt-4 lg:mt-20'>
                <div className='md:col-span-2'>
                    <p className='mt-6 md:text-xl md:pb-6'>{project.description}</p>
                    <div className='md:col-span-2 my-10 mb-10'>
                        <div className='flex flex-col md:flex-row justify-evenly'>
                            <a className='btn-secondary md:text-lg text-base mx-10 md:mx-3' href={project.deployLink} target="_blank" rel="noreferrer">View Deployment</a>
                            <a className='btn-secondary md:text-lg text-base mx-10 md:mx-3' href={project.frontendRepo} target="_blank" rel="noreferrer">View Repository</a>
                            { project.backendRepo ? <a className='btn-secondary md:text-lg text-base mx-10 md:mx-3' href={project.backendRepo} target="_blank" rel="noreferrer">View Backend Repository</a> : '' }
                        </div>
                        <img src={require(`../assets/project-media/${project.src}.png`)} alt={project.name} className='rounded-lg shadow-2xl mt-10 h-64 md:h-[70vh] w-100' />
                    </div>
                </div>
                <div className='md:col-start-3 md:ml-10'>
                    <h4 className='font-semibold text-2xl mb-6'>Technologies Used:</h4>
                    <ul className='flex flex-col items-center justify-evenly'>
                        {project.stack.map((tech, index) => 
                        <li className='flex md:justify-between items-center stack-icons py-4 w-1/3'>
                            <Skills skill={tech} key={index} direction='left' />
                        </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default ProjectInfo;