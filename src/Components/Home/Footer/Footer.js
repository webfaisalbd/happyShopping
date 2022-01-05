import React from 'react';
import style from "./Footer.module.css"

const Footer = () => {
    return (
        <div style={{ marginTop: "30px" }}>
            <footer className={style.footer}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.footerCol}>
                            <h4>company</h4>
                            <ul>
                                <li><a href="#">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">affiliate program</a></li>
                            </ul>
                        </div>
                        <div className={style.footerCol}>
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="#">order status</a></li>
                                <li><a href="#">payment options</a></li>
                            </ul>
                        </div>
                        <div className={style.footerCol}>
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="#">brand</a></li>
                                <li><a href="#">model</a></li>
                                <li><a href="#">warranty</a></li>
                                <li><a href="#">delivery hour</a></li>
                            </ul>
                        </div>
                        <div className={style.footerCol}>
                            <h4>follow us</h4>
                            <div className={style.socialLinks}>
                                <a target='_blank' href="https://www.facebook.com/faisalDotMe/"><i className="fab fa-facebook-f"></i></a>
                                <a target='_blank' href="https://github.com/webfaisalbd"><i className="fab fa-github"></i></a>
                                <a target='_blank' href="#"><i className="fab fa-instagram"></i></a>
                                <a target='_blank' target='_blank' href="https://www.linkedin.com/in/webfaisalbd/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;