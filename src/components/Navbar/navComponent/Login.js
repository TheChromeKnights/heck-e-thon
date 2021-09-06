import React from "react";
import Card from "../../UI/Card";
import { Button } from "@material-ui/core";
import "./Login.css";

const Login = (props) => {
  return (
    <Card open={props.openLogin} close={props.setOpenLogin}>
      <div className="container-fluid">
        {/* <div className="card" style={{ minWidth: "300px" }}>
          <div className="card-title" style={{ textAlign: "center" }}>
            SignIn
          </div>
          <div className="card-body">
            <Button
              onClick={() => {
                props.setLoggedIn(true);
                props.setOpenLogin(false);
              }}
              variant="outlined"
            >
              Log In
            </Button>
          </div>
        </div> */}
        <div class="card rounded login_card">
          <div class="row g-0">
            <div class="col-md-12">
              <div class="card-body">
                <h5 class="card-title text-center">Log in to our page</h5>
                {/* <p class="card-text text-center small_text">
                  Welcome back! login with your data that you entered during
                  registration.
                </p> */}
                {/* <p class="text-center">
                  <button
                    type="button"
                    class="btn btn-light shadow-lg p-3 mb-1 google_login"
                  >
                    <img class="google_img" src={google} alt="..." />
                    <span class="google">Login with Google</span>
                  </button>
                </p> */}
                {/* <hr />
                <p class="text-center login">
                  <span style={{ backgroundColor: "inherit" }}>
                    or Log in with
                  </span>
                </p> */}
                <p class="text-center">
                  <input
                    type="text"
                    class="my-1 mb-3 form__input"
                    autocomplete="off"
                    placeholder="email"
                  />
                  <label for="email" class="form__label__email">
                    Email
                  </label>
                </p>
                <p class="text-center">
                  <input
                    type="password"
                    class="form__input"
                    autocomplete="off"
                    placeholder="key"
                  />
                  <label for="email" class="form__label__password">
                    key
                  </label>
                </p>

                <p class="text-center mb-5">
                  <a>Forgot your password?</a>
                </p>
                <p class="text-center">
                  <button
                    type="button"
                    class="btn shadow p-3 login_button"
                    onClick={() => {
                      props.setLoggedIn(true);
                      props.setOpenLogin(false);
                    }}
                  >
                    Login
                  </button>
                </p>
                {/* <p class="text-center register">
                  Don't have an account? <a>Register</a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Login;
