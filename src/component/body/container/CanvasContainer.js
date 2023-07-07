import  'overlayscrollbars/overlayscrollbars.css' ;
import Character from "../../canvas/Character";
import TextArea from "../../canvas/TextArea";
import Paper from "../../canvas/Paper";
import {useState} from "react";
const CanvasContainer = () => {
    const [characterInfo, setCharacterInfo] = useState(null);
    const [textInput, setTextInput] = useState("");

    const onCharacterClick = (info) => {
        setCharacterInfo(info);
    }

    const onTextChange = (event) => {
        setTextInput(event.target.value);
    }

    const onTextSubmit = () => {

    }

    return (
        <main>
            <div className="container">
                <div className="row gx-0">
                    <Character onCharacterClick={onCharacterClick} />
                    <div className="col-lg-8 col-xxl-9">
                        <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
                            <div className="card-body d-flex flex-column h-100">
                                <Paper characterInfo={characterInfo} textInput={textInput} />
                            </div>
                            <div className="card-footer">
                                <TextArea onTextChange={onTextChange} onTextSubmit={onTextSubmit} characterInfo={characterInfo}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default CanvasContainer;