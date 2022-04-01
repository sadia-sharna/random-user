import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { TextInput } from './textInput';
import { Button } from './button';

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
