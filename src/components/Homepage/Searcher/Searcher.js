import React from 'react';
import { useForm } from '../../../hooks/useForm';
import { useHistory } from 'react-router-dom';

export const Searcher = () => {

    const [formValues, handleInputChange] = useForm({
        searchPen: ''
    });

    const history = useHistory();

    const { searchPen } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`/search/pens?q=${searchPen}`);
    }

    return (
        <div className='searcherBar'>
            <div className='searcherExpander'>
                <form className='search-form' onSubmit={handleSearch}>
                    <label className='search-input-label'>
                        <i className='zmdi zmdi-search'></i>
                        <input 
                                type='text'
                                placeholder='Search ...'
                                className='search-input'
                                name='searchPen'
                                autoComplete='off'
                                value={ searchPen } onChange={ handleInputChange }/>
                    </label>
                </form>
            </div>
        </div>
    )
}
