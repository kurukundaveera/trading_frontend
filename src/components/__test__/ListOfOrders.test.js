import React from 'react';
import {shallow,mount} from 'enzyme';
import ListOfOrders from '../components/ListOfOrders/ListOfOrders';

describe('When Controlled component is given', () => {
    let wrapper;
        beforeEach(() => {
            wrapper = mount(<ListOfOrders/>);
  });

    it('should render', () => {
        expect(wrapper).toHaveLength(1);
    });
    if('should render table element',()=>{
      expect(wrapper.find('table')).toHaveLength(1);
    });
    it('should render button element',()=>{
        expect(wrapper.find('#btn3')).toHaveLength(0);
    });
    
    it('should render h1 tag',()=>{
        expect(wrapper.find('h5')).toHaveLength(1);
    })

   
      describe('When first button is cliked', () => {
        it('should have called cancel function', () => {
          const comp = shallow(<ListOfOrders/>);
          const spy = jest.spyOn(comp.instance(), 'handleListOfStock');
          comp.instance().forceUpdate();
          comp.find('#btn6').simulate('click');
          expect(spy).toHaveBeenCalled();
        });
      });
    
      describe('when account summary is ',()=>{
        const listOfOrders=[
          {
            stockName:"d",
            stockexchangeName:"moongdal",
            stockQuantity:30,
            stockPrice:50
          },
          {
            stockName:"dal",
            stockexchangeName:"moongdal",
            stockQuantity:30,
            stockPrice:50
          },
          {
            stockName:"dal",
            stockexchangeName:"moongdal",
            stockQuantity:30,
            stockPrice:50
          }
        ]
        beforeEach(()=>{
          wrapper=shallow(<ListOfOrder listOfOrders={listOfOrders} />)
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
         wrapper=shallow(<ListOfStocks listOfStock={emptyArray}/>);
       });
       it('should not display account row data',()=>{
         const table=wrapper.find('table');
         const tbody=table.find('tbody');
         const tr= tbody.find('tr');
         expect(tr.length).toBe(0)
       });

      });


  
});