import {Link} from "react-router-dom";
export default function Main(){
    return <>
        <div id="navbar" className="bg">
            <nav className="navbar-expand-lg navbar-dark">
                <div className="container">
                    <div className="row">
                        <span className="col-4">
                            <i class="fa fa-cloud" aria-hidden="true"></i>&nbsp;
                            Google drive 
                        </span>          
                        <span className="col-4 align-nav">
                            <Link to="/login" className="align-nav ft-size">Log in</Link>
                        </span>         
                        <span className="col-4 align-nav" >
                            <Link to="/signup" className="align-nav ft-size">Sign up</Link>
                        </span>
                    </div>
                </div>
            </nav>
            <hr color="white"/>
        </div>
        
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-title">
                                <i class="fa fa-folder-o" aria-hidden="true"></i> &nbsp;
                                Store you files in Google drive. 
                            </div>
                            <div className="card-body">
                            Easy and secure access to all of your content<br/>
                            Store, share, and collaborate on files and folders from any mobile device, 
                            tablet, or computer<br/>
                            Thousands of teams are already using Drive to revolutionize the way they work<br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="images/img.png" width="100%" height="90%" alt="img here"></img>
                    </div>
                </div>
            </div>
        </div>
    </>
}