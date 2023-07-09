import React from 'react';

export const Myprofile = ({ setLoggedIn }) => {
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <h1>My Profile</h1>
      <h2>My Personal Details</h2>
      <img
        src="https://iili.io/H6GrLF4.md.jpg"
        alt="H6GrLF4.md.jpg"
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }}
      />
      <img
        src="https://iili.io/H6G6c7V.md.jpg"
        alt="H6G6c7V.md.jpg"
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }}
      />
      <img
        src="https://iili.io/HPLz7ee.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }}
      />
      <img
        src="https://iili.io/HPLzYmu.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }}
      />
      {/* Add styling to the remaining images */}
      {/* ... */}
      <img
        src="https://iili.io/HPLzlXj.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />

<img
        src="https://iili.io/HPLzczb.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />


<img
        src="https://iili.io/HPLzWdP.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />

<img
        src="https://iili.io/HPLz0Lx.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />


<img
        src="https://iili.io/HPLzEqQ.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />

<img
        src="https://iili.io/HPLzMrB.th.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />

<img
        src="https://iili.io/HPLzG1V.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />

        <img
        src="https://iili.io/HPL557V.md.jpg"
        alt=""
        style={{
          height: '200px',
          width: '200px',
          border: '1px solid black',
          padding: '10px',
        }} />


      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
