import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveDonation } from '../../Utility/localStorage';
const SeeAllDetailCard = ({ detail }) => {
    
    const { id, category, category_details_view_color, title, bg_color, dtls_img,donation_price } = detail;

    const handelAddToDonation = ()=>{
        saveDonation(id)
        toast('Thanks for the Donation')
    }
    return (
       <div>
        <div>
        <img src={dtls_img} alt="" />
        <button onClick={handelAddToDonation} className='btn'>Donat {donation_price}</button>
        <ToastContainer />
        </div>
       </div>
    );
};

export default SeeAllDetailCard;