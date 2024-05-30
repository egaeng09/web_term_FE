import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  return (
    <NavContainer>
      <MenuItemContainer>
        <LogoItem onClick = {() => navigate("/")}>로고</LogoItem>
        <MenuItem onClick = {() => navigate("/detail")}>캠핑장</MenuItem>
        <MenuItem>메뉴</MenuItem>
        <MenuItem>메뉴</MenuItem>
      </MenuItemContainer>
      <ItemContainer>
        {isLogin ? <MenuItem>마이페이지</MenuItem> : <MenuItem onClick = {() => navigate("/login")}>로그인</MenuItem>}
        {isLogin ? <MenuItem>로그아웃</MenuItem> : <MenuItem onClick = {() => navigate("/signup")}>회원가입</MenuItem>}
      </ItemContainer>
    </NavContainer>
  );
}

export default NavBar;

const NavContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #333333;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 400px;
  margin-right : 30px;
`;

const MenuItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 800px;
`;

const MenuItem = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 100px;
  margin: 0 auto;
  cursor : pointer;
`;

const LogoItem = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 100px;
  margin: 0 auto;
  cursor : pointer;
  width : 250px;
  margin-right : 20px;
  text-align : center;
`;
