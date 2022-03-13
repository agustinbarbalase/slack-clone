import Input from "../../components/Input";
import FormPage from "../../components/FormPage";

const Login = () => {
  return (
    <FormPage
      title="Login on Slack Clone"
    >
      <Input
        type="email"
        placeholder="Email"
      />
      <Input
        type="password"
        placeholder="Password"
      />
      <Input
        type="submit"
        value="Login"
      />
    </FormPage>
  );
};

export default Login;
