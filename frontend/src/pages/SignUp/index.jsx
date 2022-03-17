import Input from "../../components/Input";
import FormPage from "../../components/FormPage";
import Loading from "../../components/Loading";
import useForm from "../../hooks/useForm";
import { signUpServices } from "../../services/sessions.services";

const SignUp = () => {
  const { formData, loading, error, handleChange, handleSubmitForm } = useForm({
    email: "",
    password: "",
    name: "",
    surname: ""
  }, signUpServices);

  if (loading) {
    return (<Loading />);
  }

  return (
    <FormPage
      title="Sign up on Slack Clone"
      endpointChange="/login"
      onSubmit={(event) => handleSubmitForm(event)}
    >
      <Input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(event) => handleChange(event, "email")}
        required={true}
        autoComplete="email"
      />
      <Input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(event) => handleChange(event, "password")}
        required={true}
        autoComplete="password"
      />
      <Input
        type="text"
        placeholder="First name"
        value={formData.name}
        onChange={(event) => handleChange(event, "name")}
        required={true}
        autoComplete="First name"
      />
      <Input
        type="text"
        placeholder="Last name"
        value={formData.surname}
        onChange={(event) => handleChange(event, "surname")}
        required={true}
        autoComplete="Last name"
      />
      <Input
        type="submit"
        value="Sign Up"
      />
    </FormPage>
  );
};

export default SignUp;
