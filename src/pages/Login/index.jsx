import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { signUp } from "../../api/api";

// 삭제
export default function Login() {
  const navigate = useNavigate()
  let code = new URL(window.location.href).searchParams.get("code");

  const handleSignUp = async (code) => {
    try {
      const response = await signUp(code)
      localStorage.setItem('accessToken', response.token.access)

      navigate('/', { state : true})
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    code && handleSignUp(code)
  }, [])
}
