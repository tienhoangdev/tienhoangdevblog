import React, { Suspense } from 'react'
import { Navigate, Route, Routes, Outlet } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import PropTypes from 'prop-types'

// routes config
import routes from '../routes'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth.isAuthenticated)
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  return children
}

const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <Routes>
          {/* {routes.map((route, idx) => { */}
          {/*   return route.element && !route?.authRequired ? ( */}
          {/*     <Route */}
          {/*       key={idx} */}
          {/*       path={route.path} */}
          {/*       exact={route.exact} */}
          {/*       name={route.name} */}
          {/*       element={<route.element />} */}
          {/*     /> */}
          {/*   ) : ( */}
          {/*     // Add protected routes later */}
          {/*     <Route */}
          {/*       key={idx} */}
          {/*       path={route.path} */}
          {/*       exact={route.exact} */}
          {/*       name={route.name} */}
          {/*       element={<route.element />} */}
          {/*     /> */}
          {/*   ) */}
          {/* })} */}

          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
        </Routes>
      </Suspense>
    </CContainer>
  )
}
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}
export default React.memo(AppContent)
