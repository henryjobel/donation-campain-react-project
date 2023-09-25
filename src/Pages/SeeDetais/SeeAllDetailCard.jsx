import React from 'react';

const SeeAllDetailCard = ({ detail }) => {
    
    const { id, category, category_details_view_color, title, bg_color, dtls_img,donation_price } = detail;

    const handelAddToDonation = ()=>{
        
    }
    return (
       <div>
        <div>
        <img src={dtls_img} alt="" />
        <button onClick={handelAddToDonation} className='btn'>Donat {donation_price}</button>
        </div>
       </div>
    );
};

export default SeeAllDetailCard;