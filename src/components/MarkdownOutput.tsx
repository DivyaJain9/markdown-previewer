
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const OutputConatiner = styled.div`
width: 50%;
padding: 20px;
box-sizing: border-box;
overflow: auto;
border-left: 1px solid #343;
backgroundcolor: #f9f9f9;
;`
interface MarkdownOutputProps{
  markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputConatiner>
      
    <ReactMarkdown>{markdown}</ReactMarkdown>

    </OutputConatiner>
  );
};

export default MarkdownOutput;