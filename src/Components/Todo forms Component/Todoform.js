import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

import {addAction} from '../Redux/actions'

const Todoform = () => {
    const [newInput, setNewInput] = useState("")
    const handleChangeAction = (e) =>{
        setNewInput(e.target.value)
    }
    
    const dispatch = useDispatch()

    return (
        <div>
            <div className="card-header bg-dark d-flex justify-content-center">

                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className="form-row">
                        <div className="col-8">
                            <input type="text"
                                className="form-control"
                                placeholder="Ajouter une tache...."
                                onChange={(e)=>handleChangeAction(e)}
                                value={newInput}
                                

                            />
                        </div>
                        <div className="col">
                            <button type="submit" className="btn btn-outline-light" onClick={()=>{
                                                                                    dispatch(addAction(newInput))
                                                                                    setNewInput("")
                                                                                    }} >Ajouter</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default Todoform