import { signup, useAuth, logout, login } from "../firebase";
import "../styles/login.css";
import "../styles/MyCourses.css";
import { useRef, useState } from "react";
import ToggleLoginButton from "../components/ToggleLoginButton";

const LogIn = ({
  isloggedin,
  setisloggedin,
  username,
  setUsername,
  setSelectedProfileName,
  setSelectedProfileCourses,
  selectedCourses,
}) => {
  const currentUser = useAuth();
  const [showlogin, setshowlogin] = useState(false);
  //  const [isloggedin, setisloggedin] = useState("false");

  const [errorlogin, seterrorlogin] = useState(false);
  const [errorsignup, seterrosignup] = useState(false);
  const [errorpassword, seterrorpassword] = useState(false);
  const description_login =
    'Genom att skapa en användare har du möjlighet att skapa olika profiler och spara dessa online. Gå in på "Mina val" och klicka på "Spara min profil" för att skapa en profil';

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleSignup() {
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      seterrosignup(false);
      seterrorpassword(false);
      setisloggedin(true);

      seterrosignup(false);
      setUsername(emailRef.current.value);

      setSelectedProfileCourses(selectedCourses);
      setSelectedProfileName("Min masterexamen");

      window.location.href = "/";
    } catch {
      if (passwordRef.current.value === "") {
        seterrorpassword(true);
        seterrosignup(false);
      } else {
        seterrosignup(true);
        seterrorpassword(false);
      }
    }
  }

  async function handleLogout() {
    try {
      await logout();
      setisloggedin(false);
      seterrorpassword(false);
      seterrorlogin(false);
      seterrosignup(false);
    } catch {}
  }

  async function handleLogin() {
    try {
        await login(emailRef.current.value, passwordRef.current.value);
        console.log("hello");
        setisloggedin(true);
      seterrorpassword(false);
      seterrorlogin(false);
      seterrosignup(false);
      setUsername(emailRef.current.value);

      setSelectedProfileCourses(selectedCourses);
      setSelectedProfileName("Min masterexamen");
      window.location.href = "/MyCourses";
    } catch {
        console.log("hm");
      seterrorlogin(true);
    }
  }

  return (
    <>
      <div className="my_courses_header_login">
        <div className="upper_header"></div>
        <ToggleLoginButton
          showOverview={showlogin}
          setShowOverview={setshowlogin}
          seterrorlogin={seterrorlogin}
          seterrorpassword={seterrorpassword}
          seterrosignup={seterrosignup}
        />
      </div>
      <div className="login_header">
        <div className="login_header_text">
          {showlogin ? (
            <h3 className="login_h3"> Skapa användare </h3>
          ) : (
            <h3 className="login_h3"> Logga in </h3>
          )}
          <p>{description_login} </p>
        </div>
        <div className="progress_bar_wrapper"></div>
      </div>

      <div className="fields">
        {errorlogin ? (
          <div className="error_msg">
            <p className="error_p"> Fel email eller lösenord </p>
          </div>
        ) : (
          <> </>
        )}

        {errorsignup ? (
          <div className="error_msg">
            <p> Vänligen ange giltigt email</p>
          </div>
        ) : (
          <> </>
        )}

        {errorpassword ? (
          <div className="error_msg">
            <p> Du behöver ange ett lösenord</p>
          </div>
        ) : (
          <> </>
        )}
      </div>

      <div className="login_div_big">
        <div className="login_div">
          <div className="fields_log">
            <input className="email_input" ref={emailRef} placeholder="Email" />

            <input
              className="password_input"
              ref={passwordRef}
              type="password"
              placeholder="Lösenord"
            />
          </div>
          <div className="testingmore">
            {showlogin ? (
              <button className="Btn_LogIn" onClick={handleSignup}>
                {" "}
                Skapa användare{" "}
              </button>
            ) : isloggedin ? (
              <button className="Btn_LogIn" onClick={handleLogout}>
                {" "}
                Logga ut{" "}
              </button>
            ) : (
              <button className="Btn_LogIn" onClick={handleLogin}>
                {" "}
                Logga in{" "}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
