import {
    FaGithubSquare, FaNode,
    SiAngular,
    SiBootstrap,
    SiCss3,
    SiHtml5,
    SiJavascript,
    SiReact, SiStyledComponents,
    SiWebstorm
} from "react-icons/all";
import React from "react";

import { useInView } from 'react-intersection-observer';

const SkillsList = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-1px 0px',
    });

    return (
        <>
            <ul ref={ref} className='circle-container' style={{ opacity: inView ? 1 : 0, transition: 'all 4s ease-out' }}>
                <li><SiWebstorm/><span>webstorm</span></li>
                <li><FaGithubSquare/><span>Git</span></li>
                <li><SiCss3/><span>Css3</span></li>
                <li><SiHtml5/><span>Html5</span></li>
                <li><SiJavascript/><span>JavaScript</span></li>
                <li><SiReact/><span>ReactJs</span></li>
                <li><SiAngular/><span>Angular</span></li>
                <li><SiBootstrap/><span>Bootstrap</span></li>
                <li><FaNode/><span>NodeJs</span></li>
                <li><SiStyledComponents/><span>Styled Components</span></li>
            </ul>
        </>
    )

};

export default SkillsList;