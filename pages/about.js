import Layout from '../components/Layout'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'

export default function About() {
    return (
        <Layout heading="about">
            <div className="flex flex-row md:flex-row space-x-5">
                <img className="w-20 h-20 rounded-full" src="/sarthak.jpg" />
                <div>
                    <h2 className="font-bold text-2xl md:text-4xl">Sarthak Mohanty</h2>
                    <h3 className="opacity-70 text-lg">Human in training.</h3>
                </div>
            </div>
            <p className="p">Sarthak is a high school senior from the Texas Hill Country. He attends <b>Brandeis High School</b> and loves hanging with his friends. He's passionate about education equality among other things. Sarthak also likes to go adventuring in the woods on a daily basis, often getting him very sick the next day because he has a severe mold and mountain cedar allergy. Sarthak also loves biking around his area.</p>
            <p className="p">Currently, he is organizing tech events all around the South Texas area. He works at <a className="a" href="https://mintere.com" target="_blank">Mintere</a> right now as a web developer. He's also hosting <a>A Trivia Show</a> on <a className="a" href="https://joinclubhouse.com" target="_blank">Clubhouse</a> right now.</p>
        </Layout>
    )
}