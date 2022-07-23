let navbar = ()=>{
    return `<div class="brand">
    <img src="https://www.sendinblue.com/wp-content/themes/sendinblue2019/assets/images/common/logo-color.svg">
  </div>
  <nav>
    <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
    <ul class="nav-list">
        <li>
            <a href="#!">Solutions</a><span><i class="fa-solid fa-caret-down"></i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg></span>
            <ul class="nav-dropdown">
              <li>
                <a href="#!">Why Sendinblue?</a>
              </li>
              <li>
                <a href="#!">Enterprise</a>
              </li>
            </ul>
          </li>
      <li>
        <a href="#!">Pricing</a>
      </li>
      <li>
        <a href="#!">Features</a>
      </li>
      <li>
        <a href="#!">Resources</a><span><i class="fa-solid fa-caret-down"></i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 246.6l-127.1 128C176.4 380.9 168.2 384 160 384s-16.38-3.125-22.63-9.375l-127.1-128C.2244 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75S319.8 237.5 310.6 246.6z"/></svg></span>
        <ul class="nav-dropdown">
          <li>
            <a href="#!">Email Marketing</a>
          </li>
          <li>
            <a href="#!">Emsil API</a>
          </li>
          <li>
            <a href="#!">SMS Marketing</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#!">Blog</a>
      </li>
    </ul>
  </nav>
  <div>
    <a id="login" href="#">Log In</a>
    <button id="btn">Sign Up Free</button>
  </div>`
}

export {navbar}

