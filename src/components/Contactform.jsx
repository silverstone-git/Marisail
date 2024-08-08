import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import '../sass/styles.scss';

const Contactform = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    landLineNumber: '',
    mobileNumber: '',
    email: '',
    privateTrade: '',
    role: '',
    otherRole : '',
    companyName: '',
    companyType: '',
    preferredDate: '',
    preferredTime: '',
  });

  const [show, setShow] = useState(true);
  const [errors, setErrors] = useState({});
  const [isOther, setIsOther] = useState(false); // Track "Other" selection

  const companyType = [
    "Broker", "Marina", "Boatyard", "Shipyard", "Sailing Club", "Recruiter",
    "Job Applicant", "Marine Retail(B2C)", "Marine Wholesale(B2B)", "Docks",
    "Marine Survey", "Boat Builder", "Marine Engineering", "Haulage,Transport,Logistics",
    "Berths", "Marine Chandlery"
  ];

  const preferredTime = [
    "--:--", "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00",
    "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00",
    "15:30", "16:00", "16:30", "17:00", "17:30", "18:00"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));

    // Check if "Other" is selected in description dropdown
    if(name === 'role'){
      setIsOther(value === 'Other');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'Please enter your first name.';
    if (!formData.lastName) newErrors.lastName = 'Please enter your last name.';
    if (!formData.mobileNumber) newErrors.mobileNumber = 'Please enter your mobile number.';
    if (!formData.email) newErrors.email = 'Please enter your email.';
    if (!formData.privateTrade) newErrors.privateTrade = 'Please enter your private trade.';
    if (!formData.role) newErrors.role = 'Please select your role.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log(formData);
      // Handle form submission logic
    }
  };

  return (
    <>
      <Offcanvas id='contactform' show={show} onHide={() => setShow(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Customer Id</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className='contact-form-data'>
            <h3 className='mb-4'>Contact Form</h3>
            <div className='contact-number'>
              <p>Marisail +44 (0)1326 372 865</p>
              <p>Thank you for your interest in this boat</p>
            </div>
            <p>To find out more, please complete the form below and we'll be in touch within the next working day.</p>
            <p>Alternatively, please call the listing office on the number shown above.</p>
            <p className='field-info'>Fields marked with an <sup className='text-danger'>*</sup> are required</p>
          </div>

          <Form noValidate onSubmit={handleSubmit}>
            {[
              { id: 'firstName', label: 'First Name', type: 'text', required: true },
              { id: 'lastName', label: 'Last Name', type: 'text', required: true },
              { id: 'landLineNumber', label: 'Land Line Number', type: 'text' },
              { id: 'mobileNumber', label: 'Mobile Number', type: 'text', required: true },
              { id: 'email', label: 'Email', type: 'email', required: true },
            ].map(({ id, label, type, required }) => (
              <Form.Group className="mb-4" controlId={`formBasic${id}`} key={id}>
                <Form.Label>{label} {required && <sup className='text-danger'>*</sup>}</Form.Label>
                <Form.Control
                  type={type}
                  name={id}
                  onChange={handleChange}
                  value={formData[id]}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  required={required}
                  isInvalid={!!errors[id]}
                />
                <Form.Control.Feedback type="invalid">
                  {errors[id]}
                </Form.Control.Feedback>
              </Form.Group>
            ))}

            <Form.Group className='mb-4' controlId='privateTrade'>
              <Form.Label>Private/Trade<sup className='text-danger'>*</sup></Form.Label>
              <Form.Select
                name='privateTrade'
                onChange={handleChange}
                value={formData.privateTrade}
                isInvalid={!!errors.privateTrade}
                required>
                  <option value='Private'>Private</option>
                  <option value='Trade'>Trade</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicRole">
              <Form.Label>What best describes you? <sup className='text-danger'>*</sup></Form.Label>
              <Form.Select
                name='role'
                onChange={handleChange}
                value={formData.role}
                isInvalid={!!errors.role}
                required
              >
                {["Buyer", "Seller", "Dealer", "Broker", "Valuer", "Surveyor", "Architect Designer", "Other"].map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </Form.Select>
              {isOther && (
              <Form.Group className="mb-4" controlId="formBasicRole">
                <Form.Label>Other</Form.Label>
                <Form.Control
                  type="text"
                  name='otherRole'
                  onChange={handleChange}
                  value={formData.otherRole}
                />
              </Form.Group>
            )}
              <Form.Control.Feedback type="invalid">
                {errors.role}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicCompanyName">
              <Form.Label>Company Name <span>(Optional)</span></Form.Label>
              <Form.Control
                type="text"
                name='companyName'
                onChange={handleChange}
                value={formData.companyName}
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicCompanyType">
              <Form.Label>Company Type <span>(Optional)</span></Form.Label>
              <Form.Select
                name='companyType'
                onChange={handleChange}
                value={formData.companyType}
              >
                {companyType.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Form.Select>
            </Form.Group>


            <p>If you want to arrange a viewing, please fill in the preferred date and time</p>
            <div className='preferred mb-4'>
              <Form.Group className="mb-3" controlId="formBasicPreferredDate">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                  type="date"
                  name='preferredDate'
                  onChange={handleChange}
                  value={formData.preferredDate}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPreferredTime">
                <Form.Label>Preferred Time <span>(Optional)</span></Form.Label>
                <Form.Select
                  name='preferredTime'
                  onChange={handleChange}
                  value={formData.preferredTime}
                >
                  {preferredTime.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>

            <ReCAPTCHA
              sitekey="6LfsLx8qAAAAAIOk1LV8vQG8mOu5l7_w789mfIZO"
              className='mb-4'
            />

            <div className='data mb-4'>
              <p>Your personal data will be treated in accordance with the applicable data protection legislation. Your information will only be disclosed to the Merisail Group. You can amend / withdraw or unsubscribe from Merisail communications at any time via Merisail.</p>
            </div>

            <Button type="submit" className='mb-4'>Submit</Button>
          </Form>

          <div className='login-create-data'>
            <p>Stay in touch</p>
            <p>Sign up to our e-news, save your searches, save your favourite boats, and much more...</p>
            <p><a href="">Login</a> or <a href="">create</a> your FREE account today to enjoy the benefits of Merisail.</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Contactform;
