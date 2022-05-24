import createRouteMap from './create-route-map'
import createRoute from './utils/route'
export default function createMatcher (routes) {
  // 解析路由表
  // pathMap --> {路由地址：recode对象(path，components，parent)}
  const { pathList, pathMap } = createRouteMap(routes)
  function match (path) {
    const record = pathMap[path]
    // if (record) {
    return createRoute(record, path)
    // }
    // return createRoute(null, path)
  }
  console.log(match('/aaa'))
  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap)
  }
  return {
    match,
    addRoutes
  }
}
