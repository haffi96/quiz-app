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

export enum AnswersCorrectAnswerChoiceOptions {
	"a1" = "a1",
	"a2" = "a2",
	"a3" = "a3",
	"a4" = "a4",
}
export type AnswersRecord = {
	question_id: RecordIdString
	correctAnswerChoice: AnswersCorrectAnswerChoiceOptions
}

export type QuestionsRecord = {
	title: string
	body: string
	a1: string
	a2: string
	a3: string
	a4: string
}

export enum UsersPermissionsOptions {
	"user" = "user",
	"admin" = "admin",
}
export type UsersRecord = {
	name: string
	avatar?: string
	permissions: UsersPermissionsOptions
}

// Response types include system fields and match responses from the PocketBase API
export type AnswersResponse = AnswersRecord & BaseSystemFields
export type QuestionsResponse = QuestionsRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	answers: AnswersRecord
	questions: QuestionsRecord
	users: UsersRecord
}