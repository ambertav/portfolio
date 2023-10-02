import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Projects (props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return (
        <>
            <section className='border-b-2 text-left mx-10 lg:mx-16 mb-8'>
                <h1 className='mt-10 md:ml-10 ml-6 font-semibold text-3xl p-3 mb-2'>Projects</h1>
            </section>
            <div>
                <ul className='flex flex-wrap items-center justify-evenly'>
                {props.projects.map((p) => {
                    return (
                        <li className='m-6 w-4/5 lg:w-2/5 lg:m-10 rounded-lg shadow-2xl'>
                            <Link to={`/projects/${p.name.toLowerCase().replaceAll(' ', '-')}`} state={{ project: p }}>
                                <div className='relative group'>
                                    <img src={require(`../project-media/${p.src}.png`)} alt={p.name} className='rounded-lg shadow-2xl w-full h-full' />
                                    <div className='absolute inset-0 bg-stone-800 bg-opacity-0 group-hover:bg-opacity-80 transition-opacity'>
                                        <h4 className='p-3 md:mt-12 md:mb-12 mb-6 font-semibold text-xl md:text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity'>{p.name}</h4>
                                        <a 
                                            className='btn-secondary opacity-0 group-hover:opacity-100 transition-opacity md:mx-4 p-3'
                                            href={p.deployLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(evt) => {
                                                evt.preventDefault();
                                                window.open(p.deployLink, '_blank');
                                            }}
                                        >View Deployment</a>
                                        <a
                                            className='btn-secondary opacity-0 group-hover:opacity-100 transition-opacity md:mx-4 p-3'
                                            href={p.repoLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            onClick={(evt) => {
                                                evt.preventDefault();
                                                window.open(p.repoLink, '_blank');
                                            }}
                                        >View Repository</a>
                                        <p className='text-sm opacity-0 group-hover:opacity-100 transition-opacity md:my-16 my-6 text-white'>Click for more details</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
                </ul>
            </div>
        </>
    );
}


export default Projects;