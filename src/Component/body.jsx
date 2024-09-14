
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button';
import { fetchData } from '../store/slices/productSlice';
import Card from './Card';

const Body = () => {
  const dispatch = useDispatch()
  const {products , isloading ,isError} = useSelector(state=>state.productreducer)
  console.log(products , isloading ,isError)
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (<>
    <div>
      {
        isloading ? <h1>Loading...</h1>:
        
          <Card/>
        
      }
      
    </div>
  </>
  )
}

export default Body