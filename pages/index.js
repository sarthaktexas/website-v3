import Head from '../components/Head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Newsletter from '../components/Newsletter'

export default function Home() {
  return (
    <div className="text-white font-sans pointer-events-none">
      <Head />
      <main className="my-10 md:mt-20 md:mb-10 px-10 md:px-0 md:w-1/2 mx-auto">
        <section className="flex flex-col space-y-5">
          <h1 className="font-bold text-5xl">Sarthak Mohanty</h1>
          <Nav />
          <p className="p">I'm a full stack developer and designer focusing on creating interactive web experiences and creating beautiful things.</p>
          <p className="p">I currently live and attend school down in the heart of the Texas hill country with my playful (and more responsible) friends. I'm glad to have them and I couldn't have reached where I am without them. In particular, thank you Christina, for keeping me sane when I'm insane; Lillian, for staying by my side since the beginning of time; Jacob, for letting me embrace my crazy side; and Claire, for encouraging me to learn new things and inspiring me to just try.</p>
          <p className="p">I occasionally work on projects for select clients. To work with me or learn more, contact me at my social media linked below or at <a className="pointer-events-auto" href="mailto:sarthak@sarthakmohanty.me" target="_blank">sarthak@sarthakmohanty.me</a>. Thanks for being here.</p>
          <details className="pointer-events-auto pb-10">
            <summary className="opacity-70">CV</summary>
            <h1 className="cv-heading">
              Experience
            </h1>
            <li>Camp Assistant at Youth Code Jam, June 2021 - present</li>
            <li>Engineering Intern at Fiveable, July 2021 - present</li>
            <li>Open Source Lead at Fiveable, March 2021 - July 2021</li>
            <li>Co-organizer at AngelHacks, January 2021 - present</li>
            <li>Web developer and design at Mintere, LLC, December 2020 - August 2021</li>
            <li>Lead Organizer at Alamo City Hacks, October 2020 - present</li>
            <li>Rising senior at Brandeis High School, August 2019 - June 2022.</li>
            <li>Social Media at Fiveable, May 2019 - August 2019</li>
            <li>Student Volunteer at Youth Code Jam, May 2018 - present</li>
            <h1 className="cv-heading">
              Notable Projects
            </h1>
            <li>Zoom Dashboard [Archived]</li>
            <li>Resource Bank [Disabled]</li>
            <li>Supergiant (the UI library I use)</li>
            <li>Link Shortener</li>
            <li><a href="https://hackfoundation-org.hackclub.dev" className="underline">Hack Foundation</a></li>
            <li><a href="https://bookworm.design" className="underline">Claire Wang's Website</a></li>
            <li><a href="https://www.figma.com/community/file/973833413205118397" className="underline">HaaS - Hack as a Service</a></li>
            <li><a href="https://alamocityhacks.com" className="underline">Hyper by Alamo City Hacks</a></li>
            <li><a href="https://angelhacks.org" className="underline">AngelHacks 2.0</a></li>
            <li>Hack Club Vote</li>
            <li><a href="https://open.fiveable.me" className="underline">Fiveable Open Source Initiative</a></li>
            <h1 className="cv-heading">
              Press
            </h1>
            <li><a href="https://www.expressnews.com/news/education/article/San-Antonio-charter-school-team-is-National-13732518.php">San Antonio charter school team is National Science Bowl bound</a></li>
            <h1 className="cv-heading">
              Links
            </h1>
            <li><a href="https://github.com/sarthaktexas" target="_blank">GitHub</a>, <a href="https://dribbble.com/sarthakmohanty">Dribbble</a>, <a href="https://figma.com/@srtk">Figma</a></li>
            <li><a href="https://linkedin.com/in/sarthaktexas" target="_blank">LinkedIn</a>, <a href="https://medium.com/@sarthaktexas" target="_blank">Medium</a>, <a href="https://twitter.com/sarthaktexas" target="_blank">Twitter</a>, <a href="https://instagram.com/sarthakmohan.ty" target="_blank">Instagram</a></li>
            <li><a href="https://are.na/sarthak-mohanty" target="_blank">are.na</a>, <a href="https://futureland.tv/srtk">Futureland</a>, <a href="https://strava.com/athletes/sarthaktexas">Strava</a></li>
            <li>Email me at <a href="mailto:sarthak@sarthakmohanty.me" target="_blank">sarthak@sarthakmohanty.me</a></li>
            <h1 className="cv-heading">
              Previous
            </h1>
            <li><a href="https://v1.sarthakmohanty.me" target="_blank">v1</a></li>
            <li><a href="https://v2.sarthakmohanty.me" target="_blank">v2</a></li>
            <li><a href="/">v3</a></li>
          </details>
        </section>
        <Newsletter />
        <Footer />
      </main>
    </div>
  )
}
