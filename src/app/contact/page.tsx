import React from 'react'

const page = () => {
  return (
    <div>Contact Page<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
         
        Company/Organization Name: G-tech
        </p>
      </blockquote>Address: Gulshan-e-Iqbal , RYK

      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
        Phone Number: 0310-0664728
        </div>
        <div className="text-slate-700 dark:text-slate-500">
        Email Address: rabiabasharat22gmail.com

        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page