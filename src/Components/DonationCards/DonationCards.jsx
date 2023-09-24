import { useEffect, useState } from "react";
import Donationcard from "../Donationcard/Donationcard";


const DonationCards = () => {
    const [donationCards,setDonationCards] = useState([])
    useEffect(()=>{
        fetch('alldata.json')
        .then(res => res.json())
        .then(data => setDonationCards(data))
    },[])

    return (
        <div>
            {
                donationCards.map(donationcard => <Donationcard key={donationCards.id} donationcard={donationcard}></Donationcard>)
            }
        </div>
    );
};

export default DonationCards;