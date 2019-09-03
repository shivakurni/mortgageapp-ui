import React from 'react';
import { shallow ,mount } from 'enzyme';
import Login from '../components/Login/Login';


describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = shallow(<Login/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('should render table', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });
   
    it('should render h2 tag',()=>{
        expect(wrapper.find('h2')).toHaveLength(1);
    });

    it('should render student id field', ()=> {
        expect(wrapper.find('#customerId')).toHaveLength(1);
    });

    it('should render password field', ()=> {
        expect(wrapper.find('#password')).toHaveLength(1);
    });

    it('should render button field', ()=> {
        expect(wrapper.find('#btn1')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.state().loginData.customerId).toEqual('');
        });
      });
      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.state().loginData.password).toEqual('');
          });
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const customerId = wrapper.find('#customerId');
          customerId.simulate('change', { target: { name:'customerId',value: '1234' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().loginData.customerId).toEqual('1234');
        })
      });
    
      describe('When onChange event triggered on password field', () => {
        beforeEach(() => {
          const password = wrapper.find('#password');
          password.simulate('change', { target: {name:'password', value: 'divya@123' } });
        })
        it('should have update the state', () => {
          expect(wrapper.state().loginData.password).toEqual('divya@123');
        })
      });

      describe('When submit button is clicked', () => {
        beforeEach(() => {
          wrapper.find('#customerId').simulate('change', { target: {name:'customerId', value: '1234' } });
          wrapper.find('#password').simulate('change', { target: { name:'password',value: 'divya@123' } });
    
          const fakeEvent = { preventDefault: () => console.log('preventDefault') };
          const submit = wrapper.find('#btn1');
          submit.simulate('click', fakeEvent);
        });
    
        it('should have excepted userName', () => {
          expect(wrapper.state().loginData.customerId).toEqual('1234');
        });
    
        it('should have excepted Password', () => {
          expect(wrapper.state().loginData.password).toEqual('divya@123');
        });
      });
    describe('When first button is cliked', () => {
        it('should have called handle submit function', () => {
          const comp = shallow(<Login />);
          const spy = jest.spyOn(comp.instance(), 'onClickLogin');
          comp.instance().forceUpdate();
          comp.find('#btn1').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
     
});