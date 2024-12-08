import Pagination from '@/components/Pagination';
import RecipeTag from '@/components/RecipeTag';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import React from 'react'

export default function ({ slug }) {
    const tags = ['Breakfast', 'Easy', 'Quick', 'Healthy', 'Pan fry'];

    // list of reviews
    const reviews = [{
        user: 'Iloverecipes',
        img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 4,
        date: '05/26/14',
        review: "This is the best pancake recipe I've ever tried. It's so easy and quick to make. I love it!",
        helpful: 20
    }, {
        user: 'foodie',
        img: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        rating: 3,
        date: '06/13/15',
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        helpful: 0
    }];

    const Instruction = ({ step, description }) => (
        <div className='flex flex-row gap-2'>
            <div className='flex w-10 h-10 shrink-0 justify-center items-center rounded-full text-primary border-2 border-primary'>
                {step}
            </div>
            <p>{description}</p>
        </div>
    );

    const Ingredient = ({ name, quantity }) => (
        <div className='flex flex-row gap-2 justify-between'>
            <p>{name}</p>
            <p className='text-textColor text-right'>{quantity}</p>
        </div>
    );

    const Review = ({ user, img, rating, date, review, helpful }) => (
        <div className='flex flex-col gap-4 w-full py-8 px-4 border-b border-white'>
            {/* image and name */}
            <div className='flex flex-row gap-2 items-center'>
                <img 
                    src={img}
                    className='w-[50px] h-[50px] object-cover rounded-full'
                />
                <h3>{user}</h3>
            </div>

            {/* rating and date */}
            <div className='flex flex-row gap-4 items-center'>
                <div className='flex flex-row gap-1'>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <i className={`fa-star text-secondary ${rating >= star ? "fa-solid" : "fa-regular"}`} />
                    ))}
                </div>
                <p className='text-textColor'>{date}</p>
            </div>
            <p>{review}</p>
                
            {/* helpful button and number */}
            <div className='flex flex-row items-center text-textColor'>
                <button className='bg-transparent text-textColor'>
                    <i className='fa-solid fa-thumbs-up'></i>
                </button>
                <p>Helpful ({helpful})</p>
            </div>
        </div>
    );


  return (
    <>
        <div className='pt-16 md:mx-[10%]'>
            {/* hero */}
            <img 
                src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="pancake" 
                className='w-[80%] md:w-full h-[400px] object-cover z-0 relative'
            />
            <div className='px-4 bg-white w-fit -mt-4 ml-[4%] z-40 relative'>
                <h1 className='text-secondary'>Pancakes</h1>
            </div>

            {/* favourite button */}
            <div className='flex justify-end -mt-10'>
                <button className='p-0 bg-transparent'>
                    <i className='fa-star text-primary fa-2xl fa-regular'></i>
                </button>
            </div>

            <div className='flex flex-col gap-4 mt-8'>
                {/* author */}
                <div className='gap-2 flex flex-row items-center'>
                    <img 
                        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        className='w-[50px] h-[50px] object-cover rounded-full'
                    />
                    <h3 className='text-secondary'>perfectchef</h3>
                </div>

                <div className='flex flex-col'>
                    {/* rating */}
                    <div className='flex flex-row gap-2 items-center'>
                        <h2 className='text-primary'>4.1</h2>
                        <div className='flex flex-row gap-1'>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i className={`fa-star text-primary fa-lg ${4 >= star ? "fa-solid" : "fa-regular"}`} />
                            ))}
                        </div>
                        <div>(532)</div>
                    </div>

                    {/* time and review */}
                    <div className='flex flex-row gap-8'>
                        <div className='flex flex-row gap-2 items-center'>
                            <i className='fa-solid fa-clock text-textColor' />
                            <span>20 minutes</span>
                        </div>
                        <div className='flex flex-row gap-2 items-center'>
                            <i className='fa-solid fa-comment text-textColor' />
                            <span>30 reviews</span>
                        </div>
                    </div>
                </div>

                {/* tags */}
                <div className='flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <RecipeTag tag={tag} />
                    ))}
                </div>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className='flex flex-row gap-8 my-8'>
                {/* instructions */}
                <div className='flex flex-col gap-4 w-full'>
                    <h2 className=''>Instructions</h2>
                    <Instruction step={1} description='Mix flour, sugar, baking powder, and salt in a bowl.' />
                    <Instruction step={2} description='Add milk, egg, and butter; mix until smooth.' />
                    <Instruction step={3} description='Heat a lightly oiled griddle or frying pan over medium-high heat.' />
                    <Instruction step={4} description='Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.' />
                    <Instruction step={5} description='Brown on both sides and serve hot.' />
                </div>
                
                {/* ingredients */}
                <div className='flex flex-col gap-2 w-[265px] p-4 md:p-8 h-fit bg-primary text-white'>
                    <h2>Ingredients</h2>
                    <p className='text-textColor'>Servings: 2</p>
                    <hr />
                    <Ingredient name='All purpose flour' quantity='2 cups' />
                    <Ingredient name='Sugar' quantity='2 tbsp' />
                    <Ingredient name='Baking powder' quantity='2 tsp' />
                    <Ingredient name='Salt' quantity='1/2 tsp' />
                    <Ingredient name='Milk' quantity='1 1/2 cups' />
                    <Ingredient name='Egg' quantity='1' />
                    <Ingredient name='Butter, melted' quantity='2 tbsp' />
                </div>
            </div>
        </div>

        {/* reviews */}
        <div className='flex flex-col w-full gap-4 md:px-[10%] py-12 bg-primary text-white'>
            <h2>Reviews</h2>
            <div className='flex flex-row px-4 items-center justify-between border-t border-b border-white'>
                <p>30 reviews</p>
                <div className='flex flex-row gap-8'>
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
                <Review 
                    user={review.user} 
                    img={review.img} 
                    rating={review.rating} 
                    date={review.date} 
                    review={review.review} 
                    helpful={review.helpful} 
                />
            ))}
            
            {/* pagination */}
            <div className='flex justify-center w-full'>
                <Pagination pageLength={reviews.length} mainColour={"white"} textColour='secondary' />
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
