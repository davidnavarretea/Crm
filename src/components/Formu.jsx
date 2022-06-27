import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
const Formu = ({client, loading, setAdding}) => {
  const navigate = useNavigate()
  const newClientSchema = Yup.object().shape({
    name: Yup.string().required('Fill name field').min(3,'Name is too short'),
    business: Yup.string().required('Fill business field').min(3,'Business is too short'),
    email: Yup.string().email('Invalid email').required('Fill email field'),
    phone: Yup.number().typeError('Invalid phone number').positive('Invalid phone number').integer('Invalid phone number').required('Fill phone field').min(7,'Invalid phone number'),
    notes: Yup.string(),
  })
  const handleSubmit = async (values) => {
    setAdding(true)
    try {
      let request
      if(client.id){
        const url = `http://localhost:4000/clients/${client.id}`
        request = await fetch(url, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      } else {
        const url = 'http://localhost:4000/clients'
        request = await fetch(url, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }
      await request.json()
      navigate('/clients')
      setAdding(false)
    } catch (error) {
      console.log(error)
    }
  }
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
            <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
                <h1 className="text-blue-900 font-bold text-xl uppercase text-center">{client.name ? 'Edit Client' : 'Add Client'}</h1>
                <Formik
                  initialValues={{
                    name: client?.name ?? '',
                    business: client?.business ?? '',
                    email: client?.email ?? '',
                    phone: client?.phone ?? '',
                    notes: client?.notes ?? '',
                  }}
                  enableReinitialize={true}
                  onSubmit={ async (values, {resetForm}) => {
                    await handleSubmit(values)
                    resetForm()
                  }}
                  validationSchema={newClientSchema}
                >
                  {() => (
                    <Form className='mt-10'>
                      <div className='mb-4'>
                        <label className='text-gray-600 font-semibold ml-1' htmlFor='name'>Name:</label>
                        <Field placeholder='Client Name' id='name' type='text' name='name' className='mt-2 block w-full p-3 bg-gray-50'/>
                        <ErrorMessage name='name' component='div' className='bg-red-600 text-center my-4 text-white font-bold p-3 uppercase'/>
                      </div>
                      <div className='mb-4'>
                        <label className='text-gray-600 font-semibold ml-1' htmlFor='business'>Business:</label>
                        <Field placeholder='Client Business' id='business' type='text' name='business' className='mt-2 block w-full p-3 bg-gray-50'/>
                        <ErrorMessage name='business' component='div' className='bg-red-600 text-center my-4 text-white font-bold p-3 uppercase'/>
                      </div>
                      <div className='mb-4'>
                        <label className='text-gray-600 font-semibold ml-1' htmlFor='email'>Email:</label>
                        <Field placeholder='Client Email' id='email' type='email' name='email' className='mt-2 block w-full p-3 bg-gray-50'/>
                        <ErrorMessage name='email' component='div' className='bg-red-600 text-center my-4 text-white font-bold p-3 uppercase'/>
                      </div>
                      <div className='mb-4'>
                        <label className='text-gray-600 font-semibold ml-1' htmlFor='phone'>Phone:</label>
                        <Field placeholder='Client Phone' id='phone' type='tel' name='phone' className='mt-2 block w-full p-3 bg-gray-50'/>
                        <ErrorMessage name='phone' component='div' className='bg-red-600 text-center my-4 text-white font-bold p-3 uppercase'/>
                      </div>
                      <div className='mb-4'>
                        <label className='text-gray-600 font-semibold ml-1' htmlFor='notes'>Notes:</label>
                        <Field as='textarea' placeholder='Client Notes' id='notes' type='text' name='notes' className='mt-2 block w-full p-3 bg-gray-50 resize-none h-40'/>
                        <ErrorMessage name='notes' component='div' className='bg-red-600 text-center my-4 text-white font-bold p-3 uppercase'/>
                      </div>
                      <input type='submit' value={client.name ? 'Update' : 'Add'} className='mt-5 w-full bg-blue-900 p-3 text-white uppercase font-bold text-lg cursor-pointer'/>
                    </Form>
                  )}
                </Formik>
            </div>
        )}
    </>
  )
}
Formu.defaultProps = {
  client: {}
}
export default Formu