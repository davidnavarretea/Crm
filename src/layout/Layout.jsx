import { Outlet, Link, useLocation } from "react-router-dom"
const Layout = () => {
  const location = useLocation()
  const currentlocation = location.pathname
  return (
    <div className="lg:flex lg:min-h-screen">
      <div className="lg:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black ml-5 lg:ml-0 lg:text-center text-white">CRM</h2>
        <nav className="mt-10">
          <Link className={`${currentlocation !== '/clients' ? 'text-blue-300' : 'text-white'} ml-5 lg:ml-0 text-2xl block mt-2 hover:text-white`} to="/clients">Clients</Link>
          <Link className={`${currentlocation !== '/clients/new' ? 'text-blue-300' : 'text-white'} ml-5 lg:ml-0 text-2xl block mt-2 hover:text-white`} to ="/clients/new">New Client</Link>
        </nav>
      </div>
      <div className="lg:w-3/4 p-10 bg-gray-100 md:h-screen overflow-scroll">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout