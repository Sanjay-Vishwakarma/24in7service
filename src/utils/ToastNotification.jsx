import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showToast = (message, type = "success") => {
    toast.dismiss(); // Dismiss all previous toasts
    switch (type) {
        case "success":
            toast.success(message, { position: "top-left" });
            break;
        case "error":
            toast.error(message, { position: "top-left" });
            break;
        case "warning":
            toast.warning(message, { position: "top-left" });
            break;
        case "info":
            toast.info(message, { position: "top-left" });
            break;
        default:
            toast(message, { position: "top-left" });
            break;
    }
};

const ToastNotification = () => {
    return <ToastContainer autoClose={2000} />;
};

export { showToast, ToastNotification };
