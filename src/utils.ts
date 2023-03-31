export const sortDirectionalStatements = (statements: DirectionalStatement[]) => ({
    gr: statements.filter((statement) => statement.fgid === 'gr'),
    me: statements.filter((statement) => statement.fgid === 'me'),
    mi: statements.filter((statement) => statement.fgid === 'mi'),
    vf: statements.filter((statement) => statement.fgid === 'vf')
});
