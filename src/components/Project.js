function Project (props) {
    return (
        <div class='flex justify-evenly items-center flex-wrap'>
            {props.projects.map((p, index) => {
                    return (
                        <div class='project-card' key={index}>
                            <p>{p.name}</p>
                            <a class='btn-secondary' href={p.deployLink} target="_blank" rel="noreferrer">View Deployment</a>
                            <a class='btn-secondary' href={p.repoLink} target="_blank" rel="noreferrer">View Repository</a>
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