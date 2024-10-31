import React, { useEffect, useState } from 'react';

const Pagination = ({pageLength}) => {
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
            className={`w-[40px] py-2 text-center hover:bg-primary hover:text-white ${currentPage === index + 1 ? 'bg-secondary text-white' : 'bg-transparent text-secondary'}`}
        >
            {index + 1}
        </button>);
    }


    return (
        <div className='flex flex-row gap-1'>
            <button className='text-secondary px-3 py-2 bg-transparent hover:bg-primary hover:text-white' onClick={handlePrevious}>
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
                        
                        <p className='px-4 py-2 text-secondary'>...</p>
                        
                        {middleButtons.map((button, index) => (
                            <PageButton key={index} index={button-1} />
                        ))}

                        {middleButtons.length > 0 && <p className='px-4 py-2 text-secondary'>...</p>}
                        
                        {rightButtons.map((button, index) => (
                            <PageButton key={index} index={button-1} />
                        ))}
                    </>
                )
            }

            <button className='bg-transparent text-secondary px-3 py-2 hover:bg-primary hover:text-white' onClick={handleNext}>
                <i className='fa-solid fa-arrow-right'></i>
            </button>
        </div>
    )
}

export default Pagination