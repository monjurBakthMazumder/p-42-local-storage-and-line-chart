const GetData = () => {
    const getDataStore = localStorage.getItem("data")
    if(getDataStore){
        return JSON.parse(getDataStore)
    }
    return {
        "Bangladesh_male" : "5717",
        "Bangladesh_female" : "9604",
        "India_male" : "6626",
        "India_female" : "8247",
        "Indonesia_male" : "9366",
        "Indonesia_female" : "8333",
        "Pakistan_male" : "6089",
        "Pakistan_female" : "4013",
        "China_male" : "7140",
        "China_female" : "6752",
        "Japan_male" : "6421",
        "Japan_female" : "8571",
        "Vietnam_male" : "5135",
        "Vietnam_female" : "3422",
        "Philippines_male" : "5480",
        "Philippines_female" : "5433",
        "Turkey_male" : "4092",
        "Turkey_female" : "5104",
        "Thailand_male" : "3405",
        "Thailand_female" : "2449",
        "Myanmar_male" : "2612",
        "Myanmar_female" : "2097",
        "South_male" : "5569",
        "South_female" : "2556",
    }
}
const SavedData = (name, value) => {
    const dataStore = GetData();
        if (dataStore.hasOwnProperty(name)) {
            dataStore[name] = value;
            localStorage.setItem("data", JSON.stringify(dataStore));
        }
}

export {GetData, SavedData}