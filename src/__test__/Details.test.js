import React from 'react';
import { shallow, configure } from 'enzyme';
import Details from '../components/Register/Details';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

describe('When Controlled  component is given', () => {
    let wrapper;
    beforeEach(() => {
       wrapper = shallow(<Details/>);
    });
    
    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });  
    it('should render form ',()=>{
        expect(wrapper.find('h4')).toHaveLength(1);
    })


    describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<Details />);
          const spy = jest.spyOn(comp.instance(),'onClickLogin');
          comp.instance().forceUpdate();
          comp.find('#btn9').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      

      describe('when account summary is ',()=>{
        const mortgageDetails=[
          {
            customerId:123,
            password:'divya@123',
            accountNo:1234,
            mortgageNo:6789

          },
          {
            customerId:'current',
            password:'ramya@123',
            accountNo:6789,
            mortgageNo:1234
          },
          {
            customerId:'current',
            password:'krishna@123',
            accountNo:4567,
            mortgageNo:2345
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<Details mortgageDetails={mortgageDetails} />)
        });
        it('should renderlist of mortgage details for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the mortgage details of a customer is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<Details mortgageDetails={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0);
       });

      });

})

