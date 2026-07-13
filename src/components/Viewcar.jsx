import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import{useEffect} from 'react'
import NavigationBar from './NavigationBar'




const Viewcar = () => {
    const[data,changeData]=useState([])


    const fetchData = () =>{
     axios.get("https://host-demo-app.onrender.com/api/cars").then(
        (res)=>{
            changeData(res.data)

        }
    ).catch()   


    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div>
        <NavigationBar />
        
        
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All Cars</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Registration Number</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Vehicle Type</th>
              <th>Fuel Type</th>
              <th>Transmission</th>
              <th>Seating Capacity</th>
              <th>Rent Per Day</th>
              <th>City</th>
              <th>Availability Status</th>
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.registration_number}</td>
                        <td>{value.brand}</td>
                        <td>{value.model}</td>
                        <td>{value.vehicle_type}</td>
                        <td>{value.fuel_type}</td>
                        <td>{value.transmission}</td>
                        <td>{value.seating_capacity}</td>
                        <td>{value.rent_per_day}</td>
                        <td>{value.city}</td>
                        <td>{value.availability_status}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>

        


    </div>
  )
}

export default Viewcar