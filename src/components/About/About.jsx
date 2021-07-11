import React from "react";
import about from '../../assets/about.svg'
import { FaHiking } from 'react-icons/fa';
import {GiCampingTent, GiPaddles} from 'react-icons/gi';
import { GiPopcorn } from 'react-icons/gi';
import { BiWinkSmile } from "react-icons/bi";
import Card from "../Card/Card";
import './About.scss';

const About = () => {
    return (
        <>
            <div className="kira-about-section" id="about">
                <div className="kira-about-section__text">
                    <h5>Just me...</h5>
                    <p>When I am not coding or just trying to solve a problem, you can find me: </p>
                    <ul className="kira-about-section__activities-list">
                        <li><FaHiking/> hiking</li>
                        <li><GiPaddles/> kayaking</li>
                        <li><GiPopcorn/> watching movies</li>
                        <li><BiWinkSmile/> spending time with my family</li>
                        <li><GiCampingTent/>Camping</li>
                    </ul>
                </div>
                <Card>
                    <img src={about}/>
                </Card>
            </div>
        </>
    )
}
export default About;