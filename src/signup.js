import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
export default function Signup(){
let history = useHistory();
  let formik = useFormik({
    initialValues: {
        fname:"",
        lname:"",
        email: "",
        password: ""
    },
    validate: (values) => {
      let errors = {};
      if (!values.fname) {
        errors.fname = "Required";
      }
      if (!values.lname) {
        errors.lname = "Required";
      }
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
      let firstname = values.fname;
      let lastname = values.lname;
     let email = values.email;
     let password = values.password;
      await fetch("https://googledrive-back-end.herokuapp.com/signup", {
        method: "POST",
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
     history.push("/dashboard");
    },
  });
    return <>
    <div className="limiter">
		<div className="container-login100">
            <div className="wrap-login100">
				<div className="login100-pic js-tilt" data-tilt>
					<img src="images/web.jpg" alt="webupload" height="70%" width="100%"/>
				</div>

				<form className="login100-form validate-form" onSubmit={formik.handleSubmit}>
					<span className="login100-form-title">
						Sign Up
					</span>



                    <div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="fname" placeholder="First Name" id="fname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.fname}/>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
                        </div>
                        {formik.errors.fname && formik.touched.fname ? (
                            <div> {formik.errors.fname}</div>
                        ) : null}



                        <div className="wrap-input100 validate-input">
						<input className="input100" type="text" name="lname" placeholder="Last Name" id="lname" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.lname}/>
						<span className="symbol-input100">
							<i className="fa fa-user" aria-hidden="true"></i>
						</span>
                        </div>
                        {formik.errors.lname && formik.touched.lname ? (
                            <div> {formik.errors.lname}</div>
                        ) : null}




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
					
					<div className="container-login100-form-btn">
						<input className="login100-form-btn" type="submit" value="Create Account"/>
							
						
					</div>

					<div className="text-center p-t-12">
                        <div>
                            <Link to="/" className="txt2">Go Back to Home page</Link>
                        </div>
					</div>

					<div className="text-center p-t-86">
						<Link to="/login" className="txt2">
							Already a user?
							<i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
						</Link>
					</div>
				</form>
			</div>
		</div>
	</div>
    </>
}