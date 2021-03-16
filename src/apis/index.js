import request from "./request";

export function getCountry() {
  return request.get("/sale/country/");
}

export function getPayStatus(params = {}) {
  return request.get(`/activity/pay_status/`, { params });
}

export function postActivityOrder(payload = {}) {
  return request.post("/sale/activity_order/", payload);
}

export function getSalesShare(params = {}) {
  return request.get("/sales/share/", { params });
}

export function getWechatOauth(payload) {
  return request.post("/sales/wechat_oauth/", payload);
}

export function postSalesAward(payload) {
  return request.post("/sales/award/", payload);
}
