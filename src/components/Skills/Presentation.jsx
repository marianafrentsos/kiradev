import {BiWinkSmile} from "react-icons/bi";
import React from "react";
import '../../variables/global.scss'

const Presentation = () => {
    return (
        <>
            <div id="presentation" className="kira-presentation" >
                <h5>Front end developer & Programmer </h5>
                <p>I started studying web development in 2019 and since than I keep learning and exploring every day.
                    I love exploring ideas, put them on the screen and having fun creating cool and modern websites.
                </p>
                <h5>What I do</h5>
                <ul>
                    <li><span>&#123;</span>Develop interactive websites<span>&#125;</span></li>
                    <li><span>&#123;</span>Use the latest technologies<span>&#125;</span></li>
                    <li><span>&#123;</span>Build an application form start to end <span>&#125;</span></li>
                    <li><span>&#123;</span>Have fun <BiWinkSmile/><span>&#125;</span></li>
                </ul>
            </div>
        </>
    )
}
export default Presentation;