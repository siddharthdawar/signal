import Papa from 'papaparse';

export const fetchDirectionalStatements = async () => {
    try {
        const file = await fetch('./data/fg_directional_satements-en_ONPP.csv');

        if (file.body) {
            const decoder = new TextDecoder('utf-8');

            const reader = file.body.getReader();
            const result = await reader.read();
            const csv = decoder.decode(result.value);
            const results = Papa.parse(csv, {header: true});

            return results.data
        }
    } catch (e) {
        console.log(e);
    }
};
