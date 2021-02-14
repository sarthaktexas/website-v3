import Link from 'next/link'

export default function Nav() {

    const links = [
        { href: '/', label: 'home' },
        { href: '/about', label: 'about' },
        { href: '/manifesto', label: 'manifesto' },
        { href: 'https://www.notion.so/sarthakmohanty/Annual-Review-2020-d8e25a934aa2441fae8cc79a9a1bdbc8', label: 'annual review' },
        //{ href: 'https://medium.com/@sarthaktexas', label: 'writing' },
        //{ href: 'https://twitter.com/sarthaktexas', label: 'thoughts'}
    ]

    return (
        <nav>
            <ul className="flex flex-col sm:flex-row sm:space-x-5 mt-6 sm:mt-0">
                {links.map(({ href, label }) => (
                    <li key={`${href}${label}`} className="list-none pointer-events-auto p-0 m-0">
                        <Link href={href}>
                            <a className="underline">
                                {label}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}