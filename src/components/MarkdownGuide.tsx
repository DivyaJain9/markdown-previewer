import styled from "styled-components";

const GuideConatiner = styled.div`
background-color: #f9f9f9;
padding: 10px;
margin: 10px;
border: 1px solid black;
`;

const MarkdownGuide: React.FC = () => {
  return (
    <GuideConatiner>
    <div>
      <h1>MarkdownGuide</h1>
      <ul>
        <h1>heading1</h1>
        <h2>heading2</h2>
        <h3>heading3</h3>
        <h4>heading4</h4>
        <h5>bold</h5>
        <h6>italics</h6>
      </ul>
      </div>
      </GuideConatiner>);

};

export default MarkdownGuide;

