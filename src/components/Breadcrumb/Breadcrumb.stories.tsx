/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import { Breadcrumb as BreadcrumbComponent } from "./Breadcrumb";
import { Meta, StoryFn } from "@storybook/react-vite";
import React, { ComponentProps, useState } from "react";
import { Button } from "../Button";
import { fn } from "storybook/test";

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
