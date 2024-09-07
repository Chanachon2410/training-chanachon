import React from 'react'
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';


const Contact = () => {
  const params = useParams();
  return (
    <Layout>
      <h1 className="font-bold text-5xl text-blue-800 mb-2">การติดต่อ</h1>
      <hr />
      <div className="flex  mt-10">
        <div className="flex flex-col space-y-6">
          <p className="text-3xl">NVC Training Center</p>
          <p className="text-2xl flex"><p className='font-bold'>Address:</p> 90 Tesa Rd., Mueang, Nakhon Pathom, 73000</p>
          <p className="text-2xl flex"><p className='font-bold'>Tel:</p> 032-252790</p>
          <p className="text-2xl flex"><p className='font-bold'>E-mail:</p> admin@nvctrainingcenter.com</p>
        </div>

        
      </div>
    </Layout>
  )
}

export default Contact