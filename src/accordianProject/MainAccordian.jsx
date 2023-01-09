import React from 'react'
import data from './AccordianData'
import Question from './Question'
const MainAccordian = () => {
    const [questions, setQuestions]= React.useState(data);

  return (
    <div className='lg:w-1/2 container p-6 mx-auto bg-white'>
        <h2 className='md:text-lg font-semibold'>Questions and answers about login</h2>
        <section>
            {questions.map((question)=>{
                return <Question key={question.id}{...question} />
            })}
        </section>
    </div>
  )
}

export default MainAccordian