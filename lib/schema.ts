export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bets: {
        Row: {
          bet_type: string | null;
          created_at: string | null;
          id: number;
          is_win: boolean | null;
          odds: string | null;
          opp: string | null;
          team: string | null;
          units: number | null;
          user_id: string | null;
        };
        Insert: {
          bet_type?: string | null;
          created_at?: string | null;
          id?: number;
          is_win?: boolean | null;
          odds?: string | null;
          opp?: string | null;
          team?: string | null;
          units?: number | null;
          user_id?: string | null;
        };
        Update: {
          bet_type?: string | null;
          created_at?: string | null;
          id?: number;
          is_win?: boolean | null;
          odds?: string | null;
          opp?: string | null;
          team?: string | null;
          units?: number | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatarurl: string | null;
          bio: string | null;
          id: string;
          joinedat: string;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatarurl?: string | null;
          bio?: string | null;
          id: string;
          joinedat?: string;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatarurl?: string | null;
          bio?: string | null;
          id?: string;
          joinedat?: string;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          }
        ];
      };
      todos: {
        Row: {
          id: string;
          inserted_at: string;
          is_complete: boolean | null;
          task: string | null;
          user_id: string | null;
        };
        Insert: {
          id?: string;
          inserted_at?: string;
          is_complete?: boolean | null;
          task?: string | null;
          user_id?: string | null;
        };
        Update: {
          id?: string;
          inserted_at?: string;
          is_complete?: boolean | null;
          task?: string | null;
          user_id?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

//https://yeyfbdurfrehqqahwhcs.supabase.co
