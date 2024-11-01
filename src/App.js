import React from 'react'
import SearchBar from './Components/SearchBar';

export default function App() {
    const handleSubmit = (term) => {
        console.log('Do a search with', term)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
        </div>
    )
}
