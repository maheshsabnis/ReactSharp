import React, { useState } from 'react';
import UseEffectMouseMoveComponent from './useEffectMouseMoveComponent';

const MouseMoveToggelingComponent=()=>{
    const [display, setDisplay] = useState(true);
    return (
           <div>
              <button onClick={()=> setDisplay(!display)}>Toggle</button>
              {
                  display && <UseEffectMouseMoveComponent></UseEffectMouseMoveComponent>
              }
           </div>
    );
}

export default MouseMoveToggelingComponent;