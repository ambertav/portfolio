function Bio(props) {
  return (
    <div>
      <div className='bio'>
        <h2>{props.bio[props.bioLength]}</h2>
      </div>
    </div>
  );
}


export default Bio;
