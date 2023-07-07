import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import  'overlayscrollbars/overlayscrollbars.css' ;
import Character from "../../canvas/Character";
import TextArea from "../../canvas/TextArea";
import Paper from "../../canvas/Paper";
const CanvasContainer = () => {

    return(
        <main>
            <div className="container">
                <div className="row gx-0">
                    <Character />
                    <div className="col-lg-8 col-xxl-9">
                        <div className="card card-chat rounded-start-lg-0 border-start-lg-0">
                            <div className="card-body d-flex flex-column h-100">
                                <Paper />
                            </div>
                            <div className="card-footer">
                                <TextArea />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>


);
}
export default CanvasContainer;