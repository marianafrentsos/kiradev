import React, {Component} from "react";
import Burger from "./Burger";
import logo from "../../assets/kira.svg";
import '../../variables/global.scss'
import { Link } from 'react-scroll'


class Navigation extends Component {
    navBackground;

    constructor(props) {
        super(props)

        this.state = {
            style: this.style,
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
        <>
            <div id={'navigation'} style={this.state.style} className="kira-navigation">
                <div className="kira-logo"><Link to="home"
                                                 spy={true}
                                                 smooth={true}
                                                 offset={50}
                                                 duration={500}><img src={logo} alt={"logo"}/></Link></div>
                <Burger/>
            </div>
        </>

        )
    }
}
export default Navigation;