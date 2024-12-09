/*
Copyright 2024 New Vector Ltd

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

import { Breadcrumb as BreadcrumbComponent } from "./Breadcrumb";
import { Meta, StoryFn } from "@storybook/react";
import React, { ComponentProps, useState } from "react";
import { Button } from "../Button";
import { fn } from "@storybook/test";

export default {
  title: "Breadcrumb",
  component: BreadcrumbComponent,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    pages: ["1st level page", "2nd level page", "Current page"],
    onPageClick: fn(),
    onBackClick: fn(),
    backLabel: "Back",
  },
} as Meta<typeof BreadcrumbComponent>;

const Template: StoryFn<typeof BreadcrumbComponent> = (
  args: ComponentProps<typeof BreadcrumbComponent>,
) => {
  return <BreadcrumbComponent {...args} />;
};

export const Default = Template.bind({});
Default.args = {};

function ControlledBreadcrumb(
  args: ComponentProps<typeof BreadcrumbComponent>,
) {
  const pagesContent = ["Page 1", "Page 2", "Page 3"];
  const [currentIndex, setCurrentIndex] = useState(2);
  const currentPage = pagesContent[currentIndex];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        alignItems: "flex-start",
      }}
    >
      <BreadcrumbComponent
        backLabel="Back"
        pages={args.pages.slice(0, currentIndex + 1)}
        onPageClick={(_page, index) => setCurrentIndex(index)}
        onBackClick={() =>
          setCurrentIndex((_currentIndex) =>
            _currentIndex === 0 ? 0 : _currentIndex - 1,
          )
        }
      />
      {currentPage}
      <Button onClick={() => setCurrentIndex(2)}>Reset</Button>
    </div>
  );
}

export const Controlled: StoryFn<typeof BreadcrumbComponent> = (
  args: ComponentProps<typeof BreadcrumbComponent>,
) => {
  return <ControlledBreadcrumb {...args} />;
};
