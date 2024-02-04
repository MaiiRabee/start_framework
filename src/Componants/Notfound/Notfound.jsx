import React, { Component } from 'react'
import notfoundd from '../../Assets/imag/notfound.jpeg'

export default class Notfound extends Component {
  render() {
    return (
        <div className='vh-100 d-flex justify-content-center align-items-center'>
        <img src={notfoundd} className='w-75'/>
       </div>
    )
  }
}
