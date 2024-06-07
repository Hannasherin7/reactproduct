import React from 'react'
import { NavBar } from './NavBar'

export const AddProduct = () => {
  return (
    <div>
        <NavBar></NavBar>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">product title</label>
                            <input type="text" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">product code</label>
                        <input type="text" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">product description</label>
                        <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">price</label>
                        <input type="text" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">catogory</label>
                        <select name="" id="" className="form-control">
                        <option value="electronics">electronics</option>
                    <option value="dress">dress</option>
                    <option value="shoes">shoes</option>
                    <option value="beauty">beauty</option>
                    <option value="accesories">accesories</option>
                </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">manifacturing date</label>
                <input type="date" name="" id="" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">expary date</label>
                <input type="date" name="" id="" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">manufacturing date</label>
                <input type="date" name="" id="" className="form-control"></input>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">product image</label>
                <input type="file" name="" id="" className="form-control"></input>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <br /><br /><br /><button className="btn btn-success">add product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
