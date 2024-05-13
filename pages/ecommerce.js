import Layout from "@/components/layout/Layout"
import Brands1 from "@/components/sections/Brands1"
import Image from 'next/image';
import heroBackground from '../public/images/business-ecommerce.webp';

export default function ECommerce() {

    

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark">
                <div>

                <section 
                    style={{
                        background:
                          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(\'../images/business-ecommerce.webp\')',
                            backgroundColor: '#f8f9fb',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            paddingTop: '100px',
                            paddingBottom: '200px',
                            position: 'relative',
                            height: '100%',
                            zIndex: 3
                      }}
                    >
                        <div className="container-fluid pt-5">
                            <div className="row d-flex align-items-center">
                              <div className="col-md-12 col-lg-12 col-sm-12 text-center pt-4">
                                    <div className="txt-block pc-25 mb-40">
                                        <h4 className="h4-xl pt-2 text-white">E-Commerce</h4>
                                        <p className="text-white text-bolder"> 
                                           <br /> <br />
                                        </p>
                                        <p className="text-white text-bolder">
                                            <br /> <br />
                                        </p>
                                    </div>
                              </div>
                            </div>  
                        </div>    
                </section>


                    <section  className="pt-30 pb-30 services-section division">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">Order Assistance</h4>
                                                    <p class="para">
                                                        Telecalling assists customers with placing orders, tracking shipments, and 
                                                        resolving any issues related to their purchases.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">Customer Service</h4>
                                                    <p class="para">
                                                        Telecalling provides customer support for inquiries, returns, exchanges, and 
                                                        product-related questions.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">Sales and Promotions</h4>
                                                    <p class="para">
                                                        Telecalling is used to promote sales, discounts, and new product launches 
                                                        to customers, encouraging repeat purchases.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <div>
                                            <div class="card">
                                                <div class="content">
                                                    <svg
                                                    fill="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                    <path
                                                        d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z"
                                                    ></path>
                                                    </svg>
                                                    <h4 className="text-white">Feedback and Surveys</h4>
                                                    <p class="para">
                                                        Telecalling helps in collecting feedback from customers, conducting satisfaction 
                                                        surveys, and improving products and services based on customer insights
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	  
                    </section>
                    <Brands1 cls={"bg-purple bg-pattern "} style={1} />
                </div>
            </Layout>
        </>
    )
}


