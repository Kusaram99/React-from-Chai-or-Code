import { useEffect, useState } from "react"


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // console.log("fetching data for: ", currency);
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json        `)
            .then((res) => {
                console.log("response: ", res)
                return res.json()})
            .then((res) => setData(res[currency]))
            .catch((err) => {
                // setData({})
                console.log("serve error: ", err)
            });
        console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;