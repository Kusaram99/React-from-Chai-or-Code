import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data = useLoaderData(); // loader method loade data as asynchronesly as when user 
                                  // click to nav button that time it start to load data from server and store into the catches


    return (
        <div className='p-4 bg-gray-600 text-white text-center text-2xl'>
            <h1>Github Followers: {data.followers} </h1>
            <img src={data.avatar_url} alt='avatar' width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {  // Loader call back function to fetch data from server
    const response = await fetch('https://api.github.com/users/Kusaram99')
    console.log("respons: ", response)
    const data = await response.json()
    console.log("data: ", data)
    return data
}