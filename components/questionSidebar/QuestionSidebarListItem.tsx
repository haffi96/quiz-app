import Link from "next/link"

interface ListItemProps {
    text: string,
    href: string,
    index: number,
    newItem?: boolean,
}

export function QuestionSidebarListItem({ text, href, index, newItem }: ListItemProps) {
    return (
        <li className={newItem ? "rounded-lg border-2 border-blue-600" : "break-all rounded-lg border-2 border-gray-600"}>
            <div className="p-1">
                <Link href={href} className="flex items-center rounded-lg p-2 font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                    <span className="whitespace-nowrap">{index + 1}</span><span className="ml-3">{text}</span>
                </Link>
            </div>
        </li>
    )
}