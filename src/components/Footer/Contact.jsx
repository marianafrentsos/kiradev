import React, { useState } from 'react'
import {
    useTransition,
    useSpring,
    useChain,
    config,
    animated,
    useSpringRef,
} from '@react-spring/web'
import {isMobile} from 'react-device-detect';


import data from '../../data/data';

export default function Contact() {
    const [open, set] = useState(false)

    const springApi = useSpringRef()
    const { width, height, ...rest } = useSpring({
        ref: springApi,
        config: config.stiff,
        from: { background: '#F9A826', width: '35%'},
        to: {
            width: open ? '100%' : '35%',
            background: open ? '#242323' : '#F9A826',
        },
    })

    const transApi = useSpringRef()
    const transition = useTransition(open ? data : [], {
        ref: transApi,
        trail: 400 / data.length,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })


    // This will orchestrate the two animations above, comment the last arg and it creates a sequence
    useChain(open ? [springApi, transApi] : [transApi, springApi], [
        0,
        open ? 0.1 : 0.6,
    ])

    return (
        <div className="kira-contact-wrapper" id="contact">
            <animated.div
                style={{ ...rest, width: width}}
                className="kira-contact"
                onClick={() => set(open => !open)}>
                {transition((style, item) => (
                    <animated.div
                        className="kira-contact-btn"
                        style={{ ...style, background: item.css }}>
                        <animated.a className="kira-contact-btn--icon" href={item.target} target="_blank">{item.contactIcon}
                        </animated.a>
                    </animated.div>
                ))}
                <p className={!open ? "kira-contact-title" : "kira-hide"}>Get in touch</p>
            </animated.div>
        </div>
    )
}
