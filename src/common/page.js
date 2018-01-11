
import {dynamicWrapper} from './nav';
// 额外页面写在这里
export default function page(app) {
  return [
    {
      name: '示例页面',
      hide: true,
      path: 'index',
      component: dynamicWrapper(app, ["user"], () =>
        import("../routes/ExamplePages/index")
      )
    }
  ]
}
