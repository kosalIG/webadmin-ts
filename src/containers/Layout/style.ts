import { Layout } from 'antd';
import styled from 'styled-components';

const { Content, Footer, Sider } = Layout;

const WrapSider = styled(Sider)`
    position: relative;
    height: 100vh;
    z-index: 99;
`;

const WrapContent = styled(Content)`
    position: relative;
    top: 45px;
    height: 100vh;
    padding: 25px;
    z-index: 9;
    overflow-y: auto;
`;
const CustomLoading = styled.div`
    position: relative !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
const Logo = styled.h1`
    padding: 10px;
    text-align: center;
    color: #1890ff;
`;
const SubLogo = styled.div`
    background: rgba(255, 255, 255, 0.3);
    padding: 10px;
    border-radius: 5px;
`;
export { WrapSider, WrapContent, CustomLoading, Footer, Layout, Logo, SubLogo };
