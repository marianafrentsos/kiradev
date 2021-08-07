import React, {useState} from 'react';
import RightNav from './RightNav';
import '../../variables/global.scss'

import { useSpring, animated } from "react-spring";

const Burger = () => {
    const [isOpen, toggle] = useState(true);

    const handleOpenMenu = () => {
        toggle(!isOpen)
    }

    const first = useSpring({
        transform: isOpen
            ? "translate(2px, 7px) rotate(0deg)"
            : "translate(5px, 32px) rotate(-45deg)"
    });
    const second = useSpring({
        transform: isOpen
            ? "translate(2px, 19px) rotate(0deg)"
            : "translate(10px, 4px) rotate(45deg)"
    });
    const third = useSpring({
        transform: isOpen
            ? "translate(2px, 31px) rotate(0deg)"
            : "translate(5px, 32px) rotate(-45deg)"
    });

    return (
        <div className="kira-burger" onClick={() => {toggle(!isOpen)}}>
            <svg
                onClick={handleOpenMenu}
                width="40"
                height="32"
                viewBox="0 0 44 44"
                fill="#fafafa"
                xmlns="http://www.w3.org/2000/svg"
            >
                <animated.rect width="40" height="4" rx="2" style={first} />
                <animated.rect width="40" height="4" rx="2" style={second} />
                <animated.rect width="40" height="4" rx="2" style={third} />
            </svg>
            <RightNav open={!isOpen} handleClick={handleOpenMenu} />
        </div>
    );
};
export default Burger;