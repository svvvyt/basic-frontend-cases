import React from "react";

import { MyInput } from "./Input/MyInput";
import { MySelect } from "./Select/MySelect";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск по названию"
        value={filter.searchValue}
        onChange={(e) => setFilter({ ...filter, searchValue: e.target.value })}
      />
      <MySelect
        value={filter.sortType}
        onChange={(sortType) => setFilter({ ...filter, sortType: sortType })}
        defaultValue="Сортировать"
        options={[
          { name: "По названию", value: "title" },
          { name: "По описанию", value: "body" },
        ]}
      />
    </div>
  );
};
