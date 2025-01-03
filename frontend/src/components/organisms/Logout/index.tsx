// components/organisms/Logout/index.tsx
'use client';

import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { logout } from '@/stores/reducers/AuthSlice';

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

// スタイルのカスタマイズ（オプション）
const StyledButton = styled(Button)(({ theme }) => ({
  minWidth: '70px',
  fontSize: '10px',
  height: '25px',
}));

interface LogoutModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

export const LogoutModal = ({ isOpen, onClose }: LogoutModalProps) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    onClose();
  };

  const hundlesubmit = async () => {
    dispatch(logout());
    localStorage.removeItem('token');
    closeModal(); //モーダルをとじる
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      <LoginCard>
        <Typography variant="h6" gutterBottom>
          ログアウトしますか？
        </Typography>
        <StyledButton variant="contained" color="primary" onClick={closeModal}>
          キャンセル
        </StyledButton>
        <StyledButton onClick={hundlesubmit} variant="contained">
          ログアウト
        </StyledButton>
      </LoginCard>
    </Modal>
  );
};
