import Project from '../components/Project';

function Projects (props) {
    return (
        <>
            <section className='border-b-2 flex flex-start flex-col text-left'>
                <h1 className='mt-10 md:ml-10 ml-6 font-semibold text-2xl p-3'>Projects</h1>
                <h5 className='md:ml-10 ml-6 py-4 px-3 text-xs'>View this portfolio's repository <a href="https://github.com/ambertav/portfolio" target="_blank" className='text-red-900 font-bold'>here</a></h5>
            </section>
            <div className='flex items-center justify-center'>
                    <Project projects={props.projects}/>
            </div>
        </>
    )
}


export default Projects;