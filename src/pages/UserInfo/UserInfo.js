import React from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from 'actions/userInfo';
import PropTypes from 'prop-types';

const propTypes = {
  userInfo: PropTypes.shape({
    isLoading: PropTypes.bool,
    userInfo: PropTypes.object,
    errorMsg: PropTypes.string
  }),
  getUserInfo: PropTypes.func,
};

function UserInfo(props) {
  const { isLoading, userInfo, errorMsg } = props.userInfo;
  return (
    <div className="user-info">
      { isLoading ? '请求信息中...' : 
        ( errorMsg ? errorMsg : 
          <div className="user-info-content">
            <p>用户信息：</p>
            <p>{`用户名：${userInfo.name}`}</p>
            <p>{`介绍：${userInfo.intro}`}</p>
          </div>
        ) 
      }
      <button onClick={() => props.getUserInfo()}>请求用户信息</button>
    </div>
  );
}

UserInfo.propTypes = propTypes;

export default connect((state) => ({userInfo: state.userInfo}), { getUserInfo })(UserInfo);
