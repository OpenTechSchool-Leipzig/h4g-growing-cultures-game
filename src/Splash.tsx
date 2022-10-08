import { Center, createStyles, Image, Stack } from '@mantine/core'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'

const useStyles = createStyles(() => ({
  center: {
    height: '100vh',
  },
}))

function Splash() {
  const { classes } = useStyles()

  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/app'), 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <Center className={classes.center}>
      <Stack align="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Image src={logo} width="15rem" />
        </motion.div>
      </Stack>
    </Center>
  )
}

export default Splash
