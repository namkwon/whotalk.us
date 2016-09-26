import React, {Component, PropTypes} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router';


const propTypes = {
    like: PropTypes.bool
};

const defaultProps = {
    like: false
};

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            showLearnMore: false
        };
        this.timeoutId = {};

    }

    componentDidMount() {
        // trigger animation after 1.5 seconds
        this.timeoutId.t1 = setTimeout(() => {
            this.setState({ isLoaded: true });
            // then, fade in background
            this.timeoutId.t2 = setTimeout(() => {
                this.setState({ showLearnMore: true })
            }, 1000)
        }, 1000);
    }


    render() {

        const loaded = this.state.isLoaded ? 'loaded' : '';
        const animate = this.state.showLearnMore ? 'slide-up-and-down' : '';

        return (
            <div className="home-screen">
                <div className="space">
                    <div className="header-contents fadeIn">
                        <div className='logo-wrapper'>
                            <div className={`logo ${loaded}`}>
                                WHOTALK
                            </div>
                        </div>
                        <div className="site-info"><b>ANYONE</b> CAN TALK TO YOU.</div>
                        <div className="button-container">
                            <button className="ui inverted basic orange button">CREATE YOUR CHANNEL</button><Link to="/auth" className="ui inverted basic greendigi button">SIGN IN</Link>
                        </div>
                    </div>


                    <iframe className={"like-button" + (this.props.like ? '' : ' hide') } src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fvelopert%2F&width=187&layout=button_count&action=like&size=small&show_faces=true&share=true&height=46&appId=664322480382395" width="152" height="46" style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameBorder="0" allowTransparency="true"></iframe>

                    <ScrollLink to="below-header" activeClass="active" spy={true} smooth={true} offset={-50} duration={1000}>
                        <div className="learn-more">
                            <div className={`wrapper ${animate}`}>
                                <div className="text">MORE</div>
                                <i className="angle double down icon"></i>
                            </div>
                        </div>
                    </ScrollLink>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutId.t1);
        clearTimeout(this.timeoutId.t2);
    }
    
}

HomeScreen.propTypes = propTypes;
HomeScreen.defaultProps = defaultProps;

export default HomeScreen;