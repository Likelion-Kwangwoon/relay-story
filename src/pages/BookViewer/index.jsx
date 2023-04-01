import { useState, useEffect } from "react";
import RelayComment from "../../components/RelayComment";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";

export default function BookViewer() {
  // const comments = [
  //   {
  //     id: "효리",
  //     text: "프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다프롤로그입니다"
  //   },
  //   {
  //     id: "다은",
  //     text: "신데렐라신데렐라신데렐라신데렐라"
  //   },
  //   {
  //     id: "안뇽",
  //     text: "감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다감삼다"
  //   },
  //   {
  //     id: "호호",
  //     text: "맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드맥도날드"
  //   },
  //   {
  //     id: "호호",
  //     text: "롯데리아"
  //   },
  //   {
  //     id: "호호",
  //     text: "버거킹버거킹버거킹버거킹버거킹버거킹버거킹버거킹버거킹버거킹버거킹버거킹"
  //   },
  //   {
  //     id: "호호",
  //     text: "갤럭시와퍼 하나 주세요."
  //   },
  //   {
  //     id: "호호",
  //     text: "그러자 놀라운 일이 벌어졌다."
  //   },
  //   {
  //     id: "호호",
  //     text: "바로 외계인이 나타난 것이다이다이다이다이"
  //   },
  //   {
  //     id: "호호",
  //     text: "갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다.갤럭시는 이 일을 기억할 것입니다."
  //   },
  // ]
  const navigate = useNavigate();
  const [comments, setComments] = useState('')
  const [book, setBook] = useState()
  const [visible, setVisible] = useState(Array(comments.length).fill(false));
  const location = useLocation()

  useEffect(() => {
    setBook(location.state.bookDetail)
    setComments(location.state.bookDetail.comments)
  }, [])
  
  

  useEffect(() => {
    for (let i = 0; i < comments.length; i++) {
      setTimeout(() => {
        // 해당 RelayComment 컴포넌트의 visible 값을 true로 변경
        setVisible((prevVisible) => {
          const newVisible = [...prevVisible];
          newVisible[i] = true;
          return newVisible;
        });
      }, 1500 * (i));
    }
  }, []);

  return (
    <>
      {
        comments && comments.map((comment, i) => (
        <RelayComment
          visible={visible[i]}
          nickname={comment.nickname}
          cnt={i + 1}
          content={comment.content}
          key={i}
        />
      ))}
      <Button text="다음" className="next fix" onClick={() => navigate('/share/cover', {state: {book}})} />
    </>
  );
}
