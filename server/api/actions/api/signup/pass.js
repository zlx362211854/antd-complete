import basic from '../../../scripts/creator/creator';
import demo from '../../../scripts/creator/demo';
import mongoose from "mongoose";
import {code} from '../../config';
import {argsFilter, enumFilterCreator} from '../../lib/util';

const selector = {demo, basic};
const Signup = mongoose.model("Signup");
const Admin = mongoose.model("Admin");

export default async function (req) {
  const {id, hospital, doctor, phone, email, type} = await argsFilter(req.body, {
    id: ['id', 'required'],
    hospital: 'required',
    doctor: 'required',
    phone: 'always',
    email: req.body.phone ? 'always' : 'required',
    type: ['required', enumFilterCreator(['demo', 'basic'])]
  });
  const check = await Admin.count({$or: [{email}, {mobile: phone}]});
  if (check) {
    throw {code: code.fail, msg: '邮箱已经存在！'}
  }
  const result = await selector[type](hospital, doctor, phone, email);
  await Signup.findByIdAndUpdate(id, {status: '1', correlate: result.hospital});
  return {code: code.success};
}
