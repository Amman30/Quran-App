

export const post1 = (url, data, headers = {}, extras = []) => {
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...headers
        },
        body: JSON.stringify(data),
        ...extras
    }).then(response => response.json());
}

