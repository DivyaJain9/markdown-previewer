import { useState } from "react";
import MarkdownGuide from "./components/MarkdownGuide"
import MarkdownInput from "./components/MarkdownInput"
import MarkdownOutput from "./components/MarkdownOutput"
import Header from "./components/Header"
import styled from "styled-components";

const Container = styled.div`
display: flex;
width: 100%;
`;

const GlobalStyles = styled.div`
body{
  margin: 0;
  padding:0;
  font-family: Arial, sans-sarif;
  box-sizing: border-box;
  color: #279

}
`;


function App() {

  const [markdownText, setMarkdownText] = useState("Hello World");
  const [ showGuide, setShowGuide] = useState(false);
console.log(showGuide)
const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  setMarkdownText(e.target.value);
};


  return (
    
    <GlobalStyles>
  
    <Header onToggleGuide={ () => setShowGuide(!showGuide)} />

  
    {showGuide && <MarkdownGuide/> }



    <Container>
    <MarkdownInput onChange={handleChange} text={markdownText}/>
    <MarkdownOutput markdown={markdownText}/>
    </Container>
    </GlobalStyles>

  );
};


  
  
export default App