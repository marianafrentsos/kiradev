import {animated, useSpring, useSprings} from "@react-spring/web";
import React from "react";

const IntroductionText = () => {
    const text2 = [...'Front end developer'];
    const from = { transform: 'translateY(50px)', opacity: 0 }
    const to = { transform: 'translateY(10px)', opacity: 1 }

    const base2 = {
        config: { mass: 5, tension: 2000, friction: 1500 },
        from: from,
        to: to,
    }
    const styles2 = useSpring({
        loop: false,
        from: {opacity: 0},
        to: { opacity: 1 },
    })
    const springs2 = useSprings(text2.length, text2.map((t, i) => ({ ...base2, delay: 100 * i})));

    return (
        <animated.p style={styles2} className="kira-landing-section__introduction-second-paragraph">
            {springs2.map((style, i) => {
                return (
                    <animated.span key={`char${i}`} style={style}>
                        {text2[i] === ' ' ? <>&nbsp;</> : text2[i]}
                    </animated.span>
                )
            })}
        </animated.p>
    )
}

export default IntroductionText;