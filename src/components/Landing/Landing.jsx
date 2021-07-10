import React, {Component} from "react";
import 'tachyons'

import Navigation from "../Navigation/Navigation";
import Video from "./Video/video";
import Introduction from "./Introduction/Introduction";
import styled from "styled-components";
const StyledLanding = styled.div`
  height: 100vh;
  position: relative;
  overflow: hidden;
  z-index:3;

  
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.1); /* Black background with opacity */
    z-index: 0;
  }
`


class Landing extends Component {

    constructor(props){

    super(props)
        this.state = {
        style: this.style
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        let scrollTop = event.target.body.scrollTop,
            itemTranslate = {'backgroundColor': 'black'};
            // itemTranslate = Math.min(0, scrollTop/3 - 60);

        this.setState({
            style: itemTranslate
        });
    }
    render() {

        return (
            <>
                <StyledLanding id='landing'>
                    <Navigation style={this.state.style} id='navigation'/>
                    <Video/>
                    <Introduction/>
                </StyledLanding>
            </>
        )


    }
}
export default Landing;