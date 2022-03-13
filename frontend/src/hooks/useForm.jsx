import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { loginServices, signUpServices } from "../services/sessions.services";

const useForm = (inputs, endpoint) => {
  const [formData, setFormData] = useState({
    ...inputs,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { setToken } = useContext(AuthContext);
  let navigate = useNavigate();

  const handleChange = (event, key) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };

  const ENDPOINT_TARGET = {
    login: (formData) => {
      loginServices(formData.email, formData.password)
        .then((res) => setToken(res.data.token))
        .finally(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    },
    signup: (formData) => {
      signUpServices(
        formData.name,
        formData.surname,
        formData.email,
        formData.password
      )
        .then((res) => setToken(res.data.token))
        .finally(() => {
          setLoading(false);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          setError(true);
        });
    },
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    // ENDPOINT_TARGET[endpoint](formData);
  };

  return {
    formData,
    loading,
    error,
    handleChange,
    handleSubmitForm,
  };
};

export default useForm;
