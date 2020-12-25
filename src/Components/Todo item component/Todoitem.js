import React,{useState}from 'react'
import {removeAction} from '../Redux/actions'
import {completedAction,saveAction} from '../Redux/actions'
import { useDispatch} from "react-redux"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheckCircle, faEdit, faBatteryFull, faBatteryThreeQuarters, faBatteryQuarter, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons'

import './Todoitem.css'

const Todoitem = ({todo:{id,description,date,isCompleted,importance}}) => {
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const [newValue,setNewValue]=useState({
        id,
        description:description,
        date:date,
        isCompleted:isCompleted,
        importance:importance
    })
    const handleChange = (e)=>{
        setNewValue({...newValue,[e.target.name]: e.target.value})
        
    }
    

    const getBatteryColor =()=>{
       return  importance===""? "gray":importance==="Never"? "green":importance==="less"? "tomato":"red"
    }
    const getBatteryChape =()=>{
       return importance===""? faBatteryEmpty:importance==="Never"? faBatteryThreeQuarters:importance==="less"? faBatteryQuarter:faBatteryFull
    }

    const editTdName =
         <form onSubmit={(e) => e.preventDefault()}>
             <div className="row">
                 <div className="col">
                     <input type="text" name="description" className="form-control" 
                                        value={newValue.description} 
                                        onChange={handleChange} 

                                        />
                 </div>
                 <div className="col">
                     <button type="submit" className="btn btn-dark mx-2 mb-2" 
                                        onClick={() => {
                                        dispatch(saveAction(newValue,id))
                                        setToggle(false)
                                        }}
                     >Save</button>
                     <button type="submit" className="btn btn-light mb-2" 
                                            onClick={()=>setToggle(false)} 
                    >Cancel</button>
                 </div>
             </div>
         </form>


     const editTdImportance =
         <div classname="form-group">
             <select className="form-control" name="importance" id="exampleFormControlSelect1" onChange={handleChange}>
                 <option>{newValue.importance}</option>
                 <option>Huge</option>
                 <option>less</option>
                 <option>Never</option>
             </select>
         </div>

    const editTdDate = <input type="date" name="date"className="form-control" 
                                        value={newValue.date} 
                                        onChange={handleChange} 

                                        />

   

    return (
        <tr>
            <th className="py-4" scope="row">{id}</th>
            <td className={isCompleted? "completed py-4":"py-4"}>{toggle? editTdName:description}</td>
            <td><button type="button" className="btn  rounded-pill my-1" onClick={()=>dispatch(completedAction(id))}><FontAwesomeIcon icon={faCheckCircle} color={isCompleted? "green":""}/></button></td>
            <td><button type="button" className="btn  rounded-pill my-1" onClick={()=>setToggle(true)} disabled={isCompleted ? true : false} ><FontAwesomeIcon icon={faEdit} /></button></td>
            <td><button type="button" className="btn  rounded-pill my-1" onClick={()=>dispatch(removeAction(id))}><FontAwesomeIcon icon={faTrash} /></button></td>
            <td className="py-4">{toggle? editTdDate:date} </td>
            <td className="py-4">{toggle? editTdImportance : <FontAwesomeIcon size="lg" color={getBatteryColor()} icon={getBatteryChape()}/>}</td>
            
        </tr>
    )

}

export default Todoitem