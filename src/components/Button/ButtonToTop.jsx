import React, { Component } from "react";
import BoxMes from "../../assets/image/imgBoxMes.png";
import BackToTop from "../../assets/image/imgButtonToTop.png"

export class BackTopBtn extends Component {
    BackTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    render() {
        return (
            <div className="btn-more-container">
                <button className="btn">
                    <img src={BoxMes} alt="imgBoxMes" />
                </button>
                <button onClick={this.BackTop} id="btnGoTop" className="btn">
                    <img src={BackToTop} alt= "imgBackToTop" />
                </button>
            </div>
        );
    }
}

export default BackTopBtn