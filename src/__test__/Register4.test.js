import React from 'react';
import { shallow, configure } from 'enzyme';
import Register4 from '../components/Register/Register4';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Register4
       phoneNumber="1234567899"
       email="divya@gmail.com"
       confirmEmail="divya@gmail.com"
       
       />);
    });
   
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  
    it('should render form ',()=>{
        expect(wrapper.find('form')).toHaveLength(1);
    })
    it('should render operation cost field', () => {
        expect(wrapper.find('#phoneNumber')).toHaveLength(1);
    });

    it('should render property cost field', () => {
        expect(wrapper.find('#email')).toHaveLength(1);
    });

    it('should render password field', () => {
        expect(wrapper.find('#confirmEmail')).toHaveLength(1);
    });

    
    it('should render button field', () => {
        expect(wrapper.find('#btn7')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#btn8')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.find('#phoneNumber').props.value).toEqual();
        });
      });

    describe('When onChange event is not triggered on student Id field', () => {
        it('should have empty state', () => {
          expect(wrapper.find('#email').props.value).toEqual();
        });
      });

      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
            expect(wrapper.find('#confirmEmail').props.value).toEqual();
          });
      });
    
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const phoneNumber = wrapper.find('#phoneNumber');
          phoneNumber.simulate('change', { target: { name:'phoneNumber',value: '1234567899' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#phoneNumber').get(0).props.value).toEqual('1234567899');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const email = wrapper.find('#email');
          email.simulate('change', { target: {  name:'email',value: 'divya@gmail.com' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#email').get(0).props.value).toEqual('divya@gmail.com');
        })
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const confirmEmail = wrapper.find('#confirmEmail');
          confirmEmail.simulate('change', { target: { name:'confirmEmail',value: 'divya@gmail.com' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#confirmEmail').get(0).props.value).toEqual('divya@gmail.com');
        })
      });
      
  

      // describe('When first button is cliked', () => {
      //   it('should have called cancel function', () => {
      //     const comp = shallow(<Register4 />);
      //     const spy = jest.spyOn(comp.instance(), 'prev');
      //     comp.instance().forceUpdate();
      //     comp.find('#btn7').simulate('click');
      //     expect(spy).toHaveBeenCalled();
      //   });
      // });
      // describe('When first button is cliked', () => {
      //   it('should have called cancel function', () => {
      //     const comp = shallow(<Register4 />);
      //     const spy = jest.spyOn(comp.instance(), 'next');
      //     comp.instance().forceUpdate();
      //     comp.find('#btn8').simulate('click');
      //     expect(spy).toHaveBeenCalled();
      //   });
      // });

})

