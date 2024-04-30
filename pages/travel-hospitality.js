import Layout from "@/components/layout/Layout"
import PricingCommon from "@/components/sections/PricingCommon"

export default function TravelHospitality() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Travel & Hospitality"}>
                <div>
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
                                                    <h4 className="text-white">Booking Assistance</h4>
                                                    <p class="para">
                                                        Telecalling helps customers with travel bookings, including flights, 
                                                        hotels, and tours, providing personalized recommendations and assistance.
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
                                                        Telecalling provides customer support for travel-related inquiries, 
                                                        changes to bookings, and assistance during travel disruptions.
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
                                                    <h4 className="text-white">Destination Information</h4>
                                                    <p class="para">
                                                        Telecalling offers information about travel destinations, attractions, 
                                                        local customs, and travel advisories to help customers plan their trips.
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
                                                    <h4 className="text-white">Feedback and Reviews</h4>
                                                    <p class="para">
                                                        Telecalling is used to gather feedback from customers post-trip, ensuring 
                                                        a positive experience and improving services based on reviews.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>	  
                    </section>
                    <PricingCommon />
                </div>
            </Layout>
        </>
    )
}


