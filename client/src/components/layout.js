import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import { Link } from 'gatsby';

import styles from './layout.module.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

if (typeof window !== 'undefined') {
  window.jQuery = window.$ = require('jquery');
  require('bootstrap');
}

class DefaultLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={styles.appHeader}>
          <div className={styles.appHeaderPhoto}>
            <div className={styles.appHeaderIdentity}>@mkelley33</div>
          </div>
          <nav>
            <ul className={styles.appMenu}>
              <li className={styles.appMenuItem}>
                <Link className={styles.appMenuLink} to="/about">
                  About
                </Link>
              </li>
              <li className={styles.appMenuItem}>
                <Link className={styles.appMenuLink} to="/blog">
                  Blog
                </Link>
              </li>
              <li className={styles.appMenuItem}>
                <Link className={styles.appMenuLink} to="/resume">
                  Resume
                </Link>
              </li>
              <li className={styles.appMenuItem}>
                <Link className={styles.appMenuLink} to="/contact">
                  Contact
                </Link>
              </li>
              <li className={styles.appMenuItem}>
                <Link className={styles.appMenuLink} to="/photos">
                  Photos
                </Link>
              </li>
            </ul>
            <ul className={styles.authMenu}>
              <li>
                {!this.props.authenticated && (
                  <Link to="/register" className={styles.appHeaderLink}>
                    Register
                  </Link>
                )}
              </li>
              <li>
                {this.props.authenticated ? (
                  <Link to="/sign-out" className={styles.appHeaderLink}>
                    Sign Out
                  </Link>
                ) : (
                  <Link className={styles.appHeaderLink} to="/sign-in">
                    Sign In
                  </Link>
                )}
              </li>
              <li>
                {this.props.authenticated && (
                  <Link to="/profile" className={styles.appHeaderLink}>
                    Profile
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </header>
        <ToastContainer />
        <div className={styles.appContent}>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(DefaultLayout);
