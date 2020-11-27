import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 100vh;
`;
export const SectionForm = styled.div`
  width: 40%;
  background: red;

  display: flex;
  justify-content: center;
`;
export const SectionDemonstration = styled.div`
  width: 60%;

  padding: 10rem;

  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;

  gap: 8rem;

  img {
    width: min(60rem, 100%);
    margin: 0 auto;
  }
`;
