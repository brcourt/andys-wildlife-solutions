import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration } from 'react-router-dom'
import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { MobileCTABar } from './components/layout/MobileCTABar'
import { Home } from './pages/Home'
import { WildlifeRemoval } from './pages/WildlifeRemoval'
import { SnakeRemoval } from './pages/SnakeRemoval'
import { RodentControl } from './pages/RodentControl'
import { DamageRepair } from './pages/DamageRepair'
import { Cleanup } from './pages/Cleanup'
import { About } from './pages/About'
import { FAQ } from './pages/FAQ'
import { Contact } from './pages/Contact'

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <Nav />
      <Outlet />
      <Footer />
      <MobileCTABar />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services/wildlife-removal', element: <WildlifeRemoval /> },
      { path: '/services/snake-removal', element: <SnakeRemoval /> },
      { path: '/services/rodent-control', element: <RodentControl /> },
      { path: '/services/damage-repair', element: <DamageRepair /> },
      { path: '/services/cleanup', element: <Cleanup /> },
      { path: '/about', element: <About /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
