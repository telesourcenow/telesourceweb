import React, { useState } from 'react';
import Layout from "@/components/layout/Layout"
import Brands1 from '@/components/sections/Brands1';


export default function TechnologyCareers() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    // Form purpose
    const [formData, setFormData] = useState({
        fullName: '',
        totalExp: '',
        mobileNumber: '',
        relevantExp: '',
        email: '',
        currentLocation: '',
        jobTitle: 'Junior UI/UX Designer',
        resume: null,
      });
    
      const [successMessage, setSuccessMessage] = useState('');
      const [loading, setLoading] = useState(false);
    
      const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
          ...formData,
          [name]: files ? files[0] : value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const formDataToSend = new FormData();
        formDataToSend.append('fullName', formData.fullName);
        formDataToSend.append('totalExp', formData.totalExp);
        formDataToSend.append('mobileNumber', formData.mobileNumber);
        formDataToSend.append('relevantExp', formData.relevantExp);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('currentLocation', formData.currentLocation);
        formDataToSend.append('jobTitle', formData.jobTitle);
        formDataToSend.append('resume', formData.resume);
    
        try {
          const res = await fetch('https://formsubmit.co/42dc898fda0d78b77fffa739d1d980a1', {
            method: 'POST',
            body: formDataToSend,
          });
    
          if (res.ok) {
            setSuccessMessage('Message sent successfully!');
            setFormData({
              fullName: '',
              totalExp: '',
              mobileNumber: '',
              relevantExp: '',
              email: '',
              currentLocation: '',
              jobTitle: 'Junior UI/UX Designer',
              resume: null,
            });
          } else {
            setSuccessMessage('Failed to send message.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          setSuccessMessage('Failed to send message.');
        } finally {
          setLoading(false);
        }
      };
    // END FORM PURPOSE

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} headerCls="white-menu navbar-dark" breadcrumbTitle={"Technologies Careers"}>
                
                <div>
                <section>
                    <div className="container mt-5 pt-5 pb-3">
                                <div className="row text-justify pl-2 pr-2">
                                    <div className="col-sm-6 col-lg-6 mb-4">
                                        <h5> UI/UX Designer Job Description:</h5>
                                        <h6><strong>Job Title:</strong> Junior UI/UX Designer</h6>
                                        <h6><strong>Location:</strong> Pune Maharashtra</h6>
                                        <h6>Company Overview:</h6>
                                        <p>
                                            Join our innovative team as a Junior UI/UX Designer at TelesourceNow, a 
                                            leading Seivice Based company committed to creating exceptional user experiences. 
                                            We specialize in [brief company description].
                                        </p>
                                        <h6>Job Description:</h6>
                                        <p>
                                            As a Junior UI/UX Designer, you will collaborate with our design and development 
                                            teams to craft intuitive user interfaces and engaging experiences for our digital 
                                            products. You will be involved in the entire design process, from user research 
                                            and wireframing to prototyping and usability testing.
                                        </p>
                                        <h6>Key Responsibilities:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Assist in gathering and analyzing user requirements.</li>
                                            <li>Create wireframes, user flows, and prototypes to communicate design ideas.</li>
                                            <li>Collaborate with cross-functional teams to ensure designs meet user needs and business goals.</li>
                                            <li>Conduct usability testing and gather feedback to iterate on designs.</li>
                                            <li>Stay updated on industry trends and best practices in UI/UX design.</li>
                                        </ul>
                                        <h6>Requirements:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Degree in Design, Human-Computer Interaction, or a related field.</li>
                                            <li>Proficiency in design tools such as Sketch, Adobe XD, or Figma.</li>
                                            <li>Strong visual design skills with an eye for aesthetics and detail.</li>
                                            <li>Excellent communication and teamwork skills.</li>
                                            <li>Ability to work in a fast-paced, collaborative environment.</li>
                                        </ul>
                                        <h6>Preferred Qualifications:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Portfolio showcasing UI/UX projects (academic or professional).</li>
                                            <li>Basic understanding of HTML/CSS and responsive design principles.</li>
                                            <li>Familiarity with user research methodologies.</li>
                                        </ul>
                                        <h6>Preferred Qualifications:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Mentorship and training from experienced designers.</li>
                                            <li>Opportunity to work on diverse projects and gain hands-on experience.</li>
                                            <li>Competitive compensation package and career growth opportunities.</li>
                                        </ul>
                                        <br />
                                        <button className="btn btn-sm btn-primary tra-black-hover mb-4" onClick={openModal}>
                                            Apply Now
                                        </button>
                                    </div>

                                    <div className="col-sm-6 col-lg-6 mb-4">
                                        <h5> UI/UX Designer Job Description:</h5>
                                        <h6><strong>Job Title:</strong> Junior UI/UX Designer</h6>
                                        <h6><strong>Location:</strong> Pune Maharashtra</h6>
                                        <h6>Company Overview:</h6>
                                        <p>
                                            Join our innovative team as a Junior UI/UX Designer at TelesourceNow, a 
                                            leading Seivice Based company committed to creating exceptional user experiences. 
                                            We specialize in [brief company description].
                                        </p>
                                        <h6>Job Description:</h6>
                                        <p>
                                            As a Junior UI/UX Designer, you will collaborate with our design and development 
                                            teams to craft intuitive user interfaces and engaging experiences for our digital 
                                            products. You will be involved in the entire design process, from user research 
                                            and wireframing to prototyping and usability testing.
                                        </p>
                                        <h6>Key Responsibilities:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Assist in gathering and analyzing user requirements.</li>
                                            <li>Create wireframes, user flows, and prototypes to communicate design ideas.</li>
                                            <li>Collaborate with cross-functional teams to ensure designs meet user needs and business goals.</li>
                                            <li>Conduct usability testing and gather feedback to iterate on designs.</li>
                                            <li>Stay updated on industry trends and best practices in UI/UX design.</li>
                                        </ul>
                                        <h6>Requirements:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Degree in Design, Human-Computer Interaction, or a related field.</li>
                                            <li>Proficiency in design tools such as Sketch, Adobe XD, or Figma.</li>
                                            <li>Strong visual design skills with an eye for aesthetics and detail.</li>
                                            <li>Excellent communication and teamwork skills.</li>
                                            <li>Ability to work in a fast-paced, collaborative environment.</li>
                                        </ul>
                                        <h6>Preferred Qualifications:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Portfolio showcasing UI/UX projects (academic or professional).</li>
                                            <li>Basic understanding of HTML/CSS and responsive design principles.</li>
                                            <li>Familiarity with user research methodologies.</li>
                                        </ul>
                                        <h6>Preferred Qualifications:</h6>
                                        <ul style={{ listStyleType: 'disc'}}>
                                            <li>Mentorship and training from experienced designers.</li>
                                            <li>Opportunity to work on diverse projects and gain hands-on experience.</li>
                                            <li>Competitive compensation package and career growth opportunities.</li>
                                        </ul>
                                        <br />
                                        <button className="btn btn-sm btn-primary tra-black-hover mb-4" onClick={openModal}>
                                            Apply Now
                                        </button>
                                    </div>
                                </div> 
                    </div>  
                </section>
                </div>

                {showModal && (
                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Please Fill The Form</h5>
                                    <button type="button" className="close" onClick={closeModal}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit} encType="multipart/form-data">
                                    <div className="modal-body" style={{ background: '#eee' }}>
                                    <div className="row">
                                        {/* Left Column */}
                                        <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name*</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="totalExp">Total Years Of Exp*</label>
                                            <input
                                            type="number"
                                            className="form-control"
                                            id="totalExp"
                                            name="totalExp"
                                            value={formData.totalExp}
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="mobileNumber">Mobile Number*</label>
                                            <input
                                            type="tel"
                                            className="form-control"
                                            id="mobileNumber"
                                            name="mobileNumber"
                                            value={formData.mobileNumber}
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="relevantExp">Relevant Exp*</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="relevantExp"
                                            name="relevantExp"
                                            value={formData.relevantExp}
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        </div>
                                        {/* Right Column */}
                                        <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email*</label>
                                            <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="currentLocation">Current Location*</label>
                                            <input
                                            type="text"
                                            className="form-control"
                                            id="currentLocation"
                                            name="currentLocation"
                                            value={formData.currentLocation}
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="jobTitle">Job Title*</label>
                                            <select
                                            className="form-control"
                                            id="jobTitle"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            required
                                            >
                                            <option value="Junior UI/UX Designer">Junior UI/UX Designer</option>
                                            <option value="Senior UI/UX Designer">Senior UI/UX Designer</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="resume">Choose File</label>
                                            <input
                                            type="file"
                                            className="form-control-file"
                                            id="resume"
                                            name="resume"
                                            onChange={handleChange}
                                            required
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary" disabled={loading}>
                                        {loading ? 'Submitting...' : 'Submit'}
                                    </button>
                                    </div>
                                </form>
                                {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                            </div>
                        </div>
                    </div>
                )}

                <Brands1 cls={"bg-purple bg-pattern "} style={1} />
            </Layout>
        </>
    )
}


