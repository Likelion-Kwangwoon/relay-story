import { useEffect } from "react";
import { signUp } from "../../api/api";

export default function Login() {
  let code = new URL(window.location.href).searchParams.get("code");

  const handleSignUp = async (code) => {
    try {
      const response = await signUp(code)
      localStorage.setItem('accessToken', response.token.access)

      window.location.replace('/')
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    code && handleSignUp(code)
  }, [])
}
