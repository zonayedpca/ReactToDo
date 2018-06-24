import React from 'react';

export default ({item, handleDone, handleRemove}) => {
  return <li><span onClick={() => handleDone(item)} className={item.isDone?"done":null}>{item.title}</span><button onClick={() => handleRemove(item)}>X</button></li>
}
