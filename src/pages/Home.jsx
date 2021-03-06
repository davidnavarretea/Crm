import { useState, useEffect } from "react"
import Client from "../components/Client"
import '../styles/Spinner.css'
import animate from '../img/1.gif'
const Home = () => {
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [deleting, setDeleting] = useState(false)
  useEffect(() => {
    const getAPIClients = async () => {
      try {
        const url = 'http://localhost:4000/clients/'
        const request = await fetch(url)
        const result = await request.json()
        setClients(result)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getAPIClients()
  }, [])
  const handleDelete = async id => {
    const confirmar = confirm('Remove Client?')
    if(confirmar){
      setDeleting(true)
      try {
        const url = `http://localhost:4000/clients/${id}`
        const request = await fetch(url, {
          method: 'DELETE'
        })
        await request.json()
        const deletingClient = clients.filter(client => client.id !== id)
        setClients(deletingClient)
        setDeleting(false)
      } catch (error) {
        
      }
    }
  }
  const userScreen = document.documentElement.clientWidth
  return (
    <>
      {deleting ? (
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
              Object.keys(clients).length === 0 ? (
                <h1 className="font-black text-4xl text-blue-900">No Clients Yet</h1>
              ) : (
                userScreen < 700 ? (
                  <div className="h-full flex justify-center">
                    <img className="w-[50%]" src={animate} alt='Rotate'/>
                  </div>
                ) : (
                  <>
                    <h1 className="font-black text-4xl text-blue-900">Clients</h1>
                    <p className="mt-3 text-gray-600 font-bold">Manage your clients</p>
                    <table className="w-full mt-5 table-auto bg-white shadow">
                      <thead className="bg-blue-900 text-white">
                        <tr className="shadow-lg">
                          <th className="p-2">Name</th>
                          <th className="p-2">Business</th>
                          <th className="p-2">Email</th>
                          <th className="p-2">Phone</th>
                          <th className="p-2">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clients.map(client => (
                          <Client
                            key={client.id}
                            client={client}
                            handleDelete={handleDelete}
                          />
                        ))}
                      </tbody>
                    </table>
                  </>
                )
              )
            )}
        </>
      )}
    </>
  )
}

export default Home