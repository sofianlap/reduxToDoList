import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes,faCheck, faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import Todoitem from '../Todo item component/Todoitem';
import { useSelector,useDispatch } from 'react-redux'
import {filterDoneAction,filterNotDoneAction,resetAction} from '../Redux/actions'

const Todolist = () => {

  const todos = useSelector(state => state.todos)
  const dispatch= useDispatch()
  console.log(todos)




  return (
    <div>
      <div className="card-body">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th
                scope="col"
                style={{ width: '500px' }}
              >
                {/* {this.state.search ? searchForm : 'name'}{' '} */}
              </th>
              <th style={{ width: '150px' }}>
                <div class="form-check form-check-inline">
                    <boutton class="form-check-label" onClick={()=>dispatch(filterDoneAction())}>
                      <FontAwesomeIcon  color="green" icon={faCheck}/>&emsp;Done
                    </boutton>
                </div>
                <div class="form-check form-check-inline">
                    <boutton class="form-check-label" onClick={()=>dispatch(filterNotDoneAction())}>
                        <FontAwesomeIcon color="red" icon={faTimes}/>&emsp;Not Done
                      </boutton>
                </div>
                <div class="form-check form-check-inline">
                    <boutton class="form-check-label" onClick={()=>dispatch(resetAction())}>
                        <FontAwesomeIcon color="white" icon={faRedoAlt}/>&emsp;Reset
                      </boutton>
                </div>
              </th>
                  <th scope="col" colSpan="2" style={{ textAlign: 'center' }}>
                    Handle
                </th>
                  <th scope="col">Date Line</th>
                  <th scope="col">Importance</th>
            </tr>
          </thead>
              <tbody>
                {todos.map((todo, i) => (
                  <Todoitem key={todo.id} todo={todo} />
                ))}
              </tbody>
        </table>
      </div>
    </div>
  );
}

export default Todolist;