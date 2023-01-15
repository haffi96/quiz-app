/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Answers = "answers",
	Questions = "questions",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: { [key: string]: any }
}

export type AuthSystemFields = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields

// Record types for each collection

export type AnswersRecord = {
	choice: string
	question_id: RecordIdString
}

export type QuestionsRecord<Tchoices = unknown> = {
	title?: string
	body?: string
	choices?: null | Tchoices
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type AnswersResponse = AnswersRecord & BaseSystemFields
export type QuestionsResponse<Tchoices = unknown> = QuestionsRecord<Tchoices> & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	answers: AnswersRecord
	questions: QuestionsRecord
	users: UsersRecord
}