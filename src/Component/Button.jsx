import React from 'react'
import { useDispatch } from 'react-redux'
import { addcounter, subcounter } from '../store/slices/counterSlices'

const Button = () => {
    const dispatch = useDispatch()
    const handleadd=()=>{
        dispatch(addcounter())
    }
    const handlesub=()=>{
        dispatch(subcounter())
    }
  return (<>
    <button onClick={handleadd}>Add</button>
    <button onClick={handlesub}>Sub</button>
  </>
  )
}

export default Button