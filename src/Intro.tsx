import { Button, Center, createStyles, Image, Stack, Text } from '@mantine/core'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import logo from './assets/logo.png'

const useStyles = createStyles(() => ({
  center: {
    height: '100%',
  },
}))

function Intro() {
  const { classes } = useStyles()

  return (
    <Center className={classes.center}>
      <Stack align="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: 'backInOut',
          }}
        >
          <Image src={logo} width="15rem" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          <Stack align="center">
            <Text size="xl" weight="bolder" align="center">
              Du hast den Eingang gefunden.
            </Text>
            <Text size="lg" align="center">
              Begebe dich auf eine kulturelle Rundreise durch den Johannapark
              und die Welt!
            </Text>
            <Link to="/tour/1">
              <Button color="primary" radius={'lg'}>
                ROUTE STARTEN
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Stack>
    </Center>
  )
}

export default Intro
