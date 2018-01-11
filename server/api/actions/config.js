/**
 * Created by isaac on 15/10/28.
 */
import path from "path";
const uploadFolder = path.join(__dirname, "../../uploads");
module.exports = {
  code: {
    success: 1000,
    fail: 2000
  },
  db: "mongodb://localhost/db-name",
  testDB: "mongodb://localhost/test-db-name",
  protocol: "admin://",
  uploadFolder,
  meta: {
    installed: "admin.installed"
  }
};
