import React from 'react';

function List(props) {
  return (
    <div className="row" >
        <ul>
            {props.items.map((item, idx) => {
               return (<li key={idx}>{item}</li>)
            })}
        </ul>
    </div>
  );
}

export default List;
