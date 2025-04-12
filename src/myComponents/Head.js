import './Head.css';

export default function Head() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme='dark'>
                <div className="container-fluid">

                    <h1 className="navbar-brand text-white" >Usham <span style={{ color: "#5cf64a" }}>Adhitya</span> Luwang </h1>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="justify-content-end mt-2 collapse navbar-collapse " id="navbarTogglerDemo02" >
                        <ul className="navbar-nav gap-4 ">
                            <li className="nav-item">
                                <button className="nav-link" style={{ color: "#5cf64a" }}   >Intro</button>
                            </li>
                            <li className="nav-item">
                                <a href='#education'><button className="nav-link text-white"  >Education</button></a>
                            </li>
                            <li className="nav-item">
                                <a href='#resume'><button className="nav-link text-white"  >Resume</button></a>
                            </li>
                            <li className="nav-item">
                                <a href='#contact'><button className="nav-link text-white" >Contact</button></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}