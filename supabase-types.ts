export enum Tables {
	Answers = "answers",
	Questions = "questions",
	Users = "users",
	QuestionsSet = "questions_set"
}

export enum AnswersCorrectAnswerChoiceOptions {
	"a1" = "a1",
	"a2" = "a2",
	"a3" = "a3",
	"a4" = "a4",
}

export type UpdateAnswersRecord = {
	id?: number
	question_id?: number
	correct_answer_choice?: AnswersCorrectAnswerChoiceOptions
	created_at?: string
}

export type AnswersRecord = {
	id: number
	question_id: number
	correct_answer_choice: AnswersCorrectAnswerChoiceOptions
}

export type CreateAnswersRecord = {
	question_id: number
	correct_answer_choice: AnswersCorrectAnswerChoiceOptions
}

export type QuestionsRecord = {
	id: number
	title: string
	body: string
	a1: string
	a2: string
	a3: string
	a4: string
}

export type CreateQuestionRecord = {
	title: string
	body: string
	a1: string
	a2: string
	a3: string
	a4: string
}

export enum UsersPermissionsOptions {
	"user",
	"admin",
}
export type UsersRecord = {
	name: string
	avatar?: string
	permissions: UsersPermissionsOptions
}