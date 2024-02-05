import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../redux/slices/OrderApp';
import { Link } from 'react-router-dom';

const Favorite = () => {
  const orders = useSelector(store => store.orders.orders);
  const dispatch = useDispatch();

  const handleRemoveFromFavorites = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className='favorite container'>
      <div className='flex__favorite__logo'>
       <h2>Favorite</h2>
       <Link to="/">
       <button className='btn__favorite__target'>←</button>
       </Link>
      </div>
       <div className='favorite__card__flex'>
       {orders.map(el => (
         <div className='content__card__favorite' >
           <Link style={{textDecoration: "none"}} key={el.id} to={`/content/${el.id}`}>
          <div className='avatar__favorite'>
            <img className='avatar' src={el.avatar} alt="" />
          </div>
            <h4 className='name__favorite'>{el.name}</h4>
            <p className='price__favorite'>{el.price} ₽</p>
          </Link>
            <button className='btn__remove__favorite' onClick={() => handleRemoveFromFavorites(el.id)}>Remove</button>
          </div>
       ))}
       </div>
    </div>
  );
}

export default Favorite;
