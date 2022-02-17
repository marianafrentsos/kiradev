import {
    FaGithubSquare, FaNode,
    FaAngular,
    FaBootstrap,
    FaCss3,
    FaHtml5,
    FaJs,
    FaReact,
    FaJira,
    FaBitbucket,
} from "react-icons/fa"
import React from "react";
const SkillsList = () => {
    return (
        <>
            <ul className='kira-circle-container'>
                <li><FaJira/><span>Jira</span></li>
                <li><FaGithubSquare/><span>Git</span></li>
                <li><FaCss3/><span>Css3</span></li>
                <li><FaHtml5/><span>Html5</span></li>
                <li><FaJs/><span>JavaScript</span></li>
                <li><FaReact/><span>ReactJs</span></li>
                <li><FaAngular/><span>Angular</span></li>
                <li><FaBootstrap/><span>Bootstrap</span></li>
                <li><FaNode/><span>NodeJs</span></li>
                <li><FaBitbucket/><span>BitBucket</span></li>
            </ul>
        </>
    )

}

export default SkillsList;