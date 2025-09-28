import styles from "./todoitem.module.css";

export default function Todoitem({item,todos,setTodos}){
    function handlerDelete(item){
        console.log("deelte button clicker for item",item);
        setTodos(todos.filter((todo)=>todo!==item));
        
    }
    function handleClick(name){
        console.log("item clickc",name);
       const newArray = todos.map((todo) => 
         todo.name === name ? {...todo,done: !todo.done} : todo)
            
        setTodos(newArray)
    }
    const className = item.done ? styles.completed : ""
return (

<div className ={styles.item}>
<div className={styles.itemName}>
    <span  className={className} onClick={()=>handleClick(item.name)}>{item.name}</span>
<span>
    <button onClick={()=>handlerDelete(item)}className={styles.deleteButton}>x</button>
</span>
</div>

<hr className={styles.line}/>
</div>

);
}