import { ToastContainer, toast } from 'react-toastify';

export const showToast = (message, type, theme) => toast(message, {
    position: "top-left",
    type,
    autoClose: 1000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme,
})
