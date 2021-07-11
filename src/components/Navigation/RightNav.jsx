import React from 'react';
import '../../variables/global.scss'
import {useSpring, animated} from "react-spring";

const RightNav = ({ open }) => {
    const style = useSpring({
        transform: open
            ? 'translateX(0)'
            : 'translateX(100%)'
    });
    return (
        <animated.ul open={open} className="kira-right-navigation" style={style}>
            <li href="/" title="About">About</li>
            <li href="/" title="Skills">Skills</li>
            <li href="/" title="Contact">Contact</li>
        </animated.ul>
    )
}

export default RightNav