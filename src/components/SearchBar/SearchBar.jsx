import React from 'react';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';
import s from './SearchBar.module.css'


function SearchBar() {
      return (
      <div className={s.container} >
      <Search/>
      <Pagination />
      </div>
  )
}
export default SearchBar