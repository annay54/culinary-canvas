import Pagination from '@/components/Pagination';
import RecipePage from '@/components/RecipePage';
import Review from '@/components/Review';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import React from 'react'
import toast from "react-hot-toast";
import { getRecipeById, getRecipeReviews } from "@/pages/util/recipeAPI";
import { useRouter } from "next/navigation";

export default function ({ slug }) {
  const router = useRouter();
  const [recipe, setRecipe] = React.useState(null);
  const [ingrs, setIngrs] = React.useState(null);
  const [reviews, setReviews] = React.useState([]);
  
  React.useEffect(() => {
    toast.promise(
      getRecipeById(slug).then((res) => {
        console.log("recipe is", res.recipe);
        console.log("ingrs is", res.ingrs)
        if (res.error) {
          // automatically redirects to the 404 page; fixes the 'Abort fetching component for route: "/404"' error
          router.push("/notfound")
        }
        else {
          setRecipe(res.recipe);
          setIngrs(res.ingrs);
          getRecipeReviews(slug).then((res) => {
            console.log("reviews are", res)
            setReviews(res)
          })
        }
      }), {
        loading: "Loading recipe...",
      }
    )
  }, [slug])

  return (
    <>
      {recipe && <>
        <RecipePage recipe={recipe} ingrs={ingrs} />
        {/* reviews */}
        <div className='flex flex-col w-full gap-4 md:px-[10%] px-[5%] py-12 bg-primary text-white'>
              <h2>Reviews</h2>
              <div className='flex flex-wrap md:flex-row px-4 items-center justify-between border-t-1.5 border-b-1.5 border-white'>
                  <p>{reviews.length} reviews</p>
                  <div className='flex flex-row gap-2'>
                      {/* sort button */}
                      <Dropdown>
                          <DropdownTrigger>
                              <Button 
                                  color='primary'
                                  variant='solid'
                                  className='flex flex-nowrap gap-2 items-center text-white font-normal px-4 rounded-lg'
                              >
                                  <i aria-hidden className="fa-solid fa-sort"></i>
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
                                  <i aria-hidden className="fa-solid fa-filter"></i>
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
              {reviews.length === 0 &&
                <div className='text-textColor flex flex-col justify-center items-center w-full'>
                  <p className="my-10 text-white">No reviews added yet.</p>
                  <hr className='w-full border-t-1 border-b-0'/>
                </div>
              }
              {reviews.map((review, index) => (
                  <div key={index}>
                    <Review 
                      type='user'
                      name={review.author} 
                      uid={review.User.uid}
                      image={review.User.profile_img}
                      review={review}
                  />
                  <hr className='border-t-1 border-b-0' />
                </div>
              ))}
              
              {/* pagination */}
              <div className='flex justify-center w-full'>
                  <Pagination pageLength={reviews.length} mainColour='white' textColour='secondary' hoverColour="none" />
              </div>

        </div>
      </>}
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
