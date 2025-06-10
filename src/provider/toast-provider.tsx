import { ToastContainer } from 'react-toastify';

interface Props {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: Props) => {
  return (
    <>
      {children}
      <ToastContainer autoClose={1500} closeOnClick pauseOnHover />
    </>
  );
};

export default ToastProvider;
