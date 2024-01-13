import { visit } from 'unist-util-visit'

const onNode = (node) => {
  if (node.tagName != 'a' || typeof node.properties?.href !== 'string') {
    return
  }

  const url = node.properties.href
  if (!url.startsWith('#')) return

  node.properties.onClick = (e) => {
    console.log('In onClick')
    e.preventDefault()

    // Show anchor change in address bar
    // eslint-disable-next-line
    history.pushState({}, '', url)

    // Scroll to anchor
    const hash = url.replace('#', '')
    const id = decodeURIComponent(hash)
    const element = document.getElementById(id)

    if (!element) return
    element.scrollIntoView()
  }
}

export default function rehypeAnchorOnClick() {
  return (tree) => {
    visit(tree, 'element', onNode)
  }
}
