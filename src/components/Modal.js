function Modal (props) {

    function handleClick (evt) {
        evt.preventDefault();
        props.setModalOpen(false);
    }

    return (
        <div className='modal'>
            <div className='modal-content'>
                <h1>Thank you for submitting!</h1>
                <p className='pb-4'>I'll get in contact with you as soon as possible</p>
                <button className='btn-secondary px-5' onClick={handleClick}>Close</button>
            </div>
        </div>
    );
}


export default Modal;