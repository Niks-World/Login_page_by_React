import React from 'react'
var navStyle={
    backgroundColor: '#333',
       
        padding: '10px',
        marginRight:"50px",
        justifyContent: 'space-between',
        alignItems: 'center',
}

var aStyle={
    marginRight:"50px",
    textDecoration:"none",
    color:'white'
}
export const Nav = () => {
  return (
    <div style={navStyle}>
<a href="" style={aStyle}>Home</a>
       <a href=""style={aStyle}>service</a>
       <a href=""style={aStyle}>Help</a>

    </div>
  )
}
