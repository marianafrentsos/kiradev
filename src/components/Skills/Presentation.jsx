import {BiWinkSmile} from "react-icons/bi";
import React from "react";
import '../../variables/global.scss'

const Presentation = () => {
    return (
        <>  <div className="separator">
        </div>
            <div id="presentation" className="kira-presentation" >
                <div className="kira-presentation-about">
                    <h4>Front end developer & programmer </h4>
                    <div className="kira-presentation-about-content">
                        <p>I started studying web development in 2019 and since then I am learning <span>innovative technical</span> tools and trends in the industry.
                            I love exploring ideas, putting them on the screen to create cool and <span>modern websites</span>, and having fun while I'm doing it.
                            Currently, I work full time as a <span>software engineer</span> and together with my team, we are developing world-class <span>e-commerce solutions</span>.

                        </p>
                        <p>
                            I am working closely with a design team, making sure that the finished product best represents the design intention.
                            In my day to day work, I put great value on the <span>user experience</span>, follow best practices making sure to create <span>fully responsive</span> products.
                        </p>
                    </div>

                </div>

                <div className="kira-presentation-do">
                    <h5>What I do</h5>
                    <ul>
                        <li><span>&#128073;</span><span>Design, create and develop interactive websites</span></li>
                        <li><span>&#128073;</span><span>Use the latest technologies</span></li>
                        <li><span>&#128073;</span><span>Apply SEO principles</span></li>
                        <li><span>&#128073;</span><span>Mobile first design</span></li>
                        <li><span>&#128073;</span><span>Figma designs and mockups</span></li>
                    </ul>
                </div>

            </div>
        </>
    )
}
export default Presentation;