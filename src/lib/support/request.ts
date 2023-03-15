async function handleResponse<T>(resp: Response): Promise<T> {
    if (!resp.ok) {
        throw Error(`Response status is ${resp.status} ${resp.statusText}`);
    }
    return await resp.json();
}

export function buildUrl(baseUrl: string, params: URLSearchParams): string {
    return baseUrl + '?' + params.toString();
}

export async function request<T>(url: string): Promise<T> {
    const resp: Response = await fetch(url);
    return handleResponse(resp);
}
