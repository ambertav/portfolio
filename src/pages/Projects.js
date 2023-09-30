import { Link } from 'react-router-dom';
import Project from '../components/Project';
import { useEffect } from 'react';

function Projects (props) {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


    return (
        <>
            <section className='border-b-2 text-left mx-10 lg:mx-16'>
                <h1 className='mt-10 md:ml-10 ml-6 font-semibold text-3xl p-3'>Projects</h1>
            </section>
            <div>
                <ul className='flex flex-wrap items-center justify-evenly'>
                {props.projects.map((p) => {
                    return (
                        <li className='m-6 w-4/5 lg:w-2/5 lg:m-10 rounded-lg shadow-2xl'>
                                <Link to={`/projects/${p.name.toLowerCase().replaceAll(' ', '-')}`} state={{ project: p }}>
                                    <img src={require(`../project-media/${p.src}.png`)} alt={p.name} className='rounded-lg shadow-2xl w-full h-full'/>
                                </Link>
                            </li>
                    )
                })}
                </ul>

                {/* <Project projects={props.projects}/> */}
            </div>
        </>
    );
}


export default Projects;