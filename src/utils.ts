export const sortItems = (items: any[]) => ({
    gr: items.filter((item) => item.fgid === 'gr'),
    me: items.filter((item) => item.fgid === 'me'),
    mi: items.filter((item) => item.fgid === 'mi'),
    vf: items.filter((item) => item.fgid === 'vf'),
});

export const getDropdownOptions = (items: ServingPerDay[]) => {
    const tempGendersArray: string[] = [];
    const tempAgesArray: string[] = [];

    items.forEach((item) => {
        if (item.gender) {
            tempGendersArray.push(item.gender);
        }

        if (item.ages) {
            tempAgesArray.push(item.ages);
        }
    });

    return ({
        ageOptions: Array.from(new Set(tempAgesArray)),
        genderOptions: Array.from(new Set(tempGendersArray))
    });
};
