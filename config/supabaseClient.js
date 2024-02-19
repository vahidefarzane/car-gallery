import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tvleyqfprpfmegrcnshe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR2bGV5cWZwcnBmbWVncmNuc2hlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMzk5MjUsImV4cCI6MjAyMzkxNTkyNX0.cKtgoMJw4sv-naC_iC9XKbv2z959arWPXe_WJEpuH1g"
);
