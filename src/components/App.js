import React from 'react';
import { connect } from 'react-redux';

import Cookie from './Cookie';

const mapStateToProps = state => ({
  clicks: state.cookie.clicks
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)((props) => (
  <div>
    <h1>Mega clicker!</h1>
    <p>You clicked <strong>{ props.clicks }</strong> times!</p>
    <Cookie />
  </div>
));