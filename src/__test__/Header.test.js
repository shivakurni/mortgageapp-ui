import React from 'react';
import { shallow, configure } from 'enzyme';
import Header from '../components/Header/Header';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Header/>);
    });
   
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    it('should render ul tag',()=>{
        expect(wrapper.find('ul')).toHaveLength(1);
    });

    it('should render h2 tag',()=>{
        expect(wrapper.find('h2')).toHaveLength(1);
    });
    it('should render dropdown',()=>{
        expect(wrapper.find('#dropdown')).toHaveLength(1);
    });
   
})