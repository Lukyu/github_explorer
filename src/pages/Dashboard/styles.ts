import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size:48px;
  color:#3A3A3A;
  line-height:56px;

  margin-top:80px;
  max-width:433px;
  font-weight:bold;
`;

export const Form = styled.form<FormProps>`
  display:flex;
  max-width:714px;
  margin-top:40px;
  height:70px;

  input {
    flex:1;
    background: #fff;
    border-radius: 5px 0 0 5px;
    border:0;
    padding:0 24px;
    color:#3A3A3A;
    border: 2px solid #fff;
    border-right:0;

    ${(props) => props.hasError && css`
      border-color:#c53030;
    `}

    &::placeholder {
      color:#A8A8B3;
    }
  }

  button {
    width:210px;
    border:0;
    background:#04D361;
    border-radius: 0 5px 5px 0;
    color:#fff;
    font-weight:bold;
    transition: background ease 0.2s;

    &:hover {
      background: ${shade(0.2, '#04D361')}
    }
  }
`;

export const Error = styled.span`
  display:block;
  margin-top:8px;
  color:#c53030;
`;

export const Repositories = styled.div`
  max-width:714px;
  margin-top: 80px;

  a {
    background:#fff;
    width:100%;
    display:flex;
    padding:16px;
    align-items:center;
    text-decoration:none;
    border-radius:5px;
    transition: transform ease 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top:16px;
    }

    img {
      height:64px;
      border-radius: 50%;
    }

    div {
      display:flex;
      flex-direction:column;
      margin:16px;
      flex:1;

      strong {
        font-size:18px;
        color:#3D3D4D;
      }

      p {
        color:#A8A8B3;
        font-size:15px;
        margin-top:4px;
      }
    }

    svg {
      margin-left:auto;
      color:#C9C9D4;
    }
  }
`;
