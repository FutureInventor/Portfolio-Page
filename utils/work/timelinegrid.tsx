import Image from 'next/image'
import {
  nobleLogo,
  usLogo,
  waskoLogo
} from '../../assets'
import { getDate } from '../date'
import styles from './timelinegrid.module.scss'

export function VTimelineGrid() {
  return (
    <div className={styles.timelineGrid}>
      <div className={styles.timelineGridItemWide}>
        <h1>2016</h1>
        <div className={styles.timelinePoint}/>
      </div>
      <div className={styles.timelineGridItemCard}>
        <h2 className={styles.hoverTip}>
          Hover to zoom.
        </h2>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="University of Silesia logo."
                src={usLogo}
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Uniwersytet Śląski</h1>
              <h2 className={styles.cardContentDetails}>Katowice</h2>
              <h2 className={styles.cardContentDetails}>10.2015 - 03.2019</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Modules included:<br/>
            1st Year: Mathematical Analysis, Basic Course of C++ Programming Language.<br/>
            2nd Year: Operating Systems, Computer Networks.<br/>
            3rd Year: Advanced Course of C++ Programming Language, Using
            C# to Design Graphic Applications, The Basics of Building of Neural Network.<br/>
            4th Year: Computer Simulation Methods, Oracle Databases.<br/>
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <h1>03.2019 - 03.2020</h1>
        <h2>Working & learning Web Development in London</h2>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo}>
              <Image
                alt="Wasko company logo."
                src={waskoLogo}
                height={13}
                width={55}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Wasko</h1>
              <h2 className={styles.cardContentDetails}>Gliwice</h2>
              <h2 className={styles.cardContentDetails}>08.2020 - 10.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building on my own a responsive web application,
            which had a catalogue of all company's servers, displayed in the
            tree structure. Server's data was taken and parsed from XML file to JSON.
            Anyone logged could browse through lists of servers.
            Search and sort by name function were applied.
            App had system of accounts as well. Admins, technical and user ones.
            Admins could manage accounts by editing them, deleting and authorize
            (every new user had to be authorized by admin). Admins could also
            see what user is logged at the moment.<br/>
            <br/>
            Main responsibilities:<br/>
            - designing both frontend and backend side of the app,<br/>
            - creating an asynchronous communication between client and server via <b>REST API</b>,<br/>
            - setting up server with database.<br/>
            <br/>
            Languages: JavaScript, <b>React</b>, <b>PHP</b>.<br/>
            Database: <b>MySQL</b>.<br/>
            Styling: Ant Design UI, CSS.<br/>
            Version Control System: <b>GitHub.</b><br/>
            Issue trancing: Trello.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemCard}>
        <div className={styles.cardContent}>
          <div className={styles.cardContentHeader}>
            <div className={styles.companyLogo} style={{backgroundColor: "#0E2245"}}>
              <Image
                alt="Noble Systems company logo."
                src={nobleLogo}
                height={50}
                width={50}/>
            </div>
            <div className={styles.companyInfo}>
              <h1 className={styles.companyTitle}>Noble Systems</h1>
              <h2 className={styles.cardContentDetails}>Kraków</h2>
              <h2 className={styles.cardContentDetails}>10.2020 - 09.2020</h2>
            </div>
          </div>
          <p className={styles.cardContentDescription}>
            Building from scratch a complete WebRTC Phone web application, based on SIP.js library. Major functionalities:<br/>
            - making new, answering, and holding calls (conferences as well),<br/>
            - contacts list with functionality of adding, deleting, and editing contacts. Search and sort options applied as well,<br/>
            - history of calls with summarized data,<br/>
            - voicemail and DTMF sending,<br/>
            - account and phone input/output audio settings.<br/>
            <br/>
            My main responsibilities on the front-end side of the project:<br/>
            -working collaboratively in team environment, resolving conflicts,<br/>
            -writing a clean and high-quality codebase,<br/>
            -refactoring of codebase,<br/>
            -writing the documentation,<br/>
            -implementation of the functionalities from the documentation, given previously by PM,<br/>
            -creating responsive, accessible and efficient web views, based on previously given mockups,<br/>
            -reviewing pull requests of my less experienced peers, and helping them with styling/creating components,<br/>
            -writing efficient unit tests.<br/>
            <br/>
            Achievements I am most proud of:<br/>
            -building a 'light' version of main application that could be inserted into an iframe and creating an API via those two elements could communicate,<br/>
            -helping my peer with fixing up commit history on main branch in out project, after his mistaken merging,<br/>
            -creating documentation with code standards of codebase of our project,<br/>
            -implementing CSS modules into our main project, which improved team workflow noticeably,<br/>
            -constructing complete translation system which let the user to change language of application
            (if not chosen, language was detected automatically).
            <br/>
            Agile management: <b>Scrum, Agile</b>.<br/>
            Version control system: <b>Azure DevOps, Bitbucket</b>.<br/>
            Issue tracking tool: <b>Jira, Trelllo</b>.<br/>
            Knowledge repository: <b>Confluence</b>.<br/>
            Styling: <b>SCSS, LESS, Semantic UI</b>.<br/>
            Testing: <b>React Testing Library, JEST</b>.<br/>
            Communication tool: <b>Microsoft Teams, Zoom</b>.
          </p>
        </div>
      </div>
      <div className={styles.timelineGridItemAdjoiningCard}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItem}/>
      <div className={styles.timelineGridItemWide}>
        <div className={styles.timelinePoint}/>
        <h1>{getDate()}</h1>
      </div>
    </div>
  )
}