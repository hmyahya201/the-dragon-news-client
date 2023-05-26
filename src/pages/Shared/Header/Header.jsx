/* eslint-disable no-unused-vars */
import React from 'react';
import logo from '../../../../public/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format()}</p>
            </div>
        </div>
    );
};

export default Header;