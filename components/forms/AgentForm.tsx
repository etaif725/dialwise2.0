"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const AgentForm = ({ agentKey }: { agentKey: string }) => {
  // Default fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // Real estate specific fields
  const [propertyType, setPropertyType] = useState("");
  const [budget, setBudget] = useState("");
  const [rentOrBuy, setRentOrBuy] = useState("");

  // Moving specific fields
  const [moveDate, setMoveDate] = useState("");
  const [originZip, setOriginZip] = useState("");
  const [destinationZip, setDestinationZip] = useState("");
  const [homeType, setHomeType] = useState("");

  // Solar specific fields
  const [installationDate, setInstallationDate] = useState("");
  const [roofType, setRoofType] = useState("");
  const [electricityBill, setElectricityBill] = useState("");

  // Finance specific fields (Credit Repair)
  const [creditScore, setCreditScore] = useState("");
  const [loanAmount, setLoanAmount] = useState("");

  // HVAC specific fields
  const [serviceType, setServiceType] = useState("");
  const [systemAge, setSystemAge] = useState("");

  // Support specific fields
  const [issueDescription, setIssueDescription] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const [operatingSystem, setOperatingSystem] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("");

  // Medical specific fields
  const [appointmentDate, setAppointmentDate] = useState("");
  const [serviceNeeded, setServiceNeeded] = useState("");

  // Salon specific fields
  const [preferredStylist, setPreferredStylist] = useState("");
  const [appointmentType, setAppointmentType] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!firstName || !lastName || !email || !phone) {
      alert("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_MAKE_LEAD_FORM_WEBHOOK;

      if (!webhookUrl) {
        console.error("Webhook URL is not defined");
        setSubmissionMessage({ type: "error", text: "Failed to submit form. Try again later." });
        setIsLoading(false);
        return;
      }

      const payload = {
        firstName,
        lastName,
        email,
        phone,
        agentKey,
        propertyType,
        budget,
        rentOrBuy,
        moveDate,
        originZip,
        destinationZip,
        homeType,
        installationDate,
        roofType,
        electricityBill,
        creditScore,
        loanAmount,
        serviceType,
        systemAge,
        appointmentDate,
        serviceNeeded,
        preferredStylist,
        appointmentType,
        issueDescription,
        deviceType,
        operatingSystem,
        urgencyLevel
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmissionMessage({ type: "success", text: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmissionMessage({ type: "error", text: "Failed to submit form. Try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Default Fields */}
      <div>
        <label className="block text-sm font-medium text-black dark:text-white" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black dark:text-white" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black dark:text-white" htmlFor="email">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black dark:text-white" htmlFor="phone">
          Phone Number
        </label>
        <PhoneInput
          country={'us'}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputClass="phone-input text-black dark:text-white"
          containerClass="phone-container"
          buttonClass="phone-button"
          dropdownClass="phone-dropdown"
          searchClass="phone-search"
          enableSearch={true}
          disableSearchIcon={true}
          inputProps={{
            id: 'phone',
            required: true,
            className: 'w-full px-12 py-2 border rounded-md text-black dark:text-white',
          }}
        />
      </div>

      {/* Agent-Specific Fields */}

      {/* Real Estate Fields 
      {agentKey === "real-estate" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="propertyType">
              Property Type
            </label>
            <input
              type="text"
              id="propertyType"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              placeholder="e.g., Single-family, Condo"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="budget">
              Budget
            </label>
            <input
              type="text"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              placeholder="e.g., $500,000"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="rentOrBuy">
              Rent or Buy
            </label>
            <select
              id="rentOrBuy"
              value={rentOrBuy}
              onChange={(e) => setRentOrBuy(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              required
            >
              <option value="">Select</option>
              <option value="rent">Rent</option>
              <option value="buy">Buy</option>
            </select>
          </div>
        </>
      )} */}

      {/* Moving Fields 
      {agentKey === "moving" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="moveDate">
              Move Date
            </label>
            <input
              type="date"
              id="moveDate"
              value={moveDate}
              onChange={(e) => setMoveDate(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="originZip">
              Origin ZIP Code
            </label>
            <input
              type="text"
              id="originZip"
              value={originZip}
              onChange={(e) => setOriginZip(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="destinationZip">
              Destination ZIP Code
            </label>
            <input
              type="text"
              id="destinationZip"
              value={destinationZip}
              onChange={(e) => setDestinationZip(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="homeType">
              Home Type
            </label>
            <select
              id="homeType"
              value={homeType}
              onChange={(e) => setHomeType(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              required
            >
              <option value="">Select Home Type</option>
              <option value="studio">Studio</option>
              <option value="1-bedroom">1 Bedroom</option>
              <option value="2-bedroom">2 Bedrooms</option>
              <option value="3-bedroom">3 Bedrooms</option>
              <option value="4-bedroom">4 Bedrooms</option>
              <option value="5-bedroom">5 Bedrooms</option>
              <option value="6-plus-bedroom">6+ Bedrooms</option>
            </select>
          </div>
        </>
      )} */}

      {/* Solar Fields
      {agentKey === "solar" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="installationDate">
              Installation Date
            </label>
            <input
              type="date"
              id="installationDate"
              value={installationDate}
              onChange={(e) => setInstallationDate(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="roofType">
              Roof Type
            </label>
            <input
              type="text"
              id="roofType"
              value={roofType}
              onChange={(e) => setRoofType(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              placeholder="e.g., Flat, Pitched"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="electricityBill">
              Monthly Electricity Bill
            </label>
            <input
              type="text"
              id="electricityBill"
              value={electricityBill}
              onChange={(e) => setElectricityBill(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              placeholder="e.g., $150"
              required
            />
          </div>
        </>
      )}

      {agentKey === "finance" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="creditScore">
              Credit Score
            </label>
            <input
              type="number"
              id="creditScore"
              value={creditScore}
              onChange={(e) => setCreditScore(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              placeholder="e.g., 650"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="loanAmount">
              Desired Loan Amount
            </label>
            <input
              type="text"
              id="loanAmount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md text-black dark:text-white"
              placeholder="e.g., $20,000"
              required
            />
          </div>
        </>
      )} */}

      {/* Issue Description
      {agentKey === "support" && (
        <div className="space-y-4">
          
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Issue Description</label>
            <textarea
              placeholder="Describe the issue in detail"
              rows={4}
              value={issueDescription}
              onChange={(e) => setIssueDescription(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary outline-none"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Device Type</label>
            <input
              type="text"
              placeholder="Enter device type (e.g., Laptop, Phone)"
              value={deviceType}
              onChange={(e) => setDeviceType(e.target.value)}
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Operating System</label>
            <select
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary outline-none"
              value={operatingSystem}
              onChange={(e) => setOperatingSystem(e.target.value)}
              required
            >
              <option value="">Select OS</option>
              <option value="windows">Windows</option>
              <option value="mac">Mac</option>
              <option value="mac">iOs</option>
              <option value="linux">Android</option>
              <option value="linux">Linux</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-black dark:text-white">Urgency Level</label>
            <select
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-primary outline-none"
              value={urgencyLevel}
              onChange={(e) => setUrgencyLevel(e.target.value)}
              required
            >
              <option value="">Select urgency</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

        </div>
      )} */}
      
      {/* {agentKey === "hvac" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="serviceType">
              Service Type
            </label>
            <select
              id="serviceType"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md"
              required
            >
              <option value="">Select Service</option>
              <option value="repair">Repair</option>
              <option value="installation">Installation</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="systemAge">
              Age of Current System (Years)
            </label>
            <input
              type="number"
              id="systemAge"
              value={systemAge}
              onChange={(e) => setSystemAge(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
        </>
      )}

      {agentKey === "medical" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="appointmentDate">
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="serviceNeeded">
              Service Needed
            </label>
            <input
              type="text"
              id="serviceNeeded"
              value={serviceNeeded}
              onChange={(e) => setServiceNeeded(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md"
              placeholder="e.g., Dental Cleaning, Root Canal"
              required
            />
          </div>
        </>
      )}

      {agentKey === "salon" && (
        <>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="preferredStylist">
              Preferred Stylist
            </label>
            <input
              type="text"
              id="preferredStylist"
              value={preferredStylist}
              onChange={(e) => setPreferredStylist(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md"
              placeholder="e.g., Jane Doe"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black dark:text-white" htmlFor="appointmentType">
              Appointment Type
            </label>
            <input
              type="text"
              id="appointmentType"
              value={appointmentType}
              onChange={(e) => setAppointmentType(e.target.value)}
              className="block w-full px-4 py-2 border rounded-md"
              placeholder="e.g., Haircut, Spa Treatment"
              required
            />
          </div>
        </>
      )} */}

      {/* Submit Button */}
      <div className="mt-6">
        <button
          type="submit"
          className="w-full text-black hover:font-semibold hover:text-white dark:text-white gradient-button gradient-border glass-effect py-2 rounded-md hover:gradient-border hover:glass-effect transition duration-200"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Talk to our AI Agent"}
        </button>
      </div>
      {submissionMessage && (
        <p className={`mt-4 text-sm ${submissionMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {submissionMessage.text}
        </p>
      )}

      {/* Disclaimers */}
      <div className="mt-6">
        <p className="text-[10px] text-muted-foreground">
          1. By submitting this form, you consent to receive calls and SMS from DialWise AI.
          <br></br>2. We only use your information to provide you with the best experience.
          <br></br> <strong>3. Only US phone numbers are supported for this form.</strong>
        </p>
      </div>
    </form>
  );
};

export default AgentForm;
