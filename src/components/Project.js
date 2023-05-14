function Project (props) {
    return (
        <div className='flex flex-wrap justify-evenly items-start'>
            {props.projects.map((p, index) => {
                    return (
                        <div className='project-card' key={index}>
                            <img src={require(`../project-media/${p.src}.png`)} alt={p.name} />
                            <h4 className='p-3 font-semibold text-lg'>{p.name}</h4>
                            <a className='btn-secondary' href={p.deployLink} target="_blank" rel="noreferrer">View Deployment</a>
                            <a className='btn-secondary' href={p.repoLink} target="_blank" rel="noreferrer">View Repository</a>
                            <p className='text-xs py-4 my-2 md:text-lg'>{p.description}</p>
                            <ul className='stack'>
                                <h4 className='font-semibold'>Technologies Used:</h4>
                                {p.stack.map((tech, index) => {
                                    return <li key={index} className='px-4'>{tech}</li>
                                })}
                            </ul>
                        </div>
                    );
                })}
        </div>
    );
}


export default Project;