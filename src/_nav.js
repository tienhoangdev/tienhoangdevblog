import React from 'react'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Ngôn ngữ lập trình',
  },
  {
    component: CNavGroup,
    name: 'Golang',
    to: '/golang',
    icon: (
      <img
        src="data:image/png;base64,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"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Giới thiệu về Golang',
        to: '/golang/golang-intro',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Javascript',
    to: '/javascript',
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Javascript event loop',
        to: '/javascript/javascript-eventloop',
      },
      {
        component: CNavItem,
        name: 'Nodejs event loop',
        to: '/javascript/nodejs-eventloop',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Cloud',
  },
  {
    component: CNavGroup,
    name: 'AWS',
    to: '/aws',
    icon: (
      <img
        src="https://static-00.iconduck.com/assets.00/general-awscloud-icon-512x512-tq2r4lgg.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'AWS SAM Cheatsheet',
        to: '/aws/dva/sam-cheatsheet',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Linux',
    to: '/linux',
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Linux useful commands',
        to: '/linux/useful-commands',
      },
      {
        component: CNavItem,
        name: 'Linux tricks',
        to: '/linux/tricks',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Kubernetes',
    to: '/k8s',
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/1055px-Kubernetes_logo_without_workmark.svg.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Kubernetes basics',
        to: '/k8s/basics',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Others',
  },
  {
    component: CNavGroup,
    name: 'Git',
    to: '/git',
    icon: (
      <img
        src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Git workflow với rebase',
        to: '/git/git-rebase-workflow',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Postgresql',
    to: '/postgresql',
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Cài đặt PG trên ubuntu',
        to: '/postgresql/ubuntu-installation',
      },
      {
        component: CNavItem,
        name: 'ACID trong DBMS',
        to: '/postgresql/acid',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Tools',
  },
  {
    component: CNavGroup,
    name: 'Finance',
    to: '/finance',
    icon: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/2474/2474450.png"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Tính CAGR',
        to: '/finance/cagr-calculator',
      },
    ],
  },
  {
    component: CNavGroup,
    name: '????',
    to: '/memes',
    icon: (
      <img
        src="https://www.shutterstock.com/shutterstock/photos/2230690077/display_1500/stock-vector-doge-meme-dog-with-thug-life-glasses-vector-illustration-2230690077.jpg"
        style={{ width: '2rem', marginRight: '1rem' }}
      />
    ),
    items: [
      {
        component: CNavItem,
        name: 'Age calculator',
        to: '/memes/age-calculator',
      },
    ],
  },
]

export default _nav
