import styled from '@emotion/styled';
import { StyleConstants } from 'styles/StyleConstants';
// import Auth from './Auth';
import Navigation, {
  NavigationProps as AppNavigationProps,
} from './Navigation';
import Toolbar, { ToolbarProps as AppToolbarProps } from './Toolbar';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

interface WrapperProps {
  offsetHeight?: string;
}
const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: row;
  height: calc(100vh - ${(p) => p.offsetHeight});
`;
Wrapper.defaultProps = {
  offsetHeight: '0px',
};

const ContentWrapper = styled.div`
  overflow: auto;
  width: 100%;
  background-color: ${(p) => p.theme.palette.background.default};
  color: ${(p) => p.theme.palette.text.primary};
`;
export interface PureLayoutProps {
  config?: LayoutConfig;
  children: React.ReactNode;
}
interface LayoutConfig {
  navigation?: AppNavigationProps;
  toolbar?: Pick<AppToolbarProps, 'display'>;
}
export function PureLayout({ config, children }: PureLayoutProps) {
  const height = StyleConstants.TOOLBAR_HEIGHT;

  return (
    <LayoutWrapper>
      <Toolbar height={height} {...config?.toolbar} />
      <Wrapper offsetHeight={config?.toolbar?.display ? height : undefined}>
        <Navigation {...config?.navigation} />
        <ContentWrapper>{children}</ContentWrapper>
      </Wrapper>
    </LayoutWrapper>
  );
}

function Layout(props: PureLayoutProps) {
  return (
    // <Auth>
    <PureLayout {...props} />
    // </Auth>
  );
}
Layout.defaultProps = {
  config: {
    navigation: Navigation.defaultProps,
    toolbar: Toolbar.defaultProps,
  },
};

export default Layout;
