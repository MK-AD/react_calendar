import {Component} from "react";
import '../drawer.js'

class PageAbstract extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      loginActive: false
    };
    this.checkLogin();
  }

  checkLogin() {
      console.log("Checking login");
      this.state.loginActive = this.validateLogin();
      if(!this.state.loginActive) {
          window.location = "https://api.planblick.com/signaturepad/index.html";
      }
  }

  validateLogin() {
      return true;
  }

  render() {
      const {loading} = this.state;
      if (!loading) {
          var element = document.getElementById("loading_overlay");
            element.parentNode.removeChild(element);

          setInterval(() => {
              this.checkLogin();
          }, 30000);
      }

      return true;
  }
}

export default PageAbstract;