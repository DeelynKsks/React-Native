export const library = {
    consume: async (url) => {
        const consulta = await fetch(url, {mode: "cors"})
                .then(a => a.json())
                .then(a => a.Results)
                .then(a => {
                    for (let i = 0; i < a.length; i++) {
                        let img = '';
                        if (a[i].Icon !== '') {
                            img = a[i].Icon
                            let imgCut = img.split('.')
                            img = `https://xivapi.com${imgCut[0]}_hr1.png`
                        }
                        a[i].urlImage = img
                    }
                    return(a)
                })
                .catch(err => console.log(err))
        return consulta
    }
}