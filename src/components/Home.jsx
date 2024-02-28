import React from 'react'
import Container from 'react-bootstrap/Container';
import Award from "../assets/images/Award.png";
import Award2 from "../assets/images/Award2.png";
import Machine from "../assets/images/Machines.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
const Home = () => {
  return (
    <>
    <Container fluid="lg">
    <section>
    <Row className="mobile">
        <Col  xs lg="4">
        <img src={Award} alt="" width="100%" />
        </Col>
        <Col xs lg="8">
           <h6 className='cri_pumps'> <b>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</b></h6>
            <ul>
            <li>
            <h6 className='cri_pumps'>
        C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy 
        products for various projects across the globe to save energy.
        </h6>
        </li>
        <li>
        <h6 className='cri_pumps'>
    C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) 
    to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control
     panel. 
     </h6>
     </li>
        </ul>
        <img src={Award2} width="100%" alt="" />
        <h6 className='cri_pumps'> Government of India has awarded the <b>"National Energy Conservation
         Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from 
         Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
         </h6>
        </Col>
        
      </Row>
      </section>
    <section className='machine_section'>
      <Row className="">
        <Col>
        <h6 className='cri_pumps installed_text'>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF 
        MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
        </h6>
        <img src={Machine} className='machine_img' alt="" />
        
        <h6 className='cri_pumps text-center'> Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h6>


        </Col>
        </Row>
        </section>
        <section className='processes'>
          <Row>
        <Col>
        <h6 className='cri_pumps text-center'> <b> C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></h6>
        <h6 className='cri_pumps text-center'> CHEMICALS & PROCESS <span className='red_bar'>|</span> POWER <span className='red_bar'>|</span> WATER & WASTE WATER <span className='red_bar'>|</span>
          OILS & GAS <span className='red_bar'>|</span> PHARMA <span className='red_bar'>|</span> 
        SUGARS & DISTILLERIES <span className='red_bar'>|</span> PAPER & PULP <span className='red_bar'>|</span> MARINE 
        & DEFENCE <span className='red_bar'>|</span> METAL & MINING <span className='red_bar'>|</span> FOOD & BEVERAGE<span className='red_bar'>|</span>
         PETROCHEMICAL & REFINERIES <span className='red_bar'>|</span> SOLAR<span className='red_bar'>|</span>
          BUILDING <span className='red_bar'>|</span> HVAC <span className='red_bar'>|</span> FIRE FIGHTING <span className='red_bar'>|</span>
         AGRICULTURE & RESIDENTIAL
         </h6>
        </Col>

    </Row>
    </section>
  </Container>
  </>
  )
}

export default Home