import React from 'react'
import './Watch.styles.scss'
import { Card, Row, Col  } from 'reactstrap';
import { FiMonitor } from "react-icons/fi"
import { FaMobileAlt } from "react-icons/fa"
import { MdComputer } from "react-icons/md"

const WatchComponent = () => {
   return (
      <div className='watch'>
         <Card className='watch-card'>
            <Row className='watch-row'>
               <Col sm='9' md='4' className='watch-card1 cd1'>
                  <h2>Watch Netflix anytime, anywhere. Personalized for you.</h2>
               </Col>
               <Col sm='9' md='4' className='d-sm-none d-md-block'></Col>
               <Col sm='9' md='4' className='cd1'>
                  <img src={require('./netflix_cardimg.jpeg')} alt="..." className='img-fluid watchImg'></img>
               </Col>
            </Row>
            <Row className='watch-row1'>
               <Col sm='9' md='4' className='watch_col1'>
                  <div className='icon1'>
                     <FiMonitor className='monitor1'/>
                  </div>
                  <div className='tv-types'>
                     <h2>Watch on your TV</h2>
                     <h3 className='type'>
                        Smart Tv, Cbox, Apple Tv Playstation, Chromecast, & more.
                     </h3>
                  </div>
               </Col>
               <Col sm='9' md='4' className='watch_col1'>
                  <div className='icon2'>
                     <FiMonitor className='monitor2'/><FaMobileAlt className='mobile1' />
                  </div>
                  <div className='available_devices'>
                     <h2>Watch instantly or download.</h2>
                     <h3 className='avail_text'>Available on phones & all mobile devices, save your favorites easily & watch.</h3>
                  </div>
               </Col>
               <Col sm='9' md='4' className='watch_col1'>
                  <div className='icon3'>
                     <MdComputer className='icon-comp' />
                  </div>
                  <div className='icon3_text'>
                     <h2>Watch instantly or download </h2>
                     <h3>Watch right from <a className='span-text' href=''>Netflix.com</a></h3>
                  </div>
               </Col>
            </Row>
         </Card>
      </div>
   )
}

export default WatchComponent;