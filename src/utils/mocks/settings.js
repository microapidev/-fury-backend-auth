const getMockSettings = () => [
  {
    setting_name: "Email Verification Callback",
    setting_type: "String",
    setting_key: "emailVerifyCallback",
    setting_required: true,
    setting_value: "/emailCallback",
  },
  {
    setting_name: "Password Reset Callback",
    setting_type: "String",
    setting_key: "passwordResetCallback",
    setting_required: true,
    setting_value: "/passwordResetCallback",
  },
  {
    setting_name: "Login Success Callback",
    setting_type: "String",
    setting_key: "successCallback",
    setting_required: true,
    setting_value: "successCallback",
  },
  {
    setting_name: "MongoDB URI",
    setting_type: "String",
    setting_key: "mongoDbUri",
    setting_required: true,
    setting_value: "dbUriString",
  },
  {
    setting_name: "Facebook Credentials",
    setting_type: "Array",
    setting_key: "facebookAuthProvider",
    setting_required: false,
    setting_value: [
      {
        setting_name: "Facebook Application ID",
        setting_type: "String",
        setting_key: "appID",
        setting_value: null,
        setting_required: true,
      },
      {
        setting_name: "Facebook Application Secret",
        setting_type: "String",
        setting_key: "appSecret",
        setting_value: null,
        setting_required: true,
      },
    ],
  },
  {
    setting_name: "Twitter Credentials",
    setting_type: "Array",
    setting_key: "twitterAuthProvider",
    setting_required: false,
    setting_value: [
      {
        setting_name: "Twitter Consumer Key",
        setting_type: "String",
        setting_key: "key",
        setting_value: null,
        setting_required: true,
      },
      {
        setting_name: "Twitter Consumer Secret",
        setting_type: "String",
        setting_key: "secret",
        setting_value: null,
        setting_required: true,
      },
    ],
  },
  {
    setting_name: "Github Credentials",
    setting_type: "Array",
    setting_key: "githubAuthProvider",
    setting_required: false,
    setting_value: [
      {
        setting_name: "Github Client ID",
        setting_type: "String",
        setting_key: "clientID",
        setting_value: null,
        setting_required: true,
      },
      {
        setting_name: "Github Client Secret",
        setting_type: "String",
        setting_key: "clientSecret",
        setting_value: null,
        setting_required: true,
      },
    ],
  },
  {
    setting_name: "Google Credentials",
    setting_type: "Array",
    setting_key: "googleAuthProvider",
    setting_required: false,
    setting_value: [
      {
        setting_name: "Google Client ID",
        setting_type: "String",
        setting_key: "clientID",
        setting_value: null,
        setting_required: true,
      },
      {
        setting_name: "Google Client Secret",
        setting_type: "String",
        setting_key: "clientSecret",
        setting_value: null,
        setting_required: true,
      },
    ],
  },
];

module.exports = getMockSettings;