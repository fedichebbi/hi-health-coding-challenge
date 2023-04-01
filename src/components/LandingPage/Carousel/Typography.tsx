import styled from 'styled-components';

interface TypographyProps {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  marginBottom?: string;
  height?:string;
}

const Typography = styled.span<TypographyProps>`
  font-style: normal;
  font-weight: 400;
  color: #3A464F;
  font-size: ${props => props.fontSize};
  line-height: ${props => props.lineHeight};
  text-align: center;
  letter-spacing: ${props => props.letterSpacing};
  margin-bottom: ${props => props.marginBottom ?? '0px'};
  height:${props => props.height ?? 'auto'};
  width: 60%;
`;

export default Typography;
