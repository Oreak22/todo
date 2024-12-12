import React from 'react';

const Explain = ({ index, close }) => {
  return (
    <>
      <div className='bg-light p-3 rounded-2 '>
        <div className='mb-3 border-bottom justify-content-between align-items-center d-flex'>
          {' '}
          <h6 className='text-center'>Discription</h6>{' '}
          <button className='btn btn-sm btn-danger' onClick={close}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ipsam
        atque quia voluptate repudiandae accusamus quisquam ipsum, aut
        voluptates odio optio consectetur, eligendi voluptatum enim iste totam
        cupiditate facere voluptatem!
      </div>
    </>
  );
};

export default Explain;
