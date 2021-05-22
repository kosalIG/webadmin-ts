import React from 'react';
import { Resizable } from 'react-resizable';
import './style.css';

const ResizeColumn: React.FC = (props: any) => {
    const { onResize, width, ...restProps } = props;
    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={<span className="react-resizable-handle" />}
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

export default ResizeColumn;
