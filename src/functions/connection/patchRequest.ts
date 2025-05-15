import ErrorMessage from "../../types/ErrorMessage";

async function patchRequest<T, U>(url: string, body: U, query?: Record<string, string>): Promise<T | ErrorMessage> {
    try {
        let fullUrl: string;
        query ? fullUrl = `${url}?${(new URLSearchParams(query)).toString()}` : fullUrl = url;
        const response = await fetch(fullUrl, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Erro:", error);
        return { error: true, message: (error as Error).message }
    }
}

export default patchRequest;