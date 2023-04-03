const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        body: data
    });

    return await res.text();
};

const getResource = async (url, query) => {
    let res = await fetch(url, {
        method: 'GET',
        headers: {
            'X-Gismeteo-Token': '56b30cb255.3443075',
            'Accept-Encoding': 'gzip'
        },
        body: query
    });

    if (!res.ok) {
        throw new Error(`could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
};

export {postData, getResource};