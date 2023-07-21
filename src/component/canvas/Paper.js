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

                    const textWithBreaks = dialogue.text.replace(/\n/g, "<br>");


                    return (
                        <div key={dialogue.id} className="mt-3">
                            {dialogue.character ? (
                                <div>
                                    <DialogueDisplay character={dialogue.character} dialogueText={textWithBreaks} />
                                </div>
                            ) : (
                                <span dangerouslySetInnerHTML={{__html: textWithBreaks}}></span>
                            )}
                        </div>
                    );
                })}

            </OverlayScrollbarsComponent>
        </div>
    );
}

export default Paper;
