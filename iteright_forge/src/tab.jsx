import ForgeUI, {
  render,
  Fragment,
  Text,
  IssuePanel,
  IssueActivity,
} from "@forge/ui";

const App = () => {
  return (
    <Fragment>
      <Text>Hello iteright!</Text>
    </Fragment>
  );
};

export const run = render(
  <IssueActivity>
    <App />
  </IssueActivity>
);
