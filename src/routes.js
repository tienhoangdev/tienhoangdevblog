import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

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
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
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
]

export default routes
