

function Skills (props) {
    return (
        <div class='flex justify-center items-center pt-3 mb-6'>
            <ul class='flex justify-center items-center flex-wrap w-3/5'>
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