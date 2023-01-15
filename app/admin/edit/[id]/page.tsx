"use client"

import { getQuestion } from "../../../../helpers/databaseHelper"
import { use, useState } from "react"

interface EditIdParams {
    params: { id: string }
}

export default function Page({ params }: EditIdParams) {
    const { id } = params
    const question = use(getQuestion(id))
    console.log({ question })

    const [title, setTitle] = useState(question.title)

    return (
        <div>
            <form className="m-auto text-center flex flex-col w-3/5" action="/send-data-here" method="post">
                <label htmlFor="first">First name:</label>
                <input type="text" id="first" name="first" />
                <label htmlFor="last">Last name:</label>
                <input type="text" id="last" name="last" />
                <button type="submit">Submit</button>
            </form>
        </div >
    )
}