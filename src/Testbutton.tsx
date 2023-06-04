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

    // 폼 데이터를 사용하여 fetch 요청 등의 작업을 수행합니다.
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="sign-up-container">
          <form action="/createAccount" method="post" id="signupForm" onSubmit={handleSignUp}>
            {/* 폼 요소들 */}
            <button className="form_btn" type="submit">Sign Up</button>
          </form>
        </div>
        <div className="sign-in-container">
          <form action="/signIn" method="post" id="signinForm" onSubmit={handleSignIn}>
            {/* 폼 요소들 */}
            <button className="form_btn" type="submit">Sign In</button>
          </form>
        </div>
        {/* 나머지 내용 */}
      </div>
    </div>
  );
};

export default Login;
