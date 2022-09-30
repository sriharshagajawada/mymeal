import Paper from "@material-ui/core/Paper";

const Pap = (props) => {
  const { wid, hei } = props;

  return <Paper style={{ width: { wid }, height: { hei } }}></Paper>;
};
export default Pap;
