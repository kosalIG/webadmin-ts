import React from 'react';
import { Card, Table } from 'antd';
import useSearch from 'util/useSearch';
import Pagination from 'components/Pagination';

import AddUser from './components/AddUser';
import GroupProfile from './components/GroupProfile';
import useColumn from './useColumn';
import { useGetGroupDetail, useGetGroupUserList } from './api';
import Breadcrumbs from 'components/Breadcrumbs';

const Index: React.FC = () => {
    // GROUP
    const { data, loading } = useGetGroupDetail();

    // USER LIST
    const { userData, loading: userLoading, onSearch, getGroupUserList, onPagin } = useGetGroupUserList();
    const { userList, metadata } = userData || {};

    // SEARCH
    const { handleSearch } = useSearch((fields: any) => onSearch(fields));

    // TABLE COLUMN
    const { column } = useColumn({ handleSearch, getGroupUserList });
    return (
        <Card title="Group driver detail" type="inner">
            <Breadcrumbs propRoutes={['WEB:GROUP:READ', 'WEB:GROUP:READ_DETAIL']} />

            <GroupProfile data={data} loading={loading} />
            <AddUser onSuccess={getGroupUserList} />
            <Table
                dataSource={userList}
                loading={userLoading}
                columns={column}
                bordered
                size="middle"
                pagination={false}
            />
            <Pagination metadata={metadata} onPagin={(offset, limit) => onPagin({ offset, limit })} />
        </Card>
    );
};

export default Index;
