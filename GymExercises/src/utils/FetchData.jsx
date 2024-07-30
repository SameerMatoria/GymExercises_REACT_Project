export const exerciseOptions = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '68c4572fc3mshcab5db2180a6eacp1114b9jsnf4edfbc534ce',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
    };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = response.json();
    return data;
}