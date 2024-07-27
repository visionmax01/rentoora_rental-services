import React, { useState, useEffect } from "react";
import PersonalInfo from "../Components/RegisterForm/PersonalInfo";
import VerifyOTP from "../Components/RegisterForm/VerifyOTP";
import UploadProfilePicture from "../Components/RegisterForm/UploadProfilePicture";
import ReviewData from "../Components/RegisterForm/ReviewData";
import SuccessMessage from "../Components/RegisterForm/SuccessMessage";
import registerImg from "../img/register_humanImg.jpg";
import NavBar from "../Components/NavBar";
const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    EmailOtp: "",
    PhoneOtp: "",
    profileImage: null,
  });
  // Set the page title
  useEffect(() => {
    document.title = "Vision - Signup";
  }, []);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setCurrentStep(5);
  };

  const handleVerify = (type) => {
    console.log(`Verifying ${type} OTP:`, formData[`${type}Otp`]);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} setFormData={setFormData} />;
      case 2:
        return <VerifyOTP formData={formData} setFormData={setFormData} handleVerify={handleVerify} />;
      case 3:
        return (
          <div>
            <UploadProfilePicture formData={formData} setFormData={setFormData} />
            {formData.profileImage && (
              <img src={formData.profileImage} alt="Cropped Image Preview" className="mt-4" />
            )}
          </div>
        );
      case 4:
        return <ReviewData formData={formData} />;
      case 5:
        return <SuccessMessage />;
      default:
        return null;
    }
  };

  return (
      <div>
        <NavBar />
    <div className="w-[95%] md:w-[85%] mx-auto mt-10 rounded-lg shadow-lg flex overflow-hidden">
      <div className="w-[100%]  md:w-[70%]  bg-white">
        <div className="relative flex items-center pb-8 pt-4 rounded-tl-lg bg-gray-600 px-8">
          {[
            "Personal Info",
            "Verify OTP",
            "Upload Picture",
            "Review Data",
            "Success",
          ].map((stepName, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center justify-center">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    currentStep > index + 1 ||
                    (currentStep === 5 && index === 4)
                      ? "bg-green-500 text-white"
                      : currentStep === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  {currentStep > index + 1 || (currentStep === 5 && index === 4)
                    ? "✔️"
                    : index + 1}
                </div>
                <span className=" hidden md:block text-xs text-white w-max absolute top-[70%]">
                  {stepName}
                </span>
              </div>
              {index < 4 && (
                <div className="flex-grow h-1 w-full bg-gray-300 rounded-md relative">
                  <div
                    className={`absolute left-0 h-full transition-width duration-300 ease-in-out ${
                      currentStep > index + 1 ||
                      (currentStep === 5 && index === 3)
                        ? "bg-green-500 w-full"
                        : "w-0"
                    }`}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="w-full h-[50%]">
          <div className="relative">
            <form onSubmit={handleSubmit}>
              <div className="w-full h-full px-8 py-8">
                <div className="bg-white w-full">
                  {renderStep()}
                </div>
                <div className="w-full flex justify-between relative bottom-0">
                  {currentStep > 1 && currentStep < 5 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                    >
                      Back
                    </button>
                  )}
                  {currentStep < 4 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Next
                    </button>
                  )}
                  {currentStep === 4 && (
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-0 md:w-[30%] hidden md:block">
        <img
          className="w-full h-full object-cover object-center"
          src={registerImg}
          alt="Register"
        />
      </div>
    </div>
    </div>
  );
};

export default Register;
