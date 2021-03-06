import React from 'react';
import createTask from '../modals/createTask';
import { useState } from 'react';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => {
        setModal(!modal);
    }
    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}>Create Task</button>


            </div>
            <div className="task-container">

            </div>
            <createTask toggle = {toggle} modal = {modal} />
        </>
    );
};

export default TodoList;