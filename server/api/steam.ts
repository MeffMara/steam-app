import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://gqkuommdmfzmwkzdewma.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdxa3VvbW1kbWZ6bXdremRld21hIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkyNjQyNTIsImV4cCI6MTk2NDg0MDI1Mn0.iF651HDhqynAQRlG8T6wFS3ZEx4dqxHiEiguc0m7-zI",
  {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJiYWRmODIxNzQ2YmJiYzQzMWIzMzc3NjkiLCJpYXQiOjE2NTA1MzIwMTV9.zkvVTxDrlto2YVI4X3OPqNRtUDYHN_OAroVg6szEIPo",
    },
  }
);

// let steam = [];
let data, error, count;
let currentVisiblePage = 4;

const getAllGames = async () => {
  return ({ data, count, error } = await supabase.from("steam").select("*"));
  // .order("id")
  // .limit(10));
  // .range(0, currentVisiblePage));
};

export default getAllGames;
