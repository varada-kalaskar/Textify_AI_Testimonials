import Carousel from 'react-bootstrap/Carousel' ;
import ReactPlayer from 'react-player';
import {Row, Col} from 'react-bootstrap';
import "./Testimonial.css";
import axios from 'axios';
import { useState, useEffect } from "react";
const Testimonial = (props) => {
    const [userDatas, setUserDatas] = useState([]);
    useEffect(()=>{
        axios.get('https://testimonialapi.toolcarton.com/api').then((res)=>{
            const allTests = res.data;
            setUserDatas(allTests);
        });
    },[userDatas]);
    return ( 
        
        <div className="testimonial">
            <Carousel>
            {userDatas.map((user)=>(
                <Carousel.Item>
                
                    <img style={{'height':"300px"}}  className="d-block w-100"  src={'assets/img/R.jpeg'}/> 
                    <Carousel.Caption className="testimonialcaption">
                    <p className="message"> <i className="fas fa-quote-left"></i>{user.message + user.lorem}<i className="fas fa-quote-right"></i></p>
                        <Row className="user" style={{'marginTop':'5vh'}}>
                            <Col md={2}>
                                <img className="avtar" src={user.avatar}/>
                            </Col>
                            <Col md={4}>
                                <div className="personalinfo">
                                    <p> <bold className="name">{user.name},</bold> <small className="location" style={{'color':'black'}}>{user.location}</small>
                                    <br></br><h6>{user.designation}</h6>
                                    <div className="rating">Rating: {user.rating}</div></p>
                                </div>
                            </Col>
                            <Col md={3}>
                                <ReactPlayer className="audio" url={user.audio} playing={false} controls={true} height="7vh" width="30vw" />
                            </Col>
                        </Row>
                    </Carousel.Caption>
                
                
                </Carousel.Item>
                ))}
                </Carousel>
        </div>
        
     );
}
 
export default Testimonial;