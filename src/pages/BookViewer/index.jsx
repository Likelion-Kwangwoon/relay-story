import { useState, useEffect } from "react";
import RelayComment from "../../components/RelayComment";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${props => props.theme.color.bg};
  @media screen and (max-width: 500px) {
    height: 100px;
  }
`

export default function BookViewer() {
  const navigate = useNavigate();
  const [comments, setComments] = useState('')
  const [book, setBook] = useState()
  const location = useLocation()

  useEffect(() => {
    setBook(location.state.bookDetail)
    setComments(location.state.bookDetail.comments)
  }, [])

  return (
    <>
      { comments && <RelayComment comments={comments} /> }
      <Div></Div>
      <Button text="다음" className="next fix" onClick={() => navigate('/share/cover', {state: {book}})} />
    </>
  );
}
