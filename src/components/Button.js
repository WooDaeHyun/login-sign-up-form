import styled from "@emotion/styled";

const Button = styled.button`
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px, 6px;
  color: white;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }

  &:active {
    background-color: #333;
  }
`;

export default Button;

//스타일드 컴포넌트에서 주의해야 할 점은 반드시 ; 찍어주어야함
//적용 안해도 에러 발생 안하고 적용이 안된다!!
//&:hover는 마우스 올렸을 때
//&:active는 마우스 클릭했을 때
