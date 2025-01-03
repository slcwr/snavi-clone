// components/atoms/Button/LogoutButton.tsx
'use client';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { LoginModal } from '../../organisms/Login';
import { Button, TextField, Typography } from '@mui/material';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { logout } from '@/stores/reducers/AuthSlice';
import { LogoutModal } from '../../organisms/Logout';

// スタイルのカスタマイズ（オプション）
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4caf50',
  minWidth: '80px',
  fontSize: '12px',
  height: '25px',
  '&.MuiButton-contained': {
    '&:hover': {
      backgroundColor: '#45a049',
    },
  },
}));

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justyContant: 'center',
});

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
    top: '150px',
    left: '380px',
    right: '380px',
    bottom: '330px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px',
  },
};

export const Logoutbutton = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

 
  const closeModal = () => {
    setEditModalIsOpen(false);
  };

  return (
    <Container>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={() => {
            setEditModalIsOpen(true);
        }}
      >
        ログアウト
      </StyledButton>
      <LogoutModal isOpen={editModalIsOpen} onClose={closeModal} />
    </Container>
  );
};
