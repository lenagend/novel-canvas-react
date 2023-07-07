import CharacterDisplay from "./CharacterDisplay";

const TextArea = ({ onTextChange, onTextSubmit, characterInfo }) => {
    return(
        <div>
            {characterInfo && (
            <div className="mb-3">
                <CharacterDisplay character={characterInfo} />
            </div>
            )}
            <div className="d-sm-flex align-items-end">
                                    <textarea className="form-control mb-sm-0 mb-3 customTextArea" data-autoresize
                                              placeholder="Type a message" rows="1"></textarea>
                <div className="d-flex flex-column gap-2">
                    <button className="btn btn-sm btn-primary ms-2">
                        <i className="fa-solid fa-paper-plane fs-6"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TextArea;