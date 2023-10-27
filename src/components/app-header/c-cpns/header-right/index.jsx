import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import { GlobalOutlined, SmileOutlined, BarsOutlined } from "@ant-design/icons";

const HeaderRight = memo(() => {
  const [showPanel,setShowPanel] = useState(false)

  //副作用代码
  useEffect(()=>{
    function widowHandleClick(){
      setShowPanel(false)
    }
    window.addEventListener("click",widowHandleClick,true)
    return()=>{
      window.removeEventListener("click",widowHandleClick)
    }
  },[])

  //点击函数
  function profileClickHandle(){
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <GlobalOutlined />
        </span>
      </div>
      <div className="profile" onClick={profileClickHandle}>
        <BarsOutlined />
        <SmileOutlined />
        {
          showPanel &&
          <div className="panel">
          <div className="top">
            <div className="item register">注册</div>
            <div className="item login">登录</div>
          </div>
          <div className="bottom">
            <div className="item ">出租房源</div>
            <div className="item ">开房体验</div>
            <div className="item ">其他</div>
          </div>
        </div>
        }
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
