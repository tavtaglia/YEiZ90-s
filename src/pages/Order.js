import { Outlet, Link } from 'react-router-dom';
import '../index.css'
import { useState } from 'react';
import DataTable from "react-data-table-component";
import { cancelledData, completedData, packingData, allData } from './data';
import { columns } from './columns';
import { Table } from './Table';
import _ from 'lodash';

const Order = () => {
    const [toggle, setToggle] = useState(1)

    function updateToggle(id){
        setToggle(id)
    }

    const filteredData = () => {
        switch (toggle) {
            case 1:
              const shuffledAllData = getRandomSample(allData);
              return shuffledAllData;
            case 2:
                return packingData.filter((row) => row.status);
            case 3:
                return completedData.filter((row) => row.status);
            case 4:
            return cancelledData.filter((row) => row.status);
            default:
        return allData;
        }
    }; 
    
    const getRandomSample = (data) => {
      return _.shuffle(data);
    };

    return (
        <>
        <div className="text3">O R D E R S</div>
        <div className="text4">
          In the order details section, you can review and manage all orders
          with details. You can edit many information of them includes product,
          date, price, and status. Access to this area is limited.
      </div>
      <div className='tab'>
        <ul className='d-flex p-3 col-md-4 semi-bold-text'>
            <li className='flex-fill' onClick={()=>updateToggle(1)}>All Orders</li>
            <li className='flex-fill' onClick={()=>updateToggle(2)}>Packing</li>
            <li className='flex-fill' onClick={()=>updateToggle(3)}>Completed</li>
            <li className='flex-fill' onClick={()=>updateToggle(4)}>Canceled</li>
        </ul>
        <div className={`table-container ${toggle === 1 ? "show-content" : "content"}`}>
           <Table  data={filteredData()}/>
          </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
        <Table  data={filteredData()}/>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
            <Table  data={filteredData()}/>
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
        <Table  data={filteredData()}/>
        </div>
      </div>
        </>
    );
};

export default Order;