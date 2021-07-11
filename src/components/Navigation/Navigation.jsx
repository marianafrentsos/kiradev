import React, {Component} from "react";
import 'tachyons';
import Burger from "./Burger";
import logo from "../../assets/kira.svg";
import '../../variables/global.scss'

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
        <>
            <div id={'navigation'} style={this.state.style} className="kira-navigation">
                <div className="kira-logo"><a><img src={logo}/></a></div>
                <Burger/>
            </div>
        </>

        )
    }
}
export default Navigation;