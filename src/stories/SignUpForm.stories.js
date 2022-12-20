import SignUpForm from "../components/SignUpForm";

export default {
  title: "Component/SignUpForm",
  component: SignUpForm,
};

export const Default = (args) => {
  return <SignUpForm {...args} />;
};
