import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import App from './App'
import Intro from './Intro'
import Tour from './Tour'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'intro',
        element: <Intro />,
      },
      {
        path: 'tour/:tourId',
        element: <Tour />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          teal: [
            '#dcfffd',
            '#affff6',
            '#80fef1',
            '#53feeb',
            '#2ffce5',
            '#21e3cb',
            '#10b19e',
            '#017f71',
            '#004c44',
            '#001b18',
          ],
          orange: [
            '#ffeedd',
            '#ffd1b0',
            '#fdb581',
            '#fb9750',
            '#f97920',
            '#e06008',
            '#af4b04',
            '#7e3502',
            '#4d1f00',
            '#1f0800',
          ],
          green: [
            '#eefbe2',
            '#d7eec0',
            '#bfe19b',
            '#a6d575',
            '#8ec94f',
            '#75b036',
            '#5a8929',
            '#40621b',
            '#253c0d',
            '#081600',
          ],
        },
        primaryColor: 'teal',
        primaryShade: 7,
      }}
    >
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
