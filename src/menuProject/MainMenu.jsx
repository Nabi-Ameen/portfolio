import React from 'react'
import Menu from './Menu'
import Categories from './Categories'
import data from './MenuData'

const allCategories= ['all', ...new Set(data.map((item)=> item.category))]
const MainMenu = () => {
    const [menuItems, setMenuItems] = React.useState(data)
    const [categories, setCategories] = React.useState(allCategories)

    const filterItems = (category)=>{
        if(category==='all'){
            setMenuItems(data);
            return;
        }
        const newItems = data.filter((item)=> item.category === category);
        setMenuItems(newItems);
    }

    return (
        <div className='lg:w-10/12 mx-auto p-8 bg-orange-50'>
            <section>
                <div className='flex flex-col items-center'>
                    <h2>Our Menu</h2>
                    <div className='w-14 h-[3px] rounded-sm bg-orange-500'></div>
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <div>
                    <Menu items={menuItems} />
                </div>
            </section>
        </div>
    )
}

export default MainMenu 