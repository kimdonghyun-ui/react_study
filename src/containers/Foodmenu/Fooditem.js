import React from 'react';

const Fooditem = ({alls,index,onRemove}) => {
  return (
        <div>
          {index === 0 && <h2>{alls.type}</h2>}
          <div>
            <span>{alls.icon}</span>
            <img src={alls.img} alt={alls.name} />
            <p>{alls.name}</p>
            <button onClick={() => onRemove(alls.id)}>삭제</button>
          </div>
        </div>
  );
};

export default Fooditem;