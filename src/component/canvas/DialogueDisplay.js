import React from 'react';

const DialogueDisplay = ({ character, dialogueText }) => {
    return (
        <div className="d-flex">
            <div className="flex-shrink-0 avatar-sm me-2">
                <img className="avatar-img rounded-circle"
                     src={character.image} alt={character.name + '의 프로필사진'}/>
            </div>
            <div className="flex-grow-1 d-block">
                    <p className="dialogueText" dangerouslySetInnerHTML={{__html: dialogueText}}></p>
            </div>
        </div>
    );
}

export default DialogueDisplay;
