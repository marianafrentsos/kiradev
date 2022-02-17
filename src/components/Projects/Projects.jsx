import '../../variables/global.scss';

import React, {useState} from "react";
import {useTransition, animated, useSpring, useSpringRef, useChain} from '@react-spring/web'

import data from "../../data/projects";
import {FaGithubSquare} from "react-icons/fa";
import {useInView} from "react-intersection-observer";

export default function Projects() {
    const [clicked, setClicked] = useState(false);
    let [[title, subTitle], setTitle] = useState('Check my work');
    const [revertedClass, setClass] = useState('');



    const titleRef = useSpringRef();
    const [inView] = useInView({
        triggerOnce: true,
        rootMargin: '-200px 0px',
    });

    const titleProps = useSpring({
        ref: titleRef,
        opacity: inView ? 1 : 0,
        transform: clicked ? "translateY(100%)" : "translateY(0%)",
        transformOrigin: "0 0",
        from: {
            opacity: 0,
            transform: "translateY(100%)",
        },
        config: {duration: clicked ? 800 : 500}
    });


    const subTitleRef = useSpringRef();
    const subTitleProps = useSpring({
        ref: subTitleRef,
        opacity: clicked ? 1 : 0,
        transform: clicked ? "translateY(0%)" : "translateY(0%)",
        transformOrigin: "0 0",
        from: {
            opacity: 0,
            transform: "translateY(0%)",
        },
        config: {duration: clicked ? 800 : 500}
    });


    const animatedItemsRef = useSpringRef();
    const transitions = useTransition(clicked ? data : [], {
        key: (item) => item,
        ref: animatedItemsRef,
        unique: true,
        trail: clicked ? 800 / data.length : 0,
        transformOrigin: "100% 100%",
        from: {
            opacity: 0,
            transform: "scale(0)"
        },
        enter: {
            opacity: 1,
            transform: "scale(1)"
        },
        leave: {
            opacity: 0,
            transform: "scale(0)"
        },
        config: {duration: clicked ? 800 : 500},
    })

    useChain(
        clicked
            ? [animatedItemsRef, subTitleRef, titleRef]
            : [ titleRef, animatedItemsRef, subTitleRef],
        [0, 0.5]
    );

    title = 'Click to check out my work'
    subTitle = 'Selected projects'

    return (

        <>
            <div className='kira-projects-section' id='projects' onClick= {() => {setClicked(!clicked)}}>
                <svg className="kira-curve-up"
                     xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="50" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>
                    {!clicked ?
                        <animated.div style={titleProps} className="kira-projects__title">
                        <h1>{title}</h1>
                        </animated.div> : null
                    }
                <animated.div className="kira-projects-grid-container"
                              onClick= {() => {setClicked(!clicked)}}>
                    <animated.div className="kira-projects-grid">
                        {clicked ?
                            <animated.div style={subTitleProps} className="kira-projects__subtitle">
                                <h2>{subTitle}</h2>
                            </animated.div> : null }
                        {transitions((style, item, t, key) => (
                            <animated.div className={(key + 1)%2 === 0 ? 'kira-projects-grid__item kira-projects-grid__item-reversed' : 'kira-projects-grid__item'} style={{...style}}>
                                {item.btnUrl ?
                                <animated.div className="kira-projects-grid__item-img">
                                    <a className="kira-projects-grid__item-overlay" href={item.btnUrl} target="_blank"/>
                                    <img src={item.background} alt={"web-projects-image"}/>
                                </animated.div> : null}
                                <animated.div className="kira-projects-grid__item-description">
                                    <div className="kira-projects-grid__item-description-body">
                                        <h3 className="kira-projects-grid__item-description-body-title" style={!item.description ? {"textAlign" : "center"} : {}}>
                                            {item.title}
                                        </h3>
                                        <p className="kira-projects-grid__item-description-body-details">
                                            <span>{item.description}</span>
                                        </p>
                                        {item.technologies ?
                                        <div className="kira-projects-grid__item-description-body-tech-wrapper">
                                            <p>Technologies:</p>  <div className="kira-projects-grid__item-description-body-tech-items">{item.technologies.map((technology, index) => <span key = {index} className="kira-projects-grid__item-description-body-tech-items-single">{technology}</span> )}</div>
                                        </div> : null}
                                    </div>
                                    {item.btnUrl || item.gitUrl ?
                                    <div className="kira-projects-grid__item-description-btns">
                                        <a className="kira-projects-grid__item-description-btns kira-projects-grid__item-description-btns-git" href={item.gitUrl} target="_blank">
                                            <FaGithubSquare style={{"height": "3rem", "width": "3rem"}}/>
                                        </a>
                                        <a className="kira-projects-grid__item-description-btns kira-projects-grid__item-description-btns-live" href={item.btnUrl} target="_blank">Live
                                        </a>
                                    </div> : null}
                                </animated.div>
                            </animated.div>
                        ))}
                    </animated.div>
                </animated.div>
                <svg className="kira-projects-section__divider" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path id="slitPath2" d="M50 100 C49 80 47 0 0 0 L47 0 Z"></path>
                    <path id="slitPath3" d="M50 100 C51 80 53 0 100 0 L53 0 Z"></path>
                    <path id="slitPath1" d="M47 0 L50 100 L53 0 Z"></path>
                </svg>
            </div>
        </>
    );
}