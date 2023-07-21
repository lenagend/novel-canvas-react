import React from "react";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import CharacterDisplay from "./CharacterDisplay";
import DialogueDisplay from "./DialogueDisplay";

const Paper = ({ dialogues }) => {
    return (
        <div>
            <OverlayScrollbarsComponent
                className="chat-conversation-content custom-scrollbar"
                style={{ flexGrow: 1 }}
            >
                {dialogues.map((dialogue) => {

                    return (
                        <div key={dialogue.id} className="mt-1">
                            {dialogue.character ? (
                                <div>
                                    <DialogueDisplay character={dialogue.character} dialogueText={dialogue.text} />
                                </div>
                            ) : (
                                <p  style={{ whiteSpace: 'pre-wrap' }}>{dialogue.text}</p>
                            )}
                        </div>
                    );
                })}

            </OverlayScrollbarsComponent>
        </div>
    );
}

export default Paper;
