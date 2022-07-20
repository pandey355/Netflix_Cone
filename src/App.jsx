import React from 'react';
import Netflix from './Netflix'

import Amazon from './Amazon';

const choice = 'Netflix';








const App = () => {
  return (
    <>
      {choice === 'Amazon' ? <Amazon /> : <Netflix />}
    </>


  )
}



export default { App };
