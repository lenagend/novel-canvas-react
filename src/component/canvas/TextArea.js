const TextArea = () => {
    return(
        <div>
            <div className="mb-3">
                <a className="nav-link text-start"
                   id="chat-3-tab"  >
                    <div className="d-flex">
                        <div className="flex-shrink-0 avatar avatar-story me-2">
                            <img className="avatar-img rounded-circle"
                                 src="/assets/images/avatar/12.jpg" alt=""/>
                        </div>
                        <div className="flex-grow-1 d-block">
                            <h6 className="mb-0 mt-1">Billy Vasquez</h6>
                            <div className="small text-secondary">Day sweetness
                                😊
                            </div>
                        </div>
                    </div>
                </a>
            </div>
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