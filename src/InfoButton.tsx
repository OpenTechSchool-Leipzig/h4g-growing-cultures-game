import { ActionIcon, createStyles } from '@mantine/core'
import { useState } from 'react'

const variants = {
  initial: { position: 'fixed', top: '40%' },
  animate: { top: '10%', transitionEnd: { position: 'inherit' } },
}

const useStyles = createStyles((theme) => ({
  inactive: {
    borderStyle: 'dashed',
    height: '4rem',
    width: '4rem',
    borderWidth: '0.1rem',
    color: theme.primaryColor,
    borderColor: theme.primaryColor,
  },
  active: {
    height: '4rem',
    width: '4rem',
    background:
      'linear-gradient(90deg, rgba(1,149,133,1) 0%, rgba(140,200,76,1) 100%)',
    color: 'white',
    borderStyle: 'unset',
  },
}))

interface props {
  icon: React.ReactNode
  handleClick: () => void
}

function InfoButton({ icon, handleClick }: props) {
  const { classes } = useStyles()
  const [active, setActive] = useState(false)

  return (
    <>
      <ActionIcon
        size="xl"
        radius="xl"
        variant="outline"
        className={active ? classes.active : classes.inactive}
        onClick={() => {
          setActive(true)
          handleClick()
        }}
      >
        {icon}
      </ActionIcon>
      {/* <Alert
            icon={<i className="ri-information-line ri-lg" />}
            color="orange.4"
            variant="filled"
            radius={20}
            className={classes.infoBox}
          >
            Finde die folgenden Bäume, um alle Facts zu entdecken.
          </Alert> */}
    </>
  )
}

export default InfoButton
