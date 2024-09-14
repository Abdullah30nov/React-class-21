import { useState } from "react"
import { useSelector } from "react-redux"

export default function Card() {
    const [Pro,setPro] = useState([])
    const {products , isloading ,isError} = useSelector(state=>state.productreducer)
    console.log(products)
    setPro([products])
    return (
      <>
      <div className="grid grid-cols-4">
        <h1>Hello</h1>
        {
            Pro.map((products)=>{
        <div className="w=[200px] h=[500px]">
            <div className="">
                <img src={products.image} alt=""/>
            </div>
        </div>

            })
        }
      </div>
      </>
      )
    }