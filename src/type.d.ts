type Fgid = 'gr' | 'me' | 'mi' | 'vf';

type FoodClass = 'Grains' | 'Meat and Alternatives' | 'Milk and Alternatives' | 'Vegetables and Fruit';

type DirectionalStatement = {
    'directional-statement': string;
    fgid: Fgid;
};

type FoodGroup = {
    fgcat: string;
    fgcat_id: string;
    fgid: Fgid;
    foodGroup: FoodClass;
};

type ServingPerDay = {
    ages: string;
    fgid: Fgid;
    gender: Gender;
    servings: string;
}

type Food = {
    fgcat_id: string;
    fgid: Fgid;
    food: string;
    srvg_sz: string;
}

type Foods = {
    gr: Food[];
    me: Food[];
    mi: Food[];
    vf: Food[];
};

type DataToDisplay = {
    servings: ServingPerDay[];
};

type State = {
    age: string;
    ageOptions: string[];
    dataToDisplay: DataToDisplay | undefined;
    directionalStatements: DirectionalStatement[];
    foodGroups: FoodGroup[];
    foods: Foods;
    gender: string;
    genderOptions: string[];
    servingsPerDay: ServingPerDay[];
};
