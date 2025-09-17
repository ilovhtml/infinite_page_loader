import { useState, useEffect, useRef, useCallback } from 'react';

// Main App Component
function App() {
  return(

    <>
  <div>
    <h1 className=' text-5xl flex items-center justify-center'>The Infinite scroll page </h1>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
  <div className='border-blue-600 border-solid border-2 m-3 py-20 px-10 flex justify-center'>card</div>
  
  
</div>
<p>loading more images</p>
  </div>
  </>
  
)}

export default App;

