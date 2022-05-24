export default function createRouteMap (routes, oldPathList, oldPathMap) {
  const pathList = oldPathList || []
  const pathMap = oldPathMap || {}
  routes.map(route => {
    addRouteRecord(route, pathList, pathMap)
  })

  return {
    pathList,
    pathMap
  }
}

function addRouteRecord (route, pathList, pathMap, parentRecord) {
  const path = parentRecord ? `${parentRecord.path}/${route.path}` : route.path

  // pathMap的属性是path，值是record对象(path，component，parent)
  const record = {
    path,
    component: route.component,
    parentRecord
  }
  // 判断当前的路由表中是否已经存在当前的路径
  if (!pathMap[path]) {
    pathList.push(path)
    pathMap[path] = record
  }
  // 判断当前的route是否有子路由
  if (route.children) {
    route.children.forEach(subRoute => {
      addRouteRecord(subRoute, pathList, pathMap, record)
    })
  }
}
