import Link from 'next/link'
import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import Solo from '../../event/solo'
import axios from 'axios'

function Bgmi() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [institute, setInstitute] = useState('');
  const [discord, setDiscord] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      institute: institute,
      discord: discord,
      username: username
    }

    // axios.post("https://sheet.best/api/sheets/648b0e88-3e07-4c47-81e2-02de9e7e07e4", data).then(response=>{
    axios.post("https://event-website-backend.herokuapp.com/api/bgmiSolo", data).then(response => {
      setName('');
      setEmail('');
      setInstitute('');
      setDiscord('');
      setPhone('');
      setUsername('');
      alert("YOU HAVE BEEN REGISTERED SUCCESSFULLY!");
    });
  }
  return (
    <div className='justify-center'>
      {/* <Link href='../../event/solo' to={<Solo />} alt='solo'>
        <div className='text-left flex flex-row'>
          <IoIosArrowBack className='text-xl items-center m-1' />
          <button className=' text-xl' >Back</button>
        </div>
      </Link> */}
      <div><h1 className='md:text-5xl text-2xl px-5 py-3'>BattleGrounds Mobile India</h1></div>
      <div className="p-4"></div>
      <div className="para-1 text-left white-glassmorphism px-10 py-10">
      <h5 className='text-3xl  text-left revamp pb-5 text-orange-400'>DESCRIPTION</h5>
        <div className="px-6" >
          <h6 className=' text-emerald-200'>ROUND 1</h6>
          <li>Date: 18 November 2021</li>
          <li>Day: Monday</li>
          <li>Time: 9 PM Onwards</li>
          <li>Map: Erangel-Squad</li>
          <br />
          <h6 className=' text-emerald-200'>ROUND 2</h6>
          <li>Date: 18 November 2021</li>
          <li>Day: Monday</li>
          <li>Time: After Round 1</li>
          <li>Map: Team Deathmatch</li>
          {/* <br /> */}
          {/* <h6><b>INSTRUCTIONS FOR FILLING THIS FORM</b></h6>
          <p>Everyone has to fill this Form.</p>
          <p>Team Leader should be Unique for a SQUAD/TRIO/DUO, This will be used for pairing you with your Team.</p> */}
        </div>
      </div>
      <div className='md:px-40 md:py-10 px-10 py-3'>
        <form name="BGMI-Form" action="" method="POST" className='grid grid-cols-1  md:px-10 px-2 justify-center form-font' onSubmit={handleSubmit}>
          <label className="text-[19px] kdam text-left px-2" >Name:</label>
          <input name="name" type="text" placeholder='Name' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e) => setName(e.target.value)} value={name} />
          <label className="text-[19px] kdam text-left px-2" >Phone Number:</label>
          <input name="phone-number" type="number" placeholder='Phone Number' className='white-glassmorphism my-3 bg-transparent px-3 py-5' required onChange={(e) => setPhone(e.target.value)} value={phoneNumber} />
          <label className="text-[19px] kdam text-left px-2" >E-mail:</label>
          <input name="email" type="email" placeholder='E-mail' className='white-glassmorphism bg-transparent my-3 px-3 py-5 font-nuito' required onChange={(e) => setEmail(e.target.value)} value={email} />
          <label className="text-[19px] kdam text-left px-2" >Institute:</label>
          <input name="institute" type="text" placeholder='Institute' className='white-glassmorphism bg-transparent my-3 px-3 py-5' required onChange={(e) => setInstitute(e.target.value)} value={institute} />
          <label className="text-[19px] kdam text-left px-2" >Discord Username:</label>
          <input name="discord" type="text" placeholder='Discord Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e) => setDiscord(e.target.value)} value={discord} />
          <label className="text-[19px] kdam text-left px-2" >BGMI Username:</label>
          <input name="username" type="text" placeholder='BGMI Username' className='white-glassmorphism bg-transparent px-3 my-3 py-5' required onChange={(e) => setUsername(e.target.value)} value={username} />
          <div><button type="submit" className='md:text-2xl text-lg blue-glassmorphism hover:text-orange-500 md:w-2/5 w-3/5 justify-center rounded-xl my-3 px-3 py-4'>Register</button></div>
        </form>
      </div>
    </div>
  )
}

export default Bgmi