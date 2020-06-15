class DataSource {
    static searchCountry(keyword) {
        return fetch(`https://covid19.mathdro.id/api/countries/${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
    static listSelect() {
        return fetch(`https://covid19.mathdro.id/api/countries`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.countries) {
                    return Promise.resolve(responseJson.countries);
                } else {
                    return Promise.reject(`Countries is not found`)
                }
            })
    }
}

export default DataSource;