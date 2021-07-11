import React, {Component} from "react";
import Navigation from "../Navigation/Navigation";
import Introduction from "./Introduction";
import '../../variables/global.scss'
import Video from "./Video";


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
                <div className="kira-landing-section" id="landing">
                    <Navigation style={this.state.style} id='navigation'/>
                    <Video/>
                    <Introduction/>
                </div>
                </>
        )
    }
}
export default Landing;