import mongoose from "mongoose";
import {code} from '../../config';
import {argsFilter} from '../../lib/util';

const Signup = mongoose.model("Signup");

export default async function (req) {
  const {id} = await argsFilter(req.body, {id: ['id', 'required'],});
  await Signup.findByIdAndUpdate(id, {status: '2'});
  return {code: code.success};
}
