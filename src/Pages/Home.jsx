import React, { useEffect, useState } from 'react';
import { Table, Select, Input, Space } from 'antd';

import './Home.scss'


const BASE_URL = 'https://api.sampleapis.com/rickandmorty/';

export default function Home() {
  const [RickMorty, setRickMorty] = useState([])
  const [mainCharacter, setMainCharacter] = useState('characters')
  const [sortType, setSortType] = useState()
  // const [searchWords, setSearchWords] = useState()

  const { Search } = Input;
  const { Option } = Select;

  useEffect(() => {
    fetchRickMorty();
  }, [mainCharacter]);

  useEffect(() => {
    fetchRickMorty();
  }, [sortType]);

  
  // useEffect(() => {
  //   fetchRickMorty();
  // }, [searchWords]);



  const fetchRickMorty = () => {
    fetch(`${BASE_URL}/${mainCharacter}`)
      .then(resp => resp.json())
      .then(data => setRickMorty(data));
  }

  const onChange = (value) => {
    setMainCharacter(value);
  }

  // const onChangeName = (sort) => {
  //   setSearchWords(sort)
  // }
  
  // console.log('sortType', sortType)

  const onSearch = value => {
      console.log(value);
  }
  

  console.log('mainCharacter', mainCharacter);


  console.log('RickMorty', RickMorty)

  const columns = [
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',

      onFilter: (value, record) => record.gender.indexOf(value) === 0,
      sorter: (a, b) => a.gender.length - b.gender.length,
      sortDirections: ['descend'],

    },
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image) => (
        <img src={image} alt="" width={100} />
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],

    },
    {
      title: 'Origin',
      dataIndex: 'origin',
    },
    {
      title: 'Type',
      dataIndex: 'type',
    },

    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'Episode',
      dataIndex: 'episode',
    },

    {
      title: 'Air date',
      dataIndex: 'air_date',
    },
    {
      title: 'Season',
      dataIndex: 'season',
    },
    {
      title: 'Dimension',
      dataIndex: 'dimension',
    },

  ];


  // function onChange(pagination, filters, sorter, extra) {
  //   console.log('params', pagination, filters, sorter, extra);
  // }

  return (

    <div className='container'>


      <Select
        placeholder="Sorting by name"
        onChange={onChange}

      >
        <Option value="characters">Characters</Option>
        <Option value="episodes">Episodes</Option>
        <Option value="locations">Locations</Option>
      </Select>

      <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
      {/* <Search placeholder="input search text" onSearch={onChange} enterButton /> */}

      {/* <Select
        placeholder="Sorting"
        onChange={onChangeName}
      >
        <Option value="asc">ASC</Option>
        <Option value="desc">DESC</Option>
      </Select> */}



      <Table columns={columns} dataSource={RickMorty} onChange={onChange} />
    </div>
  )
}






