import React, { memo } from "react";
import { CenterWrapper } from "./style";
import { SearchOutlined } from '@ant-design/icons';
const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className="search-bar">
        <div className="text">搜索房源和体验</div>
        <span className="icon"><SearchOutlined /></span>
      </div>
    </CenterWrapper>
  );
});

export default HeaderCenter;
