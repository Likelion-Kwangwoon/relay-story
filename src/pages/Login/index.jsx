import { useEffect } from "react";
import { signUp } from "../../api/api";

export default function Login() {
  let code = new URL(window.location.href).searchParams.get("code");

  const handleSignUp = async (code) => {
    try {
      const response = await signUp(code)
      console.log(response);
      localStorage.setItem('accessToken', response.token.access)
      localStorage.setItem('expiredAt', new Date().getTime() + 30 * 60 * 1000)
      window.location.replace('/')
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    code && handleSignUp(code)
  }, [])
}
