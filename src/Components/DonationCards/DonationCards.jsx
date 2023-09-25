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
        <div className="grid grid-cols-4 max-w-7xl mx-auto pb-20 gap-10">
            {
                donationCards.map(donationcard => <Donationcard key={donationCards.id} donationcard={donationcard}></Donationcard>)
            }
        </div>
    );
};

export default DonationCards;