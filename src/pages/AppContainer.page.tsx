import { FC, memo } from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './Dashboard.page';
import RecordingsPage from './Recording.page';
import Sidebar from '../components/Sidebar';
import Lecture from './Lecture.page';

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-row justify-between">
      <Sidebar></Sidebar>

      <Switch>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>

        <Route path="/recordings">
          <RecordingsPage></RecordingsPage>
        </Route>

        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
          <Lecture></Lecture>
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
