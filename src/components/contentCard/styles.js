import styled from "styled-components";
export const Title = styled.div`
  position: relative;
  background: #6c7dfe;
  h3{
    font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  color: #fff;
  font-size: 2.5em;
  font-weight: 700;
  margin: auto;
  text-align: center;
  word-break: break-word;
  white-space: normal;
  padding: 10px 4%;
  }
`;

export const Card = styled.div`
  position: relative;
  background: #fcfcfc;
  box-shadow: 0 4px 8px rgb(74 77 187 / 15%);
  border-radius: 50px;
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px;
  box-sizing: border-box;
  margin: 10px 0px;
`;
export const CardContentWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const CardImg = styled.img`
  width: 50px;
  height: auto;
  max-width: 100%;
  padding-right: 10px;
`;
export const CardContent = styled.div`
  max-width: 500px;
`;
export const Sender = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.0016em;
  color: #161616;
  margin: 0px 0px 5px 0px;
`;
export const Message = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #161616;
  margin: 0px 0px 10px 0px;
`;
