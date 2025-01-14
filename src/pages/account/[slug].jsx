import React, { useState } from "react";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import RecipeCard from "@/components/RecipeCard";
import Pagination from "@/components/Pagination";
import Review from "@/components/Review";

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

  const Social = ({ icon, link }) => {
    return (
      <Link href={link} target='_blank' rel='noreferrer' className='flex w-10 h-10 items-center justify-center border-2 border-primary text-primary hover:no-underline hover:border-secondary hover:text-secondary'>
        <i className={`fa-brands fa-${icon}`}></i>
      </Link>
    )
  }

  const Profile = () => {
    return (
      <div className="flex flex-col gap-5 p-10 xl:px-20 w-full">
        <div className="flex flex-row items-center gap-4">
          <Avatar className="w-20 h-20" />
          <div className="flex flex-col gap-2">
            <h2 className="text-secondary">{slug}</h2>
            <h3 className="text-xl font-normal">Toronto, ON</h3>
          </div>
        </div>
        <div className="flex flex-col min-[600px]:flex-row gap-5 min-[600px]:gap-3 justify-evenly w-full my-3">
          <div className="flex flex-col gap-1 justify-center items-center bg-white p-5 lg:w-1/4 min-[850px]:px-7 min-w-36 min-h-36">
            <div className="flex flex-row items-center gap-3">
              <i className="fa-solid fa-heart text-primary text-xl"></i>
              <h3 className="text-primary text-xl">Favourite Recipes</h3>
            </div>
            <h3 className="text-xl">10</h3>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center bg-white p-5 lg:w-1/4 min-[850px]:px-7 min-w-36 min-h-36">
            <div className="flex flex-row items-center gap-3">
              <i className="fa-solid fa-book text-primary text-xl"></i>
              <h3 className="text-primary text-xl">Your Recipes</h3>
            </div>
            <h3 className="text-xl">16</h3>
          </div>
          <div className="flex flex-col gap-1 justify-center items-center bg-white p-5 lg:w-1/4 min-[850px]:px-7 min-w-36 min-h-36">
            <div className="flex flex-row items-center gap-3">
              <i className="fa-solid fa-star text-primary text-xl"></i>
              <h3 className="text-primary text-xl">Your Reviews</h3>
            </div>
            <h3 className="text-xl">32</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-secondary font-semibold">About Me</h3>
          <p>
            Here at CulinaryCanvas, we provide you delicious, easy-to-follow recipes written by fellow food enthusiasts. CulinaryCanvas forms a community of kitchen experts and food lovers who spreads inspiration to one another by sharing culinary creations and experiences.
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h3 className="text-secondary font-semibold">Contact</h3>
          <div className='flex flex-row gap-4'>
            <Social icon='facebook-f' link='https://facebook.com' />
            <Social icon='x-twitter' link='https://twitter.com' />
            <Social icon='linkedin-in' link='https://linkedin.com' />
            <Social icon='instagram' link='https://instagram.com' />
          </div>
          <div className="flex flex-row gap-3 mt-2">
            <i className="fa-solid fa-phone text-primary text-xl"></i>
            <p>123-123-1234</p>
          </div>
          <div className="flex flex-row gap-3 mt-2">
            <i className="fa-solid fa-envelope text-primary text-xl"></i>
            <p>test@gmail.com</p>
          </div>
        </div>
      </div>
    )
  }

  const FavouriteRecipes = () => {
    const recipes = [{
      name: 'Steak 1',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 2',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 3',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 4',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 5',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 6',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 7',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 8',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }];

    return (
      <div className="flex flex-col gap-5 p-10 xl:px-20 w-full">
        <h2 className="text-secondary">Favourite Recipes</h2>
        {/* Number of results shown from search */}
        <div className="text-secondary w-full">
          <hr className="border-primary border-1"></hr>
          <p className="text-textColor font-normal text-base my-2 px-4">6 out of 20 results</p>
          <hr className="border-primary border-1"></hr>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
          ))}
        </div>
        <div className="flex pt-4 pb-8 justify-center">
          <Pagination pageLength={4} mainColour="secondary" textColour="white" hoverColour="" />
        </div>
      </div>
    )
  }

  const YourRecipes = () => {
    const recipes = [{
      name: 'Steak 1',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 2',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 3',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 4',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }, {
      name: 'Steak 5',
      author: 'master_chief',
      image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
    }];

    return (
      <div className="flex flex-col gap-5 p-10 xl:px-20 w-full">
        <h2 className="text-secondary">Your Recipes</h2>
        {/* Number of results shown from search */}
        <div className="text-secondary w-full">
          <hr className="border-primary border-1"></hr>
          <p className="text-textColor font-normal text-base my-2 px-4">6 out of 20 results</p>
          <hr className="border-primary border-1"></hr>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
          ))}
        </div>
        <div className="flex pt-4 pb-8 justify-center">
          <Pagination pageLength={4} mainColour="secondary" textColour="white" hoverColour="" />
        </div>
      </div>
    )
  }

  const YourReviews = () => {
    const reviews = [{
      recipe: 'Iloverecipes',
      img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 4,
      date: '05/26/2014',
      review: "This is the best pancake recipe I've ever tried. It's so easy and quick to make. I love it!",
      helpful: 20
    }, {
      recipe: 'foodie',
      img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      rating: 3,
      date: '06/13/2015',
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      helpful: 0
    }];

    return (
      <div className="flex flex-col gap-5 p-10 xl:px-20 w-full">
        <h2 className="text-secondary">Your Reviews</h2>
        <div className='flex flex-wrap md:flex-row pl-4 items-center justify-between border-t-2 border-b-2 border-primary'>
          <p className="font-normal text-base">30 reviews</p>
          <div className='flex flex-row gap-2'>
            {/* sort button */}
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  color='primary'
                  variant='solid'
                  className='flex flex-nowrap gap-2 items-center text-textColor bg-tertiary font-normal px-4 rounded-lg'
                >
                  <i className="fa-solid fa-sort"></i>
                  Sort
                </Button>
              </DropdownTrigger>
              <DropdownMenu color='primary' variant='flat'>
                <DropdownItem className='hover:no-underline py-2'><p>Newest</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>Oldest</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>Most helpful</p></DropdownItem>
              </DropdownMenu>
            </Dropdown>

            {/* filter button */}
            <Dropdown>
              <DropdownTrigger>
                <Button 
                  color='primary'
                  variant='solid'
                  className='flex flex-nowrap gap-2 items-center text-textColor bg-tertiary font-normal px-4 rounded-lg'
                >
                  <i className="fa-solid fa-filter"></i>
                  Filter
                </Button>
              </DropdownTrigger>
              <DropdownMenu color='primary' variant='flat'>
                <DropdownItem className='hover:no-underline py-2'><p>All</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>5 stars</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>4 stars</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>3 stars</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>2 stars</p></DropdownItem>
                <DropdownItem className='hover:no-underline py-2'><p>1 star</p></DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        {/* list of reviews */}
        {reviews.map((review) => (
          <div>
            <Review 
              type='recipe'
              name={review.recipe} 
              image={review.img}
              review={review}
            />
            <hr className="border-primary border-1" />
          </div>
        ))}            
        <div className='flex justify-center w-full'>
          <Pagination pageLength={reviews.length} mainColour="secondary" textColour="white" hoverColour="" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-fit">
      {/* Side navigation bar for computer screen size */}
      <div className="hidden md:flex flex-col py-2 min-w-48 w-1/5 bg-primary text-white">
        {navSection.map((section, index) => (
          <>
            <div className={`flex flex-row items-center gap-2 px-6 py-3 hover:cursor-pointer ${selectSection.name === section.name ? "bg-secondary" : "hover:bg-secondary hover:bg-opacity-60"}`} onClick={() => setSelectSection(section)}>
              <i className={`fa-solid ${section.icon} text-lg`}></i>
              <h3 className="text-xl">{section.name}</h3>
            </div>
            <hr className="border-white w-11/12 self-center"></hr>
          </>
        ))}
      </div>
      {/* Top navigation bar for mobile screen size */}
      <div className="md:hidden flex flex-row justify-between items-center bg-secondary text-white w-full h-12 px-6 hover:cursor-pointer"
        onClick={() => setShowSection(showSection == false)}
      >
        <div className={`flex flex-row items-center gap-2`}>
          <i className={`fa-solid ${selectSection.icon} text-md`}></i>
          <h3 className="text-lg">{selectSection.name}</h3>
        </div>
        <i className={`fa-solid ${showSection ? "fa-chevron-up" : "fa-chevron-down"} text-lg`}></i>
      </div>
      <div className={`md:hidden flex flex-col bg-primary text-white w-full h-fit ${showSection ? "flex" : "hidden"}`}>
        {navSection.map((section, index) => (
          <>
            {section.name !== selectSection.name && <>
              <div className={`flex flex-row items-center gap-2 px-6 py-3 hover:bg-secondary hover:bg-opacity-60 hover:cursor-pointer`} 
                onClick={() => {setSelectSection(section); setShowSection(false)}}
              >
                <i className={`fa-solid ${section.icon} text-md`}></i>
                <h3 className="text-lg">{section.name}</h3>
              </div>
              <hr className="border-white w-11/12 self-center"></hr>
            </>}
          </>
        ))}
      </div>
      {/* Content displayed */}
      {selectSection.name === navSection[0]["name"] && <Profile />}
      {selectSection.name === navSection[1]["name"] && <FavouriteRecipes />}
      {selectSection.name === navSection[2]["name"] && <YourRecipes />}
      {selectSection.name === navSection[3]["name"] && <YourReviews />}
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