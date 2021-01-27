import Link from 'next/link'

export default function Nav() {

    const links = [
        { href: '/', label: 'home' },
        { href: '/manifesto', label: 'manifesto' },
        //{ href: 'https://medium.com/@sarthaktexas', label: 'writing' },
        //{ href: '/', label: 'reading' },
        //{ href: 'https://twitter.com/sarthaktexas', label: 'thoughts'}
    ]

    return (
        <nav>
            <ul className="flex flex-wrap space-x-5 mt-6 sm:mt-0">
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