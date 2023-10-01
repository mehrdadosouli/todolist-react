import React,{ useEffect, useState} from 'react'
import  "./Todolist.css"
export default function Todolist() {
   const [todo,setTodo]=useState('');
   const [list,setList]=useState([]);
   const [changinput,setchanginput]=useState('All')

    const handler=()=>{
        const news={id:list.length+1,title:todo,status:false}
        setList(prev=>([...prev,news]))
         setTodo('')
    }
    const setVal=(e)=>{
    setTodo(e.target.value)
    }

    const submitt=(e)=>{
     if(e.keyCode==13 && todo.length){
        handler()
     }
    }
    const subclick=()=>{
        handler()
    }
    const changes=(e)=>{
        setchanginput(e.target.value)  
    }
    const helloo=(e)=>{
       const res= list.filter(item=>{return item.id !== Number(e.target.id)})
       setList(res)
    }
    const doitem=(e)=>{
        const newTodo=[...list]
       const res= newTodo.filter(item=>{return item.id == Number(e.target.id)})
       newTodo.find(elem=>{
            if(elem.id == res[0].id){
                elem.status = !elem.status
            } 
       })
       setList(newTodo)
    }
  return (
    <>
        <div className='container'>
            <h1>TodoList</h1>
            <div className='search'>
                <div>
                    <input type="text" onKeyUp={submitt} value={todo} onChange={setVal} /><button onClick={subclick}>+</button>
                </div>
                <div>
                <select name="filter" id="filterbox" value={changinput} onChange={changes}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="NotCompleted">NotCompleted</option>
                </select>
                </div>
            </div>
            <div className='list_todo'>
                {
                    list.length && changinput=='All' ? 
                    
                    list.map(item=>{
                        return <div key={item.id} className='list_todo_item'><h1 className={item.status ? 'complate' : ''}>{item.title}</h1><button id={item.id} onClick={doitem}>ok</button><button id={item.id} onClick={helloo}>delete</button></div>
                    }) 
                    : 
                    ""
                }
                {
                    list.length && changinput=='NotCompleted' ?

                    list.filter(item=>item.status == false).map(item=>{return <div key={item.id} className='list_todo_item'><h1 className={item.status ? 'complate' : ''}>{item.title}</h1><button id={item.id} onClick={doitem}>ok</button><button id={item.id} onClick={helloo}>delete</button></div>
                   }) 
                    :
                    ""  
                }
                {
                    list.length && changinput=='Completed' ? 
                    
                    list.filter(item=>item.status == true).map(item=>{
                        return <div key={item.id} className='list_todo_item' ><h1 className={item.status ? 'complate' : ''}>{item.title}</h1><button onClick={doitem} id={item.id}>ok</button><button id={item.id} onClick={helloo} >delete</button></div>
                    }) :

                    ""
                }
            </div>
        </div>
    </>
  )
}
