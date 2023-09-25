const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donation-list');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id =>{
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(donationId => donationId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation-list', JSON.stringify(storedDonations));
    }
}

export { getStoredDonation, saveDonation}
