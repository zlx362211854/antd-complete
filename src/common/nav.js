import dynamic from "dva/dynamic";
import page from './page';
// wrapper of dynamic
export const dynamicWrapper = (app, models, component) =>
  dynamic({
    app,
    models: () => models.map(m => import(`../models/${m}.js`)),
    component
  });

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ["user", "login"], () =>
      import("../layouts/BasicLayout")
    ),
    ...page(app), // 加载额外页面（不包含在nav中的）
    layout: "BasicLayout",
    name: "首页", // for breadcrumb
    path: "/",
    children: [
      {
        name: '示例页面',
        hide: true,
        path: 'index',
        component: dynamicWrapper(app, ["user"], () =>
          import("../routes/ExamplePages/index")
        )
      },
      {
        name: "控制台",
        icon: "dashboard",
        path: "dashboard",
        children: [
          {
            name: "页面1",
            path: "page1",
            component: dynamicWrapper(app, ["user"], () =>
              import("../routes/ExamplePages/page1")
            )
          },
          {
            name: "页面2",
            path: "page2",
            component: dynamicWrapper(app, ["user"], () =>
              import("../routes/ExamplePages/page2")
            )
          }
        ],
      },
      {
        name: "异常",
        path: "exception",
        icon: "warning",
        hide: true,
        children: [
          {
            name: "403",
            path: "403",
            component: dynamicWrapper(app, [], () =>
              import("../routes/Exception/403")
            )
          },
          {
            name: "404",
            path: "404",
            component: dynamicWrapper(app, [], () =>
              import("../routes/Exception/404")
            )
          },
          {
            name: "500",
            path: "500",
            component: dynamicWrapper(app, [], () =>
              import("../routes/Exception/500")
            )
          }
        ]
      }
    ]
  },
  {
    component: dynamicWrapper(app, [], () => import("../layouts/UserLayout")),
    path: "/user",
    layout: "UserLayout",
    children: [
      {
        name: "帐户",
        icon: "user",
        path: "user",
        hide: true,
        children: [
          {
            name: "登录",
            path: "login",
            component: dynamicWrapper(app, ["login"], () =>
              import("../routes/User/Login")
            )
          },
          {
            name: "注册",
            path: "register",
            component: dynamicWrapper(app, ["register"], () =>
              import("../routes/User/Register")
            )
          },
          {
            name: "注册结果",
            path: "register-result",
            component: dynamicWrapper(app, [], () =>
              import("../routes/User/RegisterResult")
            )
          }
        ]
      }
    ]
  }
];
