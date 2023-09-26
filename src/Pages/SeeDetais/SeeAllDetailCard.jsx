import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from '../../Utility/localStorage';

const SeeAllDetailCard = ({ detail }) => {
  const { id, category, category_details_view_color, title, bg_color, dtls_img, donation_price,short_description,long_description } = detail;

  const handelAddToDonation = () => {
    saveDonation(id)
    toast('Thanks for the Donation')
  }

  return (
    <div>
        <div>
        <div>
      <div style={{ position: 'relative' }}>
        <img src={dtls_img} alt="" />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          background: 'rgba(0, 0, 0, 0.5)', 
          display: 'flex',
          justifyContent: 'start',
          padding: '10px',
        }}>
          <button style={{background:category_details_view_color}} onClick={handelAddToDonation} className='btn text-white'>
            Donate {donation_price}
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
        </div>
        <div className="pt-6">
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='pt-5 pb-56'>{short_description} and {long_description}</p>
        </div>
    </div>
  );
};

export default SeeAllDetailCard;
