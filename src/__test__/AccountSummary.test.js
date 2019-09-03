import React from 'react';
import {shallow,mount} from 'enzyme';
import AccountSummary from '../components/AccountSummary/AccountSummary';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<AccountSummary/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn9')).toHaveLength(0);
    });
    
    it('should render button element',()=>{
        expect(wrapper.find('#btn6')).toHaveLength(1);
    });
    it('should render h1 tag',()=>{
        expect(wrapper.find('h1')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<AccountSummary/>);
          const spy = jest.spyOn(comp.instance(), 'logout');
          comp.instance().forceUpdate();
          comp.find('#btn6').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
      describe('when account summary is ',()=>{
        const account=[
          {
            accountType:'savings',
            balance:100000,
            accountNumber:1234
          },
          {
            accountType:'current',
            balance:200000,
            accountNumber:6789
          },
          {
            accountType:'current',
            balance:500000,
            accountNumber:2345
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<AccountSummary account={account} />)
        });
        it('should renderlist of accounts for a user',()=>{
          const table=wrapper.find('table');
          const tbody=table.find('tbody');
          const tr=tbody.find('tr');
          expect(tr.length=3).toBe(3);
        });
      });
      describe('when the account summary is empty',()=>{
       const emptyArray=[];
       beforeEach(()=>{
         wrapper=shallow(<AccountSummary account={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});