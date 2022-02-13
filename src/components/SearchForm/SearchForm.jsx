import { useState } from "react";
import { Form, Input, SearchBtn } from "./SearchForm.styled";

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
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Movies name" value={searchValue} onChange={handleChange}/>
            <SearchBtn type="submit">Search</SearchBtn>
        </Form>
    )
}