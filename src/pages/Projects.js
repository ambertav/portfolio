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
                {props.projects.map((p, key) => {
                    return (
                        <li key={key} className='m-6 w-4/5 lg:w-2/5 lg:m-10 rounded-lg shadow-xl'>
                            <Link to={`/projects/${p.name.toLowerCase().replaceAll(' ', '-')}`} state={{ project: p }}>
                                <div className='relative group h-64 md:h-96'>
                                    <img src={require(`../project-media/${p.src}.png`)} alt={p.name} className='rounded-lg shadow-xl w-full h-full' />
                                    <div className='absolute inset-0 bg-stone-800 bg-opacity-0 group-hover:bg-opacity-80 transition-opacity rounded-lg py-4 flex flex-col items-center'>
                                        <h4 className='p-3 md:mt-6 md:mb-12 mb-2 font-semibold text-xl md:text-2xl text-white opacity-0 group-hover:opacity-100 transition-opacity'>{p.name}</h4>
                                        <div className='flex flex-col w-64'>
                                            <span
                                                className='btn-secondary opacity-0 group-hover:opacity-100 transition-opacity md:mx-4 p-2'
                                                href={p.deployLink}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(evt) => {
                                                    evt.preventDefault();
                                                    window.open(p.deployLink, '_blank');
                                                }}
                                            >View Deployment</span>
                                            <span
                                                className='btn-secondary opacity-0 group-hover:opacity-100 transition-opacity md:mx-4 p-2'
                                                href={p.frontendRepo}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(evt) => {
                                                    evt.preventDefault();
                                                    window.open(p.frontendRepo, '_blank');
                                                }}
                                            >View Repository</span>
                                            { p.backendRepo ? (
                                                <span
                                                    className='btn-secondary opacity-0 group-hover:opacity-100 transition-opacity md:mx-4 p-2'
                                                    href={p.backendRepo}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    onClick={(evt) => {
                                                        evt.preventDefault();
                                                        window.open(p.backendRepo, '_blank');
                                                    }}
                                                >View Backend Repository</span>
                                                ) : ('') }
                                        </div>
                                        <p className='text-sm opacity-0 group-hover:opacity-100 transition-opacity md:my-8 my-2 text-white'>Click for more details</p>
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