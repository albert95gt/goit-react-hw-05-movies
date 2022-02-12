import { useState } from "react"

export const SearchForm = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('');
    
    const handleChange = event => {
        setSearchValue(event.currentTarget.value)
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        const normalizedSearchValue = searchValue.toLowerCase().trim();
        onSubmit(normalizedSearchValue);
        setSearchValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="search films" value={searchValue} onChange={handleChange}/>
            <button type="submit">Search</button>
        </form>
    )
}