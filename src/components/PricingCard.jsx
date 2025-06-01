import React, { useState } from 'react';
import PricingList from './PricingList';
import InquiryModal from '../pages/InquiryModal';

function PricingCard() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <PricingList onGetStartedClick={openModal} />
            {showModal && <InquiryModal onClose={closeModal} />}
        </div>
    );
}

export default PricingCard;
