import React,{useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
const url = "https://course-api.com/react-tabs-project";
const Tabs = () => {
    const [loading, setLoading]= useState(true)
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    };

    useEffect(()=>{
        fetchJobs()
    },[])

    if(loading){
        return(
            <div className='h-screen flex items-center justify-center text-3xl font-bold'>Loading...</div>
        );
    }
    const {company, dates, duties, title}= jobs[value]
    return (
        <section className='bg-sky-50 lg:w-8/12 mx-auto p-6'>
            <div className='flex flex-col items-center'>
                <h2 className='text-2xl font-bold text-gray-500 '>Expierence</h2>
                <div className='w-24 h-1 bg-sky-500 mt-1 rounded-sm'></div>
            </div>

            <div className='md:flex'>
                {/* btn container */}
                <div className=' pt-3 flex md:flex-col space-x-4 md:space-x-0 items-start md:basis-[15%] '>
                    {jobs.map((item, index)=>{
                        return(
                            <button key={item.id} onClick={()=>setValue(index)} 
                                className={`"text-sm font-semibold  md:pl-4 my-2 hover:text-sky-600 hover:border-b-2 md:hover:border-b-0 hover:border-l-0 md:hover:border-l-2 hover:border-sky-500 " ${index === value && 'active'}`}
                            >
                                {item.company}
                            </button>
                        )
                    })}
                </div>
                {/* jon info */}
                <div className='space-y-2 md:pl-4 lg:pl-8 pt-4 md:basis-[85%]'>
                    <h2 className='text-lg font-semibold text-gray-600'>{title}</h2>
                    <h2 className='text-sm font-semibold text-gray-500'>{company}</h2>
                    <p className='text-sm font-semibold text-gray-500'>{dates}</p>
                    {
                        duties.map((duty, index) =>{
                            return(
                                <div className='flex md:items-center'>
                                    <FaAngleDoubleRight className='text-sky-500 md:flex hidden' />
                                    <p className='md:px-4 lg:px-6 text-left py-2'>{duty}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Tabs