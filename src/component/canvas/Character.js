import {OverlayScrollbarsComponent} from "overlayscrollbars-react";
import CharacterDisplay from "./CharacterDisplay";

const Character = ({onCharacterClick}) => {

    const characters = [
        { id: 1, name: '캐릭터1', image: '/assets/images/avatar/12.jpg', description: '냉정하고 신중한 성격의 용사' },
        { id: 2, name: '캐릭터2', image: '/assets/images/avatar/11.jpg', description: '밝고 활발한 성격의 마법사' },
        { id: 3, name: '캐릭터3', image: '/assets/images/avatar/10.jpg', description: '신비로운 능력을 가진 요정' },
        { id: 4, name: '캐릭터4', image: '/assets/images/avatar/09.jpg', description: '빠르고 강력한 공격력의 전사' },
        { id: 5, name: '캐릭터5', image: '/assets/images/avatar/08.jpg', description: '훌륭한 힐링 능력을 가진 힐러' },
        { id: 6, name: '캐릭터6', image: '/assets/images/avatar/01.jpg', description: '설명6' },
        { id: 7, name: '캐릭터7', image: '/assets/images/avatar/02.jpg', description: '설명7' },
        { id: 8, name: '캐릭터8', image: '/assets/images/avatar/03.jpg', description: '설명8' },
        { id: 9, name: '캐릭터9', image: '/assets/images/avatar/04.jpg', description: '설명9' },
        { id: 10, name: '캐릭터10', image: '/assets/images/avatar/05.jpg', description: '설명10' },
        { id: 11, name: '캐릭터11', image: '/assets/images/avatar/06.jpg', description: '설명11' },
        { id: 12, name: '캐릭터12', image: '/assets/images/avatar/07.jpg', description: '설명12' },
     ];



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
                            <div className="mt-4" >
                                <OverlayScrollbarsComponent className="custom-scrollbar characterList">
                                    <ul className="nav flex-column nav-pills nav-pills-soft">
                                        {characters.map((character) => (
                                            <li key={character.id}>
                                                <div className="nav-link text-start" >
                                                    <CharacterDisplay character={character} onCharacterClick={onCharacterClick} />
                                                </div>
                                            </li>
                                        ))}
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