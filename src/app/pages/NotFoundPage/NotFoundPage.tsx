import { Link } from '@components';
import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 320px;
`;

const Title = styled.div`
  margin-top: -8vh;
  font-weight: bold;
  color: ${(p) => p.theme.palette.text.primary};
  font-size: 3.375rem;

  span {
    font-size: 3.125rem;
  }
`;

const StyledTypography = styled(Typography)`
  margin: 0.625rem 0 1.5rem 0;
`;

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Wrapper>
        <Title>
          4
          <span role="img" aria-label="Crying Face">
            😢
          </span>
          4
        </Title>
        <StyledTypography variant="body1" color="textSecondary">
          Page not found.
        </StyledTypography>
        <Link to="/">Return to Home Page</Link>
      </Wrapper>
    </>
  );
}

export default NotFoundPage;
