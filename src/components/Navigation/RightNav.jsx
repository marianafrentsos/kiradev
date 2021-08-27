import React, {useEffect, useState} from 'react';
import '../../variables/global.scss'
import {useSpring, animated} from '@react-spring/web';
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
                <li className="kira-right-navigation__item">
                    <Link
                        open={open}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick = {() => {handleClick()}}>Home</Link>
                </li>
            <li className="kira-right-navigation__item">
                <Link
                    open={open}
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick = {() => {handleClick()}}
                    >About</Link>
            </li>
           <li className="kira-right-navigation__item">
               <Link
                   open={open}
                   activeClass="active"
                   to="skills"
                   spy={true}
                   smooth={true}
                   duration={500}
                   onClick = {() => {handleClick()}}
                   >Skills
               </Link>
           </li>
                <li  className="kira-right-navigation__item">
                    <Link
                        open={open}
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        duration={500}
                        onClick = {() => {handleClick()}}
                       >Projects</Link>
                </li>
               <li className="kira-right-navigation__item">
                   <Link
                       open={open}
                       activeClass="active"
                       to="footer"
                       spy={true}
                       smooth={true}
                       duration={500}
                       offsite={100}
                       onClick = {() => {handleClick()}}
                      >Contact</Link>
               </li>

                { open ?
            <animated.div open={open} style={style} className="kira-right-logo">
                <li>
                    <Link
                          open={open}
                          to="home"
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick = {() => {handleClick()}}
                    ><img src={logo}/></Link>
                </li>

            </animated.div> : null }
        </animated.ul>
        </>
    )
}

export default RightNav;