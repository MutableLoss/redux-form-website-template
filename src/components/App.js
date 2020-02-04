import React from "react";
import styles from "./App.scss";
import Home from "./Home";
import Nav from "./Nav";
import Breadcrumbs from "./Breadcrumbs";
import TwitterFollowButton from "./TwitterFollowButton";
import cx from "classnames";

const App = ({ children, path, version, breadcrumbs }) => {
  const isHome = path === "/";
  const url = `https://redux-form.com/${version}`;
  return (
    <div className={cx(styles.app, { [styles.hasNav]: !isHome })}>
      {!isHome && <Nav path={path} url={url} />}
      <div className={styles.triplebyte}>
        💰{" "}
        <strong>
          Wanna get paid the big bucks writing React?{" "}
          <a href="https://triplebyte.com/a/V6j0KPS/rfcom" target="_blank">
            Take this quiz
          </a>{" "}
          and get offers from top tech companies!
        </strong>{" "}
        💰
      </div>
      <div className={styles.contentAndFooter}>
        <div className={styles.topNav}>
          <a href="https://redux-form.com" className={styles.brand} />
          <a
            className={styles.github}
            href="https://github.com/erikras/redux-form"
            title="Github"
            target="_blank"
          >
            <i className="fa fa-fw fa-github" />
          </a>
        </div>
        <div className={cx(styles.content, { [styles.home]: isHome })}>
          {isHome ? (
            <Home version={version} />
          ) : (
            <div>
              <Breadcrumbs items={breadcrumbs} />
              {children}
            </div>
          )}
        </div>
        <div className={styles.footer}>
          {/*isHome && <Sponsor width={250} height={290} dark />*/}
          <div>Created by Erik Rasmussen</div>
          <div>
            Got questions? Ask for help:
            <a
              className={styles.help}
              href="https://stackoverflow.com/questions/ask?tags=redux-form"
              title="Stack Overflow"
              target="_blank"
            >
              <i className="fa fa-fw fa-stack-overflow" />
            </a>
            <a
              className={styles.help}
              href="https://github.com/erikras/redux-form/issues/new"
              title="Github"
              target="_blank"
            >
              <i className="fa fa-fw fa-github" />
            </a>
          </div>
          <div>
            <TwitterFollowButton username="erikras" showUsername large />
            <TwitterFollowButton username="ReduxForm" showUsername large />
          </div>
          <div>
            <a href="https://www.netlify.com" target="_blank">
              <img src="https://www.netlify.com/img/global/badges/netlify-color-bg.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
