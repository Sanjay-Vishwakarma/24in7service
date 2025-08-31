import React, { useState } from 'react';
import PricingList from './PricingList';
import InquiryModal from '../pages/InquiryModal';
import { showToast } from '../utils/ToastNotification';

function PricingCard() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openModal = (serviceName) => {
    setSelectedService(serviceName);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const handleInquirySuccess = () => {
    showToast("Thank you! We will contact you soon.", "success");
    closeModal();
  };

  return (
    <div>
      <PricingList onGetStartedClick={openModal} />
      {showModal && (
        <InquiryModal
          onClose={closeModal}
          onSuccess={handleInquirySuccess}
          defaultService={selectedService}
        />
      )}
    </div>
  );
}

export default PricingCard;
