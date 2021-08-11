import React from 'react';
import { Breadcrumb } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import _route from '_route';

const Div = styled.div`
    padding: 10px 0 0 10px;
    top: 10px;
    position: fixed;
    z-index: 10;
`;
export interface BreadCrumbProps {
    propRoutes: any[];
    propPath?: any;
}
const Breadcrumbs: React.FC<BreadCrumbProps> = ({ propRoutes, propPath }) => {
    const route = _route.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { component, ...newItem } = item;
        return { ...newItem };
    });

    const breadRoute = route.filter((x) => (propRoutes || []).find((y) => y === x.id));
    const lastIndex = breadRoute.length - 1;

    return (
        <Div>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/">Home</Link>
                </Breadcrumb.Item>
                {breadRoute?.map((item, idx) => (
                    <Breadcrumb.Item key={Math.random()}>
                        {idx === lastIndex ? item.name : <Link to={item.path}>{item.name}</Link>}
                    </Breadcrumb.Item>
                ))}
                {propPath && <Breadcrumb.Item>{propPath.name}</Breadcrumb.Item>}
            </Breadcrumb>
        </Div>
    );
};
export default Breadcrumbs;
