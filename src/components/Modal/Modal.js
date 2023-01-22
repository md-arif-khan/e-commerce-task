import React from 'react';

const Modal = ({name,price,picture}) => {
    return (
<div>
           
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form className='mt-8' action="">
    <input readOnly defaultValue={name} type="text" placeholder="Type here" className="input my-2 input-bordered input-primary w-full " />
    <input readOnly defaultValue={price} type="text" placeholder="Type here" className="input my-2 input-bordered input-primary w-full " />
    <input  type="text" placeholder="Type here" className="input my-2 input-bordered input-primary w-full " />
    <input type="text" placeholder="Type here" className="input my-2 input-bordered input-primary w-full " />
    
    <input className="btn btn-outline btn-primary btn-wide w-full mb-4 mt-2 font-bold" type="submit" value="Checkout" />
    </form>
   
  </div>
  
</div>

        </div>
    );
};

export default Modal;