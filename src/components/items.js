import React from 'react';

import ListItem from './list-item'

export default ({items, handleDone, handleRemove}) => {
  const item = items.length === 0 ? <li className="not-found">Nothing Found</li> : items.map((item, index) => <ListItem key={index} item={item} handleDone={handleDone} handleRemove={handleRemove} />);

  return <ul className="item-lists">{item}</ul>
}
