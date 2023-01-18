import Link from "next/link";
import {LaunchIcon} from '@sanity/icons'

export default function StudioNavbar(props: any) {
    return (
        <div>
            <div className="dark:bg-[#1a1a1a] dark:text-[#ACACAC] text-black flex items-center justify-between p-5">
                <Link href={'/'} className="flex items-center">
                    <LaunchIcon className="dark:bg-[#1a1a1a] dark:text-[#ACACAC] text-black h-6 w-6 mr-2" />
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}