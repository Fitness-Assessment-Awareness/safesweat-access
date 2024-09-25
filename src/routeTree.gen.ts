/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const SignupSuccessLazyImport = createFileRoute('/signup-success')()
const PasswordResetLazyImport = createFileRoute('/password-reset')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const SignupSuccessLazyRoute = SignupSuccessLazyImport.update({
  path: '/signup-success',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/signup-success.lazy').then((d) => d.Route),
)

const PasswordResetLazyRoute = PasswordResetLazyImport.update({
  path: '/password-reset',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/password-reset.lazy').then((d) => d.Route),
)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/password-reset': {
      id: '/password-reset'
      path: '/password-reset'
      fullPath: '/password-reset'
      preLoaderRoute: typeof PasswordResetLazyImport
      parentRoute: typeof rootRoute
    }
    '/signup-success': {
      id: '/signup-success'
      path: '/signup-success'
      fullPath: '/signup-success'
      preLoaderRoute: typeof SignupSuccessLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/password-reset': typeof PasswordResetLazyRoute
  '/signup-success': typeof SignupSuccessLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/password-reset': typeof PasswordResetLazyRoute
  '/signup-success': typeof SignupSuccessLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/password-reset': typeof PasswordResetLazyRoute
  '/signup-success': typeof SignupSuccessLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/password-reset' | '/signup-success'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/password-reset' | '/signup-success'
  id: '__root__' | '/' | '/password-reset' | '/signup-success'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  PasswordResetLazyRoute: typeof PasswordResetLazyRoute
  SignupSuccessLazyRoute: typeof SignupSuccessLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  PasswordResetLazyRoute: PasswordResetLazyRoute,
  SignupSuccessLazyRoute: SignupSuccessLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/password-reset",
        "/signup-success"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/password-reset": {
      "filePath": "password-reset.lazy.tsx"
    },
    "/signup-success": {
      "filePath": "signup-success.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
