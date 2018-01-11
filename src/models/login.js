import { routerRedux } from 'dva/router';
import { accountLogin, fakeMobileLogin } from '../services/api';
import {message} from 'antd';
export default {
  namespace: 'login',

  state: {
    status: undefined,
  },

  effects: {
    *accountSubmit({ payload }, { call, put}) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const response = yield call(accountLogin, {
        email: payload.email,
        password: payload.password
      });
      if (response && response.code === 2000) {
          message.error(response.msg);
      } else if (response && response.code === 1000) {
        localStorage.uhs_admin_user = JSON.stringify(response.user);
          yield put({
            type: 'changeLoginStatus',
            payload: response,
          });
        payload.cb();
      }

      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *mobileSubmit(_, { call, put }) {
      yield put({
        type: 'changeSubmitting',
        payload: true,
      });
      const response = yield call(fakeMobileLogin);
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      yield put({
        type: 'changeSubmitting',
        payload: false,
      });
    },
    *logout(_, { put }) {
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
        },
      });
      yield put(routerRedux.push('/user/login'));
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      return {
        ...state,
        user: payload.user,
        token: payload.access_token
      };
    },
    changeSubmitting(state, { payload }) {
      return {
        ...state,
        submitting: payload,
      };
    },
  },
};
