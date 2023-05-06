function Project (props) {
    return (
        <div>
            <ul>
            {props.projects.map((p, index) => {
                    return (
                        <div key={index}>
                            <p>{p.name}</p>
                            <a href={p.deployLink} target="_blank">View Deployment</a>
                            <a href={p.repoLink} target="_blank">View Repository</a>
                            {p.stack.map((tech, index) => {
                                return <li key={index}>{tech}</li>
                            })}
                        </div>
                    )
                })}
            </ul>
        </div>
    )
}


export default Project;