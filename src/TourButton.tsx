import { ActionIcon, createStyles } from '@mantine/core'

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
  allSolved: {
    height: '4rem',
    width: '4rem',
    background:
      'linear-gradient(90deg,rgba(241, 182, 29, 1) 0%, rgba(241, 182, 29, 0.5) 100%)',
    color: 'white',
    borderStyle: 'unset',
  },
}))

interface props {
  icon: React.ReactNode
  handleClick: () => void
  solved: boolean
  allSolved: boolean
}

function TourButton({ icon, handleClick, solved, allSolved }: props) {
  const { classes } = useStyles()

  return (
    <>
      <ActionIcon
        size="xl"
        radius="xl"
        variant="outline"
        className={
          allSolved
            ? classes.allSolved
            : solved
            ? classes.active
            : classes.inactive
        }
        onClick={handleClick}
      >
        {icon}
      </ActionIcon>
    </>
  )
}

export default TourButton
