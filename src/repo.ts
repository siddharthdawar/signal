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

export const fetchFoodGroups = async () => {
    try {
        const file = await fetch('./data/foodgroups-en_ONPP.csv');

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

export const fetchServingsPerDay = async () => {
    try {
        const file = await fetch('./data/servings_per_day-en_ONPP.csv');

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

export const fetchFoods = async () => {
    try {
        const file = await fetch('./data/foods-en_ONPP_rev.csv');

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
