import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content:space-between;

  a {
    display:flex;
    align-items:center;
    text-decoration:none;
    color:#A8A8B3;
    transition: color 0.2s;
    font-size:16px;

    &:hover {
      color:${shade(0.2, '#A8A8B3')}
    }

    svg {
      margin-right:4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top:80px;

  header {
    display:flex;
    align-items:center;

    img {
      width:120px;
      border-radius:50%;
    }

    div {
      margin-left: 32px;

      strong {
        color:#3D3D4D;
        font-size:30px;
      }

      p {
        color:#737380;
        font-size:18px;
      }
    }
  }

  ul {
    margin-top:40px;
    display:flex;

    li {
      list-style:none;

      & + li {
        margin-left: 60px;
      }

      strong {
        font-size:30px;
        display:block;
        color:#3D3D4D;
      }

      span {
        display:block;
        color:#6C6C80;
        font-size:18px;
      }
    }
  }
`;

export const Issues = styled.div`
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
