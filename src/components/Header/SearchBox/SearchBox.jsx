//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Component SearchBox>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 25/11/2023: viết và hoàn thành Component SearchBox cho Header - Huy Nguyen <nglehuycontactwork@gmail.com>
// 
import React, { useState } from 'react';


function SearchBox({ onSearch, className, label, imgSrc }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className='d-flex'>
      <div className='form-group1'>
        <input
          className= {className}
          type="text"
          placeholder={label}
          onChange={handleChange}
        />
        <img className='icon-search' src={imgSrc} alt="Search Icon" />
      </div>
    </form>
  );
}

export default SearchBox;
