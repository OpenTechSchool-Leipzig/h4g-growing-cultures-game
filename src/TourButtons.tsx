import { Image, Text } from '@mantine/core'
import haenge from './assets/haenge-leaf.jpg'
import pappel from './assets/pappel-leaf.jpg'
export interface TourButton {
  badge: React.ReactNode
  content: React.ReactNode
}

export const TourButtons = {
  intro: {
    active: false,
    badge: (
      <Text size="xl" weight="bolder">
        Wie es funktioniert:
      </Text>
    ),
    content: (
      <Text>
        <p>
          Ganz einfach! Finde die unten aufgelisteten Bäume in Johanna Park!
        </p>
        <p>
          Wenn du meinst, einen gefunden zu haben drücke einfach auf einen der
          Knöpfe und finde raus, ob du richtig liegst!
        </p>
        <p>
          Falls du alle Bäume einer Art finden kannst, gibt es einen kleinen
          Preis für dich 😊
        </p>
      </Text>
    ),
  } as TourButton,
  pappel: {
    active: false,
    badge: (
      <Text size="xl" weight="bolder">
        Die Pyramiden Pappel
      </Text>
    ),
    content: (
      <>
        <Text>
          <p>Die Blätter sehen so aus:</p>
        </Text>
        <Image src={pappel} sx={{ paddingBottom: '2rem' }} />
      </>
    ),
  } as TourButton,

  pappelInfos: [
    {
      active: false,
      badge: (
        <Text size="xl" weight="bolder">
          Hallo Pyramidi, schön dich kennenzulernen!
        </Text>
      ),
      content: (
        <>
          <Text>
            <p>
              Eigentlich heißt die Pyramiden-Pappel : "Populus nigra 'Italica'"
              und kommt aus Italien.
            </p>
          </Text>
        </>
      ),
    } as TourButton,
    {
      active: false,
      badge: (
        <Text size="xl" weight="bolder">
          Was wächst bei dir so?
        </Text>
      ),
      content: (
        <>
          <Text>
            <p>
              Die Pyramiden Pappel hat leicht ledrige, dungelgrüne glänzende,
              gelappte Blätter
            </p>
            <p> Im Herbst werden sie gelb bis rot.</p>
          </Text>
          <Image src={pappel} sx={{ paddingBottom: '2rem' }} />
        </>
      ),
    } as TourButton,
    {
      active: false,
      badge: (
        <Text size="xl" weight="bolder">
          Und wie kommst du so nach Leipzig?
        </Text>
      ),
      content: (
        <>
          <p>
            Es leben in Leipzig ca. 1.900 Menschen mit italienischem
            Migrationshintergrund.
          </p>
          <p>
            Bologna ist Leipzigs zweitälteste Partnerstadt. Die Verbindungen
            reichen zurück ins Jahr 1962, in welchem die offizielle
            Partnerschaftsurkunde unterzeichnet wurde.
          </p>

          <p> Außerdem gibt es in Leipzig sogar zwei italienische Vereine!</p>
          <ul>
            <li>
              <a href="https://www.leipzig-italien.de">
                Deutsch-Italienische Gesellschaft Leipzig e. V.
              </a>
            </li>
            <li>
              <a href="www.italiani-a-lipsia.de">Italiani a Lipsia e. V.</a>
            </li>
          </ul>
        </>
      ),
    } as TourButton,
  ],

  haenge: {
    active: false,
    badge: (
      <Text size="xl" weight="bolder">
        Die Hängende Silber-Linde
      </Text>
    ),
    content: (
      <>
        <Text>
          <p>Die Blätter sehen so aus:</p>
        </Text>
        <Image src={haenge} sx={{ paddingBottom: '2rem' }} />
      </>
    ),
  } as TourButton,

  haengeInfos: [
    {
      active: false,
      badge: (
        <Text size="xl" weight="bolder">
          Hallo Silbi, schön dich kennenzulernen!
        </Text>
      ),
      content: (
        <>
          <Text>
            <p>Der lateinische Name ist "Tilia tomentosa 'Petiolaris'."</p>
          </Text>
        </>
      ),
    } as TourButton,
    {
      active: false,
      badge: (
        <Text size="xl" weight="bolder">
          Früchte und Blütezeit
        </Text>
      ),
      content: (
        <>
          <Text>
            <p>
              Die Hängende Silber-Linde blüht erst nach dem Laubaustrieb, also
              zwischen April und Mai und hat doldenförmige, gelbgrüne Blüten.
            </p>
          </Text>
        </>
      ),
    } as TourButton,
    {
      active: false,
      badge: (
        <Text size="xl" weight="bolder">
          Und wie kommst du nach Leipzig?
        </Text>
      ),
      content: (
        <>
          <p>
            Es leben in Leipzig ca. 300 Menschen mit bosnischem
            Migrationshintergrund.
          </p>
          <p>
            Travnik ist die kleinste Partnerstadt Leipzigs mit nur knapp 55.000
            Einwohnern.
          </p>
          <ul>
            <li>
              <a href="https://www.leipzig-travnik.org/">
                Städtepartnerschaft Leipzig-Travnik e.V.
              </a>
            </li>
            \n
          </ul>
          \n",
        </>
      ),
    } as TourButton,
  ],
}
