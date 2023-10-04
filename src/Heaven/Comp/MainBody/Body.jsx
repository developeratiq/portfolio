import React from 'react'
import video1 from '../../Assests/video1.mp4'
import img1 from '../../Assests/img1.jpg'
import img2 from '../../Assests/img2.jpg'
import img3 from '../../Assests/img3.jpg'
import b from '../../Assests/b.webp'
import teacher from '../../Assests/teacher.webp'
import events from '../../Assests/events.jpg'

function Body() {
    return (
        <>
            <div className="body">
                <div className="overlay"></div>
                <div className="video">
                    <video src={video1} autoPlay loop muted></video>
                </div>
                <div className="content">
                    <h1> Heaven public school.</h1>
                    <p>Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone
                        and greater strength for our nation. (John F. Kennedy)</p>
                </div>

                <div className="content2">
                    <div className="cont1">
                        <h4>Grandmaster Talk</h4>
                        <h1>EDUCATION IS THE MOST POWERFUL WEAPON</h1>
                        <p>Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about. Our students are busy doing things that matter. Take a look at the opportunities you'll have at the University. The task of the modern educator
                            is not to cut down jungles, but to irrigate deserts.</p>
                        <div className="signature">signature</div>
                    </div>
                    <div className="cont2">
                        <div className="schoolImages">
                            <div className="img1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="img2">
                                <img src={img2} alt="" />
                                <img src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content3">
                    <div className="students">
                        <img src={events} alt="" />
                        <h1>Students Events</h1>
                    </div>
                    <div className="classroom">
                        <img src={b} alt="" />
                        <h1>ClassRoom Stories</h1>
                    </div>
                    <div className="teachers">
                        <img src={teacher} alt="" />
                        <h1>Students Profiles</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Body