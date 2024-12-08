import React, { useEffect, useState } from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

const Pagination = ({pageLength, mainColour = "secondary", textColour = "white"}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [leftButtons, setLeftButtons] = useState([]);
    const [rightButtons, setRightButtons] = useState([]);
    const [middleButtons, setMiddleButtons] = useState([]);

    useEffect(() => {
        handlePageChange(currentPage);
    }, [pageLength]);

    const handlePageChange = (index) => {
        console.log('index', index);
        if (pageLength >= 6)  {
            if (index <= 2) {
                console.log('here 1');
                setLeftButtons([1, 2, 3]);
                setRightButtons([pageLength]);
                setMiddleButtons([]);
            } else if (index < pageLength - 1 && (index === 3 || index === pageLength - 2)) {
                console.log('here 2');
                index === 3 ? setLeftButtons([1, 2, 3, 4]) : setLeftButtons([1]);
                index === 3 ? setRightButtons([pageLength]) : setRightButtons([index - 1, index, index + 1, pageLength]);
                setMiddleButtons([]);
            } else if (index > 3 && index < pageLength - 2) {
                console.log('here 3');
                setLeftButtons([1]);
                setMiddleButtons([index - 1, index, index + 1]);
                setRightButtons([pageLength]);
            }
            else if (index >= pageLength - 1) {
                console.log('here 4');
                setLeftButtons([1]);
                setRightButtons([pageLength - 2, pageLength - 1, pageLength]);
                setMiddleButtons([]);
            }
        }
    }

    const handleNext = () => {
        if (currentPage === pageLength) {
            return;
        }
        setCurrentPage(currentPage + 1);
        handlePageChange(currentPage + 1);
    }

    const handlePrevious = () => {
        if (currentPage === 1) {
            return;
        }
        setCurrentPage(currentPage - 1);
        handlePageChange(currentPage - 1);
    }

    const PageButton = ({index}) => {
        return (
        <button key={index} 
            onClick={() => {
                setCurrentPage(index + 1);
                handlePageChange(index + 1);
            }}
            className={`min-[400px]:w-[40px] py-2 text-center hover:bg-primary hover:text-white ${currentPage === index + 1 ? `bg-${mainColour} text-${textColour}` : `bg-transparent text-${mainColour}`}`}
        >
            {index + 1}
        </button>);
    }

    if (pageLength < 2) {
        return;
    }

    return (
        <div className='flex flex-wrap sm:flex-row sm:gap-1'>
            <div className='flex flex-row sm:gap-1'>
                {/* previous button */}
                <button 
                    className={`text-${mainColour} px-3 py-2 bg-transparent hover:bg-primary hover:text-white ${currentPage === 1 && "pointer-events-none opacity-50"}`} 
                    onClick={handlePrevious}
                >
                    <i className='fa-solid fa-arrow-left'></i>
                </button>
                
                {pageLength < 6 
                    ? [...Array(pageLength)].map((_, index) => (
                        <PageButton key={index} index={index} />
                    ))
                    : (
                        <>
                            {leftButtons.map((button, index) => (
                                <PageButton key={index} index={button-1} />
                            ))}
                            
                            <p className={`px-4 py-2 text-${mainColour}`}>...</p>
                            
                            {middleButtons.map((button, index) => (
                                <PageButton key={index} index={button-1} />
                            ))}

                            {middleButtons.length > 0 && <p className={`px-4 py-2 text-${mainColour}`}>...</p>}
                            
                            {rightButtons.map((button, index) => (
                                <PageButton key={index} index={button-1} />
                            ))}
                        </>
                    )
                }

                {/* next arrow */}
                <button 
                    className={`text-${mainColour} px-3 py-2 bg-transparent hover:bg-primary hover:text-white ${currentPage === pageLength && "pointer-events-none opacity-50"}`}  
                    onClick={handleNext}
                >
                    <i className='fa-solid fa-arrow-right'></i>
                </button>
            </div>

            {/* dropdown */}
            <Dropdown>
                        <DropdownTrigger>
                            <Button 
                                color='primary'
                                variant='solid'
                                className={`bg-transparent rounded-none border justify-between border-${mainColour} text-${mainColour}`}
                            >
                                {currentPage}
                                <i className='fa-solid fa-chevron-down'></i>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            color='primary'
                            variant='flat'
                        >
                            {[...Array(pageLength)].map((_, index) => (
                                <DropdownItem 
                                    key={index} 
                                    onClick={() => {
                                        setCurrentPage(index + 1);
                                        handlePageChange(index + 1);
                                    }} 
                                    className='hover:no-underline py-2'
                                >
                                    <p>{index + 1}</p>
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
            {/* <select 
                className={`bg-transparent rounded-none border-${mainColour} text-${mainColour}`} 
                value={currentPage}
                onChange={(e) => {
                    setCurrentPage(parseInt(e.target.value));
                    handlePageChange(parseInt(e.target.value));
                }}
            >
                {[...Array(pageLength)].map((_, index) => (
                    <option key={index} value={index + 1}>{index + 1}</option>
                ))}
            </select> */}
        </div>
    )
}

export default Pagination