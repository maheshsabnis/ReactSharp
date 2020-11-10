// 1. Import React
import React from 'react';
// 2. Import component being tested
import OrderedList from './../components/componentfortest/OrderList';
import OrderedListOption from './../components/componentfortest/OrderedListOptions';
// import Enzyme objects
import {shallow,mount} from './../enzyme';

// start with the test suit
describe('The React Component Test Suit',()=>{
    // lets write the test-case
    it('render names in options',()=>{
        // arrange
       //  const characters =["James", "Ethan", "Indiana", "Jason"];
       const characters =[];
        // act
        const wrapper = shallow(<OrderedList options={characters}/>);
        console.log(wrapper.debug());
        // assertion
        expect(wrapper.find('.empty').exists()).toBe(true);
    });

    it('render class name in options',()=>{
        // arrange
          const characters =["James", "Ethan", "Indiana", "Jason"];
        
        // act
        const wrapper = shallow(<OrderedListOption value={characters[0]}/>);
        console.log(wrapper.debug());
        // assertion
        expect(wrapper.find('.James').exists()).toBe(true);
    });
});