import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'dva/router';
import DocumentTitle from 'react-document-title';
import {Icon} from 'antd';
import styles from './UserLayout.less';


const copyright = <div>Copyright <Icon type="copyright"/> 2017 蚂蚁金服体验技术部出品</div>;

class UserLayout extends React.PureComponent {
  static childContextTypes = {
    location: PropTypes.object,
  }

  getChildContext() {
    const {location} = this.props;
    return {location};
  }

  getPageTitle() {
    const {getRouteData, location} = this.props;
    const {pathname} = location;
    let title = 'ADMIN';
    getRouteData('UserLayout').forEach((item) => {
      if (item.path === pathname) {
        title = `${item.name} ADMIN`;
      }
    });
    return title;
  }

  render() {
    const {getRouteData} = this.props;

    return (
      <DocumentTitle title={this.getPageTitle()}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.header}>
              <Link to="/">
                <img alt="" className={styles.logo} src="https://avatars2.githubusercontent.com/u/22437181?s=460&v=4"/>
                <span className={styles.title}>后台管理系统</span>
              </Link>
            </div>
            <div className={styles.desc}>...</div>
          </div>
          {
            getRouteData('UserLayout').map(item =>
              (
                <Route
                  exact={item.exact}
                  key={item.path}
                  path={item.path}
                  component={item.component}
                />
              )
            )
          }
        </div>
      </DocumentTitle>
    );
  }
}

export default UserLayout;
