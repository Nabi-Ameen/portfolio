
import React from "react"
import List from "./List"
import data from "./Data"
const Birthday = () => {
const [people, setPeople]= React.useState(data)
    return (
        <div className=" bg-white border w-1/3 mx-auto p-6 space-y-4 mt-8">
            <h2 className="font-semibold text-xl">{people.length} today birthday</h2>
            <List people={people}/>
            <button onClick={()=> setPeople([])} className="bg-blue-800 w-full text-center py-2 text-white font-bold text-lg rounded-sm">Clear all</button>
        </div>
    )
}

export default Birthday
