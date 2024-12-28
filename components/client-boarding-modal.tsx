import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PhoneInput from "react-phone-input-2";

interface ClientBoardingProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function ClientBoardingModal({ isOpen: initialIsOpen = false, onClose }: ClientBoardingProps) {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const [step, setStep] = useState(1);
    const [phone, setPhone] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone:"",
        companyName: "",
        companyWebsite: "",
        industry: "",
        companySize: "",
        crm: "",
        budget: "",
        salesAgents: "",
        customerServiceAgents: "",
        monthlyOutboundLeads: "",
        monthlyInboundCalls: "",
        monthlyEmails: "",
        monthlySocialInteractions: "",
        averageTalkTime: "",
        aiAgents: [] as string[],
        businessDescription: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if(checked) {
            setFormData({...formData, aiAgents: [...formData.aiAgents, value]})
        } else {
            setFormData({...formData, aiAgents: formData.aiAgents.filter((agent) => agent !== value)})
        }
    }


    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log(formData);
      setIsOpen(false);
      if(onClose) {
        onClose();
      }
    };
  
    return (
        <Dialog open={isOpen} onOpenChange={(open) => {setIsOpen(open); if (!open && onClose) onClose()}}>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                <DialogTitle>Set Up Your DialWise.ai Account</DialogTitle>
                    <DialogDescription>
                        {step === 1 && "Let's get started with your basic info."}
                        {step === 2 && "Tell us more about your business."}
                        {step === 3 && "Finally, let us know your needs."}
                    </DialogDescription>
                </DialogHeader>
                <div className="h-full w-full">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {step === 1 && (
                        <>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor="firstName">First Name</Label>
                                <Input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your first name"
                                    required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="lastName">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter your last name"
                                    required
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
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
                            </div>
                            <div className="flex justify-end">
                                <Button type="button" onClick={nextStep}>
                                    Next <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </>
                      )}

                      {step === 2 && (
                          <>
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="companyName">Company Name</Label>
                                    <Input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your company name"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="companyWebsite">Company Website</Label>
                                    <Input
                                        type="url"
                                        name="companyWebsite"
                                        value={formData.companyWebsite}
                                        onChange={handleInputChange}
                                        placeholder="Enter your company website"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="industry">Industry</Label>
                                    <Select onValueChange={(value) => handleInputChange({target: {name: "industry", value}} as React.ChangeEvent<HTMLInputElement>)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select your industry" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Technology">Technology</SelectItem>
                                            <SelectItem value="Healthcare">Healthcare</SelectItem>
                                            <SelectItem value="Finance">Finance</SelectItem>
                                            <SelectItem value="Education">Education</SelectItem>
                                            <SelectItem value="Retail">Retail</SelectItem>
                                            <SelectItem value="Other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="companySize">Company Size</Label>
                                     <Select onValueChange={(value) => handleInputChange({target: {name: "companySize", value}} as React.ChangeEvent<HTMLInputElement>)}>
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select your company size" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1-10">1-10</SelectItem>
                                            <SelectItem value="11-50">11-50</SelectItem>
                                            <SelectItem value="51-200">51-200</SelectItem>
                                            <SelectItem value="201-500">201-500</SelectItem>
                                            <SelectItem value="500+">500+</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label>Do you have a CRM system?</Label>
                                    <RadioGroup onValueChange={(value) => handleInputChange({target: {name: "crm", value}} as React.ChangeEvent<HTMLInputElement>)}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Yes" id="crm-yes" />
                                            <Label htmlFor="crm-yes">Yes</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="No" id="crm-no" />
                                            <Label htmlFor="crm-no">No</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="budget">What is your budget for this project? (in USD)</Label>
                                    <Input
                                        type="number"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleInputChange}
                                        placeholder="Click to select"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                              <Button type="button" onClick={prevStep} variant="outline" className="flex justify-between">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                  Previous
                              </Button>
                              <Button type="button" onClick={nextStep} variant="outline" className="flex justify-between">
                                Next <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </div>
                          </>
                        )}

                      {step === 3 && (
                          <>
                            <div className="space-y-4">
                              {/* <div className="space-y-2">
                                <Label htmlFor="salesAgents">How many sales agents do you currently hire?</Label>
                                <Input
                                  type="number"
                                  name="salesAgents"
                                  value={formData.salesAgents}
                                  onChange={handleInputChange}
                                  placeholder="Enter the number of employees here"
                                />
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="customerServiceAgents">How many customer service agents do you currently hire?</Label>
                                <Input
                                  type="number"
                                  name="customerServiceAgents"
                                  value={formData.customerServiceAgents}
                                  onChange={handleInputChange}
                                  placeholder="Enter the number of employees here"
                                />
                              </div> */}
                              <div className="space-y-2">
                                <Label htmlFor="monthlyOutboundLeads">What is the average amount of leads you're trying to call each month?</Label>
                                <Input
                                  type="number"
                                  name="monthlyOutboundLeads"
                                  value={formData.monthlyOutboundLeads}
                                  onChange={handleInputChange}
                                  placeholder="Monthly number of outbound leads"
                                />
                              </div>
                               <div className="space-y-2">
                                <Label htmlFor="monthlyInboundCalls">What is the average amount of incoming calls each month??</Label>
                                <Input
                                  type="number"
                                  name="monthlyInboundCalls"
                                  value={formData.monthlyInboundCalls}
                                  onChange={handleInputChange}
                                  placeholder="Monthly number of inbound leads"
                                />
                              </div>
                              {/* <div className="space-y-2">
                                <Label htmlFor="monthlyEmails">How many Emails do you normally send each month?</Label>
                                <Input
                                  type="number"
                                  name="monthlyEmails"
                                  value={formData.monthlyEmails}
                                  onChange={handleInputChange}
                                    placeholder="Monthly number of SMS/Emails sent"
                                />
                              </div> */}
                               <div className="space-y-2">
                                <Label htmlFor="monthlySocialInteractions">What is the average amount of Website/Social Media interactions you get each month?</Label>
                                <Input
                                  type="number"
                                  name="monthlySocialInteractions"
                                  value={formData.monthlySocialInteractions}
                                  onChange={handleInputChange}
                                    placeholder="Monthly number of social media/chat visitors"
                                />
                              </div>
                               <div className="space-y-2">
                                <Label htmlFor="averageTalkTime">What is the average talk-time of your BEST sales agent each month? (total in minutes)</Label>
                                <Input
                                  type="number"
                                  name="averageTalkTime"
                                  value={formData.averageTalkTime}
                                  onChange={handleInputChange}
                                    placeholder="Enter average active talk time"
                                />
                              </div>
                               {/* <div className="space-y-2">
                                <Label>Choose Your AI Agents</Label>
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                          <Input type="checkbox" id="sales-ai" value="Sales AI Assistant" onChange={handleCheckboxChange}/>
                                          <Label htmlFor="sales-ai">Sales AI Assistant</Label>
                                      </div>
                                       <div className="flex items-center space-x-2">
                                          <Input type="checkbox" id="customer-service-ai" value="Customer Service AI" onChange={handleCheckboxChange}/>
                                          <Label htmlFor="customer-service-ai">Customer Service AI</Label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                        <Input type="checkbox" id="email-automation-ai" value="Email Automation AI" onChange={handleCheckboxChange} />
                                          <Label htmlFor="email-automation-ai">Email Automation AI</Label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                          <Input type="checkbox" id="sms-automation-ai" value="SMS/WhatsApp Automation AI" onChange={handleCheckboxChange} />
                                        <Label htmlFor="sms-automation-ai">SMS/WhatsApp Automation AI</Label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                          <Input type="checkbox" id="social-media-ai" value="Social Media Engagement AI" onChange={handleCheckboxChange} />
                                        <Label htmlFor="social-media-ai">Social Media Engagement AI</Label>
                                      </div>
                                      <div className="flex items-center space-x-2">
                                          <Input type="checkbox" id="crm-integration-ai" value="CRM Integration AI" onChange={handleCheckboxChange} />
                                        <Label htmlFor="crm-integration-ai">CRM Integration AI</Label>
                                      </div>
                                  </div>
                              </div> */}
                                <div className="space-y-2">
                                    <Label htmlFor="businessDescription">Tell us about your business and where it hurts the most</Label>
                                    <Textarea
                                        name="businessDescription"
                                        value={formData.businessDescription}
                                        onChange={handleInputChange}
                                        placeholder="Please tell us everything you can about your business, current pain points, and if there are any tasks you'd like us to fully automate for you."
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <Button type="button" onClick={prevStep} variant="outline">
                                  <ArrowLeft className="ml-2 h-4 w-4" />
                                    Previous
                                </Button>
                                <Button type="submit" variant="gradient" className="flex justify-between font-bold">
                                    Done!
                                </Button>
                            </div>
                          </>
                        )}
                  </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}