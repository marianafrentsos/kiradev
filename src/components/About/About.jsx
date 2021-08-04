import React from "react";
import about from '../../assets/about.svg'
import { FaHiking } from 'react-icons/fa';
import {GiCampingTent, GiSkis} from 'react-icons/gi';
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
                        <li><FaHiking/> <span>hiking</span></li>
                        <li><GiSkis/> <span>skiing</span></li>
                        <li><GiCampingTent/><span>camping</span></li>
                        <li><GiPopcorn/> <span>watching movies</span></li>
                        <li><BiWinkSmile/> <span>spending time with my family</span></li>
                    </ul>
                </div>
                <Card>
                    <img src={about} style={{'width': '100%'}} alt={"image"}/>
                </Card>
            </div>
        </>
    )
}
export default About;