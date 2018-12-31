import React from 'react';
import { connect } from 'react-redux';

import { COOKIE_CLICK } from '../kernel/store/types';
import cookie from '../assets/cookie.svg';

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({ type: COOKIE_CLICK })
});

export default connect(mapStateToProps, mapDispatchToProps)((props) => (
    <div onClick={ props.onClick }>
        <img src={ cookie } alt="Cookie"></img>
    </div>
))
