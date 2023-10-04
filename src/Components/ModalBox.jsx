import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile,faXmark} from '@fortawesome/free-solid-svg-icons'

function ModalBox({setOpen}) {
  return (
    <>
    <div
      className="modal show"
      
      
    >
      <Modal.Dialog style={{
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"}}  >
        <div className="container">

        <div className="header">
        <p>Other</p>
       <i  onClick={()=>{setOpen(false)}}> <FontAwesomeIcon icon={faXmark}/></i>


        </div>
            <i className='smiley'> <FontAwesomeIcon icon={faFaceSmile}/></i>
             <div>Name the Special One</div>
            <div className="input">
                    <input type="text"  placeholder='Anniversary'/>
                </div>
                <button className='save' style={{width:"90%"}}>Save</button>

        
        </div>
      </Modal.Dialog>
    </div>
    </>
  )
}

export default ModalBox