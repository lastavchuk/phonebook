import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Notification() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
        >
            <b>User</b> is already in contacts
        </ToastContainer>
    );
}

export default Notification;
