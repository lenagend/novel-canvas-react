import {OverlayScrollbarsComponent} from "overlayscrollbars-react";

const Character = () => {
    return(
        <div className="col-lg-4 col-xxl-3" id="chatTabs" role="tablist">
            <div className="d-flex align-items-center mb-4 d-lg-none">
                <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="btn btn-primary"><i className="fa-solid fa-sliders-h"></i></span>
                    <span className="h6 mb-0 fw-bold d-lg-none ms-2">Chats</span>
                </button>
            </div>
            <div className="card card-body border-end-0 border-bottom-0 rounded-bottom-0">
                <div className=" d-flex justify-content-between align-items-center">
                    <h1 className="h5 mb-0">인물 <span
                        className="badge bg-success bg-opacity-10 text-success">6</span></h1>
                    <div className="dropend position-relative">
                        <div className="nav">
                            <a className="icon-md rounded-circle btn btn-sm btn-primary-soft nav-link toast-btn"
                               data-target="chatToast" href="#"> <i className="bi bi-pencil-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-light navbar-expand-lg mx-0">
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close text-reset ms-auto"
                                data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body p-0">
                        <div
                            className="card card-chat-list rounded-end-lg-0 card-body border-end-lg-0 rounded-top-0">
                            <form className="position-relative">
                                <input className="form-control py-2" type="search"
                                       placeholder="찾기" aria-label="Search"/>
                                <button
                                    className="btn bg-transparent text-secondary px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                                    type="submit">
                                    <i className="bi bi-search fs-5"></i>
                                </button>
                            </form>
                            <div className="mt-4 h-100">
                                <OverlayScrollbarsComponent className="chat-tab-list custom-scrollbar">
                                    <ul className="nav flex-column nav-pills nav-pills-soft">
                                        <li>
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
                                        </li>
                                    </ul>
                                </OverlayScrollbarsComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Character;