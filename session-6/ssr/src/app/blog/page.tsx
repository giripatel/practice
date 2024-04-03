'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const fetchData = async () => {
    const response = await axios.get("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml")
    return response.data;
}

const page =  () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState('')
    useEffect(()=> {
        const fun = async () => {
            const data = await fetchData();
            setLoading(false)
            setData(data)
        }
        fun()

    },[data])

    if(loading){
        return (
        <div>
            Its loading bro
        </div>
        )
    }

  return (
    <div>
      {data}
    </div>
  )
}

export default page
