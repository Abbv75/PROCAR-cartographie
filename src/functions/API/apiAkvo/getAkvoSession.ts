// apiAkvo/session.ts
import { axiosInstance, REACT_APP_API_AKVO_USER } from "constant";
import { SessionResponse_T } from "types";

export default async () => {
    try {
        const { data } = await axiosInstance.post<SessionResponse_T>(
            `/api-akvo/sessions`,
            {
                username: REACT_APP_API_AKVO_USER.username,
                password: REACT_APP_API_AKVO_USER.password
            },
        );

        const { access_token, session_id } = data.data;

        if (!access_token) throw new Error("Impossible de récupérer l'access_token");

        return { accessToken: access_token, sessionId: session_id };
    } catch (err: any) {
        console.error("Erreur session Akvo :", err.message || err);
        throw err;
    }
}
