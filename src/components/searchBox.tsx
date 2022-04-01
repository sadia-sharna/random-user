import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as Icons from '@fortawesome/free-solid-svg-icons';
import { TextInput } from './textInput';
import { Button } from './button';

type IProps = {
    placeholder: string;
    searchKeyword: string;
    changeHandler: (e: any) => void;
    handleSearch?: (e: any) => void;
    handleKeyDown?: (e: any) => void;
};
export function SearchBox(props: IProps) {
    const { placeholder, searchKeyword, changeHandler, handleSearch, handleKeyDown } = props;

    return (
        <>
            <TextInput
                type="text"
                className="form-control"
                placeholder={placeholder}
                value={searchKeyword}
                onChange={changeHandler}
                onKeyDown={handleKeyDown}
            >
                <Button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                    onClick={handleSearch}>

                    <FontAwesomeIcon icon={Icons.faSearch} />
                </Button>
            </TextInput>
        </>
    )
}
