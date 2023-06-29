import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import  'overlayscrollbars/overlayscrollbars.css' ;
const CommunitySubmitContainer = () => {

    return(
        <main>
            <div className="container">
                <div className="row gx-0">
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
                                                    <li data-bs-dismiss="offcanvas">
                                                        <a href="#chat-1" className="nav-link active text-start"
                                                           id="chat-1-tab"  >
                                                            <div className="d-flex">
                                                                <div
                                                                    className="flex-shrink-0 avatar avatar-story me-2 status-online">
                                                                    <img className="avatar-img rounded-circle"
                                                                         src="/assets/images/avatar/10.jpg" alt=""/>
                                                                </div>
                                                                <div className="flex-grow-1 d-block">
                                                                    <h6 className="mb-0 mt-1">Frances Guerrero</h6>
                                                                    <div className="small text-secondary">Frances sent a
                                                                        photo.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li data-bs-dismiss="offcanvas">
                                                        <a href="#chat-2" className="nav-link text-start"
                                                           id="chat-2-tab"  >
                                                            <div className="d-flex">
                                                                <div
                                                                    className="flex-shrink-0 avatar me-2 status-offline">
                                                                    <img className="avatar-img rounded-circle"
                                                                         src="/assets/images/avatar/11.jpg" alt=""/>
                                                                </div>
                                                                <div className="flex-grow-1 d-block">
                                                                    <h6 className="mb-0 mt-1">Carolyn Ortiz</h6>
                                                                    <div className="small text-secondary">You missed a
                                                                        call form🤙
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li data-bs-dismiss="offcanvas">
                                                        <a href="#chat-3" className="nav-link text-start"
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
                                                    <li data-bs-dismiss="offcanvas">
                                                        <a href="#chat-4" className="nav-link text-start"
                                                           id="chat-4-tab"  >
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 avatar me-2">
                                                                    <ul className="avatar-group avatar-group-two">
                                                                        <li className="avatar avatar-xs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/01.jpg"
                                                                                 alt="avatar"/>
                                                                        </li>
                                                                        <li className="avatar avatar-xs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/02.jpg"
                                                                                 alt="avatar"/>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-grow-1 d-block">
                                                                    <h6 className="mb-0 mt-1">Dennis, Ortiz</h6>
                                                                    <div className="small text-secondary">Ortiz: I'm
                                                                        adding jhon
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li data-bs-dismiss="offcanvas">
                                                        <a href="#chat-5" className="nav-link text-start"
                                                           id="chat-5-tab"  >
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 avatar me-2">
                                                                    <ul className="avatar-group avatar-group-three">
                                                                        <li className="avatar avatar-xs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/03.jpg"
                                                                                 alt="avatar" />
                                                                        </li>
                                                                        <li className="avatar avatar-xs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/04.jpg"
                                                                                 alt="avatar" />
                                                                        </li>
                                                                        <li className="avatar avatar-xs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/05.jpg"
                                                                                 alt="avatar" />
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-grow-1 d-block">
                                                                    <h6 className="mb-0 mt-1">Knight, Billy, Bryan</h6>
                                                                    <div className="small text-secondary">Billy: Thank
                                                                        you!
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li data-bs-dismiss="offcanvas">
                                                        <a href="#chat-6" className="nav-link text-start"
                                                           id="chat-6-tab"  >
                                                            <div className="d-flex">
                                                                <div className="flex-shrink-0 avatar me-2">
                                                                    <ul className="avatar-group avatar-group-four">
                                                                        <li className="avatar avatar-xxs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/06.jpg"
                                                                                 alt="avatar"/>
                                                                        </li>
                                                                        <li className="avatar avatar-xxs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/07.jpg"
                                                                                 alt="avatar"/>
                                                                        </li>
                                                                        <li className="avatar avatar-xxs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/08.jpg"
                                                                                 alt="avatar"/>
                                                                        </li>
                                                                        <li className="avatar avatar-xxs">
                                                                            <img className="avatar-img rounded-circle"
                                                                                 src="/assets/images/avatar/placeholder.jpg"
                                                                                 alt="avatar"/>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="flex-grow-1 d-block overflow-hidden">
                                                                    <h6 className="mb-0 mt-1 text-truncate w-75">Webestica
                                                                        crew </h6>
                                                                    <div className="small text-secondary">You: Okay
                                                                        thanks, everyone.
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
                    <div className="col-lg-8 col-xxl-9">
                        <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
                            <div className="card-body d-flex flex-column h-100"> {/* 이 부분을 d-flex flex-column로 변경 */}
                                <div className="mb-2"> {/* Input 부분은 margin-bottom을 추가해 높이를 고정 */}
                                    <input type="text" className="form-control" placeholder="제목"/>
                                </div>
                                <hr/>
                                <OverlayScrollbarsComponent
                                    className="chat-conversation-content custom-scrollbar"
                                    style={{flexGrow: 1}} // 여기서 flex-grow 속성을 추가합니다
                                >
                                    <div style={{height: "1px", backgroundColor : "green"}}></div>
                                </OverlayScrollbarsComponent>
                            </div>
                            <div className="card-footer">
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
                        </div>

                    </div>
                </div>
            </div>
        </main>


);
}
export default CommunitySubmitContainer;