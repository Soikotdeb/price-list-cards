import React from 'react';

const Link = ({ route }) => {

    return (
        <li className='mr-12 hover:bg-purple-300'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;