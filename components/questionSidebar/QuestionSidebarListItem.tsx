import Link from "next/link"

interface ListItemProps {
    text: string,
    id: string,
    index: number,
    route: string
    newItem?: boolean,
}

export function QuestionSidebarListItem({ text, id, index, route, newItem }: ListItemProps) {
    return (
        <li className={newItem ? "border-b-2 border-b-gray-600" : "border-2 rounded-lg border-gray-600"}>
            <div className="p-1">
                <Link href={`${route}/${id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span>{index + 1}</span><span className="ml-3">{text}</span>
                </Link>
            </div>
        </li>
    )
}