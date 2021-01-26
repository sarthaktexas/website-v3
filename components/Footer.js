import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export default function Footer() {

    const status = useSWR('/api/status', fetcher).data
    const song = useSWR('/api/now-playing', fetcher).data

    return (
        <div className="mt-4 text-sm opacity-70">
            &copy; {new Date().getFullYear()} Sarthak Mohanty. All rights reserved.{' '}
            <br />
            Currently {status?.status ? status?.status : 'not doing anything useful'}{status?.status.charAt(status?.status.length - 1) === '.' ? '' : '.'}{' '}
            Listening to <div className={`${song?.title ? 'font-bold inline' : ''}`}>{song?.title || 'nothing at the moment.'}</div>{song?.artist ? ` by ${song?.artist}.` : ''}
        </div>
    )
}