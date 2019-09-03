import React from 'react';
import { shallow, configure } from 'enzyme';
import Register2 from '../components/Register/Register2';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Register2  
        employmentStatus="Self-employed"
        occuption="professional"
        contractType="permanent"
        jobStartDate="02/11/2017"
 
        />);
    });
   
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  
    it('should render form ',()=>{
        expect(wrapper.find('form')).toHaveLength(1);
    })
    it('should render operation cost field', () => {
        expect(wrapper.find('#employmentStatus')).toHaveLength(1);
    });

    it('should render property cost field', () => {
        expect(wrapper.find('#occuption')).toHaveLength(1);
    });

    it('should render password field', () => {
        expect(wrapper.find('#contractType')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#jobStartDate')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#btn3')).toHaveLength(1);
    });
    it('should render button field', () => {
        expect(wrapper.find('#btn4')).toHaveLength(1);
    });

    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#employmentStatus').props.value).toEqual();
      });
    });

    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#occuption').props.value).toEqual();
      });
    });

    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#contractType').props.value).toEqual();
      });
    });
    
    describe('When onChange event is not triggered on operationType field', () => {
      it('should have empty state', () => {
        expect(wrapper.find('#jobStartDate').props.value).toEqual();
      });
    });
    describe('When onChange event triggered on studentId field', () => {
      beforeEach(() => {
        const employmentStatus = wrapper.find('#employmentStatus');
        employmentStatus.simulate('change', { target: {  name:'employmentStatus',value:'Self-employed' } });
      })
      it('should have update the state', () => {
        expect(wrapper.find('#employmentStatus').get(0).props.value).toEqual('Self-employed');
      })
    });

      
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const occuption = wrapper.find('#occuption');
          occuption.simulate('change', { target: {  name:'occuption',value: 'professional' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#occuption').get(0).props.value).toEqual('professional');
        })
      });

      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const contractType = wrapper.find('#contractType');
          contractType.simulate('change', { target: { name:'contractType',value: 'permanent' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#contractType').get(0).props.value).toEqual('permanent');
        })
      });
      describe('When onChange event triggered on studentId field', () => {
        beforeEach(() => {
          const jobStartDate = wrapper.find('#jobStartDate');
          jobStartDate.simulate('change', { target: { name:'jobStartDate',value: '02/11/2017' } });
        })
        it('should have update the state', () => {
          expect(wrapper.find('#jobStartDate').get(0).props.value).toEqual('02/11/2017');
        })
      });
    
  

    //   describe('When first button is cliked', () => {
    //     it('should have called cancel function', () => {
    //       const comp = shallow(<Register2 />);
    //       const spy = jest.spyOn(comp.instance(), 'prev');
    //       comp.instance().forceUpdate();
    //       comp.find('#btn3').simulate('click');
    //       expect(spy).toHaveBeenCalled();
    //     });
    //   });
    //   describe('When first button is cliked', () => {
    //     it('should have called cancel function', () => {
    //       const comp = shallow(<Register2 />);
    //       const spy = jest.spyOn(comp.instance(), 'next');
    //       comp.instance().forceUpdate();
    //       comp.find('#btn4').simulate('click');
    //       expect(spy).toHaveBeenCalled();
    //     });
    //   });

})

