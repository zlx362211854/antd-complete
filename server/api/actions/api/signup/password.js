import "../../models/Admin";
import mongoose from "mongoose";
import { code } from "../../config";
import { argsFilter } from "../../lib/util";

const Signup = mongoose.model("Signup");
const Admin = mongoose.model("Admin");

export default async req => {
  const args = await argsFilter(req.body, { account: ["required", "string"] });

  const singnupCount = await Signup.count({
    account: args.account,
    status: "0",
    deleted: false,
    type: "1"
  }).exec();
  if (singnupCount) {
    throw { code: code.fail, msg: "重复申请！" };
  }

  const AdminCount = await Admin.count({
    $or: [{ email: args.account }, { mobile: args.account }]
  }).exec();
  if (!AdminCount) {
    throw { code: code.fail, msg: "无效账户！" };
  }
  args.type = "1";
  const signup = new Signup(args);
  await signup.save();
  return { code: code.success };
};
