/**=================================================================
 * ====   TITLE::     ADDING USER FORGOT AND RESET PASSWORD    ====
 * ====   AUTHOR:: jimoh19 <jemohkunle2007@gmail.com>           ====
 * ====   DATE::            1ST JULY 2020                      ====
 * =================================================================
 */


const UserService = require('../services/auth');
const CustomResponse = require('../utils/response');
const { CustomError } = require('../utils/CustomError');


class UserController {

  async register (req, res) {
  
    const data = await UserService.register(req);

    res.status(data.code).json(CustomResponse(data.message, data.user));
  }

  async login(req, res) {

    const data = await UserService.login(req);

    res.status(200).json(CustomResponse(data ? 'Login successful' : 'Something Wrong/Too many request to Twilio API', data));
  }

  async otpVerify(req, res) {

    const data = await UserService.otpVerify(req);

    res.status(200).json(CustomResponse('verification data', data));
  }

  async enable2FA(req, res) {

    const data = await UserService.enable2FA(req);

    res.status(200).json(CustomResponse(data));
  }

  async activeUser(req, res) {

    const data = await UserService.activeUser(req);

    res.status(200).json(CustomResponse('successfully found', data));
  }

  async forgotPassword(req, res) {
    
    const data = await UserService.forgotPassword(req);

    res
      .status(200)
      .json(
        CustomResponse(`A password reset link has been sent to ${data.user.email}`)
      );
  }

  async resetPassword(req, res) {

    await UserService.resetPassword(req);

    res
      .status(200)
      .json(CustomResponse('Password updated successfully. You may login'));
  }

} //end class UserController

module.exports = new UserController();