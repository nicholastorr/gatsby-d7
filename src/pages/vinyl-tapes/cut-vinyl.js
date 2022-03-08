import Header from "../../components/header"
import * as React from 'react';

//hardcoded
const vinylCats = [
    {
        "title": "Calendered Vinyl",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/807.jpg",
    },
    {
        "title": "Cast Vinyl",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/808.jpg",
    },
    {
        "title": "Metallic Vinyl",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/809.jpg",
    },
    {
        "title": "Reflective Vinyl",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/1046.jpg",
    },
    {
        "title": "Specialty Vinyl",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/810.jpg",
    },
    {
        "title": "Translucent Vinyl",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/811.jpg",
    },
    {
        "title": "Fluorescent",
        "image": "https://mbs-signsupply.com/sites/all/themes/bootstrap_supply/images/tbmenu/805/859.jpg",
    },
]

const CutVinyl = () => {
    return (
        <div style={{width: "100%"}}>
            <Header />
            <div style={{width: "70%", marginLeft: "auto", marginRight: "auto", marginTop: "75px"}}>
                <h1 style={{borderBottom: "thick solid gray"}}>Browse Sub Category</h1>
                <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr"}}>
                    {vinylCats.map((cat, i) => {
                        return (
                            <div key={i} style={{textAlign: "center", marginLeft: "auto", marginRight: "auto"}}>
                                <a href={`/${cat.title.replace(' ', '-').toLowerCase()}`}>
                                    <img src={cat.image} alt={cat.title} width={276} height={276} />
                                    <h2 style={{border: "thin solid gray", width: "276px"}}>{cat.title}</h2>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div style={{width: "70%", marginLeft: "auto", marginRight: "auto"}}>
                <h1>Cut Vinyl</h1>
            </div>
        </div>
    )
}

export default CutVinyl;