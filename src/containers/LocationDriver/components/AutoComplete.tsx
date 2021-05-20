import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { autoOption } from './GoogleMap/googleMapOption';
import { AutoCompleteProps } from '../interface';

const AutoComplete = ({ onLoad, onPlaceChanged }: AutoCompleteProps): React.ReactElement => {
    return (
        <div>
            <Autocomplete options={autoOption} onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                    type="text"
                    placeholder="Search Google Maps"
                    style={{
                        boxSizing: `border-box`,
                        border: `1px solid transparent`,
                        width: `319px`,
                        height: `40px`,
                        marginTop: `10px`,
                        padding: `0 12px`,
                        borderRadius: `3px`,
                        boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                        fontSize: `14px`,
                        outline: `none`,
                        textOverflow: `ellipses`,
                        top: 0,
                        position: 'absolute',
                        left: '50%',
                        transform: `translate(-50%, 0)`,
                    }}
                />
            </Autocomplete>
        </div>
    );
};

export default AutoComplete;
