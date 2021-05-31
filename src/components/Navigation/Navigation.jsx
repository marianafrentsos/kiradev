import React, {Component} from "react";
import 'tachyons';
import Burger from "./Burger";
import styled from "styled-components";


const StyledAnchor = styled.a `
    width: 65%;
    letter-spacing: 0.2rem;
    text-decoration: none;
    font-size: 1.8rem;
    color: #cdcac0;
    font-weight: 500;
    margin: 0;
    padding: 1.2rem 1.4rem;
    line-height: 1.5rem;

  @media (max-width: 768px) and (min-width: 768px) {
    font-size: 1.9rem;
    padding-left: 2rem;
  }

  @media (min-width: 1025px){
    font-size: 2.5rem;
  }
`

const StyledNav = styled.div `
  position: fixed;
  display: flex;
  width: 100%;
  z-index: 3;
  height: 4rem;

  @media (max-width: 768px), (min-width: 768px) {
    padding: 0;
  }

  @media (min-width: 1025px){
    padding-right: 4rem;
    padding-left: 4rem;
  }
`

class Navigation extends Component {
    navBackground;

    constructor(props) {
        super(props)

        this.state = {
            style: this.style
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    handleScroll() {

        if(window.pageYOffset > 100 ){
            this.navBackground = {'backgroundColor': 'rgba(0,0,0,0.5)'};
        }
        else {
            this.navBackground = {'backgroundColor': 'transparent'}
        }
        this.setState({
            style: this.navBackground
        });
    }

    render() {
        return (
        <> <StyledNav id={'navigation'} style={this.state.style}>
            <StyledAnchor href="/" title="Kira">
                Kira
            </StyledAnchor>
            <Burger/>
        </StyledNav>
        </>

    )
    }

    }

// const Navigation = () => {
//     return (
//         <> <StyledNav id={'navigation'}>
//             <StyledAnchor href="/" title="Kira">
//                 Kira
//             </StyledAnchor>
//             <Burger/>
//         </StyledNav>
//         </>
//
//     )
// }
export default Navigation;