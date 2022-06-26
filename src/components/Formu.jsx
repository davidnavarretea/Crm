import { Formik, Form, Field } from 'formik'
const Formu = () => {
  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">Add Client</h1>
        <Formik
          initialValues={{
            name: '',
            business: '',
            email: '',
            phone: '',
            notes: '',
          }}
          onSubmit={(values) => {
            handleSubmit(values)
          }}
        >
          {() => (
            <Form className='mt-10'>
              <div className='mb-4'>
                <label className='text-gray-800' htmlFor='name'>Name:</label>
                <Field placeholder='Client Name' id='name' type='text' name='name' className='mt-2 block w-full p-3 bg-gray-50'/>
              </div>
              <div className='mb-4'>
                <label className='text-gray-800' htmlFor='business'>Business:</label>
                <Field placeholder='Client Business' id='business' type='text' name='business' className='mt-2 block w-full p-3 bg-gray-50'/>
              </div>
              <div className='mb-4'>
                <label className='text-gray-800' htmlFor='email'>Email:</label>
                <Field placeholder='Client Email' id='email' type='email' name='email' className='mt-2 block w-full p-3 bg-gray-50'/>
              </div>
              <div className='mb-4'>
                <label className='text-gray-800' htmlFor='phone'>Phone:</label>
                <Field placeholder='Client Phone' id='phone' type='tel' name='phone' className='mt-2 block w-full p-3 bg-gray-50'/>
              </div>
              <div className='mb-4'>
                <label className='text-gray-800' htmlFor='notes'>Notes:</label>
                <Field as='textarea' placeholder='Client Notes' id='notes' type='text' name='notes' className='mt-2 block w-full p-3 bg-gray-50 resize-none h-40'/>
              </div>
              <input type='submit' value='Add' className='mt-5 w-full bg-blue-900 p-3 text-white uppercase font-bold text-lg cursor-pointer'/>
            </Form>
          )}
        </Formik>
    </div>
  )
}

export default Formu