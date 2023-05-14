const Loading = () => {
    return(
        <main>
            <div className="container">
                <div className="row g-4">
                    <div className="col-md-6 col-lg-6 vstack gap-4 mx-auto d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                        <div className="text-center">
                            <div className="spinner-border" style={{width: "3rem", height: "3rem"}} role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div style={{fontSize: "3rem"}}>
                                로딩중...
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Loading;