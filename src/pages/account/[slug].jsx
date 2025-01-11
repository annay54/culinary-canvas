import React, { useState } from "react";

export default function ({ slug }) {
  const navSection = [
    { name: "Profile", icon: "fa-user" }, // first element is also the default selected section
    { name: "Favourite Recipes", icon: "fa-heart" },
    { name: "Your Recipes", icon: "fa-book" },
    { name: "Your Reviews", icon: "fa-star" },
    { name: "Settings", icon: "fa-gear" },
  ]
  const [selectSection, setSelectSection] = useState(navSection[0]);
  const [showSection, setShowSection] = useState(false);

  return (
    <div className="flex flex-col md:flex-row w-full h-fit">
      {/* Side navigation bar for computer screen size */}
      <div className="hidden md:flex flex-col py-2 min-w-48 w-1/5 h-screen bg-primary text-white">
        {navSection.map((section, index) => (
          <>
            <div className={`flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer ${selectSection.name === section.name ? "bg-secondary" : ""}`} onClick={() => setSelectSection(section.name)}>
              <i className={`fa-solid ${section.icon} text-lg`}></i>
              <h3 className="text-xl">{section.name}</h3>
            </div>
            <hr className="border-white w-11/12 self-center"></hr>
          </>
        ))}
      </div>
      {/* Top navigation bar for mobile screen size */}
      <div className="md:hidden flex flex-row justify-between items-center bg-secondary text-white w-full h-12 px-6">
        <div className={`flex flex-row items-center gap-2`}>
          <i className={`fa-solid ${selectSection.icon} text-md`}></i>
          <h3 className="text-lg">{selectSection.name}</h3>
        </div>
        <i className={`fa-solid ${showSection ? "fa-chevron-up" : "fa-chevron-down"} text-lg hover:cursor-pointer`} onClick={() => setShowSection(showSection == false)}></i>
      </div>
      <div className={`md:hidden flex flex-col bg-primary text-white w-full h-fit ${showSection ? "flex" : "hidden"}`}>
        {navSection.map((section, index) => (
          <>
            <div className={`flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer`} onClick={() => {setSelectSection(section); setShowSection(false)}}>
              <i className={`fa-solid ${section.icon} text-md`}></i>
              <h3 className="text-lg">{section.name}</h3>
            </div>
            <hr className="border-white w-11/12 self-center"></hr>
          </>
        ))}
      </div>
      {/* Content displayed */}
      <div className="flex flex-col">
        <h1>{slug}</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  
  return {
      props: {
      slug: slug,
      },
  };
}