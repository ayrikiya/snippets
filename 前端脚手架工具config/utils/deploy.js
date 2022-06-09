/*
 * @Author: 王荣
 * @Date: 2022-06-09 15:34:38
 * @LastEditors: 王荣
 * @LastEditTime: 2022-06-09 15:34:39
 * @Description: 填写简介
 */


// node项目中在项目build后自动将build出的css js等文件复制到发布仓库并自动git三连推送部署代码。
// 需要在package.json中增加脚本 "deploy": "craco build && node deploy.js"
// 使用方法： npm run deploy -- "commit msg"


// shell.mkdir('-p', './dada')
// shell.ls('./')
// console.log(shell.ls('/git repo/oss-static/sales'))

// shell.cp('-r', './build/static/.', '/git repo/oss-static/sales')

require('dotenv').config()
const { exit } = require("process");
const shell = require("shelljs");

const [, , param = "feat:auto commit"] = process.argv;
const exec = shell.exec;
const sourceDirFiles = "./build/static/.";
// const destDir = "/git repo/oss-static/sales";
const destDir = "/git repo/test";
console.log('env',process.env.HTTPS)
shell.cp("-r", sourceDirFiles, destDir);

shell.cd(destDir);

if (exec("git add .").code !== 0) {
  shell.echo("Error: git add failed");
  exit(0);
}

if (exec(`git commit -m "${param}"`).code !== 0) {
  shell.echo("Error: git commit failed");
  exit(0);
}

if (exec(`git push`).code !== 0) {
  echo("Error: git push failed");
  exit(1);
}

exec(`echo git success ${param}`);
