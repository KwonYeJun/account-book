import React from 'react';

// CSS 파일을 import하여 스타일을 적용할 수 있습니다.

const Login: React.FC = () => {
  const handleSignUp = (event: React.FormEvent) => {
    // event.preventDefault();
    console.log("form", FormData);

    console.log(event);
    // fetch('/test', {
    //   method: "POST",
    //   body: JSON.stringify({
    //     email: event.id,
    //     password: pw,
    //   }),
    // })
    // .then((response) => response.json())
    // .then((result) => console.log(result));
  };

  const handleSignIn = (event: React.FormEvent) => {
    console.log("form", FormData);
    event.preventDefault();
    console.log(event);
  };


  return (
    <div className="wrapper">
      <div className="container">
        <div className="sign-up-container">
          <form action="/createAccount" method="post" id="signupForm" onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-links">
              <div>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="form_btn">Sign Up</button>
          </form>
        </div>
        <div className="sign-in-container">
          <form action="/signIn" method="post" id="signinForm" onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <div className="social-links">
              <div>
                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
              </div>
              <div>
                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </div>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" name='email' />
            <input type="password" placeholder="Password"name='pw' />
            <button className="form_btn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay-left">
            <h1>Welcome Back</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button id="signIn" className="overlay_btn">Sign In</button>
          </div>
          <div className="overlay-right">
            <h1>Hello, Friend</h1>
            <p>Enter your personal details and start journey with us</p>
            <button id="signUp" className="overlay_btn">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
