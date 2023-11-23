export default class API {
    static _getData(url) {
        return fetch(url)
            .then((res) => {
                return res.json();
            })
    }
}