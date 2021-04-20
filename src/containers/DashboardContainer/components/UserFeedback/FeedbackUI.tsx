import React from 'react';
import { Card, Avatar, Tag } from 'antd';
import styled from 'styled-components';
import { UserOutlined, CommentOutlined } from '@ant-design/icons';
import dateFormat from 'dateformat';
import Ratings from 'react-ratings-declarative';
import { FeedbackUIProps } from '../../interface';

const Container = styled.div`
    display: flex;
    width: 100%;
`;

const Avatars = styled(Avatar)`
    margin-top: 4px !important;
    margin-right: 15px !important;
    position: relative;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
`;
const Title = styled.div`
    word-break: break-all !important;
    max-width: 100%;
    margin-bottom: 4px;
    margin-top: 4px;
`;

const Tags = styled.div`
    margin-bottom: 10px;
`;

const Footer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const FeedbackUI: React.FC<FeedbackUIProps> = ({ item }) => {
    return (
        <Card bodyStyle={{ margin: 0, padding: 5 }} hoverable style={{ cursor: 'default' }}>
            <Container>
                <div style={{ position: 'relative' }}>
                    <Avatars src={item?.driver?.avatar} size={60} icon={<UserOutlined />} />
                </div>
                <div style={{ width: '100%' }}>
                    <Title>
                        <strong>{item?.driver?.fullName || 'n/a'}</strong>
                        <span style={{ padding: `0 5px` }}>was feedback by customer</span>
                        <strong>{item?.customer?.fullName || 'n/a'}</strong>
                    </Title>
                    <Tags>
                        {item?.feedbackCategories?.length ? (
                            item.feedbackCategories.map((item) => (
                                <Tag color="blue" key={item.name}>
                                    {item.name}
                                </Tag>
                            ))
                        ) : (
                            <Tag color="blue">...</Tag>
                        )}
                    </Tags>
                    <Title>
                        <CommentOutlined style={{ color: '#eb2f96', marginRight: 5 }} />
                        {item?.description}
                    </Title>
                    <Footer>
                        <Title style={{ fontSize: 11 }}>
                            {dateFormat(new Date(), 'dddd dd - mmm - yyyy hh:mm tt')}
                        </Title>
                        <div>
                            <Ratings
                                rating={item.rating || 0}
                                widgetDimensions="11px"
                                widgetSpacings="1px"
                                widgetRatedColors="#fadb14"
                            >
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                                <Ratings.Widget />
                            </Ratings>
                        </div>
                    </Footer>
                </div>
            </Container>
        </Card>
    );
};

export default FeedbackUI;
