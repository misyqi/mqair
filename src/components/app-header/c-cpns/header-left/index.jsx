import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <img src={require("@/assets/img/icon.png")} alt="" />  
    </LeftWrapper>
  )
})

export default HeaderLeft