import List from '@mui/material/List';
import styled from '@emotion/styled';
import {
  navigationConfig,
  externalNavigationConfig,
} from 'layout/navigation-config';
import NavigationListItem from './NavigationListItem';
import ExternalNavigationListItem from './ExternalNavigationListItem';

const ExternalLinksWrapper = styled.div`
  border-top: 1px solid ${(p) => p.theme.palette.grey[400]};
  margin-top: 24px;
  padding-top: 24px;
`;

const StyledList = styled(List)`
  flex-grow: 1;
`;

function NavigationList() {
  return (
    <StyledList>
      {navigationConfig.map((config) => (
        <NavigationListItem key={config.id} {...config} />
      ))}
      <ExternalLinksWrapper>
        {externalNavigationConfig.map((config) => (
          <ExternalNavigationListItem key={config.id} {...config} />
        ))}
      </ExternalLinksWrapper>
    </StyledList>
  );
}

export default NavigationList;
