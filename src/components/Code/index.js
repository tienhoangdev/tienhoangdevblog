import PropTypes from 'prop-types'
import React, { useRef, useEffect } from 'react'
import mermaid from 'mermaid'

const randomid = () => parseInt(String(Math.random() * 1e15), 10).toString(36)

const getCode = (arr = []) =>
  arr
    .map((dt) => {
      if (typeof dt === 'string') {
        return dt
      }
      if (dt.props && dt.props.children) {
        return getCode(dt.props.children)
      }
      return false
    })
    .filter(Boolean)
    .join('')

const Code = ({ inline, children = [], className, ...props }) => {
  const demoid = useRef(`dome${randomid()}`)
  const code = getCode(children)
  const demo = useRef(null)
  useEffect(() => {
    if (demo.current) {
      try {
        const str = mermaid.render(demoid.current, code, () => null, demo.current)
        demo.current.innerHTML = str
      } catch (error) {
        demo.current.innerHTML = error
      }
    }
  }, [code, demo])

  if (
    typeof code === 'string' &&
    typeof className === 'string' &&
    /^language-mermaid/.test(className.toLocaleLowerCase())
  ) {
    return (
      <code ref={demo}>
        <code id={demoid.current} style={{ display: 'none' }} />
      </code>
    )
  }
  return <code className={String(className)}>{children}</code>
}

Code.propTypes = {
  inline: PropTypes.any,
  children: PropTypes.array,
  className: PropTypes.any,
}

export default Code
