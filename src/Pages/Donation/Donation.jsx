import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonation } from '../../Utility/localStorage';

const Donation = () => {
    const donations = useLoaderData();

    const [appliedDonations, setAppliedDonations] = useState([]);
    const [displayDonations, setDisplayDonations] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const storedDonationIds = getStoredDonation();
        if (donations.length > 0) {
            const donationsApplied = [];
            for (const id of storedDonationIds) {
                const donation = donations.find((donation) => donation.id === id);
                if (donation) {
                    donationsApplied.push(donation);
                }
            }
            setAppliedDonations(donationsApplied);
            setDisplayDonations(donationsApplied);
        }
    }, [donations]);

    const handleShowAll = () => {
        setShowAll(!showAll);
    }

    return (
        <div>
            <div className='grid grid-cols-2 max-w-7xl mx-auto gap-10'>
                {displayDonations.slice(0, showAll ? displayDonations.length : 4).map((donation) => (
                    <div key={donation.id} className="donation-card">
                        <div style={{background: donation.bg_color}} className="card card-side bg-base-100 shadow-xl">
                        <figure><img src={donation.image} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 style={{color: donation.color}} className="card-title">{donation.title}</h2>
                            <p style={{color: donation.color}}>{donation.short_description}</p>
                            <div className="card-actions justify-start">
                                <button style={{background:donation.color}} className="btn text-white">View Details</button>
                            </div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                {displayDonations.length > 4 && !showAll && (
                    <button className="btn" onClick={handleShowAll}>
                        Show All
                    </button>
                )}
            </div>
        </div>
    );
};

export default Donation;
