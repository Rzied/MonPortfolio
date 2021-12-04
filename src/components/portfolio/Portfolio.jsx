import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
    featuredPortfolio,
    frameworksPortfolio,
    jSPortfolio,
    phpPortfolio,
    contentPortfolio,
} from "../../data";

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    // console.log(data);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedId, setSelectedId] = useState();
    // console.log(selectedId);
    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "frameworks",
            title: "Frameworks",
        },
        {
            id: "jS",
            title: "JavaScript App",
        },
        {
            id: "php",
            title: "PHP App",
        },
        {
            id: "content",
            title: "Content",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredPortfolio);
                break;
            case "frameworks":
                setData(frameworksPortfolio);
                break;
            case "jS":
                setData(jSPortfolio);
                break;
            case "php":
                setData(phpPortfolio);
                break;
            case "content":
                setData(contentPortfolio);
                break;
            default:
                setData(featuredPortfolio);
        }
    }, [selected]);
    function handleInfo(id) {
        setShowInfo(!showInfo);
        setSelectedId(id);
        // console.log(showInfo);
        // console.log(id);
        // console.log(data[1].title);
        // console.log(data[id].title);
        // console.log(window.myvar);
        // console.log(window.myvar.img);
    }
    function ouInfo() {
        setShowInfo(!showInfo);
    }
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                        key={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id} onClick={() => handleInfo(d.id)}>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}

                {showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2 onClick={ouInfo}>{data[selectedId - 1]?.title}</h2>
                                <div className="sourceCode">
                                    <a
                                        href={`${data[selectedId - 1]?.source}`}
                                        rel="noopener noreferrer"
                                        className="button"
                                        target="_blank"
                                    >
                                        Code Source
                                    </a>
                                </div>
                            </div>
                            <p className="text">{data[selectedId - 1]?.info}</p>
                            <div className="demo">
                                {data[selectedId - 1].demo && (
                                    <a
                                        href={data[selectedId - 1]?.demo}
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        Demo
                                    </a>
                                )}
                            </div>
                            <div className="corp" onClick={ouInfo}>
                                <img src={data[selectedId - 1]?.img} alt="pic de projet" />
                            </div>
                            <div className="button return" onClick={ouInfo}>
                                Retour
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
