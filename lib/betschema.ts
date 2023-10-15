export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      bets: {
        Row: {
          id: number;
          win: boolean | null;
          team: string | null;
          opp: string | null;
          bet_type: string | null;
          odds: number;
          units: number| null;
          created_at: string;
          user_id: string;
        };
        Insert: {
          id?: number;
          win?: boolean | null;
          team?: string | null;
          opp?: string | null;
          bet_type?: string | null;
          odds?: number;
          units?: number| null;
          created_at?: string;
          user_id?: string;
        };
        Update: {
          id?: number;
          win?: boolean | null;
          team?: string | null;
          opp?: string | null;
          bet_type?: string | null;
          odds?: number | null;
          units?: number| null;
          created_at?: string;
          user_id?: string;
        };
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
