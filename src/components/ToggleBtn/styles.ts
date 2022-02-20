import styled from 'styled-components';

export const Container = styled.div`
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  outline: none;
  cursor: pointer;
  
}
.switch input {
  position: absolute;
  top: -99999px;
  left: -99999px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: hsl(230, 22%, 74%);
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}
input:checked + .slider {
  background-image: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
}
input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
  }
`;
