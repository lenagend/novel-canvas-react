import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import DialogueDisplay from "./DialogueDisplay";

const Paper = ({ dialogues, setDialogues }) => {

    const onDeleteButtonClick = (event, id) => {
        event.preventDefault();
        const newDialogues = dialogues.filter(dialogue => dialogue.id !== id);
        setDialogues(newDialogues);
    }

    return (
        <div >
            <OverlayScrollbarsComponent
                className="chat-conversation-content custom-scrollbar"
                style={{ height: "450px"}}
            >
                {dialogues.map((dialogue) => {

                    return (
                        <div key={dialogue.id} className="mt-3 d-flex justify-content-between align-items-center">
                            {dialogue.character ? (
                                <div className="flex-grow-1"> {/* flex-grow 속성을 사용하여 영역을 최대로 확장 */}
                                    <DialogueDisplay character={dialogue.character} dialogueText={dialogue.text} />
                                </div>
                            ) : (
                                <p className="flex-grow-1" style={{ whiteSpace: 'pre-wrap' }}>{dialogue.text}</p>
                            )}
                            <a className="text-danger icon-md " href="#" onClick={event => onDeleteButtonClick(event, dialogue.id)}>
                                <i className="bi bi-x-circle"></i>
                            </a>
                        </div>

                    );
                })}

            </OverlayScrollbarsComponent>
        </div>
    );
}

export default Paper;
