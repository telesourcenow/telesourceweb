import Link from "next/link"


export default function Contacts2({ cls }) {
    return (
        <>
            <section id="contacts-2" className={`contacts-section division ${cls ? cls : ""}`}>
                <div className="container white-color">
                    <div className="row">
                        {/* LOCATION */}
                        <div className="col-md-4">
                            <div className="contact-box icon-sm clearfix">
                                {/* Icon */}
                                <img className="img-50" src="/images/icons/placeholder-4.png" alt="clock-icon" />
                                {/* Text */}
                                <div className="cbox-2-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Our Location:</h5>
                                    {/* Title */}
                                    <p>Merteex Processing, Inc</p>
                                    <p>121 King Street, Melbourne,</p>
                                    <p>Victoria 3000 Australia</p>
                                </div>
                            </div>
                        </div>
                        {/* QUICK CONTACTS */}
                        <div className="col-md-4">
                            <div className="contact-box icon-sm clearfix">
                                {/* Icon */}
                                <img className="img-50" src="/images/icons/contacts.png" alt="clock-icon" />
                                {/* Text */}
                                <div className="cbox-2-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Quick Contacts:</h5>
                                    {/* Text */}
                                    <p>Phone: +12 3 3456 7890</p>
                                    <p>Fax: +12 9 8765 4321</p>
                                    <p><Link href="mailto:yourdomain@mail.com">hello@yourdomain.com</Link></p>
                                </div>
                            </div>
                        </div>
                        {/* WORKING HOURS */}
                        <div className="col-md-4">
                            <div className="contact-box clearfix">
                                {/* Icon */}
                                <img className="img-50" src="/images/icons/clock-1.png" alt="clock-icon" />
                                {/* Text */}
                                <div className="cbox-2-txt">
                                    {/* Title */}
                                    <h5 className="h5-lg">Office Hours:</h5>
                                    {/* Text */}
                                    <p>Mon-Fri: 8:30AM - 7:30PM</p>
                                    <p>Saturday: 8:30AM - 3:30PM</p>
                                    <p>Sunday: 12:00PM - 5:00PM</p>
                                </div>
                            </div>
                        </div>
                    </div>	   {/* End row */}
                </div>	   {/* End container */}
            </section>

        </>
    )
}
