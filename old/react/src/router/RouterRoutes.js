import * as RouterConstants from './RouterConstants'
import PageHome from '../pages/PageHome'
import PageAuthSignin from '../pages/PageAuthSignin'
import PageAuthRegistration from '../pages/PageAuthRegistration'
import PageAuthForgot from '../pages/PageAuthForgot'
import PageModule from '../pages/PageModule'
import PageProject from '../pages/PageProject'
import PageStep from '../pages/PageStep'
import PageLection from '../pages/PageLection'
import PageTest from '../pages/PageTest'
import PageNotify from '../pages/PageNotify'
import PageProfile from '../pages/PageProfile'

export const privateRoutes = [{
  Path: RouterConstants.ROUTE_HOME,
  Component: PageHome
}, {
  Path: RouterConstants.ROUTE_MODULE,
  Component: PageModule
}, {
  Path: RouterConstants.ROUTE_PROJECT,
  Component: PageProject
}, {
  Path: RouterConstants.ROUTE_PROJECT_STEP,
  Component: PageStep
}, {
  Path: RouterConstants.ROUTE_LECTION,
  Component: PageLection
}, {
  Path: RouterConstants.ROUTE_TEST,
  Component: PageTest
}, {
  Path: RouterConstants.ROUTE_NOTIFY,
  Component: PageNotify
}, {
  Path: RouterConstants.ROUTE_PROFILE,
  Component: PageProfile
}, {
  Path: RouterConstants.ROUTE_AUTH_SIGN_IN,
  Component: PageAuthSignin
}, {
  Path: RouterConstants.ROUTE_AUTH_REGISTRATION,
  Component: PageAuthRegistration
}, {
  Path: RouterConstants.ROUTE_AUTH_FORGOT,
  Component: PageAuthForgot
}]

export const authRoutes = []