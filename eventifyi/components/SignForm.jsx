"use client"

import Link from "next/link"
import { useState } from "react"
import Image from "next/image"


export function SignForm() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fname || !lname || !email || !password || !phone || !city) {
      setError("All Fields are necessary")
      return;
    }
  }


  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="my-2 ">Enter the Details</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setFname(e.target.value)}
            type="text" placeholder="First Name"
            minlength="4" maxlength="10"
          />

          <input
            onChange={(e) => setLname(e.target.value)}
            type="text" placeholder="Last Name"

            minlength="4" maxlength="10" />

          <input
            onChange={(e) => setEmail(e.target.value)}

            type="text" placeholder="Email" />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password" minlength="8" maxlength="20" placeholder="password" />

          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            minlength="6" maxLength="10"
            placeholder="Phone No" />

          <input
            onChange={(e) => setCity(e.target.value)}
            type="text" minlength="13" placeholder="City" />

          <button className="	 bg-green-600 text-white font-bold cusrsor-pointer px-6 py-2" >Create Account</button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}



          < Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline"> Login Here</span>

          </Link>


          <h1 className="text-center">----- or ----- </h1>

          <button className="border border-blue-200 py-2 flex justify-center gap-2 bg-blue-100/40">

            Continue with google
            <Image src="/assests/download.png"

              width="20" height="20" ></Image>
          </button>

        </form>



      </div>
    </div>
  )
}