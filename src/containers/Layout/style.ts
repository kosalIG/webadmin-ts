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
    top: 65px;
    max-height: 95vh !important;
    padding: 10px;
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
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    justify-content: space-evenly;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    color: #0e71eb;
`;
const SubLogo = styled.div`
    /* padding: 10px; */
    margin-top: 5px;
    font-weight: 700;
`;
export { WrapSider, WrapContent, CustomLoading, Footer, Layout, Logo, SubLogo };
