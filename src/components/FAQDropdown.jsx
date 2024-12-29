import React, { useState } from 'react';

const FAQDropdown = ({questionList, answerList}) => {
  const [open, setOpen] = useState(new Array(questionList.length).fill(false));

  const openAnswer = (index) => {
    setOpen(open.map((value, i) => i === index ? true : value));
  }

  const closeAnswer = (index) => {
    setOpen(open.map((value, i) => i === index ? false : value));
  }

  return (
    <div className='flex flex-col gap-4 w-3/4 h-fit self-center justify-self-center m-2'>
      <hr className='w-full border-1 border-textColor'/>
      <div className='flex flex-col gap-4'>
        {questionList.map((question, index) => (
          <div key={index} className='flex flex-col gap-2'>
            {open[index] ? (
              <div className='flex flex-row items-center gap-2 mx-2 hover:cursor-pointer' onClick={() => {closeAnswer(index)}}>
                <i className="fa-solid fa-chevron-up text-primary text-lg"></i>
                <h3 className='text-primary font-medium'>{question}</h3>
              </div>
            ) : (
              <div className='flex flex-row items-center gap-2 mx-2 hover:cursor-pointer' onClick={() => {openAnswer(index)}}>
                <i className="fa-solid fa-chevron-down text-primary text-lg" ></i>
                <h3 className='text-primary font-medium'>{question}</h3>
              </div>
            )}
            {open[index] ? (
              <p className='text-textColor mx-8'>{answerList[index]}</p>
            ) : null}
            <hr className='w-full border-1 mt-2 border-textColor'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQDropdown;