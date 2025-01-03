// components/molecules/ModalContent/index.tsx
'use client';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, TextField, Typography } from '@mui/material';
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

interface FormData {
  username: string;
  password: string;
}



export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const closeModal = () => {
    onClose();
  };

  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: ''
  });

  const hundleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
      console.log("test");
    const baseUrl = new URL(`http://localhost:3001/auth/login`);
    const response = await fetch(baseUrl,{
      //const response = await fetch(`/rest/v1/auth/login`,{
      method: 'POST',
      headers: {
        //'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
        //'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''}`,
        'Content-Type': 'application/json'
      },
     body: JSON.stringify({
        username: formData.username,
        password: formData.password
      })
    });
   const data = await response.json();
  } catch (error) {
    console.log("login error")
  }
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} ariaHideApp={false}>
      <LoginCard>
        <Typography variant="h5" gutterBottom>
          ログイン
        </Typography>
        <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          variant="outlined"
          margin="normal"
          fullWidth
          label="username"
          value={formData.username}
          onChange={hundleChange}
        />
        <TextField
          name="password"
          variant="outlined"
          margin="normal"
          fullWidth
          label="password"
          type="password"
          autoComplete="username"
          //aria-invalid="false"
          value={formData.password}
          onChange={hundleChange}
        />
        
        <Button variant="contained" color="primary" onClick={closeModal}>
          キャンセル
        </Button>
        <Button type="submit" variant="contained">
          ログイン
        </Button>
        </form>
        
      </LoginCard>
    </Modal>
  );
};

