import React from 'react';

const CharacterDisplay = ({ character, onDelete, onCharacterClick  }) => {

    const handleCharacterClick = (event) => {
        event.preventDefault();
        onCharacterClick(character);
    };

    const handleDeleteClick = (event) => {
        event.preventDefault();
        onDelete();
    };

    return (
        <div className="d-flex">
            <div className="flex-shrink-0 avatar me-2" onClick={event => handleCharacterClick(event)}>
                    <img className="avatar-img rounded-circle"
                         src={character.image} alt={character.name + '의 프로필사진'}/>
            </div>
            <div className="flex-grow-1 d-block" onClick={event => handleCharacterClick(event)}>
                <h6 className="mb-0 mt-1">{character.name}</h6>
                <div className="small text-secondary">
                    {character.description}
                </div>
            </div>
            <a className="text-danger icon-md ms-auto" href="#" onClick={handleDeleteClick}>
                <i className="bi bi-x-circle"></i>
            </a>
        </div>
    );
}

export default CharacterDisplay;
