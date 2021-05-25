import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
export default function Login(){
let history = useHistory();
let [log,setLog]=useState("");
  let formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      }
      else if(!(values.email.includes(".") && values.email.includes("@"))){
        errors.email = 'Invalid email address';
      }
      if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log("Final Values", values);
     let email = values.email;
     let password = values.password;
      let resp = await fetch("https://googledrive-back-end.herokuapp.com/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if(resp.status===200){
        history.push("/dashboard");
      }
      else if(resp.status===401){
        setLog("Wrong user name or password!");
      }
      else if(resp.status===404){
        setLog("You have not registered! Kindly register in signup page");
      }
    },
  });
    return <>
    <div className="limiter">
		<div className="container-login100">
            <div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="images/img-01.png" alt="IMG"/>
				</div>

				<form className="login100-form validate-form" onSubmit={formik.handleSubmit}>
					<span className="login100-form-title">
						Member Login
					</span>

					<div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="email" placeholder="Email" id="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email}/>
						<span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>
                        {formik.errors.email && formik.touched.email ? (
                            <div> {formik.errors.email}</div>
                        ) : null}
					

					<div className="wrap-input100 validate-input">
						<input className="input100" type="password" name="password" placeholder="Password" id="password" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password}/>
						<span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
                    {formik.errors.password && formik.touched.password ? (
                            <div> {formik.errors.password}</div>
                        ) : null}

            {log?(<div>{log}</div>):null}
					
					<div className="container-login100-form-btn">
						<input className="login100-form-btn" type="submit" value="Login"/>
							
						
					</div>

					<div className="text-center p-t-12">
						<span className="txt1">
							Forgot
						</span>
						<Link to="/forgot" className="txt2">
							&nbsp; Password?
						</Link>
                        <div>
                            <Link to="/" className="txt2">Go Back to Home page</Link>
                        </div>
					</div>

					<div className="text-center p-t-86">
						<Link to="/signup" className="txt2">
							Create your Account
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
    </>
}