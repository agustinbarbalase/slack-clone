import Input from "../../components/Input";
import FormPage from "../../components/FormPage";

const SignUp = () => {
  return (
    <FormPage
      title="Sign up on Slack Clone"
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
        type="text"
        placeholder="First Name"
      />
      <Input
        type="text"
        placeholder="Last Name"
      />
      <Input
        type="submit"
        value="Login"
      />
    </FormPage>
  );
};

export default SignUp;
