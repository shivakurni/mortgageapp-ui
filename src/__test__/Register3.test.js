import React from 'react';
import { shallow, configure } from 'enzyme';
import Register3 from '../components/Register/Register3';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Register3
        title="Mr"
        firstName="Divya"
        middleName="chowdary"
        surName="emuri"
        dob="12/11/1997"
       />);
    });
   
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  
    it('should render form ',()=>{
        expect(wrapper.find('form')).toHaveLength(1);
    })
    it('should render operation cost field', () => {
        expect(wrapper.find('#title')).toHaveLength(1);
    });

    it('should render property cost field', () => {
        expect(wrapper.find('#firstName')).toHaveLength(1);
    });

    it('should render password field', () => {
        expect(wrapper.find('#middleName')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#surName')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#dob')).toHaveLength(1);
    });
    
    it('should render button field', () => {
        expect(wrapper.find('#btn5')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#btn6')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#title').props.value).toEqual();
      });
    });
    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#firstName').props.value).toEqual();
      });
    });
    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#middleName').props.value).toEqual();
      });
    });
    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#surName').props.value).toEqual();
      });
    });

    
    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#dob').props.value).toEqual();
      });
    });

    
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const title = wrapper.find('#title');
          title.simulate('change', { target: { name:'title',value: 'Mr' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#title').get(0).props.value).toEqual('Mr');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const firstName = wrapper.find('#firstName');
          firstName.simulate('change', { target: {  name:'firstName',value: 'Divya' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#firstName').get(0).props.value).toEqual('Divya');
        })
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const middleName = wrapper.find('#middleName');
          middleName.simulate('change', { target: { name:'middleName',value: 'chowdary' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#middleName').get(0).props.value).toEqual('chowdary');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const surName = wrapper.find('#surName');
          surName.simulate('change', { target: { name:'surName',value: 'emuri' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#surName').get(0).props.value).toEqual('emuri');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const dob = wrapper.find('#dob');
          dob.simulate('change', { target: { name:'dob',value: '12/11/1997' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#dob').get(0).props.value).toEqual('12/11/1997');
        })
      });
    
  

      // describe('When first button is cliked', () => {
      //   it('should have called cancel function', () => {
      //     const comp = shallow(<Register3 />);
      //     const spy = jest.spyOn(comp.instance(), 'prev');
      //     comp.instance().forceUpdate();
      //     comp.find('#btn5').simulate('click');
      //     expect(spy).toHaveBeenCalled();
      //   });
      // });
      // describe('When first button is cliked', () => {
      //   it('should have called cancel function', () => {
      //     const comp = shallow(<Register3 />);
      //     const spy = jest.spyOn(comp.instance(), 'next');
      //     comp.instance().forceUpdate();
      //     comp.find('#btn6').simulate('click');
      //     expect(spy).toHaveBeenCalled();
      //   });
      // });

})

