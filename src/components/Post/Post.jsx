import React from "react";
import Button from "../Button/Button";

function Post({ title, name, text, imageSrc, buttonText,className }) {
    return (
        <div className="post-container">
            <div className="post-content">
                <div className="post-decripsion">
                    <div className="post-title">{title}</div>
                    <div className="post-name">{name}</div>
                    <div className="post-text">{text}</div>
                </div>
                {buttonText && (
                    <div className="button-post">
                        <Button className="button-text" label={buttonText} />
                    </div>
                )}
            </div>

            <div className="post-img">
                <img className="img-fluid" src={imageSrc} alt="Bài post" />
            </div>
        </div>
    );
}

export default Post;
