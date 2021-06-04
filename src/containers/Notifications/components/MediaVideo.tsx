import React, { useState } from 'react';
import { Modal, Result } from 'antd';
import ReactPlayer from 'react-player';
import { YoutubeOutlined, FrownOutlined } from '@ant-design/icons';

const MediaVideo: React.FC<{ url: string }> = ({ url }) => {
    const [isError, setIsError] = useState(true);
    const [visible, setVisible] = useState(false);
    return (
        <>
            <YoutubeOutlined style={{ fontSize: '32px', color: 'red' }} onClick={() => setVisible(true)} />
            <Modal
                title="Video"
                width={700}
                visible={visible}
                onCancel={() => setVisible(false)}
                forceRender
                afterClose={() => ReactPlayer.removeCustomPlayers()}
                footer={null}
            >
                {isError ? (
                    <ReactPlayer
                        controls
                        playing={visible}
                        width="auto"
                        url={visible ? url : ''}
                        onError={() => setIsError(false)}
                    />
                ) : (
                    <Result icon={<FrownOutlined style={{ color: 'red' }} />} title="Opp! We can't play this video." />
                )}
            </Modal>
        </>
    );
};

export default MediaVideo;
