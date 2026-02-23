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
  const [currentPage, setCurrentPage] = React.useState(1);
  const [maxPage, setMaxPage] = React.useState(1);
  const numReviews = 10; // keep it 10; maximum number of reviews in a page
  
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
          // setRecipe(res.recipe);
          const parsePrepTime = res.recipe.prep_time.split(",")
          const parseCookTime = res.recipe.cook_time.split(",")
          setRecipe({
            recid: res.recipe.recid,
            recipe_name: res.recipe.recipe_name,
            author: res.recipe.author,
            about: res.recipe.about,
            img: res.recipe.img,
            rating: res.recipe.rating,
            prep_time: parsePrepTime[0].slice(1) + ":" + parsePrepTime[1].slice(0, -1), // remove the parentheses around numbers
            cook_time: parseCookTime[0].slice(1) + ":" + parseCookTime[1].slice(0, -1), // remove the parentheses around numbers
            tags: res.recipe.tags,
            notes: res.recipe.notes,
            servings: res.recipe.servings,
            steps: res.recipe.steps,
            created_at: res.recipe.created_at
          })
          setIngrs(res.ingrs);
        }
      }), {
        loading: "Loading recipe...",
      }
    )
  }, [slug])

  React.useEffect(() => {
    getRecipeReviews(slug, currentPage, numReviews).then((res) => {
      console.log("reviews are", res)
      setReviews(res.reviews)
      setMaxPage(Math.ceil(res.count / numReviews));
    })
  }, [currentPage])

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
                <Pagination pageLength={maxPage} currentPage={currentPage} setCurrentPage={setCurrentPage} mainColour='white' textColour='secondary' hoverColour="none" />
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
