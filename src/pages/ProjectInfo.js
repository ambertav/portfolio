import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ProjectInfo () {
    const location = useLocation();
    const project = location.state.project;

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

    return (
        <>
            <section className='border-b-2 text-left mx-10 lg:mx-16'>
                <h1 className='mt-20 md:ml-10 ml-6 font-semibold text-3xl p-3 mb-6'>{project.name}</h1>
            </section>
            <div className='md:grid md:grid-cols-3 gap-10 mx-10 md:mt-10 lg:mt-20'>
                <div className='md:col-span-2'>
                    <p className='mt-10 md:text-xl pb-6'>{project.description}</p>
                    <div className='md:col-span-2 my-10 mb-10'>
                        <a className='btn-secondary md:text-lg mx-3 md:mx-8' href={project.deployLink} target="_blank" rel="noreferrer">View Deployment</a>
                        <a className='btn-secondary md:text-lg mx-3 md:mx-8' href={project.repoLink} target="_blank" rel="noreferrer">View Repository</a>
                        <img src={require(`../project-media/${project.src}.png`)} alt={project.name} className='rounded-lg shadow-2xl mt-10' />
                    </div>
                </div>
                <div className='md:col-start-3pt-10'>
                    <h4 className='font-semibold text-2xl mb-4'>Technologies Used:</h4>
                    <ul className='flex flex-wrap md:flex-col md:justify-evenly'>
                        {project.stack.map((tech, index) => {
                            return <li key={index} className='py-3 px-4 text-lg'>{tech}</li>
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}


export default ProjectInfo;