import React, { useState } from 'react'
import { BsArrowLeftCircle } from 'react-icons/bs'
import { BiUser } from 'react-icons/bi'
import { FaBirthdayCake } from 'react-icons/fa'
import { occasions } from './occasions'
import './Main.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faCakeCandles, faRing, faHouseFire, faFaceSmileBeam, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import ModalBox from './ModalBox'
import Main2 from './Main2'

function Main() {
    const [open, setOpen] = useState(false)
    const [b, setB] = useState(true)
    const sendData = (data) => {
        setOpen(true)
        console.log(data)
    }
    return (
        <div>
            {
                open && <ModalBox setOpen={setOpen} />
            }
            {/* header  */}
            <div className="arrow">

                <i className='arrowicons'><BsArrowLeftCircle /></i>
            </div>
            <div className="heading">
                <h2>Create  Group Gift event </h2>
            </div>

            <div class="progress">
                <div class="progress-bar " role="progressbar" style={{ width: "25%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}></div>

            </div>
            {/* end header  */}

            <form action="">
                Name the Special One <br />
                <div className="input">
                    <input type="text" />
                    <div className="button">

                        <FontAwesomeIcon icon={faUser} className='icons' />
                    </div>

                </div>

                <div className="occasions">
                    <h2>What the occasions? </h2>
                    <div className="occasions-lists">
                        {
                            occasions.map((v) => (
                                <div className="list" onClick={() => sendData(v)}>
                                    <i><FontAwesomeIcon icon={v.icons} /></i>
                                    <p>{v.text}</p>
                                </div>
                            ))
                        }

                    </div>
                    <div className="octype">
                        <h2>When is the Occasions</h2>
                        <div className="ocinput">
                            <div className="date">
                                <input type={b ? "text" : 'date'}
                                    placeholder='Select Date '
                                    onFocus={() => setB(false)}
                                    onBlur={() => setB(true)}
                                />

                            </div>

                            <div className="time">
                                <input type={b ? "text" : 'date'}
                                    placeholder='Select Time'
                                    onFocus={() => setB(false)}
                                    onBlur={() => setB(true)}
                                />
                            </div>
                        </div>

                    </div>
                    <button className='decided'>Not Decided Yet</button>
                    <div className="alert ">

                        <div>
                            An example alert with an icon

                        </div>
                    </div>
                </div>
            </form>
            {/* /////////////////page second////////////// */}

            <div className='main'>

                <div className="arrow">

                    <i className='arrowicons'><BsArrowLeftCircle /></i>
                </div>
                <div className="heading">
                    <h2>Create  Group Gift event </h2>
                </div>

                <div class="progress">
                    <div class="progress-bar " role="progressbar" style={{ width: "25%", ariaValuenow: "25", ariaValuemin: "0", ariaValuemax: "100" }}></div>

                </div>
                
                <input id ></input>

            </div>

        </div>
    )
}

export default Main