import React, { Component } from 'react'
import Header from '../common/header'
import './style.css'

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isSearchDisabled: true
        }
    }

    handleOnChange = (e) => {
        let { name, value } = e.target;
        let isSearchDisabled = true;
        if (value) {
            isSearchDisabled = false;
        }
        this.setState({
            [name]: value.trim(),
            isSearchDisabled: isSearchDisabled
        });
    }

    searchForRepo = (e) => {
        e.preventDefault();
        this.props.searchRepo(this.state.searchText)
    }

    render() {
        return (
            <div className='container'>
                <Header title='Git Repo Search Filter' />
                <form className='search-box'>
                    <input className='input-text' type='text' name='searchText' value={this.state.searchText} onChange={this.handleOnChange} />
                    <button
                        disabled={this.state.isSearchDisabled}
                        className={'btn-medium ' + (this.state.isSearchDisabled ? 'disable-btn' : '')}
                        type='submit'
                        onClick={this.searchForRepo}>Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBox

