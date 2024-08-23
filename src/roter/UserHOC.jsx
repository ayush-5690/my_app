import React from 'react'
import { Link } from 'react-router-dom'

function UserHOC(Component) {
    const NewComponent=()=>{
        return (
          <>
            <div className='d-flex justify-content-center bg-black p-2'>
            <div className='p-2 mx-1 bg-danger'><Link to={'/form'} className='text-white'>Form</Link></div>
            <div className='p-2 mx-1 bg-danger'><Link to={'/table'} className='text-white'>Table</Link></div>
          </div>
          <Component/>
          </>
        )

    }
    return NewComponent
}

export default UserHOC
