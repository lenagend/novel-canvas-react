import {Link} from "react-router-dom";

const Toolbar = ({deleteDialogues}) => {

    const onDeleteButtonClick = () => {
        deleteDialogues([]);
    }

    return(
        <div className=" d-flex justify-content-between align-items-center">
            <h1 className="h5 mb-0">Tool </h1>
            <div className="btn-group" role="group">
                <Link to="/" className="btn icon-md btn-dark-soft "
                        href="#"><i className="bi bi-backspace"></i>
                </Link>
                <button className="btn icon-md btn-dark-soft "
                        href="#" onClick={onDeleteButtonClick}> <i className="bi bi-trash3"></i>
                </button>
                <button className="btn icon-md btn-dark-soft "
                        href="#"> <i className="bi bi-camera"></i>
                </button>

            </div>
        </div>
    );
}
export default Toolbar;