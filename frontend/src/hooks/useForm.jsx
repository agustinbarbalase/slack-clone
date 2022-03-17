import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const useForm = (inputs, endpointService) => {
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

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    endpointService(formData)
      .then((res) => setToken(res.data.token))
      .finally(() => {
        setLoading(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
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
