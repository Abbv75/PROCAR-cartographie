// apiAkvo/session.ts
import { axiosInstance } from "constant";

interface SessionResponse {
    statusCode: number;
    success: boolean;
    messages: string[];
    data: {
        session_id?: number;
        access_token: string;
        access_token_expires_in?: number;
        refresh_token?: string;
        refresh_token_expires_in?: number;
    };
}

const USERNAME = "api-procar";
const PASSWORD = "Jeunes_213";

export async function getAkvoSession(): Promise<{ accessToken: string; sessionId?: number }> {
    try {
        const res = await axiosInstance.post<SessionResponse>(
            `/api-akvo/sessions`,
            { username: USERNAME, password: PASSWORD },
        );

        const { access_token, session_id } = res.data.data;

        if (!access_token) throw new Error("Impossible de récupérer l'access_token");

        return { accessToken: access_token, sessionId: session_id };
    } catch (err: any) {
        console.error("Erreur session Akvo :", err.message || err);
        throw err;
    }
}
