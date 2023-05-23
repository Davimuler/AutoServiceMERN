import React from 'react';
import Styles from './ContentPost.module.css'

const ContentPost = (props) => {
    return (
        <div className={Styles.Post}>

            <img src={props.img}/>
            <div className={Styles.PostTitle}>{props.title}</div>
            <div className={Styles.PostText}>{props.text}</div>
        </div>
    );
};

export default ContentPost;