import Input from "../../components/Input";
import FormPage from "../../components/FormPage";
import Loading from "../../components/Loading";
import useForm from "../../hooks/useForm";

const Login = () => {
  const { formData, loading, error, handleChange, handleSubmitForm } = useForm(
    {
      email: "",
      password: "",
    },
    "login"
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <FormPage
      title="Login on Slack Clone"
      endpointChange="/signup"
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
      <Input type="submit" value="Login" />
    </FormPage>
  );
};

export default Login;
