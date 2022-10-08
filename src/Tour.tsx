import {
  Button,
  createStyles,
  Group,
  Image,
  Modal,
  Stack,
  Text,
} from '@mantine/core'
import { motion } from 'framer-motion'
import { useState } from 'react'
import haenge from './assets/haenge.jpg'
import pappel from './assets/pappel.jpg'
import InfoButton from './InfoButton'
import TourButton from './TourButton'
import { TourButtons, type TourButton as TourButtonType } from './TourButtons'

const startingTrees = {
  first: {
    hints: {
      first: { id: 0, treeId: 0, solved: false },
      second: { id: 1, treeId: 0, solved: false },
      third: { id: 2, treeId: 0, solved: false },
    },
  } as Tree,
  second: {
    hints: {
      first: { id: 0, treeId: 1, solved: false },
      second: { id: 1, treeId: 1, solved: false },
      third: { id: 2, treeId: 1, solved: false },
    },
  } as Tree,
}

const useStyles = createStyles((theme) => ({
  button: {
    borderStyle: 'dashed',
    height: '4rem',
    width: '4rem',
    borderWidth: '0.1rem',
    color: theme.primaryColor,
    borderColor: theme.primaryColor,
  },
  infoBox: {
    marginTop: '1.5rem',
  },
  lightBlueBg: {
    blackgroundColor: theme.colors.teal,
  },
}))

interface Tree {
  hints: Hints
}

interface Hints {
  first: Hint
  second: Hint
  third: Hint
}
interface Hint {
  id: number
  treeId: number
  solved: boolean
}

