import React, { useEffect, useState } from "react";

export default function Contact () {
  // 0 for mobile, 1 for desktop
  const [deviceSize, setDeviceSize] = useState(0);

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
    </div>
  )
}