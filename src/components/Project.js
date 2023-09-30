function Project (props) {
    return (
        <div className='flex flex-wrap justify-evenly items-start'>
                        <div className='project-card m-10 md:m-20'>
                            <img src={require(`../project-media/${props.project.src}.png`)} alt={props.project.name}/>
                            <h4 className='p-3 mt-4 mb-2 font-semibold text-lg'>{props.project.name}</h4>
                            <a className='btn-secondary' href={props.project.deployLink} target="_blank" rel="noreferrer">View Deployment</a>
                            <a className='btn-secondary' href={props.project.repoLink} target="_blank" rel="noreferrer">View Repository</a>
                            <p className='text-xs py-4 my-2 md:text-lg'>{props.project.description}</p>
                            <ul className='stack'>
                                <h4 className='font-semibold'>Technologies Used:</h4>
                                {props.project.stack.map((tech, index) => {
                                    return <li key={index} className='px-4'>{tech}</li>
                                })}
                            </ul>
                        </div>
        </div>
    );
}


export default Project;