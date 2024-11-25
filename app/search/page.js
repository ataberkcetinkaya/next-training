"use client"
import React, { useState } from 'react'
import '../styles/search.css'
import { useRouter } from 'next/navigation';

export default function page() {

    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    const handleSearch = () => {
      if (searchTerm === '') {
          alert('Please enter a valid search term');
      } else {
          router.push(`/${searchTerm.trim().toLowerCase()}`);
      }
    };

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
