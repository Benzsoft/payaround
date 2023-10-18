import React from 'react';

function Footer() {
  return (
    <footer className="footer-area remove_flag_section">
      <div className="container mt-5 pt-1">
        <div className="">
          <div className="">
            {/* Footer Items */}

            <div id="scroll-to-top" className="scroll-to-top">
              <a href="#header" className="smooth-anchor">
                <i className="fa-solid fa-arrow-up" />
              </a>
            </div>
            <div
              className="footer-items d-flex justify-content-xxl-between "
              style={{
                padding: '0px',
                zIndex: '-1px',
              }}
            >
              {/* Logo */}
              <a className="navbar-brand" href="/">
                <img
                  style={{
                    // background: theme && '#161623',
                    // borderRadius: theme && '8px',
                    width: '200px',
                    height: '200px',
                    padding: '0px 10px ',
                  }}
                  className="footer-logo"
                  src="./PA-LOGO.png"
                  alt="Company Logo"
                />
              </a>
              <div className="social-share ml-auto ">
                <ul
                  className="d-flex list-unstyled"
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '200px',
                    width: '100%',
                  }}
                >
                  <li>
                    <a href="">
                      <i
                        style={{ color: '#369FFF' }}
                        className="fab fa-facebook"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        style={{ color: '#369FFF' }}
                        className="fab fa-telegram"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        style={{ color: '#369FFF' }}
                        className="fas fa-globe"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        style={{ color: '#369FFF' }}
                        className="fab fa-twitter"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="copyright-area py-4 text-center text-dark">
              ©2023 PAYAROUND, All Rights Reserved By
              <a href="https://berkhosconsulting.com/" target="_blank">
                Berkhosconsulting
              </a>
            </div>

            {/* Scroll To Top */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
