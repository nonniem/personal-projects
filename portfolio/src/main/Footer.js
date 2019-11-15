import React from "react";

function Footer(props){
    const footer = {
        color: "white",
        height: "8vh",
        background: "url('https://media.giphy.com/media/aRZ4vTsHnyW6A/giphy.gif')",
        opacity: ".85",
        position: "relative",
        zIndex: "1"
    }

    const divd = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        textShadow: "-1px 0 #19EBFF, 0 1px yellow, 1px 0 limegreen, 0 -1px magenta",
        fontSize: "2em"
    }


    return(
    <div style={{...divd, ...footer}}>
                <a href="https://www.linkedin.com/in/nonnie-martin-019847149/"><i className="fa fa-linkedin" aria-hidden="false"></i></a>
                <a href="https://github.com/nonniem"><i className="fa fa-github" aria-hidden="false"></i></a>
                <a href="https://www.facebook.com/bigcheifmartin"><i className="fa fa-facebook" aria-hidden="false"></i></a>
                <a href="https://plus.google.com/u/0/112741793494510891328"><i className="fa fa-google-plus" aria-hidden="false"></i></a>




    </div>
    )
}

export default Footer;
