import { NavLink, Link } from 'react-router-dom';
import Iamge from '../assets/PAGE 8.webp';
import { useEffect } from 'react';
import './click_btn.css';

export default function Home() {
  return (
    <>
      <section className=" add_font remove_flag_section">
        <div className="container">
          <div className="">
            <h1 className="text-center  fs-2 text-white">
            Unlock The Haitian's <br></br>{' '}
              <span className="gradiently"> Decentralised </span>
              Future
            </h1>
            <p
              className="text-black text-center text-white"
              style={{ fontSize: '22px', fontWeight: 'bold' }}
            >
              Your 1-stop shop {' '}
              <span className="gradiently"> ReFi</span> for
              <span className="gradiently"> Global Remittance</span> and Trade+Earn Yield on {' '}
              <span className="gradiently">Your crypto</span>{' '}
            </p>
          </div>
          <div className="container-flued">
            <div class="row">
              <div class="col-12 col-md-6">
                <div className="justify-content-start flex-warp align-items-center w-100 h-100 click_video_show  ">
                  <div>
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        background: '#369FFF',
                        height: '150px',
                        width: '150px',
                      }}
                    >
                      <div
                        className="rounded-circle "
                        style={{
                          background: '#369FFF',
                          height: '100px',
                          width: '100px',
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center h-100">
                          <i
                            class="fa-solid fa-play text-white"
                            style={{ fontSize: '50px' }}
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <Link
                      className=""
                      style={{ color: '#369FFF', fontSize: '20px' }}
                    >
                      See how to it work
                    </Link>
                  </div>
                </div>
                <iframe
                  className="video_show"
                  style={{ borderRadius: '8px' }}
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/tw139KPRA-M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboar d-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div class="col-12 col-md-6 ">
                <div className="d-flex w-100 justify-content-end pe-3">
                  <div className="d-block">
                    <img className="p-4" src={Iamge} alt="Brand Logo" />
                    <div className="pt-5 d-flex justify-content-center">
                    <button
  className="btn myButton"
  style={{
    width: '70%',  // or '300px' or whatever length you want
    background: '#369FFF',
    borderRadius: '50px',
    //boxShadow: '10px 10px 14px 1px rgba(00,00,00,0.2)',
    color: '#697077 !important',
  }}
>
  <NavLink
    className="text-white fs-2"
    style={{
      color: '#fff !important',
      fontSize: '35px',
    }}
    to={'/app'}
  >
    Start Now
  </NavLink>
</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 pt-5 container-flued">
            <div class="row">
              <div class="col-12 col-md-4">
                <div className="d-block text-start p-3">
                  <i
                    class="fa-solid fa-money-check-dollar "
                    style={{
                      fontSize: '50px',
                      color: '#369FFF',
                      marginBottom: '20px',
                    }}
                  ></i>
                  <h1
                    className="text-balck"
                    style={{
                      fontSize: '23px',
                      color: '#000',
                      letterSpacing: '1px',
                    }}
                  >
                    Fast Remittiance Solutions{' '}
                  </h1>
                  <p style={{ fontSize: '20px', color: '#697077' }}>
                    {' '}
                    Send & Receive money securely and instantly through your
                    Moncash, Natcash, or bank account. Say goodbye to long
                    waiting times and enjoy quick access to your funds.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div className="d-block text-start p-3">
                  <i
                    class="fa-solid fa-users "
                    style={{
                      fontSize: '50px',
                      color: '#369FFF',
                      marginBottom: '20px',
                    }}
                  ></i>
                  <h1
                    className="text-balck"
                    style={{
                      fontSize: '22px',
                      color: '#001141',
                      letterSpacing: '1px',
                    }}
                  >
                    Transparent & Low Fees
                  </h1>
                  <p style={{ fontSize: '20px', color: '#697077' }}>
                    {' '}
                    Experience the advantage of the lowest and transparent fees
                    in the industry. Payaround offers competitive rates for all
                    transactions, ensuring that you get the best value for your
                    money with no hidden charges.
                  </p>
                </div>
              </div>
              <div class="col-12 col-md-4">
                <div className="d-block text-start p-3">
                  <i
                    class="fa-solid fa-users "
                    style={{
                      fontSize: '50px',
                      color: '#369FFF',
                      marginBottom: '20px',
                    }}
                  ></i>
                  <h1
                    className="text-balck"
                    style={{
                      fontSize: '22px',
                      color: '#001141',
                      letterSpacing: '1px',
                    }}
                  >
                    Buy & Sell Cryptocurrencies
                  </h1>
                  <p style={{ fontSize: '20px', color: '#697077' }}>
                    {' '}
                    Seize the opportunities of the crypto market. Levraging the
                    power of the Polygon blockchain, We make it easy to buy and
                    sell cryptocurrencies, securely, and at competitive rates.
                    Explore the world of digital assets with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
