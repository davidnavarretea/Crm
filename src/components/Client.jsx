import { useNavigate } from 'react-router-dom'
const Client = ({client, handleDelete}) => {
    const navigate = useNavigate()
    const {name, business, email, phone, notes, id} = client
  return (
    <tr className="border-b shadow-lg border-blue-900 hover:bg-gray-50">
        <td className="p-3 text-center text-gray-800 font-semibold">{name}</td>
        <td className="p-3 text-center text-gray-800 font-semibold">{business}</td>
        <td className="p-3 text-center text-gray-800 font-semibold">{email}</td>
        <td className="p-3 text-center text-gray-800 font-semibold">{phone}</td>
        <td className="p-3 text-center text-gray-800 font-semibold">
            <button type="button" className="bg-green-900 hover:bg-green-800 text-white block w-full p-2 uppercase font-bold text-xs" onClick={() => navigate(`${id}`)}>View</button>
            <button type="button" className="bg-blue-900 hover:bg-blue-800 text-white block w-full p-2 uppercase font-bold text-xs" onClick={() => navigate(`/clients/edit/${id}`)}>Edit</button>
            <button type="button" className="bg-red-900 hover:bg-red-800 text-white block w-full p-2 uppercase font-bold text-xs" onClick={() => handleDelete(id)}>Delete</button>
        </td>
    </tr>
  )
}

export default Client