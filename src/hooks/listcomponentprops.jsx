import React from 'react'
// the functional component accepting props

const ListComponentProps=(props)=>{
    const handleChange=(val)=>{
        props.emitSelectedData(val);
    }
    return (
        <select className="form-control"
         value={props.data}
           onChange={(evt)=>{handleChange(evt.target.value)}}
         >
          <option>Select Manufacturer</option>
          {
              props.dataSource.map((d,idx)=>(
                  <option key={idx} value={d}>{d}</option>
              ))
          }
        </select>
    );
}

export default ListComponentProps;