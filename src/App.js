import React from 'react'
import Todoform from './Components/Todo forms Component/Todoform'
import Todolist from './Components/Todo list component/Todolist'

const App = () => {

  return (
    <div>
      <div className="card bg-light" style={{ width: "1100px", margin: "50px auto" }}>
        <Todoform  />
        <Todolist />
      </div>
    </div>
  )

}

export default App