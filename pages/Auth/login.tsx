import Layout from "../../component/Layout/Layout";
import LoginForm from "../../component/LoginForm";

export default function Login() {
  return (
    <Layout 
    pageTitle="Login"
    pageDeskripsi="Login Sebagi Mitra Penjual"
    pageUrl={`/auth/login`}
    >
      <LoginForm />
    </Layout>
  );
}
