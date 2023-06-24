import { useEffect } from 'react';
import Chart from './/Chart';
import Frame from './Frame';
import './/Report.css';
import Topbox from './Topbox';
import axios from 'axios';
import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


function Report() {
  const [datas, setdatas] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/all') // Replace with your backend endpoint
      .then(response => {
        setdatas(response.data);
        console.log(datas);
      })
      .catch(error => {
        console.error(error);
      });
  },);
  return (
    <div>
      <Frame />
      <Topbox />


      <span className='display-5 '>Report Page</span>
      <table class="table table-striped  w-75">


        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">description</th>
            <th scope="col">price</th>
            <th scope='col'>quantity</th>
            <th scope='col'>location</th>
            <th scope='col'>barcode</th>
          </tr>
        </thead>
        <tbody>

          {
            datas.map((element, key) => {
              return (<tr>
                <td>{element.id}</td>
                <td>{element.name}</td>
                <td>{element.description}</td>
                <td>{element.price}</td>
                <td>{element.quantity}</td>
                <td>{element.location}</td>
                <td>{element.barcode}</td>
              </tr>
              );
            })
          }


        </tbody>
      </table>


    </div>
  );
}

export default Report;