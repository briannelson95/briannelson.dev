import Link from "next/link";
import {LaunchIcon} from '@sanity/icons'

export default function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <Link href={'/'} className="flex items-center">
                    <LaunchIcon className="h-6 w-6 mr-2" />
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}