import React from 'react';
import "./Footer.css";
import { useSelector, useDispatch } from 'react-redux';


function FooterView() {
    const sidebarShow = useSelector((state) => state.sidebar.sidebarShow); //Boolean
    const repositionFooterClass = `${sidebarShow ? 'FooterView' : 'FooterView-max'}`;

    return (

        <footer className={ repositionFooterClass } >
            <span>I Solemnly Swear That I Am Up to No Good</span>
        </footer>
    );
}

export default FooterView;