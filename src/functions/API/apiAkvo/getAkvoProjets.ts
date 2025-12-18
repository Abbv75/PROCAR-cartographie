// apiAkvo/projet.ts
import { axiosInstance } from "constant";
import getAkvoSession from "./getAkvoSession";

interface ProjetResponse {
    statusCode: number;
    success: boolean;
    messages: string[];
    data: {
        rows_returned: number;
        total_rows: number;
        total_pages: number;
        has_next_page: boolean;
        has_previous_page: boolean;
        fiche: any[];
    };
}

export default async (): Promise<any[]> => {
    try {
        // Obtenir le token automatiquement
        const { accessToken } = await getAkvoSession();

        const { data } = await axiosInstance.get<ProjetResponse>(`/api-akvo/projet`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        if (!data.success) {
            throw new Error(`Erreur API projet : ${data.messages.join(", ")}`);
        }

        return data.data.fiche;
    } catch (err: any) {
        console.error("Erreur récupération projets Akvo :", err.message || err);
        return [];
    }
}