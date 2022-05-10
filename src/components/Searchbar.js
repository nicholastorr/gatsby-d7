import * as React from "react"
import { Input, Menu, Dropdown, Space, SubMenu } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Document } from "flexsearch"
import { index } from "../context/flexsearch.js"
import 'antd/dist/antd.css';


const { Search } = Input;




const Searchbar = (data) => {
    const [search, setSearch] = React.useState('');
    const [result, setResult] = React.useState([]);
    const [isVisible, setIsVisible] = React.useState(false);

  

    return (
        <div>
            <div>
                <Search
                    onChange={e => {
                        setResult(index.search(e.target.value, {limit: 10, enrich: true}));
                    }}
                    placeholder="search by title, sku or keywords"
                    onSearch={value => console.log(value)}
                    style={{ width: 650 }}
                    allowClear
                    onFocus={(e) => {
                        setIsVisible(true)
                    }}
                    onBlur = {(e) => {
                        setIsVisible(false)
                    }}
                />
                <div style={{width: 650, position: "absolute", zIndex: 9999, backgroundColor: "white" }}>
                    {isVisible &&
                        result[0] ? result[0].result.map(item => {
                            return (
                                <div>
                                    <a href={`/products/${item.doc.sku}`}>
                                    <h4>{item.doc.title}</h4>
                                    <h5>{item.doc.sku}</h5>
                                    </a>
                                    </div>
                                    )
                                }
                            ) : null
                    }
                </div>
            </div>
        </div>
    )
}

export default Searchbar