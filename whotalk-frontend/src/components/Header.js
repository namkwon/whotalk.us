import React, { PropTypes} from 'react';
import {Link} from 'react-router';
import autobind from 'autobind-decorator';

const propTypes = {
    transparency: PropTypes.bool
};

const defaultProps = {
    transparency: true
};

const Header = ({onSidebarToggle, transparency}) => {
    return (
            <div className="header">
                <div className="top">
                    <div
                        className={`bar ${transparency ? '' : 'show'}`}></div>
                    <Link to="/" className="top-logo">WHOTALK</Link>
                    <div className="menu-button" onClick={onSidebarToggle}>
                        <div className="icon-wrapper">
                            <i className="sidebar icon"></i>
                        </div>
                    </div>

                    <div className="search-button">
                        <div className="icon-wrapper">
                            <i className="search icon"></i>
                        </div>
                    </div>

                </div>
            </div>
    );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
