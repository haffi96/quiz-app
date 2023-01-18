import Link from "next/link"

interface ListItemProps {
    text: string,
    id: string,
    index: number,
    route: string
}

export function QuestionSidebarListItem({ text, id, index, route }: ListItemProps) {
    return (
        <li>
            <Link href={`${route}/${id}`} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <span>{index + 1}</span><span className="ml-3">{text}</span>
            </Link>
        </li>
    )
}