
const List = ({people}) => {

  return (
    <div>
        {people.map((person)=>{
            const {id, name, age, url}=person;
            return (
                <div key={id} className="flex items-center mt-4">
                
                <img src={url} alt={name} className="rounded-full w-16 h-16 ring-2 ring-orange-500 ring-offset-2" />
                
                <div className="ml-6">
                    <h2 className="font-bold text-lg">{name}</h2>
                    <h2 className="font-semibold text-sm">{age}</h2>
                </div>
            </div>
            )
        })}

    </div>
  )
}

export default List
