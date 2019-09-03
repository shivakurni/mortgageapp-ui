import React from 'react';
import { shallow, configure } from 'enzyme';
import Register from '../components/Register/Register';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Register 
        operationType="Buying my first home"
         propertyCost="100000"
         deposit="10000"
          />);
    });
   
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  
    it('should render form ',()=>{
        expect(wrapper.find('form')).toHaveLength(1);
    })
    it('should render operation cost field', () => {
        expect(wrapper.find('#operationType')).toHaveLength(1);
    });

    it('should render property cost field', () => {
        expect(wrapper.find('#propertyCost')).toHaveLength(1);
    });

    it('should render deposit field', () => {
        expect(wrapper.find('#deposit')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on operationType field', () => {
        it('should have empty state', () => {
          expect(wrapper.find('#operationType').props.value).toEqual();
        });
      });

    describe('When onChange event is not triggered on propertyCost field', () => {
        it('should have empty state', () => {
          expect(wrapper.find('#propertyCost').props.value).toEqual();
        });
      });

      describe('when onChange event is not triggered on password field',()=>{
          it('should have empty state',()=>{
              expect(wrapper.find('#deposit').props.value).toEqual();
          });
      });
      
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const operationType = wrapper.find('#operationType');
          operationType.simulate('change', { target: { name:'operationType',value: 'Buying my first home' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#operationType').get(0).props.value).toEqual('Buying my first home');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const propertyCost = wrapper.find('#propertyCost');
          propertyCost.simulate('change', { target: {  name:'propertyCost',value: '100000' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#propertyCost').get(0).props.value).toEqual('100000');
        })
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const deposit = wrapper.find('#deposit');
          deposit.simulate('change', { target: { name:'deposit',value: '10000' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#deposit').get(0).props.value).toEqual('10000');
        })
      });
    
  

      // describe('When first button is cliked', () => {
      //   it('should have called cancel function', () => {
      //     const comp = shallow(<Register />);
      //     const spy = jest.spyOn(comp.instance(), 'next');
      //     comp.instance().forceUpdate();
      //     comp.find('#btn2').get(0).props().simulate('click');
      //     expect(spy).toHaveBeenCalled();
      //   });
      // });

})

