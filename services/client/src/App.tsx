import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <Box width={1} height={1} position='relative'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
      </Routes>
    </Box>
  )
}
