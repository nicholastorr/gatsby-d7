import * as React from "react"
import { Input, Menu, Dropdown, Space, SubMenu } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Document } from "flexsearch"
import 'antd/dist/antd.css';


const { Search } = Input;




const Searchbar = (data) => {
    const [search, setSearch] = React.useState('');
    const [result, setResult] = React.useState([]);

    console.log(result);

    return (
        <div>
            <div>
                <Search
                    onChange={e => {
                        setResult(data.data.search(e.target.value, {limit: 10, enrich: true}));
                    }}
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <div>
                    {result[0] ? result[0].result.map(item => {
                        return (
                            <div>
                                <h4>{item.doc.title}</h4>
                                <h5>{item.doc.sku}</h5>
                                </div>
                                )
                            }
                        ) : null}
                </div>
            </div>
        </div>
    )
}

export default Searchbar