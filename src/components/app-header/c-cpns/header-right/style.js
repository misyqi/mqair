import styled from 'styled-components'

export const RightWrapper = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;

.btns{
    display: flex;
    align-items: center;
    .btn{
        height: 18px;
        line-height: 18px;
        padding: 12px 15px;
        cursor: pointer;
        border-radius: 22px;

        &:hover{
            background-color: #f5f5f5;
        }
    }
}
.profile{
    position: relative;
    display: flex;
    width: 70px;
    height: 38px;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    transition: box-shadow 0.2s ease;
    &:hover{
        box-shadow: 0 2px 4px rgba(0,0,0,0.18);
    }

    .panel{
        position: absolute;
        top: 54px;
        right: 0;
        width: 240px;
        /* height: 200px; */
        background-color: #fff;
        border-radius: 10px;
        box-shadow:0 0 4px rgba(0,0,0,.18);
        .top,.bottom{
            padding: 0 10px;
        }
        .item{
            height: 40px;
            line-height: 40px;
            padding: 0 16px;
            &:hover{
                background-color: #ccc;
            }
        }
        .top{
            border-bottom: 1px solid #ddd;
        }
    }
}
`