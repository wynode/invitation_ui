const nodeEnv = process.env.VUE_APP_MODE;

const backServer = {
  development: process.env.VUE_APP_SERVER || "http://test-sdfsdapi.sdf.com.cn",
  testbuild: "http://testsdfsdapi.sdfsd.com",
  release: "http://release-sdfsdapi.sdf.com.cn",
  production: "https://qyapi.sdf.com.cn",
};

const sharePage = {
  development: "http://test-4124.sdf.com.cn/activity/180801/",
  testbuild: "http://test-4124.sdf.com.cn/activity/180801/",
  production: "https://4124.yunaq.com/activity/180801/",
};

export const BACK_API = backServer[nodeEnv];
export const SHARE_PAGE_URL = sharePage[nodeEnv];
