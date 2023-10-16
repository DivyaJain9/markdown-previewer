import React from 'react'
import styled from 'styled-components';

const InputContainer = styled.div`
width: 50%;
height: calc(100vh-58.5px);
padding: 20px;
box-sizing: border-box;
`;

const styledTextArea = styled.textarea`
width: 100%;
height: 100%;
resize: none;
border: none;
padding: 10px;
box-sizing: border-box;
font-size: 16px;
outline: none;
`;


type InputProps = {
  text:string
  onChange: (e : React.ChangeEvent<HTMLTextAreaElement>)=>void
    
    // add handlechange function  
}

const MarkdownInput = (props:InputProps) => {
  return (
    <textarea value={props.text} onChange={props.onChange}></textarea>
  )
}

export default MarkdownInput
