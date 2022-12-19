import styled from '@emotion/styled';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  margin-top: 16px;
  margin-left: 16px;
`;

function PageLoading() {
  return (
    <Wrapper>
      <CircularProgress size="5rem" />
      <StyledTypography variant="h5">Loading...</StyledTypography>
    </Wrapper>
  );
}
export default PageLoading;
