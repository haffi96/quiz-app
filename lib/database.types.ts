export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      answers: {
        Row: {
          correct_answer_choice: Database["public"]["Enums"]["answer_choices"]
          created_at: string
          id: number
          question_id: number
        }
        Insert: {
          correct_answer_choice: Database["public"]["Enums"]["answer_choices"]
          created_at?: string
          id?: number
          question_id: number
        }
        Update: {
          correct_answer_choice?: Database["public"]["Enums"]["answer_choices"]
          created_at?: string
          id?: number
          question_id?: number
        }
      }
      customers: {
        Row: {
          admin_role: boolean
          created_at: string | null
          id: number
          is_subscribed: boolean
          stripe_customer_id: string | null
          user_uuid: string | null
        }
        Insert: {
          admin_role?: boolean
          created_at?: string | null
          id?: number
          is_subscribed?: boolean
          stripe_customer_id?: string | null
          user_uuid?: string | null
        }
        Update: {
          admin_role?: boolean
          created_at?: string | null
          id?: number
          is_subscribed?: boolean
          stripe_customer_id?: string | null
          user_uuid?: string | null
        }
      }
      question_sets: {
        Row: {
          created_at: string | null
          id: number
          name: string
          subscribed_to_by: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          name: string
          subscribed_to_by?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          name?: string
          subscribed_to_by?: string | null
          updated_at?: string | null
        }
      }
      questions: {
        Row: {
          a1: string
          a2: string
          a3: string
          a4: string
          body: string
          created_at: string
          id: number
          question_set: number | null
          title: string
          updated_at: string
        }
        Insert: {
          a1: string
          a2: string
          a3: string
          a4: string
          body: string
          created_at?: string
          id?: number
          question_set?: number | null
          title: string
          updated_at?: string
        }
        Update: {
          a1?: string
          a2?: string
          a3?: string
          a4?: string
          body?: string
          created_at?: string
          id?: number
          question_set?: number | null
          title?: string
          updated_at?: string
        }
      }
      submission: {
        Row: {
          a1_count: number
          a2_count: number
          a3_count: number
          a4_count: number
          created_at: string
          id: number
          question_id: number | null
          updated_at: string
        }
        Insert: {
          a1_count?: number
          a2_count?: number
          a3_count?: number
          a4_count?: number
          created_at?: string
          id?: number
          question_id?: number | null
          updated_at?: string
        }
        Update: {
          a1_count?: number
          a2_count?: number
          a3_count?: number
          a4_count?: number
          created_at?: string
          id?: number
          question_id?: number | null
          updated_at?: string
        }
      }
      user_question_history: {
        Row: {
          created_at: string | null
          has_answered_correctly: boolean | null
          id: number
          question_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          has_answered_correctly?: boolean | null
          id?: number
          question_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          has_answered_correctly?: boolean | null
          id?: number
          question_id?: number | null
          user_id?: string | null
        }
      }
      users: {
        Row: {
          created_at: string | null
          id: string
          subscribed_to_question_sets: number[] | null
        }
        Insert: {
          created_at?: string | null
          id: string
          subscribed_to_question_sets?: number[] | null
        }
        Update: {
          created_at?: string | null
          id?: string
          subscribed_to_question_sets?: number[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      increment: {
        Args: {
          question_id_to_inc: number
          field_name: string
        }
        Returns: undefined
      }
    }
    Enums: {
      answer_choices: "a1" | "a2" | "a3" | "a4"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          created_at: string | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: string[]
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
