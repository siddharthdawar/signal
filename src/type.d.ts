type Fgid = 'gr' | 'me' | 'mi' | 'vf';

type DirectionalStatement = {
    'directional-statement'?: string;
    fgid?: Fgid;
};

type DirectionalStatements = {
    gr: DirectionalStatement[];
    me: DirectionalStatements[];
    mi: DirectionalStatements[];
    vf: DirectionalStatements[];
};

type State = {
    directionalStatements: DirectionalStatements;
};
