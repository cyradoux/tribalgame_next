import React from 'react';
import Link from "next/link";
import logo from "../../../assets/img/logo/logo.png";
import bg from "../../../assets/img/layout/bg.png";
const Footer = () => {
    return (
        <>
            <footer className={ "footer" } style={{backgroundColor: "rgba(0,0,0,0.7)", backgroundImage: `url(${bg.src})`}}>
                <div className={ "footer_top" }>
                    <div className="container">
                        <div className={"row footer_top_row"}>

                            <div className={`col-lg-4 col-md-6 footer_links`}>
                                <h4 className={ "footer_top_h4 "}> Nos coordonnées</h4>
                                <div className={"tribal_coor"}>
                                    <p>04 95 86 42 78</p>
                                    <p>exemple.exemple@gmail.com</p>
                                    <p>Chemin d'Antoing - 7500 Tournai - Belgique</p>
                                </div>

                            </div>

                            <div className={`col-lg-4 col-md-6 footer_info`}>
                                <div className={ "footer_logos_box"}>
                                    <h4 className={ "footer_top_h4" }>Suivez-nous</h4>
                                    <ul className={ "tribal_socials" }>
                                        <li className={ "tribal_socials_li" }>
                                            <Link className={ "tribal_socials_li_a" } href="https://www.instagram.com/tribalofficiel/" target="_blank"><i className={`ri-instagram-line tribal_socials_li_a_i`}></i></Link>
                                        </li>
                                        <li className={ "tribal_socials_li" }>
                                            <Link className={ "tribal_socials_li_a"  } href="https://twitter.com/tribal_Officiel" target="_blank"><i className={`ri-twitter-x-line tribal_socials_li_a_i`}></i></Link>
                                        </li>
                                        <li className={ "tribal_socials_li" }>
                                            <Link className={ "tribal_socials_li_a"  } href="https://www.tiktok.com/@saintquentinbasketball" target="_blank"><i className={`ri-tiktok-line tribal_socials_li_a_i`}></i></Link>
                                        </li>
                                    </ul>
                                    <ul className={ "tribal_socials" }>
                                        <li className={ "tribal_socials_li" }>
                                            <Link className={ "tribal_socials_li_a"  } href="https://www.linkedin.com/company/tribal/" target="_blank"><i className={`ri-linkedin-box-line ${"tribal_socials_li_a_i"}`}></i></Link>
                                        </li>
                                        <li className={ "tribal_socials_li" }>
                                            <Link className={ "tribal_socials_li_a"  } href="https://www.facebook.com/tribalofficiel" target="_blank"><i className={`ri-facebook-circle-line ${"tribal_socials_li_a_i"}`}></i></Link>
                                        </li>
                                        <li className={ "tribal_socials_li" }>
                                            <Link className={ "tribal_socials_li_a"  } href="https://www.youtube.com/@saint-quentinbasketball7185" target="_blank"><i className={`ri-youtube-line ${"tribal_socials_li_a_i"}`}></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className={`col-lg-4 col-md-6 footer_logo`}>
                                <img src={logo.src} alt=""/>
                            </div>

                            <div className="col-12" style={{textAlign: "center"}}>
                                <div className={ "footer_contact_p" }>
                                    &copy; Copyright <strong><span>tribal</span></strong>. Tous droits réservés. Crée par <a href="https://www.0001.fr/">0001 Communication</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;