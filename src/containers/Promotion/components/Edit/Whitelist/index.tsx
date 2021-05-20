import React, { useEffect, useState } from 'react';
import { Button, Divider, Tabs } from 'antd';
import ReadExel from 'util/ReadExcel';
import TableWhitelistBase from 'util/TableWhitelist';
import { WhitelistContext } from './WhitelistContex';
import Whitelist from './Whitelist';
import TableWhitelistDelete from './WhitelistDelete';
import TableWhitelistEdit from './WhitelistEdit';
import { EditWhitelist } from 'containers/Promotion/interface';

const { TabPane } = Tabs;

const Index: React.FC<{ id: string; editWhitelist: EditWhitelist; handleWhitelist: (data: any) => void }> = ({
    id,
    editWhitelist,
    handleWhitelist,
}) => {
    const [tab, setTab] = useState('edit');
    const [time, setTime] = useState<any>(null);
    const {
        whitelistAddnew,
        whitelistEdit,
        whitelistRemove,
        whitelistRecords,
        setWhitelistAddnew,
        setWhitelistEdit,
        setWhitelistRemove,
        setwhitelistRecords,
    } = editWhitelist;

    // Add new
    function onAddNewWhitelist() {
        setWhitelistAddnew([
            {
                id: `NEW${Math.random()}`,
                fullName: '',
                localNumber: '',
                countryCode: '855',
                isError: true,
                isNew: true,
            },
            ...whitelistAddnew,
        ]);
        setTab('addNew');
    }

    // Add new by Excel file
    function onReadExcelFinish(val: any[]) {
        setWhitelistAddnew(val);
    }

    function onRemoveRecords(rId: string) {
        // Un remove records
        const isUnremove = whitelistRemove.filter((rem: any) => rem.id !== rId);
        setWhitelistRemove(isUnremove);

        // return remove records to whitelistRecords
        if (!isUnremove.length) setwhitelistRecords(whitelistRecords);
        const preRecord = whitelistRecords.filter((rec: any) => !isUnremove.find((fin: any) => fin.id === rec.id));
        setwhitelistRecords(preRecord);

        // Edit
        const editData: any = whitelistRemove?.find((re: any) => re.id === rId) || {};
        if (editData.isEdit) {
            setWhitelistEdit([{ ...editData }, ...whitelistEdit]);
        }
    }

    useEffect(() => {
        clearTimeout(time);
        setTime(
            setTimeout(() => {
                handleWhitelist({ whitelistAddnew, whitelistEdit, whitelistRemove });
            }, 500),
        );
    }, [whitelistAddnew, whitelistEdit, whitelistRemove]);
    return (
        <WhitelistContext.Provider
            value={{
                whitelistRecords,
                whitelistAddnew,
                whitelistRemove,
                whitelistEdit,
                setwhitelistRecords,
                onAddNewWhitelist,
                setWhitelistRemove,
                // onRemoveRecords,
                setWhitelistEdit,
                onReadExcelFinish,
                setTab,
            }}
        >
            <Whitelist id={id} />
            <Divider orientation="left">SECTION :: UPDATE</Divider>
            <Tabs id="whitelist" activeKey={tab} onChange={setTab}>
                <TabPane tab={`Edit (${whitelistEdit.length})`} key="edit">
                    <TableWhitelistEdit records={whitelistEdit} />
                </TabPane>
                <TabPane tab={`Add New (${whitelistAddnew.length})`} key="addNew">
                    <div style={{ display: 'flex' }}>
                        <Button type="primary" onClick={onAddNewWhitelist}>
                            Add New
                        </Button>
                        <ReadExel onFinish={onReadExcelFinish} />
                    </div>
                    <TableWhitelistBase whitelistRecords={whitelistAddnew} setwhitelistRecords={setWhitelistAddnew} />
                </TabPane>
                <TabPane tab={`Remove (${whitelistRemove.length})`} key="remove">
                    <TableWhitelistDelete records={whitelistRemove} onRemoveRecords={onRemoveRecords} />
                </TabPane>
            </Tabs>
        </WhitelistContext.Provider>
    );
};

export default Index;
