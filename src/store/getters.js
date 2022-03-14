const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  id: state => state.user.id,
  name: state => state.user.name,
  phone: state => state.user.phone,
  idCard: state => state.user.idCard,
  avatarUrl: state => state.user.avatarUrl,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs
}
export default getters
