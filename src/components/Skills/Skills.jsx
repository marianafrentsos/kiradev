import React from "react";
import projects from '../../assets/projects5.svg'
import './SkillsList.scss'
import Presentation from "./Presentation";
import SkillsList from "./SkillsList";
import {useInView} from "react-intersection-observer";

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-50px 0px',
    });

    return (
        <>
            <div id="skills" className="kira-skills-section"ref={ref} style={{ opacity: inView ? 1 : 0, transition: 'all 4s ease-out' }}>
                <div className="kira-skills-section__image-wrapper">
                    <img src={projects} alt={""}/>
                </div>
                <Presentation/>
                <SkillsList/>
            </div>
        </>
    )
}
export default Skills;
