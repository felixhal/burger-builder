import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/'>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem>
  </ul>
);

export default navigationItems;
