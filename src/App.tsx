import {
  AppShell,
  Button,
  Center,
  createStyles,
  Header,
  Stack,
  Text,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.primaryColor,
  },
  center: {
    height: '100%',
  },
}))

function App() {
  const { classes } = useStyles()

  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs" className={classes.header}>
          {/* Header content */}
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Center className={classes.center}>
        <Stack align="center">
          <Text size="xl" weight="bolder" align="center">
            Du hast den Eintrag gefunden!
          </Text>
          <Text size="lg" align="center">
            All kinds of happy little splashes. Put light against light - you
            have nothing. Put dark against dark - you have nothing. It's the
            contrast of light and dark that each give the other one meaning.
          </Text>
          <Button>Route Starten</Button>
        </Stack>
      </Center>
    </AppShell>
  )
}

export default App
