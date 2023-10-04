import React, { useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import './main2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPen } from '@fortawesome/free-solid-svg-icons'
const Main2 = () => {
    const [b, setB] = useState(true)
    const [ipData, setIpData] = useState({ mobile: "", email: "", image: "" })

    const setData = (e, type) => {

        if (type == 't') {
            setIpData({ ...ipData, mobile: e.target.value })
        } else if (type === 'e') {
            setIpData({ ...ipData, email: e.target.value })

        }


    }


    var tele = document.getElementById('tel')
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(ipData)
        if (!ipData.mobile) {
          tele.classList.add('is-invalid')
            
            console.log('mobile requireds')
        } if (!ipData.email) {
            console.log('email is required')
        }
    }
    return (
        <div><div className="arrow">

            <i className='arrowicons'><BsArrowLeftCircle /></i>
        </div>
            <div className='main'>


                <div className="heading">
                    <h2>Create  Group Gift event </h2>
                </div>
                <div className="pcontainer">

                    <div class="progress">
                        <div class="progress-bar " role="progressbar" style={{ width: "62%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}></div>
                    </div>

                </div>

                <div className="birthday">
                    <div className="icons1">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </div>
                    <div className="data">
                        <h6>Rahuls birthday</h6>
                        <p>Aug 56456</p>
                    </div>
                    <div className="icons2">
                        <FontAwesomeIcon icon={faPen} />

                    </div>
                </div>
                <form action="" onSubmit={handleSubmit}>

                    <div class="col-md-6">
                        <label for="validationServer03" class="form-label">City</label>
                        <input type="tel"class="form-control  " id="tel" 
                            onChange={(e) => setData(e, 't')}
                             placeholder='enter Rahuls  Number' />
                        {/* <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required/> */}
                            <div id="validationServer03Feedback" class="invalid-feedback">
                                Please provide a valid city.
                            </div>
                    </div>
                    <div className="inputs">
                        Rahuls Mobile Number <br />
                        <input type="tel"
                            onChange={(e) => setData(e, 't')}
                            className='form-control' placeholder='enter Rahuls  Number' />
                        <br />  Rahuls Email Id <br />
                        <input type="email" onChange={(e) => setData(e, 'e')} className='form-control' placeholder='@ Enter Rahuls Email Id' />
                        digital gifts will be delivered here
                    </div>


                    <div className="alert ">

                        <div>
                            Don't Worry ! <br />
                            Rahul will not receieve any email until events day

                        </div>
                    </div>
                    <div className="file">

                        <div className="images">
                            <img src="" alt="" /> <span>upload Images</span>
                        </div>
                        <div className="input">

                            <input type={b ? "text" : 'file'}
                                placeholder='Tap to Select'
                                onFocus={() => setB(false)}
                                onBlur={() => setB(true)}
                            /> <br />
                            <p>
                                upload Rahuls photo (optional)
                            </p>
                        </div>
                    </div>


                    <button id='btn-2'> Proceed</button>

                </form>
            </div>
        </div>
    )
}

export default Main2