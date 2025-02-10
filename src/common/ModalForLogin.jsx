import React from 'react';
import LoginRequiredModal from './components/LoginRequiredModal';

const ModalForLogin = ({ isOpen, onNavigate, onClose }) => {
    return (
        <LoginRequiredModal
            isOpen={isOpen}
            onNavigate={onNavigate}
            onClose={onClose}
        />
    );
};

export default ModalForLogin;
