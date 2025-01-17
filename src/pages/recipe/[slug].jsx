import Pagination from '@/components/Pagination';
import RecipePage from '@/components/RecipePage';
import Review from '@/components/Review';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import React from 'react'

export default function ({ slug }) {
    const tags = ['Breakfast', 'Easy', 'Quick', 'Healthy', 'Pan fry'];

    // list of reviews
    const reviews = [{
        user: 'Iloverecipes',
        img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4,
        date: '05/26/2014',
        review: "This is the best pancake recipe I've ever tried. It's so easy and quick to make. I love it!",
        helpful: 20
    }, {
        user: 'foodie',
        img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 3,
        date: '06/13/2015',
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        helpful: 0
    }];

    const Instruction = ({ step, description }) => (
        <div className='flex flex-row gap-2'>
            <div className='flex w-10 h-10 shrink-0 justify-center items-center rounded-full text-primary border-2 border-primary'>
                {step}
            </div>
            <p className='flex items-center'>{description}</p>
        </div>
    );

    const Ingredient = ({ name, quantity }) => (
        <div className='flex flex-row gap-2 justify-between'>
            <p>{name}</p>
            <p className='text-textColor text-right'>{quantity}</p>
        </div>
    );

  return (
    <>
        <RecipePage recipe={slug} />
        {/* reviews */}
        <div className='flex flex-col w-full gap-4 md:px-[10%] px-[5%] py-12 bg-primary text-white'>
            <h2>Reviews</h2>
            <div className='flex flex-wrap md:flex-row px-4 items-center justify-between border-t-1.5 border-b-1.5 border-white'>
                <p>30 reviews</p>
                <div className='flex flex-row gap-2'>
                    {/* sort button */}
                    <Dropdown>
                        <DropdownTrigger>
                            <Button 
                                color='primary'
                                variant='solid'
                                className='flex flex-nowrap gap-2 items-center text-white font-normal px-4 rounded-lg'
                            >
                                <i className="fa-solid fa-sort"></i>
                                Sort
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            color='primary'
                            variant='flat'
                        >
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
                                className='flex flex-nowrap gap-2 items-center text-white font-normal px-4 rounded-lg'
                            >
                                <i className="fa-solid fa-filter"></i>
                                Filter
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            color='primary'
                            variant='flat'
                        >
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
                    type='user'
                    name={review.user} 
                    image={review.img}
                    review={review}
                />
                <hr className='border-1' />
              </div>
            ))}
            
            {/* pagination */}
            <div className='flex justify-center w-full'>
                <Pagination pageLength={reviews.length} mainColour='white' textColour='secondary' hoverColour="none" />
            </div>

        </div>
    </>
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
