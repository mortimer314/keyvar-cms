import React from 'react'
import Topbar from '../../../components/topbar/Topbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import { Container, Row, Col } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.css"
import "./Home.css"

// ===========

// import TimerTest from '../../../components/accordian/timer/TimerTest'
import AccordianTest from '../../../components/accordian/timer/AccordianTest'

// ===========
export default function Home() {
  return (
    <div className='home' dir='rtl'>

      <Topbar />
      <div className="main-home">
        <Container fluid>
          <Row>
            <Col className='sidebar-column' fluid sm={2} style={{ padding: 0 }}>
              <Sidebar></Sidebar>
            </Col>
            <Col className='mainbar-column' sm={10} style={{ padding: 0 }}>
              {/* <TimerTest /> */}
              {/* <AccordianTest/> */}
              
             
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />vvc
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />vcc
              <br />
              <br />
              <br />
              <br />
              <br />vcv
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />cccc
              <br />
              <br />
              <br />
              <br />
              <br />cc
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  )
}
