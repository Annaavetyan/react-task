import React from "react";

import '../css/App.scss'

const ArticleBox = (props)=> {
    debugger
    let articleList = props.article.map((article)=> {
        return (
            <div className="articleBox">
                <div className="imgBox bgImg" style={{backgroundImage: `url(${article.img})`}}>
                     <span className='userImg' style={{backgroundImage: `url(${article.userImg})`}}></span>
                </div>
                <div className="txtBox">
                    <div>
                        <h4 className="title">DEAR DIARY</h4>
                        <p className="txt">A modern twist on journaling.</p>
                    </div>
                    <span className="plusIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23.305" height="23.305" viewBox="0 0 23.305 23.305"><circle fill="#e8e8e8" cx="11.653" cy="11.653" r="11.653"/><text fill="#303336" fontSize="16px" fontFamily= "Montserrat-Bold"  fontWeight="700" letterSpacing="0.015em" opacity="0.58" transform="translate(6.652 17.153)"><tspan x="0" y="0">+</tspan></text></svg>
                        </span>
                </div>
            </div>
        )
    });
    return (
        <div className="articleBlock">
            <div className="wrapper container-fluid">
                {articleList}
            </div>
        </div>
    )
}

export default ArticleBox