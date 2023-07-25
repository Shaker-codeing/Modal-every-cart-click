import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div>
            <h5 className="text-center">copyright &#169; {date}</h5>
        </div>
    );
};

export default Footer;