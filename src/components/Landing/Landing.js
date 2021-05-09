import useStyle from "./styles";
import { Button } from "./styles";

function Landing() {
  const classes = useStyle();

  //Animation when opening and closing navbar
  const navBarRightOpen = () => {
    const navBarRight = document.querySelector(`.${classes.navBarRight}`);
    navBarRight.style.width = "100vw";
  };

  const navBarRightClose = () => {
    const navBarRight = document.querySelector(`.${classes.navBarRight}`);
    navBarRight.style.width = "0";
  };

  return (
    <>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.logo}>
            <i className="fab fa-airbnb fa-3x"></i>
          </div>
          <div>
            <div className={classes.dropDownNav}>
              <i className="fas fa-bars fa-lg" onClick={navBarRightOpen}></i>
            </div>

            <ul className={classes.ul}>
              <li>Browse</li>
              <li>Log in</li>
              <li className={classes.signup}>Sign up</li>
            </ul>
          </div>
        </nav>
        <div className={classes.navBarRight}>
          <div className={classes.navBarRightList}>
            <div className={classes.navBarListItems}>
              <i className="fab fa-airbnb fa-3x"></i>
              <ul>
                <li>Browse</li>
                <li>Log in</li>
                <li>Sign up</li>
              </ul>
            </div>
            <div className={classes.navBarRightLogo}>
              <i className="fas fa-times fa-2x" onClick={navBarRightClose}></i>
            </div>
          </div>
        </div>
      </header>

      {/* Header ends here */}
      <div className={classes.content1}>
        <div className={classes.spacer}></div>
        <div className={classes.main1}>
          <div className={classes.text1}>
            <h1>Ready to start your next idea?</h1>
            <p>Join us and showcase your work, art and service</p>
            <p>Start for free</p>
            <p>Meet new people and create endless possibilities</p>
            <div className={classes.content1_button}>
              <Button
                className={classes.content1_button1}
                variant="contained"
                color="secondary"
                size="large"
              >
                Sign up
              </Button>

              <Button
                m={4}
                className={classes.content1_button2}
                variant="outlined"
                color="ternary"
                size="large"
              >
                Log In
              </Button>
            </div>
          </div>
          <div className={classes.img1}>
            <img
              alt="content1Img"
              src="https://images.unsplash.com/photo-1553429938-0c318ee3de7a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </div>
      {/* Content1 ends here */}

      <div className={classes.content2}>
        <div className={classes.main2}>
          <div className={classes.img2}></div>
          <div className={classes.text2}>
            <h1>Advertise with Zion</h1>
            <h2>Anyone and everything is welcomed here</h2>
            <p>
              <i class="far fa-check-circle fa-lg"></i>Want to sell your items?
            </p>
            <p>
              <i class="far fa-check-circle fa-lg"></i>Want to increase your
              social media presence?
            </p>
            <p>
              <i class="far fa-check-circle fa-lg"></i>Want to collaborate with
              other business?
            </p>
            <h2>Zion is the right place for you</h2>
          </div>
        </div>
      </div>
      {/* Content2 ends here */}

      <div className={classes.content3}>
        <div className={classes.main3}>
          <h1>Zion partners</h1>
          <p>Our official partners</p>
          <div className={classes.p_logos}>
            <i class="fab fa-google fa-3x"></i>
            <i class="fab fa-apple fa-3x"></i>
            <i class="fab fa-amazon fa-3x"></i>
          </div>
        </div>
      </div>
      {/* Content3 ends here */}

      <footer className={classes.footer}>
        <div className={classes.footer_main}>
          <div className={classes.footer_text}>
            <span>About</span>
            <span>Contact</span>
            <span>Donate</span>
          </div>
          <div className={classes.footer_logo}>
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-discord"></i>
          </div>
        </div>
      </footer>
      {/* Footer ends here */}
    </>
  );
}

export default Landing;
