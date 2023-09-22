import React from 'react'
import ReactLoading from 'react-loading';
function Example({ spin, red }) {
  return (
    <div className='lazy_loading'>
 <ReactLoading type="spin" color="rgb(243 147 30)" height={'10%'} width={'10%'}   />
    </div>
  )
}

export default Example