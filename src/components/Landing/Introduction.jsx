import React, {useState} from "react";
import {animated, useSprings, useSpring} from "@react-spring/web";

import IntroductionText from "./IntroductionText";

const Introduction = () => {

    let [phase, setPhase] = useState();
    const text = [...'Hi, I am Kira.'];
    const from = { transform: 'translateY(50px)', opacity: 0 }
    const to = { transform: 'translateY(10px)', opacity: 1 }
        const base = {
        config: { mass: 5, tension: 2000, friction: 200 },
        from: from,
        to: to,
    }

    const styles = useSpring({
        loop: false,
        from: {opacity: 0},
        to: { opacity: 1 },
        onRest: ({finished}) => {
            setPhase(phase = finished)
        },
        config: { mass: 5, tension: 2000, friction: 1500 },
    })

    const springs = useSprings(text.length, text.map((t, i) => ({ ...base, delay: 100 * i})));

    return (
        <div className="kira-landing-section__introduction">
            <animated.p style={styles} className="kira-landing-section__introduction-first-paragraph">
                {springs.map((style, i) => {
                    return (
                        <animated.span key={`char${i}`} style={style}>
                            {text[i] === ' ' ? <>&nbsp;</> : text[i]}
                        </animated.span>
                    )
                })}
            </animated.p>
            {phase ? <IntroductionText/> : null}
        </div>
    )
}

export default Introduction