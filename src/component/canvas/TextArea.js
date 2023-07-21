import React, { useState } from 'react';
import CharacterDisplay from "./CharacterDisplay";

const TextArea = ({ onTextChange, onTextSubmit, characterInfo }) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
        onTextChange(event);
    };

    const handleSubmit = () => {
        onTextSubmit(text);
        setText('');  // Clear the textarea after submission
    };

    return (
        <div>
            {characterInfo && (
                <div className="mb-3">
                    <CharacterDisplay character={characterInfo} />
                </div>
            )}
            <div className="d-sm-flex align-items-end">
                <textarea
                    className="form-control mb-sm-0 mb-3 customTextArea"
                    data-autoresize
                    placeholder="여기에 입력하세요"
                    rows="1"
                    value={text}
                    onChange={handleChange}
                />
                <div className="d-flex flex-column gap-2">
                    <button
                        className="btn btn-sm btn-primary ms-2"
                        onClick={handleSubmit}
                    >
                        <i className="fa-solid fa-paper-plane fs-6"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TextArea;
