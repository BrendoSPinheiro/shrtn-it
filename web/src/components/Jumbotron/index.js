import * as S from './styles';

const Jumbotron = ({ children, loading = false }) => (
  <S.Wrapper loadingJumbo={loading}>
    {loading && (
      <S.Loading>
        <S.Spinner />
      </S.Loading>
    )}
    <h1>{children}</h1>
  </S.Wrapper>
);

export default Jumbotron;
