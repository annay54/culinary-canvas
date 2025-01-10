import React from "react";

export default function ({ slug }) {
  return (
    <div className="flex flex-row w-full h-fit">
      {/* Side navigation bar for computer screen size */}
      <div className="flex flex-col py-2 min-w-48 w-1/5 h-screen bg-primary text-white">
        <div className="flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer">
          <i className="fa-solid fa-user text-lg"></i>
          <h3 className="text-xl">Profile</h3>
        </div>
        <hr className="border-white w-11/12 self-center"></hr>
        <div className="flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer">
          <i className="fa-solid fa-heart text-lg"></i>
          <h3 className="text-xl">Favourite Recipes</h3>
        </div>
        <hr className="border-white w-11/12 self-center"></hr>
        <div className="flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer">
          <i className="fa-solid fa-book text-lg"></i>
          <h3 className="text-xl">Your Recipes</h3>
        </div>
        <hr className="border-white w-11/12 self-center"></hr>
        <div className="flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer">
          <i className="fa-solid fa-star text-lg"></i>
          <h3 className="text-xl">Your Reviews</h3>
        </div>
        <hr className="border-white w-11/12 self-center"></hr>
        <div className="flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:cursor-pointer">
          <i className="fa-solid fa-gear text-lg"></i>
          <h3 className="text-xl">Settings</h3>
        </div>
      </div>
      {/* Content displayed */}
      <div className="flex flex-col w-full">
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