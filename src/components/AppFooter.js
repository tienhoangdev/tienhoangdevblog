import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://wiki.tienhoangdev.com" target="_blank" rel="noopener noreferrer">
          Tienhoangdev.com
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
