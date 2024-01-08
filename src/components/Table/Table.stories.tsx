/*
Copyright 2023 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";

import { Table, TableSpec } from "./Table";
import { TableCell } from "./TableCell";
import { TableFilter, TableHeadline } from ".";

export default {
  title: "Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
  },
  args: {
  },
} as Meta<typeof Table>;

interface SimpleTableItem {
  name: string,
  flavor: string,
  [value: string]: string;
}

const Template: StoryFn<typeof Table> = (args) => {
  const tableSpec: TableSpec<SimpleTableItem> = {
      columns: [
          {
              id: 'name',
              cell: ({ item }) => (
                <TableCell> { item.name } </TableCell>
              ),
              title: 'Name',
          },
          {
              id: 'flavor',
              cell: ({ item }) => <TableCell>{item.flavor}</TableCell>,
              title: 'Flavor',
          },
      ],
      getItemId: (i) => i.name,
  };
  
  const items = [{
    name: 'Chili 🌶️',
    flavor: 'Spicy',
  }];

  return <Table spec={tableSpec} items={items} />
};

export const Primary = Template.bind({});
Primary.args = {};

export const WithHeader: StoryFn<typeof Table> = (args) => {
  const tableSpec: TableSpec<SimpleTableItem> = {
      columns: [
          {
              id: 'name',
              cell: ({ item }) => (
                <TableCell> { item.name } </TableCell>
              ),
              title: 'Name',
          },
          {
              id: 'flavor',
              cell: ({ item }) => <TableCell>{item.flavor}</TableCell>,
              title: 'Flavor',
          },
      ],
      getItemId: (i) => i.name,
  };
  
  const items = [{
    name: 'Chili 🌶️',
    flavor: 'Spicy',
  }];
  return <>
    <TableHeadline fromItem={0} toItem={0} totalItems={50} title="My Title" />
    <Table spec={tableSpec} items={items} />
  </>;
};

export const WithHeaderAndFilter: StoryFn<typeof Table> = (args) => {
  const tableSpec: TableSpec<SimpleTableItem> = {
      columns: [
          {
              id: 'name',
              cell: ({ item }) => (
                <TableCell> { item.name } </TableCell>
              ),
              title: 'Name',
          },
          {
              id: 'flavor',
              cell: ({ item }) => <TableCell>{item.flavor}</TableCell>,
              title: 'Flavor',
          },
      ],
      getItemId: (i) => i.name,
  };
  
  const items = [{
    name: 'Chili 🌶️',
    flavor: 'Spicy',
  }];

  const [filterForSauces, setFilterForSauces] = useState(false);

  const filters: TableFilter[] = [{
    id: 'sauces',
    disabled: false,
    label: 'Only Sauces',
    value: filterForSauces,
    setValue: () => setFilterForSauces(!filterForSauces),
  }];
  return <>
    <TableHeadline fromItem={0} toItem={0} totalItems={50} title="My Title" filters={filters} />
    <Table spec={tableSpec} items={items} />
  </>;
};