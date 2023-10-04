import React from 'react'
import { GiCheckMark, GiSoccerField } from 'react-icons/gi';
import Profile from '../../Assests/PROFILE.png'
import teachers from '../../../teahers.json'
function About() {
  return (
    <>
      <div className="about">
        <div className="headpart">
          <h1>Heaven Public School</h1>
        </div>
        <div className="middle">
          <div class="container-fluid py-5">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202302/ezgif-sixteen_nine_296.jpg?size=1200:675" alt="website template image" /></div>
                <div className="col-lg-7">
                  <p className="section-title pr-5"><span className="pr-2 learnabout">Learn About Us</span></p>
                  <h1 className="mb-4">Best School For Your Kids</h1>
                  <p className='aboutcont'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                  <div className="row pt-2 pb-4">
                    <div className="col-6 col-md-4"><img className="img-fluid rounded" src="https://www.ysschool.org/wp-content/uploads/2021/09/gal-3-e1655107890889.jpg" alt="website template image" /></div>
                    <div className="col-6 col-md-8">
                      <ul className="list-inline m-0">
                        <li className="py-2 border-top border-bottom"><i> <GiCheckMark /></i> &nbsp;Labore eos amet dolor amet diam</li>
                        <li className="py-2 border-top border-bottom"><i> <GiCheckMark /></i> &nbsp;Labore eos amet dolor amet diam</li>
                        <li className="py-2 border-top border-bottom"><i> <GiCheckMark /></i> &nbsp;Labore eos amet dolor amet diam</li>

                      </ul>
                    </div>
                  </div>
                  {/* <a href="" className="btn btn-primary mt-2 py-2 px-4">Learn More</a> */}
                </div>
              </div>
            </div>

          </div>
        </div>


        {/* 2nd portion  */}
        {/* <div class="container-fluid pt-5">
  <div class="container pb-3">
    <div class="row">
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="d-flex bg-light shadow-sm border-top rounded mb-4 nxtprt" ><i class="flaticon-050-fence h1 font-weight-normal text-primary mb-3"><GiSoccerField></GiSoccerField> </i>
          <div class="pl-4 cnt">
            <h4>Play Ground</h4>
            <p class="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="d-flex bg-light shadow-sm border-top rounded mb-4" ><i class="flaticon-022-drum h1 font-weight-normal text-primary mb-3"></i>
          <div class="pl-4">
            <h4>Music and Dance</h4>
            <p class="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="d-flex bg-light shadow-sm border-top rounded mb-4" ><i class="flaticon-030-crayons h1 font-weight-normal text-primary mb-3"></i>
          <div class="pl-4">
            <h4>Arts and Crafts</h4>
            <p class="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="d-flex bg-light shadow-sm border-top rounded mb-4" ><i class="flaticon-017-toy-car h1 font-weight-normal text-primary mb-3"></i>
          <div class="pl-4">
            <h4>Safe Transportation</h4>
            <p class="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="d-flex bg-light shadow-sm border-top rounded mb-4" ><i class="flaticon-025-sandwich h1 font-weight-normal text-primary mb-3"></i>
          <div class="pl-4">
            <h4>Healthy food</h4>
            <p class="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 pb-1">
        <div class="d-flex bg-light shadow-sm border-top rounded mb-4" ><i class="flaticon-047-backpack h1 font-weight-normal text-primary mb-3"></i>
          <div class="pl-4">
            <h4>Educational Tour</h4>
            <p class="m-0">Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero lorem amet elitr vero...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
        {/* next part  */}
        <div className="container" style={{
          display: "flex", flexDirection: "column", marginTop: "3rem"
        }}>
          <div className="text-center pb-2 teach">
            <p className="section-title px-5"><span className="px-2 ourteachers ">Our Teachers</span></p>
            <h1 className="mb-4  ">Meet Our Teachers</h1>
          </div>
          <div className="row">
            {
              teachers.map((a) => (
                <>
                  <div className="col-md-6 col-lg-3 text-center team mb-5">
                    <div className="position-relative overflow-hidden mb-4" style={{ borderRadius: '100%' }}>
                      {/* <img className="img-fluid w-100" src={Profile} alt="website template image" /> */}
                      <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                        <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="https://www.free-css.com/free-css-templates">
                          <i className="fab fa-twitter" /></a>
                           <a className="btn btn-outline-light text-center mr-2 px-0" style={{ width: 38, height: 38 }} href="https://www.free-css.com/free-css-templates">
                            <i className="fab fa-facebook-f" /></a> <a className="btn btn-outline-light text-center px-0" style={{ width: 38, height: 38 }} href="https://www.free-css.com/free-css-templates"><i className="fab fa-linkedin-in" /></a></div>
                    </div>
                    <h4>{a.name}</h4>
                    <h5>{a.faculty}</h5></div>
                </>
              ))
            }



          </div>
        </div>


      </div>
    </>
  )
}

export default About