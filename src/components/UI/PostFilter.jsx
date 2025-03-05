import React from 'react'
import MySelect from './select/MySelect'
import MyInput from './Input/MyInput'

function PostFilter({filter, setFilter}) {
  return (
    <div>
        <MyInput
        value={filter.query} 
        onChange={e => setFilter({...filter, query: e.target.value})} 
        placeholder="поиск" 
          />
        <MySelect value={filter.sort}
          onChange={selectedSort=>setFilter({...filter, sort: selectedSort})}
          defaultValue="Сортировка" options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]} />
      </div>
  )
}

export default PostFilter