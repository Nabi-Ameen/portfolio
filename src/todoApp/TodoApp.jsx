import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
    let list = localStorage.getItem('list')
    if (list) {
        return JSON.parse(localStorage.getItem('list'))
    }
    else {
        return []
    }
}

const TodoApp = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({
        show: false,
        msg: '',
        type: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            //display alert
            showAlert(true, ' ', "Please enter value")
        }
        else if (name && isEditing) {
            //deal with adit
            setList(list.map((item) => {
                if (item.id === editID) {
                    return { ...item, title: name }
                }
                return item
            }))
            setName('');
            setEditID(null);
            setEditing(false);
            showAlert(true, '', 'value changed')
        }

        else {
            showAlert(true, ' ', "item added to the list")
            const newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');
        }
    }

    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg })
    }

    const clearList = () => {
        showAlert(true, ' ', 'empty list');
        setList([]);
    }

    const removeItem = (id) => {
        showAlert(true, " ", "item removed")
        setList(list.filter((item) => item.id !== id))
    }

    const editItem = (id) => {
        const specificitem = list.find((item) => item.id === id);
        setEditing(true);
        setEditID(id);
        setName(specificitem.title)
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])
    return (
        <section className='md:w-9/12 lg:w-6/12 mx-auto bg-white p-4 shadow-md sh shadow-sky-200 mt-8'>
            <form className='' onSubmit={handleSubmit}>
                {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                <h1 className='text-lg font-bold text-center pt-4'>Grocer bud</h1>

                <div className='mt-6 flex justify-between mx-auto w-[90%]  ring-1 ring-sky-400 hover:ring-sky-500 rounded-sm'>
                    <input
                        placeholder='Enter grocery!'
                        type="text"
                        className='basis-[85%] px-3 py-2 outline-none placeholder:text-gray-500 text-sm'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button type='submit' className='basis-[15%] bg-sky-400 hover:bg-sky-500 px-3 py-2 rounded-sm text-white'>{isEditing ? "Edit" : "Submit"}</button>
                </div>

            </form>
            {list.length > 0 &&
                <div>
                    <List items={list} removeItem={removeItem} editItem={editItem} />
                    <button onClick={clearList} className='mt-4 px-4 py-1 rounded-lg font-semibold bg-slate-100 transition duration-300 ease-in-out hover:bg-slate-200 text-red-600 grid mx-auto'>Clear items</button>
                </div>

            }
        </section>
    )
}

export default TodoApp
