import React from 'react';
import Fooditem from './Fooditem';
import Divider from '@material-ui/core/Divider';
const Foodlist = ({ allmenu, onRemove }) => {
  function typeFilter(data) {
    return data
      .filter(
        (arr, index, callback) =>
          index === callback.findIndex((t) => t.type === arr.type),
      )
      .map((todo) => allmenu.filter((todos) => todos.type === todo.type));
  }
  console.log('가공된 데이터', typeFilter(allmenu));
  return (
    <div>
      {typeFilter(allmenu).length > 0 ? (
        typeFilter(allmenu).map((typs, index) => (
          <div key={index}>
            {typs.map((alls, index) => (
              <Fooditem
                alls={alls}
                key={index}
                index={index}
                onRemove={onRemove}
              />
            ))}
            <Divider />
          </div>
        ))
      ) : (
        <div>리스트가없습니다.</div>
      )}
    </div>
  );
};

export default Foodlist;
