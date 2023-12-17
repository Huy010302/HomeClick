import React from "react";
import Button from "../Button/Button";

function Post({ title, name, text, imageSrc, buttonText,className }) {
    return (
        <div className="post-container">
            <div className="post-content">
                <div className="post-decripsion">
                    <div className="post-title d-lg-flex d-sm-none d-xs-none">{title}</div>
                    <div className="post-name">{name}</div>
                    <div className="post-text">{text}</div>
                </div>
                {buttonText && (
                    <div className="button-post mt-3">
                        <Button className="button-text" label={buttonText} />
                    </div>
                )}
            </div>

            <div className="post-img">
                <img  src={imageSrc} alt="Bài post" />
            </div>
            <div className="post-title1 d-xl-none d-lg-none d-sm-block d-xs-block">{title}</div>
        </div>
    );
}

export default Post;
