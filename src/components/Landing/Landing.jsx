import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import Introduction from "./Introduction";
import '../../variables/global.scss'
import Video from "./Video";

class Landing extends Component {

    constructor(props){

    super(props)
        this.state = {
        style: this.style,
            mount: true
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.state.mount = true;
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        this.state.mount = false;
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        let scrollTop = event.target.body.scrollTop,
            itemTranslate = {'backgroundColor': 'black'};

        this.setState({
            style: itemTranslate
        });
    }
    render() {

        return (
            <>
                <div className="kira-landing-section" id="home">
                     <Navigation style={this.state.style} id='navigation'/>
                    {this.state.mount ?  <Navigation style={this.state.style} id='navigation'/> : null }
                    <Video/>
                    {this.state.mount ? <Introduction/> : null}
                </div>
                </>
        )
    }
}
export default Landing;