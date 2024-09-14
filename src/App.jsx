import { useEffect } from "react";
import Body from "./Component/body";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./store/slices/productSlice";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";

export default function App() {
  // const {products , isloading ,isError} = useSelector(state=>state.productreducer)
  // console.log(products , isloading ,isError)
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(fetchData())
  // },[])
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
    </Routes>
    </>
  )
}