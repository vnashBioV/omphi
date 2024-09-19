
'use client'
import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowRight } from "react-icons/fa6";

const CustomButton = ({ path, customeStyles, color, text, buttonParent, iconStyles}) => {
  return (
    <div className={`${buttonParent}`}>
      <Link 
        to={path}
        alt={text}
        className={`${customeStyles} ${color}`}
        smooth={true}
        spy
        offset={-50}
        activeClass='active'
      >
        {text}
        <FaArrowRight className={`${iconStyles}`}/>
      </Link>
    </div>
  );
};

export default CustomButton;
