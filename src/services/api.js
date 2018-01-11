import request from '../utils/request';
export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request({
    url: '/api/activities',
    method: 'GET'
  });
}

export async function queryRule(params) {
  return request({
    url: '/api/rule',
    method: 'GET',
    data: params
  });
}

export async function removeRule(params) {
  return request({
    url: '/api/rule',
    method: 'POST',
    data: params
  });
}

export async function addRule(params) {
  return request({
    url: '/api/rule',
    method: 'POST',
    data: params
  });
}

export async function fakeSubmitForm(params) {
  return request({
    url: '/api/forms',
    method: 'POST',
    data: params,
  });
}

export async function fakeChartData() {
  return request({
    url: '/api/fake_chart_data',
    method: 'GET'
  });
}

export async function queryTags() {
  return request({
    url: '/api/tags',
    method: 'GET'
  });
}

export async function queryBasicProfile() {
  return request({
    url: '/api/profile/basic',
    method: 'GET'
  });
}

export async function queryAdvancedProfile() {
  return request({
    url: '/api/profile/advanced',
    method: 'GET'
  });
}

export async function queryFakeList(params) {
  return request({
    url: '/api/fake_list',
    method: 'get',
    data: params
  });
}

export async function accountLogin(params) {
  return request({
    url: '/admin/login',
    method: 'POST',
    data: params,
  });
}

export async function fakeMobileLogin(params) {
  return request({
    url: '/api/login/mobile',
    method: 'POST',
    data: params,
  });
}

export async function fakeRegister(params) {
  return request({
    url: '/api/register',
    method: 'POST',
    data: params,
  });
}

export async function queryNotices() {
  return request({
    url: '/api/notices',
    method: 'GET',
  })
}

// -----------------------------------------


export async function queryHospitalList(params) {
  return request({
    url: '/hospital/all',
    method: 'GET',
    data: params,
  })
}
export async function hospitalUpdate(params) {
  return request({
    url: '/hospital/update',
    method: 'POST',
    data: params,
  });
}

export async function resetPassword(params) {
  return request({
    url: '/admin/forceresetpassword',
    method: 'POST',
    data: params,
  });
}
export async function queryApplyList(params) {
  return request({
    url: '/signup/hospital',
    method: 'GET',
    data: params,
  })
}

export async function pass(params) {
  return request({
    url: 'signup/pass',
    method: 'POST',
    data: params,
  })
}
export async function unpass(params) {
  return request({
    url: '/signup/unpass',
    method: 'POST',
    data: params,
  })
}

export async function getData(params) {
  return request({
    url: '/statistics/comprehensive',
    method: 'GET',
    data: params,
  })
}
export async function getApplyData(params) {
  return request({
    url: '/statistics/comprehensive',
    method: 'GET',
    data: params,
  })
}
export async function getDailysisData(params) {
  return request({
    url: '/hospital/all',
    method: 'GET',
    data: params,
  })
}
export async function getInfectData(params) {
  return request({
    url: '/statistics/comprehensive',
    method: 'GET',
    data: params,
  })
}
// 获取医院列表
export async function getHospitals(params) {
  return request({
    url: '/hospital/simpleAll',
    method: 'GET',
    data: params,
  })
}
