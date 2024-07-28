import { useContext, useMemo, useState } from "react"
import { FavoritesContext } from "../../context"
import { MovieType } from "../movies/service"
import { PieChart } from "@mui/x-charts"
import { Button } from "@mui/material";

function getMapping(k: string): string {
    if (k === 'game') return "Games";
    if (k === 'movie') return "Movies";
    if (k === 'series') return "Sdarot";
    return k
}

export default function StatisticsPage() {
    const context = useContext(FavoritesContext)
    const [filters, setFilters] = useState({ Movies: true, Games: true, Sdarot: true, All: true })

    const calc = useMemo(() => {
        console.log("Calculation run.....")
        return Math.random() * 99;
    }, [filters.Games])

    const result = context.favorites.reduce((obj: { [key: string]: number }, currentItem: MovieType) => {
        const t = currentItem.Type
        if (obj[t]) {
            obj[t] = obj[t] + 1
        } else {
            obj[t] = 1
        }
        return obj;
    }, {})

    const adaptedResult = Object.entries(result).map(([k, v], index) => {
        return { id: index, value: v, label: getMapping(k) }
    })

    const adaptedResult2 = filters.Movies ? adaptedResult : adaptedResult.filter(item => item.label !== "Movies")
    const adaptedResult3 = filters.Games ? adaptedResult2 : adaptedResult2.filter(item => item.label !== "Games")
    const adaptedResult4 = filters.Sdarot ? adaptedResult3 : adaptedResult3.filter(item => item.label !== "Sdarot")
    return < div >
        <div>
            {calc}
            <Button onClick={() => {
                setFilters({ Movies: true, Games: true, Sdarot: true, All: true })
            }}> All  </Button>
            {adaptedResult.map(i => {
                return <Button onClick={() => {
                    setFilters({ ...filters, [i.label]: !filters[i.label] })
                }} >{i.label}</Button>
            })}
        </div>
        {JSON.stringify(filters)}
        <PieChart
            series={[
                {
                    data: adaptedResult4,
                },
            ]}
            width={600}
            height={300}
        />
    </div >
}