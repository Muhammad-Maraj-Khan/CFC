import React from "react";
import styled from "styled-components";
import { Row, Col, Form, Input, Button, Select, message } from "antd";
import emailjs from "emailjs-com"; // Import EmailJS

const { Option } = Select;

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

const FormComponent = ({ showSolution, buttonText, formTitle }) => {
  const [form] = Form.useForm(); // Initialize the form instance

  // Configure global message settings
  message.config({
    top: 50, // Position the message closer to the top (adjust as needed)
    duration: 4, // The message will disappear after 4 seconds
    maxCount: 1, // Limit to one message at a time
  });

  const handleSubmit = (values) => {
    // Add form title to values
    const formData = { ...values, form_title: formTitle };

    // Use EmailJS to send the form data
    emailjs
      .send(
        "service_udd10b5", // Your EmailJS Service ID
        "template_2px4prm", // Your EmailJS Template ID
        formData,
        "weQbqBJpX3dz5BB5F" // Your EmailJS User ID
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          // Show success message with proper vertical alignment
          message.success({
            content: "Your form has been submitted successfully!",
            className: "custom-message",
            style: {
              fontSize: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          });
          // Reset the form fields after the message is displayed
          form.resetFields();
        },
        (error) => {
          console.log("Error in sending email:", error.text);
          message.error(
            "There was an error submitting your form. Please try again.",
            3
          );
        }
      );
  };

  return (
    <FormWrapper>
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col xs={24} md={showSolution ? 12 : 24}>
            <Form.Item
              label="Name"
              name="user_name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <StyledInput placeholder="Name" />
            </Form.Item>
          </Col>
          {showSolution && (
            <Col xs={24} md={12}>
              <Form.Item
                label="Solution"
                name="user_solution"
                rules={[
                  { required: true, message: "Please select a solution!" },
                ]}
              >
                <StyledSelect placeholder="Select solution">
                  <Option value="Climate Finance">Climate Finance</Option>
                  <Option value="Teaching and Education">
                    Teaching and Education
                  </Option>
                  <Option value="Procurement">Procurement</Option>
                  <Option value="Disaster Preparedness and Response">
                    Disaster Preparedness and Response
                  </Option>
                </StyledSelect>
              </Form.Item>
            </Col>
          )}
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Phone Number (optional)" name="user_phone">
              <StyledInput placeholder="Phone Number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Country"
              name="user_country"
              rules={[
                { required: true, message: "Please select your country!" },
              ]}
            >
              <StyledSelect placeholder="Select country">
                {countries.map((country) => (
                  <Option key={country} value={country}>
                    {country}
                  </Option>
                ))}
              </StyledSelect>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Company Name"
              name="user_company"
              rules={[
                { required: true, message: "Please input your company name!" },
              ]}
            >
              <StyledInput placeholder="Example, Inc." />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Email Address"
              name="user_email"
              rules={[
                { required: true, message: "Please input your email address!" },
              ]}
            >
              <StyledInput placeholder="name@example.com" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="Message"
          name="user_message"
          rules={[{ required: true, message: "Please input your message!" }]}
        >
          <StyledTextArea
            placeholder="How can we help?"
            style={{ height: "100px" }}
          />
        </Form.Item>
        <Form.Item>
          <StyledButton htmlType="submit" className="greenbtn">
            {buttonText}
          </StyledButton>
        </Form.Item>
      </Form>
    </FormWrapper>
  );
};

export default FormComponent;

const FormWrapper = styled.div`
  padding-left: 50px;

  @media (max-width: 1080px) {
    .ant-form-item-label > label {
      font-size: 16px !important;
    }
  }

  @media (max-width: 992px) {
    padding-left: 0px;
  }
  .ant-form-item-label > label {
    color: #000;
    font-size: 18px;
  }
  .ant-select-arrow {
    color: #2e2e2e;
  }
  .greenbtn:hover {
    background: #244a32;
    transition: 0.1s ease-in;
    border: 1px solid #244a32;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 0px;
  }

  .ant-select:not(.ant-select-disabled) .ant-select-selector {
    height: 42px;
    padding-top: 6px;
    padding-bottom: 9px;
    border-radius: 5px;
  }
`;

const StyledButton = styled(Button)`
  background-color: #00b840;
  border: 1px solid #ffffff;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  padding: 8px 18px;
  height: auto;
  width: 100%;
  box-shadow: none;
  :hover {
    background-color: #00b840;
  }

  :active,
  :focus {
    background-color: #00b840;
    color: #ffffff;
    border: 1px solid #ffffff;
    box-shadow: none;
  }

  @media (min-width: 576px) {
    width: auto;
  }
`;

const StyledInput = styled(Input)`
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 5px;
`;

const StyledSelect = styled(Select)``;

const StyledTextArea = styled(Input.TextArea)`
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 5px;
`;
