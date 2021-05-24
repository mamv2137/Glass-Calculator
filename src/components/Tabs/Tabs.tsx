import { useState } from 'react';
import Tab from './Tab';
import StyledTabs from './Tabs.styles';

interface Props {}

const Tabs = (props: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const tabsText = ['pomodoro', 'short break', 'long break'];

  const renderTabs = () =>
    tabsText.map((text, index) => (
      <Tab
        key={text}
        onClick={() => setSelectedTab(index)}
        isActive={selectedTab === index}>
        {text}
      </Tab>
    ));
  return <StyledTabs className="">{renderTabs()}</StyledTabs>;
};

export default Tabs;
