import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  padding: 20px 0;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.a`
  img {
    width: 140px;
  }
  @media only screen and (min-width: 768px) {
    img {
      width: 220px;
    }
  }
`

export const RightSide = styled.div`
  a {
    font-size: 20px
  }
`