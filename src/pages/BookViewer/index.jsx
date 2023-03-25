import { useState, useEffect } from "react"
import RelayComment from '../../components/RelayComment'
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

export default function BookViewer() {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  console.log(visible)
  useEffect(()=>{
    setTimeout(()=>{ setVisible(!visible) }, 100)
    return ()=>{setVisible(false);}
  }, [RelayComment])
  return (
    <>
      <RelayComment visible={visible} id={"효리"} cnt={1} text={"프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다"}></RelayComment>
      <RelayComment visible={visible} id={"다은"} cnt={2} text={"신데렐라신데렐라신데렐라신데렐라"}></RelayComment>
      <RelayComment visible={visible} id={"안뇽"} cnt={3} text={"감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다"}></RelayComment>
      <Button text="다음" className="next fix" onClick={() => navigate('/share/cover')}/>
      <RelayComment visible={visible} id={"호호"} cnt={4} text={"맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드"}></RelayComment>
      <Button text="다음" className="next fix" onClick={() => navigate('/share/cover')}/>
    </>
  )
}