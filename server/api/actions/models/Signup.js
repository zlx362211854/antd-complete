import mongoose from "mongoose";
import { getTime } from "../lib/util";
const ObjectId = mongoose.Schema.Types.ObjectId;

export const enums = {
  status: ["0", "1", "2"] // '0'：尚未审核 '1'：审核通过 '2'：审核未通过
};

// 申请
const schema = mongoose.Schema({
  hospital: String, // 医院名
  doctor: String, // 医生名
  phone: String, // 电话号码
  role: String, // 职位
  account: String, // 账户
  type: { type: String, enums: ["0", "1"] }, // 类型 '0'：新开账号 '1'：密码重置
  status: { type: String, enum: enums.status, default: "0" }, // 审核状态
  operator: { type: ObjectId, ref: "Admin" }, // 审核者
  deleted: { type: Boolean, default: false },
  create_time: { type: Number, default: getTime },
  update_time: Number,
  correlate: ObjectId
});

export default mongoose.model("Signup", schema);
