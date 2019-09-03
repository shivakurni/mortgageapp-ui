import React from 'react';
import { shallow, configure,mount } from 'enzyme';
import MasterRegister from '../components/Register/MasterRegister';
import Register from '../components/Register/Register';
import Register2 from '../components/Register/Register2';
import Register3 from '../components/Register/Register3';
import Register4 from '../components/Register/Register4';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<MasterRegister />);
    });
   
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  
    // it('should render switch  tag',()=>{
    //     expect(wrapper.find('switch')).toHaveLength(1);
    // });
    mount(<MasterRegister><Register/></MasterRegister>).find(Register).validate

    it('should render ChildComponent', () => {
        wrapper.find(Register).first().get(0).props.validate();
      });

      mount(<MasterRegister><Register2/></MasterRegister>).find(Register2).validate

      it('should render ChildComponent', () => {
          wrapper.find(Register2).first().get(0).props.validate();
        });

        mount(<MasterRegister><Register3/></MasterRegister>).find(Register3).validate

        it('should render ChildComponent', () => {
            wrapper.find(Register3).first().get(0).props.validate();
          });

          mount(<MasterRegister><Register4/></MasterRegister>).find(Register4).validate

          it('should render ChildComponent', () => {
              wrapper.find(Register4).first().get(0).props.validate();
            });
        

      describe('when "rule1" is selected', ()=> {
        beforeEach(()=> {
          const propsWithRule = {...props, rule: {rule: 'rule1'}};
          this.element = shallow(<Register {...propsWithRule}/>);
        });
    
        it('shows SomeComponent', function() {
          expect(this.element.find(Register).length).toEqual(1); // length is 0, it should be 1
          expect(this.element.find('.register').length).toEqual(1); // works like expected, except prints a warning like below
        });
      });
    
      describe('when "rule2" is selected', ()=> {
        beforeEach(()=> {
          const propsWithRule = {...props, rule: {rule: 'rule2'}};
          this.element = shallow(<Register2 {...propsWithRule}/>);
        });
    
        it('shows input', function() {
          expect(this.element.find('.register2').length).toEqual(1); // works like expected
        });
      });
      
      describe('when "rule3" is selected', ()=> {
        beforeEach(()=> {
          const propsWithRule = {...props, rule: {rule: 'rule3'}};
          this.element = shallow(<Register3 {...propsWithRule}/>);
        });
    
        it('shows input', function() {
          expect(this.element.find('.register3').length).toEqual(1); // works like expected
        });
      });
      describe('when "rule3" is selected', ()=> {
        beforeEach(()=> {
          const propsWithRule = {...props, rule: {rule: 'rule4'}};
          this.element = shallow(<Register4 {...propsWithRule}/>);
        });
    
        it('shows input', function() {
          expect(this.element.find('.register4').length).toEqual(1); // works like expected
        });
      });
    
    
})