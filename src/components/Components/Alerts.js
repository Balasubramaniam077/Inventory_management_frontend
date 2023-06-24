import { useLocation, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

import Topbox from './Topbox';
import Frame from './Frame';
import { Container } from 'react-bootstrap';
import "./Alerts.css"

function Alerts() {
  return (
    <div>

      <Frame/>
    <Topbox/>
    <div id='card' class="row row-cols-1 row-cols-md-2 g-4">
   
    <div class="card-body text-bg-dark rounded">
        <h3 id ="tit" class="card-title">Inventory Level</h3>
        <hr></hr>
        <h5>Total number of productsin inventory :{}</h5>
      </div>
    
  
  <div  class="col">
    <div class="card h-100">
      
      <div class="card-body text-bg-dark  rounded">
        <h3 class="card-title">Expired products</h3>
        <hr></hr>
        <h5 class="card-text">Total number of expired products:{}</h5>
      </div>
    </div>
  </div>
  </div>

  <table  className ="table" class="table table-striped  w-75">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">id</th>
      <th scope="col">Quantity</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Note book</td>
      <td>10012</td>
      <td>2</td>
      <td><button id='1' >Order</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Pen</td>
      <td>14105</td>
      <td>1</td>
      <td><button id='2' >Order</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Water Colour</td>
      <td>12345</td>
      <td>0</td>
      <td><button id='3'>Order</button></td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Oppo Mobiles</td>
      <td>98701</td>
      <td>5</td>
      <td><button id="4">Order</button></td>
    </tr>
  </tbody>
</table>

  </div>
  
    
  );
}


 
   


export default Alerts;