import useSWR from 'swr'
import fetcher from '../lib/fetcher'

export default function Footer() {

    const { data } = useSWR('/api/status', fetcher);

    return (
        <div className="mt-4 text-sm opacity-70">
            &copy; {new Date().getFullYear()} Sarthak Mohanty. All rights reserved. Currently {data?.status ? data?.status : 'not doing anything useful'}{data?.status.charAt(data?.status.length - 1) === '.' ? '' : '.'}
        </div>
    )
}