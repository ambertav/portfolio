function Skills (props) {
    return (
        <div className='flex justify-center items-center pt-3 mb-6'>
            <ul className='flex justify-center items-center flex-wrap w-3/5'>
                {props.skills.map((s) => {
                    return (
                        <li className='p-3'>
                            <img src={require(`../icons/${s}.png`)} alt={s} className='icons' />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


export default Skills;