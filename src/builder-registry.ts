import { Builder } from "@builder.io/react";
import Footer from "./components/LoginPage/Footer";
import LoginForm from "./components/LoginPage/LoginForm";

Builder.registerComponent(LoginForm, {
  name: "LoginForm",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});
