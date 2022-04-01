import * as Icons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TextInput } from './textInput';

type IProps = {
    placeholder: string;
    searchKeyword: string;
    changeHandler: (e: any) => void;
};
export function SearchBox(props: IProps) {
    const { placeholder, searchKeyword, changeHandler } = props;

    return (
        <>
            <TextInput
                className="form-control"
                placeholder={placeholder}
                value={searchKeyword}
                onChange={changeHandler}
                icon={<FontAwesomeIcon icon={Icons.faSearch} />}>
            </TextInput>

        </>
    )
}
