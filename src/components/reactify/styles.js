import styled, { keyframes } from "styled-components";
export const ReactorContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

export const Reactor = styled.button`
  width: 50px;
  height: 50px;
  background: #edeef0;
  border: 1px solid #ffffff;
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
`;
export const MainReactContainer = styled.div`
  position: relative;
`;
export const EmojiImg = styled.img`
  width: 16px;
  height: auto;
`;
const ReactionBoxAnimation = keyframes`
 0% { top: -15%;
     }
 25% { top: -20%;
     }
 50% { top: -40%;
    }
    75% { top: -55%;
        }
 100% { top: -70%;
    }`;
const ReactedListAnimation = keyframes`
 0% { top: 0%;
     }
100% { top: 105%;
    }`;
export const ReactionBox = styled.div`
  // max-width:200px;
  // overflow-x: scroll;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  border-radius: 24px;
  text-align: center;
  padding: 8px;
  position: absolute;
  z-index: 1;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  ${({ show }) =>
    show
      ? `display: block;
         visibility: visible;
          opacity: 1;`
      : `display: none;
        visibility: hidden;
        opacity: 0;`};
  transition: opacity 0.5s;
  animation-name: ${ReactionBoxAnimation};
  animation-duration: 0.14s;
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ReactionsWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const EmojiTextBox = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #161616;
  border-radius: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  opacity: 0;
  p {
    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.32px;
    margin: 0;
  }
`;
export const EmojiReact = styled.button`
  position: relative;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  padding: 3px 8px;
  letter-spacing: 0.0016em;
  background: transparent;
  border: transparent;
  &:hover {
    transform: scale(1.35) translateY(-7px);
    transition-duration: 0.18s;
    transition-timing-function: ease-out;
  }
  &:hover ${EmojiTextBox} {
    visibility: visible;
    opacity: 1;
  }
`;
export const ReactedListBox = styled.div`
  min-width: 200px;
  max-width: 350px;
  max-height: 150px;
  overflow-y: auto;
  display: none;
  visibility: hidden;
  opacity: 0;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.03);
  border-radius: 14px;
  text-align: center;
  padding: 8px;
  position: absolute;
  z-index: 999;
  top: 105%;
  left: 50%;
  transform: translate(-50%, 0%);
  margin: 0;
  transition: opacity 0.5s;
  animation-name: ${ReactedListAnimation};
  animation-duration: 0.2s;
  ::-webkit-scrollbar {
    width: 7px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 5px;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #6c7dfe; 
    border-radius: 5px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background:  #6d7dfe; 
  }
`;
export const ReactedBoxContainer = styled.div`
  position: relative;
  background: #f4f4f4;
  box-sizing: border-box;
  border-radius: 100px;
  ${({ activated }) =>
    activated !== undefined && activated
      ? `border: 1px solid #0F62FE;
  cursor:pointer;`
      : `border: 1px solid #FFFFFF;`};
  ${({ activated }) =>
    activated !== undefined &&
    activated &&
    `&:hover ${ReactedListBox} {
      display: block;
      visibility: visible;
      opacity: 1;
      border:1px solid #0F62FE;
    }`}
    &:hover ${ReactedListBox} {
      display: block;
      visibility: visible;
      opacity: 1;
    }
`;

export const ReactedPerson = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #161616;
  margin: 0px 0px 8px 0px;
  ${({ head }) =>
    head !== undefined &&
    head &&
    `background: #6c7dfe;color: #fff;`};
`;
export const ReactedBox = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  min-width: 40px;
`;

export const ReactedEmoji = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
`;
export const ReactedCount = styled.p`
  font-family: IBM Plex Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.32px;
  color: #525252;
  margin: 0;
`;
