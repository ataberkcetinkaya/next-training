"use client"
import React, { useState } from 'react'
import '../styles/search.css'
import { useRouter } from 'next/navigation';

export default function page() {

    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/${searchTerm}`);
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

  return (
    <div>
        <input className="input-area"
                placeholder="Search any coin..."
                value={searchTerm}
                onChange={handleChange} />
        <button onClick={handleSearch} className="search-button">Search</button>
    </div>
  )
}
