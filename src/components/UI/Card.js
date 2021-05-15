import React from 'react';

import './Card.css';

function Card(props) {
    //here we take className as props and pass them to the div together after storing them into classes . Especially used for wrapper components
    const classes = 'card ' + props.className

  return <div className={classes}>{props.children}</div>;
}

export default Card;
