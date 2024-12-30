// components/molecules/ModalContent/index.tsx
'use client';
import { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import Modal from 'react-modal';


// const Container = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justyContant: 'center',
//   //height: '100px',
//   backgroundColor: '#f0f0f0',
// });

// const LoginCard = styled('div')({
//   backgroundColor: '#fff',
//   padding: '20px',
//   borderRadius: '10px',
//   boxShadow: '0 0 10px rgba(0,0,0,0.1)',
// });

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.75)'
      },
      content: {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px'
      }
  };
  

export default function LoginModal() {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);

  const closeModal = () => {
    setEditModalIsOpen(false);
  };

  return (
    <Modal
      isOpen={editModalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
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
      <Button variant="contained" color="primary">
        ログイン
      </Button>
    </Modal>
  );
}
