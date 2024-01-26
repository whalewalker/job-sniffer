import toast from "react-hot-toast";

export const notifySuccess = (text) => toast.success(text);


export const notifyError = (text) => toast.error(text);
