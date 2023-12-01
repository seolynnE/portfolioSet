import styled from "styled-components";

const Mark = styled.span`
  position: fixed;
  right: 20px;
  bottom: 40px;
  color: ${(props) => props.theme.colors.fontLightGrey};
  font-size: ${(props) => props.theme.fontSize.xs};
  transform: rotate(180deg);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  @media (max-width: 800px) {
    right: 10px;
  }
`;

function WatterMark() {
  return <Mark>© 2022 LynnJ</Mark>;
}

export default WatterMark;
