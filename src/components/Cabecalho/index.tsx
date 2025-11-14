import styled from 'styled-components';

const HeaderEstilizado = styled.header`
  background-color: var(--cor-secundaria);
  color: var(--cor-principal);
  text-align: center;
  padding: 24px 0;
`;

const Cabecalho = () => (
  <HeaderEstilizado>
    <h1>EBAC Jobs</h1>
  </HeaderEstilizado>
);

export default Cabecalho;