function Tour() {
  const { classes } = useStyles()
  const [active, setActive] = useState<TourButtonType | undefined>()
  const [activeValidate, setActiveValidate] = useState<Hint | undefined>()
  const [activeDoubleCheck, setActiveDoubleCheck] = useState<Hint | undefined>()
  const [started, setStarted] = useState(false)
  const [trees, setTrees] = useState(startingTrees)

  return (
    <>
      <Stack spacing="xl">
        <Stack align="center" spacing={'xl'} className={classes.lightBlueBg}>
          <Text size="xl" weight="bolder" align="center">
            {!started
              ? 'Du befindest dich am richtigen Ort für deinen ersten Fun Fact!'
              : 'Wie funktioniert das noch einmal?'}
          </Text>

          <InfoButton
            icon={<i className="ri-question-line ri-2x" />}
            handleClick={() => {
              setActive(TourButtons.intro)
            }}
          />
        </Stack>
        {/* first  */}
        {started && (
          <>
            <Stack align="center" spacing={'xl'}>
              <p>
                <Text size="xl" weight="bolder" align="center">
                  Pyramiden Pappel
                </Text>
                <Text size="lg" weight="lighter" align="center">
                  Italien
                </Text>
              </p>

              <Button
                color="primary"
                radius="lg"
                variant={
                  (trees.first.hints.first.solved &&
                    trees.first.hints.second.solved &&
                    trees.first.hints.third.solved) === true
                    ? 'outline'
                    : 'filled'
                }
                onClick={() => {
                  setActive(TourButtons.pappel)
                }}
              >
                HINWEIS
              </Button>

              <Group spacing="xl">
                <TourButton
                  icon={<i className="ri-restaurant-line ri-2x" />}
                  handleClick={() =>
                    trees.first.hints.first.solved
                      ? setActive(TourButtons.pappelInfos[0])
                      : setActiveValidate(trees.first.hints.first)
                  }
                  solved={trees.first.hints.first.solved}
                  allSolved={
                    trees.first.hints.first.solved &&
                    trees.first.hints.second.solved &&
                    trees.first.hints.third.solved
                  }
                />
                <TourButton
                  icon={<i className="ri-footprint-line ri-2x" />}
                  handleClick={() =>
                    trees.first.hints.second.solved
                      ? setActive(TourButtons.pappelInfos[1])
                      : setActiveValidate(trees.first.hints.second)
                  }
                  solved={trees.first.hints.second.solved}
                  allSolved={
                    trees.first.hints.first.solved &&
                    trees.first.hints.second.solved &&
                    trees.first.hints.third.solved
                  }
                />
                <TourButton
                  icon={<i className="ri-earth-line ri-2x" />}
                  handleClick={() =>
                    trees.first.hints.third.solved
                      ? setActive(TourButtons.pappelInfos[2])
                      : setActiveValidate(trees.first.hints.third)
                  }
                  solved={trees.first.hints.third.solved}
                  allSolved={
                    trees.first.hints.first.solved &&
                    trees.first.hints.second.solved &&
                    trees.first.hints.third.solved
                  }
                />
              </Group>

              {trees.first.hints.first.solved &&
                trees.first.hints.second.solved &&
                trees.first.hints.third.solved && (
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      repeatType: 'reverse',
                    }}
                  >
                    <Button
                      uppercase
                      radius={'lg'}
                      onClick={() =>
                        alert(
                          'Soweit sind wir leider nicht gekommen. Falls du Vorschläge hast, melde dich gerne bei uns :)'
                        )
                      }
                      style={{
                        background:
                          'linear-gradient(200deg, rgba(1,149,133,1) 0%, rgba(140,200,76,1) 100%)',
                      }}
                    >
                      Belohnung Abholen
                    </Button>
                  </motion.div>
                )}
            </Stack>

            <Stack align="center" spacing={'xl'}>
              <p>
                <Text size="xl" weight="bolder" align="center">
                  Hänge-Silber-Linde
                </Text>
                <Text size="lg" weight="lighter" align="center">
                  Bosnien und Herzegowina
                </Text>
              </p>

              <Button
                color="primary"
                radius="lg"
                variant={
                  (trees.second.hints.first.solved &&
                    trees.second.hints.second.solved &&
                    trees.second.hints.third.solved) === true
                    ? 'outline'
                    : 'filled'
                }
                onClick={() => {
                  setActive(TourButtons.haenge)
                }}
              >
                HINWEIS
              </Button>

              <Group spacing="xl">
                <TourButton
                  icon={<i className="ri-restaurant-line ri-2x" />}
                  handleClick={() =>
                    trees.second.hints.first.solved
                      ? setActive(TourButtons.haengeInfos[0])
                      : setActiveValidate(trees.second.hints.first)
                  }
                  solved={trees.second.hints.first.solved}
                  allSolved={
                    trees.second.hints.first.solved &&
                    trees.second.hints.second.solved &&
                    trees.second.hints.third.solved
                  }
                />
                <TourButton
                  icon={<i className="ri-footprint-line ri-2x" />}
                  handleClick={() =>
                    trees.second.hints.second.solved
                      ? setActive(TourButtons.haengeInfos[1])
                      : setActiveValidate(trees.second.hints.second)
                  }
                  solved={trees.second.hints.second.solved}
                  allSolved={
                    trees.second.hints.first.solved &&
                    trees.second.hints.second.solved &&
                    trees.second.hints.third.solved
                  }
                />
                <TourButton
                  icon={<i className="ri-earth-line ri-2x" />}
                  handleClick={() =>
                    trees.second.hints.third.solved
                      ? setActive(TourButtons.haengeInfos[2])
                      : setActiveValidate(trees.second.hints.third)
                  }
                  solved={trees.second.hints.third.solved}
                  allSolved={
                    trees.second.hints.first.solved &&
                    trees.second.hints.second.solved &&
                    trees.second.hints.third.solved
                  }
                />
              </Group>

              {trees.second.hints.first.solved &&
                trees.second.hints.second.solved &&
                trees.second.hints.third.solved && (
                  <motion.div
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.5,
                      repeatType: 'reverse',
                    }}
                  >
                    <Button
                      uppercase
                      radius={'lg'}
                      onClick={() =>
                        alert(
                          'Soweit sind wir leider nicht gekommen. Falls du Vorschläge hast, melde dich gerne bei uns :)'
                        )
                      }
                      style={{
                        background:
                          'linear-gradient(200deg, rgba(1,149,133,1) 0%, rgba(140,200,76,1) 100%)',
                      }}
                    >
                      Belohnung Abholen
                    </Button>
                  </motion.div>
                )}
            </Stack>
          </>
        )}
      </Stack>
      <Modal
        opened={
          active !== undefined &&
          active !== TourButtons.haenge &&
          active !== TourButtons.pappel
        }
        closeOnClickOutside
        withCloseButton={false}
        onClose={() => {
          setActive(undefined)
          if (!started) setStarted(true)
        }}
        centered
        title={active?.badge}
        styles={{
          modal: {
            background:
              'linear-gradient(200deg, rgba(1,149,133,1) 0%, rgba(140,200,76,1) 100%)',
            color: 'white',
          },
        }}
      >
        {active?.content}
        {
          <Button
            onClick={() => {
              setActive(undefined)
              if (!started) setStarted(true)
            }}
            variant="outline"
            sx={{ color: 'white', borderColor: 'white' }}
            uppercase
          >
            Alles klar!
          </Button>
        }
      </Modal>
      <Modal
        opened={
          active !== undefined &&
          (active === TourButtons.haenge || active === TourButtons.pappel)
        }
        closeOnClickOutside
        withCloseButton={false}
        onClose={() => {
          setActive(undefined)
          if (!started) setStarted(true)
        }}
        centered
        title={active?.badge}
        styles={{}}
      >
        {active?.content}
        {
          <Button
            onClick={() => {
              setActive(undefined)
              if (!started) setStarted(true)
            }}
            uppercase
          >
            Alles klar!
          </Button>
        }
      </Modal>
      <Modal
        opened={activeValidate !== undefined}
        closeOnClickOutside
        withCloseButton={false}
        onClose={() => {
          setActiveValidate(undefined)
        }}
        centered
        title={
          <Text size="xl" weight="bolder">
            Finde den Baum
          </Text>
        }
        styles={(theme) => ({
          modal: {
            backgroundColor: theme.colors.orange[4],
            borderRadius: '2rem',
            color: 'white',
          },
        })}
      >
        <p>
          <Text>
            Du musst dich näher an den Baum begeben, um diesen Fakt
            freizuschalten. Du kannst dir einen Hinweis anzeigen lassen, um den
            Baum zu finden.
          </Text>
        </p>
        <Stack>
          <Button
            onClick={() => setActiveValidate(undefined)}
            sx={(theme) => ({
              backgroundColor: 'white',
              color: theme.colors.orange[4],
            })}
            radius="lg"
            uppercase
          >
            Ok, ich suche weiter.
          </Button>
          <Button
            onClick={() => {
              setActiveDoubleCheck(activeValidate)
              setActiveValidate(undefined)
            }}
            variant="outline"
            sx={{ color: 'white', borderColor: 'white' }}
            radius="lg"
            uppercase
          >
            Ich stehe aber richtig!
          </Button>
        </Stack>
      </Modal>

      <Modal
        opened={activeDoubleCheck !== undefined}
        closeOnClickOutside
        withCloseButton={false}
        onClose={() => {
          setActiveDoubleCheck(undefined)
        }}
        centered
        title={
          <Text size="xl" weight="bolder">
            Ist es dieser Baum?
          </Text>
        }
        styles={(theme) => ({
          modal: {
            backgroundColor: theme.colors.orange[4],
            borderRadius: '2rem',
            color: 'white',
          },
        })}
      >
        <Image src={activeDoubleCheck?.treeId === 0 ? pappel : haenge} />
        <p>
          <Text>
            Manche Bäume haben wir nicht in unserer Karte verzeichnet. Manchmal
            verpassen wir auch, wenn ein Baum verschwindet. Wenn du dir nicht
            sicher bist, benütz gerne den Hinweis Button!
          </Text>
        </p>
        <Stack>
          <Button
            onClick={() => {
              const curr = { ...trees }

              const currTree =
                activeDoubleCheck?.treeId === 0 ? curr.first : curr.second

              const currHint =
                activeDoubleCheck?.id === 0
                  ? currTree.hints.first
                  : activeDoubleCheck?.id === 1
                  ? currTree.hints.second
                  : currTree.hints.third

              currHint.solved = true

              setTrees(curr)
              setActiveDoubleCheck(undefined)
            }}
            sx={(theme) => ({
              backgroundColor: 'white',
              color: theme.colors.orange[4],
            })}
            radius="lg"
            uppercase
          >
            Ich bin mir absolut sicher!
          </Button>
          <Button
            onClick={() => setActiveDoubleCheck(undefined)}
            variant="outline"
            sx={{ color: 'white', borderColor: 'white' }}
            radius="lg"
            uppercase
          >
            Ich möchte weitersuchen
          </Button>
        </Stack>
      </Modal>
    </>
  )
}

export default Tour
