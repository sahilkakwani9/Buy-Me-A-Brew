import React, { useEffect, useState } from 'react'
import  buy  from '../utils/buy';
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import getMemos from '../utils/getMemos';


function Main() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [memo,setMemo] = useState([]);

  useEffect(() => {
    getMemos().then(res=>{
      setMemo(res)
    });
    console.log(memo)
  }, [memo])
  

  async function Buy(){
    
    let bought = await buy(name,message);
    
    // bought.wait();
    console.log('beer bought');
  }
  return (
    <div className='h-fit min-h-screen  max-w-screen text-center bg-[#242424]'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
          <h1 className='font-Inter text-white pt-28 font-extrabold text-7xl mb-16'>Buy Me A Brew</h1>
          <div className='flex flex-col gap-5 justify-center items-center'>
          <input type="text" placeholder="Name"   onChange={(e) => setName(e.target.value)} class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white rounded text-md border-2 border-black shadow outline-none focus:outline-none focus:ring focus:border-white w-96"/>
          <input type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} class="px-3 py-3 placeholder-slate-500 text-slate-600 relative bg-white bg-white rounded text-md border-2 border-black shadow outline-none focus:outline-none focus:ring focus:border-white w-96"/>
          <button type="button" onClick={Buy} className="mt-16 tracking-wider p-4 font-Inter font-extrabold text-2xl bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl">Send 1 Brew</button>
          <h1 className='font-Inter text-white pt-28 font-extrabold text-7xl mb-16'>Brews Received</h1>
          <div className='flex flex-wrap justify-around w-2/3 gap-4'>
            {memo.map((m,i)=>{
              if (i != 0){
                return <div className=''>
                  <a href="#" class="block align-center items-center min-h-[150px]  p-6 min-w-fit w-56 mb-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{m.name}</h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">{m.message}</p>
              </a>
                </div>
              }
              
          
            })}
          </div>
        </div>  
        
    </div>
  )
}

export default Main