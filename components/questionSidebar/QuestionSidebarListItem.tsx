import Link from "next/link"

interface ListItemProps {
    text: string,
    href: string,
    index: number,
    newItem?: boolean,
}

export function QuestionSidebarListItem({ text, href, index, newItem }: ListItemProps) {
    return (
        <li className={newItem ? "border-b-2 border-b-gray-600" : "border-2 rounded-lg border-gray-600 break-all"}>
            <div className="p-1">
                <Link href={href} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span>{index + 1}</span><span className="ml-3">{text}</span>
                </Link>
            </div>
        </li>
    )
}