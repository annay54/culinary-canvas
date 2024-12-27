import React, { useEffect, useState } from "react";
import FAQDropdown from "@/components/FAQDropdown";

export default function Contact () {
  // 0 for mobile, 1 for desktop
  const [deviceSize, setDeviceSize] = useState(0);
  const questions = [
    "What is CulinaryCanvas?",
    "How do I create an account?",
    "How do I submit a recipe?",
    "How do I share a recipe?",
    "How do I find a recipe?",
  ];
  const answers = [
    "CulinaryCanvas is a platform for food enthusiasts to share and explore recipes. We aim to create a community of kitchen experts and food lovers who spread inspiration to one another by sharing culinary creations and experiences.",
    "To create an account, click on the 'Login' button on the top right corner of the page. Then, click on the 'Sign up' button and fill in the required information.",
    "To submit a recipe, click on the 'Create recipe' button on the top right corner of the page. Fill in the required information and click on the 'Submit' button.",
    "To share a recipe, click on the 'Share' button on the recipe page. Fill in the required information and click on the 'Share' button.",
    "To find a recipe, click on the 'Explore' button on the top right corner of the page. You can search for recipes by name, ingredients, or tags.",
  ];

  useEffect(() => {
    // Detect screen size and set mobile mode
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setDeviceSize(0);
      }
      else {
        setDeviceSize(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  } , [deviceSize]);

  const Input = ({placeholder, className}) => {
    return (
      <input type="text" placeholder={placeholder} className={`p-2 border-2 rounded-md border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base ${className}`} />
    )
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-fit items-center justify-evenly gap-10 py-16 md:gap-2 md:px-8 md:py-14 bg-primary">
        <div className="flex flex-col gap-2 w-2/3 md:w-1/4 text-white">
          <h1>Contact us</h1>
          <p>Complete this form to ask questions or share your thoughts of CulinaryCanvas.</p>
        </div>
        <form className="flex flex-col gap-4 bg-white w-4/5 p-8 md:py-10 md:w-1/3 h-fit">
          {deviceSize === 0 ? (
            <div className="flex flex-col w-full gap-4">
              <Input placeholder="First name" className=""/>
              <Input placeholder="Last name" className=""/>
            </div>
          ) : (
            <div className="flex flex-row gap-3">
              <Input placeholder="First name" className="w-1/2"/>
              <Input placeholder="Last name" className="w-1/2"/>
            </div>
          )}
          <Input placeholder="Email" className=""/>
          <Input placeholder="Subject" className=""/>
          <textarea placeholder="Message" className="p-2 border-2 rounded-md border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base h-32" />
          <button className="bg-secondary font-normal text-white p-2 rounded-md">Submit</button>
        </form>
      </div>
      <div className="flex flex-col justify-self-center w-3/4 h-fit gap-4 pt-24">
        <h1>FAQ</h1>
        <p>Take a look at our most frequent questions asked by users of CulinaryCanvas. Feel free to complete the form above if your questions are not answered.</p>
      </div>
      <div className="w-full pt-6 pb-24">
        <FAQDropdown questionList={questions} answerList={answers}/>
      </div>
    </div>
  )
}