import '../../variables/global.scss';

import React, {useState} from "react";
import {useTransition, animated, useSpring, useSpringRef,useChain } from '@react-spring/web'

import data from "../../data/projects";

export default function Projects() {
    const [clicked, setClicked] = useState(false);
    let [[title, subTitle], setTitle] = useState('Check my work');

    //https://konstantinlebedev.com/animate-units-react-spring/
    const vhToPixel = (value) => `${(window.innerHeight * value) / 100}px`;

    const animatedBannerRef = useSpringRef();
    const animatedBannerProps = useSpring({
        ref: animatedBannerRef,
        height: clicked ? "50px" : vhToPixel(100),
        justifyContent: clicked ? "flex-start" : "center",
        from: {
            height: vhToPixel(100),
        },
    });

    const titleRef = useSpringRef();
    const titleProps = useSpring({
        ref: titleRef,
        opacity: clicked ? 0.4 : 1,
        transform: clicked ? "translateY(-300%)" : "translateY(0%)",
        transformOrigin: "0 0",
        from: {
            opacity: 1,
            transform: "translateY(-300%)",
        },
    });
const subTitleRef = useSpringRef();
    const subTitleProps = useSpring({
        ref: subTitleRef,
        opacity: clicked ? 0.4 : 1,
        transformOrigin: "0 0",
        from: {
            opacity: 1,
        },
    });


    const animatedItemsRef = useSpringRef();
    const transitions = useTransition(clicked ? data : [], {
        key: (item) => item.id,
        ref: animatedItemsRef,
        unique: true,
        trail: clicked ? 500 / data.length : 0,
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
        config: {duration: clicked ? 500 : 0}
    })

    const animatedCurveRef = useSpringRef();
    const animatedCurve = useSpring({
        ref: animatedCurveRef,
        opacity: clicked ? 0.5 : 1,
        from: {
            opacity: 1,
        },
    })


    useChain(
        clicked
            ? [animatedBannerRef, animatedItemsRef, animatedCurveRef, titleRef, subTitleRef ]
            : [animatedItemsRef, animatedCurveRef,  animatedBannerRef, titleRef, subTitleRef],
        [0, 0.5]
    );

    title = 'Check out my work'
    subTitle = 'Selected projects - section under construction :)'

    return (
        <>
            <div className='kira-projects-section' id='projects'>
                <svg className="kira-curve-up" style={animatedCurve}
                     onClick= {() => {setClicked(!clicked)}}
                     xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="50" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z"></path>
                </svg>
                <animated.div className="kira-projects__banner"
                    style={animatedBannerProps}
                    onClick= {() => {setClicked(!clicked)}}>
                    {!clicked ?
                        <animated.div style={titleProps} className="kira-projects__title">
                        <h1>

                            {title}
                        </h1>
                        </animated.div> : null
                    }
                </animated.div>
                <animated.div className="kira-projects-grid-container"
                              onClick= {() => {setClicked(!clicked)}}
                >
                    <animated.div className="kira-projects-grid">
                        {clicked ?

                            <animated.div style={subTitleProps} className="kira-projects__subtitle">
                                <h2>
                                    {subTitle}
                                </h2>
                        </animated.div> : null }
                        {transitions((style, item, t) => (
                            <animated.div
                                className="kira-projects-grid__item"
                                style={{...style, "background": `url(${item.background})`, "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundSize": "contain", "willChange:": "transform, opacity"}}
                            />
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