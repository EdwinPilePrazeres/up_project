import styled from 'styled-components';
import  { Link } from 'react-router-dom';

export const SectionContact = styled.section`
    position: relative;
    min-height: 100vh;
    background: #557085;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: 0.5s;
`

export const ContactContainer = styled.div`
    position: relative;
    width: 800px;
    height: 500px;
    background: #fff;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
`

export const User = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
`

export const ImgBx = styled.div`
    position: absolute;
    width: 50%;
    height: 100%;
    transition: 0.5s;

    
`

export const ImgBx_img = styled.image`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100;
   object-fit: cover;
`

export const FormBx = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    transition: 0.5s;

    h2 {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 10px;
        width: 100%;
        color: #555;    
    }

    input {
        width: 100%;
        padding: 10px;
        background: #f5f5f5;
        color: #333;
        border: none;
        outline: none;
        box-shadow: none;
        font-size: 14px;
        margin: 8px 0;
        letter-spacing: 1px;
        font-weight: 300;    
    }

`

export const Submit_button = styled.input`
    max-width: 100px;
    background: #677eff;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1px;
    transition: 0.5s;
`

export const Signup = styled.p`
    position: relative;
    margin-top: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    color: #555;
    text-transform: uppercase;
    font-weight: 300;
`

export const Linkup = styled(Link)`
    font-weight: 600;
    text-decoration: none;
    color: #577eff;

`


