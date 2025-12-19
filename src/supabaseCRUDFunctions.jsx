import { supabase } from "./supabaseClients";

export const getAllRecords = async () => {
    const { data: records, error } = await supabase
        .from("study-record")
        .select("*");
    if (error) {
        console.error("Error fetching todos:", error);
    }

    return records;
}