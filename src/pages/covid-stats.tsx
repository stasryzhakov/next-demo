import { GetStaticPropsContext } from 'next';

type GlobalData = {
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: Date;
};

type SummaryType = { Global: GlobalData };

enum MonthConverter {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December,
}

export default function CovidStats({ summary }: { summary: SummaryType }) {
    const {
        Global: { Date: date, NewConfirmed: newCasesAmount },
    } = summary;

    const day = new Date(date).getDate();
    const month = MonthConverter[new Date(date).getMonth()];
    const year = new Date(date).getFullYear();

    return (
        <div>
            As of {month} {day} of {year} The amount of new confirmed cases in the world is {newCasesAmount}
        </div>
    );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const res = await fetch('https://api.covid19api.com/summary');
    const summary = await res.json();

    return {
        props: {
            summary,
        },
    };
};
