"use client"
import React, { use } from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {

    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url.trim(),
            "shorturl": shorturl.trim()
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((result) => {
                if (result.success) {
                    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl.trim()}`)
                    alert(result.message)
                } else {
                    alert(result.message)
                }
                seturl("")
                setshorturl("")
                console.log(result)
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to generate short URL. Please try again.');
            });
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-8 md:my-16 p-4 md:p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-xl md:text-2xl'>Generate your short URLs</h1>
            <div className='flex flex-col gap-2'>
                <input type='text'
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL'
                    onChange={e => { seturl(e.target.value) }}
                />

                <input type='text'
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your preferred short URL text'
                    onChange={e => { setshorturl(e.target.value) }}
                />
                <button
                    onClick={generate}
                    className='bg-purple-500 rounded-lg shadow-lg p-2 md:p-3 py-1 my-3 font-bold text-white'>Generate</button>

            </div>
            {generated && <><span className='font-bold text-lg'>Your Link</span><code><Link target="_blank" href={generated}>{generated}</Link></code></>}
        </div>
    )
}

export default Shorten