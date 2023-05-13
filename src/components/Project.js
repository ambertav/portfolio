function Project (props) {
    return (
        <div className='flex justify-evenly items-center flex-wrap'>
            {props.projects.map((p, index) => {
                    return (
                        <div className='project-card' key={index}>
                            <p>{p.name}</p>
                            <a className='btn-secondary' href={p.deployLink} target="_blank" rel="noreferrer">View Deployment</a>
                            <a className='btn-secondary' href={p.repoLink} target="_blank" rel="noreferrer">View Repository</a>
                            {p.stack.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </div>
                    )
                })}
        </div>
    )
}


export default Project;