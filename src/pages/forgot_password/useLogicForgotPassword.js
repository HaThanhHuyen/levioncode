import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { API_URL, AUTHORIZATION_BEARIER } from "../../constants";
import toastNofication from "../../components/ToastNofication";

function useLogicForgotPassword() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [validMsg, setValidMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const validate = () => {
    const msg = {};

    if (email === "") {
      msg.email = "Please enter the email";
    } else if (!isEmail(email)) {
      msg.email = "Please enter the valid email";
    }

    setValidMsg(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };
  return {
    email,
    setEmail,
    loading,
    setLoading,
    onsubmit,
    validMsg,
  };
}

export default useLogicForgotPassword;