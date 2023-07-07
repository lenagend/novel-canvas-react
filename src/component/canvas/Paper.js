import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

const Paper = () => {
    return(
        <div>
            <OverlayScrollbarsComponent
                className="chat-conversation-content custom-scrollbar"
                style={{flexGrow: 1}} // 여기서 flex-grow 속성을 추가합니다
            >
            </OverlayScrollbarsComponent>
        </div>
    )
}

export default Paper;