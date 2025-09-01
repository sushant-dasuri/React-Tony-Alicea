export function CounterSummaryDetail({ name, total }) {
       //name.shortName = name.shortName + ':'; // different delimiters for different languages
    const cName = {...name, shortName: name.shortName + ':'};
    return (
        <p>{cName.shortName} ({total})</p>

    )
};