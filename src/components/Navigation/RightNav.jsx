import React, {useEffect, useState} from 'react';
import '../../variables/global.scss'
import {useSpring, animated} from "react-spring";
import { Link } from 'react-scroll'
import logo from "../../assets/kira.svg";

const RightNav = ({ open, handleClick}) => {

     let style = useSpring({
            transform: open
                ? 'translateX(0%)'
                : 'translateX(100%)'
     })

    if(window.innerWidth >= 1025) {
         style = null;
    }
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1025 ) {
                style = null;
            }
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', () => {
            handleResize();
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    })

    return (
        <>
            <animated.ul open={open} className="kira-right-navigation"
                     style={style}>
            <Link
                open={open}
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="kira-right-navigation__item"
                onClick = {() => {handleClick()}}>Home</Link>
            <Link
                open={open}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() => {handleClick()}}
                className="kira-right-navigation__item">About</Link>
            <Link
                open={open}
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() => {handleClick()}}
                className="kira-right-navigation__item">Skills
            </Link>
            <Link
                open={open}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                onClick = {() => {handleClick()}}
                className="kira-right-navigation__item">Contact</Link>

                { open ?
            <animated.div open={open} style={style} className="kira-right-logo">
                <Link activeClass="active"
                      open={open}
                      to="home"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick = {() => {handleClick()}}
                ><img src={logo}/></Link>
            </animated.div> : null }
        </animated.ul>
        </>
    )
}

export default RightNav;