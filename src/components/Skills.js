

function Skills (props) {
    return (
        <div class='flex justify-center items-center'>
            <ul class='flex justify-center items-center flex-wrap w-4/5'>
                {props.skills.map((s) => {
                    return (
                        <li class='p-3'>
                            <img src={require(`../icons/${s}.png`)} alt={s} class='icons' />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Skills;