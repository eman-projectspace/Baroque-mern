import React, {useContext} from 'react'
import studentContext from '../Context/StudentContext'
function UseMemohook() {

  const studContext = useContext(studentContext)

  return (
    <div>
      <h1>UseMemohook</h1>
           <h1 className='text-3xl font-bold'>MY NEW DATA</h1>
      Student name is :{studContext.name}  <br/>
      Roll no :{studContext.rollno} <br/>
      Address is :{studContext.Address}
    </div>
  )
}

export default React.memo(UseMemohook)