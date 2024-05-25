import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"India",
    street:"",
    city:"",
    state:"",
    zip:"",
    comments:false,
    candidates:false,
    offers:false,
    mode:"",
  })

  // console.log(formData);

  function chanegHandler(e){
    const{name,value,type ,checked}=e.target
    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]: type ===  'checkbox' ? checked : value
      }
    })
  }

  function submitHandler(e){
    e.preventDefault();
    console.log("Final result");
    console.log(formData);
  }

  return (
    <div className='w-screen h-full flex items-center justify-center p-6 overflow-x-hidden'>
      <form action="" onSubmit={submitHandler}>
          <label className='text-xl font-bold' htmlFor="firstName">First Name</label>
          <br />
          <input 
            className='border border-black p-2 rounded-md mb-4 w-[500px]'
            type="text" 
            placeholder='Priyanshu'
            name='firstName'
            onChange={chanegHandler}
            value={formData.firstName}
          />

          <br />

          <label className='text-xl font-bold' htmlFor="lastName">First Name</label>
          <br />
          <input 
            className='border border-black p-2 rounded-md mb-4 w-[500px]'
            type="text" 
            placeholder='Vatsal'
            name='lastName'
            onChange={chanegHandler}
            value={formData.lastName}
          />

          <br />

          <label className='text-xl font-bold' htmlFor="email">E-mail</label>
          <br />
          <input 
            className='border border-black p-2 rounded-md mb-4 w-[500px]'
            type="email" 
            placeholder='xyz@gmail.com'
            name='email'
            onChange={chanegHandler}
            value={formData.email}
          />

          <br />

          <label className='text-xl font-bold' htmlFor="country">Country</label>
          <br />
          <select 
            className='border border-black p-2 rounded-md mb-4'
            name="country" 
            id="country"
            onChange={chanegHandler}
            value={formData.country}
            >
              <option value="India">India</option>
              <option value="America">America</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>

          <br />

          <label className='text-xl font-bold' htmlFor="street">Street Address</label>
          <br />
          <input
            className='border border-black p-2 rounded-md mb-4 w-[500px]' 
            type="text" 
            placeholder='1234MainStreet'
            name='street'
            onChange={chanegHandler}
            value={formData.street}
          />

          <br />

          <label className='text-xl font-bold' htmlFor="city">City</label>
          <br />
          <input
            className='border border-black p-2 rounded-md mb-4 w-[500px]' 
            type="text" 
            placeholder='Kashipur'
            name='city'
            onChange={chanegHandler}
            value={formData.city}
          />

          <br />

          <label className='text-xl font-bold' htmlFor="state">State</label>
          <br />
          <input 
            className='border border-black p-2 rounded-md mb-4 w-[500px]'
            type="text" 
            name="state" 
            placeholder='Uttarkhand'
            onChange={chanegHandler}
            value={formData.state}
          />

          <br />

          <label className='text-xl font-bold' htmlFor="">Zip/Postal code</label>
          <br />
          <input 
            className='border border-black p-2 rounded-md mb-4 w-[500px]'
            type="text" 
            placeholder='201858'
            name='zip'
            onChange={chanegHandler}
            value={formData.zip}
          />

          <br />

          <h1 className='text-xl font-bold'>By Email</h1>

          <input 
            type="checkbox"
            id='comments'
            name='comments'
            onChange={chanegHandler}
            checked={formData.comments}
          />  
          <label  htmlFor="comments">Comments</label>

          <br />

          <input  
            type="checkbox"
            name='candidates' 
            id='candidates'
            onChange={chanegHandler}
            checked={formData.candidates}
          />  
          <label htmlFor="candidates">Candidates</label>

          <br />

          <input 
            className='mb-5'
            type="checkbox" 
            name="offers" 
            id="offers" 
            onChange={chanegHandler}
            checked={formData.offers}
          />
          <label htmlFor="offers">Offers</label>

          <br />

          <h1 className='text-xl font-bold'>Push Notification</h1>
          <p className='mb-5'>These are delivered via SMS to your mobile phone.</p>

          <input 
            type="radio" 
            onChange={chanegHandler}
            name='mode'
            value="everything"
            id='everything'
            checked={formData.mode==='Everything'}
          />

          <label htmlFor="everything">Everything</label>

          <br />

          <input 
            type="radio" 
            name='mode'
            id='everything'
            value="same as email"
            onChange={chanegHandler}
            checked={formData.mode==='Same as email'}
          />

          <label htmlFor="everything">Same as email</label>

          <br />
          
          <input 
           className='mb-5'
            type="radio" 
            name='mode'
            id='everything'
            value="no"
            onChange={chanegHandler}
            checked={formData.mode==='No push notification'}
          />

          <label htmlFor="everything">No push notification</label>

          <br />

          <button 
            className='bg-blue-500 py-2 px-5 rounded-md text-white'>Save</button>
      </form>
    </div>
  )
}

export default App
