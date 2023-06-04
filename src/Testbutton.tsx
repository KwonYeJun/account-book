import React from 'react';

const Login: React.FC = () => {
  const handleSignUp = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    console.log('form', formData);

    // 폼 데이터를 사용하여 fetch 요청 등의 작업을 수행합니다.
  };

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    console.dir(event.target);
    const formData = new FormData(event.target as HTMLFormElement);
    console.log('form', formData);

    // 폼 데이터를 사용하여 fetch 요청 등의 작업을 수행합니다.
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
