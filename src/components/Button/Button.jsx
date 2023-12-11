//Copyright (c) [2019] - [2023] ECEPVN LLC All Rights Reserved.
// 
// License:
// 
// See the file "LICENSE" for terms & conditions for usage, and a DISCLAIMER OF
// ALL WARRANTIES.
// 
// @description <Viết Component Button cho HomeClick>
// 
// @Huy Nguyen <> <nglehuycontactwork@gmail.com>
// 
// 
// REVISIONS:
// 4/12/2023 viết component Button - Huy Nguyen <nglehuycontactwork@gmail.com>
// 04/12/2023 hoàn thành component Button - Huy Nguyen <nglehuycontactwork@gmail.com>


import React from 'react';

const Button = ({ label, className, onClick }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
        <span className="button-text">{label}</span>
    </button>
  );
};

export default Button;
