function Modal (props) {

    function handleClick (evt) {
        evt.preventDefault();
        props.setModalOpen(false);
    }

    return (
        <div className='modal'>
            <h1>Thank you for submitting!</h1>
            <p>I'll get in contact with you as soon as possible</p>
            <button className='btn-secondary px-5' onClick={handleClick}>
                Close
            </button>
        </div>
    );
}


export default Modal;