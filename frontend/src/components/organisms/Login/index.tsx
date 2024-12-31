// components/molecules/ModalContent/index.tsx
'use client';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography, Box } from '@mui/material';
import Modal from 'react-modal';

const LoginCard = styled('div')({
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 5px rgba(0,0,0,0.1)',
});

const customStyles = {
  overlay: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(72, 70, 70, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '30%',
    left: '30%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px',
  },
};

interface LoginModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const closeModal = () => {
    onClose();
  };

  const handlesubmit = () => {
    
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <LoginCard>
        <Typography variant="h5" gutterBottom>
          ログイン
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="ユーザー名"
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="パスワード"
          type="password"
        />
        <Button variant="contained" color="primary" onClick={closeModal}>
          キャンセル
        </Button>
        <Button variant="contained" color="primary" onClick={handlesubmit}>
          ログイン
        </Button>
      </LoginCard>
    </Modal>
  );
};
