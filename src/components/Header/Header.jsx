import React from 'react';
import profile from'../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between m-4 p-4 border-b-4'>
            <h1 className='text-4xl font-bold text-red-700'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;