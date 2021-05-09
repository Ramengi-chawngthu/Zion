//This is Material UI styles for Landing.js
import { makeStyles, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  header: {
    // Sets up the header
    top: 0,
    position: "fixed",
    width: "100vw",
    height: "60px",
    borderBottom: "1px solid #0c0b312F",
    background: "#FFF",
    zIndex: 1,
  },
  navbar: {
    // A wrapper for the elements inside header
    fontFamily: "Roboto, sans-serif",
    margin: "0 auto",
    width: "70%",
    height: "inherit",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 800px)": {
      // will set nav bar to occupy 90% when width<800px
      width: "90%",
    },
  },
  logo: {
    // top left logo of header
    position: "relative",
    width: "28px",
    height: "60px",
    textAlign: "center",
    "& i": {
      cursor: "pointer",
      color: theme.palette.secondary.viridian,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  ul: {
    // Nav list of header
    listStyle: "none",
    display: "flex",
    "& li": {
      textAlign: "center",
      borderLeft: "1.6px solid #0c0b313F",
      lineHeight: "20px",
      textTransform: "uppercase",
      fontSize: "0.85rem",
      fontWeight: "700",
      cursor: "pointer",
      padding: "5px 20px",
      "&:hover": {
        // Will light up the text when hovered
        color: theme.palette.primary.pink,
      },
      "&:hover, &:hover + li": {
        // Will light up the border of itself and its immediate sibling when hovered
        borderLeftColor: theme.palette.primary.pink,
      },
    },
    "@media (max-width: 800px)": {
      // will hide nav list when width<800px
      display: "none",
    },
  },
  signup: {
    //controls border styling of SIGNUP of nav list
    borderRight: "1.6px solid #0c0b313F",
    "&:hover": {
      // Will light up the text when hovered
      color: theme.palette.primary.pink,
      borderColor: theme.palette.primary.pink,
    },
  },
  dropDownNav: {
    // (BROWSE, LOGIN , SIGN UP) WILL BE REPLACED BY A HAMBURGER BUTTON WHEN WIDTH < 800px
    position: "relative",
    width: "28px",
    height: "60px",
    display: "none",
    "@media (max-width: 800px)": {
      // will hide nav list when width<800px
      display: "block",
    },
    "& i": {
      // Hamburger button
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  navBarRight: {
    // Nav bar display for smaller screen(Will slide out from left when hamburger button is clicked)
    height: "100vh",
    width: 0,
    background: "#FFF",
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 1,
    transition: "0.35s ease-in-out",
  },
  navBarRightList: {
    // controls (LOGO, BROWSE, LOGIN, SIGNUP, AND CLOSE BUTTON) on width<800px
    display: "flex",
    justifyContent: "space-between",
    width: "90%",
    height: "inherit",
    margin: "6px auto",
  },

  navBarListItems: {
    // The options of Nav bar(Browse, login and singup) display for smaller screen
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "& ul": {
      textTransform: "uppercase",
      fontFamily: "Roboto, sans-serif",
      fontWeight: "700",
      fontSize: "1rem",
      height: "30%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      listStyle: "none",
      padding: 0,
      "& li": {
        cursor: "pointer",
      },
      "& li:hover": {
        color: theme.palette.primary.pink,
      },
    },
    "& i": {
      color: theme.palette.secondary.viridian,
      position: "absolute",
      top: 0,
      cursor: "pointer",
    },
  },

  navBarRightLogo: {
    // The exit button of Nav bar display for smaller screen
    padding: "3px 5px",
    margin: "4px 5px",
    "& i": {
      cursor: "pointer",
    },
  },

  // **************************************************
  //                      END OF HEADER
  // **************************************************

  content1: {
    // Wraps whole content of content1 (1st text and image)
    margin: "60px auto 0 auto",
    width: "70%",
    "@media (max-width: 800px)": {
      width: "90%",
    },
  },

  spacer: {
    // Provides top spacing of items inside content1
    height: "40px",
  },

  main1: {
    // Display two columns (text and img) on bigger screen and display 1 column on width<800px
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },

  text1: {
    //controls text of the content1
    fontFamily: "Montserrat, sans-serif",
    marginRight: "5px",
    fontWeight: "700",
    "& p": {
      fontSize: "1.1em",
      fontWeight: "500",
    },
    "& h1": {
      marginTop: 0,
    },
  },

  content1_button: {
    //controls both button of content1
    "@media (max-width: 800px)": {
      display: "flex",
      justifyContent: "center",
    },
  },

  content1_button1: {
    // SIGN UP button of content 1
    margin: "5px",
    borderRadius: "20px",
    "@media (max-width: 800px)": {
      fontSize: "0.8em",
      margin: "3px",
    },
  },

  content1_button2: {
    // LOGIN button of content1
    margin: "5px",
    width: "104px",
    borderRadius: "20px",
    "@media (max-width: 800px)": {
      fontSize: "0.8em",
      margin: "3px",
    },
  },

  img1: {
    // The image of content1
    "& img": {
      width: "100%",
    },
    "@media (max-width: 800px)": {
      marginTop: "10px",
    },
  },

  // **************************************************
  //                      END OF CONTENT1
  // **************************************************

  content2: {
    //Content2 elements wrapper
    backgroundColor: theme.palette.ternary.secondary,
    marginTop: "50px",
    paddingBottom: "100px",
  },

  main2: {
    //The elements of content2
    paddingTop: "50px",
    margin: "0 auto",
    display: "grid",
    width: "70%",
    gridTemplateColumns: "1fr 1fr",

    "@media (max-width: 800px)": {
      gridTemplateColumns: "1fr",
      "@media (max-width: 800px)": {
        width: "90%",
      },
    },
  },

  text2: {
    //text of content2
    fontFamily: "Montserrat, sans-serif",
    paddingLeft: "30px",

    "& h1": {
      textTransform: "uppercase",
      fontSize: "0.9em",
      fontWeight: "600",
    },

    "& h2": {
      margin: "5px 0 30px 0",
      fontSize: "1.6rem",
      fontWeight: "700",
    },

    "& p": {
      padding: "5px 0",
      fontWeight: "500",
      "& i": {
        marginRight: "5px",
        color: theme.palette.secondary.viridian,
      },
    },

    "& p:last-of-type": {
      marginBottom: "30px",
    },
    "@media (max-width: 800px)": {
      textAlign: "center",
      padding: "0",

      "& p": {
        textAlign: "left",
      },
    },
  },

  img2: {
    //image of content2
    height: "300px",
    background:
      "center url(https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
    clipPath: "circle(50% at 50% 50%)",
  },

  // **************************************************
  //                      END OF CONTENT2
  // **************************************************

  content3: {
    //Content3 elements wrapper
    marginTop: "10px",
    fontFamily: "Montserrat, sans-serif",
    backgroundColor: theme.palette.ternary.apple,
    textAlign: "center",
  },

  main3: {
    //Elements of content3
    paddingTop: "30px",
    "& h1": {
      fontSize: "0.9em",
      textTransform: "uppercase",
      fontWeight: "600",
    },

    "& p": {
      marginTop: "5px",
      fontSize: "1.6rem",
      fontWeight: "700",
    },
  },

  p_logos: {
    //partner logos
    margin: "0 auto",
    padding: "20px 0 100px 0",
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
    color: theme.palette.secondary.viridian,

    "& i": {
      cursor: "pointer",
    },
  },
  // **************************************************
  //                      END OF CONTENT3
  // **************************************************

  footer: {
    borderTop: "1px solid #0c0b312F",
    padding: "20px 0 50px 0",
    fontFamily: "Roboto, sans-serif",
  },

  footer_main: {
    margin: "0 auto",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
  },

  footer_text: {
    fontSize: "0.8em",
    fontWeight: 100,

    "& span": {
      cursor: "pointer",
      margin: "0 5px",
      "&:hover": {
        borderBottom: "1px solid #0c0b312F",
      },
    },
  },

  footer_logo: {
    "& i": {
      cursor: "pointer",
      margin: "0 10px",
      color: theme.palette.secondary.viridian,
    },
  },

  // **************************************************
  //                      END OF FOOTER
  // **************************************************
}));

export default useStyle;
export { Button };
