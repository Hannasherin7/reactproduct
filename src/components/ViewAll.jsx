import React, { useState } from 'react'
import { NavBar } from './NavBar'

export const ViewAll = () => {
  
    const [data,changeData]=useState(
        [
            {"pname":"watch","pcode":123},
            {"pname":"bag","pcode":113},
            {"pname":"dress","pcode":993},
            {"pname":"phone","pcode":663},
            {"pname":"TV","pcode":883},
            {"pname":"Makeup","pcode":177},
            {"pname":"shoe","pcode":523},
            {"pname":"Toy","pcode":653}
        ]
    )
    return (
    <div>
        <NavBar></NavBar>
        <div className="container">
    <div className="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col xl 12 col-xxl-12">
            <div className="row">
               {data.map(
                (value,index)=>
                    {
                        return  <div className="col col-12 col-sm-6 col-md-4 col lg-3 col-xl-3 col-xx-3">
                        <div className="card">
                            <img src="https://watchfactory.in/cdn/shop/products/11.1_3b905d9b-2d84-4dec-8dab-29e6f476eaa9.jpg?v=1711790707"
                                height="250pixels" className="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">{value.pname} </h5>
                                <p className="card-text">{value.pcode}</p>
                            </div>
                        </div>
                    </div>
                    }
               )

               }
                </div>
                </div>
                </div>
                </div>
                </div>
                
    
  )
}
