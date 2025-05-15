import ErrorMessage from "../../types/ErrorMessage";

async function deleteRequest<T>(url: string, query?: Record<string, string>): Promise<T | ErrorMessage> {
    try {
        let fullUrl: string
        query ? fullUrl = `${url}?${(new URLSearchParams(query)).toString()}` : fullUrl = url
        const response = await fetch(fullUrl, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error)
        return { error: true, message: (error as Error).message }
    }
}

export default deleteRequest