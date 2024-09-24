import React from "react";
import './footer.css';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
const Footer = () => {
    return (
        <div class="Box">
            <h1>
                Footer
            </h1>
            <div class="FooterContainer">
                <div class="Row">
                    <div class="Column">
                        <div class="Heading">About Us</div>
                        <div class="FooterLink" href="#">
                            Aim
                        </div>
                        <div class="FooterLink" href="#">
                            Vision
                        </div>
                        <div class="FooterLink" href="#">
                            Testimonials
                        </div>
                    </div>
                    <div class="Column">
                        <div class="Heading">Services</div>
                        <div class="FooterLink" href="#">
                            Writing
                        </div>
                        <div class="FooterLink" href="#">
                            Internships
                        </div>
                        <div class="FooterLink" href="#">
                            Coding
                        </div>
                        <div class="FooterLink" href="#">
                            Teaching
                        </div>
                    </div>
                    <div class="Column">
                        <div class="Heading">Contact Us</div>
                        <div class="FooterLink" href="#">
                            Uttar Pradesh
                        </div>
                        <div class="FooterLink" href="#">
                            Ahemdabad
                        </div>
                        <div class="FooterLink" href="#">
                            Indore
                        </div>
                        <div class="FooterLink" href="#">
                            Mumbai
                        </div>
                    </div>
                    <div class="Column">
                        <div class="Heading">Social Media</div>
                        <div class="FooterLink" href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </div>
                        <div class="FooterLink" href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </div>
                        <div class="FooterLink" href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </div>
                        <div class="FooterLink" href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
