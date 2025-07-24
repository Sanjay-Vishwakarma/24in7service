import React, { useState } from 'react';
import PricingList from './PricingList';
import InquiryModal from '../pages/InquiryModal';
import { showToast } from '../utils/ToastNotification';

function PricingCard() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleInquirySuccess = () => {
    showToast("Thank you! We will contact you soon.", "success");
    closeModal();
  };

  return (
    <div>
      <PricingList onGetStartedClick={openModal} />
      {showModal && <InquiryModal onClose={closeModal} onSuccess={handleInquirySuccess} />}
    </div>
  );
}

export default PricingCard;
