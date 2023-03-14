import React from 'react'

export const Footer = () => {
  return (
    <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Subscribe Newsletter</h5>
          <input id="email_inline" type="email" class="validate"/>
            <label for="email_inline">Email</label>
            <a class="waves-effect waves-light btn">Sign Up</a>
        </div>
        <div class="col l4 offset-l2 s12">
          <h5 class="white-text">Quick Links</h5>
          <ul>
            <li><a class="grey-text text-lighten-3" href="/products">Products</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Resources</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">About</a></li>
            <li><a class="grey-text text-lighten-3" href="#!">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      © 2023 Copyright Mochi's Mittens
      </div>
    </div>
  </footer>
  )
}

export default Footer
