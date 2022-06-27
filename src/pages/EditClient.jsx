import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Formu from "../components/Formu"
const EditClient = () => {
  const [client, setClient] = useState({})
  const [loading, setLoading] = useState(true)
  const { name, business, email, phone, notes} = client
  const { id } = useParams()
  useEffect(() => {
    const getAPIClient = async () => {
        try {
            const url = `http://localhost:4000/clients/${id}`
            const request = await fetch(url)
            const result = await request.json()
            setClient(result)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    getAPIClient()
  }, [])
  return (
    <>
        {loading ?
        <div className="flex justify-center items-center h-screen">
            <div className="sk-chase">
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
                <div className="sk-chase-dot"></div>
            </div>
        </div> : (
            Object.keys(client).length === 0 ? <h1 className="font-black text-4xl text-blue-900">Client doesn't exist</h1> : (
              <>
                <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
                <p className="mt-3 text-gray-600 font-bold">Replace next fields to edit new client</p>
                <Formu client = {client} loading = {loading}/>
              </>
            )
        )}
    </>
  )
}

export default EditClient