import React, { useState } from "react";
import "./body.css"
import TextArea from "./TextArea";
import TodoItem from "./TodoItem";
function Body(){

    const [items, setItems] =useState([]);

    function addItems(inputText){
            setItems((prevItems)=>{
                return[...prevItems, inputText]
            })
    }
    function deleteItem(id){
        setItems((prevItems)=>{
            return prevItems.filter((items,index)=>{
                return index !==id;
            });
        });
    }
    return(
        <>
            <section>
                <div className="card">
                    <div>
                        <h3 className="card-title">Todo-list</h3>
                    </div>

                    <TextArea onAdd={addItems}/>
                <ul>
                {items.map((todoItem, index) => (
            <TodoItem
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
                </ul>
                </div>
            </section>
        </>
    )
}
export default Body