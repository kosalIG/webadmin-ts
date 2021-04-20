import React from 'react';
import dateFormat from 'dateformat';
import styled from 'styled-components';

const DivContain = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    width: 100%;
`;

const Span = styled.span<{ colors: boolean }>`
    color: ${(props) => (props.colors ? '#fff' : '')};
    background-color: ${(props) => (props.colors ? ' #314659' : '#fafafa')};
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: 1.5px;
    margin-right: 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    border-radius: 20px;
`;

const Index: React.FC<{ records: number[]; lineText: string }> = ({ records, lineText }) => {
    return (
        <div>
            {records?.map(
                (item, idx) =>
                    idx < 10 && (
                        <DivContain key={Math.random()}>
                            <div>
                                <Span colors={idx < 3}>{idx + 1}</Span>
                                {dateFormat(new Date(), 'dddd, mmm dd, yyyy')}
                            </div>
                            <div>{`${item} ${lineText}`} </div>
                        </DivContain>
                    ),
            )}
        </div>
    );
};

export default Index;
