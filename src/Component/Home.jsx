import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../store/slices/productSlice'
import Body from './body'

const Home = () => {
//     const {products , isloading ,isError} = useSelector(state=>state.productreducer)
//   console.log(products , isloading ,isError)
//   const dispatch = useDispatch()
//   useEffect(()=>{
//     dispatch(fetchData())
//   },[])
  return (
    // <div>
    //   {
    //     isloading ? <h1>Loading...</h1>:<h1>HEllo....</h1>
    //   }
    // </div>
    <>
    <Body/>
    </>
  )
}

export default Home
