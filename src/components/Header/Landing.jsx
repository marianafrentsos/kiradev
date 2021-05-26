import React from "react";
import 'tachyons'

import Navigation from "../Navigation/Navigation";
import Video from "./Video/video";
import Introduction from "./Introduction/Introduction";

const Landing = () => {
         return (
            <div className='w-100 min-vh-100 bg-black-90 overflow-hidden flex-column landing'>
                <Navigation></Navigation>
                <Video></Video>
                <Introduction></Introduction>
            </div>
        )
    }
    export default Landing;