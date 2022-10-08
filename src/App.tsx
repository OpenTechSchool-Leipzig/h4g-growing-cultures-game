import {
  AppShell,
  Button,
  createStyles,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.primaryColor,
  },
}))

const variants = {
  initial: {
    height: '2.5rem',
  },
  animate: {
    height: '100%',
  },
}

function App() {
  const { classes } = useStyles()
  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    navigate('/intro')
  }, [])

  return (
    <AppShell
      sx={{
        main: {
          minHeight: '90vh',
        },
      }}
      header={
        <motion.header
          className={classes.header}
          initial="initial"
          variants={variants}
          animate={open ? 'animate' : 'initial'}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            delay: 0.05,
          }}
          onTransitionEnd={() => setShow(false)}
        >
          <Stack justify="center">
            <Group position="right" align="center">
              <Button
                onClick={() => {
                  if (!open) setShow(true)
                  setOpen(!open)
                }}
              >
                <i
                  className={
                    open
                      ? 'ri-arrow-up-circle-line ri-2x'
                      : 'ri-information-line ri-2x'
                  }
                />
              </Button>
            </Group>
            {show && (
              <Stack align="flex-start" sx={{ padding: '1rem' }}>
                <Text size="xl" weight="bolder" color="white">
                  Growing Cultures e.V.
                </Text>
                <Button
                  variant="outline"
                  color="gray.0"
                  uppercase
                  onClick={() => {
                    window.open('https://growing-cultures.com/')
                  }}
                >
                  Zur Website
                </Button>
                <Text size="lg" color="white">
                  Dieses Projekt wurde für Growing Cultures e.V. im Rahmen des
                  “hack for good” hackathon entwickelt.
                </Text>
                <Text size="xl" weight="bolder" color="white">
                  Team
                </Text>
                <Text size="md" color="white">
                  Dominik Kellner - Senior Infrastructure Specialist
                </Text>
                <Text size="md" color="white">
                  Elisa Haubert - Chief Imagination Fountain
                </Text>
                <Text size="md" color="white">
                  Anki Huber - Senior Communication Advisor
                </Text>
                <Text size="md" color="white">
                  Alexander Lemeshov - Summoner of Hackers
                </Text>
                <Text size="md" color="white">
                  Martin Schunk - Tree Hugger
                </Text>
                <Text size="md" color="white">
                  Daniel Herzog - Botwhisperer
                </Text>
                <Text size="md" color="white">
                  Alexander Stinka - Something with Data
                </Text>
                <Text size="md" color="white">
                  Andre Wruszczak - Full of stack
                </Text>
              </Stack>
            )}
          </Stack>
        </motion.header>
      }
    >
      <Outlet />
    </AppShell>
  )
}

export default App
