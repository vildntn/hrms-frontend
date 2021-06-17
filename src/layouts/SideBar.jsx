import React from "react";
import { Menu ,Dropdown} from "semantic-ui-react";
export default function Categories() {
  return (
    <div>
      <Menu inverted icon="labeled" vertical>
        <Menu.Item name="Staff List" />
        <Menu.Item name="Employer List " />
        <Menu.Item name="Candidate List" />
      </Menu>
      {/* <div>
        <div>
          <div>
          <Dropdown placeholder='State' search selection  />
          </div>
          <div>
          <Dropdown placeholder='State' search selection  />
          </div>
        </div>
        <div></div>
        <div></div>
      </div> */}
    </div>
  );
}
