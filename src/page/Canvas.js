import Header from "../component/header/Header";
import ReadContainer from "../component/body/container/ReadContainer";
import CanvasContainer from "../component/body/container/CanvasContainer";

const Canvas = () => {
 return(
     <div className="App">
         <Header />
         <CanvasContainer />
     </div>
 );
}
export default Canvas;