import React, { use } from 'react';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Logo from '../Logo/Logo';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Header = () => {
  const {user, signOutUser} = use(AuthContext)

  const handleSignOut = async () => {
    try {
      await signOutUser();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

    return (
        <div>
            <Navbar className='bg-base-300' fluid rounded>
      <div className="">
        <Link to={'/'}><Logo></Logo></Link>
      </div>
      <div className="flex md:order-2">
        {
          user? <>
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={user.photoURL} rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{user.displayName}</span>
            <span className="block truncate text-sm font-medium">{user.email}</span>
          </DropdownHeader>
          <DropdownItem className='text-white'>Dashboard</DropdownItem>
          <DropdownItem className='text-white'>Settings</DropdownItem>
          <DropdownItem className='text-white'>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem className='text-white' onClick={handleSignOut}>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
          </> 
          :
          <>
          <div className="flex gap-4">
            <Link to={'/auth/login'}><button className='btn bg-emerald-600'>Login</button></Link>
            <Link to={'/auth/registration'}><button className='btn btn-neutral'>Registration</button></Link>
          </div>
          </>
        }
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink className='text-white' href="#">About</NavbarLink>
        <NavbarLink className='text-white' href="#">Services</NavbarLink>
        <NavbarLink className='text-white' href="#">Pricing</NavbarLink>
        <NavbarLink className='text-white' href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
        </div>
    );
};

export default Header;