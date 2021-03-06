import { useState } from "react"
import Formu from "../components/Formu"
import '../styles/Spinner.css'
const NewClient = () => {
  const [adding, setAdding] = useState(false)
  return (
    <>
      {adding ? (
            <div className="flex justify-center items-center h-screen">
              <div className="sk-chase">
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
                  <div className="sk-chase-dot"></div>
              </div>
            </div>
          ) : (
            <>
              <h1 className="font-black text-4xl text-blue-900">New Client</h1>
              <p className="mt-3 text-gray-600 font-bold">Fill out next fields for register new client</p>
              <Formu setAdding={setAdding}/>
            </>
          )}
    </>
  )
}

export default NewClient