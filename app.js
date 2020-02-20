const Koa = require("koa");
const {
  readFileSync
} = require("fs");
const {
  resolve
} = require("path");
const static = require("koa-static");

const app = new Koa();

const PORT = 3395;

app.use(static(resolve(__dirname, "./dist/")));
app.use(async ctx => {
  try {
    const html = await readFileSync(
      resolve(__dirname, "./dist/index.html"),
      "utf8"
    );
    ctx.body = html;
  } catch (err) {
    ctx.body = {
      code: 500,
      data: null,
      message: "页面启动中",
      time: Date.now()
    };
  }
});

app.listen(PORT, () => {
  console.log("app started on http://localhost:" + PORT);
});