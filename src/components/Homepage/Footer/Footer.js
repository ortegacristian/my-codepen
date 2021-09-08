import React from 'react'

export const Footer = () => {
    return (
        <footer>
            <div className="width-wrapper" id="link-footer-width-wrapper">
                <nav id="link-footer-codepen-links">
                    <h4>Website</h4>
                    <a href="/about/">About</a>
                    <a href="/documentation/">Documentation</a>
                </nav>
                <nav id="link-footer-social-links" aria-label="Social Media">
                    <h4>Social</h4>
                    <a href="/">Twitter</a>
                    <a href="/">Instagram</a>
                </nav>
                <nav id="link-footer-community-links" aria-label="Community">
                    <h4>Community</h4>
                    <a href="/news/">News</a>
                    <a href="/topics/">Topics</a>
                </nav>
                <div className="footer-copyright" id="link-footer-copyright">
                    <h1 data-component="Logo" data-test-id="logo">
                        <a href="/" className="logo">
                            (Añadir Logo)
                        </a>
                    </h1>
                    <p>©2021 By Cristian Ortega</p>
                    <p className="SiteFooterStyles_links--YkLv">
                        <a href="/terms-of-service/">Terms of Service</a> · <a href="/privacy-policy/">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}
