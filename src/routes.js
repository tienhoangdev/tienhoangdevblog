import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Articles
const Articles = React.lazy(() => import('./views/articles/Articles'))

// Golang
const GolangIntro = React.lazy(() => import('./views/golang/golangIntro'))

// Javascript
const JavascriptEventLoop = React.lazy(() => import('./views/javascript/jsEventloop'))
const NodeJsEventLoop = React.lazy(() => import('./views/javascript/nodeJsEventLoop'))
// Cloud
//Linux
const LinuxUsefulCommands = React.lazy(() => import('./views/linux/usefulCommands'))
const LinuxTricks = React.lazy(() => import('./views/linux/tricks'))
// Kubernetes
const KubernetesBasics = React.lazy(() => import('./views/k8s/basics'))
// AWS
const SAMCheatSheet = React.lazy(() => import('./views/aws/dva/sam/sam'))
// Git
const GitRebaseWorkflow = React.lazy(() => import('./views/git/gitRebaseWorkflow'))

// Postgresql
const ubuntuPgInstallation = React.lazy(() => import('./views/postgresql/ubuntuPgInstallation'))
const ACID = React.lazy(() => import('./views/postgresql/acid'))
const PostgresFunction = React.lazy(() => import('./views/postgresql/postgresFunctions'))
// Tools
const CARGCalculator = React.lazy(() => import('./views/tools/finance/cagr'))
const FinancialFreedom = React.lazy(() => import('./views/tools/finance/financialFreedom'))
const MultiChoiceAnswerSheet = React.lazy(() =>
  import('./views/tools/linhtinh/multiChoiceAnswerSheet'),
)
const AgeCalculator = React.lazy(() => import('./views/tools/memes/ageCalculator'))
const ArticlePage = React.lazy(() => import('./views/articles/articlePage'))

// Admin
const AdminDashboard = React.lazy(() => import('./views/admin/dashboad/adminDashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/golang/golang-intro', name: 'GolangIntro', element: GolangIntro },
  {
    path: '/postgresql/ubuntu-installation',
    name: 'ubuntuPgInstallation',
    element: ubuntuPgInstallation,
  },
  {
    path: '/postgresql/acid',
    name: 'ACID trong DBMS',
    element: ACID,
  },
  {
    path: '/postgresql/functions',
    name: 'Postgres Functions',
    element: PostgresFunction,
  },
  {
    path: '/git/git-rebase-workflow',
    name: 'Git workflow với rebase',
    element: GitRebaseWorkflow,
  },
  {
    path: '/aws/dva/sam-cheatsheet',
    name: 'AWS SAM Cheatsheet',
    element: SAMCheatSheet,
  },
  {
    path: '/k8s/basics',
    name: 'Kubernetes Basics',
    element: KubernetesBasics,
  },
  {
    path: '/linux/useful-commands',
    name: 'Linux useful commands',
    element: LinuxUsefulCommands,
  },
  {
    path: '/linux/tricks',
    name: 'Linux tricks',
    element: LinuxTricks,
  },
  {
    path: '/javascript/javascript-eventloop',
    name: 'Javascript event loop',
    element: JavascriptEventLoop,
  },
  {
    path: '/finance/cagr-calculator',
    name: 'Tính CAGR',
    element: CARGCalculator,
  },
  {
    path: '/finance/freedom',
    name: 'Kế hoạch tài chính',
    element: FinancialFreedom,
  },
  {
    path: '/linhtinh/multi-choice-answer-sheet',
    name: 'Kế hoạch tài chính',
    element: MultiChoiceAnswerSheet,
  },
  {
    path: '/memes/age-calculator',
    name: 'Age calculator',
    element: AgeCalculator,
  },
  {
    path: '/javascript/nodejs-eventloop',
    name: 'Node.js event loop',
    element: NodeJsEventLoop,
  },
  {
    path: '/articles',
    name: 'Articles',
    element: Articles,
  },
  {
    path: '/articles/:articleId',
    name: 'Bài viết',
    element: ArticlePage,
  },
  { path: '/admin/dashboard', name: 'Dashboard', element: AdminDashboard, authRequired: true },
]

export default routes
